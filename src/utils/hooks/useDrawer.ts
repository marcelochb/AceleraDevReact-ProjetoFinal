import { useState } from "react";
import { PropertsOfOpenDrawer } from "../../types/hooks";

export const useDrawer = () => {
  const [drawerIsVisible, setDrawerIsVisible] = useState(false);
  const [typeOfDrawerOpened, setTypeOfDrawerOpened] = useState("");

  const openDrawer: PropertsOfOpenDrawer = ({ typeOfDrawer }) => {
    setTypeOfDrawerOpened(typeOfDrawer);
    setDrawerIsVisible(!drawerIsVisible);
  };
  const closeDrawer = () => setDrawerIsVisible(false);
  return {
    getUseDrawer: {
      drawerIsVisible,
      typeOfDrawerOpened,
    },
    handleUseDrawer: {
      openDrawer,
      closeDrawer,
    },
  };
};
