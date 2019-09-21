import { TestResponse } from "./../../../../services/test-response.model";
import { TestBuilderService } from "./../../../../services/test-builder.service";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { take } from "rxjs/operators";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-modal",
  templateUrl: "./edit-modal.component.html",
  styleUrls: ["./edit-modal.component.scss"]
})
export class EditModalComponent implements OnInit {
  testElement;
  formType: string = "";
  formSelectors = ["Math", "Fraction", "Paragraph"];
  passedInData: any;
  mathForm;
  questionForm;
  constructor(
    private dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private testService: TestBuilderService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.testService.testElements.pipe(take(1)).subscribe(elements => {
      this.testElement = elements.filter(el => {
        return el.id === parseInt(this.data.id);
      });
      this.formType = this.testElement[0].type;
    });
    this.mathForm = this.fb.group({
      attrOne: [this.testElement[0].payload.attrOne, Validators.required],
      symbol: [this.testElement[0].payload.symbol, Validators.required],
      attrTwo: [this.testElement[0].payload.attrTwo, Validators.required]
    });
    this.questionForm = this.fb.group({
      text: [this.testElement[0].payload.text, Validators.required]
    });
  }

  radioChangeHandler(event: any) {
    this.formType = event.target.value as string;
  }

  onHandleEdit() {
    let values: TestResponse = {
      id: parseInt(this.data.id),
      type: this.formType,
      payload: {
        attrOne: this.mathForm.controls.attrOne.value,
        symbol: this.mathForm.controls.symbol.value,
        attrTwo: this.mathForm.controls.attrTwo.value,
        text: this.questionForm.controls.text.value
      }
    };
    this.testService.edit(parseInt(this.data.id), values).subscribe();
    this.dialogRef.close({ updatedData: values });
  }

  onCancelHandler() {
    this.dialogRef.close();
  }
}
