var n = 0;
var nold = 0;
var nold2 = 0;

var x1=setInterval(moveRobovac,200);

function moveRobovac()
{
  tiles[n].className = "tile-clean";
  nold2 = nold;
  nold = n;
  toPosition();
  tiles[n].className = "tile-robovac";
}

function toPosition()
{
  if (!neighborDirty()) 
  {
    n = nold2;
    if (!neighborDirty()) 
    {
      for(a = 0; a < amax; a++)
      {
        if (tiles[a].className === "tile-dirty") 
        {
          n = a;
          break;
        }
      }
      if (a >= amax)
      {
        n = 110;
        clearInterval(x1);
      }
    }
  }
}  

function neighborDirty()
{
  if (!rechtergrens()) 
  {
    a = n - (colNum - 1);
    if (dirty())
    {
      return true;
    }
  }
  if (!linkergrens()) 
  {
    a = n - (colNum + 1);
    if (dirty())
    {
      return true;
    }
  }
  if (!linkergrens()) 
  {
    a = n - 1;
    if (dirty())
    {
      return true;
    }
  }
  if (!rechtergrens()) 
  {
    a = n + 1;
    if (dirty())
    {
      return true;
    }
  }
  a = n - colNum;
  if (dirty())
  {
    return true;
  }
  a = n + colNum;
  if (dirty())
  {
    return true;
  }
  if (!rechtergrens()) 
  {
    a = n + (colNum + 1);
    if (dirty())
    {
      return true;
    }
  }
  if (!linkergrens()) 
  {
    a = n + (colNum - 1);
    if (dirty())
    {
      return true;
    }
  }
}

function dirty()
{
  if (a >= 0 && a < amax)
  {
    if (tiles[a].className === "tile-dirty") 
    {
      //alert("a " + a + "  n " + n + "  nold2 " + nold2);
      n = a;
      return true;
    } 
  }
}

function rechtergrens()
{
  if ((n+1)%colNum === 0)
  {
    return true;
  }
}

function linkergrens()
{
  if ((n)%colNum === 0) 
  {
    return true;
  }
}
