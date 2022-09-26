import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';
import { Validatevalue } from './customvalidators/customvalidator.validator';

export interface Animal {
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
 
  animalControl = new FormControl('', [Validators.required, Validatevalue]);
  animals: Observable<Animal[]>;
 
  constructor(
    private readonly _appService: AppService
  ) {
    this.animals = this._appService.getAnimals();
  }

}
