import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEffectsComponentComponent } from './tab-effects-component.component';

describe('TabEffectsComponentComponent', () => {
  let component: TabEffectsComponentComponent;
  let fixture: ComponentFixture<TabEffectsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabEffectsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEffectsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
