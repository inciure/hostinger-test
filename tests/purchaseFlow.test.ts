import { selectors, test } from '@playwright/test';
import { checkForAlerts, fillFormFields } from '../helpers/checkoutFormFieldsHelper';
import Muffins from '../helpers/constants';

test.beforeEach(() => selectors.setTestIdAttribute("data-qa"));

test('Check purchase flow', async ({ page }) => {
  await page.goto('/')
  await page.getByTestId("navigationblock-page-shop").first().click();

  //select blueberry muffin and go to checkout
  let blueberryMuffin = await page.getByTestId("product-list-section-item-title").nth(Muffins.CHOCKO_CARAMEL_DRIZZLE_CUPCAKES);
  await blueberryMuffin.click();
  await page.getByTestId("productsection-btn-addtobag").click();
  await page.getByTestId("shoppingcart-btn-checkout").click();

  //select shipping option - country and adress
  await page.getByTestId("checkout-shippingdestination-select").click();
  await page.getByRole("listbox").first().click();
  await page.getByTestId("checkout-shippingoptions-parcelselect").click();
  await page.getByRole("option").first().click();
  await page.getByTestId("checkout-shippingdetails-continue").click();

  //click Continue button before filling in information to check validations
  let contactInfoContinueButton = page.getByTestId("checkout-contactinformation-continue");
  await contactInfoContinueButton.click();
  await checkForAlerts(page);

  //fill in fields and proceed with checkout and placing order
  await fillFormFields(page)
  await contactInfoContinueButton.click();
  await page.getByTestId("checkout-paymentmethods-placeorder").click();

  await page.getByTestId("ecommerce-modal-checkout-success-order").waitFor();
});


