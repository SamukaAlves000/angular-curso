import { CursosService } from '../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrls: ['./meu-primeiro.component.css']
})
export class MeuPrimeiroComponent implements OnInit {

  title : string
  cursos = []
  constructor(private cursoService : CursosService) { 
    this.title = "https://loiane.training/"
    this.cursos = this.cursoService.getCursos()
  }

  ngOnInit(): void {
  }

}
