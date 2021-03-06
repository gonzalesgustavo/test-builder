import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { BuildermodalComponent } from "../builder/buildermodal/buildermodal.component";
import { InfoModalComponent } from "./info-modal/info-modal.component";

@Component({
  selector: "app-controlboard",
  templateUrl: "./controlboard.component.html",
  styleUrls: ["./controlboard.component.scss"]
})
export class ControlboardComponent implements OnInit {
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
  handleInfoBtnClick() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.height = "700px";
    dialogConfig.width = "700px";

    this.dialog.open(InfoModalComponent, dialogConfig);
  }
}
