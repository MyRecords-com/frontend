import imgtest2 from '../../img/imgtest2.jpeg'

export default function MainPageCard() {
    return (
        <div className="card" style={{width: '18rem'}}>
  <img src={imgtest2} className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">
        <b>Artist:</b> Smith & Pledger<br></br>
        <b>Title:</b> Believe<br></br>
        <b>Label:</b> Anjuna<br></br>

    </p>
  </div>
</div>
    )
    }