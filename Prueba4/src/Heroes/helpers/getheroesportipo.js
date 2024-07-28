import { heroes } from '../data/heroes';

export const getheroesportipo = (tipo) => {
    const aux = ['Marvel','DC'];
        if (!aux.includes(tipo)) {
            throw new Error(`El tipo no se encuentra: '${tipo}'`)
        }
    return heroes.filter(hero => hero.tipo === tipo);
} 