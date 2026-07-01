// pages/LoginPage.ts
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  openLoginBtn = this.page.getByRole('button', { name: /login/i }).first();
  email = this.page.locator('#login-email');
  password = this.page.locator('#login-password');
  loginBtn = this.page.getByRole('button', { name: /^Login$/ });

  async login(data: any) {
    await this.click(this.openLoginBtn);
    await this.expectVisible(this.email);
    await this.fill(this.email, data.email);
    await this.fill(this.password, data.password);
    await this.click(this.loginBtn);
  }
}
