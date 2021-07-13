import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required]),
  });  
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { } 
  
  ngOnInit(): void {}
  
  onLoginSuccess(userData) {
    console.log(userData);
    this.router.navigateByUrl('/balance');
  } 
  onLoginError(err) {
    alert(err.statusText);
  } 
  loginSubmit() {
    if (this.form.valid) {
      this.authService
        .authenticate(this.form.value)
        .subscribe(
          this.onLoginSuccess.bind(this),
          this.onLoginError
        );
    }
  }

}
