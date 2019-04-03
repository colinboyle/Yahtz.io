import React, { Component } from "react";

import TextFieldGroup from "../common/TextFieldGroup";
import Spinner from "../common/Spinner";

class RoomList extends Component {
  render() {
    const { rooms, loading } = this.props;
    const content = loading ? (
      <Spinner />
    ) : (
      Object.keys(rooms).map(room => (
        <button
          type="button"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          <i class="fas fa-user" /> {room}
          <span class="badge badge-primary badge-pill">2</span>
        </button>
      ))
    );
    return (
      <div className="row mt-3">
        <div className="col-6 mx-auto">
          <h4>Choose a lobby</h4>
          <ul className="list-group">{content}</ul>
          <br />
          <TextFieldGroup
            name="roomName"
            id="roomName"
            placeholder="Or Enter Private Lobby Code"
            onChange={null}
          />
        </div>
      </div>
    );
  }
}

export default RoomList;
