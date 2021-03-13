import { TestBed } from '@angular/core/testing';
import { DashboardRootComponent } from './dashboard-root.component';

describe('DashboardRootComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardRootComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DashboardRootComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
