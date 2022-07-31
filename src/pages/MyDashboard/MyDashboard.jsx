import { useState, useEffect, useRef, useContext } from 'react'
import Profile from '../../components/Profile/Profile'
import * as profileAPI from '../../utilities/profile-api';
import AuthContext from '../../context/AuthContext'


export default function MyDashboard() {
    
const { user } = useContext(AuthContext)
const { authTokens } = useContext(AuthContext)
console.log(authTokens)
const [profile, setProfile] = useState([]);

// Load the user's cart (the unpaid order for that user)

async function getProfile() {
    const profiles = await profileAPI.getCollection(authTokens); 
    console.log(profiles)
    setProfile(profiles);
}


    useEffect(() => {
        getProfile();
      }, []);
    
    return (
        // <>
        // <Profile profile={profile} />
        // <Profile profile={prof} />
        // </>
        <h1>Here is your profile:</h1>

    )
}