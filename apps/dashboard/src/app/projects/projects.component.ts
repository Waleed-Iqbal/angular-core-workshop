import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from 'libs/core-data/src/index';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  selectedProject;
  projects: Project[];

  // doing dependency injection here (projectsService will automatically become a member of the class)
  constructor(private projectsService: ProjectsService) {
  }

  // This is fired when all of the data/bindings of the component are satisfied
  ngOnInit() {
    this.getProjects();
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  getProjects() {
    this.projects = this.projectsService.all();
  }

  cancel() {
    this.selectProject(null);
  }
}
