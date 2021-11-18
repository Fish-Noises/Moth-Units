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

const cunit = name => Vars.content.getByName(ContentType.unit, "moth-units-" + name);

//Factories
//Ground


//Air
const pupa = new UnitFactory.UnitPlan(
  cunit("pupa"),
  60 * 20,
  ItemStack.with(
    Items.silicon, 20,
    Items.plastanium, 10,
  )
);
addPlan(Blocks.airFactory, pupa);

reconAdd(Blocks.additiveReconstructor, [
  Seq.with(
    cunit("pupa"),
    cunit("hawk"),
  )
]);

reconAdd(Blocks.multiplicativeReconstructor, [
  Seq.with(
    cunit("hawk"),
    cunit("luna"),
  )
]);
