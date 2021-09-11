import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {
  }
  @HostListener("click") onClicks() {
    this.textDeco("3rem")
  }
  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("1.5rem")
  }


  private textDeco(action:string) {
    this.elem.nativeElement.style.fontSize= action;

  }

}
