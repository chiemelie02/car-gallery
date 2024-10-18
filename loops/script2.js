// For loop 
// const ages = []
// for(let i = 0; i <= ages.length; i++){
//     if(ages[i] % 2 === 0){
//         console.log(ages[i])
//     }
// }


// While loop 
// const ages = [2,23,22,10,60,35,46,80]
// let i = 10;
// while(i >= 1){
//     console.log(i)
//     i--
// }

// let i = 0;
// while(i < ages.length){
//     if(ages[i] % 2 === 0){
//         console.log(ages[i])
//     };
//     i++;
// }



// Do... while loop (This will always print out the condition in "do" part before moving to the "while" part)
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i <= 10);

// Advanced array methods 
const ages = [2,23,22,10,60,35,46,80]
// For each array method 
// for (let i = 0; i < ages.length; i++){
//     console.log(ages[i]);
// }

// const outPut = ages.forEach(function(ageNumber){
//     console.log(ageNumber);
// });

// ages.forEach(function(ageNumber){
//     console.log(ageNumber);
// });

// ages.forEach(ageNumber => {
//     console.log(ageNumber);
// });


// The longer method of for each
// const outPut = function studentAge(ageNumber){
//     console.log(ageNumber);
// }
// ages.forEach(outPut);

// Map array method (this displays the results in a new array method by changing every items in the original list)
// const outPut = ages.map(age=> age*2);
// console.log(outPut);


// Filter array method (This creates a new array but only allows the items that meets the condition)
// Example for ages above 18 
// const outPut = ages.filter(function(ageNumber){
//     return ageNumber>=18;
// });
// console.log(outPut);

// Or 

// const outPut = ages.filter(ageNumber=> ageNumber>=18 );
// console.log(outPut);


// Reduce method array 
// const outPut = ages.reduce(function(total, current){
//     return total + current;
// }, 10);
// console.log(outPut);

// Sort array method (mainly used for sorting in ascending or descending order) 
const students = ['fred', 'mac', 'jacob', 'anthony'];
// const outPut = students.sort();
// console.log(outPut);

// const result = ages.sort(function(a,b){
//     return a-b;
// })
// console.log(result);

// Some and every array method 
// const result = ages.some(function(age){
//     return age>100;
// });
// console.log(result);

// const result = ages.every(function(age){
//     return age>100;
// });
// console.log(result);

// Find array method 
// const outPut = students.find(function(student){
//     return student === 'anthony';
// });
// console.log(outPut);

// Array of objects 
const companies = [
    {
        name: 'MTN',
        yearFounded: 1995,
        location: 'South Africa',
        owner: 'Fred',
        annualRevenue: 10000000
    },
    {
        name: 'Airtel',
        yearFounded: 1998,
        location: 'Nigeria',
        owner: 'Airtelng',
        annualRevenue: 10000000
    },
    {
        name: 'Dangote Sugar',
        yearFounded: 1995,
        location: 'Nigeria',
        owner: 'Dangote',
        annualRevenue: 50000000
    },
    {
        name: 'Dangote Cement',
        yearFounded: 1990,
        location: 'Nigeria',
        owner: 'Dangote',
        annualRevenue: 100000000
    },
    {
        name: 'Tesla',
        yearFounded: 2005,
        location: 'USA',
        owner: 'Elon Musk',
        annualRevenue: 1000000000
    }
]
// To display individual components from each Object, we can use for each method or map method 
// foreach method 
// companies.forEach(function(company){
//     // console.log(company.name)
//     console.log(`${company.name} - ${company.location}`)
// });

// Map method
// let outPut = companies.map(function(company){
//     return company.name
// }); 
// console.log(outPut)

// Reduce 
// const totalRevenue = companies.reduce(function(total,company){
//     return total + company.annualRevenue
// }, 0);
// console.log(totalRevenue)

// Filter 
// Companies with owners as Dangote 
// const dangoteCompany = companies.filter(function(company){
//     return company.owner === 'Dangote'
// });
// console.log(dangoteCompany);

// Companies with location in Nigeria 
// const nigerianCompanies = companies.filter(function(company){
//     return company.location === 'Nigeria';
// })
// console.log(nigerianCompanies);

// Companies founded after the year 2000 
// const yearAfter2000 = companies.filter(function(company){
//     return company.yearFounded > 2000;
// })
// console.log(yearAfter2000);

// For loop 
// for(let i = 0; i < companies.length; i++){
//     if(companies[i].location === 'Nigeria'){
//         console.log(companies[i])
//     }
// }