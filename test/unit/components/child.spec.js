import Vue from "vue";
import Child from "../../../src/components/child.vue";

describe('child.vue', function () {
    it('test props', function () {
        const Constructor = Vue.extend(Child)
        const myChild = new Constructor({
            propsData: {
                value: 'child module'
            }
        }).$mount();
        expect(myChild.value).toEqual('child module')
    })
})