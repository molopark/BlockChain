//blockchain.js 모듈을 이곳에서 가져다 쓰겠다.
const Blockchain = require('./blockchain')

//위에서 가져온 모듈의 객체를 만든다.
const bitcoin = new Blockchain();

//새로운 블럭 만들기
bitcoin.createNewBlock(1111,"aaaaaa","1a1a1a1a1a");
bitcoin.createNewBlock(2222,"bbbbbbb","2b2b2b2b2b2b");
bitcoin.createNewBlock(3333,"ccccccc","3c3c3c3c3c3c");

//찍어보기
console.log(bitcoin)
