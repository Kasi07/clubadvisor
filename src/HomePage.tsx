import "./HomePage.css";
// import Club from "./Club";
import axios from "axios";
import { useState } from "react";
import Search from "./Search";
// const [clubState, setClubState] = useState(0);


function HomePage() {
  const [homeState, setHomeState] = useState(true);
  // const [clubState, setClubState] = useState(false);
  const [searchState, setSearchState] = useState(false);
  const handleSubmit = (event: { preventDefault: () => void }) => {
    
    event.preventDefault(); // Prevent form submission

    const inputValue = document.getElementById(
      "inputField"
    ) as HTMLInputElement; // Retrieve input field value
    if(inputValue.value == ""){
      return null;
    }

  setHomeState(false)
  setSearchState(true)
  axios
      .get("http://localhost:8080/GetAllCLubs", {
        //params: { search: inputValue.value },
      })
      .then((response) => {
        const responsedata = response.data;
        // Handle the response from the server
        console.log(responsedata);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };
 

  return (
    <div>
    {homeState ?
    (<div className="home-page">
      <div className="box">
        <div className="centered-content">
          <h1>Clubadvisor</h1>
          <div className="search-bar">
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                id="inputField"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>) : <></>}
    {searchState ? <Search /> : <></>}
  </div>
  );
}

export default HomePage;
