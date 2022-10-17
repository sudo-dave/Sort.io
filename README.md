# Sort.io--Sorting-Visualizer

An intuitive, dynamic, and responsive web sorting visualizer app created with **React.js**. Using component-level styles with [styled components](https://styled-components.com/). Examine how innsertion, bubble, and selection sort work to get a better understanding of how sorting works.

### Deployed @ https://sort-io-pi.vercel.app/

## Demo

<img src="img/../Img/demo_sort.gif">

## Configuration

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

For `SEC_ANIMATION__DELAY`, every 1000 = 1sec delay for swap animation.

## How to host locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Clone the repository and change directory.

```
git clone https://github.com/sudo-dave/Sort.io--Sorting-Visualizer
cd WhereToEat.io
```

Install npm dependencies

```
npm install
```

Run the app locally.

```
npm start
```
