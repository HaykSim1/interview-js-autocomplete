**1**
PureComponent is same as Component except that it handle shouldComponentUpdate method for you.
When props or state changes, PureComponent will do shallow comparison on both props and state.

Never mutate. If I will mutate objects in parent component my pure child component wouldn't update,
because reference will be same.

**2**
Context and SCU are problematic because SCU return false causes any context update to be no longer
propagated to child components

**3**
Step 1. Send defined callback function as a props to child component and call with different arguments.
Step 2. From React 16.3+ we can do that with React Context API
Step 3. Event bubbling. Its not a React concept, its old DOM concept

**4**
We can use shouldComponentUpdate method. Or we ca use PureComponent

**5**
React fragment is a pattern that allows you to return multiple elements. Its let you group
a list of children without adding extra nodes to the DOM.

**6**
withRouter, Redux connect HOC, withCookies in react-cookies lib.

**7**
In promises you can handle exception in catch method, and in async/await you must use try catch block.

**8**
setState takes 2 arguments, first can be object or function that return object, 
second is callback function, and its calls when state update was done.

Its async because setState alters the state and causes rerendering, this can be expensive and making it sync can leave
browser unresponsive.

**9**
1. Change class to function
2. Remove constructor and render method, but keep return.
3. Add const before all methods.
4. Remove this from everywhere
5. Use useState hook for local state, and change useage of setState to hook syntax.
6. Replace all lifecycle methods with useEffect
7. Finish for simple component

**10**
Inline styles, styling with css or scss files, styles components.

**11**
We can use dangerouslySetInnerHTML for that, or use libs like html-react-parser
