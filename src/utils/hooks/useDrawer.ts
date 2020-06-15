import { useState } from "react";

export const useDrawer = () => {
  const [drawerIsVisible, setDrawerIsVisible] = useState(false);

  const toggleDrawerVisible = () => setDrawerIsVisible(!drawerIsVisible);
  return { drawerIsVisible, toggleDrawerVisible };
};
