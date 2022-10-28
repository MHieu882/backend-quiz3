class Scale {
    static listempty = [];
    static weighterr=[1,3];
    constructor() {
        let num = 12;
        let weight = 2;
        for(let i=0;i<num;i++){
            Scale.listempty.push(weight);
        }
        Scale.listempty[Math.floor(Math.random()*Scale.listempty.length)]=Scale.weighterr[Math.floor(Math.random()*Scale.weighterr.length)];
    }
    getlist() {
        return Scale.listempty; 
    }
    static weight(left,right){
        let leftweight=0;
        let rightweight=0;
        for (let i = 0; i < left.length; i++){
            leftweight=leftweight+ left[i];
        }
        for (let i = 0; i < right.length; i++){
            rightweight=rightweight+ right[i];
        }
        if(leftweight>rightweight)
            return {leftweight:'Nang',rightweight:'Nhe'};
        else if(leftweight<rightweight)
            return {leftweight:'Nhe',rightweight:'Nang'};
        else
            return {leftweight:'Bang',rightweight:'Bang'};
    }
    static CheckResult(Listofcoin) {
        for (let i = 0; Listofcoin.length; i++) {
        if (Listofcoin[i]>2) return {Nang: i+1};
        if(Listofcoin[i]<2) return {Nhe: i+1};
        }
  }
                
}
module.exports= Scale;


