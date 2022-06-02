describe('Successful swap from ARS to BTC flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should go to Swap screen', async () => {
    await expect(element(by.id('ARS-balance'))).toHaveText('ARS 20,000.00');
    await expect(element(by.id('BTC-balance'))).toHaveText('₿0.26062011');
    await element(by.id('action-swap')).tap();
  });

  it('should set the swap amount and go to Swap confirmation screen', async () => {
    await element(by.id('keyboard-button-5')).tap();
    await element(by.id('keyboard-button-0')).tap();
    await element(by.id('keyboard-button-0')).tap();
    await element(by.id('keyboard-button-0')).tap();

    await element(by.text('Next')).tap();
    await expect(element(by.text('Confirm your swap'))).toBeVisible();
  });

  it('should go to Swap Status screen', async () => {
    await element(by.text('Confirm')).tap();
    await expect(element(by.text('Successful Swap'))).toBeVisible();
  });

  it('should go back to Home screen, with ARS being deducted and BTC being added', async () => {
    await element(by.text('Done')).tap();
    await expect(element(by.id('ARS-balance'))).toHaveText('ARS 15,000.00');
    await expect(element(by.id('BTC-balance'))).not.toHaveText('₿0.26062011');
  });
});
