

function berekenLeestijd(tekst) {
    const woorden = tekst.replace(/<[^>]+>/g, "").split(/\s+/);

    const leestijdIninuten = Math.round(woorden.length / 100 * 0.3);

    return leestijdIninuten;
}

export default berekenLeestijd;