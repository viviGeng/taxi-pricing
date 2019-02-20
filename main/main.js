function main(miles,waiting){
    let charge=0;
    if(miles <= 2){
        charge=6;
    }
    else if(miles <=8){
        charge=6+0.8*(miles-2);
    }
    else{
        charge=6+0.8*6+1.2*(miles-8);
    }
    charge=charge+0.25*waiting;
    return Math.round(charge);
}
module.exports=main;