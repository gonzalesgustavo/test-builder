import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { BuildermodalComponent } from "../builder/buildermodal/buildermodal.component";
import { InfoModalComponent } from "./info-modal/info-modal.component";
import { IpcRenderer } from "electron";

import { TestDisplayService } from "../services/test-display.service";
import { take } from "rxjs/operators";
import { ClipboardService } from "ngx-clipboard";

@Component({
  selector: "app-controlboard",
  templateUrl: "./controlboard.component.html",
  styleUrls: ["./controlboard.component.scss"]
})
export class ControlboardComponent implements OnInit {
  private ipc: IpcRenderer;
  msg: string = "";
  constructor(
    private dialog: MatDialog,
    private _testDispService: TestDisplayService,
    private _clipboardService: ClipboardService
  ) {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require("electron").ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn("App not running inside Electron!");
    }
  }

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

  handleCopy() {
    this._clipboardService.configure({ cleanUpAfterCopy: true });
    this._testDispService.test.pipe(take(1)).subscribe(elements => {
      let test = "";
      elements.forEach((el, idx) => {
        test += `${idx + 1}. ${el.testItem}\n\n`;
      });
      this._clipboardService.copyFromContent(test);
      alert("Test has been coppied to clipboard");
    });
  }

  handleBuild() {
    this._testDispService.test.pipe(take(1)).subscribe(elements => {
      let test = "";
      elements.forEach((el, idx) => {
        test += `${idx + 1}. ${el.testItem}\n\n`;
      });
      this.ipc.send("test", test);
      this.ipc.on("error", (ev, ar) => {
        alert(ar);
      });
      this.ipc.on("success", (ev, ar) => {
        alert(ar);
      });
    });
  }
}
