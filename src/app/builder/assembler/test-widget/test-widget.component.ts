import { TestBuilderService } from "./../../../services/test-builder.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "test-widget",
  templateUrl: "./test-widget.component.html",
  styleUrls: ["./test-widget.component.scss"]
})
export class TestWidgetComponent implements OnInit {
  @Input("id") id: number;
  @Input("type") type: string;
  @Input("symbol") symbol: string;
  @Input("attrOne") attrOne: string;
  @Input("attrTwo") attrTwo: string;
  @Input("text") text?: string;

  public bgColor: string;
  constructor(private testService: TestBuilderService) {}

  ngOnInit() {
    switch (this.symbol) {
      case "+":
        this.bgColor = "addition";
        break;
      case "-":
        this.bgColor = "subtraction";
        break;
      case "X":
        this.bgColor = "multiplication";
        break;
      case "÷":
        this.bgColor = "division";
        break;
      default:
        break;
    }
    if (this.type === "Paragraph") this.bgColor = "text";
  }

  handleOnDelete(id: string) {
    this.testService.delete(parseInt(id)).subscribe();
  }
}
