import "./Club.css";

function Club() {

  // function initMap() {

  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 8,
  //     center: {lat: -34.397, lng: 150.644}
  //   });
  // }

  return (
    <div>
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
