# Programación y Plataformas Web 

# Frameworks Web: Angular

<div align="center">
  <img src="capturas/logo-framework-angular.png" width="80" alt="Angular Logo">
</div>

## Práctica 3: Navegación en Angular

### Autor

**Rafael Prieto**  
📧 pprietos@est.ups.edu.ec  
💻 GitHub: [raet0](https://github.com/raet0)

---

# Formularios Dinámicos en Angular

Este documento muestra el HTML y el TypeScript corregidos para un formulario dinámico con FormArray, incluyendo validaciones y métodos utilitarios.

---

## ✅ HTML corregido (`formularios-dinamicos.html`)

```html
<h2>Formularios: <small>Dinámicos</small></h2>

<form autocomplete="off" [formGroup]="myForm" (ngSubmit)="onSubmit()">

  <!-- Nombre -->
  <div class="mb-3 row">
    <label class="col-sm-3 col-form-label">Nombre</label>
    <div class="col-sm-9">
      <input class="form-control" formControlName="name" placeholder="Nombre del proyecto">

      @if(formUtils.isValidField(myForm, 'name')){
      <span class="form-text text-danger">
        {{ formUtils.getFieldError(myForm, 'name') }}
      </span>
      }
    </div>
  </div>

  <!-- Input para agregar lenguaje -->
  <div class="mb-3 row">
    <label class="col-sm-3 col-form-label">Agregar</label>
    <div class="col-sm-9">
      <div class="input-group">
        <input class="form-control"
               placeholder="Agregar lenguaje"
               [formControl]="newLenguaje"
               (keydown.enter)="onAddToLenguajes(); $event.preventDefault()">

        <button class="btn btn-outline-primary"
                type="button"
                (click)="onAddToLenguajes()">
          Agregar
        </button>
      </div>
    </div>
  </div>

  <!-- Lista Dinámica -->
  <div class="mb-3 row">
    <label class="col-sm-3 col-form-label">Lenguajes</label>

    <div class="col-sm-9" formArrayName="lenguajes">

      @for(item of lenguajes.controls; track item; let i = $index) {
        <div class="input-group mb-2">
          <input class="form-control" [formControlName]="i">
          <button class="btn btn-outline-danger" type="button" (click)="onDeleteLenguaje(i)">
            Eliminar
          </button>
        </div>

        @if(formUtils.isValidFieldInArray(lenguajes, i)) {
          <span class="form-text text-danger">
            {{ formUtils.getFieldErrorInArray(lenguajes, i) }}
          </span>
        }
      }

      @if(lenguajes.errors?.minlength && lenguajes.touched){
        <span class="form-text text-danger">Debe tener mínimo 3 lenguajes</span>
      }
    </div>
  </div>

</form>
