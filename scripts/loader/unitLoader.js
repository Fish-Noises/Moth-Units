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
const larva = new UnitFactory.UnitPlan(
  cunit("larva"),
  60 * 20,
  ItemStack.with(
    Items.silicon, 15,
    Items.copper, 20
  )
);
addPlan(Blocks.airFactory, larva);

//Naval

//Reconstructors
//1 -> 2

//2 -> 3

//3 -> 4

//4 -> 5
