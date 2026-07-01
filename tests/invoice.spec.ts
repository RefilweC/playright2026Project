// tests/invoice.spec.ts
import { test } from '../fixtures/testFixtures';
import { readExcel } from '../utils/excelReader';

const testData = readExcel('./testdata/data.xlsx') as any[];

for (const data of testData) {
  test(`Create Invoice - ${data.clientName}`, async ({
    loginPage
  }) => {

    // Login
    await loginPage.navigate('/');
    await loginPage.login(data);

  });

}