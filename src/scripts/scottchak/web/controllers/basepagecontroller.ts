export abstract class BasePageController {
  constructor($rootScope: ICustomRootscopeService, pageTitle: string) {
    $rootScope.pageTitle = pageTitle;
  }
}
