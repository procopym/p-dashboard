import {Injectable} from "@angular/core";
import {FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";

@Injectable()
export class CustomValidators {
  /**
   * Function match 2 filed inside same FormGroup
   *
   * @inputs: filed name, matched filed name, thrown field error
   *
   * @output: on match matched filed set as valid,
   * error matched filed set as invalid
   * custom error set
   */
  static MatchField(controlName: string, matchControlName: string, error: ValidationErrors): ValidatorFn {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchControl = formGroup.controls[matchControlName];

      if (!control || !matchControl) {
        return null;
      }

      if (matchControl.errors && !matchControl.errors[Object.keys(error)[0]]) {
        return null;
      }

      if (control.value !== matchControl.value) {
        matchControl.setErrors(error);
      } else {
        matchControl.setErrors(null);
      }
    }
  }

}
