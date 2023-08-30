import { tabReducer } from './tab';
import { UPDATE_TAB } from '../actions/tab';

describe('tab reducer', () => {
  it('should return the initial state', () => {
    expect(tabReducer(undefined, {})).toEqual({
      currentTab: "bun"
    });
  });

  it('should handle UPDATE_TAB', () => {
    expect(tabReducer(
      {
        currentTab: "bun"
      },
      {
        type: UPDATE_TAB,
        payload: "souce"
      }
    )).toEqual(
      {
        currentTab: "souce"
      }
    );
  });
});
