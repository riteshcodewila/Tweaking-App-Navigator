import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Profile Screen</Text>
            <Button title="Back To Home" onPress={() => navigation.navigate("Home")} />
        </View>
    ); 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 16,
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default Profile;