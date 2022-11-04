 const assert = require('assert').strict;   // Using Assert style
const { should }= require ('chai');
const Scale =require('../src/Scale');
const FindErrcoin =require('../src/Findbalance');
const _ = require('lodash')
;
should();
describe('Scale',function(){
    describe('Test create list of coin',()=>{
        it('Should be create a list has 11 coin normal and 1 coin err',()=>{    
            const scale = new Scale();
            assert(scale.list.length==12);
        })        
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