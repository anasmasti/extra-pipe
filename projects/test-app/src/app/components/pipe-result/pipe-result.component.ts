import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import { NumberToWordsPipe } from '../../../../../extra-pipe/src/lib/core/pipes/number-to-words.pipe';
import { CamelCaseToTitleSeperatedCasePipe } from '../../../../../extra-pipe/src/lib/core/pipes/camel-case-to-title-seperated-case.pipe';
import { FormatInstanceofDatePipe } from '../../../../../extra-pipe/src/lib/core/pipes/format-instanceof-date.pipe';
import { Base64ImgUrlPipe } from '../../../../../extra-pipe/src/lib/core/pipes/img-url-base64.pipe';
import { IncludesPipe } from '../../../../../extra-pipe/src/lib/core/pipes/includes.pipe';
import { LocalizedPipe } from '../../../../../extra-pipe/src/lib/core/pipes/localized-date.pipe';
import { RemoveByKeyPipe } from '../../../../../extra-pipe/src/lib/core/pipes/remove-by-key.pipe';
import { RemoveDuplicatesByKeyPipe } from '../../../../../extra-pipe/src/lib/core/pipes/remove-duplicates-by-key.pipe';
import { RoundHalfPipe } from '../../../../../extra-pipe/src/lib/core/pipes/roud-half.pipe';
import { UnderscoreToTitlePipe } from '../../../../../extra-pipe/src/lib/core/pipes/underscore-to-title.pipe';
import { UpperCaseFromPipe } from '../../../../../extra-pipe/src/lib/core/pipes/uppercase-from.pipe';
import { CapitalizePipe } from '../../../../../extra-pipe/src/lib/core/pipes/capitalize.pipe';
import { FileSizePipe, HidePipe, ReplaceCommaPipe } from 'extra-pipe';

@Component({
  standalone: true,
  selector: 'app-pipe-result',
  templateUrl: './pipe-result.component.html',
  imports: [
    UpperCaseFromPipe,
    CamelCaseToTitleSeperatedCasePipe,
    CapitalizePipe,
    FileSizePipe,
    FormatInstanceofDatePipe,
    HidePipe,
    Base64ImgUrlPipe,
    IncludesPipe,
    LocalizedPipe,
    ReplaceCommaPipe,
    RemoveByKeyPipe,
    RoundHalfPipe,
    UnderscoreToTitlePipe,
    UpperCaseFromPipe,
    JsonPipe,
    RemoveDuplicatesByKeyPipe,
    NumberToWordsPipe,
  ],
})
export class PipeResultComponent {
  items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  itemsToRemove = [
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  itemsWithDuplication = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 3' },
    { id: 3, name: 'Item 3' },
  ];
  date: Date = new Date('11-12-2022');
}
