import react from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button, Container, Modal, ModalHeader, FormGroup, ModalFooter, ModalBody} from 'reactstrap'

const data = [
  {id: 1, personaje: "Rock Lee", anime: "Naruto"}, 
  {id: 2, personaje: "konan", anime: "Naruto"}, 
  {id: 3, personaje: "Modoriya", anime: "Boku no hero"}, 
  {id: 4, personaje: "Shikamaru", anime: "Naruto"},
  {id: 5, personaje: "kirishima", anime: "Boku no hero"},
  {id:6, personaje: "mina", anime: "boku no hero"}
]

class App extends react.Component{
state= {
  data: data,
  form: {
    id: '',
    personaje: '',
    anime: ''
  },
  modalInsertar: false,
}

handleChange =e=> {
  this.setState({
    form:{...this.state.form,
    [e.target.name]: e.target.value,
    }
  })
}

mostrarModalInsertar = () =>{
  this.setState({modalInsertar: true})
}

ocultarModalInsertar = () => {
  this.setState({modalInsertar: false})
}

insertar=()=>{
  var valorNuevo={...this.state.form}
  valorNuevo.id = this.state.data.length+1;
  var lista = this.state.data;
  lista.push(valorNuevo);
  this.setState({data: lista, modalInsertar: false});
}

  render(){
    return(
      <>
      <Container>
      <Button color='success' onClick={()=>{this.mostrarModalInsertar()}}>Insertar nuevo personaje</Button>
      <br></br>
      
      <Table>
        <thead>
        <tr><th>id</th>
        <th>personaje</th>
        <th>anime</th>
        <th>acciones</th></tr>
        </thead>
        <tbody>
          {this.state.data.map((elemento) => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.personaje}</td>
              <td>{elemento.anime}</td>
              <td><Button color="primary" className="m-2">editar</Button>
              <Button className="danger" color="danger">eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Container>

      <Modal isOpen={this.state.modalInsertar} modalTransition={{ timeout: 400 }} backdropTransition={{ timeout: 100 }}>
        <ModalHeader>
          <div>
            <h3>Insertar registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>

          <FormGroup>
            <label>Id:</label>
            <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input className="form-control" name="personaje" type="text" onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input className="form-control" name="anime" type="text" onChange={this.handleChange}/>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={()=>this.insertar()}>Insertar</Button>
          <Button color="danger" onClick={()=>{this.ocultarModalInsertar()}}>Cancelar</Button>
        </ModalFooter>
      </Modal>
      </>)
  }
}

export default App;
