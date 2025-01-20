import { Component, Input, inject } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-diaolog-add-player',
  imports: [MatDialogModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule,],
  templateUrl: './diaolog-add-player.component.html',
  styleUrl: './diaolog-add-player.component.scss'
})
export class DiaologAddPlayerComponent {

  name: string = '';

  readonly dialog = inject(MatDialog);

  onNoClick(): void {
    
    this.dialog.closeAll();
  }
  

}
