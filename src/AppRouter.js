import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from './components/Header';
import FoldersPage from './components/FoldersPage';
import FilesPage from './components/FilesPage';
import DataPage from './components/DataPage';
const AppRouter = () => {

    return(
        <BrowserRouter>
        <Header />
            <Switch>
                <Route path='/' component={FoldersPage} exact={true}/>
                <Route path='/files/:id/data' component={DataPage}/>
                <Route path='/:id' component={FilesPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;