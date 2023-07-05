const { Configuration, OpenAIApi } = require("openai");
const { jokeModel } = require("../models/jokeModels");

require("dotenv").config();

// Set up OpenAI API client
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const jokePostController = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      // Prompt validation failed
      throw new Error("No prompt was provided");
    }

    // Check if data already exists in the database
    const dataExist = await jokeModel.findOne({ keyword: prompt });

    if (dataExist) {
      // Return existing data if it exists
      return res.status(200).json(dataExist);
    }

    const systemMessage = `Act as an Expert Joke Generator. The user will provide you a keyword as input, and you have to generate Joke.`;

    const messages = [
      { role: "system", content: systemMessage },
      { role: "user", content: `the keyword for Joke is ${prompt}` },
    ];

    const gptResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const dataContent = gptResponse.data.choices[0].message.content;

    // Save the generated data to the database
    const addDataInDb = await jokeModel.create({
      keyword: prompt,
      content: dataContent,
    });

    res.status(200).json(addDataInDb);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "An error occurred while generating Joke" });
  }
};

module.exports = { jokePostController };