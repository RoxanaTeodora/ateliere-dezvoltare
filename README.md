# ateliere-dezvoltare

## UI
- [React](https://legacy.reactjs.org/)
- [Tailwind CSS Components](https://tailwindui.com/components)
- [Firebase](https://firebase.google.com/)

## To do:
- Basic React project to get started and run locally. Please add notes in README if any install commands/dependencies must be downloaded.
- Firebase set-up. Please provide access to developers and document any requirements.
- React UI (Roxana start)
  - Homepage (no auth)
    -  Events list (mocked data)
    -  Nav bar (with a dummy button for Login)
  - Sign-up form
  - Login form
  - Reader capabilities
  - (Enhancement) Save events in a list
  - (Enhancement) Add button to see my list & remove items from my list (upcoming events/old events disabled)
  - Request role form (if reader -> writer/admin, if writer -> admin, if admin button is absent)
  - Writer capabilities
  - Create new event (in the future)
  - Update existent event (if is in future)
  - Delete event (if is in future)
  - See the events you published as a writer / admin
  - Admin capabilities
  - See requests to obtain role (username + role) -> accept / decline
- Firebase (Ruxi start)
  - Auth set-up
  - Database set-up
    - User, Event, Request
  - Ingest data
- Hosting on git



## Local setup
1. Install latest version of NodeJs
2. Install NPM
3. Run `npm install`
4. Run `npm install firebase`
5. Run `npm install -g firebase-tools`
6. Run `npm run dev`

Create a new file `.env` to set-up the credentials. The file should not be commited in git as it contains sensitive data.
Add the following env variables:

```.env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

You can get the credentials from [Firebase](https://console.firebase.google.com/project/ateliere-dezvoltare/settings/general/web:ZWM3MGMxMTktYWM5OS00NzhiLWFkZDEtNDUyNDllM2U5NDI3?nonce=1728229962026).

To deploy, open a terminal window, then navigate to or create a root directory for your web app.
- Sign in to Google `firebase login`
- Initiate your project. Run this command from your app's root directory: `firebase init`
- When you're ready, deploy your web app. Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
`firebase deploy` After deploying, view your app at ateliere-dezvoltare.web.app .