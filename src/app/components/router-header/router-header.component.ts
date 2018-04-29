import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-router-header',
  templateUrl: './router-header.component.html',
  styleUrls: ['./router-header.component.scss']
})
export class RouterHeaderComponent implements OnInit {

  constructor(public sidebarService: SidebarService) { }

  ngOnInit() {
  }

}
