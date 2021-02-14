import React, {useState} from 'react';

import Footer from "../../components/Footer";
import LinkItem from "../../components/LinkItem";

import {Container, Row, Col, Button} from 'react-bootstrap';
import "./styles.css";

const courses = require("../../assets/resources/courses.json");
const job = require("../../assets/resources/job.json");
const dev = require("../../assets/resources/dev.json");
const tech = require("../../assets/resources/tech.json");
const random = require("../../assets/resources/random.json");
const ai = require("../../assets/resources/ai.json");

const Projects = () => {

    const [topic, setTopic] = useState("dev");

    const handleTopic = (topicName) => {
        setTopic(topicName);
    }

    return ( 
        <Container className="Project-header" fluid={true}>
            <Row className="Project-main">
                <br />

                <Row> 
                    <Col className="Project-col">
                        <Row className="Project-Button-footer" >
                            <Row>
                                <h1 style={{margin: "auto", marginBottom: "10px",}} className="p-heading1">Resources</h1>
                            </Row>
                            <h4 style={{margin: "auto", marginBottom: "10px",}} >
                                Owner: &nbsp;
                                <a 
                                    style={{ color: "#e493ea", textDecoration: "none" }}
                                    href="https://rathijitpaul.me"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >Rathijit Paul</a>
                            </h4>
                            <Col xl={12} className="Project-button-main">
                                <Button 
                                    style={topic === "dev" ? {
                                        background: "#666666", fontColor: "black"} : null
                                    }
                                    variant="outline-light" 
                                    size="lg" 
                                    className="topic-btn"
                                    onClick={() => handleTopic("dev")}
                                >
                                    DEV
                                </Button> &nbsp;

                                <Button 
                                    style={topic === "ai" ? {
                                        background: "#666666", fontColor: "black"} : null
                                    }
                                    variant="outline-light" 
                                    size="lg" 
                                    className="topic-btn"
                                    onClick={() => handleTopic("ai")}
                                >
                                    AI
                                </Button> &nbsp;

                                <Button 
                                    style={topic === "job" ? {
                                        background: "#666666", fontColor: "black"} : null
                                    }
                                    variant="outline-light" 
                                    size="lg" 
                                    className="topic-btn"
                                    onClick={() => handleTopic("job")}
                                >
                                    JOB
                                </Button> &nbsp;

                                <Button 
                                    style={topic === "tech" ? {
                                        background: "#666666", fontColor: "black"} : null
                                    }
                                    variant="outline-light" 
                                    size="lg" 
                                    className="topic-btn"
                                    onClick={() => handleTopic("tech")}
                                >
                                    TECH
                                </Button> &nbsp;

                                <Button 
                                    style={topic === "courses" ? {
                                        background: "#666666", fontColor: "black"} : null
                                    }
                                    variant="outline-light" 
                                    size="lg" 
                                    className="topic-btn"
                                    onClick={() => handleTopic("courses")}
                                >
                                    COURSES
                                </Button> &nbsp;

                                <Button 
                                    style={topic === "random" ? {
                                        background: "#666666", fontColor: "black"} : null
                                    }
                                    variant="outline-light" 
                                    size="lg" 
                                    className="topic-btn"
                                    onClick={() => handleTopic("random")}
                                >
                                    RANDOM
                                </Button>
                            </Col>
                        </Row>
                    </Col>                     
                </Row>

                <hr className="hr-line"/>

                <Row className="Project-list-main">
                    {topic === "dev" ? (
                        <React.Fragment>
                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Tutorials
                                </h3>
                            </Row>
                            {dev["Tutorials"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Topics
                                </h3>
                            </Row>
                            {dev["Topics"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Articles
                                </h3>
                            </Row>
                            {dev["Articles"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    GitHub Repos & Projects
                                </h3>
                            </Row>
                            {dev["GitHub Repos & Projects"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Other
                                </h3>
                            </Row>
                            {dev["Other"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                        </React.Fragment> 
                    ) : null}
                    
                    {topic === "ai" ? (
                        <React.Fragment>
                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Playgrounds
                                </h3>
                            </Row>
                            {ai["Playgrounds"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Tutorials
                                </h3>
                            </Row>
                            {ai["Tutorials"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Projects, Datasets & GitHub Repos
                                </h3>
                            </Row>
                            {ai["Projects, Datasets & GitHub Repos"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Articles
                                </h3>
                            </Row>
                            {ai["Articles"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Other
                                </h3>
                            </Row>
                            {ai["Other"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                        </React.Fragment>
                    ) : null}
                    
                    {topic === "job" ? (
                        <React.Fragment>
                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Problem Solving
                                </h3>
                            </Row>
                            {job["Problem Solving"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    System Design
                                </h3>
                            </Row>
                            {job["System Design"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Interview
                                </h3>
                            </Row>
                            {job["Interview"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Resume
                                </h3>
                            </Row>
                            {job["Resume"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Career Website
                                </h3>
                            </Row>
                            {job["Career Websites"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                            <br />

                            <Row>
                                <h3 style={{margin: "auto", marginBottom: "10px",}} >
                                    Other
                                </h3>
                            </Row>
                            {job["Other"].map( ps => (
                                <LinkItem
                                    key = {ps.url}
                                    url = {ps.url}
                                    title = {ps.title}
                                />
                            ))}
                        </React.Fragment> 
                    ) : null}

                    {topic === "tech" ? (
                        tech.map(item => (
                            <LinkItem
                                key = {item.url}
                                url = {item.url}
                                title = {item.title}
                            />
                        ))
                    ) : null}

                    {topic === "courses" ? (
                        courses.map(course => (
                            <LinkItem
                                key = {course.url}
                                url = {course.url}
                                title = {course.title}
                            />
                        ))
                    ) : null}

                    {topic === "random" ? (
                        random.map(item => (
                            <LinkItem
                                key = {item.url}
                                url = {item.url}
                                title = {item.title}
                            />
                        ))
                    ) : null}
                </Row>
            
                
            </Row>
            <Row className="About-footer">
                <Footer />
            </Row>
        </Container>
    );
}
 
export default Projects;