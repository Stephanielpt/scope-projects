//#9befd1 - the green u want
import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableHighlight, 
  ScrollView, 
  Modal,
  TextInput
} from 'react-native';

/*
  Import our two custom components
*/
import NewCardModal from './NewCardModal';
import Card from './Card';

/*
  Default set of cards
*/
const DEFAULT_CARDS = [
  {
    term: "LMAYO",
    definition: "A laughing jar of mayonnaise",
    subject: "hhahahAhHAHAA"
  },
  {
    term: "An Impasta",
    definition: "A fake noodle.",
    subject: "lol"
  },
  {
    term: "A Yardvark",
    definition: "A three-footed aardvark",
    subject: "heh"
  },
  {
    term: "A BP Station",
    definition: "Where bees go to the bathroom",
    subject: "XDD"
  },
  {
    term: "Ten-tickles",
    definition: "How to make an octupus laugh",
    subject: "teehee"
  }
  

];

class App extends Component {
  // Fill this out
  state = {
    cards: DEFAULT_CARDS,
    modalVisible: false
  }
 
  /*
    Toggles the new card modal
  */
  _toggleModal = () => {
    // Fill this out
    this.setState({
    modalVisible: !this.state.modalVisible
  });
  }

  /*
    Passed to the new card modal.
    Called when user decides to add new card.
    Creates card object and adds it to our state
  */
  _addCard = (_term, _definition, _subject) => {
    // Fill this out
    const cards = this.state.cards;

    cards.push({
      term: _term,
      definition: _definition,
      subject: _subject
    });

    this.setState({
      cards: cards
    });

    this.setState({
      modalVisible: false
  }); 
  }

  render() {
    // Loop through the cards array in state and create Card component for each card
    const cards = this.state.cards.map((card, index) => {
// Fill this out
    return (
      <Card cardData={card} key={index} />
    )
    });

    return (
      <View style={styles.container}>
      <NewCardModal 
        modalVisible={this.state.modalVisible} 
        toggleModal={this._toggleModal}
        addCard={this._addCard}
      />
        <ScrollView>
          {cards}
        </ScrollView>
        <TouchableHighlight 
          style={styles.addButton} 
          onPress={this._toggleModal} 
          underlayColor='#128040'
        >
          <Text style={styles.addButtonText}>Add Card</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9bbf9'
  },
  addButton: {
    backgroundColor: '#000000',
    paddingTop: 15,
    paddingBottom: 15,
    margin: 20
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Georgia'
  }
});

export default App;