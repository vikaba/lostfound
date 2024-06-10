import { Component } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemsService } from '../../services/items.service';
import { UsersService } from '../../services/users.service';
import { CookieService } from 'ngx-cookie-service';
import { SESSION_KEY } from '../../constants';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  currUser? : string = '';
  items? : Item[];
  editing : {[id: number] : boolean} = {};

  constructor(private itemService: ItemsService, private cookieService: CookieService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    const session = this.cookieService.get(SESSION_KEY);
    if (session) {
      this.usersService.getBySession(session)
        .subscribe({
          next: (data) => {
            this.currUser = data.email;
            this.getItems();
          },
          error: (err) => console.error(err)
        })
    } else {
      this.getItems();
    }
  }

  getItems(): void {
    this.itemService.getAll()
      .subscribe({
        next: (data) => {
          this.items = data;
        },
        error: (err) => console.error(err)
      })
  }
}
