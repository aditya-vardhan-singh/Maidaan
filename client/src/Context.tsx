import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export interface PageContextInterface {
  Page: [
    {
      name: string;
    },
  ];
  setPage: Dispatch<SetStateAction<string>>;
}

const defaultState = {
  Page: [
    {
      name: '',
    },
  ],
  setPage: (page: string) => {},
} as PageContextInterface;

export const PagerContext = createContext(defaultState);

type PagerProviderProps = {
  children: ReactNode;
};

export default function PageProvider({ children }: PagerProviderProps) {
  const [Page, setPage] = useState<string>('');

  return <PagerContext.Provider value={{ Page, setPage }}>{children}</PagerContext.Provider>;
}
