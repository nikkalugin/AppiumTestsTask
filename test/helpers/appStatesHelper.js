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

export async function scrollDown(times = 1) {
    try {
        for (let i = 0; i < times; i++) {
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: 540, y: 200 },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 250 },
                        { type: 'pointerMove', duration: 1000, x: 540, y: 2200 },
                        { type: 'pointerUp', button: 0 },
                        { type: 'pause', duration: 250 }
                    ]
                }
            ]);
            await driver.releaseActions();
        }
    } catch (error) {
        console.error(`Failed to open window ${error}`);
        throw error;
    }
}

export async function scrollUp(times = 1) {
    try {
        for (let i = 0; i < times; i++) {
            await driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: 540, y: 2200 },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 250 },
                        { type: 'pointerMove', duration: 1000, x: 540, y: 200 },
                        { type: 'pointerUp', button: 0 },
                        { type: 'pause', duration: 250 }

                    ]
                }
            ]);
            await driver.releaseActions();
        }
    } catch (error) {
        console.error(`Failed to open advanced menu ${error}`);
        throw error;
    }
}