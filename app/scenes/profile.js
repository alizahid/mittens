import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

import { Main, NavBar } from '../components'

export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile',
    header: () => <NavBar title="Profile" />
  }

  render() {
    return (
      <Main style={styles.container}>
        <Text>Profile</Text>
      </Main>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
