# Study Notion

Study Notion is an ED Tech (Education Technology) web application developed using the MERN stack.

***
## Features

* User Authentication: Study Notion provides secure user registration and authentication using JWT (JSON Web Tokens). Users can sign up, log in, and manage their 
  profiles with ease.
  
* Courses and Lessons: Instructors can create and edit created courses. Students can enroll in courses, access course materials, and track their progress.
* Progress Tracking: Study Notion allows students to track their progress in enrolled courses. They can view completed lessons, scores on quizzes and 
  assignments, and overall course progress.
  
* Payment Integration: Study Notion integrates with Razorpay for payment processing. Users can make secure payments for course enrollment and other services 
  using various payment methods supported by Razorpay.
  
* Search Functionality: Users can easily search for courses, lessons, and resources using the built-in search feature. This makes it convenient to find relevant 
  content quickly.
  
* Instructor Dashboard: Instructors have access to a comprehensive dashboard to view information about their courses, students, and income. The 
 dashboard provides charts and visualizations to present data clearly and intuitively. Instructors can monitor the total number of students enrolled in 
 each course, track course performance, and view their income generated from course sales.

  
***
## Screenshots
![Screenshot 1](https://github.com/harshitG5180/StudyNotionEdTechProject/blob/cd17dfb57879ad3b4f34aa058fece1dafbab5129/src/assets/Screenshots/Screenshot3.png)
![Screenshot 2](https://github.com/harshitG5180/StudyNotionEdTechProject/blob/cd17dfb57879ad3b4f34aa058fece1dafbab5129/src/assets/Screenshots/Screenshot2.png)
![Screenshot 3](https://github.com/harshitG5180/StudyNotionEdTechProject/blob/cd17dfb57879ad3b4f34aa058fece1dafbab5129/src/assets/Screenshots/Screenshot1.png)

***

## Important
* Backend is  in the server folder.
* First create the categories e.g. web dev, Python, etc. (without categories courses cannot be added). To create categories create an Admin account and go to dashboard then admin panel.
* To create an Admin account first sign up with a student or instructor account then go to your Database under the users model and change that 'accountType' to 'Admin'.


## Installation

1. Clone the repository to your local machine.
    ```sh
    git clone https://github.com/harshitG5180/StudyNotion.git
    ```

2. Install the required packages.
    ```sh
    cd StudyNotion
    npm install
    
    cd server
    npm install
    ```

3. Set up the environment variables:

   Create a .env file in the root directory and /server
   Add the required environment variables, such as database connection details, JWT secret, and any other necessary configurations check .env.example files for more info.


4. Start the development server.
    ```sh
    npm run dev
    ```

5. Open the project in your browser at [`http://localhost:3000`](http://localhost:3000) to view your project.
