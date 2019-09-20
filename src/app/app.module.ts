import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BuilderComponent } from "./builder/builder.component";
import { ControlboardComponent } from "./controlboard/controlboard.component";
import { AssemblerComponent } from "./builder/assembler/assembler.component";
import { TestWidgetComponent } from "./builder/assembler/test-widget/test-widget.component";
import { BuildermodalComponent } from "./builder/buildermodal/buildermodal.component";
import { TestComponent } from "./test/test.component";

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ControlboardComponent,
    AssemblerComponent,
    TestWidgetComponent,
    BuildermodalComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BuildermodalComponent]
})
export class AppModule {}
