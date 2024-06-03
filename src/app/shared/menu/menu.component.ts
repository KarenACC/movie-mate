import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  public menuItems: MenuItem[] | undefined;
  public activeItem: any;

  ngOnInit() {
      this.menuItems = [
    {
        label: 'Cartelera',
        icon: 'pi pi-video',
        routerLink: 'home',
    },
    {
        label: 'Boletos',
        icon: 'pi pi-ticket'
    },
    {
        label: 'Alimentos',
        icon: 'pi pi-inbox'
    },
    {
      label: 'Invitado especial',
      icon: 'pi pi-sparkles',
      routerLink: 'trending',
  }
]
  }
  setActiveItem(label: any): void {
    this.activeItem = label;
  }

}
