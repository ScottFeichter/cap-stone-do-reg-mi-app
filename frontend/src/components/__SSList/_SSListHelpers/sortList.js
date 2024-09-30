
let sortChain;

for (obj of keysStatus) {
  if (Object.entries(obj)[1] !== "off")  { sortChain.push(obj) } else break;
}

let sortChainLengther = sortChain.length;

let sortChainLink = (a, b, status) => {
  if (status === 'asce') return a - b;
  if (status === 'desc') return b - a;
}



list.sort((a, b) => {

  for (let i = 0, i < employeeList.length, i++) {
    curr = keysStatus[0];

  }

  sortChainLink(a.curr[k], b.curr[k], curr[v]) || sortChainLink(a.curr[k], b.curr[k], curr[v])

})
