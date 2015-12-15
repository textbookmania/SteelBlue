## Textbook Mania version SteelBlue

Textbook Mania is a simple webapp where students can create offers that match with other users. This eliminates the "middle man" when looking for textbooks

###Features
With the Textbook Mania app, you can make buy/sell offers, match them with other users, create a simple profile page for other users to see. Also admin users have the ability to create new textbooks

##Make Offers
The student may make an offer by going to "add offer" tab. The user will then select the desired fields and submit the offer. 

##Offer Matches
The user's offers will show up on the main page. The user will also see the different offers that have matched in price with the desired book. It will contain information about the user that created the respective offer as well as information on the book being offered. Offers will expire after a certain amount of time.

##Profile Page
User will have a simple Profile Page where other users can view. This includes a first and last name, email address, and how that user would like to be contacted. Users can also add profile picture

##Admin Privelages
Some users will have admin privelages. This allows them to create edit and remove textbooks from the database 

###Installation and Usage

Download the system. Inside the config directory, open up
```
settings.development.json
```
and add in your UH Username to the allowed users field. Then, cd in the app directory, then execute:

```
meteor --settings ../config/settings.development.json
```

To deploy it use: 
```
meteor deploy my_app_name.meteor.com
```

###Help

