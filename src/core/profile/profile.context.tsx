import React from "react";

interface UserContext {
  userName: string;
  setUserProfile: (user: string) => void;
}

const noUserLogin = "no user login";

const ProfileContext = React.createContext<UserContext>({
  userName: noUserLogin,
  setUserProfile: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [userProfile, setUserProfile] = React.useState<string>("");

  return (
    <ProfileContext.Provider value={{ userName: userProfile, setUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => React.useContext(ProfileContext);
