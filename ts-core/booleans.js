var isSuperman = true;
var getHeroValidation = function () {
    if (isSuperman) {
        console.log('Hero Detected');
    }
    else {
        console.log('Opps');
    }
};
getHeroValidation();
var transformClark = function () {
    return false;
};
isSuperman = transformClark();
getHeroValidation();
