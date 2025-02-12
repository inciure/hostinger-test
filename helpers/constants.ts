export const CheckoutFormErrors = ["Enter a valid email","Enter a full name", "Do you have any special requests or dietary restrictions we should be aware of? (e.g., gluten-free, nut allergies) is required"];
export const CheckoutFormFields = [
    { selector: 'input[placeholder="Email"]', value: 'test@example.com' },
    { selector: 'input[placeholder="Your full name"]', value: 'Vardenis Pavardenis' },
    { selector: 'input[placeholder="Your phone number"]', value: '+37061234567' },
    { selector: 'input[placeholder="Your comment"]', value: 'no' }
  ];

enum Muffins {
  BLUEBERRY_BURST_MUFFINS = 0,
  COOKIES_AND_CREAM_CLOUD_CUPCAKES = 1,
  FRESHLY_BAKED_MUFFINS_DAILY = 2,
  CHOCKO_CARAMEL_DRIZZLE_CUPCAKES = 3,
  GLAZED_PARADISE_DONUT = 4
}

export default Muffins;