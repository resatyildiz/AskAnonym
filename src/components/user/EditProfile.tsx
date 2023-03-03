import React, { FC } from "react";
import Button from "../common/button/Button";

interface EditProfileProps {}

const EditProfile: FC<EditProfileProps> = ({}) => {
  return (
    <>
      <Button variant="outlined">Edit Profile</Button>
    </>
  );
};

export default EditProfile;
