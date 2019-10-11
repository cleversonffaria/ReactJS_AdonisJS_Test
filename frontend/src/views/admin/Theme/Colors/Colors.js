import React, { Component } from 'react';
import { Row, Col,CardBody,Card,Table } from 'reactstrap'



class Colors extends Component {
 
  render() {

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
              <CardBody>
            <Card>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>Usuário</th>
                    <th className="text-center">País</th>
                    <th className="text-right">Data do cadastro</th>
                    <th className="text-center">Forma de pagamento</th>
                    <th>Atividade</th>
                  </tr>
                  </thead>

                  <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Marcos Fernandes</div>
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-br h4 mb-0" title="us" id="us"></i>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>
                      <div className="small text-muted">Ultimo acesso</div>
                      <strong>10 seg atrás</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Cléverson Fernandes</div>
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-br h4 mb-0" title="us" id="us"></i>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <i className="fa fa-cc-paypal" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>
                      <div className="small text-muted">Ultimo acesso</div>
                      <strong>10 seg atrás</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Calleby Faria</div>
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-br h4 mb-0" title="us" id="us"></i>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <i className="fa fa-cc-stripe" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>
                      <div className="small text-muted">Ultimo acesso</div>
                      <strong>10 seg atrás</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Nubiha Thiengo</div>
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-br h4 mb-0" title="us" id="us"></i>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <i className="fa fa-cc-amex" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>
                      <div className="small text-muted">Ultimo acesso</div>
                      <strong>10 seg atrás</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Thalita Bastos</div>
                    </td>
                    <td className="text-center">
                      <i className="flag-icon flag-icon-br h4 mb-0" title="us" id="us"></i>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>
                    </td>
                    <td>
                      <div className="small text-muted">Ultimo acesso</div>
                      <strong>10 seg atrás</strong>
                    </td>
                  </tr>
                  
                  </tbody>
                </Table>
            </Card>
              </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Colors;
