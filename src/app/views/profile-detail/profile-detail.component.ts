import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {
project : Project | any;
value : string[] = [0, 0, 0, 0, 0, 0].map(v => String(Math.ceil(Math.random() * 75) + 15));


  constructor(private activeRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.projectService.getProjects().subscribe(data =>{
        this.project = data.find(proj => proj.id === params.id)
        console.log(params.id, this.project)
      });
    });
  }
  
  
}
