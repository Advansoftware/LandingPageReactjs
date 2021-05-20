import React from "react";
import logoFooter from ".././Assets/images/logo-bee-2_semfundo.png";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const FinalPage = () => {
  return (
    <MDBFooter className="font-small">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" sm="12" className="pt-4 pb-4 pl-0 mt-2" middle>
            <img src={logoFooter} className="Final-logoFooter mx-sm-auto" alt="Logo" />
          </MDBCol>
          <MDBCol md="6" sm="12" middle>
            <ul className="fa-ul float-md-right float-sm-none float-xl-right float-lg-right mx-auto">
              <a href="#face">
                <li className="mx-1 icone">
                  <MDBIcon fab icon="facebook-square" size="2x" />
                </li>
              </a>
              <a href="#youtube">
                <li className="mx-1 icone">
                  <MDBIcon fab icon="youtube-square" size="2x" />
                </li>
              </a>
              <a href="#twitter">
                <li className="mx-1 icone">
                  <MDBIcon fab icon="twitter-square" size="2x" />
                </li>
              </a>
              <a href="#insta">
                <li className="mx-1 icone">
                  <MDBIcon fab icon="instagram" size="2x" />
                </li>
              </a>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default FinalPage;
