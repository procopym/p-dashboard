import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  submitted = false

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/diary', 'notes'], {
        queryParams: {
          isLoggedIn: true
        }
      })
    }

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  submit() {
    if(!this.form.valid){
      return
    }
    this.submitted = true

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    console.log(user)

    this.auth.login()
    this.router.navigate(['/diary', 'notes'])

    this.submitted = false
  }
}
