import { createSelector } from '@ngrx/store';
import { projectsFeatureKey, ProjectState } from '.';

// Selector for projects from the project feature slice

// first, select the feature slice from the global store state
export const selectProjectState = (state: any) => state[projectsFeatureKey];

// second, select the relevant property from the feature module's slice
export const selectAllProjects = createSelector(
  selectProjectState,
  (state: ProjectState) => {
    //console.log(JSON.stringify(state));
    return state.projects;
  }
);

// second, select the relevant property from the feature module's slice
export const selectSelectedProject = createSelector(
  selectProjectState,
  (state: ProjectState) => {
    //console.log(JSON.stringify(state));
    return state.selectedProject;
  }
);
