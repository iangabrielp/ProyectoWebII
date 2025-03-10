import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  constructor(private route: Router){}

  logout(){
    localStorage.setItem('usuario', "false")
    localStorage.setItem('admin', "false")
    localStorage.setItem('login', "false")
    this.route.navigate(['home'])
  }
}
