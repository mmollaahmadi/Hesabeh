import React from "react";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Card,
  CardBody,
  Badge
} from "reactstrap";
import { FILTERS, NOTIFICATIONS_FILTERS, GROUPS_FILTERS } from "../../constants/constants";
import TableFilters from "../common/table-filters/table-filters";

class DefaultOrderValue extends React.Component {
  render() {
    return (
      <>
        <Col lg="7" className='mt-3'>
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="shadow m-0 mt-5"
          >
            <CardBody>
              <Form>
                <Row className="px-2">
                  <Col lg="12" className="px-4">
                    <FormGroup>
                      <Badge color='dark' className='default-order-label-badge'>ترتیب پیشفرض نمایش گروه‌ها:</Badge>
                      <TableFilters
                        filters={GROUPS_FILTERS}
                        currentUser={this.props.currentUser}
                      />
                      {/*                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
*/}
                    </FormGroup>
                  </Col>
                  <Col lg="12" className="px-4">
                    <FormGroup>
                      <Badge color='dark' className='default-order-label-badge'>ترتیب پیشفرض نمایش خرج‌ها:</Badge>

                      <TableFilters
                        currentUser={this.props.currentUser}
                        filters={FILTERS} />
                    </FormGroup>
                  </Col>
                  <Col lg="12" className="px-4">
                    <FormGroup>
                      <Badge color='dark' className='default-order-label-badge'>ترتیب پیشفرض نمایش اعلام‌ها:</Badge>
                      <TableFilters
                        currentUser={this.props.currentUser}
                        filters={NOTIFICATIONS_FILTERS} />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col lg="5"></Col>
      </>
    );
  }
}
export default DefaultOrderValue;
