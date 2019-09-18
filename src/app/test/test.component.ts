import { element } from "protractor";
import { Component, OnInit } from "@angular/core";
import { WarehouseService } from "../warehouse.service";
import { Order } from "../builder/order.model";
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

  constructor(private warehouseServise: WarehouseService) {}

  ngOnInit() {}
  build() {
    this.sub = this.warehouseServise.assembleTest().subscribe(elements => {
      this.testElements = elements.forEach((el, idx) => {
        this.testStr += `\n${idx + 1}. ${el}\n`;
      });
    });
  }
}