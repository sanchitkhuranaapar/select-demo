import { AbstractControl } from '@angular/forms';

export function Validatevalue(control: AbstractControl) {
  if (control.value.key) {
    console.log(control);
    return { isSelected: true };
  } else {
    return null;
  }
}
