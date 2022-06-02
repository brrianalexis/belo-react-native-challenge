describe('General interactions and details', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  describe('Home Screen', () => {
    it('should display real balances once the exchange rates are available', async () => {
      await waitFor(element(by.id('total-balance')))
        .not.toHaveText('Loading...')
        .withTimeout(3000);
    });

    it('should display an alert if Receive or Send are tapped', async () => {
      await element(by.id('action-receive')).tap();
      await expect(element(by.text('Not implemented'))).toBeVisible();
      await element(by.text('OK')).tap();

      await element(by.id('action-send')).tap();
      await expect(element(by.text('Not implemented'))).toBeVisible();
      await element(by.text('OK')).tap();
    });

    it('should navigate to the Swap screen', async () => {
      await element(by.id('action-swap')).tap();

      await expect(element(by.id('currency-to-convert'))).toHaveText(
        'Convert Argentine peso',
      );
      await expect(element(by.id('currency-available'))).toHaveText(
        'ARS 20,000.00 available',
      );
    });
  });

  describe('Swap screen', () => {
    it('should set the swap amount to the maximum available of the selected currency by pressing the "Max" button', async () => {
      await expect(element(by.id('swap-amount'))).toHaveText('ARS 0');
      await element(by.text('Max')).tap();
      await expect(element(by.id('swap-amount'))).toHaveText('ARS 20000');
    });

    it('should set the swap amount to 0 by long-pressing the delete (<) button', async () => {
      await element(by.id('keyboard-button-<')).longPress();
      await expect(element(by.id('swap-amount'))).toHaveText('ARS 0');
    });

    it('should switch currencies by using the currency selector modal', async () => {
      await element(by.id('from-currency-selector')).tap();

      await element(by.id('from-currency-item-ETH')).tap();
      await expect(element(by.id('currency-to-convert'))).toHaveText(
        'Convert Ether',
      );

      await element(by.id('to-currency-selector')).tap();

      await element(by.id('to-currency-item-SOL')).tap();
      await expect(element(by.id('to-currency-name'))).toHaveText('Solana');
    });

    it('should invert currencies by using the invert button', async () => {
      await element(by.id('invert-currencies')).tap();

      await expect(element(by.id('from-currency-name'))).toHaveText('Solana');
      await expect(element(by.id('to-currency-name'))).toHaveText('Ether');
    });

    it('should navigate to the Swap Confirmation screen', async () => {
      await element(by.id('from-currency-selector')).tap();
      await element(by.id('from-currency-item-ARS')).tap();
      await element(by.text('Max')).tap();
      await element(by.id('keyboard-button-<')).tap();
      await element(by.text('Next')).tap();

      await expect(element(by.text('Confirm your swap'))).toBeVisible();
    });
  });

  describe('Swap Confirmation screen', () => {
    it('should send you back to Swap screen if the user taps the "Cancel" button, performing no swap at all', async () => {
      await element(by.text('Cancel')).tap();
      await expect(element(by.id('currency-to-convert'))).toHaveText(
        'Convert Argentine peso',
      );
      await expect(element(by.id('currency-available'))).toHaveText(
        'ARS 20,000.00 available',
      );
    });

    it('should perform the swap and navigate to Swap Status screen', async () => {
      await element(by.text('Next')).tap();
      await element(by.text('Confirm')).tap();

      await expect(element(by.id('swap-status'))).toHaveText('Successful Swap');
    });
  });

  describe('Swap Status screen', () => {
    it('should open an alert if FAQ is tapped', async () => {
      await element(by.text('FAQ')).tap();
      await expect(element(by.text('Not implemented'))).toBeVisible();
      await element(by.text('OK')).tap();
    });

    it('should navigate to the Home Screen if the user taps the "Done" button', async () => {
      await element(by.text('Done')).tap();
      await expect(element(by.id('ARS-balance'))).toHaveText('ARS 18,000.00');
    });
  });
});
