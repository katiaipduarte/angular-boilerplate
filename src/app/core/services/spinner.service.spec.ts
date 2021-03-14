import { TestBed } from '@angular/core/testing';
import { SpinnerConsumer } from '../mocks/spinner-consumer';
import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;
  let consumer1: SpinnerConsumer;
  let consumer2: SpinnerConsumer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
    consumer1 = new SpinnerConsumer(service);
    consumer2 = new SpinnerConsumer(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialise visibility to false', () => {
    service.visibility.subscribe((value: boolean) => {
      expect(value).toBe(false);
    });
  });

  it('should broadcast visibility to all consumers', () => {
    expect(consumer1.isBusy).toBe(false);
    expect(consumer2.isBusy).toBe(false);
  });

  it('should broadcast visibility to all consumers when the value changes', () => {
    service.visibility.next(true);

    expect(consumer1.isBusy).toBe(true);
    expect(consumer2.isBusy).toBe(true);
  });
});
