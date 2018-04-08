import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AutoConfiguratorModule } from './AutoConfigurator/AutoConfigurator.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AutoConfiguratorModule);

// для перезагузки приложения при изменениях в исходном коде
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        // Перед перезапуском приложения создаем новый элемент app, которым заменяем старый
        const oldRootElem = document.querySelector('AutoConfigurator');
        const newRootElem = document.createElement('AutoConfigurator');
        oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem);
        platform.destroy();
    });
}