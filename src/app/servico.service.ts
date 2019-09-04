import { Injectable } from '@angular/core';
import { Cliente } from './dados';

@Injectable()
export class ServicoService {
  private lista:Cliente[] = [];
  constructor() { }

  add(c:Cliente):void{
    this.lista.push(c);
  }

  remove(c: Cliente):void {
    let indice = this.lista.indexOf(c, 0);
    if (indice > -1) {
      this.lista.splice(indice, 1);
    }
  }
}