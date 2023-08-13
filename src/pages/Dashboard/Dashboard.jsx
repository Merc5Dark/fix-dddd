import React from 'react';

import {
  styled
} from '@mui/material/styles';

import Input from 'src/components/Input/Input';

import ItemCard from 'src/components/ItemCard/ItemCard';

import BagItem from 'src/components/BagItem/BagItem';

import Button from 'src/components/Button/Button';

import Navbar from 'src/components/Navbar/Navbar';

const Dashboard1 = styled("div")({
  backgroundColor: `rgba(237, 237, 237, 1)`,
  borderRadius: `16px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1440px`,
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const ContentFrame = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `24px`,
  boxSizing: `border-box`,
  width: `953px`,
  left: `122px`,
  top: `0px`,
  overflow: `hidden`,
  height: `999px`,
});

const TopBar = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `8px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `99px`,
  width: `523px`,
});

const Input = styled(Input)({
  width: `507px`,
  margin: `0px`,
});

const ContentArea = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `8px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
  height: `842px`,
  width: `905px`,
});

const Row01 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  height: `397px`,
  width: `905px`,
});

const ItemCard = styled(ItemCard)({
  margin: `0px`,
});

const ItemCard1 = styled(ItemCard)({
  margin: `0px 0px 0px 16px`,
});

const ItemCard2 = styled(ItemCard)({
  margin: `0px 0px 0px 16px`,
});

const ItemCard3 = styled(ItemCard)({
  margin: `0px 0px 0px 16px`,
});

const Row02 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  height: `429px`,
  width: `905px`,
});

const ItemCard4 = styled(ItemCard)({
  margin: `0px`,
});

const ItemCard5 = styled(ItemCard)({
  margin: `0px 0px 0px 16px`,
});

const ItemCard6 = styled(ItemCard)({
  margin: `0px 0px 0px 16px`,
});

const ItemCard7 = styled(ItemCard)({
  margin: `0px 0px 0px 16px`,
});

const Line1 = styled("div")({
  border: `4px solid rgba(26, 31, 22, 0.5)`,
  width: `921.6px`,
  height: `0px`,
  position: `absolute`,
  left: `1556px`,
  top: `512px`,
});

const BagArea = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `72px 8px 8px 8px`,
  boxSizing: `border-box`,
  width: `345px`,
  height: `1024px`,
  left: `1095px`,
  top: `0px`,
  overflow: `hidden`,
});

const Title = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `8px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `63px`,
  width: `79px`,
});

const Bag = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(26, 31, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Cabin`,
  fontWeight: `500`,
  fontSize: `39.060001373291016px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const BagItems = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `8px`,
  boxSizing: `border-box`,
  margin: `10px 0px 0px 0px`,
  height: `192px`,
  width: `288px`,
});

const Row = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  height: `80px`,
  width: `272px`,
});

const BagItem = styled(BagItem)({
  margin: `0px`,
});

const BagItem1 = styled(BagItem)({
  margin: `0px 0px 0px 16px`,
});

const BagItem2 = styled(BagItem)({
  margin: `0px 0px 0px 16px`,
});

const Row1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
  height: `80px`,
  width: `272px`,
});

const BagItem3 = styled(BagItem)({
  margin: `0px`,
});

const Cta = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `10px 0px 0px 0px`,
  height: `72px`,
  width: `329px`,
});

const Button = styled(Button)({
  margin: `0px`,
});

const Navbar = styled(Navbar)({
  height: `992px`,
  position: `absolute`,
  left: `16px`,
  top: `16px`,
});


function Dashboard() {
  return (
    <Dashboard1>
      <ContentFrame>
        <TopBar>
          <Input/>
        </TopBar>
        <ContentArea>
          <Row01>
            <ItemCard/>
            <ItemCard1/>
            <ItemCard2/>
            <ItemCard3/>
          </Row01>
          <Row02>
            <ItemCard4/>
            <ItemCard5/>
            <ItemCard6/>
            <ItemCard7/>
          </Row02>
        </ContentArea>
      </ContentFrame>
      <Line1>
      </Line1>
      <BagArea>
        <Title>
          <Bag>
            {`Bag`}
          </Bag>
        </Title>
        <BagItems>
          <Row>
            <BagItem/>
            <BagItem1/>
            <BagItem2/>
          </Row>
          <Row1>
            <BagItem3/>
          </Row1>
        </BagItems>
        <Cta>
          <Button/>
        </Cta>
      </BagArea>
      <Navbar/>
    </Dashboard1>);

  }

export default Dashboard;

  