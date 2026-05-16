export class Player {
  constructor(scene, x, y, حالة) {
    this.scene = scene;
    this.حالة = حالة;
    this.container = scene.add.container(x, y);
    this.dir = 1;
    this.state = 'وقوف';
    this.elapsed = 0;

    const male = حالة.الشخصية === 'male';
    const skin = male ? 0xb88b58 : 0xf0d7c2;
    const hair = male ? 0x2b1f18 : 0x3a261f;

    const classStyle = {
      ronin: { cloth: 0x2a2433, weapon: 0xc9d0df, sub: 0x7d4f2f },
      vanguard: { cloth: 0x7a5a2a, weapon: 0xd3c39a, sub: 0x6c7078 },
      hunter: { cloth: 0x253042, weapon: 0xaab3c9, sub: 0x6f3f55 }
    }[حالة.الكلاس];

    this.legL = scene.add.rectangle(-4, 12, 4, 8, 0x2b2f3a);
    this.legR = scene.add.rectangle(4, 12, 4, 8, 0x2b2f3a);
    this.body = scene.add.rectangle(0, 2, 12, 12, classStyle.cloth);
    this.armL = scene.add.rectangle(-8, 2, 4, 10, skin);
    this.armR = scene.add.rectangle(8, 2, 4, 10, skin);
    this.head = scene.add.rectangle(0, -10, 12, 12, skin);
    this.hair = scene.add.rectangle(0, -15, 12, 4, hair);

    this.weaponMain = scene.add.rectangle(13, 2, 14, 2, classStyle.weapon);
    this.weaponSub = scene.add.rectangle(-12, 3, 8, 2, classStyle.sub);

    if (حالة.الكلاس === 'vanguard') {
      this.shield = scene.add.circle(12, 3, 6, 0x838894, 0.95).setStrokeStyle(2, 0xc5c9d1);
      this.weaponMain.width = 16;
      this.weaponMain.fillColor = 0xd4b078;
    } else if (حالة.الكلاس === 'hunter') {
      this.weaponMain.width = 8; // خنجر
      this.weaponSub.width = 8; // خنجر
      this.weaponMain.fillColor = 0xbbc4d8;
      this.weaponSub.fillColor = 0xbbc4d8;
    } else {
      this.bow = scene.add.arc(-13, 2, 6, 90, 270, false, classStyle.sub, 1).setStrokeStyle(2, 0x7d4f2f);
    }

    if (male) {
      this.mustache = scene.add.rectangle(0, -8, 8, 2, 0x2f1f16);
      this.scar = scene.add.rectangle(3, -10, 1, 5, 0x9d5b5b);
      this.container.add([this.legL, this.legR, this.body, this.armL, this.armR, this.head, this.hair, this.mustache, this.scar, this.weaponSub, this.weaponMain]);
    } else {
      this.hairLong = scene.add.rectangle(0, -5, 14, 5, hair);
      this.scarL = scene.add.rectangle(-7, 3, 1, 5, 0xb37d7d);
      this.scarR = scene.add.rectangle(7, 3, 1, 5, 0xb37d7d);
      this.container.add([this.legL, this.legR, this.body, this.armL, this.armR, this.head, this.hair, this.hairLong, this.scarL, this.scarR, this.weaponSub, this.weaponMain]);
    }

    if (this.shield) this.container.add(this.shield);
    if (this.bow) this.container.add(this.bow);
  }

  setPosition(x, y) { this.container.x = x; this.container.y = y; }
  get x() { return this.container.x; }
  set x(v) { this.container.x = v; }
  setState(s) { this.state = s; }

  update(dt) {
    this.elapsed += dt;
    const t = Math.sin(this.elapsed / 90);

    if (this.state === 'مشي') {
      this.legL.y = 12 + t * 2;
      this.legR.y = 12 - t * 2;
      this.armL.y = 2 - t;
      this.armR.y = 2 + t;
    } else {
      this.legL.y = 12; this.legR.y = 12; this.armL.y = 2; this.armR.y = 2;
    }

    if (this.state === 'هجوم') {
      this.weaponMain.x = 17;
      this.weaponMain.width = this.حالة.الكلاس === 'hunter' ? 10 : 18;
    } else if (this.state === 'اندفاع') {
      this.body.x = 2;
      this.weaponMain.x = 15;
    } else if (this.state === 'صد') {
      if (this.shield) this.shield.alpha = 1;
      this.weaponMain.x = 9;
    } else if (this.state === 'تضرر') {
      this.container.alpha = 0.65 + Math.abs(Math.sin(this.elapsed / 30)) * 0.35;
    } else {
      this.container.alpha = 1;
      this.body.x = 0;
      this.weaponMain.x = 13;
      this.weaponMain.width = this.حالة.الكلاس === 'hunter' ? 8 : 14;
      if (this.shield) this.shield.alpha = 0.9;
    }

    this.container.scaleX = this.dir;
  }
}
