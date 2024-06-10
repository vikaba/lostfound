import { Component, Input } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: '[app-item]',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() itemInfo? : Item;
  @Input() currUser? = '';
  canEdit = false;
  editing = false;
  newVals : FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    desc: new FormControl<string>('')
  });

  ngOnInit() {
    this.canEdit = this.currUser === 'admin@admin.com' || this.itemInfo?.email === this.currUser;
    this.newVals = new FormGroup({
      name: new FormControl<string>(this.itemInfo?.name || 'b'),
      desc: new FormControl<string>(this.itemInfo?.description || 'a')
    });
  }

  constructor(private itemsService: ItemsService) {}

  editItem(): void {
    if (!this.editing) {
      this.editing = true;
    } else {
      this.editing = false;
      const newName = this.newVals?.controls['name'].value;
      const newDesc =  this.newVals?.controls['desc'].value;

      if (newName && newDesc) {
        this.itemsService.update(this.itemInfo?.id, 
          {name: newName, description: newDesc}
        )
        .subscribe({
          next: (data) => {
            if (this.itemInfo) {
              this.itemInfo.name = newName;
              this.itemInfo.description = newDesc;
            }
          },
          error: (err) => console.error(err)
        });
      }
    }
  }

  deleteItem(): void {
    this.itemsService.delete(this.itemInfo?.id)
      .subscribe({
        next: (data) => {
          window.location.reload();
        },
        error: (err) => console.error(err)
      })
  }
}
