# [B2] REACT FIRST PRINCIPLES: WITHIN THE COMPONENT

  - **CORE FOCUS:** This **B2** section will cover everything within a single React component & the key pieces you will need to observe to build single components

&nbsp;

## C. STATE OBJECTS

**CORE:** When we store data in React state, we will often store values other than primitives, being objects / arrays

  - **HOWEVER** - JSX is NOT a template engine, so it does NOT support loops & cannot directly render statements (*one of our JSX rules*)

  - This means to render lists of things, from objects or arrays (*or render conditional blocks of code*) - **it requires a unique approach**
  
### 1. LOOPING ARRAYS

**THEORY:** If you want to render a list of things within an **array**, you cannot just call the state value within the return, as its values remain nested within its structure

  - We need to use the methods of `map()` & `filter()` to render lists of components from them (*from last week's JS theory*)

  - [Refer to react.dev for rendering lists](https://react.dev/learn/rendering-lists)

**STEPS:**

  - (a) Go to `Accordion.jsx` inside `/components`

  - **NOTE on KEYS:** *A `key` must be assigned to each element outputted by `map()`, as react needs to update elements in the list if a value changes so it needs to be able to find them in the DOM*

&nbsp;

### 2. STATE MUTATIONS (& OBJECTS)

**THEORY:** Updating state, as shown, is much like **reassignment**, where we change the variable's assignment

  - However, we need the state setter as technically, state is declared with `const`, being unassignable.  This is important when it comes to **objects**

  - **Mutation** is where we do not change the variable's assignment, but rather, **changing the property within an existing object**

      - `const person = { name: "John" };`
      - `person.name = "David";`
      - Logging = `{ name: "David" }`

**WHY IS MUTATION AN IMPORTANT CONCEPT:**

  - It is important, when we need to update objects in React, which if not careful, you can *overwrite*/*mutate* the existing object **RATHER THAN** setting a new "snapshot in time"

  - Whilst you *can* technically mutate state objects, React requires that objects stored in state must be treated as **read-only**.  In laymens, you should **treat objects in state as [IMMUTABLE](https://react.dev/learn/updating-objects-in-state#treat-state-as-read-only)**

**SO HOW DO WE CHANGE OBJECTS IN STATE IF THEY'RE "IMMUTABLE"**

  - Basically, we can use the state setter for the state object to update its value.  This part remains the same.
  
  - However, if we want to include the existing object data in the new object, we need to **MAKE A (*shallow*) COPY OF IT**

  - This is done using our SPREAD OPERATOR!  We will cover this in more detail later on (this week & next, but keep this in mind!)

**(a) EXAMPLES ON MUTATION & SHALLOW COPIES:**

  - [react.dev docs on mutations](https://react.dev/learn/updating-objects-in-state#whats-a-mutation)

  - [Video on mutations in JavaScript](https://youtu.be/gOl6rU1pkL0)

&nbsp;

### 3. UPDATING STATE OBJECTS

**THEORY:** As above, objects within state (this includes "arrays") should be considered immutable & the properties within them as READ-ONLY:

  - **OBJECT:** You should not update the state object in React like `panels.title = "new panel"`

  - **ARRAY:** You should not update the state array in React like `panels[0] = "new panel"`

**FOR OBJECTS - YOU HAVE TWO CHOICES TO UPDATE:**

  - **(i) Completely new object:** Here you can call the state setter & create a completely NEW object, overwriting the previous - `setPanels({ title: "new panel" })`

  - **(ii) Use existing object in new object ("shallow copy"):** Using the spread syntax `...` we can copy the existing objects properties into a new object, which AVOIDS mutation - `setPanels({ ...panels, title: "new panel "})`

  - [See react.dev for object mutation](https://react.dev/learn/updating-objects-in-state)

**FOR ARRAYS, YOU HAVE SOME OTHER CONSIERATIONS - TO AVOID SOME METHODS & PREFER OTHERS:**

  - The two methods above + `concat()` method will work to overwrite or shallow copy existing array

  - [See table in react.dev for more options on removing, replacing & sorting](https://react.dev/learn/updating-arrays-in-state#updating-arrays-without-mutation)

**STEPS**

  - (a) Go to `Accordion.jsx` inside `/components`

&nbsp;

### CHALLENGE: CARD ARRAY of OBJECTS [FIX]

  - Go to `Card.jsx` inside `/components`

**1. Array of objects within state:**
  - Update the card initial state to be an array of card objects
  - There will be a list of 3 card objects
  - Each card object should have an `id` property & a `title` property (*you can choose the values*)

**2. Map the array of objects [HARD for NEW]:**
  - Using the `map()`, render the list of card info onto the page
  - You should loop the `card.title` for each array position into a `<p>`, all of which will be nested within the a new `<div>`
  - You should set the `key` for each item to the `id` of the card object using object chaining

**3. Use logical && to prevent render error:**
  - Using the shorthand `&&`, ensure that the cards list only renders where the cards array has at least ONE item in it
  - In a separate line, Using the shorthand `&&` again, also ensure that if there are no items in the cards array, it renders the statement "New Projects Coming Soon ..."

  - **BONUS:** Try to combine the two statements into one using the `||` logical operator!

**4. Use the spread operator to copy existing array into new array with a new object item [HARD]**
  - Try to update the button `onClick`, so that it adds a new object (with the current properties of `id` & `title`), to the existing object - using the `...` operator
  - **NEAT:** You can generate a random id using `crypto.randomUUID()`

  - **REMINDER:** You are creating a shallow copy of the existing **array** & adding a new object to it.