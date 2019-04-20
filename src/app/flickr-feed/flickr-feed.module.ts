import { NgModule } from '@angular/core';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FeedPageComponent,
    FeedItemComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    FeedPageComponent
  ]
})
export class FlickrFeedModule { }
