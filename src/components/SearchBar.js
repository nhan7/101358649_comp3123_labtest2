import React, {useState} from 'react';


const SearchBar = ({onSearch}) =>{
    const [cityData, setCity] = useState('')


    const handleInputChange = (e) => {
        setCity(e.target.value)
    }

    const handleSearch = () =>{
        onSearch(cityData)
    }


    return(

        <div>
            <input type="text" placeholder="Enter City Name" value={cityData} onChange={handleInputChange} class="search-bar"/>
            <button onClick={handleSearch} class="btn">Search</button>
        </div>
    )



}

export default SearchBar
