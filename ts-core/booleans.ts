let isSuperman:boolean = true;

const getHeroValidation = () => {
    if(isSuperman){
        console.log('Hero Detected')
    }else {
        console.log('Opps')
    }
}

getHeroValidation();

const transformClark = () => {
    return false;
}

isSuperman = transformClark();

getHeroValidation();
