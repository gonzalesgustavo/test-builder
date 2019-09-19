import { TestResponse } from "./../../services/test-response.model";
import { TestBuilderService } from "./../../services/test-builder.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { WarehouseService } from "src/app/warehouse.service";
import { Order } from "../order.model";

@Component({
  selector: "app-buildermodal",
  templateUrl: "./buildermodal.component.html",
  styleUrls: ["./buildermodal.component.scss"]
})
export class BuildermodalComponent implements OnInit {
  formType: string = "";
  formSelectors = ["Math", "Fraction", "Paragraph"];
  passedInData: any;
  mathForm = this.fb.group({
    attrOne: ["", Validators.required],
    symbol: ["+", Validators.required],
    attrTwo: ["", Validators.required]
  });
  questionForm = this.fb.group({
    text: ["", Validators.required]
  });
  constructor(
    private dialogRef: MatDialogRef<BuildermodalComponent>,
    private fb: FormBuilder,
    private testService: TestBuilderService
  ) {}

  ngOnInit() {}

  radioChangeHandler(event: any) {
    this.formType = event.target.value as string;
  }

  onMathSubmit() {
    let mathTestItem: TestResponse = {
      id: Math.floor(Math.random() * 10000000),
      type: this.formType,
      payload: {
        attrOne: this.mathForm.value.attrOne,
        symbol: this.mathForm.value.symbol.toUpperCase(),
        attrTwo: this.mathForm.value.attrTwo
      }
    };
    this.addTestItem(mathTestItem);
  }

  onQuestionSubmit() {
    let questionTestItem: TestResponse = {
      id: Math.floor(Math.random() * 10000000),
      type: this.formType,
      payload: {
        text: this.questionForm.value.text
      }
    };
    this.addTestItem(questionTestItem);
  }

  private addTestItem = (tItem: TestResponse) => {
    this.testService.add(tItem).subscribe(() => {
      this.dialogRef.close();
    });
  };

  onCancelHandler() {
    this.dialogRef.close();
  }
}
