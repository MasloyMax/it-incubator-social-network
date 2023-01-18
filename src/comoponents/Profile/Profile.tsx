import React from "react";
import ProfileHeaderContent from "../../comoponents/Profile/ProfileHeaderContent";
import ProfileAvatarContent from "./ProfileAvatarContent/ProfileAvatarContent";
import MyPost from "./Posts/MyPost/MyPost";
import {AppDispatchType, AppStateType} from "../../Redux/redux-store";

type PropsType = {
    state: AppStateType
    dispatch: AppDispatchType
}

const Profile = (props:PropsType) => {
    return (
        <div>
            <ProfileHeaderContent/>
            <ProfileAvatarContent state={props.state.profileReduser.profilePage.propsProfile}/>
            <MyPost state={props.state.profileReduser.profilePage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;