import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { UserSection } from '../components/UserSection';
import { Category } from '../components/Category';
import { Featured } from '../components/Featured';
import { Promo } from '../components/Promo';

export const Home = () => {
    return (
        <SafeAreaView>
            <UserSection/>
            <Category/>
            <Featured
            title="Featured"
            description="Enjoy these crazy, juicy and tasty dishes"
            />
            <Promo/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
