import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Hey Nerd.
          </p>
        </header>
        <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            List
          </Typography>
        </CardContent>
        </Card>
      </div>
    );
  }
}

export default App;
