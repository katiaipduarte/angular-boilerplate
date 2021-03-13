import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { DashboardRootComponent } from './dashboard-root.component';

describe('DashboardRootComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardRootComponent],
      providers: [Title],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DashboardRootComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
