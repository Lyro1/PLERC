import {HttpClient} from '@angular/common/http';

export class PathModel {
  html: string;

  constructor() {
    this.html = '<!DOCTYPE html>\n' +
      '<head>\n' +
      '  <meta http-equiv=&#34;content-type&#34; content=&#34;text/html; charset=UTF-8&#34; />\n' +
      '\n' +
      '  <script>\n' +
      '    L_NO_TOUCH = false;\n' +
      '    L_DISABLE_3D = false;\n' +
      '  </script>\n' +
      '\n' +
      '  <script src=&#34;https://cdn.jsdelivr.net/npm/leaflet@1.5.1/dist/leaflet.js&#34;></script>\n' +
      '  <script src=&#34;https://code.jquery.com/jquery-1.12.4.min.js&#34;></script>\n' +
      '  <script src=&#34;https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js&#34;></script>\n' +
      '  <script src=&#34;https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js&#34;></script>\n' +
      '  <link rel=&#34;stylesheet&#34; href=&#34;https://cdn.jsdelivr.net/npm/leaflet@1.5.1/dist/leaflet.css&#34;/>\n' +
      '  <link rel=&#34;stylesheet&#34; href=&#34;https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css&#34;/>\n' +
      '  <link rel=&#34;stylesheet&#34; href=&#34;https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css&#34;/>\n' +
      '  <link rel=&#34;stylesheet&#34; href=&#34;https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css&#34;/>\n' +
      '  <link rel=&#34;stylesheet&#34; href=&#34;https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css&#34;/>\n' +
      '  <link rel=&#34;stylesheet&#34; href=&#34;https://rawcdn.githack.com/python-visualization/folium/master/folium/templates/leaflet.awesome.rotate.css&#34;/>\n' +
      '  <style>html, body {width: 100%;height: 100%;margin: 0;padding: 0;}</style>\n' +
      '  <style>#map {position:absolute;top:0;bottom:0;right:0;left:0;}</style>\n' +
      '\n' +
      '  <meta name=&#34;viewport&#34; content=&#34;width=device-width,\n' +
      '                initial-scale=1.0, maximum-scale=1.0, user-scalable=no&#34; />\n' +
      '  <style>\n' +
      '    #map_25a91690496d48249c98a7e3d433fa9d {\n' +
      '      position: relative;\n' +
      '      width: 100.0%;\n' +
      '      height: 100.0%;\n' +
      '      left: 0.0%;\n' +
      '      top: 0.0%;\n' +
      '    }\n' +
      '  </style>\n' +
      '\n' +
      '</head>\n' +
      '<body>\n' +
      '\n' +
      '<div class=&#34;folium-map&#34; id=&#34;map_25a91690496d48249c98a7e3d433fa9d&#34; ></div>\n' +
      '\n' +
      '</body>\n' +
      '<script>\n' +
      '\n' +
      '  var map_25a91690496d48249c98a7e3d433fa9d = L.map(\n' +
      '    &#34;map_25a91690496d48249c98a7e3d433fa9d&#34;,\n' +
      '    {\n' +
      '      center: [48.80562052145304, 2.1278466849826074],\n' +
      '      crs: L.CRS.EPSG3857,\n' +
      '      zoom: 1,\n' +
      '      zoomControl: true,\n' +
      '      preferCanvas: false,\n' +
      '    }\n' +
      '  );\n' +
      '\n' +
      '\n' +
      '\n' +
      '\n' +
      '\n' +
      '  var tile_layer_4dd23536f2c64dfa9af9e3307729bf11 = L.tileLayer(\n' +
      '    &#34;https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png&#34;,\n' +
      '    {&#34;attribution&#34;: &#34;\u0026copy; \u003ca href=\\&#34;http://www.openstreetmap.org/copyright\\&#34;\u003eOpenStreetMap\u003c/a\u003e contributors \u0026copy; \u003ca href=\\&#34;http://cartodb.com/attributions\\&#34;\u003eCartoDB\u003c/a\u003e, CartoDB \u003ca href =\\&#34;http://cartodb.com/attributions\\&#34;\u003eattributions\u003c/a\u003e&#34;, &#34;detectRetina&#34;: false, &#34;maxNativeZoom&#34;: 18, &#34;maxZoom&#34;: 18, &#34;minZoom&#34;: 0, &#34;noWrap&#34;: false, &#34;opacity&#34;: 1, &#34;subdomains&#34;: &#34;abc&#34;, &#34;tms&#34;: false}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_f41f8f735c3c474abdb408604e4470c5 = L.polyline(\n' +
      '    [[48.8129345, 2.1295637], [48.8129411, 2.1295093], [48.813039, 2.1287001], [48.8131322, 2.1279296], [48.8131352, 2.1279165], [48.81315, 2.1278513], [48.8131858, 2.1276999]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_6f6ce7e53b294bddb4e79330b765aae8 = L.polyline(\n' +
      '    [[48.8131858, 2.1276999], [48.8121848, 2.1270939]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_0f34e9e2d4a149cd94f68dd97270963d = L.polyline(\n' +
      '    [[48.8121848, 2.1270939], [48.8117637, 2.1268224], [48.8116938, 2.1267804]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_d966b82da1724591935df855a730c0d6 = L.polyline(\n' +
      '    [[48.8116938, 2.1267804], [48.8116297, 2.1267507], [48.8115303, 2.1267021], [48.8113857, 2.1266141], [48.8106977, 2.1261952]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_1918c8a205604c2f86f83e699b9e792f = L.polyline(\n' +
      '    [[48.8106977, 2.1261952], [48.8099203, 2.1257292]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_86a6b0d068f846dd979dcc4bbe7c95d3 = L.polyline(\n' +
      '    [[48.8099203, 2.1257292], [48.8098549, 2.1256399], [48.8097649, 2.1255683], [48.8096529, 2.1254511]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_2ce2100085324240acbd0b1bf79898e3 = L.polyline(\n' +
      '    [[48.8096529, 2.1254511], [48.8096152, 2.1254052], [48.8095617, 2.125379]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_da0bfe9721154534bc6aeceaa6599300 = L.polyline(\n' +
      '    [[48.8095617, 2.125379], [48.8094787, 2.1253619]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_ab02762697e04a93a96a65864670ed44 = L.polyline(\n' +
      '    [[48.8094787, 2.1253619], [48.8094102, 2.1253455]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_87a3a7a6f2db44a7a601fac248921745 = L.polyline(\n' +
      '    [[48.8094102, 2.1253455], [48.8093472, 2.1253137], [48.809274, 2.1252908], [48.8090941, 2.1252255]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_d3a9c43fc7714866a1d1aa00c20db7cb = L.polyline(\n' +
      '    [[48.8090941, 2.1252255], [48.8090871, 2.1252215], [48.8086838, 2.1249868], [48.8086529, 2.1249674], [48.8086271, 2.1249549], [48.8085465, 2.1249066], [48.808528, 2.1248955]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_f4749b87c0dd4424b2be996e82c1a1ee = L.polyline(\n' +
      '    [[48.808528, 2.1248955], [48.8084326, 2.1248411], [48.8084082, 2.1248245], [48.8082998, 2.1247563], [48.8078556, 2.1244726], [48.8075109, 2.1242561]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_1bcc2fb7b3be4da3b748eefdefe64ceb = L.polyline(\n' +
      '    [[48.8075109, 2.1242561], [48.8074658, 2.1241674], [48.8070804, 2.1239416], [48.8067274, 2.1237369], [48.8066376, 2.1237464]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_0beaab9ba1ba4f50bf5f95c8a872d091 = L.polyline(\n' +
      '    [[48.8066376, 2.1237464], [48.8060512, 2.1233703], [48.8057453, 2.1231939], [48.8056622, 2.1231491], [48.8051683, 2.1228438], [48.8051378, 2.122825], [48.8050828, 2.1228102], [48.8050475, 2.1228182], [48.8050139, 2.1228397], [48.8049813, 2.1228955], [48.8047558, 2.1237495]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_160e471cd5744076803d4714fc516e7e = L.polyline(\n' +
      '    [[48.8047558, 2.1237495], [48.8047107, 2.1239558]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_2c3f7541f0964c2ab93a20751463a6da = L.polyline(\n' +
      '    [[48.8047107, 2.1239558], [48.8046429, 2.1240064], [48.8045993, 2.1240428], [48.8045608, 2.1240748], [48.8045087, 2.1241312], [48.8044716, 2.1242023], [48.8044521, 2.1242733], [48.804444, 2.1243471]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_b7178c9334a14d4d920db374da09d39f = L.polyline(\n' +
      '    [[48.804444, 2.1243471], [48.8044751, 2.1244061], [48.8044852, 2.1245459], [48.804543, 2.1253075], [48.8046129, 2.1263118]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_08092e2c4acc4bd6bf23b07d21bc0bc3 = L.polyline(\n' +
      '    [[48.8046129, 2.1263118], [48.8045811, 2.1263628], [48.804569, 2.1264607], [48.8045463, 2.1265493], [48.8045242, 2.1266085], [48.8044345, 2.1267289], [48.8043338, 2.1268187]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_beb245888d84480ca8058e38071dd715 = L.polyline(\n' +
      '    [[48.8043338, 2.1268187], [48.8042048, 2.1268402], [48.8040689, 2.1268468], [48.8039419, 2.1268357], [48.8038573, 2.1268064], [48.8037508, 2.1267517], [48.8034129, 2.1265653], [48.8033767, 2.1265444], [48.8033204, 2.126503], [48.8032461, 2.1264527]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_a2c33ded71c14a0193380ddcd6038186 = L.polyline(\n' +
      '    [[48.8032461, 2.1264527], [48.8031166, 2.1263714]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_b6364f57029840b48bfc9d168bb21ac6 = L.polyline(\n' +
      '    [[48.8031166, 2.1263714], [48.8030529, 2.1266028], [48.8030426, 2.1266477], [48.8029778, 2.1270681], [48.8028136, 2.1276588], [48.8027602, 2.1278693]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_b366e2e170d143d39a85698f6cda47e8 = L.polyline(\n' +
      '    [[48.8027602, 2.1278693], [48.8024832, 2.1289162], [48.8024399, 2.1290383], [48.8023564, 2.129221], [48.8022766, 2.1295177], [48.8022446, 2.1296351]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_0478c88d96ec4e5b8b29c31c1cfc172c = L.polyline(\n' +
      '    [[48.8022446, 2.1296351], [48.8022131, 2.1297433]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_8b3f8204d4b848c19c6e3a7fd0725c5f = L.polyline(\n' +
      '    [[48.8022131, 2.1297433], [48.8021092, 2.1301312], [48.8020893, 2.1302058], [48.8020672, 2.1302884], [48.801972, 2.1306437], [48.8019267, 2.1308129]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_899387d1acfb455daa753cbf1077db79 = L.polyline(\n' +
      '    [[48.8019267, 2.1308129], [48.8018092, 2.131252], [48.8018001, 2.1312857], [48.8017328, 2.1315453]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_8277d9d114bf4db4861771d3ff8a432b = L.polyline(\n' +
      '    [[48.8017328, 2.1315453], [48.8016671, 2.1318049]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_19321c96fa57403bbab8a0e6f802afa0 = L.polyline(\n' +
      '    [[48.8016671, 2.1318049], [48.8013584, 2.1329971]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_03f2aa582db14ca4bb3c68b98c3a7ae9 = L.polyline(\n' +
      '    [[48.8013584, 2.1329971], [48.8011973, 2.1335915]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_26c1aabf929e479483ad634ca6e1c2d7 = L.polyline(\n' +
      '    [[48.8011973, 2.1335915], [48.8011213, 2.1338854], [48.8010798, 2.1340459], [48.8010346, 2.1342175]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_b4c777d6cc28420dbb006e99ae091d85 = L.polyline(\n' +
      '    [[48.8010346, 2.1342175], [48.8009455, 2.1345401], [48.8008055, 2.13508], [48.8005611, 2.1360227], [48.8005059, 2.1362259]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  var poly_line_1b9433d172d2427fa31fa1d96c0f6872 = L.polyline(\n' +
      '    [[48.8005059, 2.1362259], [48.8004427, 2.136187], [48.800291, 2.1360937], [48.8002063, 2.1360446]],\n' +
      '    {&#34;bubblingMouseEvents&#34;: true, &#34;color&#34;: &#34;#cc0000&#34;, &#34;dashArray&#34;: null, &#34;dashOffset&#34;: null, &#34;fill&#34;: false, &#34;fillColor&#34;: &#34;#cc0000&#34;, &#34;fillOpacity&#34;: 0.2, &#34;fillRule&#34;: &#34;evenodd&#34;, &#34;lineCap&#34;: &#34;round&#34;, &#34;lineJoin&#34;: &#34;round&#34;, &#34;noClip&#34;: false, &#34;opacity&#34;: 1, &#34;smoothFactor&#34;: 1.0, &#34;stroke&#34;: true, &#34;weight&#34;: 5}\n' +
      '  ).addTo(map_25a91690496d48249c98a7e3d433fa9d);\n' +
      '\n' +
      '\n' +
      '  map_25a91690496d48249c98a7e3d433fa9d.fitBounds(\n' +
      '    [[48.8002063, 2.1228102], [48.8131858, 2.1362259]],\n' +
      '    {}\n' +
      '  );\n' +
      '\n' +
      '</script>\n';
  }
}
