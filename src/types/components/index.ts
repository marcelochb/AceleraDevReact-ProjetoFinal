export type TypesButtonTheme = {
  toggleTheme: () => void;
  titleOfCurrentTheme: string;
};

export type TypeHeaderDrawer = {
  toggleDrawerVisible: () => void;
};

export type TypesHeader = TypesButtonTheme & TypeHeaderDrawer;

export type TypeDrawer = {
  isDrawerVisible: boolean;
} & TypeHeaderDrawer;
