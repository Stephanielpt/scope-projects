import React, { Component } from 'react';
import { 
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet
} from 'react-native';

export default class BookItem extends Component {
  render() {
  const book = this.props.book;
  let description;
  let averageRating;
  /*
    Sometimes the description can be super long. 
    This code will shorten the description to be 120 characters max
  */
  if (book.description !== undefined) {
    if (book.description.length >= 120) {
      description = book.description.slice(0,120) + '...';
    } else {
      description = book.description;
    }
  }

  if(book.averageRating !== undefined) {
    averageRating = book.averageRating;
    if(!(averageRating <= 5 && averageRating > 0))
    {
      averageRating = 0;
    }
  }
  
  return (
    <TouchableWithoutFeedback 
      onPress={() => {
        this.props.navigation.navigate('Book', { book: book })
      }}
    >
      <View style={styles.listItem}>
        <Text style={styles.bookTitle}>{book.title}</Text>
        {(description) ? (<Text style={styles.bookDescription}>{description}</Text>) : null}
        {(averageRating) ? (<Text style={styles.bookDescription}>{averageRating}</Text>) : null}
      </View>
    </TouchableWithoutFeedback>
  ); 
}
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#9de8aa',
    padding: 30,
    borderBottomColor: '#254f23',
    borderBottomWidth: 2
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  bookDescription: {
    fontSize: 13
  }
});