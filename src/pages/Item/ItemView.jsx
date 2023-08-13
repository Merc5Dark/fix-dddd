import React from 'react';

import {
  styled
} from '@mui/material/styles';

import NavLink from 'src/components/NavLink/NavLink';

import ProductImage from 'src/components/ProductImage/ProductImage';

import Icon from 'src/components/Icon/Icon';

import Button from 'src/components/Button/Button';

import BagItem from 'src/components/BagItem/BagItem';

import Navbar from 'src/components/Navbar/Navbar';

const ItemView1 = styled("div")({
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
  padding: `0px`,
  boxSizing: `border-box`,
  width: `953px`,
  height: `1024px`,
  left: `122px`,
  top: `0px`,
  overflow: `hidden`,
});

const ContentArea = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `48px 24px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
  height: `1024px`,
  width: `953px`,
});

const NavLink = styled(NavLink)({
  margin: `0px`,
});

const TopArea = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `905px`,
  margin: `16px 0px 0px 0px`,
  height: `424px`,
});

const ImageArea = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `8px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `334px`,
  width: `339.66px`,
});

const ImageGallery = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `206px`,
  width: `49.66px`,
});

const Image01 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `13px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `8px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
  height: `58px`,
  width: `49.66px`,
});

const ProductImage = styled(ProductImage)({
  height: `42px`,
  width: `33.66px`,
  margin: `0px`,
});

const Image02 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `13px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `8px`,
  boxSizing: `border-box`,
  margin: `16px 0px 0px 0px`,
  overflow: `hidden`,
  height: `58px`,
  width: `49.66px`,
});

const ProductImage1 = styled(ProductImage)({
  height: `42px`,
  width: `33.66px`,
  margin: `0px`,
});

const Image03 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `13px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `8px`,
  boxSizing: `border-box`,
  margin: `16px 0px 0px 0px`,
  overflow: `hidden`,
  height: `58px`,
  width: `49.66px`,
});

const ProductImage2 = styled(ProductImage)({
  height: `42px`,
  width: `33.66px`,
  margin: `0px`,
});

const MainImage = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `13px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `8px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 16px`,
  overflow: `hidden`,
  height: `318px`,
  width: `258px`,
});

const ProductImage3 = styled(ProductImage)({
  width: `242px`,
  height: `302px`,
  margin: `0px`,
});

const TextContent = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `8px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 24px`,
  height: `424px`,
  width: `541.34px`,
});

const Header = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `8px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `136px`,
  width: `354px`,
});

const AppleWatch = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(26, 31, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Cabin`,
  fontWeight: `700`,
  fontSize: `61.040000915527344px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const Series5Se = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(26, 31, 22, 0.5)`,
  fontStyle: `normal`,
  fontFamily: `Cabin`,
  fontWeight: `500`,
  fontSize: `31.25px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `8px 0px 0px 0px`,
});

const Special = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px 8px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `56px`,
  width: `243px`,
});

const Rating = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px 16px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `24px`,
  width: `168px`,
});

const Star01 = styled(Icon)({
  width: `24px`,
  height: `24px`,
  margin: `0px`,
});

const Star02 = styled(Icon)({
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 8px`,
});

const Star03 = styled(Icon)({
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 8px`,
});

const Star04 = styled(Icon)({
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 8px`,
});

const Star05 = styled(Icon)({
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 8px`,
});

const Q455 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(18, 128, 93, 1)`,
  fontStyle: `normal`,
  fontFamily: `Cabin`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `-0.4px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
});

const Q52999 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(26, 31, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Cabin`,
  fontWeight: `500`,
  fontSize: `31.25px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const ShortDescription = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `8px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `122px`,
  margin: `0px`,
  width: `525.34px`,
});

const LoremIpsumDolorSitAm = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(26, 31, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Cabin`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Cta = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-end`,
  padding: `8px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  height: `56px`,
  width: `525.34px`,
});

const Button = styled(Button)({
  margin: `0px`,
});

const BottomArea = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `8px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
  height: `493px`,
  width: `905px`,
});

const Line2 = styled("div")({
  border: `3px solid rgba(26, 31, 22, 0.5)`,
  height: `0px`,
  width: `858px`,
  margin: `0px`,
});

const Description = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `16px 8px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `16px 0px 0px 0px`,
  height: `461px`,
  width: `889px`,
});

const Description1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(26, 31, 22, 1)`,
  fontStyle: `normal`,
  fontFamily: `Cabin`,
  fontWeight: `500`,
  fontSize: `31.25px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const LoremIpsumDolorSitAm1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(96, 105, 92, 1)`,
  fontStyle: `normal`,
  fontFamily: `Cabin`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `-0.4px`,
  textDecoration: `none`,
  textTransform: `none`,
  alignSelf: `stretch`,
  height: `383px`,
  margin: `8px 0px 0px 0px`,
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

const Cta1 = styled("div")({
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

const Button1 = styled(Button)({
  margin: `0px`,
});

const Navbar = styled(Navbar)({
  height: `992px`,
  position: `absolute`,
  left: `16px`,
  top: `16px`,
});


function ItemView() {
  return (
    <ItemView1>
      <ContentFrame>
        <ContentArea>
          <NavLink/>
          <TopArea>
            <ImageArea>
              <ImageGallery>
                <Image01>
                  <ProductImage/>
                </Image01>
                <Image02>
                  <ProductImage1/>
                </Image02>
                <Image03>
                  <ProductImage2/>
                </Image03>
              </ImageGallery>
              <MainImage>
                <ProductImage3/>
              </MainImage>
            </ImageArea>
            <TextContent>
              <Header>
                <AppleWatch>
                  {`Apple Watch`}
                </AppleWatch>
                <Series5Se>
                  {`Series 5 SE`}
                </Series5Se>
              </Header>
              <Special>
                <Rating>
                  <Star01/>
                  <Star02/>
                  <Star03/>
                  <Star04/>
                  <Star05/>
                </Rating>
                <Q455>
                  {`4.5 / 5`}
                </Q455>
              </Special>
              <Q52999>
                {`$ 529.99`}
              </Q52999>
              <ShortDescription>
                <LoremIpsumDolorSitAm>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. Proin in quis ipsum non amet imperdiet. Dignissim nisi leo a at. Sit nec lacus, nunc volutpat, tincidunt lorem mi duis. Vitae elementum libero.`}
                </LoremIpsumDolorSitAm>
              </ShortDescription>
              <Cta>
                <Button/>
              </Cta>
            </TextContent>
          </TopArea>
          <BottomArea>
            <Line2>
            </Line2>
            <Description>
              <Description1>
                {`Description`}
              </Description1>
              <LoremIpsumDolorSitAm1>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim odio faucibus nec malesuada purus volutpat vel sed viverra. Id sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus pellentesque sagittis. Felis rhoncus facilisis massa eget purus in purus. Etiam at cras nulla nunc. Malesuada in pretium diam scelerisque sit mattis in egestas neque. Eu porta tempor sodales nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim velit tempor diam quisque suspendisse.
Orci vel ridiculus diam viverra. Libero malesuada orci, quis placerat suscipit augue imperdiet. Et praesent augue dictum mauris eget lacus malesuada. Aenean nisi, sodales natoque massa magna dignissim mi. Mattis tellus, justo, lorem sed tempor diam sit viverra enim. Id id placerat eu etiam nulla laoreet.
Dignissim leo fames turpis quis suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu dui porttitor. Cras a aliquam phasellus sollicitudin ornare. Tristique volutpat facilisis in ut proin. Est vitae facilisi sollicitudin id lorem mattis nibh ipsum, nec. Consectetur consectetur morbi morbi aliquet mi risus, velit, sit at. Integer morbi viverra hendrerit risus.
Odio phasellus nibh senectus nec id enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi. Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit. In eget ut ac at facilisi leo viverra. Arcu ac ut fermentum, viverra et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi ut feugiat varius risus eros.
`}
              </LoremIpsumDolorSitAm1>
            </Description>
          </BottomArea>
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
        <Cta1>
          <Button1/>
        </Cta1>
      </BagArea>
      <Navbar/>
    </ItemView1>);

  }

export default ItemView;

  