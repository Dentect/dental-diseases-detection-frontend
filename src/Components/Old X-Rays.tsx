import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function ViewXrays(props: any) {

  return (

    <div className="col upload">

      <div className="patientInfo">
      <img className="images" src={props.xrays} alt="" />
      </div>

    </div>

  );
}

export default ViewXrays;
