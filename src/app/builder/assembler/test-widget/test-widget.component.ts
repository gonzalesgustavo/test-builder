import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-test-widget",
  templateUrl: "./test-widget.component.html",
  styleUrls: ["./test-widget.component.scss"]
})
export class TestWidgetComponent implements OnInit {
  @Input("inType") type: string;
  public bgColor: string;
  public symbol: string;
  constructor() {}

  ngOnInit() {
    switch (this.type) {
      case "add":
        this.bgColor = "addition";
        this.symbol = "+";
        break;
      case "sub":
        this.bgColor = "subtraction";
        this.symbol = "-";
        break;
      default:
        break;
    }
  }
}
