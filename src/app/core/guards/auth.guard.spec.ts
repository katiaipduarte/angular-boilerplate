import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../services/authentication.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let service: AuthenticationService;
  let router: Router;

  const mockService = { isAuthenticated: undefined };
 
  beforeEach(() => {    
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthenticationService, useValue: mockService },
      ],
    });
    // get handle on items that are needed
    guard = TestBed.inject(AuthGuard);
    service = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
    // spy on the router navigate
    spyOn(router, 'navigate');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if the user isAuthenticated', () => {
    service.isAuthenticated = true;
    expect(guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'})).toBe(true);
  });

  it('should return false if the user is not authenticated and navigate to login', () => {
     service.isAuthenticated = false;
     expect(guard.canActivate(new ActivatedRouteSnapshot(), <RouterStateSnapshot>{url: 'testUrl'})).toBe(false);
     expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
