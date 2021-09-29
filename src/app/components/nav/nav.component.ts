import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;

  onScroll: boolean = false;
  // elementPosition: any;

  constructor() { }

  ngOnInit(): void {

  }
  // ngAfterViewInit(){
  //   this.elementPosition = this.menuElement.nativeElement.offsetTop;
  // }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      const windowScroll = window.pageYOffset;
      const menu = document.getElementById("nav-main") as HTMLElement;
      const cont = document.getElementById("nav-main-container") as HTMLElement;
      const ul = document.getElementById("nav-main").children[0] as HTMLElement;


      if(windowScroll >= 160){
        this.onScroll = true;
        menu.style.top = "0";
        cont.style.height = "58.4px";
        ul.style.fontSize = "1.15rem";
      } else {
        this.onScroll = false;
        menu.style.top = "10px";
        cont.style.height = "86px";
        ul.style.fontSize = "1.3rem";
      }
    }

}
