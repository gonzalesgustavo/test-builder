import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-builder",
  templateUrl: "./builder.component.html",
  styleUrls: ["./builder.component.scss"]
})
export class BuilderComponent implements OnInit {
  @Output("buildCommand") build = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  handleBuildBtn() {
    this.build.emit("build");
  }
}
