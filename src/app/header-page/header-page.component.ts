import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {
  
  isMenuOpen = false;

  @Output() navigateToAnchorLink = new EventEmitter();

  @Output() toggleSideNav = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    const hamburgerCheckbox = document.querySelector<HTMLInputElement>('.hamburger input');
    const responsiveMenu = document.querySelector<HTMLDivElement>('.responsive-menu');

    if (hamburgerCheckbox && responsiveMenu) {
      hamburgerCheckbox.addEventListener('change', function () {
        if (this.checked) {
          responsiveMenu.style.display = 'block';
        } else {
          responsiveMenu.style.display = 'none';
        }
      });
    }


  }

  // @ts-ignore
  navigateToAchorLinkTrigger(anchorName) {
    this.navigateToAnchorLink.emit(anchorName);
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  doToggleSideNav() {
    this.toggleSideNav.emit();
  }
}
