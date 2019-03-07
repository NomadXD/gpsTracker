# Real Time gps tracking system for Android devices

![alt text](https://github.com/NomadXD/gpsTracker/blob/master/lib/web.png)

This project is a combination of an android application that tracks users by gps and a web application that displays users current location in real time.

## Getting Started

Clone the git repo in a desired location in your local machine.The root directory contain two main sub directories.
The directory ```map``` is related with the web application and the directory ```abc``` is related with the react-native mobile application

### Prerequisites

To run the web application you don't need to install anything specific since it is developed using basic web technologies.

Firebase is used as the databse.So before the full implementation you need to create a firebase account and create a project in firebase and set up the required configurations.

#### Setting up a firebase project

You can refer the firebase offcial documentation.
(https://firebase.google.com/docs/android/setup)

#### Conneting the firebase project with your local project(mobile application)

You need to go to directory ```abc/node_modules/react-native-background-location-tracker/android/src/main/java/com/backgroundlocationtracker/```. Open the java file ```LocationService.java```.

At the top of the file include the following lines


```
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

```
And make a refrence to the databse using your database information(See official documentation)

#### Connecting the firebase project with your local project(web application)

You need to go to directory map in your root directory and open the file app.js.Include the following lines at the top of the file by replacing the fields with your firebase project information.

```
var config = {
    apiKey: "AIzaSyC9RiCeNdc_AmjLlkNjfeFo4Ok_QhvuKGs",
    authDomain: "androidtracker-16411.firebaseapp.com",
    databaseURL: "https://androidtracker-16411.firebaseio.com",
    projectId: "androidtracker-16411",
    storageBucket: "androidtracker-16411.appspot.com",
    messagingSenderId: "344668856531"
  };
  firebase.initializeApp(config);

```


### Installing

A step by step series of examples that tell you how to get a development env running with react-native.

You can refer the official react-native documentation from the following link.

(https://facebook.github.io/react-native/docs/getting-started.html)

## Running the tests

To be updated in the readme in the next version

### Break down into end to end tests

To be updated in the readme in the next version


### And coding style tests

To be updated in the readme in the next version


## Deployment

### Warning
This project is in the debug version. Firebase API is free up to it's threshold values. Exceeding the limits will disable the firebase connection.This is an open source project and not to be used for commercial purposes.Firebase is not available for free for commercial purposes.

## Built With

* [React Native](https://facebook.github.io/react-native/docs/getting-started.html) - The mobile framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [Gradle](https://docs.gradle.org/current/userguide/what_is_gradle.html) - Build automation tool
* [NPM](https://docs.npmjs.com/)- Package Manager

## Contributing

To be updated in the readme in the next version

## Versioning

To be updated in the readme in the next version

## Authors

* **Lahiru Udayanga** - *Initial work* - [Github](https://gist.github.com/NomadXD)



## License

To be updated in the readme in the next version

## Acknowledgments

* Hat tip to anyone whose code was used
* Special thanks to Dr.Uthayasanker Thayasivam,Senior Lecturer of University of Moratuwa,Sri Lanka for the guidance.
