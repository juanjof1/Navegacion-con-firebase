import 'dotev/config';


 export default{
  "expo": {
    "name": "firebase-navigatio",
    "slug": "firebase-navigatio",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
  },
  "firebase": {
    apikey: process.env.apikey,
  AUTHDOMAIN: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env. STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENTID,
  }
}
