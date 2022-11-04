const Scale  = require('./Scale.js');
const _= require('lodash');

function FindErrcoin(Listofcoin) {
  const left = [Listofcoin[0], Listofcoin[1], Listofcoin[2], Listofcoin[3]];
  const right = [Listofcoin[4], Listofcoin[5], Listofcoin[6], Listofcoin[7]];
  const Firstweigh = Scale.weight(left,right);
  if (Firstweigh.leftweight === 'Bang') {
    const left = [Listofcoin[0], Listofcoin[1], Listofcoin[2]];
    const right = [Listofcoin[8], Listofcoin[9], Listofcoin[10]];
    const Secondweigh = Scale.weight(left, right);
    if (Secondweigh.leftweight === 'Bang') {
      const left = [Listofcoin[10]];
      const right = [Listofcoin[11]];
      const Thirdweigh = Scale.weight(left, right);
      if (Thirdweigh.leftweight === 'Nang') return { Nhe: 12 };
      return { Nang: 12 };
    }
    if (Secondweigh.leftweight === 'Nang') {
      const left = [Listofcoin[8]];
      const right = [Listofcoin[9]];
      const Thirdweigh = Scale.weight(left, right);
      if (Thirdweigh.rightweight === 'Nang') {
        return { Nhe: 9 };
      }
      if (Thirdweigh.rightweight === 'Nhe') {
        return { Nhe: 10 };
      }
      return {
        Nhe: 11,
      };
    } else {
      const left = [Listofcoin[8]];
      const right = [Listofcoin[9]];
      const Thirdweigh = Scale.weight(left, right);
      if (Thirdweigh.leftweight === 'Nhe') {
        return { Nang: 10 };
      }
      if (Thirdweigh.leftweight === 'Nang') {
        return { Nang: 9 };
      }
      return {
        Nang: 11,
      };
    }
  }
  if (Firstweigh.leftweight === 'Nang') {
    const left = [Listofcoin[0], Listofcoin[4], Listofcoin[5]];
    const right = [Listofcoin[1], Listofcoin[6], Listofcoin[7]];
    const Secondweigh = Scale.weight(left, right);
    if (Secondweigh.leftweight === 'Nang') {
      // 0 nang hoac 5,7 nhe
      const left = [Listofcoin[6]];
      const right = [Listofcoin[7]];
      const Thirdweigh = Scale.weight(left, right);
      if (Thirdweigh.leftweight === 'Nhe') {
        return {
          Nhe: 7,
        };
      }
      if (Thirdweigh.leftweight === 'Nang') {
        return { Nhe: 8 };// 1nang
      }

      return { Nang: 1 };
    }
    if (Secondweigh.leftweight === 'Nhe') {
      // 1 nang hon hoac 4 5 nhe hon
      const left = [Listofcoin[4]];
      const right = [Listofcoin[5]];
      const Thirdweigh = Scale.weight(left, right);
      if (Thirdweigh.leftweight === 'Bang') {
        return {
          Nang: 2,
        };
      }
      if (Thirdweigh.leftweight === 'Nhe') {
        return { Nhe: 5 };
      }
      return { Nhe: 6 };
    // eslint-disable-next-line no-else-return
    } if (Secondweigh.leftweight === 'Bang') {
      // bang suy ra 1 2,3 nang hon
      const left = [Listofcoin[2]];
      const right = [Listofcoin[3]];
      const Thirdweigh = Scale.weight(left, right);
      if (Thirdweigh.leftweight === 'Nang') {
        return { Nang: 3 };
      }
      if (Thirdweigh.leftweight === 'Nhe') {
        return { Nang: 4 };
      }
    }
  }
  if (Firstweigh.leftweight === 'Nhe') {
    const left = [Listofcoin[0], Listofcoin[4], Listofcoin[5]];
    const right = [Listofcoin[1], Listofcoin[6], Listofcoin[7]];
    const Secondweigh = Scale.weight(left, right);
    if (Secondweigh.leftweight === 'Nhe') {
      // 0 nang hoac 45 nhe
      const left = [Listofcoin[6]];
      const right = [Listofcoin[7]];
      const Thirdweigh = Scale.weight(left, right);
      if (Thirdweigh.leftweight === 'Nang') {
        return {
          Nang: 7,
        };
      }
      if (Thirdweigh.leftweight === 'Nhe') {
        return {
          Nang: 8,
        };
      }
      return { Nhe: 1 };// ///fix xong
    }
    if (Secondweigh.leftweight === 'Nang') {
      // // 4 5 nag 1 nhe
      const left = [Listofcoin[4]];
      const right = [Listofcoin[5]];
      const Thirdweigh = Scale.weight(left, right);
      if (Thirdweigh.leftweight === 'Nang') {
        return {
          Nang: 5,
        };
      }
      if (Thirdweigh.leftweight === 'Nhe') {
        return { Nang: 6 };
      }
      return { Nhe: 2 };
    // eslint-disable-next-line no-else-return
    } else {
      const left = [Listofcoin[2]];
      const right = [Listofcoin[3]];
      const Thirdweigh = Scale.weight(left, right);
      if (Thirdweigh.leftweight === 'Nhe') { return { Nhe: 3 }; }
      return { Nhe: 4 };
    }
  }
}
// let count=0;
// for(let i=1;i<1000;i++){
//   const scale = new Scale()
//   const Listofcoin=scale.list
//   const checkrs=Scale.CheckResult(Listofcoin,FindErrcoin(Listofcoin))
//   console.log(checkrs)
// }
module.exports= FindErrcoin;
