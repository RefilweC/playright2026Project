// tests/invoice.spec.ts
import { test } from '../fixtures/testFixtures';
import { DashboardPage } from '../pages/DashboardPage';
import { readExcel } from '../utils/excelReader';

const testData = readExcel('./testdata/data.xlsx') as any[];

for (const data of testData) {
  test(`Create Invoice - ${data.clientName}`, async ({
    loginPage,
    dashboardPage,
  }) => {

    // Login
    await loginPage.navigate('/');
    await loginPage.login(data);

    // Navigate to Admin
    await dashboardPage.navigateToAdmin();

  });

}