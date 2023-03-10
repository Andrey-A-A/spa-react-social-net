import {
  actionCreatorAddMessage,
  actionCreatorUpdateNewMessageText,
} from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
//превращаем часть стейта в пропсы

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(actionCreatorUpdateNewMessageText(text));
    },
    addMessage: () => {
      dispatch(actionCreatorAddMessage());
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
