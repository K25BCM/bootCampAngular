import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OwnerServiceService } from './owner-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  resultado : String;
  searchText : String;
  @Input () labelName : String;
  @Input () placeholderName : String;
  @Output() eventoNotif = new EventEmitter();
  owners : any;


  constructor(private service : OwnerServiceService) { }

  ngOnInit() {
    this.service.getOwners().subscribe(data => {this.owners = data;});
    this.searchText = ""; 
    console.log("Hola");   
  }

  search(query : String){
    this.searchText = query;
    this.resultado = "Resultado es: "+query;
    this.eventoNotif.emit({searchText: this.searchText, resultado: this.resultado});
  }

}
