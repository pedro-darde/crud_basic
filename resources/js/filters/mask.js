import {mask as masker, tokens} from "maska";

export default function mask(value, mascara) {
    if (!mascara?.length) return value;

    const mascaras = mascara.split("|");

    return masker(
        value,
        mascaras.length <= 1 ? mascaras : JSON.stringify(mascaras),
        {
            ...tokens,
            Z: {pattern: /./},
        }
    );
}
