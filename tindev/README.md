## Dependencies
Mobile application to consume the api exposed on the local machine. http://localhost:3333/. Access the backend folder and start the server. 

## Environment setup
The following steps is for a Linux environment and Android plataform, you may follow the full steps in Rocketseat site.

1. Download the SDK in the option "Command Line Only" from Android Website https://developer.android.com/studio/#downloads
2. Create a folder ```~/Android/Sdk``` and extract the package downloaded into this new folder
3. Add the following section to your ```~/.bashrc``` or ```~/.bash_profile```
  ```
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
  ```
4. Run the following command: ```$ ~/Android/Sdk/tools/bin/sdkmanager "platform-tools" "platforms;android-27" "build-tools;27.0.3"```

You may use your Android smartphone or an emulator like Genymotion. I suggest to use your personal smartphone and for this follow https://developer.android.com/studio/debug/dev-options

5. Install the react-native module as global ```yarn global add react-native-cli```

6 To connect to your localhost without changing the IP, run: ```adb reverse tcp:3333 tcp:3333```

## Installing the application for the first time
Run ```yarn react-native run-android```






## Troubleshoot
If you are running on the cellphone, if need to send the command to application 
 - Show developer menu : ```adb shell input keyevent 82```
 - Reload: ```adb shell input text "RR"```
 
