import React, { useState, useEffect } from "react"

function Userlist() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('https://reqres.in/api/users?page=2');
            res
                .json()
                .then((finalRes) => setUsers(finalRes.data))
                .catch((err) => console.log("error calling api", err))
        }
        fetchData()

    }, [])
    return (
        <React.Fragment>
            <table style={{ fontFamily: 'arial, sansSerif', borderCollapse: 'collapse', width: '90%' }}>
                <tr>
                    <th style={{border:'1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Id</th>
                    <th style={{border:'1px solid #dddddd',textAlign: 'left',padding: '8px'}}>FirstName</th>
                    <th style={{border:'1px solid #dddddd',textAlign: 'left',padding: '8px'}}>LastName</th>
                    <th style={{border:'1px solid #dddddd',textAlign: 'left',padding: '8px'}}>Email</th>
                </tr>
                {
                    users.map((data) => {
                        return (
                            <React.Fragment>
                                <tr>
                                    <td style={{border:'1px solid #dddddd',textAlign: 'left',padding: '8px'}}>{data.id}</td>
                                    <td style={{border:'1px solid #dddddd',textAlign: 'left',padding: '8px'}}>{data.first_name}</td>
                                    <td style={{border:'1px solid #dddddd',textAlign: 'left',padding: '8px'}}>{data.last_name}</td>
                                    <td style={{border:'1px solid #dddddd',textAlign: 'left',padding: '8px'}}>{data.email}</td>
                                </tr>
                            </React.Fragment>
                        )
                    })
                }
            </table>
        </React.Fragment>
    )
}
export default Userlist;