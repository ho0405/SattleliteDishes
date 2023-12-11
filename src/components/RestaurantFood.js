import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { restaurantStyles } from "../styles/restaurant";
import Dot from 'react-native-vector-icons/Entypo';
import LocationPin from 'react-native-vector-icons/Entypo';

const restaurants = [
    {
        image_url: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Pizza Kings',
        rating: 5,
        genre: 'Pizza',
        price: '$12',
        address: 'Parklands',
        description: 'Savor thr classic flavors of pepperoni, mushroom, sausage, olives'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Seafood Delight',
        rating: 4.5,
        genre: 'Seafood',
        price: '$22',
        address: 'Ocean Drive',
        description: 'Indulge in a delightful mix of fresh seafood toppings on a crispy crust'
      },
    {
        image_url: 'https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?w=996&t=st=1702230298~exp=1702230898~hmac=ab3b6a4b2fb71484bf9bcf0be037f2f7d6b35149e0d844be0cd87ecf64950d14',
        title: 'Chicken Choma',
        rating: 5,
        genre: 'Grilled Chicken',
        price: '$14',
        address: 'Mombasa Rd',
        description: 'Grilled chicken sizzles, releasing tantalizing aromas.'
    },
    {
        image_url: 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Sweet Temptations',
        rating: 4.3,
        genre: 'Dessert',
        price: '$8',
        address: 'Sugar Lane',
        description: 'Indulge your sweet tooth with our delightful assortment of desserts'
    },
]


const RestaurantFood = () => {
    return (
        <View style= {restaurantStyles.container}>
            {restaurants.map((restaurant, index) => (
                <TouchableOpacity key={index} style={restaurantStyles.rCard}>
                    <View style={restaurantStyles.cardWrapper}>
                        <Image
                        source={{uri: restaurant.image_url}}
                        style={restaurantStyles.dishPic}
                        />
                        <View style={restaurantStyles.textArea}>
                            <View>
                                <Text style={restaurantStyles.brand}>{restaurant.title}</Text>
                            </View>

                            <View style={restaurantStyles.rate}>
                            <Text style={restaurantStyles.genre}>
                            <Text>{restaurant.rating}</Text>
                            <Dot name='dot-single'/>
                            {restaurant.genre}
                            </Text>
                            <Text style={restaurantStyles.price}>
                                {restaurant.price}
                            </Text>
                            <View style={restaurantStyles.location}>
                                <LocationPin name='location-pin' style={restaurantStyles.pin}/>
                                <Text style={restaurantStyles.leftText}>
                                    Nearby
                                    <Dot name="dot-single"/>
                                    {restaurant.address}
                                </Text>
                            </View>
                            </View>

                        </View>
                    </View>
                </TouchableOpacity>

            ))}
       </View>
    );
};

export default RestaurantFood;