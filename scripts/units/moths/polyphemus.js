const modBullets = require("libs/bullets");

let col = Color.valueOf("#bf8af4");
const MothAirT4 = extend(UnitType, "polyphemus",{});
MothAirT4.constructor = () => extend(UnitEntity, {
    update(){
        this.super$update();
  }
});
/*let i = 1;*/
const flameSpew = extend(BulletType, {
    speed: 3,
    damage: 40,
    hitSize: 11,
    lifetime: 13,
    pierce: true,
    status: StatusEffects.burning,
    statusDuration: 120,
    shootEffect: Fx.shootSmallFlame/*extend(Effect)*/,
    despawnEffect: Fx.none,
    keepVelocity: false,
    hittable: false,
    collidesTiles: false,
});

const cinderCannon1 = extend(Weapon, "moth-units-cinder-cannon", {
  x: 6,
  y: 14,
  rotate: true,
  reload: 10,
  shootY: 5,
  shootSound: Sounds.flame,
  bullet: flameSpew
});

const cinderCannon2 = extend(Weapon, "moth-units-cinder-cannon", {
  x: 23,
  y: 16,
  rotate: true,
  reload: 10,
  shootY: 5,
  shootSound: Sounds.flame,
  bullet: flameSpew
});

const overloadBeam = extend(BulletType, {
  collision(other, x, y){
    this.hit(this.base(), x, y);
        if(other instanceof Healthc){
              let t = other;
              t.damage(this.damage)
        }
        if(!this.pierce){
              this.remove();
        }else{
              this.collided.add(other.id());
    }
  },
  update(b){
    if(!b) return;
    this.super$update(b);

    let target = Damage.linecast(b, b.x, b.y, b.rotation(), this.length);
    b.data = target;

    if(target instanceof Hitboxc){
      if(b.timer.get(1, 10)){
        let hit = target;

        hit.collision(b, hit.x, hit.y);
        b.collision(hit, hit.x, hit.y);
      }
    }else if(target instanceof Building){
      if(b.timer.get(1, 10)){
        let tile = target;

        if(tile.collide(b)){
          tile.collision(b);
          this.hit(b, tile.x, tile.y);
        }
      }
    }else{
      b.data = new Vec2().trns(b.rotation(), this.length).add(b.x, b.y);
    }
  },
  range(){
    return this.length;
  },
  draw(b){
    if(b.data instanceof Position){
          let data = b.data;
          Tmp.v1.set(data);

          let fin = Mathf.curve(b.fin(), 0, this.growTime / b.lifetime);
          let fout = 1 - Mathf.curve(b.fin(), (b.lifetime - this.fadeTime) / b.lifetime, 1);
          let lWidth = fin * fout * this.width;

          let widthScls = [1.8, 1];

          for(let i = 0; i < 2; i++){
            Draw.color(this.colors[i])
            Lines.stroke(lWidth * widthScls[i]);
            Lines.line(b.x, b.y, Tmp.v1.x, Tmp.v1.y, false);
            Fill.circle(b.x, b.y, Lines.getStroke() / 1.25);
            Fill.circle(Tmp.v1.x, Tmp.v1.y, Lines.getStroke() / 1.25);
            Draw.reset();
      }

      Drawf.light(Team.derelict, b.x, b.y, Tmp.v1.x, Tmp.v1.y, 15 * fin * fout + 5, this.colors[1], 0.6);
    }
  },

  speed: 0.0001,
  damage: 40, // * 12 = dps
  colors: [Color.valueOf("bf8af4"), Color.white],
  width: 1.5,
  maxRange: 160,
  length: 210,
  lifetime: 480,
  absorbable: false,
  collidesTiles: true,
  collidesGround: true,
  hittable: false,
  keepVelocity: false,
  pierce: true,
  status: StatusEffects.sapped,
  statusDuration: 180,
  hitSize: 0,
  fadeTime: 10,
  growTime: 10,
  smokeEffect: Fx.none,
  shootEffect: Fx.none,
  hitEffect: Fx.none,
  despawnEffect: Fx.none
 });

const overloadRay = extend(Weapon, "moth-units-overload-ray", {
  x: 13,
  y: -5,
  shooty: 5,
  rotate: true,
  reload: 300,
  shootSound: Sounds.tractorbeam,
  continuous: true,
  alternate: false,
  shootStatusDuration: 600,
  shootStatus: StatusEffects.unmoving,
  bullet: overloadBeam
});
/*update(){
        this.super$update();
        if(isShooting()){
            this.weapons.overloadRay.bullet.damage += 100;
            this.weapons.overloadRay.bullet.width += 0.2;
        }
  }*/

MothAirT4.weapons.addAll(cinderCannon1,cinderCannon2,overloadRay);
