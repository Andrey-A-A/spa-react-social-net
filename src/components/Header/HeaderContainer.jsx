import React from 'react';
import Header from './Header';
import { getAuthUser } from '../../redux/authReducer';
import { connect } from 'react-redux/es/exports';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUser();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { getAuthUser })(HeaderContainer);
