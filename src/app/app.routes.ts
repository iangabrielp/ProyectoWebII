import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DetalleUsuariosComponent } from './pages/detalle-usuarios/detalle-usuarios.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    
    {
        path:'usuarios',
    component: UsuariosComponent
    },
    {
        path:'usuarios/:idUsuario',
        component:DetalleUsuariosComponent
    },
    {
        path:'',
       redirectTo:'home',
       pathMatch:'full'
    },
];
