//lmao pirated from missing category units
let col = Color.valueOf("#bf8af4");
const MothAirT1 = extend(UnitType, "larva",{});
MothAirT1.constructor = () => extend(UnitEntity, {});
MothAirT1.defaultController = DefenderAI;
MothAirT1.abilities.add(new ForceFieldAbility(60f, 0.3f, 400f, 60f * 6));
