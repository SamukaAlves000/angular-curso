import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,
  AfterContentChecked,AfterViewInit,OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,OnDestroy{

  
  @Input() valorInicial: number = 10


  constructor() {
    console.log('constructor')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
}
