import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row
} from "reactstrap";
import NotificationsTableHeader from './notifications-table-header'
import NotificationsTableRow from "./notifications-table-row.js";
import TableTools from "../../common/table-tools/table-tools";
import TableFilters from "../../common/table-filters/table-filters";
import AOS from 'aos';
import {FILTERS} from '../../../constants/constants'

class NotificationsTable extends React.Component {
  constructor(props){
    super(props);
    AOS.init();
  }

  render() {
    const rows = [];
    this.props.data.forEach(row => {
      rows.push(<NotificationsTableRow rowData={row}/>);
    });

    return (

        <Container>
          <Card data-aos="fade-up"
               data-aos-duration="1000"
               data-aos-delay="50"
          className="card-profile shadow mt-5">
            <CardHeader>
              لیست اعلام ها
            </CardHeader>
            <CardBody>
              <TableTools buttonTitle="ایجاد درخواست" buttonLink="/create-new-request"/>
              <TableFilters data={FILTERS}/>
              <Row className="justify-content-center py-1">
                <NotificationsTableHeader/>
                {rows}
              </Row>
            </CardBody>
          </Card>
        </Container>

    );
  }
}

export default NotificationsTable;
