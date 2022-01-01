import { NgModule } from '@angular/core';
import { ExtraPipeComponent } from './extra-pipe.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  declarations: [ExtraPipeComponent, CapitalizePipe],
  imports: [],
  exports: [ExtraPipeComponent, CapitalizePipe],
})
export class ExtraPipeModule {}
