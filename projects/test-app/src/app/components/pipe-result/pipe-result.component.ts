import { Component } from '@angular/core';
import { NumberToWordsPipe } from 'projects/extra-pipe/src/lib/shared/pipes/number-to-words.pipe';

@Component({
  standalone: true,
  selector: 'app-pipe-result',
  templateUrl: './pipe-result.component.html',
  imports: [NumberToWordsPipe],
})
export class PipeResultComponent {
  title = 'test-app';
}
