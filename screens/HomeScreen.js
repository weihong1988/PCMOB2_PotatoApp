import React from "react";
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Avatar, List, Card, Paragraph, Title } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

const dataArray = [
  {
    title: "What is a potato?",
    content:
      "The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum.",
  },
  {
    title: "Benefits of eating potato?",
    content:
      "Potatoes are rich in vitamins, minerals and antioxidants, which make them very healthy.",
  },
  {
    title: "Where to buy potato?",
    content: "Shop for potatoes online from Food Marketplace.",
  },
];

const LeftContent = (props) => (
  <Avatar.Image {...props} source={require("../assets/fries.png")} />
);
const Stack = createStackNavigator();

function DisplayHomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title title="Food Marketplace" left={LeftContent} />
          <Card.Cover
            style={{ margin: 10, height: 200 }}
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg",
            }}
          />
          <Card.Content>
            <Title>Raw Potato Sale</Title>
            <Paragraph>
              Overstock of potatoes in the factory. Buy potatoes in bulk today.
            </Paragraph>
          </Card.Content>
        </Card>

        <List.Section title="Frequently Asked Questions">
          <View>
            <List.AccordionGroup>
              {dataArray.map((item, idx) => {
                return (
                  <List.Accordion title={item.title} key={idx.toString()} id={idx.toString()}>
                    <List.Item
                      key={idx.toString()}
                      style={styles.accordianContent}
                      description={item.content}
                      descriptionNumberOfLines={4}
                    />
                  </List.Accordion>
                );
              })}
            </List.AccordionGroup>
          </View>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  accordianContent: {
    fontSize: 5,
    paddingLeft: 30,
  },
});

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={DisplayHomeScreen} />
    </Stack.Navigator>
  );
}
