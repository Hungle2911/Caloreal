import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
type StatsState = {
  calorieLimit: number;
  calorieRemain: number;
  calorieTotal: number;
  calorieConsumed: number;
  calorieBurned: number;
};
type ActionType =
  | { type: "ADD_CALORIE_ENTRY" }
  | { type: "REMOVE_CALORIE_ENTRY"; payload: number };
type StatsContextType = {
  state: StatsState;
  dispatch: Dispatch<ActionType>;
};
// Initial state
const initialState: StatsState = {
  calorieLimit: 2000,
  calorieRemain: 2000,
  calorieTotal: 0,
  calorieConsumed: 0,
  calorieBurned: 0,
};
const cartReducer = (state: StatsState, action: ActionType): StatsState => {
  switch (action.type) {
    case "ADD_CALORIE_ENTRY":
      return {
        ...state,
        calorieRemain: state.calorieRemain - 200,
        calorieConsumed: state.calorieConsumed + 200,
        calorieTotal: state.calorieTotal + 200,
      };
    case "REMOVE_CALORIE_ENTRY":
      return initialState;
    default:
      return state;
  }
};
const StatsContext = createContext<StatsContextType | undefined>(undefined);
const useStatsContext = (): StatsContextType => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error("useStatsContext must be used within a StatsProvider");
  }
  return context;
};
const StatsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <StatsContext.Provider value={{ state, dispatch }}>
      {children}
    </StatsContext.Provider>
  );
};

export { StatsProvider, useStatsContext };
