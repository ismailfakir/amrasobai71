# amrasobai-project

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

### firebase deploy
see https://medium.com/@rachidsakara/how-to-deploy-vue-js-applications-with-firebase-hosting-40cfa7f724e4

npm install -g firebase-tools
npm run build

within the root folder create a new file called .firebaserc with the following content: .firebaserc
{
  "projects":{
    "default" : "your-firebase-project-id"
  }
}

create another configuration file called firebase.json, and then add the following content to it:
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

firebase login
firebase deploy

npm run build && firebase deploy