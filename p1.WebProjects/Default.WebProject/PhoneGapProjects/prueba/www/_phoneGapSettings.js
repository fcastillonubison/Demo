function _phoneGapSettings() { 
 return {
    "appId": "com.yourCompany.yourApp",
    "preferences": {
        "permissions": "none",
        "orientation": "default",
        "target-device": "universal",
        "fullscreen": "false",
        "webviewbounce": "true",
        "prerendered-icon": "true",
        "stay-in-webview": "false",
        "ios-statusbarstyle": "black-opaque",
        "detect-data-types": "true",
        "exit-on-suspend": "false",
        "show-splash-screen-spinner": "true",
        "auto-hide-splash-screen": "true",
        "disable-cursor": "false",
        "android-minSdkVersion": "14",
        "android-installLocation": "auto",
        "phonegap-version": "cli-6.5.0",
        "FadeSplashScreen": "true",
        "FadeSplashScreenDuration": "2",
        "EnableViewportScale": "true",
        "MediaPlaybackRequiresUserAction": "true",
        "AllowInlineMediaPlayback": "false",
        "TopActivityIndicator": "gray",
        "BackupWebStorage": "none",
        "iosPersistentFileLocation": "Library",
        "KeyboardDisplayRequiresUserAction": "true",
        "SurpressesIncrementalRendering": "true",
        "android-maxSdkVersion": "",
        "android-targetSdkVersion": "",
        "KeepRunning": "true",
        "splash-screen-duration": "5000",
        "ErrorUrl": "error.html",
        "LoadingDialog": "Please wait, the app is loading.",
        "LoadingPageDialog": "Please wait, the data is loading.",
        "LoadUrlTimeoutValue": "20000",
        "AndroidPersistentFileLocation": "Internal",
        "android-build-tool": "gradle"
    },
    "plugins": {
        "cordova-plugin-media-capture": "npm",
        "cordova-plugin-file": "npm",
        "cordova-plugin-file-transfer": "npm",
        "cordova-plugin-geolocation": "npm",
        "cordova-plugin-media": "npm",
        "cordova-plugin-network-information": "npm",
        "cordova-plugin-dialogs": "npm",
        "cordova-plugin-splashscreen": "npm",
        "cordova-plugin-whitelist": "npm"
    }
};
}