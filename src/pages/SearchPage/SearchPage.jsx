import {useEffect, useState, useRef} from 'react'

export default function SearchPage() {
    
    const [queryAppend, setQueryAppend] = useState({})
    const [selectedParam, setSelectedParam] = useState([])
    
    function submitQuery(event) {   
        event.preventDefault();   
        // addNewPackages({ ...userPackage, persons: selectedPersons.persons });
        // setSelectedPersons({ persons: 1 });
        alert("Your Package was added to cart")
      }
   
   
    function handleParamChange(event) {
     const newRequest = event.target.value ;
     setSelectedParam(newRequest)
     console.log(newRequest)
     // setPackageAppend({ ...userPackage, persons: event.target.value });
    }

    return (
        <>
        <h1>Search Page Here</h1>


    <div className="package-add mt-4 text-lg px-2" onSubmit={submitQuery}>
        <form action="">
          <label className='px-2 '>Search By</label>
        <select name="parameter" className='px-8 mr-4 bg-slate-300 ring-1 ring-slate-800' value={selectedParam.param} onChange={handleParamChange}>
        <option value='artist'>Artist</option>
        <option value='title'>Title</option>
        <option value='style'>Style</option>
        <option value='label'>Label</option>
      </select>
      <input type="text"></input>
      <button type="submit">Search</button>
        </form>
        </div>
        </>
        )
}