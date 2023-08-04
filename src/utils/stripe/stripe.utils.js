import { loadStripe } from "@stripe/stripe-js";

console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

// export const StripePromise = loadStripe(
//     import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY
// );

export const StripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);