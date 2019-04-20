import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedPageComponent } from './feed-page/feed-page.component';

@NgModule({
  declarations: [
    FeedPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FeedPageComponent
  ]
})
export class FlickrFeedModule { }
