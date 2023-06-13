import axios from "axios";
import "./Search.css"
import { useState } from "react";
import Club from "./Club";

function Search(this: any){
    const [clubState, setClubState] = useState(false);
    const [searchState, setSearchState] = useState(true)

    const handleSubmit = (event: { preventDefault: () => void }) => {
    
        event.preventDefault(); // Prevent form submission
    
        const inputValue = document.getElementById(
          "inputField"
        ) as HTMLInputElement; // Retrieve input field value
        if(inputValue.value == ""){
          return null;
        }

      axios
          .get("localhost8080/findClubbyName", {
            params: { search: inputValue.value },
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
      const handleClick = (_event: any) => {
        setClubState(true);
        setSearchState(false)
      };

    return (<div>
        {searchState &&
        <div className="background">
            <header className="header">
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
            
            </header>
            <aside className="sides"></aside>
            <article className="body">
                <a href="#" onClick = {handleClick}>
                    Mannheimer Studentenclub
                </a>
            </article>
        </div>}
        {clubState ? <Club/> : <></>}
    </div>
    );
}

export default Search;