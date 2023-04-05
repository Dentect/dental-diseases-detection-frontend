import { Link } from "react-router-dom";


function MainFunctionalities() {

  return (
    <div className="upload">

      <div className="col-5">
        <Link to={'/PatientRegister'}>
          <button className="buttons">Register patient</button>
        </Link>
      </div>


      <div className="col-5">
        <Link to={'/ViewPatient'}>
        <button className="buttons">View patient</button>
        </Link>

      </div>
      {/* <button className="buttons"></button> */}

    </div>
  );
}

export default MainFunctionalities
