
//---------- Public

var context;

function centerAlign(_context){
  context = _context;
  align(true,true);
}

function horizontalAlign(_context){
  context = _context;
  align(true,false);
}

function verticalAlign(_context){
  context = _context;
  align(false,true);
}

// future
/*
function horizontalDistribute(){
  distribute(true,false);
}

function verticalDistribute(){
  vertical(false,true);
}*/

//---------- align script
function align(h,v){

    //----- select all childs
    selectGroupChilds();

    //----- alignments
    if(h)actionWithType("MSAlignLayersCenterAction",context).alignLayersCenter(nil); // horizontal
    if(v)actionWithType("MSAlignLayersMiddleAction",context).alignLayersMiddle(nil); // vertical
}

//---------- distribute script
function distribute(h,v){

    //----- select all childs
    selectGroupChilds();

    //----- alignments
    if(h)actionWithType("MSDistributeHorizontallyAction",context).distributeHorizontally(nil); // horizontal
    if(v)actionWithType("MSDistributeVerticallyAction",context).distributeVertically(nil); // vertical
}

//---------- select all childs
function selectGroupChilds()
{
    //----- get the selection(group)
    var selection = context.selection;
    //----- get the all childs
    var layers = selection[0].layers();

    //----- select all childs
    for (var x=0; x < [layers count]; x++){
        var childLayer = layers[x];
        [childLayer select:true byExpandingSelection:true]
    }
}

//---------- access actions
function actionWithType(type,context) {
  var doc = context.document;
  var controller = doc.actionsController();
  if(controller.actionWithName) {
    return controller.actionWithName(type);
  } else if(controller.actionWithID) {
    return controller.actionWithID(type);
  }
}