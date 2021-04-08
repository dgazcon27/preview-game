import React, { useReducer } from "react";

export const GameContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POINTS": {
      return {
        ...state,
        points: state.points + action.value,
      };
    }

    default:
      return state;
  }
};

const initialState = {
  points: 0,
};

export const GameContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};
