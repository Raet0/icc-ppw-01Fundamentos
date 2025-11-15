import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'home-page',
  imports: [RouterLink],
  templateUrl: `./homePage.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage { 
  constructor(){
    setInterval(()=>{
      console.log("*");
      this.counterSignal.update((v) => v + 1);
    }, 1000 
    );
  }
  counter = 0;
  counterSignal = signal(0);

  changeValue(value:number){
    this.counter += value;
    this.counterSignal.update((current)=> current + value);

  }
  resetValue(value:number){
    this.counter = value;
    this.counterSignal.set(value);
  }
}
