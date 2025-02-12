import { CheckoutFormErrors, CheckoutFormFields } from '../helpers/constants';
import { expect } from '@playwright/test';

export async function checkForAlerts(page) {
    const alerts = await page.getByRole("alert").all();
    
    for (const [index, alert] of alerts.entries()) {
      const alertText = await alert.innerText();
      await expect(alert).toBeVisible();
      expect(alertText).toBe(CheckoutFormErrors[index]);
    }
  }
   
  export async function fillFormFields(page) {
    for (const { selector, value } of CheckoutFormFields) {
      const field = page.locator(selector);
      await field.fill(value);
      const fieldValue = await field.inputValue();
      expect(fieldValue).toBe(value);
    }
  }