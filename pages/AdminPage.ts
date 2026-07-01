// pages/AdminPage.ts
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AdminPage extends BasePage {
  invoicesMenu = this.page.locator('#invoices');

  constructor(page: Page) {
    super(page);
  }

  async clickInvoices() {
    await this.click(this.invoicesMenu);
  }
}

// pages/AdminPage.ts
//import { BasePage } from './BasePage';

//export class AdminPage extends BasePage {
//  invoicesMenu = this.page.locator('#invoices');

//  async clickInvoices() {
//    await this.click(this.invoicesMenu);
 // }
//}

