export default function RecordCard({rec}) {
    return (
      <>
      <tr>
      <td class="center"><img src={rec.thumb}></img></td>
      <td class="left strong">{rec.title}</td>
      <td class="left">{rec.label}</td>
      <td class="right">{rec.year}</td>
      <td class="center">{rec.country}</td>
      <td class="right">{rec.style[0]}<br></br>
      {rec.style[1]}</td>
      </tr>
      </>
    );
}
        // <div class="container">
        //   <div class="row justify-content-lg-center">
        //     <div class="col-sm"><img src={rec.thumb}></img></div>
        //     <div class="col-sm">{rec.title}</div>
        //     <div class="col-sm">{rec.label}</div>
        //     <div class="col-sm">{rec.year}</div>
        //     <div class="col-sm">{rec.country}</div>
        //     <div class="col-sm">{rec.style}</div>
        //     <div class="col-sm"><button type="button" class="btn btn-primary btn-sm">Add to Collection</button></div>
        //   </div>
        // </div>