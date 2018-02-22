import { Directive,HostListener } from '@angular/core';

@Directive({
  selector: '[appGototop]'
})
export class GototopDirective {

  constructor() { }
 @HostListener('click') onclick(){
  window.scrollTo(0, 0);
 }
 
 //onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }
}
