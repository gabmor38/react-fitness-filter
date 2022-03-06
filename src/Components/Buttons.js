import Data from ".//Data"

export default function Buttons(props) {
  const {setItem, exerciseCategory, filterItem} = props;

  console.log("this setItem", setItem)

  return(
    <>
      <div className="d-flex justify-content-center">
        {exerciseCategory.map((exercise, id) => {
          return (
            // this one makes a button based on the filtered category - bodyPart
            <button
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            onClick={() => filterItem(exercise)}
            key={id}
            >
            {exercise.charAt(0).toUpperCase() + exercise.slice(1)}
            </button>
          );
        }
        )}

        <button className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
          onClick={() => setItem(Data)}   // this button will select all of the categories
        >
        All Categories
        </button>
      </div>
    </>
  )
};
