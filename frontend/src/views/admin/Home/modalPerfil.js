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

import { ModalStyle } from "./style";

import { uniqueId } from "lodash";
import filesize from "filesize";
import Upload from "./Upload";
import FileList from "./FileList";

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
  const [uploadedFiles, setUploadedFiles] = useState([]);
  useEffect(() => {
    async function hadledata() {
      await api.get("profile").then(response => console.log(response));
    }
    hadledata();
  }, []);
  //#region Funções
  const toggle = () => {
    setmodal(!modal);
  };

  const onChange = event => {
    const state = Object.assign({}, data);
    if (event == null) {
      return;
    }
    if (!event.target || event === "Invalid Date") {
      event = { target: { name: "birth", value: event } };
    }
    const campo = event.target.name;
    state[campo] =
      event.target.files && data.img !== ""
        ? event.target.files[0]
        : event.target.value;
    setData(state);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", data.img, data.img.name);

    await api
      .post("profile", formData)
      .then(response => console.log(response))
      .catch(e => setMessage(e.response.data.message));
  };
  //#endregion

  // Funções do Upload Image
  const handleUpload = files => {
    const uploadedFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    setUploadedFiles(uploadedFiles.concat(uploadedFiles));

    uploadedFiles.forEach(processUpload);
  };

  const updateFile = (id, data) => {
    setUploadedFiles(
      uploadedFiles.map(uploadedFile => {
        return id === uploadedFile.id
          ? { ...uploadedFile, ...data }
          : uploadedFile;
      })
    );
  };

  const processUpload = uploadedFile => {
    const data = new FormData();
    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("profile", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          updateFile(uploadedFile.id, {
            progress
          });
        }
      })
      .then(response => {
        updateFile(uploadedFile.id, {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        });
      })
      .catch(erro => {
        console.log(erro.response);
        updateFile(uploadedFile.id, {
          error: true
        });
      });
  };

  const handleDelete = async id => {
    await api.delete(`posts/${id}`);
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
  };
  // TERMINO Funções do Upload Image
  // Component DidMount
  useEffect(() => {
    async function handleData() {
      await api
        .get("profile")
        .then(res => setData(res.data))
        .catch(e => setMessage(e.response.data.message));
    }
    handleData();
    return () => {
      uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, []);

  // CSS INPUTs
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
  // const ValidationTextField = withStyles({
  //   root: {
  //     "& input:valid + fieldset": {
  //       borderColor: "green",
  //       borderWidth: 2
  //     },
  //     "& input:invalid + fieldset": {
  //       borderColor: "red",
  //       borderWidth: 2
  //     },
  //     "& input:valid:focus + fieldset": {
  //       borderLeftWidth: 6,
  //       padding: "4px !important" // override inline-style
  //     }
  //   }
  // })(TextField);

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
          <Row className="mb-3">
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
                  onChange={event => onChange(event)}
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
          <div className="w-50 m-auto">
            <input type="file" name="img" onChange={event => onChange(event)} />
            {/* <Upload onUpload={handleUpload} />
            {!!uploadedFiles.length && (
              <FileList files={uploadedFiles} onDelete={handleDelete} />
            )} */}
          </div>
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
