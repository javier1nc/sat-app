import { writable } from 'svelte/store';

export let roles = writable(["administrador", "usuario","invitado"]);

export let data = writable(
    [
        ["administrador", "Nivel1"],
        ["usuario", "Nivel2"],
        ["invitado", "Nivel3"]
    ]
);