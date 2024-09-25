const updateKeysStatus = (k, v, keysStatus, setKeysStatus) => {
  let currIdx = keysStatus.findIndex(ele => Object.keys(ele)[0] === k);
  let targetIdx = keysStatus.findIndex(ele => ele[Object.keys(ele)[0]] === 'off');


  if (sortStatus === 'off') {

      setSortStatus('asce');
      setButtonClasses(`${BCIN}ButtonOn`);
      v = 'asce';

      setKeysStatus(prev => ({
        ...prev,
        [k]: v,
      }));

      setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx]] = [keysStatus[targetIdx], keysStatus[currIdx]])

  } else if (sortStatus === 'asce') {
      setSortStatus('desc');
      setButtonClasses(`${BCIN}ButtonOn`);
      v = 'desc';

      setKeysStatus(prev => ({
        ...prev,
        [k]: v,
      }));

      // setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx]] = [keysStatus[targetIdx], keysStatus[currIdx]])


  } else if (sortStatus === 'desc') {
      setSortStatus('off');
      setButtonClasses(`${BCIN}ButtonOff`);
      v = 'off'

      setKeysStatus(prev => ({
        ...prev,
        [k]: v,
      }));

      setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx - 1]] = [keysStatus[targetIdx - 1], keysStatus[currIdx]])

  }



  // let keysStatusDeepCopy = keysStatus.map(a => {return {...a}});
  // keysStatusDeepCopy[currIdx].k = 'asce';
  // [keysStatusDeepCopy[currIdx], keysStatusDeepCopy[targetIdx]] = [keysStatusDeepCopy[targetIdx], keysStatusDeepCopy[currIdx]];
  // setKeysStatus(keysStatusDeepCopy)


}

export default updateKeysStatus;
