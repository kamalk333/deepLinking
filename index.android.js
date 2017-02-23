/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Linking,
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import branch from 'react-native-branch';
//var UIExplorerBlock = require('./UIExplorerBlock');
import MyScene from "./screen"
/*const onPressLearnMore=()=>{
  Intent intent = new Intent(Intent.ACTION_VIEW);
intent.setData(Uri.parse("market://details?id=com.example.android"));
startActivity(intent);
}*/
/*export default class MobileFirstView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
        onPress={{Uri:"market://details?id=com.example.android"}}
        title="Update App"
        color="#00ff12"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }
}
*/
class OpenURLButton extends React.Component {
  static propTypes = {
    url: React.PropTypes.string,
  };

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleClick}>
        <View style={styles.button}>
          <Text style={styles.text}>Open</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
class IntentAndroidExample extends React.Component {
  /*componentDidMount() {
    const url = 'http://www.example.com/gizmos';
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }*/
  static propTypes = {
    url: React.PropTypes.string,
  };
  handleButton(e){
    console.log("leagacy 1");
    
    let branchUniversalObject = branch.createBranchUniversalObject(
      'content/12345', // canonical identifier
      {
        contentTitle: 'My Content Title',
        contentImageUrl: 'https://example.com/mycontent-12345.png',
        contentDescription: 'My Content Description',
        metadata: {
          product_picture: '12345',
          user_id: '6789'
        }
      }
    );
    let linkProperties = {
      feature: 'sample-feature',
      channel: 'sample-channel'
    }

    let controlParams = {
      '$desktop_url': 'http://desktop-url.com'
    }
    this.getDefaultUserState(branchUniversalObject,linkProperties, controlParams);
};
    getDefaultUserState = async(branchUniversalObject,linkProperties,controlParams)=> {
      console.log("myFunction")
        try {
          let {url} = await branchUniversalObject.generateShortUrl(linkProperties, controlParams);
          console.log("hie",url);
        }
        catch(error){
          console.log(error)
        }    
    
    };
  render() {
    return (
      <View>
        <OpenURLButton url={'market://details?id=com.furtados.highapp'} />
        <OpenURLButton url={'http://www.facebook.com'} />
        <Button
        onPress={this.handleButton.bind(this)}
        title="Create Link"
        color="#bdbdbd"
      />
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 30,
  },
  button: {
    padding: 10,
    backgroundColor: '#3B5998',
    marginBottom: 10,
  },
  text: {
    color: 'white',
  },
});

AppRegistry.registerComponent('quantum', () => IntentAndroidExample);
