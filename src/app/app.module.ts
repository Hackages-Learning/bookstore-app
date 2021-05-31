import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [AppComponent, CapitalizePipe],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
