import { ErrorHandler } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorService implements ErrorHandler {
  constructor() {}

  handleError(error: Error): Error {
    // Obtain dependencies at the time of the error
    // This is because the GlobalErrorHandler is registered first
    // which prevents constructor dependency injection

    const err = {
      message: error.message ? error.message : error.toString(),
      stack: error.stack ? error.stack : '',
    };
    console.log(err);
    // Log  the error

    // Re-throw the error
    throw error;
  }
}
