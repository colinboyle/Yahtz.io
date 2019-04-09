import React, { Component } from "react";

import TextFieldGroup from "../common/TextFieldGroup";
import Spinner from "../common/Spinner";

class RoomList extends Component {
  //componentDidUpdate(prevState) {
  //  if (prevState.rooms !== this.props.rooms) {
  //    this.forceUpdate();
  //  }
  //}

  render() {
    const { rooms, loading } = this.props;
    console.log(rooms);
    console.log(Object.keys(rooms).length);
    const content = loading ? (
      <Spinner />
    ) : Object.keys(rooms).length > 0 ? (
      Object.keys(rooms).map(room => (
        <button
          type="button"
          value={room}
          name="selectedRoom"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          onClick={this.props.onSelectingRoom}
        >
          <i class="fas fa-user" /> {room}
          <span class="badge badge-primary badge-pill">2</span>
        </button>
      ))
    ) : (
      <h1>No rooms available. Start a room.</h1>
    );
    return (
      <div className="row mt-3">
        <div className="col-6 mx-auto">
          <h4>Choose a lobby</h4>
          <ul className="list-group">{content}</ul>
          <br />
          <TextFieldGroup
            name="selectedRoom"
            id="roomEntry"
            placeholder="Or Enter Private Lobby Code"
            value={this.props.selectedRoom}
            onChange={this.props.onSelectingRoom}
          />
        </div>
      </div>
    );
  }
}

export default RoomList;
