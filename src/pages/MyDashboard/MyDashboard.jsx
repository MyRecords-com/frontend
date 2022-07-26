import { useState, useEffect, useRef } from 'react'
import Profile from '../../components/Profile/Profile'
import * as profileAPI from '../../utilities/profile-api';

export default function MyDashboard() {

const [profile, setProfile] = useState();

    useEffect(function() {
        // Load the user's cart (the unpaid order for that user)
        async function getProfile() {
          const profiles = await profileAPI.getAll();
          console.log(profiles)
        setProfile(profiles);
        }
        getProfile();
      }, []);
    
    return (
        <>
        <Profile profile={profile} />
        </>
    )
}