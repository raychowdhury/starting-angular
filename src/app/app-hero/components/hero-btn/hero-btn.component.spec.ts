import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBtnComponent } from './hero-btn.component';

describe('HeroBtnComponent', () => {
  let component: HeroBtnComponent;
  let fixture: ComponentFixture<HeroBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
