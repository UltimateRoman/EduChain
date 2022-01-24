// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract EduchainMain {
    
    struct Resource {
        string course;
        string subject;
        string file;
        address uploader;
    }

    mapping(uint => Resource) public resources;

}