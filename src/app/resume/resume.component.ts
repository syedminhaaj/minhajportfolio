import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private setTitle:Title, private renderer:Renderer2){
    this.setTitle.setTitle("Syed - Resume")
  }
  downloadFile(){
    const link=this.renderer.createElement("a");
link.setAttribute('target','_blank');
link.setAttribute('href','assets/resume.pdf');
link.setAttribute('download','Resume.pdf');
link.click();
link.remove();
  }
}
