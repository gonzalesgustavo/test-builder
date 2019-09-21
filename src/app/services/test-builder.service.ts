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
        element.map((el, idx) => {
          itemIdx = idx;
          return el.id === id;
        });
        //set item values to incoming values
        let edited: TestResponse;
        if (data.type === "Math" || data.type === "Fraction") {
          edited = {
            id: id,
            type: data.type,
            payload: {
              attrOne: data.payload.attrOne,
              symbol: data.payload.symbol,
              attrTwo: data.payload.attrTwo,
              text: data.payload.text
            }
          };
        } else {
          edited = {
            id: id,
            type: data.type,
            payload: {
              text: data.payload.text
            }
          };
        }
        element.splice(itemIdx, 1, edited);
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
