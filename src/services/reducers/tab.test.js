import { tabReducer, tabInitialState } from './tab';
import { UPDATE_TAB } from '../actions/tab';

describe('tab reducer', () => {
  it('should return the initial state', () => {
    expect(tabReducer(undefined, {})).toEqual(tabInitialState);
  });

  it('should handle UPDATE_TAB', () => {
    expect(tabReducer(
      tabInitialState,
      {
        type: UPDATE_TAB,
        payload: "souce"
      }
    )).toEqual(
      {
        ...tabInitialState,
        currentTab: "souce"
      }
    );
  });
});
