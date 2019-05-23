import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OwnerServiceService } from '../owner-service.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  resultado : String;
  searchText : String;
  owners : any;
  @Input () labelName : String;
  @Input () placeholderName : String;
  @Output() eventoNotif = new EventEmitter();


  constructor(private service : OwnerServiceService) { }

  ngOnInit() {
    this.service.getOwners().subscribe(
      data => {this.owners = data;
      console.log(data)});
    this.searchText = "";    
  }

  search(query : String){
    this.searchText = query;
    this.resultado = "Resultado es: "+query;
    this.eventoNotif.emit({searchText: this.searchText, resultado: this.resultado});
  }

}
