/****************************************************************************************************
*** File Name:      sleepDebtCalculator.js
*** Description:    Program that determines the actual and ideal hours of sleep for each night of the last week
                    It also calculates how far you are from your weekly sleep goal
*** Author:         Samuel Villajos
*** Date:           2021-09-13
*****************************************************************************************************/


const getSleepHours = (day) => {
    switch (day) {
        case 'Monday':
            return 8;
            break;
        case 'Tuesday':
            return 7;
            break;
        case 'Wednesday':
            return 6;
            break;
        case 'Thursday':
            return 7;
            break;
        case 'Friday':
            return 8;
            break;
        case 'Saturday':
            return 9;
            break;
        case 'Sunday':
            return 9;
            break;
        default: 
            return 'Error!'
    };
}
  


const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday') 
}

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect hours!');
  }  else if (actualSleepHours > idealSleepHours) {
    console.log('You\'ve got ' + (idealSleepHours - actualSleepHours) + ' more hours of sleep this week');
  }  else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some sleep because you slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week');
  } else {
    console.log('Error'); 
  }
};

console.log('Actual: ' + getActualSleepHours());
console.log('Ideal: ' + getIdealSleepHours());
calculateSleepDebt();

