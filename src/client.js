// const tmi = require("tmi.js");
import tmi from 'tmi.js';

export const client = new tmi.Client({
    connection: {
        secure: true,
        reconnect: true,
    },
    channels: ["paymoneywubby"],
});

export function runClient() {
    client.on("message", (channel, tags, message, self) => {
      return `${tags["display-name"]}: ${message}`;
    });
}