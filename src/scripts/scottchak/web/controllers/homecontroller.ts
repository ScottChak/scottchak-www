import * as angular from "angular";

import { BasePageController } from "./basepagecontroller";

class HomeController extends BasePageController {
  private static $inject: string[] = ["$rootScope"];

  constructor(private $rootScope: ICustomRootscopeService) {
    super($rootScope, "Home - ScottChak");
  }
}

angular.module("ScottChak.Web").controller("HomeController", HomeController);
