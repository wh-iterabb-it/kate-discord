const fs = require("fs");

const request = require("request");

const file = "catchart.png";
const fileReadStream = fs.createReadStream(file);

fileReadStream.on("finish", () => {
  fs.unlink(file);
});

async function getJSONResponse(body) {
  let fullBody = "";

  for await (const data of body) {
    fullBody += data.toString();
  }
  return JSON.parse(fullBody);
}

function writeToFile(filePath, arr) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath, { end: true });
    for (const row of arr) {
      file.write(row + "\n");
    }
    file.end();
    file.on("finish", () => {
      resolve(true);
    }); // not sure why you want to pass a boolean
    file.on("error", reject); // don't forget this!
  });
}

function downloadFromFromUrl(
  url,
  filename,
  callback = () => {
    console.log("done");
  }
) {
  try {
    request
      .head(url, async function (err, res) {
        console.log("content-type:", res.headers["content-type"]);
        console.log("content-length:", res.headers["content-length"]);

        await request({ url: url, resolveWithFullResponse: true }).pipe(
          await writeToFile(filename)
        );
      })
      .end();
    callback();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getJSONResponse, writeToFile, downloadFromFromUrl };
