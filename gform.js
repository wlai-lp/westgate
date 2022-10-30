async function logResult(results) {

  var unirest = require('unirest');
  var bluetree = 'entry.844818188=' + results.bluetree.length;
  var lakes = 'entry.1754564389=' + results.lakes.length;
  var towns = 'entry.1615274287=' + results.towns.length;
  var villa = 'entry.1451373540=' + results.villa.length;
  var result = 'entry.1205059408='+ JSON.stringify(results);

  var req = unirest('POST', 'https://docs.google.com/forms/d/e/1FAIpQLScI66NA5vCTwr-b5CGylN45516EBq7m_GTMTJShrfAf7unOzQ/formResponse')
    .headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    .send(bluetree)
    .send(lakes)
    .send(towns)
    .send(villa)
    .send(result)
    .end(function (res) {
      if (res.error) throw new Error(res.error);
      // console.log(res.raw_body);
    });
}

exports.logResult = logResult;