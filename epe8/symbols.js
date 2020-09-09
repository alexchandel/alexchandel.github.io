/* eslint indent: ["error", 4, {'SwitchCase': 1}] */
/* global $ _ */

;(function () {
    var m = {
        x: function (x) {
            return $('<span style="font-family:serif"/>').text(x)
        },
        i: function (x) {
            return $('<i style="font-family:serif"/>').text(x)
        },
        lower: function (x) {
            return $('<span>&#8727;</span>')
            //            return $('<span style="background-color:gold;vertical-align:40%;font-size:120%;">&#8727;</span>')
        },
        f: function (a, b) {
            return $('<table/>').append(
                $('<tr style="border-bottom:1px solid black"/>').append($('<td align="middle"/>').append(a.css('font-size', 'small')))
            ).append(
                $('<tr/>').append($('<td align="middle"/>').append(b.css('font-size', 'small')))
            )
        },
        supsub: function (a, b) {
            if (!a) a = $('<span>&nbsp;</span>')
            if (!b) b = $('<span>&nbsp;</span>')
            return $('<table/>').append(
                $('<tr/>').append($('<td/>').append(a.css('font-size', 'small')))
            ).append(
                $('<tr/>').append($('<td/>').append(b.css('font-size', 'small')))
            )
        },
        overline: function (x) {
            var oldD = x.css('display')
            x.css('display', 'none')
            $('body').append(x)
            var w = x.width()
            x.detach()
            x.css('display', oldD)

            var d = $('<div/>')
            d.append($('<div style="border-bottom:1px solid black;width:' + w + 'px;height:3px;margin-right:-' + w + 'px;margin-bottom:-3px"/>'))
            d.append(x)
            return d
        },
        c: function () {
            var t = $('<table/>')
            var r = $('<tr/>')
            t.append(r)
            for (var i = 0; i < arguments.length; i++) {
                var a = arguments[i]
                r.append($('<td/>').append(a))
            }
            return t
        },
        sqrt: function (x) {
            return m.c($('<span style="font-size:90%">&radic;</span>'), $('<div style="border-top:1px solid black"/>').append(x))
        }
    }

    var cache = {}

    var latexToUnicodeString = '\\Box□\\Bumpeq≎\\Cap⋒\\Cup⋓\\DeltaΔ\\Diamond◇\\Downarrow⇓\\FinvℲ\\GammaΓ\\Imℑ\\Join⋈\\LambdaΛ\\Leftarrow⇐\\Leftrightarrow⇔\\Lleftarrow⇚\\Longleftarrow⇐\\Longleftrightarrow⇔\\Longrightarrow⇒\\Lsh↰\\OmegaΩ\\PhiΦ\\PiΠ\\PsiΨ\\Reℜ\\Rightarrow⇒\\Rrightarrow⇛\\Rsh↱\\Sigma∑\\Subset⋐\\Supset⋑\\ThetaΘ\\Uparrow⇑\\Updownarrow⇕\\UpsilonΥ\\Vdash⊩\\Vvdash⊪\\XiΞ\\alephא\\alphaα\\angle∠\\angle∠\\approx≈\\approxeq≊\\ast∗\\asymp≍\\backepsilon∍\\backprime‵\\backsim∽\\barwedge⊼\\because∵\\betaβ\\bethב\\between≬\\bigcap⋂\\bigcirc○\\bigcup⋃\\bigodot⊙\\bigoplus⊕\\bigotimes⊗\\bigsqcup⊔\\bigstar★\\bigtriangledown▽\\bigtriangleup△\\biguplus⊎\\bigvee⋁\\bigwedge⋀\\blacklozenge◆\\blacksquare■\\blacktriangle▲\\blacktriangledown▼\\blacktriangleleft◀\\blacktriangleright▷\\bot⊥\\bowtie⋈\\boxdot⊡\\boxminus⊟\\boxplus⊞\\boxtimes⊠\\bullet∙\\bumpeq≏\\cap∩\\cdot⋅\\cdots⋯\\centerdot⋅\\chiχ\\circ∘\\circeq≗\\circlearrowleft↺\\circlearrowright↻\\circledSⓈ\\circledast⊛\\circledcirc⊚\\circleddash⊝\\clubsuit♣\\colon:\\complement∁\\cong≅\\coprod∐\\cup∪\\curlyeqprec⋞\\curlyeqsucc⋟\\curlyvee⋎\\curlywedge⋏\\curvearrowleft↶\\curvearrowright↷\\dagger†\\dalethד\\dashleftarrow⇠\\dashrightarrow⇢\\dashv⊣\\ddagger‡\\ddots⋱\\deltaδ\\diamond⋄\\diamondsuit♢\\digammaϜ\\div÷\\divideontimes⋇\\doteq≐\\doteqdot≑\\dotplus∔\\dots…\\downarrow↓\\downdownarrows⇊\\downharpoonleft⇃\\downharpoonright⇂\\ellℓ\\emptyset∅\\epsilon∊\\eqcirc≖\\equiv≡\\etaη\\ethð\\exists∃\\fallingdotseq≒\\flat♭\\forall∀\\frown⌢\\gammaγ\\ge≥\\geq≥\\geqq≧\\gg≫\\ggg⋙\\gimelג\\gtrdot⋗\\gtreqless⋛\\gtrless≷\\gtrsim≳\\hbarℏ\\hbarℏ\\heartsuit♡\\hookleftarrow↩\\hookrightarrow↪\\hslashℏ\\implies⇒\\in∈\\infty∞\\int∫\\intercal⊺\\iotaι\\kappaκ\\lambdaλ\\langle〈\\lceil⌈\\le≤\\leadsto↝\\leftarrow←\\leftarrowtail↢\\leftharpoondown↽\\leftharpoonup↼\\leftleftarrows⇇\\leftrightarrow↔\\leftrightarrows⇆\\leftrightharpoons⇋\\leftrightsquigarrow↭\\leftthreetimes⋋\\leq≤\\leqq≦\\leqslant≤\\lessdot⋖\\lesseqgtr⋚\\lessgtr≶\\lesssim≲\\lfloor⌊\\lhd⊲\\ll≪\\lll⋘\\longleftarrow←\\longleftrightarrow↔\\longmapsto⇖\\longrightarrow→\\looparrowleft↫\\looparrowright↬\\lozenge◊\\ltimes⋉\\mapsto↦\\measuredangle∡\\mho℧\\mho℧\\mid∣\\models⊨\\mp∓\\muμ\\multimap⊸\\nabla∇\\natural♮\\nearrow↗\\neg¬\\neq≠\\nexists∄\\ni∋\\notin∉\\nuν\\nwarrow↖\\odot⊙\\oint∮\\omegaω\\ominus⊖\\oplus⊕\\oslash⊘\\otimes⊗\\parallel∥\\partial∂\\perp⊥\\phiϕ\\piπ\\pitchfork⋔\\pm±\\prec≺\\preccurlyeq≼\\preceq≼\\precsim≾\\prime′\\prod∏\\propto∝\\psiψ\\rangle〉\\rceil⌉\\rfloor⌋\\rhd⊳\\rhoρ\\rightarrow→\\rightarrowtail↣\\rightharpoondown⇁\\rightharpoonup⇀\\rightleftarrows⇄\\rightleftharpoons⇌\\rightrightarrows⇉\\rightsquigarrow⇝\\rightthreetimes⋌\\risingdotseq≓\\rtimes⋈\\searrow↘\\setminus∖\\sharp♯\\shortparallel∥\\sigmaσ\\sim∼\\simeq≃\\smallfrown⌢\\smallsetminus∖\\smallsmile⌣\\smile⌣\\spadesuit♠\\sphericalangle∢\\sqcap⊓\\sqcup⊔\\sqsubset⊏\\sqsubset⊏\\sqsubseteq⊑\\sqsupset⊐\\sqsupset⊐\\sqsupseteq⊒\\square□\\star⋆\\subset⊂\\subseteq⊆\\succ≻\\succcurlyeq≽\\succeq≽\\succsim≿\\sum∑\\supset⊃\\supseteq⊇\\surd√\\swarrow↙\\tauτ\\therefore∴\\thetaθ\\thickapprox≈\\thicksim∼\\times×\\top⊤\\triangle△\\triangledown▽\\triangleleft◁\\trianglelefteq⊴\\triangleq≜\\triangleright▷\\trianglerighteq⊵\\twoheadleftarrow↞\\twoheadrightarrow↠\\unlhd⊴\\unrhd⊵\\uparrow↑\\updownarrow↕\\upharpoonleft↿\\upharpoonright↾\\uplus⊎\\upsilonυ\\upuparrows⇈\\vDash⊨\\varepsilonε\\varkappaϰ\\varnothing∅\\varphiφ\\varpiϖ\\varpropto∝\\varrhoϱ\\varsigmaς\\varthetaϑ\\vartriangle△\\vartriangleleft⊲\\vartriangleright⊳\\vdash⊢\\vdots⋮\\vee∨\\veebar⊻\\wedge∧\\wp℘\\wr≀\\xiξ\\zetaζ'

    function latexToUnicode (la) {
        const mm = latexToUnicodeString.match(new RegExp(_.escapeRegExp(la) + '\\w*(.)'))
        if (mm) return mm[1]
    }

    window.drawLatex = function (s) {
        var div = cache[s]
        if (div) return div.clone()

        var originalS = s

        function peek (re) {
            return s.match(re)
        }
        function pull (re) {
            var mm = peek(re)
            if (mm) {
                s = s.slice(mm[0].length)
                return mm[0]
            }
        }
        function S () {
            var x = c()
            if (s == '') return x
            else throw new Error('parse error for "' + originalS + '", stuff left: "' + s + '"')
        }
        function c () {
            var a = []
            while (true) {
                var dd = d()
                pull(/^\s*(\{\})?/)
                if (dd) a.push(dd)
                else break
            }
            if (a.length > 0) return m.c.apply(null, a)
        }
        function d () {
            if (pull(/^\\?sqrt[\{\(]/)) {
                var x = c()
                if (pull(/^[\}\)]/)) return m.sqrt(x)
                else throw new Error('missing }')
            }

            if (pull(/^\\?frac[\{\(]/)) {
                var x = c()
                if (!pull(/^(\}\{|,)/)) throw new Error('missing }{')
                var y = c()
                if (pull(/^[\}\)]/)) return m.f(x, y)
                else throw new Error('missing }')
            }

            if (pull(/^\\overline\{/)) {
                var x = c()
                if (pull(/^\}/)) return m.overline(x)
                else throw new Error('missing }')
            }

            var x = pull(/^\\[a-zA-Z]+/)
            if (x) return m.i(latexToUnicode(x))

            x = pull(/^[a-zA-Z'\u00ff-\uffff]+/)
            if (x) return m.i(x)

            x = pull(/^[*]+/)
            if (x) return m.lower(x)

            x = pull(/^[0-9\+\-]+/)
            if (x) return m.x(x.replace(/-/g, '−'))

            x = supsub()
            if (x) return x

            if (pull(/^[\{\(]/)) {
                var x = c()
                if (pull(/^[\}\)]/)) return x
                else throw new Error('missing }')
            }
        }
        function supsub () {
            var a = {}
            var x = pull(/^[\_\^]/)
            if (x) a[x] = d()
            x = pull(/^[\_\^]/)
            if (x) a[x] = d()
            if (a['^'] || a._) return m.supsub(a['^'], a['_'])
        }

        cache[originalS] = S()
        return cache[originalS].clone()
    }
})()

window.particleSymbols = {
    1: '\\om_{I}^\\wedge',
    2: '\\om_{I}^\\vee',
    3: '\\om_{II}^\\wedge',
    4: '\\om_{II}^\\vee',
    5: '\\om_{III}^\\wedge',
    6: '\\om_{III}^\\vee',

    7: 'W^-',
    8: 'W^+',

    9: 'g^{g \\overline{r}}',
    10: 'g^{r \\overline{g}}',
    11: 'g^{b \\overline{r}}',
    12: 'g^{r \\overline{b}}',
    13: 'g^{g \\overline{b}}',
    14: 'g^{b \\overline{g}}',

    15: 'e_S^\\vee \\ph_0',
    16: 'e_S^\\wedge \\ph_0^*',

    17: 'e_S^\\vee \\ph_+',
    18: 'e_S^\\wedge \\ph_-',

    19: 'e_T^\\wedge \\ph_0',
    20: 'e_T^\\vee \\ph_0^*',
    21: 'e_T^\\vee \\ph_0',
    22: 'e_T^\\wedge \\ph_0^*',

    23: 'e_S^\\vee \\ph_-',
    24: 'e_S^\\wedge \\ph_+',

    25: 'e_S^\\wedge \\ph_0',
    26: 'e_S^\\vee \\ph_0^*',

    27: 'e_T^\\vee \\ph_-',
    28: 'e_T^\\wedge \\ph_+',
    29: 'e_T^\\wedge \\ph_-',
    30: 'e_T^\\vee \\ph_+',

    31: 'X^1',
    32: 'X^2',
    33: 'X^4',
    34: 'Y^1',
    35: 'X_{I}^2',
    36: 'X_{II}^2',
    37: 'X_{III}^2',
    38: "W'^+",
    39: "W'^-",

    41: 'e \\ph_0',
    42: 'e \\ph_0^*',
    43: 'e \\ph_+',
    44: 'e \\ph_-',

    45: 'e_S^\\vee \\ph_1',
    46: 'e_S^\\wedge \\ph_1^*',
    47: 'e_S^\\wedge \\ph_1',
    48: 'e_S^\\vee \\ph_1^*',

    49: 'e_S^\\wedge \\ph_X',
    50: 'e_S^\\vee \\ph_X^*',
    51: 'e_T^\\vee \\ph_X',
    52: 'e_T^\\wedge \\ph_X^*',
    53: 'e_S^\\wedge \\ph_X',
    54: 'e_S^\\vee \\ph_X^*',
    55: 'e_T^\\vee \\ph_X',
    56: 'e_T^\\wedge \\ph_X^*',
    57: 'e_S^\\wedge \\ph_X',
    58: 'e_S^\\vee \\ph_X^*',
    59: 'e_T^\\vee \\ph_X',
    60: 'e_T^\\wedge \\ph_X^*',

    61: '\\nu_{e}^\\wedge',
    62: '\\nu_{e}^\\vee',
    63: 'e^{\\wedge}',
    64: 'e^\\vee',
    65: '\\overline{e}{}^\\wedge',
    66: '\\overline{e}{}^\\vee',
    67: 'u^\\wedge',
    68: 'u^\\vee',
    69: '\\overline{u}{}^\\wedge',
    70: '\\overline{u}{}^\\vee',
    71: 'd^\\wedge',
    72: 'd^\\vee',
    73: '\\overline{d}{}^\\wedge',
    74: '\\overline{d}{}^\\vee',

    75: '\\overline{\\nu}{}_{e}^\\wedge',
    76: '\\overline{\\nu}{}_{e}^\\vee',
    77: '\\overline{\\nu}{}_{e}^{\\wedge *}',
    78: '\\overline{\\nu}{}_{e}^{\\vee *}',

    91: '\\nu_{e}^{\\wedge *}',
    92: '\\nu_{e}^{\\vee *}',
    93: 'e^{\\wedge *}',
    94: 'e^{\\vee *}',
    95: '\\overline{e}{}^{\\wedge *}',
    96: '\\overline{e}{}^{\\vee *}',
    97: 'u^{\\wedge *}',
    98: 'u^{\\vee *}',
    99: '\\overline{u}{}^{\\wedge *}',
    100: '\\overline{u}{}^{\\vee *}',
    101: 'd^{\\wedge *}',
    102: 'd^{\\vee *}',
    103: '\\overline{d}{}^{\\wedge *}',
    104: '\\overline{d}{}^{\\vee *}',

    121: '\\nu_{\\mu}^\\wedge',
    122: '\\nu_{\\mu}^\\vee',
    123: '\\mu^{\\wedge}',
    124: '\\mu^\\vee',
    125: '\\overline{\\mu}{}^\\wedge',
    126: '\\overline{\\mu}{}^\\vee',
    127: 'c^\\wedge',
    128: 'c^\\vee',
    129: '\\overline{c}{}^\\wedge',
    130: '\\overline{c}{}^\\vee',
    131: 's^\\wedge',
    132: 's^\\vee',
    133: '\\overline{s}{}^\\wedge',
    134: '\\overline{s}{}^\\vee',

    135: '\\overline{\\nu}{}_{\\mu}^\\wedge',
    136: '\\overline{\\nu}{}_{\\mu}^\\vee',
    137: '\\overline{\\nu}{}_{\\mu}^{\\wedge *}',
    138: '\\overline{\\nu}{}_{\\mu}^{\\vee *}',

    151: '\\nu_{\\mu}^{\\wedge *}',
    152: '\\nu_{\\mu}^{\\vee *}',
    153: '\\mu^{\\wedge *}',
    154: '\\mu^{\\vee *}',
    155: '\\overline{\\mu}{}^{\\wedge *}',
    156: '\\overline{\\mu}{}^{\\vee *}',
    157: 'c^{\\wedge *}',
    158: 'c^{\\vee *}',
    159: '\\overline{c}{}^{\\wedge *}',
    160: '\\overline{c}{}^{\\vee *}',
    161: 's^{\\wedge *}',
    162: 's^{\\vee *}',
    163: '\\overline{s}{}^{\\wedge *}',
    164: '\\overline{s}{}^{\\vee *}',

    181: '\\nu_{\\ta}^\\wedge',
    182: '\\nu_{\\ta}^\\vee',
    183: '\\ta^{\\wedge}',
    184: '\\ta^\\vee',
    185: '\\overline{\\ta}{}^\\wedge',
    186: '\\overline{\\ta}{}^\\vee',
    187: 't^\\wedge',
    188: 't^\\vee',
    189: '\\overline{t}{}^\\wedge',
    190: '\\overline{t}{}^\\vee',
    191: 'b^\\wedge',
    192: 'b^\\vee',
    193: '\\overline{b}{}^\\wedge',
    194: '\\overline{b}{}^\\vee',

    195: '\\overline{\\nu}{}_{\\ta}^\\wedge',
    196: '\\overline{\\nu}{}_{\\ta}^\\vee',
    197: '\\overline{\\nu}{}_{\\ta}^{\\wedge *}',
    198: '\\overline{\\nu}{}_{\\ta}^{\\vee *}',

    211: '\\nu_{\\ta}^{\\wedge *}',
    212: '\\nu_{\\ta}^{\\vee *}',
    213: '\\ta^{\\wedge *}',
    214: '\\ta^{\\vee *}',
    215: '\\overline{\\ta}{}^{\\wedge *}',
    216: '\\overline{\\ta}{}^{\\vee *}',
    217: 't^{\\wedge *}',
    218: 't^{\\vee *}',
    219: '\\overline{t}{}^{\\wedge *}',
    220: '\\overline{t}{}^{\\vee *}',
    221: 'b^{\\wedge *}',
    222: 'b^{\\vee *}',
    223: '\\overline{b}{}^{\\wedge *}',
    224: '\\overline{b}{}^{\\vee *}',

    241: '\\ga',
    242: "W'^+",
    243: "W'^-",
    244: 'e \\phi_X'
}
