import { NgModule } from '@angular/core';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { SharedModule } from '../shared/shared.module';
import { TagsInputComponent } from './tags-input/tags-input.component';
import { FeedListComponent } from './feed-list/feed-list.component';

@NgModule({
  declarations: [
    FeedPageComponent,
    FeedItemComponent,
    TagsInputComponent,
    FeedListComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    FeedPageComponent,
    TagsInputComponent,
  ]
})
export class FlickrFeedModule { }
