import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { setCookie } from './cookieHandler';
// for the prepopulated login data
const loginData = [
    { id: 'username', label: 'User Name', value: 'kumarabhijeet2991@gmail.com' },
    { id: 'password', label: 'Password', value: 'abhi@123' },
]
const user = {
    name: 'kumarabhijeet2991@gmail.com',
    password: 'abhi@123'
}
// converted Class to Functional Component
const Login = (props) => {
    function onChangeHandler(index, data, event) {
        setLoginData([...LoginData.slice(0, index),
        { ...LoginData[index], value: event.target.value },
        ...LoginData.slice(index + 1)]);
        setErrMsg("");
    }
    function handleSubmit() {
        const finalLoginObjectData = LoginData.reduce((data, obj) => {
            return data = { ...data, [obj.id]: obj.value }
        }, {})
        // expiry of token added for 2 min after that it falls down to the login page
        setCookie('token', 'QradsfGTFQSfsgqgfs156', 2);
        if (finalLoginObjectData.username === user.name && finalLoginObjectData.password === user.password) {
            props.history.push('/');
        }
        else {
            setErrMsg('Please enter valid Email and Password')
        }
    }

    const [LoginData, setLoginData] = useState(loginData);
    const [errMsg, setErrMsg] = useState();
    return (
        <Grid container justify="center" alignItems="center" style={{ margin: '60px auto' }}>
            <Grid item md={4} sm={6} xs={12}>
                <div style={{ background: 'gray', color: '#fff', display: 'flex', alignItems: 'center', height: '40px', padding: '5px 15px' }}>
                    <h3>Login</h3>
                </div>
                <Card style={{ height: '250px' }}>
                    <CardContent>
                        <Grid container style={{ padding: '13px' }}>
                            {LoginData.map((data, index) => {
                                return (
                                    <Grid item md={12} sm={12} xs={12} style={{ padding: '7px' }}>
                                        <TextField
                                            onChange={onChangeHandler.bind(this, index, data)}
                                            id={data.id}
                                            label={data.label}
                                            defaultValue={data.value}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                        {errMsg &&
                            <span style={{ color: 'red', fontSize: '11px', marginLeft: '20px' }}>{errMsg}</span>
                        }
                        <Grid item style={{ marginTop: '12px', marginLeft: '20px' }}>
                            <Button
                                variant="contained"
                                // color="primary"
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    )
}
export default Login;