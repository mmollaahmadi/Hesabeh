import React from 'react';
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

class UsersOpenions extends React.Component {
    render() {
        return (
            <section className="section section-lg mt-1" >
            <Container>
              
            <Row className="justify-content-center text-center m-lg-3">
                <Col lg="8">
                  <h2 className="display-3">نظر کاربران حسابه</h2>                  
                </Col>
              </Row>

              <Row>
                <Col className="mb-5 mb-lg-0" >
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("../assets/img/theme/team-1-800x800.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">محمد ملااحمدی</span>                        
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">                  
                  <p className="lead text-muted">
                    من و دوستام چند ماهی میشه که از حسابه استفاده میکنیم. قابلیت های جالبی داره ولی مثل هر ابزار دیگه ای مشکلاتی هم داره که امیدواریم زودتر برطرف بشن.
                  </p>
                </Col>
              </Row>

            </Container>
          </section>
        );
    }
}

export default UsersOpenions;