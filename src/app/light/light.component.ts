import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss'],
})
export class LightComponent implements OnInit {
  pos: any = this.document.documentElement;
  isShow = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

    this.pos.addEventListener('mousemove', (e: any) => {
      this.isShow = true;
      this.pos.style.setProperty('--x', e.clientX + 'px');
      this.pos.style.setProperty('--y', e.clientY + 'px');
    })
  }
}
