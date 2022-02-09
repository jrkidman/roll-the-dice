/* ## `six-sided.js`
Create a file called `six-sided.js` that uses the `Math.random()` 
to simulate a random dice roll which is then logged out to the user.
The challenge here is transforming the random decimal (between 0 and 0.99999999...) 
into a number that's either 1, 2, 3, 4, 5, or 6. To do this you'll need to do some 
multiplying and some `Math.floor()`ing (or `Math.ceil()`ing).
*/

console.log(Math.floor(Math.random()*7));
