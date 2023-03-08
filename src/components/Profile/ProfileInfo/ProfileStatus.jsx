import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  render() {
    return (
      <>
        <div>
          <span>{this.props.status}</span>
        </div>
        <div>
          <input value={this.props.status}></input>
        </div>
      </>
    );
  }
}

export default ProfileStatus;
