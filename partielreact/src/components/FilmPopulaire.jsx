function FilmPopulaire(){
    return (
        <div class="wrapper-pop">
      <div class="populaires-container container">
        <div class="title-filter saveMe" id="title-category">
          <h2>Séries TV</h2>

          <button class="active" id="top_rated">Mieux notées</button>
          <button id="popular">Populaires</button>
        </div>
        <div class="grid-tendances" id="populaires"></div>
      </div>
    </div>
    )
}

export default FilmPopulaire;