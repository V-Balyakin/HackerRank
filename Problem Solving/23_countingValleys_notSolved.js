// The first line contains an integer n, the number of steps in Gary's hike.
// The second line contains a single string s, of n characters that describe his path.
const n = 8,
    s = 'UDDDUDUU', // 1
    s2 = 'DDUUDDUDUUUD', // 2
    s3 = 'DDUDUDDUDDUDDUUUUDUDDDUUDDUUDDDUUDDUUUUUUDUDDDDUDDUUDUUDUDUUUDUUUUUDDUDDDDUDDUDDDDUUUUDUUDUUDUUDUDDD', // ?
    // s3 = 'DDUDUDDUDDUDDUUUU | DU DDD UU DD UU DDD UU DD UUUU | UU DUDD | DD UDD UU D UU | DU | DUUU D UUUUU DD U DDDD U DD | U DDDD UUU | U D UU D UU D UU D U DDD',
    s4 = 'DDDUUUUUDDDUUDUDDDUUDUUDDDUUDDDDDUDDUUDUDDUDUDDUDDDUDUUDUDUDDUDDDDDDDUUUUUUUUDUUDUUUUDUDDDUDDUUDUDDUDUDUUUUUUDUDDDDDDUDDDUUUDDUDDUDDUUUUDDDDUDUUUUUDUUDUDDUUUDUUUDDUDDDDUUUUDDDDDDUUUUDDDDUDDUUDDDDUUDUDDUUDUUUDUUUUDDUDDDDUUDUDDDDDUDUDUDUUDDUDUDDUDDDDUDUDUDUUUDDDDDUUUDDDUDDDUDDDDUDUDUDDUDDDDDDUDUDUDDDDDDUUUDDDUDUUDDDDUDUDDDDDUDDUUDUDDDDUDDDUUUUUDUDDUDUUDUDDDDUUUUDDDUDUUUUUUUDUUDDDUDUDDDDUDDUUDDDDDUDDUUUUDUUDUDDUDUUDDUUUDUUUUDDUUUUDDUUDUUUDUDUUUDUDDUDDDUDUUUUUUUUUUUDUDDUDDDDDUUDUDDUDDUDUDUUDDDDUUUDDUDDUDDUUDUUUDUDUUUUUDDUUDUUDUDDUDUUUUUUDDDDUUUDDUDUUUUUUUDDUUDDUUUUUDDUUDUUUDDUDUDUUDDDUDUUUUUUUDUUUUDDUDDDUDUUDUDDDUDUUUDUUUDDDUDDUUUUUDUUDDDDDDUUDDUDUDDUDUDUDDUDUDUUUDUDUUDUDUUDUDUDDDDUUUUDDDUUDUUDDUDUDUUDUDUUUDDUUUDUDUDDDUDDUUUDUDUUUDDUDUDUDDUUDDDDUUUUUDUDUUDUDUUDDDDUDDDUDUUUUUDDDUDDDDUUDDUUDUUUUUUDDUUDDUUUUUUUDUDDUDDDDDDDUDDDDUDUDUDUUDUDDDUDUUUUDDUUUDUDUDUUDDDDDUUUUUUDUDDUDUDDUDDUDUUDUDUUUUUDUDDDDUUUDDUUDDDUUUUDUDDDUDDUUUDDDDUDDDUDDDUUDDDDUUDDDUDDDUUUUUUDUDUUDUUDUDDDUDUUDDUDDDDUDUDUUUUUUUUUU'; // 18


function countingValleys(n, s) {
    let array = s.split(''),
        level = 0,
        counter = array[0] === 'D' ? 1 : 0;
    for (const item of array) {
        level = item === 'U' ? ++level : --level;
        counter = level === 0 ? ++counter : counter;
    }
    console.log(counter);
    return Math.round(counter / 2);
}

console.log(countingValleys(n, s2));