import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// angular material
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';


//componentes criados
import { HeaderComponent } from './views/components/template/header/header.component';
import { FooterComponent } from './views/components/template/footer/footer.component';
import { NavComponent } from './views/components/template/nav/nav.component';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { LoginComponent } from './views/components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AutInterceptorProvider } from './interceptors/auth.interceptor';
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
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { OsViewComponent } from './views/components/os/os-view/os-view.component';
import { OsClosedComponent } from './views/components/os/os-closed/os-closed.component';
import { ImportarArquivoComponent } from './views/components/importar/importar-arquivo/importar-arquivo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    TecnicoReadComponent,
    TecnicoCreateComponent,
    TecnicoUpdateComponent,
    TecnicoDeleteComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    LoginComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaUpdateComponent,
    CategoriaDeleteComponent,
    EquipamentoReadComponent,
    EquipamentoCreateComponent,
    EquipamentoUpdateComponent,
    EquipamentoDeleteComponent,
    OsReadComponent,
    OsCreateComponent,
    OsUpdateComponent,
    OsViewComponent,
    OsClosedComponent,
    ImportarArquivoComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatMenuModule,
    MatSnackBarModule,
    ToastrModule.forRoot({
      timeOut:4000,
      closeButton:true,
      progressBar:true
    })
  ],
  providers: [AutInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
