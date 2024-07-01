import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidHeroBtnComponent } from './mid-hero-btn.component';

describe('MidHeroBtnComponent', () => {
  let component: MidHeroBtnComponent;
  let fixture: ComponentFixture<MidHeroBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidHeroBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidHeroBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
