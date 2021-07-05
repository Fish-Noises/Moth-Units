//lmao pirated from missing category units
let col = Color.valueOf("#bf8af4");
const MothAirT1 = extend(UnitType, "pupa",{});
MothAirT1.constructor = () => extend(UnitEntity, {});
MothAirT1.abilities.add(new ForceFieldAbility(60, 0.3, 400, 60 * 6));
MothAirT1.defaultController = defenderAI;
