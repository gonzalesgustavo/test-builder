import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

import { TestDisplayService } from "./../../services/test-display.service";
import { TestResponse } from "./../../services/test-response.model";
import { TestBuilderService } from "./../../services/test-builder.service";
import { TestDisplayItems } from "src/app/services/disp.model";

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
    private testService: TestBuilderService,
    private testDispService: TestDisplayService
  ) {}

  ngOnInit() {
    this.testDispService.test.subscribe();
  }

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
    let compiledStr: string = "";
    switch (tItem.type) {
      case "Math":
        compiledStr = `${tItem.payload.attrOne} ${tItem.payload.symbol} ${tItem.payload.attrTwo} = ____________`;
        break;
      case "Fraction":
        compiledStr = `${tItem.payload.attrOne} ${tItem.payload.symbol} ${tItem.payload.attrTwo} = ____________`;
        break;
      case "Paragraph":
        compiledStr = `${tItem.payload.text}\n\n__________________________________________________\n__________________________________________________\n__________________________________________________`;
        break;
      default:
        break;
    }
    let newTestItem = new TestDisplayItems(tItem.id, compiledStr);
    this.testDispService.create(newTestItem).subscribe();
    this.testService.add(tItem).subscribe(() => {
      this.dialogRef.close();
    });
  };

  onCancelHandler() {
    this.dialogRef.close();
  }
}
