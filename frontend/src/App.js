import './App.css';
import Genome from './components/genome'
import { mapElement } from './store/appDispatcher';
import { connect } from 'react-redux';

const App = (props) => {

  return (
    <div className="App">
      <Genome {...props} />
    </div>
  );
}

export default connect(mapElement.mapStateToProp, mapElement.mapDispatchToProps)(App);
