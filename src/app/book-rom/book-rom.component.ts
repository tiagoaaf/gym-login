import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-rom',
  templateUrl: './book-rom.component.html',
  styleUrls: ['./book-rom.component.css']
})
export class BookRomComponent implements OnInit {

  messageForm: FormGroup;
  username: string;
  success: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.username = authService.getUser();
    
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      room: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
  }

}
