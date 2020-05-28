import React , {useEffect} from 'react';
import Userlist from '../containers/Users/Userlist';
import UserProfile from '../containers/Users/Userprofile';
// this is dashboard page (main page)
// change to Class Component to functional Component
function App(){
useEffect(()=>{
    document.getElementById("UserList").style.display = "block";
    document.getElementById("defaultOpen").className += " active";
})
    function openCity(cityName, evt) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
        return (
            <React.Fragment>
                <div style={{ marginLeft: '12%', marginTop: '20px' }}>
                    <h4>Dashboard Page</h4>
                    <div class="tab">
                        <button class="tablinks" onClick={openCity.bind(this, 'UserList')} id="defaultOpen">User List</button>
                        <button class="tablinks" onClick={openCity.bind(this, 'UserProfile')}>User Profile</button>
                    </div>
                    <div id="UserList" class="tabcontent">
                        <Userlist />
                    </div>
                    <div id="UserProfile" class="tabcontent">
                        <UserProfile />
                    </div>
                </div>
            </React.Fragment>
        );
    }

export default App;