export default function SearchPage() {
    
    const [packageAppend, setPackageAppend] = useState({})
    const [selectedParam, setSelectedParam] = useState({})
    function submitCheckout(event) {

        
        event.preventDefault();   
        addNewPackages({ ...userPackage, persons: selectedPersons.persons });
        setSelectedPersons({ persons: 1 });
        alert("Your Package was added to cart")
      }
   
   
    function handlePersonsChange(event) {
     const newRequest = {
       // ...selectedPersons,
       [event.target.name]:
       (event.target.value)
     };
     setSelectedPersons(newPersons)
     // setPackageAppend({ ...userPackage, persons: event.target.value });
    }

    return (
        <>
        <h1>Search Page Here</h1>
      
        <label>Search By:</label>


<select name="cars" id="cars">
  <option value="name">Artist</option>
  <option value="label">Label</option>
  <option value="style">Style</option>
</select>

<input type="text">
</input>
    <div className="package-add mt-4 text-lg px-2" onSubmit={submitQuery}>
        <form action="">
          <label className='px-2 '>Select How Many People:</label>
        <select name="parameter" className='px-8 mr-4 bg-slate-300 ring-1 ring-slate-800' value={selectedPersons.persons} onChange={handleParamChange}>
        <option value={1}>Artist</option>
        <option value={2}>Title</option>
        <option value={3}>Style</option>
        <option value={4}>Label</option>
      </select>
      <button type="submit">Search</button>

        </form>
        </>
    )
}