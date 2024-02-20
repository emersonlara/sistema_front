import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
//import { LoginComponent } from './views/components/login/login.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { CategoriaReadComponent } from './views/components/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './views/components/categoria/categoria-create/categoria-create.component';
import { CategoriaUpdateComponent } from './views/components/categoria/categoria-update/categoria-update.component';
import { CategoriaDeleteComponent } from './views/components/categoria/categoria-delete/categoria-delete.component';
import { EquipamentoReadComponent } from './views/components/equipamento/equipamento-read/equipamento-read.component';
import { EquipamentoCreateComponent } from './views/components/equipamento/equipamento-create/equipamento-create.component';
import { EquipamentoUpdateComponent } from './views/components/equipamento/equipamento-update/equipamento-update.component';
import { EquipamentoDeleteComponent } from './views/components/equipamento/equipamento-delete/equipamento-delete.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { ComponentPortal } from 'ngx-toastr';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';
//import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [

  /*
  {
    path:'login',
    component: LoginComponent
  },
  {
     path : '', component: NavComponent,canActivate: [AuthGuard], children: [
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'tecnicos',
        component:TecnicoReadComponent
      },
      {
        path:'tecnicos/create',
        component:TecnicoCreateComponent
      },
      {
        path:'tecnicos/update/:id',
        component:TecnicoUpdateComponent
      },
      {
        path:'tecnicos/delete/:id',
        component:TecnicoDeleteComponent
      },
      {
        path:'clientes',
        component:ClienteReadComponent
    
      },
      {
        path:'clientes/create',
        component:ClienteCreateComponent
      },
      {
        path:'clientes/update/:id',
        component:ClienteUpdateComponent
      },
      {
        path:'clientes/delete/:id',
        component:ClienteDeleteComponent
      }

     ]
  }

  */
  //----antigo 

  {
    path:'',
    component: HomeComponent
  },
  {
    path:'tecnicos',
    component:TecnicoReadComponent
  },
  {
    path:'tecnicos/create',
    component:TecnicoCreateComponent
  },
  {
    path:'tecnicos/update/:id',
    component:TecnicoUpdateComponent
  },
  {
    path:'tecnicos/delete/:id',
    component:TecnicoDeleteComponent
  },
  {
    path:'clientes',
    component:ClienteReadComponent

  },
  {
    path:'clientes/create',
    component:ClienteCreateComponent
  },
  {
    path:'clientes/update/:id',
    component:ClienteUpdateComponent
  },
  {
    path:'clientes/delete/:id',
    component:ClienteDeleteComponent
  },
  {
    path:'categorias',
    component:CategoriaReadComponent
  },
  {
    path:'categorias/create',
    component:CategoriaCreateComponent
  },
  {
    path:'categorias/update/:id',
    component:CategoriaUpdateComponent
  },
  {
    path:'categorias/delete/:id',
    component:CategoriaDeleteComponent
  },
  {
    path:'equipamentos',
    component:EquipamentoReadComponent
  },
  {
    path:'equipamentos/create',
    component:EquipamentoCreateComponent
  },
  {
    path:'equipamentos/update/:id',
    component:EquipamentoUpdateComponent
  },
  {
    path:'equipamentos/delete/:id',
    component:EquipamentoDeleteComponent
  },
  {
    path:'os',
    component:OsReadComponent
  },
  {
    path:'os/closed',
    component:OsClosedComponent
  },
  {
    path:'os/create',
    component:OsCreateComponent
  },
  {
    path:'os/update/:id',
    component:OsUpdateComponent
  },
  {
    path:'os/view/:id',
    component:OsViewComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
