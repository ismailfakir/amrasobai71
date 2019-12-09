# amrasobai-project
### project url: https://amrasobai71.firebaseapp.com/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## firebase deployment

### install firebase cli
```
npm install -g firebase-tools
```
### build the project
```
npm run build
```

### within the root folder create a new file called .firebaserc with the following content:
```
{
  "projects":{
    "default" : "your-firebase-project-id"
  }
}
```
### create another configuration file called firebase.json, and then add the following content to it:
```
{
	"hosting":{
		"public":"dist",
		"ignore": [
			"firebase.json",
			"**/.*",
			"**/node_modules/**"
		],
		"rewrites":[
			{
				"source":"**",
				"destination":"/index.html"
			}
		]

	}
}
```
### login to firebase
```
firebase login
```
### deploy the app
```
firebase deploy
```
### build & deploy to firebase
```
npm run build && firebase deploy
```