import assert from ('assert').strict;   // Using Assert style
import Scale from '../src/Scale.js';
import FindErrcoin from '../src/Findbalance.js';
const _ = require('lodash');
describe('Scale',function(){
    describe('Scale', () => {
        it('Should be create a list has 12 coin within 11 coin err', () => {
          const scale = new Scale();
          const listcoin = scale.list;
          const countcoin = _.countBy(listcoin);
          assert.strictEqual(listcoin.length, 12);
          assert.strictEqual(countcoin[2], 11);
        });
             
    });
    describe('Test Weigh in scale',()=>{
        it('Should be return leftwirght and rightweight nang, nhe or bang',()=>{    
            const gr1=[1,2,3];
            const gr2=[1,2,4];
            const rs=Scale.weight(gr1,gr2)
            assert(_.isEqual(rs,{ leftweight: 'Nhe', rightweight: 'Nang' }));
        })        
    });
    describe("Test check result",()=>{
        it('Should be return result same with check',()=>{    
            const gr1=[2,2,3,2,2,2,2,2,2,2,2,2];
            const result={Nang:3};
            const rs=Scale.CheckResult(gr1,result)
            assert(rs==true);
        })   
     });
   
})
describe('Findbalance',()=>{
    it('shout be return result about location and what err of coin',()=>{  
        const gr1=[2,2,3,2,2,2,2,2,2,2,2,2];
        assert(_.isEqual(FindErrcoin(gr1),{ Nang: 3 }));     
    })
})