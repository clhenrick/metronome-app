import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../components/App';

const mapStateToProps = state => state;

export default connect(mapStateToProps, { ...actions })(App);
