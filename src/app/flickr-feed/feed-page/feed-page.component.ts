import { Component } from '@angular/core';
import { FlickrFeedService } from '../flickr-feed.service';
import { Observable } from 'rxjs';
import { FeedItem } from '../feed-item';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent {
  feed: Observable<FeedItem[]> = this.feedService.fetchFeed();

  constructor(private feedService: FlickrFeedService) { }
}
