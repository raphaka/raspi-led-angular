import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileColorComponentComponent } from './tile-color-component.component';

describe('TileColorComponentComponent', () => {
  let component: TileColorComponentComponent;
  let fixture: ComponentFixture<TileColorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileColorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileColorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
