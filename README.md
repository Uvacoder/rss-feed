
# RSS Feeds Project

This is a Mini RSS Feeds Web App use for get data from Blog which supported RSS.


## Tech Stack

**Client:** ReactJS, AntDesign

**Server:** None


## API and Library

- XMLHttpRequest

- Rss-Parser


## Problems solved

- Fix CORS error when connect XHR and Rss-Parser to the URL

- Handle error when filter the data

## How to use?

1) Click button "Add new RSS", the pop-up panel will show up for input URL

2) Input URL into the input (Ex: https://tuoitre.vn/, https://dev.to/) supported RSS

3) Click button "Check" and wait for checking whether the URL supported RSS

4) Check messages show below the input. If its color is green, this URL is valid.
It will take you about 5 seconds to check, if it checking longer, maybe CORS problem is come up.
To fix this, click to "https://cors-anywhere.herokuapp.com/corsdemo" and click button "Request temporary access to the demo server", then try step 4 again.

5) Click button "Add to list" to add this URL, this web app auto change it to RSS URL

6) Click on the RSS URL on the left side to fetch RSS Feeds data.

7) Click on the link in Related Post item to access.

## Ideas

I wrote a function using XMLHttpRequest to get all the XML of the html file from the URL.
Then I extracting the link which has rel="alternate" and type="application/rss+xml" and get the href value.
This value is RSS URL.

Then I wrote a function to get RSS data from the RSS URL by using Rss-Parser Library.

Show all data to the UI.

## Deployment
Netlify: https://mini-rss-reader.netlify.app/

Github: https://github.com/phamdanhdev/rss-feed


## 🚀 About Me
👦 **Ethan Pham**

✉️ Email: phamdanh.dev@gmail.com


