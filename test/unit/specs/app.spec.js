import Vue from "vue";
import app from "../../../src/app.vue";

describe('test app.vue', function () {
    it('test1', function () {
        var vm = new Vue(app).$mount()
        expect(vm.title).toEqual('hello app')
        // expect(vm.test).toEqual('hello test')
    })
})