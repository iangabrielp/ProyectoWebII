import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DetalleUsuariosComponent } from './pages/detalle-usuarios/detalle-usuarios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { FormularioLibrosComponent } from './pages/formulario-libros/formulario-libros.component';
import { DetalleLibrosComponent } from './pages/detalle-libros/detalle-libros.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'nosotros',
        component: NosotrosComponent
    },
    {
        path:'contactos',
        component: ContactosComponent
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
        path:'libros',
        component:LibrosComponent
    },
    {
        path:'formulariolibros',
        component:FormularioLibrosComponent
    },
    {
        path:'libros/:idLibro',
        component:DetalleLibrosComponent
    },
    {
        path:'',
       redirectTo:'home',
       pathMatch:'full'
    },
];
