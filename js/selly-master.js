function postHotLead() {
  $.ajax({
    url: '',
    data: `{
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
              "footer": "${rides} | ${locations} | ${launch}",
          }
      ]
    }`,
    type: 'POST'
  })
    .done(function(reply) {
      console.log('POST to Slack succeeded');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error in POST to Slack: ' + errorThrown.toString());
    });
}

// If lead needs account enabled, notify team.
function postEnableAccount() {
  $.ajax({
    url: '',
    data: `{
      "attachments": [
          {
              "mrkdwn_in": ["text"],
              "color": "#70F8BA",
              "pretext": "*✅ Enable Account*",
              "fields": [
                  {
                    "value": "- ${firstName} at ${company}\n- ${email}\n- ${phone}",
                    "short": false
                  }
              ],
              "footer": "${rides} | ${locations} | ${launch}",
          }
      ]
    }`,
    type: 'POST'
  })
    .done(function(reply) {
      console.log('POST to Slack succeeded');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error in POST to Slack: ' + errorThrown.toString());
    });
}

// If lead says "Won't work", notify team.
function postWontWork() {
  $.ajax({
    url: '',
    data: `{
      "attachments": [
          {
              "mrkdwn_in": ["text"],
              "color": "#F29E4C",
              "pretext": "*👩‍⚕️ Are they a dead lead?*",
              "fields": [
                  {
                    "value": "- ${firstName} at ${company}\n- ${email}\n- ${phone}",
                    "short": false
                  }
              ],
              "footer": "${rides} | ${locations} | ${launch}",
          }
      ]
    }`,
    type: 'POST'
  })
    .done(function(reply) {
      console.log('POST to Slack succeeded');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error in POST to Slack: ' + errorThrown.toString());
    });
}

// If lead says "Need time", notify team.
function postGetInTouch() {
  $.ajax({
    url: '',
    data: `{
      "attachments": [
          {
              "mrkdwn_in": ["text"],
              "color": "#EFEA5A",
              "pretext": "*⏳ Why do they need time?*",
              "fields": [
                  {
                    "value": "- ${firstName} at ${company}\n- ${email}\n- ${phone}",
                    "short": false
                  }
              ],
              "footer": "${rides} | ${locations} | ${launch}",
          }
      ]
    }`,
    type: 'POST'
  })
    .done(function(reply) {
      console.log('POST to Slack succeeded');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error in POST to Slack: ' + errorThrown.toString());
    });
}

// If lead says "Ready to sign up", notify team.
function postReadySignUp() {
  $.ajax({
    url: '',
    data: `{
      "attachments": [
          {
              "mrkdwn_in": ["text"],
              "color": "#6CD4FF",
              "pretext": "*🥳 Ready to sign up*",
              "fields": [
                  {
                    "value": "- ${firstName} at ${company}\n- ${email}\n- ${phone}",
                    "short": false
                  }
              ],
              "footer": "${rides} | ${locations} | ${launch}",
          }
      ]
    }`,
    type: 'POST'
  })
    .done(function(reply) {
      console.log('POST to Slack succeeded');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error in POST to Slack: ' + errorThrown.toString());
    });
}

// If lead asks for Lyft availability, notify team.
function postAvailability() {
  $.ajax({
    url: '',
    data: `{
      "attachments": [
          {
              "mrkdwn_in": ["text"],
              "color": "#094D92",
              "pretext": "*📍 Check pick up times*",
              "fields": [
                  {
                    "value": "- ${countiesResponse} in ${stateResponse}",
                    "short": false
                  }
              ],
              "footer": "${firstName} | ${email} | ${phone}",
          }
      ]
    }`,
    type: 'POST'
  })
    .done(function(reply) {
      console.log('POST to Slack succeeded');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error in POST to Slack: ' + errorThrown.toString());
    });
}

// If lead asks for partnership, notify team.
function postPartnership() {
  $.ajax({
    url: '',
    data: `{
      "attachments": [
          {
              "mrkdwn_in": ["text"],
              "color": "#92374D",
              "pretext": "*🤝 Review partnership request*",
              "fields": [
                  {
                    "value": "${partnershipResponse}",
                    "short": false
                  }
              ],
              "footer": "${firstName} | ${email} | ${phone}",
          }
      ]
    }`,
    type: 'POST'
  })
    .done(function(reply) {
      console.log('POST to Slack succeeded');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error in POST to Slack: ' + errorThrown.toString());
    });
}

// If lead asks for gpo check, notify team.
function postGpoCheck() {
  $.ajax({
    url: '',
    data: `{
      "attachments": [
          {
              "mrkdwn_in": ["text"],
              "color": "#DE7C5A",
              "pretext": "*📝 Check GPO in GP-OOGLE*",
              "fields": [
                  {
                    "value": "- ${orgNameResponse}\n- ${websiteResponse}\n- ${altOrgNameResponse}",
                    "short": false
                  }
              ],
              "footer": "${firstName} | ${email} | ${phone}",
          }
      ]
    }`,
    type: 'POST'
  })
    .done(function(reply) {
      console.log('POST to Slack succeeded');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error in POST to Slack: ' + errorThrown.toString());
    });
}

// If lead asks for manual account built, notify team.
function postManualBuild() {
  $.ajax({
    url: '',
    data: `{
      "attachments": [
          {
              "mrkdwn_in": ["text"],
              "color": "#D00000",
              "pretext": "*🛠 Manually build their account",
              "fields": [
                  {
                    "value": "- ${firstName} at ${company}\n- ${email}\n- ${phone}",
                    "short": false
                  }
              ],
              "footer": "${rides} | ${locations} | ${launch}",
          }
      ]
    }`,
    type: 'POST'
  })
    .done(function(reply) {
      console.log('POST to Slack succeeded');
    })
    .fail(function(xhr, status, errorThrown) {
      console.log('Error in POST to Slack: ' + errorThrown.toString());
    });
}
