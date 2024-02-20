import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipamento } from 'src/app/models/equipamentos';
import { EquipamentoService } from 'src/app/servicos/equipamento.service';

@Component({
  selector: 'app-equipamento-update',
  templateUrl: './equipamento-update.component.html',
  styleUrls: ['./equipamento-update.component.css']
})
export class EquipamentoUpdateComponent implements OnInit{

  id_equipamento = '';

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
    private service: EquipamentoService,
    private route: ActivatedRoute  ) { }

  ngOnInit(): void {
     this.id_equipamento = this.route.snapshot.paramMap.get('id')!
     this.findById();
  }

  cancel(): void {
    this.router.navigate(['equipamentos']);
  }
  
  findById():void{
    this.service.findById(this.id_equipamento).subscribe(resposta => {
      this.equipamento = resposta;
    })
  }
  
  update(): void {
      this.service.update(this.equipamento).subscribe((resposta) => {
        this.router.navigate(['equipamentos']);
        this.service.message('Equipamento alterado com sucesso!');
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
