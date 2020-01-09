// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

const functions = require("firebase-functions");
const healthcareUrl = functions.config().slack.healthcare_webhook;
const corporateTravelUrl = functions.config().slack.corp_trav_webhook;
const requestPromise = require("request-promise");

exports.postHotLead = functions.https.onCall(data => {
  const {
    need,
    email,
    company,
    phone,
    rides,
    launch,
    firstName,
    webHookType
  } = data;
  let url;

  if (webHookType === "healthCare") {
    url = healthcareUrl;
  } else if (webHookType === "corporateTravelUrl") {
    url = corporateTravelUrl;
  }
  console.log("webHookType: " + webHookType);
  console.log("url: " + url);

  return requestPromise({
    url: url,
    method: "POST",
    body: `{
      "attachments": [
				{
					"mrkdwn_in": ["text"],
					"color": "#EA0B8C",
					"pretext": "*🔥 Hot Lead - Needs ${need}*",
					"fields": [
							{
								"value": "- ${firstName} at ${company}\n- ${email}\n- ${phone}",
								"short": false
							}
					],
					"footer": "${rides} employees | ${launch}",
				}
      ]
    }`
  })
    .then(response => {
      console.log("SUCCESS! Posted", response);
      return response;
    })
    .catch(err => {
      console.log("ERROR! Posting", err);
      return null;
    });
});
