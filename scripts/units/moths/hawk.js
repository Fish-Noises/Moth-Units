let col = Color.valueOf("#bf8af4");
const MothAirT2 = extend(UnitType, "hawk", {
  ammoType: AmmoTypes.powerLow
});
MothAirT2.constructor = () => extend(UnitEntity, {});
