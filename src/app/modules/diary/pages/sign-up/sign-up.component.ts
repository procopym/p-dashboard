import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form: FormGroup
  submited = false

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
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
      ], [
        //TODO: async email check
      ]),
      password: new FormGroup({
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6)
          //TODO: customer password pattern validator
        ]),
        confirmPassword: new FormControl(null, [
          Validators.required
        ])
      }, {
        validators: this.MatchPasswords('password', 'confirmPassword', {passwordMismatch: true})
      })
    })
  }

  MatchPasswords(password: string, confirmPassword: string, error: ValidationErrors): ValidatorFn {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors(error);
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }


  submit() {
    if (!this.form.valid) {
      return
    }

    this.submited = true

    console.log(this.form.value)
    this.form.reset()
    this.auth.login()
    this.router.navigate(['/diary', 'notes'], {
      queryParams: {
        newProfile: true
      }
    })

    this.submited = false
  }
}
