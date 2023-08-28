import { Component } from '@angular/core';
import { RoundHalfUpPipe } from 'projects/extra-pipe/src/lib/pipes/roud-half-up.pipe';

@Component({
  standalone: true,
  selector: 'app-pipe-result',
  templateUrl: './pipe-result.component.html',
  imports: [RoundHalfUpPipe],
})
export class PipeResultComponent {
  title = 'test-app';
}
