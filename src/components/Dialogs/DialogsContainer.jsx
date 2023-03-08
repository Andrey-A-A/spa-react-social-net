import {
  actionCreatorAddMessage,
  actionCreatorUpdateNewMessageText,
} from '../../redux/dialogsPageReducer';
//import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// const DialogsContainer = () => {
//Закомментирую этот вывод для подключения контекста
/*
  let state = props.store.getState().dialogsPage;

  const addMessage = () => {
    props.store.dispatch(actionCreatorAddMessage());
  }

  const onMessageChange = (text) => {
    props.store.dispatch(actionCreatorUpdateNewMessageText(text));
  }

  return (
    <Dialogs
      updateNewMessageText={onMessageChange}
      addMessage={addMessage}
      dialogsPage={state}
    />
  );*/

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsPage;

//         const addMessage = () => {
//           store.dispatch(actionCreatorAddMessage());
//         };

//         const onMessageChange = (text) => {
//           store.dispatch(actionCreatorUpdateNewMessageText(text));
//         };

//         return (
//           <Dialogs
//             updateNewMessageText={onMessageChange}
//             addMessage={addMessage}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

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

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);
