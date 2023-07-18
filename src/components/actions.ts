"use server";

// server action to allow configuration of LLM from .env.local

import dotenv from "dotenv";
import { parse } from "path";


export async function getBots() {
  const COMPFILE = "./bots/manifest.json";
  var bots = [];
  console.log("Loading Bot descriptions from "+COMPFILE);
  var fs = require('fs');
  const data = fs.readFileSync(COMPFILE);
  console.log(String(data));
  // run a parse here to force a server side error if the JSON is improperly formatted
  // It's much more difficult to debug client side
  var js = JSON.parse(String(data));
  return String(data);
}