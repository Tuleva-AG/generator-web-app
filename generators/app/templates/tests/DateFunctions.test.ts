/// <reference types="mocha" />

import {assert} from "chai";
import HelloDate from "./../src/components/utlities/helloDate";

describe("Date Functions", () => {
    describe("GetCurrentDateByType", () => {
            it("Give back the current day of the month.", () => {
                assert.equal(HelloDate.GetCurrentDateByType("date"),(new Date).getDate().toString());
            });
    });
});
