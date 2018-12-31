# react-loan-calculator

Loan calculator component build with React

React Native

This reusable react-native component could be used in any App where such an calculation is needed.

How to run it locally from command line

- Clone this repo
- cd to calculater project
- run npm install
- npm start

 <LoanCalculator /> 
 
Example of props:  {...}
 
        valueD={24}  - duration of loan in months , default - 24
        stepD={12}  - step of duration of loan slider in months, default - 12
        maxD: 72    - max value of duration of loan slider in moths , default - 72
        minD: 12    - min value of duration of loan slider in moths , default - 12
        valueA={10000}  - amount of loan in currancy choosen , default - $2000
        stepA={500} - step of amount of loan slider in currancy choosen , default - $500
        maxA={100000}   - max value  of amount of loan slider in currancy choosen , default - $10000
        minA={10000}   - min value of duration of loan slider in moths , default - 12

This will be changed according to the current interest rate

===APR DEPENDS on CREDIT HIOSTORY, YOU CAN SET TO YOUR OWN RATE===

APR1={3.3} in % , EXCELLENT
APR2={9.6} in % , GOOD
APR3={17.4} in % , FAIR

currancy={$},   - currancy , default $

        ======MATH========
        /**
         *
         console.log('Before Fixing');
         console.log('total amount to repay: ' + totalAmountToRepay + '=' + amount + '+((' + amount + '*' + MPR +')' + '*' + duration + ')');
         console.log('monthly inst: '+ monthly + '=' + totalAmountToRepay+'/'+duration);
         console.log('after fixing');
         console.log('total amount: ' +  Math.round(totalAmountToRepay).toFixed(2));
         console.log('monthly inst: '+ Math.round(monthly).toFixed(2));
         */

Uncomment this code to show interest rate in ./compoents/Rightside.js:

 <!-- <h4>APR</h4>

<span className="aprDisplay">{this.props.APR}%</span>  -->
