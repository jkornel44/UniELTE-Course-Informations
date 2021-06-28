import { useState } from 'react';

function Header() {
    return(
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div className="w-70 mr-4 transform hover:text-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 float-start" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                <span className="float-end">kezdőlap</span>
                            </div>
                        </li>
                        <li class="nav-item">
                            <div className="w-70 mr-4 transform hover:text-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 float-start" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                </svg>
                                <span className="float-end">kurzusok</span>
                            </div>
                            
                        </li>
                        <li class="nav-item">
                            <div className="w-70 mr-4 transform hover:text-purple-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 float-start" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <span className="float-end">órarend</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
