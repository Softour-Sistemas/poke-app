import { describe, expect, it } from "vitest";
import InputFilter from "./InputFilter.vue";
import { mount } from "@vue/test-utils";


describe('Input Filter Component', () => {
    it('should update:modelValue when writed', async () => {
        const WRAPPER = mount(InputFilter);
        let input = WRAPPER.find('input');
        await input.setValue('Bulbasaur');
        expect(WRAPPER.emitted()['update:modelValue'][0]).toEqual(['Bulbasaur']);
    });
})
