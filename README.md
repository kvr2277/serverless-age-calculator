# serverless-age-calculator
AWS Serverless sample to calulate age from date of birth

# To run this
> npm i
> sls offline start

This would start app on localhost:3000

In order to test locally - using postman, do

GET - http://localhost:3000/age?dob=19880101

should give output 

{
    "age": 31
}

(age might increase depending on time when you ran this)

To deploy the app to AWS Serverless, do

> sls deploy

This would start app on
https://xxxxxxxxxxx.execute-api.us-east-1.amazonaws.com

to test api - use

https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/dev/age?dob=19880101