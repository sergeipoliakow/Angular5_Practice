import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AutoConfiguratorModule } from './AutoConfigurator/AutoConfigurator.module';
var platform = platformBrowserDynamic();
platform.bootstrapModule(AutoConfiguratorModule);
// для перезагузки приложения при изменениях в исходном коде
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function () {
        // Перед перезапуском приложения создаем новый элемент app, которым заменяем старый
        var oldRootElemAutoConfigurator = document.querySelector('AutoConfigurator');
        var newRootElemAutoConfigurator = document.createElement('AutoConfigurator');
        oldRootElemAutoConfigurator.parentNode.insertBefore(newRootElemAutoConfigurator, oldRootElemAutoConfigurator);
        platform.destroy();
    });
}
//# sourceMappingURL=main.js.map