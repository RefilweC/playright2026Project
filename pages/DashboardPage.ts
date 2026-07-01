// pages/DashboardPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  adminPanelBtn = this.page.locator('#adminPanel');

  constructor(page: Page) {
    super(page);
  }

  async navigateToAdmin() {
    await this.click(this.adminPanelBtn);
  }
}
