import React, {useState} from 'react'
import data from "./data.json";
import "./SearchBar.css"

function SearchBar({placeholder}) {
// const [filteredData, setFilteredData] = useState('');
// const [wordEntered, setWordEntered] = useState('')
const [search, setSearch] = useState('');

//  const handleFilter = (event) => {
//     const searchName = event.target.value;
//     setWordEntered(searchName)
//     const newFilter = data.filter((value) => {
//         return value.name.toLowerCase().includes(searchName.toLowerCase())
//     })
//     setFilteredData(newFilter);
//  }

 const onChange = (event) => {
  setSearch(event.target.value);
 }
 const onSearch = (searchTerm) => {
  setSearch(searchTerm)
  console.log("search ", searchTerm)
 }
 const clearInput = () => {
  setSearch('');
  // setWordEntered('')
 }
//  const handleSuggestion = (suggestion) => {
//   setSearch(suggestion);
//   // setWordEntered(suggestion);
//  }
  return (
    <div className="searchBar">
        <div className="bar">
            <input className="input" type="text" placeholder={placeholder} value={search} onChange={onChange}/>
            {data.length === 0 ? (
            <i className="fa-solid fa-magnifying-glass"></i>
            ) : (
            <i className="fa-solid fa-xmark" onClick={clearInput}></i>
            )}
            {/* <button onClick={() => onSearch(search)}>Search</button> */}
        </div>
    {data.length !== 0 && (
        <div className="dataResult">
          {data
          // .slice(0, 7)
          .filter((item) => {
            const searchTerm = search?.toLowerCase();
            const name = item.name?.toLowerCase();
              return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
           })
          .map((item) => (
            <ul onClick={()=>onSearch(item.name)} key={item.name} className="item">
              <li>{item.name}</li>
            </ul>
          ))}
        </div>
        )}
    </div>
  )
}

export default SearchBar