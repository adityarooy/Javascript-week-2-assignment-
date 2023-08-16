const userlist = [
    "John", 
    "Peter", 
    "Mithun", 
    "Prabin", 
    "Shivam",
];
function isUserPresent(user){
    if (userlist.includes(user)) {
        console.log(`Yes ${user} is a valid user`);
    }else{
        console.log(`No, ${user} is not a valid user.`);
    }
}

isUserPresent("Mithun")
isUserPresent("someone")