import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';

const BranchData = async () => {
  const [fdata, setData] = useState([]);
  useEffect(() => {
    firestore()
      .collection('Branches')
      .get()
      .then(snapshot => {
        setData(snapshot.docs.map(e => e.data()));
      })
      .catch(e => console.log('Error While Getting Branch data------->', e));
  }, []);
  return fdata;
};
export default BranchData;
