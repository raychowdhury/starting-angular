import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidHeroPComponent } from './mid-hero-p.component';

describe('MidHeroPComponent', () => {
  let component: MidHeroPComponent;
  let fixture: ComponentFixture<MidHeroPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MidHeroPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidHeroPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
