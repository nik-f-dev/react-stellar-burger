export const UPDATE_TAB = 'UPDATE_TAB';

export const getTab = (tab) => {
  return {
    type: UPDATE_TAB,
    payload: tab
  }
}
