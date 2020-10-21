import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from '../Components/About';
import Contact from '../Components/Contact';
// import Error from '../Components/Error';
import Navbar from '../Components/Navbar';
import User from '../Components/User';
import Search from '../Components/Search';

const Routerdom = () => {
    const Location = (props) => {
    return (<h1>Hello, I'm {props.name} Page</h1>);
    };

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={About}/>
                <Route exact path="/contact" component={()=>{return <Contact name='Contact' />}}/>
                <Route path="/contact/location" render={()=>{return <Location name='Location'/>}}/>
                <Route path= "/user/:fname/:lname" component={User} />
                <Route exact path= "/search" component = {Search} />
                {/* <Route component={Error} /> */}
                <Redirect to="/" />
            </Switch>
        </>
    );
};

export default Routerdom;