import React from 'react';
import { Router, Route } from 'react-router-dom';
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
          <Route path="/" exact component={PeelsList} />
          <Route path="/peels/new" exact component={PeelsCreate} />
          <Route path="/peels/edit/:id" exact component={PeelsEdit} />
          <Route path="/peels/delete" exact component={PeelsDelete} />
          <Route path="/peels/show" exact component={PeelsShow} />
        </div>
      </Router>
    </div>
  );
}

export default App;