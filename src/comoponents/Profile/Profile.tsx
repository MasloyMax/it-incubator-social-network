import React from "react";
import ProfileHeaderContent from "../../comoponents/Profile/ProfileHeaderContent";
import ProfileAvatarContent from "./ProfileAvatarContent/ProfileAvatarContent";
import MyPost from "./Posts/MyPost/MyPost";

const Profile = (props:any) => {
    console.log(props)
    return (
        <div>
            <ProfileHeaderContent/>
            <ProfileAvatarContent state={props.state.profilePage.propsProfile}/>
            <MyPost state={props.state.profilePage} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;