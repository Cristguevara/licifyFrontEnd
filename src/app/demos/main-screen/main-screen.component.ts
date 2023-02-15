import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuResponsiveComponent } from 'src/app/shared/menu-responsive/menu-responsive.component';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {


  constructor(
    public  dialog      : MatDialog,
    private authService : AuthService,
    private router      : Router
  ) { }

  get user(){ return this.authService.user}

  openMenu(): void{

    this.dialog.open(MenuResponsiveComponent, {
      panelClass: 'menuRespondiveDialog',
      position: {top:'0',left:'0'},
    });

  }

  ngOnInit(): void {
    //console.log(this.user)
  }

  logout(){
    //this.authService.logout()
    this.router.navigate(['/auth'])
  }

}
