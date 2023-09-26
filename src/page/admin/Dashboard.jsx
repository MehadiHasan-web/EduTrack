import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

// logout function 
const logout = ()=>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, logout!'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.post('http://localhost:8000/api/auth/logout').then(res=>{
                // remove data localStorage
                localStorage.removeItem('email')
                localStorage.removeItem('name')
                localStorage.removeItem('number') 
                localStorage.removeItem('photo')
                localStorage.removeItem('token')
    
                // navigate('/admin');
                window.location.reload();
            }).catch(errors =>{

            })
        }
      }) 
}




const Dashboard = () => {
    return (
        <>
           
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">EduTrack</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>

                    
                </form>

                {/* settings */}
                <div className="dropdown">
                <a className="btn btn-dark dropdown-toggle ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Settings
                </a>
                <ul className="dropdown-menu ">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" onClick={logout} href="#">Logout</a></li>
                </ul>
                </div>


                </div>
            </div>
            </nav>

           



        </>
    );
};

export default Dashboard;