import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MenuNavInter } from '../menu-nav-inter';
import { signal } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  standalone: true,
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss'],
  imports:[CommonModule, MatListModule, MatIconModule, RouterModule]
})
export class MenuNavComponent {
  menuItems = signal<MenuNavInter[]>([
    { label: 'Dashboard', icon: 'home', route: '/dashboard' },
    {
      label: 'Coupons',
      icon: 'local_offer',
      children: [
        { label: 'List Coupons', icon: 'circle', route: '/coupons/list' },
        { label: 'Create Coupons', icon: 'circle', route: '/coupons/create' }
      ]
    },
    { label: 'Settings', icon: 'settings', route: '/settings' }
  ]);

  toggleSubmenu(item: MenuNavInter) {
    item.expanded = !item.expanded;
  }
}
