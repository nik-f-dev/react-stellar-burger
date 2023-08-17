import { TTabActions, UPDATE_TAB } from "../actions/tab";

type TTabState = {
  currentTab: string;
};

const tabInitialState: TTabState = {
  currentTab: "bun",
};

export const tabReducer = (
  state = tabInitialState,
  action: TTabActions
): TTabState => {
  switch (action.type) {
    case UPDATE_TAB: {
      return {
        currentTab: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
