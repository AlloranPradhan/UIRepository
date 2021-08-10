import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Covid19StatsComponent } from './covid19Stats.component';

describe('C2componentComponent', () => {
  let component: Covid19StatsComponent;
  let fixture: ComponentFixture<Covid19StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Covid19StatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Covid19StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
