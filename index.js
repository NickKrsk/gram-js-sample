import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js"; // const StringSession = require('telegram/sessions');// 
import input from "input"; 

const apiId = 123;
const apiHash = "";
const stringSession = new StringSession(""); // fill this later with the value from session.save()

const client = new TelegramClient(stringSession, apiId, apiHash, {});

/*
(async () => {
  console.log("Loading interactive example...");
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await input.text("Please enter your number: "),
    password: async () => await input.text("Please enter your password: "),
    phoneCode: async () =>
      await input.text("Please enter the code you received: "),
    onError: (err) => console.log(err),
  });
  console.log("You should now be connected.");
  console.log(client.session.save()); // Save this string to avoid logging in again
  await client.sendMessage("me", { message: "Hello!" });
})();
*/

(async function run() {
    await client.connect(); // This assumes you have already authenticated with .start()
  
    const result = await client.invoke(
      new Api.messages.SendMessage({
        peer: "",
        message: "Hello there!",
        randomId: BigInt("-4156887774564"),
        noWebpage: true,
        scheduleDate: 43,
      })
    );
    console.log(result); // prints the result
  })();