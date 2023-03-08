import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux/es/exports';
import { getUserProfile } from '../../redux/profilePageReducer';
import { withRouter } from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
}

//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// (props) => {
//   if (!this.props.isAuth) return <Navigate to={'/login'} />;
//   return <ProfileContainer {...props} />;
// };

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect,
  withRouter,
)(ProfileContainer);
