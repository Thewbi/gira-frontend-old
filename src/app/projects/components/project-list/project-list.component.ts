import { Project } from './../../../models/project';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/* Simple component that contains no logic and just renders it's input */
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  @Input()
  projects!: Project[] | null;

  @Input()
  selectedProject: Project | null;

  @Output()
  deleteProject = new EventEmitter<Project>();

  @Output()
  selectProject = new EventEmitter<Project>();

  constructor() { this.selectedProject = null;}

  ngOnInit() {
  }

  delete(event: any, project: Project) {
    event.stopPropagation();
    console.log("User wants to delete the project " + JSON.stringify(project));
    this.deleteProject.emit(project);
  }

  onSelect(project: Project) {
    console.log("Project selected: " + JSON.stringify(project));
    this.selectProject.emit(project);
  }

}
