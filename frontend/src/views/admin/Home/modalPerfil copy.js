import React, { useEffect, useState } from "react";
import {
  Input,
  ModalHeader,
  ModalBody,
  Modal,
  Row,
  Col,
  Button,
  Form,
  Alert
} from "reactstrap";
import { TextField } from "@material-ui/core";
import api from "../../../services/api";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import NumberFormat from "react-number-format";
import Dropzone from "react-dropzone";

import { ModalStyle, DropContainer, UploadMessage } from "./styleModal";

export default function Modals({ title, modal, setmodal, ...props }) {
  const [message, setMessage] = useState();
  const [data, setData] = useState({
    firstname: null,
    lastname: null,
    contact: null,
    genre: null,
    img: null,
    birth: new Date(),
    company: null,
    description: null,
    cnpj: null,
    cpf: null
  });
  // ######## Funções ########

  const toggle = () => {
    setmodal(!modal);
  };
  const onChangeDate = event => {
    const state = Object.assign({}, data);
    event = { target: { name: "birth", value: event } };
    const campo = event.target.name;
    state[campo] = event.target.value;
    setData(state);
  };
  const onChange = event => {
    console.log(event);
    const state = Object.assign({}, data);
    const campo = event.target.name;
    state[campo] = event.target.value;
    setData(state);
  };
  const handleSubmit = async event => {
    event.preventDefault();
    await api
      .post("profile", data)
      .then(response => {
        if (response.data.message) {
          setMessage(response.data.message);
        } else if (response.data[0].message) {
          setMessage(response.data[0].message);
        }
      })
      .catch(e => setMessage(e.response.data.message));
  };
  // ######## Component DidMount
  useEffect(() => {
    async function handleData() {
      await api
        .get("profile")
        .then(res => setData(res.data))
        .catch(e => setMessage(e.response.data.message));
    }
    handleData();
  }, []);
  const useStyles = makeStyles(theme => ({
    formControl: {
      minWidth: 120
    },
    root: {
      "& label.Mui-focused": {
        color: "#ff7c3e"
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "#ffa477"
        }
      }
    },
    margin: {
      margin: theme.spacing(1)
    }
  }));
  const ValidationTextField = withStyles({
    root: {
      "& input:valid + fieldset": {
        borderColor: "green",
        borderWidth: 2
      },
      "& input:invalid + fieldset": {
        borderColor: "red",
        borderWidth: 2
      },
      "& input:valid:focus + fieldset": {
        borderLeftWidth: 6,
        padding: "4px !important" // override inline-style
      }
    }
  })(TextField);
  // ########### IMAGEM DROP ###########
  const renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>;
    }
    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }
    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  };
  const classes = useStyles();
  return (
    <Modal isOpen={modal} className="modal-lg ">
      <ModalHeader toggle={() => toggle()}>{title && title.title}</ModalHeader>
      <ModalBody>
        {message && <Alert color="info">{message}</Alert>}
        <Form
          action=""
          method="post"
          encType="multipart/form-data"
          className={classes.root}
          onSubmit={handleSubmit}
        >
          <Row>
            <Col xs="12">
              <Dropzone accept="image/*" onDropAccepted={() => {}}>
                {({
                  getInputProps,
                  getRootProps,
                  isDragActive,
                  isDragReject
                }) => (
                  <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                  >
                    <input {...getInputProps()} />
                    {renderDragMessage(isDragActive, isDragReject)}
                  </DropContainer>
                )}
              </Dropzone>
            </Col>
            <Col xs="12" md="6">
              <TextField
                fullWidth
                margin="dense"
                name="firstname"
                label="Primeiro nome"
                onChange={event => onChange(event)}
                value={data.firstname === null ? "" : data.firstname}
                variant="outlined"
              />
            </Col>
            <Col xs="12" md="6">
              <TextField
                fullWidth
                margin="dense"
                name="lastname"
                label="Último nome"
                onChange={event => onChange(event)}
                value={data.lastname === null ? "" : data.lastname}
                variant="outlined"
              />
            </Col>
            <Col xs="12" md="6">
              <NumberFormat
                onChange={event => onChange(event)}
                name="contact"
                value={data.contact === null ? "" : data.contact}
                customInput={TextField}
                variant="outlined"
                fullWidth
                margin="dense"
                label="Contato"
                format={
                  data.contact && data.contact.indexOf("9") === 4
                    ? "(##)#####-####"
                    : "(##)####-####"
                }
              />
            </Col>
            <Col xs="6">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  margin="dense"
                  id="date-picker-dialog"
                  label="Data de nascimento"
                  name="birth"
                  format="dd/MM/yyyy"
                  value={data.birth}
                  onChange={event => onChangeDate(event)}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
              {/* <ValidationTextField
                className={classes.margin}
                label="CSS validation style"
                required
                variant="outlined"
                defaultValue="Success"
                id="validation-outlined-input"
              /> */}
            </Col>
            <Col xs="12" md="6">
              <TextField
                fullWidth
                type="text"
                margin="dense"
                name="company"
                label="Empresa"
                onChange={event => onChange(event)}
                value={data.company === null ? "" : data.company}
                variant="outlined"
              />
            </Col>
            <Col xs="12" md="6">
              <NumberFormat
                onChange={event => onChange(event)}
                name="cnpj"
                value={data.cnpj === null ? "" : data.cnpj}
                customInput={TextField}
                variant="outlined"
                fullWidth
                margin="dense"
                label="CNPJ"
                format="##.###.###/####-##"
              />
            </Col>
            <Col xs="12" md="6">
              <NumberFormat
                onChange={event => onChange(event)}
                name="cpf"
                value={data.cpf === null ? "" : data.cpf}
                customInput={TextField}
                variant="outlined"
                fullWidth
                margin="dense"
                label="CPF"
                format="###.###.###.##"
              />
            </Col>
            <Col xs="4" md="6">
              <ModalStyle>
                <Input
                  type="select"
                  name="genre"
                  id="select"
                  className="selectInput"
                  onChange={event => onChange(event)}
                >
                  <option value="0">Selecione o gênero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Outros">Outros</option>
                </Input>
              </ModalStyle>
            </Col>
          </Row>
          <div className="mt-3">
            <Button
              className="float-right"
              color="secondary"
              onClick={() => toggle()}
            >
              Cancel
            </Button>
            <Button className="float-right mr-3" type="submit" color="success">
              Editar
            </Button>
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
}
