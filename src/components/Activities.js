// bootstrap
import { Col, Container, Row, Tab, Nav, Card } from "react-bootstrap";
import {
  Flag,
  Globe,
  Joystick,
  Lightbulb,
  People,
  Rocket,
  Terminal,
  Trophy,
} from "react-bootstrap-icons";
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
            <div className="activities-header">
              <h2>Participate In Our Activities</h2>

              <p>
                CSEC tries to host at least one activity per week. Check our
                Discord server or calendar for more information!
              </p>
            </div>

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
                  <div className="activity-cards">
                    {/* General Meetings */}
                    <Card className="activity-card">
                      <Card.Body>
                        <Card.Title>
                          <div className="icon-container">
                            <div className="icon">
                              <People size={22} />
                            </div>
                            <div className="icon-text">Gen. Meetings</div>
                          </div>
                        </Card.Title>
                        Interact with other students interested in
                        Cybersecurity. Explore trends, ideas, and potential
                        collaborations in a vibrant inclusive environment.
                      </Card.Body>
                    </Card>

                    {/* Speakers */}
                    <Card className="activity-card">
                      <Card.Body>
                        <Card.Title>
                          <div className="icon-container">
                            <div className="icon">
                              <Rocket size={22} />
                            </div>
                            <div className="icon-text">Speakers</div>
                          </div>
                        </Card.Title>
                        Learn from industry professionals who share insights,
                        advice, and experiences. Elevate your understanding in
                        cybersecurity and gain valuable guidance.
                      </Card.Body>
                    </Card>

                    {/* Game Nights */}
                    <Card className="activity-card">
                      <Card.Body>
                        <Card.Title>
                          <div className="icon-container">
                            <div className="icon">
                              <Joystick size={22} />
                            </div>
                            <div className="icon-text">Game Nights</div>
                          </div>
                        </Card.Title>
                        Beyond bytes and codes, join our Game Nights to share
                        laughter, forge friendships, and unwind. Discover the
                        human side of cybersecurity enthusiasts.
                      </Card.Body>
                    </Card>
                  </div>
                </Tab.Pane>

                {/* Pane 2 */}
                <Tab.Pane eventKey="second">
                  <div className="activity-cards">
                    {/* Beginner friendly */}
                    <Card className="activity-card">
                      <Card.Body>
                        <Card.Title>
                          <div className="icon-container">
                            <div className="icon">
                              <Lightbulb size={22} />
                            </div>
                            <div className="icon-text">Entry-level</div>
                          </div>
                        </Card.Title>
                        Participants do not need prior experience to attend our
                        workshops. We do our best to ensure everyone attending
                        can grasp the content and participate actively.
                      </Card.Body>
                    </Card>

                    {/*  */}
                    <Card className="activity-card">
                      <Card.Body>
                        <Card.Title>
                          <div className="icon-container">
                            <div className="icon">
                              <Terminal size={22} />
                            </div>
                            <div className="icon-text">Hands-on</div>
                          </div>
                        </Card.Title>
                        We design our workshops so attendants can follow along
                        with the presentation. Our goal is to make the learning
                        experience frictionless and inclusive for everyone.
                      </Card.Body>
                    </Card>

                    {/* Game Nights */}
                    <Card className="activity-card">
                      <Card.Body>
                        <Card.Title>
                          <div className="icon-container">
                            <div className="icon">
                              <Globe size={22} />
                            </div>
                            <div className="icon-text">Up-to-date</div>
                          </div>
                        </Card.Title>
                        We do our best to bring relevant and industry-standard
                        topics to the forefront of our workshops, ensuring that
                        participants gain valuable insights and skills in
                        today's market.
                      </Card.Body>
                    </Card>
                  </div>
                </Tab.Pane>

                {/* Pane 3 */}
                <Tab.Pane eventKey="third">
                  <div className="activity-cards">
                    <Card className="activity-card">
                      <Card.Body>
                        <Card.Title>
                          <div className="icon-container">
                            <div className="icon">
                              <Flag size={22} />
                            </div>
                            <div className="icon-text">What's CTF?</div>
                          </div>
                        </Card.Title>
                        Capture The Flag (CTF) is a dynamic cybersecurity
                        challenge where participants uncover hidden "flags" in
                        simulated environments, enhancing practical skills and
                        teamwork for effective training.
                      </Card.Body>
                    </Card>
                    {/* Game Nights */}
                    <Card className="activity-card">
                      <Card.Body>
                        <Card.Title>
                          <div className="icon-container">
                            <div className="icon">
                              <Trophy size={22} />
                            </div>
                            <div className="icon-text">Our Team</div>
                          </div>
                        </Card.Title>
                        We do our best to bring relevant and industry-standard
                        topics to the forefront of our workshops, ensuring that
                        participants gain valuable insights and skills in
                        today's market.
                      </Card.Body>
                    </Card>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
