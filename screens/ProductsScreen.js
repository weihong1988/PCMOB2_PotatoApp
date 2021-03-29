import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import {
  Card,
  Paragraph,
  Title,
  Snackbar,
  Button,
  TextInput,
} from "react-native-paper";

import { createStackNavigator } from "@react-navigation/stack";
import { StackActions } from "@react-navigation/native";

function ProductsHomeScreen({ navigation }) {
  let [items, setItems] = useState(0);

  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Cover
            style={{ margin: 10, height: 200 }}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Russet_potato.jpg/800px-Russet_potato.jpg",
            }}
          />
          <Card.Content>
            <Title>Russet Potato</Title>
            <Paragraph>
              A russet type, its flesh is white, dry, and mealy, and it is good
              for baking, mashing, and french fries (chips).
            </Paragraph>
          </Card.Content>
          <Card.Actions style={{ justifyContent: "flex-end" }}>
            <Button mode="contained" onPress={() => setItems(items + 1)}>
              Add to cart
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover
            style={{ margin: 10, height: 200 }}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Bamberger_Hoernle.jpg/800px-Bamberger_Hoernle.jpg",
            }}
          />
          <Card.Content>
            <Title>Bamberg Potato</Title>
            <Paragraph>
              It is a small, typically long and irregularly shaped potato with a
              waxy texture. The Bamberg has firm, light yellow flesh with a
              nutty flavour.
            </Paragraph>
          </Card.Content>
          <Card.Actions style={{ justifyContent: "flex-end" }}>
            <Button mode="contained" onPress={() => setItems(items + 1)}>
              Add to cart
            </Button>
          </Card.Actions>
        </Card>

        <Card style={styles.card}>
          <Card.Cover
            style={{ margin: 10, height: 200 }}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/a/ab/Adirondack_Blue.jpg",
            }}
          />
          <Card.Content>
            <Title>Adirondack Blue</Title>
            <Paragraph>
              The Adirondack Blue is a potato variety with blue flesh and skin
              with a slight purple tint.
            </Paragraph>
          </Card.Content>
          <Card.Actions style={{ justifyContent: "flex-end" }}>
            <Button mode="contained" onPress={() => setItems(items + 1)}>
              Add to cart
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>

      <View style={{ height: 60 }}></View>

      <Snackbar
        visible={true}
        onDismiss={function () {}}
        action={{
          label: "Check Out",
          onPress: () => {
            setItems(0);
            navigation.navigate("Shipping");
          },
        }}
      >
        Items in cart: {items}
      </Snackbar>
    </SafeAreaView>
  );
}

function ShippingScreen({ navigation }) {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [cardnum, setCardnum] = React.useState("");
  const [cardcode, setCardcode] = React.useState("");

  return (
    <KeyboardAvoidingView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card
        style={{
          width: "80%",
          marginBottom: 30,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Card.Title title="Shipping Information" />
        <TextInput
          label="Name"
          mode="outlined"
          value={name}
          style={styles.textbox}
          onChangeText={(name) => setName(name)}
        />
        <TextInput
          label="Address"
          mode="outlined"
          multiline={true}
          numberOfLines={5}
          value={address}
          style={styles.textbox}
          onChangeText={(address) => setAddress(address)}
        />
      </Card>

      <Card
        style={{
          width: "80%",
          marginBottom: 30,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <Card.Title title="Payment Information" />
        <TextInput
          label="Card Number"
          mode="outlined"
          value={cardnum}
          style={styles.textbox}
          onChangeText={(cardnum) => setCardnum(cardnum)}
        />
        <TextInput
          label="Security Code"
          mode="outlined"
          value={cardcode}
          style={styles.textbox}
          onChangeText={(cardcode) => setCardcode(cardcode)}
        />
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.navigate("Thank You!")}
      >
        Place Order
      </Button>
    </KeyboardAvoidingView>
  );
}

function ThankYouScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={styles.picture}
        source={require("../assets/delivery.png")}
      />
      <Title>Thank you for your order!</Title>
      <Button
        mode="contained"
        style={{ marginTop: 20 }}
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      >
        Back to Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    justifyContent: "space-between",
  },
  card: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  textbox: {
    width: "100%",
    marginBottom: 20,
  },
  picture: {
    width: 300,
    height: 300,
  },
});

const Stack = createStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsHomeScreen} />
      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Thank You!" component={ThankYouScreen} />
    </Stack.Navigator>
  );
}
