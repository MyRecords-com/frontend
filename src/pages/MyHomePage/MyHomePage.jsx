import axios from "axios";
import { useEffect, useState, useRef } from 'react'
import MyDashboard from "../MyDashboard/MyDashboard"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ajunaAPI from '../../utilities/external-api'
import NavBar from '../../components/NavBar/NavBar'
import Carousel from '../../components/Carousel/Carousel'
import MainPageCard from "../../components/MainPageCard/MainPageCard";
export default function MyHomePage() {
  
  let [ releases, setReleases ] = useState([])
  let number = -1;

  async function getReleases() {
    const newReleases = await ajunaAPI.getAjuna(); 
    setReleases(newReleases)
    console.log(releases)
}


    useEffect(() => {
        getReleases();
      }, []);
  
      

    return (
      <>
      <div className="container">
      <div>
      <NavBar />
      </div>
      <div>
      <Carousel />
      </div>
      <div className="container">
      <div>
        <h1>NEW RELEASES:</h1>
      </div>
      <div>
        {/* {console.log(releases.releases)} */}
     {/* {  
     releases.releases.map((rls, index) => {
       return <MainPageCard key={index} />
      })} */}
      </div>
      </div>
      </div>
      </>
    )
}