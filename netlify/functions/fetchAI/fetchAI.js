import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  // eslint-disable-next-line no-undef
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const handler = async (event) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: event.body,
      max_tokens: 60,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: response.data,
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

// eslint-disable-next-line no-undef
module.exports = { handler };
