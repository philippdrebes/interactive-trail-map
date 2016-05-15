/// <reference path="../../typings/tsd.d.ts" />
import {IitmSettings} from "./itm.settings";

export class InteractiveTrailMap {

    public settings: IitmSettings;

    constructor() {
    }

    public initialize(parent: String) {
        $.get("../templates/app.html", function(data){
            $(parent).html(data);
        });
    }
}