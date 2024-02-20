import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/servicos/categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})

export class CategoriaDeleteComponent implements OnInit {

  id_categoria  = '';

  categoria: Categoria = {
    id: '',
    descricao: ''
  }
  

  constructor(
    private router: Router,
    private service: CategoriaService,    
    private route: ActivatedRoute) { }    

    ngOnInit(): void {
      this.id_categoria = this.route.snapshot.paramMap.get('id')!;    
      this.findById();
    }

    findById():void{
      this.service.findById(this.id_categoria).subscribe(resposta =>{
        this.categoria = resposta;
      })
    }

    delete():void{
      this.service.delete(this.id_categoria).subscribe( resposta => {
        this.router.navigate(['categorias']);
        this.service.message('Categoria excluída com sucesso!') 

      }, err => {
        console.log(err);
      })


    }

  

  cancel(): void {
    this.router.navigate(['categorias']);
  }
 
}
