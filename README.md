# Mimesis

Rather than diegesis.

You'll need to install the chromedriver for selenium to work. Instructions can be found [here](https://www.kenst.com/2015/03/installing-chromedriver-on-mac-osx/)

Be sure to **Not** install 2.9 I know that will seem like the most recent version, but it's actually from 2014. I don't really know what crazy semver system they're using, but I when I installed, the most recent version was [2.38](https://chromedriver.storage.googleapis.com/index.html?path=2.38/) (from April of 2018).

Also, you'll need to run the standalone selenium server. I used [selenium-standalone](https://www.npmjs.com/package/selenium-standalone), which required that I install the Java SDK.

And make a screenshots directory.

And make a creds.json file that looks something like this

```
{
  "google": {
    "username": "",
    "password": ""
  }
}
```
