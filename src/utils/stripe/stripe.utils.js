import { loadStripe } from "@stripe/stripe-js";

export const StripePromise = loadStripe(
    import.meta.env.VITE_REACT_APP_STRIPE_PUBLISHABLE_KEY
);