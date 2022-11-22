import { useMediaQuery, useTheme } from "@mui/material";
import AppbarPC from "./AppbarPC";
import AppbarMobile from "./AppbarMobile";

const AppbarMain = ({}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarPC matches={matches} />
      )}
    </>
  );
};

export default AppbarMain;
