// ------------------------- QUESTION 1 -------------------------

function add(num1){
    return function (num2){
        return num1 + num2; 
    }
}
 
const result = add(2);
console.log(result(4));

// ----------------------- QUESTION 2 ---------------------------- 

let cities = ["Lahore", "Hyderabad", "Karachi" , "Sukkur","Faislabad"];
let i = 0;
found = false; 
length = cities.length;

function Search(cityName){

    if ( i > length ){
        console.log(found);
        return; 
    }

    if ( cities[i] === cityName ){
        found = true;
        console.log(found);
        console.log("index: "+ i);
    }
    if (found !== true){
        i = i + 1;
        Search(cityName);
    }
}

Search("Karachi");
// Search("Rohri");

// ------------------------- QUESTION 3 ---------------------------- 

function addParagraphBottom(yourPara){
    let paragraph = document.createElement("p");
    paragraph.textContent = yourPara; 
    paragraph.style.position = "fixed";
    paragraph.style.bottom = 0;
    paragraph.textContent = yourPara;

    document.body.appendChild(paragraph);
    
}

addParagraphBottom("This is my paragraph that i am adding through javascript.");


//------------------------- QUESTION 4 ---------------------------- 

function addList(nameList){
    let newItem = document.createElement("li");
    let list = document.getElementById("my-list");
    newItem.textContent = nameList;
    list.appendChild(newItem);
    
}

addList("JavaScript");

// --------------------------- QUESTION 5 ---------------------------------- 

function changeBgColor(element , bgColor ){

    let background = document.querySelector(element);
    background.style.backgroundColor = bgColor;
}

changeBgColor("p","#F8F8F8");


// -------------------------------- QUESTION 6 ---------------------------

//Creating a object to store it in local storage

let Person = {
    name: "Umair Khalil",
    phoneNumber: 12356789,
    dateOfBirth : "20-Sep-2002",
    language : "Urdu"
}

function storeLocalStorage(key , object){
    let parseObject = JSON.stringify(object);
    localStorage.setItem(key , parseObject);
}

storeLocalStorage("firstPerson" , Person);



// -------------------------------- QUESTION 7 ---------------------------

//retrieving the same object from local storage that was created in question 6 

function retrievingLocalStorage(key){
    
    let retrieveObject = localStorage.getItem(key);
    return JSON.parse(retrieveObject);

}
console.log(retrievingLocalStorage("firstPerson"));


// -------------------------------- QUESTION 8 ---------------------------

let Vehicle = {
    Auto: true,
    Brand: "Toyota",
    Model: "Corolla",
    Year: 2021,
    EngineSizeCC : 1600
}


function objectPropertyStorage(objectName){

    // storing key and value in local storage

    for (const key in objectName) {
        if (objectName.hasOwnProperty(key)) {
            localStorage.setItem(key, objectName[key]);
        }
    }

    // creating new object for storing
    let newObject = { }
    
    // retrieving values from local storage 
    for (const key in localStorage){
        if (localStorage.hasOwnProperty(key)){
            newObject[key] = localStorage.getItem(key);
        }
    }
    
    // checking whether new object has retrieved values sucessfully 
    console.log(newObject);
}

objectPropertyStorage(Vehicle);





