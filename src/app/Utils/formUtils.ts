import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {
  static isValidFieldInArray(formArray: FormArray, index: number): boolean {
    const control = formArray.controls[index];
    return !!(control.errors && control.touched);
  }

  static getFieldErrorInArray(arg0: any, _t36: number) {
    throw new Error('Method not implemented.');
  }

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return !!form.controls[fieldName].errors && form.controls[fieldName].touched;
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};
    return this.getTextError(errors);
  }

  static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;

        case 'email':
          return 'Formato de correo inválido';
      }
    }

    return null;
  }
}
