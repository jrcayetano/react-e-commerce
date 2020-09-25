import React, { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import { getStates } from "./../../services/States.service";
import { connect, useDispatch } from "react-redux";
import { updateProfile } from "./../../services/User.service";
import { SetUsername } from "./../../state/actions/UserLoggedActions";
import { setToast, showToast } from "./../../state/actions/AppActions";
import { generateToast } from "./../../services/Toast.service";

const Profile = ({ profile }) => {
  const dispatch = useDispatch();
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
    updateProfile(userProfile, userId, password)
      .then((response) => {
        if (response && response.data) {
          toast("Usuario actualizado correctamente");
          dispatch(SetUsername(response.data.username));
        }
      })
      .catch((error) => toast(error.response.data, true));
  };

  const toast = (message, isError = false) => {
    const toast = generateToast(message, isError);
    dispatch(setToast(toast));
    dispatch(showToast(true));
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
