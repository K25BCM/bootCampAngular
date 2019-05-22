import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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


  constructor() { }

  ngOnInit() {

    this.searchText = "";    
  }

  search(query : String){
    this.searchText = query;
    this.resultado = "Resultado es: "+query;
    this.eventoNotif.emit({searchText: this.searchText, resultado: this.resultado});
  }

}
