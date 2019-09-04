import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Cliente } from '../dados';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  /* lista de todas as regras a serem cumpridas pelos campos do form antes de ser liberado para submit */
  private controle: FormGroup;

  constructor(private s:ServicoService) { }

  ngOnInit() {
    this.controle = new FormGroup({
      //nome: new FormControl('', [Validators.pattern("^[a-zA-ZçÇãÃé ]*$")]),
      nome: new FormControl('', [Validators.pattern(/^[a-zçãáéíóôõú ]*$/i)]),
      idade: new FormControl('', [Validators.required,
                                  Validators.pattern(/^[0-9]*$/)])
    });
  }

  add(){
    let c:Cliente = new Cliente();
    c.nome = this.controle.value.nome;
    c.idade = this.controle.value.idade;
    this.s.add(c);
    this.controle.reset(); /* limpar os campos */
  }

}