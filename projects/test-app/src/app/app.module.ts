import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeResultComponent } from './components/pipe-result/pipe-result.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PipeResultComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
