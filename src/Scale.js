import _ from 'lodash';

class Scale {
  constructor() {
    this.list = [];
    this.weight = 2;
    this.weighterr = [1, 3];
    for (let i = 0; i < 12; i++) {
      this.list.push(this.weight);
    }
    this.list[Math.floor(Math.random() * this.list.length)] = this.weighterr[Math.floor(Math.random() * this.weighterr.length)];
  }

  static weight(left, right) {
    let leftweight = 0;
    let rightweight = 0;
    for (let i = 0; i < left.length; i++) {
      leftweight += left[i];
    }
    for (let i = 0; i < right.length; i++) {
      rightweight += right[i];
    }
    if (leftweight > rightweight) return { leftweight: 'Nang', rightweight: 'Nhe' };
    if (leftweight < rightweight) return { leftweight: 'Nhe', rightweight: 'Nang' };
    return { leftweight: 'Bang', rightweight: 'Bang' };
  }

  static CheckResult(Listofcoin, result) {
    for (let i = 0; Listofcoin.length; i++) {
      if (Listofcoin[i] > 2) return _.isEqual({ Nang: i + 1 }, result);
      if (Listofcoin[i] < 2) return _.isEqual({ Nhe: i + 1 }, result);
    }
  }
}
export default Scale;
