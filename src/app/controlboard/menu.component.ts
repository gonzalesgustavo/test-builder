import { WarehouseService } from "./../warehouse.service";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { BuildermodalComponent } from "../builder/buildermodal/buildermodal.component";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  handleControlBtnClick(type: string) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.height = "700px";
    dialogConfig.width = "700px";
    dialogConfig.data = {
      id: Math.floor(Math.random() * 10000000),
      type
    };

    this.dialog.open(BuildermodalComponent, dialogConfig);
  }
}
