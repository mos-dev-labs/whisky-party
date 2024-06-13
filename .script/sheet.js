const {GoogleSpreadsheet} = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

const fs = require('fs');
require('dotenv').config();

function getGoogleSheet() {
  // Initialize the sheet - doc ID is the long id in the sheets URL

  const sheetId = process.env.SHEET_ID;
  const email = process.env.EMAIL;
  const key = process.env.KEY;

  const serviceAccountAuth = new JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

  try {
    (async () => {
      try {
        await doc.loadInfo();

        const config = doc.sheetsByTitle['config'];
        const list = doc.sheetsByTitle['list']

        const configRow = await config.getRows();
        const listRow = await list.getRows();

        const configs = configRow.find((it) => it._rowNumber === 2)['_rawData'];

        const title = configs[0]
        const date = configs[1]
        const peoples = configs[2]
        const times = configs[3]
        const place = configs[4]
        const placeUrl = configs[5]
        const notice = configs[6]
        const memo = configs[7]
        const rule = configs[8]

        const whiskyList = listRow.map((it) => {
          const row = it['_rawData'];
          const key = row[0];
          const name = row[1];
          const type = row[2];
          const degree = row[3] || '';
          const description = row[4] || '';
          const imageUrl = row[5] || null;

          return {
            id: key,
            name,
            type,
            degree,
            description,
            imageUrl
          }
        });

        const configMap = {
          title,
          date,
          count: whiskyList.length,
          peoples,
          times,
          place,
          placeUrl,
          notice,
          memo,
          rule
        }

        const json = {
          config: configMap,
          whiskyList
        };

        fs.writeFile(
          'src/entities/data/index.json',
          JSON.stringify(json),
          {flag: 'w+'},
          function (err) {
            if (err) return console.error(err);
          }
        );
      } catch (e) {
        console.error(e);
      }
    })();
  } catch (e) {
    console.error(e);
  }

  // Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
}

getGoogleSheet();