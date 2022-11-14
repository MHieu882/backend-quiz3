<!-- TABLE OF CONTENTS -->
## Table of Contents
  - [Quiz 1 requirement](#quiz1-requirement)
  - [Quiz 2 requirement](#quiz2-requirement)
  - [Quiz 1 Answer](#quiz-1-answer)
    - [JS Native](#js-native)
    - [LoDash](#lodash)
    - [Comparison](#comparison)
<!-- overview -->
## Quiz 1 Answer
### Js Native
1. **every()**

    Method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
    ```js
    const isBelowThreshold = (currentValue) => currentValue < 40;

    const array1 = [1, 30, 39, 29, 10, 13];

    console.log(array1.every(isBelowThreshold));
    // expected output: true
    ```
2. **some()**

    The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
    ```js
    const array = [1, 2, 3, 4, 5];

    // checks whether an element is even
    const even = (element) => element % 2 === 0;

    console.log(array.some(even));
    // expected output: true
    ```
3. **includes()**

    Method determines whether an array includes a certain value among its entries, return bolean.
    ```js
    const array1 = [1, 2, 3];

    console.log(array1.includes(2));
    // expected output: true

    const pets = ['cat', 'dog', 'bat'];

    console.log(pets.includes('cat'));
    ```
4. **reduce()**

    The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. If you make change to the element when accumulate, the original element will also be changed. Without the inital value, the reduce function will carry out with the first 2 elements. The third element if map function has will be from 0..n. The fourth element is the object that call the map function.
    ```js
    const array1 = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

    console.log(sumWithInitial);
    // expected output: 10
    ```
5. **length()**

    Return length of  array

    ```js
    const arr = [1,2,3,4,9];
    arr.length; // output: 5
    ```
6. **reverse()**

    The reverse method reverse all elementts of array ( first to last,.. )
    ```js
    const arr = [1, 2, 3, 4, 5];
    arr.reverse(); // arr: [5, 4, 3, 2, 1]
    ```
7. **push()**

    Adds one or more elements to the end of an array and returns the new length of the array.

    ```js
    const animals = ['pigs', 'goats', 'sheep'];
    animals.push('chickens', 'cats', 'dogs');
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
    ```
8. **pop()**

    The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
    ```js
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

    console.log(plants.pop());
    // expected output: "tomato"
    ```
9. **map**

    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
    ```js
    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]

    ```
10. **sort()**

    The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    ```js
    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months);
    // expected output: Array ["Dec", "Feb", "Jan", "March"]
    ```

[back to Top](#table-of-contents)
#### JS-Native Object

1. Object.assign()

    The method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

    ```js
      const target = { a: 1, b: 2 };
      const source = { b: 4, c: 5 };
      
      Object.assign(target, source);
      // {a: 1, b: 4, c: 5};

    ```

2. Object.create()

    The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. The element are shallow copied.

    ```js
      const person = {
        isHuman: false,
        printIntroduction: function() {
          console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
      };

      const me = Object.create(person);

      me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
      me.isHuman = true; // inherited properties can be overwritten

      me.printIntroduction();
      // expected output: "My name is Matthew. Am I human? true"
    ```

3. Object.entries()

    The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```js
      const object1 = {
        a: 'somestring',
        b: 42
      };

      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }

      // output:
      // "a: somestring"
      // "b: 42"  
    ```

4. Object.getOwnPropertyNames()

    The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```js
      const object1 = {
        a: 'somestring',
        b: 42
      };

      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }
      
      // output:
      // "a: somestring"
      // "b: 42"  
    ```
5. Object.entries()

    The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```js
      const object1 = {
        a: 'somestring',
        b: 42
      };

      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }
      
      // output:
      // "a: somestring"
      // "b: 42"  
    ```

6. Object.entries()

    The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

    ```js
      const object1 = {
        a: 'somestring',
        b: 42
      };

      for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }
      
      // output:
      // "a: somestring"
      // "b: 42"  
    ```
## LoDash
1. **_.difference**

    This function will return the first different element of array .

    ```js
    _.difference([2, 1], [2, 4]);
    // => [1]
    ```
2. **_.drop**

    Return the array with  n element dropped from begining

    ```js

    //_.fill(arry,value,[start=0],[end=array.length])

    _.drop([1, 2, 3]);
    // => [2, 3]
     
    _.drop([1, 2, 3], 2);
    // => [3]
     
    _.drop([1, 2, 3], 5);
    // => []
     
    _.drop([1, 2, 3], 0);
    // => [1, 2, 3]
    ```
3. **._fill**

    Fills elements of array with value from start up to, but not including, end.

    ```js 
    var array = [1, 2, 3];
 
    _.fill(array, 'a');
    console.log(array);
    // => ['a', 'a', 'a']
    ```

4. **._compact**

    remove falsey of array . The values false, null, 0, "", undefined, and NaN are falsey.

    ```js
    _.compact([0, 1, false, 2, '', 3]);
    // => [1, 2, 3]
    ```

5. **_.forEach**

    Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.

    ```js
    _.forEach([1, 2], function(value) {
      console.log(value);
    });
    // => Logs `1` then `2`.
    
    _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
      console.log(key);
    });
    // => Logs 'a' then 'b' (iteration order is not guaranteed)
    ```

6. **_.map**

    This method create new array by calling the provided function in every element. If you make change to the element while mapping, the original element will also be changed.

    ```js
      const arr = [1, 2, 3, 4, 5, 6]
      const newArr = arr.map(num => num*2); // newArr = [2, 4, 6, 8, 10, 12]
    ```
7. **._union**

    Create new array with unique value frome all given arrys
    ```js
    _.union([2], [1, 2]);
    // => [2, 1]
    ```
8. **._orderBy**

    Allows specifying the sort orders of the iteratees to sort by. If orders is unspecified, all values are sorted in ascending order.
    ```js
      var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
    ];
    
    // Sort by `user` in ascending order and by `age` in descending order.
    _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
    // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
    ```
9. **._sortBy**

    Creates an array of elements, sorted in ascending order by the results of running each element in a collection thru each iteratee
    ```js
    var users = [
      { 'user': 'fred',   'age': 48 },
      { 'user': 'barney', 'age': 36 },
      { 'user': 'fred',   'age': 40 },
      { 'user': 'barney', 'age': 34 }
    ];
    
    _.sortBy(users, [function(o) { return o.user; }]);
    // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
    
    _.sortBy(users, ['user', 'age']);
    // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
    ```
10. **._chain**

    Creates a lodash wrapper instance that wraps value with explicit method chain sequences enabled. The result of such sequences must be unwrapped with _#value.
    ```js
    var users = [
      { 'user': 'barney',  'age': 36 },
      { 'user': 'fred',    'age': 40 },
      { 'user': 'pebbles', 'age': 1 }
    ];
    
    var youngest = _
      .chain(users)
      .sortBy('age')
      .map(function(o) {
        return o.user + ' is ' + o.age;
      })
      .head()
      .value();
    // => 'pebbles is 1'
    ```
11. **._flatten**

    Flattens array a single level deep.

    ```js
    _.flatten([1, [2, [3, [4]], 5]]);
    // => [1, 2, [3, [4]], 5
    ```

12. **._shift()**

    Removes the firt element from an array and returns the removed element changing the array's length

    ```js
      const array = [1, 2, 3, 4];
      array.shift(); // This will return 1. array : [2, 3, 4]
    ```

[back to Top](#table-of-contents)

## LoDash Object
1. _.assignIn()

    This method is like _.assign except that it iterates over own and inherited source properties.
    ```js
      function Foo() {
        this.a = 1;
      }
      
      function Bar() {
        this.c = 3;
      }
      
      Foo.prototype.b = 2;
      Bar.prototype.d = 4;
      
      _.assignIn({ 'a': 0 }, new Foo, new Bar);
      // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
    ```

2. _.merge

    This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object. Source properties that resolve to undefined are skipped if a destination value exists. Array and plain object properties are merged recursively. Other objects and value types are overridden by assignment. Source objects are applied from left to right. Subsequent sources overwrite property assignments of previous sources.

    ```js
      let object = {
        a: [{ c: [{ a: '5' }, 6, 100, 89] }, { e: 4 }],
      };

      let other = {
        a: [{ c: [1, 2, 3] }, { e: 5 }, { f: 100 }],
      };
      _.merge(object, other);   // { a: [{ c: [1, 2, 3, 89] }, { e: 5 }, { f: 100 }] }
      _.assign(object, other);  // { a: [{ c: [1, 2, 3] }, { e: 5 }, { f: 100 }] }
    ```

3. _.concat

    This method is used to merge arrays with other arrays or add variable or even create new array from variable.

    ```js
      let array1 = [1, 5, 3, 1];
      let array2 = [7, 25, 21];
      let array3 = [11, 3, 3, 2];
      let mergedArray = _.concat(array1, array2, array3); // mergedArray: [1, 5, 3, 1, 7, 25, 21, 11, 3, 3, 2]
      const newProduct = _.concat(1, ['category', 'discount']); // newProduct: [1, 'category', 'discount']
    ```

4. _.times

    _.times receives as arguments the number of iterations and a function to execute n times and returns an array of the results. Very useful when creating dynamic test data.

    ```js
      _.times(3, String);
      // => ['0', '1', '2']

      var result = _.times(5, Math.round(Math.random() * 100));
      // result => [64, 70, 29, 10, 23]
    ```

5. _.find

    Instead iterating through an array with a loop to find a specific object, we can simply use _.find. You can also find an object using multiple properties.

    ```js
      var users = [
        { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
        { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
        { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
        { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
      ];

      var user = _.find(users, { lastName: "Doe", gender: "male" });
      // user -> { firstName: "John", lastName: "Doe", age: 28, gender: "male" }

      var underAgeUser = _.find(users, function(user) {
        return user.age < 18;
      });
      // underAgeUser -> { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" }
    ```

6. _.get

    Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

    ```js
      var bar = { foo: { key: "foo" } };
      var name = _.get(bar, "name", "John Doe");
      // name => John Doe
    ```

7. _.set

    Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing index properties while objects are created for all other missing properties.

    ```js
      var bar = { foo: { key: "foo" } };
      _.set(bar, "foo.items[0]", "An item");
      // bar => { foo: { key: "foo", items: ["An item"] } }
    ```

8. _.clone

    Creates a shallow clone of value.
    _Note: An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps._

9. _.cloneDeep

    _.cloneDeep will clone an object. The new object will also have a new address in memory so you won’t crush a property from the original object.

    ```js
      let original = { foo: [1, 2, 3] };
      let shallowCopy = _.clone(original);
      let deepCopy = _.cloneDeep(original);
      original.foo[1] = 100;
      // shallowCopy -> { foo: [1, 100, 3] } Yeah!
      // deepCopy -> { foo: [1, 2, 3] } Yeah!
    ```

10. _.sortedUniq and \_.uniq

    With \_.sortedUniq, similar to \_.uniq when all duplicated values won’t be returned. However \_.sortedUniq is usually used for performance reasons, because it is specifically for the sorted arrays.

    ```js
      var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
      var result = _.sortedUniq(sortedArray);
      // -> [1, 2, 3, 5, 8]
    ```

11. _.filter

    Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

    ```js
      const users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
      ];
      
      _.filter(users, function(o) { return !o.active; });
      // output: [{ 'user': 'fred',   'age': 40, 'active': false }]
    ```

12. _.isEqual

    Performs a deep comparison between two values to determine if they are equivalent.

    ```js
      const book1 = {
        name: ‘JavaScript: The Good Parts’,
        price: 13.5
      };
      const book2 = {
        name: ‘JavaScript: The Good Parts’,
        price: 13.5
      };
      _.isEqual(book1, book2); // true
      book1 === book2 // false
    ```

## Comparison
1. **_map and map**

    Main difference is :
    >Lodash: Can use for array,object

    >JS: Can not use for object
    ```js
    function square(n) {
      return n * n;
    }
     
    _.map([4, 8], square);
    // => [16, 64]
     
    _.map({ 'a': 4, 'b': 8 }, square);
    // => [16, 64] (iteration order is not guaranteed)
     

    const array1 = [1, 4, 9, 16];

    // pass a function to map
    const map1 = array1.map(x => x * 2);

    console.log(map1);
    // expected output: Array [2, 8, 18, 32]
    ```
2. **concat() vs _.concat, _.union**

    All of them all create a shallow copy for the elements and only work with iterable elements.

    ```js
      const arr = [1, 2, 3];
      arr.abc = "This is not iterable!"; // arr: [1, 2, 3, abc: 'This is not iterable!']
      let newArr = [1, ...arr];     // newArr: arr: [1, 1, 2, 3]
      newArr = [1].concat(arr);     // newArr: arr: [1, 1, 2, 3]
      newArr = [1].concat(1, 2, 3); // newArr: arr: [1, 1, 2, 3]
      newArr = _.concat([1], arr);  // newArr: arr: [1, 1, 2, 3]
      newArr = _.union([1], arr);   // newArr: arr: [1, 2, 3]
    ```
3. _.assign _.merge, _.extend

    The \_.assign() and \_.extend are similar to each other while \_.merge does those steps recursively.
    ```js
      const object = { b: [{ a: '5' }, 6, 100, 89], e: 4 };
      const other = { b: { b: [1, 2, 3] }, e: 5, f: 100 };

      _.merge(object, other);   // { b: [ { a: '5' }, 6, 100, 89, b: [ 1, 2, 3 ] ], e: 5, f: 100 }
      _.assign(object, other);  // { b: { b: [ 1, 2, 3 ] }, e: 5, f: 100 }
      _.extend(object, other);  // { b: { b: [ 1, 2, 3 ] }, e: 5, f: 100 }
    ```
[back to Top](#table-of-contents)