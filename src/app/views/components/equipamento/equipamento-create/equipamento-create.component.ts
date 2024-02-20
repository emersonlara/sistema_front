import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipamento } from 'src/app/models/equipamentos';
import { EquipamentoService } from 'src/app/servicos/equipamento.service';

@Component({
  selector: 'app-equipamento-create',
  templateUrl: './equipamento-create.component.html',
  styleUrls: ['./equipamento-create.component.css']
})
export class EquipamentoCreateComponent implements OnInit{


  equipamento: Equipamento = {
    id: '',
    nome: '',
    serie: '',
    marca: ''
  }

  nome = new FormControl('',[Validators.minLength(4)] )
  serie = new FormControl('',[Validators.minLength(4)] )
  marca = new FormControl('',[Validators.minLength(4)] )

  constructor(
    private router: Router,
    private service: EquipamentoService
    ) { }

  ngOnInit(): void {
     
  }

  cancel(): void {
    this.router.navigate(['equipamentos']);
  }
     
    create(): void {
      this.service.create(this.equipamento).subscribe((resposta) => {
        this.router.navigate(['equipamentos']);
        this.service.message('Equipamento salvo com sucesso!');
      })
    }
    

  errorValidNome(){
    if(this.nome.invalid) {
      return 'A Nome deve ter entre 5 a 40 caracteres';
    }
    return false;
  }

  errorValidSerie(){
    if(this.serie.invalid) {
      return 'A serie de ter entre 5 a 30 caracteres';
    }
    return false;
  }

  errorValidMarca(){
    if(this.marca.invalid) {
      return 'A marca de ter entre 5 a 40 caracteres';
    }
    return false;
  }

}
