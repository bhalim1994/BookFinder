# BookFinder

A mobile-first web app that uses Firebase, CSS, JS (and jQuery), and HTML to allow post-secondary students to post their used textbooks.

You can take a look at the app [here](https://bookfinder-2b31b.firebaseapp.com/login.html).

# Highlights
-	Set up Firebase database structure for a personalized user experience. 
    - Each user is linked to a unique ID, along with their university and university email.
    - A confirmation email is sent to their university email to ensure the user is a post-secondary student.
      - User will be unable to post books unless email is confirmed.
    - Allows users to set up their personal profile (including uploading profile picture).
    - Users are able to upload book postings to the database.
    - Pulls book postings (The book's image, price, description, etc.) according to the universiy they've set.
- Uploading book postings shows you a preview of the picture before submission using jQuery
- Created a static chat room widget that uploads the messages you send using jQuery

# Top level HTML files
- 404.html
- app-info.html
- chat-list.html
- chat-room.html
- index.html
- login.html
- main.html
- nav-bar.html
- post-page.html
- profile.html
- sell-success.html
- sell.html
- settings.html
- signup.html
- top-bar.html

# Subfolders
-	images
-	scripts
-	style

# File naming tips
-	user lowercase with no spaces
-	use dashes (not underscore) for word seperation
