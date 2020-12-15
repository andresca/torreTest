import React, { Fragment, useState } from 'react'
import './App.css';
import Genome from './components/genome'
import Search from './components/search'
import { mapElement } from './store/appDispatcher';
import { connect } from 'react-redux';

const App = (props) => {

  const [clicked, setClicked] = useState('bio');

  return (
    <Fragment>
      <div>
        <label onClick={ () => setClicked('bio')}>Bio</label>
        <label onClick={ () => setClicked('search')}>Search</label>
      </div>
      <div className="App">
        <Search {...props} hidden={clicked}/>
        <Genome {...props} hidden={clicked}/>
      </div>
    </Fragment>
  );
}

export default connect(mapElement.mapStateToProp, mapElement.mapDispatchToProps)(App);
