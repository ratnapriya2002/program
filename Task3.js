const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

//Get a unique set of users from List1 which are not in List2
const set1 = new Set(list1);
const set2 = new Set(list2);

const uniqueUsersList1 = new Set([...set1].filter(user => !set2.has(user)));
console.log( Array.from(uniqueUsersList1));
//Get a unique set of users from List2 which are not in List1
const uniqueUsersList2 = new Set([...set2].filter(user => !set1.has(user)));
console.log( Array.from(uniqueUsersList2));

//Get a set of users who are present in List1 and List2 both (intersection of list1 & list2)
const intersectionUsers = new Set([...set1].filter(user => set2.has(user)));
console.log( Array.from(intersectionUsers));
