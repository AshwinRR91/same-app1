import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FormCom from './FormCom';
import Nav from './Nav'
import TechBody from './TechBody'



const Main = () =>{
    return (
       <Router>
            <Nav/>
            <Switch>
                <Route path = "/mobile">
                    <TechBody></TechBody>
                </Route>
                <Route path = "/add">
                    <FormCom></FormCom>
                </Route>
            </Switch>
       </Router>
            
    )
}

export default Main;
