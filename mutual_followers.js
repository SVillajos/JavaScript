/****************************************************************************************************
*** File Name:      mutual_followers.js
*** Description:    Program that creates mutual follower list between two peoples friends
*** Author:         Samuel Villajos
*** Date:           2021-09-13
*****************************************************************************************************/

const bobsFollowers = ["Rick", "Morty", "Jerry", "Beth"];   // Array to hold Bobs followers
const tinasFollowers = ["Summer", "Morty", "Beth"];         // Array to hold Tinas followers
const mutualFollowers = [];                                 // Blank array used to store mutual followers

for (i = 0; bobsFollowers.length; i++) {
  for (j = 0; tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
      console.log(mutualFollowers);
    }
  }
};



