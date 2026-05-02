const Razorpay = require("razorpay");

let instance = null;
if (process.env.RAZORPAY_KEY && process.env.RAZORPAY_SECRET) {
    instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRET,
    });
} else {
    console.warn("Razorpay keys are missing. Payment routes will not work until RAZORPAY_KEY and RAZORPAY_SECRET are set.");
}

exports.instance = instance;