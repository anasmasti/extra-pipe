import { NgModule } from '@angular/core';
import { ExtraPipeComponent } from './extra-pipe.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FileSizePipe } from './pipes/filesize.pipe';
import { HidePipe } from './pipes/hide.pipe';
import { Base64ImgUrlPipe } from './pipes/img-url-base64.pipe';
import { LocalizedPipe } from './pipes/localized-date.pipe';
import { UpperCaseFromPipe } from './pipes/uppercase-from.pipe';

@NgModule({
  declarations: [
    ExtraPipeComponent,
    CapitalizePipe,
    UpperCaseFromPipe,
    HidePipe,
    Base64ImgUrlPipe,
    FileSizePipe,
    LocalizedPipe,
  ],
  imports: [],
  exports: [
    ExtraPipeComponent,
    CapitalizePipe,
    UpperCaseFromPipe,
    HidePipe,
    Base64ImgUrlPipe,
    FileSizePipe,
    LocalizedPipe,
  ],
})
export class ExtraPipeModule {}
