import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  user!: User | null;

  constructor(private router: Router, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.user = this.authService.getUser()
  }

  openConfirmationLogOut() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: 'auto',
      data: { confirmMessage: 'Voulez vous vraiment vous déconnecter', title: 'Confirmation' },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logOut()
        this.router.navigateByUrl('auth/login');
      }
    });
  }
}