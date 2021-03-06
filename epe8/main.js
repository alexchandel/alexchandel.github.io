/* eslint indent: ["error", 4, {'SwitchCase': 1}] */
/* eslint-disable camelcase */
/* global $ _ drawLatex particleSymbols */
/* global createCheckBox getRelPos grabMouseRelative tau zeros sum sub add mul div dot dist mag norm */
/* global defaultSavedRotations colorMap particles trialities trialities7 hexalities hexalities7 interactions */

var g_rowHeight = 41
var g_controlPanelWidth = 800
var g_controlPanelHeight = g_rowHeight * 5

var g_coordinateSystems = {
    e8: {
        name: 'Math',
        longLabels: [
            drawLatex('Σ'),
            drawLatex('w_S'),
            drawLatex('w_T'),
            drawLatex('U'),
            drawLatex('V'),
            drawLatex('x'),
            drawLatex('y'),
            drawLatex('z')
        ],
        shortLabels: [
            drawLatex('Σ'),
            drawLatex('w_S'),
            drawLatex('w_T'),
            drawLatex('U'),
            drawLatex('V'),
            drawLatex('x'),
            drawLatex('y'),
            drawLatex('z')
        ]
    },
    sm: {
        name: 'Physics',
        longLabels: [
            drawLatex('Σ'),
            drawLatex('w_S'),
            drawLatex('w_T'),
            drawLatex('sqrt(2)W'),
            drawLatex('frac(sqrt(3),sqrt(10))Y'),
            drawLatex('frac(1,sqrt(5))X'),
            drawLatex('sqrt(2)g^3'),
            drawLatex('sqrt(2)g^8')
        ],
        shortLabels: [
            drawLatex('Σ'),
            drawLatex('w_S'),
            drawLatex('w_T'),
            drawLatex('W'),
            drawLatex('Y'),
            drawLatex('X'),
            drawLatex('g^3'),
            drawLatex('g^8')
        ]
    },
    gut: {
        name: 'GUT',
        longLabels: [
            drawLatex('Σ'),
            drawLatex('w_S'),
            drawLatex('w_T'),
            drawLatex('sqrt(2)W'),
            drawLatex("sqrt(2)W'"),
            drawLatex('frac(sqrt(3),2)B'),
            drawLatex('sqrt(2)g^3'),
            drawLatex('sqrt(2)g^8')
        ],
        shortLabels: [
            drawLatex('Σ'),
            drawLatex('w_S'),
            drawLatex('w_T'),
            drawLatex('W'),
            drawLatex("W'"),
            drawLatex('B'),
            drawLatex('g^3'),
            drawLatex('g^8')
        ]
    },
    tri: {
        name: 'Triality',
        longLabels: [
            drawLatex('frac(sqrt(3),2)S'),
            drawLatex('w_T'),
            drawLatex('sqrt(2)G'),
            drawLatex("sqrt(2)G'"),
            drawLatex('V'),
            drawLatex('frac(sqrt(3),2)B'),
            drawLatex('sqrt(2)g^3'),
            drawLatex('sqrt(2)g^8')
        ],
        shortLabels: [
            drawLatex('S'),
            drawLatex('w_T'),
            drawLatex('G'),
            drawLatex("G'"),
            drawLatex('V'),
            drawLatex('B'),
            drawLatex('g^3'),
            drawLatex('g^8')
        ]
    },
    tri2: {
        name: 'Triality II',
        longLabels: [
            drawLatex('sqrt(2)ω_I'),
            drawLatex('sqrt(2)ω_II'),
            drawLatex('sqrt(2)ω_III'),
            drawLatex('sqrt(2)w'),
            drawLatex('frac(sqrt(3),2)Q'),
            drawLatex("frac(sqrt(3),2)Q'"),
            drawLatex('sqrt(2)g^3'),
            drawLatex('sqrt(2)g^8')
        ],
        shortLabels: [
            drawLatex('ω_I'),
            drawLatex('ω_II'),
            drawLatex('ω_III'),
            drawLatex('w'),
            drawLatex('Q'),
            drawLatex("Q'"),
            drawLatex('g^3'),
            drawLatex('g^8')
        ]
    }
}
$(function () {
    _.each(g_coordinateSystems, function (cs) {
        cs.shortLabelSizes = []
        _.each(cs.shortLabels, function (la) {
            $('body').append(la)
            cs.shortLabelSizes.push([la.width(), la.height()])
            la.detach()
        })
    })
})

var g_coordinateSystemsConversions = {
    'e8->sm': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +1.000 * H[0]
        H1[1] = +1.000 * H[1]
        H1[2] = +1.000 * H[2]
        H1[3] = -0.7071 * H[3] + 0.7071 * H[4]
        H1[4] = +0.5477 * H[3] + 0.5477 * H[4] + 0.3651 * H[5] + 0.3651 * H[6] + 0.3651 * H[7]
        H1[5] = -0.4472 * H[3] - 0.4472 * H[4] + 0.4472 * H[5] + 0.4472 * H[6] + 0.4472 * H[7]
        H1[6] = -0.7071 * H[5] + 0.7071 * H[6]
        H1[7] = -0.4082 * H[5] - 0.4082 * H[6] + 0.8165 * H[7]

        V1[0] = +1.000 * V[0]
        V1[1] = +1.000 * V[1]
        V1[2] = +1.000 * V[2]
        V1[3] = -0.7071 * V[3] + 0.7071 * V[4]
        V1[4] = +0.5477 * V[3] + 0.5477 * V[4] + 0.3651 * V[5] + 0.3651 * V[6] + 0.3651 * V[7]
        V1[5] = -0.4472 * V[3] - 0.4472 * V[4] + 0.4472 * V[5] + 0.4472 * V[6] + 0.4472 * V[7]
        V1[6] = -0.7071 * V[5] + 0.7071 * V[6]
        V1[7] = -0.4082 * V[5] - 0.4082 * V[6] + 0.8165 * V[7]
        return [H1, V1]
    },
    'sm->e8': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +1.000 * H[0]
        H1[1] = +1.000 * H[1]
        H1[2] = +1.000 * H[2]
        H1[3] = -0.7071 * H[3] + 0.5477 * H[4] - 0.4472 * H[5]
        H1[4] = +0.7071 * H[3] + 0.5477 * H[4] - 0.4472 * H[5]
        H1[5] = +0.3651 * H[4] + 0.4472 * H[5] - 0.7071 * H[6] - 0.4082 * H[7]
        H1[6] = +0.3651 * H[4] + 0.4472 * H[5] + 0.7071 * H[6] - 0.4082 * H[7]
        H1[7] = +0.3651 * H[4] + 0.4472 * H[5] + 0.8165 * H[7]

        V1[0] = +1.000 * V[0]
        V1[1] = +1.000 * V[1]
        V1[2] = +1.000 * V[2]
        V1[3] = -0.7071 * V[3] + 0.5477 * V[4] - 0.4472 * V[5]
        V1[4] = +0.7071 * V[3] + 0.5477 * V[4] - 0.4472 * V[5]
        V1[5] = +0.3651 * V[4] + 0.4472 * V[5] - 0.7071 * V[6] - 0.4082 * V[7]
        V1[6] = +0.3651 * V[4] + 0.4472 * V[5] + 0.7071 * V[6] - 0.4082 * V[7]
        V1[7] = +0.3651 * V[4] + 0.4472 * V[5] + 0.8165 * V[7]
        return [H1, V1]
    },
    'e8->gut': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +1.000 * H[0]
        H1[1] = +1.000 * H[1]
        H1[2] = +1.000 * H[2]
        H1[3] = -0.7071 * H[3] + 0.7071 * H[4]
        H1[4] = +0.7071 * H[3] + 0.7071 * H[4]
        H1[5] = +0.5774 * H[5] + 0.5774 * H[6] + 0.5774 * H[7]
        H1[6] = -0.7071 * H[5] + 0.7071 * H[6]
        H1[7] = -0.4082 * H[5] - 0.4082 * H[6] + 0.8165 * H[7]

        V1[0] = +1.000 * V[0]
        V1[1] = +1.000 * V[1]
        V1[2] = +1.000 * V[2]
        V1[3] = -0.7071 * V[3] + 0.7071 * V[4]
        V1[4] = +0.7071 * V[3] + 0.7071 * V[4]
        V1[5] = +0.5774 * V[5] + 0.5774 * V[6] + 0.5774 * V[7]
        V1[6] = -0.7071 * V[5] + 0.7071 * V[6]
        V1[7] = -0.4082 * V[5] - 0.4082 * V[6] + 0.8165 * V[7]
        return [H1, V1]
    },
    'gut->e8': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +1.000 * H[0]
        H1[1] = +1.000 * H[1]
        H1[2] = +1.000 * H[2]
        H1[3] = -0.7071 * H[3] + 0.7071 * H[4]
        H1[4] = +0.7071 * H[3] + 0.7071 * H[4]
        H1[5] = +0.5774 * H[5] - 0.7071 * H[6] - 0.4082 * H[7]
        H1[6] = +0.5774 * H[5] + 0.7071 * H[6] - 0.4082 * H[7]
        H1[7] = +0.5774 * H[5] + 0.8165 * H[7]

        V1[0] = +1.000 * V[0]
        V1[1] = +1.000 * V[1]
        V1[2] = +1.000 * V[2]
        V1[3] = -0.7071 * V[3] + 0.7071 * V[4]
        V1[4] = +0.7071 * V[3] + 0.7071 * V[4]
        V1[5] = +0.5774 * V[5] - 0.7071 * V[6] - 0.4082 * V[7]
        V1[6] = +0.5774 * V[5] + 0.7071 * V[6] - 0.4082 * V[7]
        V1[7] = +0.5774 * V[5] + 0.8165 * V[7]
        return [H1, V1]
    },
    'gut->sm': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +1.000 * H[0]
        H1[1] = +1.000 * H[1]
        H1[2] = +1.000 * H[2]
        H1[3] = +1.000 * H[3]
        H1[4] = +0.7746 * H[4] + 0.6325 * H[5]
        H1[5] = -0.6325 * H[4] + 0.7746 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = +1.000 * V[0]
        V1[1] = +1.000 * V[1]
        V1[2] = +1.000 * V[2]
        V1[3] = +1.000 * V[3]
        V1[4] = +0.7746 * V[4] + 0.6325 * V[5]
        V1[5] = -0.6325 * V[4] + 0.7746 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'sm->gut': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +1.000 * H[0]
        H1[1] = +1.000 * H[1]
        H1[2] = +1.000 * H[2]
        H1[3] = +1.000 * H[3]
        H1[4] = +0.7746 * H[4] - 0.6325 * H[5]
        H1[5] = +0.6325 * H[4] + 0.7746 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = +1.000 * V[0]
        V1[1] = +1.000 * V[1]
        V1[2] = +1.000 * V[2]
        V1[3] = +1.000 * V[3]
        V1[4] = +0.7746 * V[4] - 0.6325 * V[5]
        V1[5] = +0.6325 * V[4] + 0.7746 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'e8->tri': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +0.5774 * H[0] - 0.5774 * H[1] + 0.5774 * H[3]
        H1[1] = +1.000 * H[2]
        H1[2] = -0.7071 * H[0] + 0.7071 * H[3]
        H1[3] = +0.4082 * H[0] + 0.8165 * H[1] + 0.4082 * H[3]
        H1[4] = +1.000 * H[4]
        H1[5] = +0.5774 * H[5] + 0.5774 * H[6] + 0.5774 * H[7]
        H1[6] = -0.7071 * H[5] + 0.7071 * H[6]
        H1[7] = -0.4082 * H[5] - 0.4082 * H[6] + 0.8165 * H[7]

        V1[0] = +0.5774 * V[0] - 0.5774 * V[1] + 0.5774 * V[3]
        V1[1] = +1.000 * V[2]
        V1[2] = -0.7071 * V[0] + 0.7071 * V[3]
        V1[3] = +0.4082 * V[0] + 0.8165 * V[1] + 0.4082 * V[3]
        V1[4] = +1.000 * V[4]
        V1[5] = +0.5774 * V[5] + 0.5774 * V[6] + 0.5774 * V[7]
        V1[6] = -0.7071 * V[5] + 0.7071 * V[6]
        V1[7] = -0.4082 * V[5] - 0.4082 * V[6] + 0.8165 * V[7]
        return [H1, V1]
    },
    'tri->e8': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +0.5774 * H[0] - 0.7071 * H[2] + 0.4082 * H[3]
        H1[1] = -0.5774 * H[0] + 0.8165 * H[3]
        H1[2] = +1.000 * H[1]
        H1[3] = +0.5774 * H[0] + 0.7071 * H[2] + 0.4082 * H[3]
        H1[4] = +1.000 * H[4]
        H1[5] = +0.5774 * H[5] - 0.7071 * H[6] - 0.4082 * H[7]
        H1[6] = +0.5774 * H[5] + 0.7071 * H[6] - 0.4082 * H[7]
        H1[7] = +0.5774 * H[5] + 0.8165 * H[7]

        V1[0] = +0.5774 * V[0] - 0.7071 * V[2] + 0.4082 * V[3]
        V1[1] = -0.5774 * V[0] + 0.8165 * V[3]
        V1[2] = +1.000 * V[1]
        V1[3] = +0.5774 * V[0] + 0.7071 * V[2] + 0.4082 * V[3]
        V1[4] = +1.000 * V[4]
        V1[5] = +0.5774 * V[5] - 0.7071 * V[6] - 0.4082 * V[7]
        V1[6] = +0.5774 * V[5] + 0.7071 * V[6] - 0.4082 * V[7]
        V1[7] = +0.5774 * V[5] + 0.8165 * V[7]
        return [H1, V1]
    },
    'sm->tri': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +0.5774 * H[0] - 0.5774 * H[1] - 0.4082 * H[3] + 0.3162 * H[4] - 0.2582 * H[5]
        H1[1] = +1.000 * H[2]
        H1[2] = -0.7071 * H[0] - 0.5000 * H[3] + 0.3873 * H[4] - 0.3162 * H[5]
        H1[3] = +0.4082 * H[0] + 0.8165 * H[1] - 0.2887 * H[3] + 0.2236 * H[4] - 0.1826 * H[5]
        H1[4] = +0.7071 * H[3] + 0.5477 * H[4] - 0.4472 * H[5]
        H1[5] = +0.6325 * H[4] + 0.7746 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = +0.5774 * V[0] - 0.5774 * V[1] - 0.4082 * V[3] + 0.3162 * V[4] - 0.2582 * V[5]
        V1[1] = +1.000 * V[2]
        V1[2] = -0.7071 * V[0] - 0.5000 * V[3] + 0.3873 * V[4] - 0.3162 * V[5]
        V1[3] = +0.4082 * V[0] + 0.8165 * V[1] - 0.2887 * V[3] + 0.2236 * V[4] - 0.1826 * V[5]
        V1[4] = +0.7071 * V[3] + 0.5477 * V[4] - 0.4472 * V[5]
        V1[5] = +0.6325 * V[4] + 0.7746 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'tri->sm': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +0.5774 * H[0] - 0.7071 * H[2] + 0.4082 * H[3]
        H1[1] = -0.5774 * H[0] + 0.8165 * H[3]
        H1[2] = +1.000 * H[1]
        H1[3] = -0.4082 * H[0] - 0.5000 * H[2] - 0.2887 * H[3] + 0.7071 * H[4]
        H1[4] = +0.3162 * H[0] + 0.3873 * H[2] + 0.2236 * H[3] + 0.5477 * H[4] + 0.6325 * H[5]
        H1[5] = -0.2582 * H[0] - 0.3162 * H[2] - 0.1826 * H[3] - 0.4472 * H[4] + 0.7746 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = +0.5774 * V[0] - 0.7071 * V[2] + 0.4082 * V[3]
        V1[1] = -0.5774 * V[0] + 0.8165 * V[3]
        V1[2] = +1.000 * V[1]
        V1[3] = -0.4082 * V[0] - 0.5000 * V[2] - 0.2887 * V[3] + 0.7071 * V[4]
        V1[4] = +0.3162 * V[0] + 0.3873 * V[2] + 0.2236 * V[3] + 0.5477 * V[4] + 0.6325 * V[5]
        V1[5] = -0.2582 * V[0] - 0.3162 * V[2] - 0.1826 * V[3] - 0.4472 * V[4] + 0.7746 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'gut->tri': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +0.5774 * H[0] - 0.5774 * H[1] - 0.4082 * H[3] + 0.4082 * H[4]
        H1[1] = +1.000 * H[2]
        H1[2] = -0.7071 * H[0] - 0.5000 * H[3] + 0.5000 * H[4]
        H1[3] = +0.4082 * H[0] + 0.8165 * H[1] - 0.2887 * H[3] + 0.2887 * H[4]
        H1[4] = +0.7071 * H[3] + 0.7071 * H[4]
        H1[5] = +1.000 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = +0.5774 * V[0] - 0.5774 * V[1] - 0.4082 * V[3] + 0.4082 * V[4]
        V1[1] = +1.000 * V[2]
        V1[2] = -0.7071 * V[0] - 0.5000 * V[3] + 0.5000 * V[4]
        V1[3] = +0.4082 * V[0] + 0.8165 * V[1] - 0.2887 * V[3] + 0.2887 * V[4]
        V1[4] = +0.7071 * V[3] + 0.7071 * V[4]
        V1[5] = +1.000 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'tri->gut': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = +0.5774 * H[0] - 0.7071 * H[2] + 0.4082 * H[3]
        H1[1] = -0.5774 * H[0] + 0.8165 * H[3]
        H1[2] = +1.000 * H[1]
        H1[3] = -0.4082 * H[0] - 0.5000 * H[2] - 0.2887 * H[3] + 0.7071 * H[4]
        H1[4] = +0.4082 * H[0] + 0.5000 * H[2] + 0.2887 * H[3] + 0.7071 * H[4]
        H1[5] = +1.000 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = +0.5774 * V[0] - 0.7071 * V[2] + 0.4082 * V[3]
        V1[1] = -0.5774 * V[0] + 0.8165 * V[3]
        V1[2] = +1.000 * V[1]
        V1[3] = -0.4082 * V[0] - 0.5000 * V[2] - 0.2887 * V[3] + 0.7071 * V[4]
        V1[4] = +0.4082 * V[0] + 0.5000 * V[2] + 0.2887 * V[3] + 0.7071 * V[4]
        V1[5] = +1.000 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'e8->tri2': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = -0.7071 * H[0] + 0.7071 * H[2]
        H1[1] = -0.7071 * H[0] - 0.7071 * H[2]
        H1[2] = -0.7071 * H[1] + 0.7071 * H[3]
        H1[3] = -0.7071 * H[1] - 0.7071 * H[3]
        H1[4] = +0.8660 * H[4] + 0.2887 * H[5] + 0.2887 * H[6] + 0.2887 * H[7]
        H1[5] = -0.5000 * H[4] + 0.5000 * H[5] + 0.5000 * H[6] + 0.5000 * H[7]
        H1[6] = -0.7071 * H[5] + 0.7071 * H[6]
        H1[7] = -0.4082 * H[5] - 0.4082 * H[6] + 0.8165 * H[7]

        V1[0] = -0.7071 * V[0] + 0.7071 * V[2]
        V1[1] = -0.7071 * V[0] - 0.7071 * V[2]
        V1[2] = -0.7071 * V[1] + 0.7071 * V[3]
        V1[3] = -0.7071 * V[1] - 0.7071 * V[3]
        V1[4] = +0.8660 * V[4] + 0.2887 * V[5] + 0.2887 * V[6] + 0.2887 * V[7]
        V1[5] = -0.5000 * V[4] + 0.5000 * V[5] + 0.5000 * V[6] + 0.5000 * V[7]
        V1[6] = -0.7071 * V[5] + 0.7071 * V[6]
        V1[7] = -0.4082 * V[5] - 0.4082 * V[6] + 0.8165 * V[7]
        return [H1, V1]
    },
    'tri2->e8': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = -0.7071 * H[0] - 0.7071 * H[1]
        H1[1] = -0.7071 * H[2] - 0.7071 * H[3]
        H1[2] = +0.7071 * H[0] - 0.7071 * H[1]
        H1[3] = +0.7071 * H[2] - 0.7071 * H[3]
        H1[4] = +0.8660 * H[4] - 0.5000 * H[5]
        H1[5] = +0.2887 * H[4] + 0.5000 * H[5] - 0.7071 * H[6] - 0.4082 * H[7]
        H1[6] = +0.2887 * H[4] + 0.5000 * H[5] + 0.7071 * H[6] - 0.4082 * H[7]
        H1[7] = +0.2887 * H[4] + 0.5000 * H[5] + 0.8165 * H[7]

        V1[0] = -0.7071 * V[0] - 0.7071 * V[1]
        V1[1] = -0.7071 * V[2] - 0.7071 * V[3]
        V1[2] = +0.7071 * V[0] - 0.7071 * V[1]
        V1[3] = +0.7071 * V[2] - 0.7071 * V[3]
        V1[4] = +0.8660 * V[4] - 0.5000 * V[5]
        V1[5] = +0.2887 * V[4] + 0.5000 * V[5] - 0.7071 * V[6] - 0.4082 * V[7]
        V1[6] = +0.2887 * V[4] + 0.5000 * V[5] + 0.7071 * V[6] - 0.4082 * V[7]
        V1[7] = +0.2887 * V[4] + 0.5000 * V[5] + 0.8165 * V[7]
        return [H1, V1]
    },
    'sm->tri2': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = -0.7071 * H[0] + 0.7071 * H[2]
        H1[1] = -0.7071 * H[0] - 0.7071 * H[2]
        H1[2] = -0.7071 * H[1] - 0.5000 * H[3] + 0.3873 * H[4] - 0.3162 * H[5]
        H1[3] = -0.7071 * H[1] + 0.5000 * H[3] - 0.3873 * H[4] + 0.3162 * H[5]
        H1[4] = +0.6124 * H[3] + 0.7906 * H[4]
        H1[5] = -0.3536 * H[3] + 0.2739 * H[4] + 0.8944 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = -0.7071 * V[0] + 0.7071 * V[2]
        V1[1] = -0.7071 * V[0] - 0.7071 * V[2]
        V1[2] = -0.7071 * V[1] - 0.5000 * V[3] + 0.3873 * V[4] - 0.3162 * V[5]
        V1[3] = -0.7071 * V[1] + 0.5000 * V[3] - 0.3873 * V[4] + 0.3162 * V[5]
        V1[4] = +0.6124 * V[3] + 0.7906 * V[4]
        V1[5] = -0.3536 * V[3] + 0.2739 * V[4] + 0.8944 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'tri2->sm': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = -0.7071 * H[0] - 0.7071 * H[1]
        H1[1] = -0.7071 * H[2] - 0.7071 * H[3]
        H1[2] = +0.7071 * H[0] - 0.7071 * H[1]
        H1[3] = -0.5000 * H[2] + 0.5000 * H[3] + 0.6124 * H[4] - 0.3536 * H[5]
        H1[4] = +0.3873 * H[2] - 0.3873 * H[3] + 0.7906 * H[4] + 0.2739 * H[5]
        H1[5] = -0.3162 * H[2] + 0.3162 * H[3] + 0.8944 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = -0.7071 * V[0] - 0.7071 * V[1]
        V1[1] = -0.7071 * V[2] - 0.7071 * V[3]
        V1[2] = +0.7071 * V[0] - 0.7071 * V[1]
        V1[3] = -0.5000 * V[2] + 0.5000 * V[3] + 0.6124 * V[4] - 0.3536 * V[5]
        V1[4] = +0.3873 * V[2] - 0.3873 * V[3] + 0.7906 * V[4] + 0.2739 * V[5]
        V1[5] = -0.3162 * V[2] + 0.3162 * V[3] + 0.8944 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'gut->tri2': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = -0.7071 * H[0] + 0.7071 * H[2]
        H1[1] = -0.7071 * H[0] - 0.7071 * H[2]
        H1[2] = -0.7071 * H[1] - 0.5000 * H[3] + 0.5000 * H[4]
        H1[3] = -0.7071 * H[1] + 0.5000 * H[3] - 0.5000 * H[4]
        H1[4] = +0.6124 * H[3] + 0.6124 * H[4] + 0.5000 * H[5]
        H1[5] = -0.3536 * H[3] - 0.3536 * H[4] + 0.8660 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = -0.7071 * V[0] + 0.7071 * V[2]
        V1[1] = -0.7071 * V[0] - 0.7071 * V[2]
        V1[2] = -0.7071 * V[1] - 0.5000 * V[3] + 0.5000 * V[4]
        V1[3] = -0.7071 * V[1] + 0.5000 * V[3] - 0.5000 * V[4]
        V1[4] = +0.6124 * V[3] + 0.6124 * V[4] + 0.5000 * V[5]
        V1[5] = -0.3536 * V[3] - 0.3536 * V[4] + 0.8660 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'tri2->gut': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = -0.7071 * H[0] - 0.7071 * H[1]
        H1[1] = -0.7071 * H[2] - 0.7071 * H[3]
        H1[2] = +0.7071 * H[0] - 0.7071 * H[1]
        H1[3] = -0.5000 * H[2] + 0.5000 * H[3] + 0.6124 * H[4] - 0.3536 * H[5]
        H1[4] = +0.5000 * H[2] - 0.5000 * H[3] + 0.6124 * H[4] - 0.3536 * H[5]
        H1[5] = +0.5000 * H[4] + 0.8660 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = -0.7071 * V[0] - 0.7071 * V[1]
        V1[1] = -0.7071 * V[2] - 0.7071 * V[3]
        V1[2] = +0.7071 * V[0] - 0.7071 * V[1]
        V1[3] = -0.5000 * V[2] + 0.5000 * V[3] + 0.6124 * V[4] - 0.3536 * V[5]
        V1[4] = +0.5000 * V[2] - 0.5000 * V[3] + 0.6124 * V[4] - 0.3536 * V[5]
        V1[5] = +0.5000 * V[4] + 0.8660 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'tri->tri2': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = -0.4082 * H[0] + 0.7071 * H[1] + 0.5000 * H[2] - 0.2887 * H[3]
        H1[1] = -0.4082 * H[0] - 0.7071 * H[1] + 0.5000 * H[2] - 0.2887 * H[3]
        H1[2] = +0.8165 * H[0] + 0.5000 * H[2] - 0.2887 * H[3]
        H1[3] = -0.5000 * H[2] - 0.8660 * H[3]
        H1[4] = +0.8660 * H[4] + 0.5000 * H[5]
        H1[5] = -0.5000 * H[4] + 0.8660 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = -0.4082 * V[0] + 0.7071 * V[1] + 0.5000 * V[2] - 0.2887 * V[3]
        V1[1] = -0.4082 * V[0] - 0.7071 * V[1] + 0.5000 * V[2] - 0.2887 * V[3]
        V1[2] = +0.8165 * V[0] + 0.5000 * V[2] - 0.2887 * V[3]
        V1[3] = -0.5000 * V[2] - 0.8660 * V[3]
        V1[4] = +0.8660 * V[4] + 0.5000 * V[5]
        V1[5] = -0.5000 * V[4] + 0.8660 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    },
    'tri2->tri': function (H, V) {
        var H1 = []
        var V1 = []
        H1[0] = -0.4082 * H[0] - 0.4082 * H[1] + 0.8165 * H[2]
        H1[1] = +0.7071 * H[0] - 0.7071 * H[1]
        H1[2] = +0.5000 * H[0] + 0.5000 * H[1] + 0.5000 * H[2] - 0.5000 * H[3]
        H1[3] = -0.2887 * H[0] - 0.2887 * H[1] - 0.2887 * H[2] - 0.8660 * H[3]
        H1[4] = +0.8660 * H[4] - 0.5000 * H[5]
        H1[5] = +0.5000 * H[4] + 0.8660 * H[5]
        H1[6] = +1.000 * H[6]
        H1[7] = +1.000 * H[7]

        V1[0] = -0.4082 * V[0] - 0.4082 * V[1] + 0.8165 * V[2]
        V1[1] = +0.7071 * V[0] - 0.7071 * V[1]
        V1[2] = +0.5000 * V[0] + 0.5000 * V[1] + 0.5000 * V[2] - 0.5000 * V[3]
        V1[3] = -0.2887 * V[0] - 0.2887 * V[1] - 0.2887 * V[2] - 0.8660 * V[3]
        V1[4] = +0.8660 * V[4] - 0.5000 * V[5]
        V1[5] = +0.5000 * V[4] + 0.8660 * V[5]
        V1[6] = +1.000 * V[6]
        V1[7] = +1.000 * V[7]
        return [H1, V1]
    }
}

;(function () {
    p2p_colors = _.map(particles, function () {
        var r = Math.floor(Math.random() * 256)
        var g = Math.floor(Math.random() * 256)
        var b = Math.floor(Math.random() * 256)
        return {
            color: [r, g, b],
            css: 'rgb(' + r + ',' + g + ',' + b + ')'
        }
    })

    function circle (g, x, y, size) {
        g.beginPath()
        g.arc(x, y, size, 0, tau)
    }
    function square (g, x, y, size) {
        g.beginPath()
        g.moveTo(x - size, y - size)
        g.lineTo(x - size, y + size)
        g.lineTo(x + size, y + size)
        g.lineTo(x + size, y - size)
        g.closePath()
    }
    function dia (g, x, y, size) {
        g.beginPath()
        g.lineTo(x - size, y)
        g.lineTo(x, y + size)
        g.lineTo(x + size, y)
        g.lineTo(x, y - size)
        g.closePath()
    }
    var glyphu = [
        [-1 / 2, -1 / (2 * Math.sqrt(3))],
        [-1 / 4, 1 / (4 * Math.sqrt(3))],
        [-1 / 4, 1 / Math.sqrt(3)],
        [0, 1 / (Math.sqrt(3))],
        [1 / 2, -1 / (2 * Math.sqrt(3))]
    ]
    var glyphd = [
        [-1 / 2, -1 / (2 * Math.sqrt(3))],
        [-1 / 2, 1 / (4 * Math.sqrt(3))],
        [-1 / 4, 1 / (4 * Math.sqrt(3))],
        [0, 1 / (Math.sqrt(3))],
        [1 / 2, -1 / (2 * Math.sqrt(3))]
    ]
    var sizeMap = {
        s: 0.72,
        m: 0.82,
        b: 0.92
    }
    function glyph (g, x, y, scale, sym) {
        var size = scale * sizeMap[sym[0]]
        var mx = size * (sym[1] === 'l' ? 1 : -1)
        var my = size * (sym[3] === 'p' ? 1 : -1)
        var gl = (sym[2] === 'u') === (sym[3] === 'p') ? glyphu : glyphd
        g.beginPath()
        for (let i = 0; i < gl.length; i++) {
            if (i === 0) g.moveTo(x + mx * gl[i][0], y + my * gl[i][1])
            else g.lineTo(x + mx * gl[i][0], y + my * gl[i][1])
        }
        g.closePath()
    }
    renderParticle = function (g, x, y, scale, lineWidth, p, p2p, justLine) {
        if (p2p) p2p = p2p_colors[p.id - 1].css
        var size = sizeMap[p.symbol[0]]
        var sym = p.symbol.slice(1)
        if (sym === 'cir') {
            circle(g, x, y, size * scale * 0.5)
        } else if (sym === 'squ') {
            square(g, x, y, size * 0.4 * scale)
        } else if (sym === 'dia') {
            dia(g, x, y, size * 0.4 * Math.sqrt(2) * scale)
        } else {
            glyph(g, x, y, scale, p.symbol)
        }
        if (!justLine) {
            g.fillStyle = p2p || colorMap[p.color]
            g.fill()
        }
        g.strokeStyle = p2p || justLine || 'black'
        g.lineWidth = lineWidth
        g.stroke()
    }
})()

function drawVisualization (x, y, w, h) {
    w = Math.floor(w)
    h = Math.floor(h)
    var superScale = 2
    var w2 = w * superScale
    var h2 = h * superScale
    var pixelToParticleMap = null
    var p2p_transform = null
    var p2p_positions = null

    function updatePixelToParticleMap () {
        var c = draw(true)
        var g = c[0].getContext('2d')
        pixelToParticleMap = g.getImageData(0, 0, w, h).data
    }

    function transformPoint (p, _0, _1, _2, _3, _4, _5) {
        return [
            p[0] * _0 + p[1] * _2 + _4,
            p[0] * _1 + p[1] * _3 + _5
        ]
    }

    function draw (p2p, c) {
        if (p2p) {
            c = $('<canvas/>').attr('width', w).attr('height', h)
            var g = c[0].getContext('2d')
            g.setTransform(w / 3, 0, 0, -h / 3, w / 2, h / 2)
            p2p_transform = function (pos) {
                return [(pos[0] - w / 2) * (3 / w), (pos[1] - h / 2) * (-3 / h)]
            }
            p2p_positions = []
        } else if (!c) {
            c = $('<canvas style="width:' + w + 'px;height:' + h + 'px"/>').attr('width', w2).attr('height', h2)
            var g = c[0].getContext('2d')
            g.setTransform(w2 / 3, 0, 0, -h2 / 3, w2 / 2, h2 / 2)
        } else {
            var g = c[0].getContext('2d')
            g.clearRect(-1.5, -1.5, 3, 3)
        }
        var unitWidth = 3 / w

        var H = g_m.rotate.H
        var V = g_m.rotate.V

        function project (x) {
            return [dot(H, x), dot(V, x)]
        }
        function projectParticle (id) {
            var p = particles[id - 1]
            return project(p[g_m.coordinateSystem + 'coord'])
        }

        //        var scale = 0.05
        var scale = 0.06

        if (!p2p) {
            if (g_m.showAxes) {
                var cs = g_coordinateSystems[g_m.coordinateSystem]
                g.lineWidth = unitWidth * 1.5
                g.strokeStyle = '#CCCCCC'
                for (let i = 0; i < 8; i++) {
                    var v = zeros(8)
                    v[i] = 1
                    const v1 = project(v)
                    v[i] *= -1
                    const v2 = project(v)

                    g.beginPath()
                    g.moveTo(v1[0], v1[1])
                    g.lineTo(v2[0], v2[1])
                    g.stroke()

                    v[i] = 1.05
                    v = project(v)
                    v = transformPoint(v, w / 3, 0, 0, -h / 3, w / 2, h / 2)

                    var label = cs.shortLabels[i].clone()
                    v = sub(v, mul(0.5, cs.shortLabelSizes[i]))
                    d.append($('<div class="label" style="color:#CCCCCC; position:absolute; z-index:-1; left:' + v[0] + 'px;top:' + v[1] + 'px"/>').append(label))
                }
            }

            if (g_m.interactions.interaction) {
                const x = _.map(g_m.interactions.interaction, projectParticle)

                g.beginPath()
                g.moveTo(x[0][0], x[0][1])
                g.lineTo(x[1][0], x[1][1])
                g.lineWidth = unitWidth * 7
                g.strokeStyle = 'yellow'
                g.stroke()

                g.beginPath()
                g.arc(x[0][0], x[0][1], scale * 1.0, 0, tau)
                g.fillStyle = 'yellow'
                g.fill()

                g.beginPath()
                g.arc(x[1][0], x[1][1], scale * 1.0, 0, tau)
                g.fillStyle = 'yellow'
                g.fill()

                g.beginPath()
                g.moveTo(0, 0)
                g.lineTo(x[2][0], x[2][1])
                g.lineWidth = unitWidth * 7
                g.strokeStyle = 'lightgreen'
                g.stroke()

                g.beginPath()
                g.arc(x[2][0], x[2][1], scale * 1.0, 0, tau)
                g.fillStyle = 'lightgreen'
                g.fill()
            }

            if (g_m.showTriality && g_m.theory === 'e8') {
                _.each(trialities, function (t) {
                    var locs = _.map(t, projectParticle)
                    g.imageSmoothingEnabled = true
                    g.beginPath()
                    g.moveTo(locs[2][0], locs[2][1])
                    for (let i = 0; i < 3; i++) {
                        g.lineTo(locs[i][0], locs[i][1])
                    }
                    g.strokeStyle = '#BBBBBB'
                    g.lineWidth = unitWidth / 2
                    g.stroke()
                })
            }

            if (g_m.showTriality && g_m.theory === 'e7') {
                _.each(trialities7, function (t) {
                    var locs = _.map(t, projectParticle)
                    g.imageSmoothingEnabled = true
                    g.beginPath()
                    g.moveTo(locs[2][0], locs[2][1])
                    for (var i = 0; i < 3; i++) {
                        g.lineTo(locs[i][0], locs[i][1])
                    }
                    g.strokeStyle = '#BBBBBB'
                    g.lineWidth = unitWidth / 2
                    g.stroke()
                })
            }

            if (g_m.showHexality && g_m.theory === 'e8') {
                _.each(hexalities, function (t) {
                    var locs = _.map(t, projectParticle)
                    g.imageSmoothingEnabled = true
                    g.beginPath()
                    g.moveTo(locs[0][0], locs[0][1])
                    for (let i = 1; i < 6; i++) {
                        g.lineTo(locs[i][0], locs[i][1])
                    }
                    g.lineTo(locs[0][0], locs[0][1])
                    g.strokeStyle = '#BBBBBB'
                    g.lineWidth = unitWidth / 2
                    g.stroke()
                })
            }

            if (g_m.showHexality && g_m.theory === 'e7') {
                _.each(hexalities7, function (t) {
                    var locs = _.map(t, projectParticle)
                    g.imageSmoothingEnabled = true
                    g.beginPath()
                    g.moveTo(locs[0][0], locs[0][1])
                    for (let i = 1; i < 6; i++) {
                        g.lineTo(locs[i][0], locs[i][1])
                    }
                    g.lineTo(locs[0][0], locs[0][1])
                    g.strokeStyle = '#BBBBBB'
                    g.lineWidth = unitWidth / 2
                    g.stroke()
                })
            }
        }

        var noInteractionHighlight = _.makeSet(g_m.interactions.interaction || [])

        _.each(particles, function (p) {
            if (!p[g_m.theory]) return
            const pos = p[g_m.coordinateSystem + 'coord']
            const x = dot(H, pos)
            const y = dot(V, pos)
            if (!p2p) {
                if (g_selection1_interactions[p.id] && !noInteractionHighlight[p.id]) {
                    renderParticle(g, x, y, scale, unitWidth * 4, p, null, 'cyan')
                }
                if (g_m.interactions.selection1 === p.id) {
                    renderParticle(g, x, y, scale, unitWidth * 5, p, null, 'blue')
                }
                if (g_m.interactions.over === p.id) {
                    renderParticle(g, x, y, scale, unitWidth * 3, p)

                    var labelPos = transformPoint([x, y], w / 3, 0, 0, -h / 3, w / 2, h / 2)
                    //                    labelPos = add(labelPos, [-20, -45])
                    labelPos = add(labelPos, [-10, -42])
                    d.append($('<div class="label" style="position:absolute;z-index:1000;left:' + labelPos[0] + 'px;top:' + labelPos[1] + 'px"/>').append(drawLatex(particleSymbols[p.name])))
                }
            } else {
                p2p_positions.push({
                    p: p,
                    pos: [x, y],
                    size: scale
                })
            }
            renderParticle(g, x, y, scale, unitWidth / 3, p, p2p)
        })

        return c
    }

    var d = $('<div style="position:absolute;left:' + x + 'px;top:' + y + 'px"/>')
    var updateP2P = true
    var prevC = null
    function update () {
        if (!prevC) {
            d.append(prevC = draw())
        } else {
            d.find('.label').remove()
            draw(null, prevC)
        }
        if (updateP2P) updatePixelToParticleMap()
        else pixelToParticleMap = null
    }

    update()
    var downPos = null
    grabMouseRelative(d, function (dx, dy, x, y) {
        if (!downPos) downPos = [x, y]
        updateP2P = false
        if (dx === 0 && dy === 0) return

        // H = current Horizontal view plane vector (8D)
        // V = current Vertical view plane vector
        // ax = horizontal rotation angle from user's horizontal mouse drag in viewport
        // ay = vertical rotation angle from user's vertical mouse drag in viewport
        // a = H-axis vector chosen (on left) to rotate towards
        // A = V-axis vector chosen to rotate towards
        // g,G = temporary vectors
        // H', V' = result

        // g = a - (a.V)V - (a.H)H
        // G = A - (A.V)V - (A.H)H
        // g = g/|g|
        // G = G/|G|
        // H' = H cos ax + g sin ax
        // H' = H'/|H'|
        // V' = V - (V.H')H'
        // V' = V'/|V'|
        // V' = V' cos ay + G sin ay
        // V' = V'/|V'|

        // for flat rotation
        // H' = H cos - V sin
        // V' = V cos + H sin

        var H = g_m.rotate.H
        var V = g_m.rotate.V
        let H_, V_

        if (g_m.rotate.rotateZ) {
            let pos = d.offset()
            pos = [
                x - (pos.left + w / 2),
                y - (pos.top + h / 2)
            ]
            const prevPos = sub(pos, [dx, dy])
            const prevAngle = Math.atan2(-prevPos[1], prevPos[0])
            const angle = Math.atan2(-pos[1], pos[0])
            let da = angle - prevAngle
            if (da < 0) da += tau
            const a = Math.atan2(pos[1], pos[0])
            H_ = sub(mul(H, Math.cos(da)), mul(V, Math.sin(da)))
            V_ = add(mul(V, Math.cos(da)), mul(H, Math.sin(da)))
            H_ = norm(H_)
            V_ = norm(V_)
        } else {
            const radiansPerPixel = tau / 1000
            const ax = dx * radiansPerPixel
            const ay = -dy * radiansPerPixel

            const a = zeros(8)
            a[g_m.rotate.axes[0]] = 1
            const A = zeros(8)
            A[g_m.rotate.axes[1]] = 1

            let g = sub(sub(a, mul(dot(a, V), V)), mul(dot(a, H), H))
            let G = sub(sub(A, mul(dot(A, V), V)), mul(dot(A, H), H))
            g = norm(g)
            G = norm(G)

            H_ = add(mul(H, Math.cos(ax)), mul(g, Math.sin(ax)))
            H_ = norm(H_)
            V_ = sub(V, mul(dot(V, H_), H_))
            V_ = norm(V_)
            V_ = add(mul(V_, Math.cos(ay)), mul(G, Math.sin(ay)))
            V_ = norm(V_)
        }

        beginModelChange()
        g_m.rotate.H = H_
        g_m.rotate.V = V_
        endModelChange()
    }, function (x, y) {
        updateP2P = true
        update()

        if (dist(sub([x, y], downPos)) < 5) {
            var id = getOverParticle({ pageX: x, pageY: y })
            if (id) {
                beginModelChange()
                var i = g_selection1_interactions[id]
                if (g_m.interactions.selection1 && i) {
                    g_m.interactions.selection2 = id
                    g_m.interactions.result = i[0]
                    g_m.interactions.interaction = i[1]
                } else {
                    g_m.interactions.selection1 = id
                    g_m.interactions.selection2 = null
                    g_m.interactions.result = null
                    g_m.interactions.interaction = null
                    g_selection1_interactions = {}
                    _.each(interactions, function (i) {
                        if (i.indexOf(id) !== -1) {
                            var others = []
                            _.each(i, function (i) {
                                if (i !== id) others.push(i)
                            })
                            g_selection1_interactions[others[0]] = [others[1], i]
                            g_selection1_interactions[others[1]] = [others[0], i]
                        }
                    })
                }
                endModelChange()
            }
        }
        downPos = null
    })

    function getOverParticle (e) {
        if (pixelToParticleMap) {
            var pos = _.map(getRelPos(d, e), Math.round)
            var base = pos[0] * 4 + pos[1] * 4 * w
            var color = [pixelToParticleMap[base], pixelToParticleMap[base + 1], pixelToParticleMap[base + 2]]

            pos = p2p_transform(pos)
            var p = _.min(_.filter(p2p_positions, function (p) {
                return pos[0] > p.pos[0] - p.size &&
                    pos[0] < p.pos[0] + p.size &&
                    pos[1] > p.pos[1] - p.size &&
                    pos[1] < p.pos[1] + p.size
            }), function (p) {
                return dist(sub(color, p2p_colors[p.p.id - 1].color))
            })
            return p && p.p.id
        }
    }

    d.on('mousemove', function (e) {
        beginModelChange()
        g_m.interactions.over = getOverParticle(e) || 0
        endModelChange()
    })

    d.addClass('onModelChange')[0].onModelChange = function () {
        var diff = false
        for (var i = 0; i < g_m.rotate.H.length; i++) {
            if (g_m.rotate.H[i] !== g_old_m.rotate.H[i]) {
                diff = true
                break
            }
            if (g_m.rotate.V[i] !== g_old_m.rotate.V[i]) {
                diff = true
                break
            }
        }
        if (diff || isModelDifferent('theory', 'coordinateSystem', 'showAxes', 'showTriality', 'showHexality', 'interactions.over', 'interactions.selection1', 'interactions.selection2', 'interactions.result')) {
            update()
        }
    }

    return d
}

var drawParticleSVG = (function () {
    function circle (x, y, size) {
        return drawSVG('circle', { cx: x, cy: y, r: size })
    }
    function square (x, y, size) {
        return drawSVG('path', {
            d:
            'M' + (x - size) + ' ' + (y - size) +
            ' L' + (x - size) + ' ' + (y + size) +
            ' L' + (x + size) + ' ' + (y + size) +
            ' L' + (x + size) + ' ' + (y - size) +
            ' Z'
        })
    }
    function dia (x, y, size) {
        return drawSVG('path', {
            d:
            'M' + (x - size) + ' ' + (y) +
            ' L' + (x) + ' ' + (y + size) +
            ' L' + (x + size) + ' ' + (y) +
            ' L' + (x) + ' ' + (y - size) +
            ' Z'
        })
    }
    var glyphu = [
        [-1 / 2, -1 / (2 * Math.sqrt(3))],
        [-1 / 4, 1 / (4 * Math.sqrt(3))],
        [-1 / 2, 1 / Math.sqrt(3)],
        [0, 1 / (Math.sqrt(3))],
        [1 / 2, -1 / (2 * Math.sqrt(3))]
    ]
    var glyphd = [
        [-1 / 2, -1 / (2 * Math.sqrt(3))],
        [-3 / 4, 1 / (4 * Math.sqrt(3))],
        [-1 / 4, 1 / (4 * Math.sqrt(3))],
        [0, 1 / (Math.sqrt(3))],
        [1 / 2, -1 / (2 * Math.sqrt(3))]
    ]
    var sizeMap = {
        s: 0.75,
        m: 0.85,
        b: 1.0
    }
    function glyph (x, y, scale, sym) {
        var size = scale * sizeMap[sym[0]]
        var mx = size * (sym[1] === 'l' ? 1 : -1)
        var my = size * (sym[3] === 'p' ? 1 : -1)
        var gl = (sym[2] === 'u') === (sym[3] === 'p') ? glyphu : glyphd
        return drawSVG('path', {
            d:
            _.map(gl, function (gl, i) {
                return (i === 0 ? 'M' : 'L') + (x + mx * gl[0]) + ' ' + (y - my * gl[1])
            }).join(' ') + ' Z'
        })
    }
    return function (x, y, scale, lineWidth, p, justLine) {
        var size = p.symbol[0] === 's' ? 0.8 : 1
        var sym = p.symbol.slice(1)
        var d = null
        if (sym === 'cir') {
            d = circle(x, y, size * scale / 2)
        } else if (sym === 'squ') {
            d = square(x, y, size * 0.4 * scale)
        } else if (sym === 'dia') {
            d = dia(x, y, size * 0.4 * Math.sqrt(2) * scale)
        } else {
            d = glyph(x, y, scale, p.symbol)
        }
        if (!justLine) {
            d.myCss('fill:' + colorMap[p.color])
        } else {
            d.myCss('fill:none')
        }
        d.myCss('stroke:' + (justLine || 'black') + ';stroke-width:' + lineWidth)
        return d
    }
})()

function drawSVG (type, attributes, style) {
    return $(document.createElementNS('http://www.w3.org/2000/svg', type)).attr(attributes).myCss(style)
}

function drawVisualizationSVG (x, y, w, h) {
    function transformPoint (p, _0, _1, _2, _3, _4, _5) {
        return [
            p[0] * _0 + p[1] * _2 + _4,
            p[0] * _1 + p[1] * _3 + _5
        ]
    }

    function draw (svg) {
        if (!svg) svg = $('<svg style="width:' + w + 'px;height:' + h + 'px"/>')
        else svg.empty()

        function svgAppend (type, attributes, style) {
            svg.append(drawSVG(type, attributes, style))
        }

        function trans (p) {
            return transformPoint(p, w / 3, 0, 0, -h / 3, w / 2, h / 2)
        }
        var unitWidth = 1

        var H = g_m.rotate.H
        var V = g_m.rotate.V

        function project (x) {
            return trans([dot(H, x), dot(V, x)])
        }
        function projectParticle (id) {
            var p = particles[id - 1]
            return project(p[g_m.coordinateSystem + 'coord'])
        }

        var scale = mag(sub(trans([0, 0]), trans([0.1, 0])))

        if (g_m.showAxes) {
            var cs = g_coordinateSystems[g_m.coordinateSystem]

            for (var i = 0; i < 8; i++) {
                var v = zeros(8)
                v[i] = 1
                const v1 = project(v)
                v[i] *= -1
                const v2 = project(v)

                svgAppend('line', {
                    x1: v1[0],
                    y1: v1[1],
                    x2: v2[0],
                    y2: v2[1]
                }, 'stroke:black; stroke-width:' + unitWidth + '')

                v[i] = 1.1
                v = project(v)

                var label = cs.shortLabels[i].clone()
                v = sub(v, mul(0.5, cs.shortLabelSizes[i]))
                d.append($('<div class="label" style="position:absolute;z-index:-1;left:' + v[0] + 'px;top:' + v[1] + 'px"/>').append(label))
            }
        }

        if (g_m.interactions.interaction) {
            var x = _.map(g_m.interactions.interaction, projectParticle)

            svgAppend('line', {
                x1: x[0][0],
                y1: x[0][1],
                x2: x[1][0],
                y2: x[1][1]
            }, 'stroke:yellow;stroke-width:' + unitWidth * 7 + '')

            svgAppend('circle', {
                cx: x[0][0], cy: x[0][1], r: scale
            }, 'fill:yellow')

            svgAppend('circle', {
                cx: x[1][0], cy: x[1][1], r: scale
            }, 'fill:yellow')

            var origin = trans([0, 0])
            svgAppend('line', {
                x1: origin[0],
                y1: origin[1],
                x2: x[2][0],
                y2: x[2][1]
            }, 'stroke:lightgreen;stroke-width:' + unitWidth * 7 + '')

            svgAppend('circle', {
                cx: x[2][0], cy: x[2][1], r: scale
            }, 'fill:lightgreen')
        }

        if (g_m.showTriality && g_m.theory === 'e8') {
            _.each(trialities, function (t) {
                var locs = _.map(t, projectParticle)
                svgAppend('path', {
                    d: 'M' + locs[0][0] + ' ' + locs[0][1] +
                        ' L' + locs[1][0] + ' ' + locs[1][1] +
                        ' L' + locs[2][0] + ' ' + locs[2][1] +
                        ' Z'
                }, 'fill:none;stroke:black;stroke-width:' + unitWidth / 2 + '')
            })
        }

        if (g_m.showTriality && g_m.theory === 'e7') {
            _.each(trialities7, function (t) {
                var locs = _.map(t, projectParticle)
                svgAppend('path', {
                    d: 'M' + locs[0][0] + ' ' + locs[0][1] +
                        ' L' + locs[1][0] + ' ' + locs[1][1] +
                        ' L' + locs[2][0] + ' ' + locs[2][1] +
                        ' Z'
                }, 'fill:none;stroke:black;stroke-width:' + unitWidth / 2 + '')
            })
        }

        if (g_m.showHexality && g_m.theory === 'e8') {
            _.each(hexalities, function (t) {
                var locs = _.map(t, projectParticle)
                svgAppend('path', {
                    d: 'M' + locs[0][0] + ' ' + locs[0][1] +
                        ' L' + locs[1][0] + ' ' + locs[1][1] +
                        ' L' + locs[2][0] + ' ' + locs[2][1] +
                        ' L' + locs[3][0] + ' ' + locs[3][1] +
                        ' L' + locs[4][0] + ' ' + locs[4][1] +
                        ' L' + locs[5][0] + ' ' + locs[5][1] +
                        ' L' + locs[0][0] + ' ' + locs[0][1] +
                        ' Z'
                }, 'fill:none;stroke:black;stroke-width:' + unitWidth / 2 + '')
            })
        }

        if (g_m.showHexality && g_m.theory === 'e7') {
            _.each(hexalities7, function (t) {
                var locs = _.map(t, projectParticle)
                svgAppend('path', {
                    d: 'M' + locs[0][0] + ' ' + locs[0][1] +
                        ' L' + locs[1][0] + ' ' + locs[1][1] +
                        ' L' + locs[2][0] + ' ' + locs[2][1] +
                        ' L' + locs[3][0] + ' ' + locs[3][1] +
                        ' L' + locs[4][0] + ' ' + locs[4][1] +
                        ' L' + locs[5][0] + ' ' + locs[5][1] +
                        ' L' + locs[0][0] + ' ' + locs[0][1] +
                        ' Z'
                }, 'fill:none;stroke:black;stroke-width:' + unitWidth / 2 + '')
            })
        }

        var noInteractionHighlight = _.makeSet(g_m.interactions.interaction || [])

        _.each(particles, function (p) {
            if (!p[g_m.theory]) return
            var pos = project(p[g_m.coordinateSystem + 'coord'])
            if (g_selection1_interactions[p.id] && !noInteractionHighlight[p.id]) {
                svg.append(drawParticleSVG(pos[0], pos[1], scale, unitWidth * 6, p, 'cyan'))
            }
            if (g_m.interactions.selection1 === p.id) {
                svg.append(drawParticleSVG(pos[0], pos[1], scale, unitWidth * 7, p, 'blue'))
            }
            if (g_m.interactions.over === p.id) {
                svg.append(drawParticleSVG(pos[0], pos[1], scale, unitWidth * 3, p))

                labelPos = add(pos, [-20, -45])
                d.append($('<div class="label" style="position:absolute;z-index:1000;left:' + labelPos[0] + 'px;top:' + labelPos[1] + 'px"/>').append(drawLatex(particleSymbols[p.name])))
            }

            svg.append(drawParticleSVG(pos[0], pos[1], scale, unitWidth / 3, p).on('mousemove', function () {
                lastOver = p.id
                if (!dragging) {
                    beginModelChange()
                    g_m.interactions.over = lastOver
                    endModelChange()
                }
            }).on('mouseout', function () {
                lastOver = 0
                beginModelChange()
                g_m.interactions.over = lastOver
                endModelChange()
            }))
        })

        svg.on('mousemove', function (e) {
            if (e.target === svg[0]) {
                lastOver = 0
                beginModelChange()
                g_m.interactions.over = lastOver
                endModelChange()
            }
        })

        return svg
    }

    var d = $('<div style="position:absolute;left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px"/>')
    function update () {
        d.find('.label').remove()
        var svg = d.find('svg')
        if (svg.size() === 0) {
            d.append(draw())
        } else {
            draw(svg)
        }
    }

    update()
    var downPos = null
    var dragging = false
    var lastOver = 0
    grabMouseRelative(d, function (dx, dy, x, y) {
        dragging = true
        if (!downPos) downPos = [x, y]
        if (dx === 0 && dy === 0) return

        // H = current Horizontal view plane vector (8D)
        // V = current Vertical view plane vector
        // ax = horizontal rotation angle from user's horizontal mouse drag in viewport
        // ay = vertical rotation angle from user's vertical mouse drag in viewport
        // a = H-axis vector chosen (on left) to rotate towards
        // A = V-axis vector chosen to rotate towards
        // g,G = temporary vectors
        // H', V' = result

        // g = a - (a.V)V - (a.H)H
        // G = A - (A.V)V - (A.H)H
        // g = g/|g|
        // G = G/|G|
        // H' = H cos ax + g sin ax
        // H' = H'/|H'|
        // V' = V - (V.H')H'
        // V' = V'/|V'|
        // V' = V' cos ay + G sin ay
        // V' = V'/|V'|

        // for flat rotation
        // H' = H cos - V sin
        // V' = V cos + H sin

        var H = g_m.rotate.H
        var V = g_m.rotate.V
        let H_, V_

        if (g_m.rotate.rotateZ) {
            var pos = d.offset()
            pos = [
                x - (pos.left + w / 2),
                y - (pos.top + h / 2)
            ]
            const prevPos = sub(pos, [dx, dy])
            const prevAngle = Math.atan2(-prevPos[1], prevPos[0])
            const angle = Math.atan2(-pos[1], pos[0])
            let da = angle - prevAngle
            if (da < 0) da += tau
            const a = Math.atan2(pos[1], pos[0])
            H_ = sub(mul(H, Math.cos(da)), mul(V, Math.sin(da)))
            V_ = add(mul(V, Math.cos(da)), mul(H, Math.sin(da)))
            H_ = norm(H_)
            V_ = norm(V_)
        } else {
            const radiansPerPixel = tau / 1000
            const ax = dx * radiansPerPixel
            const ay = -dy * radiansPerPixel

            const a = zeros(8)
            a[g_m.rotate.axes[0]] = 1
            const A = zeros(8)
            A[g_m.rotate.axes[1]] = 1

            let g = sub(sub(a, mul(dot(a, V), V)), mul(dot(a, H), H))
            let G = sub(sub(A, mul(dot(A, V), V)), mul(dot(A, H), H))
            g = norm(g)
            G = norm(G)

            H_ = add(mul(H, Math.cos(ax)), mul(g, Math.sin(ax)))
            H_ = norm(H_)
            V_ = sub(V, mul(dot(V, H_), H_))
            V_ = norm(V_)
            V_ = add(mul(V_, Math.cos(ay)), mul(G, Math.sin(ay)))
            V_ = norm(V_)
        }

        beginModelChange()
        g_m.rotate.H = H_
        g_m.rotate.V = V_
        endModelChange()
    }, function (x, y) {
        dragging = false
        if (dist(sub([x, y], downPos)) < 5) {
            var id = lastOver
            if (id) {
                beginModelChange()
                var i = g_selection1_interactions[id]
                if (g_m.interactions.selection1 && i) {
                    g_m.interactions.selection2 = id
                    g_m.interactions.result = i[0]
                    g_m.interactions.interaction = i[1]
                } else {
                    g_m.interactions.selection1 = id
                    g_m.interactions.selection2 = null
                    g_m.interactions.result = null
                    g_m.interactions.interaction = null
                    g_selection1_interactions = {}
                    _.each(interactions, function (i) {
                        if (i.indexOf(id) !== -1) {
                            var others = []
                            _.each(i, function (i) {
                                if (i !== id) others.push(i)
                            })
                            g_selection1_interactions[others[0]] = [others[1], i]
                            g_selection1_interactions[others[1]] = [others[0], i]
                        }
                    })
                }
                endModelChange()
            }
        }
        downPos = null
    })

    d.addClass('onModelChange')[0].onModelChange = function () {
        var diff = false
        for (var i = 0; i < g_m.rotate.H.length; i++) {
            if (g_m.rotate.H[i] !== g_old_m.rotate.H[i]) {
                diff = true
                break
            }
            if (g_m.rotate.V[i] !== g_old_m.rotate.V[i]) {
                diff = true
                break
            }
        }
        if (diff || isModelDifferent('theory', 'coordinateSystem', 'showAxes', 'showTriality', 'showHexality', 'interactions.over', 'interactions.selection1', 'interactions.selection2', 'interactions.result')) {
            update()
        }
    }

    return d
}

function drawInteractions (x, y) {
    function drawCell (content, cols, align) {
        var c = $('<td width="' + ((cols || 1) * 6.666666666) + '%" colspan="' + (cols || 1) + '"/>')
        c.attr('align', align || 'middle')
        if (typeof (content) === 'string') {
            c.append($('<div style="max-height:' + g_rowHeight + 'px;vertical-align:middle;overflow:hidden;"/>').text(content))
        } else {
            c.append(content)
        }
        return c
    }
    /**
     * Draws particle data for interactions row
     */
    function addParticle (r, p, theory) {
        r.append(drawCell(p.label, 3, 'left'))
        r.append(drawCell(drawLatex(particleSymbols[p.name])))

        var size = g_rowHeight
        var svg = $('<svg style="width:' + size + 'px;height:' + size + 'px">')
        svg.append(drawParticleSVG(size / 2, size / 2, size / 2, 1, p))
        r.append(drawCell(svg))

        function drawNumber (a) {
            a = a.replace(/SQRT/g, 'sqrt')
            a = a.split(/\//)
            if (a.length === 2) a = 'frac(' + a[0] + ',' + a[1] + ')'
            else a = a[0]
            return drawLatex(a)
        }
        _.each(p[theory + 'coordlbl'].split(/,/), function (a) {
            r.append(drawCell(drawNumber(a)))
        })
    }
    function drawParticles (theory) {
        const headers = ['Over', 'Selection1', 'Selection2', 'Result']
        return _.map(headers, function (h, i) {
            const r = $('<tr height="' + g_rowHeight + 'px"/>')
            r.append(drawCell(h, 2, 'right').css('padding-right', '20px')).css('background', i % 2 === 0 ? 'white' : '#f0f0f0')

            let p = g_m.interactions[h.toLowerCase()]
            if (p) {
                p = particles[1 * p - 1]
                addParticle(r, p, theory)
            } else {
                r.append(drawCell($('<div/>'), 3))
                for (let i = 0; i < 10; i++) r.append(drawCell($('<div/>'), 1))
            }
            return r
        })
    }
    function drawHeader () {
        var r = $('<tr height="' + g_rowHeight + 'px" style="background: linear-gradient(to bottom, white, lightgrey);"/>')
        r.append(drawCell($('<button/>').text('Deselect').click(function () {
            beginModelChange()
            g_m.interactions = {}
            g_selection1_interactions = {}
            endModelChange()
        }), 2, 'left'))

        var checks = $('<div style="margin-left:20px; font-size:small"/>').append(createCheckBox('Axes', g_m.showAxes, function () {
            beginModelChange()
            g_m.showAxes = !g_m.showAxes
            endModelChange()
        }).css('margin-right', '10px')).append(createCheckBox('Triality', g_m.showTriality, function () {
            beginModelChange()
            g_m.showTriality = !g_m.showTriality
            endModelChange()
        }).css('margin-right', '10px')).append(createCheckBox('Hexality', g_m.showHexality, function () {
            beginModelChange()
            g_m.showHexality = !g_m.showHexality
            endModelChange()
        }))
        r.append(drawCell(checks, 4, 'left'))

        var size = g_rowHeight

        var svg = $('<svg style="width:' + size + 'px;height:' + size + 'px">')
        svg.append(drawParticleSVG(size / 2 * 1.3, size / 2 * 0.7, size / 2, 1, { symbol: 'scir', color: 'mrora' }))
        svg.append(drawParticleSVG(size / 2, size / 2, size / 2, 1, { symbol: 'msqu', color: 'mblue' }))
        svg.append(drawParticleSVG(size / 2 * 0.7, size / 2 * 1.3, size / 2, 1, { symbol: 'sdia', color: 'mgree' }))
        r.append(drawCell(svg))

        _.each(g_coordinateSystems[g_m.coordinateSystem].shortLabels, function (a) {
            r.append(drawCell(a)).css('color:red')
        })

        return r
    }

    var d = $('<div style="position:absolute;left:' + x + 'px;top:' + y + 'px"/>')
    function update () {
        var t = $('<table style="width:' + g_controlPanelWidth + 'px;height:' + g_rowHeight * 5 + 'px"/>')
        t.append(drawHeader())
        t.append(drawParticles(g_m.coordinateSystem))
        d.empty().append(t)
    }
    update()

    d.addClass('onModelChange')[0].onModelChange = function () {
        if (isModelDifferent('coordinateSystem', 'showAxes', 'showTriality', 'interactions.over', 'interactions.selection1', 'interactions.selection2', 'interactions.result')) {
            update()
        }
    }
    return d
}

function drawRotationPanel (x, y, scale) {
    function drawRotate (yes, cb) {
        var w = g_rowHeight
        var h = g_rowHeight
        var c = $('<canvas/>').attr('width', w).attr('height', h)
        var g = c[0].getContext('2d')
        g.setTransform(w / 2, 0, 0, -h / 2, w / 2, h / 2)
        var unitWidth = 2 / w
        g.lineWidth = unitWidth

        var color = yes ? 'black' : 'lightgrey'
        var colorOver = null

        function render () {
            g.clearRect(-1, -1, 2, 2)

            g.strokeStyle = colorOver || color
            g.fillStyle = colorOver || color

            g.beginPath()
            g.arc(0, 0, 0.6, tau, tau / 8 * 7)
            g.lineWidth = 3 * unitWidth
            g.stroke()

            g.beginPath()
            g.moveTo(0.3, 0)
            g.lineTo(0.9, 0)
            g.lineTo(0.6, -0.4)
            g.closePath()
            g.fill()
        }
        render()

        function on (e) {
            colorOver = 'blue'
            render()
        }
        c.on('mouseover', on).on('mousemove', on)
        c.on('mouseout', function (e) {
            colorOver = null
            render()
        })
        c.on('click', function (e) {
            cb()
        })

        return c
    }
    function drawArrowCross (horz, vert, cb) {
        var w = g_rowHeight
        var h = g_rowHeight
        var c = $('<canvas/>').attr('width', w).attr('height', h)
        var g = c[0].getContext('2d')
        g.setTransform(w / 2, 0, 0, -h / 2, w / 2, h / 2)
        g.lineWidth = 2 / w

        var circleColor = horz || vert ? 'black' : 'lightgrey'
        var horzColor = horz ? 'black' : 'lightgrey'
        var vertColor = vert ? 'black' : 'lightgrey'
        var circleColorOver = null
        var horzColorOver = null
        var vertColorOver = null
        function render () {
            g.clearRect(-1, -1, 2, 2)

            function renderArrow (r, color) {
                g.rotate(r)
                g.beginPath()
                g.moveTo(0.15, 0)
                g.lineTo(0.15, 0.5)
                g.lineTo(0.4, 0.5)
                g.lineTo(0, 1)
                g.lineTo(-0.4, 0.5)
                g.lineTo(-0.15, 0.5)
                g.lineTo(-0.15, 0)
                g.closePath()
                g.fillStyle = color
                g.fill()
                g.setTransform(w / 2, 0, 0, -h / 2, w / 2, h / 2)
            }
            renderArrow(0, vertColorOver || vertColor)
            renderArrow(tau / 4, horzColorOver || horzColor)
            renderArrow(tau / 2, vertColorOver || vertColor)
            renderArrow(tau / 4 * 3, horzColorOver || horzColor)

            g.beginPath()
            g.arc(0, 0, 0.35, 0, tau)
            g.fillStyle = circleColorOver || circleColor
            g.fill()

            g.beginPath()
            g.arc(0, 0, 0.15, 0, tau)
            g.fillStyle = 'white'
            g.fill()
        }
        render()

        function getHorzVert (e) {
            var pos = getRelPos(c, e)
            var x = _.lerp(0, -1, w * scale, 1, pos[0])
            var y = _.lerp(0, 1, h * scale, -1, pos[1])
            return [(y > -0.4 && y < 0.4), (x > -0.4 && x < 0.4)]
        }
        function on (e) {
            var x = getHorzVert(e)
            horzColorOver = x[0] ? 'blue' : null
            vertColorOver = x[1] ? 'blue' : null
            circleColorOver = x[0] || x[1] ? 'blue' : null
            render()
        }
        c.on('mouseover', on).on('mousemove', on)
        c.on('mouseout', function (e) {
            circleColorOver = null
            horzColorOver = null
            vertColorOver = null
            render()
        })
        c.on('click', function (e) {
            var x = getHorzVert(e)
            cb(x[0], x[1])
        })

        return c
    }
    function drawCell (content, align) {
        var c = $('<td width="' + 100 / 9 + '%"/>')
        c.attr('align', align || 'middle')
        if (typeof (content) === 'string') {
            c.append($('<div style="max-height:' + g_rowHeight + 'px;vertical-align:middle;overflow:hidden;"/>').text(content))
        } else {
            c.append(content)
        }
        return c
    }
    function draw () {
        var t = $('<table width="600px;height:' + g_rowHeight * 5 + 'px"/>')

        var r = $('<tr height="' + g_rowHeight + 'px" style="background: linear-gradient(to bottom, white, lightgrey);"/>')
        t.append(r)
        r.append(drawCell($('<div style="font-size:small"/>').text('Axis')))
        _.each(g_coordinateSystems[g_m.coordinateSystem].longLabels, function (label, i) {
            r.append(drawCell(label.clone()))
        })

        var r = $('<tr height="' + g_rowHeight + '">')
        t.append(r)
        r.append(drawCell(drawRotate(g_m.rotate.rotateZ, function () {
            beginModelChange()
            g_m.rotate.rotateZ = !g_m.rotate.rotateZ
            endModelChange()
        })))
        _.each(_.range(8), function (i) {
            r.append(drawCell(drawArrowCross(g_m.rotate.axes[0] === i, g_m.rotate.axes[1] === i, function (horz, vert) {
                beginModelChange()
                if (horz) g_m.rotate.axes[0] = i
                if (vert) g_m.rotate.axes[1] = i
                g_m.rotate.rotateZ = false
                endModelChange()
            })).myCss('padding-top:5px;padding-bottom:5px'))
        })

        _.each(['H', 'V'], function (x, i) {
            var r = $('<tr height="' + g_rowHeight + '">')
            if (i === 0) r.css('background', '#f0f0f0')
            t.append(r)
            r.append(drawCell(x))
            _.each(_.range(8), function (i) {
                r.append(drawCell($('<div class="' + x + i + '" style="font-family:serif"/>')))
            })
        })

        return t
    }
    function updateHV () {
        for (var i = 0; i < g_m.rotate.H.length; i++) {
            d.find('.H' + i).text(g_m.rotate.H[i].toFixed(2))
            d.find('.V' + i).text(g_m.rotate.V[i].toFixed(2))
        }
    }

    var d = $('<div style="position:absolute;left:' + x + 'px;top:' + y + 'px"/>')
    function update () {
        d.empty().append(draw())
        updateHV()
    }
    update()
    d.addClass('onModelChange')[0].onModelChange = function () {
        var diff = false
        for (var i = 0; i < g_m.rotate.H.length; i++) {
            if (g_m.rotate.H[i] != g_old_m.rotate.H[i]) {
                diff = true
                break
            }
            if (g_m.rotate.V[i] != g_old_m.rotate.V[i]) {
                diff = true
                break
            }
        }
        if (diff) updateHV()
        if (isModelDifferent('coordinateSystem', 'rotate.axes[0]', 'rotate.axes[1]', 'rotate.rotateZ')) {
            update()
        }
    }
    return d
}

function drawTheoryPanel (x, y) {
    var d = $('<div style="position:absolute;left:' + x + 'px;top:' + y + 'px;"/>')

    function update () {
        d.empty()

        function createSelect (options, select, cb) {
            var s = $('<select style="font-size:x-small;width:100%"/>')
            _.each(options, function (name, key) {
                var o = $('<option/>').text(name)
                o[0].value = key
                if (key === select) o.attr('selected', 'selected')
                s.append(o)
            })
            s.on('change', function () {
                if (cb) cb(s.find(':selected')[0].value)
            })
            return s
        }

        function createListSelect (options, select, cb) {
            var d = $('<div style="font-size:x-small;width:100%;cursor:pointer"/>')
            _.each(options, function (name, key) {
                var o = $('<div class="option" style="width:100%"/>').text(name)
                if (key === select) o.myCss('background:#3775D7')
                o.on('click', function () {
                    d.find('.option').css('background', '')
                    o.myCss('background:#3775D7')
                    if (cb) cb(key)
                })
                d.append(o)
            })
            return d
        }

        var theories = {
            sm: 'Standard Model',
            gg: 'SU(5)',
            ps: 'Pati-Salam',
            e6: 'SO(10)',
            e7: 'E7',
            e8: 'E8'
        }
        var theorySelect = createSelect(theories, g_m.theory, function (newTheory) {
            beginModelChange()
            g_m.theory = newTheory
            endModelChange()
        })

        var t = $('<table style="box-sizing:border-box;background:#f0f0f0;width:180px;height:' + (g_rowHeight * 5 - 10) + 'px"/>')

        var temp = _.splitHorz(2, 1, $('<div style="font-size:small;margin-left:5px;margin-top:1px"/>').text('Theory:'), $('<div style="box-sizing:border-box;width:100%;padding-right:5px;padding-left:10px"/>').append(theorySelect)).css({ height: '', 'margin-top': '10px' })
        t.append($('<tr/>').append($('<td colspan="2"/>').append(temp)))

        var coordinateSelect = createSelect(_.map(g_coordinateSystems, function (cs) { return cs.name }), g_m.coordinateSystem, function (cs) {
            beginModelChange()
            var newHV = g_coordinateSystemsConversions[g_m.coordinateSystem + '->' + cs](g_m.rotate.H, g_m.rotate.V)
            g_m.rotate.H = newHV[0]
            g_m.rotate.V = newHV[1]
            g_m.coordinateSystem = cs
            endModelChange()
        })
        t.append($('<tr/>').append(
            $('<td/>').append($('<div style="font-size:small;padding-left:5px;padding-right:10px;padding-top:5px;padding-bottom:20px;margin-top:1px"/>').text('Coordinates:'))
        ).append(
            $('<td style="padding-right:5px;padding-top:5px" valign="top"/>').append(coordinateSelect)
        ))

        var savedRotations = $('<div style="width:100%;height:100%;background:white;overflow:auto"/>').append(createListSelect(_.map(g_db.savedRotations, function (r) { return r.name }), null, function (i) {
            var r = g_db.savedRotations[i]
            beginModelChange()

            if (r.coordinateSystem !== g_m.coordinateSystem) {
                var newHV = g_coordinateSystemsConversions[r.coordinateSystem + '->' + g_m.coordinateSystem](r.H, r.V)
                g_m.rotate.H = newHV[0]
                g_m.rotate.V = newHV[1]
            } else {
                g_m.rotate.H = r.H
                g_m.rotate.V = r.V
            }
            // g_m.rotate.axes = r.axes
            // g_m.coordinateSystem = r.coordinateSystem

            endModelChange()
        }))

        var savedRotationsButtons = $('<div style="font-size:small"/>').text('Saved Rotations').append($('<button style="font-size:x-small;width:60px;margin-top:5px;"/>').text('Save').click(function () {
            var name = window.prompt('Please enter a name for your rotation')
            if (name) {
                g_db.savedRotations.push({
                    name: name,
                    H: g_m.rotate.H.slice(0),
                    V: g_m.rotate.V.slice(0),
                    axes: g_m.rotate.axes.slice(0),
                    coordinateSystem: g_m.coordinateSystem
                })
                saveDb()
                updateMain()
            }
        })).append($('<br/>')).append($('<button style="width:60px;font-size:x-small;margin-top:5px"/>').text('Delete').click(function () {
            var sel = _.map(savedRotations.find(':selected').get(), function (o) { return 1 * o.value })
            if (window.confirm('Are you sure you want to delete the following rotation' + (sel.length === 1 ? '' : 's') + '?: ' + _.map(sel, function (i) { return g_db.savedRotations[i].name }).join(', '))) {
                _.each(_.sort(sel).reverse(), function (i) {
                    g_db.savedRotations.splice(i, 1)
                })
                saveDb()
                updateMain()
            }
        }))
        t.append($('<tr height="100%"/>').append(
            $('<td valign="top"/>').append(savedRotationsButtons.myCss('padding-left:5px'))
        ).append(
            $('<td width="100%" style="padding-right:5px;padding-bottom:5px"/>').append(savedRotations)
        ))

        d.append($('<div style="padding-left:5px;padding-top:5px"/>').append(t))
    }
    update()
    d.addClass('onModelChange')[0].onModelChange = function () {
        if (isModelDifferent('theory', 'coordinateSystem')) {
            update()
        }
    }
    return d
}

var g_tab = 0
function updateMain () {
    var w = $('body')[0].clientWidth
    var h = $('body')[0].clientHeight

    var controlPanelScale = 1
    var x = w / 2 - g_controlPanelWidth / 2
    if (x < 0) {
        controlPanelScale = w / (g_controlPanelWidth + 2)
        x = 0
    }

    var size = Math.floor(Math.min(w, h - g_controlPanelHeight * controlPanelScale - 5))
    var visualization = drawVisualization(Math.floor(w / 2 - size / 2), 0, size, size)
    // var visualization = (isMobile() ? drawVisualization : drawVisualizationSVG)(Math.floor(w/2 - size/2), 0, size, size)

    var y = size - 20 * controlPanelScale
    var controlPanel = $('<div style="position:absolute;left:' + x + 'px;top:' + y + 'px"/>')
    controlPanel.myCss('transform: scale(' + controlPanelScale + ')')

    var theory = drawTheoryPanel(0, 20)
    controlPanel.append(theory)

    var rotations = drawRotationPanel(200, 20, controlPanelScale)
    controlPanel.append(rotations)

    var interactions = drawInteractions(0, 20)
    controlPanel.append(interactions)

    var about = $('<div style="box-sizing:border-box;padding:10px;position:absolute;left:0px;top:20px;width:' + g_controlPanelWidth + 'px;height:' + g_controlPanelHeight + 'px;overflow:auto"/>')
        .html('<p>The Elementary Particle Explorer displays the charges of all elementary particles, with a symbol assigned to each particle according to <a href=http://li.si>Garrett Lisi</a>’s <a href=http://www.cs.virginia.edu/~robins/A_Geometric_Theory_of_Everything.pdf>E8 Theory</a>.</p><p>Each particle has two spin charges with respect to the gravitational force, two strong nuclear force charges, and electroweak charges which combine to equal the electric charge. These charges exist in eight-dimensional charge space, and their values correspond to points of the <a href=http://en.wikipedia.org/wiki/E8_(mathematics)>E8 polytope</a>.</p><p>The plot is created by projecting these points onto a two-dimensional plane spanned by a horizontal direction, H, and a vertical direction, V, in eight-dimensional charge space.  Any of the eight axes may be selected by pressing the control buttons and dragging closer to H or V in the viewer, making that kind of charge more apparent in the plot. Select the left-right arrow to choose an axis to rotate towards the horizontal, H, and select the up-down arrow to choose an axis to rotate towards the vertical, V, or click the center to rotate towards both. You can also rotate the plot in the viewing plane via a selection button. The display of triality and axes may be toggled using checkboxes on the Interactions panel. Rotations may be temporarily saved in "Saved Rotations," where some default rotations have been provided.</p><p>When a particle is clicked in the viewer, the particles it can interact with are highlighted in light blue. Selecting one of the highlighted particles reveals the third  particle resulting from their interaction, based on charge conservation. This charge balance is illustrated via yellow and green rays, as well as the charges shown summed in the Interaction panel.</p><p>CREDITS</p><p>The HTML5 implementation by <a href=http://glittle.org>Greg Little</a> is based on a Flash application built by <a href=http://troyworks.com>Troy Gardner</a>, with creative assistance provided by Garrett Lisi. This work was partially funded by a grant from <a href=http://www.fqxi.org>The Foundational Questions Institute</a>. Later features and bugfixes added by Alex Chandel.</p>')
    controlPanel.append(about)

    function updateTabs (t) {
        if (t !== undefined) g_tab = t
        theory.css('display', g_tab === 0 ? 'block' : 'none')
        rotations.css('display', g_tab === 0 ? 'block' : 'none')
        interactions.css('display', g_tab === 1 ? 'block' : 'none')
        about.css('display', g_tab === 2 ? 'block' : 'none')
    }
    updateTabs()
    var tabs = $('<div style="position:absolute;left:0px;top:-3px;width:' + g_controlPanelWidth + 'px"/>')
    tabs.append($('<button/>').text('Rotations').click(function () { updateTabs(0) }))
    tabs.append($('<button/>').text('Interactions').click(function () { updateTabs(1) }))

    tabs.append($('<button/>').text('About').click(function () { updateTabs(2) }))
    controlPanel.append(tabs)

    $('body').empty()
        .append(visualization)
        .append(controlPanel)
}

function loadDb () {
    g_db = window.localStorage.E8 ? _.unJson(window.localStorage.E8) : {}
}
function saveDb () {
    window.localStorage.E8 = _.json(g_db)
}
$(function () { loadDb() })

var g_m = null
var g_old_m = null
function beginModelChange () {
    g_old_m = _.deepClone(g_m)
}
function endModelChange () {
    _.each($('.onModelChange').get(), function (o) {
        o.onModelChange()
    })
}
function isModelDifferent () {
    for (var i = 0; i < arguments.length; i++) {
        var a = arguments[i]
        if (eval('g_m.' + a + ' != g_old_m.' + a)) return true
    }
    return false
}

$(function () {
    g_m = {
        theory: 'e6',
        coordinateSystem: 'gut',
        showAxes: true,
        showTriality: true,
        rotate: {
            H: [
                -0.3016,
                -0.1088,
                0.0839,
                0.1088,
                -0.4610,
                0.5801,
                0.4610,
                0.3418
            ],
            V: [
                0.0484,
                0.1885,
                0.0484,
                0.2854,
                0.7984,
                0.3349,
                0.1286,
                0.3349
            ],
            axes: [6, 7],
            rotateZ: false
        },
        interactions: {
            over: null,
            selection1: null,
            selection2: null,
            result: null,
            interaction: null
        }
    }
    g_selection1_interactions = {}
    if (!g_db.savedRotations) g_db.savedRotations = defaultSavedRotations

    $(window).resize(updateMain)
    updateMain()
})
