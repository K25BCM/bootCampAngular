import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OwnerServiceService {
  
  constructor(private http: HttpClient) {
  }

  getOwners() {
   return this.http.get('http://10.125.124.75:9966/petclinic/api/owners');
}
}
