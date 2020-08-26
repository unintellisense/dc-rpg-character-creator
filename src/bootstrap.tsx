import { hot } from 'react-hot-loader/root';
import * as React from 'react'
import * as ReactDOM from 'react-dom';
import App from './app'

const HotApp = hot(App)

ReactDOM.render(
    <HotApp/>,
    document.getElementById('root')
)