const core = require('@actions/core');
const github = require('@actions/github');
const giphy=require('@giphy/js-fetch-api');
global.fetch = require("node-fetch");


const gf = new giphy.GiphyFetch('sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh')
let gifURL;
 
// fetch 10 gifs

const getGifs=async ()=>{
  const gifs=await gf.search("dogs", {limit: 1 })
  gifs.data.forEach((each)=>{
    gifURL="https://media1.giphy.com/media/"+each.id+"/200w.gif";
  })
}

try {
  
  const nameToGreet = core.getInput('who-to-greet');
  core.setOutput("name", nameToGreet);
  core.setOutput("gif", gifURL);
  getGifs();
} catch (error) {
  core.setFailed(error.message);
}