import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FeedItem } from './feed-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlickrFeedService {
  constructor(private http: HttpClient) { }

  fetchFeed(): Observable<FeedItem[]> {
    return this.http.get<FeedItem[]>('/api/v1/feed');
  }
}
