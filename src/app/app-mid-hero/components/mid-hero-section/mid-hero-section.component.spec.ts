import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidHeroSectionComponent } from './mid-hero-section.component';

describe('MidHeroSectionComponent', () => {
  let component: MidHeroSectionComponent;
  let fixture: ComponentFixture<MidHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidHeroSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
