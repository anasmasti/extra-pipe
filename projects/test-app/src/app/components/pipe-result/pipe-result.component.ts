import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

import {
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
  RemoveDuplicatesByKeyPipe,
  NumberToWordsPipe,
  SnakeToCamelPipe,
  CamelToSnakePipe,
} from 'extra-pipe';

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
    SnakeToCamelPipe,
    CamelToSnakePipe,
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
