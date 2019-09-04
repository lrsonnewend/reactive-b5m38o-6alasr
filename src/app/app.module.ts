import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/* para usar reactive forms */
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServicoService } from './servico.service';
import { FormComponent } from './form/form.component';
import { TabelaComponent } from './tabela/tabela.component';

/* precisa importar ReactiveFormsModule */
@NgModule({
  imports:      [ BrowserModule,  ReactiveFormsModule ],
  declarations: [ AppComponent, FormComponent, TabelaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServicoService]
})
export class AppModule { }
