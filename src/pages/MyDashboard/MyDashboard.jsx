import { useState, useEffect, useRef, useContext } from 'react'
import Profile from '../../components/Profile/Profile'
import * as profileAPI from '../../utilities/profile-api';

import AuthContext from '../../context/AuthContext'


export default function MyDashboard() {
    
let { user } = useContext(AuthContext)
let { authTokens } = useContext(AuthContext)
console.log(authTokens)
let [profile, setProfile] = useState([]);
let [collection, setCollection] = useState([])

// Load the user's cart (the unpaid order for that user)

async function getProfile() {
    const profiles = await profileAPI.getProfile(authTokens); 
    console.log(profiles)
    setProfile(profiles);
}


    useEffect(() => {
        getProfile();
      }, []);

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
        <Profile profile={profile} />
        {/* <Collection collection={collection}/> */}
        <h1>Here is your profile:</h1>
        </>

    )
}