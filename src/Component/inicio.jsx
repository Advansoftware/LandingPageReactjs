import React from "react";
import BigPremio from ".././Assets/images/BigPremio.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer, MDBRow, MDBCol,  MDBBtn, MDBCard, MDBCardBody} from "mdbreact";


const Inicio = () =>{
  return (
    <MDBContainer>
      <MDBRow className="my-5">
      <MDBCol md="5" className="pb-0 mb-0" middle>
          <img src={BigPremio} className="img-fluid float-right" alt="Veja o Video"/>
        </MDBCol>
        <MDBCol md="6" className="m-0 p-0" middle>
          <MDBCard className="Inicio-card-form">
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-5">Faça seu cadastro grátis e concorra!</p>
                <MDBRow className="my-3">
                  <MDBCol md="12" middle>  
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                      className="form-control"
                      placeholder="Nome Completo"
                    />
                  </MDBCol>
                </MDBRow>
               <MDBRow className="my-3" >
                  <MDBCol  middle>  
                    <input
                      type="email"
                      id="defaultFormCardNameEx"
                      className="form-control"
                      placeholder="E-mail"
                    />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="my-3" >
                  <MDBCol md="6" sm="12" className="pr-1 pr-sm-3 " middle>  
                    <input
                      type="tel"
                      id="defaultFormCardNameEx"
                      className="form-control"
                      placeholder="Telefone"
                    />
                  </MDBCol>
                  <MDBCol md="6" sm="12" className="my-3" middle>  
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                      className="form-control"
                      placeholder="Data de Nascimento"
                    />
                  </MDBCol>
                </MDBRow>
                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn-lg btn-warning btn-block font-weight-bold" type="submit">
                    QUERO CONCORRER
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Inicio;