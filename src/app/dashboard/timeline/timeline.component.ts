import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';

import { User } from '@app/shared/user';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() users: User[];
  posts: any[] = [];
  likeNumber: number = Math.floor((Math.random() * 100) + 1);
  favoriteNumber: number = Math.floor((Math.random() * 100) + 1);
  shareNumber: number = Math.floor((Math.random() * 100) + 1);
  postDate: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  /** Add like to post */
  addLike(): void {
    this.likeNumber++;
  }

  /** Add post as favorite */
  addFavorite(): void {
    this.favoriteNumber++;
  }

  /** share post */
  share(): void {
    this.shareNumber++;
  }

  /** Adds a new post to timeline */
  addNewPost(postMessage: HTMLInputElement): void {
    this.posts.unshift(postMessage.value);
    postMessage.value = '';
  }
}
