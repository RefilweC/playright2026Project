// pages/DashboardPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  menuBtn = this.page.getByRole('button', { name: /menu/i }).first();
  adminPanelBtn = this.page.locator('a, button').filter({ hasText: 'Admin Panel' }).first();

  constructor(page: Page) {
    super(page);
  }

  async navigateToAdmin() {
    await this.click(this.menuBtn);
    await this.expectVisible(this.adminPanelBtn);
    await this.click(this.adminPanelBtn);
  }
}
