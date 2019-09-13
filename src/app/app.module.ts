import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BuilderComponent } from "./builder/builder.component";
import { MenuComponent } from "./controlboard/menu.component";
import { AssemblerComponent } from './builder/assembler/assembler.component';
import { TestWidgetComponent } from './builder/assembler/test-widget/test-widget.component';

@NgModule({
  declarations: [AppComponent, BuilderComponent, MenuComponent, AssemblerComponent, TestWidgetComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
