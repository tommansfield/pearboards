import { Component, OnInit, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { PostIt } from 'src/app/core/models/postit.model';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.css'],
})
export class PostitComponent implements OnInit {
  @Input() data: PostIt;
  constructor() {}

  ngOnInit(): void {}
}
