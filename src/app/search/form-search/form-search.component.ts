import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

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
