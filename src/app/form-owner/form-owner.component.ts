import { Component, OnInit } from '@angular/core';
import { Owner } from '../models/owner';
import { OwnerServiceService } from '../search/owner-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  templateUrl: './form-owner.component.html',
  styleUrls: ['./form-owner.component.scss']
})
export class FormOwnerComponent implements OnInit {

  owner: Owner;

  constructor(private service: OwnerServiceService, private router: Router ) { 
    this.owner = new Owner();
    //this.owner = <Owner>{};
  }

  ngOnInit() {
    
  }

  onSubmit(owner: Owner) {
    owner.id = null;
    this.service.addOwner(owner).subscribe( new_owner => {
      this.owner = new_owner;
      console.log(this.owner);
    });
    this.router.navigate(['/search']);
  }

}
