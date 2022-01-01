import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPipeComponent } from './extra-pipe.component';

describe('ExtraPipeComponent', () => {
  let component: ExtraPipeComponent;
  let fixture: ComponentFixture<ExtraPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
