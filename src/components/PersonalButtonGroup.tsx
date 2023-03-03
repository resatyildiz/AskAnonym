"use client";

import { FC, useState } from "react";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { Database } from "@/supabase/database";
import EditProfile from "./user/EditProfile";
import CreateTopic from "./CreateTopic";

interface PersonalButtonGroupProps {
  username: string;
}

const PersonalButtonGroup: FC<PersonalButtonGroupProps> = ({ username }) => {
  const supabase = useSupabaseClient<Database>();
  const user = useUser();
  const isOwnerUser = user && user.user_metadata.username === username;

  return (
    <>
      {isOwnerUser && (
        <span className="flex gap-3 items-center">
          <EditProfile />
          <CreateTopic supabase={supabase} />
        </span>
      )}
    </>
  );
};

export default PersonalButtonGroup;
