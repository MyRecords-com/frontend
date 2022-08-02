export default function RecordCard({rec}) {
    return (
      <>
        <div class="container">
          <div class="row justify-content-lg-center">
            <div class="col-sm"><img src={rec.thumb}></img></div>
            <div class="col-sm">{rec.title}</div>
            <div class="col-sm">{rec.label}</div>
            <div class="col-sm">{rec.year}</div>
            <div class="col-sm">{rec.country}</div>
            <div class="col-sm">{rec.style}</div>
            <div class="col-sm"><button type="button" class="btn btn-primary btn-sm">Add to Collection</button></div>
          </div>
        </div>
      </>
    );
}