import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'
import TimeZone from './components/TimeZone';
import { Header } from './components/Header';
import CurrencyConvert from './components/CurrencyConvert';
import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={App} />
                    <Route path="/TimeZone" component={TimeZone} />
                    <Route path="/CurrencyConvert" component={CurrencyConvert} />
                    <Redirect from='*' to='/' />
                </main>
            </div>
        </BrowserRouter>

    );
}