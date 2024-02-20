import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipamento } from 'src/app/models/equipamentos';
import { EquipamentoService } from 'src/app/servicos/equipamento.service';

@Component({
  selector: 'app-equipamento-delete',
  templateUrl: './equipamento-delete.component.html',
  styleUrls: ['./equipamento-delete.component.css']
})

export class EquipamentoDeleteComponent implements OnInit{
  id_equipamento  = '';

  equipamento: Equipamento = {
    id: '',
    nome: '',
    serie:'',
    marca:''
  }
  

  constructor(
    private router: Router,
    private service: EquipamentoService,    
    private route: ActivatedRoute) { }    

    ngOnInit(): void {
      this.id_equipamento = this.route.snapshot.paramMap.get('id')!;    
      this.findById();
    }

    findById():void{
      this.service.findById(this.id_equipamento).subscribe(resposta =>{
        this.equipamento = resposta;
      })
    }

    delete():void{
      this.service.delete(this.id_equipamento).subscribe( resposta => {
        this.router.navigate(['equipamentos']);
        this.service.message('Equipamento excluído com sucesso!') 

      }, err => {
        console.log(err);
      })
    }

  cancel(): void {
    this.router.navigate(['equipamentos']);
  }
 
}
