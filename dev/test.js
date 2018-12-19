//blockchain.js 모듈을 이곳에서 가져다 쓰겠다.
const Blockchain = require('./blockchain')

//위에서 가져온 모듈의 객체를 만든다.
const bitcoin = new Blockchain();

//새로운 블럭 만들기
bitcoin.createNewBlock(1111,"aaaaaa","1a1a1a1a1a");

//새로운 트랜젝션 생성 - (총금액,보내는이,받는이)
bitcoin.createNewTransaction(100,'PARKWJDDND','HONGELFEHD');


//새로운 븍럭 생성 - 채굴후 얻은 블럭
bitcoin.createNewBlock(2222,"bbbbbbb","2b2b2b2b2b2b");

//새로은 트랜잭션 생성2 - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(777,'PACKadffaaf','HONGllalflks')
//새로은 트랜잭션 생성3 - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(888,'PACKadffaaf','HONGllalflks')
//새로은 트랜잭션 생성4. - (총금액, 보내는이, 받는이)
bitcoin.createNewTransaction(999,'PACKadffaaf','HONGllalflks')

//새로운 븍럭 생성 - 채굴후 얻은 블럭
bitcoin.createNewBlock(3333,"ccccccc","3c3c3c3c3c3c");

//찍어보기
//console.log(bitcoin)
//console.log("\n\n")
//console.log(bitcoin.chain[1])
//console.log("\n\n")
//console.log(bitcoin.chain[2])
/*
Blockchain {
  chain:
   [ { index: 1,
       timestamp: 1545209972663,
       transactions: [],
       nonce: 1111,
       hash: '1a1a1a1a1a',
       previousBlockHash: 'aaaaaa' },
     { index: 2,
       timestamp: 1545209972663,
       transactions: [Array],
       nonce: 2222,
       hash: '2b2b2b2b2b2b',
       previousBlockHash: 'bbbbbbb' },
     { index: 3,
       timestamp: 1545209972663,
       transactions: [Array],
       nonce: 3333,
       hash: '3c3c3c3c3c3c',
       previousBlockHash: 'ccccccc' } ],
  pendingTransaction: [] }



{ index: 2,
  timestamp: 1545209972663,
  transactions:
   [ { amount: 100, sender: 'PARKWJDDND', recipient: 'HONGELFEHD' } ],
  nonce: 2222,
  hash: '2b2b2b2b2b2b',
  previousBlockHash: 'bbbbbbb' }



{ index: 3,
  timestamp: 1545209972663,
  transactions:
   [ { amount: 777, sender: 'PACKadffaaf', recipient: 'HONGllalflks' },
     { amount: 888, sender: 'PACKadffaaf', recipient: 'HONGllalflks' },
     { amount: 999, sender: 'PACKadffaaf', recipient: 'HONGllalflks' } ],
  nonce: 3333,
  hash: '3c3c3c3c3c3c',
  previousBlockHash: 'ccccccc' }
*/
