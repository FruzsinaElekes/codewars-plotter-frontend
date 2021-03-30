## The Story

Have you ever thought: _"If only I could see a visual depiction of my Codewars performance..."_? Look no further, this site is for you!

## Functionality

The application uses the public endpoints of the Codewars API (https://dev.codewars.com/). All you need to do in order to access your own (or anyone else's) statistics is to type in the respective Codewars username on the landing page.

### Stats Page

After entering the username on the landing page, you will be redirected to the stats page (unless the entered username is invalid - in this case you will be notified in an alert).

On the top, you will see a header section with the most important information about the user, like username, honor, rank for each trained language etc..

Below, you will see a plot for each trained language, number of completed katas broken down by rank. In a menu on the side you can also select to check the data in a collapsed view that allows easy comparison of languages.

### Kata Finder

The Kata finder page is there to help you browse the katas you have completed along with their completion details (e.g. completed languages and time of first completion). The list is paginated.

You can add filters to your search:

- **title:** type in a phrase or word from the kata's title
- **languages:** select one or more languages from the dropdown menu. E.g. java && python will result in katas completed in **both** languages
- **rank:** select a rank you are insterested in.

The three types of filters can be combined for a fine-grained search.

## Technical Details

This is the frontend app created in React. The app uses a dedicated API, serving all requested information. The repository of the backend app can be found here: https://github.com/FruzsinaElekes/codewars-plotter-backend

### How to Run

After cloning the repository, create a .env file based on the .env.template. If the backend server will not be running on http://localhost:8080, specify the required host and port in the REACT_APP_ORIGIN property.

<pre><code>
cd codewars_plotter_frontend
npm install
npm start
</code></pre>

The React server will start at: http://localhost:3000
