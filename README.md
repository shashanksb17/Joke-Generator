# Joke-Generator



## Frontend Documentation

### Features
- Joke Generation: Allows users to generate jokes based on a specified keyword.
- Dynamic Content Display: Displays the generated joke in real-time on the webpage.
- User Interaction: Users can enter a keyword and click the "Generate Joke" button to initiate the joke generation process.

### Functionalities
- User Input: Accepts a keyword as input to generate a joke.
- API Integration: Sends a GET request to the backend API to retrieve the generated joke.
- Content Display: Dynamically updates the webpage to display the generated joke.
- Loader Animation: Shows a loader animation while the content is being generated.

### API Endpoint
- Method: GET
- Endpoint: `/generate-joke?keyword={keyword}`
- Parameters:
  - `keyword` (required): Specifies the keyword for generating the joke.
- Response: JSON object containing the generated joke.

## Backend Documentation

### Features
- Joke Generation: Utilizes the OpenAI GPT-3.5 Turbo model to generate jokes based on a given keyword.
- API Endpoint: Provides an endpoint to handle requests for generating jokes.

### Functionalities
- User Input: Accepts a keyword as a query parameter for generating the joke.
- OpenAI Integration: Utilizes the OpenAI API to generate the joke based on the provided keyword.
- Error Handling: Handles errors that may occur during the joke generation process.

### API Endpoint
- Method: GET
- Endpoint: `/generate-joke`
- Query Parameters:
  - `keyword` (required): Specifies the keyword for generating the joke.
- Response: JSON object containing the generated joke.

---

| Frontend Documentation                                          | Backend Documentation                                           |
| -------------------------------------------------------------- | -------------------------------------------------------------- |
| **Features**                                                   | **Features**                                                    |
| - Joke Generation: Allows users to generate jokes based on a specified keyword. | - Joke Generation: Utilizes the OpenAI GPT-3.5 Turbo model to generate jokes based on a given keyword. |
| - Dynamic Content Display: Displays the generated joke in real-time on the webpage. | - API Endpoint: Provides an endpoint to handle requests for generating jokes. |
| - User Interaction: Users can enter a keyword and click the "Generate Joke" button to initiate the joke generation process. |                                                              |
| **Functionalities**                                             | **Functionalities**                                              |
| - User Input: Accepts a keyword as input to generate a joke.   | - User Input: Accepts a keyword as a query parameter for generating the joke. |
| - API Integration: Sends a GET request to the backend API to retrieve the generated joke. | - OpenAI Integration: Utilizes the OpenAI API to generate the joke based on the provided keyword. |
| - Content Display: Dynamically updates the webpage to display the generated joke. | - Error Handling: Handles errors that may occur during the joke generation process. |
| - Loader Animation: Shows a loader animation while the content is being generated. |                                                              |
| **API Endpoint**                                               | **API Endpoint**                                                |
| - Method: GET                                                 | - Method: GET                                                   |
| - Endpoint: `/generate-joke?keyword={keyword}`                | - Endpoint: `/generate-joke`                                    |
| - Parameters:                                                  | - Query Parameters:                                             |
|   - `keyword` (required): Specifies the keyword for generating the joke. |   - `keyword` (required): Specifies the keyword for generating the joke. |
| - Response: JSON object containing the generated joke.          | - Response: JSON object containing the generated joke.          |

---

Please note that the table format might not be fully

 visible in plain text format. It is recommended to view it in a Markdown editor or viewer to see the table structure properly.

