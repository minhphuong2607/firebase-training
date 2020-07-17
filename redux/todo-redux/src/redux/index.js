import {createStore} from 'redux';
import todoApp from './reducers/todos';

const store = createStore(todoApp);