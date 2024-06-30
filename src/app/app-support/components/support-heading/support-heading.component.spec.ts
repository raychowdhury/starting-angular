import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportHeadingComponent } from './support-heading.component';

describe('SupportHeadingComponent', () => {
  let component: SupportHeadingComponent;
  let fixture: ComponentFixture<SupportHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
