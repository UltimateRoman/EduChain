// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IECToken {
    function mint(address to, uint amount) external;
}

contract EduchainMain is Ownable {

    address ECTaddress;
    uint public contentCount;
    
    struct Content {
        string course;
        string subject;
        string file;
        address contributor;
    }

    mapping(uint => Content) public contents;

    event addedNewContent(
        uint id,
        string course,
        string subject,
        address contributor
    );

    function getContributor(string memory _file) 
        public
        view
        returns(address)
    {
        address contributor;
        for(uint i = 0; i < contentCount; ++i) {
            if(keccak256(abi.encodePacked(_file)) == keccak256(abi.encodePacked(contents[i].file))) {
                contributor = contents[i].contributor;
            }
        }
        return contributor;
    }

    function contentExists(string memory _file)
        public
        view
        returns(bool)
    {
        bool fileExists;
        for(uint i = 0; i < contentCount; ++i) {
            if(keccak256(abi.encodePacked(_file)) == keccak256(abi.encodePacked(contents[i].file))) {
                fileExists = true;
            }
        }
        return fileExists;
    }

    function setECTAddress(address _ECTaddress) external onlyOwner {
        ECTaddress = _ECTaddress;
    }

    function addContent(
        string memory _course, 
        string memory _subject,
        string memory _file
    ) 
        external 
    {
        require(bytes(_course).length > 0 && bytes(_file).length > 0, "Missing details");
        require(contentExists(_file) == false, "Content already exists");
        contents[contentCount] = Content(_course, _subject, _file, msg.sender);
        contentCount++;
        IECToken(ECTaddress).mint(msg.sender, 1 ether);
        emit addedNewContent(contentCount-1, _course, _subject, msg.sender);
    }
}
