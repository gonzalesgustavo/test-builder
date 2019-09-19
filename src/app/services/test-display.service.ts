import { element } from "protractor";
import { TestBuilderService } from "./test-builder.service";
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
