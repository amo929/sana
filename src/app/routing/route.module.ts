import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'

import { LandingComponent } from '../landing/landing.component'
import { StoryComponent } from '../story/story.component'

import { LandingService } from '../services/landing.service'
import { LogoutService } from '../services/logout.service'

const routes: Routes = [
	{ path: '', redirectTo: '/landing', pathMatch: 'full' },
	{ path: 'landing', component: LandingComponent, canActivate: [LogoutService] },
	{ path: 'story', component: StoryComponent, canActivate: [LandingService] }
];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
  providers: [LandingService]
})
export class RouteModule { }
