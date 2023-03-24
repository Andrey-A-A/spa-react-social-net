import React from 'react';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} avatar={m.avatar} name={m.name} />
  ));

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageText);
  };

  if (props.isAuth === false) return <Navigate to={'/login'} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.messageContainer}>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form className={s.formData} onSubmit={props.handleSubmit}>
      <Field component='textarea' name='newMessageText' placeholder='Введите ваше сообщение'/>
      <div>
        <button>Новые сообщения</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;
