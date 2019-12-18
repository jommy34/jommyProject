import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

// Typescript custom enum for search types (optional)

@Injectable({
  providedIn: 'root'
})
export class SongService {
  url = 'http://127.0.0.1:5000/';

  

  constructor(private http: HttpClient) {}

}