import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Moveable-Box-AngularApp';
  count = 1;
  activeListOfBoxes = [];
  currentActiveBox = null;

  // this function creates a box and add to activeListBoxes arrayList, to display on view
  addBoxToView() {
    const box = {
      id: `window:${this.count}`,
      index: this.count,
    };
    this.activeListOfBoxes.push(box);
    this.count = this.count + 1;
  }

  // this function sets the selected selected Box Id to currentActiveBox
  setWindowListener(id: string) {
    this.currentActiveBox = document.getElementById(id);
  }

  //this function handles the keyboards events on the selected box [up,down,left,right]
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    const posLeft = this.currentActiveBox.offsetLeft;
    const posTop = this.currentActiveBox.offsetTop;
    if (event.key === 'ArrowUp' || event.key.toLowerCase() == 'w') {
      this.currentActiveBox.style.marginTop = posTop - 58 + 'px';
      console.log(event.key);
    }
    if (event.key === 'ArrowDown' || event.key.toLowerCase() == 's') {
      this.currentActiveBox.style.marginTop = posTop + 58 + 'px';
      console.log(event.key);
    }
    if (event.key === 'ArrowLeft' || event.key.toLowerCase() == 'd') {
      this.currentActiveBox.style.marginLeft = posLeft - 58 + 'px';
      console.log(event.key);
    }
    if (event.key === 'ArrowRight' || event.key.toLowerCase() == 'a') {
      this.currentActiveBox.style.marginLeft = posLeft + 58 + 'px';
      console.log(event.key);
    }
    if (event.key === 'Delete') {
      this.currentActiveBox.parentNode.removeChild(this.currentActiveBox);
    }

    // switch (event.key.toLowerCase()) {
    //   case "arrowup":
    //     this.currentActiveBox.style.marginTop = posTop - 58 + "px";
    //     break;
    //   case "arrowdown":
    //     this.currentActiveBox.style.marginTop = posTop + 58 + "px";
    //     break;
    //   case "arrowleft":
    //     this.currentActiveBox.style.marginLeft = posLeft - 58 + "px";
    //     break;
    //   case "arrowright":
    //     this.currentActiveBox.style.marginLeft = posLeft + 58 + "px";
    //     break;
    // }
  }
}
