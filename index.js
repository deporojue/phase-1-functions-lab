function distanceFromHqInBlocks(pickUpStreet) {
    return Math.abs(pickUpStreet-42);
}

console.log(distanceFromHqInBlocks(80))
console.log(distanceFromHqInBlocks(20))



function distanceFromHqInFeet(pickUpStreet) {
    return distanceFromHqInBlocks(pickUpStreet)*264;
}

console.log(distanceFromHqInFeet(80))

function distanceTravelledInFeet(start,end) {
    let blocks=Math.abs(start-end);
    return blocks * 264;
}

console.log(distanceTravelledInFeet(20,55))

function calculatesFarePrice(start,end) {
    let distance=distanceTravelledInFeet(start,end);
    switch (true) {
        case distance<=400:
            return 0;
            break;
        case distance>400 && distance<2000:
            return 0.02*(distance-400);
            break;
        case distance>=2000 && distance<=2500:
            return 25;
            break;
        case distance>2500:
            return "cannot travel that far";
            break;
    }
}

console.log(calculatesFarePrice(20,25))
