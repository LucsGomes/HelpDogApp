import { Linking, Alert, Platform } from 'react-native';

function usePhoneCall() {
    const callToNumber = (phone: string) => {
        let phoneNumber = phone;
        if (Platform.OS !== 'android') {
          phoneNumber = `telprompt:${phone}`;
        }
        else  {
          phoneNumber = `tel:${phone}`;
        }
        Linking.canOpenURL(phoneNumber)
        .then(supported => {
          if (!supported) {
            Alert.alert('Phone number is not available');
          } else {
            return Linking.openURL(phoneNumber);
          }
        })
        .catch(err => console.log(err));
      };

      return {callToNumber}
}

export {usePhoneCall}