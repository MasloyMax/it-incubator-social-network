import React from "react";
import ProfileHeaderContent from "../../comoponents/Profile/ProfileHeaderContent";
import ProfileAvatarContent from "./ProfileAvatarContent/ProfileAvatarContent";
import MyPost from "./Posts/MyPost/MyPost";
import {AppDispatchType, AppStateType, AppstoreType} from "../../Redux/redux-store";

type PropsType = {
    store: AppstoreType
}

const Profile = (props:PropsType) => {
    return (
        <div>
            <ProfileHeaderContent/>
            <ProfileAvatarContent state={props.store.getState().profileReduser.profilePage.propsProfile}/>
            <MyPost store={props.store}
                   />
        </div>
    )
}

export default Profile;