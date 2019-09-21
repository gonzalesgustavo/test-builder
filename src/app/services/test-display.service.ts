import { TestResponse } from "./test-response.model";
import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { take, tap } from "rxjs/operators";
import { TestDisplayItems } from "./disp.model";

@Injectable({
  providedIn: "root"
})
export class TestDisplayService {
  private _test = new BehaviorSubject<TestDisplayItems[]>([]);

  constructor() {}

  get test() {
    return this._test.asObservable();
  }
  edit(id: number, data: TestResponse) {
    let itemIndex;
    return this.test.pipe(
      take(1),
      tap(elements => {
        //get index
        let index;
        elements.forEach((el, idx) => {
          if (el.id === id) {
            index = idx;
          }
        });
        let compiledStr;
        switch (data.type) {
          case "Math":
            compiledStr = `${data.payload.attrOne} ${data.payload.symbol} ${data.payload.attrTwo} = ____________`;
            break;
          case "Fraction":
            compiledStr = `${data.payload.attrOne} ${data.payload.symbol} ${data.payload.attrTwo} = ____________`;
            break;
          case "Paragraph":
            compiledStr = `${data.payload.text}\n\n\n`;
            break;
          default:
            break;
        }
        elements.map(el => {
          if (el.id === id) {
            el.testItem = compiledStr;
          }
          return el;
        });
        this._test.next(elements);
      })
    );
  }

  delete(id: number) {
    return this.test.pipe(
      take(1),
      tap(el => {
        let newList = el.filter(el => {
          return el.id !== id;
        });
        this._test.next(newList);
      })
    );
  }

  create(addedStr: TestDisplayItems) {
    return this._test.pipe(
      take(1),
      tap(element => {
        element.push(addedStr);
        this._test.next(element);
      })
    );
  }
}
