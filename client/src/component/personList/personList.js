import { Box, Typography } from "@mui/material";
import React from "react";
import { getAllUsers } from "../../actions/loadInfo";

import "./personList.css";
import PersonCard from "../personCard/personCard";
import WhiteContainer from "../whiteContainer/whiteContainer";
import { STATUS, mockCandidates } from "../../constants";
import { capitalize } from "lodash";

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
    };
  }

  componentDidMount() {
    getAllUsers(this);
  }

  getColumnContents() {
    const { title, positions } = this.props;
    const { candidates } = this.state;
    if (title === capitalize(STATUS.CONSIDERING)) {
      return Object.values(positions).map((pos) => (
        <>
          <Typography
            key={pos}
            variant="subtitle2"
            color="textSecondary"
            textAlign="center"
          >
            {pos}
          </Typography>
          {candidates
            .filter((p) => p.status === STATUS.CONSIDERING)
            .map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
        </>
      ));
    }
    return Object.values(positions).map((pos) => (
      <>
        <Typography
          key={pos}
          variant="subtitle2"
          color="textSecondary"
          textAlign="center"
        >
          {pos}
        </Typography>
        {candidates
          .filter(
            (p) => p.position.includes(pos) && p.status !== STATUS.CONSIDERING
          )
          .map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
      </>
    ));
  }

  render() {
    const { title } = this.props;
    return (
      <Box margin="1rem" className="personList">
        <WhiteContainer maxWidth="400px">
          <Typography variant="h4" color="textPrimary">
            {title}
          </Typography>
          <Box key={title} marginBottom="0.8em">
            {this.getColumnContents()}
          </Box>
        </WhiteContainer>
      </Box>
    );
  }
}

export default PersonList;
