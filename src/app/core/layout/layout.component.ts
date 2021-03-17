import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterContentChecked, OnInit {
  title = '';
  isMobileLayout = true;
  loading = false;

  constructor(private breakpointObserver: BreakpointObserver, private titleService: Title) {}

  ngOnInit(): void {
    // this.spinnerService.visibility.subscribe((value: boolean) => {
    //   this.loading = value;
    // });

    // this.connectionService.monitor().subscribe((isConnected: boolean) => {
    //   const status = isConnected ? 'Online' : 'Offline';
    //   this.notificationService.openSnackBar(status);
    // });
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
