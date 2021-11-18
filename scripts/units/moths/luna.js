let col = Color.valueOf("#bf8af4");
const MothAirT3 = extend(UnitType, "luna", {
  ammoType: AmmoTypes.powerLow
});
MothAirT3.constructor = () => extend(UnitEntity, {});
