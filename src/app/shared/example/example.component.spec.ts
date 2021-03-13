import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ExampleComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ExampleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-boilerplate'`, () => {
    const fixture = TestBed.createComponent(ExampleComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-boilerplate');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ExampleComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular-boilerplate app is running!');
  });
});
