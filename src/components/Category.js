import React from 'react'
import { ScrollView, TouchableOpacity, Text, View, Image } from 'react-native-web'
import { categoryStyles } from '../styles/category';


const items = [
    {
        image: require(`../../assets/meal.jpg`),
        title: 'Meal',
    },
    {
        image: require(`../../assets/salad.jpg`),
        title: 'Salad',
    },
    {
        image: require(`../../assets/burger.jpg`),
        title: 'Burger',
    },
    {
        image: require(`../../assets/dessert.jpg`),
        title: 'Dessert',
    },
    {
        image: require(`../../assets/drink.jpg`),
        title: 'Drink',
    },
];



export const Category = () => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={categoryStyles.wrapper}>
            {items.map((item, index) => (
            <View key={index}>
                <TouchableOpacity>
                    <Image source={item.image} style={categoryStyles.topImage} />
                    <Text style={categoryStyles.itemText}>{item.title}</Text>
                </TouchableOpacity>
            </View>
            ))}
        </ScrollView>
    );
};