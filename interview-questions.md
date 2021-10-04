# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What are props in React?

  Your answer: Props is a keyword in React that let's you pass info across components, but only in one direction. The info must pass down from the parent to the child.

  Researched answer: Props stands for properties. It is a keyword in React that let's you pass info across components, but only in one direction. The info must pass down from the parent to the child. Props come mostly from state and they cannot be updated. They are a snapshot of state. It's a great way to make the data much more available and they make the app dynamic so that any updates to data will not require major re-coding in all areas.



2. What is a DOM event?

  Your answer: A DOM event happens whenever the user is interacting in the browser. There are three general categories of of interactions: typing into their keyboard, mouse click, and hovering over areas of the browser.

  Researched answer: The DOM has a powerful built-in event system. It has an interactive layer that is always listening for specific events to occur. A DOM event happens whenever the user is interacting in the browser. Events have built in properties and methods. There are three general categories of of interactions: typing into their keyboard, mouse click, and hovering over areas of the browser. The list of possible DOM events is lengthy. Developers can add event listeners to HTML and JSX tags that wait for the event to happen. Examples of this include onClick attribute to a button (DOM listens for a click event on that node) and onChange listens for any change made to a specific node and makes the appropriate change (eg. DOM listens for text that is being typed into the text field).



3. What is object-oriented programming? How is it different than functional programming?

  Your answer: OOP is a programming model that relies on classes and objects versus function and logic.

  Researched answer: OOP is a programming model that relies on classes and objects versus function and logic. It creates object based elements that are held in hierarchy. Methods belong to, and manipulate the objects. OOP is good when you have a fixed set of operations that won't need to be changed, but when they do, you can add new classes which work off of existing methods (the original classes are left alone). The original classes are generally left alone but the data can be changed. OOP is an easier way to add new data and functions. Functional programming focuses on using functions that perform a specific task. Importance is given to the functions more so than the data. New functions are added that use the existing data types (data in the functions cannot be changed after they have been created), and the original functions are left alone.



4. What is the difference between a Float and an Integer in Ruby?

  Your answer: An integer in Ruby is a whole number. A float in Ruby is a partial number.

  Researched answer: Both integer and float are numerical data in Ruby. An integer in Ruby is a whole number and it does not have a decimal point. A float in Ruby is a partial number that contains a decimal point. Float is used when you need a more precise number.



5. Ruby has an implicit return. What does that mean?

  Your answer: An implicit return in Ruby will return the value of the last line of the method unless you specify otherwise.

  Researched answer: An implicit return in Ruby will return the value of the last line of the method unless you specify otherwise. This allows for minimal code since the keyword return is not necessary in the code block. This allows for minimal code since the keyword return is not necessary in the code block.



## Looking Ahead: Terms for Next Week

1. Instance Variable: Variables that start with the @ symbol. They give objects their own private space to store data. They can be used without initializing it. You can't access instance variables out side of the class. Examples include /@color /@type /@weight. If you have class CoffeeMachine you can create an instance variable /@water and assign it an initial value of 100. You can have 5 different coffee machine objects (with new) and each will have it own private value for /@water level.

2. PostgreSQL: A free open-source relational database management system. It is an advanced version of SQL.

3. Ruby on Rails: An open-source web application used to create database-backed web apps. Rails is a full stack framework used to create websites and uses the Ruby language. It was created to  make programming web apps easier by inserting assumptions to get started quickly, write less code and develop a website faster.

4. ORM: Object-relational-mapping. ORM is a technique for converting data between two incompatible type systems, such as Ruby and SQL. We can't write commands in Ruby and expect SQL to interpret them. SQL allows us to code in Ruby and interact with the database.

5. Active Record: Active Record is a Rails ORM. It provides the interface and connection between the tables in a relational database and the Ruby code, allowing the programmer to manipulate database records.
