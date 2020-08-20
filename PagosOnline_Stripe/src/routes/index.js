const {Router} = require('express');

const router = Router();

const stripe = require('stripe')('sk_test_51HHyhIHhjdnuzBio42R9KqujzcGrND6gJ2iBWqAubqxqATHDYqxmwi4BLub5Z9AGv0dk2YA5XAEJhWp67AVi4W1900g4zjFUzI');




router.get('/', async (req,res)=>{

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
        cancel_url: 'http://localhost:3000/cancel',
      });
    res.render('index',{ session_id: session.id });
});

router.get('/success',(req,res)=>{
    console.log(req.query.session_id);
    if(req.query.session_id)
        res.render('product');
    else
        res.redirect('/');
});

router.get('/cancel',(req,res)=>{
    res.render('cancel');
})



module.exports = router;