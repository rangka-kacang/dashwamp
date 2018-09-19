# What is Dashwamp?
A lightweight dashboard used to manage Windows, Apache, MariaDB, and PHP software stack.

![](https://github.com/rangka-kacang/dashwamp/blob/develop/screenshot.jpg)

# How to install?

### 1. Make sure you have [NodeJS and NPM](https://www.npmjs.com/get-npm) installed on your machine.
`npm install`

### 2. Clone develop branch from repository
`git clone -b develop https://github.com/rangka-kacang/dashwamp.git`

### 3. Install [electronjs](https://electronjs.org/)
`npm install electron` or `npm install electron@beta`

### 4. Install [electron-reload](https://www.npmjs.com/electron-reload)
`npm install electron-reload`

### 5. Install [UIkit](https://getuikit.com/)
`npm install uikit`

# How to run?
`npm start`

# How to build?
This project is still under development, so it's not quite ready to build yet.

## To-do list?
- Create a fully functional dashboard template.
- Integrate VueJS (or maybe ReachJS?) for dynamic data manipulation.
- Include the latest Apache, MariaDB, and PHP packages.
- Create a simple editor to edit config files for respective software stack (httpd.conf, mysql.ini, php.ini).
- Create a start/stop command for each services.
- Add extensions/addons to make it easier for users to install CodeIgniter, Laravel, WordPress and other open source PHP software from the dashboard. Probably using composer and send the function through NodeJS wintool cli?
- Auto-update for packages.
- Many more...
