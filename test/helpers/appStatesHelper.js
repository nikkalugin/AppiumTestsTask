export async function activateApp(appPackage) {
    try {
        await driver.activateApp(appPackage);
    } catch (error) {
        console.error(`Failed to activate app: ${error}`);
        throw error;
    }
}

export async function terminateApp(appPackage) {
    try {
        await driver.terminateApp(appPackage);
    } catch (error) {
        console.error(`Failed to terminate app: ${error}`);
        throw error;
    }
}

export async function openMenu() {
    try {
        await driver.performActions([
            {
                type: 'pointer',
                id: 'finger1',
                parameters: { pointerType: 'touch' },
                actions: [
                    { type: 'pointerMove', duration: 0, x: 550, y: 200 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pause', duration: 250 },
                    { type: 'pointerMove', duration: 1000, x: 550, y: 1700 },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ]);
    } catch (error) {
        console.error(`Failed to opening window^ ${error}`);
        throw error;
    }
}