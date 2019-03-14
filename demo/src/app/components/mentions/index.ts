
export * from './mention.component';

import {NgModule} from '@angular/core';

import {NgMentionsModule} from 'ng-mentionz';
import {NthdSharedModule} from '../../shared';
import {NthdComponentsSharedModule} from '../shared';
import {NthdMentionsComponent} from './mention.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NthdSharedModule, NthdComponentsSharedModule, NgMentionsModule],
  exports: [NthdMentionsComponent],
  declarations: [NthdMentionsComponent, ...DEMO_DIRECTIVES]
})
export class NgxdMentionsModule {}
