import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BuilderComponent } from "./builder/builder.component";
import { MenuComponent } from "./controlboard/menu.component";
import { AssemblerComponent } from "./builder/assembler/assembler.component";
import { TestWidgetComponent } from "./builder/assembler/test-widget/test-widget.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material";
import { BuildermodalComponent } from "./builder/buildermodal/buildermodal.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    MenuComponent,
    AssemblerComponent,
    TestWidgetComponent,
    BuildermodalComponent
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
