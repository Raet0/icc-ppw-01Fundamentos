import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormUtils } from '../../../../Utils/formUtils';

@Component({
  selector: 'app-formulario-dinamico-page',
  imports: [ReactiveFormsModule],
  templateUrl: './formularios-dinamicos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioDinamicoPage {
  private fb = inject(FormBuilder);

  // Eliminar lenguaje
  onDeleteLenguaje(index: number) {
    this.lenguajes.removeAt(index);
    this.lenguajes.markAsTouched();
  }

  // Enviar
  onSubmit() {
    this.myform.markAllAsTouched();
    console.log(this.myform.value);
  }
  formUtils = FormUtils;

  myform: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lenguajes: this.fb.array(
      [
        this.fb.control('Python', [Validators.required, Validators.minLength(3)]),
        this.fb.control('Java', [Validators.required, Validators.minLength(3)]),
      ],
      Validators.minLength(3)
    ),
  });

  get lenguajes(): FormArray {
    return this.myform.get('lenguajes') as FormArray;
  }

  newLenguaje: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3)]);

  onAddToLenguajes() {
    if (this.newLenguaje.invalid) return;

    this.lenguajes.push(this.fb.control(this.newLenguaje.value, Validators.required));

    this.newLenguaje.reset();
  }
}