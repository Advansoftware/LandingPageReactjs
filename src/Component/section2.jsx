import React from "react";
import { MDBContainer, MDBIframe, MDBRow, MDBCol } from "mdbreact";
import womanradio2 from ".././Assets/images/womanradio2.png";

const Section2 = () => {
  return (
    <MDBContainer className="text-center">
      <MDBRow>
        <MDBCol md="5" className="pb-0 mb-0" bottom>
          <img src={womanradio2} className="img-fluid float-right" alt="Veja o Video" />
        </MDBCol>
        <MDBCol md="7" className="m-0 p-0" top>
          <MDBIframe className="w-100 video" title="youtube" src="https://www.youtube.com/embed/v64KOxKVLVg" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Section2;