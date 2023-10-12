import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Modal, TextInput } from "react-native";
// import { useQuery, gql } from '@apollo/client';

// const GET_USER_CARDS = gql`
//   query GetUserCards($userId: ID!) {
//     user(id: $userId) {
//       cards {
//         id
//         title
//         description
//         membersCount
//       }
//     }
//   }
// `;

const HomeScreen = () => {
  // const { loading, error, data } = useQuery(GET_USER_CARDS, {
  //   variables: { userId: 'ID_DE_L_UTILISATEUR' },
  // });

  // if (loading) return <Text>Loading...</Text>;
  // if (error) return <Text>Error :(</Text>;

  // const cards = data.user.cards;
  const [isModalVisible, setModalVisible] = useState(false);
  const [groupTitle, setGroupTitle] = useState('');
  const [groupDescription, setGroupDescription] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const createGroup = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bienvenue Utilisateur</Text>
        <TouchableOpacity>
          <View style={styles.profileIcon}>
            <Image
              source={require('../../assets/user.jpg')}
              style={styles.profileImage}
            />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1, paddingHorizontal: 30 }}>
        <Text style={styles.cardListTitle}>Liste des Groupes</Text>
        <View style={styles.cardContainer}>
          {/* {cards.map(card => ( */}
            {/* <View style={styles.card} key={card.id}> */}
            <View style={styles.card}>
              <View>
                {/* <Text style={styles.cardTitle}>{card.title}</Text> */}
                {/* <Text style={styles.cardDescription}>{card.description}</Text> */}
              </View>
              <View style={styles.cardDetails}>
                {/* <Text style={styles.cardDetailsText}>{card.membersCount}</Text> */}
                <Image
                  source={require('../../assets/group.png')}
                  style={styles.personIcon}
                />
              </View>
            </View>
          {/* ))} */}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.buttonNew}>
            <Text style={styles.buttonText}>Créer un groupe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonJoin}>
            <Text style={styles.buttonText}>Rejoindre un groupe</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
              <Image
                source={require('../../assets/cancel.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Créer un groupe</Text>
            <TextInput
              style={styles.input}
              placeholder="Titre du groupe"
              value={groupTitle}
              onChangeText={text => setGroupTitle(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Description du groupe"
              value={groupDescription}
              onChangeText={text => setGroupDescription(text)}
            />
            <TouchableOpacity onPress={createGroup} style={styles.buttonStyleCreateAccount}>
              <Text style={{ color: "white", fontWeight : 'bold' }}>Créer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal}>
              <View style={styles.buttonCancel}>
                <Text style={styles.buttonText}>Annuler</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 60,
    padding: 16,
    alignItems: 'center',
    height: 120,
    backgroundColor: '#ffff'
  },
  headerText: {
    fontSize: 24,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ccc",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5ED0D1',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#fff',
  },
  cardDescription: {
    fontSize: 16,
    color: '#fff',
  },
  cardDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardDetailsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
    color: '#fff',
  },
  personIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  buttonNew: {
    backgroundColor: "#55BCF2",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonJoin: {
    backgroundColor: "#7382BD",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
  },
  cardListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: "#D9DADE",
    borderWidth: 1,
    width: 250,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
  buttonStyleCreateAccount: {
    borderRadius: 50,
    height: 50,
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#55BCF2",
    marginTop: 20
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
