import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { TestResponse } from "./test-response.model";
import { switchMap, take, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class TestBuilderService {
  private _testElements = new BehaviorSubject<TestResponse[]>([
    new TestResponse(12344, "Math", {
      attrOne: "1",
      symbol: "+",
      attrTwo: "4"
    })
  ]);

  constructor() {}

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

  delete(id: number) {
    return this._testElements.pipe(
      take(1),
      switchMap(tElements => {
        let newTElements = tElements.filter(el => {
          return el.id !== id;
        });
        console.log(newTElements);
        this._testElements.next(newTElements);
        return tElements;
      })
    );
  }
}
