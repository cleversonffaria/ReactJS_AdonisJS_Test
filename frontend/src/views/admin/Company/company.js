import React, { useState, useEffect } from "react";

// Imports Externos
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
  Alert
} from "reactstrap";
import { TextField, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NumberFormat from "react-number-format";
import { Editor } from "@tinymce/tinymce-react";

// Imports Internos
import { Container, InfoCard } from "./style";
import api from "../../../services/api";
// Fim imports

const useStyles = makeStyles(theme => ({
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
  textField: {
    margin: theme.spacing(1)
  },
  price: {
    width: 150,
    margin: theme.spacing(1)
  }
}));

export default function Company() {
  const classes = useStyles();
  const [message, setMessage] = useState();
  const [data, setData] = useState({
    name: "",
    name_fantasy: "",
    description: "",
    cnpj: "",
    email: "",
    whatzapp: "",
    facebook: "",
    contact: "",
    contact_2: "",
    street: "",
    number: "",
    district: "",
    city: "",
    uf: "",
    cep: ""
  });
  const onChange = event => {
    const state = Object.assign({}, data);
    const campo = event.target.name;
    state[campo] = event.target.value;
    setData(state);
  };
  const handleEditorChange = event => {
    const state = Object.assign({}, data);
    state["description"] = event.target.getContent();
    setData(state);
  };
  useEffect(() => {
    const company = async () => {
      await api
        .get("company")
        .then(res => setData(res.data))
        .catch(e => setMessage(e.response.data.message));
    };
    company();
  }, []);

  const saveCompany = async newData => {
    await api
      .post("company", newData)
      .then(response => {
        if (response.data.message) {
          setMessage(response.data.message);
        } else if (response.data[0].message) {
          setMessage(response.data[0].message);
        }
      })
      .catch(e => setMessage(e.response.data.message));
  };
  const deleteCompany = async () => {
    await api
      .delete("company")
      .then(response => {
        if (response.data.message) {
          setMessage(response.data.message);
        } else if (response.data[0].message) {
          setMessage(response.data[0].message);
        }
      })
      .catch(e => setMessage(e.response.data.message));
  };

  function handleProduct(event) {
    event.preventDefault();
    saveCompany(data);
  }

  const mensagem = successMessage => {
    switch (successMessage) {
      case "Empresa cadastrada com sucesso!":
        return "success";
      case "Empresa editada com sucesso!":
        return "success";
      case "Empresa deletada com sucesso!":
        return "success";
      case "Ocorreu um erro inesperado, Tente novamente mais tarde!":
        return "danger";
      case "A empresa não está cadastrada no sistema.":
        return "info";
      default:
        return "warning";
    }
  };
  return (
    <Container>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={event => handleProduct(event)}
      >
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader className="d-flex justify-content-between flex-wrap">
                <div className="cart_info">Informações do site</div>
                <div className="d-flex justify-content-between">
                  <Button
                    className="d-flex align-items-center font-lg font-weight-bold"
                    color="ghost-danger"
                    onClick={deleteCompany}
                  >
                    <i className="fa fa-close fa-lg arrow-negative mr-1" />
                    Deletar
                  </Button>
                  <Button
                    className="d-flex align-items-center font-lg font-weight-bold"
                    color="ghost-success"
                  >
                    <i className="fa icons-tick fa-lg mr-1" />
                    Salvar
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    {message && (
                      <Alert color={mensagem(message)}>{message}</Alert>
                    )}
                    <InfoCard>
                      <Row>
                        <Col sm="12" md="6">
                          <TextField
                            fullWidth
                            margin="dense"
                            name="name"
                            label="Nome"
                            onChange={event => onChange(event)}
                            value={data.name === null ? "" : data.name}
                            variant="outlined"
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <TextField
                            onChange={event => onChange(event)}
                            value={
                              data.name_fantasy === null
                                ? ""
                                : data.name_fantasy
                            }
                            fullWidth
                            margin="dense"
                            name="name_fantasy"
                            label="Nome Fantasia"
                            variant="outlined"
                          />
                        </Col>
                        <Col sm="12" md="6">
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
                        <Col sm="12" md="6">
                          <TextField
                            onChange={event => onChange(event)}
                            value={data.email === null ? "" : data.email}
                            fullWidth
                            margin="dense"
                            name="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <NumberFormat
                            onChange={event => onChange(event)}
                            name="whatzapp"
                            value={data.whatzapp === null ? "" : data.whatzapp}
                            customInput={TextField}
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            label="Whatsapp"
                            format="(##)#####-####"
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <TextField
                            onChange={event => onChange(event)}
                            value={data.facebook === null ? "" : data.facebook}
                            fullWidth
                            margin="dense"
                            name="facebook"
                            label="Facebook"
                            variant="outlined"
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <NumberFormat
                            onChange={event => onChange(event)}
                            name="contact"
                            value={data.contact === null ? "" : data.contact}
                            customInput={TextField}
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            label="Contato 1"
                            format={
                              data.contact && data.contact.indexOf("9") === 4
                                ? "(##)#####-####"
                                : "(##)####-####"
                            }
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <NumberFormat
                            onChange={event => onChange(event)}
                            name="contact_2"
                            value={
                              data.contact_2 === null ? "" : data.contact_2
                            }
                            customInput={TextField}
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            label="Contato 2"
                            format={
                              data.contact_2 &&
                              data.contact_2.indexOf("9") === 4
                                ? "(##)#####-####"
                                : "(##)####-####"
                            }
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <TextField
                            onChange={event => onChange(event)}
                            value={data.street === null ? "" : data.street}
                            fullWidth
                            margin="dense"
                            name="street"
                            label="Rua"
                            variant="outlined"
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <TextField
                            onChange={event => onChange(event)}
                            value={data.number === null ? "" : data.number}
                            fullWidth
                            margin="dense"
                            name="number"
                            type="number"
                            label="Número"
                            variant="outlined"
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <TextField
                            onChange={event => onChange(event)}
                            value={data.district === null ? "" : data.district}
                            fullWidth
                            margin="dense"
                            name="district"
                            label="Bairro"
                            variant="outlined"
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <TextField
                            onChange={event => onChange(event)}
                            value={data.city === null ? "" : data.city}
                            fullWidth
                            margin="dense"
                            name="city"
                            label="Cidade"
                            variant="outlined"
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <TextField
                            onChange={event => onChange(event)}
                            value={data.uf === null ? "" : data.uf}
                            fullWidth
                            margin="dense"
                            name="uf"
                            label="Estado"
                            variant="outlined"
                          />
                        </Col>
                        <Col sm="12" md="6">
                          <NumberFormat
                            onChange={event => onChange(event)}
                            value={data.cep === null ? "" : data.cep}
                            name="cep"
                            customInput={TextField}
                            variant="outlined"
                            fullWidth
                            margin="dense"
                            label="Cep"
                            format="#####-###"
                          />
                        </Col>
                        <Col sm="12" xl="12">
                          <Editor
                            apiKey="lq2rjs1hmbpujg9q86hedztzl6o1g0v3pd6h2u084uxbss5d"
                            initialValue={
                              data.description === null
                                ? "<p>Pressione <strong>Enter</strong> para novo parágrafo ou <strong> Shift + Enter </strong> para quebra de linha simples.</p>"
                                : data.description
                            }
                            init={{
                              media_live_embeds: true,
                              height: 250,
                              menubar: false,
                              plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "media",
                                "insertdatetime media table paste code help wordcount"
                              ],
                              toolbar:
                                // eslint-disable-next-line no-multi-str
                                "newdocument | undo redo | formatselect | bold italic backcolor forecolor fontselect | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat preview media"
                            }}
                            onChange={event => handleEditorChange(event)}
                          />
                          {/* <div className="title_info">Descrição Breve</div>
                          <TextareaAutosize
                            onChange={event => onChange(event)}
                            name="description"
                            className="description"
                            rowsMax={3}
                            aria-label="empty textarea"
                            placeholder="Faça uma breve descrição do site"
                          /> */}
                        </Col>
                      </Row>
                    </InfoCard>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </form>
    </Container>
  );
}
