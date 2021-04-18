// Unit Loader made by EoD
const unitPlans = new Seq(UnitFactory.UnitPlan);

const addPlan = (fac, plan) => {
  fac.plans.add(plan);
};

//Seq in an array
const reconAdd = (recon, planArray) => {
  planArray.forEach(e => {
    recon.upgrades.add(e.toArray(UnitType));
  });
};

const cunit = name => Vars.content.getByName(ContentType.unit, "moth-units" + name);

//Factories
//Ground


//Air
const needle = new UnitFactory.UnitPlan(
  cunit("larva"),
  60 * 20,
  ItemStack.with(
    Items.silicon, 15,
    Items.spore-pod, 20
  )
);
addPlan(Blocks.airFactory, larva);

//Naval
);

//Reconstructors
//1 -> 2
reconAdd(Blocks.additiveReconstructor, [
  Seq.with(
    cunit("larva"),
    cunit("hawk")
  )
]);

//2 -> 3
reconAdd(Blocks.multiplicativeReconstructor, [
  Seq.with(
    cunit("hawk"),
    cunit("luna")
  )
]);

//3 -> 4
reconAdd(Blocks.exponentialReconstructor, [
  Seq.with(
    cunit("hawk"),
    cunit("atlas")
  )
]);

//4 -> 5
reconAdd(Blocks.tetrativeReconstructor, [
  Seq.with(
    cunit("atlas"),
    cunit("death-head")
  )
]);
