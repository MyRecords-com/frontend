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
        console.log(returnedData.results)
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
// if (queryAppend === []) {
    return (
        <>
        <div style={{'padding-bottom': 80}}></div> 
 <div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
<div class="card">
<div class="card-body">
<div class="row mb-4">
<div class="col-sm-6">
<div className="package-add mt-4 text-lg px-2" onSubmit={submitQuery}>
        <form action="">
          <label className='px-2 '>Search By:</label>
        <select name="param" className='px-8 mr-4 bg-slate-300 ring-1 ring-slate-800' value={selectedParam.param} onChange={handleParamChange}>
        <option value='artist'>Artist</option>
        <option value='title'>Title</option>
        <option value='style'>Style</option>
        <option value='label'>Label</option>
      </select>&nbsp;
      <input
        type="text"
        name="search"
        value={selectedParam.name}
        placeholder="Search"
        onChange={handleSearchChange}
      ></input>&nbsp;
      <button type="submit">Search</button>
        </form>
        </div>
</div>
<div class="col-sm-6 ">
</div>
</div>
<div class="table-responsive-sm">
<table class="table table-striped">
<thead>
<tr>
<th class="center"></th>
<th>Title</th>
<th>Label</th>
<th class="right">Year</th>
<th class="center">Country</th>
<th class="right">Style</th>
</tr>
</thead>
<tbody>
{
            queryAppend.map((rec, index) => {
              return <RecordCard key={index} rec={rec} />
            })}
</tbody>
</table>
</div>
<div class="row">
<div class="col-lg-4 col-sm-5">
</div>
<div class="col-lg-4 col-sm-5 ml-auto">
<table class="table table-clear">

</table>
</div>
</div>
</div>
<div class="card-footer bg-white">
<p class="mb-0">RecordCrates.com, New York, NY 2022</p>
</div>
</div>
</div>
</>
)
    }
  







        {/* <h1>Search Page Here</h1>


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
        <div style={{'padding-bottom': 36}}></div>
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

} */}