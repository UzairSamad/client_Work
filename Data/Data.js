import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

const firebaseData = async () => {
  const [fdata, setData] = useState();
  useEffect(() => {
    firestore()
      .collection('Products')
      .get()
      .then(snapshot => {
        setData(snapshot.docs.map(e => e.data()));
      });
  }, []);
  return fdata;
};
export default firebaseData;
