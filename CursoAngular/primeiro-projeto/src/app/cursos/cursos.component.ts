import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

portal: string;
cursos: string[];

  constructor(private cursosService: CursoService) {
    this.portal = 'www.google.com';   

    //sem injeção de dependencia
    //var servico = new CursoService();
    //this.cursos = servico.getCursos();

    //com injeção de dependencia 
    this.cursos = cursosService.getCursos();

   }

  ngOnInit() {
  }

}
