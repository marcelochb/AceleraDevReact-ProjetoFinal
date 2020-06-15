type PropertsOfInitialTheme = {
  variableNameOfCss: string;
  variableValueOfCss: string;
};

export type PropertsOfUsePersistedTheme = {
  keyOfLocalStorageToTheme: string;
  initialTypeOfTheme: string;
};

interface ParammetersOfOpenDrawer {
  typeOfDrawer: string;
}
export type PropertsOfOpenDrawer = (
  parameters: ParammetersOfOpenDrawer
) => void;
