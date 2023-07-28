import { UPDATE_TAB } from "../actions/tab";

const tabInitialState = {
  currentTab: 'bun',
}

export const tabReducer = (state = tabInitialState, action) => {
  switch(action.type) {
    case UPDATE_TAB: {
      return {
        currentTab: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
