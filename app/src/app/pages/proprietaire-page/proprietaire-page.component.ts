import { PropriAddformComponent } from './../../backoffice/proprietaire/propri-addform/propri-addform.component';



import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
// export interface DialogData {
//   // animal: string;
//   // name: string;
// }
@Component({
  selector: 'app-proprietaire-page',
  templateUrl: './proprietaire-page.component.html',
  styleUrls: ['./proprietaire-page.component.scss']
})
export class ProprietairePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  // openDialog() {

  //   const dialogRef = this.dialog.open(PropriAddformComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });

  // }
}


