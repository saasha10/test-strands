This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Before start de project, you have to execute "npm install" to install all the dependencies and dev-dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### 1. Describe all the decisions that you took during development and the reasoning behind them.

We wrapped our App with Provider (imported from react-redux) and makes it aware of the entire Redux’s store.

Post component is where we get all the elements(dogs), once we have the data we use the Images component to do a new Api call.

Images component is in charge to iterate all the breeds of the dogs and get all the images for each one. Once the component have finished all the API calls for each dog's breeds, we can load ChartPie component.

ChartPie component is where we created and drawn the pie chart with an array that contain a list of top 10 dog's breeds with more images.
We can click on each element to remove from the chart pie, and it will recalculate the value for the other elements.


Functions: 
    - mapStateToProps connects a part of the Redux state to the props of a React component. By doing so a connected React component will have   access to the exact part of the store it needs.
    - mapDispatchToProps does something similar, but for actions. It connects Redux actions to React props. This way a connected React component will be able to send messages to the store.

Dependencies used: 
    - Chart.js to create whatever type chart from JS code.

Dev-dependencies used: 
    - Redux: to manage all the states in each component.
    - Redux-thunk: we can return functions from action creators. Inside that function we can call APIs.
    - Lodash: Library which provides utility functions as for example(forEach, isEmpty, size... etc)
        We can iterate over an object, check if object or array is empty, count elements from object or array... etc.

Corrections
    - When we check if the first call Api is finished to load the Images component, could be better using a Callback.
    - I could improve the arquitecture using the two components Images and ChartPie as siblings instead of childs.
    - Probably there is a better way to check if  the component Images has finished to make all the calls for each dog's breeds.

### 2. If you had more time, what other features would you add to your app and how would you build them?

- Add a new function where you can click on the element from the pie chart and it can open a gallery with his pictures.
- Add a button where we can choose the ascending or descending order of top 10 dog's breeds with images.
- Different options of the graphs to be able to represent the data. 