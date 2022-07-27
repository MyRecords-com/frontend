import axios from "axios";
import { useEffect, useState, useRef } from 'react'
import MyDashboard from "../MyDashboard/MyDashboard"
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from '../../components/NavBar/NavBar'
import Carousel from '../../components/Carousel/Carousel'
import MainPageCard from "../../components/MainPageCard/MainPageCard";
export default function MyHomePage() {
  
  const { releases, setReleases } = useState([])

  
    return (
      <>
      <div className="container">
      <div>
      <NavBar />
      </div>
      <div>
      <Carousel />
      </div>
      <div>
      <div className="container">
      <div>
        <h1>NEW RELEASES:</h1>
      </div>
      <MainPageCard />
      </div>
      </div>
      </div>
      </>
    )
}