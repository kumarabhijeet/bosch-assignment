import Test4 from './Test4';
import Test3 from './Test3';
import Test2 from './Test2';
import Test1 from './Test1';
import App from './Main';
import Header from './Header';
import SideBar from './NavBar';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { checkCookie } from './cookieHandler';
// change class component to  functional component
function Home(props) {
    function checkLoginStatus() {
        if (!checkCookie('token')) {
            props.history.push('/login');
        }
    }

    useEffect(() => {
        checkLoginStatus();
    })

    useEffect(() => {
        checkLoginStatus();
        // after every 10 sec of interval checkie the cookie token expired or not
        // cookie token has been expired after 1 min (expiry date set to 1 min)
        setInterval(checkLoginStatus, 10000)
    }, [])
    return (
        <React.Fragment>
            <Header />
            <SideBar />
            <Switch>
                <Route exact path={'/'} component={App} />
                <Route path={'/test1'} component={Test1} />
                <Route path={'/test2'} component={Test2} />
                <Route path={'/test3'} component={Test3} />
                <Route path={'/test4'} component={Test4} />
            </Switch>
        </React.Fragment>
    )
}
export default Home;