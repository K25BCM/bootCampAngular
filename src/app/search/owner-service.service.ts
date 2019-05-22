import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OwnerServiceService implements  OnInit{

  apiURL: string = 'http://10.125.124.75:9966/petclinic/api/owners';
  

  constructor(private http: HttpClient) {
  }

  ngOnInit() {


  }

  getOwners() {
   return this.http.get(this.apiURL);
}
}
