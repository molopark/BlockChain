//blockchain.js 모듈을 이곳에서 가져다 쓰겠다.
const Blockchain = require('./blockchain');

//위에서 가져온 모듈의 객체를 만든다.
const bitcoin = new Blockchain();

//제네시스 블럭
console.log(bitcoin);

/*
const previousBlockHash = "abcdedferefa"
const currentBlockData = [
  {
  amount: 10,
  sender: 'BACKadffaaf',
  recipient: 'HONGllalflks'
  },
  {
  amount: 20,
  sender: 'PACKadffaaf',
  recipient: 'HONGllalflks'
  },
  {
  amount: 30,
  sender: 'PACKadffaaf',
  recipient: 'HONGllalflks'
  }
]
*/

//const nonce = 100;
//console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce));

//pow작업
//console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));
//console.log(bitcoin.hashBlock(previousBlockHash,currentBlockData,1412347));
