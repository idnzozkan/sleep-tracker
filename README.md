# SleepTracker

SleepTracker is an application that lets you store your daily sleep times and presents your sleep statistics.


## Installation

Set the API endpoint by creating a file named `.env.local` under the `frontend` folder and type the following into it:

```bash
REACT_APP_API_BASE_URL="http://localhost:8080"
```

Set your JWT Secret Key by creating a file named `.env` under the `backend` folder like the following:

```bash
JWT_SECRET_KEY="thisisasecret"
```


## Running SleepTracker
Open your terminal and run the following command:
```bash
$ docker-compose up
```
After that, you should be able to display the app on [http://localhost:5000](http://localhost:5000) in your browser.


## To-Do

- [ ] Add tests
- [ ] Improve styles
- [ ] Add validation messages
- [ ] Make responsive
- [ ] Prepare a landing page
- [ ] Update dashboard screen for new user
- [ ] Add user profile photo feature
- [ ] Export report by generating a PDF file
- [ ] Add edit and delete entry functionalities


## Tech Stack

**Frontend:** React.js, Redux, Styled Components, Ant Design

**Backend:** Express.js, Mongoose, JWT


## License

MIT License

Copyright (c) 2021 Deniz Ozkan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
