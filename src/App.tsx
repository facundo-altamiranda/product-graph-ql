import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { apolloClient } from 'api';
import { ProductList, ProductItem } from 'pages';
import { AppContext } from 'context';
import { Product } from 'interfaces';
import { Header } from 'components';

const App: FunctionComponent = () => {
  const [productItem, setProductItem] = useState<Product | undefined>();

  return (
    <ApolloProvider client={apolloClient}>
      <AppContext.Provider value={{ productItem, setProductItem }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/product">
              <ProductItem />
            </Route>
            <Route path="/">
              <ProductList />
            </Route>
          </Switch>
        </Router>
      </AppContext.Provider>
    </ApolloProvider>
  );
};

export default App;
