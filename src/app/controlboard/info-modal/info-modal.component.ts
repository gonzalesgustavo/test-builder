import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-info-modal",
  templateUrl: "./info-modal.component.html",
  styleUrls: ["./info-modal.component.scss"]
})
export class InfoModalComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<InfoModalComponent>) {}

  ngOnInit() {}
  handleOnClose() {
    this.dialogRef.close();
  }
}
