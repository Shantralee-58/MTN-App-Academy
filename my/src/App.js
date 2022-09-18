import React, { Component } from 'react';
import { View, Pressable, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';

const Login = ({ navigation }) => {
    return ( <
        SafeAreaView style = { styles.screenContainer } >
        <
        Text style = { styles.baseText } >
        Login <
        /Text> <
        TextInput style = { styles.input }
        placeholder = "Username" /
        >
        <
        TextInput style = { styles.input }
        placeholder = "Password" /
        >
        <
        Pressable style = { styles.buttonStyle }
        onPress = {
            () => navigation.navigate('Dashboard')
        } >
        <
        Text style = { styles.buttonTextStyle } > Login < /Text> < /
        Pressable >

        <
        Pressable style = { styles.outlinebuttonStyle }
        onPress = {
            () => navigation.navigate('SignUp')
        } >
        <
        Text style = { styles.outlinebuttonTextStyle } > Sign Up < /Text> < /
        Pressable > <
        /SafeAreaView>

    );
};

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: '70%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    baseText: {
        fontSize: 40,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    screenContainer: {
        paddingTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff8dc',
    },
    outlinebuttonStyle: {
        height: 54,
        width: '70%',
        marginTop: 32,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff8dc',
        borderColor: '#f4a460',
        borderWidth: 2,
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    outlinebuttonTextStyle: {
        color: '#f4a460',
        fontWeight: '700',
    },
    buttonStyle: {
        height: 54,
        width: '70%',
        marginTop: 32,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4a460',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#fffafa',
        fontWeight: '700',
    },
});

export default Login;
import React, { Component } from 'react';
import { Pressable, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';

const Picture = ({ navigation }) => {
    return ( <
        SafeAreaView style = { styles.screenContainer } >
        <
        Text style = { styles.baseText } >
        Picture View <
        /Text>

        <
        Pressable style = { styles.buttonStyle }
        onPress = {
            () => navigation.navigate('#')
        } >
        <
        Text style = { styles.buttonTextStyle } > Take Picture < /Text> < /
        Pressable > <
        /SafeAreaView>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontSize: 40,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    screenContainer: {
        paddingTop: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3cb371',
    },
    buttonStyle: {
        height: 54,
        width: '70%',
        marginTop: 32,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff00',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#3cb371',
        fontWeight: '700',
    },
});

export default Picture;
import React, { Component } from 'react';
import { Pressable, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, View, Image } from 'react-native';

const Profile = ({ navigation }) => {
    return ( <
        SafeAreaView style = { styles.screenContainer } >
        <
        Text style = { styles.baseText } >
        Profile <
        /Text> <
        View >
        <
        Image source = { require("../assets/user.png") }
        style = {
            { width: 100, height: 100 }
        }
        /> < /
        View > <
        TextInput style = { styles.input }
        placeholder = "Lindiwe" /
        >
        <
        TextInput style = { styles.input }
        placeholder = "lindiwekhumalo833@gmail.com" /
        >
        <
        TextInput style = { styles.input }
        placeholder = "********" /
        >
        <
        TextInput style = { styles.input }
        placeholder = "********" /
        >
        <
        Pressable style = { styles.buttonStyle }
        onPress = {
            () => navigation.navigate('#')
        } >
        <
        Text style = { styles.buttonTextStyle } > Save < /Text> < /
        Pressable > <
        /SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    baseText: {
        fontSize: 40,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    screenContainer: {
        paddingTop: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3cb371',
    },
    buttonStyle: {
        height: 54,
        width: '70%',
        marginTop: 32,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff00',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#3cb371',
        fontWeight: '700',
    },
});

export default Profile;
import React, { Component } from 'react';
import { View, Pressable, Dimensions, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Button } from 'react-native';

const SignUp = ({ navigation }) => {
    return ( <
        SafeAreaView style = { styles.screenContainer } >
        <
        Text style = { styles.baseText } >
        SignUp <
        /Text> <
        TextInput style = { styles.input }
        placeholder = "Username" /
        >
        <
        TextInput style = { styles.input }
        placeholder = "Email" /
        >
        <
        TextInput style = { styles.input }
        placeholder = "Password" /
        >
        <
        TextInput style = { styles.input }
        placeholder = "Confirm Password" /
        >
        <
        Pressable style = { styles.buttonStyle }
        onPress = {
            () => navigation.navigate('Dashboard')
        } >
        <
        Text style = { styles.buttonTextStyle } > Sign Up < /Text> < /
        Pressable >

        <
        Pressable style = { styles.outlinebuttonStyle }
        onPress = {
            () => navigation.navigate('Login')
        } >
        <
        Text style = { styles.outlinebuttonTextStyle } > Login < /Text> < /
        Pressable > <
        /SafeAreaView>

    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    baseText: {
        fontSize: 50,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    screenContainer: {
        paddingTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    outlinebuttonStyle: {
        height: 54,
        width: '75%',
        marginTop: 32,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#ff8c1a',
        borderWidth: 2,
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    outlinebuttonTextStyle: {
        color: '#ff8c1a',
        fontWeight: '700',
    },
    buttonStyle: {
        height: 54,
        width: '75%',
        marginTop: 32,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff8c1a',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(46, 229, 157, 0.5)',
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    buttonTextStyle: {
        color: '#fdfdfd',
        fontWeight: '700',
    },
});

export default SignUp;