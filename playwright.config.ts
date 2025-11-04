import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    workers: 2,
    reporter: 'html',
    use: {
        
        baseURL: "https://test-qa.capslock.global/",
        headless: true,
        trace: "on-first-retry",
        screenshot: "only-on-failure",
        
         
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
    ],
});


