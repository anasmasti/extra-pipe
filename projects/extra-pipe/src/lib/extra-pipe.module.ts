import { NgModule } from '@angular/core';
import { ExtraPipeComponent } from './extra-pipe.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UpperCaseFromPipe } from './pipes/uppercase-from.pipe';

@NgModule({
  declarations: [ExtraPipeComponent, CapitalizePipe, UpperCaseFromPipe],
  imports: [],
  exports: [ExtraPipeComponent, CapitalizePipe, UpperCaseFromPipe],
})
export class ExtraPipeModule {}
