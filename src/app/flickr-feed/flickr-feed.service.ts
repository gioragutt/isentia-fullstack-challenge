import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FeedItem } from './feed-item';
import { Observable } from 'rxjs';
import { Tagmode } from './tags.service';

@Injectable({
  providedIn: 'root'
})
export class FlickrFeedService {
  constructor(private http: HttpClient) { }

  fetchFeed(tags: string[], tagmode: Tagmode): Observable<FeedItem[]> {
    const tagsQueryString = tags.join(',');
    return this.http.get<FeedItem[]>(`/api/v1/feed?tags=${tagsQueryString}&tagmode=${tagmode}`);
  }
}
