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
import { LoginComponent } from './pages/login/login.component';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { authGuard } from './guards/auth.guard';
import { usuarioAuthGuard } from './guards/usuario-auth.guard';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { FormularioAutorComponent } from './components/formulario-autor/formulario-autor.component';
import { FormularioPrestamoComponent } from './components/formulario-prestamo/formulario-prestamo.component';
import { PanelUsuarioComponent } from './pages/panel-usuario/panel-usuario.component';

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
        component: ContactosComponent, canActivate:[usuarioAuthGuard]
    },
    {
        path:'usuarios',
        component: UsuariosComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'usuarios/:idUsuario',
        component:DetalleUsuariosComponent
    },
    {
        path:'libros',
        component:LibrosComponent, canActivate:[authGuard]
    },
    {
        path:'panelUsuario',
        component:PanelUsuarioComponent, canActivate:[authGuard]
    },
    {
        path:'formulariolibros',
        component:FormularioLibrosComponent, canActivate:[adminAuthGuard, authGuard]
    },
    {
        path:'formularioautor',
        component:FormularioAutorComponent
    },
    {
        path:'formularioprestamo',
        component:FormularioPrestamoComponent
    },
    {
        path:'libros/:idLibro',
        component:DetalleLibrosComponent
    },
    {
        path:'catalogo',
        component:CatalogoComponent
    },
    {
        path:'',
       redirectTo:'home',
       pathMatch:'full'
    },
];
