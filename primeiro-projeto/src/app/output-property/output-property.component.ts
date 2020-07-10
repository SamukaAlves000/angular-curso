import { Component, OnInit, Input,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';



@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input('vIni') valor: number = 0
  @Output() mudouValor = new EventEmitter()
  @ViewChild('campoInput') campoValorInput:ElementRef
 
  incrementa(){
    console.log()
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({novoValor : this.valor})
  }
  decrementa(){
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit({novoValor : this.valor})
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
