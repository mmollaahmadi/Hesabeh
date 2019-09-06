import React from 'react';

class Profile extends React.Component {
  render(){
    return(
      <div className="d-flex justify-content-center align-items-center">
      <span className="nav-link-inner--text ml-2 ">Mollaahmadi</span>
      <img
            alt="..."
            className="rounded-circle img-center img-fluid shadow shadow-lg--hover m-0"
            src={require("../../assets/img/theme/team-3-800x800.jpg")}
            style={{ width: "40px" }}
          />

        </div>
    );
  }
}

export default Profile;
