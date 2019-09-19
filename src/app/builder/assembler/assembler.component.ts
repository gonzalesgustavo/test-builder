import { TestResponse } from "./../../services/test-response.model";
import { TestBuilderService } from "./../../services/test-builder.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { WarehouseService } from "src/app/warehouse.service";
import { Order } from "../order.model";

@Component({
  selector: "app-assembler",
  templateUrl: "./assembler.component.html",
  styleUrls: ["./assembler.component.scss"]
})
export class AssemblerComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public testElements: TestResponse[];

  constructor(private testService: TestBuilderService) {}

  ngOnInit() {
    this.sub = this.testService.testElements.subscribe(tElements => {
      this.testElements = tElements;
    });
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
