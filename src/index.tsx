import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from 'material-ui-pickers';
import * as serviceWorker from './serviceWorker';
const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </MuiPickersUtilsProvider>

</MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
