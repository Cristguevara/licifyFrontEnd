import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuResponsiveComponent } from 'src/app/shared/menu-responsive/menu-responsive.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  title = 'proyectoDemo';
  value = 'Clear me';
  constructor(public dialog: MatDialog) { }

  openMenu(): void{

    this.dialog.open(MenuResponsiveComponent, {
      panelClass: 'menuRespondiveDialog',
      position: {top:'0',left:'0'},
    });

  }

  ngOnInit(): void {
  }

}
