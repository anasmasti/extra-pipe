import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-extra-pipe',
  template: `
    <p>
      extra-pipe works!
    </p>
  `,
  styles: [
  ]
})
export class ExtraPipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
