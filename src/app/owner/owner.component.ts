import { Component, OnInit, Input } from '@angular/core';
import { Owner } from '../models/owner';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerServiceService } from '../search/owner-service.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  owner: Owner;
  ownerId: number;

  constructor(private route: ActivatedRoute, private router: Router, private ownerService: OwnerServiceService) { }

  ngOnInit() {
    this.ownerId = this.route.snapshot.params['id'];
    console.log(this.ownerId);
    this.ownerService.getOwnerById(this.ownerId).subscribe(
      owner => {this.owner = owner;
      console.log(owner)}
    )
  }

  deleteOwner(){
    console.log(this.ownerId);
    this.ownerService.deleteOwner(this.ownerId);
  }
}
