import React from "react";
import BigPremio from ".././Assets/images/BigPremio.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './formulario.jsx';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Inicio = () =>{
  return (
    <MDBContainer>
      <MDBRow className="my-5">
        <MDBCol md="5" className="pb-0 mb-0" middle>
          <img src={BigPremio} className="img-fluid float-right" alt="Veja o Video"/>
        </MDBCol>
        <MDBCol md="6" className="m-0 p-0" middle>
          <Formulario/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Inicio;