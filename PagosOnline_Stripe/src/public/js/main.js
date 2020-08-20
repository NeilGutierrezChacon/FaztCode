var stripe = Stripe('pk_test_51HHyhIHhjdnuzBionlGsxijD0dJFOfqvJz23F5X1vzkLILfLitfPw9xS7u83hrY0ubhNLMqqmeIQDkP5vwOBgPXa00XbaYMrT8');

var checkoutButton = document.getElementById('checkout-button');
console.log(checkoutButton.dataset.secret);
checkoutButton.addEventListener('click', function() {
  stripe.redirectToCheckout({
    // Make the id field from the Checkout Session creation API response
    // available to this file, so you can provide it as argument here
    // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    sessionId: checkoutButton.dataset.secret
  }).then(function (result) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  });
});
