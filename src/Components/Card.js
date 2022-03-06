

export default function Card(props) {
  console.log("This is the card",props.item)
return (
  <>
    <div className="container-fluid">
      <div className="row justify-content-center">
        {props.item.map((exercise) => {
          return (
            <div className="col-md-3 col-sm-6 card border-1 flex-row align-items-center m-1"
              key={exercise.id}
            >
              <img  style={{width: '200px'}}src={exercise.gifUrl} alt={exercise.title}/>
              <div className="card-body">
                <div className="card-title fw-bold text-center">
                  {exercise.name.toUpperCase()}
                </div>
                <div className="card-text text-center">
                Target: {exercise.target}
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
