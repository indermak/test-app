import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    const signOut = () => {
        localStorage.clear();
        props.history.push('/login');
    }
    const user = localStorage;
    if(!(user.name && user.role && user.pass)){
        props.history.push('/login');
        return null;
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/schedules">Schedules</Link>
                        </li>
                        {user.role === 'Admin' && (
                            <li className="nav-item active">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                        )}
                        < li className="nav-item active">
                            <button type="button" className="btn btn-link" onClick={signOut}>Sign Out</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}