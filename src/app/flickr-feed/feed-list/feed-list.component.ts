import { Component, Input } from '@angular/core';
import { FeedItem } from '../feed-item';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent {
  @Input() feedItems: FeedItem[];
}
