import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Cliente } from '../dados';
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private s:ServicoService) { }

  ngOnInit() {
  }

  excluir(obj:Cliente):boolean{
    this.s.remove(obj);
    return false; // para evitar o popup menu
  }

}