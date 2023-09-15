import { Component } from '@angular/core';
import { UpperCaseFromPipe } from 'extra-pipe';

@Component({
  standalone: true,
  selector: 'app-pipe-result',
  templateUrl: './pipe-result.component.html',
  imports: [UpperCaseFromPipe],
})
export class PipeResultComponent {
  title = 'test-app';
}
