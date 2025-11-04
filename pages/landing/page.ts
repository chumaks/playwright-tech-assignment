import { Locator, Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly showMoreButton: Locator;
  readonly reviewsList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.showMoreButton = page.getByText('Show more');
    this.reviewsList = page.getByText('Review by');
  }

  async goto() {
    await this.page.goto('/');
  }

  async clickShowMore() {
    await this.page.getByRole('button', { name: 'Show more' }).click();
  }
}
