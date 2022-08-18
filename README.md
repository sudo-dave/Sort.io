# Sort.io--Sorting-Visualizer

An intuitive, dynamic, and responsive web sorting visualizer app created with **React.js**. Using component-level styles with **styled components**. Examine how innsertion, bubble, and selection sort work to get a better understanding of how sorting works.

### Deployed @ https://sort-io-pi.vercel.app/

## Demo

<img src="img/../Img/demo_sort.gif">

## Configure

You can also configure the animation speed, inital array size, range and more.
To configure you have to change the `global.config.js` file.

```json
{
  "SEC_ANIMATION__DELAY": 1000,
  "INITIAL_ALGO_NAME": "Insertion",
  "INITIAL_ARR_SIZE": 10,
  "RAND_ARR_LOW_VAL": 4,
  "RAND_ARR_MAX_VAL": 30,
  "INPUT_RANGE_MIN": 5,
  "INPUT_RANGE_MAX": 15
}
```

For `SEC_ANIMATION__DELAY`, 1000 = 1sec addiontal to the base.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
