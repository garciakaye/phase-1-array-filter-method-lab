//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string) {
    const listOfDrivers = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return listOfDrivers;
}

function fuzzyMatch(drivers, string) {
    const fuzzyDrivers = drivers.filter(providedLetters => providedLetters.substring(0,2)  === string)
    return fuzzyDrivers;
}   
    
function matchName(driver, string){
    const nameMatch = driver.filter(el => el.name === string)
    return nameMatch;
}





