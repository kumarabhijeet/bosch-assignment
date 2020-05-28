import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const UserProfileData = [
    { id: 'firstName', label: 'First Name', value: 'Abhijeet' },
    { id: 'lastName', label: 'Last Name', value: 'Kumar' },
    { id: 'email', label: 'Email', value: 'abc@gmail.com' },
    { id: 'address1', label: 'Address1', value: '123 sector colony frist' },
    { id: 'address2', label: 'Address2', value: '123 sector colony second' },
    { id: 'city', label: 'City', value: 'Banglore' }];
// change to  class component to functional component
function UserProfile() {
    function onChangeHandler(index, data, event) {
        setProfileData([...ProfileData.slice(0, index),
        {
            ...ProfileData[index],
            value: event.target.value,
            error: event.target.value.length < 3 ? true : false
        },
        ...ProfileData.slice(index + 1)]);
        setSuccessMsg("");
    }
    function handleSubmit() {
        const finalLoginObjectData = ProfileData.reduce((data, obj) => {
            return data = { ...data, [obj.id]: obj.value }
        }, {})
        setSuccessMsg("Profile updated");
        console.log("profile data", finalLoginObjectData);
    }
    const [ProfileData, setProfileData] = useState(UserProfileData);
    const [successMsg, setSuccessMsg] = useState();
    const SubmitDisabled = ProfileData.some((data) => data.error);
    return (
        <React.Fragment>
            <Grid container>
                {ProfileData.map((data, index) => {
                    return (
                        <Grid item md={4} sm={4} xs={6}>
                            <TextField
                                id={data.id}
                                label={data.label}
                                onChange={onChangeHandler.bind(this, index, data)}
                                value={data.value}
                                helperText={data.error ? <span style={{ color: 'red' }}>
                                    Minimum three characters</span> : ""}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            <Grid container justify="flex-end" style={{ marginTop: '20px' }}>
                <span style={{ color: 'green', fontSize: '12px', marginLeft: '10px' }}>
                    {successMsg}
                </span>
                <Grid item>
                    <Button
                        disabled={SubmitDisabled}
                        variant="contained"
                        onClick={handleSubmit}
                    >
                        Submit
                        </Button>
                </Grid>
            </Grid>
            <Grid item>
                Note: <span style={{ fontSize: '12px' }}>
                    Valiation of each fields having minimum three characters</span>
            </Grid>
        </React.Fragment>
    )
}
export default UserProfile;