import { NgModule } from '@angular/core';
import { ExtraPipeComponent } from './extra-pipe.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { UpperOfPipe } from './pipes/upperOf.pipe';

@NgModule({
  declarations: [ExtraPipeComponent, CapitalizePipe, UpperOfPipe],
  imports: [],
  exports: [ExtraPipeComponent, CapitalizePipe, UpperOfPipe],
})
export class ExtraPipeModule {}
