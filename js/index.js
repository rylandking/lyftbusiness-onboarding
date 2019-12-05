let i;
let param;
let firstName;
let email;
let phone;
let company;

(function($) {
  'use strict'; // Start of use strict

  // Collect variables in the query params
  let params = location.search
    .substr(1)
    .replace('%20', ' ')
    .replace('%27', '')
    .split('&');
  var account = {};
  for (i = 0; i < params.length; i++) {
    param = params[i].split('=');
    account[param[0]] = param[1];
  }

  firstName = account.firstName;
  email = account.email;
  phone = account.phone;
  company = account.company;

  $('#welcome').html('Welcome, ' + firstName + '!');

  // If query param variables are not provided
  if (firstName == null || email == null || phone == null || company == null) {
    // Collect them in a modal
    $('#init-acct-info').modal('show');

    $('#save-init-acct-info').on('click', function() {
      // Store modal inputs in variables
      firstName = $('#first-name').val();
      email = $('#email').val();
      phone = $('#phone').val();
      company = $('#company').val();

      // If inputs are completed, hide modal and save fields
      if (
        firstName.length > 0 &&
        email.length > 0 &&
        phone.length > 0 &&
        company.length > 0
      ) {
        $('#completed-form-alert').removeClass('d-none');
        $('#welcome').html('Welcome, ' + firstName + '!');
        window.setTimeout(function() {
          $('#completed-form-alert').addClass('d-none');
          $('#init-acct-info').modal('hide');
        }, 1000);
      } else {
        // If fields aren't completed, re-show modal & an alert
        $('#init-acct-info').modal('show');
        $('#incomplete-form-alert').removeClass('d-none');
        window.setTimeout(function() {
          $('#incomplete-form-alert').addClass('d-none');
        }, 2750);
      }
    });
  }

  // Set the recommended program based on who the rider is
  $('#employee').on('click', function() {
    $('#who-riding').addClass('d-none');
    $('#which-program').removeClass('d-none');

    $('#business-travel').removeClass('d-none');
  });

  $('#customer').on('click', function() {
    $('#who-riding').addClass('d-none');
    $('#which-program').removeClass('d-none');

    $('#concierge-wrapper').addClass('d-none');

    $('#recommended-program-wrapper').append(`
      <a href="#">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div id="concierge" class="row no-gutters">
                <div class="col-lg-6 mb-2">
                    <div class="card bg-success text-white shadow">
                      <div class="card-body ml-2 py-3">
                          <i class="fas fa-star"></i> Recommended
                      </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters align-items-center">
                <div class="text-center">
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 10rem;" src="img/undraw_laravel_and_vue_59tp.svg" alt="">
                </div>
              <div class="col ml-3">
                <div class="h5 mb-0 font-weight-bold text-gray-800 mb-1">Concierge</div>
                <p class="text-gray-800">Give rides to the people your organization cares about, whether it's VIPs, patients, customers or collegues. Concierge lets riders enjoy the Lyft experience without the Lyft app.</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    `);

    // Set #recommend-program-wrapper to redirect to credits.html on click
    $('#recommended-program-wrapper').on('click', function() {
      window.location.href = `concierge.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
    });
  });

  $('#patient').on('click', function() {
    $('#who-riding').addClass('d-none');
    $('#which-program').removeClass('d-none');

    $('#concierge-wrapper').addClass('d-none');

    $('#recommended-program-wrapper').append(`
      <a href="#">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div id="concierge" class="row no-gutters">
                <div class="col-lg-6 mb-2">
                    <div class="card bg-success text-white shadow">
                      <div class="card-body ml-2 py-3">
                          <i class="fas fa-star"></i> Recommended
                      </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters align-items-center">
                <div class="text-center">
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 10rem;" src="img/undraw_laravel_and_vue_59tp.svg" alt="">
                </div>
              <div class="col ml-3">
                <div class="h5 mb-0 font-weight-bold text-gray-800 mb-1">Concierge</div>
                <p class="text-gray-800">Give rides to the people your organization cares about, whether it's VIPs, patients, customers or collegues. Concierge lets riders enjoy the Lyft experience without the Lyft app.</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    `);

    // Set #recommend-program-wrapper to redirect to credits.html on click
    $('#recommended-program-wrapper').on('click', function() {
      window.location.href = `concierge.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
    });
  });

  $('#student').on('click', function() {
    $('#who-riding').addClass('d-none');
    $('#which-program').removeClass('d-none');

    $('#credits-wrapper').addClass('d-none');

    $('#recommended-program-wrapper').append(`
      <a href="#">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div id="credits" class="row no-gutters">
                <div class="col-lg-6 mb-2">
                    <div class="card bg-success text-white shadow">
                      <div class="card-body ml-2 py-3">
                          <i class="fas fa-star"></i> Recommended
                      </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters align-items-center">
                <div class="text-center">
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 10rem;" src="img/undraw_city_driver_jh2h.svg" alt="">
                </div>
              <div class="col ml-3">
                <div class="h5 mb-0 font-weight-bold text-gray-800 mb-1">Ride Credit</div>
                <p class="text-gray-800">Monthly Lyft credits let you delight your people for commutes, late-night outings or other courtesy rides. Your organization sets the rules for price, time, location and vehicle features.</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    `);

    // Set #recommend-program-wrapper to redirect to credits.html on click
    $('#recommended-program-wrapper').on('click', function() {
      window.location.href = `credits.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
    });
  });

  $('#attendee').on('click', function() {
    $('#who-riding').addClass('d-none');
    $('#which-program').removeClass('d-none');

    $(`#events-wrapper`).addClass('d-none');

    $('#recommended-program-wrapper').append(`
      <a href="#" class="events-recommended">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div id="events" class="row no-gutters">
                <div class="col-lg-6 mb-2">
                    <div class="card bg-success text-white shadow">
                      <div class="card-body ml-2 py-3">
                          <i class="fas fa-star"></i> Recommended
                      </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters align-items-center">
                <div class="text-center">
                    <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 10rem;" src="img/undraw_festivities_tvvj.svg" alt="">
                </div>
              <div class="col ml-3">
                <div class="h5 mb-0 font-weight-bold text-gray-800 mb-1">Event</div>
                <p class="text-gray-800">Impress your guests with discounted or fully covered rides to and from your event. Just choose your location and budget, and we’ll generate a custom event code for your guests to use on Lyft rides.</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    `);

    // Set #recommend-program-wrapper to show event modal on click
    $('#recommended-program-wrapper').on('click', function() {
      $('#event-modal').modal('show');
    });
  });

  // On click of program, go to new page and pass through query params
  $('#business-travel-wrapper').on('click', function() {
    window.location.href = `business-travel.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
  });

  $('#concierge-wrapper').on('click', function() {
    window.location.href = `concierge.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
  });

  $('#credits-wrapper').on('click', function() {
    window.location.href = `credits.html?firstName=${firstName}&email=${email}&phone=${phone}&company=${company}`;
  });

  $('#events-wrapper').on('click', function() {
    $('#event-modal').modal('show');
  });
})(jQuery); // End of use strict
