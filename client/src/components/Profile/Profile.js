import React from "react";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";
import ActivityRow from "./ActivityRow"

function Profile(props) {

    let style = {
        ul: {
            listStyle: "none"
        },
        li: {
            padding: "5px"
        },
        jumbo: {
            textAlign: "center",
            background: "none",
            marginBottom: "10px"
            
        },
        header: {
            textAlign: "center",
            width: "50%"
        }

    }

    //run calculations
    let totalRunDistance = 0;
    for (let i = 0; i < props.user.activities.length; i++) {
        //if the sport is running
        if (props.user.activities[i].sport === "run")
            //if the unit is miles
            if (props.user.activities[i].distance_measurement === "miles") {
                totalRunDistance += props.user.activities[i].distance_unit
            } else {
                //convert to miles
                totalRunDistance += (props.user.activities[i].distance_unit * 0.621371)
            }
    }
    console.log("Total run distance in miles: ", totalRunDistance)

    //swim calculations
    let totalSwimDistance = 0;
    for (let i = 0; i < props.user.activities.length; i++) {
        //if the sport is swimming
        if (props.user.activities[i].sport === "swim")
            //if the unit is yards
            if (props.user.activities[i].distance_measurement === "yards") {
                totalSwimDistance += props.user.activities[i].distance_unit
            } else {
                //convert to yards
                totalSwimDistance += (props.user.activities[i].distance_unit * 1.09361)
            }
    }
    console.log("Total swim distance in yards: ", totalSwimDistance)

    //bike calculations
    let totalBikeDistance = 0;
    for (let i = 0; i < props.user.activities.length; i++) {
        //if the sport is biking
        if (props.user.activities[i].sport === "bike")
            //if the unit is miles
            if (props.user.activities[i].distance_measurement === "miles") {
                totalBikeDistance += props.user.activities[i].distance_unit
            } else {
                //convert to yards
                totalBikeDistance += (props.user.activities[i].distance_unit * .621371)
            }
    }
    console.log("Total bike distance in miles: ", totalBikeDistance)

    let activityNum = props.user.activities.length;
   
    return (
        <Container fluid>
            <Row>
                <Col size="md-12" style={style.header}>
                    <Jumbotron style={style.jumbo}>
                        <h1>Profile</h1>
                        <h2>

                        </h2>
                        <img src={props.user.imageUrl} className="text-center" alt="User Avatar" />
                        <hr></hr>
                        <h1>{props.user.givenName}'s Lifetime Totals</h1>
                        <ul style={style.ul}>
                            <li style={style.li}>Total Bike Distance: {totalBikeDistance} miles</li>
                            <li style={style.li}>Total Run Distance: {totalRunDistance} miles</li>
                            <li style={style.li}>Total Swim Distance: {totalSwimDistance} yards</li>
                            <li style={style.li}>Total Activities Completed: {activityNum}</li>
                        </ul>
                    </Jumbotron>
                </Col>
            </Row>

            <Row>
                <Col>
                    {props.user.activities.map(activity => {
                        console.log(activity)
                        return (
                            <ActivityRow
                                key={activity.id}
                                date={activity.date}
                                sport={activity.sport}
                                distance_unit={activity.distance_unit}
                                distance_measurement={activity.distance_measurement}
                                time={activity.time}
                                id={activity.id}
                                delete={props.delete}
                            />
                        )
                    })}

                </Col>
            </Row>
        </Container>
    );
}

export default Profile