import { Component, OnInit } from '@angular/core';
import { TableConstants } from '../Common-Module/table-constants';


@Component({
  selector: 'app-user-manual',
  templateUrl: './user-manual.component.html',
  styleUrls: ['./user-manual.component.scss']
})
export class UserManualComponent implements OnInit {

  data: any[] = [];
  usermanualCols: any;

  constructor() { }

  ngOnInit(): void {
    this.usermanualCols = TableConstants.UserManualColumns
    this.data = [
      { 'sno': '1', 'title': 'Birth Certificate CC', 'documentype': 'pdf', 'download': 'Download(2.57MB)'}
    ]
  }

}
