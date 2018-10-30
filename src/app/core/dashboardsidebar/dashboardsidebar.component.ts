import { Component, Input, OnChanges, SimpleChange, ViewChild } from '@angular/core';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './dashboardsidebar.component.html',
  styleUrls: ['./dashboardsidebar.component.scss']
})
export class DashboardsidebarComponent implements OnChanges {
  private _open = false;
  @Input()
  set open(open: boolean) {
    this._open = !open;
  }
  get open():boolean {
      return this._open;
  }
  @ViewChild('drawer') public drawer;

  constructor() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for (let propName in changes) {
      let changedProp = changes[propName];
      if(propName === 'open'){
        this.drawer.toggle();
      }
    }
  }
}
