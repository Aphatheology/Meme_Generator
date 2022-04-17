
Commands used in setting up this project
### `npx create-react-app app-folder-name`
### `cd app-folder-name`
### `npm start`

Setup Github Pages following instruction on https://www.pluralsight.com/guides/deploying-github-pages-with-create-react-app and https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/
### `npm install gh-pages — save-dev`

Addd these line below the "private": true,
### `"homepage": "https://your-github-username.github.io/repository-name",`

Add these 2 lines to the Scripts object
   ` "predeploy": "npm run build",`
   ` "deploy": "gh-pages -d build",`

Then 
### `npm run deploy -- -m "Your custom commit message`
This will push the necessary files to the gh-pages branch, if no custom commit message is specified, the default message "Updates" will be used.

To push all your files to the master branch, do these on git
`git add .`
`git commit -m "your commit message"`
`git push origin master`
