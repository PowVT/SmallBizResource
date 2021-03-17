// SIMPLE ERP (Enterprise Resource Planning) type functions for small businesses.


/**
 * This function should calculate the total amount of food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals to feed
 * @param avgFood the average amount of food (in kilograms) eaten by each animal
 * 				  each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 	       week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    if(Number(numAnimals) >= 0 && Number(avgFood) > 0) {
        return numAnimals*avgFood
    }
    else{
        return -1
    }
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
    if (week != null && week.length > 0) {                //protect against invaid inputs
        var highest_traffic_days = [];                      //initialize array
        var max_traffic = week[0].traffic;                  //set max traffic variable equal to first array element
        for (var i = 0; i < week.length; i++) {
            if (week[i].traffic > max_traffic) {            // if next element is greater set as max traffic
                var max_traffic = week[i].traffic;      
            }
        }
        for (var j = 0; j < week.length; j++) {             //go back and find all the instances in the list of max traffic value
            if (week[j].traffic === max_traffic) {
                highest_traffic_days.push(week[j].name);    //add to list if equal to max traffic variable 
            }
        }
        if (highest_traffic_days.length == 1) {             //display pref
            return highest_traffic_days[0]
        }
        else{
            return highest_traffic_days                      //display array
        }
    }
    else{
        return null                                          //invalid input
    }
}


/**
 * Generate Objects of pets in a pet store or change the names and it can be any type of store!
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    var animalObjects = [];
    while (names != null && breeds != null && types != null) {
        if (names.length == types.length && types.length == breeds.length && names.length>0 && types.length>0 && breeds.length>0) {
            for (var i = 0; i < names.length; i++) {
                if (names[i] == null || types[i] == null || breeds[i] == null) {
                    animalObjects = [];
                    return animalObjects
                }
                var animal = {
                    name: names[i],
                    type: types[i],
                    breed: breeds[i]
                };
                animalObjects.push(animal);
            }
            return animalObjects
        }
        else{
            return animalObjects
        }
    }
    return animalObjects
}

///////////////////////////////////////////////////////////////////////////////////////////////

/**
* A prototype to create Weekday objects
*/
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
* A prototype to create Item objects
*/
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}

/**
* A prototype to create Animal objects
*/
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}
