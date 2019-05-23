import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';
import { Owner } from 'src/app/models/owner';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  //resultado : String;
  searchText : String;
  owners : any;
  owner: Owner;
  @Input () labelName : String;
  @Input () placeholderName : String;
  @Output() eventoNotif = new EventEmitter();
  @Output() eventoOwner = new EventEmitter();


  constructor(private service : OwnerServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.searchText = "";    
  }

  searchAll(){
    this.service.getOwners().subscribe(
      data => {this.owners = data;
      console.log(data)});
  }

  searchByName(query : String){
    this.searchText = query;
    this.searchAll();
    //this.resultado = "Resultado usuario a buscar es: "+query;
    //this.eventoNotif.emit({searchText: this.searchText, resultado: this.resultado});
  }

  showDetails(ow){
    this.eventoOwner.emit({owner: ow});
    console.log(ow);
  }

  onSelect(owner: Owner){
    this.router.navigate(['/owner', owner.id]);
  }

}
