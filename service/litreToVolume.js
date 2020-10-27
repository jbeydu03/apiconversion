const cubeToLitre = (volume,uniteEntrant,uniteSortant) => {
    return volume * getRapportConversion(uniteEntrant,uniteSortant);
}

const getRapportConversion = (uniteEntrant,uniteSortant)=>{
    if(uniteEntrant==="ml"){
        if(uniteSortant==="mm3"){
            return 1000;
        }
        if(uniteSortant==="cm3"){
            return 1;
        }
        if(uniteSortant==="dm3"){
            return 0.001;
        }
        if(uniteSortant==="m3"){
            return 0.000001;
        }
    }
    if(uniteEntrant==="cl"){
        if(uniteSortant==="mm3"){
            return 10000;
        }
        if(uniteSortant==="cm3"){
            return 10;
        }
        if(uniteSortant==="dm3"){
            return 0.01;
        }
        if(uniteSortant==="m3"){
            return 0.00001;
        }
    }

 
    if(uniteEntrant==="dl"){
        if(uniteSortant==="mm3"){
            return 100000;
        }
        if(uniteSortant==="cm3"){
            return 100;
        }
        if(uniteSortant==="dm3"){
            return 0.1;
        }
        if(uniteSortant==="m3"){
            return 0.0001;
        }
    }   
}
module.exports = {cubeToLitre};