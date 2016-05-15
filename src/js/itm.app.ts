/// <reference path="../../typings/tsd.d.ts" />
import {IitmSettings} from "./itm.settings";

class InteractiveTrailMap {

    public settings: IitmSettings;

    constructor() {
    }

    public initialize(parent: String) {
        $(parent).load("../src/templates/app.html");
    }
}