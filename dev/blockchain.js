//블록체인 데이터 구조
function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
}

//블록체인 프로토 타입 함수 정의
Blockchain.prototype.createNewBlock = function(nonce,previousBlockHash,hash){
  //새 블록 객체
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce:nonce,
    hash:hash,
    previousBlockHash:previousBlockHash
  };

  //다음 거래를 위한 거래내역 배열 비워주고 새로운 블록을 chin 배열에 추가
  this.newTransactions = [];
  this.chain.push(newBlock);

  return newBlock;
}

//마지막 블록 얻기 - chain 배열에는 블록데이터가 들어간다. 맨마지막 블록을 가져와라.
Blockchain.prototype.getLastBlock = function(){
return this.chain[this.chain.length - 1];
}

module.exports = Blockchain;
