import { View, Text } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, FONTS, SIZES} from '../constants';

const DetailsDesc = ({data}) => {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [ReadMore, setIsReadMore] = useState(false);
  return (
    <>
        <View style={{width: "100%", flexDirection: "row",
                      justifyContent: "space-between", alignItems: "center"}}>
            <NFTTitle
                title={data.name}
                subTitle={data.creator}
                titleSize={SIZES.extraLarge}
                subTitleSize={SIZES.font}
                />
            <EthPrice price={data.price} />
        </View>
        <View style={{marginVertical: SIZES.extraLarge * 1.5}}>
            <Text style={{
                fontSize: SIZES.font,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary
                }}>
            Description
            </Text>
            <View style={{marginTop: SIZES.base}}>
                <Text style={{
                    fontSize: SIZES.small,
                    fontFamily: FONTS.regular,
                    color: COLORS.secondary,
                    lineHeight: SIZES.large}}>
                {text}
                {!ReadMore && '...'}
                <Text style={{fontSize: SIZES.small,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                }} onPress={() => {
                    if(!ReadMore){
                        setText(data.description);
                        setIsReadMore(true);
                    } else {
                        setText(data.description.slice(0, 100));
                        setIsReadMore(false);
                    }
                }}>
                    {ReadMore ? 'Show Less' : 'Read More'}
                </Text>
            </Text>
            </View>
        </View>
    </>
  )
}

export default DetailsDesc