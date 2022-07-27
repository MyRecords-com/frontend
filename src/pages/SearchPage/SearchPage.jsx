export default function SearchPage() {
    return (
        <>
        <h1>Search Page Here</h1>
 //// THIS IS THE LABEL FOR THE DROP DOWN SELECTOR ////       
        <label for="cars">Search By:</label>

//// THIS IS THE DROP DOWN SELECTOR & OPTIONS ////
<select name="cars" id="cars">
  <option value="volvo">Artist</option>
  <option value="saab">Label</option>
  <option value="mercedes">Style</option>
</select>
//// This is the Text Box for Input ////
<input type="text">
</input>
        </>
    )
}