import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url : string = "https://loiane.training/"
  urlImagem = "http://lorempixel.com/400/200/nature/"
  valorAtual = ""
  
  constructor() { }

  getValor(){
    return 20;
  }

  ngOnInit(): void {
  }

  botaoClicado(){
    alert("Clicou no botão")
  }

  onKeyUp(evento: KeyboardEvent){
    console.log(evento)
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }


}
