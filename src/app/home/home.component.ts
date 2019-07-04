import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username: string;

  constructor(private authService: AuthService, private router: Router) { 
    this.username = authService.getUser();
  }

  ngOnInit() {
  }
}
