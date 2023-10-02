

function berekenLeestijd(tekst) {
    const woorden = tekst.replace(/<[^>]+>/g, "").split(/\s+/);

    return Math.round(woorden.length / 100 * 0.3);
}

export default berekenLeestijd;