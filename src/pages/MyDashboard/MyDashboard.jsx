import { useState, useEffect, useRef } from 'react'
import Profile from '../../components/Profile/Profile'
import NavBar from '../../components/NavBar/NavBar';
import * as profileAPI from '../../utilities/profile-api';

export default function MyDashboard() {

const [profile, setProfile] = useState([]);

// Load the user's cart (the unpaid order for that user)

async function getProfile() {
    const profiles = await profileAPI.getAll(); 
    console.log(profiles)
    setProfile(profiles);
}


    useEffect(() => {
        getProfile();
      }, []);
    
    return (
        <>
        <NavBar />
        <Profile profile={profile} />
        </>
    )
}