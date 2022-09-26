import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Animal } from "./app.component";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(
    private readonly _http: HttpClient
  ) {}

  getAnimals(): Observable<Animal[]> {
    return this._http.get<Animal[]>(`/assets/data.mock.json`).pipe(
      map(data => data),
      catchError(err => throwError(err)),
    )
  }
}