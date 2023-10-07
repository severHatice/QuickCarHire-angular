import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './auth-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  API_URL = environment.apiUrl;

  getVehicles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/car/visitors/all`);
  }
}
