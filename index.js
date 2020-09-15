const core = require('@actions/core');
const github = require('@actions/github');
const giphy=require('@giphy/js-fetch-api');
global.fetch = require("node-fetch");


const gf = new giphy.GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')
 
// fetch 10 gifs

const getGifs=async ()=>{
  const gifs=await gf.search("dogs", {limit: 10 })
  gifs.data.forEach((each)=>{
    console.log("https://media1.giphy.com/media/"+each.id+"/200w.gif");
  })
}

try {
  
  const nameToGreet = core.getInput('who-to-greet');
  core.setOutput("name", nameToGreet);
  getGifs();
} catch (error) {
  core.setFailed(error.message);
}