// fixtures/testFixtures.ts
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AdminPage } from '../pages/AdminPage';
import { InvoicePage } from '../pages/InvoicePage';
import { InvoicePopup } from '../pages/InvoicePopup';

type Fixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  adminPage: AdminPage;
  invoicePage: InvoicePage;
  invoicePopup: InvoicePopup;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
  invoicePage: async ({ page }, use) => {
    await use(new InvoicePage(page));
  },
  invoicePopup: async ({ page }, use) => {
    await use(new InvoicePopup(page));
  },
});

export { expect } from '@playwright/test';
