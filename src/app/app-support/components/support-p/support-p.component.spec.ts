import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportPComponent } from './support-p.component';

describe('SupportPComponent', () => {
  let component: SupportPComponent;
  let fixture: ComponentFixture<SupportPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
