import { Component } from '@angular/core';
import { FlickrFeedService } from '../flickr-feed.service';
import { Observable, combineLatest, Subject, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FeedItem } from '../feed-item';
import { TagsService, Tagmode } from '../tags.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent {
  private refresh$ = new BehaviorSubject(undefined);

  feed: Observable<FeedItem[]> = combineLatest(
    this.tagsService.tags$(),
    this.tagsService.tagmode$(),
    this.refresh$,
  ).pipe(
    switchMap(([tags, tagmode, _]: [string[], Tagmode, any]) =>
      this.feedService.fetchFeed(tags, tagmode))
  );

  constructor(private feedService: FlickrFeedService, private tagsService: TagsService) { }

  refresh(): void {
    this.refresh$.next(undefined);
  }
}
