$(document).ready(function(){

    $('#chiffrer').keyup(function(chiffrement) {
        var chiffrer = {
        u: 'a',
        z: 'b',
        b: 'c',
        c: 'd',
        a: 'e',
        d: 'f',
        f: 'g',
        g: 'h',
        e: 'i',
        h: 'j',
        j: 'k',
        k: 'l',
        l: 'm',
        m: 'n',
        i: 'o',
        n: 'p',
        p: 'q',
        q: 'r',
        r: 's',
        s: 't',
        o: 'u',
        t: 'v',
        v: 'w',
        w: 'x',
        x: 'y',
        y: 'z'
        };
        const textechiffre = chiffrement.target.value;
        $('#resultat2').text(textechiffre.replace(/[a-z]/gi, char => chiffrer[char]));

    });

        $('#dechiffrer').keyup(function(dechiffrement) {
            var dechiffrer = {
                a: 'u',
                b: 'z',
                c: 'b',
                d: 'c',
                e: 'a',
                f: 'd',
                g: 'f',
                h: 'g',
                i: 'e',
                j: 'h',
                k: 'j',
                l: 'k',
                m: 'l',
                n: 'm',
                o: 'i',
                p: 'n',
                q: 'p',
                r: 'q',
                s: 'r',
                t: 's',
                u: 'o',
                v: 't',
                w: 'v',
                x: 'w',
                y: 'x',
                z: 'y'
            };

            const textedechiffre = dechiffrement.target.value;

            $('#resultat2').text(textedechiffre.replace(/[a-z]/gi, char => dechiffrer[char]));

        });

});