import { Action } from '@ngrx/store';
import { Project } from '../../models/project';
import {
  AddProjectFinishedAction,
  DeleteProjectFinishedAction,
  LoadAllProjectsFinishedAction,
  ProjectActionTypes,
  SelectProjectAction,
} from '../actions';

export function selectedProjectsReducer(
  state: Project | null = null,
  action: Action
): Project | null {
  console.log('STATE BEFORE REDUCER: ' + JSON.stringify(state));

  switch (action.type) {
    case ProjectActionTypes.SelectProject: {
      console.log('Reducer for: ' + ProjectActionTypes.SelectProject);

      let selectedProject = (action as SelectProjectAction).payload;

      console.log('project was selected: ' + JSON.stringify(selectedProject));

      return selectedProject;
    }

    default:
      return state;
  }
}

export function projectsReducer(
  state: Project[] = [],
  action: Action
): Project[] {
  switch (action.type) {
    case ProjectActionTypes.AddProjectFinished: {
      //console.log('Reducer for: ' + ProjectActionTypes.AddProjectFinished);

      // works with a single array
      return [...state, (action as AddProjectFinishedAction).payload];
    }
    case ProjectActionTypes.LoadAllProjectsFinished: {
      //console.log('Reducer for: ' + ProjectActionTypes.LoadAllProjectsFinished);
      //console.log('STATE BEFORE REDUCER: ' + JSON.stringify(state));

      return [...(action as LoadAllProjectsFinishedAction).payload];
    }
    case ProjectActionTypes.LoadSingleProjectFinished: {
      //console.log(
      //  'Reducer for: ' + ProjectActionTypes.LoadSingleProjectFinished
      //);

      return [...state];
    }
    case ProjectActionTypes.DeleteProjectFinished: {
      //console.log('Reducer for: ' + ProjectActionTypes.DeleteProjectFinished);

      let deletedProject = (action as DeleteProjectFinishedAction).payload;

      //console.log('project was deleted: ' + JSON.stringify(deletedProject));

      return state.filter((p) => p.id !== deletedProject.id);
    }

    default:
      return [...state];
  }
}
