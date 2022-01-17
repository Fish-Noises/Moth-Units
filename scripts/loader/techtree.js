//Casually steals from [MEEPofFaith/missing-category-units]' techtree.js, [MEEPofFaith/progressed-materials]'s techtree.js, which was stolen from [Gdeft/substructure]'s techtree.js

/**
 * Node for the research tech tree.
 *
 * @property {UnlockableContent}    parent          - The parent of the current node.
 * @property {UnlockableContent}    contentType     - The unlockable content that the current node contains.
 * @property {ItemStack}            requirements    - The research requirements required to unlock this node, will use the default if set to null.
 * @property {Seq}                  objectives      - A sequence of Objectives required to unlock this node. Can be null.
 */
const node = (parent, contentType, requirements, objectives) => {
  if(parent != null && contentType != null){
    const tnode = new TechTree.TechNode(TechTree.get(parent), contentType, requirements != null ? requirements : contentType.researchRequirements());
    let used = new ObjectSet();
    
    if(objectives != null) tnode.objectives.addAll(objectives);
  }else{
    print(parent + " or " + contentType + " is null.");
  }
};
const cunit = name => Vars.content.getByName(ContentType.unit, "moth-units-" + name);

node(UnitTypes.flare, cunit("pupa"), null, null);
node(cunit("pupa"), cunit("hawk"), null, new Objectives.Research(Blocks.additiveReconstructor));
node(cunit("hawk"), cunit("luna"), null, new Objectives.Research(Blocks.multiplicativeReconstructor));
node(cunit("luna"), cunit("polyphemus"), null, new Objectives.Research(Blocks.exponentialReconstructor));
node(cunit("luna"), cunit("atlas"), null, new Objectives.Research(Blocks.exponentialReconstructor));
