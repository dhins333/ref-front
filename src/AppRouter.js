import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/Header';
import FoldersPage from './components/FoldersPage';
import FilesPage from './components/FilesPage';
import DataPage from './components/DataPage';
import ErrorPage from './components/404Page';
const AppRouter = () => {

    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route path='/' component={FoldersPage} exact={true}/>
                <Route path='/files/:id/data' component={DataPage} exact={true}/>
                <Route path='/:id' component={FilesPage} exact={true}/>
                <Route path='*' component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;