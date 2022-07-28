import imgtest2 from '../../img/imgtest2.jpeg'

export default function MainPageCard({rls}) {
    return (
        <div className="card" style={{width: '10rem'}}>
  <img src={rls.thumb} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
        <b>Artist:</b> {rls.artist}<br></br>
        <b>Title:</b> {rls.title}<br></br>
        <b>Year:</b> {rls.year}<br></br>
    </p>
  </div>
</div>
    )
    }