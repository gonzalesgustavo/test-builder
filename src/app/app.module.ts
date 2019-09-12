import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { MenuComponent } from './menu/menu.component';
import { AssemblyComponent } from './builder/assembly/assembly.component';
import { StagingComponent } from './builder/assembly/staging/staging.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    MenuComponent,
    AssemblyComponent,
    StagingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
