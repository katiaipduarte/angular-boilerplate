import { Overlay } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarModule } from '@angular/material/snack-bar';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let spectator: SpectatorService<NotificationService>;
  let snackBar: MatSnackBar;
  let snackBarConfig: MatSnackBarConfig;
  let service: NotificationService;

  const createService = createServiceFactory({
    service: NotificationService,
    imports: [MatSnackBarModule],
    providers: [MatSnackBarModule, Overlay],
    entryComponents: [],
    mocks: [NotificationService],
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    snackBar = TestBed.inject(MatSnackBar);
    service = TestBed.inject(NotificationService);
    spectator = createService();
  });

  it('should service be created', () => {
    expect(service).toBeTruthy();
  });

  it('should openSnackBar() be known as a function', () => {
    expect(typeof spectator.service.openSnackBar).toEqual('function');
  });

  it('should openSnackBar() call MatSnackBar own open() function', () => {
    snackBarConfig = new MatSnackBarConfig();
    snackBarConfig.duration = 5000;
    snackBarConfig.verticalPosition = 'top';
    snackBarConfig.horizontalPosition = 'right';

    const serviceSpy = spyOn(service, 'openSnackBar').and.callThrough();
    const snackBarSpy = spyOn(snackBar, 'open');

    expect(serviceSpy).not.toHaveBeenCalled();
    expect(snackBarSpy).not.toHaveBeenCalled();

    service.openSnackBar('Hello');

    expect(serviceSpy).toHaveBeenCalledWith('Hello');
    expect(snackBarSpy).toHaveBeenCalledWith('Hello', 'Okay', snackBarConfig);
  });

  it('should dismissSnackBar() be known as a function', () => {
    expect(typeof spectator.service.dismissSnackBar).toEqual('function');
  });

  it('should dismissSnackBar() call MatSnackBar own dismiss() function', () => {
    const serviceSpy = spyOn(service, 'dismissSnackBar').and.callThrough();
    const snackBarSpy = spyOn(snackBar, 'dismiss');

    expect(serviceSpy).not.toHaveBeenCalled();
    expect(snackBarSpy).not.toHaveBeenCalled();

    service.dismissSnackBar();
    expect(serviceSpy).toHaveBeenCalled();
    expect(snackBarSpy).toHaveBeenCalled();
  });
});
