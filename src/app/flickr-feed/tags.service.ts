import { Injectable } from '@angular/core';
import { LocalStorageBehaviorSubject } from '../LocalStorageBehaviorSubject';
import { Observable } from 'rxjs';

export type Tagmode = 'all' | 'any';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private tags = new LocalStorageBehaviorSubject<string[]>('tags', []);
  private tagmode = new LocalStorageBehaviorSubject<Tagmode>('tagmode', 'all');

  tagmode$(): Observable<Tagmode> {
    return this.tagmode.asObservable();
  }

  tags$(): Observable<string[]> {
    return this.tags.asObservable();
  }

  changeTagmode(tagmode: Tagmode): void {
    this.tagmode.next(tagmode);
  }

  add(tag: string): void {
    const tags = this.tags.value;
    if (tags.includes(tag)) {
      return;
    }

    this.tags.next([...tags, tag]);
  }

  remove(tag: string): void {
    const tags = this.tags.value;
    const index = tags.indexOf(tag);

    if (index >= 0) {
      tags.splice(index, 1);
      this.tags.next(tags);
    }
  }
}
