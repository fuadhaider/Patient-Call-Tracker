# Patient Call Tracker

## Manual
•	Browser refresh or "refresh" button can be used to reload the page and update the charts.
•	This is a Single Page Application.
•	Basic CSS and JS are used.
•	Flex box is used initially to make it simple and for future responsiveness.
•	JS Canvas is used to draw charts.

## Navigation:
•	Refresh <a> tag refreshes the whole page.

## Main Section:
•	JS Canvas makes Radial Bar Chart drawing path based on the random number generated ranging from 0 to 28.
•	The generated number is shown in the centre.

## Stacked Bar Chart:
•	JS Canvas makes 3 sets of 6 bar charts showing 6 colours on a single line. Each colour length is randomly drawn totalling the width of the section.
•	The headings of each colour are also drawn from JS Canvas.

## To Do

•	Single digit in the centre of Radial chart can be aligned in centre.
•	The gap between top sections and bottom section can be reduced.
•	With AJAX or Angular, related sections can be refreshed dynamically rather than the whole page, making it a true SPA.
•	Sections of HTML codes could have been separated on separate files.
•	Sass (SCSS) could have been used to make CSS more organised, dynamic and reusable.
•	JS code could have been made more Object Oriented, simpler and can be separated on separate files using ES6.
