function solution(N) {
    const binary = N.toString(2);
    let maxGap = 0;
    let currentGap = 0;

    for (let digit of binary) {
        if (digit === '1') {
            if (currentGap > maxGap) {
                maxGap = currentGap;
            }
            currentGap = 0;
        } else {
            currentGap++;
        }
    }

    return maxGap;
}


solution(1041)
