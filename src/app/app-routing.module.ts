import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { PlatosComponent } from './components/platos/platos.component';
import { RouterGuards } from './guards/router.guards';

const routes: Routes = [
  {path: '', component: PlatosComponent, canActivate: [RouterGuards]},
  {path: 'login', component: LoginComponent},
  {path: 'plato/:id', component: DetalleComponent, canActivate: [RouterGuards]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
