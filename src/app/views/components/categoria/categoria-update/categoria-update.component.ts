import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/servicos/categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  id_categoria  = '';

  categoria: Categoria = {
    id: '',
    descricao: ''
  }
  
  descricao = new FormControl('',[Validators.minLength(4)] )

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

    update():void{
      this.service.update(this.categoria).subscribe((resposta => {
        this.router.navigate(['categorias']);
        this.service.message('Categoria atualizada com sucesso!')
      }))

    }

  cancel(): void {
    this.router.navigate(['categorias']);
  }



  errorValidDescricao(){
    if(this.descricao.invalid) {
      return 'A descrição de ter entre 5 a 40 caracteres';
    }
    return false;
  }
  

}




