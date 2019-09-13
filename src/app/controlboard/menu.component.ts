import { WarehouseService } from "./../warehouse.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  constructor(private warehouseService: WarehouseService) {}

  ngOnInit() {}

  handleControlBtnClick(type: string) {
    this.warehouseService.addCommand(type).subscribe(() => {
      console.log("done");
    });
  }
}
