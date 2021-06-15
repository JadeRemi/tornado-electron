# tornado-electron
Application showing Tornado server interaction with Electron.
The server generates 10 to 50 random ID's on /getData request, which are then displayed in the app window.

## Prerequisites
To run this app you'll need `Node.js` and `pip` installed on your machine.

## Packaging
To get the app nice and packaged, run one of the following commands depending on your platform:
- `npm run package-win`
- `npm run package-mac`
- `npm run package-linux`

This will generate the packaged app in 'release-builds' folder and also install python dependencies.
