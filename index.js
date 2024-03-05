// index.js
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3002;
const cors = require("cors");

const jsonData = [
  {
    id: 1,
    name: "John",
    age: 30,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/download_29faf25ca3.png",
  },
  {
    id: 2,
    name: "Alice",
    age: 25,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/download_86b10ff20e.png",
  },
  {
    id: 3,
    name: "Bob",
    age: 35,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/hero_b27c5c7700.jpg",
  },
  {
    id: 4,
    name: "Jim",
    age: 63,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/how_much_does_a_cat_cost_jpeg_900x510_875ffb471c.jpg",
  },
  {
    id: 5,
    name: "Fat Tony",
    age: 58,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/how_much_does_a_cat_cost_jpeg_900x510_9079609b14.jpg",
  },
  {
    id: 6,
    name: "Fat Bob",
    age: 45,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/large_NZ_Courage_to_act_2x_293bb92378.png",
  },
  {
    id: 7,
    name: "Fat John",
    age: 78,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/large_NZ_Courage_to_act_2x_514e7f80c9.png",
  },
  {
    id: 8,
    name: "Ross",
    age: 68,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/Thinking_of_getting_a_cat_51c2b71c0b.png",
  },
  {
    id: 9,
    name: "Karen",
    age: 49,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/Thinking_of_getting_a_cat_fb4ea21c0a.png",
  },
  {
    id: 10,
    name: "Potato",
    age: 33,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/NZ_Courage_to_act_2x_d858bff8c7.png",
  },
  {
    id: 11,
    name: "Peach",
    age: 21,
    imgURL:
      "https://datacomstrapiblob.blob.core.windows.net/strapi7969/assets/how_much_does_a_cat_cost_jpeg_900x510_4ad8302e2b.jpg",
  },
];

app.use(cors());

app.get("/senddata", async (req, res) => {
  try {
    console.log("senddata endpoint hit");
    await axios.put("http://localhost:3000/api/insertdogdata", jsonData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    res.send("Data sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending data");
  }
});

app.listen(port, () => {
  console.log(`Express.js server running at http://localhost:${port}`);
});
