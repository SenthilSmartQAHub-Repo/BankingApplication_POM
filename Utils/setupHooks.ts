// Filename: setupHooks.ts (or similar utility/test-setup file)

import { test } from "@playwright/test";
import dotenv from 'dotenv';

dotenv.config({ path: 'Urls/.env.sit' });

test.beforeEach("Navigate to SIT URL", async ({ page }) => {
  await page.goto(process.env.siturl as string);
});

test.afterEach("Navigate to SIT URL", async ({ page }) => {
  await page.context().close()
});
//export { base as test };
