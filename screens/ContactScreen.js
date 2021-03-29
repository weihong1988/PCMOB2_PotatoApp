import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { List, Title, Modal, Portal, Button, Provider } from 'react-native-paper'

const contactsData = [
    {
        name: "Charlie McCharles",
        title: "Organic Potato Farmer",
        pic: "https://randomuser.me/portraits/men/1.jpg",
        description: "A passionate potato farmer growing the best potatoes all year long."
    },
    {
        name: "Desiree Dee",
        title: "Potato Corp. purchaser",
        pic: "https://randomuser.me/portraits/women/1.jpg",
        description: "An expert in sourcing the best potatoes grown in China and all over the world"
    },
    {
        name: "Adam Ellis",
        title: "Mass production Farmer",
        pic: "https://randomuser.me/portraits/men/2.jpg",
        description: "Cheap but mass produced potatos for your needs all year round."
    },
];

export default function ContactScreen() {
    const [visible, setVisible] = React.useState(false);
    const [description, setDescription] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [imageurl, setImageurl] = React.useState("");

    const hideModal = () => setVisible(false);

    return (
        <View style={styles.container}>
            <Title style={styles.title}>Staff</Title>
            <View style={styles.list}>
                {contactsData.map((item, index) => {
                    return (
                        <List.Item
                            title={item.name}
                            description={item.title}
                            key={index}
                            left={props => <Image {...props} style={styles.icon} source={{ uri: item.pic }} />}
                            onPress={() => {
                                setDescription(contactsData[index].description);
                                setTitle(contactsData[index].name);
                                setImageurl(contactsData[index].pic);
                                setVisible(true);
                            }
                            }
                        />)
                })}
            </View>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.popup}>
            <Image style={{ width: 200, height: 200, justifyContent: "center", marginBottom: 20, }} source={{ uri: imageurl }} />
                <Title>{title}</Title>
                <Text style={{marginTop: 10,}}>{description}</Text>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    list: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    icon: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    popup: {
        backgroundColor: 'white',
        padding: 20, 
        margin: 50,
        alignItems: "center"
    }
})