import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Project } from 'src/app/models/project';
import { ProjectActionTypes } from '../../actions';
import { selectAllProjects, selectSelectedProject } from '../../reducers/project-selectors';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss'],
})
export class ProjectContainerComponent implements OnInit {
  // Two things to consider:
  // 1. when the state did not change, the memoized value can be returned without wasting CPU on computing that memoized value again
  // memoization is a feature of selectors
  // 2. Even with memoization, the same memoized value can be returned several times and the UI will update with the same
  // value. To prevent returning the same value over and over, store.select() is used. It will not return a value
  // if that value was returned prior. The UI will not constantly update.
  projects$: Observable<Project[]> = this.store.select(selectAllProjects);

  selectedProject$: Observable<Project | null> = this.store.select(selectSelectedProject);

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch({ type: ProjectActionTypes.LoadAllProjects });
  }

  addProject(project: Project) {
    console.log('User wants to add the project ' + JSON.stringify(project));
    this.store.dispatch({
      type: ProjectActionTypes.AddProject,
      payload: project,
    });
  }

  deleteProject(project: Project) {
    console.log('User wants to delete the project ' + JSON.stringify(project));
    this.store.dispatch({
      type: ProjectActionTypes.DeleteProject,
      payload: project,
    });
  }

  selectProject(project: Project) {
    this.store.dispatch({
      type: ProjectActionTypes.SelectProject,
      payload: project,
    });
  }
}
