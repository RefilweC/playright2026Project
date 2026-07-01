// pages/InvoicePopup.ts
import { BasePage } from './BasePage';

export class InvoicePopup extends BasePage {
  clientName = this.page.locator('#clientName');
  address = this.page.locator('#address');
  addCourseBtn = this.page.locator('#addCourse');
  courseDropdown = this.page.locator('.course-select');
  description = this.page.locator('#description');
  totalAmount = this.page.locator('#totalAmount');
  dueDate = this.page.locator('#dueDate');
  statusDropdown = this.page.locator('#status');
  submitBtn = this.page.locator('#submitInvoice');

  async fillInvoice(data: any) {
    // client
    await this.fill(this.clientName, data.clientName);
    await this.fill(this.address, data.address);

    // add 4 courses
    for (let i = 0; i < 4; i++) {
      await this.click(this.addCourseBtn);
      await this.select(this.courseDropdown.nth(i), { index: i });
    }

    // description
    await this.fill(this.description, data.description);

    // validate total
    await this.expectText(this.totalAmount, '2800');

    // due date (last day of June)
    await this.fill(this.dueDate, data.dueDate);

    // status
    await this.select(this.statusDropdown, data.status);
  }

  async submit() {
    await this.click(this.submitBtn);
  }
}
