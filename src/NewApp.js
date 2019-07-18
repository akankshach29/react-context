import React from 'react';
import ReactDOM from 'react-dom';

class NewApp extends React.Component {
    render() {
      return ReactDOM.createPortal(
        <div className="New-App-header"><h1>Portals Demo</h1></div>,
        document.getElementById('modal-root'),
      );
    }
  }
  export default NewApp;