import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    //platformName: 'Android',
    //deviceName: 'Pixel_XL_API_28',
    //app: '/Users/isnoopy/Documents/PTT_WS/PTT/PTT_DmService/appium_demo/android/app/build/outputs/apk/debug/app-debug.apk'

    platformName: 'iOS',
    platformVersion: '13.3',
    deviceName: 'iPhone 11',
    app: '/Users/isnoopy/Documents/PTT_WS/PTT/PTT_DmService/appium_demo/ios/build/demoAppium/Build/Products/Debug-iphonesimulator/demoAppium.app'
};
const driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(3000);
}) // Sometime for the app to load
test('appium renders', async () => {
    expect(await driver.hasElementByAccessibilityId('alertButton')).toBe(true);
    const element = await driver.elementByAccessibilityId('alertButton')
    await element.click()
    expect(await driver.hasElementByAccessibilityId('notHere')).toBe(false);
});
