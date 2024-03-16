---
title: "Applied Statistics: Machine Learning and Causal Inference"
excerpt: "My fellows Melani Geng, Gonzalo Quiroz , Rodrigo Sillupu and I replicated all the Python scripts from the Applied Statistics course in the Social Sciences Faculty of the PUCP."
permalink: /portfolio/applied_statistics
collection: portfolio
url: ""
---
## Applied Statistics labs

You can reach the repository where the codes and the used data [here](https://github.com/DiegoDelgadoD/AppliedStatisticsPUCPGroup7). All the presented codes and described are developed in Python 3.


* **[Laboratory 1](https://github.com/DiegoDelgadoD/AppliedStatisticsPUCPGroup7/blob/main/group7_lab1_python.ipynb): FWL demonstration and Some Data Visualization**

Here we first proofed the Frisch Waugh Lovell Theorem. Then, using 1989-1991 CPS,  we estimated an extended version of the Mincer equation and made some data visualization examples to understand the education returns on wages.



* **[Laboratory 2](https://github.com/DiegoDelgadoD/AppliedStatisticsPUCPGroup7/blob/main/group7_lab2_Python.ipynb): Data Splitting and Lasso Regression basics**

Here we learned the basics of data splitting. By splitting our data we can validate our trained algorith and we can prove if its goodness of fit. In this scropt we also made some data visualization exercises to learn what happens with the fitting when we change the $\alpha$ (penalization parameter) size of Lasso Regressions. Finally we found that the Lasso regression usually does not converge with lower $\alpha$ values. This is because a higher alpha is more restrictive, and therefore more varibles with less predictive value are discarded.

* **[Laboratory 3](https://github.com/DiegoDelgadoD/AppliedStatisticsPUCPGroup7/blob/main/group7_lab3_Python.ipynb): Collinearlity and RCT analysis**

Here we address  collinearlity consequences in a theorical an empirical way. Then we analyze RCT data from the Pennsylvania reemployment bonus experiment. We explored the existence of treatment heterogenity across groups  and noticed that some groups have different treatment effect. In general, we found that the program has a negative effect on the length of unemployment. However, here we can notice that the treatment effect may vary depending on certain characteristics of the sample. If the unemployed person is female, then receiving the treatment still has a negative effect on the period of unemployment, but this does not remain true when the person is black, or their age is below 35. Being part of these latter groups, and receiving the treatment may in fact have a positive effect on the length of unemployment

* **[Laboratory 4](https://github.com/DiegoDelgadoD/AppliedStatisticsPUCPGroup7/blob/main/group7_lab4_Python.ipynb): Orthogonality**

In this laboratory we addressed orthogonalithy. We compared wether is better to use an Orthogonal method or a Naive method using previously setted data from a known Data generating process. We performed some data visualization to make the analysis more enjoyable and understable. We found that the Naive method showed biased estiamtors as expected. On the other hand we obtained unbiased estimators when using the Orthogonal method. 

* **[Laboratory 5](https://github.com/DiegoDelgadoD/AppliedStatisticsPUCPGroup7/blob/main/group7_lab3_Python.ipynb): Bootstrappping**

For this lab, we analyze the Pennsylvania re-employment bonus experiment, aiming to observe the impacts of different treatments on unemployment duration. In this case, we focus on the treatment group $T4$ (people who received a high bonus amount, had a long qualification period, and were offered a workshop). 

To observe the treatment effects, we obtain bootstrap estimates. Then we find the Standard Error associated with the estimated coefficients. For this, we first keep the subset of non-treated ($T0$) and type-4-treated individuals ($T4$). Then we define our indexing function and our estimating function. Last but not least we define the bootstrap function and we compute 1,000 estimates to find the standard error of each estimated coefficient (we focus on 3 coefficients: T4, Female, and Black).

* **[Laboratory 6](https://github.com/DiegoDelgadoD/AppliedStatisticsPUCPGroup7/blob/main/group7_lab6_python.ipynb): Debiased Machine Learning (DML) methods comparison using Growth Data**

We evaluated the performance of some DML methods using the Barro-Lee Growth data. We evaluated which method has the better pperformance for each stage of the Debiasing process. We chose the Elastic Net method for both partialling out equations. However, the results here may be not accurate since the used dataset is small.







