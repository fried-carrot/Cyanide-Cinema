# Cyanide-Cinema
Artificial Intelligence tool to generate detailed piracy reports. 

## Overview
Around the world, over 75 million movies are pirated daily. This abhorrent piracy has led to a drastic decrease in annual movie profits – a measured decrease of nearly 25%. Imagine if the movie industry were able to determine whether their movie was likely to be pirated. This insight would allow them to take definitive and immediate action against threats of piracy. With Cyanide Cinema, we hope to make this vision a reality.

## Tools
In order to create Cyanide Cinema, we utilized Python, React, GPT-3.5, and Tensorflow .js. 

- Utilized Python for:
  - Laying the basis for our model.
  - Training our model.
  - Setting up our Llama Server.

- Used Tensorflow.js to:
  - Host and implement trained model.
  - Estimate the likelihood of piracy.

- Utilized ReactJS for:
  - developing the user interface.
  - Hosting the final application

Through the implementation of these steps we were able to make Cyanide Cinema, an advanced Machine Learning algorithm for predicting the likelihood of piracy of a given movie, a reality.


## Directions
Enter into the search box the url: https://cyanide-cinema.web.app
Enter the parameters:
- Numerical
  - IMDB Rating(out of 10)
  - Runtime(minutes)
- Categorical
  - Age-rating
  - Industry
  - Language

Receive a numerical probability as well as a “likely” or “not likely” piracy prediction

## Samples
If you would like to analyze the dataset or try out some sample values, visit the Kaggle dataset: https://www.kaggle.com/datasets/arsalanrehman/movies-dataset-from-piracy-website
We suggest using the provided sample inputs from the Kaggle Dataset. However, you can employ any numerical and categorical values to gain an understanding of which movies are more likely to be pirated.
Sample Inputs(Kaggle):
- Sample 1:
  - Numerical
    - IMDB: 4.6
    - Runtime: 80
  - Categorical
    - Age-rating: R
    - Industry: Hollywood/English
    - Language: English
  - **DID SURPASS 1K DOWNLOADS(LIKELY TO BE PIRATED)**
 
 - Sample 2:
    - Numerical
      - IMDB: 6.2
      - Runtime: 82
    - Categorical
      - Age-rating: TV-G
      - Industry: Hollywood/English
      - Language: English
    - **DID NOT SURPASS 1K DOWNLOADS(NOT LIKELY TO BE PIRATED)**

## Contributors
- Aneesh Kandimalla 
  - Github: r3sgame
- Kevin Zhang
  - Github: WarpPrime
- Sharat Sakamuri
  - Github: fried-carrot

