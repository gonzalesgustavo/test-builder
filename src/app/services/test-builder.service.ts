import { element } from "protractor";
import { TestDisplayService } from "./test-display.service";
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { TestResponse } from "./test-response.model";
import { switchMap, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TestBuilderService {
  private _testElements = new BehaviorSubject<TestResponse[]>([]);

  constructor(private testDispService: TestDisplayService) {}

  get testElements() {
    return this._testElements.asObservable();
  }

  add(testItem: TestResponse) {
    return this._testElements.pipe(
      take(1),
      tap(tElements => {
        tElements.push(testItem);
        this._testElements.next(tElements);
      })
    );
  }

  edit(id: number, data: TestResponse) {
    this.testDispService.test.subscribe();
    let itemIdx;
    return this._testElements.pipe(
      take(1),
      tap(element => {
        //get index
        let index;
        element.forEach((el, idx) => {
          if (el.id === id) {
            index = idx;
          }
        });
        //access elements index
        element.map(el => {
          if (el.id === id) {
            el.type = data.type;
            el.payload.attrOne = data.payload.attrOne;
            el.payload.symbol = data.payload.symbol;
            el.payload.attrTwo = data.payload.attrTwo;
          }
          return el;
        });
        this.testDispService.edit(id, data).subscribe();
        this._testElements.next(element);
      })
    );
  }
  delete(id: number) {
    return this._testElements.pipe(
      take(1),
      switchMap(tElements => {
        let newTElements = tElements.filter((el, idx) => {
          return el.id !== id;
        });
        this._testElements.next(newTElements);
        return tElements;
      })
    );
  }
}
