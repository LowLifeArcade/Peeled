import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PeelsCreate from './Peels/PeelsCreate'
import PeelsDelete from './Peels/PeelsDelete'
import PeelsEdit from './Peels/PeelsEdit'
import PeelsList from './Peels/PeelsList'
import PeelsShow from './Peels/PeelsShow'
import Header from './Header'

const App = () => {
  return (
    <div className="ui container" >
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={PeelsList} />
          <Route path="/peels/new" exact component={PeelsCreate} />
          <Route path="/peels/edit" exact component={PeelsEdit} />
          <Route path="/peels/delete" exact component={PeelsDelete} />
          <Route path="/peels/show" exact component={PeelsShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;