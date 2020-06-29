import { createContext, Dispatch, SetStateAction } from 'react';

import { Product } from 'interfaces';

interface AppContextInterface {
  setProductItem: Dispatch<SetStateAction<Product | undefined>>;
  productItem: Product | undefined;
}

const AppContext = createContext<AppContextInterface>({
  setProductItem: (): SetStateAction<Product | undefined> => undefined,
  productItem: undefined,
});

export default AppContext;
