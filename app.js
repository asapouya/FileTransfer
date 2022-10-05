const fs = require("fs");
const path = require("path");
const upperCase = require("./upperCase");

//O(n^2 + n)

function relocate(fromDir, searchArray, toDir){

    if(!Array.isArray(searchArray)) return console.log("Please insert search value as an array.")

    let searchResult = [];
    let searchResultUnique = [];

    fs.readdir(fromDir , (err, data) => {
        if(err) throw err;

        for(var i = 0; i < data.length; i++){
            data[i] = data[i].toLowerCase();
            for(let j = 0; j < searchArray.length; j++){
                if(data[i].includes(searchArray[j].toLowerCase())){  
                    searchResult.push(data[i]);  
                } 
            }
        }
        searchResultUnique = [...new Set(searchResult)]
        searchResultUnique = upperCase(searchResultUnique); // O(n^2)

        let oldPath = null;
        for(let i = 0; i < searchResultUnique.length; i++){
            oldPath =  path.join(fromDir, searchResultUnique[i]);
            newPath = path.join(toDir, searchResultUnique[i]);
            fs.rename(oldPath, newPath, err => {
                if(err) console.log(err);
                console.log(`${searchResultUnique[i]} - DONE ${i + 1}`);
            });
        }
    })
}
// var cmdArgs = process.argv;

relocate("Z:/Courses/AlgoExpert - 150 Coding Interview Questions 2021-3",
[

    "Apartment Hunting",
    "Calendar Matching",
    "Iterative In-order Traversal",
    "Flatten Binary Tree",
    "Right Sibling Tree",
    "All Kinds Of Node Depths",
    "Max Profit With K Transactions",
    "Palindrome Partitioning Min Cuts",
    "Longest String Chain",
    "Knuth–Morris–Pratt",
    "Rectangle Mania",
    "Merge Sorted Arrays",
    "LRU Cache",
    "Rearrange Linked List",
    "Number Of Binary Tree Topologies",
    "Merge Sort",
    "Smallest Substring Containing"

],
 "Z:/Courses/AlgoExpert - 150 Coding Interview Questions 2021-3/04-Very Hard");