
defaultSavedRotations = [
    {
        "name": "standard model",
        "H": [
            0,
            0,
            0,
            -0.89,
            0.22,
            -0.29,
            -0.15,
            -0.22
        ],
        "V": [
            0,
            0,
            0,
            0,
            0.86,
            0.25,
            0.25,
            0.37
        ],
        "axes": [
            5,
            6
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "electric charge",
        "H": [
            0,
            0,
            0,
            -0.5,
            0,
            0.5,
            0.5,
            0.5
        ],
        "V": [
            0,
            0,
            0,
            0.866,
            0,
            0.289,
            0.289,
            0.289
        ],
        "axes": [
            5,
            6
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "hypercharge",
        "H": [
            0,
            0,
            -0.45,
            -0.45,
            0,
            0.45,
            0.45,
            0.45
        ],
        "V": [
            0,
            0,
            0.55,
            0.55,
            0,
            0.36,
            0.36,
            0.36
        ],
        "axes": [
            5,
            6
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "strong",
        "H": [
            -0.06,
            0.11,
            -0.06,
            0.24,
            0,
            -0.68,
            0.68,
            0
        ],
        "V": [
            -0.25,
            0.07,
            0.12,
            -0.07,
            0,
            -0.39,
            -0.39,
            0.78
        ],
        "axes": [
            5,
            6
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "gravity",
        "H": [
            0.44,
            -0.77,
            0.44,
            0.12,
            0,
            0,
            0,
            0
        ],
        "V": [
            -0.12,
            -.44,
            -0.77,
            0.44,
            0,
            0,
            0,
            0
        ],
        "axes": [
            0,
            1
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "E6 Coxeter",
        "H": [
            0,
            0,
            0,
            0,
            0.46,
            -0.63,
            0.63,
            0
        ],
        "V": [
            0,
            0,
            0,
            0,
            0,
            -0.63,
            -0.63,
            0.46
        ],
        "axes": [
            1,
            2
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "E7 Coxeter",
        
        "H": [
		-.46, 0, .46, 0, .3, -.3, -.57, .25
   		],
        "V": [
		-.6, .21, -.6, -.21, .32, .32, 0, 0
        ],
        "axes": [
            1,
            2
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "E8 Coxeter",
        "H": [
            0,
            0.67,
            -0.097,
            0.464,
            -0.464,
            -0.237,
            0.237,
            0
        ],
        "V": [
            -0.922,
            0,
            0,
            0.119,
            0.119,
            -0.193,
            -0.193,
            -0.218
        ],
        "axes": [
            1,
            2
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "E8 strong",
        "H": [
            -0.237,
            0.237,
            0,
            0.097,
            -0.464,
            0,
            -0.67,
            0.464
        ],
        "V": [
            0.193,
            0.193,
            0.218,
            0,
            -0.119,
            0.922,
            0,
            -0.119
        ],
        "axes": [
            1,
            2
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "E8 tri",
        "H" : [
            -0.3016,
            -0.1088,
            0.0839,
            0.1088,
            -0.4610,
            0.5801,
            0.4610,
            0.3418
        ],
        "V" : [
            0.0484,
            0.1885,
            0.0484,
            0.2854,
            0.7984,
            0.3349,
            0.1286,
            0.3349
        ],
        "axes": [
            1,
            2
        ],
        "coordinateSystem": "e8"
    },
    {
        "name": "10-24",
        "H": [
            -0.445,
            0,
            0.445,
            0.63,
            0.33,
            0,
            0.23,
            -0.23
        ],
        "V": [
            -0.445,
            -0.63,
            -0.445,
            0,
            0,
            0.33,
            0.23,
            0.23
        ],
        "axes": [
            1,
            2
        ],
        "coordinateSystem": "e8"
    }
]

colorMap = {
    "lpink": "#FF00FF",
    "mpink": "#FFCCFF",
    "dpink": "#F2C1F2",
    "lred": "#FF5959",
    "mred": "#D90000",
    "dred": "#990000",
    "lrora": "#FFB380",
    "mrora": "#F77C00",
    "drora": "#BF6000",
    "lyell": "#FFFF00",
    "myell": "#F2F200",
    "dyell": "#B2B200",
    "lygre": "#A6FF59",
    "mygre": "#99BF00",
    "dygre": "#668000",
    "lgree": "#59FF59",
    "mgree": "#00BF00",
    "dgree": "#009900",
    "lblue": "#6666FF",
    "mblue": "#0000F7",
    "dblue": "#0000B2",
    "lbvio": "#E680E6",
    "mbvio": "#AD00F7",
    "dbvio": "#8F00B2",
    "white": "#FFFFFF",
    "lgray": "#D9D9D9",
    "mgray": "#999999",
    "dgray": "#4D4D4D",
    "black": "#000000"
}

particles = [
{
"id": 1,
"name": "1",
"color": "lgree",
"symbol": "bcir",
"label": "spin connection 1",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,-1,0,0,0,0,0",
"e8coord": [1.00,0,-1.00,0,0,0,0,0],
"gutcoordlbl": "1,0,-1,0,0,0,0,0",
"gutcoord": [1.00,0,-1.00,0,0,0,0,0],
"smcoordlbl": "1,0,-1,0,0,0,0,0",
"smcoord": [1.00,0,-1.00,0,0,0,0,0],
"tricoordlbl": "2/3,-1,-1/2,1/(2SQRT(3)),0,0,0,0",
"tricoord": [0.577,-1.00,-0.707,0.408,0,0,0,0],
"tri2coordlbl": "-1,0,0,0,0,0,0,0",
"tri2coord": [-1.41,0,0,0,0,0,0,0]
},

{
"id": 2,
"name": "2",
"color": "lgree",
"symbol": "bcir",
"label": "spin connection 1",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,1,0,0,0,0,0",
"e8coord": [-1.00,0,1.00,0,0,0,0,0],
"gutcoordlbl": "-1,0,1,0,0,0,0,0",
"gutcoord": [-1.00,0,1.00,0,0,0,0,0],
"smcoordlbl": "-1,0,1,0,0,0,0,0",
"smcoord": [-1.00,0,1.00,0,0,0,0,0],
"tricoordlbl": "-2/3,1,1/2,-1/(2SQRT(3)),0,0,0,0",
"tricoord": [-0.577,1.00,0.707,-0.408,0,0,0,0],
"tri2coordlbl": "1,0,0,0,0,0,0,0",
"tri2coord": [1.41,0,0,0,0,0,0,0]
},

{
"id": 3,
"name": "3",
"color": "lgree",
"symbol": "mcir",
"label": "spin connection 2",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,1,0,-1,0,0,0,0",
"e8coord": [0,1.00,0,-1.00,0,0,0,0],
"gutcoordlbl": "0,1,0,1/2,-1/2,0,0,0",
"gutcoord": [0,1.00,0,0.707,-0.707,0,0,0],
"smcoordlbl": "0,1,0,1/2,-1,1,0,0",
"smcoord": [0,1.00,0,0.707,-0.548,0.447,0,0],
"tricoordlbl": "-4/3,0,-1/2,1/(2SQRT(3)),0,0,0,0",
"tricoord": [-1.15,0,-0.707,0.408,0,0,0,0],
"tri2coordlbl": "0,0,-1,0,0,0,0,0",
"tri2coord": [0,0,-1.41,0,0,0,0,0]
},

{
"id": 4,
"name": "4",
"color": "lgree",
"symbol": "mcir",
"label": "spin connection 2",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,-1,0,1,0,0,0,0",
"e8coord": [0,-1.00,0,1.00,0,0,0,0],
"gutcoordlbl": "0,-1,0,-1/2,1/2,0,0,0",
"gutcoord": [0,-1.00,0,-0.707,0.707,0,0,0],
"smcoordlbl": "0,-1,0,-1/2,1,-1,0,0",
"smcoord": [0,-1.00,0,-0.707,0.548,-0.447,0,0],
"tricoordlbl": "4/3,0,1/2,-1/(2SQRT(3)),0,0,0,0",
"tricoord": [1.15,0,0.707,-0.408,0,0,0,0],
"tri2coordlbl": "0,0,1,0,0,0,0,0",
"tri2coord": [0,0,1.41,0,0,0,0,0]
},

{
"id": 5,
"name": "5",
"color": "lgree",
"symbol": "scir",
"label": "spin connection 3",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,1,0,0,0,0,0",
"e8coord": [1.00,0,1.00,0,0,0,0,0],
"gutcoordlbl": "1,0,1,0,0,0,0,0",
"gutcoord": [1.00,0,1.00,0,0,0,0,0],
"smcoordlbl": "1,0,1,0,0,0,0,0",
"smcoord": [1.00,0,1.00,0,0,0,0,0],
"tricoordlbl": "2/3,1,-1/2,1/(2SQRT(3)),0,0,0,0",
"tricoord": [0.577,1.00,-0.707,0.408,0,0,0,0],
"tri2coordlbl": "0,-1,0,0,0,0,0,0",
"tri2coord": [0,-1.41,0,0,0,0,0,0]
},

{
"id": 6,
"name": "6",
"color": "lgree",
"symbol": "scir",
"label": "spin connection 3",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,-1,0,0,0,0,0",
"e8coord": [-1.00,0,-1.00,0,0,0,0,0],
"gutcoordlbl": "-1,0,-1,0,0,0,0,0",
"gutcoord": [-1.00,0,-1.00,0,0,0,0,0],
"smcoordlbl": "-1,0,-1,0,0,0,0,0",
"smcoord": [-1.00,0,-1.00,0,0,0,0,0],
"tricoordlbl": "-2/3,-1,1/2,-1/(2SQRT(3)),0,0,0,0",
"tricoord": [-0.577,-1.00,0.707,-0.408,0,0,0,0],
"tri2coordlbl": "0,1,0,0,0,0,0,0",
"tri2coord": [0,1.41,0,0,0,0,0,0]
},

{
"id": 7,
"name": "9",
"color": "lblue",
"symbol": "bcir",
"label": "gluon",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,1,-1,0",
"e8coord": [0,0,0,0,0,1.00,-1.00,0],
"gutcoordlbl": "0,0,0,0,0,0,-1,0",
"gutcoord": [0,0,0,0,0,0,-1.41,0],
"smcoordlbl": "0,0,0,0,0,0,-1,0",
"smcoord": [0,0,0,0,0,0,-1.41,0],
"tricoordlbl": "0,0,0,0,0,0,-1,0",
"tricoord": [0,0,0,0,0,0,-1.41,0],
"tri2coordlbl": "0,0,0,0,0,0,-1,0",
"tri2coord": [0,0,0,0,0,0,-1.41,0]
},

{
"id": 8,
"name": "10",
"color": "lblue",
"symbol": "bcir",
"label": "gluon",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,-1,1,0",
"e8coord": [0,0,0,0,0,-1.00,1.00,0],
"gutcoordlbl": "0,0,0,0,0,0,1,0",
"gutcoord": [0,0,0,0,0,0,1.41,0],
"smcoordlbl": "0,0,0,0,0,0,1,0",
"smcoord": [0,0,0,0,0,0,1.41,0],
"tricoordlbl": "0,0,0,0,0,0,1,0",
"tricoord": [0,0,0,0,0,0,1.41,0],
"tri2coordlbl": "0,0,0,0,0,0,1,0",
"tri2coord": [0,0,0,0,0,0,1.41,0]
},

{
"id": 9,
"name": "11",
"color": "lblue",
"symbol": "bcir",
"label": "gluon",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,1,0,-1",
"e8coord": [0,0,0,0,0,1.00,0,-1.00],
"gutcoordlbl": "0,0,0,0,0,0,-1/2,-SQRT(3)/2",
"gutcoord": [0,0,0,0,0,0,-0.707,-1.22],
"smcoordlbl": "0,0,0,0,0,0,-1/2,-SQRT(3)/2",
"smcoord": [0,0,0,0,0,0,-0.707,-1.22],
"tricoordlbl": "0,0,0,0,0,0,-1/2,-SQRT(3)/2",
"tricoord": [0,0,0,0,0,0,-0.707,-1.22],
"tri2coordlbl": "0,0,0,0,0,0,-1/2,-SQRT(3)/2",
"tri2coord": [0,0,0,0,0,0,-0.707,-1.22]
},

{
"id": 10,
"name": "12",
"color": "lblue",
"symbol": "bcir",
"label": "gluon",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,-1,0,1",
"e8coord": [0,0,0,0,0,-1.00,0,1.00],
"gutcoordlbl": "0,0,0,0,0,0,1/2,SQRT(3)/2",
"gutcoord": [0,0,0,0,0,0,0.707,1.22],
"smcoordlbl": "0,0,0,0,0,0,1/2,SQRT(3)/2",
"smcoord": [0,0,0,0,0,0,0.707,1.22],
"tricoordlbl": "0,0,0,0,0,0,1/2,SQRT(3)/2",
"tricoord": [0,0,0,0,0,0,0.707,1.22],
"tri2coordlbl": "0,0,0,0,0,0,1/2,SQRT(3)/2",
"tri2coord": [0,0,0,0,0,0,0.707,1.22]
},

{
"id": 11,
"name": "13",
"color": "lblue",
"symbol": "bcir",
"label": "gluon",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,0,1,-1",
"e8coord": [0,0,0,0,0,0,1.00,-1.00],
"gutcoordlbl": "0,0,0,0,0,0,1/2,-SQRT(3)/2",
"gutcoord": [0,0,0,0,0,0,0.707,-1.22],
"smcoordlbl": "0,0,0,0,0,0,1/2,-SQRT(3)/2",
"smcoord": [0,0,0,0,0,0,0.707,-1.22],
"tricoordlbl": "0,0,0,0,0,0,1/2,-SQRT(3)/2",
"tricoord": [0,0,0,0,0,0,0.707,-1.22],
"tri2coordlbl": "0,0,0,0,0,0,1/2,-SQRT(3)/2",
"tri2coord": [0,0,0,0,0,0,0.707,-1.22]
},

{
"id": 12,
"name": "14",
"color": "lblue",
"symbol": "bcir",
"label": "gluon",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,0,-1,1",
"e8coord": [0,0,0,0,0,0,-1.00,1.00],
"gutcoordlbl": "0,0,0,0,0,0,-1/2,SQRT(3)/2",
"gutcoord": [0,0,0,0,0,0,-0.707,1.22],
"smcoordlbl": "0,0,0,0,0,0,-1/2,SQRT(3)/2",
"smcoord": [0,0,0,0,0,0,-0.707,1.22],
"tricoordlbl": "0,0,0,0,0,0,-1/2,SQRT(3)/2",
"tricoord": [0,0,0,0,0,0,-0.707,1.22],
"tri2coordlbl": "0,0,0,0,0,0,-1/2,SQRT(3)/2",
"tri2coord": [0,0,0,0,0,0,-0.707,1.22]
},

{
"id": 13,
"name": "16",
"color": "lgray",
"symbol": "bdia",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1,0,0,-1,0,0,0,0",
"e8coord": [1.00,0,0,-1.00,0,0,0,0],
"gutcoordlbl": "1,0,0,1/2,-1/2,0,0,0",
"gutcoord": [1.00,0,0,0.707,-0.707,0,0,0],
"smcoordlbl": "1,0,0,1/2,-1,1,0,0",
"smcoord": [1.00,0,0,0.707,-0.548,0.447,0,0],
"tricoordlbl": "0,0,-1,0,0,0,0,0",
"tricoord": [0,0,-1.41,0,0,0,0,0],
"tri2coordlbl": "-1/2,-1/2,-1/2,1/2,0,0,0,0",
"tri2coord": [-0.707,-0.707,-0.707,0.707,0,0,0,0]
},

{
"id": 14,
"name": "15",
"color": "lgray",
"symbol": "bsqu",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1,0,0,1,0,0,0,0",
"e8coord": [-1.00,0,0,1.00,0,0,0,0],
"gutcoordlbl": "-1,0,0,-1/2,1/2,0,0,0",
"gutcoord": [-1.00,0,0,-0.707,0.707,0,0,0],
"smcoordlbl": "-1,0,0,-1/2,1,-1,0,0",
"smcoord": [-1.00,0,0,-0.707,0.548,-0.447,0,0],
"tricoordlbl": "0,0,1,0,0,0,0,0",
"tricoord": [0,0,1.41,0,0,0,0,0],
"tri2coordlbl": "1/2,1/2,1/2,-1/2,0,0,0,0",
"tri2coord": [0.707,0.707,0.707,-0.707,0,0,0,0]
},

{
"id": 15,
"name": "25",
"color": "lgray",
"symbol": "bsqu",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1,0,0,1,0,0,0,0",
"e8coord": [1.00,0,0,1.00,0,0,0,0],
"gutcoordlbl": "1,0,0,-1/2,1/2,0,0,0",
"gutcoord": [1.00,0,0,-0.707,0.707,0,0,0],
"smcoordlbl": "1,0,0,-1/2,1,-1,0,0",
"smcoord": [1.00,0,0,-0.707,0.548,-0.447,0,0],
"tricoordlbl": "4/3,0,0,1/SQRT(3),0,0,0,0",
"tricoord": [1.15,0,0,0.816,0,0,0,0],
"tri2coordlbl": "-1/2,-1/2,1/2,-1/2,0,0,0,0",
"tri2coord": [-0.707,-0.707,0.707,-0.707,0,0,0,0]
},

{
"id": 16,
"name": "26",
"color": "lgray",
"symbol": "bdia",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1,0,0,-1,0,0,0,0",
"e8coord": [-1.00,0,0,-1.00,0,0,0,0],
"gutcoordlbl": "-1,0,0,1/2,-1/2,0,0,0",
"gutcoord": [-1.00,0,0,0.707,-0.707,0,0,0],
"smcoordlbl": "-1,0,0,1/2,-1,1,0,0",
"smcoord": [-1.00,0,0,0.707,-0.548,0.447,0,0],
"tricoordlbl": "-4/3,0,0,-1/SQRT(3),0,0,0,0",
"tricoord": [-1.15,0,0,-0.816,0,0,0,0],
"tri2coordlbl": "1/2,1/2,-1/2,1/2,0,0,0,0",
"tri2coord": [0.707,0.707,-0.707,0.707,0,0,0,0]
},

{
"id": 17,
"name": "25",
"color": "lgray",
"symbol": "msqu",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,-1,0,0,0,0,0",
"e8coord": [0,1.00,-1.00,0,0,0,0,0],
"gutcoordlbl": "0,1,-1,0,0,0,0,0",
"gutcoord": [0,1.00,-1.00,0,0,0,0,0],
"smcoordlbl": "0,1,-1,0,0,0,0,0",
"smcoord": [0,1.00,-1.00,0,0,0,0,0],
"tricoordlbl": "-2/3,-1,0,1/SQRT(3),0,0,0,0",
"tricoord": [-0.577,-1.00,0,0.816,0,0,0,0],
"tri2coordlbl": "-1/2,1/2,-1/2,-1/2,0,0,0,0",
"tri2coord": [-0.707,0.707,-0.707,-0.707,0,0,0,0]
},

{
"id": 18,
"name": "26",
"color": "lgray",
"symbol": "mdia",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,1,0,0,0,0,0",
"e8coord": [0,-1.00,1.00,0,0,0,0,0],
"gutcoordlbl": "0,-1,1,0,0,0,0,0",
"gutcoord": [0,-1.00,1.00,0,0,0,0,0],
"smcoordlbl": "0,-1,1,0,0,0,0,0",
"smcoord": [0,-1.00,1.00,0,0,0,0,0],
"tricoordlbl": "2/3,1,0,-1/SQRT(3),0,0,0,0",
"tricoord": [0.577,1.00,0,-0.816,0,0,0,0],
"tri2coordlbl": "1/2,-1/2,1/2,1/2,0,0,0,0",
"tri2coord": [0.707,-0.707,0.707,0.707,0,0,0,0]
},

{
"id": 19,
"name": "25",
"color": "lgray",
"symbol": "ssqu",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,1,0,0,0,0,0",
"e8coord": [0,1.00,1.00,0,0,0,0,0],
"gutcoordlbl": "0,1,1,0,0,0,0,0",
"gutcoord": [0,1.00,1.00,0,0,0,0,0],
"smcoordlbl": "0,1,1,0,0,0,0,0",
"smcoord": [0,1.00,1.00,0,0,0,0,0],
"tricoordlbl": "-2/3,1,0,1/SQRT(3),0,0,0,0",
"tricoord": [-0.577,1.00,0,0.816,0,0,0,0],
"tri2coordlbl": "1/2,-1/2,-1/2,-1/2,0,0,0,0",
"tri2coord": [0.707,-0.707,-0.707,-0.707,0,0,0,0]
},

{
"id": 20,
"name": "26",
"color": "lgray",
"symbol": "sdia",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,-1,0,0,0,0,0",
"e8coord": [0,-1.00,-1.00,0,0,0,0,0],
"gutcoordlbl": "0,-1,-1,0,0,0,0,0",
"gutcoord": [0,-1.00,-1.00,0,0,0,0,0],
"smcoordlbl": "0,-1,-1,0,0,0,0,0",
"smcoord": [0,-1.00,-1.00,0,0,0,0,0],
"tricoordlbl": "2/3,-1,0,-1/SQRT(3),0,0,0,0",
"tricoord": [0.577,-1.00,0,-0.816,0,0,0,0],
"tri2coordlbl": "-1/2,1/2,1/2,1/2,0,0,0,0",
"tri2coord": [-0.707,0.707,0.707,0.707,0,0,0,0]
},

{
"id": 21,
"name": "46",
"color": "lgray",
"symbol": "bsqu",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1,-1,0,0,0,0,0,0",
"e8coord": [1.00,-1.00,0,0,0,0,0,0],
"gutcoordlbl": "1,-1,0,0,0,0,0,0",
"gutcoord": [1.00,-1.00,0,0,0,0,0,0],
"smcoordlbl": "1,-1,0,0,0,0,0,0",
"smcoord": [1.00,-1.00,0,0,0,0,0,0],
"tricoordlbl": "4/3,0,-1/2,-1/(2SQRT(3)),0,0,0,0",
"tricoord": [1.15,0,-0.707,-0.408,0,0,0,0],
"tri2coordlbl": "-1/2,-1/2,1/2,1/2,0,0,0,0",
"tri2coord": [-0.707,-0.707,0.707,0.707,0,0,0,0]
},

{
"id": 22,
"name": "45",
"color": "lgray",
"symbol": "bdia",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1,1,0,0,0,0,0,0",
"e8coord": [-1.00,1.00,0,0,0,0,0,0],
"gutcoordlbl": "-1,1,0,0,0,0,0,0",
"gutcoord": [-1.00,1.00,0,0,0,0,0,0],
"smcoordlbl": "-1,1,0,0,0,0,0,0",
"smcoord": [-1.00,1.00,0,0,0,0,0,0],
"tricoordlbl": "-4/3,0,1/2,1/(2SQRT(3)),0,0,0,0",
"tricoord": [-1.15,0,0.707,0.408,0,0,0,0],
"tri2coordlbl": "1/2,1/2,-1/2,-1/2,0,0,0,0",
"tri2coord": [0.707,0.707,-0.707,-0.707,0,0,0,0]
},

{
"id": 23,
"name": "46",
"color": "lgray",
"symbol": "msqu",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,-1,-1,0,0,0,0",
"e8coord": [0,0,-1.00,-1.00,0,0,0,0],
"gutcoordlbl": "0,0,-1,1/2,-1/2,0,0,0",
"gutcoord": [0,0,-1.00,0.707,-0.707,0,0,0],
"smcoordlbl": "0,0,-1,1/2,-1,1,0,0",
"smcoord": [0,0,-1.00,0.707,-0.548,0.447,0,0],
"tricoordlbl": "-2/3,-1,-1/2,-1/(2SQRT(3)),0,0,0,0",
"tricoord": [-0.577,-1.00,-0.707,-0.408,0,0,0,0],
"tri2coordlbl": "-1/2,1/2,-1/2,1/2,0,0,0,0",
"tri2coord": [-0.707,0.707,-0.707,0.707,0,0,0,0]
},

{
"id": 24,
"name": "45",
"color": "lgray",
"symbol": "mdia",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,1,1,0,0,0,0",
"e8coord": [0,0,1.00,1.00,0,0,0,0],
"gutcoordlbl": "0,0,1,-1/2,1/2,0,0,0",
"gutcoord": [0,0,1.00,-0.707,0.707,0,0,0],
"smcoordlbl": "0,0,1,-1/2,1,-1,0,0",
"smcoord": [0,0,1.00,-0.707,0.548,-0.447,0,0],
"tricoordlbl": "2/3,1,1/2,1/(2SQRT(3)),0,0,0,0",
"tricoord": [0.577,1.00,0.707,0.408,0,0,0,0],
"tri2coordlbl": "1/2,-1/2,1/2,-1/2,0,0,0,0",
"tri2coord": [0.707,-0.707,0.707,-0.707,0,0,0,0]
},

{
"id": 25,
"name": "46",
"color": "lgray",
"symbol": "ssqu",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,1,-1,0,0,0,0",
"e8coord": [0,0,1.00,-1.00,0,0,0,0],
"gutcoordlbl": "0,0,1,1/2,-1/2,0,0,0",
"gutcoord": [0,0,1.00,0.707,-0.707,0,0,0],
"smcoordlbl": "0,0,1,1/2,-1,1,0,0",
"smcoord": [0,0,1.00,0.707,-0.548,0.447,0,0],
"tricoordlbl": "-2/3,1,-1/2,-1/(2SQRT(3)),0,0,0,0",
"tricoord": [-0.577,1.00,-0.707,-0.408,0,0,0,0],
"tri2coordlbl": "1/2,-1/2,-1/2,1/2,0,0,0,0",
"tri2coord": [0.707,-0.707,-0.707,0.707,0,0,0,0]
},

{
"id": 26,
"name": "45",
"color": "lgray",
"symbol": "sdia",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,-1,1,0,0,0,0",
"e8coord": [0,0,-1.00,1.00,0,0,0,0],
"gutcoordlbl": "0,0,-1,-1/2,1/2,0,0,0",
"gutcoord": [0,0,-1.00,-0.707,0.707,0,0,0],
"smcoordlbl": "0,0,-1,-1/2,1,-1,0,0",
"smcoord": [0,0,-1.00,-0.707,0.548,-0.447,0,0],
"tricoordlbl": "2/3,-1,1/2,1/(2SQRT(3)),0,0,0,0",
"tricoord": [0.577,-1.00,0.707,0.408,0,0,0,0],
"tri2coordlbl": "-1/2,1/2,1/2,-1/2,0,0,0,0",
"tri2coord": [-0.707,0.707,0.707,-0.707,0,0,0,0]
},

{
"id": 27,
"name": "41",
"color": "lgray",
"symbol": "bsqu",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,0,1,0,0,0,0",
"e8coord": [0,1.00,0,1.00,0,0,0,0],
"gutcoordlbl": "0,1,0,-1/2,1/2,0,0,0",
"gutcoord": [0,1.00,0,-0.707,0.707,0,0,0],
"smcoordlbl": "0,1,0,-1/2,1,-1,0,0",
"smcoord": [0,1.00,0,-0.707,0.548,-0.447,0,0],
"tricoordlbl": "0,0,1/2,SQRT(3)/2,0,0,0,0",
"tricoord": [0,0,0.707,1.22,0,0,0,0],
"tri2coordlbl": "0,0,0,-1,0,0,0,0",
"tri2coord": [0,0,0,-1.41,0,0,0,0]
},

{
"id": 28,
"name": "42",
"color": "lgray",
"symbol": "bdia",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,0,-1,0,0,0,0",
"e8coord": [0,-1.00,0,-1.00,0,0,0,0],
"gutcoordlbl": "0,-1,0,1/2,-1/2,0,0,0",
"gutcoord": [0,-1.00,0,0.707,-0.707,0,0,0],
"smcoordlbl": "0,-1,0,1/2,-1,1,0,0",
"smcoord": [0,-1.00,0,0.707,-0.548,0.447,0,0],
"tricoordlbl": "0,0,-1/2,-SQRT(3)/2,0,0,0,0",
"tricoord": [0,0,-0.707,-1.22,0,0,0,0],
"tri2coordlbl": "0,0,0,1,0,0,0,0",
"tri2coord": [0,0,0,1.41,0,0,0,0]
},

{
"id": 29,
"name": "47",
"color": "lgray",
"symbol": "bsqu",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1,1,0,0,0,0,0,0",
"e8coord": [1.00,1.00,0,0,0,0,0,0],
"gutcoordlbl": "1,1,0,0,0,0,0,0",
"gutcoord": [1.00,1.00,0,0,0,0,0,0],
"smcoordlbl": "1,1,0,0,0,0,0,0",
"smcoord": [1.00,1.00,0,0,0,0,0,0],
"tricoordlbl": "0,0,-1/2,SQRT(3)/2,0,0,0,0",
"tricoord": [0,0,-0.707,1.22,0,0,0,0],
"tri2coordlbl": "-1/2,-1/2,-1/2,-1/2,0,0,0,0",
"tri2coord": [-0.707,-0.707,-0.707,-0.707,0,0,0,0]
},

{
"id": 30,
"name": "48",
"color": "lgray",
"symbol": "bdia",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1,-1,0,0,0,0,0,0",
"e8coord": [-1.00,-1.00,0,0,0,0,0,0],
"gutcoordlbl": "-1,-1,0,0,0,0,0,0",
"gutcoord": [-1.00,-1.00,0,0,0,0,0,0],
"smcoordlbl": "-1,-1,0,0,0,0,0,0",
"smcoord": [-1.00,-1.00,0,0,0,0,0,0],
"tricoordlbl": "0,0,1/2,-SQRT(3)/2,0,0,0,0",
"tricoord": [0,0,0.707,-1.22,0,0,0,0],
"tri2coordlbl": "1/2,1/2,1/2,1/2,0,0,0,0",
"tri2coord": [0.707,0.707,0.707,0.707,0,0,0,0]
},

{
"id": 31,
"name": "36",
"color": "mrora",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,-1,1,0,0",
"e8coord": [0,0,0,0,-1.00,1.00,0,0],
"gutcoordlbl": "0,0,0,-1/2,-1/2,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,-0.707,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,0,-1/2,-1/3,2,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,-0.183,0.894,-0.707,-0.408],
"tricoordlbl": "0,0,0,0,-1,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,-1.00,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,2/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,1.00,-0.707,-0.408]
},

{
"id": 32,
"name": "36",
"color": "mrora",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,1,-1,0,0",
"e8coord": [0,0,0,0,1.00,-1.00,0,0],
"gutcoordlbl": "0,0,0,1/2,1/2,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,0.707,-0.577,0.707,0.408],
"smcoordlbl": "0,0,0,1/2,1/3,-2,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,0.183,-0.894,0.707,0.408],
"tricoordlbl": "0,0,0,0,1,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,1.00,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,-2/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,-1.00,0.707,0.408]
},

{
"id": 33,
"name": "36",
"color": "mygre",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,-1,0,1,0",
"e8coord": [0,0,0,0,-1.00,0,1.00,0],
"gutcoordlbl": "0,0,0,-1/2,-1/2,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,-0.707,0.577,0.707,-0.408],
"smcoordlbl": "0,0,0,-1/2,-1/3,2,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,-0.183,0.894,0.707,-0.408],
"tricoordlbl": "0,0,0,0,-1,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,-1.00,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,2/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,1.00,0.707,-0.408]
},

{
"id": 34,
"name": "36",
"color": "mygre",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,1,0,-1,0",
"e8coord": [0,0,0,0,1.00,0,-1.00,0],
"gutcoordlbl": "0,0,0,1/2,1/2,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,0.707,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,0,1/2,1/3,-2,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,0.183,-0.894,-0.707,0.408],
"tricoordlbl": "0,0,0,0,1,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,1.00,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,-2/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,-1.00,-0.707,0.408]
},

{
"id": 35,
"name": "36",
"color": "mbvio",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,-1,0,0,1",
"e8coord": [0,0,0,0,-1.00,0,0,1.00],
"gutcoordlbl": "0,0,0,-1/2,-1/2,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,-0.707,-0.707,0.577,0,0.816],
"smcoordlbl": "0,0,0,-1/2,-1/3,2,0,1/SQRT(3)",
"smcoord": [0,0,0,-0.707,-0.183,0.894,0,0.816],
"tricoordlbl": "0,0,0,0,-1,2/3,0,1/SQRT(3)",
"tricoord": [0,0,0,0,-1.00,0.577,0,0.816],
"tri2coordlbl": "0,0,0,0,-2/3,2/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,0,0,-0.577,1.00,0,0.816]
},

{
"id": 36,
"name": "36",
"color": "mbvio",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,1,0,0,-1",
"e8coord": [0,0,0,0,1.00,0,0,-1.00],
"gutcoordlbl": "0,0,0,1/2,1/2,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,0.707,0.707,-0.577,0,-0.816],
"smcoordlbl": "0,0,0,1/2,1/3,-2,0,-1/SQRT(3)",
"smcoord": [0,0,0,0.707,0.183,-0.894,0,-0.816],
"tricoordlbl": "0,0,0,0,1,-2/3,0,-1/SQRT(3)",
"tricoord": [0,0,0,0,1.00,-0.577,0,-0.816],
"tri2coordlbl": "0,0,0,0,2/3,-2/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,0,0,0.577,-1.00,0,-0.816]
},

{
"id": 37,
"name": "37",
"color": "mrora",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,1,1,0,0",
"e8coord": [0,0,0,0,1.00,1.00,0,0],
"gutcoordlbl": "0,0,0,1/2,1/2,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,0.707,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,0,1/2,5/3,0,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,0.913,0,-0.707,-0.408],
"tricoordlbl": "0,0,0,0,1,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,1.00,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,0,0,4/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,1.15,0,-0.707,-0.408]
},

{
"id": 38,
"name": "37",
"color": "mrora",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,-1,-1,0,0",
"e8coord": [0,0,0,0,-1.00,-1.00,0,0],
"gutcoordlbl": "0,0,0,-1/2,-1/2,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,-0.707,-0.577,0.707,0.408],
"smcoordlbl": "0,0,0,-1/2,-5/3,0,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,-0.913,0,0.707,0.408],
"tricoordlbl": "0,0,0,0,-1,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,-1.00,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,0,0,-4/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-1.15,0,0.707,0.408]
},

{
"id": 39,
"name": "37",
"color": "mygre",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,1,0,1,0",
"e8coord": [0,0,0,0,1.00,0,1.00,0],
"gutcoordlbl": "0,0,0,1/2,1/2,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,0.707,0.577,0.707,-0.408],
"smcoordlbl": "0,0,0,1/2,5/3,0,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,0.913,0,0.707,-0.408],
"tricoordlbl": "0,0,0,0,1,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,1.00,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,0,0,4/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,1.15,0,0.707,-0.408]
},

{
"id": 40,
"name": "37",
"color": "mygre",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,-1,0,-1,0",
"e8coord": [0,0,0,0,-1.00,0,-1.00,0],
"gutcoordlbl": "0,0,0,-1/2,-1/2,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,-0.707,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,0,-1/2,-5/3,0,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,-0.913,0,-0.707,0.408],
"tricoordlbl": "0,0,0,0,-1,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,-1.00,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,0,0,-4/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-1.15,0,-0.707,0.408]
},

{
"id": 41,
"name": "37",
"color": "mbvio",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,1,0,0,1",
"e8coord": [0,0,0,0,1.00,0,0,1.00],
"gutcoordlbl": "0,0,0,1/2,1/2,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,0.707,0.707,0.577,0,0.816],
"smcoordlbl": "0,0,0,1/2,5/3,0,0,1/SQRT(3)",
"smcoord": [0,0,0,0.707,0.913,0,0,0.816],
"tricoordlbl": "0,0,0,0,1,2/3,0,1/SQRT(3)",
"tricoord": [0,0,0,0,1.00,0.577,0,0.816],
"tri2coordlbl": "0,0,0,0,4/3,0,0,1/SQRT(3)",
"tri2coord": [0,0,0,0,1.15,0,0,0.816]
},

{
"id": 42,
"name": "37",
"color": "mbvio",
"symbol": "scir",
"label": "XT boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,-1,0,0,-1",
"e8coord": [0,0,0,0,-1.00,0,0,-1.00],
"gutcoordlbl": "0,0,0,-1/2,-1/2,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,-0.707,-0.707,-0.577,0,-0.816],
"smcoordlbl": "0,0,0,-1/2,-5/3,0,0,-1/SQRT(3)",
"smcoord": [0,0,0,-0.707,-0.913,0,0,-0.816],
"tricoordlbl": "0,0,0,0,-1,-2/3,0,-1/SQRT(3)",
"tricoord": [0,0,0,0,-1.00,-0.577,0,-0.816],
"tri2coordlbl": "0,0,0,0,-4/3,0,0,-1/SQRT(3)",
"tri2coord": [0,0,0,0,-1.15,0,0,-0.816]
},

{
"id": 43,
"name": "35",
"color": "mred",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,0,-1,-1",
"e8coord": [0,0,0,0,0,0,-1.00,-1.00],
"gutcoordlbl": "0,0,0,0,0,-4/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,-1.15,-0.707,-0.408],
"smcoordlbl": "0,0,0,0,-4/3,-2,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0,-0.730,-0.894,-0.707,-0.408],
"tricoordlbl": "0,0,0,0,0,-4/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,-1.15,-0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,-2/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,-1.00,-0.707,-0.408]
},

{
"id": 44,
"name": "35",
"color": "mred",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,0,1,1",
"e8coord": [0,0,0,0,0,0,1.00,1.00],
"gutcoordlbl": "0,0,0,0,0,4/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,1.15,0.707,0.408],
"smcoordlbl": "0,0,0,0,4/3,2,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0,0.730,0.894,0.707,0.408],
"tricoordlbl": "0,0,0,0,0,4/3,1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,1.15,0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,2/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,1.00,0.707,0.408]
},

{
"id": 45,
"name": "35",
"color": "mgree",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,-1,0,-1",
"e8coord": [0,0,0,0,0,-1.00,0,-1.00],
"gutcoordlbl": "0,0,0,0,0,-4/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,-1.15,0.707,-0.408],
"smcoordlbl": "0,0,0,0,-4/3,-2,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0,-0.730,-0.894,0.707,-0.408],
"tricoordlbl": "0,0,0,0,0,-4/3,1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,-1.15,0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,-2/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,-1.00,0.707,-0.408]
},

{
"id": 46,
"name": "35",
"color": "mgree",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,1,0,1",
"e8coord": [0,0,0,0,0,1.00,0,1.00],
"gutcoordlbl": "0,0,0,0,0,4/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,1.15,-0.707,0.408],
"smcoordlbl": "0,0,0,0,4/3,2,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0,0.730,0.894,-0.707,0.408],
"tricoordlbl": "0,0,0,0,0,4/3,-1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,1.15,-0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,2/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,1.00,-0.707,0.408]
},

{
"id": 47,
"name": "35",
"color": "mblue",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,-1,-1,0",
"e8coord": [0,0,0,0,0,-1.00,-1.00,0],
"gutcoordlbl": "0,0,0,0,0,-4/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,0,0,-1.15,0,0.816],
"smcoordlbl": "0,0,0,0,-4/3,-2,0,1/SQRT(3)",
"smcoord": [0,0,0,0,-0.730,-0.894,0,0.816],
"tricoordlbl": "0,0,0,0,0,-4/3,0,1/SQRT(3)",
"tricoord": [0,0,0,0,0,-1.15,0,0.816],
"tri2coordlbl": "0,0,0,0,-2/3,-2/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,0,0,-0.577,-1.00,0,0.816]
},

{
"id": 48,
"name": "35",
"color": "mblue",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,1,1,0",
"e8coord": [0,0,0,0,0,1.00,1.00,0],
"gutcoordlbl": "0,0,0,0,0,4/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,0,0,1.15,0,-0.816],
"smcoordlbl": "0,0,0,0,4/3,2,0,-1/SQRT(3)",
"smcoord": [0,0,0,0,0.730,0.894,0,-0.816],
"tricoordlbl": "0,0,0,0,0,4/3,0,-1/SQRT(3)",
"tricoord": [0,0,0,0,0,1.15,0,-0.816],
"tri2coordlbl": "0,0,0,0,2/3,2/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,0,0,0.577,1.00,0,-0.816]
},

{
"id": 49,
"name": "44",
"color": "lyell",
"symbol": "bdia",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,0,0,-1,0,0,0",
"e8coord": [0,1.00,0,0,-1.00,0,0,0],
"gutcoordlbl": "0,1,0,-1/2,-1/2,0,0,0",
"gutcoord": [0,1.00,0,-0.707,-0.707,0,0,0],
"smcoordlbl": "0,1,0,-1/2,-1,1,0,0",
"smcoord": [0,1.00,0,-0.707,-0.548,0.447,0,0],
"tricoordlbl": "-2/3,0,0,1/SQRT(3),-1,0,0,0",
"tricoord": [-0.577,0,0,0.816,-1.00,0,0,0],
"tri2coordlbl": "0,0,-1/2,-1/2,-1,1/SQRT(3),0,0",
"tri2coord": [0,0,-0.707,-0.707,-0.866,0.500,0,0]
},

{
"id": 50,
"name": "43",
"color": "lyell",
"symbol": "bsqu",
"label": "frame-Higgs",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,0,0,1,0,0,0",
"e8coord": [0,-1.00,0,0,1.00,0,0,0],
"gutcoordlbl": "0,-1,0,1/2,1/2,0,0,0",
"gutcoord": [0,-1.00,0,0.707,0.707,0,0,0],
"smcoordlbl": "0,-1,0,1/2,1,-1,0,0",
"smcoord": [0,-1.00,0,0.707,0.548,-0.447,0,0],
"tricoordlbl": "2/3,0,0,-1/SQRT(3),1,0,0,0",
"tricoord": [0.577,0,0,-0.816,1.00,0,0,0],
"tri2coordlbl": "0,0,1/2,1/2,1,-1/SQRT(3),0,0",
"tri2coord": [0,0,0.707,0.707,0.866,-0.500,0,0]
},

{
"id": 51,
"name": "8",
"color": "lyell",
"symbol": "bcir",
"label": "Weak boson",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,1,-1,0,0,0",
"e8coord": [0,0,0,1.00,-1.00,0,0,0],
"gutcoordlbl": "0,0,0,-1,0,0,0,0",
"gutcoord": [0,0,0,-1.41,0,0,0,0],
"smcoordlbl": "0,0,0,-1,0,0,0,0",
"smcoord": [0,0,0,-1.41,0,0,0,0],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),-1,0,0,0",
"tricoord": [0.577,0,0.707,0.408,-1.00,0,0,0],
"tri2coordlbl": "0,0,1/2,-1/2,-1,1/SQRT(3),0,0",
"tri2coord": [0,0,0.707,-0.707,-0.866,0.500,0,0]
},

{
"id": 52,
"name": "7",
"color": "lyell",
"symbol": "bcir",
"label": "Weak boson",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,-1,1,0,0,0",
"e8coord": [0,0,0,-1.00,1.00,0,0,0],
"gutcoordlbl": "0,0,0,1,0,0,0,0",
"gutcoord": [0,0,0,1.41,0,0,0,0],
"smcoordlbl": "0,0,0,1,0,0,0,0",
"smcoord": [0,0,0,1.41,0,0,0,0],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),1,0,0,0",
"tricoord": [-0.577,0,-0.707,-0.408,1.00,0,0,0],
"tri2coordlbl": "0,0,-1/2,1/2,1,-1/SQRT(3),0,0",
"tri2coord": [0,0,-0.707,0.707,0.866,-0.500,0,0]
},

{
"id": 53,
"name": "44",
"color": "lyell",
"symbol": "mdia",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,1/2,1/2,1/2,1/2,1/2",
"e8coord": [0.500,0.500,0.500,0.500,0.500,0.500,0.500,0.500],
"gutcoordlbl": "1/2,1/2,1/2,0,1/2,1,0,0",
"gutcoord": [0.500,0.500,0.500,0,0.707,0.866,0,0],
"smcoordlbl": "1/2,1/2,1/2,0,2,1/2,0,0",
"smcoord": [0.500,0.500,0.500,0,1.10,0.224,0,0],
"tricoordlbl": "1/3,1/2,0,1/SQRT(3),1/2,1,0,0",
"tricoord": [0.289,0.500,0,0.816,0.500,0.866,0,0],
"tri2coordlbl": "0,-1/2,0,-1/2,1,1/SQRT(3),0,0",
"tri2coord": [0,-0.707,0,-0.707,0.866,0.500,0,0]
},

{
"id": 54,
"name": "43",
"color": "lyell",
"symbol": "msqu",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,-1/2,-1/2,-1/2,-1/2,-1/2",
"e8coord": [-0.500,-0.500,-0.500,-0.500,-0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,0,-1/2,-1,0,0",
"gutcoord": [-0.500,-0.500,-0.500,0,-0.707,-0.866,0,0],
"smcoordlbl": "-1/2,-1/2,-1/2,0,-2,-1/2,0,0",
"smcoord": [-0.500,-0.500,-0.500,0,-1.10,-0.224,0,0],
"tricoordlbl": "-1/3,-1/2,0,-1/SQRT(3),-1/2,-1,0,0",
"tricoord": [-0.289,-0.500,0,-0.816,-0.500,-0.866,0,0],
"tri2coordlbl": "0,1/2,0,1/2,-1,-1/SQRT(3),0,0",
"tri2coord": [0,0.707,0,0.707,-0.866,-0.500,0,0]
},

{
"id": 55,
"name": "8",
"color": "lyell",
"symbol": "mcir",
"label": "Weak boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,1/2,1/2,1/2,1/2,1/2",
"e8coord": [-0.500,0.500,-0.500,0.500,0.500,0.500,0.500,0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,0,1/2,1,0,0",
"gutcoord": [-0.500,0.500,-0.500,0,0.707,0.866,0,0],
"smcoordlbl": "-1/2,1/2,-1/2,0,2,1/2,0,0",
"smcoord": [-0.500,0.500,-0.500,0,1.10,0.224,0,0],
"tricoordlbl": "-1/3,-1/2,1/2,1/(2SQRT(3)),1/2,1,0,0",
"tricoord": [-0.289,-0.500,0.707,0.408,0.500,0.866,0,0],
"tri2coordlbl": "0,1/2,0,-1/2,1,1/SQRT(3),0,0",
"tri2coord": [0,0.707,0,-0.707,0.866,0.500,0,0]
},

{
"id": 56,
"name": "7",
"color": "lyell",
"symbol": "mcir",
"label": "Weak boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,-1/2,-1/2,-1/2,-1/2,-1/2",
"e8coord": [0.500,-0.500,0.500,-0.500,-0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,1/2,0,-1/2,-1,0,0",
"gutcoord": [0.500,-0.500,0.500,0,-0.707,-0.866,0,0],
"smcoordlbl": "1/2,-1/2,1/2,0,-2,-1/2,0,0",
"smcoord": [0.500,-0.500,0.500,0,-1.10,-0.224,0,0],
"tricoordlbl": "1/3,1/2,-1/2,-1/(2SQRT(3)),-1/2,-1,0,0",
"tricoord": [0.289,0.500,-0.707,-0.408,-0.500,-0.866,0,0],
"tri2coordlbl": "0,-1/2,0,1/2,-1,-1/SQRT(3),0,0",
"tri2coord": [0,-0.707,0,0.707,-0.866,-0.500,0,0]
},

{
"id": 57,
"name": "44",
"color": "lyell",
"symbol": "sdia",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,1/2,1/2,-1/2,-1/2,-1/2",
"e8coord": [0.500,0.500,-0.500,0.500,0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,1/2,-1/2,0,1/2,-1,0,0",
"gutcoord": [0.500,0.500,-0.500,0,0.707,-0.866,0,0],
"smcoordlbl": "1/2,1/2,-1/2,0,0,-5/2,0,0",
"smcoord": [0.500,0.500,-0.500,0,0,-1.12,0,0],
"tricoordlbl": "1/3,-1/2,0,1/SQRT(3),1/2,-1,0,0",
"tricoord": [0.289,-0.500,0,0.816,0.500,-0.866,0,0],
"tri2coordlbl": "-1/2,0,0,-1/2,0,-2/SQRT(3),0,0",
"tri2coord": [-0.707,0,0,-0.707,0,-1.00,0,0]
},

{
"id": 58,
"name": "43",
"color": "lyell",
"symbol": "ssqu",
"label": "frame-Higgs",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,-1/2,-1/2,1/2,1/2,1/2",
"e8coord": [-0.500,-0.500,0.500,-0.500,-0.500,0.500,0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,0,-1/2,1,0,0",
"gutcoord": [-0.500,-0.500,0.500,0,-0.707,0.866,0,0],
"smcoordlbl": "-1/2,-1/2,1/2,0,0,5/2,0,0",
"smcoord": [-0.500,-0.500,0.500,0,0,1.12,0,0],
"tricoordlbl": "-1/3,1/2,0,-1/SQRT(3),-1/2,1,0,0",
"tricoord": [-0.289,0.500,0,-0.816,-0.500,0.866,0,0],
"tri2coordlbl": "1/2,0,0,1/2,0,2/SQRT(3),0,0",
"tri2coord": [0.707,0,0,0.707,0,1.00,0,0]
},

{
"id": 59,
"name": "8",
"color": "lyell",
"symbol": "scir",
"label": "Weak boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,1/2,1/2,-1/2,-1/2,-1/2",
"e8coord": [-0.500,0.500,0.500,0.500,0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,1/2,0,1/2,-1,0,0",
"gutcoord": [-0.500,0.500,0.500,0,0.707,-0.866,0,0],
"smcoordlbl": "-1/2,1/2,1/2,0,0,-5/2,0,0",
"smcoord": [-0.500,0.500,0.500,0,0,-1.12,0,0],
"tricoordlbl": "-1/3,1/2,1/2,1/(2SQRT(3)),1/2,-1,0,0",
"tricoord": [-0.289,0.500,0.707,0.408,0.500,-0.866,0,0],
"tri2coordlbl": "1/2,0,0,-1/2,0,-2/SQRT(3),0,0",
"tri2coord": [0.707,0,0,-0.707,0,-1.00,0,0]
},

{
"id": 60,
"name": "7",
"color": "lyell",
"symbol": "scir",
"label": "Weak boson",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,-1/2,-1/2,1/2,1/2,1/2",
"e8coord": [0.500,-0.500,-0.500,-0.500,-0.500,0.500,0.500,0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,0,-1/2,1,0,0",
"gutcoord": [0.500,-0.500,-0.500,0,-0.707,0.866,0,0],
"smcoordlbl": "1/2,-1/2,-1/2,0,0,5/2,0,0",
"smcoord": [0.500,-0.500,-0.500,0,0,1.12,0,0],
"tricoordlbl": "1/3,-1/2,-1/2,-1/(2SQRT(3)),-1/2,1,0,0",
"tricoord": [0.289,-0.500,-0.707,-0.408,-0.500,0.866,0,0],
"tri2coordlbl": "-1/2,0,0,1/2,0,2/SQRT(3),0,0",
"tri2coord": [-0.707,0,0,0.707,0,1.00,0,0]
},

{
"id": 61,
"name": "61",
"color": "lgray",
"symbol": "blup",
"label": "electron neutrino",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,-1/2,1/2,-1/2,-1/2,-1/2",
"e8coord": [0.500,-0.500,-0.500,-0.500,0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,1/2,0,-1,0,0",
"gutcoord": [0.500,-0.500,-0.500,0.707,0,-0.866,0,0],
"smcoordlbl": "1/2,-1/2,-1/2,1/2,-1,-3/2,0,0",
"smcoord": [0.500,-0.500,-0.500,0.707,-0.548,-0.671,0,0],
"tricoordlbl": "1/3,-1/2,-1/2,-1/(2SQRT(3)),1/2,-1,0,0",
"tricoord": [0.289,-0.500,-0.707,-0.408,0.500,-0.866,0,0],
"tri2coordlbl": "-1/2,0,0,1/2,0,-2/SQRT(3),0,0",
"tri2coord": [-0.707,0,0,0.707,0,-1.00,0,0]
},

{
"id": 62,
"name": "76",
"color": "lgray",
"symbol": "blda",
"label": "electron anti-neutrino",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,1/2,-1/2,1/2,1/2,1/2",
"e8coord": [-0.500,0.500,0.500,0.500,-0.500,0.500,0.500,0.500],
"gutcoordlbl": "-1/2,1/2,1/2,-1/2,0,1,0,0",
"gutcoord": [-0.500,0.500,0.500,-0.707,0,0.866,0,0],
"smcoordlbl": "-1/2,1/2,1/2,-1/2,1,3/2,0,0",
"smcoord": [-0.500,0.500,0.500,-0.707,0.548,0.671,0,0],
"tricoordlbl": "-1/3,1/2,1/2,1/(2SQRT(3)),-1/2,1,0,0",
"tricoord": [-0.289,0.500,0.707,0.408,-0.500,0.866,0,0],
"tri2coordlbl": "1/2,0,0,-1/2,0,2/SQRT(3),0,0",
"tri2coord": [0.707,0,0,-0.707,0,1.00,0,0]
},

{
"id": 63,
"name": "62",
"color": "lgray",
"symbol": "bldp",
"label": "electron neutrino",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,-1/2,1/2,-1/2,-1/2,-1/2",
"e8coord": [-0.500,-0.500,0.500,-0.500,0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,1/2,0,-1,0,0",
"gutcoord": [-0.500,-0.500,0.500,0.707,0,-0.866,0,0],
"smcoordlbl": "-1/2,-1/2,1/2,1/2,-1,-3/2,0,0",
"smcoord": [-0.500,-0.500,0.500,0.707,-0.548,-0.671,0,0],
"tricoordlbl": "-1/3,1/2,0,-1/SQRT(3),1/2,-1,0,0",
"tricoord": [-0.289,0.500,0,-0.816,0.500,-0.866,0,0],
"tri2coordlbl": "1/2,0,0,1/2,0,-2/SQRT(3),0,0",
"tri2coord": [0.707,0,0,0.707,0,-1.00,0,0]
},

{
"id": 64,
"name": "75",
"color": "lgray",
"symbol": "blua",
"label": "electron anti-neutrino",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,1/2,-1/2,1/2,1/2,1/2",
"e8coord": [0.500,0.500,-0.500,0.500,-0.500,0.500,0.500,0.500],
"gutcoordlbl": "1/2,1/2,-1/2,-1/2,0,1,0,0",
"gutcoord": [0.500,0.500,-0.500,-0.707,0,0.866,0,0],
"smcoordlbl": "1/2,1/2,-1/2,-1/2,1,3/2,0,0",
"smcoord": [0.500,0.500,-0.500,-0.707,0.548,0.671,0,0],
"tricoordlbl": "1/3,-1/2,0,1/SQRT(3),-1/2,1,0,0",
"tricoord": [0.289,-0.500,0,0.816,-0.500,0.866,0,0],
"tri2coordlbl": "-1/2,0,0,-1/2,0,2/SQRT(3),0,0",
"tri2coord": [-0.707,0,0,-0.707,0,1.00,0,0]
},

{
"id": 65,
"name": "63",
"color": "myell",
"symbol": "blup",
"label": "electron",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,1/2,-1/2,-1/2,-1/2,-1/2",
"e8coord": [0.500,-0.500,-0.500,0.500,-0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,-1/2,0,-1,0,0",
"gutcoord": [0.500,-0.500,-0.500,-0.707,0,-0.866,0,0],
"smcoordlbl": "1/2,-1/2,-1/2,-1/2,-1,-3/2,0,0",
"smcoord": [0.500,-0.500,-0.500,-0.707,-0.548,-0.671,0,0],
"tricoordlbl": "1,-1/2,0,0,-1/2,-1,0,0",
"tricoord": [0.866,-0.500,0,0,-0.500,-0.866,0,0],
"tri2coordlbl": "-1/2,0,1/2,0,-1,-1/SQRT(3),0,0",
"tri2coord": [-0.707,0,0.707,0,-0.866,-0.500,0,0]
},

{
"id": 66,
"name": "66",
"color": "myell",
"symbol": "blda",
"label": "positron",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,-1/2,1/2,1/2,1/2,1/2",
"e8coord": [-0.500,0.500,0.500,-0.500,0.500,0.500,0.500,0.500],
"gutcoordlbl": "-1/2,1/2,1/2,1/2,0,1,0,0",
"gutcoord": [-0.500,0.500,0.500,0.707,0,0.866,0,0],
"smcoordlbl": "-1/2,1/2,1/2,1/2,1,3/2,0,0",
"smcoord": [-0.500,0.500,0.500,0.707,0.548,0.671,0,0],
"tricoordlbl": "-1,1/2,0,0,1/2,1,0,0",
"tricoord": [-0.866,0.500,0,0,0.500,0.866,0,0],
"tri2coordlbl": "1/2,0,-1/2,0,1,1/SQRT(3),0,0",
"tri2coord": [0.707,0,-0.707,0,0.866,0.500,0,0]
},

{
"id": 67,
"name": "64",
"color": "myell",
"symbol": "bldp",
"label": "electron",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,1/2,-1/2,-1/2,-1/2,-1/2",
"e8coord": [-0.500,-0.500,0.500,0.500,-0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,-1/2,0,-1,0,0",
"gutcoord": [-0.500,-0.500,0.500,-0.707,0,-0.866,0,0],
"smcoordlbl": "-1/2,-1/2,1/2,-1/2,-1,-3/2,0,0",
"smcoord": [-0.500,-0.500,0.500,-0.707,-0.548,-0.671,0,0],
"tricoordlbl": "1/3,1/2,1/2,-1/(2SQRT(3)),-1/2,-1,0,0",
"tricoord": [0.289,0.500,0.707,-0.408,-0.500,-0.866,0,0],
"tri2coordlbl": "1/2,0,1/2,0,-1,-1/SQRT(3),0,0",
"tri2coord": [0.707,0,0.707,0,-0.866,-0.500,0,0]
},

{
"id": 68,
"name": "65",
"color": "myell",
"symbol": "blua",
"label": "positron",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,-1/2,1/2,1/2,1/2,1/2",
"e8coord": [0.500,0.500,-0.500,-0.500,0.500,0.500,0.500,0.500],
"gutcoordlbl": "1/2,1/2,-1/2,1/2,0,1,0,0",
"gutcoord": [0.500,0.500,-0.500,0.707,0,0.866,0,0],
"smcoordlbl": "1/2,1/2,-1/2,1/2,1,3/2,0,0",
"smcoord": [0.500,0.500,-0.500,0.707,0.548,0.671,0,0],
"tricoordlbl": "-1/3,-1/2,-1/2,1/(2SQRT(3)),1/2,1,0,0",
"tricoord": [-0.289,-0.500,-0.707,0.408,0.500,0.866,0,0],
"tri2coordlbl": "-1/2,0,-1/2,0,1,1/SQRT(3),0,0",
"tri2coord": [-0.707,0,-0.707,0,0.866,0.500,0,0]
},

{
"id": 69,
"name": "63",
"color": "myell",
"symbol": "brup",
"label": "electron",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,-1/2,-1/2,-1/2,-1/2,-1/2",
"e8coord": [0.500,0.500,-0.500,-0.500,-0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,1/2,-1/2,0,-1/2,-1,0,0",
"gutcoord": [0.500,0.500,-0.500,0,-0.707,-0.866,0,0],
"smcoordlbl": "1/2,1/2,-1/2,0,-2,-1/2,0,0",
"smcoord": [0.500,0.500,-0.500,0,-1.10,-0.224,0,0],
"tricoordlbl": "-1/3,-1/2,-1/2,1/(2SQRT(3)),-1/2,-1,0,0",
"tricoord": [-0.289,-0.500,-0.707,0.408,-0.500,-0.866,0,0],
"tri2coordlbl": "-1/2,0,-1/2,0,-1,-1/SQRT(3),0,0",
"tri2coord": [-0.707,0,-0.707,0,-0.866,-0.500,0,0]
},

{
"id": 70,
"name": "66",
"color": "myell",
"symbol": "brda",
"label": "positron",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,1/2,1/2,1/2,1/2,1/2",
"e8coord": [-0.500,-0.500,0.500,0.500,0.500,0.500,0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,0,1/2,1,0,0",
"gutcoord": [-0.500,-0.500,0.500,0,0.707,0.866,0,0],
"smcoordlbl": "-1/2,-1/2,1/2,0,2,1/2,0,0",
"smcoord": [-0.500,-0.500,0.500,0,1.10,0.224,0,0],
"tricoordlbl": "1/3,1/2,1/2,-1/(2SQRT(3)),1/2,1,0,0",
"tricoord": [0.289,0.500,0.707,-0.408,0.500,0.866,0,0],
"tri2coordlbl": "1/2,0,1/2,0,1,1/SQRT(3),0,0",
"tri2coord": [0.707,0,0.707,0,0.866,0.500,0,0]
},

{
"id": 71,
"name": "64",
"color": "myell",
"symbol": "brdp",
"label": "electron",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,-1/2,-1/2,-1/2,-1/2,-1/2",
"e8coord": [-0.500,0.500,0.500,-0.500,-0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,1/2,0,-1/2,-1,0,0",
"gutcoord": [-0.500,0.500,0.500,0,-0.707,-0.866,0,0],
"smcoordlbl": "-1/2,1/2,1/2,0,-2,-1/2,0,0",
"smcoord": [-0.500,0.500,0.500,0,-1.10,-0.224,0,0],
"tricoordlbl": "-1,1/2,0,0,-1/2,-1,0,0",
"tricoord": [-0.866,0.500,0,0,-0.500,-0.866,0,0],
"tri2coordlbl": "1/2,0,-1/2,0,-1,-1/SQRT(3),0,0",
"tri2coord": [0.707,0,-0.707,0,-0.866,-0.500,0,0]
},

{
"id": 72,
"name": "65",
"color": "myell",
"symbol": "brua",
"label": "positron",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,1/2,1/2,1/2,1/2,1/2",
"e8coord": [0.500,-0.500,-0.500,0.500,0.500,0.500,0.500,0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,0,1/2,1,0,0",
"gutcoord": [0.500,-0.500,-0.500,0,0.707,0.866,0,0],
"smcoordlbl": "1/2,-1/2,-1/2,0,2,1/2,0,0",
"smcoord": [0.500,-0.500,-0.500,0,1.10,0.224,0,0],
"tricoordlbl": "1,-1/2,0,0,1/2,1,0,0",
"tricoord": [0.866,-0.500,0,0,0.500,0.866,0,0],
"tri2coordlbl": "-1/2,0,1/2,0,1,1/SQRT(3),0,0",
"tri2coord": [-0.707,0,0.707,0,0.866,0.500,0,0]
},

{
"id": 73,
"name": "67",
"color": "mred",
"symbol": "blup",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,-1/2,1/2,-1/2,1/2,1/2",
"e8coord": [0.500,-0.500,-0.500,-0.500,0.500,-0.500,0.500,0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,1/2,0,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,-0.500,0.707,0,0.289,0.707,0.408],
"smcoordlbl": "1/2,-1/2,-1/2,1/2,1/3,1/2,1/2,1/(2SQRT(3))",
"smcoord": [0.500,-0.500,-0.500,0.707,0.183,0.224,0.707,0.408],
"tricoordlbl": "1/3,-1/2,-1/2,-1/(2SQRT(3)),1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [0.289,-0.500,-0.707,-0.408,0.500,0.289,0.707,0.408],
"tri2coordlbl": "-1/2,0,0,1/2,2/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0,0,0.707,0.577,0,0.707,0.408]
},

{
"id": 74,
"name": "70",
"color": "mred",
"symbol": "blda",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,1/2,-1/2,1/2,-1/2,-1/2",
"e8coord": [-0.500,0.500,0.500,0.500,-0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,1/2,-1/2,0,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,0.500,-0.707,0,-0.289,-0.707,-0.408],
"smcoordlbl": "-1/2,1/2,1/2,-1/2,-1/3,-1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,0.500,0.500,-0.707,-0.183,-0.224,-0.707,-0.408],
"tricoordlbl": "-1/3,1/2,1/2,1/(2SQRT(3)),-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,0.500,0.707,0.408,-0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "1/2,0,0,-1/2,-2/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0,0,-0.707,-0.577,0,-0.707,-0.408]
},

{
"id": 75,
"name": "68",
"color": "mred",
"symbol": "bldp",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,-1/2,1/2,-1/2,1/2,1/2",
"e8coord": [-0.500,-0.500,0.500,-0.500,0.500,-0.500,0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,1/2,0,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,0.500,0.707,0,0.289,0.707,0.408],
"smcoordlbl": "-1/2,-1/2,1/2,1/2,1/3,1/2,1/2,1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,0.500,0.707,0.183,0.224,0.707,0.408],
"tricoordlbl": "-1/3,1/2,0,-1/SQRT(3),1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.289,0.500,0,-0.816,0.500,0.289,0.707,0.408],
"tri2coordlbl": "1/2,0,0,1/2,2/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0,0,0.707,0.577,0,0.707,0.408]
},

{
"id": 76,
"name": "69",
"color": "mred",
"symbol": "blua",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,1/2,-1/2,1/2,-1/2,-1/2",
"e8coord": [0.500,0.500,-0.500,0.500,-0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,1/2,-1/2,-1/2,0,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,0.500,-0.500,-0.707,0,-0.289,-0.707,-0.408],
"smcoordlbl": "1/2,1/2,-1/2,-1/2,-1/3,-1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [0.500,0.500,-0.500,-0.707,-0.183,-0.224,-0.707,-0.408],
"tricoordlbl": "1/3,-1/2,0,1/SQRT(3),-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.289,-0.500,0,0.816,-0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "-1/2,0,0,-1/2,-2/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0,0,-0.707,-0.577,0,-0.707,-0.408]
},

{
"id": 77,
"name": "67",
"color": "mred",
"symbol": "brup",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,1/2,1/2,-1/2,1/2,1/2",
"e8coord": [0.500,0.500,-0.500,0.500,0.500,-0.500,0.500,0.500],
"gutcoordlbl": "1/2,1/2,-1/2,0,1/2,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [0.500,0.500,-0.500,0,0.707,0.289,0.707,0.408],
"smcoordlbl": "1/2,1/2,-1/2,0,4/3,-1/2,1/2,1/(2SQRT(3))",
"smcoord": [0.500,0.500,-0.500,0,0.730,-0.224,0.707,0.408],
"tricoordlbl": "1/3,-1/2,0,1/SQRT(3),1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [0.289,-0.500,0,0.816,0.500,0.289,0.707,0.408],
"tri2coordlbl": "-1/2,0,0,-1/2,2/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0,0,-0.707,0.577,0,0.707,0.408]
},

{
"id": 78,
"name": "70",
"color": "mred",
"symbol": "brda",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,-1/2,-1/2,1/2,-1/2,-1/2",
"e8coord": [-0.500,-0.500,0.500,-0.500,-0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,0,-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,0.500,0,-0.707,-0.289,-0.707,-0.408],
"smcoordlbl": "-1/2,-1/2,1/2,0,-4/3,1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,0.500,0,-0.730,0.224,-0.707,-0.408],
"tricoordlbl": "-1/3,1/2,0,-1/SQRT(3),-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,0.500,0,-0.816,-0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "1/2,0,0,1/2,-2/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0,0,0.707,-0.577,0,-0.707,-0.408]
},

{
"id": 79,
"name": "68",
"color": "mred",
"symbol": "brdp",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,1/2,1/2,-1/2,1/2,1/2",
"e8coord": [-0.500,0.500,0.500,0.500,0.500,-0.500,0.500,0.500],
"gutcoordlbl": "-1/2,1/2,1/2,0,1/2,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,0.500,0,0.707,0.289,0.707,0.408],
"smcoordlbl": "-1/2,1/2,1/2,0,4/3,-1/2,1/2,1/(2SQRT(3))",
"smcoord": [-0.500,0.500,0.500,0,0.730,-0.224,0.707,0.408],
"tricoordlbl": "-1/3,1/2,1/2,1/(2SQRT(3)),1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.289,0.500,0.707,0.408,0.500,0.289,0.707,0.408],
"tri2coordlbl": "1/2,0,0,-1/2,2/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0,0,-0.707,0.577,0,0.707,0.408]
},

{
"id": 80,
"name": "69",
"color": "mred",
"symbol": "brua",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,-1/2,-1/2,1/2,-1/2,-1/2",
"e8coord": [0.500,-0.500,-0.500,-0.500,-0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,0,-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,-0.500,0,-0.707,-0.289,-0.707,-0.408],
"smcoordlbl": "1/2,-1/2,-1/2,0,-4/3,1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [0.500,-0.500,-0.500,0,-0.730,0.224,-0.707,-0.408],
"tricoordlbl": "1/3,-1/2,-1/2,-1/(2SQRT(3)),-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.289,-0.500,-0.707,-0.408,-0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "-1/2,0,0,1/2,-2/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0,0,0.707,-0.577,0,-0.707,-0.408]
},

{
"id": 81,
"name": "71",
"color": "mrora",
"symbol": "blup",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,1/2,-1/2,-1/2,1/2,1/2",
"e8coord": [0.500,-0.500,-0.500,0.500,-0.500,-0.500,0.500,0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,-1/2,0,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,-0.500,-0.707,0,0.289,0.707,0.408],
"smcoordlbl": "1/2,-1/2,-1/2,-1/2,1/3,1/2,1/2,1/(2SQRT(3))",
"smcoord": [0.500,-0.500,-0.500,-0.707,0.183,0.224,0.707,0.408],
"tricoordlbl": "1,-1/2,0,0,-1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [0.866,-0.500,0,0,-0.500,0.289,0.707,0.408],
"tri2coordlbl": "-1/2,0,1/2,0,-1/3,1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0,0.707,0,-0.289,0.500,0.707,0.408]
},

{
"id": 82,
"name": "74",
"color": "mrora",
"symbol": "blda",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,-1/2,1/2,1/2,-1/2,-1/2",
"e8coord": [-0.500,0.500,0.500,-0.500,0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,1/2,1/2,0,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,0.500,0.707,0,-0.289,-0.707,-0.408],
"smcoordlbl": "-1/2,1/2,1/2,1/2,-1/3,-1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,0.500,0.500,0.707,-0.183,-0.224,-0.707,-0.408],
"tricoordlbl": "-1,1/2,0,0,1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.866,0.500,0,0,0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "1/2,0,-1/2,0,1/3,-1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0,-0.707,0,0.289,-0.500,-0.707,-0.408]
},

{
"id": 83,
"name": "72",
"color": "mrora",
"symbol": "bldp",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,1/2,-1/2,-1/2,1/2,1/2",
"e8coord": [-0.500,-0.500,0.500,0.500,-0.500,-0.500,0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,-1/2,0,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,0.500,-0.707,0,0.289,0.707,0.408],
"smcoordlbl": "-1/2,-1/2,1/2,-1/2,1/3,1/2,1/2,1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,0.500,-0.707,0.183,0.224,0.707,0.408],
"tricoordlbl": "1/3,1/2,1/2,-1/(2SQRT(3)),-1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [0.289,0.500,0.707,-0.408,-0.500,0.289,0.707,0.408],
"tri2coordlbl": "1/2,0,1/2,0,-1/3,1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0,0.707,0,-0.289,0.500,0.707,0.408]
},

{
"id": 84,
"name": "73",
"color": "mrora",
"symbol": "blua",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,-1/2,1/2,1/2,-1/2,-1/2",
"e8coord": [0.500,0.500,-0.500,-0.500,0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,1/2,-1/2,1/2,0,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,0.500,-0.500,0.707,0,-0.289,-0.707,-0.408],
"smcoordlbl": "1/2,1/2,-1/2,1/2,-1/3,-1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [0.500,0.500,-0.500,0.707,-0.183,-0.224,-0.707,-0.408],
"tricoordlbl": "-1/3,-1/2,-1/2,1/(2SQRT(3)),1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,-0.707,0.408,0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "-1/2,0,-1/2,0,1/3,-1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0,-0.707,0,0.289,-0.500,-0.707,-0.408]
},

{
"id": 85,
"name": "71",
"color": "mrora",
"symbol": "brup",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,-1/2,-1/2,-1/2,1/2,1/2",
"e8coord": [0.500,0.500,-0.500,-0.500,-0.500,-0.500,0.500,0.500],
"gutcoordlbl": "1/2,1/2,-1/2,0,-1/2,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [0.500,0.500,-0.500,0,-0.707,0.289,0.707,0.408],
"smcoordlbl": "1/2,1/2,-1/2,0,-2/3,3/2,1/2,1/(2SQRT(3))",
"smcoord": [0.500,0.500,-0.500,0,-0.365,0.671,0.707,0.408],
"tricoordlbl": "-1/3,-1/2,-1/2,1/(2SQRT(3)),-1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,-0.707,0.408,-0.500,0.289,0.707,0.408],
"tri2coordlbl": "-1/2,0,-1/2,0,-1/3,1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0,-0.707,0,-0.289,0.500,0.707,0.408]
},

{
"id": 86,
"name": "74",
"color": "mrora",
"symbol": "brda",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,1/2,1/2,1/2,-1/2,-1/2",
"e8coord": [-0.500,-0.500,0.500,0.500,0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,0,1/2,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,0.500,0,0.707,-0.289,-0.707,-0.408],
"smcoordlbl": "-1/2,-1/2,1/2,0,2/3,-3/2,-1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,0.500,0,0.365,-0.671,-0.707,-0.408],
"tricoordlbl": "1/3,1/2,1/2,-1/(2SQRT(3)),1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.289,0.500,0.707,-0.408,0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "1/2,0,1/2,0,1/3,-1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0,0.707,0,0.289,-0.500,-0.707,-0.408]
},

{
"id": 87,
"name": "72",
"color": "mrora",
"symbol": "brdp",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,-1/2,-1/2,-1/2,1/2,1/2",
"e8coord": [-0.500,0.500,0.500,-0.500,-0.500,-0.500,0.500,0.500],
"gutcoordlbl": "-1/2,1/2,1/2,0,-1/2,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,0.500,0,-0.707,0.289,0.707,0.408],
"smcoordlbl": "-1/2,1/2,1/2,0,-2/3,3/2,1/2,1/(2SQRT(3))",
"smcoord": [-0.500,0.500,0.500,0,-0.365,0.671,0.707,0.408],
"tricoordlbl": "-1,1/2,0,0,-1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.866,0.500,0,0,-0.500,0.289,0.707,0.408],
"tri2coordlbl": "1/2,0,-1/2,0,-1/3,1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0,-0.707,0,-0.289,0.500,0.707,0.408]
},

{
"id": 88,
"name": "73",
"color": "mrora",
"symbol": "brua",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,1/2,1/2,1/2,-1/2,-1/2",
"e8coord": [0.500,-0.500,-0.500,0.500,0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,0,1/2,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,-0.500,0,0.707,-0.289,-0.707,-0.408],
"smcoordlbl": "1/2,-1/2,-1/2,0,2/3,-3/2,-1/2,-1/(2SQRT(3))",
"smcoord": [0.500,-0.500,-0.500,0,0.365,-0.671,-0.707,-0.408],
"tricoordlbl": "1,-1/2,0,0,1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.866,-0.500,0,0,0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "-1/2,0,1/2,0,1/3,-1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0,0.707,0,0.289,-0.500,-0.707,-0.408]
},

{
"id": 89,
"name": "67",
"color": "mgree",
"symbol": "blup",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,-1/2,1/2,1/2,-1/2,1/2",
"e8coord": [0.500,-0.500,-0.500,-0.500,0.500,0.500,-0.500,0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,1/2,0,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,-0.500,0.707,0,0.289,-0.707,0.408],
"smcoordlbl": "1/2,-1/2,-1/2,1/2,1/3,1/2,-1/2,1/(2SQRT(3))",
"smcoord": [0.500,-0.500,-0.500,0.707,0.183,0.224,-0.707,0.408],
"tricoordlbl": "1/3,-1/2,-1/2,-1/(2SQRT(3)),1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.289,-0.500,-0.707,-0.408,0.500,0.289,-0.707,0.408],
"tri2coordlbl": "-1/2,0,0,1/2,2/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0,0,0.707,0.577,0,-0.707,0.408]
},

{
"id": 90,
"name": "70",
"color": "mgree",
"symbol": "blda",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,1/2,-1/2,-1/2,1/2,-1/2",
"e8coord": [-0.500,0.500,0.500,0.500,-0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,1/2,-1/2,0,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,0.500,-0.707,0,-0.289,0.707,-0.408],
"smcoordlbl": "-1/2,1/2,1/2,-1/2,-1/3,-1/2,1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,0.500,0.500,-0.707,-0.183,-0.224,0.707,-0.408],
"tricoordlbl": "-1/3,1/2,1/2,1/(2SQRT(3)),-1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,0.500,0.707,0.408,-0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "1/2,0,0,-1/2,-2/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0,0,-0.707,-0.577,0,0.707,-0.408]
},

{
"id": 91,
"name": "68",
"color": "mgree",
"symbol": "bldp",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,-1/2,1/2,1/2,-1/2,1/2",
"e8coord": [-0.500,-0.500,0.500,-0.500,0.500,0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,1/2,0,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,0.500,0.707,0,0.289,-0.707,0.408],
"smcoordlbl": "-1/2,-1/2,1/2,1/2,1/3,1/2,-1/2,1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,0.500,0.707,0.183,0.224,-0.707,0.408],
"tricoordlbl": "-1/3,1/2,0,-1/SQRT(3),1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.289,0.500,0,-0.816,0.500,0.289,-0.707,0.408],
"tri2coordlbl": "1/2,0,0,1/2,2/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0,0,0.707,0.577,0,-0.707,0.408]
},

{
"id": 92,
"name": "69",
"color": "mgree",
"symbol": "blua",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,1/2,-1/2,-1/2,1/2,-1/2",
"e8coord": [0.500,0.500,-0.500,0.500,-0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "1/2,1/2,-1/2,-1/2,0,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,0.500,-0.500,-0.707,0,-0.289,0.707,-0.408],
"smcoordlbl": "1/2,1/2,-1/2,-1/2,-1/3,-1/2,1/2,-1/(2SQRT(3))",
"smcoord": [0.500,0.500,-0.500,-0.707,-0.183,-0.224,0.707,-0.408],
"tricoordlbl": "1/3,-1/2,0,1/SQRT(3),-1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.289,-0.500,0,0.816,-0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "-1/2,0,0,-1/2,-2/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0,0,-0.707,-0.577,0,0.707,-0.408]
},

{
"id": 93,
"name": "67",
"color": "mgree",
"symbol": "brup",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,1/2,1/2,1/2,-1/2,1/2",
"e8coord": [0.500,0.500,-0.500,0.500,0.500,0.500,-0.500,0.500],
"gutcoordlbl": "1/2,1/2,-1/2,0,1/2,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0.500,0.500,-0.500,0,0.707,0.289,-0.707,0.408],
"smcoordlbl": "1/2,1/2,-1/2,0,4/3,-1/2,-1/2,1/(2SQRT(3))",
"smcoord": [0.500,0.500,-0.500,0,0.730,-0.224,-0.707,0.408],
"tricoordlbl": "1/3,-1/2,0,1/SQRT(3),1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.289,-0.500,0,0.816,0.500,0.289,-0.707,0.408],
"tri2coordlbl": "-1/2,0,0,-1/2,2/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0,0,-0.707,0.577,0,-0.707,0.408]
},

{
"id": 94,
"name": "70",
"color": "mgree",
"symbol": "brda",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,-1/2,-1/2,-1/2,1/2,-1/2",
"e8coord": [-0.500,-0.500,0.500,-0.500,-0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,0,-1/2,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,0.500,0,-0.707,-0.289,0.707,-0.408],
"smcoordlbl": "-1/2,-1/2,1/2,0,-4/3,1/2,1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,0.500,0,-0.730,0.224,0.707,-0.408],
"tricoordlbl": "-1/3,1/2,0,-1/SQRT(3),-1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,0.500,0,-0.816,-0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "1/2,0,0,1/2,-2/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0,0,0.707,-0.577,0,0.707,-0.408]
},

{
"id": 95,
"name": "68",
"color": "mgree",
"symbol": "brdp",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,1/2,1/2,1/2,-1/2,1/2",
"e8coord": [-0.500,0.500,0.500,0.500,0.500,0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,1/2,1/2,0,1/2,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,0.500,0,0.707,0.289,-0.707,0.408],
"smcoordlbl": "-1/2,1/2,1/2,0,4/3,-1/2,-1/2,1/(2SQRT(3))",
"smcoord": [-0.500,0.500,0.500,0,0.730,-0.224,-0.707,0.408],
"tricoordlbl": "-1/3,1/2,1/2,1/(2SQRT(3)),1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.289,0.500,0.707,0.408,0.500,0.289,-0.707,0.408],
"tri2coordlbl": "1/2,0,0,-1/2,2/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0,0,-0.707,0.577,0,-0.707,0.408]
},

{
"id": 96,
"name": "69",
"color": "mgree",
"symbol": "brua",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,-1/2,-1/2,-1/2,1/2,-1/2",
"e8coord": [0.500,-0.500,-0.500,-0.500,-0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,0,-1/2,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,-0.500,0,-0.707,-0.289,0.707,-0.408],
"smcoordlbl": "1/2,-1/2,-1/2,0,-4/3,1/2,1/2,-1/(2SQRT(3))",
"smcoord": [0.500,-0.500,-0.500,0,-0.730,0.224,0.707,-0.408],
"tricoordlbl": "1/3,-1/2,-1/2,-1/(2SQRT(3)),-1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.289,-0.500,-0.707,-0.408,-0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "-1/2,0,0,1/2,-2/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0,0,0.707,-0.577,0,0.707,-0.408]
},

{
"id": 97,
"name": "71",
"color": "mygre",
"symbol": "blup",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,1/2,-1/2,1/2,-1/2,1/2",
"e8coord": [0.500,-0.500,-0.500,0.500,-0.500,0.500,-0.500,0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,-1/2,0,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,-0.500,-0.707,0,0.289,-0.707,0.408],
"smcoordlbl": "1/2,-1/2,-1/2,-1/2,1/3,1/2,-1/2,1/(2SQRT(3))",
"smcoord": [0.500,-0.500,-0.500,-0.707,0.183,0.224,-0.707,0.408],
"tricoordlbl": "1,-1/2,0,0,-1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.866,-0.500,0,0,-0.500,0.289,-0.707,0.408],
"tri2coordlbl": "-1/2,0,1/2,0,-1/3,1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0,0.707,0,-0.289,0.500,-0.707,0.408]
},

{
"id": 98,
"name": "74",
"color": "mygre",
"symbol": "blda",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,-1/2,1/2,-1/2,1/2,-1/2",
"e8coord": [-0.500,0.500,0.500,-0.500,0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,1/2,1/2,0,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,0.500,0.707,0,-0.289,0.707,-0.408],
"smcoordlbl": "-1/2,1/2,1/2,1/2,-1/3,-1/2,1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,0.500,0.500,0.707,-0.183,-0.224,0.707,-0.408],
"tricoordlbl": "-1,1/2,0,0,1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.866,0.500,0,0,0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "1/2,0,-1/2,0,1/3,-1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0,-0.707,0,0.289,-0.500,0.707,-0.408]
},

{
"id": 99,
"name": "72",
"color": "mygre",
"symbol": "bldp",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,1/2,-1/2,1/2,-1/2,1/2",
"e8coord": [-0.500,-0.500,0.500,0.500,-0.500,0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,-1/2,0,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,0.500,-0.707,0,0.289,-0.707,0.408],
"smcoordlbl": "-1/2,-1/2,1/2,-1/2,1/3,1/2,-1/2,1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,0.500,-0.707,0.183,0.224,-0.707,0.408],
"tricoordlbl": "1/3,1/2,1/2,-1/(2SQRT(3)),-1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.289,0.500,0.707,-0.408,-0.500,0.289,-0.707,0.408],
"tri2coordlbl": "1/2,0,1/2,0,-1/3,1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0,0.707,0,-0.289,0.500,-0.707,0.408]
},

{
"id": 100,
"name": "73",
"color": "mygre",
"symbol": "blua",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,-1/2,1/2,-1/2,1/2,-1/2",
"e8coord": [0.500,0.500,-0.500,-0.500,0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "1/2,1/2,-1/2,1/2,0,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,0.500,-0.500,0.707,0,-0.289,0.707,-0.408],
"smcoordlbl": "1/2,1/2,-1/2,1/2,-1/3,-1/2,1/2,-1/(2SQRT(3))",
"smcoord": [0.500,0.500,-0.500,0.707,-0.183,-0.224,0.707,-0.408],
"tricoordlbl": "-1/3,-1/2,-1/2,1/(2SQRT(3)),1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,-0.707,0.408,0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "-1/2,0,-1/2,0,1/3,-1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0,-0.707,0,0.289,-0.500,0.707,-0.408]
},

{
"id": 101,
"name": "71",
"color": "mygre",
"symbol": "brup",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,-1/2,-1/2,1/2,-1/2,1/2",
"e8coord": [0.500,0.500,-0.500,-0.500,-0.500,0.500,-0.500,0.500],
"gutcoordlbl": "1/2,1/2,-1/2,0,-1/2,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0.500,0.500,-0.500,0,-0.707,0.289,-0.707,0.408],
"smcoordlbl": "1/2,1/2,-1/2,0,-2/3,3/2,-1/2,1/(2SQRT(3))",
"smcoord": [0.500,0.500,-0.500,0,-0.365,0.671,-0.707,0.408],
"tricoordlbl": "-1/3,-1/2,-1/2,1/(2SQRT(3)),-1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,-0.707,0.408,-0.500,0.289,-0.707,0.408],
"tri2coordlbl": "-1/2,0,-1/2,0,-1/3,1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0,-0.707,0,-0.289,0.500,-0.707,0.408]
},

{
"id": 102,
"name": "74",
"color": "mygre",
"symbol": "brda",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,1/2,1/2,-1/2,1/2,-1/2",
"e8coord": [-0.500,-0.500,0.500,0.500,0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,0,1/2,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,0.500,0,0.707,-0.289,0.707,-0.408],
"smcoordlbl": "-1/2,-1/2,1/2,0,2/3,-3/2,1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,0.500,0,0.365,-0.671,0.707,-0.408],
"tricoordlbl": "1/3,1/2,1/2,-1/(2SQRT(3)),1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.289,0.500,0.707,-0.408,0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "1/2,0,1/2,0,1/3,-1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0,0.707,0,0.289,-0.500,0.707,-0.408]
},

{
"id": 103,
"name": "72",
"color": "mygre",
"symbol": "brdp",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,-1/2,-1/2,1/2,-1/2,1/2",
"e8coord": [-0.500,0.500,0.500,-0.500,-0.500,0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,1/2,1/2,0,-1/2,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,0.500,0,-0.707,0.289,-0.707,0.408],
"smcoordlbl": "-1/2,1/2,1/2,0,-2/3,3/2,-1/2,1/(2SQRT(3))",
"smcoord": [-0.500,0.500,0.500,0,-0.365,0.671,-0.707,0.408],
"tricoordlbl": "-1,1/2,0,0,-1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.866,0.500,0,0,-0.500,0.289,-0.707,0.408],
"tri2coordlbl": "1/2,0,-1/2,0,-1/3,1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0,-0.707,0,-0.289,0.500,-0.707,0.408]
},

{
"id": 104,
"name": "73",
"color": "mygre",
"symbol": "brua",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,1/2,1/2,-1/2,1/2,-1/2",
"e8coord": [0.500,-0.500,-0.500,0.500,0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,0,1/2,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,-0.500,0,0.707,-0.289,0.707,-0.408],
"smcoordlbl": "1/2,-1/2,-1/2,0,2/3,-3/2,1/2,-1/(2SQRT(3))",
"smcoord": [0.500,-0.500,-0.500,0,0.365,-0.671,0.707,-0.408],
"tricoordlbl": "1,-1/2,0,0,1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.866,-0.500,0,0,0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "-1/2,0,1/2,0,1/3,-1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0,0.707,0,0.289,-0.500,0.707,-0.408]
},

{
"id": 105,
"name": "67",
"color": "mblue",
"symbol": "blup",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,-1/2,1/2,1/2,1/2,-1/2",
"e8coord": [0.500,-0.500,-0.500,-0.500,0.500,0.500,0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,1/2,0,1/3,0,-1/SQRT(3)",
"gutcoord": [0.500,-0.500,-0.500,0.707,0,0.289,0,-0.816],
"smcoordlbl": "1/2,-1/2,-1/2,1/2,1/3,1/2,0,-1/SQRT(3)",
"smcoord": [0.500,-0.500,-0.500,0.707,0.183,0.224,0,-0.816],
"tricoordlbl": "1/3,-1/2,-1/2,-1/(2SQRT(3)),1/2,1/3,0,-1/SQRT(3)",
"tricoord": [0.289,-0.500,-0.707,-0.408,0.500,0.289,0,-0.816],
"tri2coordlbl": "-1/2,0,0,1/2,2/3,0,0,-1/SQRT(3)",
"tri2coord": [-0.707,0,0,0.707,0.577,0,0,-0.816]
},

{
"id": 106,
"name": "70",
"color": "mblue",
"symbol": "blda",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,1/2,-1/2,-1/2,-1/2,1/2",
"e8coord": [-0.500,0.500,0.500,0.500,-0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,1/2,1/2,-1/2,0,-1/3,0,1/SQRT(3)",
"gutcoord": [-0.500,0.500,0.500,-0.707,0,-0.289,0,0.816],
"smcoordlbl": "-1/2,1/2,1/2,-1/2,-1/3,-1/2,0,1/SQRT(3)",
"smcoord": [-0.500,0.500,0.500,-0.707,-0.183,-0.224,0,0.816],
"tricoordlbl": "-1/3,1/2,1/2,1/(2SQRT(3)),-1/2,-1/3,0,1/SQRT(3)",
"tricoord": [-0.289,0.500,0.707,0.408,-0.500,-0.289,0,0.816],
"tri2coordlbl": "1/2,0,0,-1/2,-2/3,0,0,1/SQRT(3)",
"tri2coord": [0.707,0,0,-0.707,-0.577,0,0,0.816]
},

{
"id": 107,
"name": "68",
"color": "mblue",
"symbol": "bldp",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,-1/2,1/2,1/2,1/2,-1/2",
"e8coord": [-0.500,-0.500,0.500,-0.500,0.500,0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,1/2,0,1/3,0,-1/SQRT(3)",
"gutcoord": [-0.500,-0.500,0.500,0.707,0,0.289,0,-0.816],
"smcoordlbl": "-1/2,-1/2,1/2,1/2,1/3,1/2,0,-1/SQRT(3)",
"smcoord": [-0.500,-0.500,0.500,0.707,0.183,0.224,0,-0.816],
"tricoordlbl": "-1/3,1/2,0,-1/SQRT(3),1/2,1/3,0,-1/SQRT(3)",
"tricoord": [-0.289,0.500,0,-0.816,0.500,0.289,0,-0.816],
"tri2coordlbl": "1/2,0,0,1/2,2/3,0,0,-1/SQRT(3)",
"tri2coord": [0.707,0,0,0.707,0.577,0,0,-0.816]
},

{
"id": 108,
"name": "69",
"color": "mblue",
"symbol": "blua",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,1/2,-1/2,-1/2,-1/2,1/2",
"e8coord": [0.500,0.500,-0.500,0.500,-0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "1/2,1/2,-1/2,-1/2,0,-1/3,0,1/SQRT(3)",
"gutcoord": [0.500,0.500,-0.500,-0.707,0,-0.289,0,0.816],
"smcoordlbl": "1/2,1/2,-1/2,-1/2,-1/3,-1/2,0,1/SQRT(3)",
"smcoord": [0.500,0.500,-0.500,-0.707,-0.183,-0.224,0,0.816],
"tricoordlbl": "1/3,-1/2,0,1/SQRT(3),-1/2,-1/3,0,1/SQRT(3)",
"tricoord": [0.289,-0.500,0,0.816,-0.500,-0.289,0,0.816],
"tri2coordlbl": "-1/2,0,0,-1/2,-2/3,0,0,1/SQRT(3)",
"tri2coord": [-0.707,0,0,-0.707,-0.577,0,0,0.816]
},

{
"id": 109,
"name": "67",
"color": "mblue",
"symbol": "brup",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,1/2,1/2,1/2,1/2,-1/2",
"e8coord": [0.500,0.500,-0.500,0.500,0.500,0.500,0.500,-0.500],
"gutcoordlbl": "1/2,1/2,-1/2,0,1/2,1/3,0,-1/SQRT(3)",
"gutcoord": [0.500,0.500,-0.500,0,0.707,0.289,0,-0.816],
"smcoordlbl": "1/2,1/2,-1/2,0,4/3,-1/2,0,-1/SQRT(3)",
"smcoord": [0.500,0.500,-0.500,0,0.730,-0.224,0,-0.816],
"tricoordlbl": "1/3,-1/2,0,1/SQRT(3),1/2,1/3,0,-1/SQRT(3)",
"tricoord": [0.289,-0.500,0,0.816,0.500,0.289,0,-0.816],
"tri2coordlbl": "-1/2,0,0,-1/2,2/3,0,0,-1/SQRT(3)",
"tri2coord": [-0.707,0,0,-0.707,0.577,0,0,-0.816]
},

{
"id": 110,
"name": "70",
"color": "mblue",
"symbol": "brda",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,-1/2,-1/2,-1/2,-1/2,1/2",
"e8coord": [-0.500,-0.500,0.500,-0.500,-0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,0,-1/2,-1/3,0,1/SQRT(3)",
"gutcoord": [-0.500,-0.500,0.500,0,-0.707,-0.289,0,0.816],
"smcoordlbl": "-1/2,-1/2,1/2,0,-4/3,1/2,0,1/SQRT(3)",
"smcoord": [-0.500,-0.500,0.500,0,-0.730,0.224,0,0.816],
"tricoordlbl": "-1/3,1/2,0,-1/SQRT(3),-1/2,-1/3,0,1/SQRT(3)",
"tricoord": [-0.289,0.500,0,-0.816,-0.500,-0.289,0,0.816],
"tri2coordlbl": "1/2,0,0,1/2,-2/3,0,0,1/SQRT(3)",
"tri2coord": [0.707,0,0,0.707,-0.577,0,0,0.816]
},

{
"id": 111,
"name": "68",
"color": "mblue",
"symbol": "brdp",
"label": "up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,1/2,1/2,1/2,1/2,-1/2",
"e8coord": [-0.500,0.500,0.500,0.500,0.500,0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,1/2,0,1/2,1/3,0,-1/SQRT(3)",
"gutcoord": [-0.500,0.500,0.500,0,0.707,0.289,0,-0.816],
"smcoordlbl": "-1/2,1/2,1/2,0,4/3,-1/2,0,-1/SQRT(3)",
"smcoord": [-0.500,0.500,0.500,0,0.730,-0.224,0,-0.816],
"tricoordlbl": "-1/3,1/2,1/2,1/(2SQRT(3)),1/2,1/3,0,-1/SQRT(3)",
"tricoord": [-0.289,0.500,0.707,0.408,0.500,0.289,0,-0.816],
"tri2coordlbl": "1/2,0,0,-1/2,2/3,0,0,-1/SQRT(3)",
"tri2coord": [0.707,0,0,-0.707,0.577,0,0,-0.816]
},

{
"id": 112,
"name": "69",
"color": "mblue",
"symbol": "brua",
"label": "anti-up quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,-1/2,-1/2,-1/2,-1/2,1/2",
"e8coord": [0.500,-0.500,-0.500,-0.500,-0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,0,-1/2,-1/3,0,1/SQRT(3)",
"gutcoord": [0.500,-0.500,-0.500,0,-0.707,-0.289,0,0.816],
"smcoordlbl": "1/2,-1/2,-1/2,0,-4/3,1/2,0,1/SQRT(3)",
"smcoord": [0.500,-0.500,-0.500,0,-0.730,0.224,0,0.816],
"tricoordlbl": "1/3,-1/2,-1/2,-1/(2SQRT(3)),-1/2,-1/3,0,1/SQRT(3)",
"tricoord": [0.289,-0.500,-0.707,-0.408,-0.500,-0.289,0,0.816],
"tri2coordlbl": "-1/2,0,0,1/2,-2/3,0,0,1/SQRT(3)",
"tri2coord": [-0.707,0,0,0.707,-0.577,0,0,0.816]
},

{
"id": 113,
"name": "71",
"color": "mbvio",
"symbol": "blup",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,1/2,-1/2,1/2,1/2,-1/2",
"e8coord": [0.500,-0.500,-0.500,0.500,-0.500,0.500,0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,-1/2,0,1/3,0,-1/SQRT(3)",
"gutcoord": [0.500,-0.500,-0.500,-0.707,0,0.289,0,-0.816],
"smcoordlbl": "1/2,-1/2,-1/2,-1/2,1/3,1/2,0,-1/SQRT(3)",
"smcoord": [0.500,-0.500,-0.500,-0.707,0.183,0.224,0,-0.816],
"tricoordlbl": "1,-1/2,0,0,-1/2,1/3,0,-1/SQRT(3)",
"tricoord": [0.866,-0.500,0,0,-0.500,0.289,0,-0.816],
"tri2coordlbl": "-1/2,0,1/2,0,-1/3,1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [-0.707,0,0.707,0,-0.289,0.500,0,-0.816]
},

{
"id": 114,
"name": "74",
"color": "mbvio",
"symbol": "blda",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,-1/2,1/2,-1/2,-1/2,1/2",
"e8coord": [-0.500,0.500,0.500,-0.500,0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,1/2,1/2,1/2,0,-1/3,0,1/SQRT(3)",
"gutcoord": [-0.500,0.500,0.500,0.707,0,-0.289,0,0.816],
"smcoordlbl": "-1/2,1/2,1/2,1/2,-1/3,-1/2,0,1/SQRT(3)",
"smcoord": [-0.500,0.500,0.500,0.707,-0.183,-0.224,0,0.816],
"tricoordlbl": "-1,1/2,0,0,1/2,-1/3,0,1/SQRT(3)",
"tricoord": [-0.866,0.500,0,0,0.500,-0.289,0,0.816],
"tri2coordlbl": "1/2,0,-1/2,0,1/3,-1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0.707,0,-0.707,0,0.289,-0.500,0,0.816]
},

{
"id": 115,
"name": "72",
"color": "mbvio",
"symbol": "bldp",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,1/2,-1/2,1/2,1/2,-1/2",
"e8coord": [-0.500,-0.500,0.500,0.500,-0.500,0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,-1/2,0,1/3,0,-1/SQRT(3)",
"gutcoord": [-0.500,-0.500,0.500,-0.707,0,0.289,0,-0.816],
"smcoordlbl": "-1/2,-1/2,1/2,-1/2,1/3,1/2,0,-1/SQRT(3)",
"smcoord": [-0.500,-0.500,0.500,-0.707,0.183,0.224,0,-0.816],
"tricoordlbl": "1/3,1/2,1/2,-1/(2SQRT(3)),-1/2,1/3,0,-1/SQRT(3)",
"tricoord": [0.289,0.500,0.707,-0.408,-0.500,0.289,0,-0.816],
"tri2coordlbl": "1/2,0,1/2,0,-1/3,1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0.707,0,0.707,0,-0.289,0.500,0,-0.816]
},

{
"id": 116,
"name": "73",
"color": "mbvio",
"symbol": "blua",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,-1/2,1/2,-1/2,-1/2,1/2",
"e8coord": [0.500,0.500,-0.500,-0.500,0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "1/2,1/2,-1/2,1/2,0,-1/3,0,1/SQRT(3)",
"gutcoord": [0.500,0.500,-0.500,0.707,0,-0.289,0,0.816],
"smcoordlbl": "1/2,1/2,-1/2,1/2,-1/3,-1/2,0,1/SQRT(3)",
"smcoord": [0.500,0.500,-0.500,0.707,-0.183,-0.224,0,0.816],
"tricoordlbl": "-1/3,-1/2,-1/2,1/(2SQRT(3)),1/2,-1/3,0,1/SQRT(3)",
"tricoord": [-0.289,-0.500,-0.707,0.408,0.500,-0.289,0,0.816],
"tri2coordlbl": "-1/2,0,-1/2,0,1/3,-1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [-0.707,0,-0.707,0,0.289,-0.500,0,0.816]
},

{
"id": 117,
"name": "71",
"color": "mbvio",
"symbol": "brup",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,-1/2,-1/2,-1/2,1/2,1/2,-1/2",
"e8coord": [0.500,0.500,-0.500,-0.500,-0.500,0.500,0.500,-0.500],
"gutcoordlbl": "1/2,1/2,-1/2,0,-1/2,1/3,0,-1/SQRT(3)",
"gutcoord": [0.500,0.500,-0.500,0,-0.707,0.289,0,-0.816],
"smcoordlbl": "1/2,1/2,-1/2,0,-2/3,3/2,0,-1/SQRT(3)",
"smcoord": [0.500,0.500,-0.500,0,-0.365,0.671,0,-0.816],
"tricoordlbl": "-1/3,-1/2,-1/2,1/(2SQRT(3)),-1/2,1/3,0,-1/SQRT(3)",
"tricoord": [-0.289,-0.500,-0.707,0.408,-0.500,0.289,0,-0.816],
"tri2coordlbl": "-1/2,0,-1/2,0,-1/3,1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [-0.707,0,-0.707,0,-0.289,0.500,0,-0.816]
},

{
"id": 118,
"name": "74",
"color": "mbvio",
"symbol": "brda",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,1/2,1/2,1/2,-1/2,-1/2,1/2",
"e8coord": [-0.500,-0.500,0.500,0.500,0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,1/2,0,1/2,-1/3,0,1/SQRT(3)",
"gutcoord": [-0.500,-0.500,0.500,0,0.707,-0.289,0,0.816],
"smcoordlbl": "-1/2,-1/2,1/2,0,2/3,-3/2,0,1/SQRT(3)",
"smcoord": [-0.500,-0.500,0.500,0,0.365,-0.671,0,0.816],
"tricoordlbl": "1/3,1/2,1/2,-1/(2SQRT(3)),1/2,-1/3,0,1/SQRT(3)",
"tricoord": [0.289,0.500,0.707,-0.408,0.500,-0.289,0,0.816],
"tri2coordlbl": "1/2,0,1/2,0,1/3,-1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0.707,0,0.707,0,0.289,-0.500,0,0.816]
},

{
"id": 119,
"name": "72",
"color": "mbvio",
"symbol": "brdp",
"label": "down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,1/2,-1/2,-1/2,1/2,1/2,-1/2",
"e8coord": [-0.500,0.500,0.500,-0.500,-0.500,0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,1/2,0,-1/2,1/3,0,-1/SQRT(3)",
"gutcoord": [-0.500,0.500,0.500,0,-0.707,0.289,0,-0.816],
"smcoordlbl": "-1/2,1/2,1/2,0,-2/3,3/2,0,-1/SQRT(3)",
"smcoord": [-0.500,0.500,0.500,0,-0.365,0.671,0,-0.816],
"tricoordlbl": "-1,1/2,0,0,-1/2,1/3,0,-1/SQRT(3)",
"tricoord": [-0.866,0.500,0,0,-0.500,0.289,0,-0.816],
"tri2coordlbl": "1/2,0,-1/2,0,-1/3,1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0.707,0,-0.707,0,-0.289,0.500,0,-0.816]
},

{
"id": 120,
"name": "73",
"color": "mbvio",
"symbol": "brua",
"label": "anti-down quark",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,-1/2,1/2,1/2,-1/2,-1/2,1/2",
"e8coord": [0.500,-0.500,-0.500,0.500,0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "1/2,-1/2,-1/2,0,1/2,-1/3,0,1/SQRT(3)",
"gutcoord": [0.500,-0.500,-0.500,0,0.707,-0.289,0,0.816],
"smcoordlbl": "1/2,-1/2,-1/2,0,2/3,-3/2,0,1/SQRT(3)",
"smcoord": [0.500,-0.500,-0.500,0,0.365,-0.671,0,0.816],
"tricoordlbl": "1,-1/2,0,0,1/2,-1/3,0,1/SQRT(3)",
"tricoord": [0.866,-0.500,0,0,0.500,-0.289,0,0.816],
"tri2coordlbl": "-1/2,0,1/2,0,1/3,-1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [-0.707,0,0.707,0,0.289,-0.500,0,0.816]
},

{
"id": 121,
"name": "121",
"color": "lgray",
"symbol": "mlup",
"label": "muon neutrino",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,-1,-1,0,0,0",
"e8coord": [0,0,0,-1.00,-1.00,0,0,0],
"gutcoordlbl": "0,0,0,0,-1,0,0,0",
"gutcoord": [0,0,0,0,-1.41,0,0,0],
"smcoordlbl": "0,0,0,0,-2,2,0,0",
"smcoord": [0,0,0,0,-1.10,0.894,0,0],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),-1,0,0,0",
"tricoord": [-0.577,0,-0.707,-0.408,-1.00,0,0,0],
"tri2coordlbl": "0,0,-1/2,1/2,-1,1/SQRT(3),0,0",
"tri2coord": [0,0,-0.707,0.707,-0.866,0.500,0,0]
},

{
"id": 122,
"name": "136",
"color": "lgray",
"symbol": "mlda",
"label": "muon anti-neutrino",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,1,1,0,0,0",
"e8coord": [0,0,0,1.00,1.00,0,0,0],
"gutcoordlbl": "0,0,0,0,1,0,0,0",
"gutcoord": [0,0,0,0,1.41,0,0,0],
"smcoordlbl": "0,0,0,0,2,-2,0,0",
"smcoord": [0,0,0,0,1.10,-0.894,0,0],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),1,0,0,0",
"tricoord": [0.577,0,0.707,0.408,1.00,0,0,0],
"tri2coordlbl": "0,0,1/2,-1/2,1,-1/SQRT(3),0,0",
"tri2coord": [0,0,0.707,-0.707,0.866,-0.500,0,0]
},

{
"id": 123,
"name": "122",
"color": "lgray",
"symbol": "mldp",
"label": "muon neutrino",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,0,0,-1,0,0,0",
"e8coord": [0,-1.00,0,0,-1.00,0,0,0],
"gutcoordlbl": "0,-1,0,-1/2,-1/2,0,0,0",
"gutcoord": [0,-1.00,0,-0.707,-0.707,0,0,0],
"smcoordlbl": "0,-1,0,-1/2,-1,1,0,0",
"smcoord": [0,-1.00,0,-0.707,-0.548,0.447,0,0],
"tricoordlbl": "2/3,0,0,-1/SQRT(3),-1,0,0,0",
"tricoord": [0.577,0,0,-0.816,-1.00,0,0,0],
"tri2coordlbl": "0,0,1/2,1/2,-1,1/SQRT(3),0,0",
"tri2coord": [0,0,0.707,0.707,-0.866,0.500,0,0]
},

{
"id": 124,
"name": "135",
"color": "lgray",
"symbol": "mlua",
"label": "muon anti-neutrino",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,0,0,1,0,0,0",
"e8coord": [0,1.00,0,0,1.00,0,0,0],
"gutcoordlbl": "0,1,0,1/2,1/2,0,0,0",
"gutcoord": [0,1.00,0,0.707,0.707,0,0,0],
"smcoordlbl": "0,1,0,1/2,1,-1,0,0",
"smcoord": [0,1.00,0,0.707,0.548,-0.447,0,0],
"tricoordlbl": "-2/3,0,0,1/SQRT(3),1,0,0,0",
"tricoord": [-0.577,0,0,0.816,1.00,0,0,0],
"tri2coordlbl": "0,0,-1/2,-1/2,1,-1/SQRT(3),0,0",
"tri2coord": [0,0,-0.707,-0.707,0.866,-0.500,0,0]
},

{
"id": 125,
"name": "123",
"color": "myell",
"symbol": "mlup",
"label": "muon",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,-1/2,-1/2,1/2,1/2,1/2",
"e8coord": [-0.500,0.500,-0.500,-0.500,-0.500,0.500,0.500,0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,0,-1/2,1,0,0",
"gutcoord": [-0.500,0.500,-0.500,0,-0.707,0.866,0,0],
"smcoordlbl": "-1/2,1/2,-1/2,0,0,5/2,0,0",
"smcoord": [-0.500,0.500,-0.500,0,0,1.12,0,0],
"tricoordlbl": "-1,-1/2,0,0,-1/2,1,0,0",
"tricoord": [-0.866,-0.500,0,0,-0.500,0.866,0,0],
"tri2coordlbl": "0,1/2,-1/2,0,0,2/SQRT(3),0,0",
"tri2coord": [0,0.707,-0.707,0,0,1.00,0,0]
},

{
"id": 126,
"name": "126",
"color": "myell",
"symbol": "mlda",
"label": "anti-muon",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,1/2,1/2,-1/2,-1/2,-1/2",
"e8coord": [0.500,-0.500,0.500,0.500,0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,1/2,0,1/2,-1,0,0",
"gutcoord": [0.500,-0.500,0.500,0,0.707,-0.866,0,0],
"smcoordlbl": "1/2,-1/2,1/2,0,0,-5/2,0,0",
"smcoord": [0.500,-0.500,0.500,0,0,-1.12,0,0],
"tricoordlbl": "1,1/2,0,0,1/2,-1,0,0",
"tricoord": [0.866,0.500,0,0,0.500,-0.866,0,0],
"tri2coordlbl": "0,-1/2,1/2,0,0,-2/SQRT(3),0,0",
"tri2coord": [0,-0.707,0.707,0,0,-1.00,0,0]
},

{
"id": 127,
"name": "124",
"color": "myell",
"symbol": "mldp",
"label": "muon",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,1/2,-1/2,1/2,1/2,1/2",
"e8coord": [-0.500,-0.500,-0.500,0.500,-0.500,0.500,0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,-1/2,0,1,0,0",
"gutcoord": [-0.500,-0.500,-0.500,-0.707,0,0.866,0,0],
"smcoordlbl": "-1/2,-1/2,-1/2,-1/2,1,3/2,0,0",
"smcoord": [-0.500,-0.500,-0.500,-0.707,0.548,0.671,0,0],
"tricoordlbl": "1/3,-1/2,1/2,-1/(2SQRT(3)),-1/2,1,0,0",
"tricoord": [0.289,-0.500,0.707,-0.408,-0.500,0.866,0,0],
"tri2coordlbl": "0,1/2,1/2,0,0,2/SQRT(3),0,0",
"tri2coord": [0,0.707,0.707,0,0,1.00,0,0]
},

{
"id": 128,
"name": "125",
"color": "myell",
"symbol": "mlua",
"label": "anti-muon",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,-1/2,1/2,-1/2,-1/2,-1/2",
"e8coord": [0.500,0.500,0.500,-0.500,0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,1/2,1/2,1/2,0,-1,0,0",
"gutcoord": [0.500,0.500,0.500,0.707,0,-0.866,0,0],
"smcoordlbl": "1/2,1/2,1/2,1/2,-1,-3/2,0,0",
"smcoord": [0.500,0.500,0.500,0.707,-0.548,-0.671,0,0],
"tricoordlbl": "-1/3,1/2,-1/2,1/(2SQRT(3)),1/2,-1,0,0",
"tricoord": [-0.289,0.500,-0.707,0.408,0.500,-0.866,0,0],
"tri2coordlbl": "0,-1/2,-1/2,0,0,-2/SQRT(3),0,0",
"tri2coord": [0,-0.707,-0.707,0,0,-1.00,0,0]
},

{
"id": 129,
"name": "123",
"color": "myell",
"symbol": "mrup",
"label": "muon",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,-1/2,-1/2,1/2,1/2,1/2",
"e8coord": [0.500,0.500,0.500,-0.500,-0.500,0.500,0.500,0.500],
"gutcoordlbl": "1/2,1/2,1/2,0,-1/2,1,0,0",
"gutcoord": [0.500,0.500,0.500,0,-0.707,0.866,0,0],
"smcoordlbl": "1/2,1/2,1/2,0,0,5/2,0,0",
"smcoord": [0.500,0.500,0.500,0,0,1.12,0,0],
"tricoordlbl": "-1/3,1/2,-1/2,1/(2SQRT(3)),-1/2,1,0,0",
"tricoord": [-0.289,0.500,-0.707,0.408,-0.500,0.866,0,0],
"tri2coordlbl": "0,-1/2,-1/2,0,0,2/SQRT(3),0,0",
"tri2coord": [0,-0.707,-0.707,0,0,1.00,0,0]
},

{
"id": 130,
"name": "126",
"color": "myell",
"symbol": "mrda",
"label": "anti-muon",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,1/2,1/2,-1/2,-1/2,-1/2",
"e8coord": [-0.500,-0.500,-0.500,0.500,0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,0,1/2,-1,0,0",
"gutcoord": [-0.500,-0.500,-0.500,0,0.707,-0.866,0,0],
"smcoordlbl": "-1/2,-1/2,-1/2,0,0,-5/2,0,0",
"smcoord": [-0.500,-0.500,-0.500,0,0,-1.12,0,0],
"tricoordlbl": "1/3,-1/2,1/2,-1/(2SQRT(3)),1/2,-1,0,0",
"tricoord": [0.289,-0.500,0.707,-0.408,0.500,-0.866,0,0],
"tri2coordlbl": "0,1/2,1/2,0,0,-2/SQRT(3),0,0",
"tri2coord": [0,0.707,0.707,0,0,-1.00,0,0]
},

{
"id": 131,
"name": "124",
"color": "myell",
"symbol": "mrdp",
"label": "muon",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,1/2,-1/2,1/2,1/2,1/2",
"e8coord": [0.500,-0.500,0.500,0.500,-0.500,0.500,0.500,0.500],
"gutcoordlbl": "1/2,-1/2,1/2,-1/2,0,1,0,0",
"gutcoord": [0.500,-0.500,0.500,-0.707,0,0.866,0,0],
"smcoordlbl": "1/2,-1/2,1/2,-1/2,1,3/2,0,0",
"smcoord": [0.500,-0.500,0.500,-0.707,0.548,0.671,0,0],
"tricoordlbl": "1,1/2,0,0,-1/2,1,0,0",
"tricoord": [0.866,0.500,0,0,-0.500,0.866,0,0],
"tri2coordlbl": "0,-1/2,1/2,0,0,2/SQRT(3),0,0",
"tri2coord": [0,-0.707,0.707,0,0,1.00,0,0]
},

{
"id": 132,
"name": "125",
"color": "myell",
"symbol": "mrua",
"label": "anti-muon",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,-1/2,1/2,-1/2,-1/2,-1/2",
"e8coord": [-0.500,0.500,-0.500,-0.500,0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,1/2,0,-1,0,0",
"gutcoord": [-0.500,0.500,-0.500,0.707,0,-0.866,0,0],
"smcoordlbl": "-1/2,1/2,-1/2,1/2,-1,-3/2,0,0",
"smcoord": [-0.500,0.500,-0.500,0.707,-0.548,-0.671,0,0],
"tricoordlbl": "-1,-1/2,0,0,1/2,-1,0,0",
"tricoord": [-0.866,-0.500,0,0,0.500,-0.866,0,0],
"tri2coordlbl": "0,1/2,-1/2,0,0,-2/SQRT(3),0,0",
"tri2coord": [0,0.707,-0.707,0,0,-1.00,0,0]
},

{
"id": 133,
"name": "127",
"color": "mred",
"symbol": "mlup",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,-1,0,-1,0,0",
"e8coord": [0,0,0,-1.00,0,-1.00,0,0],
"gutcoordlbl": "0,0,0,1/2,-1/2,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,-0.707,-0.577,0.707,0.408],
"smcoordlbl": "0,0,0,1/2,-5/3,0,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,-0.913,0,0.707,0.408],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.577,0,-0.707,-0.408,0,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,-1/2,1/2,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,0.707,-0.289,-0.500,0.707,0.408]
},

{
"id": 134,
"name": "130",
"color": "mred",
"symbol": "mlda",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,1,0,1,0,0",
"e8coord": [0,0,0,1.00,0,1.00,0,0],
"gutcoordlbl": "0,0,0,-1/2,1/2,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,0.707,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,0,-1/2,5/3,0,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,0.913,0,-0.707,-0.408],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.577,0,0.707,0.408,0,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,1/2,-1/2,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0.707,-0.707,0.289,0.500,-0.707,-0.408]
},

{
"id": 135,
"name": "128",
"color": "mred",
"symbol": "mldp",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,0,0,0,-1,0,0",
"e8coord": [0,-1.00,0,0,0,-1.00,0,0],
"gutcoordlbl": "0,-1,0,0,0,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,-1.00,0,0,0,-0.577,0.707,0.408],
"smcoordlbl": "0,-1,0,0,-2/3,-1,1/2,1/(2SQRT(3))",
"smcoord": [0,-1.00,0,0,-0.365,-0.447,0.707,0.408],
"tricoordlbl": "2/3,0,0,-1/SQRT(3),0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0.577,0,0,-0.816,0,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,1/2,1/2,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0.707,0.707,-0.289,-0.500,0.707,0.408]
},

{
"id": 136,
"name": "129",
"color": "mred",
"symbol": "mlua",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,0,0,0,1,0,0",
"e8coord": [0,1.00,0,0,0,1.00,0,0],
"gutcoordlbl": "0,1,0,0,0,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,1.00,0,0,0,0.577,-0.707,-0.408],
"smcoordlbl": "0,1,0,0,2/3,1,-1/2,-1/(2SQRT(3))",
"smcoord": [0,1.00,0,0,0.365,0.447,-0.707,-0.408],
"tricoordlbl": "-2/3,0,0,1/SQRT(3),0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.577,0,0,0.816,0,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,-1/2,-1/2,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,-0.707,0.289,0.500,-0.707,-0.408]
},

{
"id": 137,
"name": "127",
"color": "mred",
"symbol": "mrup",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,0,0,0,-1,0,0",
"e8coord": [0,1.00,0,0,0,-1.00,0,0],
"gutcoordlbl": "0,1,0,0,0,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,1.00,0,0,0,-0.577,0.707,0.408],
"smcoordlbl": "0,1,0,0,-2/3,-1,1/2,1/(2SQRT(3))",
"smcoord": [0,1.00,0,0,-0.365,-0.447,0.707,0.408],
"tricoordlbl": "-2/3,0,0,1/SQRT(3),0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.577,0,0,0.816,0,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,-1/2,-1/2,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,-0.707,-0.289,-0.500,0.707,0.408]
},

{
"id": 138,
"name": "130",
"color": "mred",
"symbol": "mrda",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,0,0,0,1,0,0",
"e8coord": [0,-1.00,0,0,0,1.00,0,0],
"gutcoordlbl": "0,-1,0,0,0,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,-1.00,0,0,0,0.577,-0.707,-0.408],
"smcoordlbl": "0,-1,0,0,2/3,1,-1/2,-1/(2SQRT(3))",
"smcoord": [0,-1.00,0,0,0.365,0.447,-0.707,-0.408],
"tricoordlbl": "2/3,0,0,-1/SQRT(3),0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.577,0,0,-0.816,0,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,1/2,1/2,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0.707,0.707,0.289,0.500,-0.707,-0.408]
},

{
"id": 139,
"name": "128",
"color": "mred",
"symbol": "mrdp",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,1,0,-1,0,0",
"e8coord": [0,0,0,1.00,0,-1.00,0,0],
"gutcoordlbl": "0,0,0,-1/2,1/2,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,0.707,-0.577,0.707,0.408],
"smcoordlbl": "0,0,0,-1/2,1/3,-2,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,0.183,-0.894,0.707,0.408],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0.577,0,0.707,0.408,0,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,1/2,-1/2,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0.707,-0.707,-0.289,-0.500,0.707,0.408]
},

{
"id": 140,
"name": "139",
"color": "mred",
"symbol": "mrua",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,-1,0,1,0,0",
"e8coord": [0,0,0,-1.00,0,1.00,0,0],
"gutcoordlbl": "0,0,0,1/2,-1/2,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,-0.707,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,0,1/2,-1/3,2,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,-0.183,0.894,-0.707,-0.408],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.577,0,-0.707,-0.408,0,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,-1/2,1/2,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,0.707,0.289,0.500,-0.707,-0.408]
},

{
"id": 141,
"name": "131",
"color": "mrora",
"symbol": "mlup",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,-1/2,1/2,-1/2,1/2,1/2",
"e8coord": [-0.500,0.500,-0.500,-0.500,0.500,-0.500,0.500,0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,1/2,0,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,-0.500,0.707,0,0.289,0.707,0.408],
"smcoordlbl": "-1/2,1/2,-1/2,1/2,1/3,1/2,1/2,1/(2SQRT(3))",
"smcoord": [-0.500,0.500,-0.500,0.707,0.183,0.224,0.707,0.408],
"tricoordlbl": "-1,-1/2,0,0,1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.866,-0.500,0,0,0.500,0.289,0.707,0.408],
"tri2coordlbl": "0,1/2,-1/2,0,2/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [0,0.707,-0.707,0,0.577,0,0.707,0.408]
},

{
"id": 142,
"name": "134",
"color": "mrora",
"symbol": "mlda",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,1/2,-1/2,1/2,-1/2,-1/2",
"e8coord": [0.500,-0.500,0.500,0.500,-0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,1/2,-1/2,0,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,0.500,-0.707,0,-0.289,-0.707,-0.408],
"smcoordlbl": "1/2,-1/2,1/2,-1/2,-1/3,-1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [0.500,-0.500,0.500,-0.707,-0.183,-0.224,-0.707,-0.408],
"tricoordlbl": "1,1/2,0,0,-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.866,0.500,0,0,-0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "0,-1/2,1/2,0,-2/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [0,-0.707,0.707,0,-0.577,0,-0.707,-0.408]
},

{
"id": 143,
"name": "132",
"color": "mrora",
"symbol": "mldp",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,1/2,1/2,-1/2,1/2,1/2",
"e8coord": [-0.500,-0.500,-0.500,0.500,0.500,-0.500,0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,0,1/2,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,-0.500,0,0.707,0.289,0.707,0.408],
"smcoordlbl": "-1/2,-1/2,-1/2,0,4/3,-1/2,1/2,1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,-0.500,0,0.730,-0.224,0.707,0.408],
"tricoordlbl": "1/3,-1/2,1/2,-1/(2SQRT(3)),1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [0.289,-0.500,0.707,-0.408,0.500,0.289,0.707,0.408],
"tri2coordlbl": "0,1/2,1/2,0,2/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [0,0.707,0.707,0,0.577,0,0.707,0.408]
},

{
"id": 144,
"name": "133",
"color": "mrora",
"symbol": "mlua",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,-1/2,-1/2,1/2,-1/2,-1/2",
"e8coord": [0.500,0.500,0.500,-0.500,-0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,1/2,1/2,0,-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,0.500,0.500,0,-0.707,-0.289,-0.707,-0.408],
"smcoordlbl": "1/2,1/2,1/2,0,-4/3,1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [0.500,0.500,0.500,0,-0.730,0.224,-0.707,-0.408],
"tricoordlbl": "-1/3,1/2,-1/2,1/(2SQRT(3)),-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,0.500,-0.707,0.408,-0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "0,-1/2,-1/2,0,-2/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [0,-0.707,-0.707,0,-0.577,0,-0.707,-0.408]
},

{
"id": 145,
"name": "131",
"color": "mrora",
"symbol": "mrup",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,-1/2,1/2,-1/2,1/2,1/2",
"e8coord": [0.500,0.500,0.500,-0.500,0.500,-0.500,0.500,0.500],
"gutcoordlbl": "1/2,1/2,1/2,1/2,0,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [0.500,0.500,0.500,0.707,0,0.289,0.707,0.408],
"smcoordlbl": "1/2,1/2,1/2,1/2,1/3,1/2,1/2,1/(2SQRT(3))",
"smcoord": [0.500,0.500,0.500,0.707,0.183,0.224,0.707,0.408],
"tricoordlbl": "-1/3,1/2,-1/2,1/(2SQRT(3)),1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.289,0.500,-0.707,0.408,0.500,0.289,0.707,0.408],
"tri2coordlbl": "0,-1/2,-1/2,0,2/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [0,-0.707,-0.707,0,0.577,0,0.707,0.408]
},

{
"id": 146,
"name": "134",
"color": "mrora",
"symbol": "mrda",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,1/2,-1/2,1/2,-1/2,-1/2",
"e8coord": [-0.500,-0.500,-0.500,0.500,-0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,-1/2,0,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,-0.500,-0.707,0,-0.289,-0.707,-0.408],
"smcoordlbl": "-1/2,-1/2,-1/2,-1/2,-1/3,-1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,-0.500,-0.707,-0.183,-0.224,-0.707,-0.408],
"tricoordlbl": "1/3,-1/2,1/2,-1/(2SQRT(3)),-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.289,-0.500,0.707,-0.408,-0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "0,1/2,1/2,0,-2/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0.707,0.707,0,-0.577,0,-0.707,-0.408]
},

{
"id": 147,
"name": "132",
"color": "mrora",
"symbol": "mrdp",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,1/2,1/2,-1/2,1/2,1/2",
"e8coord": [0.500,-0.500,0.500,0.500,0.500,-0.500,0.500,0.500],
"gutcoordlbl": "1/2,-1/2,1/2,0,1/2,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,0.500,0,0.707,0.289,0.707,0.408],
"smcoordlbl": "1/2,-1/2,1/2,0,4/3,-1/2,1/2,1/(2SQRT(3))",
"smcoord": [0.500,-0.500,0.500,0,0.730,-0.224,0.707,0.408],
"tricoordlbl": "1,1/2,0,0,1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [0.866,0.500,0,0,0.500,0.289,0.707,0.408],
"tri2coordlbl": "0,-1/2,1/2,0,2/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [0,-0.707,0.707,0,0.577,0,0.707,0.408]
},

{
"id": 148,
"name": "133",
"color": "mrora",
"symbol": "mrua",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,-1/2,-1/2,1/2,-1/2,-1/2",
"e8coord": [-0.500,0.500,-0.500,-0.500,-0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,0,-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,-0.500,0,-0.707,-0.289,-0.707,-0.408],
"smcoordlbl": "-1/2,1/2,-1/2,0,-4/3,1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,0.500,-0.500,0,-0.730,0.224,-0.707,-0.408],
"tricoordlbl": "-1,-1/2,0,0,-1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.866,-0.500,0,0,-0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "0,1/2,-1/2,0,-2/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0.707,-0.707,0,-0.577,0,-0.707,-0.408]
},

{
"id": 149,
"name": "127",
"color": "mgree",
"symbol": "mlup",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,-1,0,0,-1,0",
"e8coord": [0,0,0,-1.00,0,0,-1.00,0],
"gutcoordlbl": "0,0,0,1/2,-1/2,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,-0.707,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,0,1/2,-5/3,0,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,-0.913,0,-0.707,0.408],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.577,0,-0.707,-0.408,0,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,-1/2,1/2,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,0.707,-0.289,-0.500,-0.707,0.408]
},

{
"id": 150,
"name": "130",
"color": "mgree",
"symbol": "mlda",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,1,0,0,1,0",
"e8coord": [0,0,0,1.00,0,0,1.00,0],
"gutcoordlbl": "0,0,0,-1/2,1/2,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,0.707,0.577,0.707,-0.408],
"smcoordlbl": "0,0,0,-1/2,5/3,0,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,0.913,0,0.707,-0.408],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.577,0,0.707,0.408,0,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,1/2,-1/2,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0.707,-0.707,0.289,0.500,0.707,-0.408]
},

{
"id": 151,
"name": "128",
"color": "mgree",
"symbol": "mldp",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,0,0,0,0,-1,0",
"e8coord": [0,-1.00,0,0,0,0,-1.00,0],
"gutcoordlbl": "0,-1,0,0,0,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,-1.00,0,0,0,-0.577,-0.707,0.408],
"smcoordlbl": "0,-1,0,0,-2/3,-1,-1/2,1/(2SQRT(3))",
"smcoord": [0,-1.00,0,0,-0.365,-0.447,-0.707,0.408],
"tricoordlbl": "2/3,0,0,-1/SQRT(3),0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.577,0,0,-0.816,0,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,1/2,1/2,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0.707,0.707,-0.289,-0.500,-0.707,0.408]
},

{
"id": 152,
"name": "129",
"color": "mgree",
"symbol": "mlua",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,0,0,0,0,1,0",
"e8coord": [0,1.00,0,0,0,0,1.00,0],
"gutcoordlbl": "0,1,0,0,0,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,1.00,0,0,0,0.577,0.707,-0.408],
"smcoordlbl": "0,1,0,0,2/3,1,1/2,-1/(2SQRT(3))",
"smcoord": [0,1.00,0,0,0.365,0.447,0.707,-0.408],
"tricoordlbl": "-2/3,0,0,1/SQRT(3),0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.577,0,0,0.816,0,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,-1/2,-1/2,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,-0.707,0.289,0.500,0.707,-0.408]
},

{
"id": 153,
"name": "127",
"color": "mgree",
"symbol": "mrup",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,0,0,0,0,-1,0",
"e8coord": [0,1.00,0,0,0,0,-1.00,0],
"gutcoordlbl": "0,1,0,0,0,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,1.00,0,0,0,-0.577,-0.707,0.408],
"smcoordlbl": "0,1,0,0,-2/3,-1,-1/2,1/(2SQRT(3))",
"smcoord": [0,1.00,0,0,-0.365,-0.447,-0.707,0.408],
"tricoordlbl": "-2/3,0,0,1/SQRT(3),0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.577,0,0,0.816,0,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,-1/2,-1/2,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,-0.707,-0.289,-0.500,-0.707,0.408]
},

{
"id": 154,
"name": "130",
"color": "mgree",
"symbol": "mrda",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,0,0,0,0,1,0",
"e8coord": [0,-1.00,0,0,0,0,1.00,0],
"gutcoordlbl": "0,-1,0,0,0,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,-1.00,0,0,0,0.577,0.707,-0.408],
"smcoordlbl": "0,-1,0,0,2/3,1,1/2,-1/(2SQRT(3))",
"smcoord": [0,-1.00,0,0,0.365,0.447,0.707,-0.408],
"tricoordlbl": "2/3,0,0,-1/SQRT(3),0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.577,0,0,-0.816,0,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,1/2,1/2,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0.707,0.707,0.289,0.500,0.707,-0.408]
},

{
"id": 155,
"name": "128",
"color": "mgree",
"symbol": "mrdp",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,1,0,0,-1,0",
"e8coord": [0,0,0,1.00,0,0,-1.00,0],
"gutcoordlbl": "0,0,0,-1/2,1/2,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,0.707,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,0,-1/2,1/3,-2,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,0.183,-0.894,-0.707,0.408],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.577,0,0.707,0.408,0,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,1/2,-1/2,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0.707,-0.707,-0.289,-0.500,-0.707,0.408]
},

{
"id": 156,
"name": "129",
"color": "mgree",
"symbol": "mrua",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,-1,0,0,1,0",
"e8coord": [0,0,0,-1.00,0,0,1.00,0],
"gutcoordlbl": "0,0,0,1/2,-1/2,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,-0.707,0.577,0.707,-0.408],
"smcoordlbl": "0,0,0,1/2,-1/3,2,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,-0.183,0.894,0.707,-0.408],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.577,0,-0.707,-0.408,0,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,-1/2,1/2,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,0.707,0.289,0.500,0.707,-0.408]
},

{
"id": 157,
"name": "131",
"color": "mygre",
"symbol": "mlup",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,-1/2,1/2,1/2,-1/2,1/2",
"e8coord": [-0.500,0.500,-0.500,-0.500,0.500,0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,1/2,0,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,-0.500,0.707,0,0.289,-0.707,0.408],
"smcoordlbl": "-1/2,1/2,-1/2,1/2,1/3,1/2,-1/2,1/(2SQRT(3))",
"smcoord": [-0.500,0.500,-0.500,0.707,0.183,0.224,-0.707,0.408],
"tricoordlbl": "-1,-1/2,0,0,1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.866,-0.500,0,0,0.500,0.289,-0.707,0.408],
"tri2coordlbl": "0,1/2,-1/2,0,2/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [0,0.707,-0.707,0,0.577,0,-0.707,0.408]
},

{
"id": 158,
"name": "134",
"color": "mygre",
"symbol": "mlda",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,1/2,-1/2,-1/2,1/2,-1/2",
"e8coord": [0.500,-0.500,0.500,0.500,-0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,1/2,-1/2,0,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,0.500,-0.707,0,-0.289,0.707,-0.408],
"smcoordlbl": "1/2,-1/2,1/2,-1/2,-1/3,-1/2,1/2,-1/(2SQRT(3))",
"smcoord": [0.500,-0.500,0.500,-0.707,-0.183,-0.224,0.707,-0.408],
"tricoordlbl": "1,1/2,0,0,-1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.866,0.500,0,0,-0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "0,-1/2,1/2,0,-2/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [0,-0.707,0.707,0,-0.577,0,0.707,-0.408]
},

{
"id": 159,
"name": "132",
"color": "mygre",
"symbol": "mldp",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,1/2,1/2,1/2,-1/2,1/2",
"e8coord": [-0.500,-0.500,-0.500,0.500,0.500,0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,0,1/2,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,-0.500,0,0.707,0.289,-0.707,0.408],
"smcoordlbl": "-1/2,-1/2,-1/2,0,4/3,-1/2,-1/2,1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,-0.500,0,0.730,-0.224,-0.707,0.408],
"tricoordlbl": "1/3,-1/2,1/2,-1/(2SQRT(3)),1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.289,-0.500,0.707,-0.408,0.500,0.289,-0.707,0.408],
"tri2coordlbl": "0,1/2,1/2,0,2/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [0,0.707,0.707,0,0.577,0,-0.707,0.408]
},

{
"id": 160,
"name": "133",
"color": "mygre",
"symbol": "mlua",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,-1/2,-1/2,-1/2,1/2,-1/2",
"e8coord": [0.500,0.500,0.500,-0.500,-0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "1/2,1/2,1/2,0,-1/2,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,0.500,0.500,0,-0.707,-0.289,0.707,-0.408],
"smcoordlbl": "1/2,1/2,1/2,0,-4/3,1/2,1/2,-1/(2SQRT(3))",
"smcoord": [0.500,0.500,0.500,0,-0.730,0.224,0.707,-0.408],
"tricoordlbl": "-1/3,1/2,-1/2,1/(2SQRT(3)),-1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,0.500,-0.707,0.408,-0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "0,-1/2,-1/2,0,-2/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [0,-0.707,-0.707,0,-0.577,0,0.707,-0.408]
},

{
"id": 161,
"name": "131",
"color": "mygre",
"symbol": "mrup",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,-1/2,1/2,1/2,-1/2,1/2",
"e8coord": [0.500,0.500,0.500,-0.500,0.500,0.500,-0.500,0.500],
"gutcoordlbl": "1/2,1/2,1/2,1/2,0,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0.500,0.500,0.500,0.707,0,0.289,-0.707,0.408],
"smcoordlbl": "1/2,1/2,1/2,1/2,1/3,1/2,-1/2,1/(2SQRT(3))",
"smcoord": [0.500,0.500,0.500,0.707,0.183,0.224,-0.707,0.408],
"tricoordlbl": "-1/3,1/2,-1/2,1/(2SQRT(3)),1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.289,0.500,-0.707,0.408,0.500,0.289,-0.707,0.408],
"tri2coordlbl": "0,-1/2,-1/2,0,2/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [0,-0.707,-0.707,0,0.577,0,-0.707,0.408]
},

{
"id": 162,
"name": "134",
"color": "mygre",
"symbol": "mrda",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,1/2,-1/2,-1/2,1/2,-1/2",
"e8coord": [-0.500,-0.500,-0.500,0.500,-0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,-1/2,0,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,-0.500,-0.707,0,-0.289,0.707,-0.408],
"smcoordlbl": "-1/2,-1/2,-1/2,-1/2,-1/3,-1/2,1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,-0.500,-0.707,-0.183,-0.224,0.707,-0.408],
"tricoordlbl": "1/3,-1/2,1/2,-1/(2SQRT(3)),-1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.289,-0.500,0.707,-0.408,-0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "0,1/2,1/2,0,-2/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [0,0.707,0.707,0,-0.577,0,0.707,-0.408]
},

{
"id": 163,
"name": "132",
"color": "mygre",
"symbol": "mrdp",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,1/2,1/2,1/2,-1/2,1/2",
"e8coord": [0.500,-0.500,0.500,0.500,0.500,0.500,-0.500,0.500],
"gutcoordlbl": "1/2,-1/2,1/2,0,1/2,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,0.500,0,0.707,0.289,-0.707,0.408],
"smcoordlbl": "1/2,-1/2,1/2,0,4/3,-1/2,-1/2,1/(2SQRT(3))",
"smcoord": [0.500,-0.500,0.500,0,0.730,-0.224,-0.707,0.408],
"tricoordlbl": "1,1/2,0,0,1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.866,0.500,0,0,0.500,0.289,-0.707,0.408],
"tri2coordlbl": "0,-1/2,1/2,0,2/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [0,-0.707,0.707,0,0.577,0,-0.707,0.408]
},

{
"id": 164,
"name": "133",
"color": "mygre",
"symbol": "mrua",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,-1/2,-1/2,-1/2,1/2,-1/2",
"e8coord": [-0.500,0.500,-0.500,-0.500,-0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,0,-1/2,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,-0.500,0,-0.707,-0.289,0.707,-0.408],
"smcoordlbl": "-1/2,1/2,-1/2,0,-4/3,1/2,1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,0.500,-0.500,0,-0.730,0.224,0.707,-0.408],
"tricoordlbl": "-1,-1/2,0,0,-1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.866,-0.500,0,0,-0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "0,1/2,-1/2,0,-2/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [0,0.707,-0.707,0,-0.577,0,0.707,-0.408]
},

{
"id": 165,
"name": "127",
"color": "mblue",
"symbol": "mlup",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,-1,0,0,0,-1",
"e8coord": [0,0,0,-1.00,0,0,0,-1.00],
"gutcoordlbl": "0,0,0,1/2,-1/2,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,0.707,-0.707,-0.577,0,-0.816],
"smcoordlbl": "0,0,0,1/2,-5/3,0,0,-1/SQRT(3)",
"smcoord": [0,0,0,0.707,-0.913,0,0,-0.816],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,-2/3,0,-1/SQRT(3)",
"tricoord": [-0.577,0,-0.707,-0.408,0,-0.577,0,-0.816],
"tri2coordlbl": "0,0,-1/2,1/2,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,-0.707,0.707,-0.289,-0.500,0,-0.816]
},

{
"id": 166,
"name": "130",
"color": "mblue",
"symbol": "mlda",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,1,0,0,0,1",
"e8coord": [0,0,0,1.00,0,0,0,1.00],
"gutcoordlbl": "0,0,0,-1/2,1/2,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,-0.707,0.707,0.577,0,0.816],
"smcoordlbl": "0,0,0,-1/2,5/3,0,0,1/SQRT(3)",
"smcoord": [0,0,0,-0.707,0.913,0,0,0.816],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,2/3,0,1/SQRT(3)",
"tricoord": [0.577,0,0.707,0.408,0,0.577,0,0.816],
"tri2coordlbl": "0,0,1/2,-1/2,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,0.707,-0.707,0.289,0.500,0,0.816]
},

{
"id": 167,
"name": "128",
"color": "mblue",
"symbol": "mldp",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,0,0,0,0,0,-1",
"e8coord": [0,-1.00,0,0,0,0,0,-1.00],
"gutcoordlbl": "0,-1,0,0,0,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,-1.00,0,0,0,-0.577,0,-0.816],
"smcoordlbl": "0,-1,0,0,-2/3,-1,0,-1/SQRT(3)",
"smcoord": [0,-1.00,0,0,-0.365,-0.447,0,-0.816],
"tricoordlbl": "2/3,0,0,-1/SQRT(3),0,-2/3,0,-1/SQRT(3)",
"tricoord": [0.577,0,0,-0.816,0,-0.577,0,-0.816],
"tri2coordlbl": "0,0,1/2,1/2,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,0.707,0.707,-0.289,-0.500,0,-0.816]
},

{
"id": 168,
"name": "129",
"color": "mblue",
"symbol": "mlua",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,0,0,0,0,0,1",
"e8coord": [0,1.00,0,0,0,0,0,1.00],
"gutcoordlbl": "0,1,0,0,0,2/3,0,1/SQRT(3)",
"gutcoord": [0,1.00,0,0,0,0.577,0,0.816],
"smcoordlbl": "0,1,0,0,2/3,1,0,1/SQRT(3)",
"smcoord": [0,1.00,0,0,0.365,0.447,0,0.816],
"tricoordlbl": "-2/3,0,0,1/SQRT(3),0,2/3,0,1/SQRT(3)",
"tricoord": [-0.577,0,0,0.816,0,0.577,0,0.816],
"tri2coordlbl": "0,0,-1/2,-1/2,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,-0.707,-0.707,0.289,0.500,0,0.816]
},

{
"id": 169,
"name": "127",
"color": "mblue",
"symbol": "mrup",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,1,0,0,0,0,0,-1",
"e8coord": [0,1.00,0,0,0,0,0,-1.00],
"gutcoordlbl": "0,1,0,0,0,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,1.00,0,0,0,-0.577,0,-0.816],
"smcoordlbl": "0,1,0,0,-2/3,-1,0,-1/SQRT(3)",
"smcoord": [0,1.00,0,0,-0.365,-0.447,0,-0.816],
"tricoordlbl": "-2/3,0,0,1/SQRT(3),0,-2/3,0,-1/SQRT(3)",
"tricoord": [-0.577,0,0,0.816,0,-0.577,0,-0.816],
"tri2coordlbl": "0,0,-1/2,-1/2,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,-0.707,-0.707,-0.289,-0.500,0,-0.816]
},

{
"id": 170,
"name": "130",
"color": "mblue",
"symbol": "mrda",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,-1,0,0,0,0,0,1",
"e8coord": [0,-1.00,0,0,0,0,0,1.00],
"gutcoordlbl": "0,-1,0,0,0,2/3,0,1/SQRT(3)",
"gutcoord": [0,-1.00,0,0,0,0.577,0,0.816],
"smcoordlbl": "0,-1,0,0,2/3,1,0,1/SQRT(3)",
"smcoord": [0,-1.00,0,0,0.365,0.447,0,0.816],
"tricoordlbl": "2/3,0,0,-1/SQRT(3),0,2/3,0,1/SQRT(3)",
"tricoord": [0.577,0,0,-0.816,0,0.577,0,0.816],
"tri2coordlbl": "0,0,1/2,1/2,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,0.707,0.707,0.289,0.500,0,0.816]
},

{
"id": 171,
"name": "128",
"color": "mblue",
"symbol": "mrdp",
"label": "charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,1,0,0,0,-1",
"e8coord": [0,0,0,1.00,0,0,0,-1.00],
"gutcoordlbl": "0,0,0,-1/2,1/2,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,-0.707,0.707,-0.577,0,-0.816],
"smcoordlbl": "0,0,0,-1/2,1/3,-2,0,-1/SQRT(3)",
"smcoord": [0,0,0,-0.707,0.183,-0.894,0,-0.816],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,-2/3,0,-1/SQRT(3)",
"tricoord": [0.577,0,0.707,0.408,0,-0.577,0,-0.816],
"tri2coordlbl": "0,0,1/2,-1/2,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,0.707,-0.707,-0.289,-0.500,0,-0.816]
},

{
"id": 172,
"name": "129",
"color": "mblue",
"symbol": "mrua",
"label": "anti-charm quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "0,0,0,-1,0,0,0,1",
"e8coord": [0,0,0,-1.00,0,0,0,1.00],
"gutcoordlbl": "0,0,0,1/2,-1/2,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,0.707,-0.707,0.577,0,0.816],
"smcoordlbl": "0,0,0,1/2,-1/3,2,0,1/SQRT(3)",
"smcoord": [0,0,0,0.707,-0.183,0.894,0,0.816],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,2/3,0,1/SQRT(3)",
"tricoord": [-0.577,0,-0.707,-0.408,0,0.577,0,0.816],
"tri2coordlbl": "0,0,-1/2,1/2,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,-0.707,0.707,0.289,0.500,0,0.816]
},

{
"id": 173,
"name": "131",
"color": "mbvio",
"symbol": "mlup",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,-1/2,1/2,1/2,1/2,-1/2",
"e8coord": [-0.500,0.500,-0.500,-0.500,0.500,0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,1/2,0,1/3,0,-1/SQRT(3)",
"gutcoord": [-0.500,0.500,-0.500,0.707,0,0.289,0,-0.816],
"smcoordlbl": "-1/2,1/2,-1/2,1/2,1/3,1/2,0,-1/SQRT(3)",
"smcoord": [-0.500,0.500,-0.500,0.707,0.183,0.224,0,-0.816],
"tricoordlbl": "-1,-1/2,0,0,1/2,1/3,0,-1/SQRT(3)",
"tricoord": [-0.866,-0.500,0,0,0.500,0.289,0,-0.816],
"tri2coordlbl": "0,1/2,-1/2,0,2/3,0,0,-1/SQRT(3)",
"tri2coord": [0,0.707,-0.707,0,0.577,0,0,-0.816]
},

{
"id": 174,
"name": "134",
"color": "mbvio",
"symbol": "mlda",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,1/2,-1/2,-1/2,-1/2,1/2",
"e8coord": [0.500,-0.500,0.500,0.500,-0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "1/2,-1/2,1/2,-1/2,0,-1/3,0,1/SQRT(3)",
"gutcoord": [0.500,-0.500,0.500,-0.707,0,-0.289,0,0.816],
"smcoordlbl": "1/2,-1/2,1/2,-1/2,-1/3,-1/2,0,1/SQRT(3)",
"smcoord": [0.500,-0.500,0.500,-0.707,-0.183,-0.224,0,0.816],
"tricoordlbl": "1,1/2,0,0,-1/2,-1/3,0,1/SQRT(3)",
"tricoord": [0.866,0.500,0,0,-0.500,-0.289,0,0.816],
"tri2coordlbl": "0,-1/2,1/2,0,-2/3,0,0,1/SQRT(3)",
"tri2coord": [0,-0.707,0.707,0,-0.577,0,0,0.816]
},

{
"id": 175,
"name": "132",
"color": "mbvio",
"symbol": "mldp",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,1/2,1/2,1/2,1/2,-1/2",
"e8coord": [-0.500,-0.500,-0.500,0.500,0.500,0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,0,1/2,1/3,0,-1/SQRT(3)",
"gutcoord": [-0.500,-0.500,-0.500,0,0.707,0.289,0,-0.816],
"smcoordlbl": "-1/2,-1/2,-1/2,0,4/3,-1/2,0,-1/SQRT(3)",
"smcoord": [-0.500,-0.500,-0.500,0,0.730,-0.224,0,-0.816],
"tricoordlbl": "1/3,-1/2,1/2,-1/(2SQRT(3)),1/2,1/3,0,-1/SQRT(3)",
"tricoord": [0.289,-0.500,0.707,-0.408,0.500,0.289,0,-0.816],
"tri2coordlbl": "0,1/2,1/2,0,2/3,0,0,-1/SQRT(3)",
"tri2coord": [0,0.707,0.707,0,0.577,0,0,-0.816]
},

{
"id": 176,
"name": "133",
"color": "mbvio",
"symbol": "mlua",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,-1/2,-1/2,-1/2,-1/2,1/2",
"e8coord": [0.500,0.500,0.500,-0.500,-0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "1/2,1/2,1/2,0,-1/2,-1/3,0,1/SQRT(3)",
"gutcoord": [0.500,0.500,0.500,0,-0.707,-0.289,0,0.816],
"smcoordlbl": "1/2,1/2,1/2,0,-4/3,1/2,0,1/SQRT(3)",
"smcoord": [0.500,0.500,0.500,0,-0.730,0.224,0,0.816],
"tricoordlbl": "-1/3,1/2,-1/2,1/(2SQRT(3)),-1/2,-1/3,0,1/SQRT(3)",
"tricoord": [-0.289,0.500,-0.707,0.408,-0.500,-0.289,0,0.816],
"tri2coordlbl": "0,-1/2,-1/2,0,-2/3,0,0,1/SQRT(3)",
"tri2coord": [0,-0.707,-0.707,0,-0.577,0,0,0.816]
},

{
"id": 177,
"name": "131",
"color": "mbvio",
"symbol": "mrup",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,-1/2,1/2,1/2,1/2,-1/2",
"e8coord": [0.500,0.500,0.500,-0.500,0.500,0.500,0.500,-0.500],
"gutcoordlbl": "1/2,1/2,1/2,1/2,0,1/3,0,-1/SQRT(3)",
"gutcoord": [0.500,0.500,0.500,0.707,0,0.289,0,-0.816],
"smcoordlbl": "1/2,1/2,1/2,1/2,1/3,1/2,0,-1/SQRT(3)",
"smcoord": [0.500,0.500,0.500,0.707,0.183,0.224,0,-0.816],
"tricoordlbl": "-1/3,1/2,-1/2,1/(2SQRT(3)),1/2,1/3,0,-1/SQRT(3)",
"tricoord": [-0.289,0.500,-0.707,0.408,0.500,0.289,0,-0.816],
"tri2coordlbl": "0,-1/2,-1/2,0,2/3,0,0,-1/SQRT(3)",
"tri2coord": [0,-0.707,-0.707,0,0.577,0,0,-0.816]
},

{
"id": 178,
"name": "134",
"color": "mbvio",
"symbol": "mrda",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,1/2,-1/2,-1/2,-1/2,1/2",
"e8coord": [-0.500,-0.500,-0.500,0.500,-0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,-1/2,0,-1/3,0,1/SQRT(3)",
"gutcoord": [-0.500,-0.500,-0.500,-0.707,0,-0.289,0,0.816],
"smcoordlbl": "-1/2,-1/2,-1/2,-1/2,-1/3,-1/2,0,1/SQRT(3)",
"smcoord": [-0.500,-0.500,-0.500,-0.707,-0.183,-0.224,0,0.816],
"tricoordlbl": "1/3,-1/2,1/2,-1/(2SQRT(3)),-1/2,-1/3,0,1/SQRT(3)",
"tricoord": [0.289,-0.500,0.707,-0.408,-0.500,-0.289,0,0.816],
"tri2coordlbl": "0,1/2,1/2,0,-2/3,0,0,1/SQRT(3)",
"tri2coord": [0,0.707,0.707,0,-0.577,0,0,0.816]
},

{
"id": 179,
"name": "132",
"color": "mbvio",
"symbol": "mrdp",
"label": "strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,1/2,1/2,1/2,1/2,-1/2",
"e8coord": [0.500,-0.500,0.500,0.500,0.500,0.500,0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,1/2,0,1/2,1/3,0,-1/SQRT(3)",
"gutcoord": [0.500,-0.500,0.500,0,0.707,0.289,0,-0.816],
"smcoordlbl": "1/2,-1/2,1/2,0,4/3,-1/2,0,-1/SQRT(3)",
"smcoord": [0.500,-0.500,0.500,0,0.730,-0.224,0,-0.816],
"tricoordlbl": "1,1/2,0,0,1/2,1/3,0,-1/SQRT(3)",
"tricoord": [0.866,0.500,0,0,0.500,0.289,0,-0.816],
"tri2coordlbl": "0,-1/2,1/2,0,2/3,0,0,-1/SQRT(3)",
"tri2coord": [0,-0.707,0.707,0,0.577,0,0,-0.816]
},

{
"id": 180,
"name": "133",
"color": "mbvio",
"symbol": "mrua",
"label": "anti-strange quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,-1/2,-1/2,-1/2,-1/2,1/2",
"e8coord": [-0.500,0.500,-0.500,-0.500,-0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,0,-1/2,-1/3,0,1/SQRT(3)",
"gutcoord": [-0.500,0.500,-0.500,0,-0.707,-0.289,0,0.816],
"smcoordlbl": "-1/2,1/2,-1/2,0,-4/3,1/2,0,1/SQRT(3)",
"smcoord": [-0.500,0.500,-0.500,0,-0.730,0.224,0,0.816],
"tricoordlbl": "-1,-1/2,0,0,-1/2,-1/3,0,1/SQRT(3)",
"tricoord": [-0.866,-0.500,0,0,-0.500,-0.289,0,0.816],
"tri2coordlbl": "0,1/2,-1/2,0,-2/3,0,0,1/SQRT(3)",
"tri2coord": [0,0.707,-0.707,0,-0.577,0,0,0.816]
},

{
"id": 181,
"name": "181",
"color": "lgray",
"symbol": "slup",
"label": "tau neutrino",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,-1/2,1/2,1/2,1/2,1/2",
"e8coord": [0.500,-0.500,0.500,-0.500,0.500,0.500,0.500,0.500],
"gutcoordlbl": "1/2,-1/2,1/2,1/2,0,1,0,0",
"gutcoord": [0.500,-0.500,0.500,0.707,0,0.866,0,0],
"smcoordlbl": "1/2,-1/2,1/2,1/2,1,3/2,0,0",
"smcoord": [0.500,-0.500,0.500,0.707,0.548,0.671,0,0],
"tricoordlbl": "1/3,1/2,-1/2,-1/(2SQRT(3)),1/2,1,0,0",
"tricoord": [0.289,0.500,-0.707,-0.408,0.500,0.866,0,0],
"tri2coordlbl": "0,-1/2,0,1/2,1,1/SQRT(3),0,0",
"tri2coord": [0,-0.707,0,0.707,0.866,0.500,0,0]
},

{
"id": 182,
"name": "196",
"color": "lgray",
"symbol": "slda",
"label": "tau anti-neutrino",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,1/2,-1/2,-1/2,-1/2,-1/2",
"e8coord": [-0.500,0.500,-0.500,0.500,-0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,-1/2,0,-1,0,0",
"gutcoord": [-0.500,0.500,-0.500,-0.707,0,-0.866,0,0],
"smcoordlbl": "-1/2,1/2,-1/2,-1/2,-1,-3/2,0,0",
"smcoord": [-0.500,0.500,-0.500,-0.707,-0.548,-0.671,0,0],
"tricoordlbl": "-1/3,-1/2,1/2,1/(2SQRT(3)),-1/2,-1,0,0",
"tricoord": [-0.289,-0.500,0.707,0.408,-0.500,-0.866,0,0],
"tri2coordlbl": "0,1/2,0,-1/2,-1,-1/SQRT(3),0,0",
"tri2coord": [0,0.707,0,-0.707,-0.866,-0.500,0,0]
},

{
"id": 183,
"name": "182",
"color": "lgray",
"symbol": "sldp",
"label": "tau neutrino",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,-1/2,1/2,1/2,1/2,1/2",
"e8coord": [-0.500,-0.500,-0.500,-0.500,0.500,0.500,0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,1/2,0,1,0,0",
"gutcoord": [-0.500,-0.500,-0.500,0.707,0,0.866,0,0],
"smcoordlbl": "-1/2,-1/2,-1/2,1/2,1,3/2,0,0",
"smcoord": [-0.500,-0.500,-0.500,0.707,0.548,0.671,0,0],
"tricoordlbl": "-1/3,-1/2,0,-1/SQRT(3),1/2,1,0,0",
"tricoord": [-0.289,-0.500,0,-0.816,0.500,0.866,0,0],
"tri2coordlbl": "0,1/2,0,1/2,1,1/SQRT(3),0,0",
"tri2coord": [0,0.707,0,0.707,0.866,0.500,0,0]
},

{
"id": 184,
"name": "195",
"color": "lgray",
"symbol": "slua",
"label": "tau anti-neutrino",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,1/2,-1/2,-1/2,-1/2,-1/2",
"e8coord": [0.500,0.500,0.500,0.500,-0.500,-0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,1/2,1/2,-1/2,0,-1,0,0",
"gutcoord": [0.500,0.500,0.500,-0.707,0,-0.866,0,0],
"smcoordlbl": "1/2,1/2,1/2,-1/2,-1,-3/2,0,0",
"smcoord": [0.500,0.500,0.500,-0.707,-0.548,-0.671,0,0],
"tricoordlbl": "1/3,1/2,0,1/SQRT(3),-1/2,-1,0,0",
"tricoord": [0.289,0.500,0,0.816,-0.500,-0.866,0,0],
"tri2coordlbl": "0,-1/2,0,-1/2,-1,-1/SQRT(3),0,0",
"tri2coord": [0,-0.707,0,-0.707,-0.866,-0.500,0,0]
},

{
"id": 185,
"name": "183",
"color": "myell",
"symbol": "slup",
"label": "tau",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,1,0,1,0,0,0",
"e8coord": [0,0,1.00,0,1.00,0,0,0],
"gutcoordlbl": "0,0,1,1/2,1/2,0,0,0",
"gutcoord": [0,0,1.00,0.707,0.707,0,0,0],
"smcoordlbl": "0,0,1,1/2,1,-1,0,0",
"smcoord": [0,0,1.00,0.707,0.548,-0.447,0,0],
"tricoordlbl": "0,1,0,0,1,0,0,0",
"tricoord": [0,1.00,0,0,1.00,0,0,0],
"tri2coordlbl": "1/2,-1/2,0,0,1,-1/SQRT(3),0,0",
"tri2coord": [0.707,-0.707,0,0,0.866,-0.500,0,0]
},

{
"id": 186,
"name": "186",
"color": "myell",
"symbol": "slda",
"label": "anti-tau",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,-1,0,-1,0,0,0",
"e8coord": [0,0,-1.00,0,-1.00,0,0,0],
"gutcoordlbl": "0,0,-1,-1/2,-1/2,0,0,0",
"gutcoord": [0,0,-1.00,-0.707,-0.707,0,0,0],
"smcoordlbl": "0,0,-1,-1/2,-1,1,0,0",
"smcoord": [0,0,-1.00,-0.707,-0.548,0.447,0,0],
"tricoordlbl": "0,-1,0,0,-1,0,0,0",
"tricoord": [0,-1.00,0,0,-1.00,0,0,0],
"tri2coordlbl": "-1/2,1/2,0,0,-1,1/SQRT(3),0,0",
"tri2coord": [-0.707,0.707,0,0,-0.866,0.500,0,0]
},

{
"id": 187,
"name": "184",
"color": "myell",
"symbol": "sldp",
"label": "tau",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,0,0,1,0,0,0",
"e8coord": [-1.00,0,0,0,1.00,0,0,0],
"gutcoordlbl": "-1,0,0,1/2,1/2,0,0,0",
"gutcoord": [-1.00,0,0,0.707,0.707,0,0,0],
"smcoordlbl": "-1,0,0,1/2,1,-1,0,0",
"smcoord": [-1.00,0,0,0.707,0.548,-0.447,0,0],
"tricoordlbl": "-2/3,0,1/2,-1/(2SQRT(3)),1,0,0,0",
"tricoord": [-0.577,0,0.707,-0.408,1.00,0,0,0],
"tri2coordlbl": "1/2,1/2,0,0,1,-1/SQRT(3),0,0",
"tri2coord": [0.707,0.707,0,0,0.866,-0.500,0,0]
},

{
"id": 188,
"name": "185",
"color": "myell",
"symbol": "slua",
"label": "anti-tau",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,0,0,-1,0,0,0",
"e8coord": [1.00,0,0,0,-1.00,0,0,0],
"gutcoordlbl": "1,0,0,-1/2,-1/2,0,0,0",
"gutcoord": [1.00,0,0,-0.707,-0.707,0,0,0],
"smcoordlbl": "1,0,0,-1/2,-1,1,0,0",
"smcoord": [1.00,0,0,-0.707,-0.548,0.447,0,0],
"tricoordlbl": "2/3,0,-1/2,1/(2SQRT(3)),-1,0,0,0",
"tricoord": [0.577,0,-0.707,0.408,-1.00,0,0,0],
"tri2coordlbl": "-1/2,-1/2,0,0,-1,1/SQRT(3),0,0",
"tri2coord": [-0.707,-0.707,0,0,-0.866,0.500,0,0]
},

{
"id": 189,
"name": "183",
"color": "myell",
"symbol": "srup",
"label": "tau",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,0,0,1,0,0,0",
"e8coord": [1.00,0,0,0,1.00,0,0,0],
"gutcoordlbl": "1,0,0,1/2,1/2,0,0,0",
"gutcoord": [1.00,0,0,0.707,0.707,0,0,0],
"smcoordlbl": "1,0,0,1/2,1,-1,0,0",
"smcoord": [1.00,0,0,0.707,0.548,-0.447,0,0],
"tricoordlbl": "2/3,0,-1/2,1/(2SQRT(3)),1,0,0,0",
"tricoord": [0.577,0,-0.707,0.408,1.00,0,0,0],
"tri2coordlbl": "-1/2,-1/2,0,0,1,-1/SQRT(3),0,0",
"tri2coord": [-0.707,-0.707,0,0,0.866,-0.500,0,0]
},

{
"id": 190,
"name": "186",
"color": "myell",
"symbol": "srda",
"label": "anti-tau",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,0,0,-1,0,0,0",
"e8coord": [-1.00,0,0,0,-1.00,0,0,0],
"gutcoordlbl": "-1,0,0,-1/2,-1/2,0,0,0",
"gutcoord": [-1.00,0,0,-0.707,-0.707,0,0,0],
"smcoordlbl": "-1,0,0,-1/2,-1,1,0,0",
"smcoord": [-1.00,0,0,-0.707,-0.548,0.447,0,0],
"tricoordlbl": "-2/3,0,1/2,-1/(2SQRT(3)),-1,0,0,0",
"tricoord": [-0.577,0,0.707,-0.408,-1.00,0,0,0],
"tri2coordlbl": "1/2,1/2,0,0,-1,1/SQRT(3),0,0",
"tri2coord": [0.707,0.707,0,0,-0.866,0.500,0,0]
},

{
"id": 191,
"name": "184",
"color": "myell",
"symbol": "srdp",
"label": "tau",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,-1,0,1,0,0,0",
"e8coord": [0,0,-1.00,0,1.00,0,0,0],
"gutcoordlbl": "0,0,-1,1/2,1/2,0,0,0",
"gutcoord": [0,0,-1.00,0.707,0.707,0,0,0],
"smcoordlbl": "0,0,-1,1/2,1,-1,0,0",
"smcoord": [0,0,-1.00,0.707,0.548,-0.447,0,0],
"tricoordlbl": "0,-1,0,0,1,0,0,0",
"tricoord": [0,-1.00,0,0,1.00,0,0,0],
"tri2coordlbl": "-1/2,1/2,0,0,1,-1/SQRT(3),0,0",
"tri2coord": [-0.707,0.707,0,0,0.866,-0.500,0,0]
},

{
"id": 192,
"name": "185",
"color": "myell",
"symbol": "srua",
"label": "anti-tau",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,1,0,-1,0,0,0",
"e8coord": [0,0,1.00,0,-1.00,0,0,0],
"gutcoordlbl": "0,0,1,-1/2,-1/2,0,0,0",
"gutcoord": [0,0,1.00,-0.707,-0.707,0,0,0],
"smcoordlbl": "0,0,1,-1/2,-1,1,0,0",
"smcoord": [0,0,1.00,-0.707,-0.548,0.447,0,0],
"tricoordlbl": "0,1,0,0,-1,0,0,0",
"tricoord": [0,1.00,0,0,-1.00,0,0,0],
"tri2coordlbl": "1/2,-1/2,0,0,-1,1/SQRT(3),0,0",
"tri2coord": [0.707,-0.707,0,0,-0.866,0.500,0,0]
},

{
"id": 193,
"name": "187",
"color": "mred",
"symbol": "slup",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,-1/2,-1/2,-1/2,1/2,1/2",
"e8coord": [0.500,-0.500,0.500,-0.500,-0.500,-0.500,0.500,0.500],
"gutcoordlbl": "1/2,-1/2,1/2,0,-1/2,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,0.500,0,-0.707,0.289,0.707,0.408],
"smcoordlbl": "1/2,-1/2,1/2,0,-2/3,3/2,1/2,1/(2SQRT(3))",
"smcoord": [0.500,-0.500,0.500,0,-0.365,0.671,0.707,0.408],
"tricoordlbl": "1/3,1/2,-1/2,-1/(2SQRT(3)),-1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [0.289,0.500,-0.707,-0.408,-0.500,0.289,0.707,0.408],
"tri2coordlbl": "0,-1/2,0,1/2,-1/3,1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,-0.707,0,0.707,-0.289,0.500,0.707,0.408]
},

{
"id": 194,
"name": "190",
"color": "mred",
"symbol": "slda",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,1/2,1/2,1/2,-1/2,-1/2",
"e8coord": [-0.500,0.500,-0.500,0.500,0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,0,1/2,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,-0.500,0,0.707,-0.289,-0.707,-0.408],
"smcoordlbl": "-1/2,1/2,-1/2,0,2/3,-3/2,-1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,0.500,-0.500,0,0.365,-0.671,-0.707,-0.408],
"tricoordlbl": "-1/3,-1/2,1/2,1/(2SQRT(3)),1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,0.707,0.408,0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "0,1/2,0,-1/2,1/3,-1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0.707,0,-0.707,0.289,-0.500,-0.707,-0.408]
},

{
"id": 195,
"name": "188",
"color": "mred",
"symbol": "sldp",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,-1/2,-1/2,-1/2,1/2,1/2",
"e8coord": [-0.500,-0.500,-0.500,-0.500,-0.500,-0.500,0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,0,-1/2,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,-0.500,0,-0.707,0.289,0.707,0.408],
"smcoordlbl": "-1/2,-1/2,-1/2,0,-2/3,3/2,1/2,1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,-0.500,0,-0.365,0.671,0.707,0.408],
"tricoordlbl": "-1/3,-1/2,0,-1/SQRT(3),-1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,0,-0.816,-0.500,0.289,0.707,0.408],
"tri2coordlbl": "0,1/2,0,1/2,-1/3,1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0.707,0,0.707,-0.289,0.500,0.707,0.408]
},

{
"id": 196,
"name": "189",
"color": "mred",
"symbol": "slua",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,1/2,1/2,1/2,-1/2,-1/2",
"e8coord": [0.500,0.500,0.500,0.500,0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,1/2,1/2,0,1/2,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,0.500,0.500,0,0.707,-0.289,-0.707,-0.408],
"smcoordlbl": "1/2,1/2,1/2,0,2/3,-3/2,-1/2,-1/(2SQRT(3))",
"smcoord": [0.500,0.500,0.500,0,0.365,-0.671,-0.707,-0.408],
"tricoordlbl": "1/3,1/2,0,1/SQRT(3),1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.289,0.500,0,0.816,0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "0,-1/2,0,-1/2,1/3,-1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,-0.707,0,-0.707,0.289,-0.500,-0.707,-0.408]
},

{
"id": 197,
"name": "187",
"color": "mred",
"symbol": "srup",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,1/2,-1/2,-1/2,1/2,1/2",
"e8coord": [0.500,0.500,0.500,0.500,-0.500,-0.500,0.500,0.500],
"gutcoordlbl": "1/2,1/2,1/2,-1/2,0,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [0.500,0.500,0.500,-0.707,0,0.289,0.707,0.408],
"smcoordlbl": "1/2,1/2,1/2,-1/2,1/3,1/2,1/2,1/(2SQRT(3))",
"smcoord": [0.500,0.500,0.500,-0.707,0.183,0.224,0.707,0.408],
"tricoordlbl": "1/3,1/2,0,1/SQRT(3),-1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [0.289,0.500,0,0.816,-0.500,0.289,0.707,0.408],
"tri2coordlbl": "0,-1/2,0,-1/2,-1/3,1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,-0.707,0,-0.707,-0.289,0.500,0.707,0.408]
},

{
"id": 198,
"name": "190",
"color": "mred",
"symbol": "srda",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,-1/2,1/2,1/2,-1/2,-1/2",
"e8coord": [-0.500,-0.500,-0.500,-0.500,0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,1/2,0,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,-0.500,0.707,0,-0.289,-0.707,-0.408],
"smcoordlbl": "-1/2,-1/2,-1/2,1/2,-1/3,-1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,-0.500,0.707,-0.183,-0.224,-0.707,-0.408],
"tricoordlbl": "-1/3,-1/2,0,-1/SQRT(3),1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,0,-0.816,0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "0,1/2,0,1/2,1/3,-1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0.707,0,0.707,0.289,-0.500,-0.707,-0.408]
},

{
"id": 199,
"name": "188",
"color": "mred",
"symbol": "srdp",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,1/2,-1/2,-1/2,1/2,1/2",
"e8coord": [-0.500,0.500,-0.500,0.500,-0.500,-0.500,0.500,0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,-1/2,0,1/3,1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,-0.500,-0.707,0,0.289,0.707,0.408],
"smcoordlbl": "-1/2,1/2,-1/2,-1/2,1/3,1/2,1/2,1/(2SQRT(3))",
"smcoord": [-0.500,0.500,-0.500,-0.707,0.183,0.224,0.707,0.408],
"tricoordlbl": "-1/3,-1/2,1/2,1/(2SQRT(3)),-1/2,1/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,0.707,0.408,-0.500,0.289,0.707,0.408],
"tri2coordlbl": "0,1/2,0,-1/2,-1/3,1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0.707,0,-0.707,-0.289,0.500,0.707,0.408]
},

{
"id": 200,
"name": "189",
"color": "mred",
"symbol": "srua",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,-1/2,1/2,1/2,-1/2,-1/2",
"e8coord": [0.500,-0.500,0.500,-0.500,0.500,0.500,-0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,1/2,1/2,0,-1/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,0.500,0.707,0,-0.289,-0.707,-0.408],
"smcoordlbl": "1/2,-1/2,1/2,1/2,-1/3,-1/2,-1/2,-1/(2SQRT(3))",
"smcoord": [0.500,-0.500,0.500,0.707,-0.183,-0.224,-0.707,-0.408],
"tricoordlbl": "1/3,1/2,-1/2,-1/(2SQRT(3)),1/2,-1/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.289,0.500,-0.707,-0.408,0.500,-0.289,-0.707,-0.408],
"tri2coordlbl": "0,-1/2,0,1/2,1/3,-1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,-0.707,0,0.707,0.289,-0.500,-0.707,-0.408]
},

{
"id": 201,
"name": "191",
"color": "mrora",
"symbol": "slup",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,1,0,0,-1,0,0",
"e8coord": [0,0,1.00,0,0,-1.00,0,0],
"gutcoordlbl": "0,0,1,0,0,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,1.00,0,0,-0.577,0.707,0.408],
"smcoordlbl": "0,0,1,0,-2/3,-1,1/2,1/(2SQRT(3))",
"smcoord": [0,0,1.00,0,-0.365,-0.447,0.707,0.408],
"tricoordlbl": "0,1,0,0,0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0,1.00,0,0,0,-0.577,0.707,0.408],
"tri2coordlbl": "1/2,-1/2,0,0,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0.707,-0.707,0,0,-0.289,-0.500,0.707,0.408]
},

{
"id": 202,
"name": "194",
"color": "mrora",
"symbol": "slda",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,-1,0,0,1,0,0",
"e8coord": [0,0,-1.00,0,0,1.00,0,0],
"gutcoordlbl": "0,0,-1,0,0,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,-1.00,0,0,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,-1,0,2/3,1,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,-1.00,0,0.365,0.447,-0.707,-0.408],
"tricoordlbl": "0,-1,0,0,0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0,-1.00,0,0,0,0.577,-0.707,-0.408],
"tri2coordlbl": "-1/2,1/2,0,0,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0.707,0,0,0.289,0.500,-0.707,-0.408]
},

{
"id": 203,
"name": "192",
"color": "mrora",
"symbol": "sldp",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,0,0,0,-1,0,0",
"e8coord": [-1.00,0,0,0,0,-1.00,0,0],
"gutcoordlbl": "-1,0,0,0,0,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [-1.00,0,0,0,0,-0.577,0.707,0.408],
"smcoordlbl": "-1,0,0,0,-2/3,-1,1/2,1/(2SQRT(3))",
"smcoord": [-1.00,0,0,0,-0.365,-0.447,0.707,0.408],
"tricoordlbl": "-2/3,0,1/2,-1/(2SQRT(3)),0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.577,0,0.707,-0.408,0,-0.577,0.707,0.408],
"tri2coordlbl": "1/2,1/2,0,0,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0.707,0,0,-0.289,-0.500,0.707,0.408]
},

{
"id": 204,
"name": "193",
"color": "mrora",
"symbol": "slua",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,0,0,0,1,0,0",
"e8coord": [1.00,0,0,0,0,1.00,0,0],
"gutcoordlbl": "1,0,0,0,0,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [1.00,0,0,0,0,0.577,-0.707,-0.408],
"smcoordlbl": "1,0,0,0,2/3,1,-1/2,-1/(2SQRT(3))",
"smcoord": [1.00,0,0,0,0.365,0.447,-0.707,-0.408],
"tricoordlbl": "2/3,0,-1/2,1/(2SQRT(3)),0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.577,0,-0.707,0.408,0,0.577,-0.707,-0.408],
"tri2coordlbl": "-1/2,-1/2,0,0,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,-0.707,0,0,0.289,0.500,-0.707,-0.408]
},

{
"id": 205,
"name": "191",
"color": "mrora",
"symbol": "srup",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,0,0,0,-1,0,0",
"e8coord": [1.00,0,0,0,0,-1.00,0,0],
"gutcoordlbl": "1,0,0,0,0,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [1.00,0,0,0,0,-0.577,0.707,0.408],
"smcoordlbl": "1,0,0,0,-2/3,-1,1/2,1/(2SQRT(3))",
"smcoord": [1.00,0,0,0,-0.365,-0.447,0.707,0.408],
"tricoordlbl": "2/3,0,-1/2,1/(2SQRT(3)),0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0.577,0,-0.707,0.408,0,-0.577,0.707,0.408],
"tri2coordlbl": "-1/2,-1/2,0,0,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,-0.707,0,0,-0.289,-0.500,0.707,0.408]
},

{
"id": 206,
"name": "194",
"color": "mrora",
"symbol": "srda",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,0,0,0,1,0,0",
"e8coord": [-1.00,0,0,0,0,1.00,0,0],
"gutcoordlbl": "-1,0,0,0,0,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [-1.00,0,0,0,0,0.577,-0.707,-0.408],
"smcoordlbl": "-1,0,0,0,2/3,1,-1/2,-1/(2SQRT(3))",
"smcoord": [-1.00,0,0,0,0.365,0.447,-0.707,-0.408],
"tricoordlbl": "-2/3,0,1/2,-1/(2SQRT(3)),0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.577,0,0.707,-0.408,0,0.577,-0.707,-0.408],
"tri2coordlbl": "1/2,1/2,0,0,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0.707,0,0,0.289,0.500,-0.707,-0.408]
},

{
"id": 207,
"name": "192",
"color": "mrora",
"symbol": "srdp",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,-1,0,0,-1,0,0",
"e8coord": [0,0,-1.00,0,0,-1.00,0,0],
"gutcoordlbl": "0,0,-1,0,0,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,-1.00,0,0,-0.577,0.707,0.408],
"smcoordlbl": "0,0,-1,0,-2/3,-1,1/2,1/(2SQRT(3))",
"smcoord": [0,0,-1.00,0,-0.365,-0.447,0.707,0.408],
"tricoordlbl": "0,-1,0,0,0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0,-1.00,0,0,0,-0.577,0.707,0.408],
"tri2coordlbl": "-1/2,1/2,0,0,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0.707,0,0,-0.289,-0.500,0.707,0.408]
},

{
"id": 208,
"name": "193",
"color": "mrora",
"symbol": "srua",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,1,0,0,1,0,0",
"e8coord": [0,0,1.00,0,0,1.00,0,0],
"gutcoordlbl": "0,0,1,0,0,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,1.00,0,0,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,1,0,2/3,1,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,1.00,0,0.365,0.447,-0.707,-0.408],
"tricoordlbl": "0,1,0,0,0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0,1.00,0,0,0,0.577,-0.707,-0.408],
"tri2coordlbl": "1/2,-1/2,0,0,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,-0.707,0,0,0.289,0.500,-0.707,-0.408]
},

{
"id": 209,
"name": "187",
"color": "mgree",
"symbol": "slup",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,-1/2,-1/2,1/2,-1/2,1/2",
"e8coord": [0.500,-0.500,0.500,-0.500,-0.500,0.500,-0.500,0.500],
"gutcoordlbl": "1/2,-1/2,1/2,0,-1/2,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,0.500,0,-0.707,0.289,-0.707,0.408],
"smcoordlbl": "1/2,-1/2,1/2,0,-2/3,3/2,-1/2,1/(2SQRT(3))",
"smcoord": [0.500,-0.500,0.500,0,-0.365,0.671,-0.707,0.408],
"tricoordlbl": "1/3,1/2,-1/2,-1/(2SQRT(3)),-1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.289,0.500,-0.707,-0.408,-0.500,0.289,-0.707,0.408],
"tri2coordlbl": "0,-1/2,0,1/2,-1/3,1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,-0.707,0,0.707,-0.289,0.500,-0.707,0.408]
},

{
"id": 210,
"name": "190",
"color": "mgree",
"symbol": "slda",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,1/2,1/2,-1/2,1/2,-1/2",
"e8coord": [-0.500,0.500,-0.500,0.500,0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,0,1/2,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,-0.500,0,0.707,-0.289,0.707,-0.408],
"smcoordlbl": "-1/2,1/2,-1/2,0,2/3,-3/2,1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,0.500,-0.500,0,0.365,-0.671,0.707,-0.408],
"tricoordlbl": "-1/3,-1/2,1/2,1/(2SQRT(3)),1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,0.707,0.408,0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "0,1/2,0,-1/2,1/3,-1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0.707,0,-0.707,0.289,-0.500,0.707,-0.408]
},

{
"id": 211,
"name": "188",
"color": "mgree",
"symbol": "sldp",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,-1/2,-1/2,1/2,-1/2,1/2",
"e8coord": [-0.500,-0.500,-0.500,-0.500,-0.500,0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,0,-1/2,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,-0.500,0,-0.707,0.289,-0.707,0.408],
"smcoordlbl": "-1/2,-1/2,-1/2,0,-2/3,3/2,-1/2,1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,-0.500,0,-0.365,0.671,-0.707,0.408],
"tricoordlbl": "-1/3,-1/2,0,-1/SQRT(3),-1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,0,-0.816,-0.500,0.289,-0.707,0.408],
"tri2coordlbl": "0,1/2,0,1/2,-1/3,1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0.707,0,0.707,-0.289,0.500,-0.707,0.408]
},

{
"id": 212,
"name": "189",
"color": "mgree",
"symbol": "slua",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,1/2,1/2,-1/2,1/2,-1/2",
"e8coord": [0.500,0.500,0.500,0.500,0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "1/2,1/2,1/2,0,1/2,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,0.500,0.500,0,0.707,-0.289,0.707,-0.408],
"smcoordlbl": "1/2,1/2,1/2,0,2/3,-3/2,1/2,-1/(2SQRT(3))",
"smcoord": [0.500,0.500,0.500,0,0.365,-0.671,0.707,-0.408],
"tricoordlbl": "1/3,1/2,0,1/SQRT(3),1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.289,0.500,0,0.816,0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "0,-1/2,0,-1/2,1/3,-1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,-0.707,0,-0.707,0.289,-0.500,0.707,-0.408]
},

{
"id": 213,
"name": "187",
"color": "mgree",
"symbol": "srup",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,1/2,-1/2,1/2,-1/2,1/2",
"e8coord": [0.500,0.500,0.500,0.500,-0.500,0.500,-0.500,0.500],
"gutcoordlbl": "1/2,1/2,1/2,-1/2,0,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0.500,0.500,0.500,-0.707,0,0.289,-0.707,0.408],
"smcoordlbl": "1/2,1/2,1/2,-1/2,1/3,1/2,-1/2,1/(2SQRT(3))",
"smcoord": [0.500,0.500,0.500,-0.707,0.183,0.224,-0.707,0.408],
"tricoordlbl": "1/3,1/2,0,1/SQRT(3),-1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.289,0.500,0,0.816,-0.500,0.289,-0.707,0.408],
"tri2coordlbl": "0,-1/2,0,-1/2,-1/3,1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,-0.707,0,-0.707,-0.289,0.500,-0.707,0.408]
},

{
"id": 214,
"name": "190",
"color": "mgree",
"symbol": "srda",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,-1/2,1/2,-1/2,1/2,-1/2",
"e8coord": [-0.500,-0.500,-0.500,-0.500,0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,1/2,0,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [-0.500,-0.500,-0.500,0.707,0,-0.289,0.707,-0.408],
"smcoordlbl": "-1/2,-1/2,-1/2,1/2,-1/3,-1/2,1/2,-1/(2SQRT(3))",
"smcoord": [-0.500,-0.500,-0.500,0.707,-0.183,-0.224,0.707,-0.408],
"tricoordlbl": "-1/3,-1/2,0,-1/SQRT(3),1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,0,-0.816,0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "0,1/2,0,1/2,1/3,-1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0.707,0,0.707,0.289,-0.500,0.707,-0.408]
},

{
"id": 215,
"name": "188",
"color": "mgree",
"symbol": "srdp",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,1/2,-1/2,1/2,-1/2,1/2",
"e8coord": [-0.500,0.500,-0.500,0.500,-0.500,0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,-1/2,0,1/3,-1/2,1/(2SQRT(3))",
"gutcoord": [-0.500,0.500,-0.500,-0.707,0,0.289,-0.707,0.408],
"smcoordlbl": "-1/2,1/2,-1/2,-1/2,1/3,1/2,-1/2,1/(2SQRT(3))",
"smcoord": [-0.500,0.500,-0.500,-0.707,0.183,0.224,-0.707,0.408],
"tricoordlbl": "-1/3,-1/2,1/2,1/(2SQRT(3)),-1/2,1/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.289,-0.500,0.707,0.408,-0.500,0.289,-0.707,0.408],
"tri2coordlbl": "0,1/2,0,-1/2,-1/3,1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0.707,0,-0.707,-0.289,0.500,-0.707,0.408]
},

{
"id": 216,
"name": "189",
"color": "mgree",
"symbol": "srua",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,-1/2,1/2,-1/2,1/2,-1/2",
"e8coord": [0.500,-0.500,0.500,-0.500,0.500,-0.500,0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,1/2,1/2,0,-1/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0.500,-0.500,0.500,0.707,0,-0.289,0.707,-0.408],
"smcoordlbl": "1/2,-1/2,1/2,1/2,-1/3,-1/2,1/2,-1/(2SQRT(3))",
"smcoord": [0.500,-0.500,0.500,0.707,-0.183,-0.224,0.707,-0.408],
"tricoordlbl": "1/3,1/2,-1/2,-1/(2SQRT(3)),1/2,-1/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.289,0.500,-0.707,-0.408,0.500,-0.289,0.707,-0.408],
"tri2coordlbl": "0,-1/2,0,1/2,1/3,-1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,-0.707,0,0.707,0.289,-0.500,0.707,-0.408]
},

{
"id": 217,
"name": "191",
"color": "mygre",
"symbol": "slup",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,1,0,0,0,-1,0",
"e8coord": [0,0,1.00,0,0,0,-1.00,0],
"gutcoordlbl": "0,0,1,0,0,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,1.00,0,0,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,1,0,-2/3,-1,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,1.00,0,-0.365,-0.447,-0.707,0.408],
"tricoordlbl": "0,1,0,0,0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0,1.00,0,0,0,-0.577,-0.707,0.408],
"tri2coordlbl": "1/2,-1/2,0,0,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0.707,-0.707,0,0,-0.289,-0.500,-0.707,0.408]
},

{
"id": 218,
"name": "194",
"color": "mygre",
"symbol": "slda",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,-1,0,0,0,1,0",
"e8coord": [0,0,-1.00,0,0,0,1.00,0],
"gutcoordlbl": "0,0,-1,0,0,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,-1.00,0,0,0.577,0.707,-0.408],
"smcoordlbl": "0,0,-1,0,2/3,1,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,-1.00,0,0.365,0.447,0.707,-0.408],
"tricoordlbl": "0,-1,0,0,0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0,-1.00,0,0,0,0.577,0.707,-0.408],
"tri2coordlbl": "-1/2,1/2,0,0,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,0.707,0,0,0.289,0.500,0.707,-0.408]
},

{
"id": 219,
"name": "192",
"color": "mygre",
"symbol": "sldp",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,0,0,0,0,-1,0",
"e8coord": [-1.00,0,0,0,0,0,-1.00,0],
"gutcoordlbl": "-1,0,0,0,0,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [-1.00,0,0,0,0,-0.577,-0.707,0.408],
"smcoordlbl": "-1,0,0,0,-2/3,-1,-1/2,1/(2SQRT(3))",
"smcoord": [-1.00,0,0,0,-0.365,-0.447,-0.707,0.408],
"tricoordlbl": "-2/3,0,1/2,-1/(2SQRT(3)),0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.577,0,0.707,-0.408,0,-0.577,-0.707,0.408],
"tri2coordlbl": "1/2,1/2,0,0,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0.707,0.707,0,0,-0.289,-0.500,-0.707,0.408]
},

{
"id": 220,
"name": "193",
"color": "mygre",
"symbol": "slua",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,0,0,0,0,1,0",
"e8coord": [1.00,0,0,0,0,0,1.00,0],
"gutcoordlbl": "1,0,0,0,0,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [1.00,0,0,0,0,0.577,0.707,-0.408],
"smcoordlbl": "1,0,0,0,2/3,1,1/2,-1/(2SQRT(3))",
"smcoord": [1.00,0,0,0,0.365,0.447,0.707,-0.408],
"tricoordlbl": "2/3,0,-1/2,1/(2SQRT(3)),0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.577,0,-0.707,0.408,0,0.577,0.707,-0.408],
"tri2coordlbl": "-1/2,-1/2,0,0,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [-0.707,-0.707,0,0,0.289,0.500,0.707,-0.408]
},

{
"id": 221,
"name": "191",
"color": "mygre",
"symbol": "srup",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,0,0,0,0,-1,0",
"e8coord": [1.00,0,0,0,0,0,-1.00,0],
"gutcoordlbl": "1,0,0,0,0,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [1.00,0,0,0,0,-0.577,-0.707,0.408],
"smcoordlbl": "1,0,0,0,-2/3,-1,-1/2,1/(2SQRT(3))",
"smcoord": [1.00,0,0,0,-0.365,-0.447,-0.707,0.408],
"tricoordlbl": "2/3,0,-1/2,1/(2SQRT(3)),0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.577,0,-0.707,0.408,0,-0.577,-0.707,0.408],
"tri2coordlbl": "-1/2,-1/2,0,0,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,-0.707,0,0,-0.289,-0.500,-0.707,0.408]
},

{
"id": 222,
"name": "194",
"color": "mygre",
"symbol": "srda",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,0,0,0,0,1,0",
"e8coord": [-1.00,0,0,0,0,0,1.00,0],
"gutcoordlbl": "-1,0,0,0,0,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [-1.00,0,0,0,0,0.577,0.707,-0.408],
"smcoordlbl": "-1,0,0,0,2/3,1,1/2,-1/(2SQRT(3))",
"smcoord": [-1.00,0,0,0,0.365,0.447,0.707,-0.408],
"tricoordlbl": "-2/3,0,1/2,-1/(2SQRT(3)),0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.577,0,0.707,-0.408,0,0.577,0.707,-0.408],
"tri2coordlbl": "1/2,1/2,0,0,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,0.707,0,0,0.289,0.500,0.707,-0.408]
},

{
"id": 223,
"name": "192",
"color": "mygre",
"symbol": "srdp",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,-1,0,0,0,-1,0",
"e8coord": [0,0,-1.00,0,0,0,-1.00,0],
"gutcoordlbl": "0,0,-1,0,0,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,-1.00,0,0,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,-1,0,-2/3,-1,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,-1.00,0,-0.365,-0.447,-0.707,0.408],
"tricoordlbl": "0,-1,0,0,0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0,-1.00,0,0,0,-0.577,-0.707,0.408],
"tri2coordlbl": "-1/2,1/2,0,0,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [-0.707,0.707,0,0,-0.289,-0.500,-0.707,0.408]
},

{
"id": 224,
"name": "193",
"color": "mygre",
"symbol": "srua",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,1,0,0,0,1,0",
"e8coord": [0,0,1.00,0,0,0,1.00,0],
"gutcoordlbl": "0,0,1,0,0,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,1.00,0,0,0.577,0.707,-0.408],
"smcoordlbl": "0,0,1,0,2/3,1,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,1.00,0,0.365,0.447,0.707,-0.408],
"tricoordlbl": "0,1,0,0,0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0,1.00,0,0,0,0.577,0.707,-0.408],
"tri2coordlbl": "1/2,-1/2,0,0,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0.707,-0.707,0,0,0.289,0.500,0.707,-0.408]
},

{
"id": 225,
"name": "187",
"color": "mblue",
"symbol": "slup",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,-1/2,-1/2,1/2,1/2,-1/2",
"e8coord": [0.500,-0.500,0.500,-0.500,-0.500,0.500,0.500,-0.500],
"gutcoordlbl": "1/2,-1/2,1/2,0,-1/2,1/3,0,-1/SQRT(3)",
"gutcoord": [0.500,-0.500,0.500,0,-0.707,0.289,0,-0.816],
"smcoordlbl": "1/2,-1/2,1/2,0,-2/3,3/2,0,-1/SQRT(3)",
"smcoord": [0.500,-0.500,0.500,0,-0.365,0.671,0,-0.816],
"tricoordlbl": "1/3,1/2,-1/2,-1/(2SQRT(3)),-1/2,1/3,0,-1/SQRT(3)",
"tricoord": [0.289,0.500,-0.707,-0.408,-0.500,0.289,0,-0.816],
"tri2coordlbl": "0,-1/2,0,1/2,-1/3,1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,-0.707,0,0.707,-0.289,0.500,0,-0.816]
},

{
"id": 226,
"name": "190",
"color": "mblue",
"symbol": "slda",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,1/2,1/2,-1/2,-1/2,1/2",
"e8coord": [-0.500,0.500,-0.500,0.500,0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,0,1/2,-1/3,0,1/SQRT(3)",
"gutcoord": [-0.500,0.500,-0.500,0,0.707,-0.289,0,0.816],
"smcoordlbl": "-1/2,1/2,-1/2,0,2/3,-3/2,0,1/SQRT(3)",
"smcoord": [-0.500,0.500,-0.500,0,0.365,-0.671,0,0.816],
"tricoordlbl": "-1/3,-1/2,1/2,1/(2SQRT(3)),1/2,-1/3,0,1/SQRT(3)",
"tricoord": [-0.289,-0.500,0.707,0.408,0.500,-0.289,0,0.816],
"tri2coordlbl": "0,1/2,0,-1/2,1/3,-1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0.707,0,-0.707,0.289,-0.500,0,0.816]
},

{
"id": 227,
"name": "188",
"color": "mblue",
"symbol": "sldp",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,-1/2,-1/2,1/2,1/2,-1/2",
"e8coord": [-0.500,-0.500,-0.500,-0.500,-0.500,0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,0,-1/2,1/3,0,-1/SQRT(3)",
"gutcoord": [-0.500,-0.500,-0.500,0,-0.707,0.289,0,-0.816],
"smcoordlbl": "-1/2,-1/2,-1/2,0,-2/3,3/2,0,-1/SQRT(3)",
"smcoord": [-0.500,-0.500,-0.500,0,-0.365,0.671,0,-0.816],
"tricoordlbl": "-1/3,-1/2,0,-1/SQRT(3),-1/2,1/3,0,-1/SQRT(3)",
"tricoord": [-0.289,-0.500,0,-0.816,-0.500,0.289,0,-0.816],
"tri2coordlbl": "0,1/2,0,1/2,-1/3,1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0.707,0,0.707,-0.289,0.500,0,-0.816]
},

{
"id": 228,
"name": "189",
"color": "mblue",
"symbol": "slua",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,1/2,1/2,-1/2,-1/2,1/2",
"e8coord": [0.500,0.500,0.500,0.500,0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "1/2,1/2,1/2,0,1/2,-1/3,0,1/SQRT(3)",
"gutcoord": [0.500,0.500,0.500,0,0.707,-0.289,0,0.816],
"smcoordlbl": "1/2,1/2,1/2,0,2/3,-3/2,0,1/SQRT(3)",
"smcoord": [0.500,0.500,0.500,0,0.365,-0.671,0,0.816],
"tricoordlbl": "1/3,1/2,0,1/SQRT(3),1/2,-1/3,0,1/SQRT(3)",
"tricoord": [0.289,0.500,0,0.816,0.500,-0.289,0,0.816],
"tri2coordlbl": "0,-1/2,0,-1/2,1/3,-1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,-0.707,0,-0.707,0.289,-0.500,0,0.816]
},

{
"id": 229,
"name": "187",
"color": "mblue",
"symbol": "srup",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,1/2,1/2,1/2,-1/2,1/2,1/2,-1/2",
"e8coord": [0.500,0.500,0.500,0.500,-0.500,0.500,0.500,-0.500],
"gutcoordlbl": "1/2,1/2,1/2,-1/2,0,1/3,0,-1/SQRT(3)",
"gutcoord": [0.500,0.500,0.500,-0.707,0,0.289,0,-0.816],
"smcoordlbl": "1/2,1/2,1/2,-1/2,1/3,1/2,0,-1/SQRT(3)",
"smcoord": [0.500,0.500,0.500,-0.707,0.183,0.224,0,-0.816],
"tricoordlbl": "1/3,1/2,0,1/SQRT(3),-1/2,1/3,0,-1/SQRT(3)",
"tricoord": [0.289,0.500,0,0.816,-0.500,0.289,0,-0.816],
"tri2coordlbl": "0,-1/2,0,-1/2,-1/3,1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,-0.707,0,-0.707,-0.289,0.500,0,-0.816]
},

{
"id": 230,
"name": "190",
"color": "mblue",
"symbol": "srda",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,-1/2,-1/2,-1/2,1/2,-1/2,-1/2,1/2",
"e8coord": [-0.500,-0.500,-0.500,-0.500,0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "-1/2,-1/2,-1/2,1/2,0,-1/3,0,1/SQRT(3)",
"gutcoord": [-0.500,-0.500,-0.500,0.707,0,-0.289,0,0.816],
"smcoordlbl": "-1/2,-1/2,-1/2,1/2,-1/3,-1/2,0,1/SQRT(3)",
"smcoord": [-0.500,-0.500,-0.500,0.707,-0.183,-0.224,0,0.816],
"tricoordlbl": "-1/3,-1/2,0,-1/SQRT(3),1/2,-1/3,0,1/SQRT(3)",
"tricoord": [-0.289,-0.500,0,-0.816,0.500,-0.289,0,0.816],
"tri2coordlbl": "0,1/2,0,1/2,1/3,-1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0.707,0,0.707,0.289,-0.500,0,0.816]
},

{
"id": 231,
"name": "188",
"color": "mblue",
"symbol": "srdp",
"label": "top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "-1/2,1/2,-1/2,1/2,-1/2,1/2,1/2,-1/2",
"e8coord": [-0.500,0.500,-0.500,0.500,-0.500,0.500,0.500,-0.500],
"gutcoordlbl": "-1/2,1/2,-1/2,-1/2,0,1/3,0,-1/SQRT(3)",
"gutcoord": [-0.500,0.500,-0.500,-0.707,0,0.289,0,-0.816],
"smcoordlbl": "-1/2,1/2,-1/2,-1/2,1/3,1/2,0,-1/SQRT(3)",
"smcoord": [-0.500,0.500,-0.500,-0.707,0.183,0.224,0,-0.816],
"tricoordlbl": "-1/3,-1/2,1/2,1/(2SQRT(3)),-1/2,1/3,0,-1/SQRT(3)",
"tricoord": [-0.289,-0.500,0.707,0.408,-0.500,0.289,0,-0.816],
"tri2coordlbl": "0,1/2,0,-1/2,-1/3,1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0.707,0,-0.707,-0.289,0.500,0,-0.816]
},

{
"id": 232,
"name": "199",
"color": "mblue",
"symbol": "srua",
"label": "anti-top quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": false,
"e8": true,
"e8coordlbl": "1/2,-1/2,1/2,-1/2,1/2,-1/2,-1/2,1/2",
"e8coord": [0.500,-0.500,0.500,-0.500,0.500,-0.500,-0.500,0.500],
"gutcoordlbl": "1/2,-1/2,1/2,1/2,0,-1/3,0,1/SQRT(3)",
"gutcoord": [0.500,-0.500,0.500,0.707,0,-0.289,0,0.816],
"smcoordlbl": "1/2,-1/2,1/2,1/2,-1/3,-1/2,0,1/SQRT(3)",
"smcoord": [0.500,-0.500,0.500,0.707,-0.183,-0.224,0,0.816],
"tricoordlbl": "1/3,1/2,-1/2,-1/(2SQRT(3)),1/2,-1/3,0,1/SQRT(3)",
"tricoord": [0.289,0.500,-0.707,-0.408,0.500,-0.289,0,0.816],
"tri2coordlbl": "0,-1/2,0,1/2,1/3,-1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,-0.707,0,0.707,0.289,-0.500,0,0.816]
},

{
"id": 233,
"name": "191",
"color": "mbvio",
"symbol": "slup",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,1,0,0,0,0,-1",
"e8coord": [0,0,1.00,0,0,0,0,-1.00],
"gutcoordlbl": "0,0,1,0,0,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,1.00,0,0,-0.577,0,-0.816],
"smcoordlbl": "0,0,1,0,-2/3,-1,0,-1/SQRT(3)",
"smcoord": [0,0,1.00,0,-0.365,-0.447,0,-0.816],
"tricoordlbl": "0,1,0,0,0,-2/3,0,-1/SQRT(3)",
"tricoord": [0,1.00,0,0,0,-0.577,0,-0.816],
"tri2coordlbl": "1/2,-1/2,0,0,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0.707,-0.707,0,0,-0.289,-0.500,0,-0.816]
},

{
"id": 234,
"name": "194",
"color": "mbvio",
"symbol": "slda",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,-1,0,0,0,0,1",
"e8coord": [0,0,-1.00,0,0,0,0,1.00],
"gutcoordlbl": "0,0,-1,0,0,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,-1.00,0,0,0.577,0,0.816],
"smcoordlbl": "0,0,-1,0,2/3,1,0,1/SQRT(3)",
"smcoord": [0,0,-1.00,0,0.365,0.447,0,0.816],
"tricoordlbl": "0,-1,0,0,0,2/3,0,1/SQRT(3)",
"tricoord": [0,-1.00,0,0,0,0.577,0,0.816],
"tri2coordlbl": "-1/2,1/2,0,0,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [-0.707,0.707,0,0,0.289,0.500,0,0.816]
},

{
"id": 235,
"name": "192",
"color": "mbvio",
"symbol": "sldp",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,0,0,0,0,0,-1",
"e8coord": [-1.00,0,0,0,0,0,0,-1.00],
"gutcoordlbl": "-1,0,0,0,0,-2/3,0,-1/SQRT(3)",
"gutcoord": [-1.00,0,0,0,0,-0.577,0,-0.816],
"smcoordlbl": "-1,0,0,0,-2/3,-1,0,-1/SQRT(3)",
"smcoord": [-1.00,0,0,0,-0.365,-0.447,0,-0.816],
"tricoordlbl": "-2/3,0,1/2,-1/(2SQRT(3)),0,-2/3,0,-1/SQRT(3)",
"tricoord": [-0.577,0,0.707,-0.408,0,-0.577,0,-0.816],
"tri2coordlbl": "1/2,1/2,0,0,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0.707,0.707,0,0,-0.289,-0.500,0,-0.816]
},

{
"id": 236,
"name": "193",
"color": "mbvio",
"symbol": "slua",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,0,0,0,0,0,1",
"e8coord": [1.00,0,0,0,0,0,0,1.00],
"gutcoordlbl": "1,0,0,0,0,2/3,0,1/SQRT(3)",
"gutcoord": [1.00,0,0,0,0,0.577,0,0.816],
"smcoordlbl": "1,0,0,0,2/3,1,0,1/SQRT(3)",
"smcoord": [1.00,0,0,0,0.365,0.447,0,0.816],
"tricoordlbl": "2/3,0,-1/2,1/(2SQRT(3)),0,2/3,0,1/SQRT(3)",
"tricoord": [0.577,0,-0.707,0.408,0,0.577,0,0.816],
"tri2coordlbl": "-1/2,-1/2,0,0,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [-0.707,-0.707,0,0,0.289,0.500,0,0.816]
},

{
"id": 237,
"name": "191",
"color": "mbvio",
"symbol": "srup",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "1,0,0,0,0,0,0,-1",
"e8coord": [1.00,0,0,0,0,0,0,-1.00],
"gutcoordlbl": "1,0,0,0,0,-2/3,0,-1/SQRT(3)",
"gutcoord": [1.00,0,0,0,0,-0.577,0,-0.816],
"smcoordlbl": "1,0,0,0,-2/3,-1,0,-1/SQRT(3)",
"smcoord": [1.00,0,0,0,-0.365,-0.447,0,-0.816],
"tricoordlbl": "2/3,0,-1/2,1/(2SQRT(3)),0,-2/3,0,-1/SQRT(3)",
"tricoord": [0.577,0,-0.707,0.408,0,-0.577,0,-0.816],
"tri2coordlbl": "-1/2,-1/2,0,0,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [-0.707,-0.707,0,0,-0.289,-0.500,0,-0.816]
},

{
"id": 238,
"name": "194",
"color": "mbvio",
"symbol": "srda",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "-1,0,0,0,0,0,0,1",
"e8coord": [-1.00,0,0,0,0,0,0,1.00],
"gutcoordlbl": "-1,0,0,0,0,2/3,0,1/SQRT(3)",
"gutcoord": [-1.00,0,0,0,0,0.577,0,0.816],
"smcoordlbl": "-1,0,0,0,2/3,1,0,1/SQRT(3)",
"smcoord": [-1.00,0,0,0,0.365,0.447,0,0.816],
"tricoordlbl": "-2/3,0,1/2,-1/(2SQRT(3)),0,2/3,0,1/SQRT(3)",
"tricoord": [-0.577,0,0.707,-0.408,0,0.577,0,0.816],
"tri2coordlbl": "1/2,1/2,0,0,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0.707,0.707,0,0,0.289,0.500,0,0.816]
},

{
"id": 239,
"name": "192",
"color": "mbvio",
"symbol": "srdp",
"label": "bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,-1,0,0,0,0,-1",
"e8coord": [0,0,-1.00,0,0,0,0,-1.00],
"gutcoordlbl": "0,0,-1,0,0,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,-1.00,0,0,-0.577,0,-0.816],
"smcoordlbl": "0,0,-1,0,-2/3,-1,0,-1/SQRT(3)",
"smcoord": [0,0,-1.00,0,-0.365,-0.447,0,-0.816],
"tricoordlbl": "0,-1,0,0,0,-2/3,0,-1/SQRT(3)",
"tricoord": [0,-1.00,0,0,0,-0.577,0,-0.816],
"tri2coordlbl": "-1/2,1/2,0,0,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [-0.707,0.707,0,0,-0.289,-0.500,0,-0.816]
},

{
"id": 240,
"name": "193",
"color": "mbvio",
"symbol": "srua",
"label": "anti-bottom quark",
"sm": false,
"ps": false,
"gg": false,
"e6": false,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,1,0,0,0,0,1",
"e8coord": [0,0,1.00,0,0,0,0,1.00],
"gutcoordlbl": "0,0,1,0,0,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,1.00,0,0,0.577,0,0.816],
"smcoordlbl": "0,0,1,0,2/3,1,0,1/SQRT(3)",
"smcoord": [0,0,1.00,0,0.365,0.447,0,0.816],
"tricoordlbl": "0,1,0,0,0,2/3,0,1/SQRT(3)",
"tricoord": [0,1.00,0,0,0,0.577,0,0.816],
"tri2coordlbl": "1/2,-1/2,0,0,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0.707,-0.707,0,0,0.289,0.500,0,0.816]
},

{
"id": 241,
"name": "241",
"color": "white",
"symbol": "bcir",
"label": "photon",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,0,0,0",
"e8coord": [0,0,0,0,0,0,0,0],
"gutcoordlbl": "0,0,0,0,0,0,0,0",
"gutcoord": [0,0,0,0,0,0,0,0],
"smcoordlbl": "0,0,0,0,0,0,0,0",
"smcoord": [0,0,0,0,0,0,0,0],
"tricoordlbl": "0,0,0,0,0,0,0,0",
"tricoord": [0,0,0,0,0,0,0,0],
"tri2coordlbl": "0,0,0,0,0,0,0,0",
"tri2coord": [0,0,0,0,0,0,0,0]
},

{
"id": 242,
"name": "38",
"color": "white",
"symbol": "scir",
"label": "weaker boson",
"sm": false,
"ps": true,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,1,1,0,0,0",
"e8coord": [0,0,0,1.00,1.00,0,0,0],
"gutcoordlbl": "0,0,0,0,1,0,0,0",
"gutcoord": [0,0,0,0,1.41,0,0,0],
"smcoordlbl": "0,0,0,0,2,-2,0,0",
"smcoord": [0,0,0,0,1.10,-0.894,0,0],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),1,0,0,0",
"tricoord": [0.577,0,0.707,0.408,1.00,0,0,0],
"tri2coordlbl": "0,0,1/2,-1/2,1,-1/SQRT(3),0,0",
"tri2coord": [0,0,0.707,-0.707,0.866,-0.500,0,0]
},

{
"id": 243,
"name": "39",
"color": "white",
"symbol": "scir",
"label": "weaker boson",
"sm": false,
"ps": true,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,-1,-1,0,0,0",
"e8coord": [0,0,0,-1.00,-1.00,0,0,0],
"gutcoordlbl": "0,0,0,0,-1,0,0,0",
"gutcoord": [0,0,0,0,-1.41,0,0,0],
"smcoordlbl": "0,0,0,0,-2,2,0,0",
"smcoord": [0,0,0,0,-1.10,0.894,0,0],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),-1,0,0,0",
"tricoord": [-0.577,0,-0.707,-0.408,-1.00,0,0,0],
"tri2coordlbl": "0,0,-1/2,1/2,-1,1/SQRT(3),0,0",
"tri2coord": [0,0,-0.707,0.707,-0.866,0.500,0,0]
},

{
"id": 244,
"name": "32",
"color": "mred",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,0,-1,-1",
"e8coord": [0,0,0,0,0,0,-1.00,-1.00],
"gutcoordlbl": "0,0,0,0,0,-4/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,-1.15,-0.707,-0.408],
"smcoordlbl": "0,0,0,0,-4/3,-2,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0,-0.730,-0.894,-0.707,-0.408],
"tricoordlbl": "0,0,0,0,0,-4/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,-1.15,-0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,-2/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,-1.00,-0.707,-0.408]
},

{
"id": 245,
"name": "32",
"color": "mred",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,0,1,1",
"e8coord": [0,0,0,0,0,0,1.00,1.00],
"gutcoordlbl": "0,0,0,0,0,4/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,1.15,0.707,0.408],
"smcoordlbl": "0,0,0,0,4/3,2,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0,0.730,0.894,0.707,0.408],
"tricoordlbl": "0,0,0,0,0,4/3,1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,1.15,0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,2/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,1.00,0.707,0.408]
},

{
"id": 246,
"name": "32",
"color": "mgree",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,-1,0,-1",
"e8coord": [0,0,0,0,0,-1.00,0,-1.00],
"gutcoordlbl": "0,0,0,0,0,-4/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,-1.15,0.707,-0.408],
"smcoordlbl": "0,0,0,0,-4/3,-2,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0,-0.730,-0.894,0.707,-0.408],
"tricoordlbl": "0,0,0,0,0,-4/3,1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,-1.15,0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,-2/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,-1.00,0.707,-0.408]
},

{
"id": 247,
"name": "32",
"color": "mgree",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,1,0,1",
"e8coord": [0,0,0,0,0,1.00,0,1.00],
"gutcoordlbl": "0,0,0,0,0,4/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,1.15,-0.707,0.408],
"smcoordlbl": "0,0,0,0,4/3,2,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0,0.730,0.894,-0.707,0.408],
"tricoordlbl": "0,0,0,0,0,4/3,-1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,1.15,-0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,2/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,1.00,-0.707,0.408]
},

{
"id": 248,
"name": "32",
"color": "mblue",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,-1,-1,0",
"e8coord": [0,0,0,0,0,-1.00,-1.00,0],
"gutcoordlbl": "0,0,0,0,0,-4/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,0,0,-1.15,0,0.816],
"smcoordlbl": "0,0,0,0,-4/3,-2,0,1/SQRT(3)",
"smcoord": [0,0,0,0,-0.730,-0.894,0,0.816],
"tricoordlbl": "0,0,0,0,0,-4/3,0,1/SQRT(3)",
"tricoord": [0,0,0,0,0,-1.15,0,0.816],
"tri2coordlbl": "0,0,0,0,-2/3,-2/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,0,0,-0.577,-1.00,0,0.816]
},

{
"id": 249,
"name": "32",
"color": "mblue",
"symbol": "scir",
"label": "PS X boson",
"sm": false,
"ps": true,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,1,1,0",
"e8coord": [0,0,0,0,0,1.00,1.00,0],
"gutcoordlbl": "0,0,0,0,0,4/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,0,0,1.15,0,-0.816],
"smcoordlbl": "0,0,0,0,4/3,2,0,-1/SQRT(3)",
"smcoord": [0,0,0,0,0.730,0.894,0,-0.816],
"tricoordlbl": "0,0,0,0,0,4/3,0,-1/SQRT(3)",
"tricoord": [0,0,0,0,0,1.15,0,-0.816],
"tri2coordlbl": "0,0,0,0,2/3,2/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,0,0,0.577,1.00,0,-0.816]
},

{
"id": 250,
"name": "34",
"color": "mrora",
"symbol": "scir",
"label": "su5 Y boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,-1,0,-1,0,0",
"e8coord": [0,0,0,-1.00,0,-1.00,0,0],
"gutcoordlbl": "0,0,0,1/2,-1/2,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,-0.707,-0.577,0.707,0.408],
"smcoordlbl": "0,0,0,1/2,-5/3,0,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,-0.913,0,0.707,0.408],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [-0.577,0,-0.707,-0.408,0,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,-1/2,1/2,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,0.707,-0.289,-0.500,0.707,0.408]
},

{
"id": 251,
"name": "34",
"color": "mrora",
"symbol": "scir",
"label": "su5 Y boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,1,0,1,0,0",
"e8coord": [0,0,0,1.00,0,1.00,0,0],
"gutcoordlbl": "0,0,0,-1/2,1/2,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,0.707,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,0,-1/2,5/3,0,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,0.913,0,-0.707,-0.408],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0.577,0,0.707,0.408,0,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,1/2,-1/2,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0.707,-0.707,0.289,0.500,-0.707,-0.408]
},

{
"id": 252,
"name": "34",
"color": "mygre",
"symbol": "scir",
"label": "su5 Y boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,-1,0,0,-1,0",
"e8coord": [0,0,0,-1.00,0,0,-1.00,0],
"gutcoordlbl": "0,0,0,1/2,-1/2,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,-0.707,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,0,1/2,-5/3,0,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,-0.913,0,-0.707,0.408],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [-0.577,0,-0.707,-0.408,0,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,-1/2,1/2,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,0.707,-0.289,-0.500,-0.707,0.408]
},

{
"id": 253,
"name": "34",
"color": "mygre",
"symbol": "scir",
"label": "su5 Y boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,1,0,0,1,0",
"e8coord": [0,0,0,1.00,0,0,1.00,0],
"gutcoordlbl": "0,0,0,-1/2,1/2,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,0.707,0.577,0.707,-0.408],
"smcoordlbl": "0,0,0,-1/2,5/3,0,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,0.913,0,0.707,-0.408],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0.577,0,0.707,0.408,0,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,1/2,-1/2,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0.707,-0.707,0.289,0.500,0.707,-0.408]
},

{
"id": 254,
"name": "34",
"color": "mbvio",
"symbol": "scir",
"label": "su5 Y boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,-1,0,0,0,-1",
"e8coord": [0,0,0,-1.00,0,0,0,-1.00],
"gutcoordlbl": "0,0,0,1/2,-1/2,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,0.707,-0.707,-0.577,0,-0.816],
"smcoordlbl": "0,0,0,1/2,-5/3,0,0,-1/SQRT(3)",
"smcoord": [0,0,0,0.707,-0.913,0,0,-0.816],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,-2/3,0,-1/SQRT(3)",
"tricoord": [-0.577,0,-0.707,-0.408,0,-0.577,0,-0.816],
"tri2coordlbl": "0,0,-1/2,1/2,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,-0.707,0.707,-0.289,-0.500,0,-0.816]
},

{
"id": 255,
"name": "34",
"color": "mbvio",
"symbol": "scir",
"label": "su5 Y boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,1,0,0,0,1",
"e8coord": [0,0,0,1.00,0,0,0,1.00],
"gutcoordlbl": "0,0,0,-1/2,1/2,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,-0.707,0.707,0.577,0,0.816],
"smcoordlbl": "0,0,0,-1/2,5/3,0,0,1/SQRT(3)",
"smcoord": [0,0,0,-0.707,0.913,0,0,0.816],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,2/3,0,1/SQRT(3)",
"tricoord": [0.577,0,0.707,0.408,0,0.577,0,0.816],
"tri2coordlbl": "0,0,1/2,-1/2,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,0.707,-0.707,0.289,0.500,0,0.816]
},

{
"id": 256,
"name": "31",
"color": "mred",
"symbol": "scir",
"label": "su5 X boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,-1,-1,0,0",
"e8coord": [0,0,0,0,-1.00,-1.00,0,0],
"gutcoordlbl": "0,0,0,-1/2,-1/2,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,-0.707,-0.577,0.707,0.408],
"smcoordlbl": "0,0,0,-1/2,-5/3,0,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,-0.913,0,0.707,0.408],
"tricoordlbl": "0,0,0,0,-1,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,-1.00,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,0,0,-4/3,0,1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-1.15,0,0.707,0.408]
},

{
"id": 257,
"name": "31",
"color": "mred",
"symbol": "scir",
"label": "su5 X boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,1,1,0,0",
"e8coord": [0,0,0,0,1.00,1.00,0,0],
"gutcoordlbl": "0,0,0,1/2,1/2,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,0.707,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,0,1/2,5/3,0,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,0.913,0,-0.707,-0.408],
"tricoordlbl": "0,0,0,0,1,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,1.00,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,0,0,4/3,0,-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,1.15,0,-0.707,-0.408]
},

{
"id": 258,
"name": "31",
"color": "mgree",
"symbol": "scir",
"label": "su5 X boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,-1,0,-1,0",
"e8coord": [0,0,0,0,-1.00,0,-1.00,0],
"gutcoordlbl": "0,0,0,-1/2,-1/2,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,-0.707,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,0,-1/2,-5/3,0,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,-0.913,0,-0.707,0.408],
"tricoordlbl": "0,0,0,0,-1,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,-1.00,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,0,0,-4/3,0,-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-1.15,0,-0.707,0.408]
},

{
"id": 259,
"name": "31",
"color": "mgree",
"symbol": "scir",
"label": "su5 X boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,1,0,1,0",
"e8coord": [0,0,0,0,1.00,0,1.00,0],
"gutcoordlbl": "0,0,0,1/2,1/2,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,0.707,0.577,0.707,-0.408],
"smcoordlbl": "0,0,0,1/2,5/3,0,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,0.913,0,0.707,-0.408],
"tricoordlbl": "0,0,0,0,1,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,1.00,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,0,0,4/3,0,1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,1.15,0,0.707,-0.408]
},

{
"id": 260,
"name": "31",
"color": "mblue",
"symbol": "scir",
"label": "su5 X boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,-1,0,0,-1",
"e8coord": [0,0,0,0,-1.00,0,0,-1.00],
"gutcoordlbl": "0,0,0,-1/2,-1/2,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,-0.707,-0.707,-0.577,0,-0.816],
"smcoordlbl": "0,0,0,-1/2,-5/3,0,0,-1/SQRT(3)",
"smcoord": [0,0,0,-0.707,-0.913,0,0,-0.816],
"tricoordlbl": "0,0,0,0,-1,-2/3,0,-1/SQRT(3)",
"tricoord": [0,0,0,0,-1.00,-0.577,0,-0.816],
"tri2coordlbl": "0,0,0,0,-4/3,0,0,-1/SQRT(3)",
"tri2coord": [0,0,0,0,-1.15,0,0,-0.816]
},

{
"id": 261,
"name": "31",
"color": "mblue",
"symbol": "scir",
"label": "su5 X boson",
"sm": false,
"ps": false,
"gg": true,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,1,0,0,1",
"e8coord": [0,0,0,0,1.00,0,0,1.00],
"gutcoordlbl": "0,0,0,1/2,1/2,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,0.707,0.707,0.577,0,0.816],
"smcoordlbl": "0,0,0,1/2,5/3,0,0,1/SQRT(3)",
"smcoord": [0,0,0,0.707,0.913,0,0,0.816],
"tricoordlbl": "0,0,0,0,1,2/3,0,1/SQRT(3)",
"tricoord": [0,0,0,0,1.00,0.577,0,0.816],
"tri2coordlbl": "0,0,0,0,4/3,0,0,1/SQRT(3)",
"tri2coord": [0,0,0,0,1.15,0,0,0.816]
},

{
"id": 262,
"name": "32",
"color": "mred",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,1,-1,0,0",
"e8coord": [0,0,0,0,1.00,-1.00,0,0],
"gutcoordlbl": "0,0,0,1/2,1/2,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,0.707,-0.577,0.707,0.408],
"smcoordlbl": "0,0,0,1/2,1/3,-2,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,0.183,-0.894,0.707,0.408],
"tricoordlbl": "0,0,0,0,1,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,1.00,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,-2/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,-1.00,0.707,0.408]
},

{
"id": 263,
"name": "32",
"color": "mred",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,-1,1,0,0",
"e8coord": [0,0,0,0,-1.00,1.00,0,0],
"gutcoordlbl": "0,0,0,-1/2,-1/2,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,-0.707,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,0,-1/2,-1/3,2,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,-0.183,0.894,-0.707,-0.408],
"tricoordlbl": "0,0,0,0,-1,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,-1.00,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,2/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,1.00,-0.707,-0.408]
},

{
"id": 264,
"name": "31",
"color": "mrora",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,1,0,-1,0,0",
"e8coord": [0,0,0,1.00,0,-1.00,0,0],
"gutcoordlbl": "0,0,0,-1/2,1/2,-2/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,0.707,-0.577,0.707,0.408],
"smcoordlbl": "0,0,0,-1/2,1/3,-2,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,0.183,-0.894,0.707,0.408],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,-2/3,1/2,1/(2SQRT(3))",
"tricoord": [0.577,0,0.707,0.408,0,-0.577,0.707,0.408],
"tri2coordlbl": "0,0,1/2,-1/2,-1/3,-1/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0.707,-0.707,-0.289,-0.500,0.707,0.408]
},

{
"id": 265,
"name": "31",
"color": "mrora",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,-1,0,1,0,0",
"e8coord": [0,0,0,-1.00,0,1.00,0,0],
"gutcoordlbl": "0,0,0,1/2,-1/2,2/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,-0.707,0.577,-0.707,-0.408],
"smcoordlbl": "0,0,0,1/2,-1/3,2,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,-0.183,0.894,-0.707,-0.408],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,2/3,-1/2,-1/(2SQRT(3))",
"tricoord": [-0.577,0,-0.707,-0.408,0,0.577,-0.707,-0.408],
"tri2coordlbl": "0,0,-1/2,1/2,1/3,1/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,0.707,0.289,0.500,-0.707,-0.408]
},

{
"id": 266,
"name": "32",
"color": "mgree",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,1,0,-1,0",
"e8coord": [0,0,0,0,1.00,0,-1.00,0],
"gutcoordlbl": "0,0,0,1/2,1/2,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,0.707,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,0,1/2,1/3,-2,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,0.183,-0.894,-0.707,0.408],
"tricoordlbl": "0,0,0,0,1,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,1.00,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,-2/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,-1.00,-0.707,0.408]
},

{
"id": 267,
"name": "32",
"color": "mgree",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,-1,0,1,0",
"e8coord": [0,0,0,0,-1.00,0,1.00,0],
"gutcoordlbl": "0,0,0,-1/2,-1/2,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,-0.707,0.577,0.707,-0.408],
"smcoordlbl": "0,0,0,-1/2,-1/3,2,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,-0.183,0.894,0.707,-0.408],
"tricoordlbl": "0,0,0,0,-1,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,-1.00,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,2/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,1.00,0.707,-0.408]
},

{
"id": 268,
"name": "31",
"color": "mygre",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,1,0,0,-1,0",
"e8coord": [0,0,0,1.00,0,0,-1.00,0],
"gutcoordlbl": "0,0,0,-1/2,1/2,-2/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,-0.707,0.707,-0.577,-0.707,0.408],
"smcoordlbl": "0,0,0,-1/2,1/3,-2,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,-0.707,0.183,-0.894,-0.707,0.408],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,-2/3,-1/2,1/(2SQRT(3))",
"tricoord": [0.577,0,0.707,0.408,0,-0.577,-0.707,0.408],
"tri2coordlbl": "0,0,1/2,-1/2,-1/3,-1/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0.707,-0.707,-0.289,-0.500,-0.707,0.408]
},

{
"id": 269,
"name": "31",
"color": "mygre",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,-1,0,0,1,0",
"e8coord": [0,0,0,-1.00,0,0,1.00,0],
"gutcoordlbl": "0,0,0,1/2,-1/2,2/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0.707,-0.707,0.577,0.707,-0.408],
"smcoordlbl": "0,0,0,1/2,-1/3,2,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0.707,-0.183,0.894,0.707,-0.408],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,2/3,1/2,-1/(2SQRT(3))",
"tricoord": [-0.577,0,-0.707,-0.408,0,0.577,0.707,-0.408],
"tri2coordlbl": "0,0,-1/2,1/2,1/3,1/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,-0.707,0.707,0.289,0.500,0.707,-0.408]
},

{
"id": 270,
"name": "32",
"color": "mblue",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,1,0,0,-1",
"e8coord": [0,0,0,0,1.00,0,0,-1.00],
"gutcoordlbl": "0,0,0,1/2,1/2,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,0.707,0.707,-0.577,0,-0.816],
"smcoordlbl": "0,0,0,1/2,1/3,-2,0,-1/SQRT(3)",
"smcoord": [0,0,0,0.707,0.183,-0.894,0,-0.816],
"tricoordlbl": "0,0,0,0,1,-2/3,0,-1/SQRT(3)",
"tricoord": [0,0,0,0,1.00,-0.577,0,-0.816],
"tri2coordlbl": "0,0,0,0,2/3,-2/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,0,0,0.577,-1.00,0,-0.816]
},

{
"id": 271,
"name": "32",
"color": "mblue",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,-1,0,0,1",
"e8coord": [0,0,0,0,-1.00,0,0,1.00],
"gutcoordlbl": "0,0,0,-1/2,-1/2,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,-0.707,-0.707,0.577,0,0.816],
"smcoordlbl": "0,0,0,-1/2,-1/3,2,0,1/SQRT(3)",
"smcoord": [0,0,0,-0.707,-0.183,0.894,0,0.816],
"tricoordlbl": "0,0,0,0,-1,2/3,0,1/SQRT(3)",
"tricoord": [0,0,0,0,-1.00,0.577,0,0.816],
"tri2coordlbl": "0,0,0,0,-2/3,2/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,0,0,-0.577,1.00,0,0.816]
},

{
"id": 272,
"name": "31",
"color": "mbvio",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,1,0,0,0,-1",
"e8coord": [0,0,0,1.00,0,0,0,-1.00],
"gutcoordlbl": "0,0,0,-1/2,1/2,-2/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,-0.707,0.707,-0.577,0,-0.816],
"smcoordlbl": "0,0,0,-1/2,1/3,-2,0,-1/SQRT(3)",
"smcoord": [0,0,0,-0.707,0.183,-0.894,0,-0.816],
"tricoordlbl": "2/3,0,1/2,1/(2SQRT(3)),0,-2/3,0,-1/SQRT(3)",
"tricoord": [0.577,0,0.707,0.408,0,-0.577,0,-0.816],
"tri2coordlbl": "0,0,1/2,-1/2,-1/3,-1/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,0.707,-0.707,-0.289,-0.500,0,-0.816]
},

{
"id": 273,
"name": "31",
"color": "mbvio",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,-1,0,0,0,1",
"e8coord": [0,0,0,-1.00,0,0,0,1.00],
"gutcoordlbl": "0,0,0,1/2,-1/2,2/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,0.707,-0.707,0.577,0,0.816],
"smcoordlbl": "0,0,0,1/2,-1/3,2,0,1/SQRT(3)",
"smcoord": [0,0,0,0.707,-0.183,0.894,0,0.816],
"tricoordlbl": "-2/3,0,-1/2,-1/(2SQRT(3)),0,2/3,0,1/SQRT(3)",
"tricoord": [-0.577,0,-0.707,-0.408,0,0.577,0,0.816],
"tri2coordlbl": "0,0,-1/2,1/2,1/3,1/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,-0.707,0.707,0.289,0.500,0,0.816]
},

{
"id": 274,
"name": "31",
"color": "mblue",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,1,1,0",
"e8coord": [0,0,0,0,0,1.00,1.00,0],
"gutcoordlbl": "0,0,0,0,0,4/3,0,-1/SQRT(3)",
"gutcoord": [0,0,0,0,0,1.15,0,-0.816],
"smcoordlbl": "0,0,0,0,4/3,2,0,-1/SQRT(3)",
"smcoord": [0,0,0,0,0.730,0.894,0,-0.816],
"tricoordlbl": "0,0,0,0,0,4/3,0,-1/SQRT(3)",
"tricoord": [0,0,0,0,0,1.15,0,-0.816],
"tri2coordlbl": "0,0,0,0,2/3,2/SQRT(3),0,-1/SQRT(3)",
"tri2coord": [0,0,0,0,0.577,1.00,0,-0.816]
},

{
"id": 275,
"name": "31",
"color": "mblue",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,-1,-1,0",
"e8coord": [0,0,0,0,0,-1.00,-1.00,0],
"gutcoordlbl": "0,0,0,0,0,-4/3,0,1/SQRT(3)",
"gutcoord": [0,0,0,0,0,-1.15,0,0.816],
"smcoordlbl": "0,0,0,0,-4/3,-2,0,1/SQRT(3)",
"smcoord": [0,0,0,0,-0.730,-0.894,0,0.816],
"tricoordlbl": "0,0,0,0,0,-4/3,0,1/SQRT(3)",
"tricoord": [0,0,0,0,0,-1.15,0,0.816],
"tri2coordlbl": "0,0,0,0,-2/3,-2/SQRT(3),0,1/SQRT(3)",
"tri2coord": [0,0,0,0,-0.577,-1.00,0,0.816]
},

{
"id": 276,
"name": "31",
"color": "mgree",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,1,0,1",
"e8coord": [0,0,0,0,0,1.00,0,1.00],
"gutcoordlbl": "0,0,0,0,0,4/3,-1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,1.15,-0.707,0.408],
"smcoordlbl": "0,0,0,0,4/3,2,-1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0,0.730,0.894,-0.707,0.408],
"tricoordlbl": "0,0,0,0,0,4/3,-1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,1.15,-0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,2/SQRT(3),-1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,1.00,-0.707,0.408]
},

{
"id": 277,
"name": "31",
"color": "mgree",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,-1,0,-1",
"e8coord": [0,0,0,0,0,-1.00,0,-1.00],
"gutcoordlbl": "0,0,0,0,0,-4/3,1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,-1.15,0.707,-0.408],
"smcoordlbl": "0,0,0,0,-4/3,-2,1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0,-0.730,-0.894,0.707,-0.408],
"tricoordlbl": "0,0,0,0,0,-4/3,1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,-1.15,0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,-2/SQRT(3),1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,-1.00,0.707,-0.408]
},

{
"id": 278,
"name": "31",
"color": "mred",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,0,1,1",
"e8coord": [0,0,0,0,0,0,1.00,1.00],
"gutcoordlbl": "0,0,0,0,0,4/3,1/2,1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,1.15,0.707,0.408],
"smcoordlbl": "0,0,0,0,4/3,2,1/2,1/(2SQRT(3))",
"smcoord": [0,0,0,0,0.730,0.894,0.707,0.408],
"tricoordlbl": "0,0,0,0,0,4/3,1/2,1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,1.15,0.707,0.408],
"tri2coordlbl": "0,0,0,0,2/3,2/SQRT(3),1/2,1/(2SQRT(3))",
"tri2coord": [0,0,0,0,0.577,1.00,0.707,0.408]
},

{
"id": 279,
"name": "31",
"color": "mred",
"symbol": "scir",
"label": "so10 X boson",
"sm": false,
"ps": false,
"gg": false,
"e6": true,
"e7": false,
"e8": false,
"e8coordlbl": "0,0,0,0,0,0,-1,-1",
"e8coord": [0,0,0,0,0,0,-1.00,-1.00],
"gutcoordlbl": "0,0,0,0,0,-4/3,-1/2,-1/(2SQRT(3))",
"gutcoord": [0,0,0,0,0,-1.15,-0.707,-0.408],
"smcoordlbl": "0,0,0,0,-4/3,-2,-1/2,-1/(2SQRT(3))",
"smcoord": [0,0,0,0,-0.730,-0.894,-0.707,-0.408],
"tricoordlbl": "0,0,0,0,0,-4/3,-1/2,-1/(2SQRT(3))",
"tricoord": [0,0,0,0,0,-1.15,-0.707,-0.408],
"tri2coordlbl": "0,0,0,0,-2/3,-2/SQRT(3),-1/2,-1/(2SQRT(3))",
"tri2coord": [0,0,0,0,-0.577,-1.00,-0.707,-0.408]
},

{
"id": 280,
"name": "280",
"color": "white",
"symbol": "bcir",
"label": "photon",
"sm": true,
"ps": true,
"gg": true,
"e6": true,
"e7": true,
"e8": true,
"e8coordlbl": "0,0,0,0,0,0,0,0",
"e8coord": [0,0,0,0,0,0,0,0],
"gutcoordlbl": "0,0,0,0,0,0,0,0",
"gutcoord": [0,0,0,0,0,0,0,0],
"smcoordlbl": "0,0,0,0,0,0,0,0",
"smcoord": [0,0,0,0,0,0,0,0],
"tricoordlbl": "0,0,0,0,0,0,0,0",
"tricoord": [0,0,0,0,0,0,0,0],
"tri2coordlbl": "0,0,0,0,0,0,0,0",
"tri2coord": [0,0,0,0,0,0,0,0]
}
]

trialities = [
[1,3,5],

[2,4,6],

[15,17,19],

[16,18,20],

[21,23,25],

[22,24,26],

[31,37,43],

[32,38,44],

[33,39,45],

[34,40,46],

[35,41,47],

[36,42,48],

[49,53,57],

[50,54,58],

[51,55,59],

[52,56,60],

[61,121,181],

[62,122,182],

[63,123,183],

[64,124,184],

[65,125,185],

[66,126,186],

[67,127,187],

[68,128,188],

[69,129,189],

[70,130,190],

[71,131,191],

[72,132,192],

[73,133,193],

[74,134,194],

[75,135,195],

[76,136,196],

[77,137,197],

[78,138,198],

[79,139,199],

[80,140,200],

[81,141,201],

[82,142,202],

[83,143,203],

[84,144,204],

[85,145,205],

[86,146,206],

[87,147,207],

[88,148,208],

[89,149,209],

[90,150,210],

[91,151,211],

[92,152,212],

[93,153,213],

[94,154,214],

[95,155,215],

[96,156,216],

[97,157,217],

[98,158,218],

[99,159,219],

[100,160,220],

[101,161,221],

[102,162,222],

[103,163,223],

[104,164,224],

[105,165,225],

[106,166,226],

[107,167,227],

[108,168,228],

[109,169,229],

[110,170,230],

[111,171,231],

[112,172,232],

[113,173,233],

[114,174,234],

[115,175,235],

[116,176,236],

[117,177,237],

[118,178,238],

[119,179,239],

[120,180,240]
]

trialities7 = [
[1,3,5],

[2,4,6],

[31,37,43],

[32,38,44],

[33,39,45],

[34,40,46],

[35,41,47],

[36,42,48],

[65,125,185],

[66,126,186],

[67,127,187],

[68,128,188],

[69,129,189],

[70,130,190],

[71,131,191],

[72,132,192],

[81,141,201],

[82,142,202],

[83,143,203],

[84,144,204],

[85,145,205],

[86,146,206],

[87,147,207],

[88,148,208],

[97,157,217],

[98,158,218],

[99,159,219],

[100,160,220],

[101,161,221],

[102,162,222],

[103,163,223],

[104,164,224],

[113,173,233],

[114,174,234],

[115,175,235],

[116,176,236],

[117,177,237],

[118,178,238],

[119,179,239],

[120,180,240]
]

hexalities = [
[1,4,5,6,3,2],

[7,8,7,8,7,8],

[9,10,9,10,9,10],

[11,12,11,12,11,12],

[13,14,13,14,13,14],

[15,18,19,16,17,20],

[21,24,25,22,23,26],

[27,28,27,28,27,28],

[29,30,29,30,29,30],

[31,38,43,32,37,44],

[33,40,45,34,39,46],

[35,42,47,36,41,48],

[49,54,57,50,53,58],

[51,56,59,52,55,60],

[61,122,181,62,121,182],

[63,124,183,64,123,184],

[65,126,185,66,125,186],

[67,128,187,68,127,188],

[69,130,189,70,129,190],

[71,132,191,72,131,192],

[73,134,193,74,133,194],

[75,136,195,76,135,196],

[77,138,197,78,137,198],

[79,140,199,80,139,200],

[81,142,201,82,141,202],

[83,144,203,84,143,204],

[85,146,205,86,145,206],

[87,148,207,88,147,208],

[89,150,209,90,149,210],

[91,152,211,92,151,212],

[93,154,213,94,153,214],

[95,156,215,96,155,216],

[97,158,217,98,157,218],

[99,160,219,100,159,220],

[101,162,221,102,161,222],

[103,164,223,104,163,224],

[105,166,225,106,165,226],

[107,168,227,108,167,228],

[109,170,229,110,169,230],

[111,172,231,112,171,232],

[113,174,233,114,173,234],

[115,176,235,116,175,236],

[117,178,237,118,177,238],

[119,180,239,120,179,240]
]

hexalities7 = [
[1,4,5,6,3,2],

[7,8,7,8,7,8],

[9,10,9,10,9,10],

[11,12,11,12,11,12],

[31,38,43,32,37,44],

[33,40,45,34,39,46],

[35,42,47,36,41,48],

[65,126,185,66,125,186],

[67,128,187,68,127,188],

[69,130,189,70,129,190],

[71,132,191,72,131,192],

[81,142,201,82,141,202],

[83,144,203,84,143,204],

[85,146,205,86,145,206],

[87,148,207,88,147,208],

[97,158,217,98,157,218],

[99,160,219,100,159,220],

[101,162,221,102,161,222],

[103,164,223,104,163,224],

[113,174,233,114,173,234],

[115,176,235,116,175,236],

[117,178,237,118,177,238],

[119,180,239,120,179,240]
]

interactions = [
[1,6,241],

[1,14,26],

[1,16,23],

[1,18,21],

[1,19,29],

[1,22,17],

[1,24,15],

[1,25,13],

[1,30,20],

[1,58,60],

[1,59,57],

[1,62,64],

[1,63,61],

[1,66,68],

[1,67,65],

[1,70,72],

[1,71,69],

[1,74,76],

[1,75,73],

[1,78,80],

[1,79,77],

[1,82,84],

[1,83,81],

[1,86,88],

[1,87,85],

[1,90,92],

[1,91,89],

[1,94,96],

[1,95,93],

[1,98,100],

[1,99,97],

[1,102,104],

[1,103,101],

[1,106,108],

[1,107,105],

[1,110,112],

[1,111,109],

[1,114,116],

[1,115,113],

[1,118,120],

[1,119,117],

[1,185,189],

[1,187,191],

[1,190,186],

[1,192,188],

[1,201,205],

[1,203,207],

[1,206,202],

[1,208,204],

[1,217,221],

[1,219,223],

[1,222,218],

[1,224,220],

[1,233,237],

[1,235,239],

[1,238,234],

[1,240,236],

[1,241,1],

[2,5,241],

[2,13,23],

[2,15,26],

[2,18,30],

[2,19,22],

[2,21,20],

[2,24,14],

[2,25,16],

[2,29,17],

[2,53,55],

[2,56,54],

[2,126,130],

[2,128,132],

[2,129,125],

[2,131,127],

[2,142,146],

[2,144,148],

[2,145,141],

[2,147,143],

[2,158,162],

[2,160,164],

[2,161,157],

[2,163,159],

[2,174,178],

[2,176,180],

[2,177,173],

[2,179,175],

[2,181,183],

[2,184,182],

[2,185,187],

[2,188,186],

[2,189,191],

[2,192,190],

[2,193,195],

[2,196,194],

[2,197,199],

[2,200,198],

[2,201,203],

[2,204,202],

[2,205,207],

[2,208,206],

[2,209,211],

[2,212,210],

[2,213,215],

[2,216,214],

[2,217,219],

[2,220,218],

[2,221,223],

[2,224,222],

[2,225,227],

[2,228,226],

[2,229,231],

[2,232,230],

[2,233,235],

[2,236,234],

[2,237,239],

[2,240,238],

[2,241,2],

[3,4,241],

[3,14,22],

[3,15,29],

[3,18,25],

[3,20,23],

[3,21,13],

[3,24,19],

[3,26,17],

[3,30,16],

[3,50,52],

[3,51,49],

[3,65,69],

[3,67,71],

[3,70,66],

[3,72,68],

[3,81,85],

[3,83,87],

[3,86,82],

[3,88,84],

[3,97,101],

[3,99,103],

[3,102,98],

[3,104,100],

[3,113,117],

[3,115,119],

[3,118,114],

[3,120,116],

[3,122,124],

[3,123,121],

[3,126,128],

[3,127,125],

[3,130,132],

[3,131,129],

[3,134,136],

[3,135,133],

[3,138,140],

[3,139,137],

[3,142,144],

[3,143,141],

[3,146,148],

[3,147,145],

[3,150,152],

[3,151,149],

[3,154,156],

[3,155,153],

[3,158,160],

[3,159,157],

[3,162,164],

[3,163,161],

[3,166,168],

[3,167,165],

[3,170,172],

[3,171,169],

[3,174,176],

[3,175,173],

[3,178,180],

[3,179,177],

[3,241,3],

[3,242,124],

[3,251,136],

[3,253,152],

[3,255,168],

[3,264,137],

[3,268,153],

[3,272,169],

[4,13,21],

[4,16,30],

[4,17,26],

[4,19,24],

[4,22,14],

[4,23,20],

[4,25,18],

[4,29,15],

[4,49,51],

[4,52,50],

[4,66,70],

[4,68,72],

[4,69,65],

[4,71,67],

[4,82,86],

[4,84,88],

[4,85,81],

[4,87,83],

[4,98,102],

[4,100,104],

[4,101,97],

[4,103,99],

[4,114,118],

[4,116,120],

[4,117,113],

[4,119,115],

[4,121,123],

[4,124,122],

[4,125,127],

[4,128,126],

[4,129,131],

[4,132,130],

[4,133,135],

[4,136,134],

[4,137,139],

[4,140,138],

[4,141,143],

[4,144,142],

[4,145,147],

[4,148,146],

[4,149,151],

[4,152,150],

[4,153,155],

[4,156,154],

[4,157,159],

[4,160,158],

[4,161,163],

[4,164,162],

[4,165,167],

[4,168,166],

[4,169,171],

[4,172,170],

[4,173,175],

[4,176,174],

[4,177,179],

[4,180,178],

[4,241,4],

[4,243,123],

[4,250,135],

[4,252,151],

[4,254,167],

[4,265,138],

[4,269,154],

[4,273,170],

[5,14,24],

[5,16,25],

[5,17,29],

[5,20,21],

[5,22,19],

[5,23,13],

[5,26,15],

[5,30,18],

[5,54,56],

[5,55,53],

[5,125,129],

[5,127,131],

[5,130,126],

[5,132,128],

[5,141,145],

[5,143,147],

[5,146,142],

[5,148,144],

[5,157,161],

[5,159,163],

[5,162,158],

[5,164,160],

[5,173,177],

[5,175,179],

[5,178,174],

[5,180,176],

[5,182,184],

[5,183,181],

[5,186,188],

[5,187,185],

[5,190,192],

[5,191,189],

[5,194,196],

[5,195,193],

[5,198,200],

[5,199,197],

[5,202,204],

[5,203,201],

[5,206,208],

[5,207,205],

[5,210,212],

[5,211,209],

[5,214,216],

[5,215,213],

[5,218,220],

[5,219,217],

[5,222,224],

[5,223,221],

[5,226,228],

[5,227,225],

[5,230,232],

[5,231,229],

[5,234,236],

[5,235,233],

[5,238,240],

[5,239,237],

[5,241,5],

[6,13,25],

[6,15,24],

[6,17,22],

[6,20,30],

[6,21,18],

[6,23,16],

[6,26,14],

[6,29,19],

[6,57,59],

[6,60,58],

[6,61,63],

[6,64,62],

[6,65,67],

[6,68,66],

[6,69,71],

[6,72,70],

[6,73,75],

[6,76,74],

[6,77,79],

[6,80,78],

[6,81,83],

[6,84,82],

[6,85,87],

[6,88,86],

[6,89,91],

[6,92,90],

[6,93,95],

[6,96,94],

[6,97,99],

[6,100,98],

[6,101,103],

[6,104,102],

[6,105,107],

[6,108,106],

[6,109,111],

[6,112,110],

[6,113,115],

[6,116,114],

[6,117,119],

[6,120,118],

[6,186,190],

[6,188,192],

[6,189,185],

[6,191,187],

[6,202,206],

[6,204,208],

[6,205,201],

[6,207,203],

[6,218,222],

[6,220,224],

[6,221,217],

[6,223,219],

[6,234,238],

[6,236,240],

[6,237,233],

[6,239,235],

[6,241,6],

[7,8,241],

[7,10,12],

[7,11,9],

[7,32,34],

[7,33,31],

[7,38,40],

[7,39,37],

[7,44,46],

[7,45,43],

[7,73,89],

[7,75,91],

[7,77,93],

[7,79,95],

[7,81,97],

[7,83,99],

[7,85,101],

[7,87,103],

[7,90,74],

[7,92,76],

[7,94,78],

[7,96,80],

[7,98,82],

[7,100,84],

[7,102,86],

[7,104,88],

[7,133,149],

[7,135,151],

[7,137,153],

[7,139,155],

[7,141,157],

[7,143,159],

[7,145,161],

[7,147,163],

[7,150,134],

[7,152,136],

[7,154,138],

[7,156,140],

[7,158,142],

[7,160,144],

[7,162,146],

[7,164,148],

[7,193,209],

[7,195,211],

[7,197,213],

[7,199,215],

[7,201,217],

[7,203,219],

[7,205,221],

[7,207,223],

[7,210,194],

[7,212,196],

[7,214,198],

[7,216,200],

[7,218,202],

[7,220,204],

[7,222,206],

[7,224,208],

[7,241,7],

[7,245,46],

[7,246,43],

[7,250,149],

[7,253,134],

[7,256,40],

[7,259,37],

[7,262,34],

[7,264,155],

[7,267,31],

[7,269,140],

[7,277,43],

[7,278,46],

[8,9,11],

[8,12,10],

[8,31,33],

[8,34,32],

[8,37,39],

[8,40,38],

[8,43,45],

[8,46,44],

[8,74,90],

[8,76,92],

[8,78,94],

[8,80,96],

[8,82,98],

[8,84,100],

[8,86,102],

[8,88,104],

[8,89,73],

[8,91,75],

[8,93,77],

[8,95,79],

[8,97,81],

[8,99,83],

[8,101,85],

[8,103,87],

[8,134,150],

[8,136,152],

[8,138,154],

[8,140,156],

[8,142,158],

[8,144,160],

[8,146,162],

[8,148,164],

[8,149,133],

[8,151,135],

[8,153,137],

[8,155,139],

[8,157,141],

[8,159,143],

[8,161,145],

[8,163,147],

[8,194,210],

[8,196,212],

[8,198,214],

[8,200,216],

[8,202,218],

[8,204,220],

[8,206,222],

[8,208,224],

[8,209,193],

[8,211,195],

[8,213,197],

[8,215,199],

[8,217,201],

[8,219,203],

[8,221,205],

[8,223,207],

[8,241,8],

[8,244,45],

[8,247,44],

[8,251,150],

[8,252,133],

[8,257,39],

[8,258,38],

[8,263,33],

[8,265,156],

[8,266,32],

[8,268,139],

[8,276,44],

[8,279,45],

[9,10,241],

[9,12,7],

[9,32,36],

[9,35,31],

[9,38,42],

[9,41,37],

[9,44,48],

[9,47,43],

[9,73,105],

[9,75,107],

[9,77,109],

[9,79,111],

[9,81,113],

[9,83,115],

[9,85,117],

[9,87,119],

[9,106,74],

[9,108,76],

[9,110,78],

[9,112,80],

[9,114,82],

[9,116,84],

[9,118,86],

[9,120,88],

[9,133,165],

[9,135,167],

[9,137,169],

[9,139,171],

[9,141,173],

[9,143,175],

[9,145,177],

[9,147,179],

[9,166,134],

[9,168,136],

[9,170,138],

[9,172,140],

[9,174,142],

[9,176,144],

[9,178,146],

[9,180,148],

[9,193,225],

[9,195,227],

[9,197,229],

[9,199,231],

[9,201,233],

[9,203,235],

[9,205,237],

[9,207,239],

[9,226,194],

[9,228,196],

[9,230,198],

[9,232,200],

[9,234,202],

[9,236,204],

[9,238,206],

[9,240,208],

[9,241,9],

[9,245,48],

[9,248,43],

[9,250,165],

[9,255,134],

[9,256,42],

[9,261,37],

[9,262,36],

[9,264,171],

[9,271,31],

[9,273,140],

[9,275,43],

[9,278,48],

[10,11,8],

[10,31,35],

[10,36,32],

[10,37,41],

[10,42,38],

[10,43,47],

[10,48,44],

[10,74,106],

[10,76,108],

[10,78,110],

[10,80,112],

[10,82,114],

[10,84,116],

[10,86,118],

[10,88,120],

[10,105,73],

[10,107,75],

[10,109,77],

[10,111,79],

[10,113,81],

[10,115,83],

[10,117,85],

[10,119,87],

[10,134,166],

[10,136,168],

[10,138,170],

[10,140,172],

[10,142,174],

[10,144,176],

[10,146,178],

[10,148,180],

[10,165,133],

[10,167,135],

[10,169,137],

[10,171,139],

[10,173,141],

[10,175,143],

[10,177,145],

[10,179,147],

[10,194,226],

[10,196,228],

[10,198,230],

[10,200,232],

[10,202,234],

[10,204,236],

[10,206,238],

[10,208,240],

[10,225,193],

[10,227,195],

[10,229,197],

[10,231,199],

[10,233,201],

[10,235,203],

[10,237,205],

[10,239,207],

[10,241,10],

[10,244,47],

[10,249,44],

[10,251,166],

[10,254,133],

[10,257,41],

[10,260,38],

[10,263,35],

[10,265,172],

[10,270,32],

[10,272,139],

[10,274,44],

[10,279,47],

[11,12,241],

[11,34,36],

[11,35,33],

[11,40,42],

[11,41,39],

[11,46,48],

[11,47,45],

[11,89,105],

[11,91,107],

[11,93,109],

[11,95,111],

[11,97,113],

[11,99,115],

[11,101,117],

[11,103,119],

[11,106,90],

[11,108,92],

[11,110,94],

[11,112,96],

[11,114,98],

[11,116,100],

[11,118,102],

[11,120,104],

[11,149,165],

[11,151,167],

[11,153,169],

[11,155,171],

[11,157,173],

[11,159,175],

[11,161,177],

[11,163,179],

[11,166,150],

[11,168,152],

[11,170,154],

[11,172,156],

[11,174,158],

[11,176,160],

[11,178,162],

[11,180,164],

[11,209,225],

[11,211,227],

[11,213,229],

[11,215,231],

[11,217,233],

[11,219,235],

[11,221,237],

[11,223,239],

[11,226,210],

[11,228,212],

[11,230,214],

[11,232,216],

[11,234,218],

[11,236,220],

[11,238,222],

[11,240,224],

[11,241,11],

[11,247,48],

[11,248,45],

[11,252,165],

[11,255,150],

[11,258,42],

[11,261,39],

[11,266,36],

[11,268,171],

[11,271,33],

[11,273,156],

[11,275,45],

[11,276,48],

[12,33,35],

[12,36,34],

[12,39,41],

[12,42,40],

[12,45,47],

[12,48,46],

[12,90,106],

[12,92,108],

[12,94,110],

[12,96,112],

[12,98,114],

[12,100,116],

[12,102,118],

[12,104,120],

[12,105,89],

[12,107,91],

[12,109,93],

[12,111,95],

[12,113,97],

[12,115,99],

[12,117,101],

[12,119,103],

[12,150,166],

[12,152,168],

[12,154,170],

[12,156,172],

[12,158,174],

[12,160,176],

[12,162,178],

[12,164,180],

[12,165,149],

[12,167,151],

[12,169,153],

[12,171,155],

[12,173,157],

[12,175,159],

[12,177,161],

[12,179,163],

[12,210,226],

[12,212,228],

[12,214,230],

[12,216,232],

[12,218,234],

[12,220,236],

[12,222,238],

[12,224,240],

[12,225,209],

[12,227,211],

[12,229,213],

[12,231,215],

[12,233,217],

[12,235,219],

[12,237,221],

[12,239,223],

[12,241,12],

[12,246,47],

[12,249,46],

[12,253,166],

[12,254,149],

[12,259,41],

[12,260,40],

[12,267,35],

[12,269,172],

[12,270,34],

[12,272,155],

[12,274,46],

[12,277,47],

[13,14,241],

[13,22,3],

[13,24,5],

[13,26,1],

[13,27,29],

[13,30,28],

[13,51,188],

[13,55,68],

[13,59,128],

[13,62,129],

[13,67,56],

[13,70,181],

[13,74,144],

[13,79,145],

[13,83,193],

[13,86,200],

[13,90,160],

[13,95,161],

[13,99,209],

[13,102,216],

[13,106,176],

[13,111,177],

[13,115,225],

[13,118,232],

[13,122,189],

[13,127,60],

[13,130,61],

[13,134,204],

[13,139,205],

[13,143,73],

[13,146,80],

[13,150,220],

[13,155,221],

[13,159,89],

[13,162,96],

[13,166,236],

[13,171,237],

[13,175,105],

[13,178,112],

[13,182,69],

[13,187,52],

[13,190,121],

[13,194,84],

[13,199,85],

[13,203,133],

[13,206,140],

[13,210,100],

[13,215,101],

[13,219,149],

[13,222,156],

[13,226,116],

[13,231,117],

[13,235,165],

[13,238,172],

[13,241,13],

[13,242,189],

[13,251,204],

[13,253,220],

[13,255,236],

[13,264,205],

[13,268,221],

[13,272,237],

[14,21,4],

[14,23,2],

[14,25,6],

[14,28,30],

[14,29,27],

[14,52,187],

[14,56,67],

[14,60,127],

[14,61,130],

[14,68,55],

[14,69,182],

[14,73,143],

[14,80,146],

[14,84,194],

[14,85,199],

[14,89,159],

[14,96,162],

[14,100,210],

[14,101,215],

[14,105,175],

[14,112,178],

[14,116,226],

[14,117,231],

[14,121,190],

[14,128,59],

[14,129,62],

[14,133,203],

[14,140,206],

[14,144,74],

[14,145,79],

[14,149,219],

[14,156,222],

[14,160,90],

[14,161,95],

[14,165,235],

[14,172,238],

[14,176,106],

[14,177,111],

[14,181,70],

[14,188,51],

[14,189,122],

[14,193,83],

[14,200,86],

[14,204,134],

[14,205,139],

[14,209,99],

[14,216,102],

[14,220,150],

[14,221,155],

[14,225,115],

[14,232,118],

[14,236,166],

[14,237,171],

[14,241,14],

[14,243,190],

[14,250,203],

[14,252,219],

[14,254,235],

[14,265,206],

[14,269,222],

[14,273,238],

[15,16,241],

[15,22,27],

[15,23,1],

[15,25,5],

[15,28,21],

[15,30,4],

[15,52,189],

[15,54,65],

[15,58,131],

[15,63,126],

[15,66,53],

[15,71,184],

[15,75,147],

[15,78,142],

[15,82,196],

[15,87,197],

[15,91,163],

[15,94,158],

[15,98,212],

[15,103,213],

[15,107,179],

[15,110,174],

[15,114,228],

[15,119,229],

[15,121,188],

[15,125,64],

[15,132,57],

[15,133,205],

[15,140,204],

[15,141,77],

[15,148,76],

[15,149,221],

[15,156,220],

[15,157,93],

[15,164,92],

[15,165,237],

[15,172,236],

[15,173,109],

[15,180,108],

[15,183,72],

[15,187,122],

[15,190,51],

[15,195,81],

[15,198,88],

[15,203,139],

[15,206,134],

[15,211,97],

[15,214,104],

[15,219,155],

[15,222,150],

[15,227,113],

[15,230,120],

[15,235,171],

[15,238,166],

[15,241,15],

[15,243,188],

[15,250,205],

[15,252,221],

[15,254,237],

[15,265,204],

[15,269,220],

[15,273,236],

[16,21,28],

[16,24,6],

[16,26,2],

[16,27,22],

[16,29,3],

[16,51,190],

[16,53,66],

[16,57,132],

[16,64,125],

[16,65,54],

[16,72,183],

[16,76,148],

[16,77,141],

[16,81,195],

[16,88,198],

[16,92,164],

[16,93,157],

[16,97,211],

[16,104,214],

[16,108,180],

[16,109,173],

[16,113,227],

[16,120,230],

[16,122,187],

[16,126,63],

[16,131,58],

[16,134,206],

[16,139,203],

[16,142,78],

[16,147,75],

[16,150,222],

[16,155,219],

[16,158,94],

[16,163,91],

[16,166,238],

[16,171,235],

[16,174,110],

[16,179,107],

[16,184,71],

[16,188,121],

[16,189,52],

[16,196,82],

[16,197,87],

[16,204,140],

[16,205,133],

[16,212,98],

[16,213,103],

[16,220,156],

[16,221,149],

[16,228,114],

[16,229,119],

[16,236,172],

[16,237,165],

[16,241,16],

[16,242,187],

[16,251,206],

[16,253,222],

[16,255,238],

[16,264,203],

[16,268,219],

[16,272,235],

[17,18,241],

[17,21,1],

[17,24,27],

[17,25,3],

[17,28,23],

[17,30,2],

[17,50,191],

[17,56,69],

[17,58,125],

[17,63,132],

[17,67,182],

[17,70,55],

[17,75,141],

[17,78,148],

[17,83,199],

[17,86,194],

[17,91,157],

[17,94,164],

[17,99,215],

[17,102,210],

[17,107,173],

[17,110,180],

[17,115,231],

[17,118,226],

[17,123,186],

[17,126,57],

[17,131,64],

[17,135,207],

[17,138,202],

[17,142,76],

[17,147,77],

[17,151,223],

[17,154,218],

[17,158,92],

[17,163,93],

[17,167,239],

[17,170,234],

[17,174,108],

[17,179,109],

[17,181,68],

[17,185,124],

[17,192,49],

[17,193,85],

[17,200,84],

[17,201,137],

[17,208,136],

[17,209,101],

[17,216,100],

[17,217,153],

[17,224,152],

[17,225,117],

[17,232,116],

[17,233,169],

[17,240,168],

[17,241,17],

[18,22,6],

[18,23,28],

[18,26,4],

[18,27,24],

[18,29,5],

[18,49,192],

[18,55,70],

[18,57,126],

[18,64,131],

[18,68,181],

[18,69,56],

[18,76,142],

[18,77,147],

[18,84,200],

[18,85,193],

[18,92,158],

[18,93,163],

[18,100,216],

[18,101,209],

[18,108,174],

[18,109,179],

[18,116,232],

[18,117,225],

[18,124,185],

[18,125,58],

[18,132,63],

[18,136,208],

[18,137,201],

[18,141,75],

[18,148,78],

[18,152,224],

[18,153,217],

[18,157,91],

[18,164,94],

[18,168,240],

[18,169,233],

[18,173,107],

[18,180,110],

[18,182,67],

[18,186,123],

[18,191,50],

[18,194,86],

[18,199,83],

[18,202,138],

[18,207,135],

[18,210,102],

[18,215,99],

[18,218,154],

[18,223,151],

[18,226,118],

[18,231,115],

[18,234,170],

[18,239,167],

[18,241,18],

[19,20,241],

[19,21,5],

[19,23,3],

[19,26,27],

[19,28,25],

[19,30,6],

[19,50,185],

[19,54,71],

[19,60,129],

[19,61,128],

[19,65,184],

[19,72,53],

[19,73,145],

[19,80,144],

[19,81,197],

[19,88,196],

[19,89,161],

[19,96,160],

[19,97,213],

[19,104,212],

[19,105,177],

[19,112,176],

[19,113,229],

[19,120,228],

[19,123,192],

[19,127,62],

[19,130,59],

[19,135,201],

[19,138,208],

[19,143,79],

[19,146,74],

[19,151,217],

[19,154,224],

[19,159,95],

[19,162,90],

[19,167,233],

[19,170,240],

[19,175,111],

[19,178,106],

[19,183,66],

[19,186,49],

[19,191,124],

[19,195,87],

[19,198,82],

[19,202,136],

[19,207,137],

[19,211,103],

[19,214,98],

[19,218,152],

[19,223,153],

[19,227,119],

[19,230,114],

[19,234,168],

[19,239,169],

[19,241,19],

[20,22,2],

[20,24,4],

[20,25,28],

[20,27,26],

[20,29,1],

[20,49,186],

[20,53,72],

[20,59,130],

[20,62,127],

[20,66,183],

[20,71,54],

[20,74,146],

[20,79,143],

[20,82,198],

[20,87,195],

[20,90,162],

[20,95,159],

[20,98,214],

[20,103,211],

[20,106,178],

[20,111,175],

[20,114,230],

[20,119,227],

[20,124,191],

[20,128,61],

[20,129,60],

[20,136,202],

[20,137,207],

[20,144,80],

[20,145,73],

[20,152,218],

[20,153,223],

[20,160,96],

[20,161,89],

[20,168,234],

[20,169,239],

[20,176,112],

[20,177,105],

[20,184,65],

[20,185,50],

[20,192,123],

[20,196,88],

[20,197,81],

[20,201,135],

[20,208,138],

[20,212,104],

[20,213,97],

[20,217,151],

[20,224,154],

[20,228,120],

[20,229,113],

[20,233,167],

[20,240,170],

[20,241,20],

[21,22,241],

[21,27,15],

[21,49,188],

[21,55,72],

[21,59,126],

[21,62,131],

[21,66,181],

[21,71,56],

[21,74,142],

[21,79,147],

[21,82,200],

[21,87,193],

[21,90,158],

[21,95,163],

[21,98,216],

[21,103,209],

[21,106,174],

[21,111,179],

[21,114,232],

[21,119,225],

[21,124,189],

[21,125,60],

[21,132,61],

[21,136,204],

[21,137,205],

[21,141,73],

[21,148,80],

[21,152,220],

[21,153,221],

[21,157,89],

[21,164,96],

[21,168,236],

[21,169,237],

[21,173,105],

[21,180,112],

[21,182,65],

[21,187,50],

[21,190,123],

[21,194,88],

[21,199,81],

[21,203,135],

[21,206,138],

[21,210,104],

[21,215,97],

[21,219,151],

[21,222,154],

[21,226,120],

[21,231,113],

[21,235,167],

[21,238,170],

[21,241,21],

[22,28,16],

[22,50,187],

[22,56,71],

[22,60,125],

[22,61,132],

[22,65,182],

[22,72,55],

[22,73,141],

[22,80,148],

[22,81,199],

[22,88,194],

[22,89,157],

[22,96,164],

[22,97,215],

[22,104,210],

[22,105,173],

[22,112,180],

[22,113,231],

[22,120,226],

[22,123,190],

[22,126,59],

[22,131,62],

[22,135,203],

[22,138,206],

[22,142,74],

[22,147,79],

[22,151,219],

[22,154,222],

[22,158,90],

[22,163,95],

[22,167,235],

[22,170,238],

[22,174,106],

[22,179,111],

[22,181,66],

[22,188,49],

[22,189,124],

[22,193,87],

[22,200,82],

[22,204,136],

[22,205,137],

[22,209,103],

[22,216,98],

[22,220,152],

[22,221,153],

[22,225,119],

[22,232,114],

[22,236,168],

[22,237,169],

[22,241,22],

[23,24,241],

[23,27,17],

[23,51,186],

[23,53,68],

[23,59,132],

[23,62,125],

[23,67,54],

[23,70,183],

[23,74,148],

[23,79,141],

[23,83,195],

[23,86,198],

[23,90,164],

[23,95,157],

[23,99,211],

[23,102,214],

[23,106,180],

[23,111,173],

[23,115,227],

[23,118,230],

[23,122,191],

[23,126,61],

[23,131,60],

[23,134,202],

[23,139,207],

[23,142,80],

[23,147,73],

[23,150,218],

[23,155,223],

[23,158,96],

[23,163,89],

[23,166,234],

[23,171,239],

[23,174,112],

[23,179,105],

[23,184,69],

[23,185,52],

[23,192,121],

[23,196,84],

[23,197,85],

[23,201,133],

[23,208,140],

[23,212,100],

[23,213,101],

[23,217,149],

[23,224,156],

[23,228,116],

[23,229,117],

[23,233,165],

[23,240,172],

[23,241,23],

[23,242,191],

[23,251,202],

[23,253,218],

[23,255,234],

[23,264,207],

[23,268,223],

[23,272,239],

[24,28,18],

[24,52,185],

[24,54,67],

[24,60,131],

[24,61,126],

[24,68,53],

[24,69,184],

[24,73,147],

[24,80,142],

[24,84,196],

[24,85,197],

[24,89,163],

[24,96,158],

[24,100,212],

[24,101,213],

[24,105,179],

[24,112,174],

[24,116,228],

[24,117,229],

[24,121,192],

[24,125,62],

[24,132,59],

[24,133,201],

[24,140,208],

[24,141,79],

[24,148,74],

[24,149,217],

[24,156,224],

[24,157,95],

[24,164,90],

[24,165,233],

[24,172,240],

[24,173,111],

[24,180,106],

[24,183,70],

[24,186,51],

[24,191,122],

[24,195,83],

[24,198,86],

[24,202,134],

[24,207,139],

[24,211,99],

[24,214,102],

[24,218,150],

[24,223,155],

[24,227,115],

[24,230,118],

[24,234,166],

[24,239,171],

[24,241,24],

[24,243,192],

[24,250,201],

[24,252,217],

[24,254,233],

[24,265,208],

[24,269,224],

[24,273,240],

[25,26,241],

[25,27,19],

[25,51,192],

[25,55,66],

[25,57,128],

[25,64,129],

[25,65,56],

[25,72,181],

[25,76,144],

[25,77,145],

[25,81,193],

[25,88,200],

[25,92,160],

[25,93,161],

[25,97,209],

[25,104,216],

[25,108,176],

[25,109,177],

[25,113,225],

[25,120,232],

[25,122,185],

[25,127,58],

[25,130,63],

[25,134,208],

[25,139,201],

[25,143,75],

[25,146,78],

[25,150,224],

[25,155,217],

[25,159,91],

[25,162,94],

[25,166,240],

[25,171,233],

[25,175,107],

[25,178,110],

[25,182,71],

[25,186,121],

[25,191,52],

[25,194,82],

[25,199,87],

[25,202,140],

[25,207,133],

[25,210,98],

[25,215,103],

[25,218,156],

[25,223,149],

[25,226,114],

[25,231,119],

[25,234,172],

[25,239,165],

[25,241,25],

[25,242,185],

[25,251,208],

[25,253,224],

[25,255,240],

[25,264,201],

[25,268,217],

[25,272,233],

[26,28,20],

[26,52,191],

[26,56,65],

[26,58,127],

[26,63,130],

[26,66,55],

[26,71,182],

[26,75,143],

[26,78,146],

[26,82,194],

[26,87,199],

[26,91,159],

[26,94,162],

[26,98,210],

[26,103,215],

[26,107,175],

[26,110,178],

[26,114,226],

[26,119,231],

[26,121,186],

[26,128,57],

[26,129,64],

[26,133,207],

[26,140,202],

[26,144,76],

[26,145,77],

[26,149,223],

[26,156,218],

[26,160,92],

[26,161,93],

[26,165,239],

[26,172,234],

[26,176,108],

[26,177,109],

[26,181,72],

[26,185,122],

[26,192,51],

[26,193,81],

[26,200,88],

[26,201,139],

[26,208,134],

[26,209,97],

[26,216,104],

[26,217,155],

[26,224,150],

[26,225,113],

[26,232,120],

[26,233,171],

[26,240,166],

[26,241,26],

[26,243,186],

[26,250,207],

[26,252,223],

[26,254,239],

[26,265,202],

[26,269,218],

[26,273,234],

[27,28,241],

[27,30,14],

[27,50,122],

[27,52,124],

[27,54,182],

[27,56,184],

[27,58,62],

[27,60,64],

[27,61,57],

[27,63,59],

[27,73,77],

[27,75,79],

[27,78,74],

[27,80,76],

[27,89,93],

[27,91,95],

[27,94,90],

[27,96,92],

[27,105,109],

[27,107,111],

[27,110,106],

[27,112,108],

[27,121,49],

[27,123,51],

[27,133,137],

[27,135,139],

[27,138,134],

[27,140,136],

[27,149,153],

[27,151,155],

[27,154,150],

[27,156,152],

[27,165,169],

[27,167,171],

[27,170,166],

[27,172,168],

[27,181,53],

[27,183,55],

[27,193,197],

[27,195,199],

[27,198,194],

[27,200,196],

[27,209,213],

[27,211,215],

[27,214,210],

[27,216,212],

[27,225,229],

[27,227,231],

[27,230,226],

[27,232,228],

[27,241,27],

[27,243,49],

[27,250,137],

[27,252,153],

[27,254,169],

[27,265,136],

[27,269,152],

[27,273,168],

[28,29,13],

[28,49,121],

[28,51,123],

[28,53,181],

[28,55,183],

[28,57,61],

[28,59,63],

[28,62,58],

[28,64,60],

[28,74,78],

[28,76,80],

[28,77,73],

[28,79,75],

[28,90,94],

[28,92,96],

[28,93,89],

[28,95,91],

[28,106,110],

[28,108,112],

[28,109,105],

[28,111,107],

[28,122,50],

[28,124,52],

[28,134,138],

[28,136,140],

[28,137,133],

[28,139,135],

[28,150,154],

[28,152,156],

[28,153,149],

[28,155,151],

[28,166,170],

[28,168,172],

[28,169,165],

[28,171,167],

[28,182,54],

[28,184,56],

[28,194,198],

[28,196,200],

[28,197,193],

[28,199,195],

[28,210,214],

[28,212,216],

[28,213,209],

[28,215,211],

[28,226,230],

[28,228,232],

[28,229,225],

[28,231,227],

[28,241,28],

[28,242,50],

[28,251,138],

[28,253,154],

[28,255,170],

[28,264,135],

[28,268,151],

[28,272,167],

[29,30,241],

[29,50,189],

[29,54,69],

[29,58,129],

[29,63,128],

[29,67,184],

[29,70,53],

[29,75,145],

[29,78,144],

[29,83,197],

[29,86,196],

[29,91,161],

[29,94,160],

[29,99,213],

[29,102,212],

[29,107,177],

[29,110,176],

[29,115,229],

[29,118,228],

[29,123,188],

[29,127,64],

[29,130,57],

[29,135,205],

[29,138,204],

[29,143,77],

[29,146,76],

[29,151,221],

[29,154,220],

[29,159,93],

[29,162,92],

[29,167,237],

[29,170,236],

[29,175,109],

[29,178,108],

[29,183,68],

[29,187,124],

[29,190,49],

[29,195,85],

[29,198,84],

[29,203,137],

[29,206,136],

[29,211,101],

[29,214,100],

[29,219,153],

[29,222,152],

[29,227,117],

[29,230,116],

[29,235,169],

[29,238,168],

[29,241,29],

[30,49,190],

[30,53,70],

[30,57,130],

[30,64,127],

[30,68,183],

[30,69,54],

[30,76,146],

[30,77,143],

[30,84,198],

[30,85,195],

[30,92,162],

[30,93,159],

[30,100,214],

[30,101,211],

[30,108,178],

[30,109,175],

[30,116,230],

[30,117,227],

[30,124,187],

[30,128,63],

[30,129,58],

[30,136,206],

[30,137,203],

[30,144,78],

[30,145,75],

[30,152,222],

[30,153,219],

[30,160,94],

[30,161,91],

[30,168,238],

[30,169,235],

[30,176,110],

[30,177,107],

[30,184,67],

[30,188,123],

[30,189,50],

[30,196,86],

[30,197,83],

[30,204,138],

[30,205,135],

[30,212,102],

[30,213,99],

[30,220,154],

[30,221,151],

[30,228,118],

[30,229,115],

[30,236,170],

[30,237,167],

[30,241,30],

[31,32,241],

[31,34,7],

[31,36,9],

[31,39,48],

[31,41,46],

[31,45,42],

[31,47,40],

[31,50,138],

[31,52,140],

[31,57,76],

[31,59,74],

[31,61,80],

[31,63,78],

[31,73,60],

[31,75,58],

[31,77,64],

[31,79,62],

[31,98,119],

[31,100,117],

[31,102,115],

[31,104,113],

[31,114,103],

[31,116,101],

[31,118,99],

[31,120,97],

[31,122,134],

[31,124,136],

[31,126,142],

[31,128,144],

[31,130,146],

[31,132,148],

[31,133,121],

[31,135,123],

[31,137,49],

[31,139,51],

[31,141,125],

[31,143,127],

[31,145,129],

[31,147,131],

[31,185,208],

[31,187,206],

[31,189,204],

[31,191,202],

[31,201,192],

[31,203,190],

[31,205,188],

[31,207,186],

[31,210,231],

[31,212,229],

[31,214,227],

[31,216,225],

[31,226,215],

[31,228,213],

[31,230,211],

[31,232,209],

[31,241,31],

[31,242,134],

[31,246,42],

[31,248,40],

[31,250,121],

[31,259,48],

[31,261,46],

[31,262,241],

[31,264,51],

[31,266,7],

[31,270,9],

[31,275,40],

[31,277,42],

[32,33,8],

[32,35,10],

[32,40,47],

[32,42,45],

[32,46,41],

[32,48,39],

[32,49,137],

[32,51,139],

[32,58,75],

[32,60,73],

[32,62,79],

[32,64,77],

[32,74,59],

[32,76,57],

[32,78,63],

[32,80,61],

[32,97,120],

[32,99,118],

[32,101,116],

[32,103,114],

[32,113,104],

[32,115,102],

[32,117,100],

[32,119,98],

[32,121,133],

[32,123,135],

[32,125,141],

[32,127,143],

[32,129,145],

[32,131,147],

[32,134,122],

[32,136,124],

[32,138,50],

[32,140,52],

[32,142,126],

[32,144,128],

[32,146,130],

[32,148,132],

[32,186,207],

[32,188,205],

[32,190,203],

[32,192,201],

[32,202,191],

[32,204,189],

[32,206,187],

[32,208,185],

[32,209,232],

[32,211,230],

[32,213,228],

[32,215,226],

[32,225,216],

[32,227,214],

[32,229,212],

[32,231,210],

[32,241,32],

[32,243,133],

[32,247,41],

[32,249,39],

[32,251,122],

[32,258,47],

[32,260,45],

[32,263,241],

[32,265,52],

[32,267,8],

[32,271,10],

[32,274,39],

[32,276,41],

[33,34,241],

[33,36,11],

[33,37,48],

[33,41,44],

[33,43,42],

[33,47,38],

[33,50,154],

[33,52,156],

[33,57,92],

[33,59,90],

[33,61,96],

[33,63,94],

[33,82,119],

[33,84,117],

[33,86,115],

[33,88,113],

[33,89,60],

[33,91,58],

[33,93,64],

[33,95,62],

[33,114,87],

[33,116,85],

[33,118,83],

[33,120,81],

[33,122,150],

[33,124,152],

[33,126,158],

[33,128,160],

[33,130,162],

[33,132,164],

[33,149,121],

[33,151,123],

[33,153,49],

[33,155,51],

[33,157,125],

[33,159,127],

[33,161,129],

[33,163,131],

[33,185,224],

[33,187,222],

[33,189,220],

[33,191,218],

[33,194,231],

[33,196,229],

[33,198,227],

[33,200,225],

[33,217,192],

[33,219,190],

[33,221,188],

[33,223,186],

[33,226,199],

[33,228,197],

[33,230,195],

[33,232,193],

[33,241,33],

[33,242,150],

[33,244,42],

[33,248,38],

[33,252,121],

[33,257,48],

[33,261,44],

[33,262,8],

[33,266,241],

[33,268,51],

[33,270,11],

[33,275,38],

[33,279,42],

[34,35,12],

[34,38,47],

[34,42,43],

[34,44,41],

[34,48,37],

[34,49,153],

[34,51,155],

[34,58,91],

[34,60,89],

[34,62,95],

[34,64,93],

[34,81,120],

[34,83,118],

[34,85,116],

[34,87,114],

[34,90,59],

[34,92,57],

[34,94,63],

[34,96,61],

[34,113,88],

[34,115,86],

[34,117,84],

[34,119,82],

[34,121,149],

[34,123,151],

[34,125,157],

[34,127,159],

[34,129,161],

[34,131,163],

[34,150,122],

[34,152,124],

[34,154,50],

[34,156,52],

[34,158,126],

[34,160,128],

[34,162,130],

[34,164,132],

[34,186,223],

[34,188,221],

[34,190,219],

[34,192,217],

[34,193,232],

[34,195,230],

[34,197,228],

[34,199,226],

[34,218,191],

[34,220,189],

[34,222,187],

[34,224,185],

[34,225,200],

[34,227,198],

[34,229,196],

[34,231,194],

[34,241,34],

[34,243,149],

[34,245,41],

[34,249,37],

[34,253,122],

[34,256,47],

[34,260,43],

[34,263,7],

[34,267,241],

[34,269,52],

[34,271,12],

[34,274,37],

[34,278,41],

[35,36,241],

[35,37,46],

[35,39,44],

[35,43,40],

[35,45,38],

[35,50,170],

[35,52,172],

[35,57,108],

[35,59,106],

[35,61,112],

[35,63,110],

[35,82,103],

[35,84,101],

[35,86,99],

[35,88,97],

[35,98,87],

[35,100,85],

[35,102,83],

[35,104,81],

[35,105,60],

[35,107,58],

[35,109,64],

[35,111,62],

[35,122,166],

[35,124,168],

[35,126,174],

[35,128,176],

[35,130,178],

[35,132,180],

[35,165,121],

[35,167,123],

[35,169,49],

[35,171,51],

[35,173,125],

[35,175,127],

[35,177,129],

[35,179,131],

[35,185,240],

[35,187,238],

[35,189,236],

[35,191,234],

[35,194,215],

[35,196,213],

[35,198,211],

[35,200,209],

[35,210,199],

[35,212,197],

[35,214,195],

[35,216,193],

[35,233,192],

[35,235,190],

[35,237,188],

[35,239,186],

[35,241,35],

[35,242,166],

[35,244,40],

[35,246,38],

[35,254,121],

[35,257,46],

[35,259,44],

[35,262,10],

[35,266,12],

[35,270,241],

[35,272,51],

[35,277,38],

[35,279,40],

[36,38,45],

[36,40,43],

[36,44,39],

[36,46,37],

[36,49,169],

[36,51,171],

[36,58,107],

[36,60,105],

[36,62,111],

[36,64,109],

[36,81,104],

[36,83,102],

[36,85,100],

[36,87,98],

[36,97,88],

[36,99,86],

[36,101,84],

[36,103,82],

[36,106,59],

[36,108,57],

[36,110,63],

[36,112,61],

[36,121,165],

[36,123,167],

[36,125,173],

[36,127,175],

[36,129,177],

[36,131,179],

[36,166,122],

[36,168,124],

[36,170,50],

[36,172,52],

[36,174,126],

[36,176,128],

[36,178,130],

[36,180,132],

[36,186,239],

[36,188,237],

[36,190,235],

[36,192,233],

[36,193,216],

[36,195,214],

[36,197,212],

[36,199,210],

[36,209,200],

[36,211,198],

[36,213,196],

[36,215,194],

[36,234,191],

[36,236,189],

[36,238,187],

[36,240,185],

[36,241,36],

[36,243,165],

[36,245,39],

[36,247,37],

[36,255,122],

[36,256,45],

[36,258,43],

[36,263,9],

[36,267,11],

[36,271,241],

[36,273,52],

[36,276,37],

[36,278,39],

[37,38,241],

[37,40,7],

[37,42,9],

[37,45,36],

[37,47,34],

[37,49,136],

[37,51,134],

[37,54,198],

[37,56,200],

[37,65,88],

[37,67,86],

[37,69,84],

[37,71,82],

[37,81,72],

[37,83,70],

[37,85,68],

[37,87,66],

[37,90,111],

[37,92,109],

[37,94,107],

[37,96,105],

[37,106,95],

[37,108,93],

[37,110,91],

[37,112,89],

[37,121,140],

[37,123,138],

[37,133,52],

[37,135,50],

[37,137,124],

[37,139,122],

[37,158,179],

[37,160,177],

[37,162,175],

[37,164,173],

[37,174,163],

[37,176,161],

[37,178,159],

[37,180,157],

[37,182,194],

[37,184,196],

[37,186,202],

[37,188,204],

[37,190,206],

[37,192,208],

[37,193,181],

[37,195,183],

[37,197,53],

[37,199,55],

[37,201,185],

[37,203,187],

[37,205,189],

[37,207,191],

[37,241,37],

[37,243,140],

[37,246,36],

[37,248,34],

[37,250,52],

[37,256,241],

[37,258,7],

[37,260,9],

[37,264,122],

[37,267,48],

[37,271,46],

[37,275,34],

[37,277,36],

[38,39,8],

[38,41,10],

[38,46,35],

[38,48,33],

[38,50,135],

[38,52,133],

[38,53,197],

[38,55,199],

[38,66,87],

[38,68,85],

[38,70,83],

[38,72,81],

[38,82,71],

[38,84,69],

[38,86,67],

[38,88,65],

[38,89,112],

[38,91,110],

[38,93,108],

[38,95,106],

[38,105,96],

[38,107,94],

[38,109,92],

[38,111,90],

[38,122,139],

[38,124,137],

[38,134,51],

[38,136,49],

[38,138,123],

[38,140,121],

[38,157,180],

[38,159,178],

[38,161,176],

[38,163,174],

[38,173,164],

[38,175,162],

[38,177,160],

[38,179,158],

[38,181,193],

[38,183,195],

[38,185,201],

[38,187,203],

[38,189,205],

[38,191,207],

[38,194,182],

[38,196,184],

[38,198,54],

[38,200,56],

[38,202,186],

[38,204,188],

[38,206,190],

[38,208,192],

[38,241,38],

[38,242,139],

[38,247,35],

[38,249,33],

[38,251,51],

[38,257,241],

[38,259,8],

[38,261,10],

[38,265,121],

[38,266,47],

[38,270,45],

[38,274,33],

[38,276,35],

[39,40,241],

[39,42,11],

[39,43,36],

[39,47,32],

[39,49,152],

[39,51,150],

[39,54,214],

[39,56,216],

[39,65,104],

[39,67,102],

[39,69,100],

[39,71,98],

[39,74,111],

[39,76,109],

[39,78,107],

[39,80,105],

[39,97,72],

[39,99,70],

[39,101,68],

[39,103,66],

[39,106,79],

[39,108,77],

[39,110,75],

[39,112,73],

[39,121,156],

[39,123,154],

[39,142,179],

[39,144,177],

[39,146,175],

[39,148,173],

[39,149,52],

[39,151,50],

[39,153,124],

[39,155,122],

[39,174,147],

[39,176,145],

[39,178,143],

[39,180,141],

[39,182,210],

[39,184,212],

[39,186,218],

[39,188,220],

[39,190,222],

[39,192,224],

[39,209,181],

[39,211,183],

[39,213,53],

[39,215,55],

[39,217,185],

[39,219,187],

[39,221,189],

[39,223,191],

[39,241,39],

[39,243,156],

[39,244,36],

[39,248,32],

[39,252,52],

[39,256,8],

[39,258,241],

[39,260,11],

[39,263,48],

[39,268,122],

[39,271,44],

[39,275,32],

[39,279,36],

[40,41,12],

[40,44,35],

[40,48,31],

[40,50,151],

[40,52,149],

[40,53,213],

[40,55,215],

[40,66,103],

[40,68,101],

[40,70,99],

[40,72,97],

[40,73,112],

[40,75,110],

[40,77,108],

[40,79,106],

[40,98,71],

[40,100,69],

[40,102,67],

[40,104,65],

[40,105,80],

[40,107,78],

[40,109,76],

[40,111,74],

[40,122,155],

[40,124,153],

[40,141,180],

[40,143,178],

[40,145,176],

[40,147,174],

[40,150,51],

[40,152,49],

[40,154,123],

[40,156,121],

[40,173,148],

[40,175,146],

[40,177,144],

[40,179,142],

[40,181,209],

[40,183,211],

[40,185,217],

[40,187,219],

[40,189,221],

[40,191,223],

[40,210,182],

[40,212,184],

[40,214,54],

[40,216,56],

[40,218,186],

[40,220,188],

[40,222,190],

[40,224,192],

[40,241,40],

[40,242,155],

[40,245,35],

[40,249,31],

[40,253,51],

[40,257,7],

[40,259,241],

[40,261,12],

[40,262,47],

[40,269,121],

[40,270,43],

[40,274,31],

[40,278,35],

[41,42,241],

[41,43,34],

[41,45,32],

[41,49,168],

[41,51,166],

[41,54,230],

[41,56,232],

[41,65,120],

[41,67,118],

[41,69,116],

[41,71,114],

[41,74,95],

[41,76,93],

[41,78,91],

[41,80,89],

[41,90,79],

[41,92,77],

[41,94,75],

[41,96,73],

[41,113,72],

[41,115,70],

[41,117,68],

[41,119,66],

[41,121,172],

[41,123,170],

[41,142,163],

[41,144,161],

[41,146,159],

[41,148,157],

[41,158,147],

[41,160,145],

[41,162,143],

[41,164,141],

[41,165,52],

[41,167,50],

[41,169,124],

[41,171,122],

[41,182,226],

[41,184,228],

[41,186,234],

[41,188,236],

[41,190,238],

[41,192,240],

[41,225,181],

[41,227,183],

[41,229,53],

[41,231,55],

[41,233,185],

[41,235,187],

[41,237,189],

[41,239,191],

[41,241,41],

[41,243,172],

[41,244,34],

[41,246,32],

[41,254,52],

[41,256,10],

[41,258,12],

[41,260,241],

[41,263,46],

[41,267,44],

[41,272,122],

[41,277,32],

[41,279,34],

[42,44,33],

[42,46,31],

[42,50,167],

[42,52,165],

[42,53,229],

[42,55,231],

[42,66,119],

[42,68,117],

[42,70,115],

[42,72,113],

[42,73,96],

[42,75,94],

[42,77,92],

[42,79,90],

[42,89,80],

[42,91,78],

[42,93,76],

[42,95,74],

[42,114,71],

[42,116,69],

[42,118,67],

[42,120,65],

[42,122,171],

[42,124,169],

[42,141,164],

[42,143,162],

[42,145,160],

[42,147,158],

[42,157,148],

[42,159,146],

[42,161,144],

[42,163,142],

[42,166,51],

[42,168,49],

[42,170,123],

[42,172,121],

[42,181,225],

[42,183,227],

[42,185,233],

[42,187,235],

[42,189,237],

[42,191,239],

[42,226,182],

[42,228,184],

[42,230,54],

[42,232,56],

[42,234,186],

[42,236,188],

[42,238,190],

[42,240,192],

[42,241,42],

[42,242,171],

[42,245,33],

[42,247,31],

[42,255,51],

[42,257,9],

[42,259,11],

[42,261,241],

[42,262,45],

[42,266,43],

[42,273,121],

[42,276,31],

[42,278,33],

[43,44,241],

[43,46,7],

[43,48,9],

[43,53,196],

[43,55,194],

[43,58,78],

[43,60,80],

[43,62,74],

[43,64,76],

[43,66,82],

[43,68,84],

[43,70,86],

[43,72,88],

[43,73,61],

[43,75,63],

[43,77,57],

[43,79,59],

[43,81,65],

[43,83,67],

[43,85,69],

[43,87,71],

[43,125,148],

[43,127,146],

[43,129,144],

[43,131,142],

[43,141,132],

[43,143,130],

[43,145,128],

[43,147,126],

[43,150,171],

[43,152,169],

[43,154,167],

[43,156,165],

[43,166,155],

[43,168,153],

[43,170,151],

[43,172,149],

[43,181,200],

[43,183,198],

[43,193,56],

[43,195,54],

[43,197,184],

[43,199,182],

[43,218,239],

[43,220,237],

[43,222,235],

[43,224,233],

[43,234,223],

[43,236,221],

[43,238,219],

[43,240,217],

[43,241,43],

[43,245,241],

[43,247,7],

[43,249,9],

[43,253,171],

[43,255,155],

[43,259,36],

[43,261,34],

[43,267,42],

[43,269,165],

[43,271,40],

[43,273,149],

[43,274,9],

[43,276,7],

[43,278,241],

[44,45,8],

[44,47,10],

[44,54,195],

[44,56,193],

[44,57,77],

[44,59,79],

[44,61,73],

[44,63,75],

[44,65,81],

[44,67,83],

[44,69,85],

[44,71,87],

[44,74,62],

[44,76,64],

[44,78,58],

[44,80,60],

[44,82,66],

[44,84,68],

[44,86,70],

[44,88,72],

[44,126,147],

[44,128,145],

[44,130,143],

[44,132,141],

[44,142,131],

[44,144,129],

[44,146,127],

[44,148,125],

[44,149,172],

[44,151,170],

[44,153,168],

[44,155,166],

[44,165,156],

[44,167,154],

[44,169,152],

[44,171,150],

[44,182,199],

[44,184,197],

[44,194,55],

[44,196,53],

[44,198,183],

[44,200,181],

[44,217,240],

[44,219,238],

[44,221,236],

[44,223,234],

[44,233,224],

[44,235,222],

[44,237,220],

[44,239,218],

[44,241,44],

[44,244,241],

[44,246,8],

[44,248,10],

[44,252,172],

[44,254,156],

[44,258,35],

[44,260,33],

[44,266,41],

[44,268,166],

[44,270,39],

[44,272,150],

[44,275,10],

[44,277,8],

[44,279,241],

[45,46,241],

[45,48,11],

[45,53,212],

[45,55,210],

[45,58,94],

[45,60,96],

[45,62,90],

[45,64,92],

[45,66,98],

[45,68,100],

[45,70,102],

[45,72,104],

[45,89,61],

[45,91,63],

[45,93,57],

[45,95,59],

[45,97,65],

[45,99,67],

[45,101,69],

[45,103,71],

[45,125,164],

[45,127,162],

[45,129,160],

[45,131,158],

[45,134,171],

[45,136,169],

[45,138,167],

[45,140,165],

[45,157,132],

[45,159,130],

[45,161,128],

[45,163,126],

[45,166,139],

[45,168,137],

[45,170,135],

[45,172,133],

[45,181,216],

[45,183,214],

[45,202,239],

[45,204,237],

[45,206,235],

[45,208,233],

[45,209,56],

[45,211,54],

[45,213,184],

[45,215,182],

[45,234,207],

[45,236,205],

[45,238,203],

[45,240,201],

[45,241,45],

[45,245,8],

[45,247,241],

[45,249,11],

[45,251,171],

[45,255,139],

[45,257,36],

[45,261,32],

[45,263,42],

[45,265,165],

[45,271,38],

[45,273,133],

[45,274,11],

[45,276,241],

[45,278,8],

[46,47,12],

[46,54,211],

[46,56,209],

[46,57,93],

[46,59,95],

[46,61,89],

[46,63,91],

[46,65,97],

[46,67,99],

[46,69,101],

[46,71,103],

[46,90,62],

[46,92,64],

[46,94,58],

[46,96,60],

[46,98,66],

[46,100,68],

[46,102,70],

[46,104,72],

[46,126,163],

[46,128,161],

[46,130,159],

[46,132,157],

[46,133,172],

[46,135,170],

[46,137,168],

[46,139,166],

[46,158,131],

[46,160,129],

[46,162,127],

[46,164,125],

[46,165,140],

[46,167,138],

[46,169,136],

[46,171,134],

[46,182,215],

[46,184,213],

[46,201,240],

[46,203,238],

[46,205,236],

[46,207,234],

[46,210,55],

[46,212,53],

[46,214,183],

[46,216,181],

[46,233,208],

[46,235,206],

[46,237,204],

[46,239,202],

[46,241,46],

[46,244,7],

[46,246,241],

[46,248,12],

[46,250,172],

[46,254,140],

[46,256,35],

[46,260,31],

[46,262,41],

[46,264,166],

[46,270,37],

[46,272,134],

[46,275,12],

[46,277,241],

[46,279,7],

[47,48,241],

[47,53,228],

[47,55,226],

[47,58,110],

[47,60,112],

[47,62,106],

[47,64,108],

[47,66,114],

[47,68,116],

[47,70,118],

[47,72,120],

[47,105,61],

[47,107,63],

[47,109,57],

[47,111,59],

[47,113,65],

[47,115,67],

[47,117,69],

[47,119,71],

[47,125,180],

[47,127,178],

[47,129,176],

[47,131,174],

[47,134,155],

[47,136,153],

[47,138,151],

[47,140,149],

[47,150,139],

[47,152,137],

[47,154,135],

[47,156,133],

[47,173,132],

[47,175,130],

[47,177,128],

[47,179,126],

[47,181,232],

[47,183,230],

[47,202,223],

[47,204,221],

[47,206,219],

[47,208,217],

[47,218,207],

[47,220,205],

[47,222,203],

[47,224,201],

[47,225,56],

[47,227,54],

[47,229,184],

[47,231,182],

[47,241,47],

[47,245,10],

[47,247,12],

[47,249,241],

[47,251,155],

[47,253,139],

[47,257,34],

[47,259,32],

[47,263,40],

[47,265,149],

[47,267,38],

[47,269,133],

[47,274,241],

[47,276,12],

[47,278,10],

[48,54,227],

[48,56,225],

[48,57,109],

[48,59,111],

[48,61,105],

[48,63,107],

[48,65,113],

[48,67,115],

[48,69,117],

[48,71,119],

[48,106,62],

[48,108,64],

[48,110,58],

[48,112,60],

[48,114,66],

[48,116,68],

[48,118,70],

[48,120,72],

[48,126,179],

[48,128,177],

[48,130,175],

[48,132,173],

[48,133,156],

[48,135,154],

[48,137,152],

[48,139,150],

[48,149,140],

[48,151,138],

[48,153,136],

[48,155,134],

[48,174,131],

[48,176,129],

[48,178,127],

[48,180,125],

[48,182,231],

[48,184,229],

[48,201,224],

[48,203,222],

[48,205,220],

[48,207,218],

[48,217,208],

[48,219,206],

[48,221,204],

[48,223,202],

[48,226,55],

[48,228,53],

[48,230,183],

[48,232,181],

[48,241,48],

[48,244,9],

[48,246,11],

[48,248,241],

[48,250,156],

[48,252,140],

[48,256,33],

[48,258,31],

[48,262,39],

[48,264,150],

[48,266,37],

[48,268,134],

[48,275,241],

[48,277,11],

[48,279,9],

[49,50,241],

[49,52,3],

[49,61,69],

[49,63,71],

[49,70,62],

[49,72,64],

[49,73,85],

[49,75,87],

[49,86,74],

[49,88,76],

[49,89,101],

[49,91,103],

[49,102,90],

[49,104,92],

[49,105,117],

[49,107,119],

[49,118,106],

[49,120,108],

[49,122,27],

[49,126,184],

[49,130,182],

[49,135,38],

[49,138,31],

[49,143,199],

[49,147,197],

[49,151,40],

[49,154,33],

[49,159,215],

[49,163,213],

[49,167,42],

[49,170,35],

[49,175,231],

[49,179,229],

[49,181,129],

[49,183,125],

[49,185,19],

[49,187,22],

[49,189,29],

[49,191,17],

[49,198,148],

[49,200,144],

[49,214,164],

[49,216,160],

[49,230,180],

[49,232,176],

[49,241,49],

[49,242,27],

[49,257,136],

[49,259,152],

[49,261,168],

[49,262,137],

[49,266,153],

[49,270,169],

[50,51,4],

[50,62,70],

[50,64,72],

[50,69,61],

[50,71,63],

[50,74,86],

[50,76,88],

[50,85,73],

[50,87,75],

[50,90,102],

[50,92,104],

[50,101,89],

[50,103,91],

[50,106,118],

[50,108,120],

[50,117,105],

[50,119,107],

[50,121,28],

[50,125,183],

[50,129,181],

[50,136,37],

[50,137,32],

[50,144,200],

[50,148,198],

[50,152,39],

[50,153,34],

[50,160,216],

[50,164,214],

[50,168,41],

[50,169,36],

[50,176,232],

[50,180,230],

[50,182,130],

[50,184,126],

[50,186,20],

[50,188,21],

[50,190,30],

[50,192,18],

[50,197,147],

[50,199,143],

[50,213,163],

[50,215,159],

[50,229,179],

[50,231,175],

[50,241,50],

[50,243,28],

[50,256,135],

[50,258,151],

[50,260,167],

[50,263,138],

[50,267,154],

[50,271,170],

[51,52,241],

[51,61,65],

[51,63,67],

[51,66,62],

[51,68,64],

[51,73,81],

[51,75,83],

[51,82,74],

[51,84,76],

[51,89,97],

[51,91,99],

[51,98,90],

[51,100,92],

[51,105,113],

[51,107,115],

[51,114,106],

[51,116,108],

[51,124,27],

[51,128,184],

[51,132,182],

[51,133,38],

[51,140,31],

[51,141,199],

[51,145,197],

[51,149,40],

[51,156,33],

[51,157,215],

[51,161,213],

[51,165,42],

[51,172,35],

[51,173,231],

[51,177,229],

[51,181,131],

[51,183,127],

[51,185,24],

[51,187,14],

[51,189,15],

[51,191,26],

[51,198,146],

[51,200,142],

[51,214,162],

[51,216,158],

[51,230,178],

[51,232,174],

[51,241,51],

[51,250,38],

[51,252,40],

[51,254,42],

[51,257,134],

[51,259,150],

[51,261,166],

[51,262,139],

[51,265,31],

[51,266,155],

[51,269,33],

[51,270,171],

[51,273,35],

[52,62,66],

[52,64,68],

[52,65,61],

[52,67,63],

[52,74,82],

[52,76,84],

[52,81,73],

[52,83,75],

[52,90,98],

[52,92,100],

[52,97,89],

[52,99,91],

[52,106,114],

[52,108,116],

[52,113,105],

[52,115,107],

[52,123,28],

[52,127,183],

[52,131,181],

[52,134,37],

[52,139,32],

[52,142,200],

[52,146,198],

[52,150,39],

[52,155,34],

[52,158,216],

[52,162,214],

[52,166,41],

[52,171,36],

[52,174,232],

[52,178,230],

[52,182,132],

[52,184,128],

[52,186,23],

[52,188,13],

[52,190,16],

[52,192,25],

[52,197,145],

[52,199,141],

[52,213,161],

[52,215,157],

[52,229,177],

[52,231,173],

[52,241,52],

[52,251,37],

[52,253,39],

[52,255,41],

[52,256,133],

[52,258,149],

[52,260,165],

[52,263,140],

[52,264,32],

[52,267,156],

[52,268,34],

[52,271,172],

[52,272,36],

[53,54,241],

[53,56,5],

[53,61,189],

[53,63,185],

[53,65,15],

[53,67,24],

[53,69,29],

[53,71,19],

[53,78,208],

[53,80,204],

[53,94,224],

[53,96,220],

[53,110,240],

[53,112,236],

[53,121,129],

[53,123,131],

[53,130,122],

[53,132,124],

[53,133,145],

[53,135,147],

[53,146,134],

[53,148,136],

[53,149,161],

[53,151,163],

[53,162,150],

[53,164,152],

[53,165,177],

[53,167,179],

[53,178,166],

[53,180,168],

[53,182,27],

[53,186,64],

[53,190,62],

[53,195,44],

[53,198,37],

[53,203,79],

[53,207,77],

[53,211,46],

[53,214,39],

[53,219,95],

[53,223,93],

[53,227,48],

[53,230,41],

[53,235,111],

[53,239,109],

[53,241,53],

[53,243,129],

[53,244,196],

[53,246,212],

[53,248,228],

[53,250,145],

[53,252,161],

[53,254,177],

[53,256,197],

[53,258,213],

[53,260,229],

[53,275,228],

[53,277,212],

[53,279,196],

[54,55,2],

[54,62,190],

[54,64,186],

[54,66,16],

[54,68,23],

[54,70,30],

[54,72,20],

[54,77,207],

[54,79,203],

[54,93,223],

[54,95,219],

[54,109,239],

[54,111,235],

[54,122,130],

[54,124,132],

[54,129,121],

[54,131,123],

[54,134,146],

[54,136,148],

[54,145,133],

[54,147,135],

[54,150,162],

[54,152,164],

[54,161,149],

[54,163,151],

[54,166,178],

[54,168,180],

[54,177,165],

[54,179,167],

[54,181,28],

[54,185,63],

[54,189,61],

[54,196,43],

[54,197,38],

[54,204,80],

[54,208,78],

[54,212,45],

[54,213,40],

[54,220,96],

[54,224,94],

[54,228,47],

[54,229,42],

[54,236,112],

[54,240,110],

[54,241,54],

[54,242,130],

[54,245,195],

[54,247,211],

[54,249,227],

[54,251,146],

[54,253,162],

[54,255,178],

[54,257,198],

[54,259,214],

[54,261,230],

[54,274,227],

[54,276,211],

[54,278,195],

[55,56,241],

[55,61,191],

[55,63,187],

[55,65,26],

[55,67,14],

[55,69,17],

[55,71,22],

[55,78,206],

[55,80,202],

[55,94,222],

[55,96,218],

[55,110,238],

[55,112,234],

[55,121,125],

[55,123,127],

[55,126,122],

[55,128,124],

[55,133,141],

[55,135,143],

[55,142,134],

[55,144,136],

[55,149,157],

[55,151,159],

[55,158,150],

[55,160,152],

[55,165,173],

[55,167,175],

[55,174,166],

[55,176,168],

[55,184,27],

[55,188,64],

[55,192,62],

[55,193,44],

[55,200,37],

[55,201,79],

[55,205,77],

[55,209,46],

[55,216,39],

[55,217,95],

[55,221,93],

[55,225,48],

[55,232,41],

[55,233,111],

[55,237,109],

[55,241,55],

[55,243,125],

[55,244,194],

[55,246,210],

[55,248,226],

[55,250,141],

[55,252,157],

[55,254,173],

[55,256,199],

[55,258,215],

[55,260,231],

[55,275,226],

[55,277,210],

[55,279,194],

[56,62,192],

[56,64,188],

[56,66,25],

[56,68,13],

[56,70,18],

[56,72,21],

[56,77,205],

[56,79,201],

[56,93,221],

[56,95,217],

[56,109,237],

[56,111,233],

[56,122,126],

[56,124,128],

[56,125,121],

[56,127,123],

[56,134,142],

[56,136,144],

[56,141,133],

[56,143,135],

[56,150,158],

[56,152,160],

[56,157,149],

[56,159,151],

[56,166,174],

[56,168,176],

[56,173,165],

[56,175,167],

[56,183,28],

[56,187,63],

[56,191,61],

[56,194,43],

[56,199,38],

[56,202,80],

[56,206,78],

[56,210,45],

[56,215,40],

[56,218,96],

[56,222,94],

[56,226,47],

[56,231,42],

[56,234,112],

[56,238,110],

[56,241,56],

[56,242,126],

[56,245,193],

[56,247,209],

[56,249,225],

[56,251,142],

[56,253,158],

[56,255,174],

[56,257,200],

[56,259,216],

[56,261,232],

[56,274,225],

[56,276,209],

[56,278,193],

[57,58,241],

[57,60,1],

[57,62,27],

[57,66,124],

[57,70,122],

[57,75,32],

[57,78,43],

[57,83,139],

[57,87,137],

[57,91,34],

[57,94,45],

[57,99,155],

[57,103,153],

[57,107,36],

[57,110,47],

[57,115,171],

[57,119,169],

[57,121,69],

[57,123,65],

[57,125,17],

[57,127,26],

[57,129,29],

[57,131,15],

[57,138,88],

[57,140,84],

[57,154,104],

[57,156,100],

[57,170,120],

[57,172,116],

[57,181,189],

[57,183,191],

[57,190,182],

[57,192,184],

[57,193,205],

[57,195,207],

[57,206,194],

[57,208,196],

[57,209,221],

[57,211,223],

[57,222,210],

[57,224,212],

[57,225,237],

[57,227,239],

[57,238,226],

[57,240,228],

[57,241,57],

[57,243,69],

[57,245,77],

[57,247,93],

[57,249,109],

[57,263,76],

[57,265,84],

[57,267,92],

[57,269,100],

[57,271,108],

[57,273,116],

[57,274,109],

[57,276,93],

[57,278,77],

[58,59,6],

[58,61,28],

[58,65,123],

[58,69,121],

[58,76,31],

[58,77,44],

[58,84,140],

[58,88,138],

[58,92,33],

[58,93,46],

[58,100,156],

[58,104,154],

[58,108,35],

[58,109,48],

[58,116,172],

[58,120,170],

[58,122,70],

[58,124,66],

[58,126,18],

[58,128,25],

[58,130,30],

[58,132,16],

[58,137,87],

[58,139,83],

[58,153,103],

[58,155,99],

[58,169,119],

[58,171,115],

[58,182,190],

[58,184,192],

[58,189,181],

[58,191,183],

[58,194,206],

[58,196,208],

[58,205,193],

[58,207,195],

[58,210,222],

[58,212,224],

[58,221,209],

[58,223,211],

[58,226,238],

[58,228,240],

[58,237,225],

[58,239,227],

[58,241,58],

[58,242,70],

[58,244,78],

[58,246,94],

[58,248,110],

[58,262,75],

[58,264,83],

[58,266,91],

[58,268,99],

[58,270,107],

[58,272,115],

[58,275,110],

[58,277,94],

[58,279,78],

[59,60,241],

[59,64,27],

[59,68,124],

[59,72,122],

[59,73,32],

[59,80,43],

[59,81,139],

[59,85,137],

[59,89,34],

[59,96,45],

[59,97,155],

[59,101,153],

[59,105,36],

[59,112,47],

[59,113,171],

[59,117,169],

[59,121,71],

[59,123,67],

[59,125,22],

[59,127,14],

[59,129,19],

[59,131,24],

[59,138,86],

[59,140,82],

[59,154,102],

[59,156,98],

[59,170,118],

[59,172,114],

[59,181,185],

[59,183,187],

[59,186,182],

[59,188,184],

[59,193,201],

[59,195,203],

[59,202,194],

[59,204,196],

[59,209,217],

[59,211,219],

[59,218,210],

[59,220,212],

[59,225,233],

[59,227,235],

[59,234,226],

[59,236,228],

[59,241,59],

[59,243,71],

[59,245,79],

[59,247,95],

[59,249,111],

[59,263,74],

[59,265,82],

[59,267,90],

[59,269,98],

[59,271,106],

[59,273,114],

[59,274,111],

[59,276,95],

[59,278,79],

[60,63,28],

[60,67,123],

[60,71,121],

[60,74,31],

[60,79,44],

[60,82,140],

[60,86,138],

[60,90,33],

[60,95,46],

[60,98,156],

[60,102,154],

[60,106,35],

[60,111,48],

[60,114,172],

[60,118,170],

[60,122,72],

[60,124,68],

[60,126,21],

[60,128,13],

[60,130,20],

[60,132,23],

[60,137,85],

[60,139,81],

[60,153,101],

[60,155,97],

[60,169,117],

[60,171,113],

[60,182,186],

[60,184,188],

[60,185,181],

[60,187,183],

[60,194,202],

[60,196,204],

[60,201,193],

[60,203,195],

[60,210,218],

[60,212,220],

[60,217,209],

[60,219,211],

[60,226,234],

[60,228,236],

[60,233,225],

[60,235,227],

[60,241,60],

[60,242,72],

[60,244,80],

[60,246,96],

[60,248,112],

[60,262,73],

[60,264,81],

[60,266,89],

[60,268,97],

[60,270,105],

[60,272,113],

[60,275,112],

[60,277,96],

[60,279,80],

[61,62,241],

[61,64,1],

[61,66,52],

[61,70,50],

[61,74,43],

[61,79,32],

[61,83,135],

[61,87,133],

[61,90,45],

[61,95,34],

[61,99,151],

[61,103,149],

[61,106,47],

[61,111,36],

[61,115,167],

[61,119,165],

[61,125,23],

[61,127,20],

[61,129,13],

[61,131,21],

[61,134,88],

[61,136,84],

[61,150,104],

[61,152,100],

[61,166,120],

[61,168,116],

[61,190,54],

[61,192,56],

[61,197,205],

[61,199,207],

[61,206,198],

[61,208,200],

[61,213,221],

[61,215,223],

[61,222,214],

[61,224,216],

[61,229,237],

[61,231,239],

[61,238,230],

[61,240,232],

[61,241,61],

[61,245,73],

[61,247,89],

[61,249,105],

[61,251,88],

[61,253,104],

[61,255,120],

[61,263,80],

[61,267,96],

[61,271,112],

[61,274,105],

[61,276,89],

[61,278,73],

[62,63,6],

[62,65,51],

[62,69,49],

[62,73,44],

[62,80,31],

[62,84,136],

[62,88,134],

[62,89,46],

[62,96,33],

[62,100,152],

[62,104,150],

[62,105,48],

[62,112,35],

[62,116,168],

[62,120,166],

[62,126,24],

[62,128,19],

[62,130,14],

[62,132,22],

[62,133,87],

[62,135,83],

[62,149,103],

[62,151,99],

[62,165,119],

[62,167,115],

[62,189,53],

[62,191,55],

[62,198,206],

[62,200,208],

[62,205,197],

[62,207,199],

[62,214,222],

[62,216,224],

[62,221,213],

[62,223,215],

[62,230,238],

[62,232,240],

[62,237,229],

[62,239,231],

[62,241,62],

[62,244,74],

[62,246,90],

[62,248,106],

[62,250,87],

[62,252,103],

[62,254,119],

[62,262,79],

[62,266,95],

[62,270,111],

[62,275,106],

[62,277,90],

[62,279,74],

[63,64,241],

[63,68,52],

[63,72,50],

[63,76,43],

[63,77,32],

[63,81,135],

[63,85,133],

[63,92,45],

[63,93,34],

[63,97,151],

[63,101,149],

[63,108,47],

[63,109,36],

[63,113,167],

[63,117,165],

[63,125,16],

[63,127,30],

[63,129,25],

[63,131,18],

[63,134,86],

[63,136,82],

[63,150,102],

[63,152,98],

[63,166,118],

[63,168,114],

[63,186,54],

[63,188,56],

[63,197,201],

[63,199,203],

[63,202,198],

[63,204,200],

[63,213,217],

[63,215,219],

[63,218,214],

[63,220,216],

[63,229,233],

[63,231,235],

[63,234,230],

[63,236,232],

[63,241,63],

[63,245,75],

[63,247,91],

[63,249,107],

[63,251,86],

[63,253,102],

[63,255,118],

[63,263,78],

[63,267,94],

[63,271,110],

[63,274,107],

[63,276,91],

[63,278,75],

[64,67,51],

[64,71,49],

[64,75,44],

[64,78,31],

[64,82,136],

[64,86,134],

[64,91,46],

[64,94,33],

[64,98,152],

[64,102,150],

[64,107,48],

[64,110,35],

[64,114,168],

[64,118,166],

[64,126,15],

[64,128,29],

[64,130,26],

[64,132,17],

[64,133,85],

[64,135,81],

[64,149,101],

[64,151,97],

[64,165,117],

[64,167,113],

[64,185,53],

[64,187,55],

[64,198,202],

[64,200,204],

[64,201,197],

[64,203,199],

[64,214,218],

[64,216,220],

[64,217,213],

[64,219,215],

[64,230,234],

[64,232,236],

[64,233,229],

[64,235,231],

[64,241,64],

[64,244,76],

[64,246,92],

[64,248,108],

[64,250,85],

[64,252,101],

[64,254,117],

[64,262,77],

[64,266,93],

[64,270,109],

[64,275,108],

[64,277,92],

[64,279,76],

[65,66,241],

[65,68,1],

[65,70,4],

[65,75,135],

[65,79,139],

[65,82,43],

[65,87,38],

[65,91,151],

[65,95,155],

[65,98,45],

[65,103,40],

[65,107,167],

[65,111,171],

[65,114,47],

[65,119,42],

[65,124,57],

[65,125,186],

[65,129,188],

[65,136,76],

[65,140,80],

[65,141,207],

[65,145,205],

[65,152,92],

[65,156,96],

[65,157,223],

[65,161,221],

[65,168,108],

[65,172,112],

[65,173,239],

[65,177,237],

[65,181,21],

[65,183,20],

[65,185,126],

[65,187,130],

[65,206,146],

[65,208,142],

[65,222,162],

[65,224,158],

[65,238,178],

[65,240,174],

[65,241,65],

[65,245,81],

[65,247,97],

[65,249,113],

[65,257,88],

[65,259,104],

[65,261,120],

[65,265,80],

[65,269,96],

[65,273,112],

[65,274,113],

[65,276,97],

[65,278,81],

[66,67,6],

[66,69,3],

[66,76,136],

[66,80,140],

[66,81,44],

[66,88,37],

[66,92,152],

[66,96,156],

[66,97,46],

[66,104,39],

[66,108,168],

[66,112,172],

[66,113,48],

[66,120,41],

[66,123,58],

[66,126,185],

[66,130,187],

[66,135,75],

[66,139,79],

[66,142,208],

[66,146,206],

[66,151,91],

[66,155,95],

[66,158,224],

[66,162,222],

[66,167,107],

[66,171,111],

[66,174,240],

[66,178,238],

[66,182,22],

[66,184,19],

[66,186,125],

[66,188,129],

[66,205,145],

[66,207,141],

[66,221,161],

[66,223,157],

[66,237,177],

[66,239,173],

[66,241,66],

[66,244,82],

[66,246,98],

[66,248,114],

[66,256,87],

[66,258,103],

[66,260,119],

[66,264,79],

[66,268,95],

[66,272,111],

[66,275,114],

[66,277,98],

[66,279,82],

[67,68,241],

[67,72,4],

[67,73,135],

[67,77,139],

[67,84,43],

[67,85,38],

[67,89,151],

[67,93,155],

[67,100,45],

[67,101,40],

[67,105,167],

[67,109,171],

[67,116,47],

[67,117,42],

[67,124,59],

[67,125,190],

[67,129,192],

[67,136,74],

[67,140,78],

[67,141,203],

[67,145,201],

[67,152,90],

[67,156,94],

[67,157,219],

[67,161,217],

[67,168,106],

[67,172,110],

[67,173,235],

[67,177,233],

[67,181,18],

[67,183,30],

[67,189,126],

[67,191,130],

[67,202,146],

[67,204,142],

[67,218,162],

[67,220,158],

[67,234,178],

[67,236,174],

[67,241,67],

[67,245,83],

[67,247,99],

[67,249,115],

[67,257,86],

[67,259,102],

[67,261,118],

[67,265,78],

[67,269,94],

[67,273,110],

[67,274,115],

[67,276,99],

[67,278,83],

[68,71,3],

[68,74,136],

[68,78,140],

[68,83,44],

[68,86,37],

[68,90,152],

[68,94,156],

[68,99,46],

[68,102,39],

[68,106,168],

[68,110,172],

[68,115,48],

[68,118,41],

[68,123,60],

[68,126,189],

[68,130,191],

[68,135,73],

[68,139,77],

[68,142,204],

[68,146,202],

[68,151,89],

[68,155,93],

[68,158,220],

[68,162,218],

[68,167,105],

[68,171,109],

[68,174,236],

[68,178,234],

[68,182,17],

[68,184,29],

[68,190,125],

[68,192,129],

[68,201,145],

[68,203,141],

[68,217,161],

[68,219,157],

[68,233,177],

[68,235,173],

[68,241,68],

[68,244,84],

[68,246,100],

[68,248,116],

[68,256,85],

[68,258,101],

[68,260,117],

[68,264,77],

[68,268,93],

[68,272,109],

[68,275,116],

[68,277,100],

[68,279,84],

[69,70,241],

[69,72,1],

[69,75,133],

[69,79,137],

[69,83,38],

[69,86,43],

[69,91,149],

[69,95,153],

[69,99,40],

[69,102,45],

[69,107,165],

[69,111,169],

[69,115,42],

[69,118,47],

[69,122,57],

[69,127,186],

[69,131,188],

[69,134,76],

[69,138,80],

[69,143,207],

[69,147,205],

[69,150,92],

[69,154,96],

[69,159,223],

[69,163,221],

[69,166,108],

[69,170,112],

[69,175,239],

[69,179,237],

[69,181,13],

[69,183,23],

[69,185,128],

[69,187,132],

[69,206,148],

[69,208,144],

[69,222,164],

[69,224,160],

[69,238,180],

[69,240,176],

[69,241,69],

[69,242,57],

[69,245,85],

[69,247,101],

[69,249,117],

[69,251,76],

[69,253,92],

[69,255,108],

[69,257,84],

[69,259,100],

[69,261,116],

[69,274,117],

[69,276,101],

[69,278,85],

[70,71,6],

[70,76,134],

[70,80,138],

[70,84,37],

[70,85,44],

[70,92,150],

[70,96,154],

[70,100,39],

[70,101,46],

[70,108,166],

[70,112,170],

[70,116,41],

[70,117,48],

[70,121,58],

[70,128,185],

[70,132,187],

[70,133,75],

[70,137,79],

[70,144,208],

[70,148,206],

[70,149,91],

[70,153,95],

[70,160,224],

[70,164,222],

[70,165,107],

[70,169,111],

[70,176,240],

[70,180,238],

[70,182,14],

[70,184,24],

[70,186,127],

[70,188,131],

[70,205,147],

[70,207,143],

[70,221,163],

[70,223,159],

[70,237,179],

[70,239,175],

[70,241,70],

[70,243,58],

[70,244,86],

[70,246,102],

[70,248,118],

[70,250,75],

[70,252,91],

[70,254,107],

[70,256,83],

[70,258,99],

[70,260,115],

[70,275,118],

[70,277,102],

[70,279,86],

[71,72,241],

[71,73,133],

[71,77,137],

[71,81,38],

[71,88,43],

[71,89,149],

[71,93,153],

[71,97,40],

[71,104,45],

[71,105,165],

[71,109,169],

[71,113,42],

[71,120,47],

[71,122,59],

[71,127,190],

[71,131,192],

[71,134,74],

[71,138,78],

[71,143,203],

[71,147,201],

[71,150,90],

[71,154,94],

[71,159,219],

[71,163,217],

[71,166,106],

[71,170,110],

[71,175,235],

[71,179,233],

[71,181,25],

[71,183,16],

[71,189,128],

[71,191,132],

[71,202,148],

[71,204,144],

[71,218,164],

[71,220,160],

[71,234,180],

[71,236,176],

[71,241,71],

[71,242,59],

[71,245,87],

[71,247,103],

[71,249,119],

[71,251,74],

[71,253,90],

[71,255,106],

[71,257,82],

[71,259,98],

[71,261,114],

[71,274,119],

[71,276,103],

[71,278,87],

[72,74,134],

[72,78,138],

[72,82,37],

[72,87,44],

[72,90,150],

[72,94,154],

[72,98,39],

[72,103,46],

[72,106,166],

[72,110,170],

[72,114,41],

[72,119,48],

[72,121,60],

[72,128,189],

[72,132,191],

[72,133,73],

[72,137,77],

[72,144,204],

[72,148,202],

[72,149,89],

[72,153,93],

[72,160,220],

[72,164,218],

[72,165,105],

[72,169,109],

[72,176,236],

[72,180,234],

[72,182,26],

[72,184,15],

[72,190,127],

[72,192,131],

[72,201,147],

[72,203,143],

[72,217,163],

[72,219,159],

[72,233,179],

[72,235,175],

[72,241,72],

[72,243,60],

[72,244,88],

[72,246,104],

[72,248,120],

[72,250,73],

[72,252,89],

[72,254,105],

[72,256,81],

[72,258,97],

[72,260,113],

[72,275,120],

[72,277,104],

[72,279,88],

[73,74,241],

[73,76,1],

[73,78,28],

[73,82,52],

[73,86,50],

[73,90,8],

[73,95,41],

[73,99,170],

[73,103,172],

[73,106,10],

[73,111,39],

[73,115,154],

[73,119,156],

[73,134,72],

[73,136,68],

[73,142,21],

[73,144,13],

[73,146,20],

[73,148,23],

[73,153,116],

[73,155,120],

[73,169,100],

[73,171,104],

[73,182,207],

[73,184,205],

[73,190,195],

[73,192,193],

[73,194,191],

[73,196,189],

[73,206,183],

[73,208,181],

[73,213,236],

[73,215,234],

[73,217,232],

[73,219,230],

[73,229,220],

[73,231,218],

[73,233,216],

[73,235,214],

[73,241,73],

[73,244,61],

[73,251,72],

[73,258,112],

[73,260,96],

[73,263,60],

[73,268,120],

[73,272,104],

[73,279,61],

[74,75,6],

[74,77,27],

[74,81,51],

[74,85,49],

[74,89,7],

[74,96,42],

[74,100,169],

[74,104,171],

[74,105,9],

[74,112,40],

[74,116,153],

[74,120,155],

[74,133,71],

[74,135,67],

[74,141,22],

[74,143,14],

[74,145,19],

[74,147,24],

[74,154,115],

[74,156,119],

[74,170,99],

[74,172,103],

[74,181,208],

[74,183,206],

[74,189,196],

[74,191,194],

[74,193,192],

[74,195,190],

[74,205,184],

[74,207,182],

[74,214,235],

[74,216,233],

[74,218,231],

[74,220,229],

[74,230,219],

[74,232,217],

[74,234,215],

[74,236,213],

[74,241,74],

[74,245,62],

[74,250,71],

[74,259,111],

[74,261,95],

[74,262,59],

[74,269,119],

[74,273,103],

[74,278,62],

[75,76,241],

[75,80,28],

[75,84,52],

[75,88,50],

[75,92,8],

[75,93,41],

[75,97,170],

[75,101,172],

[75,108,10],

[75,109,39],

[75,113,154],

[75,117,156],

[75,134,70],

[75,136,66],

[75,142,18],

[75,144,25],

[75,146,30],

[75,148,16],

[75,153,114],

[75,155,118],

[75,169,98],

[75,171,102],

[75,182,203],

[75,184,201],

[75,186,195],

[75,188,193],

[75,194,187],

[75,196,185],

[75,202,183],

[75,204,181],

[75,213,240],

[75,215,238],

[75,221,232],

[75,223,230],

[75,229,224],

[75,231,222],

[75,237,216],

[75,239,214],

[75,241,75],

[75,244,63],

[75,251,70],

[75,258,110],

[75,260,94],

[75,263,58],

[75,268,118],

[75,272,102],

[75,279,63],

[76,79,27],

[76,83,51],

[76,87,49],

[76,91,7],

[76,94,42],

[76,98,169],

[76,102,171],

[76,107,9],

[76,110,40],

[76,114,153],

[76,118,155],

[76,133,69],

[76,135,65],

[76,141,17],

[76,143,26],

[76,145,29],

[76,147,15],

[76,154,113],

[76,156,117],

[76,170,97],

[76,172,101],

[76,181,204],

[76,183,202],

[76,185,196],

[76,187,194],

[76,193,188],

[76,195,186],

[76,201,184],

[76,203,182],

[76,214,239],

[76,216,237],

[76,222,231],

[76,224,229],

[76,230,223],

[76,232,221],

[76,238,215],

[76,240,213],

[76,241,76],

[76,245,64],

[76,250,69],

[76,259,109],

[76,261,93],

[76,262,57],

[76,269,117],

[76,273,101],

[76,278,64],

[77,78,241],

[77,80,1],

[77,82,124],

[77,86,122],

[77,91,41],

[77,94,8],

[77,99,166],

[77,103,168],

[77,107,39],

[77,110,10],

[77,115,150],

[77,119,152],

[77,121,85],

[77,123,81],

[77,138,72],

[77,140,68],

[77,142,15],

[77,144,29],

[77,146,26],

[77,148,17],

[77,149,116],

[77,151,120],

[77,165,100],

[77,167,104],

[77,190,199],

[77,192,197],

[77,198,191],

[77,200,189],

[77,206,55],

[77,208,53],

[77,209,236],

[77,211,234],

[77,217,228],

[77,219,226],

[77,225,220],

[77,227,218],

[77,233,212],

[77,235,210],

[77,241,77],

[77,243,85],

[77,244,57],

[77,252,116],

[77,254,100],

[77,258,108],

[77,260,92],

[77,263,64],

[77,265,68],

[77,279,57],

[78,79,6],

[78,81,123],

[78,85,121],

[78,92,42],

[78,93,7],

[78,100,165],

[78,104,167],

[78,108,40],

[78,109,9],

[78,116,149],

[78,120,151],

[78,122,86],

[78,124,82],

[78,137,71],

[78,139,67],

[78,141,16],

[78,143,30],

[78,145,25],

[78,147,18],

[78,150,115],

[78,152,119],

[78,166,99],

[78,168,103],

[78,189,200],

[78,191,198],

[78,197,192],

[78,199,190],

[78,205,56],

[78,207,54],

[78,210,235],

[78,212,233],

[78,218,227],

[78,220,225],

[78,226,219],

[78,228,217],

[78,234,211],

[78,236,209],

[78,241,78],

[78,242,86],

[78,245,58],

[78,253,115],

[78,255,99],

[78,259,107],

[78,261,91],

[78,262,63],

[78,264,67],

[78,278,58],

[79,80,241],

[79,84,124],

[79,88,122],

[79,89,41],

[79,96,8],

[79,97,166],

[79,101,168],

[79,105,39],

[79,112,10],

[79,113,150],

[79,117,152],

[79,121,87],

[79,123,83],

[79,138,70],

[79,140,66],

[79,142,24],

[79,144,19],

[79,146,14],

[79,148,22],

[79,149,114],

[79,151,118],

[79,165,98],

[79,167,102],

[79,186,199],

[79,188,197],

[79,198,187],

[79,200,185],

[79,202,55],

[79,204,53],

[79,209,240],

[79,211,238],

[79,221,228],

[79,223,226],

[79,225,224],

[79,227,222],

[79,237,212],

[79,239,210],

[79,241,79],

[79,243,87],

[79,244,59],

[79,252,114],

[79,254,98],

[79,258,106],

[79,260,90],

[79,263,62],

[79,265,66],

[79,279,59],

[80,83,123],

[80,87,121],

[80,90,42],

[80,95,7],

[80,98,165],

[80,102,167],

[80,106,40],

[80,111,9],

[80,114,149],

[80,118,151],

[80,122,88],

[80,124,84],

[80,137,69],

[80,139,65],

[80,141,23],

[80,143,20],

[80,145,13],

[80,147,21],

[80,150,113],

[80,152,117],

[80,166,97],

[80,168,101],

[80,185,200],

[80,187,198],

[80,197,188],

[80,199,186],

[80,201,56],

[80,203,54],

[80,210,239],

[80,212,237],

[80,222,227],

[80,224,225],

[80,226,223],

[80,228,221],

[80,238,211],

[80,240,209],

[80,241,80],

[80,242,88],

[80,245,60],

[80,253,113],

[80,255,97],

[80,259,105],

[80,261,89],

[80,262,61],

[80,264,65],

[80,278,60],

[81,82,241],

[81,84,1],

[81,86,4],

[81,91,170],

[81,95,166],

[81,98,8],

[81,103,35],

[81,107,154],

[81,111,150],

[81,114,10],

[81,119,33],

[81,124,77],

[81,128,205],

[81,132,207],

[81,136,64],

[81,140,60],

[81,144,188],

[81,148,186],

[81,149,112],

[81,153,108],

[81,157,234],

[81,161,236],

[81,165,96],

[81,169,92],

[81,173,218],

[81,177,220],

[81,185,147],

[81,187,143],

[81,194,26],

[81,196,15],

[81,198,20],

[81,200,21],

[81,206,127],

[81,208,131],

[81,217,174],

[81,219,178],

[81,233,158],

[81,235,162],

[81,241,81],

[81,244,65],

[81,252,112],

[81,254,96],

[81,257,72],

[81,265,60],

[81,266,120],

[81,270,104],

[81,279,65],

[82,83,6],

[82,85,3],

[82,92,169],

[82,96,165],

[82,97,7],

[82,104,36],

[82,108,153],

[82,112,149],

[82,113,9],

[82,120,34],

[82,123,78],

[82,127,206],

[82,131,208],

[82,135,63],

[82,139,59],

[82,143,187],

[82,147,185],

[82,150,111],

[82,154,107],

[82,158,233],

[82,162,235],

[82,166,95],

[82,170,91],

[82,174,217],

[82,178,219],

[82,186,148],

[82,188,144],

[82,193,25],

[82,195,16],

[82,197,19],

[82,199,22],

[82,205,128],

[82,207,132],

[82,218,173],

[82,220,177],

[82,234,157],

[82,236,161],

[82,241,82],

[82,245,66],

[82,253,111],

[82,255,95],

[82,256,71],

[82,264,59],

[82,267,119],

[82,271,103],

[82,278,66],

[83,84,241],

[83,88,4],

[83,89,170],

[83,93,166],

[83,100,8],

[83,101,35],

[83,105,154],

[83,109,150],

[83,116,10],

[83,117,33],

[83,124,79],

[83,128,201],

[83,132,203],

[83,136,62],

[83,140,58],

[83,144,192],

[83,148,190],

[83,149,110],

[83,153,106],

[83,157,238],

[83,161,240],

[83,165,94],

[83,169,90],

[83,173,222],

[83,177,224],

[83,189,147],

[83,191,143],

[83,194,14],

[83,196,24],

[83,198,30],

[83,200,18],

[83,202,127],

[83,204,131],

[83,221,174],

[83,223,178],

[83,237,158],

[83,239,162],

[83,241,83],

[83,244,67],

[83,252,110],

[83,254,94],

[83,257,70],

[83,265,58],

[83,266,118],

[83,270,102],

[83,279,67],

[84,87,3],

[84,90,169],

[84,94,165],

[84,99,7],

[84,102,36],

[84,106,153],

[84,110,149],

[84,115,9],

[84,118,34],

[84,123,80],

[84,127,202],

[84,131,204],

[84,135,61],

[84,139,57],

[84,143,191],

[84,147,189],

[84,150,109],

[84,154,105],

[84,158,237],

[84,162,239],

[84,166,93],

[84,170,89],

[84,174,221],

[84,178,223],

[84,190,148],

[84,192,144],

[84,193,13],

[84,195,23],

[84,197,29],

[84,199,17],

[84,201,128],

[84,203,132],

[84,222,173],

[84,224,177],

[84,238,157],

[84,240,161],

[84,241,84],

[84,245,68],

[84,253,109],

[84,255,93],

[84,256,69],

[84,264,57],

[84,267,117],

[84,271,101],

[84,278,68],

[85,86,241],

[85,88,1],

[85,91,172],

[85,95,168],

[85,99,35],

[85,102,8],

[85,107,156],

[85,111,152],

[85,115,33],

[85,118,10],

[85,122,77],

[85,126,205],

[85,130,207],

[85,134,64],

[85,138,60],

[85,142,188],

[85,146,186],

[85,151,112],

[85,155,108],

[85,159,234],

[85,163,236],

[85,167,96],

[85,171,92],

[85,175,218],

[85,179,220],

[85,185,145],

[85,187,141],

[85,194,17],

[85,196,29],

[85,198,23],

[85,200,13],

[85,206,125],

[85,208,129],

[85,217,176],

[85,219,180],

[85,233,160],

[85,235,164],

[85,241,85],

[85,242,77],

[85,244,69],

[85,251,64],

[85,257,68],

[85,266,116],

[85,268,108],

[85,270,100],

[85,272,92],

[85,279,69],

[86,87,6],

[86,92,171],

[86,96,167],

[86,100,36],

[86,101,7],

[86,108,155],

[86,112,151],

[86,116,34],

[86,117,9],

[86,121,78],

[86,125,206],

[86,129,208],

[86,133,63],

[86,137,59],

[86,141,187],

[86,145,185],

[86,152,111],

[86,156,107],

[86,160,233],

[86,164,235],

[86,168,95],

[86,172,91],

[86,176,217],

[86,180,219],

[86,186,146],

[86,188,142],

[86,193,18],

[86,195,30],

[86,197,24],

[86,199,14],

[86,205,126],

[86,207,130],

[86,218,175],

[86,220,179],

[86,234,159],

[86,236,163],

[86,241,86],

[86,243,78],

[86,245,70],

[86,250,63],

[86,256,67],

[86,267,115],

[86,269,107],

[86,271,99],

[86,273,91],

[86,278,70],

[87,88,241],

[87,89,172],

[87,93,168],

[87,97,35],

[87,104,8],

[87,105,156],

[87,109,152],

[87,113,33],

[87,120,10],

[87,122,79],

[87,126,201],

[87,130,203],

[87,134,62],

[87,138,58],

[87,142,192],

[87,146,190],

[87,151,110],

[87,155,106],

[87,159,238],

[87,163,240],

[87,167,94],

[87,171,90],

[87,175,222],

[87,179,224],

[87,189,145],

[87,191,141],

[87,194,22],

[87,196,19],

[87,198,16],

[87,200,25],

[87,202,125],

[87,204,129],

[87,221,176],

[87,223,180],

[87,237,160],

[87,239,164],

[87,241,87],

[87,242,79],

[87,244,71],

[87,251,62],

[87,257,66],

[87,266,114],

[87,268,106],

[87,270,98],

[87,272,90],

[87,279,71],

[88,90,171],

[88,94,167],

[88,98,36],

[88,103,7],

[88,106,155],

[88,110,151],

[88,114,34],

[88,119,9],

[88,121,80],

[88,125,202],

[88,129,204],

[88,133,61],

[88,137,57],

[88,141,191],

[88,145,189],

[88,152,109],

[88,156,105],

[88,160,237],

[88,164,239],

[88,168,93],

[88,172,89],

[88,176,221],

[88,180,223],

[88,190,146],

[88,192,142],

[88,193,21],

[88,195,20],

[88,197,15],

[88,199,26],

[88,201,126],

[88,203,130],

[88,222,175],

[88,224,179],

[88,238,159],

[88,240,163],

[88,241,88],

[88,243,80],

[88,245,72],

[88,250,61],

[88,256,65],

[88,267,113],

[88,269,105],

[88,271,97],

[88,273,89],

[88,278,72],

[89,90,241],

[89,92,1],

[89,94,28],

[89,98,52],

[89,102,50],

[89,106,12],

[89,111,37],

[89,115,138],

[89,119,140],

[89,137,116],

[89,139,120],

[89,150,72],

[89,152,68],

[89,158,21],

[89,160,13],

[89,162,20],

[89,164,23],

[89,169,84],

[89,171,88],

[89,182,223],

[89,184,221],

[89,190,211],

[89,192,209],

[89,197,236],

[89,199,234],

[89,201,232],

[89,203,230],

[89,210,191],

[89,212,189],

[89,222,183],

[89,224,181],

[89,229,204],

[89,231,202],

[89,233,200],

[89,235,198],

[89,241,89],

[89,246,61],

[89,253,72],

[89,256,112],

[89,260,80],

[89,264,120],

[89,267,60],

[89,272,88],

[89,277,61],

[90,91,6],

[90,93,27],

[90,97,51],

[90,101,49],

[90,105,11],

[90,112,38],

[90,116,137],

[90,120,139],

[90,138,115],

[90,140,119],

[90,149,71],

[90,151,67],

[90,157,22],

[90,159,14],

[90,161,19],

[90,163,24],

[90,170,83],

[90,172,87],

[90,181,224],

[90,183,222],

[90,189,212],

[90,191,210],

[90,198,235],

[90,200,233],

[90,202,231],

[90,204,229],

[90,209,192],

[90,211,190],

[90,221,184],

[90,223,182],

[90,230,203],

[90,232,201],

[90,234,199],

[90,236,197],

[90,241,90],

[90,247,62],

[90,252,71],

[90,257,111],

[90,261,79],

[90,265,119],

[90,266,59],

[90,273,87],

[90,276,62],

[91,92,241],

[91,96,28],

[91,100,52],

[91,104,50],

[91,108,12],

[91,109,37],

[91,113,138],

[91,117,140],

[91,137,114],

[91,139,118],

[91,150,70],

[91,152,66],

[91,158,18],

[91,160,25],

[91,162,30],

[91,164,16],

[91,169,82],

[91,171,86],

[91,182,219],

[91,184,217],

[91,186,211],

[91,188,209],

[91,197,240],

[91,199,238],

[91,205,232],

[91,207,230],

[91,210,187],

[91,212,185],

[91,218,183],

[91,220,181],

[91,229,208],

[91,231,206],

[91,237,200],

[91,239,198],

[91,241,91],

[91,246,63],

[91,253,70],

[91,256,110],

[91,260,78],

[91,264,118],

[91,267,58],

[91,272,86],

[91,277,63],

[92,95,27],

[92,99,51],

[92,103,49],

[92,107,11],

[92,110,38],

[92,114,137],

[92,118,139],

[92,138,113],

[92,140,117],

[92,149,69],

[92,151,65],

[92,157,17],

[92,159,26],

[92,161,29],

[92,163,15],

[92,170,81],

[92,172,85],

[92,181,220],

[92,183,218],

[92,185,212],

[92,187,210],

[92,198,239],

[92,200,237],

[92,206,231],

[92,208,229],

[92,209,188],

[92,211,186],

[92,217,184],

[92,219,182],

[92,230,207],

[92,232,205],

[92,238,199],

[92,240,197],

[92,241,92],

[92,247,64],

[92,252,69],

[92,257,109],

[92,261,77],

[92,265,117],

[92,266,57],

[92,273,85],

[92,276,64],

[93,94,241],

[93,96,1],

[93,98,124],

[93,102,122],

[93,107,37],

[93,110,12],

[93,115,134],

[93,119,136],

[93,121,101],

[93,123,97],

[93,133,116],

[93,135,120],

[93,154,72],

[93,156,68],

[93,158,15],

[93,160,29],

[93,162,26],

[93,164,17],

[93,165,84],

[93,167,88],

[93,190,215],

[93,192,213],

[93,193,236],

[93,195,234],

[93,201,228],

[93,203,226],

[93,214,191],

[93,216,189],

[93,222,55],

[93,224,53],

[93,225,204],

[93,227,202],

[93,233,196],

[93,235,194],

[93,241,93],

[93,243,101],

[93,246,57],

[93,250,116],

[93,254,84],

[93,256,108],

[93,260,76],

[93,267,64],

[93,269,68],

[93,277,57],

[94,95,6],

[94,97,123],

[94,101,121],

[94,108,38],

[94,109,11],

[94,116,133],

[94,120,135],

[94,122,102],

[94,124,98],

[94,134,115],

[94,136,119],

[94,153,71],

[94,155,67],

[94,157,16],

[94,159,30],

[94,161,25],

[94,163,18],

[94,166,83],

[94,168,87],

[94,189,216],

[94,191,214],

[94,194,235],

[94,196,233],

[94,202,227],

[94,204,225],

[94,213,192],

[94,215,190],

[94,221,56],

[94,223,54],

[94,226,203],

[94,228,201],

[94,234,195],

[94,236,193],

[94,241,94],

[94,242,102],

[94,247,58],

[94,251,115],

[94,255,83],

[94,257,107],

[94,261,75],

[94,266,63],

[94,268,67],

[94,276,58],

[95,96,241],

[95,100,124],

[95,104,122],

[95,105,37],

[95,112,12],

[95,113,134],

[95,117,136],

[95,121,103],

[95,123,99],

[95,133,114],

[95,135,118],

[95,154,70],

[95,156,66],

[95,158,24],

[95,160,19],

[95,162,14],

[95,164,22],

[95,165,82],

[95,167,86],

[95,186,215],

[95,188,213],

[95,193,240],

[95,195,238],

[95,205,228],

[95,207,226],

[95,214,187],

[95,216,185],

[95,218,55],

[95,220,53],

[95,225,208],

[95,227,206],

[95,237,196],

[95,239,194],

[95,241,95],

[95,243,103],

[95,246,59],

[95,250,114],

[95,254,82],

[95,256,106],

[95,260,74],

[95,267,62],

[95,269,66],

[95,277,59],

[96,99,123],

[96,103,121],

[96,106,38],

[96,111,11],

[96,114,133],

[96,118,135],

[96,122,104],

[96,124,100],

[96,134,113],

[96,136,117],

[96,153,69],

[96,155,65],

[96,157,23],

[96,159,20],

[96,161,13],

[96,163,21],

[96,166,81],

[96,168,85],

[96,185,216],

[96,187,214],

[96,194,239],

[96,196,237],

[96,206,227],

[96,208,225],

[96,213,188],

[96,215,186],

[96,217,56],

[96,219,54],

[96,226,207],

[96,228,205],

[96,238,195],

[96,240,193],

[96,241,96],

[96,242,104],

[96,247,60],

[96,251,113],

[96,255,81],

[96,257,105],

[96,261,73],

[96,266,61],

[96,268,65],

[96,276,60],

[97,98,241],

[97,100,1],

[97,102,4],

[97,107,138],

[97,111,134],

[97,114,12],

[97,119,31],

[97,124,93],

[97,128,221],

[97,132,223],

[97,133,112],

[97,137,108],

[97,141,234],

[97,145,236],

[97,152,64],

[97,156,60],

[97,160,188],

[97,164,186],

[97,165,80],

[97,169,76],

[97,173,202],

[97,177,204],

[97,185,163],

[97,187,159],

[97,201,174],

[97,203,178],

[97,210,26],

[97,212,15],

[97,214,20],

[97,216,21],

[97,222,127],

[97,224,131],

[97,233,142],

[97,235,146],

[97,241,97],

[97,246,65],

[97,250,112],

[97,254,80],

[97,259,72],

[97,262,120],

[97,269,60],

[97,270,88],

[97,277,65],

[98,99,6],

[98,101,3],

[98,108,137],

[98,112,133],

[98,113,11],

[98,120,32],

[98,123,94],

[98,127,222],

[98,131,224],

[98,134,111],

[98,138,107],

[98,142,233],

[98,146,235],

[98,151,63],

[98,155,59],

[98,159,187],

[98,163,185],

[98,166,79],

[98,170,75],

[98,174,201],

[98,178,203],

[98,186,164],

[98,188,160],

[98,202,173],

[98,204,177],

[98,209,25],

[98,211,16],

[98,213,19],

[98,215,22],

[98,221,128],

[98,223,132],

[98,234,141],

[98,236,145],

[98,241,98],

[98,247,66],

[98,251,111],

[98,255,79],

[98,258,71],

[98,263,119],

[98,268,59],

[98,271,87],

[98,276,66],

[99,100,241],

[99,104,4],

[99,105,138],

[99,109,134],

[99,116,12],

[99,117,31],

[99,124,95],

[99,128,217],

[99,132,219],

[99,133,110],

[99,137,106],

[99,141,238],

[99,145,240],

[99,152,62],

[99,156,58],

[99,160,192],

[99,164,190],

[99,165,78],

[99,169,74],

[99,173,206],

[99,177,208],

[99,189,163],

[99,191,159],

[99,205,174],

[99,207,178],

[99,210,14],

[99,212,24],

[99,214,30],

[99,216,18],

[99,218,127],

[99,220,131],

[99,237,142],

[99,239,146],

[99,241,99],

[99,246,67],

[99,250,110],

[99,254,78],

[99,259,70],

[99,262,118],

[99,269,58],

[99,270,86],

[99,277,67],

[100,103,3],

[100,106,137],

[100,110,133],

[100,115,11],

[100,118,32],

[100,123,96],

[100,127,218],

[100,131,220],

[100,134,109],

[100,138,105],

[100,142,237],

[100,146,239],

[100,151,61],

[100,155,57],

[100,159,191],

[100,163,189],

[100,166,77],

[100,170,73],

[100,174,205],

[100,178,207],

[100,190,164],

[100,192,160],

[100,206,173],

[100,208,177],

[100,209,13],

[100,211,23],

[100,213,29],

[100,215,17],

[100,217,128],

[100,219,132],

[100,238,141],

[100,240,145],

[100,241,100],

[100,247,68],

[100,251,109],

[100,255,77],

[100,258,69],

[100,263,117],

[100,268,57],

[100,271,85],

[100,276,68],

[101,102,241],

[101,104,1],

[101,107,140],

[101,111,136],

[101,115,31],

[101,118,12],

[101,122,93],

[101,126,221],

[101,130,223],

[101,135,112],

[101,139,108],

[101,143,234],

[101,147,236],

[101,150,64],

[101,154,60],

[101,158,188],

[101,162,186],

[101,167,80],

[101,171,76],

[101,175,202],

[101,179,204],

[101,185,161],

[101,187,157],

[101,201,176],

[101,203,180],

[101,210,17],

[101,212,29],

[101,214,23],

[101,216,13],

[101,222,125],

[101,224,129],

[101,233,144],

[101,235,148],

[101,241,101],

[101,242,93],

[101,246,69],

[101,253,64],

[101,259,68],

[101,262,116],

[101,264,108],

[101,270,84],

[101,272,76],

[101,277,69],

[102,103,6],

[102,108,139],

[102,112,135],

[102,116,32],

[102,117,11],

[102,121,94],

[102,125,222],

[102,129,224],

[102,136,111],

[102,140,107],

[102,144,233],

[102,148,235],

[102,149,63],

[102,153,59],

[102,157,187],

[102,161,185],

[102,168,79],

[102,172,75],

[102,176,201],

[102,180,203],

[102,186,162],

[102,188,158],

[102,202,175],

[102,204,179],

[102,209,18],

[102,211,30],

[102,213,24],

[102,215,14],

[102,221,126],

[102,223,130],

[102,234,143],

[102,236,147],

[102,241,102],

[102,243,94],

[102,247,70],

[102,252,63],

[102,258,67],

[102,263,115],

[102,265,107],

[102,271,83],

[102,273,75],

[102,276,70],

[103,104,241],

[103,105,140],

[103,109,136],

[103,113,31],

[103,120,12],

[103,122,95],

[103,126,217],

[103,130,219],

[103,135,110],

[103,139,106],

[103,143,238],

[103,147,240],

[103,150,62],

[103,154,58],

[103,158,192],

[103,162,190],

[103,167,78],

[103,171,74],

[103,175,206],

[103,179,208],

[103,189,161],

[103,191,157],

[103,205,176],

[103,207,180],

[103,210,22],

[103,212,19],

[103,214,16],

[103,216,25],

[103,218,125],

[103,220,129],

[103,237,144],

[103,239,148],

[103,241,103],

[103,242,95],

[103,246,71],

[103,253,62],

[103,259,66],

[103,262,114],

[103,264,106],

[103,270,82],

[103,272,74],

[103,277,71],

[104,106,139],

[104,110,135],

[104,114,32],

[104,119,11],

[104,121,96],

[104,125,218],

[104,129,220],

[104,136,109],

[104,140,105],

[104,144,237],

[104,148,239],

[104,149,61],

[104,153,57],

[104,157,191],

[104,161,189],

[104,168,77],

[104,172,73],

[104,176,205],

[104,180,207],

[104,190,162],

[104,192,158],

[104,206,175],

[104,208,179],

[104,209,21],

[104,211,20],

[104,213,15],

[104,215,26],

[104,217,126],

[104,219,130],

[104,238,143],

[104,240,147],

[104,241,104],

[104,243,96],

[104,247,72],

[104,252,61],

[104,258,65],

[104,263,113],

[104,265,105],

[104,271,81],

[104,273,73],

[104,276,72],

[105,106,241],

[105,108,1],

[105,110,28],

[105,114,52],

[105,118,50],

[105,137,100],

[105,139,104],

[105,153,84],

[105,155,88],

[105,166,72],

[105,168,68],

[105,174,21],

[105,176,13],

[105,178,20],

[105,180,23],

[105,182,239],

[105,184,237],

[105,190,227],

[105,192,225],

[105,197,220],

[105,199,218],

[105,201,216],

[105,203,214],

[105,213,204],

[105,215,202],

[105,217,200],

[105,219,198],

[105,226,191],

[105,228,189],

[105,238,183],

[105,240,181],

[105,241,105],

[105,248,61],

[105,255,72],

[105,256,96],

[105,258,80],

[105,264,104],

[105,268,88],

[105,271,60],

[105,275,61],

[106,107,6],

[106,109,27],

[106,113,51],

[106,117,49],

[106,138,99],

[106,140,103],

[106,154,83],

[106,156,87],

[106,165,71],

[106,167,67],

[106,173,22],

[106,175,14],

[106,177,19],

[106,179,24],

[106,181,240],

[106,183,238],

[106,189,228],

[106,191,226],

[106,198,219],

[106,200,217],

[106,202,215],

[106,204,213],

[106,214,203],

[106,216,201],

[106,218,199],

[106,220,197],

[106,225,192],

[106,227,190],

[106,237,184],

[106,239,182],

[106,241,106],

[106,249,62],

[106,254,71],

[106,257,95],

[106,259,79],

[106,265,103],

[106,269,87],

[106,270,59],

[106,274,62],

[107,108,241],

[107,112,28],

[107,116,52],

[107,120,50],

[107,137,98],

[107,139,102],

[107,153,82],

[107,155,86],

[107,166,70],

[107,168,66],

[107,174,18],

[107,176,25],

[107,178,30],

[107,180,16],

[107,182,235],

[107,184,233],

[107,186,227],

[107,188,225],

[107,197,224],

[107,199,222],

[107,205,216],

[107,207,214],

[107,213,208],

[107,215,206],

[107,221,200],

[107,223,198],

[107,226,187],

[107,228,185],

[107,234,183],

[107,236,181],

[107,241,107],

[107,248,63],

[107,255,70],

[107,256,94],

[107,258,78],

[107,264,102],

[107,268,86],

[107,271,58],

[107,275,63],

[108,111,27],

[108,115,51],

[108,119,49],

[108,138,97],

[108,140,101],

[108,154,81],

[108,156,85],

[108,165,69],

[108,167,65],

[108,173,17],

[108,175,26],

[108,177,29],

[108,179,15],

[108,181,236],

[108,183,234],

[108,185,228],

[108,187,226],

[108,198,223],

[108,200,221],

[108,206,215],

[108,208,213],

[108,214,207],

[108,216,205],

[108,222,199],

[108,224,197],

[108,225,188],

[108,227,186],

[108,233,184],

[108,235,182],

[108,241,108],

[108,249,64],

[108,254,69],

[108,257,93],

[108,259,77],

[108,265,101],

[108,269,85],

[108,270,57],

[108,274,64],

[109,110,241],

[109,112,1],

[109,114,124],

[109,118,122],

[109,121,117],

[109,123,113],

[109,133,100],

[109,135,104],

[109,149,84],

[109,151,88],

[109,170,72],

[109,172,68],

[109,174,15],

[109,176,29],

[109,178,26],

[109,180,17],

[109,190,231],

[109,192,229],

[109,193,220],

[109,195,218],

[109,201,212],

[109,203,210],

[109,209,204],

[109,211,202],

[109,217,196],

[109,219,194],

[109,230,191],

[109,232,189],

[109,238,55],

[109,240,53],

[109,241,109],

[109,243,117],

[109,248,57],

[109,250,100],

[109,252,84],

[109,256,92],

[109,258,76],

[109,271,64],

[109,273,68],

[109,275,57],

[110,111,6],

[110,113,123],

[110,117,121],

[110,122,118],

[110,124,114],

[110,134,99],

[110,136,103],

[110,150,83],

[110,152,87],

[110,169,71],

[110,171,67],

[110,173,16],

[110,175,30],

[110,177,25],

[110,179,18],

[110,189,232],

[110,191,230],

[110,194,219],

[110,196,217],

[110,202,211],

[110,204,209],

[110,210,203],

[110,212,201],

[110,218,195],

[110,220,193],

[110,229,192],

[110,231,190],

[110,237,56],

[110,239,54],

[110,241,110],

[110,242,118],

[110,249,58],

[110,251,99],

[110,253,83],

[110,257,91],

[110,259,75],

[110,270,63],

[110,272,67],

[110,274,58],

[111,112,241],

[111,116,124],

[111,120,122],

[111,121,119],

[111,123,115],

[111,133,98],

[111,135,102],

[111,149,82],

[111,151,86],

[111,170,70],

[111,172,66],

[111,174,24],

[111,176,19],

[111,178,14],

[111,180,22],

[111,186,231],

[111,188,229],

[111,193,224],

[111,195,222],

[111,205,212],

[111,207,210],

[111,209,208],

[111,211,206],

[111,221,196],

[111,223,194],

[111,230,187],

[111,232,185],

[111,234,55],

[111,236,53],

[111,241,111],

[111,243,119],

[111,248,59],

[111,250,98],

[111,252,82],

[111,256,90],

[111,258,74],

[111,271,62],

[111,273,66],

[111,275,59],

[112,115,123],

[112,119,121],

[112,122,120],

[112,124,116],

[112,134,97],

[112,136,101],

[112,150,81],

[112,152,85],

[112,169,69],

[112,171,65],

[112,173,23],

[112,175,20],

[112,177,13],

[112,179,21],

[112,185,232],

[112,187,230],

[112,194,223],

[112,196,221],

[112,206,211],

[112,208,209],

[112,210,207],

[112,212,205],

[112,222,195],

[112,224,193],

[112,229,188],

[112,231,186],

[112,233,56],

[112,235,54],

[112,241,112],

[112,242,120],

[112,249,60],

[112,251,97],

[112,253,81],

[112,257,89],

[112,259,73],

[112,270,61],

[112,272,65],

[112,274,60],

[113,114,241],

[113,116,1],

[113,118,4],

[113,124,109],

[113,128,237],

[113,132,239],

[113,133,96],

[113,137,92],

[113,141,218],

[113,145,220],

[113,149,80],

[113,153,76],

[113,157,202],

[113,161,204],

[113,168,64],

[113,172,60],

[113,176,188],

[113,180,186],

[113,185,179],

[113,187,175],

[113,201,158],

[113,203,162],

[113,217,142],

[113,219,146],

[113,226,26],

[113,228,15],

[113,230,20],

[113,232,21],

[113,238,127],

[113,240,131],

[113,241,113],

[113,248,65],

[113,250,96],

[113,252,80],

[113,261,72],

[113,262,104],

[113,266,88],

[113,273,60],

[113,275,65],

[114,115,6],

[114,117,3],

[114,123,110],

[114,127,238],

[114,131,240],

[114,134,95],

[114,138,91],

[114,142,217],

[114,146,219],

[114,150,79],

[114,154,75],

[114,158,201],

[114,162,203],

[114,167,63],

[114,171,59],

[114,175,187],

[114,179,185],

[114,186,180],

[114,188,176],

[114,202,157],

[114,204,161],

[114,218,141],

[114,220,145],

[114,225,25],

[114,227,16],

[114,229,19],

[114,231,22],

[114,237,128],

[114,239,132],

[114,241,114],

[114,249,66],

[114,251,95],

[114,253,79],

[114,260,71],

[114,263,103],

[114,267,87],

[114,272,59],

[114,274,66],

[115,116,241],

[115,120,4],

[115,124,111],

[115,128,233],

[115,132,235],

[115,133,94],

[115,137,90],

[115,141,222],

[115,145,224],

[115,149,78],

[115,153,74],

[115,157,206],

[115,161,208],

[115,168,62],

[115,172,58],

[115,176,192],

[115,180,190],

[115,189,179],

[115,191,175],

[115,205,158],

[115,207,162],

[115,221,142],

[115,223,146],

[115,226,14],

[115,228,24],

[115,230,30],

[115,232,18],

[115,234,127],

[115,236,131],

[115,241,115],

[115,248,67],

[115,250,94],

[115,252,78],

[115,261,70],

[115,262,102],

[115,266,86],

[115,273,58],

[115,275,67],

[116,119,3],

[116,123,112],

[116,127,234],

[116,131,236],

[116,134,93],

[116,138,89],

[116,142,221],

[116,146,223],

[116,150,77],

[116,154,73],

[116,158,205],

[116,162,207],

[116,167,61],

[116,171,57],

[116,175,191],

[116,179,189],

[116,190,180],

[116,192,176],

[116,206,157],

[116,208,161],

[116,222,141],

[116,224,145],

[116,225,13],

[116,227,23],

[116,229,29],

[116,231,17],

[116,233,128],

[116,235,132],

[116,241,116],

[116,249,68],

[116,251,93],

[116,253,77],

[116,260,69],

[116,263,101],

[116,267,85],

[116,272,57],

[116,274,68],

[117,118,241],

[117,120,1],

[117,122,109],

[117,126,237],

[117,130,239],

[117,135,96],

[117,139,92],

[117,143,218],

[117,147,220],

[117,151,80],

[117,155,76],

[117,159,202],

[117,163,204],

[117,166,64],

[117,170,60],

[117,174,188],

[117,178,186],

[117,185,177],

[117,187,173],

[117,201,160],

[117,203,164],

[117,217,144],

[117,219,148],

[117,226,17],

[117,228,29],

[117,230,23],

[117,232,13],

[117,238,125],

[117,240,129],

[117,241,117],

[117,242,109],

[117,248,69],

[117,255,64],

[117,261,68],

[117,262,100],

[117,264,92],

[117,266,84],

[117,268,76],

[117,275,69],

[118,119,6],

[118,121,110],

[118,125,238],

[118,129,240],

[118,136,95],

[118,140,91],

[118,144,217],

[118,148,219],

[118,152,79],

[118,156,75],

[118,160,201],

[118,164,203],

[118,165,63],

[118,169,59],

[118,173,187],

[118,177,185],

[118,186,178],

[118,188,174],

[118,202,159],

[118,204,163],

[118,218,143],

[118,220,147],

[118,225,18],

[118,227,30],

[118,229,24],

[118,231,14],

[118,237,126],

[118,239,130],

[118,241,118],

[118,243,110],

[118,249,70],

[118,254,63],

[118,260,67],

[118,263,99],

[118,265,91],

[118,267,83],

[118,269,75],

[118,274,70],

[119,120,241],

[119,122,111],

[119,126,233],

[119,130,235],

[119,135,94],

[119,139,90],

[119,143,222],

[119,147,224],

[119,151,78],

[119,155,74],

[119,159,206],

[119,163,208],

[119,166,62],

[119,170,58],

[119,174,192],

[119,178,190],

[119,189,177],

[119,191,173],

[119,205,160],

[119,207,164],

[119,221,144],

[119,223,148],

[119,226,22],

[119,228,19],

[119,230,16],

[119,232,25],

[119,234,125],

[119,236,129],

[119,241,119],

[119,242,111],

[119,248,71],

[119,255,62],

[119,261,66],

[119,262,98],

[119,264,90],

[119,266,82],

[119,268,74],

[119,275,71],

[120,121,112],

[120,125,234],

[120,129,236],

[120,136,93],

[120,140,89],

[120,144,221],

[120,148,223],

[120,152,77],

[120,156,73],

[120,160,205],

[120,164,207],

[120,165,61],

[120,169,57],

[120,173,191],

[120,177,189],

[120,190,178],

[120,192,174],

[120,206,159],

[120,208,163],

[120,222,143],

[120,224,147],

[120,225,21],

[120,227,20],

[120,229,15],

[120,231,26],

[120,233,126],

[120,235,130],

[120,241,120],

[120,243,112],

[120,249,72],

[120,254,61],

[120,260,65],

[120,263,97],

[120,265,89],

[120,267,81],

[120,269,73],

[120,274,72],

[121,122,241],

[121,124,3],

[121,126,56],

[121,130,54],

[121,134,31],

[121,139,38],

[121,143,195],

[121,147,193],

[121,150,33],

[121,155,40],

[121,159,211],

[121,163,209],

[121,166,35],

[121,171,42],

[121,175,227],

[121,179,225],

[121,185,25],

[121,187,16],

[121,189,13],

[121,191,23],

[121,194,148],

[121,196,144],

[121,210,164],

[121,212,160],

[121,226,180],

[121,228,176],

[121,241,121],

[121,242,241],

[121,251,31],

[121,253,33],

[121,255,35],

[121,257,140],

[121,259,156],

[121,261,172],

[121,262,133],

[121,264,38],

[121,266,149],

[121,268,40],

[121,270,165],

[121,272,42],

[122,123,4],

[122,125,55],

[122,129,53],

[122,133,32],

[122,140,37],

[122,144,196],

[122,148,194],

[122,149,34],

[122,156,39],

[122,160,212],

[122,164,210],

[122,165,36],

[122,172,41],

[122,176,228],

[122,180,226],

[122,186,26],

[122,188,15],

[122,190,14],

[122,192,24],

[122,193,147],

[122,195,143],

[122,209,163],

[122,211,159],

[122,225,179],

[122,227,175],

[122,241,122],

[122,243,241],

[122,250,32],

[122,252,34],

[122,254,36],

[122,256,139],

[122,258,155],

[122,260,171],

[122,263,134],

[122,265,37],

[122,267,150],

[122,269,39],

[122,271,166],

[122,273,41],

[123,124,241],

[123,128,56],

[123,132,54],

[123,136,31],

[123,137,38],

[123,141,195],

[123,145,193],

[123,152,33],

[123,153,40],

[123,157,211],

[123,161,209],

[123,168,35],

[123,169,42],

[123,173,227],

[123,177,225],

[123,185,18],

[123,187,30],

[123,189,21],

[123,191,20],

[123,194,146],

[123,196,142],

[123,210,162],

[123,212,158],

[123,226,178],

[123,228,174],

[123,241,123],

[123,242,4],

[123,257,138],

[123,259,154],

[123,261,170],

[123,262,135],

[123,266,151],

[123,270,167],

[124,127,55],

[124,131,53],

[124,135,32],

[124,138,37],

[124,142,196],

[124,146,194],

[124,151,34],

[124,154,39],

[124,158,212],

[124,162,210],

[124,167,36],

[124,170,41],

[124,174,228],

[124,178,226],

[124,186,17],

[124,188,29],

[124,190,22],

[124,192,19],

[124,193,145],

[124,195,141],

[124,209,161],

[124,211,157],

[124,225,177],

[124,227,173],

[124,241,124],

[124,243,3],

[124,256,137],

[124,258,153],

[124,260,169],

[124,263,136],

[124,267,152],

[124,271,168],

[125,126,241],

[125,128,3],

[125,130,2],

[125,135,195],

[125,139,199],

[125,142,31],

[125,147,44],

[125,151,211],

[125,155,215],

[125,158,33],

[125,163,46],

[125,167,227],

[125,171,231],

[125,174,35],

[125,179,48],

[125,184,49],

[125,185,66],

[125,189,68],

[125,196,136],

[125,200,140],

[125,201,87],

[125,205,85],

[125,212,152],

[125,216,156],

[125,217,103],

[125,221,101],

[125,228,168],

[125,232,172],

[125,233,119],

[125,237,117],

[125,241,125],

[125,242,55],

[125,244,148],

[125,246,164],

[125,248,180],

[125,262,141],

[125,264,199],

[125,266,157],

[125,268,215],

[125,270,173],

[125,272,231],

[125,275,180],

[125,277,164],

[125,279,148],

[126,127,4],

[126,129,5],

[126,136,196],

[126,140,200],

[126,141,32],

[126,148,43],

[126,152,212],

[126,156,216],

[126,157,34],

[126,164,45],

[126,168,228],

[126,172,232],

[126,173,36],

[126,180,47],

[126,183,50],

[126,186,65],

[126,190,67],

[126,195,135],

[126,199,139],

[126,202,88],

[126,206,86],

[126,211,151],

[126,215,155],

[126,218,104],

[126,222,102],

[126,227,167],

[126,231,171],

[126,234,120],

[126,238,118],

[126,241,126],

[126,243,56],

[126,245,147],

[126,247,163],

[126,249,179],

[126,263,142],

[126,265,200],

[126,267,158],

[126,269,216],

[126,271,174],

[126,273,232],

[126,274,179],

[126,276,163],

[126,278,147],

[127,128,241],

[127,132,2],

[127,133,195],

[127,137,199],

[127,144,31],

[127,145,44],

[127,149,211],

[127,153,215],

[127,160,33],

[127,161,46],

[127,165,227],

[127,169,231],

[127,176,35],

[127,177,48],

[127,184,51],

[127,185,70],

[127,189,72],

[127,196,134],

[127,200,138],

[127,201,83],

[127,205,81],

[127,212,150],

[127,216,154],

[127,217,99],

[127,221,97],

[127,228,166],

[127,232,170],

[127,233,115],

[127,237,113],

[127,241,127],

[127,244,146],

[127,246,162],

[127,248,178],

[127,250,195],

[127,252,211],

[127,254,227],

[127,262,143],

[127,266,159],

[127,270,175],

[127,275,178],

[127,277,162],

[127,279,146],

[128,131,5],

[128,134,196],

[128,138,200],

[128,143,32],

[128,146,43],

[128,150,212],

[128,154,216],

[128,159,34],

[128,162,45],

[128,166,228],

[128,170,232],

[128,175,36],

[128,178,47],

[128,183,52],

[128,186,69],

[128,190,71],

[128,195,133],

[128,199,137],

[128,202,84],

[128,206,82],

[128,211,149],

[128,215,153],

[128,218,100],

[128,222,98],

[128,227,165],

[128,231,169],

[128,234,116],

[128,238,114],

[128,241,128],

[128,245,145],

[128,247,161],

[128,249,177],

[128,251,196],

[128,253,212],

[128,255,228],

[128,263,144],

[128,267,160],

[128,271,176],

[128,274,177],

[128,276,161],

[128,278,145],

[129,130,241],

[129,132,3],

[129,135,193],

[129,139,197],

[129,143,44],

[129,146,31],

[129,151,209],

[129,155,213],

[129,159,46],

[129,162,33],

[129,167,225],

[129,171,229],

[129,175,48],

[129,178,35],

[129,182,49],

[129,187,66],

[129,191,68],

[129,194,136],

[129,198,140],

[129,203,87],

[129,207,85],

[129,210,152],

[129,214,156],

[129,219,103],

[129,223,101],

[129,226,168],

[129,230,172],

[129,235,119],

[129,239,117],

[129,241,129],

[129,242,53],

[129,244,144],

[129,246,160],

[129,248,176],

[129,262,145],

[129,264,197],

[129,266,161],

[129,268,213],

[129,270,177],

[129,272,229],

[129,275,176],

[129,277,160],

[129,279,144],

[130,131,4],

[130,136,194],

[130,140,198],

[130,144,43],

[130,145,32],

[130,152,210],

[130,156,214],

[130,160,45],

[130,161,34],

[130,168,226],

[130,172,230],

[130,176,47],

[130,177,36],

[130,181,50],

[130,188,65],

[130,192,67],

[130,193,135],

[130,197,139],

[130,204,88],

[130,208,86],

[130,209,151],

[130,213,155],

[130,220,104],

[130,224,102],

[130,225,167],

[130,229,171],

[130,236,120],

[130,240,118],

[130,241,130],

[130,243,54],

[130,245,143],

[130,247,159],

[130,249,175],

[130,263,146],

[130,265,198],

[130,267,162],

[130,269,214],

[130,271,178],

[130,273,230],

[130,274,175],

[130,276,159],

[130,278,143],

[131,132,241],

[131,133,193],

[131,137,197],

[131,141,44],

[131,148,31],

[131,149,209],

[131,153,213],

[131,157,46],

[131,164,33],

[131,165,225],

[131,169,229],

[131,173,48],

[131,180,35],

[131,182,51],

[131,187,70],

[131,191,72],

[131,194,134],

[131,198,138],

[131,203,83],

[131,207,81],

[131,210,150],

[131,214,154],

[131,219,99],

[131,223,97],

[131,226,166],

[131,230,170],

[131,235,115],

[131,239,113],

[131,241,131],

[131,244,142],

[131,246,158],

[131,248,174],

[131,250,193],

[131,252,209],

[131,254,225],

[131,262,147],

[131,266,163],

[131,270,179],

[131,275,174],

[131,277,158],

[131,279,142],

[132,134,194],

[132,138,198],

[132,142,43],

[132,147,32],

[132,150,210],

[132,154,214],

[132,158,45],

[132,163,34],

[132,166,226],

[132,170,230],

[132,174,47],

[132,179,36],

[132,181,52],

[132,188,69],

[132,192,71],

[132,193,133],

[132,197,137],

[132,204,84],

[132,208,82],

[132,209,149],

[132,213,153],

[132,220,100],

[132,224,98],

[132,225,165],

[132,229,169],

[132,236,116],

[132,240,114],

[132,241,132],

[132,245,141],

[132,247,157],

[132,249,173],

[132,251,194],

[132,253,210],

[132,255,226],

[132,263,148],

[132,267,164],

[132,271,180],

[132,274,173],

[132,276,157],

[132,278,141],

[133,134,241],

[133,136,3],

[133,138,28],

[133,142,56],

[133,146,54],

[133,150,8],

[133,155,47],

[133,159,230],

[133,163,232],

[133,166,10],

[133,171,45],

[133,175,214],

[133,179,216],

[133,194,132],

[133,196,128],

[133,202,23],

[133,204,13],

[133,206,16],

[133,208,25],

[133,213,176],

[133,215,180],

[133,229,160],

[133,231,164],

[133,241,133],

[133,242,32],

[133,247,172],

[133,249,156],

[133,251,241],

[133,253,8],

[133,255,10],

[133,257,52],

[133,263,121],

[133,268,47],

[133,272,45],

[133,274,156],

[133,276,172],

[134,135,4],

[134,137,27],

[134,141,55],

[134,145,53],

[134,149,7],

[134,156,48],

[134,160,229],

[134,164,231],

[134,165,9],

[134,172,46],

[134,176,213],

[134,180,215],

[134,193,131],

[134,195,127],

[134,201,24],

[134,203,14],

[134,205,15],

[134,207,26],

[134,214,175],

[134,216,179],

[134,230,159],

[134,232,163],

[134,241,134],

[134,243,31],

[134,246,171],

[134,248,155],

[134,250,241],

[134,252,7],

[134,254,9],

[134,256,51],

[134,262,122],

[134,269,48],

[134,273,46],

[134,275,155],

[134,277,171],

[135,136,241],

[135,140,28],

[135,144,56],

[135,148,54],

[135,152,8],

[135,153,47],

[135,157,230],

[135,161,232],

[135,168,10],

[135,169,45],

[135,173,214],

[135,177,216],

[135,194,130],

[135,196,126],

[135,202,20],

[135,204,21],

[135,206,30],

[135,208,18],

[135,213,174],

[135,215,178],

[135,229,158],

[135,231,162],

[135,241,135],

[135,247,170],

[135,249,154],

[135,251,4],

[135,257,50],

[135,263,123],

[135,265,28],

[135,274,154],

[135,276,170],

[136,139,27],

[136,143,55],

[136,147,53],

[136,151,7],

[136,154,48],

[136,158,229],

[136,162,231],

[136,167,9],

[136,170,46],

[136,174,213],

[136,178,215],

[136,193,129],

[136,195,125],

[136,201,19],

[136,203,22],

[136,205,29],

[136,207,17],

[136,214,173],

[136,216,177],

[136,230,157],

[136,232,161],

[136,241,136],

[136,246,169],

[136,248,153],

[136,250,3],

[136,256,49],

[136,262,124],

[136,264,27],

[136,275,153],

[136,277,169],

[137,138,241],

[137,140,3],

[137,142,184],

[137,146,182],

[137,151,47],

[137,154,8],

[137,159,226],

[137,163,228],

[137,167,45],

[137,170,10],

[137,175,210],

[137,179,212],

[137,181,145],

[137,183,141],

[137,198,132],

[137,200,128],

[137,202,17],

[137,204,29],

[137,206,22],

[137,208,19],

[137,209,176],

[137,211,180],

[137,225,160],

[137,227,164],

[137,241,137],

[137,247,168],

[137,249,152],

[137,251,27],

[137,257,124],

[137,263,49],

[137,265,3],

[137,274,152],

[137,276,168],

[138,139,4],

[138,141,183],

[138,145,181],

[138,152,48],

[138,153,7],

[138,160,225],

[138,164,227],

[138,168,46],

[138,169,9],

[138,176,209],

[138,180,211],

[138,182,146],

[138,184,142],

[138,197,131],

[138,199,127],

[138,201,18],

[138,203,30],

[138,205,21],

[138,207,20],

[138,210,175],

[138,212,179],

[138,226,159],

[138,228,163],

[138,241,138],

[138,246,167],

[138,248,151],

[138,250,28],

[138,256,123],

[138,262,50],

[138,264,4],

[138,275,151],

[138,277,167],

[139,140,241],

[139,144,184],

[139,148,182],

[139,149,47],

[139,156,8],

[139,157,226],

[139,161,228],

[139,165,45],

[139,172,10],

[139,173,210],

[139,177,212],

[139,181,147],

[139,183,143],

[139,198,130],

[139,200,126],

[139,202,26],

[139,204,15],

[139,206,14],

[139,208,24],

[139,209,174],

[139,211,178],

[139,225,158],

[139,227,162],

[139,241,139],

[139,243,38],

[139,247,166],

[139,249,150],

[139,252,47],

[139,254,45],

[139,257,122],

[139,263,51],

[139,265,241],

[139,269,8],

[139,273,10],

[139,274,150],

[139,276,166],

[140,143,183],

[140,147,181],

[140,150,48],

[140,155,7],

[140,158,225],

[140,162,227],

[140,166,46],

[140,171,9],

[140,174,209],

[140,178,211],

[140,182,148],

[140,184,144],

[140,197,129],

[140,199,125],

[140,201,25],

[140,203,16],

[140,205,13],

[140,207,23],

[140,210,173],

[140,212,177],

[140,226,157],

[140,228,161],

[140,241,140],

[140,242,37],

[140,246,165],

[140,248,149],

[140,253,48],

[140,255,46],

[140,256,121],

[140,262,52],

[140,264,241],

[140,268,7],

[140,272,9],

[140,275,149],

[140,277,165],

[141,142,241],

[141,144,3],

[141,146,2],

[141,151,230],

[141,155,226],

[141,158,8],

[141,163,41],

[141,167,214],

[141,171,210],

[141,174,10],

[141,179,39],

[141,184,137],

[141,188,85],

[141,192,87],

[141,196,124],

[141,200,52],

[141,204,68],

[141,208,66],

[141,209,172],

[141,213,168],

[141,217,114],

[141,221,116],

[141,225,156],

[141,229,152],

[141,233,98],

[141,237,100],

[141,241,141],

[141,244,132],

[141,251,55],

[141,258,180],

[141,260,164],

[141,263,125],

[141,268,226],

[141,272,210],

[141,279,132],

[142,143,4],

[142,145,5],

[142,152,229],

[142,156,225],

[142,157,7],

[142,164,42],

[142,168,213],

[142,172,209],

[142,173,9],

[142,180,40],

[142,183,138],

[142,187,86],

[142,191,88],

[142,195,123],

[142,199,51],

[142,203,67],

[142,207,65],

[142,210,171],

[142,214,167],

[142,218,113],

[142,222,115],

[142,226,155],

[142,230,151],

[142,234,97],

[142,238,99],

[142,241,142],

[142,245,131],

[142,250,56],

[142,259,179],

[142,261,163],

[142,262,126],

[142,269,225],

[142,273,209],

[142,278,131],

[143,144,241],

[143,148,2],

[143,149,230],

[143,153,226],

[143,160,8],

[143,161,41],

[143,165,214],

[143,169,210],

[143,176,10],

[143,177,39],

[143,184,139],

[143,188,81],

[143,192,83],

[143,196,122],

[143,200,50],

[143,204,72],

[143,208,70],

[143,209,170],

[143,213,166],

[143,217,118],

[143,221,120],

[143,225,154],

[143,229,150],

[143,233,102],

[143,237,104],

[143,241,143],

[143,243,195],

[143,244,130],

[143,252,230],

[143,254,214],

[143,258,178],

[143,260,162],

[143,263,127],

[143,265,183],

[143,279,130],

[144,147,5],

[144,150,229],

[144,154,225],

[144,159,7],

[144,162,42],

[144,166,213],

[144,170,209],

[144,175,9],

[144,178,40],

[144,183,140],

[144,187,82],

[144,191,84],

[144,195,121],

[144,199,49],

[144,203,71],

[144,207,69],

[144,210,169],

[144,214,165],

[144,218,117],

[144,222,119],

[144,226,153],

[144,230,149],

[144,234,101],

[144,238,103],

[144,241,144],

[144,242,196],

[144,245,129],

[144,253,229],

[144,255,213],

[144,259,177],

[144,261,161],

[144,262,128],

[144,264,184],

[144,278,129],

[145,146,241],

[145,148,3],

[145,151,232],

[145,155,228],

[145,159,41],

[145,162,8],

[145,167,216],

[145,171,212],

[145,175,39],

[145,178,10],

[145,182,137],

[145,186,85],

[145,190,87],

[145,194,124],

[145,198,52],

[145,202,68],

[145,206,66],

[145,211,172],

[145,215,168],

[145,219,114],

[145,223,116],

[145,227,156],

[145,231,152],

[145,235,98],

[145,239,100],

[145,241,145],

[145,244,128],

[145,251,53],

[145,258,176],

[145,260,160],

[145,263,129],

[145,268,228],

[145,272,212],

[145,279,128],

[146,147,4],

[146,152,231],

[146,156,227],

[146,160,42],

[146,161,7],

[146,168,215],

[146,172,211],

[146,176,40],

[146,177,9],

[146,181,138],

[146,185,86],

[146,189,88],

[146,193,123],

[146,197,51],

[146,201,67],

[146,205,65],

[146,212,171],

[146,216,167],

[146,220,113],

[146,224,115],

[146,228,155],

[146,232,151],

[146,236,97],

[146,240,99],

[146,241,146],

[146,245,127],

[146,250,54],

[146,259,175],

[146,261,159],

[146,262,130],

[146,269,227],

[146,273,211],

[146,278,127],

[147,148,241],

[147,149,232],

[147,153,228],

[147,157,41],

[147,164,8],

[147,165,216],

[147,169,212],

[147,173,39],

[147,180,10],

[147,182,139],

[147,186,81],

[147,190,83],

[147,194,122],

[147,198,50],

[147,202,72],

[147,206,70],

[147,211,170],

[147,215,166],

[147,219,118],

[147,223,120],

[147,227,154],

[147,231,150],

[147,235,102],

[147,239,104],

[147,241,147],

[147,243,193],

[147,244,126],

[147,252,232],

[147,254,216],

[147,258,174],

[147,260,158],

[147,263,131],

[147,265,181],

[147,279,126],

[148,150,231],

[148,154,227],

[148,158,42],

[148,163,7],

[148,166,215],

[148,170,211],

[148,174,40],

[148,179,9],

[148,181,140],

[148,185,82],

[148,189,84],

[148,193,121],

[148,197,49],

[148,201,71],

[148,205,69],

[148,212,169],

[148,216,165],

[148,220,117],

[148,224,119],

[148,228,153],

[148,232,149],

[148,236,101],

[148,240,103],

[148,241,148],

[148,242,194],

[148,245,125],

[148,253,231],

[148,255,215],

[148,259,173],

[148,261,157],

[148,262,132],

[148,264,182],

[148,278,125],

[149,150,241],

[149,152,3],

[149,154,28],

[149,158,56],

[149,162,54],

[149,166,12],

[149,171,43],

[149,175,198],

[149,179,200],

[149,197,176],

[149,199,180],

[149,210,132],

[149,212,128],

[149,218,23],

[149,220,13],

[149,222,16],

[149,224,25],

[149,229,144],

[149,231,148],

[149,241,149],

[149,242,34],

[149,245,172],

[149,249,140],

[149,251,7],

[149,253,241],

[149,255,12],

[149,259,52],

[149,264,47],

[149,267,121],

[149,272,43],

[149,274,140],

[149,278,172],

[150,151,4],

[150,153,27],

[150,157,55],

[150,161,53],

[150,165,11],

[150,172,44],

[150,176,197],

[150,180,199],

[150,198,175],

[150,200,179],

[150,209,131],

[150,211,127],

[150,217,24],

[150,219,14],

[150,221,15],

[150,223,26],

[150,230,143],

[150,232,147],

[150,241,150],

[150,243,33],

[150,244,171],

[150,248,139],

[150,250,8],

[150,252,241],

[150,254,11],

[150,258,51],

[150,265,48],

[150,266,122],

[150,273,44],

[150,275,139],

[150,279,171],

[151,152,241],

[151,156,28],

[151,160,56],

[151,164,54],

[151,168,12],

[151,169,43],

[151,173,198],

[151,177,200],

[151,197,174],

[151,199,178],

[151,210,130],

[151,212,126],

[151,218,20],

[151,220,21],

[151,222,30],

[151,224,18],

[151,229,142],

[151,231,146],

[151,241,151],

[151,245,170],

[151,249,138],

[151,253,4],

[151,259,50],

[151,267,123],

[151,269,28],

[151,274,138],

[151,278,170],

[152,155,27],

[152,159,55],

[152,163,53],

[152,167,11],

[152,170,44],

[152,174,197],

[152,178,199],

[152,198,173],

[152,200,177],

[152,209,129],

[152,211,125],

[152,217,19],

[152,219,22],

[152,221,29],

[152,223,17],

[152,230,141],

[152,232,145],

[152,241,152],

[152,244,169],

[152,248,137],

[152,252,3],

[152,258,49],

[152,266,124],

[152,268,27],

[152,275,137],

[152,279,169],

[153,154,241],

[153,156,3],

[153,158,184],

[153,162,182],

[153,167,43],

[153,170,12],

[153,175,194],

[153,179,196],

[153,181,161],

[153,183,157],

[153,193,176],

[153,195,180],

[153,214,132],

[153,216,128],

[153,218,17],

[153,220,29],

[153,222,22],

[153,224,19],

[153,225,144],

[153,227,148],

[153,241,153],

[153,245,168],

[153,249,136],

[153,253,27],

[153,259,124],

[153,267,49],

[153,269,3],

[153,274,136],

[153,278,168],

[154,155,4],

[154,157,183],

[154,161,181],

[154,168,44],

[154,169,11],

[154,176,193],

[154,180,195],

[154,182,162],

[154,184,158],

[154,194,175],

[154,196,179],

[154,213,131],

[154,215,127],

[154,217,18],

[154,219,30],

[154,221,21],

[154,223,20],

[154,226,143],

[154,228,147],

[154,241,154],

[154,244,167],

[154,248,135],

[154,252,28],

[154,258,123],

[154,266,50],

[154,268,4],

[154,275,135],

[154,279,167],

[155,156,241],

[155,160,184],

[155,164,182],

[155,165,43],

[155,172,12],

[155,173,194],

[155,177,196],

[155,181,163],

[155,183,159],

[155,193,174],

[155,195,178],

[155,214,130],

[155,216,126],

[155,218,26],

[155,220,15],

[155,222,14],

[155,224,24],

[155,225,142],

[155,227,146],

[155,241,155],

[155,243,40],

[155,245,166],

[155,249,134],

[155,250,47],

[155,254,43],

[155,259,122],

[155,265,7],

[155,267,51],

[155,269,241],

[155,273,12],

[155,274,134],

[155,278,166],

[156,159,183],

[156,163,181],

[156,166,44],

[156,171,11],

[156,174,193],

[156,178,195],

[156,182,164],

[156,184,160],

[156,194,173],

[156,196,177],

[156,213,129],

[156,215,125],

[156,217,25],

[156,219,16],

[156,221,13],

[156,223,23],

[156,226,141],

[156,228,145],

[156,241,156],

[156,242,39],

[156,244,165],

[156,248,133],

[156,251,48],

[156,255,44],

[156,258,121],

[156,264,8],

[156,266,52],

[156,268,241],

[156,272,11],

[156,275,133],

[156,279,165],

[157,158,241],

[157,160,3],

[157,162,2],

[157,167,198],

[157,171,194],

[157,174,12],

[157,179,37],

[157,184,153],

[157,188,101],

[157,192,103],

[157,193,172],

[157,197,168],

[157,201,114],

[157,205,116],

[157,212,124],

[157,216,52],

[157,220,68],

[157,224,66],

[157,225,140],

[157,229,136],

[157,233,82],

[157,237,84],

[157,241,157],

[157,246,132],

[157,253,55],

[157,256,180],

[157,260,148],

[157,264,226],

[157,267,125],

[157,272,194],

[157,277,132],

[158,159,4],

[158,161,5],

[158,168,197],

[158,172,193],

[158,173,11],

[158,180,38],

[158,183,154],

[158,187,102],

[158,191,104],

[158,194,171],

[158,198,167],

[158,202,113],

[158,206,115],

[158,211,123],

[158,215,51],

[158,219,67],

[158,223,65],

[158,226,139],

[158,230,135],

[158,234,81],

[158,238,83],

[158,241,158],

[158,247,131],

[158,252,56],

[158,257,179],

[158,261,147],

[158,265,225],

[158,266,126],

[158,273,193],

[158,276,131],

[159,160,241],

[159,164,2],

[159,165,198],

[159,169,194],

[159,176,12],

[159,177,37],

[159,184,155],

[159,188,97],

[159,192,99],

[159,193,170],

[159,197,166],

[159,201,118],

[159,205,120],

[159,212,122],

[159,216,50],

[159,220,72],

[159,224,70],

[159,225,138],

[159,229,134],

[159,233,86],

[159,237,88],

[159,241,159],

[159,243,211],

[159,246,130],

[159,250,230],

[159,254,198],

[159,256,178],

[159,260,146],

[159,267,127],

[159,269,183],

[159,277,130],

[160,163,5],

[160,166,197],

[160,170,193],

[160,175,11],

[160,178,38],

[160,183,156],

[160,187,98],

[160,191,100],

[160,194,169],

[160,198,165],

[160,202,117],

[160,206,119],

[160,211,121],

[160,215,49],

[160,219,71],

[160,223,69],

[160,226,137],

[160,230,133],

[160,234,85],

[160,238,87],

[160,241,160],

[160,242,212],

[160,247,129],

[160,251,229],

[160,255,197],

[160,257,177],

[160,261,145],

[160,266,128],

[160,268,184],

[160,276,129],

[161,162,241],

[161,164,3],

[161,167,200],

[161,171,196],

[161,175,37],

[161,178,12],

[161,182,153],

[161,186,101],

[161,190,103],

[161,195,172],

[161,199,168],

[161,203,114],

[161,207,116],

[161,210,124],

[161,214,52],

[161,218,68],

[161,222,66],

[161,227,140],

[161,231,136],

[161,235,82],

[161,239,84],

[161,241,161],

[161,246,128],

[161,253,53],

[161,256,176],

[161,260,144],

[161,264,228],

[161,267,129],

[161,272,196],

[161,277,128],

[162,163,4],

[162,168,199],

[162,172,195],

[162,176,38],

[162,177,11],

[162,181,154],

[162,185,102],

[162,189,104],

[162,196,171],

[162,200,167],

[162,204,113],

[162,208,115],

[162,209,123],

[162,213,51],

[162,217,67],

[162,221,65],

[162,228,139],

[162,232,135],

[162,236,81],

[162,240,83],

[162,241,162],

[162,247,127],

[162,252,54],

[162,257,175],

[162,261,143],

[162,265,227],

[162,266,130],

[162,273,195],

[162,276,127],

[163,164,241],

[163,165,200],

[163,169,196],

[163,173,37],

[163,180,12],

[163,182,155],

[163,186,97],

[163,190,99],

[163,195,170],

[163,199,166],

[163,203,118],

[163,207,120],

[163,210,122],

[163,214,50],

[163,218,72],

[163,222,70],

[163,227,138],

[163,231,134],

[163,235,86],

[163,239,88],

[163,241,163],

[163,243,209],

[163,246,126],

[163,250,232],

[163,254,200],

[163,256,174],

[163,260,142],

[163,267,131],

[163,269,181],

[163,277,126],

[164,166,199],

[164,170,195],

[164,174,38],

[164,179,11],

[164,181,156],

[164,185,98],

[164,189,100],

[164,196,169],

[164,200,165],

[164,204,117],

[164,208,119],

[164,209,121],

[164,213,49],

[164,217,71],

[164,221,69],

[164,228,137],

[164,232,133],

[164,236,85],

[164,240,87],

[164,241,164],

[164,242,210],

[164,247,125],

[164,251,231],

[164,255,199],

[164,257,173],

[164,261,141],

[164,266,132],

[164,268,182],

[164,276,125],

[165,166,241],

[165,168,3],

[165,170,28],

[165,174,56],

[165,178,54],

[165,197,160],

[165,199,164],

[165,213,144],

[165,215,148],

[165,226,132],

[165,228,128],

[165,234,23],

[165,236,13],

[165,238,16],

[165,240,25],

[165,241,165],

[165,242,36],

[165,245,156],

[165,247,140],

[165,251,9],

[165,253,11],

[165,255,241],

[165,261,52],

[165,264,45],

[165,268,43],

[165,271,121],

[165,276,140],

[165,278,156],

[166,167,4],

[166,169,27],

[166,173,55],

[166,177,53],

[166,198,159],

[166,200,163],

[166,214,143],

[166,216,147],

[166,225,131],

[166,227,127],

[166,233,24],

[166,235,14],

[166,237,15],

[166,239,26],

[166,241,166],

[166,243,35],

[166,244,155],

[166,246,139],

[166,250,10],

[166,252,12],

[166,254,241],

[166,260,51],

[166,265,46],

[166,269,44],

[166,270,122],

[166,277,139],

[166,279,155],

[167,168,241],

[167,172,28],

[167,176,56],

[167,180,54],

[167,197,158],

[167,199,162],

[167,213,142],

[167,215,146],

[167,226,130],

[167,228,126],

[167,234,20],

[167,236,21],

[167,238,30],

[167,240,18],

[167,241,167],

[167,245,154],

[167,247,138],

[167,255,4],

[167,261,50],

[167,271,123],

[167,273,28],

[167,276,138],

[167,278,154],

[168,171,27],

[168,175,55],

[168,179,53],

[168,198,157],

[168,200,161],

[168,214,141],

[168,216,145],

[168,225,129],

[168,227,125],

[168,233,19],

[168,235,22],

[168,237,29],

[168,239,17],

[168,241,168],

[168,244,153],

[168,246,137],

[168,254,3],

[168,260,49],

[168,270,124],

[168,272,27],

[168,277,137],

[168,279,153],

[169,170,241],

[169,172,3],

[169,174,184],

[169,178,182],

[169,181,177],

[169,183,173],

[169,193,160],

[169,195,164],

[169,209,144],

[169,211,148],

[169,230,132],

[169,232,128],

[169,234,17],

[169,236,29],

[169,238,22],

[169,240,19],

[169,241,169],

[169,245,152],

[169,247,136],

[169,255,27],

[169,261,124],

[169,271,49],

[169,273,3],

[169,276,136],

[169,278,152],

[170,171,4],

[170,173,183],

[170,177,181],

[170,182,178],

[170,184,174],

[170,194,159],

[170,196,163],

[170,210,143],

[170,212,147],

[170,229,131],

[170,231,127],

[170,233,18],

[170,235,30],

[170,237,21],

[170,239,20],

[170,241,170],

[170,244,151],

[170,246,135],

[170,254,28],

[170,260,123],

[170,270,50],

[170,272,4],

[170,277,135],

[170,279,151],

[171,172,241],

[171,176,184],

[171,180,182],

[171,181,179],

[171,183,175],

[171,193,158],

[171,195,162],

[171,209,142],

[171,211,146],

[171,230,130],

[171,232,126],

[171,234,26],

[171,236,15],

[171,238,14],

[171,240,24],

[171,241,171],

[171,243,42],

[171,245,150],

[171,247,134],

[171,250,45],

[171,252,43],

[171,261,122],

[171,265,9],

[171,269,11],

[171,271,51],

[171,273,241],

[171,276,134],

[171,278,150],

[172,175,183],

[172,179,181],

[172,182,180],

[172,184,176],

[172,194,157],

[172,196,161],

[172,210,141],

[172,212,145],

[172,229,129],

[172,231,125],

[172,233,25],

[172,235,16],

[172,237,13],

[172,239,23],

[172,241,172],

[172,242,41],

[172,244,149],

[172,246,133],

[172,251,46],

[172,253,44],

[172,260,121],

[172,264,10],

[172,268,12],

[172,270,52],

[172,272,241],

[172,277,133],

[172,279,149],

[173,174,241],

[173,176,3],

[173,178,2],

[173,184,169],

[173,188,117],

[173,192,119],

[173,193,156],

[173,197,152],

[173,201,98],

[173,205,100],

[173,209,140],

[173,213,136],

[173,217,82],

[173,221,84],

[173,228,124],

[173,232,52],

[173,236,68],

[173,240,66],

[173,241,173],

[173,248,132],

[173,255,55],

[173,256,164],

[173,258,148],

[173,264,210],

[173,268,194],

[173,271,125],

[173,275,132],

[174,175,4],

[174,177,5],

[174,183,170],

[174,187,118],

[174,191,120],

[174,194,155],

[174,198,151],

[174,202,97],

[174,206,99],

[174,210,139],

[174,214,135],

[174,218,81],

[174,222,83],

[174,227,123],

[174,231,51],

[174,235,67],

[174,239,65],

[174,241,174],

[174,249,131],

[174,254,56],

[174,257,163],

[174,259,147],

[174,265,209],

[174,269,193],

[174,270,126],

[174,274,131],

[175,176,241],

[175,180,2],

[175,184,171],

[175,188,113],

[175,192,115],

[175,193,154],

[175,197,150],

[175,201,102],

[175,205,104],

[175,209,138],

[175,213,134],

[175,217,86],

[175,221,88],

[175,228,122],

[175,232,50],

[175,236,72],

[175,240,70],

[175,241,175],

[175,243,227],

[175,248,130],

[175,250,214],

[175,252,198],

[175,256,162],

[175,258,146],

[175,271,127],

[175,273,183],

[175,275,130],

[176,179,5],

[176,183,172],

[176,187,114],

[176,191,116],

[176,194,153],

[176,198,149],

[176,202,101],

[176,206,103],

[176,210,137],

[176,214,133],

[176,218,85],

[176,222,87],

[176,227,121],

[176,231,49],

[176,235,71],

[176,239,69],

[176,241,176],

[176,242,228],

[176,249,129],

[176,251,213],

[176,253,197],

[176,257,161],

[176,259,145],

[176,270,128],

[176,272,184],

[176,274,129],

[177,178,241],

[177,180,3],

[177,182,169],

[177,186,117],

[177,190,119],

[177,195,156],

[177,199,152],

[177,203,98],

[177,207,100],

[177,211,140],

[177,215,136],

[177,219,82],

[177,223,84],

[177,226,124],

[177,230,52],

[177,234,68],

[177,238,66],

[177,241,177],

[177,248,128],

[177,255,53],

[177,256,160],

[177,258,144],

[177,264,212],

[177,268,196],

[177,271,129],

[177,275,128],

[178,179,4],

[178,181,170],

[178,185,118],

[178,189,120],

[178,196,155],

[178,200,151],

[178,204,97],

[178,208,99],

[178,212,139],

[178,216,135],

[178,220,81],

[178,224,83],

[178,225,123],

[178,229,51],

[178,233,67],

[178,237,65],

[178,241,178],

[178,249,127],

[178,254,54],

[178,257,159],

[178,259,143],

[178,265,211],

[178,269,195],

[178,270,130],

[178,274,127],

[179,180,241],

[179,182,171],

[179,186,113],

[179,190,115],

[179,195,154],

[179,199,150],

[179,203,102],

[179,207,104],

[179,211,138],

[179,215,134],

[179,219,86],

[179,223,88],

[179,226,122],

[179,230,50],

[179,234,72],

[179,238,70],

[179,241,179],

[179,243,225],

[179,248,126],

[179,250,216],

[179,252,200],

[179,256,158],

[179,258,142],

[179,271,131],

[179,273,181],

[179,275,126],

[180,181,172],

[180,185,114],

[180,189,116],

[180,196,153],

[180,200,149],

[180,204,101],

[180,208,103],

[180,212,137],

[180,216,133],

[180,220,85],

[180,224,87],

[180,225,121],

[180,229,49],

[180,233,71],

[180,237,69],

[180,241,180],

[180,242,226],

[180,249,125],

[180,251,215],

[180,253,199],

[180,257,157],

[180,259,141],

[180,270,132],

[180,272,182],

[180,274,125],

[181,182,241],

[181,184,5],

[181,186,60],

[181,190,58],

[181,194,37],

[181,199,44],

[181,203,75],

[181,207,73],

[181,210,39],

[181,215,46],

[181,219,91],

[181,223,89],

[181,226,41],

[181,231,48],

[181,235,107],

[181,239,105],

[181,241,181],

[181,244,200],

[181,246,216],

[181,248,232],

[181,256,193],

[181,258,209],

[181,260,225],

[181,264,147],

[181,268,163],

[181,272,179],

[181,275,232],

[181,277,216],

[181,279,200],

[182,183,2],

[182,185,59],

[182,189,57],

[182,193,38],

[182,200,43],

[182,204,76],

[182,208,74],

[182,209,40],

[182,216,45],

[182,220,92],

[182,224,90],

[182,225,42],

[182,232,47],

[182,236,108],

[182,240,106],

[182,241,182],

[182,245,199],

[182,247,215],

[182,249,231],

[182,257,194],

[182,259,210],

[182,261,226],

[182,265,148],

[182,269,164],

[182,273,180],

[182,274,231],

[182,276,215],

[182,278,199],

[183,184,241],

[183,188,60],

[183,192,58],

[183,196,37],

[183,197,44],

[183,201,75],

[183,205,73],

[183,212,39],

[183,213,46],

[183,217,91],

[183,221,89],

[183,228,41],

[183,229,48],

[183,233,107],

[183,237,105],

[183,241,183],

[183,244,198],

[183,246,214],

[183,248,230],

[183,256,195],

[183,258,211],

[183,260,227],

[183,264,143],

[183,268,159],

[183,272,175],

[183,275,230],

[183,277,214],

[183,279,198],

[184,187,59],

[184,191,57],

[184,195,38],

[184,198,43],

[184,202,76],

[184,206,74],

[184,211,40],

[184,214,45],

[184,218,92],

[184,222,90],

[184,227,42],

[184,230,47],

[184,234,108],

[184,238,106],

[184,241,184],

[184,245,197],

[184,247,213],

[184,249,229],

[184,257,196],

[184,259,212],

[184,261,228],

[184,265,144],

[184,269,160],

[184,273,176],

[184,274,229],

[184,276,213],

[184,278,197],

[185,186,241],

[185,188,5],

[185,190,6],

[185,195,75],

[185,199,79],

[185,202,37],

[185,207,32],

[185,211,91],

[185,215,95],

[185,218,39],

[185,223,34],

[185,227,107],

[185,231,111],

[185,234,41],

[185,239,36],

[185,241,185],

[185,243,25],

[185,256,201],

[185,258,217],

[185,260,233],

[185,263,208],

[185,267,224],

[185,271,240],

[186,187,2],

[186,189,1],

[186,196,76],

[186,200,80],

[186,201,38],

[186,208,31],

[186,212,92],

[186,216,96],

[186,217,40],

[186,224,33],

[186,228,108],

[186,232,112],

[186,233,42],

[186,240,35],

[186,241,186],

[186,242,26],

[186,257,202],

[186,259,218],

[186,261,234],

[186,262,207],

[186,266,223],

[186,270,239],

[187,188,241],

[187,192,6],

[187,193,75],

[187,197,79],

[187,204,37],

[187,205,32],

[187,209,91],

[187,213,95],

[187,220,39],

[187,221,34],

[187,225,107],

[187,229,111],

[187,236,41],

[187,237,36],

[187,241,187],

[187,243,16],

[187,256,203],

[187,258,219],

[187,260,235],

[187,263,206],

[187,267,222],

[187,271,238],

[188,191,1],

[188,194,76],

[188,198,80],

[188,203,38],

[188,206,31],

[188,210,92],

[188,214,96],

[188,219,40],

[188,222,33],

[188,226,108],

[188,230,112],

[188,235,42],

[188,238,35],

[188,241,188],

[188,242,15],

[188,257,204],

[188,259,220],

[188,261,236],

[188,262,205],

[188,266,221],

[188,270,237],

[189,190,241],

[189,192,5],

[189,195,73],

[189,199,77],

[189,203,32],

[189,206,37],

[189,211,89],

[189,215,93],

[189,219,34],

[189,222,39],

[189,227,105],

[189,231,109],

[189,235,36],

[189,238,41],

[189,241,189],

[189,243,13],

[189,256,205],

[189,258,221],

[189,260,237],

[189,263,204],

[189,267,220],

[189,271,236],

[190,191,2],

[190,196,74],

[190,200,78],

[190,204,31],

[190,205,38],

[190,212,90],

[190,216,94],

[190,220,33],

[190,221,40],

[190,228,106],

[190,232,110],

[190,236,35],

[190,237,42],

[190,241,190],

[190,242,14],

[190,257,206],

[190,259,222],

[190,261,238],

[190,262,203],

[190,266,219],

[190,270,235],

[191,192,241],

[191,193,73],

[191,197,77],

[191,201,32],

[191,208,37],

[191,209,89],

[191,213,93],

[191,217,34],

[191,224,39],

[191,225,105],

[191,229,109],

[191,233,36],

[191,240,41],

[191,241,191],

[191,243,23],

[191,256,207],

[191,258,223],

[191,260,239],

[191,263,202],

[191,267,218],

[191,271,234],

[192,194,74],

[192,198,78],

[192,202,31],

[192,207,38],

[192,210,90],

[192,214,94],

[192,218,33],

[192,223,40],

[192,226,106],

[192,230,110],

[192,234,35],

[192,239,42],

[192,241,192],

[192,242,24],

[192,257,208],

[192,259,224],

[192,261,240],

[192,262,201],

[192,266,217],

[192,270,233],

[193,194,241],

[193,196,5],

[193,198,28],

[193,202,60],

[193,206,58],

[193,210,8],

[193,215,35],

[193,219,110],

[193,223,112],

[193,226,10],

[193,231,33],

[193,235,94],

[193,239,96],

[193,241,193],

[193,242,147],

[193,244,56],

[193,251,131],

[193,257,181],

[193,266,232],

[193,268,174],

[193,270,216],

[193,272,158],

[193,279,56],

[194,195,2],

[194,197,27],

[194,201,59],

[194,205,57],

[194,209,7],

[194,216,36],

[194,220,109],

[194,224,111],

[194,225,9],

[194,232,34],

[194,236,93],

[194,240,95],

[194,241,194],

[194,243,148],

[194,245,55],

[194,250,132],

[194,256,182],

[194,267,231],

[194,269,173],

[194,271,215],

[194,273,157],

[194,278,55],

[195,196,241],

[195,200,28],

[195,204,60],

[195,208,58],

[195,212,8],

[195,213,35],

[195,217,110],

[195,221,112],

[195,228,10],

[195,229,33],

[195,233,94],

[195,237,96],

[195,241,195],

[195,242,143],

[195,244,54],

[195,251,127],

[195,257,183],

[195,266,230],

[195,268,178],

[195,270,214],

[195,272,162],

[195,279,54],

[196,199,27],

[196,203,59],

[196,207,57],

[196,211,7],

[196,214,36],

[196,218,109],

[196,222,111],

[196,227,9],

[196,230,34],

[196,234,93],

[196,238,95],

[196,241,196],

[196,243,144],

[196,245,53],

[196,250,128],

[196,256,184],

[196,267,229],

[196,269,177],

[196,271,213],

[196,273,161],

[196,278,53],

[197,198,241],

[197,200,5],

[197,202,64],

[197,206,62],

[197,211,35],

[197,214,8],

[197,219,106],

[197,223,108],

[197,227,33],

[197,230,10],

[197,235,90],

[197,239,92],

[197,241,197],

[197,244,184],

[197,252,176],

[197,254,160],

[197,257,53],

[197,265,129],

[197,266,228],

[197,270,212],

[197,279,184],

[198,199,2],

[198,201,63],

[198,205,61],

[198,212,36],

[198,213,7],

[198,220,105],

[198,224,107],

[198,228,34],

[198,229,9],

[198,236,89],

[198,240,91],

[198,241,198],

[198,245,183],

[198,253,175],

[198,255,159],

[198,256,54],

[198,264,130],

[198,267,227],

[198,271,211],

[198,278,183],

[199,200,241],

[199,204,64],

[199,208,62],

[199,209,35],

[199,216,8],

[199,217,106],

[199,221,108],

[199,225,33],

[199,232,10],

[199,233,90],

[199,237,92],

[199,241,199],

[199,244,182],

[199,252,180],

[199,254,164],

[199,257,55],

[199,265,125],

[199,266,226],

[199,270,210],

[199,279,182],

[200,203,63],

[200,207,61],

[200,210,36],

[200,215,7],

[200,218,105],

[200,222,107],

[200,226,34],

[200,231,9],

[200,234,89],

[200,238,91],

[200,241,200],

[200,245,181],

[200,253,179],

[200,255,163],

[200,256,56],

[200,264,126],

[200,267,225],

[200,271,209],

[200,278,181],

[201,202,241],

[201,204,5],

[201,206,6],

[201,211,110],

[201,215,106],

[201,218,8],

[201,223,47],

[201,227,94],

[201,231,90],

[201,234,10],

[201,239,45],

[201,241,201],

[201,247,240],

[201,249,224],

[201,251,24],

[201,257,185],

[201,263,192],

[201,265,25],

[201,274,224],

[201,276,240],

[202,203,2],

[202,205,1],

[202,212,109],

[202,216,105],

[202,217,7],

[202,224,48],

[202,228,93],

[202,232,89],

[202,233,9],

[202,240,46],

[202,241,202],

[202,246,239],

[202,248,223],

[202,250,23],

[202,256,186],

[202,262,191],

[202,264,26],

[202,275,223],

[202,277,239],

[203,204,241],

[203,208,6],

[203,209,110],

[203,213,106],

[203,220,8],

[203,221,47],

[203,225,94],

[203,229,90],

[203,236,10],

[203,237,45],

[203,241,203],

[203,247,238],

[203,249,222],

[203,251,14],

[203,257,187],

[203,263,190],

[203,265,16],

[203,274,222],

[203,276,238],

[204,207,1],

[204,210,109],

[204,214,105],

[204,219,7],

[204,222,48],

[204,226,93],

[204,230,89],

[204,235,9],

[204,238,46],

[204,241,204],

[204,246,237],

[204,248,221],

[204,250,13],

[204,256,188],

[204,262,189],

[204,264,15],

[204,275,221],

[204,277,237],

[205,206,241],

[205,208,5],

[205,211,112],

[205,215,108],

[205,219,47],

[205,222,8],

[205,227,96],

[205,231,92],

[205,235,45],

[205,238,10],

[205,241,205],

[205,247,236],

[205,249,220],

[205,251,15],

[205,257,189],

[205,263,188],

[205,265,13],

[205,274,220],

[205,276,236],

[206,207,2],

[206,212,111],

[206,216,107],

[206,220,48],

[206,221,7],

[206,228,95],

[206,232,91],

[206,236,46],

[206,237,9],

[206,241,206],

[206,246,235],

[206,248,219],

[206,250,16],

[206,256,190],

[206,262,187],

[206,264,14],

[206,275,219],

[206,277,235],

[207,208,241],

[207,209,112],

[207,213,108],

[207,217,47],

[207,224,8],

[207,225,96],

[207,229,92],

[207,233,45],

[207,240,10],

[207,241,207],

[207,247,234],

[207,249,218],

[207,251,26],

[207,257,191],

[207,263,186],

[207,265,23],

[207,274,218],

[207,276,234],

[208,210,111],

[208,214,107],

[208,218,48],

[208,223,7],

[208,226,95],

[208,230,91],

[208,234,46],

[208,239,9],

[208,241,208],

[208,246,233],

[208,248,217],

[208,250,25],

[208,256,192],

[208,262,185],

[208,264,24],

[208,275,217],

[208,277,233],

[209,210,241],

[209,212,5],

[209,214,28],

[209,218,60],

[209,222,58],

[209,226,12],

[209,231,31],

[209,235,78],

[209,239,80],

[209,241,209],

[209,242,163],

[209,246,56],

[209,253,131],

[209,259,181],

[209,262,232],

[209,264,174],

[209,270,200],

[209,272,142],

[209,277,56],

[210,211,2],

[210,213,27],

[210,217,59],

[210,221,57],

[210,225,11],

[210,232,32],

[210,236,77],

[210,240,79],

[210,241,210],

[210,243,164],

[210,247,55],

[210,252,132],

[210,258,182],

[210,263,231],

[210,265,173],

[210,271,199],

[210,273,141],

[210,276,55],

[211,212,241],

[211,216,28],

[211,220,60],

[211,224,58],

[211,228,12],

[211,229,31],

[211,233,78],

[211,237,80],

[211,241,211],

[211,242,159],

[211,246,54],

[211,253,127],

[211,259,183],

[211,262,230],

[211,264,178],

[211,270,198],

[211,272,146],

[211,277,54],

[212,215,27],

[212,219,59],

[212,223,57],

[212,227,11],

[212,230,32],

[212,234,77],

[212,238,79],

[212,241,212],

[212,243,160],

[212,247,53],

[212,252,128],

[212,258,184],

[212,263,229],

[212,265,177],

[212,271,197],

[212,273,145],

[212,276,53],

[213,214,241],

[213,216,5],

[213,218,64],

[213,222,62],

[213,227,31],

[213,230,12],

[213,235,74],

[213,239,76],

[213,241,213],

[213,246,184],

[213,250,176],

[213,254,144],

[213,259,53],

[213,262,228],

[213,269,129],

[213,270,196],

[213,277,184],

[214,215,2],

[214,217,63],

[214,221,61],

[214,228,32],

[214,229,11],

[214,236,73],

[214,240,75],

[214,241,214],

[214,247,183],

[214,251,175],

[214,255,143],

[214,258,54],

[214,263,227],

[214,268,130],

[214,271,195],

[214,276,183],

[215,216,241],

[215,220,64],

[215,224,62],

[215,225,31],

[215,232,12],

[215,233,74],

[215,237,76],

[215,241,215],

[215,246,182],

[215,250,180],

[215,254,148],

[215,259,55],

[215,262,226],

[215,269,125],

[215,270,194],

[215,277,182],

[216,219,63],

[216,223,61],

[216,226,32],

[216,231,11],

[216,234,73],

[216,238,75],

[216,241,216],

[216,247,181],

[216,251,179],

[216,255,147],

[216,258,56],

[216,263,225],

[216,268,126],

[216,271,193],

[216,276,181],

[217,218,241],

[217,220,5],

[217,222,6],

[217,227,78],

[217,231,74],

[217,234,12],

[217,239,43],

[217,241,217],

[217,245,240],

[217,249,208],

[217,253,24],

[217,259,185],

[217,267,192],

[217,269,25],

[217,274,208],

[217,278,240],

[218,219,2],

[218,221,1],

[218,228,77],

[218,232,73],

[218,233,11],

[218,240,44],

[218,241,218],

[218,244,239],

[218,248,207],

[218,252,23],

[218,258,186],

[218,266,191],

[218,268,26],

[218,275,207],

[218,279,239],

[219,220,241],

[219,224,6],

[219,225,78],

[219,229,74],

[219,236,12],

[219,237,43],

[219,241,219],

[219,245,238],

[219,249,206],

[219,253,14],

[219,259,187],

[219,267,190],

[219,269,16],

[219,274,206],

[219,278,238],

[220,223,1],

[220,226,77],

[220,230,73],

[220,235,11],

[220,238,44],

[220,241,220],

[220,244,237],

[220,248,205],

[220,252,13],

[220,258,188],

[220,266,189],

[220,268,15],

[220,275,205],

[220,279,237],

[221,222,241],

[221,224,5],

[221,227,80],

[221,231,76],

[221,235,43],

[221,238,12],

[221,241,221],

[221,245,236],

[221,249,204],

[221,253,15],

[221,259,189],

[221,267,188],

[221,269,13],

[221,274,204],

[221,278,236],

[222,223,2],

[222,228,79],

[222,232,75],

[222,236,44],

[222,237,11],

[222,241,222],

[222,244,235],

[222,248,203],

[222,252,16],

[222,258,190],

[222,266,187],

[222,268,14],

[222,275,203],

[222,279,235],

[223,224,241],

[223,225,80],

[223,229,76],

[223,233,43],

[223,240,12],

[223,241,223],

[223,245,234],

[223,249,202],

[223,253,26],

[223,259,191],

[223,267,186],

[223,269,23],

[223,274,202],

[223,278,234],

[224,226,79],

[224,230,75],

[224,234,44],

[224,239,11],

[224,241,224],

[224,244,233],

[224,248,201],

[224,252,25],

[224,258,192],

[224,266,185],

[224,268,24],

[224,275,201],

[224,279,233],

[225,226,241],

[225,228,5],

[225,230,28],

[225,234,60],

[225,238,58],

[225,241,225],

[225,242,179],

[225,248,56],

[225,255,131],

[225,261,181],

[225,262,216],

[225,264,158],

[225,266,200],

[225,268,142],

[225,275,56],

[226,227,2],

[226,229,27],

[226,233,59],

[226,237,57],

[226,241,226],

[226,243,180],

[226,249,55],

[226,254,132],

[226,260,182],

[226,263,215],

[226,265,157],

[226,267,199],

[226,269,141],

[226,274,55],

[227,228,241],

[227,232,28],

[227,236,60],

[227,240,58],

[227,241,227],

[227,242,175],

[227,248,54],

[227,255,127],

[227,261,183],

[227,262,214],

[227,264,162],

[227,266,198],

[227,268,146],

[227,275,54],

[228,231,27],

[228,235,59],

[228,239,57],

[228,241,228],

[228,243,176],

[228,249,53],

[228,254,128],

[228,260,184],

[228,263,213],

[228,265,161],

[228,267,197],

[228,269,145],

[228,274,53],

[229,230,241],

[229,232,5],

[229,234,64],

[229,238,62],

[229,241,229],

[229,248,184],

[229,250,160],

[229,252,144],

[229,261,53],

[229,262,212],

[229,266,196],

[229,273,129],

[229,275,184],

[230,231,2],

[230,233,63],

[230,237,61],

[230,241,230],

[230,249,183],

[230,251,159],

[230,253,143],

[230,260,54],

[230,263,211],

[230,267,195],

[230,272,130],

[230,274,183],

[231,232,241],

[231,236,64],

[231,240,62],

[231,241,231],

[231,248,182],

[231,250,164],

[231,252,148],

[231,261,55],

[231,262,210],

[231,266,194],

[231,273,125],

[231,275,182],

[232,235,63],

[232,239,61],

[232,241,232],

[232,249,181],

[232,251,163],

[232,253,147],

[232,260,56],

[232,263,209],

[232,267,193],

[232,272,126],

[232,274,181],

[233,234,241],

[233,236,5],

[233,238,6],

[233,241,233],

[233,245,224],

[233,247,208],

[233,255,24],

[233,261,185],

[233,271,192],

[233,273,25],

[233,276,208],

[233,278,224],

[234,235,2],

[234,237,1],

[234,241,234],

[234,244,223],

[234,246,207],

[234,254,23],

[234,260,186],

[234,270,191],

[234,272,26],

[234,277,207],

[234,279,223],

[235,236,241],

[235,240,6],

[235,241,235],

[235,245,222],

[235,247,206],

[235,255,14],

[235,261,187],

[235,271,190],

[235,273,16],

[235,276,206],

[235,278,222],

[236,239,1],

[236,241,236],

[236,244,221],

[236,246,205],

[236,254,13],

[236,260,188],

[236,270,189],

[236,272,15],

[236,277,205],

[236,279,221],

[237,238,241],

[237,240,5],

[237,241,237],

[237,245,220],

[237,247,204],

[237,255,15],

[237,261,189],

[237,271,188],

[237,273,13],

[237,276,204],

[237,278,220],

[238,239,2],

[238,241,238],

[238,244,219],

[238,246,203],

[238,254,16],

[238,260,190],

[238,270,187],

[238,272,14],

[238,277,203],

[238,279,219],

[239,240,241],

[239,241,239],

[239,245,218],

[239,247,202],

[239,255,26],

[239,261,191],

[239,271,186],

[239,273,23],

[239,276,202],

[239,278,218],

[240,241,240],

[240,244,217],

[240,246,201],

[240,254,25],

[240,260,192],

[240,270,185],

[240,272,24],

[240,277,201],

[240,279,217],

[241,242,122],

[241,243,121],

[241,244,43],

[241,245,44],

[241,246,45],

[241,247,46],

[241,248,47],

[241,249,48],

[241,250,133],

[241,251,134],

[241,252,149],

[241,253,150],

[241,254,165],

[241,255,166],

[241,256,38],

[241,257,37],

[241,258,40],

[241,259,39],

[241,260,42],

[241,261,41],

[241,262,32],

[241,263,31],

[241,264,139],

[241,265,140],

[241,266,34],

[241,267,33],

[241,268,155],

[241,269,156],

[241,270,36],

[241,271,35],

[241,272,171],

[241,273,172],

[241,274,48],

[241,275,47],

[241,276,46],

[241,277,45],

[241,278,44],

[241,279,43],

[242,243,241],

[242,250,32],

[242,252,34],

[242,254,36],

[242,256,139],

[242,258,155],

[242,260,171],

[242,263,134],

[242,265,37],

[242,267,150],

[242,269,39],

[242,271,166],

[242,273,41],

[243,251,31],

[243,253,33],

[243,255,35],

[243,257,140],

[243,259,156],

[243,261,172],

[243,262,133],

[243,264,38],

[243,266,149],

[243,268,40],

[243,270,165],

[243,272,42],

[244,245,241],

[244,247,7],

[244,249,9],

[244,253,171],

[244,255,155],

[244,259,36],

[244,261,34],

[244,267,42],

[244,269,165],

[244,271,40],

[244,273,149],

[244,274,9],

[244,276,7],

[244,278,241],

[245,246,8],

[245,248,10],

[245,252,172],

[245,254,156],

[245,258,35],

[245,260,33],

[245,266,41],

[245,268,166],

[245,270,39],

[245,272,150],

[245,275,10],

[245,277,8],

[245,279,241],

[246,247,241],

[246,249,11],

[246,251,171],

[246,255,139],

[246,257,36],

[246,261,32],

[246,263,42],

[246,265,165],

[246,271,38],

[246,273,133],

[246,274,11],

[246,276,241],

[246,278,8],

[247,248,12],

[247,250,172],

[247,254,140],

[247,256,35],

[247,260,31],

[247,262,41],

[247,264,166],

[247,270,37],

[247,272,134],

[247,275,12],

[247,277,241],

[247,279,7],

[248,249,241],

[248,251,155],

[248,253,139],

[248,257,34],

[248,259,32],

[248,263,40],

[248,265,149],

[248,267,38],

[248,269,133],

[248,274,241],

[248,276,12],

[248,278,10],

[249,250,156],

[249,252,140],

[249,256,33],

[249,258,31],

[249,262,39],

[249,264,150],

[249,266,37],

[249,268,134],

[249,275,241],

[249,277,11],

[249,279,9],

[250,251,241],

[250,253,8],

[250,255,10],

[250,257,52],

[250,263,121],

[250,268,47],

[250,272,45],

[250,274,156],

[250,276,172],

[251,252,7],

[251,254,9],

[251,256,51],

[251,262,122],

[251,269,48],

[251,273,46],

[251,275,155],

[251,277,171],

[252,253,241],

[252,255,12],

[252,259,52],

[252,264,47],

[252,267,121],

[252,272,43],

[252,274,140],

[252,278,172],

[253,254,11],

[253,258,51],

[253,265,48],

[253,266,122],

[253,273,44],

[253,275,139],

[253,279,171],

[254,255,241],

[254,261,52],

[254,264,45],

[254,268,43],

[254,271,121],

[254,276,140],

[254,278,156],

[255,260,51],

[255,265,46],

[255,269,44],

[255,270,122],

[255,277,139],

[255,279,155],

[256,257,241],

[256,259,8],

[256,261,10],

[256,265,121],

[256,266,47],

[256,270,45],

[256,274,33],

[256,276,35],

[257,258,7],

[257,260,9],

[257,264,122],

[257,267,48],

[257,271,46],

[257,275,34],

[257,277,36],

[258,259,241],

[258,261,12],

[258,262,47],

[258,269,121],

[258,270,43],

[258,274,31],

[258,278,35],

[259,260,11],

[259,263,48],

[259,268,122],

[259,271,44],

[259,275,32],

[259,279,36],

[260,261,241],

[260,262,45],

[260,266,43],

[260,273,121],

[260,276,31],

[260,278,33],

[261,263,46],

[261,267,44],

[261,272,122],

[261,277,32],

[261,279,34],

[262,263,241],

[262,265,52],

[262,267,8],

[262,271,10],

[262,274,39],

[262,276,41],

[263,264,51],

[263,266,7],

[263,270,9],

[263,275,40],

[263,277,42],

[264,265,241],

[264,269,8],

[264,273,10],

[264,274,150],

[264,276,166],

[265,268,7],

[265,272,9],

[265,275,149],

[265,277,165],

[266,267,241],

[266,269,52],

[266,271,12],

[266,274,37],

[266,278,41],

[267,268,51],

[267,270,11],

[267,275,38],

[267,279,42],

[268,269,241],

[268,273,12],

[268,274,134],

[268,278,166],

[269,272,11],

[269,275,133],

[269,279,165],

[270,271,241],

[270,273,52],

[270,276,37],

[270,278,39],

[271,272,51],

[271,277,38],

[271,279,40],

[272,273,241],

[272,276,134],

[272,278,150],

[273,277,133],

[273,279,149],

[274,275,241],

[274,277,11],

[274,279,9],

[275,276,12],

[275,278,10],

[276,277,241],

[276,279,7],

[277,278,8],

[278,279,241]
]
