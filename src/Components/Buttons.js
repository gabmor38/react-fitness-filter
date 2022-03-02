import Data from ".//Data"

export default function Buttons(props) {
  const {setItem, exerciseCategory} = props;

  console.log("this setItem", setItem)

  return(
    <>
      <div className="d-flex justify-content-center">
        {exerciseCategory.map((exercise, id) => {
          return (
            //this one makes a button based on the filtered category - bodyPart
            <button
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            key={id}
            >
            {exercise}
            </button>
          );
        }
        )}
        //this button will select all of the categories
        <button className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
          onClick={() => setItem(Data)}
        >
        All Categories
        </button>
      </div>
    </>
  )
};
