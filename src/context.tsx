import contents from 'contents';
import { createContext, useContext, useReducer } from 'react';

interface State {
  page: number,
};

const reducer = (state: State, action: {type: string}): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { page: state.page + 1 };
    case 'DECREMENT':
      return { page: state.page - 1 };
    default:
      return state;
  }
};

interface ContextType {
  page: number,
  maxPage: number,
  increment: () => void,
  decrement: () => void,
};

const Context = createContext<ContextType | undefined>(undefined);

export const ContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { page: 1 });

  const context: ContextType = {
    page: state.page,
    maxPage: contents.length,
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };

  return (
    <Context.Provider value={context}>
      {props.children}
    </Context.Provider>
  );
};

// custom hook
export const useContexts = (): ContextType => {
  const context = useContext(Context);
  if (context === undefined) throw new Error();
  return context;
};