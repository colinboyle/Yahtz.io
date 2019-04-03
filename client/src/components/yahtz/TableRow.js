import React, { Component } from "react";
import PropTypes from "prop-types";
//import classNames from "classnames";

class TableRow extends Component {
  //constructor(props) {
  //  super(props);
  //}
  render() {
    return (
      <div
        style={
          this.props.active ? null : { fontWeight: "bold", cursor: "default" }
        }
        name={this.props.name}
        onClick={this.props.onClick}
        score={this.props.score}
        className="col mx-3 scoreField text-center mb-1 ml-1 inset"
      >
        {this.props.score}
      </div>
    );
  }
}

TableRow.propTypes = {
  score: PropTypes.number
};

export default TableRow;
