import { heroes } from "../data/heroes";

export const HeroePorId = (id) => {
    return heroes.find((hero) => hero.id === id);
}