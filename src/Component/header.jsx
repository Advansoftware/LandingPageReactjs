import React from "react";
import logo from ".././Assets/images/logo-bee-2_semfundo.png";
import bigtest from ".././Assets/images/42.png";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

const Bee = () => {
    return (
        <MDBContainer className="text-dark">
            <MDBRow>
                <MDBCol middle>
                    <img src={logo} className="img-fluid" alt="Logo" />
                </MDBCol>
                <hr className="vertical" />
                <MDBCol middle>
                    <img src={bigtest} alt="bigtest" className="img-fluid" />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Bee