import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";

import firebase from "../database/firebase";

const UserCreate = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewuser = async () => {
    if (state.name == "") {
    } else {
      try {
        await firebase.db.collection("users").add({
          name: state.name,
          email: state.email,
          phone: state.phone,
        });
      } catch (error) {
        console.log(console.error);
      }
      props.navigation.navigate("UserList");
      alert("saved");
    }
  };

  console.log(state);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Name User"
            onChangeText={(value) => handleChangeText("name", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Email User"
            onChangeText={(value) => handleChangeText("email", value)}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Phone User"
            onChangeText={(value) => handleChangeText("phone", value)}
          />
        </View>
        <View>
          <Button title="Save User" onPress={() => saveNewuser()} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    marginTop: 60,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});

export default UserCreate;
