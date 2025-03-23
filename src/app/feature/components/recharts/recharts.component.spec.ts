import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechartsComponent } from './recharts.component';

describe('RechartsComponent', () => {
  let component: RechartsComponent;
  let fixture: ComponentFixture<RechartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
