import React from 'react';
import { Link } from 'react-router-dom'
const sidebarRoute = [
  { id: 5, label: 'Home', path: '/' },
  { id: 1, label: 'Test1', path: '/test1' },
  { id: 2, label: 'Test2', path: '/test2' },
  { id: 3, label: 'Test3', path: '/test3' },
  { id: 4, label: 'Test4', path: '/test4' }]
function NavigationBar() {
  return (
    <React.Fragment>
      <div>
        <ul style={{ listStyleType: 'none', textAlign: 'center', margin: 0, padding: 0, width: '10%', borderRight: '1px solid grey', position: 'absolute', height: '100%', background: 'lightGray' }}>
          {sidebarRoute.map((data) => {
            return (
              <React.Fragment>
                  <Link to={data.path} style={{ color: '#fff', textDecoration: 'none' }}>
                    <li style={{padding:'3px'}}>{data.label}</li>
                    </Link>
                <hr />
              </React.Fragment>
            )
          })
          }
        </ul>
      </div>
    </React.Fragment>
  );
}

export default NavigationBar;
