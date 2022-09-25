import React, { useState } from 'react';
import { NavigationContainer, StackActions,  } from '@react-navigation/native';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, options }} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={options.container} />
        <Stack.Screen name="Password Reset" component={PasswordResetScreen} options={{ headerShown: false, options }} /> 
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={options.container} />
        
        </Stack.Navigator>
    </NavigationContainer>
  );
}
  

function LoginScreen({ navigation }) {
  return (<View style={styles.container}>
    <Text style={{ color: "#fff", fontSize: 30, fontWeight: 'bold', }}>Login</Text>
    <Text style={{ Maxheight:90, height:70 }}></Text>
    <Image source={TaxBro_pink} style={{ width: 300, height: 300 }} />
    <Text style={{ color: "#fff", fontSize: 15,  }}>Email Address</Text>
    <TextInput style={{ width: 300, backgroundColor: "#fff", color: 'black', height: 40 }}
      editable
      maxLength={ 50 }
      minLength={ 10 } 
      />
    <Text></Text>
    <Text style={{ color: "#fff", fontSize: 15 }}>Password</Text>
    <TextInput style={{ width: 300, backgroundColor: "#fff", color: 'black', height: 40 }}
      editable
      maxLength={ 50 } 
      secureTextEntry={true}
      onChangeText=""
      />
    <Text></Text>
    <Button title='Sign In' onPress={ () => { navigation.navigate("Dashboard"); }}></Button>
    <Text></Text>
    <Text style={{ color: "#FFF", fontSize: 15, }}>Forgot your Password?</Text>
    <Text onPress={() => (navigation.navigate("Password Reset"))} 
    style={{ color: "#fff", fontSize: 15, color: '#00F' }}>Reset it here.</Text>
    <Text style={{ height: 50 }}></Text>
    <StatusBar style="auto" />
    <Text style={{ color: "#fff", fontSize: 15, position:"absolute", bottom:40 }}>Don't have an account? </Text>
    <Text onPress={() => navigation.navigate("Sign Up")}
           style={{ fontSize: 15, color: '#00F', position:"absolute", bottom:20 }} >Click here to Sign Up.</Text>
  </View>
  );
}

function SignUpScreen({ navigation }) {
  return(
    <View style={styles.container}>
    <Image source={" "} style={{ width: 200, height: 300}} />
    <Text style={{ color: "#fff", fontSize: 15, Maxheight: 40 }}>First Name</Text>
    <TextInput style={{ width: 300, backgroundColor: "#fff", color: 'black', height: 40 }}
      editable
      maxLength={ 50 }
      minLength={ 10 } 
      onChangeText=""
      />
      <Text></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 30.50 }}>Last Name</Text>
      <TextInput style={{ width: 200, backgroundColor: "#fff", color: 'black', height: 30 }}
      editable
      maxLength={ 40 }
      minLength={ 5 } 
      onChangeText=""
      />
      <Text></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 40 }}>Email Address</Text>
      <TextInput style={{ width: 300, backgroundColor: "#fff", color: 'black', height: 40 }}
      editable
      maxLength={ 50 }
      minLength={ 10 } 
      onChangeText=""
      />
      <Text></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 40 }}>Password</Text>
      <TextInput style={{ width: 300, backgroundColor: "#fff", color: 'black', height: 40,  }}
      editable
      maxLength={ 50 }
      minLength={ 10 } 
      onChangeText=""
      />
    <Text></Text>
    <Button title='Sign Up' onPress={() => { navigation.navigate("Login"); }} style={{ top: 0  }}></Button>  
    <Text style={{ height:90, Maxheight:100 }}></Text>
    <Text style={{ color: "#fff", fontSize: 15, position:"absolute", bottom:40 }}>Already have an account? </Text>
    <Text onPress={() => navigation.navigate("Login")}
           style={{ fontSize: 15, color: '#00F', position:"absolute", bottom:20 }} >Click here to Sign In.</Text>
    </View>
  );
}

function PasswordResetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ height: 50 }}></Text>
      <Text style={{ color: "#fff", fontSize: 25, fontWeight: 'bold', }}>Reset Password</Text>
      <Text style={{ Maxheight:90, height:70 }}></Text>
      <Image source={" "} style={{ width: 300, height: 250 }} />
      <Text style={{ color: "#fff", fontSize: 15, textAlign: "center", fontWeight: "bold"}} >Please enter your email address to reset your Password.</Text>
      <Text style={{ height:40 }}></Text>
      <Text style={{ color: "#fff", fontSize: 15, Maxheight: 40 }}>Email Address</Text>
      <Text></Text>
      <TextInput style={{ width: 300, backgroundColor: "#fff", color: 'black', height: 40, }}
      editable
      maxLength={ 50 }
      minLength={ 10 } 
      onChangeText=""
      />
      <Text></Text>
      <Button title='Submit' onPress={() => {navigation.navigate("Login")}}></Button>
      <Text style={{ height: 200 }}></Text>
    </View>
  );
}

function DashboardScreen({ navigation }) {
  return (
    <View>
      <Text style={{ color: Colors.black, fontSize: 30, fontWeight: 'bold', textAlign: "center", }}>Welcome to Asserlee!</Text>
      <Text style={{ color: Colors.black, fontSize: 30, textAlign: "center", margin: '20' }}>Welcome to your dashboard!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF14A8',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
});

const options = StyleSheet.create({
  container: {
    headerStyle: {
      backgroundColor: '#FF14A8',
    },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerTitleStyle: {
      justifyContent: 'center'
    },
  }
});

export default App;
