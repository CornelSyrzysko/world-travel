import $ from 'jquery';

class MobileMenu{
  /*constructor(){
    $(".site-header__menu-icon").click(function(){
      this.menuContent.toggleClass("site-header__menu-content--is-visible");
      console.log("hi there")
    })
  }*/

  constructor(){
      this.siteHeader = $(".site-header");
      this.menuIcon = $(".site-header__menu-icon");
      this.menuContent = $(".site-header__menu-content");
      this.events();
      });
    }

    events(){
      this.menuIcon.click(this.toggle_the_menu.bind(this));
    }

    toggle_the_menu(){
      this.menuContent.toggleClass("site-header__menu-content--is-visible");
      this.siteHeader.toggleClass("site-header--is-expanded");
      this.menuIcon.toggleClass("site-header__menu-icon--close-x");
      console.log("hi there");
    }
  }

}

export default MobileMenu
