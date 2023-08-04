// bootstrap
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import "./styles/Activities.css";

export function Activities() {
  return (
    // Activities section
    <section className="activities" id="activities">
      {/* Activities container*/}
      <Container>
        <Row>
          <Col>
            {/* Header and description */}
            <h2>Participate In Our Activities</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            {/* Tabs */}
            <Tab.Container id="activity-tabs" defaultActiveKey="first">
              {/* Tabs btns */}
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center"
                id="pills-tab"
                defaultActiveKey="/home"
              >
                {/* Option 1 */}
                <Nav.Item>
                  <Nav.Link eventKey="first">Meetings</Nav.Link>
                </Nav.Item>

                {/* Option 2 */}
                <Nav.Item>
                  <Nav.Link eventKey="second">Workshops</Nav.Link>
                </Nav.Item>

                {/* Option 3 */}
                <Nav.Item>
                  <Nav.Link eventKey="third">CTF</Nav.Link>
                </Nav.Item>
              </Nav>

              {/* Tab content */}
              <Tab.Content>
                {/* Pane 1 */}
                <Tab.Pane eventKey="first">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Tab.Pane>

                {/* Pane 2 */}
                <Tab.Pane eventKey="second">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Tab.Pane>

                {/* Pane 3 */}
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
