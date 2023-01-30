import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, Sicoin: "122561", Modelo: "Optiplex", Marca: "Dell", Serie: "SN" , Encargado: "Sandra Patricia Hernandez" ,Numero_Tarjeta: "230"  },
  { id: 2, Sicoin: "7EC17", Modelo: "Sin Modelo", Marca: "Sin Marca", Serie: "SN" , Encargado: "Sandra Patricia Hernandez",Numero_Tarjeta: "230"   },
  { id: 3, Sicoin: "289747", Modelo: "F3", Marca: "Sin Marca", Serie: "09BB014601" , Encargado: "Guido Noriega",Numero_Tarjeta: "255"   },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Marca: "",
     Modelo: "",
      Sicoin: "",
       Serie: "",
        Encargado: "",
         Numero_Tarjeta: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].Sicoin = dato.Sicoin;
        arreglo[contador].Modelo = dato.Modelo;
        arreglo[contador].Marca = dato.Marca;
        arreglo[contador].Serie = dato.Serie;
        arreglo[contador].Encargado = dato.Encargado;
        arreglo[contador].Numero_Tarjeta = dato.Numero_Tarjeta;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Sicoin</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Serie</th>
                <th>Encargado</th>
                <th>Numero_Tarjeta</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Sicoin}</td>
                  <td>{dato.Modelo}</td>
                   <td>{dato.Marca}</td>
                    <td>{dato.Serie}</td>
                     <td>{dato.Encargado}</td>
                     <td>{dato.Numero_Tarjeta}</td>
                     
                  <td>
                     <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Ver
                    </Button>{" "}
                    <Button
                      color="secundary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Sicoin: 
              </label>
              <input
                className="form-control"
                name="Sicoin"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Sicoin}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
               Modelo: 
              </label>
              <input
                className="form-control"
                name="Modelo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Modelo}
              />
            </FormGroup>

             <FormGroup>
              <label>
                Marca: 
              </label>
              <input
                className="form-control"
                name="Marca"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Marca}
              />
            </FormGroup>

             <FormGroup>
              <label>
                Serie: 
              </label>
              <input
                className="form-control"
                name="Serie"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Serie}
              />
            </FormGroup>

             <FormGroup>
              <label>
                Encargado: 
              </label>
              <input
                className="form-control"
                name="Encargado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Encargado}
              />
            </FormGroup>

             <FormGroup>
              <label>
                Numero_Tarjeta: 
              </label>
              <input
                className="form-control"
                name="Numero_Tarjeta"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Numero_Tarjeta}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Marca</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Sicoin: 
              </label>
              <input
                className="form-control"
                name="Sicoin"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
               Modelo: 
              </label>
              <input
                className="form-control"
                name="Modelo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
              <FormGroup>
              <label>
                Marca: 
              </label>
              <input
                className="form-control"
                name="Marca"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
              <FormGroup>
              <label>
                Serie: 
              </label>
              <input
                className="form-control"
                name="Serie"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
              <FormGroup>
              <label>
                Encargado: 
              </label>
              <input
                className="form-control"
                name="Encargado"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
             <FormGroup>
              <label>
                Numero_Tarjeta: 
              </label>
              <input
                className="form-control"
                name="Numero_Tarjeta"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;
