1. What problem does the context API help solve?

Context provides  values like components without having to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: an action is an object with  two properties - type and payload.
Reducers: a reducer is a function which takes two arguments, the state and an action and returns the updated state by executing the action.

Store: Store is a single js object that contains the state. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

An application state is a state used and accessible application-wide. Component states exist within the component and they are passed as props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

When an action creator is called, redux-thunk intercepts it. If an action is returned, it forwards it to the reducer. However, if a function is returned, then it will invoke the function and pass dispatch in as an argument of this function. This allows us to run async functions.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Not sure, I used redux because I used this yesterday.