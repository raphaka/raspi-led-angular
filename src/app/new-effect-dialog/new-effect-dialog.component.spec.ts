import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEffectDialogComponent } from './new-effect-dialog.component';

describe('NewEffectDialogComponent', () => {
  let component: NewEffectDialogComponent;
  let fixture: ComponentFixture<NewEffectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEffectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEffectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
