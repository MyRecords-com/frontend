import axios from "axios";
import { useEffect, useState, useRef, useContext } from 'react'
import MyDashboard from "../MyDashboard/MyDashboard"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ajunaAPI from '../../utilities/external-api'
import Carousel from '../../components/Carousel/Carousel'
import MainPageCard from "../../components/MainPageCard/MainPageCard";
import UserInfo from '../../components/UserInfo/UserInfo'
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";



export default function MyHomePage() {
  
  let [ releases, setReleases ] = useState([])
  let number = -1;

  async function getReleases() {
    const newReleases = await ajunaAPI.getAjuna(); 
    setReleases(newReleases.releases)
}


    useEffect(() => {
        getReleases();
      }, []);
  
  
  let { user } = useContext(AuthContext);


    return (
      <>
      <div style={{'padding-bottom': 36}}></div>
      <div className="container-fluid">
      <div>
      <Carousel />
      </div>
      <div className="container">
      <div>
        <h1>NEW RELEASES:</h1>
      </div>
      <div className="container">
        <div className="row">
     {  
     releases.map((rls, index) => {
       return <MainPageCard key={index} rls={rls} />
          })}
      </div>
      </div>
      </div>
      </div>
      </>
    )
}