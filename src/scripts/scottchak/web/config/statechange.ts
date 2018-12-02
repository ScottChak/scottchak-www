import * as angular from "angular";

angular.module("ScottChak.Web").run([
  "$rootScope",
  ($rootScope: ICustomRootscopeService) => {
    $rootScope.$on("$stateChangeStart", () => {});

    $rootScope.$on("$stateChangeSuccess", () => {});
  }
]);
