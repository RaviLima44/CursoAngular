import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursoService } from './curso.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursosDetalheComponent], 
  exports:[CursosComponent],
  providers: [CursoService]
})
export class CursosModule { }
