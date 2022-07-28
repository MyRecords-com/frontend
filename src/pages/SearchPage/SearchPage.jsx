import {useEffect, useState, useRef} from 'react'
import * as submitAPI from '../../utilities/external-api'
import RecordCard from '../../components/RecordCard/RecordCard'
export default function SearchPage() {
    
    const [queryAppend, setQueryAppend] = useState([])
    const [selectedParam, setSelectedParam] = useState('artist')
    const [selectedSearch, setSelectedSearch] = useState('')
    
    async function submitQuery(event) {   
        event.preventDefault();

        let returnedData = await submitAPI.getSearch(selectedParam, selectedSearch)
        setQueryAppend(returnedData.results)
        console.log(queryAppend)
      }
   
   
    function handleParamChange(event) {
     const changedParam = event.target.value
     setSelectedParam(changedParam)
     //console.log(selectedParam)
    }

    function handleSearchChange(event) {
     const changedSearch = event.target.value 
     setSelectedSearch(changedSearch)
     // console.log(selectedSearch)
    }
if (queryAppend === []) {
    return (
        <>
        <h1>Search Page Here</h1>


    <div className="package-add mt-4 text-lg px-2" onSubmit={submitQuery}>
        <form action="">
          <label className='px-2 '>Search By</label>
        <select name="param" className='px-8 mr-4 bg-slate-300 ring-1 ring-slate-800' value={selectedParam.param} onChange={handleParamChange}>
        <option value='artist'>Artist</option>
        <option value='title'>Title</option>
        <option value='style'>Style</option>
        <option value='label'>Label</option>
      </select>
      <input
        type="text"
        name="search"
        value={selectedParam.name}
        placeholder="Search"
        onChange={handleSearchChange}
      ></input>
      <button type="submit">Search</button>
        </form>
        </div>
        </>
        )
} else {
    return (
      <>
        <h1>Search Page Here</h1>

        <div className="package-add mt-4 text-lg px-2" onSubmit={submitQuery}>
          <form action="">
            <label className="px-2 ">Search By</label>
            <select
              name="param"
              className="px-8 mr-4 bg-slate-300 ring-1 ring-slate-800"
              value={selectedParam.param}
              onChange={handleParamChange}
            >
              <option value="artist">Artist</option>
              <option value="title">Title</option>
              <option value="style">Style</option>
              <option value="label">Label</option>
            </select>
            <input
              type="text"
              name="search"
              value={selectedParam.name}
              placeholder="Search"
              onChange={handleSearchChange}
            ></input>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="container">
         {
            queryAppend.map((rec, index) => {
              return <RecordCard key={index} rec={rec} />
            })}
        </div>
      </>
    );
}

}