/// <reference path="../../typings/tsd.d.ts" />
import {IitmSettings} from "./itm.settings";

class InteractiveTrailMap {

    public settings: IitmSettings;

    constructor() {
    }

    public initialize(parent: String) {
        $(parent).load("../src/templates/app.html");
    }

    public setMap(path) {
        $('.itm-map').css("background-image", "url('" + path + "')");
    }
}