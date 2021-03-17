import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private snackBarConfig: MatSnackBarConfig | undefined;

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string): void {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.duration = 5000;
    this.snackBarConfig.verticalPosition = 'top';
    this.snackBarConfig.horizontalPosition = 'right';
    this.snackBar.open(message, 'Okay', this.snackBarConfig);
  }

  dismissSnackBar(): void {
    this.snackBar.dismiss();
  }
}
