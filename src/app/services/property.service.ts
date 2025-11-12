import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  //url of Rest-API to be called to fetch property.
  // url = "https://rsbusinesstech-backend.onrender.com/contact/sendEmail";
  private url = "http://127.0.0.1:8080/property/getPropertyByType";

  //dependency injection of HttpClient(Constrcutor DI).
  constructor(private httpClient: HttpClient) { }

  //fetching properties based upon type.
  getPropertiesByType(type: string): Observable<Property[]> {
    const url = `${this.url}?type=${type}`;
    return this.httpClient.get<Property[]>(url);
  }
}
