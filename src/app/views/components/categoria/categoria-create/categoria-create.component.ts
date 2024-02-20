import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from 'src/app/servicos/categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {


  categoria: Categoria = {
    id: '',
    descricao: ''
  }

  descricao = new FormControl('',[Validators.minLength(4)] )

  constructor(
    private router: Router,
    private service: CategoriaService
    ) { }

  ngOnInit(): void {
     
  }

  cancel(): void {
    this.router.navigate(['categorias']);
  }

  
    create2(): void {
      this.service.create(this.categoria).subscribe(
        () => {
          this.router.navigate(['categorias']);
          this.service.message('Categoria salva com sucesso!');
        },
        (err) => {
          if (err?.error?.error?.includes('já cadastrado')) {
            // Usa a função includes() em vez de match() para verificar se a string 'já cadastrado' está presente
            this.service.message(err.error.error);
          }
        }
      );
    }

    create(): void {
      this.service.create(this.categoria).subscribe((resposta) => {
        this.router.navigate(['categorias']);
        this.service.message('Categoria salvo com sucesso!');
      })
    }
    

  errorValidDescricao(){
    if(this.descricao.invalid) {
      return 'A descrição de ter entre 5 a 40 caracteres';
    }
    return false;
  }

}
