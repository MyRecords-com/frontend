import * as profileAPI from '../../utilities/profile-api';
import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext'

export default function AddRecord() {

    let [collection, setCollection] = useState([])
    let { user } = useContext(AuthContext)
    let { authTokens } = useContext(AuthContext)
    let [ addRecord, setAddRecord ] = useState([
        { colletion: '',
          name: '',
          label: '',
          country: '',
          released: '',
          genre: '',
          style: ''
        }
    ])

    function handleSubmit(event) {
        event.preventDefault();
      }
    
    function handleChange(event) {
        const newRecordData = {
          ...addRecord,
          [event.target.name]: event.target.value
        };
        setAddRecord(newRecordData);
        console.log(addRecord)
    }


    async function getCollection() {
        const collections = await profileAPI.getCollection(authTokens)
        setCollection(collections)
        console.log(collections)
    }
    
    useEffect(() => {
        getCollection();
      }, []);


    return (
        <>
        <div style={{'padding-bottom': 36}}></div>
        <div className="AddRecord">
        <h1 className="text-center"><u>Add A Record</u></h1>
        <form className="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
          <div class="form-group">
            <div>
              <label htmlFor="username"><h2>Select Collection</h2></label>
            </div>
            <select name="collection" value={addRecord.collection} onChange={handleChange}>
            {collection.map((nam, index) => {
            return <option value={nam.name} key={index}>{nam.name}</option>
            }
            )}
        </select>
          </div>
          <div class="form-group">
            <div>
              <label htmlFor="name"><h2>Record Name</h2></label>
            </div>
            <input type="text" name="name" placeholder="Enter Record Name" value={addRecord.name}  onChange={handleChange} />
          </div>
          <div class="form-group">
            <div>
              <label htmlFor="label"><h2>Label</h2></label>
            </div>
            <input type="text" name="label" placeholder="Enter Record Name" value={addRecord.label} onChange={handleChange} />
          </div>
          <div class="form-group">
            <div>
              <label htmlFor="country"><h2>Country</h2></label>
            </div>
            <input type="text" name="country" placeholder="Enter Record Name" value={addRecord.country} onChange={handleChange} />
          </div>
          <div class="form-group">
            <div>
              <label htmlFor="released"><h2>Released</h2></label>
            </div>
            <input type="text" name="released" placeholder="Enter Record Name" value={addRecord.released} onChange={handleChange}/>
          </div>
          <div class="form-group">
            <div>
              <label htmlFor="genre"><h2>Genre</h2></label>
            </div>
            <input type="text" name="genre" placeholder="Enter Record Name" value={addRecord.genre} onChange={handleChange}/>
          </div>
          <div class="form-group">
            <div>
              <label htmlFor="style"><h2>Style</h2></label>
            </div>
            <input type="text" id="style" placeholder="Enter Record Name" onChange={handleChange}/>
          </div>
          <br></br><button type="submit" className="btn btn-secondary">Add to Collection</button>
        </form>
      </div>
      </>
    );
}