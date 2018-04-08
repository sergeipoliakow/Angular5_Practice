import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AutoConfiguratorModule } from './AutoConfigurator/AutoConfigurator.module';
var platform = platformBrowserDynamic();
platform.bootstrapModule(AutoConfiguratorModule);
// для перезагузки приложения при изменениях в исходном коде
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function () {
        // Перед перезапуском приложения создаем новый элемент app, которым заменяем старый
        var oldRootElem = document.querySelector('AutoConfigurator');
        var newRootElem = document.createElement('AutoConfigurator');
        oldRootElem.parentNode.insertBefore(newRootElem, oldRootElem);
        platform.destroy();
    });
}
//# sourceMappingURL=main.js.map