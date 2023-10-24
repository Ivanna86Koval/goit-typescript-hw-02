/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;
union = 'Hello'; // допустиме
union = 42; // допустиме
union = true; // не допустиме, оскільки boolean не входить в об'єднану множину типів (string | number)

let literal: 'enable' | 'disable';
literal = 'enable'; // допустиме
literal = 'disable'; // допустиме
literal = 'active'; // не допустиме, оскільки 'active' не входить в обмежений перелік літеральних значень