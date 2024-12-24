const {expect} = require('@playwright/test');
async function validatingItems(page) {
    const getstarted = page.getByRole('button', {name:'getting started'});
    const InstallationLink = page.getByRole('link', {name:'Installation'});
    //const writingTests = page.locator('.menu_link', {hastext:'Writing Tests'});
    const writingTest = page.getByRole('link', {name:'Writing tests', exact:true});
    const generatingtests = page.getByRole('link', {name:'Generating tests'});
    const RunningTests = page.getByRole('link', {name: 'running and debugging Tests'});
    //Identifying repeat element with first keyword
    const TraceViewer = page.getByRole('link', {name:'Trace Viewer'}).first();
    const settingupCI = page.getByRole('link', {name:'Setting Up CI'});
    const gettingstartedVSCode = page.getByRole('link', {name:'Getting started - VS Code'});
    const  releasenotes = page.getByRole('link', {name:'Release notes'});
    const canaryreleases = page.getByRole('link', {name:'Canary releases'});
    const playwrightTests = page.getByRole('button', {name:'Playwright Test'});
    const  Testconfiguration = page.getByRole('link', {name:'Test configuration'});
    const TestUseOptions = page.getByRole('link',{name:'Test use options'});
    const commandline = page.getByRole('link', {name:'Command line'});
    const Emulation = page.getByRole('link',{name:'Emulation'})
    const annotations= page.getByRole('link', { name:'Annotations'});
    const Fixuters = page.getByRole('link', {name:'Fixtures', exact:true});
    const globalSU1 = page.getByRole('link',{name:'Global setup and teardown'});
    const parallelism = page.getByRole('link', {name:'Parallelism'});
    const parametarizetets = page.getByRole('link', {name:'Parameterize tests'});
    const projects = page.getByRole('link',{name:'Projects'});
    const Reporters = page.getByRole('link',{name:'Reporters'});
    const Retries =page.getByRole('link', {name:'Retries'});
    const Shrading = page.getByRole('link', {name:'Sharding'});
    const Timeouts = page.getByRole('link', {name:'Timeouts'});
    const TypeScript = page.getByRole('link', {name:'TypeScript'});
    const UIMode = page.getByRole('link', {name:'Web server'});
    const Guides = page.getByRole('button', {name:'Guides'});
    const Library = page.getByRole('link',{name:'Library'});
    const Accessibility_testing = page.getByRole('link', {name:'Accessibility testing'});
    const Actions = page.getByRole('link', {name:'Actions'});
    const Assertions = page.getByRole('link', {name:'Assertions', exact : true});
    const API_testing = page.getByRole('link',{name:'API testing'});
    const  Authentication = page.getByRole('link',{name:'Authentication'});
    const Auto_waiting = page.getByRole('link', {name:'Auto-waiting'});
    const Best_practices = page.getByRole('link',{name:'Best practices'});
    const browsers = page.getByRole('link',{name:'Browsers'});
    const Chrome_extentsion = page.getByRole('link',{name:'Chrome Extensions'});
    const clock = page.getByRole('link',{name:'Clock'});
    const components = page.getByRole('link',{name:'Components (experimental)'});
    const Debugging_test = page.getByRole('link',{name:'Debugging Tests', exact:true});
    const dialogs = page.getByRole('link', {name:'Dialogs'});
    const downloads = page.getByRole('link',{name:'Downloads'})
    const Evaluating_javascript = page.getByRole('link', {name:'Evaluating JavaScript'});
    const events = page.getByRole('link', {name:'Events'});
    const Extensibility = page.getByRole('link', {name:'Extensibility'});
    const Frames = page.getByRole('link', {name:'Frames'});
    const Handles = page.getByRole('link', {name:'Handles'});
    const Isolation = page.getByRole('link', {name:'Isolation'});
    const locators = page.getByRole('link', {name:'Locators',exact:true});
    const Mock_APIs = page.getByRole('link', {name:'Mock APIs'});
    const Mock_Browser = page.getByRole('link', {name:'Mock Browser APIs'});
    const Navigations = page.getByRole('link', {name:'Navigations'});
    const Network = page.getByRole('link', {name:'Network'});
    const Other_locators = page.getByRole('link', {name:'Other locators'});
    const Pages = page.getByRole('link', {name:'Pages'});
    const objectmodels = page.getByRole('link', {name:'Page object models'});
    const screeshots = page.getByRole('link', {name:'Screenshots'});
    const Aria_snapshots =page.getByRole('link',{name:'Aria snapshots'});
    const VisualComparisions = page.getByRole('link', {name:'Visual comparisons'});
    const Test_generator = page.getByRole('link', {name: 'Test generator'});
    const Trace_viewer = page.getByRole('link', {name:'Trace viewer'}).nth(1);
    const videos = page.getByRole('link', {name:'Videos', exact:true});
    const webview2 = page.getByRole('link', {name:'WebView2'});
    const Migration = page.getByRole('button', {name: 'Migration'});
    const Intergrations = page.getByRole('button', {name:'Integrations'});
    const Supported_language= page.getByRole('link', {name:'Supported languages'});
        //Validating all created elements
    /*if (!(await InstallationLink.isVisible())) {
        await getstarted.click();
    }*/
    await expect(InstallationLink).toBeVisible();
    await expect(writingTest).toHaveText('Writing tests');
    await expect(generatingtests).toBeVisible();
    await expect(RunningTests).toBeVisible();
    await expect(TraceViewer).toBeVisible();
    await expect(settingupCI).toBeVisible();
    await expect(gettingstartedVSCode).toBeVisible();
    await expect(releasenotes).toBeVisible();
    await expect(canaryreleases).toBeVisible();
    await expect(playwrightTests).toBeVisible();
    await expect(Testconfiguration).toBeVisible();
    await expect(TestUseOptions).toBeVisible();
    await expect(annotations).toBeVisible();
    await expect(commandline).toBeVisible();
    await expect(Emulation).toBeVisible();
    await expect(Fixuters).toBeVisible();
    await expect(globalSU1).toBeVisible();
    await parallelism.scrollIntoViewIfNeeded();
    await expect(parallelism).toBeVisible();
    await expect(parametarizetets).toBeVisible();
    await expect(projects).toBeVisible();
    await expect(Reporters).toBeVisible();
    await expect(Retries).toBeVisible();
    await expect(Shrading).toBeVisible();
    await expect(Timeouts).toBeVisible();
    await expect(TypeScript).toBeVisible();
    await expect(UIMode).toBeVisible();
    await expect(Guides).toBeVisible();
    await expect(Library).toBeVisible();
    await expect(Accessibility_testing).toBeVisible();
    await expect(Actions).toBeVisible();
    await expect(Assertions).toBeVisible();
    await expect(API_testing).toBeVisible();
    await expect(Authentication).toBeVisible();
    await expect(Auto_waiting).toBeVisible();
    await expect(Best_practices).toBeVisible();
    await expect(browsers).toBeVisible();
    await expect(Chrome_extentsion).toBeVisible();
    await expect(clock).toBeVisible();
    await expect(components).toBeVisible();
    await expect(Debugging_test).toBeVisible();
    await expect(dialogs).toBeVisible();
    await expect(downloads).toBeVisible();
    await expect(Evaluating_javascript).toBeVisible();
    await expect(events).toBeVisible();
    await expect(Extensibility).toBeVisible();
    await expect(Frames).toBeVisible();
    await expect(Handles).toBeVisible();
    await expect(Isolation).toBeVisible();
    await expect(locators).toBeVisible();
    await expect(Mock_APIs).toBeVisible();
    await expect(Mock_Browser).toBeVisible();
    await expect(Navigations).toBeVisible();
    await expect(Network).toBeVisible();
    await expect(Other_locators).toBeVisible();
    await expect(Pages).toBeVisible();
    await expect(objectmodels).toBeVisible();
    await expect(screeshots).toBeVisible();
    await expect(Aria_snapshots).toBeVisible();
    await expect(VisualComparisions).toBeVisible();
    await expect(Test_generator).toBeVisible();
    await expect(Trace_viewer).toBeVisible();
    await expect(videos).toBeVisible();
    await expect(webview2).toBeVisible();
    await expect(Migration).toBeVisible();
    await expect(Intergrations).toBeVisible();
    await expect(Supported_language).toBeVisible();
    //const listitems = page.getByRole('list').and();

    // const Installation1= page
    // .getByRole('listitem')
    // .filter({ has: page.getByRole('button', { name: 'Gettting Started' }) })
    // .getByRole('link', { name: 'Installation' })
    // .click();
    // const listItemWithButton = page.locator('role=listitem')
    // .filter({ has: page.locator('role=button[name="Getting Started"]') })
    // .locator('role=link[name="Installation"]');
    // const GettingStarted = page.locator('role=listitems')
    // .filter({has: page.locator('role=button[name="Getting Started"]')});

    // const count = GettingStarted.count();


    // console.log(`List has ${count} number of elements`);

    // for (let index = 0; index <= count; index++) {
    //     const element = GettingStarted.nth(index)
    //     const text = await element.innerText();
    //     console.log(`Element is ${text}`);
        
    // }
    // await listItemWithButton.waitFor();
    // await listItemWithButton.click();

}
module.exports={validatingItems};