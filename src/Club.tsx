import axios from "axios";
import "./Club.css";
import { useEffect, useState } from "react";
import WeatherComponent from "./components/WeatherComponent";




function Club() {

  const [userData, setUserData] = useState<UserData | null>(null);
  const searchValue = "Sputnik V1";

  
  interface UserData {
    name: string;
    des: string;
    owner? :{
    name: string;
    email: string
    }
  }
useEffect(() => {
  const loadClub = () => {
    
  axios
      .get(`http://localhost:8080/FindClubByName/${searchValue}`, {
      })
      .then((response) => {
        // Handle the response from the server
        const responseData = response.data;
        setUserData(responseData)
        console.log(userData);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };
  loadClub();
}, [])
const handleLoad = () => {
  useEffect;
}

  return (
    <div>
      <div className="grid">
        <header id="Header" onLoad={handleLoad}> {userData?.name}</header>
        <article>{userData?.des}</article>
        <nav>Steckbrief</nav>
        <aside className="sidebar-right">- Techno <br />
        - 250 Personen max.<br />
        Öffnungszeiten: <br/>
        22:00 Uhr bis 05:00 Uhr Dienstag - Sonntag <br />
        <WeatherComponent/>
        </aside>
        <footer>Kontakt: <br />
          {userData?.owner?.name} <br />
          {userData?.owner?.email}
        </footer>
      </div>
    </div>
  );
} 

export default Club;
