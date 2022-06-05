import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Alert } from "bootstrap";
import { List } from "reactstrap"
import { Row, Col } from "reactstrap";


function Info() {
    return (
        <div className="More Info">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="text-center text-md-right">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiMhPs21vIaNiIcipsHdTa55ZEjZe9SjcXQ&usqp=CAU"
                            alt="WHAT YOU SHOULD DO IF YOU HAVE COVID-19 SYMPTOMS"
                        />
                    </div>


                    <div class="text-center text-md-right">
                        <h4>WHAT YOU SHOULD DO IF YOU HAVE COVID-19 SYMPTOMS</h4>


                        <List type="unstyled">

                            {/* with <ol>Can be changed by using different styles: 'lower-latin',lower-roman'upper-alphaetc.List Styling in ReactJS */}
                            <Row className="bg-warning">
                                <li> <Col >Stay home except to get medical care.</Col></li>
                            </Row>
                            <Row className="bg-primary">
                                <li><Col>Don’t go to work or any public areas.</Col></li>
                            </Row>
                            <Row className="bg-success">
                                <li><Col>Avoid using public transportation, ride sharing or taxis.</Col></li>
                            </Row>
                            <Row className="bg-warning">
                                <Col>
                                    <li>Ask a friend or family member who is healthy to help you with errands including buying groceries or picking up medications.</li>
                                </Col>
                            </Row >
                            <Row className="bg-danger">
                                <Col>
                                    <li>Avoid people who are at high-risk of developing severe infections from COVID-19, including elderly people, people who are immunocompromised and people who have chronic health conditions such as chronic heart, lung or kidney problems.</li>
                                </Col>
                            </Row>

                        </List>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Info;
