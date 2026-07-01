// pages/InvoicePage.ts
import { BasePage } from './BasePage';

export class InvoicePage extends BasePage {
  createInvoiceBtn = this.page.locator('#createInvoice');
  successMessage = this.page.locator('.invoice-success');

  async clickCreateInvoice() {
    await this.click(this.createInvoiceBtn);
  }

  async validateInvoiceCreated() {
    await this.expectVisible(this.successMessage);
  }
}
