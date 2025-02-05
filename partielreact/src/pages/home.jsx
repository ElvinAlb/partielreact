import Search from "../components/Search";
import FilmPopulaire from "../components/FilmPopulaire";
import FilmTendance from "../components/FilmTendance";



export default function Home() {
    return(
        <>
        
        <Search />
        <FilmPopulaire />
        <FilmTendance />
        </>
    );
  }