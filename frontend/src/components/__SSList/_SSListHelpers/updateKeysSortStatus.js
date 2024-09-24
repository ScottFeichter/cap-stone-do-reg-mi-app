const updateKeysStatus = (k, v, keysStatus, setKeysStatus) => {
  let currIdx = keysStatus.findIndex(ele => Object.keys(ele)[0] === k);
  let targetIdx = keysStatus.findIndex(ele => ele[Object.keys(ele)[0]] === 'off');

  // let keysStatusDeepCopy = keysStatus.map(a => {return {...a}});
  // keysStatusDeepCopy[currIdx].k = 'asce';
  // [keysStatusDeepCopy[currIdx], keysStatusDeepCopy[targetIdx]] = [keysStatusDeepCopy[targetIdx], keysStatusDeepCopy[currIdx]];
  // setKeysStatus(keysStatusDeepCopy)

  v = 'asce'

  setKeysStatus(prev => ({
    ...prev,
    [k]: v,
  }));

  setKeysStatus([keysStatus[currIdx], keysStatus[targetIdx]] = [keysStatus[targetIdx], keysStatus[currIdx]])
}

export default updateKeysStatus;
