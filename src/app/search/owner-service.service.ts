import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../models/owner';

@Injectable({
  providedIn: 'root'
})

export class OwnerServiceService {
  
  constructor(private http: HttpClient) {
  }

  getOwners() {
   return this.http.get('http://10.125.124.75:9966/petclinic/api/owners');
  }

  getOwnerById(id: number) {
    return this.http.get<Owner>('http://10.125.124.75:9966/petclinic/api/owners/'+id);
 }

  addOwner(owner: Owner): Observable<Owner> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.http.post<Owner>('http://10.125.124.75:9966/petclinic/api/owners', owner, {headers});
  }

  deleteOwner(id: number){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    this.http.delete('http://10.125.124.75:9966/petclinic/api/owners/'+id).subscribe();

  }
}
