import React, { Component} from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import TaskBoard from '../TaskBoard/index';

class App extends Component {
    render() {
        return (
            <div className="App">
              <TaskBoard />
            </div>
          );
    }
}

export default withStyles(styles)(App);
