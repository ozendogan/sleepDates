/*
Sleep Debt Calculator

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/






function getSleepHours (day) { // real sleep hours 
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  }else if (day === 'wednesday') {
    return 8;
  }else if (day === 'thursday') {
    return 8;
  }else if (day === 'friday') {
    return 8;
  }else if (day === 'saturday') {
    return 8;
  }else if (day === 'sunday') {
    return 8;
  }else {
    return 'bir hata olustu';
  }
 

};

function getActualSleepHours () { // total real hours
  const toplam = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return toplam;
}

function getIdealSleepHours () { // ideal sleep hours
  const idealHours = 7.5;
  return idealHours * 7;
};

function calculateSleepDebt () { // real and ideal hours has convert to other variable. 

  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('you have sleep excellent!');
  }else if (actualSleepHours > idealSleepHours) {
    console.log('you have more sleep than normally! You slept more than '+ (actualSleepHours - idealSleepHours) + '  hour.');
  }else if (actualSleepHours < idealSleepHours) {
    console.log('you have sleep less than normally You slept more than '+ (idealSleepHours - actualSleepHours) + '  hour.');
  }else {
    console.log( 'error!');
  }
}

calculateSleepDebt(); // calling function

