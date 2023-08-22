'use strict';
/*
    local storage is used to store the data even after 
    the page has been refreshed or window has been closed...
    we can save the data in local storage upto 5Mb...
    and these datas can be accessed from anywhere in the website...
    it is primitive data storage method, and uses key value pair to store the data..
    it is suitable to store limited amount of data only...


*/

// localStorage.setItem("userName", "rajibPokhrel"); // to save the data in key value pairs
// console.log(localStorage.getItem("userName")); // to show the data using the keys of data
// localStorage.clear(); // to clear the items in the local storage


var myLeads = `["www.facebook.com"]`;

myLeads = JSON.parse(myLeads);
myLeads.push("www.instagram.com");
myLeads = JSON.stringify(myLeads);
console.log(myLeads);
