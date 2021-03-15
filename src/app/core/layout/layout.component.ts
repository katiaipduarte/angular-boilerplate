import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterContentChecked, OnInit {
  title = '';
  isMobileLayout = true;
  loading = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private titleService: Title,
    private spinnerService: SpinnerService,
  ) {
    this.spinnerService.visibility.subscribe((value: boolean) => {
      this.loading = value;
    });
  }

  ngOnInit(): void {
    this.checkIfIsMobileView();
  }

  ngAfterContentChecked(): void {
    this.title = this.titleService.getTitle();
  }

  private checkIfIsMobileView(): void {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        this.isMobileLayout = state.matches;
      });
  }
}