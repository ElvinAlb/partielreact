import "./../css/style.css"

function Search() {
  return (
    <div class="search-container saveMe">
      <input type="text" placeholder="Rechercher un film" />
      <button type="submit"><i class="fas fa-search"></i></button>
    </div>
  );
}

export default Search;