import {useEffect, useState, useRef} from 'react'
import * as submitAPI from '../../utilities/external-api'
export default function SearchPage() {
    
    const [queryAppend, setQueryAppend] = useState({})
    const [selectedParam, setSelectedParam] = useState('artist')
    const [selectedSearch, setSelectedSearch] =useState('')
    
    async function submitQuery(event, selectedParam, selectedSearch) {   
        event.preventDefault();
        let returnedData = await submitAPI.getSearch(selectedParam, selectedSearch)
        console.log(returnedData)
      }
   
   
    function handleParamChange(event) {
     const changedParam = event.target.value
     setSelectedParam(changedParam)
     console.log(selectedParam)

     const changedSearch = event.target.value 
     setSelectedSearch(changedSearch)
     console.log(selectedSearch)
    }

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
        onChange={handleParamChange}
      ></input>
      <button type="submit">Search</button>
        </form>
        </div>
        </>
        )
}