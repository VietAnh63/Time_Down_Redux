import React from 'react'
import Number from './components/Number'
import Title from './components/Title'
import Button from './components/Button'
import store from './redux-setup/Store'
import {Provider} from 'react-redux'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
        <Provider store={store}>
          <Title/>
          <Number/>
          <Button/>
        </Provider>
     );
  }
}
 
export default App;
