import { Component } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';
import { Location } from '../../models/location.model';
import { LocationsService } from '../../services/locations.service';
import { CookieService } from 'ngx-cookie-service';
import { SESSION_KEY } from '../../constants';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  item : Item = {
    name: '',
    description: '',
    loc_name: '',
  };
  loggedIn = false;
  added = false;
  locations? : Location[];

  constructor(private itemService: ItemsService,
    private locationService: LocationsService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loggedIn = !!this.cookieService.get(SESSION_KEY);
    this.getLocations();
  }

  submitItem() : void  {
    const data = {
      name: this.item.name,
      description: this.item.description,
      locationId: this.item.loc_name,
      contactId: 1,
      date: Date.now()
    };

    this.itemService.create(data)
      .subscribe({
        next: (res) => {
          this.added = true;
        },
        error: (err) => console.error(err)
      });
  }

  addAnother() : void {
    this.added = false;
    this.item = {
      name: '',
      description: '',
      loc_name: ''
    }
  }

  getLocations(): void {
    this.locationService.getAll()
      .subscribe({
        next: (data) => {
          this.locations = data;
        },
        error: (err) => console.error(err)
      })
  }
}
