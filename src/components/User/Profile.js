import React, { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import { getStates } from "./../../services/States.service";
import { connect, useDispatch } from "react-redux";
import { updateProfile } from "./../../services/User.service";

const Profile = ({ profile }) => {
  const [states, setStates] = useState([]);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    getStates().then((response) => setStates(response.data));
  }, []);

  useEffect(() => {
    setUserId(profile.id);
    setPassword(profile.repassword);
  }, [profile]);

  const handleSubmit = (userProfile) => {
    console.log("sbmit update");
    updateProfile(userProfile, userId, password).then((response) => {
      if (response && response.data) {
        console.log("user updated");
      }
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col w-100 page-wrapper">
          <h3 className="login-form__title title-page">Editar perfil</h3>
          <ProfileForm
            states={states}
            profile={profile}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.userLogged.profile,
});

export default connect(mapStateToProps)(React.memo(Profile));
