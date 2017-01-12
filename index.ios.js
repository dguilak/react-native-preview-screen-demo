import React, { Component } from 'react';
import {
  AppRegistry,
  AppState,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class PreviewScreenDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentAppState: 'active'
    }
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }

  _handleAppStateChange(currentAppState) {
    this.setState({ currentAppState, });
  }

  render() {
    if (this.state.currentAppState !== 'active') {
      return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Unimportant Noninformation</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is my secret information!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PreviewScreenDemo', () => PreviewScreenDemo);
