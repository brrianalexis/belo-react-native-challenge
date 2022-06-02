describe('Swap errors', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should display an error message if the user tries to use more money than what they have in their balance', async () => {
    await element(by.id('action-swap')).tap();

    await element(by.id('keyboard-button-2')).tap();
    await element(by.id('keyboard-button-5')).tap();
    await element(by.id('keyboard-button-0')).tap();
    await element(by.id('keyboard-button-0')).tap();
    await element(by.id('keyboard-button-0')).tap();

    await expect(element(by.id('swap-amount'))).toHaveText('ARS 25000');

    await element(by.text('Next')).tap();

    await expect(element(by.id('swap-error'))).toHaveText(
      "You don't have enough funds",
    );
  });

  it('should display an error message if the user tries to perform a swap using less than ARS 200', async () => {
    await element(by.id('keyboard-button-<')).tap();

    await expect(element(by.id('swap-error'))).not.toExist();

    await element(by.id('keyboard-button-<')).tap();
    await element(by.id('keyboard-button-<')).tap();

    await expect(element(by.id('swap-amount'))).toHaveText('ARS 25');

    await element(by.text('Next')).tap();

    await expect(element(by.id('swap-error'))).toHaveText(
      'Amount must be equal to at least ARS 200',
    );
  });
});
