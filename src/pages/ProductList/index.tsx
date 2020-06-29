import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { BackTop, Card, Col, Empty, Layout, Row, Spin } from 'antd';
import styled from 'styled-components';

import { AppContext } from 'context';
import { Product, SellerPublication } from 'interfaces';
import { SELLER_PUBLICATIONS } from 'api';
import { getPrice } from 'utils';

const { Meta } = Card;
const { Content } = Layout;

const StyledCard = styled(Card)`
  margin-top: 50px;
  max-height: 300px;
`;

const StyledImg = styled.img`
  height: 200px;
  object-fit: contain;
`;

const StyledSpin = styled(Spin)`
  left: 50%;
  position: absolute;
  top: 50%;
`;

const ProductList = () => {
  const { data, error, loading } = useQuery<SellerPublication>(SELLER_PUBLICATIONS);
  const { setProductItem } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    setProductItem(undefined);
  }, [setProductItem]);

  if (loading) return <StyledSpin />;
  if (!data?.getSellerPublications?.length || error) return <Empty />;

  return (
    <Layout>
      <Content>
        <Row justify="space-around">
          {data?.getSellerPublications.map((productItem: Product) => (
            <Col span={5}>
              <StyledCard
                bordered
                cover={<StyledImg alt={productItem?.product?.itemName} src={productItem?.product?.images[0]} />}
                hoverable
                loading={loading}
                onClick={() => {
                  setProductItem(productItem);
                  history.push('/product');
                }}
              >
                <Meta
                  description={getPrice(productItem.price)}
                  title={<span dangerouslySetInnerHTML={{ __html: productItem?.product?.itemName }} />}
                />
              </StyledCard>
            </Col>
          ))}
        </Row>
        <BackTop />
      </Content>
    </Layout>
  );
};

export default ProductList;
