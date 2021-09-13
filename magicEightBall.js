/****************************************************************************************************
*** File Name:      magicEightBall.js
*** Description:    Program that creates mutual follower list between two peoples friends
*** Author:         Samuel Villajos
*** Date:           2021-09-13
*****************************************************************************************************/

    let userName = '';
    const userQuestion = 'Will I be rich?'
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';

    userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

    if (userName) {
    console.log(`The ${userName} asked: ${userQuestion}`)
    } else {
    console.log('The user asked: ' + userQuestion);
    }

    switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Cannot predict now';
        break;
    case 3:
        eightBall = 'It is unlikely';
        break;
    case 4:
        eightBall = 'My sources say no';
        break;
    case 5:
        eightBall = 'Signs point to yes';
        break;
    case 6:
        eightBall = 'I wouldn\'t count on it';
        break;
    }

    console.log(`The eight ball answered: ${eightBall}`);