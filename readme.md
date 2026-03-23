# 1 What is the difference between var, let, and const?

Ans: var, let, and const are basically variables which let us store values in them. var is function-scoped, while let and const are block-scoped. With var and let, we can reassign values later on, but with const, the value is constant and cannot be reassigned. If we try to access let and const before they are initialized, we get errors because they stay in the TDZ (Temporal Dead Zone). Whereas we can access var even before it is assigned a value, but in that case, it will give undefined. All of this happens due to hoisting.

# 2 What is the spread operator (...)?

Ans: The spread operator lets us spread values from an array. Let’s say many values are stored in an array but we don’t want to treat them as a single array, so we can use the spread operator. This can be used to merge two arrays together and form a new array. We can also use this for objects, copying arrays and objects.

# 3 What is the difference between map(), filter(), and forEach()?

Ans: map, filter, and forEach are all array methods.map returns a new array where we loop over each element, perform some operations, and return the modified elements.
filter also creates a new array where we go through elements and return only those that meet a condition.
forEach does not create a new array; it lets us iterate over elements and perform operations, but everything happens on the original array

# 4 What is an arrow function?

Ans: Arrow functions are just like normal functions, although they don’t have their own this. Arrow functions are easier to write, can be one-liners, and are mostly used when working with array methods because they are easier to understand. Syntax is cleaner and often used in callbacks.

# 5 What are template literals?

Ans: Template literals are written using backticks. They are very helpful because they let us write JavaScript expressions inside strings. They allow us to use expressions and even conditionals inside strings using ${}.
