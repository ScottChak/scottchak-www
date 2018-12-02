import * as angular from "angular";
import { StateProvider, UrlRouterProvider } from "@uirouter/angularjs";

angular.module("ScottChak.Web").config([
  "$stateProvider",
  "$urlRouterProvider",
  ($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) => {
    $urlRouterProvider.otherwise("");

    $stateProvider
      .state("app", {
        abstract: true,
        url: "",
        templateUrl: "../../templates/layout/_app.html"
      })
      .state("app.home", {
        url: "/",
        templateUrl: "../../templates/home.html",
        controller: "HomeController as ctrl"
      })
      .state("app.about", {
        url: "/about",
        templateUrl: "../../templates/about.html",
        controller: "AboutController as ctrl"
      });
  }
]);
