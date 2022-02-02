let col = Color.valueOf("#bf8af4");
const MothAirT5 = extend(UnitType, "atlas", {});
MothAirT5.constructor = () => extend(UnitEntity, {});
const harbingerFallout = extend(ArtilleryBulletType,{
    width: 20,
    height: 20,
    speed: 1,
    lifetime: 270,
    frontColor: Color.valueOf("bf8af4"),
    update(b){
        if (Math.random() < 0.4){
            Lightning.create(b.team,Color.valueOf("#bf8af4"), 10, b.x, b.y, Math.random()*360, 15);
            Sounds.spark.at(b.x, b.y);
        }
        this.super$update(b);
    }
});
const harbingerProjectile = extend(ArtilleryBulletType,{
    width: 75,
    height: 75,
    splashDamage: 300,
    splashDamageRadius: 80,
    lifetime: 300,
    speed: 1.3,
    frontColor: Color.valueOf("#bf8af4"),
    backColor: Color.valueOf("#bf8af4"),
    collides: true,
    hitEffect: Fx.sapExplosion,
    hitShake: 16,
    fragBullets: 12,
    fragBullet: harbingerFallout,
    update(b){
        if (Math.random() < 0.1){
            Lightning.create(b.team,Color.valueOf("#bf8af4"), 0, b.x, b.y, Math.random()*360, 20);
        }
        this.super$update(b);
    }
});
const atlasHarbinger = extend(Weapon, "moth-units-atlas-harbinger", {
    x: 33,
    y: -11.25,
    shooty: 20,
    alternate: false,
    recoil: 10,
    reload: 180,
    bullet: harbingerProjectile,
    rotate: true,
    shake: 10,
    rotateSpeed: 1,
    shootSound: Sounds.artillery
});
MothAirT5.weapons.addAll(atlasHarbinger);