// @ts-check

// BEGIN (write your solution here)
export const updateText = (text) => ({
    type: 'UPDATE_TEXT',
    payload: {
      text,
    },
  });
  
  export const resetText = () => ({
    type: 'RESET_TEXT',
    payload: {
    },
  });
  // END
  