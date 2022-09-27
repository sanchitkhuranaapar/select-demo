import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, Observable, of, tap } from 'rxjs';
import { AppService } from './app.service';
import { Validatevalue } from './customvalidators/customvalidator.validator';

export interface Animal {
  name: string;
  sound: string;
  key: boolean;
  selected?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  animalControl = new FormControl({} as Animal, [
    Validators.required,
    Validatevalue,
  ]);
  animals: Observable<Animal[]>;
  selectedAnimal: boolean = false;
  constructor(private readonly _appService: AppService) {
    this.animals = this._appService.getAnimals().pipe(
      tap((animals) => {
        const selected = animals.find((a) => a.selected);
        this.animalControl.patchValue(selected as Animal);
        this.animalControl.markAsTouched();
      })
    );
  }
}
