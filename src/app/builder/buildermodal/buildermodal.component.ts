import { FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { WarehouseService } from "src/app/warehouse.service";

@Component({
  selector: "app-buildermodal",
  templateUrl: "./buildermodal.component.html",
  styleUrls: ["./buildermodal.component.scss"]
})
export class BuildermodalComponent implements OnInit {
  formType: string = "";
  formSelectors = ["Math", "Fraction", "Paragraph"];

  mathForm = this.fb.group({
    attrOne: ["", Validators.required],
    symbol: ["+", Validators.required],
    attrTwo: ["", Validators.required]
  });
  questionForm = this.fb.group({
    text: ["", Validators.required]
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<BuildermodalComponent>,
    private fb: FormBuilder,
    private warehouseService: WarehouseService
  ) {}

  ngOnInit() {}

  radioChangeHandler(event: any) {
    this.formType = event.target.value as string;
  }

  onMathSubmit() {
    // this.warehouseService.addCommand(type).subscribe(() => {});
    console.log(this.mathForm.value);
  }

  onQuestionSubmit() {
    console.log(this.questionForm.value);
  }

  onCancelHandler() {
    this.dialogRef.close();
  }
}
