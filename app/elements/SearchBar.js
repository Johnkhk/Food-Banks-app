import { StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

export class FoodSearchBar extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        round
        placeholder="Search for food to find/donate..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}