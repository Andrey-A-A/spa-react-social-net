import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux/es/exports';
import { getUserProfile,  getStatus, updateStatus} from '../../redux/profilePageReducer';
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = 25429;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   debugger
  //   let a = this.state;
  //   let b = this.props;
  //   console.log("componentDidUpdate");
  // }

  render() {
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile,  getStatus, updateStatus}),
  withAuthRedirect,
  withRouter,
)(ProfileContainer);
