import { Component } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { TagsService, Tagmode } from '../tags.service';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.scss']
})
export class TagsInputComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly tagmodes = ['all', 'any'];

  constructor(private tagsService: TagsService) { }

  tags$ = this.tagsService.tags$();
  tagmode$ = this.tagsService.tagmode$();

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    const tag = (value || '').trim();

    if (tag) {
      this.tagsService.add(tag);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    this.tagsService.remove(tag);
  }

  tagmodeChanged(tagmode: Tagmode) {
    this.tagsService.changeTagmode(tagmode);
  }
}
