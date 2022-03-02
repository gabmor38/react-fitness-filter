

export default function Card(props) {
  console.log("This is the card",props.item)
return (
  <>
    <div className="container-fluid">
      <div className="row justify-content-center">
        {props.item.map((exercise) => {
          return (
            <div className="col-md-4 col-sm-6 card my-3 py-3 border-0"
              key={exercise.id}
            >
              <div className="card-body">
                <div className="card-title fw-bold fs-4 text-center">
                <span><img src={exercise.gifUrl} alt={exercise.title}/></span>
                  {exercise.name}
                </div>
                <div className="card-text">
                {exercise.bodypart}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </>
)
};
