import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { MenuResponsiveComponent } from './shared/menu-responsive/menu-responsive.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectoDemo';
  value = 'Clear me';
  constructor(public dialog: MatDialog) { }

  // openMenu(): void{

  //   this.dialog.open(MenuResponsiveComponent, {
  //     panelClass: 'menuRespondiveDialog',
  //     position: {top:'0',left:'0'},
  //   });

  // }

}
