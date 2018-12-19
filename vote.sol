pragma solidity 0.5.1;

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
    event AddCandidator(string name);
    event UpVote(string candidator, uint upVote);

    // modifier

    // constructor

    // candidator
    function addCandidator(string _name) public {
        require(candidatorList.length < 5);
        candidatorList.push(candidator(_name, 0));
        // emit event
        emit AddCandidator(_name);
    }

    // voting
    function upVote(uint _indexOfCandidator) public {
        require(_indexOfCandidator < candidatorList.length);
        require(voted[msg.sender] == false);
        candidatorList[_indexOfCandidator].upVote++;
        voted[msg.sender] = true;
        //emit event
        emit UpVote(candidatorList[_indexOfCandidator].name, candidatorList[_indexOfCandidator].upVote);
    }

    // finish vote
    function finishVote() public {

    }
}
