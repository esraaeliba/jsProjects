function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;

    for (let i = 0; i < apples.length; i++) {
        let applePos = a + apples[i];
        if (applePos >= s && applePos <= t) {
            appleCount++;
        }
    }

    for (let i = 0; i < oranges.length; i++) {
        let orangePos = b + oranges[i];
        if (orangePos >= s && orangePos <= t) {
            orangeCount++;
        }
    }

    console.log(appleCount);
    console.log(orangeCount);
}


const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];


countApplesAndOranges(s, t, a, b, apples, oranges);
