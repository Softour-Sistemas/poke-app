import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Pokemon from '@/components/Pokemon.vue';

describe('Pokemon.vue', () => {
    const pokemon = {
        name: 'bulbasaur',
        url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    };

    it('renderiza el componente', () => {
        const wrapper = mount(Pokemon, {
            props: { pokemon }
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('muestra la imagen correcta', () => {
        const wrapper = mount(Pokemon, {
            props: { pokemon }
        });

        const img = wrapper.find('img');

        expect(img.exists()).toBe(true);
        expect(img.attributes('src')).toBe(pokemon.url);
        expect(img.attributes('alt')).toBe(pokemon.name);
    });

    it('muestra el nombre', () => {
        const wrapper = mount(Pokemon, {
            props: { pokemon }
        });

        const name = wrapper.find('.pokemon-name').text();

        expect(name).toBe('bulbasaur');
    });

    it('tiene las clases de estilo correctas', () => {
        const wrapper = mount(Pokemon, {
            props: { pokemon }
        });

        expect(wrapper.classes()).toContain('pokemon-card');
        expect(wrapper.find('.pokemon-name').exists()).toBe(true);
        expect(wrapper.find('.pokemon-image').exists()).toBe(true);
    });
});
