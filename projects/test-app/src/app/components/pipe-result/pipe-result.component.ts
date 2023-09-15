import { Component } from '@angular/core';
import { NumberToLettersPipe } from 'projects/extra-pipe/src/public-api';

@Component({
  standalone: true,
  selector: 'app-pipe-result',
  templateUrl: './pipe-result.component.html',
  imports: [NumberToLettersPipe],
})
export class PipeResultComponent {
  title = 'test-app';
}
