import Data from ".//Data"

export default function Buttons(props) {
  const {setItem, exerciseItems} = props;

  console.log("this setItem", setItem)

  return(
    <>
      <div className="d-flex justify-content-center">
        {exerciseItems.map((exercise, id) => {
          return (
            <button
            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
            key={id}
            >
            {exercise}
            </button>
          )
        }
        )}
      </div>
    </>
  )
};
