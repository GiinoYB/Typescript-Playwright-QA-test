import {test, expect} from '@playwright/test';

test('otvaranje google stranice', async({page}) => {
    //1. otvaramo google.com
    await page.goto('https://google.com');

    //2. validiramo da je naslov stranice "Google"
    await expect(page).toHaveTitle(/Google/);
});