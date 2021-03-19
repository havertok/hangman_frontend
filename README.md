Readme for WIP project

This is the front end for the Hangman project.  Right now it will fetch all available puzzles from the backend.  Users that are not logged in should have only 12 guesses (letters) available to them.  Single games pop up as a modal when a user clicks a puzzle in the display grid.  If that puzzle if solved or if too many guesses have been spent, the modal will not allow any letter submissions.  Game display changes in real time with letter submissions and posts the modified puzzle to the back end on modal close.  This triggers a refresh of the puzzle grid from the back end to ensure all puzzles are uptodate.

Login/registration form now implemented (WIP)
