import React, { useState, useEffect } from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import { Body, Information, InforCard } from "./style";
import Modals from "./modal";

export default function Inicio({ user, ...props }) {
  const [info, setInfo] = useState();
  const [endereco, setEndereco] = useState();
  const [modal, setModal] = useState(false);
  const [modalinfo, setModalinfo] = useState();
  useEffect(() => {
    setEndereco({
      Cidade: "Bom Jesus do Norte",
      Rua: "Lorival Cavichine",
      Bairro: "Belvedere",
      Número: "2000",
      Estado: "Espirito Santo",
      Cep: "29460000",
      Referência: "Próximo ao batalhao da policia",
      Complemento: "AP 211"
    });
    setInfo({
      Nome: "Cleverson",
      Sobrenome: "Fernandes",
      Nascimento: "27/06/1995",
      Descrição: "",
      Sexo: "Masculino",
      Telefone: "",
      Celular: "22997349644",
      Cpf: "12359502638",
      Empresa: "Modelo",
      Cnpj: "002154888879"
    });
  }, []);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <Body>
      <Modals
        title={modalinfo && modalinfo}
        modal={modal}
        setmodal={() => setModal()}
      />
      <Card>
        <CardBody>
          <div className="welcome">Informações Pessoais</div>
          <div className="manager">
            Lembre-se, Sempre deixe todas informações atualizadas para que não
            ocorra imprevistos!
          </div>
          <Information>
            <Row>
              <Col xs="12">
                <InforCard
                  style={{ cursor: "pointer" }}
                  onClick={() => alert("Mudar foto")}
                >
                  <Col xs="12" sm="3" className="campo">
                    Foto
                  </Col>
                  <Col className="inf">
                    Escolha uma foto para personalizar sua conta
                  </Col>
                  <Col xs="2" className="edit">
                    <div className="linkPhoto">
                      <img
                        className="imgPerfil ml-4"
                        src={user.img}
                        alt="imagem do usuário"
                      />
                      <div className="editImage ml-4">
                        <i className="fa icons-camera4 fa-lg"></i>
                      </div>
                    </div>
                  </Col>
                </InforCard>
              </Col>
              {info &&
                Object.entries(info).map(dado => (
                  <Col xs="12" key={dado[0]}>
                    <InforCard>
                      <Col xs="12" sm="3" className="campo">
                        {dado[0]}
                      </Col>
                      <Col className="inf">{dado[1]}</Col>
                      <Col xs="2">
                        {dado[1] ? (
                          <i className="fa fa-check fa-lg arrow-positive"></i>
                        ) : (
                          <i className="fa fa-close fa-lg arrow-negative"></i>
                        )}
                      </Col>
                    </InforCard>
                  </Col>
                ))}
              <Col xs="12">
                <Button
                  onClick={() => {
                    toggle();
                    setModalinfo({ info: info, title: "Informações Pessoais" });
                  }}
                  className="float-right mt-3"
                  color="warning"
                >
                  <i className="fa fa-pencil fa-lg mr-2"></i> Editar
                </Button>
              </Col>
            </Row>
          </Information>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <div className="welcome">Endereço</div>
          <div className="manager">
            Atualize seu endereço sempre que necessário!
          </div>
          <Information>
            <Row>
              {endereco &&
                Object.entries(endereco).map(dado => (
                  <Col xs="12" key={dado[0]}>
                    <InforCard>
                      <Col xs="12" sm="3" className="campo">
                        {dado[0]}
                      </Col>
                      <Col className="inf">{dado[1]}</Col>
                      <Col xs="2">
                        {dado[1] ? (
                          <i className="fa fa-check fa-lg arrow-positive"></i>
                        ) : (
                          <i className="fa fa-close fa-lg arrow-negative"></i>
                        )}
                      </Col>
                    </InforCard>
                  </Col>
                ))}
              <Col xs="12">
                <Button
                  onClick={() => alert("Vou Deletar")}
                  className="float-right mt-3"
                  color="danger"
                  outline
                >
                  <i className="fa fa-trash fa-lg mr-2"></i> Excluir
                </Button>
                <Button
                  onClick={() => {
                    toggle();
                    setModalinfo({
                      info: endereco,
                      title: "Endereço"
                    });
                  }}
                  className="float-right mt-3 mr-3"
                  color="warning"
                >
                  <i className="fa fa-pencil fa-lg mr-2"></i> Editar
                </Button>
              </Col>
            </Row>
          </Information>
        </CardBody>
      </Card>
    </Body>
  );
}
