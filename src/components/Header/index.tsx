import React, { useContext } from 'react';
import { PageHeader } from 'antd';
import styled from 'styled-components';

import { AppContext } from 'context';
import { useHistory } from 'react-router-dom';

const StyledHeader = styled(PageHeader)`
  background-color: #ff8692;
`;

const Header = () => {
  const { productItem } = useContext(AppContext);
  const history = useHistory();

  return (
    <StyledHeader
      onBack={() => history.goBack()}
      title={productItem ? <span dangerouslySetInnerHTML={{ __html: productItem.product.itemName }} /> : 'My Products'}
    />
  );
};

export default Header;
