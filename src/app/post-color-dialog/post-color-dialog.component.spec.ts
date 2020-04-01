import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostColorDialogComponent } from './post-color-dialog.component';

describe('PostColorDialogComponent', () => {
  let component: PostColorDialogComponent;
  let fixture: ComponentFixture<PostColorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostColorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostColorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
