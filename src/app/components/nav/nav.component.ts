import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

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
      if(windowScroll >= 160){
        this.onScroll = true;
        console.log(windowScroll, this.onScroll)
        menu.style.top = "0";
      } else {
        this.onScroll = false;
        console.log(windowScroll, this.onScroll)
        menu.style.top = "10px";


      }
    }

}
