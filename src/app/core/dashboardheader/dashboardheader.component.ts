import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-header',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.scss']
})
export class DashboardheaderComponent implements OnInit {
  open = false;
  constructor() { }

  ngOnInit() {
  }

  toggle(){
    console.log('toggle');
    this.open = !this.open;
  }

}
