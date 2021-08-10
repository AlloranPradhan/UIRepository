import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplacesComponent } from './splaces.component';

describe('SplacesComponent', () => {
  let component: SplacesComponent;
  let fixture: ComponentFixture<SplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
