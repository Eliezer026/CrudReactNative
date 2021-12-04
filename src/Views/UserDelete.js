import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import firebase from "../database/firebase";

const UserDelete = (props) => {
  const initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
  };
  const [state, setState] = useState(initialState);

  const [loading, setLoading] = useState(true);

  const item = props.route.params.userId;

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setState({
      ...user,
      id: doc.id,
    });
    setLoading(false);
    console.log(user);
  };

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const DeleteUser = async () => {
    const dbRef = firebase.db
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("UserList");
  };

  const opemConfirmation = () => {
    Alert.alert("Remove the User", "Are you sure", [
      { text: "Yes", onPress: () => DeleteUser() },
      { text: "Not", onPress: () => props.navigation.navigate("UserList") },
    ]);
  };

  const updateUser = async () => {
    const dbRef = firebase.db.collection("users").doc(state.id);
    await dbRef.set({
      name: state.name,
      email: state.email,
      phone: state.phone,
    });
    setState(initialState);
    props.navigation.navigate("UserList");
  };

  return (
    <ScrollView>
      {loading === true ? (
        <View>
          <ActivityIndicator size="large" color="#9e9e9e" />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Name User"
              value={state.name}
              onChangeText={(value) => handleChangeText("name", value)}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Email User"
              value={state.email}
              onChangeText={(value) => handleChangeText("email", value)}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder="Phone User"
              value={state.phone}
              onChangeText={(value) => handleChangeText("phone", value)}
            />
          </View>
          <View>
            <Button title="Edit User" onPress={() => updateUser()} />
            <Button
              color="#E37399"
              title="Delete User"
              onPress={() => opemConfirmation()}
            />
          </View>
        </View>
      )}
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

export default UserDelete;
