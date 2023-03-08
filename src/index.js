import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import './assets/fonts/glyphicons-halflings-regular.woff';

// ./assets/fonts/glyphicons-halflings-regular.woff
//let rerenderEntireTree = () => {
//debugger;
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* <StoreContext.Provider value={store}> */}
        <App
        // store={store}
        //state={state}
        // dispatch={store.dispatch.bind(store)}
        />
        {/* </StoreContext.Provider> */}
      </Provider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);
//};

//rerenderEntireTree(store.getState());

//store.subscribe(rerenderEntireTree);

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
