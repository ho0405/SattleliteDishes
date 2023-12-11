import { StyleSheet } from "react-native";

export const promoStyles = StyleSheet.create({
    promoWrapper: {
        height: 80,
        width: 160,
        marginLeft: 10,
        marginRight: 20,
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
    },
    promoTitle: {
        fontSize: 16,
        fontWeight: '500', // Corrected fontWeight to '500'
        marginTop: 20,
        marginHorizontal: 10,
    },
    promoDesc: {
        marginHorizontal: 10,
        color: '#808080',
    },
    promoText: {
        color: '#fff', // Corrected color value
    },
    promoText2: {
        color: '#f07e4e',
        fontWeight: 'bold', // Corrected fontWeight to 'bold'
        paddingTop: 5,
        fontSize: 15,
    },
    promoPic: {
        position: 'absolute',
        height: 95,
        width: 95,
        right: -30,
        bottom: -12,
    },
});
