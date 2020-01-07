let account = {};
let need;
let subIndustry;
let locations;
let rides;
let launch;
let i;
let param;
let firstName;
let email;
let phone;
let company;
let needTimeDate;
let needTimeResponse;
let wontWorkResponse;
let stateResponse;
let countiesResponse;
let partnershipResponse;
let orgNameResponse;
let websiteResponse;
let altOrgNameResponse;
let webHookType;

// Corporate Travel webhook
let urlOne = "https://hooks.slack.com/services/";
let urlTwo = "T029A67TC/BR0BDV7CL/bWywJuS1w0bLKetiAbW14kFi";

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/functions");

// Firebase Config
// const firebaseConfig = {
//   apiKey: 'AIzaSyAwjwKRFqxvPEgL3274LfppYh1AYcA2b80',
//   authDomain: 'lyftbusiness-help.firebaseapp.com',
//   databaseURL: 'https://lyftbusiness-help.firebaseio.com',
//   projectId: 'lyftbusiness-help',
//   storageBucket: 'lyftbusiness-help.appspot.com',
//   messagingSenderId: '838701117329',
//   measurementId: 'G-PL154EN3G0'
// };

// Get the Google Analytics service for Firebase
// const analytics = firebase.analytics();

// Test GA event logging
// analytics.logEvent('first_notification', { happened: 'today!' });

(function($) {
  "use strict"; // Start of use strict
  console.log("where am I");
  window.addEventListener("load", function() {
    // Initialize Cloud Functions through Firebase
    var postHotLead = firebase.functions().httpsCallable("postHotLead");

    // Collect variables in the query params
    let params = location.search
      .substr(1)
      .replace("%20", " ")
      .replace("%27", "")
      .split("&");
    var account = {};
    for (i = 0; i < params.length; i++) {
      param = params[i].split("=");
      account[param[0]] = param[1];
    }

    firstName = account.firstName;
    email = account.email;
    phone = account.phone;
    company = account.company;
    webHookType = "healthCare";

    $("#welcome").html("Welcome, " + firstName + "!");

    // If query param variables are not provided
    if (
      firstName == null ||
      email == null ||
      phone == null ||
      company == null
    ) {
      // Collect them in a modal
      $("#init-acct-info").modal("show");

      $("#save-init-acct-info").on("click", function() {
        // Store modal inputs in variables
        firstName = $("#first-name").val();
        email = $("#email").val();
        phone = $("#phone").val();
        company = $("#company").val();

        // If inputs are completed, hide modal and save fields
        if (
          firstName.length > 0 &&
          email.length > 0 &&
          phone.length > 0 &&
          company.length > 0
        ) {
          $("#completed-form-alert").removeClass("d-none");
          $("#welcome").html("Welcome, " + firstName + "!");
          window.setTimeout(function() {
            $("#completed-form-alert").addClass("d-none");
            $("#init-acct-info").modal("hide");
          }, 1000);
        } else {
          // If fields aren't completed, re-show modal & an alert
          $("#init-acct-info").modal("show");
          $("#incomplete-form-alert").removeClass("d-none");
          window.setTimeout(function() {
            $("#incomplete-form-alert").addClass("d-none");
          }, 2750);
        }
      });
    }

    // On click, launch qualifying modal
    $(".request-more-info").on("click", function() {
      need = "more info";
      // Show modal
      $("#qualifying-questions-modal").modal("show");
      $("#save-more-info").removeClass("d-none");

      // Finish modal, return to landing screen
      $("#save-more-info").on("click", function() {
        $(".modal-header").addClass("d-none");
        $(".qualifying-question").addClass("d-none");
        $(".modal-footer").addClass("d-none");
        $("#need-buttons").addClass("d-none");

        $(".modal-body").prepend(`
        <div id="contact-request-confirmation" class="alert alert-success mx-3 my-3" role="alert">
            Got it. Our team will call you within 24-business hours to help. You're all set.
        </div>
      `);

        window.setTimeout(function() {
          $("#qualifying-questions-modal").modal("hide");
        }, 7500);
        postHotLead({
          need,
          email,
          company,
          phone,
          rides,
          launch,
          firstName,
          webHookType
        }).then(function(result) {
          // Read result of the Cloud Function.
          console.log("cloud fn result: ", result);
        });
      });

      // Record "More info" in Google Analytics
      gtag("event", "Business Travel", {
        event_category: "Need",
        event_label: "more info"
      });
    });

    // On click, launch qualifying modal
    $(".request-sign-up-help").on("click", function() {
      need = "sign up help";
      // Show modal
      $("#qualifying-questions-modal").modal("show");
      $("#save-sign-up-help").removeClass("d-none");

      // Finish modal, show "more info" FAQs
      $("#save-sign-up-help").on("click", function() {
        $(".modal-header").addClass("d-none");
        $(".qualifying-question").addClass("d-none");
        $(".modal-footer").addClass("d-none");
        $("#need-buttons").addClass("d-none");

        $(".modal-body").prepend(`
        <div id="contact-request-confirmation" class="alert alert-success mx-3 my-3" role="alert">
            Got it. Our team will call you within 24-business hours to help. You're all set.
        </div>
      `);

        window.setTimeout(function() {
          $("#qualifying-questions-modal").modal("hide");
        }, 7500);
        postHotLead({
          need,
          email,
          company,
          phone,
          rides,
          launch,
          firstName,
          webHookType
        }).then(function(result) {
          // Read result of the Cloud Function.
          console.log("cloud fn result: ", result);
        });
      });

      // Record "Sign up help" in Google Analytics
      gtag("event", "Business Travel", {
        event_category: "Need",
        event_label: "sign up help"
      });
    });

    // On click, launch qualifying modal
    $(".request-set-up-help").on("click", function() {
      need = "onboarding help";
      //Show modal
      $("#qualifying-questions-modal").modal("show");
      $("#save-onboarding-help").removeClass("d-none");

      // Finish modal, show "more info" FAQs
      $("#save-onboarding-help").on("click", function() {
        $(".modal-header").addClass("d-none");
        $(".qualifying-question").addClass("d-none");
        $(".modal-footer").addClass("d-none");
        $("#need-buttons").addClass("d-none");

        $(".modal-body").prepend(`
        <div id="contact-request-confirmation" class="alert alert-success mx-3 my-3" role="alert">
            Got it. Our team will call you within 24-business hours to help. You're all set.
        </div>
      `);

        window.setTimeout(function() {
          $("#qualifying-questions-modal").modal("hide");
        }, 7500);
        postHotLead({
          need,
          email,
          company,
          phone,
          rides,
          launch,
          firstName,
          webHookType
        }).then(function(result) {
          // Read result of the Cloud Function.
          console.log("cloud fn result: ", result);
        });
      });

      // Record "Onboarding help" in Google Analytics
      gtag("event", "Business Travel", {
        event_category: "Need",
        event_label: "onboarding help"
      });
    });

    // If exit need message modal, clear #need-message
    $("#need-message-exit").on("click", function() {
      $("#save-more-info").addClass("d-none");
      $("#save-sign-up-help").addClass("d-none");
      $("#save-onboarding-help").addClass("d-none");
    });

    // On click of ride-selection buttons, add value to rides variable
    $("button[name=ride-selection]").on("click", function() {
      rides = $(this).attr("value");
      console.log(rides);
      $("button[name=ride-selection]").removeClass("active");
      $(this).addClass("active");

      // Record "How many employees need rides" in Google Analytics
      gtag("event", "Business Travel", {
        event_category: "How many employees need rides?",
        event_label: rides
      });
    });

    // On click of launch-selection buttons, add value to launch variable
    $("button[name=launch-selection]").on("click", function() {
      launch = $(this).attr("value");
      console.log(launch);
      $("button[name=launch-selection]").removeClass("active");
      $(this).addClass("active");

      // Record "When do you want to launch?" in Google Analytics
      gtag("event", "Business Travel", {
        event_category: "When do you want to launch?",
        event_label: launch
      });
    });

    // Show "Sign Up Help" FAQs
    $("#ready-to-sign-up").on("click", function() {
      $("#more-info-header").addClass("d-none");
      $("#more-info-wrapper").addClass("d-none");
      $("#sign-up-header").removeClass("d-none");
      $("#sign-up-wrapper").removeClass("d-none");
      $(".more-info-faq").addClass("d-none");
      $(".sign-up-faq").removeClass("d-none");

      postReadySignUp();

      // Record "Ready to sign up" in Google Analytics
      gtag("event", "Concierge", {
        event_category: "Decision after requesting more info",
        event_label: "Ready to sign up"
      });
    });

    // Show "Get in touch" modal
    $("#get-in-touch").on("click", function() {
      $("#get-in-touch-modal").modal("show");

      $("#save-get-in-touch").on("click", function() {
        // Store modal inputs in variables
        needTimeDate = $("#get-in-touch-input").val();
        needTimeResponse = $("#get-in-touch-response-input").val();
        $("#completed-alert-get-in-touch").removeClass("d-none");

        $("#get-in-touch").addClass("d-none");
        $("#get-in-touch-response-input").addClass("d-none");
        $("#get-in-touch-subquestion").addClass("d-none");

        window.setTimeout(function() {
          $("#completed-alert-get-in-touch").addClass("d-none");
          $("#get-in-touch-modal").modal("hide");
        }, 3500);

        postGetInTouch();
      });

      // Record "Get in touch" in Google Analytics
      gtag("event", "Concierge", {
        event_category: "Decision after requesting more info",
        event_label: "Get in touch"
      });
    });

    // Send Manual Build notification + show success alert
    $("#save-manual-build").on("click", function() {
      $("#success-alert-manual-build").removeClass("d-none");
      $("#enable-account").addClass("d-none");

      window.setTimeout(function() {
        $("#success-alert-manual-build").addClass("d-none");
      }, 15000);

      postManualBuild();

      // Record "manual build" in Google Analytics
      gtag("event", "Concierge", {
        event_category: "Manual request",
        event_label: "Manually build account"
      });
    });

    // Send ETA check notification + show success alert
    $("#check-availability").on("click", function() {
      $("#check-availability-modal").modal("show");

      $("#save-check-availability").on("click", function() {
        // Store modal inputs in variables
        stateResponse = $("#state").val();
        countiesResponse = $("#counties").val();
        $("#completed-alert-check-availability").removeClass("d-none");

        $("#state-input-group").addClass("d-none");
        $("#counties-input-group").addClass("d-none");

        window.setTimeout(function() {
          $("#completed-alert-check-availability").addClass("d-none");
          $("#check-availability-modal").modal("hide");
        }, 5000);

        postAvailability();

        // Record "Is Lyft available" in Google Analytics
        gtag("event", "Concierge", {
          event_category: "Manual request",
          event_label: "Is Lyft available/pick up times in my area?"
        });
      });
    });

    // Send Enable Account notification from sign up page + show success alert + load onboarding help
    $("#enable-account").on("click", function() {
      $("#success-alert-enable-account").removeClass("d-none");
      $("#enable-account").addClass("d-none");
      $("#sign-up-header").addClass("d-none");
      $("#onboarding-header").removeClass("d-none");
      $("#enable-account").addClass("d-none");
      $(".sign-up-faq").addClass("d-none");
      $(".onboarding-faq").removeClass("d-none");
      $("#enable-account-from-onboarding").addClass("d-none");
      $("#onboarding-subtext").addClass("d-none");

      window.setTimeout(function() {
        $("#success-alert-enable-account").addClass("d-none");
      }, 15000);

      postEnableAccount();

      // Record "Enable account" in Google Analytics
      gtag("event", "Concierge", {
        event_category: "Manual request",
        event_label: "Enable my account to send rides."
      });
    });

    // Send Enable Account notification from onboarding page + show success alert
    $("#enable-account-from-onboarding").on("click", function() {
      $("#success-alert-enable-account").removeClass("d-none");
      $("#enable-account-from-onboarding").addClass("d-none");
      $("#onboarding-subtext").addClass("d-none");

      window.setTimeout(function() {
        $("#success-alert-enable-account").addClass("d-none");
      }, 15000);

      postEnableAccount();

      // Record "Enable account" in Google Analytics
      gtag("event", "Concierge", {
        event_category: "Manual request",
        event_label: "Enable my account to send rides."
      });
    });
  });
})(jQuery); // End of use strict
