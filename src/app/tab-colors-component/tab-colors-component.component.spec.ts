import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabColorsComponentComponent } from './tab-colors-component.component';

describe('TabColorsComponentComponent', () => {
  let component: TabColorsComponentComponent;
  let fixture: ComponentFixture<TabColorsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabColorsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabColorsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
