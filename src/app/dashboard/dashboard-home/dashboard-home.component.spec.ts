import { TestBed } from '@angular/core/testing';
import { DashboardHomeComponent } from './dashboard-home.component';

describe('DashboardHomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardHomeComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DashboardHomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
