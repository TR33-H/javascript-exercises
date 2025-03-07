const findTheOldest = function(people) {
    let oldest = 0;
    let oldestName = "nobody";
    for(peeps in people){
        
       
        if(people[peeps].yearOfDeath == undefined){
            let d = new Date();
            let year = d.getFullYear();
            people[peeps].yearOfDeath = year;
        }
        let age = people[peeps].yearOfDeath - people[peeps].yearOfBirth;
        
        if(age > oldest){
            oldest = age;
            oldestName = people[peeps];
            
        }
        
    }
    
    return oldestName;
};

// Do not edit below this line
module.exports = findTheOldest;
