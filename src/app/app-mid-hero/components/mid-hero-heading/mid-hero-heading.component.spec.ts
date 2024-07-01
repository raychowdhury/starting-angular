import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidHeroHeadingComponent } from './mid-hero-heading.component';

describe('MidHeroHeadingComponent', () => {
  let component: MidHeroHeadingComponent;
  let fixture: ComponentFixture<MidHeroHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidHeroHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidHeroHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
