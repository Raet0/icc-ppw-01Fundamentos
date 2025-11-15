import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'perfil-page',
  imports: [RouterLink],
  templateUrl: `./PerfilPage.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage {
  name = signal("Rafael");
  lastName = signal("Prieto");
  age = signal(22);
  getFullName() {
    return `${this.name()} ${this.lastName()} con edad ${this.age()} años`;
  } 
  resetData(){
    this.name.set('Rafael');
    this.lastName.set('Prieto');
    this.age.set(22);
  }
  changeAge(){
    this.age.set(18);
  }
  changeData(){
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }
}
