import { Directive,ElementRef,HostListener,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCustomeDirective]'
})
export class CustomeDirectiveDirective {
  constructor(private el : ElementRef) { 
    //   e1.nativeElement.style.backgroundColor = "red";
     }
     ngAfterViewInit(){
       
     }
  @HostListener('mouseleave')onmouseleave(){
    this.highlight('green');
  }
  @HostListener('mouseenter') onmouseenter(){
    this.highlight('yellow');
  }
  @HostListener('scroll') onscroll(){
    //alert("scrolled");
    this.highlight('blue');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
   
}


