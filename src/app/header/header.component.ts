import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  appTitle: string;

  constructor(private authService: AuthService, private router: Router) {
    this.appTitle = 'Gym Scheduler';
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
