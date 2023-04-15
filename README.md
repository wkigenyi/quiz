# The Quiz App

The quiz app provides a platform for users to create, modify and delete quizzes. Users can also take the quizzes and instantly get their score at the end of the quiz.

Once a user starts a quiz, they will be guided through the questions of that quiz one at a time. The quiz attempt will end after the user has submitted the answer to the last question or when the specified duration for that quiz runs out.

## Getting Started

First, navigate to [https://quiz-psi-nine.vercel.app](https://quiz-psi-nine.vercel.app)

Login with either admin/admin or answer/answer

## Create a quiz

To create a quiz, on the quizzes table click on the blue button labeled "Add New Quiz". The form that pops up, specify the details of the quiz including the duration in seconds and the click the button at the bottom of the form to create the quiz.

## Update a quiz

To update a quiz, in the quiz table, click on the blue button corresponding to the quiz to be edited. In the form that pops up, make the required changes and click the update button at the bottom of the form.

## Delete a quiz

In the quizzes table, click on the red delete button corresponding to the quiz that needs to be deleted. In the form that pops up, confirm deletion by clicking on the delete button.

## Add questions to the quiz

In the quizzes table, select the quiz by clicking on the green button corresponding to that quiz. Once the page has loaded, on the questions table click on the "Add Question". A pop up will guide you through specifying the question text, the answer options and the correct answer. 

If a question needs to be modified click on the blue button corresponding the that question in the questions table, a forming will pop up allowing you to make the desired modifications.

## Delete a question

To delete question, in the questions table click on the red button corresponding to that question, the user clicks the delete button on the to confirm deletion or cancel to abort.

## Take a quiz

In the quizzes table, click on the green button corresponding to the quiz of interest. On the resulting page, click on the "Take the quiz" button on quiz detail card. The user will be redirected to a page and guided through questions of the quiz. The user clicks on the "Start Quiz" button and then timer starts. On submission of an answer, the next question will be view and this will continue until the last question of the quiz is answered. Upon answering the last question, the quiz will end and the score will be displayed. The quiz can also prematurely end if the allocated time runs out. 

## Notes

A quiz can only be taken if it has at least 2 questions and a question can only be submitted if it has at least 2 answer options. 