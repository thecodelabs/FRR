import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Main from './Main'

mapStateToProps(state)=> {
  return {
    recipes: state.recipes
  }
}

mapDispatchToProps(dispatch)=> {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
