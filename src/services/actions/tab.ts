export const UPDATE_TAB: "UPDATE_TAB" = "UPDATE_TAB";

export type TGetTab = {
  readonly type: typeof UPDATE_TAB;
  readonly payload: string;
};

export const getTab = (tab: string) => {
  return {
    type: UPDATE_TAB,
    payload: tab,
  };
};

export type TTabActions = TGetTab;
