# Facebook Campaign Stats Viewer with ReactJS and ViteJS


This is a basic ReactJS testing project using ViteJS. It integrates Facebook Graph APIs to fetch relevant statistics on campaigns for a specific Facebook page. Users can log in with Facebook, select the page, and then fetch and display all campaigns, ads, and ad sets associated with that page.

## Features

- **Facebook Login Integration**: Users can log in using their Facebook credentials.
- **Page Selection**: Users can select the Facebook page they want to fetch data for.
- **Campaign, Ads, and Ad Sets Display**: Fetches and displays all campaigns, ads, and ad sets associated with the selected Facebook page.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ubaid541/meta-dev-graph-api.git
   cd meta-dev-graph-api
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start Server:

  ```bash
npm run dev
```

4. Get the auth token from Facebook:
   
   Create a facebook developer account and make an app in it , now get the token from [here](https://developers.facebook.com/tools/explorer/v2/?method=GET&path=me%3Ffields%3Did%2Cname&version=v16.0)

  
