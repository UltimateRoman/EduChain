// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EduchainMain {

    uint public contentCount;
    
    struct Content {
        string course;
        string subject;
        string file;
        address uploader;
    }

    mapping(uint => Content) public contents;

    event addedNewContent(
        uint id,
        string course,
        string subject,
        address uploader
    );

    function getUploader(string memory _file) 
        public
        view
        returns(address)
    {
        address uploader;
        for(uint i = 0; i < contentCount; ++i) {
            if(keccak256(abi.encodePacked(_file)) == keccak256(abi.encodePacked(contents[i].file))) {
                uploader = contents[i].uploader;
            }
        }
        return uploader;
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
        emit addedNewContent(contentCount, _course, _subject, msg.sender);
        contentCount++;
    }
}