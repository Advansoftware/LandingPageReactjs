import React from "react";
import logoFooter from ".././Assets/images/logo-bee-2_semfundo.png";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FinalPage = () => {
  return (
      <MDBFooter className="font-small">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" className="p-4 mt-2">
          <img src={logoFooter} className="Final-logoFooter ml-5 d-block" alt="Logo" />
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FinalPage;
