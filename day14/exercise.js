// 30-days-of-react-challenge: Day 14: Component Life Cycle

// Exercises: Level 1

// 1. What is component life cycles?
// The component life cycle is the process of mounting, updating and destroying a component in a React application.

// 2. What is the purpose of life cycles.
// The purpose of React lifecycle is to provide a way to monitor and manipulate the components during its three main phases: Mounting, Updating, and Unmounting. This allows developers to control the behavior of their components and make them more efficient and effective. The lifecycle methods are called automatically by React at specific points in the component’s lifecycle.

// 3. What are the three stages of a component life cycle?
// The three stages of a component life cycle are:
// Mounting , Updating, Unmounting.

// 4. What does mounting means?
// Mounting: Creation and insertion of a component into the DOM.

// 5. What does updating means?
// Updating: After the components has been mounted, it can be updated when props/states changes.

// 6. What does unmounting means?
// Unmounting: It removes component from the DOM.

// 7. What is the most common built-in mounting life cycle method?
// The most common built-in mounting life cycle method is render() which is required in all class-based components. 

// 8. What are the mounting life cycle methods?
// The following built-in methods run in the given order during mounting of a React component :

// constructor(): This method is called before the component is mounted. It is used to initialize the state and bind event handlers.

// static getDerivedStateFromProps(): static getDerivedStateFromProps() is a lifecycle method that is called during the updating phase of a component. It is called after the component has been mounted and whenever the component receives new props. It is used to update the state of the component based on changes in the props.
// This method takes two arguments: props and state. It returns an object that represents the updated state of the component.

// render(): This method is called to generate the HTML markup for the component.

// componentDidMount(): This method is called after the component has been mounted. It is used to perform any side effects such as fetching data from an API or setting up event listeners.

// 9. What are the updating life cycle methods?
// 1. static getDerivedStateFromProps(): it's called in the updating phase, it's the 1st method that is called when a componentgets updated.
// 2. shouldComponentUpdate(): It's built-in lifecycle method and should return a boolean. The application won't update if this method doesn't return true.
// 3. render(): It's called when a component gets updatred. It has to re-render the HTML to the DOM with new changes.
// 4. getSnapshotBeforeUpdate(): It's called after the render() method but before the changes are applied to the DOM. It is used to capture some infor from theDOM before it is updated.. It returns an object that represents snapshot of current state of component.
// 5. componentDidUpdate(): It is called after the component is updated in the DOM.

// 10. What is the unmounting life cycle method?
// It is the final phase in the lifecycle of component. It removes component from the DOM.
// componentWillUnmount() is the only built-in method that gets called when a component is unmounted.