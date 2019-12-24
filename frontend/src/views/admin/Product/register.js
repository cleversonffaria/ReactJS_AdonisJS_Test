import React, { useState } from "react";
import { Card, CardBody, CardHeader, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import { Container, InfoCard } from "./style";
import clsx from "clsx";

import { AppSwitch } from "@coreui/react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, TextareaAutosize, InputAdornment } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";

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
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value
          }
        });
      }}
      thousandsGroupStyle="br"
      thousandSeparator
      isNumericString
      prefix="R$"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default function Register() {
  const [values, setValues] = React.useState({
    price: "",
    ofert: ""
  });
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [status, setStatus] = useState(true);
  const handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
  };

  const classes = useStyles();

  const top100Films = [
    { title: "The Shawshank Redemption", name: "casa", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 }
  ];
  function handleProduct(event) {
    event.preventDefault();
    alert("enviar");
  }
  return (
    <Container>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={event => handleProduct(event)}
      >
        <Row>
          <Col xl="8">
            <Row>
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <div className="cart_info">Informações</div>
                  </CardHeader>
                  <CardBody>
                    <InfoCard>
                      <Row>
                        <Col sm="12" md="8" xl="7">
                          <TextField
                            fullWidth
                            margin="dense"
                            id="name"
                            label="Nome do produto"
                            variant="outlined"
                          />
                        </Col>
                        <Col
                          sm="12"
                          md="4"
                          xl="5"
                          className="d-flex justify-content-center"
                        >
                          <div>
                            <label for="img" className="select_img">
                              Selecionar imagem
                              <i className="icons-file_upload ml-2"></i>
                            </label>
                            <TextField
                              fullWidth
                              className="img"
                              margin="dense"
                              id="img"
                              type="file"
                              variant="outlined"
                            />
                          </div>
                        </Col>
                        <Col xl="12">
                          <div className="title_info">Descrição Breve</div>
                          <TextareaAutosize
                            className="description"
                            rowsMax={3}
                            aria-label="empty textarea"
                            placeholder="Faça uma breve descrição do produto"
                          />
                        </Col>
                        <Col md="4">
                          <TextField
                            fullWidth
                            margin="dense"
                            label="Preço"
                            variant="outlined"
                            value={values.numberformat}
                            onChange={handleChange("price")}
                            id="price"
                            InputProps={{
                              inputComponent: NumberFormatCustom
                            }}
                          />
                        </Col>
                        <Col md="4">
                          <TextField
                            fullWidth
                            margin="dense"
                            label="Desconto"
                            variant="outlined"
                            type="number"
                            onChange={handleChange("descont")}
                            id="descont"
                          />
                        </Col>
                        <Col md="4">
                          <TextField
                            fullWidth
                            margin="dense"
                            label="Estoque"
                            variant="outlined"
                            type="number"
                            onChange={handleChange("stock")}
                            id="stock"
                          />
                        </Col>
                        <Col sm="12">
                          <div className="title_info">Especificações</div>
                          <Editor
                            apiKey="lq2rjs1hmbpujg9q86hedztzl6o1g0v3pd6h2u084uxbss5d"
                            initialValue="<p>Pressione <strong>Enter</strong> para novo parágrafo ou <strong> Shift + Enter </strong> para quebra de linha simples.</p>"
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
                                "newdocument | undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat preview media"
                            }}
                            onChange={event => handleEditorChange(event)}
                          />
                        </Col>
                      </Row>
                    </InfoCard>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="4">
            <Row>
              <Col xl="12">
                <Card>
                  <CardHeader className="d-flex align-items-center justify-content-between">
                    <Link to="/admin/brand">Criar Marca</Link>
                    <Link to="/admin/subcategory">Criar sub-categoria</Link>
                  </CardHeader>
                  <CardBody>
                    <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      x-placement="bottom"
                      getOptionLabel={option => option.title}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Marca"
                          variant="outlined"
                          margin="dense"
                          fullWidth
                        />
                      )}
                    />
                    <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      x-placement="bottom"
                      getOptionLabel={option => option.title}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label="Sub-Categoria"
                          variant="outlined"
                          margin="dense"
                          fullWidth
                        />
                      )}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <div className="cart_title">Dimensões</div>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md="4" xl="12">
                        <TextField
                          fullWidth
                          margin="dense"
                          label="Peso"
                          id="peso"
                          onChange={handleChange("peso")}
                          className={clsx(classes.margin, classes.textField)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                Kg
                              </InputAdornment>
                            )
                          }}
                          variant="outlined"
                        />
                      </Col>
                      <Col md="4" xl="12">
                        <TextField
                          fullWidth
                          margin="dense"
                          label="Altura"
                          id="height"
                          onChange={handleChange("height")}
                          className={clsx(classes.margin, classes.textField)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                cm
                              </InputAdornment>
                            )
                          }}
                          variant="outlined"
                        />
                      </Col>
                      <Col md="4" xl="12">
                        <TextField
                          fullWidth
                          margin="dense"
                          label="Largura"
                          id="width"
                          onChange={handleChange("width")}
                          className={clsx(classes.margin, classes.textField)}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                cm
                              </InputAdornment>
                            )
                          }}
                          variant="outlined"
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="12">
                <Card>
                  <CardBody className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <AppSwitch
                        className={"mx-1"}
                        variant={"3d"}
                        color={"success"}
                        defaultChecked
                        onChange={e => setStatus(e.target.checked)}
                      />
                      {(status === true && (
                        <span className="font-lg font-weight-bold text-success ml-2">
                          Ativo
                        </span>
                      )) ||
                        (status === false && (
                          <span className="font-lg font-weight-bold text-danger ml-2">
                            Bloqueado
                          </span>
                        ))}
                    </div>
                    <Button
                      className="d-flex align-items-center font-lg font-weight-bold"
                      color="ghost-success"
                    >
                      <i className="fa icons-tick fa-lg mr-1" />
                      Enviar
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </Container>
  );
}
