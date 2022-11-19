import StyleProfileAvatarContent from "../../CssComponents/ProfileCss/ProfileAvatarContent.module.css";
import React from "react";

const ProfileAvatarContent = () =>{
    return(
        <div>
            <div className={StyleProfileAvatarContent.container}>
                <img className={StyleProfileAvatarContent.img}
                     src="data:image/jpeg;base64,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"
                     alt=""/>
                <div className={StyleProfileAvatarContent.info_profile}>
                    <div className={StyleProfileAvatarContent.h2_title}>
                        <h2>my name</h2>
                    </div>
                    <div>
                        <p>Date</p>
                        <p>City</p>
                        <p>Education</p>
                        <p>Web site</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileAvatarContent;