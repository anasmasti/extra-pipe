import { Component } from '@angular/core';
import { ReplaceCommaPipe } from 'projects/extra-pipe/src/lib/shared/pipes/replace-comma.pipe';

@Component({
  standalone: true,
  selector: 'app-pipe-result',
  templateUrl: './pipe-result.component.html',
  imports: [ReplaceCommaPipe],
})
export class PipeResultComponent {
  title = 'test-app';
}
