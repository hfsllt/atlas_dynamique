import topo_wallis from './coord_wallis'
import topo_tahiti from './coord_tahiti'

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
		"fr-all-all-reunion":{
            "xpan":150,
            "ypan":630,
            "hitZone":{
                "type":"Polygon",
                "coordinates":[[
                    [904,253],[2390,253],[2390,-999],[904,-999],[904,253]
                ]]},
                "crs":"+proj=utm +zone=40 +south +datum=WGS84 +units=m +no_defs",
                "scale":0.000763557633794,
                "jsonres":15.5,
                "jsonmarginX":-999,
                "jsonmarginY":9851.0,
                "xoffset":315585.929084,
                "yoffset":7692417.85149
            },

        "fr-all-all-mayotte":{
            "xpan":240,
            "ypan":630,
            "hitZone":{
                "type":"Polygon",
                "coordinates":[[
                    [2390,253],[3530,253],[3530,-999],[2390,-999],[2390,253]
                ]]},
                "crs":"+proj=utm +zone=38 +south +datum=WGS84 +units=m +no_defs",
                "scale":0.00132206425115,
                "jsonres":15.5,
                "jsonmarginX":-999,
                "jsonmarginY":9851.0,
                "xoffset":504613.291438,
                "yoffset":8601873.46699
            },

        "fr-all-all-guyana":{
            "xpan":310,
            "ypan":630,
            "hitZone":{
                "type":"Polygon",
                "coordinates":[[
                    [3530,253],[4745,253],[4745,-999],[3530,-999],[3530,253]
                ]]},
                "crs":"+proj=utm +zone=22 +datum=WGS84 +units=m +no_defs",
                "scale":0.000124325372918,
                "jsonres":15.5,
                "jsonmarginX":-999,
                "jsonmarginY":9851.0,
                "xoffset":97769.9054769,
                "yoffset":635816.081323
            },

        "fr-all-all-martinique":{
            "xpan":390,
            "ypan":630,
            "hitZone":{
                "type":"Polygon",
                "coordinates":[[
                    [4745,253],[6000,253],[6000,-999],[4745,-999],[4745,253]
                ]]},
                "crs":"+proj=utm +zone=20 +datum=WGS84 +units=m +no_defs",
                "scale":0.000968530558841,
                "jsonres":15.5,
                "jsonmarginX":-999,
                "jsonmarginY":9851.0,
                "xoffset":690597.139078,
                "yoffset":1645548.31731
            },

        "fr-all-all-guadeloupe":{
            "xpan":470,
            "ypan":630,
            "hitZone":{
                "type":"Polygon",
                "coordinates":[[
                    [6000,253],[7464,253],[7464,-999],[6000,-999],[6000,253]
                ]]},
                "crs":"+proj=utm +zone=20 +datum=WGS84 +units=m +no_defs",
                "scale":0.000579103792655,
                "jsonres":15.5,
                "jsonmarginX":-999,
                "jsonmarginY":9851.0,
                "xoffset":628456.113255,
                "yoffset":1826317.58275
            }
        },
	    

	"features": [{
        "type":"Feature","id":"FR.LRE.RE","properties":{"hc-group":"admin2","hc-key":"fr-lre-re","hc-a2":"RE","labelrank":"20","hasc":"FR.RE","alt-name":null,"woe-id":"23424931","subregion":null,"fips":null,"name":"La R??union","type":"Overseas department","region":"R??union","longitude":"55.5405","woe-name":"La R??union","latitude":"-21.1155","woe-label":null},"geometry":{"type":"Polygon","coordinates":[[[1663.5,71.1],[1679.1,68.7],[1695.2,75.5],[1714.2,69.1],[1758.4,69.9],[1775.6,62.8],[1792.3,52.5],[1847.6,40.2],[1863.9,30.9],[1876.3,20.6],[1903.0,-8.1],[1912.4,-26.6],[1917.3,-69.4],[1924.3,-84.4],[1954.6,-115.9],[1958.9,-124.8],[1960.9,-150.8],[1967.7,-174.4],[1975.5,-180.1],[1996.9,-188.9],[2018.6,-227.6],[2035.7,-238.6],[2079.9,-256.8],[2095.1,-271.8],[2101.0,-297.1],[2094.6,-319.1],[2084.2,-341.2],[2064.8,-438.0],[2062.2,-465.2],[2063.1,-489.5],[2061.2,-517.5],[2050.6,-540.6],[2025.2,-550.4],[1981.6,-549.4],[1959.8,-553.2],[1921.4,-574.2],[1892.7,-578.8],[1864.2,-577.5],[1844.4,-569.7],[1823.6,-577.6],[1792.6,-579.2],[1760.1,-576.2],[1734.7,-570.7],[1713.4,-559.8],[1674.4,-532.2],[1637.3,-523.7],[1586.6,-504.1],[1566.2,-491.7],[1541.3,-460.0],[1528.1,-456.5],[1488.1,-456.6],[1482.1,-452.5],[1472.9,-434.4],[1429.8,-384.9],[1414.7,-359.1],[1408.8,-328.8],[1408.2,-305.8],[1405.1,-285.9],[1352.6,-217.3],[1336.2,-189.2],[1326.3,-161.8],[1326.0,-137.4],[1332.8,-111.1],[1345.7,-89.7],[1386.8,-71.9],[1401.9,-51.5],[1407.1,-27.8],[1400.9,-8.9],[1410.6,4.9],[1400.6,18.0],[1419.7,26.7],[1460.3,27.4],[1494.6,52.5],[1548.4,83.1],[1607.3,86.0],[1627.9,83.9],[1663.5,71.1]]]}},{"type":"Feature","id":"FR.MAY.YT","properties":{"hc-group":"admin2","hc-key":"fr-may-yt","hc-a2":"YT","labelrank":"20","hasc":"FR.YT","alt-name":null,"woe-id":"23424886","subregion":null,"fips":null,"name":"Mayotte","type":"Overseas department","region":"Mayotte","longitude":"45.2769","woe-name":"Mayotte","latitude":"-12.7767","woe-label":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[3254.9,-271.5],[3239.7,-271.5],[3209.7,-177.4],[3242.9,-141.5],[3255.0,-132.3],[3270.0,-169.6],[3273.4,-201.6],[3267.9,-234.1],[3254.9,-271.5]]],[[[2827.1,49.7],[2813.4,39.7],[2827.8,41.0],[2834.5,36.6],[2837.8,29.8],[2842.7,24.2],[2872.6,-1.4],[2913.3,-50.5],[2935.0,-67.5],[2965.9,-74.9],[3035.3,-74.4],[3072.9,-85.6],[3110.6,-110.9],[3126.5,-137.3],[3126.8,-168.7],[3117.0,-209.4],[3064.5,-286.8],[3044.9,-299.0],[3046.1,-325.5],[3060.4,-352.1],[3100.4,-377.8],[3095.5,-408.4],[3080.8,-438.3],[3072.7,-450.6],[3052.5,-498.2],[3016.1,-541.3],[3000.4,-587.2],[3040.7,-642.9],[3031.6,-658.6],[3022.2,-670.6],[3011.0,-679.6],[2995.1,-689.0],[2981.9,-665.0],[2966.7,-667.4],[2947.1,-681.2],[2919.5,-689.0],[2894.5,-682.3],[2878.2,-670.5],[2863.6,-663.8],[2842.4,-673.4],[2845.3,-640.6],[2836.5,-618.7],[2815.3,-608.5],[2782.8,-611.4],[2782.8,-597.6],[2822.9,-578.3],[2826.9,-541.2],[2807.0,-505.6],[2765.4,-483.5],[2771.6,-471.3],[2788.6,-460.4],[2813.2,-458.2],[2826.8,-466.5],[2866.4,-513.4],[2903.8,-535.5],[2924.6,-525.2],[2929.9,-495.7],[2919.6,-458.2],[2901.9,-430.4],[2878.4,-403.8],[2813.2,-348.7],[2844.4,-335.9],[2858.8,-334.5],[2858.8,-319.0],[2845.8,-299.8],[2836.1,-266.6],[2828.5,-200.9],[2820.4,-168.9],[2800.8,-155.0],[2775.8,-147.1],[2752.5,-132.0],[2736.6,-111.3],[2727.0,-90.6],[2722.1,-65.2],[2721.0,-30.0],[2828.6,86.0],[2837.3,71.6],[2840.0,65.0],[2842.7,55.2],[2832.9,52.8],[2827.1,49.7]]]]}},{"type":"Feature","id":"FR.GF.GF","properties":{"hc-group":"admin2","hc-key":"fr-gf-gf","hc-a2":"GF","labelrank":"5","hasc":"FR.GF","alt-name":null,"woe-id":"23424811","subregion":null,"fips":"FG01","name":"Guyane fran??aise","type":"Overseas department","region":"Guyane fran??aise","longitude":"-53.1324","woe-name":"Guyane fran??aise","latitude":"3.85831","woe-label":null},"geometry":{"type":"Polygon","coordinates":[[[4435.0,-278.8],[4413.6,-291.2],[4402.4,-315.4],[4388.6,-330.5],[4381.9,-333.7],[4378.1,-345.7],[4369.6,-350.1],[4364.4,-368.3],[4347.2,-397.6],[4318.2,-444.7],[4303.0,-452.1],[4298.6,-462.2],[4289.5,-472.0],[4291.3,-487.6],[4276.5,-515.5],[4279.3,-521.9],[4269.4,-528.8],[4252.6,-566.1],[4251.3,-572.6],[4244.4,-577.0],[4248.3,-590.9],[4234.2,-614.3],[4226.3,-621.2],[4215.2,-636.6],[4178.2,-657.5],[4172.5,-669.3],[4161.1,-675.7],[4139.3,-673.3],[4132.7,-667.8],[4124.1,-666.2],[4098.3,-671.0],[4092.5,-669.2],[4102.3,-659.4],[4078.7,-638.4],[4071.3,-647.3],[4051.0,-658.7],[4038.5,-660.2],[4028.3,-655.2],[4014.0,-653.4],[3999.6,-647.2],[3993.4,-647.0],[3994.4,-638.3],[3988.5,-634.1],[3980.8,-637.3],[3974.3,-646.6],[3966.6,-647.7],[3959.2,-656.3],[3952.4,-655.2],[3949.6,-665.3],[3932.0,-674.6],[3923.1,-672.5],[3916.8,-685.3],[3909.0,-689.0],[3897.5,-678.2],[3881.4,-680.9],[3866.1,-677.6],[3857.7,-670.6],[3835.7,-666.8],[3820.9,-655.1],[3825.1,-652.1],[3816.9,-645.2],[3806.0,-642.8],[3809.5,-638.6],[3819.8,-640.3],[3826.4,-638.0],[3832.2,-623.5],[3847.2,-619.5],[3861.0,-604.1],[3877.0,-567.9],[3892.7,-546.9],[3897.8,-533.8],[3897.7,-526.9],[3903.3,-505.7],[3898.7,-499.7],[3902.1,-497.0],[3900.5,-474.4],[3893.2,-472.1],[3897.7,-461.3],[3914.1,-438.4],[3921.4,-433.3],[3926.7,-418.8],[3934.5,-410.8],[3938.0,-402.2],[3937.4,-386.1],[3941.2,-369.1],[3935.0,-362.5],[3928.1,-364.0],[3923.0,-355.1],[3918.7,-340.0],[3912.0,-331.0],[3898.8,-325.5],[3887.3,-312.3],[3876.2,-296.5],[3872.6,-287.1],[3865.3,-280.5],[3863.1,-271.6],[3866.7,-253.3],[3857.3,-249.6],[3851.3,-241.2],[3855.1,-233.6],[3853.0,-219.0],[3846.6,-205.4],[3843.0,-182.4],[3848.9,-165.5],[3845.9,-147.3],[3846.5,-134.3],[3837.3,-124.5],[3836.7,-90.9],[3843.4,-85.8],[3842.0,-74.1],[3848.0,-60.9],[3866.6,-39.1],[3869.1,-30.6],[3882.7,-15.1],[3903.8,1.7],[3917.5,8.6],[3927.3,20.4],[3939.0,46.3],[3942.4,68.3],[3952.6,86.0],[3970.9,83.6],[3980.1,79.7],[3981.2,83.0],[4005.7,68.4],[4029.8,58.6],[4043.7,50.6],[4058.4,46.3],[4067.1,46.5],[4089.5,40.8],[4094.9,41.3],[4105.0,32.2],[4109.7,33.6],[4094.1,46.4],[4126.3,34.1],[4136.5,27.1],[4152.8,22.5],[4155.3,23.9],[4176.2,12.8],[4190.5,-0.8],[4200.3,-6.2],[4206.7,-16.8],[4222.0,-29.0],[4251.9,-57.0],[4256.0,-62.6],[4265.0,-65.4],[4281.5,-79.5],[4286.3,-87.4],[4284.3,-96.1],[4293.7,-86.1],[4303.4,-85.7],[4312.2,-96.9],[4294.1,-124.8],[4294.6,-132.6],[4300.3,-124.7],[4303.3,-113.7],[4317.9,-100.5],[4326.2,-106.0],[4333.3,-117.6],[4347.3,-125.6],[4362.1,-139.4],[4368.2,-148.2],[4377.8,-190.4],[4375.5,-200.1],[4363.0,-208.9],[4357.4,-216.0],[4377.7,-208.2],[4383.8,-191.9],[4382.0,-161.4],[4383.3,-153.7],[4389.5,-145.5],[4399.8,-147.5],[4411.6,-159.1],[4419.1,-185.4],[4424.8,-189.8],[4421.9,-194.2],[4424.8,-202.1],[4432.0,-203.5],[4427.8,-216.1],[4429.6,-223.2],[4438.0,-235.6],[4442.0,-246.7],[4441.6,-261.2],[4435.0,-278.8]]]}},{"type":"Feature","id":"FR.MQ.MQ","properties":{"hc-group":"admin2","hc-key":"fr-mq-mq","hc-a2":"MQ","labelrank":"4","hasc":"FR.MQ","alt-name":null,"woe-id":"23424884","subregion":null,"fips":null,"name":"Martinique","type":"Overseas department","region":"Martinique","longitude":"-61.064","woe-name":"Martinique","latitude":"14.7245","woe-label":null},"geometry":{"type":"Polygon","coordinates":[[[5450.3,-64.9],[5479.4,-122.4],[5502.6,-103.2],[5535.2,-86.7],[5573.0,-76.5],[5611.6,-75.8],[5600.3,-85.3],[5590.5,-91.8],[5585.8,-98.4],[5589.8,-109.1],[5555.9,-144.4],[5536.1,-112.6],[5523.8,-121.4],[5519.5,-153.1],[5523.3,-190.1],[5536.8,-183.8],[5548.5,-184.5],[5558.7,-190.5],[5567.5,-199.9],[5523.6,-224.2],[5535.7,-236.3],[5516.2,-246.6],[5519.2,-260.9],[5533.2,-265.5],[5546.9,-246.6],[5601.3,-269.8],[5589.0,-271.2],[5582.7,-274.2],[5577.3,-277.8],[5568.2,-281.4],[5578.6,-306.6],[5591.1,-319.4],[5624.0,-337.6],[5628.8,-346.2],[5631.3,-357.5],[5637.3,-367.3],[5652.9,-371.5],[5664.4,-376.3],[5670.1,-388.7],[5671.3,-403.9],[5669.9,-417.6],[5691.0,-405.2],[5685.2,-426.7],[5684.5,-447.8],[5690.2,-467.6],[5703.7,-485.4],[5693.8,-490.7],[5689.8,-495.3],[5687.1,-500.6],[5681.9,-508.3],[5703.2,-518.4],[5712.2,-541.1],[5717.6,-567.2],[5727.9,-587.4],[5728.0,-598.6],[5708.2,-607.6],[5689.0,-656.1],[5672.4,-678.6],[5654.3,-686.7],[5631.4,-689.0],[5612.1,-680.6],[5604.9,-656.5],[5614.5,-639.5],[5632.7,-633.6],[5648.2,-624.7],[5649.5,-599.3],[5633.7,-576.2],[5611.6,-585.5],[5586.0,-601.7],[5560.1,-600.1],[5561.1,-583.3],[5550.4,-581.3],[5505.8,-589.4],[5411.2,-577.7],[5385.9,-581.7],[5346.0,-598.4],[5322.0,-602.2],[5308.4,-594.5],[5272.3,-544.9],[5273.0,-532.5],[5270.9,-525.7],[5263.7,-520.4],[5249.0,-512.1],[5292.8,-465.3],[5335.0,-444.1],[5348.7,-430.8],[5366.0,-455.8],[5391.2,-463.2],[5414.4,-454.3],[5426.0,-430.2],[5420.5,-419.7],[5408.0,-402.3],[5396.0,-379.2],[5392.2,-351.1],[5368.2,-359.6],[5348.5,-363.7],[5331.2,-364.3],[5313.9,-363.1],[5280.0,-365.6],[5270.8,-363.5],[5263.7,-356.4],[5253.4,-336.6],[5247.4,-329.6],[5189.3,-290.8],[5160.0,-263.1],[5147.2,-233.6],[5145.9,-223.1],[5142.4,-214.2],[5136.9,-206.3],[5129.9,-198.6],[5123.7,-186.8],[5126.2,-175.8],[5131.6,-165.0],[5134.5,-153.7],[5130.6,-133.7],[5121.0,-114.8],[5108.6,-98.4],[5062.1,-50.3],[5050.5,-30.0],[5046.0,-6.5],[5050.1,16.1],[5060.8,34.4],[5075.0,47.7],[5138.8,84.7],[5195.4,86.0],[5250.4,68.7],[5322.1,23.6],[5385.7,-4.0],[5412.3,-20.9],[5419.0,-32.9],[5423.2,-47.5],[5431.4,-59.8],[5450.3,-64.9]]]}},{"type":"Feature","id":"FR.GUA.GP","properties":{"hc-group":"admin2","hc-key":"fr-gua-gp","hc-a2":"GP","labelrank":"20","hasc":"FR.GP","alt-name":null,"woe-id":"23424831","subregion":null,"fips":null,"name":"Guadeloupe","type":"Overseas department","region":"Guadeloupe","longitude":"-61.6822","woe-name":"Guadeloupe","latitude":"16.1881","woe-label":null},"geometry":{"type":"MultiPolygon","coordinates":[[[[6473.8,-582.6],[6475.3,-584.5],[6472.9,-584.5],[6471.3,-582.7],[6473.8,-582.6]]],[[[6491.7,-582.9],[6492.2,-586.8],[6487.7,-583.2],[6487.3,-579.3],[6491.7,-582.9]]],[[[6460.5,-571.4],[6452.1,-576.7],[6441.7,-570.6],[6445.2,-557.7],[6454.7,-552.6],[6463.1,-563.6],[6460.5,-571.4]]],[[[6487.4,-543.2],[6489.2,-546.4],[6484.0,-545.7],[6482.2,-542.4],[6487.4,-543.2]]],[[[6495.6,-561.7],[6485.6,-565.1],[6482.6,-560.7],[6492.8,-552.9],[6497.7,-542.8],[6503.5,-540.2],[6509.2,-542.5],[6512.1,-549.0],[6506.8,-553.8],[6495.6,-561.7]]],[[[6823.7,-539.3],[6791.0,-547.6],[6761.9,-543.1],[6749.1,-517.4],[6745.6,-502.9],[6742.3,-496.2],[6735.6,-490.2],[6739.6,-482.9],[6748.7,-469.7],[6751.4,-455.3],[6758.0,-444.6],[6775.2,-424.8],[6796.2,-412.9],[6819.7,-418.0],[6838.9,-434.2],[6850.3,-462.5],[6857.6,-468.3],[6864.9,-476.1],[6868.2,-489.0],[6867.7,-501.4],[6864.8,-510.4],[6858.6,-518.2],[6847.7,-527.1],[6823.7,-539.3]]],[[[6945.1,-245.0],[6950.3,-245.7],[6947.2,-250.5],[6937.6,-251.6],[6930.1,-245.2],[6945.1,-245.0]]],[[[6952.5,-241.4],[6950.7,-243.4],[6950.7,-240.8],[6952.5,-241.4]]],[[[7012.7,-108.4],[6985.3,-120.2],[6963.2,-117.3],[6975.7,-110.4],[7013.2,-78.0],[7036.3,-68.3],[7061.0,-75.6],[7012.7,-108.4]]],[[[6488.3,-76.8],[6483.8,-81.4],[6481.5,-77.3],[6486.0,-71.2],[6490.3,-69.6],[6497.6,-74.2],[6488.3,-76.8]]],[[[6471.2,-144.2],[6476.9,-140.9],[6490.1,-155.0],[6494.7,-144.2],[6503.9,-136.6],[6515.9,-134.6],[6522.0,-140.6],[6524.4,-145.5],[6518.6,-167.8],[6525.9,-187.4],[6502.3,-193.4],[6495.8,-203.6],[6498.2,-249.7],[6510.7,-284.3],[6517.6,-338.5],[6510.0,-391.0],[6480.0,-427.8],[6436.1,-454.2],[6386.7,-475.6],[6379.4,-455.3],[6386.5,-448.5],[6379.7,-435.2],[6371.2,-427.8],[6361.3,-421.5],[6350.0,-411.5],[6342.9,-399.8],[6339.4,-388.4],[6335.3,-379.1],[6327.0,-373.7],[6315.1,-338.5],[6313.8,-260.2],[6299.4,-224.7],[6303.9,-209.9],[6299.5,-197.9],[6291.9,-187.3],[6286.6,-176.7],[6286.0,-159.7],[6289.6,-128.7],[6286.2,-115.7],[6295.5,-107.6],[6311.4,-79.2],[6325.2,-67.3],[6342.9,-62.6],[6351.9,-68.2],[6358.2,-76.8],[6367.8,-81.2],[6391.9,-85.7],[6427.3,-97.8],[6460.3,-114.9],[6476.8,-134.8],[6463.2,-141.0],[6471.2,-144.2]]],[[[6712.0,-84.8],[6726.0,-92.2],[6732.5,-84.8],[6742.4,-89.9],[6761.5,-90.1],[6772.5,-91.8],[6781.7,-97.4],[6802.7,-114.9],[6818.4,-123.6],[6870.7,-159.4],[6889.2,-164.4],[6894.6,-170.0],[6883.9,-179.0],[6875.9,-178.9],[6848.9,-172.6],[6841.6,-169.2],[6826.6,-165.3],[6657.8,-205.3],[6625.5,-219.8],[6608.5,-222.6],[6587.8,-219.3],[6568.8,-212.1],[6552.5,-202.6],[6539.5,-192.3],[6529.6,-180.2],[6525.4,-167.9],[6525.7,-155.0],[6529.3,-140.6],[6544.7,-88.5],[6553.7,-77.4],[6571.4,-73.1],[6573.9,-69.5],[6575.3,-61.2],[6574.5,-45.3],[6570.5,-40.9],[6563.8,-36.7],[6548.2,-32.0],[6542.6,3.5],[6538.0,12.3],[6537.5,22.1],[6545.7,35.1],[6560.7,53.2],[6564.5,59.7],[6573.7,66.5],[6603.2,82.7],[6605.8,86.0],[6608.9,84.7],[6640.2,62.5],[6657.0,46.1],[6668.5,25.7],[6672.9,-0.5],[6670.8,-26.6],[6672.3,-36.4],[6679.8,-51.9],[6689.4,-65.8],[6699.9,-76.4],[6712.0,-84.8]]]]}},{"type":"Feature","properties":{"hc-group":"__separator_lines__"},"geometry":{"type":"MultiLineString","coordinates":[[[904,253],[7464,253]],[[2390,136],[2390,-689]],[[6000,136],[6000,-689]],[[4745,136],[4745,-689]],[[3530,136],[3530,-689]]]}}]}
    
export default map