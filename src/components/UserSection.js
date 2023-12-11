import React from 'react'
import { TextInput, View, Image, Text } from 'react-native'
import { userStyles } from '../styles/user'
import DownArrow from 'react-native-vector-icons/Feather'
import UserIcon from 'react-native-vector-icons/Feather'
import SearchIcon from 'react-native-vector-icons/FontAwesome'
import { Icon } from 'react-native-vector-icons/Feather';

export const UserSection = () => {
    return (
        <View style={userStyles.topWrapper}>
            <View style={userStyles.top}>
                <View>
                    <Image source={require('../../assets/profile.png')}
                    style={userStyles.profilePic}
                    />
                </View>

                <View style={userStyles.rightSide}>
                    <Text style={userStyles.text1}>Deliver Now</Text>
                    <Text style={userStyles.text2}>
                        Current Location
                        <DownArrow name="chevron-down" style={userStyles.down} />
                    </Text>
                </View>
                <UserIcon name="user" style={userStyles.user}/>
            </View>

            <View style={userStyles.inputSection}>
                <View style={userStyles.inputBox}>
                    <SearchIcon name="search" />
                    <TextInput
                    placeholder='Pick Restaurant'
                    keyboardType='default'
                    style={userStyles.input}
                    />
                </View>
            </View>
        </View>
    );
}