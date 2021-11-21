//mmm yes code stolen from Project Unity
global.mcu = {};
const loadFile = (prev, array) => {
  var results = [];
  var names = [];

  var p = prev;

  for(var i = 0; i < array.length; i++){
    var file = array[i];

    if(typeof(file) === "object"){
      p.push(file.name);
      var temp = loadFile(p, file.childs);

      results = results.concat(temp.res);
      names = names.concat(temp.fileNames);

      p.pop();
    }else{
      var temp = p.join("/") + "/" + file;

      results.push(temp);
      names.push(file);
    };
  };

  return {
    res: results,
    fileNames: names
  };
};

//Basically just folders and the stuff inside those folders.
const script = [
  {
    name: "libs",
    childs: ["bullets"]
  },
  {
    name: "units",
    childs: [
			{
				name: "moths",
				childs: ["pupa","hawk","luna","polyphemus"]
			}
  	]
  },
  {
    name: "loader",
    childs: ["unitLoader"] //load after everything, make sure it exists.
  }
];

const loadedScript = loadFile([], script);
for(var i = 0; i < loadedScript.res.length; i++){
  var res = loadedScript.res[i];
  var name = loadedScript.fileNames[i];
  try{
    var content = require("moth-units/" + res);
    if(typeof(content) !== "undefined"){
      global.mcu[name] = content;
    };
  }catch(e){
    print(e);
	};
};

if(!Vars.headless){
  Core.app.post(() => {
    const meta = Vars.mods.locateMod("moth-units").meta;
    meta.displayName = "Moth's units";
    meta.author = "Fish-Noises, mostly pirated from missing-category-units";
    meta.description = "No";
  });
}
