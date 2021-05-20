import React from "react";
import { MDBRow, MDBCol,  MDBBtn, MDBCard, MDBCardBody, MDBCardText } from "mdbreact";


class Formulario extends React.Component {
    state = {
      nome: "",
      email: "",
      tel: "",
      dn: "",
      sexo: ""
    };
  
    submitHandler = event => {
      event.preventDefault();
      event.target.className += " was-validated";
    };
  
    changeHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
    onClick = nr => () => {
        this.setState({
          radio: nr
        });
      }
      
  
    render() {
      return (
<MDBCard className="Inicio-card-form">
    <MDBCardBody>
    <form
    className="needs-validation"
    onSubmit={this.submitHandler}
    noValidate
    >
        <p className="text-center">Faça seu cadastro grátis e concorra!</p>
        <MDBRow className="my-3">
            <MDBCol md="12" middle>  
            <input
                value={this.state.nome}
                onChange={this.changeHandler}
                type="text"
                name="nome"
                id="nome"
                className="form-control texto"
                placeholder="Nome Completo"
                required
            />
            </MDBCol>
        </MDBRow>
        <MDBRow className="my-3" >
            <MDBCol  middle>  
            <input
            value={this.state.email}
            onChange={this.changeHandler}
                type="email"
                name="email"
                id="email"
                className="form-control texto"
                placeholder="E-mail"
                required
            />
            </MDBCol>
        </MDBRow>
        <MDBRow className="my-2" >
            <MDBCol md="6" sm="12" className="pr-md-1 pr-sm-3 " middle>  
            <input
                value={this.state.tel}
                onChange={this.changeHandler}
                type="tel"
                id="tel"
                name="tel"
                className="form-control texto"
                placeholder="Telefone"
                required
            />
            </MDBCol>
            <MDBCol md="6" sm="12" className="my-3" middle>  
            <input
                value={this.state.dn}
                onChange={this.changeHandler}
                type="text"
                name="dn"
                id="dn"
                className="form-control texto"
                placeholder="Data de Nascimento"
                required
            />
            </MDBCol>
        </MDBRow>
        <MDBRow className="my-3" >
            <MDBCol md="6" sm="5">  
        <div className="custom-control custom-radio float-md-right">
            <input type="radio" id="masc" name="sexo" required className="custom-control-input" value="1"/>
            <label className="custom-control-label sexo" htmlFor="masc">Masculino</label>
        </div>
            </MDBCol>
            <MDBCol md="6" sm="5">  
            <div className="custom-control custom-radio float-md-left">
            <input type="radio" id="fem" name="sexo" required className="custom-control-input" value="2"/>
            <label className="custom-control-label sexo" htmlFor="fem">Feminino</label>
        </div>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
            <div className="custom-control custom-checkbox">
            <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="check"
                required
            />
            <label className="custom-control-label text-justify" htmlFor="check">
            Ao marcar esta opção você aceita nossa <b>Politica de Privacidade</b> e está de acordo com nossos <b>Termos e Condições</b>.
        </label>
        <div className="invalid-feedback">
        Você deve concordar com o nosso termo para concorrer.
        </div>
    </div>
            </MDBCol>
        </MDBRow>
        <div className="text-center py-3">
            <MDBBtn className="btn-lg btn-warning btn-block font-weight-bold" type="submit">
            QUERO CONCORRER
            </MDBBtn>
        </div>
        </form>
        <MDBRow >
            <MDBCol>
            <MDBCardText className='formulario-footer text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim risus justo sit volutpat ut quis massa. Pharetra eget dui, aenean at sed semper aliquet ultrices sit. Nisl sed aliquam aliquam augue scelerisque. At ornare vel vel quisque aliquam pellentesque eu.
            </MDBCardText>
            </MDBCol>
        </MDBRow>
    </MDBCardBody>
</MDBCard>
    );
}
}

export default Formulario;