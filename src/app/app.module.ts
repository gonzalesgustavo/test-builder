import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { ClipboardModule } from "ngx-clipboard";

import { AppComponent } from "./app.component";
import { BuilderComponent } from "./builder/builder.component";
import { ControlboardComponent } from "./controlboard/controlboard.component";
import { AssemblerComponent } from "./builder/assembler/assembler.component";
import { TestWidgetComponent } from "./builder/assembler/test-widget/test-widget.component";
import { BuildermodalComponent } from "./builder/buildermodal/buildermodal.component";
import { TestComponent } from "./test/test.component";
import { InfoModalComponent } from "./controlboard/info-modal/info-modal.component";
import { EditModalComponent } from "./builder/assembler/test-widget/edit-modal/edit-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ControlboardComponent,
    AssemblerComponent,
    TestWidgetComponent,
    BuildermodalComponent,
    TestComponent,
    InfoModalComponent,
    EditModalComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    BuildermodalComponent,
    InfoModalComponent,
    EditModalComponent
  ]
})
export class AppModule {}
