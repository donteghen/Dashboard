import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-profile1',
  templateUrl: './profile1.component.html',
  styleUrls: ['./profile1.component.scss']
})
export class Profile1Component implements OnInit {
 
  imagesBasic : Project[];
imgagesBasicView : Project[] ;
CurrentPage : number = 1;
  constructor(private projectSevice : ProjectService) { }

  ngOnInit() {
  this.projectSevice.getProjects().subscribe(data => {
    this.imagesBasic = data;
    this.getPage(this.CurrentPage);
    }); 
  }
  
 getPage(num: number){
   this.CurrentPage = num;
   this.imgagesBasicView = this.imagesBasic.slice((this.CurrentPage - 1 )* 6, 6 * this.CurrentPage);
 }

 get pageNumbers():number[]{
        return Array(Math.ceil(this.imagesBasic.length / 6))
        .fill(0).map((x,  i) => i + 1);
    }
  
    getNext(){
      if(this.CurrentPage < this.pageNumbers.length){
        this.getPage(this.CurrentPage + 1);
      }
    }
    getPrevious(){
      if(this.CurrentPage > 1){
        this.getPage(this.CurrentPage - 1);
      }
    }
}
