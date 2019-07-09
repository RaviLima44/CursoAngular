import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  constructor() { }

  getCursos(){return  ['C#', 'Angular', 'MVC'];}

}
