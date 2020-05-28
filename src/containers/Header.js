import React from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
// converted class to functional component
const Header = withRouter(({history}) => {
    function logout() {
        history.push('/login')
    }
    return (
        <React.Fragment>
            <Grid container justify="space-between" alignItems="center" style={{ color: '#fff', height: '50px', width: '100%', background: 'grey', maxHeight: '50px' }}>
                <Grid item style={{ marginLeft: '10px' }}>
                    Bosch
                    </Grid>
                <Grid item style={{ marginRight: '20px' }}>
                    <span style={{ fontSize: '12px' }}>Abhijeet K</span>
                    <span style={{ fontSize: '12px', marginLeft: '12px', cursor: 'pointer' }} onClick={logout}>Logout</span>
                </Grid>
            </Grid>
        </React.Fragment>
    )
})
export default Header;