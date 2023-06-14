const search = prompt("Enter BlooD Group");

/**
 * Assignment 01 : Now find members by blood group those who are ready to donate blood.
 */

// Members Ready to donate blood
const search_result = BloodDonationClubMembers.filter(
  (data) => data.blood_group === search && data.last_donate >= 120
);

//final result
const finalResult = [];

// get data
search_result.forEach((item) => {
  finalResult.push(item);
});

console.log(`============================================================`);
console.log(
  `List of ${search} Blood Group Members Who Are Ready to Donate Blood:`
);
console.log(`============================================================`);
console.table(finalResult);

/**
 * Assignment 02 : Search member by using their phone number with donation history
 */

const phone = prompt("Enter Phone Number");

const searchByPhoneNo = BloodDonationClubMembers.filter(
  (data) => data.cell === phone
);

console.log(`Donar With Phone : ${phone}`);
console.log(`============================================================`);
console.table(searchByPhoneNo);

console.log(`============================================================`);
console.log(`Donation History`);
searchByPhoneNo.forEach((value) => {
  console.table(value.donation_history);
});
