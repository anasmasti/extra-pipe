import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraPipeModule } from 'projects/extra-pipe/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ExtraPipeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
