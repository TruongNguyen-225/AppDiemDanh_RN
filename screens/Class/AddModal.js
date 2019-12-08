import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modalbox';
import QRCode from 'react-native-qrcode-svg';
const {width: WIDTH} = Dimensions.get ('window');
const {height: HEIGHT} = Dimensions.get ('window');

export default class AddModal extends Component {
  constructor (props) {
    super (props);
    this.state = {
      newFoodName: '',
      newFoodDescription: '',
    };
  }
  showAddModal = () => {
    this.refs.myModal.open ();
  };
  generateKey = numberOfCharacters => {
    return require ('random-string') ({length: numberOfCharacters});
  };
  render () {
    const idType = this.props.navigation.state.params.thamso;

    return (
      <Modal
        ref={'myModal'}
        style={styles.styleModal}
        position="center"
        backdrop={true}
        onClosed={() => {}}
      >
        <View style={styles.viewQRcode}>
            <QRCode
                value={`${idType._id}`}
                logoSize={100}
                size={260}
                logoBackgroundColor='transparent'
            />
         </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleModal: {
    borderRadius: Platform.OS === 'ios' ? 30 : 7,
    marginTop: WIDTH / 10,
    width: '100%',
    height: '80%',
    zIndex: 10,
  },
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
    height: '80%',
  },
  viewQRcode: {
    flex: 7,
    borderWidth: 0,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
},
});
