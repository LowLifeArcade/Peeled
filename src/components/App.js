import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PeelsCreate from './Peels/PeelsCreate'
import PeelsDelete from './Peels/PeelsDelete'
import PeelsEdit from './Peels/PeelsEdit'
import PeelsList from './Peels/PeelsList'
import PeelsShow from './Peels/PeelsShow'
import Header from './Header'
import history from '../history'

const App = () => {
  return (
    <div className="ui container" >
      <Router history={history} >
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={PeelsList} />
            <Route path="/peels/new" exact component={PeelsCreate} />
            <Route path="/peels/edit/:id" exact component={PeelsEdit} />
            <Route path="/peels/delete/:id" exact component={PeelsDelete} />
            <Route path="/peels/:id" exact component={PeelsShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;