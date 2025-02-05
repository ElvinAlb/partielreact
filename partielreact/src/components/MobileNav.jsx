function MobileNav(){
    return(
        <nav class="nav-list-mobile" id="mobileNav">
        <a href="index.html"><i class="fas fa-film"></i></a>
        <div id="barr">
          <div class="tt">
            <div id="top-nav" class="bar"></div>
            <div id="middle-nav" class="bar"></div>
            <div id="bottom-nav" class="bar"></div>
          </div>
        </div>
        <div class="mobile-nav-content" id="menu-nav">
          <ul>
            <li><a href="#">Films</a></li>
            <li><a href="#">Séries</a></li>
            <li><a href="#">Populaires</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default MobileNav;