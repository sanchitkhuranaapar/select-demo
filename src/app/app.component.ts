import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Validatevalue } from './customvalidators/customvalidator.validator';

interface Animal {
  name: string;
  sound: string;
  key: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select-demo';

  isSelected: boolean = false
  animalControl = new FormControl('', [Validators.required, Validatevalue]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!', key: true},
    {name: 'Cat', sound: 'Meow!', key: false},
    {name: 'Cow', sound: 'Moo!', key: false},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!', key: false},
  ];

  getAnimal(event: any): void {
    console.log(event)
    if(event.value.key === true){
      this.isSelected = true
    }else{
      this.isSelected = false

    }
  }

  getselect(){
    
  }
}
