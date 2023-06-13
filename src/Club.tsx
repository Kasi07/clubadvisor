import axios from "axios";
import "./Club.css";

function Club() {

  const loadClub = (event: { preventDefault: () => void }) => {
    
    event.preventDefault(); // Prevent form submission
  axios
      .get("http://localhost:8080/FindClubByName/Sputnik V1", {
      })
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  return (
    <div>
      loadClub();
      <div className="grid">
        <header id="Header">Mannheimer Studentenclub</header>
        <article>Dummy Daten, hier kommt die Clubbeschreibung hin</article>
        <nav>Steckbrief</nav>
        <aside className="sidebar-right">-Musikrichtung 
        -Personenzahl
        -Öffnungszeiten
        </aside>
        <footer>Footer
        </footer>
      </div>
    </div>
  );
} 

export default Club;
