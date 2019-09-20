import { TestDisplayService } from "./../services/test-display.service";
import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { Subscription } from "rxjs";

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

  ngOnInit() {
    this.sub = this.testDispService.test.subscribe(testStr => {
      this.testStr = "";
      this.testElements = testStr.forEach((el, idx) => {
        this.testStr += `${idx + 1}. ${el.testItem}\n\n`;
      });
    });
  }
  build() {}

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
