export default function Profile({profile}) {
    return (
        <div className="users">
        {profile.map((prf) => (
          <div className="user">
            <br />
            Username: {prf.username}<br></br>
            Name: {prf.first_name} {prf.last_name}<br></br>
            Location: {prf.location}<br></br>
            Member Since: {prf.created_date}<br></br><hr />
            Setup: {prf.setup}<br></br>
            Bio: {prf.bio}<br></br>
          </div>
        ))}
      </div>
    );
  };
