import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Moveable-Box-AngularApp';
  co_ordinateX: any;
  co_ordinateY: any;
  count: number = 1;
  activeListOfBoxes = [];
  currentActiveBox = null;
  activeBoxId = null;

  constructor() {}

  ngOnInit() {}

  //This Function will creates a box and assigns and Id to it to Track
  addBoxToView() {
    const box = {
      Id: this.count,
    };
    this.activeListOfBoxes.push(box);
    this.count = this.count + 1;
  }

  //This is functions gets the selected box id on the view
  setWindowListener(Id) {
    this.currentActiveBox = document.getElementById(Id);
    this.activeBoxId = Id;
  }

  //This is functions listens for keboard events up,down,left,right
  // -- depending on the event type it calls the changeCoordinates with respective paramters.
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' || event.key.toLowerCase() == 's') {
      this.changeCoordinates('0', '1');
    }
    if (event.key === 'ArrowUp' || event.key.toLowerCase() == 'w') {
      this.changeCoordinates('0', '-1');
    }
    if (event.key === 'ArrowLeft' || event.key.toLowerCase() == 'a') {
      this.changeCoordinates('-1', '0');
    }
    if (event.key === 'ArrowRight' || event.key.toLowerCase() == 'd') {
      this.changeCoordinates('1', '0');
    }
    if (event.key === 'Delete') {
      this.currentActiveBox.parentNode.removeChild(this.currentActiveBox);
    }
  }

  //Depending on the current position, it will calculates and moves the element.
  changeCoordinates(dx, dy) {
    if (this.currentActiveBox != null) {
      this.co_ordinateX = this.currentActiveBox.style.marginLeft;
      this.co_ordinateY = this.currentActiveBox.style.marginTop;
      this.co_ordinateX = parseInt(this.co_ordinateX) + 15 * dx;
      this.co_ordinateY = parseInt(this.co_ordinateY) + 15 * dy;
      if (this.co_ordinateX < 0) {
        this.co_ordinateX = 0;
      }
      if (this.co_ordinateY < 0) {
        this.co_ordinateY = 0;
      }
      if (this.co_ordinateX > 770) {
        this.co_ordinateX = 770;
      }
      if (this.co_ordinateY > 330) {
        this.co_ordinateY = 330;
      }
      this.currentActiveBox.style.marginLeft = this.co_ordinateX + 'px';
      this.currentActiveBox.style.marginTop = this.co_ordinateY + 'px';
    }
  }
}
