import { Component } from '@angular/core';
import { faBolt, faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  title = 'INFO07-duel-de-heros';

  faCoins = faCoins;
  faBolt = faBolt;

  // onClick is when the user clicks on the nav links
  onClick(event: any) {
    // We get the element that was clicked
    const element = event.target;
    // We get the parent of the element that was clicked
    const parent = element.parentElement;
    // We get all the nav links
    const navLinks = document.querySelectorAll('.nav-link');
    // We loop through the nav links
    navLinks.forEach((link) => {
      // remove all div with id select-icon in the nav links
      link.querySelectorAll('#select-icon').forEach((div) => {
        div.remove();
      })
    });
    
    // get the select-icon div and copy it into the current nav link
    const selectIcon = document.getElementById('select-icon');
    const selectIconCopy = selectIcon!.cloneNode(true);
    // remove the style="display: none;" from the div

    // get the active nav link and happend the select-icon div
    element.appendChild(selectIconCopy);
    // Get the select-icon int current element and remove the style="display: none;"
    const selectIconInElement = element.querySelector('#select-icon');
    selectIconInElement!.removeAttribute('style');
  }
}
