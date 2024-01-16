import React from 'react';
import '../../App.js'
import Footer from '../Footer.js';


export default function python() {
    return (
    <>
    <h1 className='python'>Python Projects</h1>
    <div>
    <h1>Machine learning: A Quick introduction</h1>
    <p className = 'p-pages'>For the uninitiated, Machine Learning is just a fancy way of saying prediction analysis with this use of 
      specific statistical analysis without specific instructions. The goal of Machine Learning is to train our 
      model on historical data to predict the future without the need of humans modifying the model to fit specific 
      situations. It is designed to get better over time with more data, as it trains itself on the wins and losses. 
      Machine learning algorithms are flexible and adapt quickly to new data. Some terms worth knowing are defined below. </p>
      <br></br>
    <ul className = 'ul-pages'>
      <li>Overfitting: The data is too aligned with the training data. Think of overfitting as your friend who takes things to literal.
         They lack the flexibility to bend to metaphors which can lead to some misunderstandings.
          In this case, overfitting can lead to the algorithm struggling with novel data.</li>
      <li>Underfitting: The data is poorly aligned with the data. This is your second-string
         rookie quarterback. Not accurate and poorly executing tasks, but with some time, could develop into a great player with some more reps. </li>
      <li>Confusion Matrix: A classification table for true/false positive/negatives.   </li>
      <li>Sensitivity: The ability for the algorithm to detect a positive indication. A high sensitivity means there are few false negatives. </li>
      <li>Specificity: The ability for the algorithm to determine a negative indication. A high specificity means there are few false positives. </li>
    </ul>
    <p className = 'p-pages'>Let’s think of a use case for Machine Learning over traditional predictive analysis. Let’s say I wanted to develop an app to give quality ratings
       to wines. Experts have already rated a bunch of wines, so we could take the data from there and place them on ours, as long as we refer to them. 
       But what about new wines? With Machine Learning, we could take the past ratings, train a model, and then apply a “recommended” label to it!</p>
       <br></br>
    <p className = 'p-pages'>As important as it is to demonstrate the ability to conduct machine learning analysis, I think it equally important to describe my thought process throughout.
       As we go along, I’ll describe why I decided one path over another, as well as my pros and cons to alternative ideas. With that in mind, let’s dive in. </p>
    <img className= "botos-binted" src="wine_variable.jpeg" alt="Wine Characteritics"></img>
    <p className = 'p-pages'>There’s a couple of interesting things I took from this graph.
       First, the separation of attributes and their impact on the quality
        of the wine isn’t readily apparent save for a few qualities. Second,
         the qualities are not readily accessible online. Meaning even if I 
         wanted to use anything other than alcohol as a predictor, I’d have to do 
         additional research which could slow down the recommended list. Now this is a 
         point where we really must consider the use case for this data. Let’s take a
          hypothetical, the alcohol content is readily accessible information and appears
           to be a strongly positive indicator for quality. The pH also appears to have a
            strong trend but is not as easily found information. However, in this hypothetical
             business case, I feel it is reasonable that someone could either get the pH level
              from the winery or test themselves with a cheap at home pH kit. Leading us to the 
              first decision, I’ll be using two variables, pH and alcohol content as predictors. </p>
              <br></br>
    <p className = 'p-pages'>Next, let’s talk about what algorithm we’ll be using. Already, using two variable scratches
       of some simpler algorithms, as well as a few more complex networks.  A simple linear regression
        isn’t ideal, as we’ll see frow later scatter plots, the two variables lack correlation in a
         linear manner. While I love how easy it is to use Random Forests, the lack of visibility
          into what variables are import makes it hard to justify to any person why a particular wine
           was chosen over another. I also only care about ‘good’ wines, so it immediately turns the
            predictor binary. I settled on a Gaussian Naïve Bayes algorithm to start. A classic classification 
            algorithm which is simple and fast. Features that, I think, would make it great as we continue 
            to feed it more and more wines as they are created. Meaning we could give ratings to new wines
             as they come in. Which is a huge advantage compared to other similar apps that wait for expert reviews. </p>
    <p className = 'p-pages'>With that said, let’s establish some guidelines and goals for this algorithm. Industry standard
       has an accuracy rating around 70 to 90 percent to precent over and under fitting of the algorithm.
        There are a ton of factors to take into account when it comes to deciding whether you are okay
         leaning more towards 70 or more towards 90 percent accuracy. In our case, let’s take a look at the four possibilities. Either: </p>
         <ol className = 'ul-pages'>
      <li>A wine is correctly assigned a rating over or equal to 7</li>
      <li>A wine is incorrectly assigned a rating over or equal to 7 </li>
      <li>A wine is correctly assigned a rating below 7   </li>
      <li>A wine is incorrectly assigned a rating below 7 </li>
    </ol>
    <br></br>
    <p className = 'p-pages'>With these possibilities in mind and that we’ll be primarily rating new wines, I’d say a target of 80 percent accuracy would be acceptable. 
      Let’s think though the user experience. Through this hypothetical app, if I get a wine that is said to be good and is good, I’m happy. If I buy a
       wine that is said to be good, but isn’t, I’m mad. If I don’t buy a wine that is said to be good or bad, I’ll never know. Here’s where we should talk
        about bias. In Machine Learning, bias is how far we are off from correctly assigning a wine. If we label a wine as good, but it was actually a 6,
         technically we are wrong. But in that case, it’s still an above average wine and while it’s not to the quality we seek to recommend, as a user, it’s
          not a terribly off algorithm.
       If the wine is a three but gets recommended, I’d be upset. We need to
        be careful to note the bias and work to ensure the bias for false positives is below one on average. </p>
        <br></br>
      <h2>Results</h2>
      <br></br>
    <p className = 'p-pages'> I had an accuracy score of 78%, close to what I was aiming for and giving the low stakes of buying wine,
       a very acceptable number in my mind. We can see the confusion matrix below.</p>
       <table className = 'table-pages'>
  <tr className = 'tr-pages'>
    <th></th>
    <th>Predicted Negative</th>
    <th>Predicted Positive</th>
  </tr>
  <tr className = 'tr-pages'>
    <td className = 'td-pages'>Actually Negative</td>
    <td className = 'td-pages'>703</td>
    <td className = 'td-pages'>50</td>
  </tr>
  <tr className = 'tr-pages'>
    <td className = 'td-pages'>Actually Positive</td>
    <td className = 'td-pages'>163</td>
    <td className = 'td-pages'>64</td>
  </tr>
</table>
<p className = 'p-pages'>Here we can see of the wines below a quality score of 7, We are pretty good at correctly predicting which wines not to buy,
   but we are missing a lot of good wine. How can we fix this? Trying another model of course! I quickly ran a few classification 
   reports on some models I think might work, such as random forest, K-Nearest Neighbors, Logistic regression and more. Random forest
    got an average accuracy of 80 percent and better yet, doubled our correct predictions of good wines. We’re still missing about 50 percent of good wines,
     but with a mean square error of .2, I’m pretty happy with the results. One thing I am concerned about is suggesting a stinker. There are a small handful of
      bad wines in the data, meaning we aren’t great at detecting them. Of the wines we end up recommending with this algorithm, between our false and 
      true positives, we have a recommended average of 6.6 on the quality which is pretty solid. Our final prediction distribution looks like: 
</p>
<img className = 'botos-binted' src="wine_predictor.jpeg" alt="Wine Characteritics"></img>
<br></br>
<h2>Summary</h2>
<br></br>
<p className = 'p-pages'>The tough part, was this a success? Would this be useful?  In a way, yes. I think for the average
   wine consumer, this is a very helpful idea. It gives me better odds at selecting a nice wine than
    my current method. However, I think someone with a distinct taste would find this frustrating at
     times. With an accuracy of 80% overall, but 50% on identifying good wines, I think your average
      consumer would happily take the advice on new wines not yet rated. About 22 % of wine was rated as a 7 or above,
      so to take our odds of selecting a good wine from 22% to 50% seems a reasonable jump. However, logistically, that means we’d have 
      to get the pH data into the database somehow and that, as stated earlier, is not readily available 
      information. Overall, I’m happy with the result. In the end, our data set shows 68% of wine were a 6 or above, and only 4% were below 5. Meaning, to me, most wines are acceptable, so 
       while building the app may be fun, for me, I’ll happily continue to gamble on fun labels. </p>
    </div>
    <Footer />
    </>);
  }