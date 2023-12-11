import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-web'
import { promoStyles } from '../styles/promo'


const promoItems = [
    {
        Image: require(`../../assets/steak.jpg`),
        copy: 'Snack time\nmade better',
        discount: '~20~',
        backgroundColor: 'black',
    },
    {
        Image: require(`../../assets/icecream.jpg`),
        copy: 'Snack time\nmade better',
        discount: '~20~',
        backgroundColor: '#396858',
    },
]

export const Promo = ({description}) => {
    return (
        <View>
            <Text style={promoStyles.promoTitle}>Promo</Text>
            <Text style={promoStyles.promoDesc}>{description}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {promoItems.map((promoItems, index) => (
                    <View style={[promoStyles.promoWrapper, 
                    {backgroundColor:promoItems.backgroundColor},
                    ]}>
                        <View key={index}>
                            <Text style={promoStyles.promoText}>{promoItems.copy}</Text>
                            <Text style={promoStyles.promoText2}>{promoItems.discount}</Text>
                        </View>
                        <Image source={promoItems.Image} style={promoStyles.promoPic}/>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}