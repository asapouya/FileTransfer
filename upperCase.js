module.exports = (array) => {

    let splittedWords = []
    let upperCaseWords = [];
    let joinedUpperCase = [];
    let finalArray = []; 

    array.forEach(element => {

        splittedWords = element.split(" ");
        
        splittedWords.forEach(element => {

            upperCaseWords.push(element.charAt(0).toUpperCase() + element.slice(1));  //Nested loop O(n^2)
        });
        joinedUpperCase = upperCaseWords.join(" ");
        finalArray.push(joinedUpperCase);
        upperCaseWords = [];
    });
    return finalArray;
}