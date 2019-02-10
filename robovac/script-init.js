
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
let rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
//alert("colNum " + colNum + " rowNum " + rowNum );

var container = document.getElementById("para");
var amax = colNum * rowNum;
var tiles;

initFloor();

function initFloor()
{
  for(a = 0; a < amax; a++)
  {
    var element = document.createElement("div");
    var text = document.createTextNode(a);
    element.appendChild(text);
    container.appendChild(element);
  }

  tiles = document.querySelectorAll("div");

  tiles[0].className = "tile-robovac";
  for(a = 1; a < amax; a++)
  {
    tiles[a].className = "tile-dirty";
  }
  furniture();
}

function furniture()
{
  tiles[14].className = "tile-test";
  tiles[15].className = "tile-test";
  tiles[16].className = "tile-test";
  tiles[17].className = "tile-test";
  tiles[18].className = "tile-test";
  tiles[19].className = "tile-test";
  tiles[30].className = "tile-test";
  tiles[25].className = "tile-test";

  tiles[99].className = "tile-test";
  tiles[100].className = "tile-test";
  tiles[110].className = "tile-test";
  tiles[111].className = "tile-test";
  tiles[121].className = "tile-test";
  tiles[122].className = "tile-test";

  tiles[103].className = "tile-test";
  tiles[104].className = "tile-test";
  tiles[105].className = "tile-test";
  tiles[114].className = "tile-test";
  tiles[115].className = "tile-test";
  tiles[116].className = "tile-test";

  tiles[165].className = "tile-test";
  tiles[166].className = "tile-test";
  tiles[167].className = "tile-test";
  tiles[168].className = "tile-test";
  tiles[169].className = "tile-test";
  tiles[170].className = "tile-test";
  tiles[176].className = "tile-test";
  tiles[177].className = "tile-test";
  tiles[178].className = "tile-test";
  tiles[179].className = "tile-test";
  tiles[180].className = "tile-test";
  tiles[181].className = "tile-test";

  tiles[153].className = "tile-test";
  tiles[164].className = "tile-test";
  tiles[175].className = "tile-test";
  tiles[186].className = "tile-test";

  tiles[223].className = "tile-test";
  tiles[224].className = "tile-test";
  tiles[225].className = "tile-test";
  tiles[226].className = "tile-test";
  tiles[227].className = "tile-test";
  tiles[228].className = "tile-test";
  tiles[229].className = "tile-test";
  tiles[230].className = "tile-test";
  tiles[234].className = "tile-test";
  tiles[235].className = "tile-test";
  tiles[236].className = "tile-test";
  tiles[237].className = "tile-test";
  tiles[238].className = "tile-test";
  tiles[239].className = "tile-test";
  tiles[240].className = "tile-test";
  tiles[241].className = "tile-test";
}
