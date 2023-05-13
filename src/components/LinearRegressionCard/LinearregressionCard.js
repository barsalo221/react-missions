import React from 'react'

export default function LinearregressionCard() {
  return (
        <div className='bg-cyan-100'>
            <div className="flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat "
          data-te-ripple-init
          data-te-ripple-color="light">
          <img
            className="object-fill bg-white"
            src="https://pimages.toolbox.com/wp-content/uploads/2022/04/07152950/26-3.png"
            alt="" />
          <a href="https://www.analyticsvidhya.com/blog/2021/10/everything-you-need-to-know-about-linear-regression/#:~:text=Linear%20regression%20is%20a%20type,line%20that%20describes%20the%20relationship.">
            <div
              className=" absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
        <div className="p-6 bg-cyan-100">
          <h5
            className="mb-2 text-xl font-extrabold leading-tight text-neutral-800 dark:text-neutral-50">
            Explain Linear Regression
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 overflow-visible">
          Linear regression is a type of statistical analysis used to predict the relationship between two variables. It assumes a linear relationship between the independent variable and the dependent variable,
          and aims to find the best-fitting line that describes the relationship. The line is determined by minimizing the sum of the squared differences between the predicted values and the actual values.
          Linear regression is commonly used in many fields, including economics, finance, and social sciences, to analyze and predict trends in data. It can also be extended to multiple linear regression,
          where there are multiple independent variables, and logistic regression, which is used for binary classification problems.<br/><br/>
          learn more about <a className='text-blue-500 underline' href='https://www.analyticsvidhya.com/blog/2021/10/everything-you-need-to-know-about-linear-regression/#:~:text=Linear%20regression%20is%20a%20type,line%20that%20describes%20the%20relationship.'>linear Regression</a>
          </p>
         
        </div>
      </div>
        
    </div>
  )
}
