import topo_wallis from './topo2'
import topo_tahiti from './topo'

const map ={
	"title": "France",
	"version": "2.0.1",
	"type": "FeatureCollection",
	"copyright": "Copyright (c) 2022 Highsoft AS, Based on data from Natural Earth",
	"copyrightShort": "Natural Earth",
	"copyrightUrl": "http://www.naturalearthdata.com",
	"crs": {
		"type": "name",
		"properties": {
			"name": "urn:ogc:def:crs:OGC::CRS84"
		}
	},
    

	"hc-transform": {
		"fr-all-wallis": {
            "xpan": 10,
            "ypan": 130,
            "hitZone": {
                "type": "Polygon",
                "coordinates": [
                    [
						[7464, 253],
						[9851, 253],
						[9851, -999],
						[7464, -999],
						[7464, 253]
					]
                ]
            },
            "crs": "+proj=utm +zone=1 +datum=WGS84 +units=m +no_defs",
            "scale": 0.0223891496476,
            "jsonres": 15.5,
            "jsonmarginX": -999,
            "jsonmarginY": 9851,
            "xoffset": 0,
            "yoffset": 20
        },
        "fr-all-tahiti": {
            "xpan": 10,
            "ypan": 130,
            "hitZone": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [6000, 253],
						[7464, 253],
						[7464, -999],
						[6000, -999],
						[6000, 253]
                    ]
                ]
            },
            "crs": "+proj=utm +zone=6 +datum=WGS84 +units=m +no_defs",
            "scale": 0.000763557633794,
            "jsonres": 15.5,
            "jsonmarginX": -999,
            "jsonmarginY": 9851,
            "xoffset": 1,
            "yoffset": 0
        }
        },
	    

	"features": [
        topo_wallis, 
        topo_tahiti,
    ]
}

export default map