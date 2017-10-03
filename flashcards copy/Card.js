import React from 'react';
import { 
  StyleSheet, 
  Button, 
  Text, 
  View, 
  TouchableWithoutFeedback 
} from 'react-native';

export default class Card extends React.Component {
  state = {
    showTerm: false
  }

  /*
    Flips the showTerm flag in our state
  */
  flipCard = () => {
    // Fill this out
    this.setState({
      showTerm: !this.state.showTerm
    });
  }

  // deleteCard = () => {
  //   // Fill this out
  //   this.setState({
  //     showTerm: !this.state.showTerm
  //   });
  // }

  render() {
    // Fill this out
    const textStyle = (this.state.showTerm) ? (styles.termText) : (styles.definitionText);
    return (
    <TouchableWithoutFeedback onPress={this.flipCard}>
      <View style={[styles.container]}>
        <Text style={styles.cardTitle}>{(this.state.showTerm) ? ("Term") : ("Definition")}</Text>
        <Text style={textStyle}>{(this.state.showTerm) ? (this.props.cardData.term) : (this.props.cardData.definition)}</Text>
        <Text style={styles.subject}>{this.props.cardData.subject}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
  } 
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '50%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    height: 150
  }, 
  cardTitle: {
    color: '#626c6d',
    fontSize: 12,
    fontFamily: 'Georgia',
    position: 'absolute',
    left: 20,
    top: 15
  },
  subject: {
    color: '#626c6d',
    fontSize: 12,
    fontFamily: 'Georgia',
    position: 'absolute',
    left: 20,
    bottom: 15
  },
  termText: {
    fontSize: 30,
    fontFamily: 'Georgia'
  },
  definitionText: {
    fontSize: 20,
    fontFamily: 'Georgia'
  }
}); 