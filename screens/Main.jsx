import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Main = (props) => {
    
    return (
        <View style={{backgroundColor:'red',margin:10}}>
            <Text>{props.pranvi.name}</Text>
            <Text>{props.pranvi.gender}</Text>
            <Text>{props.pranvi.age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Main;
