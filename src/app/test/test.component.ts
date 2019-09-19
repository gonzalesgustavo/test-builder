import { TestDisplayItems } from "src/app/services/disp.model";
import { TestDisplayService } from "./../services/test-display.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
  testElements;
  testStr = "";
  private sub: Subscription;

  constructor(private testDispService: TestDisplayService) {}

  ngOnInit() {}
  build() {
    this.testStr = "";
    this.sub = this.testDispService.test.pipe(take(1)).subscribe(testStr => {
      this.testElements = testStr.forEach((el, idx) => {
        this.testStr += `${idx}. ${el.testItem}`;
      });
    });
  }
}
