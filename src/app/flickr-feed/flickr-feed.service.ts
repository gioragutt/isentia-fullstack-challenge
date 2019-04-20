import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FeedItem, RawFeedItem, parseRawFeedItem } from './feed-item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlickrFeedService {
  constructor(private http: HttpClient) { }

  fetchFeed(): Observable<FeedItem[]> {
    return this.http.get<RawFeedItem[]>('/api/v1/feed').pipe(
      map(rawFeedItems => rawFeedItems.map(parseRawFeedItem))
    );
  }
}
