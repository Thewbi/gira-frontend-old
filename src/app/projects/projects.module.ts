import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProjectContainerComponent } from './components/project-container/project-container.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import * as fromProjects from './reducers';
import { ProjectsLoadAllEffectEffects } from './effects/projects-load-all-effect.effects';

@NgModule({
  declarations: [
    ProjectContainerComponent,
    ProjectFormComponent,
    ProjectListComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      fromProjects.projectsFeatureKey,
      fromProjects.reducers
      // { metaReducers: fromProjects.metaReducers }
    ),
    EffectsModule.forFeature([ProjectsLoadAllEffectEffects]),
  ],
})
export class ProjectsModule {}
