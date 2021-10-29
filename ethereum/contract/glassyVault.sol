// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CreateSchool {
    School[] public deployedSchools;

    function addSchool() public {
        School newSchool = new School(msg.sender);
        deployedSchools.push(newSchool);
    }

    function getAllSchools() public view returns (School[] memory) {
        return deployedSchools;
    }
}

contract School {
    address public principal; //this stores the owner of school/contract
    mapping(string => Student) public findStudent;
    string[] public studentIds;
    //structure for 10th result
    struct Tenth {
        int256 maths;
        int256 english;
        int256 hindi;
        int256 science;
        int256 socials;
        int256 total;
    }

    //structure for 12th result
    struct Twelth {
        int256 physics;
        int256 chemistry;
        int256 biology;
        int256 maths;
        int256 english;
        int256 computerScience;
        int256 history;
        int256 geography;
        int256 politicalScience;
        int256 economics;
        int256 businessStudies;
        int256 physicaledu;
    }

    //structure for Student data
    struct Student {
        string name;
        string id;
        string fathersName;
        string mothersName;
        Tenth first;
        Twelth second;
    }

    modifier restricted() {
        require(msg.sender == principal);
        _;
    }

    constructor(address manager) {
        principal = manager;
    }

    function createStudent(
        string calldata name,
        string calldata id,
        string calldata father,
        string calldata mother
    ) public restricted {
        Student memory newStu;
        newStu.name = name;
        newStu.id = id;
        studentIds.push(id);
        newStu.fathersName = father;
        newStu.mothersName = mother;
        findStudent[id] = newStu;
    }

    function setTenthResult(string calldata id, Tenth memory record)
        public
        restricted
    {
        findStudent[id].first.maths = record.maths;
        findStudent[id].first.english = record.english;
        findStudent[id].first.hindi = record.hindi;
        findStudent[id].first.science = record.science;
        findStudent[id].first.socials = record.socials;
        findStudent[id].first.total = record.total;
    }

    function setTwelthResult(string calldata id, Twelth memory record)
        public
        restricted
    {
        findStudent[id].second.physics = record.physics;
        findStudent[id].second.chemistry = record.chemistry;
        findStudent[id].second.biology = record.biology;
        findStudent[id].second.maths = record.maths;
        findStudent[id].second.english = record.english;
        findStudent[id].second.computerScience = record.computerScience;
        findStudent[id].second.history = record.history;
        findStudent[id].second.geography = record.geography;
        findStudent[id].second.politicalScience = record.politicalScience;
        findStudent[id].second.economics = record.economics;
        findStudent[id].second.businessStudies = record.businessStudies;
        findStudent[id].second.physicaledu = record.physicaledu;
    }

    function getAllIds() public view returns (string[] memory) {
        return (studentIds);
    }
}
