import './UserPage';
import './UserPage.css';
import React from "react";
import Header from "header";



function UserPage() {
    var user = JSON.parse(localStorage.getItem('user'))
    return (
        <div className="row">
        <div className="col-md-9">
          <div className="card bg-light">
            <div className="card-body">
                  <h1 className="card-title" title="user-page"><span id="greeting">Welcome, {user.firstname1}!</span></h1>
                  <hr></hr>
                  <Header headers={UserPage} />
                  <ul className="list">
        <li className="Posts">
          <Link
            className="link"
            to={`/@${this.props.UserPage.username}`}>
            My Posts
          </Link>
        </li>
        <li className="Interest">
          <Link
            className="link"
            to={`/@${this.props.UserPage.username}/interest`}>
            Interest
          </Link>
                         </li>
                     </ul>
                </div>
            </div>
        </div>
    </div>




    );
}; 

export default UserPage;
