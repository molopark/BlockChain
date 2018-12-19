pragma solidity 0.4.24;

contract vote {

    // structure
    struct candidator {
        string name;
        uint upVote;
    }

    // variable : get candidator
    candidator[] public candidatorList;

    // mapping
    mapping(address => bool) voted;

    // event
    bool live;
    address owner;
    event AddCandidator(string name);
    event UpVote(string candidator, uint upVote);
    event FinishVote(bool live);
    event Voting(address owner);

    // modifier
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    // constructor
    constructor() public {
        owner = msg.sender;
        live = true;
        // emit event
        emit Voting(owner);
    }

    // candidator
    function addCandidator(string _name) public onlyOwner{
        require(candidatorList.length < 5);
        require(live == true);
        candidatorList.push(candidator(_name, 0));
        // emit event
        emit AddCandidator(_name);
    }

    // voting
    function upVote(uint _indexOfCandidator) public {
        require(live == true);
        require(_indexOfCandidator < candidatorList.length);
        require(voted[msg.sender] == false);
        candidatorList[_indexOfCandidator].upVote++;
        voted[msg.sender] = true;
        //emit event
        emit UpVote(candidatorList[_indexOfCandidator].name, candidatorList[_indexOfCandidator].upVote);
    }

    // finish vote
    function finishVote() public onlyOwner {
        require(live == true);
        live = false;
        //emit event
        emit FinishVote(live);
    }
}
