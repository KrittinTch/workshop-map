import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapformComponent } from './mapform.component';

describe('MapformComponent', () => {
  let component: MapformComponent;
  let fixture: ComponentFixture<MapformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
