import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Carousel, Col, Divider, Row, Typography } from 'antd';
import styled from 'styled-components';

import { AppContext } from 'context';
import { getPrice } from 'utils';

const { Title, Paragraph, Text } = Typography;

const StyledCarousel = styled(Carousel)`
  width: 250px;
`;

const StyledCol = styled(Col)`
  -moz-box-shadow: 5px 5px 10px 0px rgba(30, 30, 93, 1);
  -webkit-box-shadow: 5px 5px 10px 0px rgba(30, 30, 93, 1);
  background-color: white;
  border-radius: 50px;
  box-shadow: 5px 5px 10px 0px rgba(30, 30, 93, 1);
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 50px;
`;

const StyledDetails = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 20px;
`;

const StyledRow = styled(Row)`
  min-height: 80%;
`;

const ProductList = () => {
  const { productItem } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!productItem) {
      history.push('/');
    }
  }, []);

  return (
    <>
      <StyledRow align={'middle'} justify={'center'}>
        <StyledCol span={12}>
          <StyledCarousel autoplay fade>
            {productItem?.product?.images.map((image) => (
              <img alt={productItem?.product?.itemName} height={300} src={image} />
            ))}
          </StyledCarousel>
          <StyledDetails>
            <Title level={3}>
              <span dangerouslySetInnerHTML={{ __html: productItem?.product?.itemName || '' }} />
            </Title>
            <Divider />
            <Paragraph>
              <Text strong>{'Price: '}</Text>
              <Text>{getPrice(productItem?.price)}</Text>
            </Paragraph>
            <Paragraph>
              <Text strong>{'Stock: '}</Text>
              <Text>{productItem?.stock}</Text>
            </Paragraph>
          </StyledDetails>
        </StyledCol>
      </StyledRow>
    </>
  );
};

export default ProductList;
