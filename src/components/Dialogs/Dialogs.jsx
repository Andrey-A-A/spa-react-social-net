import React from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} avatar={m.avatar} name={m.name} />
  ));

  let newMessageText = state.newMessageText;

  const refMessage = React.useRef('Введите сообщение');

  const addMessage = () => {
    props.addMessage();
  };

  const onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  if (props.isAuth === false) return <Navigate to={'/login'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.messageContainer}>{messagesElements}</div>
      </div>
      <div className={s.formData}>
        <div>
          <textarea onChange={onMessageChange} ref={refMessage} value={newMessageText} />
        </div>
        <div>
          <button onClick={addMessage}>Новые сообщения</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
