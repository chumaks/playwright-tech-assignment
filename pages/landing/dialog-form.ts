import { Locator, Page } from '@playwright/test';

export class DialogForm {
  readonly page: Page;
  readonly formContainer: Locator;
  readonly nextButton: Locator;
  readonly getEstimateButton: Locator;
  readonly submitYourRequestButton: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly zipCodeInput: Locator;

  constructor(page: Page, formContainerId: string) {
    this.page = page;
    this.formContainer = page.locator(`#${formContainerId}`);
    //buttons
    this.nextButton = this.formContainer.getByRole('button', { name: 'Next ' });
    this.getEstimateButton = this.formContainer.getByRole('button', { name: 'Go To Estimate' });
    this.submitYourRequestButton = this.formContainer.getByRole('button', { name: 'Submit Your Request' });
    //inputs
    this.nameInput = this.formContainer.getByRole('textbox', { name: 'Enter Your Name' });
    this.emailInput = this.formContainer.getByRole('textbox', { name: 'Enter Your Email' });
    this.phoneInput = this.formContainer.getByRole('textbox', { name: '(XXX)XXX-XXXX' })
    this.zipCodeInput = this.formContainer.getByRole('textbox', { name: 'Enter ZIP Code' });
  }

  async enterZipCode(zipCode: string) {
    await this.zipCodeInput.fill(zipCode);
  }

  async clickNext() {
    await this.nextButton.click();
  }

  chooseInterestedInOption(optionText: string) {
    return this.formContainer.getByText(optionText).click();
  }

}

