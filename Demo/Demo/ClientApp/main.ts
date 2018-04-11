import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AutoConfiguratorModule } from './AutoConfigurator/AutoConfigurator.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AutoConfiguratorModule);

// для перезагузки приложения при изменениях в исходном коде
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        // Перед перезапуском приложения создаем новый элемент app, которым заменяем старый
        const oldRootElemAutoConfigurator = document.querySelector('AutoConfigurator');
        const newRootElemAutoConfigurator = document.createElement('AutoConfigurator');
        oldRootElemAutoConfigurator!.parentNode!.insertBefore(newRootElemAutoConfigurator, oldRootElemAutoConfigurator);
        platform.destroy();
    });
}