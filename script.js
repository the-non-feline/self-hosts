!function(e) {
    function t(t) {
        for (var a, r, o = t[0], c = t[1], l = t[2], h = 0, d = []; h < o.length; h++)
            r = o[h],
            Object.prototype.hasOwnProperty.call(n, r) && n[r] && d.push(n[r][0]),
            n[r] = 0;
        for (a in c)
            Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
        for (u && u(t); d.length; )
            d.shift()();
        return s.push.apply(s, l || []),
        i()
    }
    function i() {
        for (var e, t = 0; t < s.length; t++) {
            for (var i = s[t], a = !0, o = 1; o < i.length; o++) {
                var c = i[o];
                0 !== n[c] && (a = !1)
            }
            a && (s.splice(t--, 1),
            e = r(r.s = i[0]))
        }
        return e
    }
    var a = {}
      , n = {
        app: 0
    }
      , s = [];
    function r(t) {
        if (a[t])
            return a[t].exports;
        var i = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = e,
    r.c = a,
    r.d = function(e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var i = Object.create(null);
        if (r.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                r.d(i, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return i
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "/";
    var o = window.webpackJsonp = window.webpackJsonp || []
      , c = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var l = 0; l < o.length; l++)
        t(o[l]);
    var u = c;
    s.push([0, "chunk-vendors"]),
    i()
}({
    0: function(e, t, i) {
        e.exports = i("cd49")
    },
    "03d0": function(e, t, i) {},
    "0c25": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return s
        }
        ));
        var a = i("d4ec")
          , n = i("bee2")
          , s = function() {
            function e(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                Object(a.a)(this, e),
                this.isDown = !1,
                this.isUp = !0,
                this.pressCallback = null,
                this.releaseCallback = null,
                this.data = null,
                this.enabled = !0,
                this.code = t,
                this.data = s,
                this.pressCallback = i,
                this.releaseCallback = n,
                window.addEventListener("keydown", this.downHandler.bind(this), !1),
                window.addEventListener("keyup", this.upHandler.bind(this), !1)
            }
            return Object(n.a)(e, [{
                key: "downHandler",
                value: function(e) {
                    e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || this.enabled && e.keyCode === this.code && (e.preventDefault(),
                    this.isUp && this.pressCallback && this.pressCallback(this.code, this.data),
                    this.isDown = !0,
                    this.isUp = !1)
                }
            }, {
                key: "upHandler",
                value: function(e) {
                    e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || this.enabled && e.keyCode === this.code && (e.preventDefault(),
                    this.isDown && this.releaseCallback && this.releaseCallback(this.code, this.data),
                    this.isDown = !1,
                    this.isUp = !0)
                }
            }, {
                key: "disable",
                value: function() {
                    this.isDown = !1,
                    this.isUp = !0,
                    this.enabled = !1
                }
            }, {
                key: "enable",
                value: function() {
                    this.enabled = !0
                }
            }]),
            e
        }()
    },
    "0e7d": function(e, t, i) {
        "use strict";
        i("4cc8")
    },
    "11ca": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return f
            }
            ));
            var a = i("b85c")
              , n = i("d4ec")
              , s = i("bee2")
              , r = i("45eb")
              , o = i("7e84")
              , c = i("262e")
              , l = i("2caf")
              , u = (i("18a5"),
            i("a434"),
            i("159b"),
            i("b4d9"))
              , h = i("e113")
              , d = i("53ce")
              , p = e.Sprite
              , v = e.utils.TextureCache
              , f = (i("f53e"),
            function(e) {
                Object(c.a)(i, e);
                var t = Object(l.a)(i);
                function i(e, a, s, r, o, c) {
                    var l;
                    return Object(n.a)(this, i),
                    (l = t.call(this, e, a, r, o, c))._tpSprites = [],
                    l.type = u.c.Trigger,
                    l.icon = new p(v["assets/ui/trigger.png"]),
                    l.icon.anchor.set(.5),
                    l.addChild(l.icon),
                    l.triggers = s,
                    l
                }
                return Object(s.a)(i, [{
                    key: "triggers",
                    get: function() {
                        return this._triggers
                    },
                    set: function(e) {
                        this._triggers = JSON.parse(JSON.stringify(e)),
                        this.setDirty();
                        var t, i = [], n = Object(a.a)(e);
                        try {
                            for (n.s(); !(t = n.n()).done; ) {
                                var s, r = t.value, o = Object(a.a)(r.actions);
                                try {
                                    for (o.s(); !(s = o.n()).done; ) {
                                        var c = s.value;
                                        switch (c.type) {
                                        case h.a.Teleport:
                                            c.data.pos && i.push(c.data.pos)
                                        }
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        if (this._tpSprites.length > i.length)
                            this._tpSprites.splice(i.length).forEach((function(e) {
                                return e.destroy()
                            }
                            ));
                        else if (i.length > this._tpSprites.length)
                            for (var l = i.length - this._tpSprites.length, u = 0; u < l; u++) {
                                var d = new p(v["assets/ui/tppos.png"]);
                                d.anchor.set(.5),
                                this.addChild(d),
                                this._tpSprites.push(d)
                            }
                        for (var f = 0; f < i.length; f++) {
                            var g = this._tpSprites[f]
                              , b = i[f];
                            g.x = b.x,
                            g.y = b.y
                        }
                        this.updateTpSpritesSize()
                    }
                }, {
                    key: "updateTpSpritesSize",
                    value: function() {
                        var e, t = this.viewport.worldScreenWidth / 5e3, i = Object(a.a)(this._tpSprites);
                        try {
                            for (i.s(); !(e = i.n()).done; ) {
                                var n = e.value;
                                n.width = n.height = 64 * t
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                }, {
                    key: "updateIconSize",
                    value: function() {
                        var e = Math.min(this.polygonBounds.width, this.polygonBounds.height)
                          , t = this.viewport.worldScreenWidth / 5e3
                          , i = Math.min(e, 128 * t) / this.icon.texture.width;
                        this.icon.width = this.icon.texture.width * i,
                        this.icon.height = this.icon.texture.height * i,
                        this.icon.position.set(this.polygonBounds.x + this.polygonBounds.width / 2, this.polygonBounds.y + this.polygonBounds.height / 2),
                        this.updateTpSpritesSize()
                    }
                }, {
                    key: "onViewportResize",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "onViewportResize", this).call(this),
                        this.updateIconSize()
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "redraw", this).call(this),
                        this.updateIconSize()
                    }
                }, {
                    key: "updatePoints",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "updatePoints", this).call(this),
                        this.updateIconSize()
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(r.a)(Object(o.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.triggers = this.triggers,
                        e
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var a = e;
                        return new i(a.position,a.size,a.triggers,t.parent,t.pointsLayer,t.viewport)
                    }
                }]),
                i
            }(d.a))
        }
        ).call(this, i("22a2"))
    },
    "12e2": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return g
        }
        ));
        var a = i("1da1")
          , n = i("d4ec")
          , s = i("bee2")
          , r = i("45eb")
          , o = i("7e84")
          , c = i("262e")
          , l = i("2caf")
          , u = (i("96cf"),
        i("cdd1"))
          , h = i("dfb9")
          , d = i("b4d9")
          , p = i("1dab")
          , v = i("234e")
          , f = i("4116")
          , g = function(e) {
            Object(c.a)(i, e);
            var t = Object(l.a)(i);
            function i(e, a, s, r, o) {
                var c;
                return Object(n.a)(this, i),
                (c = t.call(this, e, a, null, r))._paramsData = null,
                c.type = d.c.Prop,
                o && c.setParamsData(o),
                c.setBasicSettings(s),
                c
            }
            return Object(s.a)(i, [{
                key: "paramsData",
                get: function() {
                    return this._paramsData
                }
            }, {
                key: "setParamsData",
                value: function(e) {
                    this._paramsData = e
                }
            }, {
                key: "basicSettings",
                get: function() {
                    return this._basicSettings
                }
            }, {
                key: "setBasicSettings",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i, a, n, s, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this._basicSettings = t,
                                    e.next = 3,
                                    f.a.getProp(t.id);
                                case 3:
                                    return i = e.sent,
                                    e.next = 6,
                                    p.a.getAssetPack(i.pack_id);
                                case 6:
                                    if (a = e.sent,
                                    n = f.a.getAssetPath(i),
                                    !(a.spritesheets > 0)) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 11,
                                    v.a.getSpriteSheet(a);
                                case 11:
                                    r = e.sent,
                                    s = r[i.asset];
                                case 13:
                                    if (s) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 16,
                                    h.a.getRemoteTexture(n, d.f.mapMakerPath + "/" + n);
                                case 16:
                                    s = e.sent;
                                case 17:
                                    this.setAnchor(t.anchor_x, t.anchor_y),
                                    this.texture = s,
                                    this.setSize(10 * t.width, 10 * t.height);
                                case 20:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "toJsonObject",
                value: function() {
                    var e = Object(r.a)(Object(o.a)(i.prototype), "toJsonObject", this).call(this);
                    return e.pType = this.basicSettings.id,
                    e.params = this.paramsData,
                    e
                }
            }], [{
                key: "fromJsonObject",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i) {
                        var a, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = t,
                                    e.next = 3,
                                    f.a.getProp(a.pType);
                                case 3:
                                    return n = e.sent,
                                    (s = new (f.a.propClass(a.pType))(i.parent,i.viewport,n,i.pointsLayer,a.params)).position.set(a.x, a.y),
                                    a.rotation && s.setRotation(a.rotation),
                                    e.abrupt("return", s);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            i
        }(u.a)
    },
    "136a": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return r
        }
        ));
        var a = i("d4ec")
          , n = i("bee2")
          , s = i("b4d9")
          , r = function() {
            function e(t, i) {
                Object(a.a)(this, e),
                this._mapEditor = t,
                this._type = i
            }
            return Object(n.a)(e, [{
                key: "type",
                get: function() {
                    return this._type
                }
            }, {
                key: "log",
                value: function(e) {
                    console.log(s.b[this.type] + " Tool: " + e)
                }
            }, {
                key: "mapEditor",
                get: function() {
                    return this._mapEditor
                }
            }]),
            e
        }()
    },
    1560: function(e, t, i) {
        "use strict";
        i("467b")
    },
    "168f": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return k
            }
            ));
            var a = i("2909")
              , n = i("5530")
              , s = i("b85c")
              , r = i("1da1")
              , o = i("d4ec")
              , c = i("bee2")
              , l = i("45eb")
              , u = i("7e84")
              , h = i("262e")
              , d = i("2caf")
              , p = (i("96cf"),
            i("18a5"),
            i("d3b7"),
            i("3ca3"),
            i("ddb0"),
            i("53ce"))
              , v = i("b4d9")
              , f = i("dfb9")
              , g = i("7523")
              , b = e.Container
              , y = e.Text
              , m = e.TextStyle
              , w = e.Sprite
              , k = function(e) {
                Object(h.a)(i, e);
                var t = Object(d.a)(i);
                function i(e, a, n, s, r, c) {
                    var l;
                    return Object(o.a)(this, i),
                    (l = t.call(this, e, a, s, r, c))._settings = {
                        fishLevels: []
                    },
                    l.fishLevelSprites = {},
                    l.infoContainer = new b,
                    l.addChild(l.infoContainer),
                    l.fishLevelsContainer = new b,
                    l.infoContainer.addChild(l.fishLevelsContainer),
                    l.text = new y("",i.textStyle.clone()),
                    l.text.style.wordWrapWidth = l.width,
                    l.text.anchor.set(0, .5),
                    l.text.resolution = .5,
                    l.updateTextSize(),
                    l.infoContainer.addChild(l.text),
                    l.setSettings(n),
                    l.type = v.c.NPCSpawn,
                    l
                }
                return Object(c.a)(i, [{
                    key: "getSettings",
                    value: function() {
                        return this._settings
                    }
                }, {
                    key: "setSettings",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                            var i, o, c, l, u, h, d, p = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        i = Object(s.a)(this._settings.fishLevels),
                                        e.prev = 1,
                                        c = function() {
                                            var e = o.value;
                                            if (t.fishLevels.some((function(t) {
                                                return t == e
                                            }
                                            )))
                                                return "continue";
                                            p.fishLevelSprites[e] && (p.fishLevelSprites[e].destroy(),
                                            delete p.fishLevelSprites[e])
                                        }
                                        ,
                                        i.s();
                                    case 4:
                                        if ((o = i.n()).done) {
                                            e.next = 10;
                                            break
                                        }
                                        if ("continue" !== c()) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("continue", 8);
                                    case 8:
                                        e.next = 4;
                                        break;
                                    case 10:
                                        e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12,
                                        e.t0 = e.catch(1),
                                        i.e(e.t0);
                                    case 15:
                                        return e.prev = 15,
                                        i.f(),
                                        e.finish(15);
                                    case 18:
                                        this.updateFishLevelsSize(),
                                        l = [],
                                        u = Object(s.a)(t.fishLevels),
                                        e.prev = 21,
                                        d = function() {
                                            var e = h.value
                                              , i = e == t.fishLevels[t.fishLevels.length - 1];
                                            if (p._settings.fishLevels.some((function(t) {
                                                return t == e
                                            }
                                            )) || p.fishLevelSprites[e])
                                                return "continue";
                                            g.a.get(e);
                                            var a = g.a.getPicturePath(e)
                                              , n = new Promise(function() {
                                                var t = Object(r.a)(regeneratorRuntime.mark((function t(n, s) {
                                                    var r, o;
                                                    return regeneratorRuntime.wrap((function(t) {
                                                        for (; ; )
                                                            switch (t.prev = t.next) {
                                                            case 0:
                                                                return t.prev = 0,
                                                                t.next = 3,
                                                                f.a.getRemoteTexture(a, v.f.deeeepPath + "/" + a, i);
                                                            case 3:
                                                                r = t.sent,
                                                                o = new w(r),
                                                                p.fishLevelsContainer.addChild(o),
                                                                p.fishLevelSprites[e] = o,
                                                                n(),
                                                                t.next = 14;
                                                                break;
                                                            case 10:
                                                                t.prev = 10,
                                                                t.t0 = t.catch(0),
                                                                console.error(t.t0),
                                                                s();
                                                            case 14:
                                                            case "end":
                                                                return t.stop()
                                                            }
                                                    }
                                                    ), t, null, [[0, 10]])
                                                }
                                                )));
                                                return function(e, i) {
                                                    return t.apply(this, arguments)
                                                }
                                            }());
                                            l.push(n)
                                        }
                                        ,
                                        u.s();
                                    case 24:
                                        if ((h = u.n()).done) {
                                            e.next = 30;
                                            break
                                        }
                                        if ("continue" !== d()) {
                                            e.next = 28;
                                            break
                                        }
                                        return e.abrupt("continue", 28);
                                    case 28:
                                        e.next = 24;
                                        break;
                                    case 30:
                                        e.next = 35;
                                        break;
                                    case 32:
                                        e.prev = 32,
                                        e.t1 = e.catch(21),
                                        u.e(e.t1);
                                    case 35:
                                        return e.prev = 35,
                                        u.f(),
                                        e.finish(35);
                                    case 38:
                                        if (this._settings = Object(n.a)({}, t),
                                        this._settings.fishLevels = Object(a.a)(t.fishLevels),
                                        !(l.length > 0)) {
                                            e.next = 43;
                                            break
                                        }
                                        return e.next = 43,
                                        Promise.all(l);
                                    case 43:
                                        this.text.text = this._settings.fishLevels.length > 0 ? "x" + this._settings.animalCount : "No animals selected",
                                        this.updateFishLevelsSize();
                                    case 45:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[1, 12, 15, 18], [21, 32, 35, 38]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "updateTextSize",
                    value: function() {
                        this.text.scale.set(this.viewport.worldScreenWidth / 7e3),
                        this.text.style.wordWrapWidth = this.width / (this.viewport.worldScreenWidth / 7e3)
                    }
                }, {
                    key: "updateFishLevelsSize",
                    value: function() {
                        for (var e = this.viewport.worldScreenWidth / 7e3, t = 150 * e, i = 0; i < this.fishLevelsContainer.children.length; i++) {
                            var a = this.fishLevelsContainer.children[i]
                              , n = a.width / a.height
                              , s = a.height - t;
                            if (0 != t)
                                if (a.height -= s,
                                a.width = a.height * n,
                                0 == i)
                                    a.position.set(0, 0);
                                else {
                                    var r = this.fishLevelsContainer.children[i - 1];
                                    a.position.set(r.position.x + r.width + 10 * e, 0)
                                }
                        }
                        this.text.position.set(this.fishLevelsContainer.width + 10 * e, this.infoContainer.height / 2),
                        this.infoContainer.position.set(this.polygonBounds.x + this.polygonBounds.width / 2, this.polygonBounds.y + this.polygonBounds.height / 2),
                        this.infoContainer.pivot.set(this.infoContainer.width / 2, this.infoContainer.height / 2)
                    }
                }, {
                    key: "onViewportResize",
                    value: function() {
                        Object(l.a)(Object(u.a)(i.prototype), "onViewportResize", this).call(this),
                        this.updateFishLevelsSize(),
                        this.updateTextSize()
                    }
                }, {
                    key: "updatePoints",
                    value: function() {
                        Object(l.a)(Object(u.a)(i.prototype), "updatePoints", this).call(this),
                        this.updateFishLevelsSize(),
                        this.text.style.wordWrapWidth = this.width / (this.viewport.worldScreenWidth / 7e3)
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(l.a)(Object(u.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.settings = f.a.deepCopy(this._settings),
                        e
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var a = e;
                        return a.settings.restrictMovement = a.settings.restrictMovement || !1,
                        new i(a.position,a.size,a.settings,t.parent,t.pointsLayer,t.viewport)
                    }
                }]),
                i
            }(p.a);
            k.textStyle = new m({
                fill: 16777215,
                fontSize: 64,
                wordWrap: !0,
                align: "center"
            })
        }
        ).call(this, i("22a2"))
    },
    "1dab": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return c
        }
        ));
        var a = i("1da1")
          , n = i("b85c")
          , s = i("d4ec")
          , r = i("bee2")
          , o = (i("96cf"),
        i("8fff"))
          , c = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(r.a)(e, null, [{
                key: "clear",
                value: function() {
                    this.assetPacksById = {}
                }
            }, {
                key: "addAssetPack",
                value: function(e) {
                    this.assetPacksById[e.id] = e
                }
            }, {
                key: "addAssetPacks",
                value: function(e) {
                    var t, i = Object(n.a)(e);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var a = t.value;
                            this.assetPacksById[a.id] = a
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "getAssetPack",
                value: function() {
                    var t = Object(a.a)(regeneratorRuntime.mark((function t(i) {
                        var a;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.assetPacksById[i]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", this.assetPacksById[i]);
                                case 2:
                                    return t.next = 4,
                                    o.a.getById(i);
                                case 4:
                                    return a = t.sent,
                                    e.addAssetPack(a),
                                    t.abrupt("return", a);
                                case 7:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAssetPackSync",
                value: function(e) {
                    return this.assetPacksById[e] ? this.assetPacksById[e] : null
                }
            }]),
            e
        }();
        c.assetPacksById = {}
    },
    "234e": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return c
            }
            ));
            var a = i("1da1")
              , n = i("d4ec")
              , s = i("bee2")
              , r = (i("96cf"),
            i("99af"),
            i("d3b7"),
            i("3ca3"),
            i("ddb0"),
            i("dfb9"))
              , o = i("b4d9")
              , c = function() {
                function t() {
                    Object(n.a)(this, t)
                }
                return Object(s.a)(t, null, [{
                    key: "getSpriteSheet",
                    value: function() {
                        var t = Object(a.a)(regeneratorRuntime.mark((function t(i) {
                            var a, n, s, c, l, u, h = arguments;
                            return regeneratorRuntime.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (a = h.length > 1 && void 0 !== h[1] && h[1],
                                        0 != i.spritesheets) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return", null);
                                    case 3:
                                        if (a || !this._spriteSheets[i.id]) {
                                            t.next = 5;
                                            break
                                        }
                                        return t.abrupt("return", this._spriteSheets[i.id]);
                                    case 5:
                                        for (n = [],
                                        s = 0; s < i.spritesheets; s++)
                                            n.push(r.a.getRemoteTexture("pack".concat(i.id, "sheet").concat(s + 1), o.f.mapMakerPath + "/assets/packs/" + i.id + "/spritesheets/" + (s + 1) + ".json?v=" + i.version));
                                        return t.next = 9,
                                        Promise.all(n);
                                    case 9:
                                        for (this._spriteSheets[i.id] = {},
                                        c = 0; c < i.spritesheets; c++)
                                            for (u in (l = e.Loader.shared.resources["pack".concat(i.id, "sheet").concat(c + 1)].spritesheet).textures)
                                                this._spriteSheets[i.id][u] = l.textures[u];
                                        return t.abrupt("return", this._spriteSheets[i.id]);
                                    case 12:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getSpriteSheetSync",
                    value: function(e) {
                        return 0 == e.spritesheets ? null : this._spriteSheets[e.id] ? this._spriteSheets[e.id] : null
                    }
                }]),
                t
            }();
            c._spriteSheets = {}
        }
        ).call(this, i("22a2"))
    },
    2367: function(e, t, i) {},
    2475: function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return r
        }
        ));
        var a = i("d4ec")
          , n = i("bee2")
          , s = (i("d3b7"),
        i("25f0"),
        i("dfb9"))
          , r = function() {
            function e() {
                Object(a.a)(this, e)
            }
            return Object(n.a)(e, null, [{
                key: "makeBrighter",
                value: function(t, i) {
                    var a, n = ("00000" + (0 | t).toString(16)).substr(-6), r = parseInt(n.substr(0, 2), 16), o = parseInt(n.substr(2, 2), 16), c = parseInt(n.substr(4, 2), 16), l = i;
                    r * i > 280 && (a = 280 / r) < l && (l = a),
                    o * i > 280 && (a = 280 / o) < l && (l = a),
                    c * i > 280 && (a = 280 / c) < l && (l = a),
                    r *= l,
                    o *= l,
                    c *= l;
                    var u = e.redistributeRgb(r, o, c);
                    return n = "#" + ("0" + Math.floor(u[0]).toString(16)).substr(-2) + ("0" + Math.floor(u[1]).toString(16)).substr(-2) + ("0" + Math.floor(u[2]).toString(16)).substr(-2),
                    s.a.stringColorToHex(n)
                }
            }, {
                key: "mix",
                value: function(t, i) {
                    var a = ("00000" + (0 | t).toString(16)).substr(-6)
                      , n = parseInt(a.substr(0, 2), 16)
                      , r = parseInt(a.substr(2, 2), 16)
                      , o = parseInt(a.substr(4, 2), 16);
                    a = ("00000" + (0 | i).toString(16)).substr(-6);
                    var c = parseInt(a.substr(0, 2), 16)
                      , l = parseInt(a.substr(2, 2), 16)
                      , u = parseInt(a.substr(4, 2), 16)
                      , h = n + r + o
                      , d = c + l + u
                      , p = ((0 != h ? n / h : .33) + (0 != d ? c / d : .33)) / 2
                      , v = ((0 != h ? r / h : .33) + (0 != d ? l / d : .33)) / 2
                      , f = ((0 != h ? o / h : .33) + (0 != d ? u / d : .33)) / 2;
                    n = n + c == 0 ? 0 : n / (n + c) * n + c / (n + c) * c,
                    r = r + l == 0 ? 0 : r / (r + l) * r + l / (r + l) * l,
                    o = o + u == 0 ? 0 : o / (o + u) * o + u / (o + u) * u,
                    n = Math.min(n, n * p),
                    r = Math.min(r, r * v),
                    o = Math.min(o, o * f);
                    var g = e.redistributeRgb(n, r, o);
                    return a = "#" + ("0" + Math.floor(g[0]).toString(16)).substr(-2) + ("0" + Math.floor(g[1]).toString(16)).substr(-2) + ("0" + Math.floor(g[2]).toString(16)).substr(-2),
                    s.a.stringColorToHex(a)
                }
            }, {
                key: "clampRgb",
                value: function(e, t, i) {
                    return [Math.min(255, e), Math.min(255, t), Math.min(255, i)]
                }
            }, {
                key: "redistributeRgb",
                value: function(e, t, i) {
                    var a = 255.999
                      , n = Math.max(e, t, i);
                    if (n <= a)
                        return [e, t, i];
                    var s = e + t + i;
                    if (s >= 3 * a)
                        return [a, a, a];
                    var r = (3 * a - s) / (3 * n - s)
                      , o = a - r * n;
                    return [o + r * e, o + r * t, o + r * i]
                }
            }]),
            e
        }()
    },
    "267c": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return p
            }
            ));
            var a = i("1da1")
              , n = i("d4ec")
              , s = i("bee2")
              , r = i("45eb")
              , o = i("7e84")
              , c = i("262e")
              , l = i("2caf")
              , u = (i("96cf"),
            i("18a5"),
            i("12e2"))
              , h = i("22a2")
              , d = i("dfb9")
              , p = function(t) {
                Object(c.a)(u, t);
                var i = Object(l.a)(u);
                function u(e, t, a, s, r) {
                    var o;
                    Object(n.a)(this, u);
                    var c = (o = i.call(this, e, t, a, s, r)).text = new h.Text("",u.textStyle.clone());
                    return c.anchor.set(.5),
                    c.resolution = 2,
                    c.scale.set(.2),
                    c.alpha = .9,
                    o._inner.addChild(o.text),
                    o
                }
                return Object(s.a)(u, [{
                    key: "setBasicSettings",
                    value: function() {
                        var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2,
                                        Object(r.a)(Object(o.a)(u.prototype), "setBasicSettings", this).call(this, t);
                                    case 2:
                                        this.text.y = .15 * -this.sprite.height,
                                        this.text.style.wordWrapWidth = .8 * this.sprite.width / .2,
                                        this.setParamsData(this.paramsData);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setParamsData",
                    value: function(t) {
                        if (Object(r.a)(Object(o.a)(u.prototype), "setParamsData", this).call(this, t),
                        t && this.texture && this.text) {
                            var i;
                            this.text.text = t.text || "";
                            var a = e.TextMetrics.measureText(null !== (i = t.text) && void 0 !== i ? i : "", u.textStyle, !1);
                            console.log(a, this.sprite.width);
                            var n = 2 * a.width / 10
                              , s = .8 * this.sprite.width
                              , c = d.a.delta(.6 * s, s, n)
                              , l = d.a.lerp(8, 12, 1 - c);
                            this.text.style.fontSize = l,
                            this.text.style.lineHeight = l + 1
                        }
                    }
                }]),
                u
            }(u.a);
            p.textStyle = new h.TextStyle({
                fill: 7692615,
                fontWeight: "bold",
                fontSize: 8,
                wordWrap: !0,
                align: "center",
                lineHeight: 9,
                breakWords: !0
            })
        }
        ).call(this, i("22a2"))
    },
    "27fb": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return f
            }
            ));
            var a = i("b85c")
              , n = i("d4ec")
              , s = i("bee2")
              , r = (i("d3b7"),
            i("ddb0"),
            i("d81d"),
            i("b4d9"))
              , o = i("0c25")
              , c = i("b1e3")
              , l = i("dfb9")
              , u = i("2cbb")
              , h = i("9935")
              , d = i("d5bc")
              , p = e.Point
              , v = e.Graphics
              , f = (Object(h.create)(d.a, "title", "content"),
            function() {
                function t(e) {
                    var i = this;
                    Object(n.a)(this, t),
                    this.pointerDownTime = 0,
                    this.pointerStartPosition = new p,
                    this.pointerLastPosition = new p,
                    this.keys = [],
                    this.oneTimeKeys = [],
                    this.shiftPressed = !1,
                    this.altPressed = !1,
                    this.ctrlPressed = !1,
                    this.keysDisabled = !1,
                    this.nextClickCb = null,
                    this.startViewportScale = 1,
                    this.mapEditor = e,
                    this.selectionGraphic = new v,
                    this.selectionGraphic.parentLayer = e.drawingLayer,
                    this.mapEditor.app.stage.addChild(this.selectionGraphic),
                    this.mapEditor.viewport.on("pointerdown", this.onPointerDown.bind(this)),
                    this.mapEditor.viewport.on("pointerup", this.onPointerUp.bind(this)),
                    this.mapEditor.viewport.on("pointerupoutside", this.onPointerUp.bind(this)),
                    this.mapEditor.viewport.on("pointercancel", this.onPointerCancel.bind(this)),
                    this.mapEditor.viewport.on("pointermove", this.onPointerMove.bind(this)),
                    this.addOneTimeKey(c.a.DELETE, this.onPressDelete.bind(this)),
                    this.addOneTimeKey(c.a.BACKSPACE, this.onPressDelete.bind(this)),
                    this.addOneTimeKey(c.a.SHIFT, (function() {
                        return i.shiftPressed = !0
                    }
                    ), (function() {
                        return i.shiftPressed = !1
                    }
                    )),
                    this.addOneTimeKey(c.a.ALT, (function() {
                        return i.altPressed = !0
                    }
                    ), (function() {
                        return i.altPressed = !1
                    }
                    )),
                    this.addOneTimeKey(c.a.CONTROL, (function() {
                        return i.ctrlPressed = !0
                    }
                    ), (function() {
                        return i.ctrlPressed = !1
                    }
                    )),
                    this.addOneTimeKey(c.a.O, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.P, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.M, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.D, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.V, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.R, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.Z, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.H, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.T, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.A, this.onToolHotkey.bind(this)),
                    this.addOneTimeKey(c.a.C, this.onCPressed.bind(this)),
                    this.addOneTimeKey(c.a.S, this.onSPressed.bind(this)),
                    this.addOneTimeKey(c.a.Y, this.onYPressed.bind(this))
                }
                return Object(s.a)(t, [{
                    key: "checkPermissions",
                    value: function() {
                        return u.a.hasPermission(r.f.vueData.user, r.f.vueData.map)
                    }
                }, {
                    key: "onPointerDown",
                    value: function(e) {
                        if (this.keysDisabled && this.enableKeyBindings(),
                        0 == e.data.button) {
                            var t = e.data.global;
                            if (this.nextClickCb)
                                return this.nextClickCb(e.data.getLocalPosition(this.mapEditor.viewport)),
                                void (this.nextClickCb = null);
                            if (r.f.vueData.pointerMode != r.b.Pan && r.f.vueData.pointerMode != r.b.Zoom)
                                ;
                            else if (r.f.vueData.pointerMode == r.b.Zoom) {
                                this.startViewportScale = this.mapEditor.viewport.scale.x;
                                var i = e.data.getLocalPosition(this.mapEditor.viewport);
                                this.mapEditor.viewport.moveCenter(i)
                            }
                            this.pointerDownTime = Date.now(),
                            this.pointerStartPosition.copyFrom(t),
                            this.pointerLastPosition.copyFrom(t);
                            var a = this.mapEditor.app.renderer.plugins.interaction.hitTest(e.data.global);
                            t = e.data.getLocalPosition(this.mapEditor.viewport),
                            this.mapEditor.handlePointerDown(t, a)
                        }
                    }
                }, {
                    key: "onPointerMove",
                    value: function(t) {
                        if (this.mapEditor.getPointerInfo().visible && this.mapEditor.getPointerInfo().position.copyFrom(t.data.global),
                        0 != this.pointerDownTime || this.mapEditor.tool)
                            if (r.f.vueData.pointerMode == r.b.Move || this.mapEditor.tool) {
                                var i = t.data.getLocalPosition(this.mapEditor.viewport)
                                  , a = t.data.getLocalPosition(this.mapEditor.viewport, null, this.pointerLastPosition)
                                  , n = {
                                    x: i.x - a.x,
                                    y: i.y - a.y
                                };
                                this.pointerLastPosition.copyFrom(t.data.global);
                                var s = this.mapEditor.app.renderer.plugins.interaction.hitTest(t.data.global);
                                this.mapEditor.handlePointerMove(i, n, s)
                            } else if (r.f.vueData.pointerMode == r.b.Selection || r.f.vueData.pointerMode == r.b.PointSelection)
                                this.pointerLastPosition.copyFrom(t.data.global),
                                Date.now() - this.pointerDownTime >= 100 && (this.selecting = !0,
                                this.redrawSelectionBox());
                            else if (r.f.vueData.pointerMode == r.b.ShapeSquare) {
                                if (!this.drawingShape)
                                    return;
                                this.pointerLastPosition.copyFrom(t.data.global);
                                var o = t.data.getLocalPosition(this.mapEditor.viewport)
                                  , c = t.data.getLocalPosition(this.mapEditor.viewport, null, this.pointerStartPosition);
                                this.mapEditor.handleDrawShape(c, o)
                            } else if (r.f.vueData.pointerMode == r.b.Zoom) {
                                var u = t.data.global
                                  , h = this.pointerStartPosition
                                  , d = l.a.distance(u, h)
                                  , p = Math.abs(l.a.angleTo(h.x, h.y, u.x, u.y) * e.RAD_TO_DEG)
                                  , v = p > 90
                                  , f = d * (v ? l.a.delta(90, 180, p) : 1 - l.a.delta(0, 90, p)) * (v ? -1 : 1) / 250;
                                this.mapEditor.viewport.setZoom(Math.max(.01, this.startViewportScale + f), !0),
                                this.pointerLastPosition.copyFrom(t.data.global)
                            } else
                                this.pointerLastPosition.copyFrom(t.data.global)
                    }
                }, {
                    key: "redrawSelectionBox",
                    value: function() {
                        var e = this.selectionGraphic;
                        e.clear();
                        var t = Math.abs(this.pointerStartPosition.x - this.pointerLastPosition.x)
                          , i = Math.abs(this.pointerStartPosition.y - this.pointerLastPosition.y)
                          , a = Math.min(this.pointerStartPosition.x, this.pointerLastPosition.x)
                          , n = Math.min(this.pointerStartPosition.y, this.pointerLastPosition.y);
                        e.beginFill(r.f.vueData.pointerMode == r.b.Selection ? 4494591 : 16711680, .1).drawRect(a, n, t, i).moveTo(a, n).lineStyle(1, r.f.vueData.pointerMode == r.b.Selection ? 4494591 : 16711680, .8).lineTo(a + t, n).lineTo(a + t, n + i).lineTo(a, n + i).lineTo(a, n)
                    }
                }, {
                    key: "onPointerCancel",
                    value: function() {
                        this.pointerDownTime = 0,
                        this.mapEditor.handlePointerCancel(),
                        this.selecting ? this.selecting = !1 : this.drawingShape && (this.mapEditor.handleDrawShapeCancel(),
                        this.drawingShape = !1)
                    }
                }, {
                    key: "onPointerUp",
                    value: function(e) {
                        if (0 != this.pointerDownTime) {
                            var t = Date.now() - this.pointerDownTime;
                            this.pointerDownTime = 0;
                            var i = l.a.distance(this.pointerStartPosition, this.pointerLastPosition);
                            this.mapEditor.handlePointerUp(),
                            t <= 250 && i < 10 && this.onClick(e),
                            this.selecting ? this.selecting = !1 : this.drawingShape && (this.mapEditor.handleDrawShapeComplete(),
                            this.drawingShape = !1)
                        }
                    }
                }, {
                    key: "onClick",
                    value: function(e) {
                        e.stopPropagation();
                        var t = e.data.getLocalPosition(this.mapEditor.viewport);
                        if (this.nextClickCb)
                            return this.nextClickCb(t),
                            void (this.nextClickCb = null);
                        var i = e.currentTarget;
                        switch (r.f.vueData.pointerMode) {
                        case r.b.Creation:
                            i = this.mapEditor.app.renderer.plugins.interaction.hitTest(e.data.global),
                            this.mapEditor.handleCreationClick(t, i);
                            break;
                        case r.b.Selection:
                        case r.b.PointSelection:
                        case r.b.Rotate:
                            i = this.mapEditor.app.renderer.plugins.interaction.hitTest(e.data.global),
                            this.mapEditor.handleSelectionClick(t, i)
                        }
                    }
                }, {
                    key: "selecting",
                    get: function() {
                        return this._selecting
                    },
                    set: function(e) {
                        var t = e != this._selecting;
                        if (this._selecting = e,
                        !e && t) {
                            this.selectionGraphic.clear();
                            var i = Math.abs(this.pointerStartPosition.x - this.pointerLastPosition.x)
                              , a = Math.abs(this.pointerStartPosition.y - this.pointerLastPosition.y)
                              , n = Math.min(this.pointerStartPosition.x, this.pointerLastPosition.x)
                              , s = Math.min(this.pointerStartPosition.y, this.pointerLastPosition.y);
                            this.mapEditor.handleSelectBox(n, s, i, a)
                        }
                    }
                }, {
                    key: "addOneTimeKey",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                          , a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return this.oneTimeKeys[e] = new o.a(e,t,i,a),
                        this.keys.push(this.oneTimeKeys[e]),
                        this.oneTimeKeys[e]
                    }
                }, {
                    key: "disableKeyBindings",
                    value: function() {
                        this.releaseAllKeys();
                        var e, t = Object(a.a)(this.keys);
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                e.value.disable()
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        this.keysDisabled = !0
                    }
                }, {
                    key: "enableKeyBindings",
                    value: function() {
                        var e, t = Object(a.a)(this.keys);
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                e.value.enable()
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        this.keysDisabled = !1
                    }
                }, {
                    key: "onPressDelete",
                    value: function() {
                        this.mapEditor.onPressDelete()
                    }
                }, {
                    key: "onToolHotkey",
                    value: function(e) {
                        if (e == c.a.O && this.ctrlPressed)
                            r.f.vueData.openMapDialog();
                        else if (e == c.a.Z && this.ctrlPressed)
                            r.f.vueData.emit("requestUndo");
                        else if (e == c.a.V && this.ctrlPressed)
                            r.f.vueData.emit("requestPaste");
                        else {
                            var t, i = Object(a.a)(r.f.vueData.tools);
                            try {
                                for (i.s(); !(t = i.n()).done; ) {
                                    var n = t.value;
                                    if (n.keyCode == e) {
                                        r.f.vueData.selectTool(n.pointerMode);
                                        break
                                    }
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                        }
                    }
                }, {
                    key: "onCPressed",
                    value: function() {
                        this.ctrlPressed && r.f.vueData.emit("requestCopy")
                    }
                }, {
                    key: "onSPressed",
                    value: function() {
                        this.ctrlPressed && r.f.vueData.emit("requestSave")
                    }
                }, {
                    key: "onYPressed",
                    value: function() {
                        this.ctrlPressed && r.f.vueData.emit("requestRedo")
                    }
                }, {
                    key: "releaseAllKeys",
                    value: function() {
                        var e, t = Object(a.a)(this.keys);
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                var i = e.value;
                                i.upHandler({
                                    keyCode: i.code,
                                    preventDefault: function() {}
                                })
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }]),
                t
            }())
        }
        ).call(this, i("22a2"))
    },
    "2af5": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return s
        }
        ));
        var a = i("d4ec")
          , n = i("bee2")
          , s = function() {
            function e() {
                Object(a.a)(this, e)
            }
            return Object(n.a)(e, null, [{
                key: "get",
                value: function(t) {
                    return e._areas["number" == typeof t ? t : t.valueOf()]
                }
            }, {
                key: "getAll",
                value: function() {
                    return e._areas
                }
            }, {
                key: "getGrouped",
                value: function() {
                    return e._grouped
                }
            }]),
            e
        }();
        s._areas = {
            1: {
                id: 1,
                name: "cold",
                title: "Cold",
                color: 1.25
            },
            2: {
                id: 2,
                name: "warm",
                title: "Warm",
                color: .75
            },
            4: {
                id: 4,
                name: "shallow",
                title: "Shallow",
                color: 0
            },
            8: {
                id: 8,
                name: "deep",
                title: "Deep",
                color: 13906743
            },
            16: {
                id: 16,
                name: "fresh",
                title: "Fresh",
                color: 5163081
            },
            32: {
                id: 32,
                name: "salt",
                title: "Salt",
                color: 22271
            }
        },
        s._grouped = [{
            1: s._areas[1],
            2: s._areas[2]
        }, {
            4: s._areas[4],
            8: s._areas[8]
        }, {
            16: s._areas[16],
            32: s._areas[32]
        }]
    },
    "2cbb": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return l
        }
        ));
        var a = i("1da1")
          , n = i("d4ec")
          , s = i("bee2")
          , r = (i("96cf"),
        i("bc3a"))
          , o = i.n(r)
          , c = i("b4d9").f.API_URL + "/auth"
          , l = function() {
            function e() {
                Object(n.a)(this, e)
            }
            return Object(s.a)(e, [{
                key: "login",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i) {
                        var a, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = null,
                                    e.prev = 1,
                                    e.next = 4,
                                    o.a.post(c + "/local/signin", {
                                        email: t,
                                        password: i
                                    });
                                case 4:
                                    n = e.sent.data,
                                    (a = n.user).session_token = n.token,
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e.catch(1),
                                    console.error(e.t0);
                                case 12:
                                    return e.abrupt("return", a);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 9]])
                    }
                    )));
                    return function(t, i) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "logout",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.get(c + "/logout");
                                case 2:
                                    e.sent.data;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getMe",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                        var t, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = null,
                                    e.prev = 1,
                                    e.next = 4,
                                    o.a.get(c + "/me");
                                case 4:
                                    t = e.sent.data,
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(1),
                                    console.error(e.t0);
                                case 10:
                                    return i = t ? t.user : null,
                                    t && (i.session_token = t.token),
                                    e.abrupt("return", i);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 7]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "signup",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i, a) {
                        var n, s;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.post(c, {
                                        email: a,
                                        password: i,
                                        username: t
                                    });
                                case 2:
                                    return n = e.sent.data,
                                    (s = n.user).session_token = n.token,
                                    e.abrupt("return", s);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i, a) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "hasPermission",
                value: function(e, t) {
                    return !((!e || t && t.id && e.id != t.user_id) && (e || t && t.id))
                }
            }]),
            e
        }()
    },
    "309f": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return k
            }
            ));
            var a = i("2909")
              , n = i("5530")
              , s = i("b85c")
              , r = i("1da1")
              , o = i("d4ec")
              , c = i("bee2")
              , l = i("45eb")
              , u = i("7e84")
              , h = i("262e")
              , d = i("2caf")
              , p = (i("96cf"),
            i("18a5"),
            i("d3b7"),
            i("3ca3"),
            i("ddb0"),
            i("53ce"))
              , v = i("b4d9")
              , f = i("dfb9")
              , g = i("4d68")
              , b = e.Container
              , y = e.Text
              , m = e.TextStyle
              , w = e.Sprite
              , k = function(e) {
                Object(h.a)(i, e);
                var t = Object(d.a)(i);
                function i(e, a, n, s, r, c) {
                    var l;
                    return Object(o.a)(this, i),
                    (l = t.call(this, e, a, s, r, c))._settings = {
                        foodIds: []
                    },
                    l.foodSprites = {},
                    l.updateGlobalTimeout = 0,
                    l.infoContainer = new b,
                    l.addChild(l.infoContainer),
                    l.foodsContainer = new b,
                    l.infoContainer.addChild(l.foodsContainer),
                    l.text = new y("",i.textStyle.clone()),
                    l.text.style.wordWrapWidth = l.width,
                    l.text.anchor.set(0, .5),
                    l.text.resolution = .5,
                    l.updateTextSize(),
                    l.infoContainer.addChild(l.text),
                    l.setSettings(n),
                    l.type = v.c.FoodSpawn,
                    l
                }
                return Object(c.a)(i, [{
                    key: "refreshArea",
                    value: function() {
                        var e = this;
                        this._settings.area = this.size.width * this.size.height / 100,
                        this._settings.count = Math.floor(Math.min(Math.max(0, this._settings.area / v.f.foodDensity), this._settings.count)),
                        this.updateText(),
                        clearTimeout(this.updateGlobalTimeout),
                        this.updateGlobalTimeout = setTimeout((function() {
                            v.f.vueData.foodSpawnSettings.count = e._settings.count,
                            v.f.vueData.foodSpawnSettings.area = e._settings.area
                        }
                        ), 250)
                    }
                }, {
                    key: "getSettings",
                    value: function() {
                        return this._settings
                    }
                }, {
                    key: "setSettings",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                            var i, o, c, l, u, h, d, p = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        i = Object(s.a)(this._settings.foodIds),
                                        e.prev = 1,
                                        c = function() {
                                            var e = o.value;
                                            if (t.foodIds.some((function(t) {
                                                return t == e
                                            }
                                            )))
                                                return "continue";
                                            p.foodSprites[e] && (p.foodSprites[e].destroy(),
                                            delete p.foodSprites[e])
                                        }
                                        ,
                                        i.s();
                                    case 4:
                                        if ((o = i.n()).done) {
                                            e.next = 10;
                                            break
                                        }
                                        if ("continue" !== c()) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("continue", 8);
                                    case 8:
                                        e.next = 4;
                                        break;
                                    case 10:
                                        e.next = 15;
                                        break;
                                    case 12:
                                        e.prev = 12,
                                        e.t0 = e.catch(1),
                                        i.e(e.t0);
                                    case 15:
                                        return e.prev = 15,
                                        i.f(),
                                        e.finish(15);
                                    case 18:
                                        this.updateFoodsSize(),
                                        l = [],
                                        u = Object(s.a)(t.foodIds),
                                        e.prev = 21,
                                        d = function() {
                                            var e = h.value
                                              , i = e == t.foodIds[t.foodIds.length - 1];
                                            if (p._settings.foodIds.some((function(t) {
                                                return t == e
                                            }
                                            )) || p.foodSprites[e])
                                                return "continue";
                                            var a = new Promise(function() {
                                                var t = Object(r.a)(regeneratorRuntime.mark((function t(a, n) {
                                                    var s, r, o, c;
                                                    return regeneratorRuntime.wrap((function(t) {
                                                        for (; ; )
                                                            switch (t.prev = t.next) {
                                                            case 0:
                                                                return t.prev = 0,
                                                                t.next = 3,
                                                                g.a.getFood(e);
                                                            case 3:
                                                                return s = t.sent,
                                                                r = g.a.getAssetPath(s),
                                                                t.next = 7,
                                                                f.a.getRemoteTexture(r, v.f.mapMakerPath + "/" + r, i);
                                                            case 7:
                                                                o = t.sent,
                                                                c = new w(o),
                                                                p.foodsContainer.addChild(c),
                                                                p.foodSprites[e] = c,
                                                                a(),
                                                                t.next = 18;
                                                                break;
                                                            case 14:
                                                                t.prev = 14,
                                                                t.t0 = t.catch(0),
                                                                console.error(t.t0),
                                                                n();
                                                            case 18:
                                                            case "end":
                                                                return t.stop()
                                                            }
                                                    }
                                                    ), t, null, [[0, 14]])
                                                }
                                                )));
                                                return function(e, i) {
                                                    return t.apply(this, arguments)
                                                }
                                            }());
                                            l.push(a)
                                        }
                                        ,
                                        u.s();
                                    case 24:
                                        if ((h = u.n()).done) {
                                            e.next = 30;
                                            break
                                        }
                                        if ("continue" !== d()) {
                                            e.next = 28;
                                            break
                                        }
                                        return e.abrupt("continue", 28);
                                    case 28:
                                        e.next = 24;
                                        break;
                                    case 30:
                                        e.next = 35;
                                        break;
                                    case 32:
                                        e.prev = 32,
                                        e.t1 = e.catch(21),
                                        u.e(e.t1);
                                    case 35:
                                        return e.prev = 35,
                                        u.f(),
                                        e.finish(35);
                                    case 38:
                                        if (this._settings = Object(n.a)({}, t),
                                        this._settings.foodIds = Object(a.a)(t.foodIds),
                                        this.refreshArea(),
                                        !(l.length > 0)) {
                                            e.next = 44;
                                            break
                                        }
                                        return e.next = 44,
                                        Promise.all(l);
                                    case 44:
                                        this.updateText(),
                                        this.updateFoodsSize();
                                    case 46:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[1, 12, 15, 18], [21, 32, 35, 38]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "updateTextSize",
                    value: function() {
                        this.text.scale.set(this.viewport.worldScreenWidth / 7e3),
                        this.text.style.wordWrapWidth = this.width / (this.viewport.worldScreenWidth / 7e3)
                    }
                }, {
                    key: "updateFoodsSize",
                    value: function() {
                        for (var e = this.viewport.worldScreenWidth / 7e3, t = 100 * e, i = 0; i < this.foodsContainer.children.length; i++) {
                            var a = this.foodsContainer.children[i]
                              , n = a.width / a.height
                              , s = a.height - t;
                            if (0 != t)
                                if (a.height -= s,
                                a.width = a.height * n,
                                0 == i)
                                    a.position.set(0, 0);
                                else {
                                    var r = this.foodsContainer.children[i - 1];
                                    a.position.set(r.position.x + r.width + 10 * e, 0)
                                }
                        }
                        this.text.position.set(this.foodsContainer.width + 10 * e, this.infoContainer.height / 2),
                        this.infoContainer.position.set(this.polygonBounds.x + this.polygonBounds.width / 2, this.polygonBounds.y + this.polygonBounds.height / 2),
                        this.infoContainer.pivot.set(this.infoContainer.width / 2, this.infoContainer.height / 2)
                    }
                }, {
                    key: "onViewportResize",
                    value: function() {
                        Object(l.a)(Object(u.a)(i.prototype), "onViewportResize", this).call(this),
                        this.updateFoodsSize(),
                        this.updateTextSize()
                    }
                }, {
                    key: "updatePoints",
                    value: function() {
                        Object(l.a)(Object(u.a)(i.prototype), "updatePoints", this).call(this),
                        this.updateFoodsSize(),
                        this.refreshArea(),
                        this.text.style.wordWrapWidth = this.width / (this.viewport.worldScreenWidth / 7e3)
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(l.a)(Object(u.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.settings = f.a.deepCopy(this._settings),
                        e
                    }
                }, {
                    key: "updateText",
                    value: function() {
                        this.text.text = this._settings.foodIds.length > 0 ? "x" + this._settings.count : "No foods selected"
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var a = e;
                        return new i(a.position,a.size,a.settings,t.parent,t.pointsLayer,t.viewport)
                    }
                }]),
                i
            }(p.a);
            k.textStyle = new m({
                fill: 16777215,
                fontSize: 64,
                wordWrap: !0,
                align: "center"
            })
        }
        ).call(this, i("22a2"))
    },
    "332f": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return l
        }
        ));
        var a = i("1da1")
          , n = i("d4ec")
          , s = i("bee2")
          , r = (i("96cf"),
        i("99af"),
        i("498a"),
        i("bc3a"))
          , o = i.n(r)
          , c = i("b4d9").f.API_URL + "/maps"
          , l = function() {
            function e() {
                Object(n.a)(this, e)
            }
            return Object(s.a)(e, [{
                key: "getAll",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i, a, n, s, r, l) {
                        var u, h;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return u = "".concat(c, "?page=").concat(t, "&count=").concat(i, "&orderBy=").concat(a, "&direction=").concat(n, "&getEmpty=").concat(s, "&period=").concat(r),
                                    l && "" != l.trim() && (u += "&tag=".concat(l)),
                                    e.next = 4,
                                    o.a.get(u);
                                case 4:
                                    return h = e.sent.data,
                                    e.abrupt("return", h);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i, a, n, s, r, o) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAllByUserId",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i, a, n, s, r, l) {
                        var u, h;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return u = "".concat(c, "/u/").concat(t, "?page=").concat(i, "&count=").concat(a, "&orderBy=").concat(n, "&direction=").concat(s, "&period=").concat(r),
                                    l && "" != l.trim() && (u += "&tag=".concat(l)),
                                    e.next = 4,
                                    o.a.get(u);
                                case 4:
                                    return h = e.sent.data,
                                    e.abrupt("return", h);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i, a, n, s, r, o) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getById",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.get("".concat(c, "/").concat(t));
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getByStringId",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.get("".concat(c, "/s/").concat(t));
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "create",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.post("".concat(c), t);
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "save",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.put("".concat(c, "/").concat(t.id), t);
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "delete",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.delete("".concat(c, "/").concat(t.id));
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "like",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.post("".concat(c, "/").concat(t.id, "/like"));
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "dislike",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.post("".concat(c, "/").concat(t.id, "/dislike"));
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getPacks",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = "".concat(c, "/").concat(t, "/packs"),
                                    e.next = 3,
                                    o.a.get(i);
                                case 3:
                                    return a = e.sent.data,
                                    e.abrupt("return", a);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "getEmptyMap",
                value: function() {
                    return {
                        clonable: !1,
                        permissions: 1,
                        public: !0,
                        title: "Untitled",
                        description: "",
                        string_id: ""
                    }
                }
            }]),
            e
        }()
    },
    "36c5": function(e, t, i) {
        "use strict";
        i("c98d")
    },
    3728: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return p
            }
            ));
            var a = i("b85c")
              , n = i("d4ec")
              , s = i("bee2")
              , r = i("45eb")
              , o = i("7e84")
              , c = i("262e")
              , l = i("2caf")
              , u = i("8a97")
              , h = i("b4d9")
              , d = e.Point
              , p = function(e) {
                Object(c.a)(i, e);
                var t = Object(l.a)(i);
                function i(e, a, s, r, o) {
                    var c;
                    return Object(n.a)(this, i),
                    (c = t.call(this, e, a, s, r, o)).type = h.c.Sky,
                    c
                }
                return Object(s.a)(i, [{
                    key: "redraw",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "redraw", this).call(this)
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var n, s = e, r = [], o = Object(a.a)(s.points);
                        try {
                            for (o.s(); !(n = o.n()).done; ) {
                                var c = n.value;
                                r.push(new d(c.x,c.y))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return new i(r,s.colors,t.parent,t.pointsLayer,t.viewport)
                    }
                }]),
                i
            }(u.a)
        }
        ).call(this, i("22a2"))
    },
    "39c5": function(e, t, i) {
        "use strict";
        i("5895")
    },
    "3a92": function(e, t, i) {
        "use strict";
        (function(e) {
            i("b0c0");
            var t = e.LoaderResource
              , a = e.SpritesheetLoader
              , n = e.Spritesheet;
            e.SpritesheetLoader.use = function(e, i) {
                var s = e.name + "_image";
                if (e.data && e.type === t.TYPE.JSON && e.data.frames && !this.resources[s]) {
                    var r = {
                        crossOrigin: e.crossOrigin,
                        metadata: e.metadata.imageMetadata,
                        parentResource: e
                    }
                      , o = a.getResourcePath(e, this.baseUrl);
                    e.url.indexOf("?") > -1 && (o += e.url.substr(e.url.indexOf("?"))),
                    this.add(s, o, r, (function(t) {
                        if (t.error)
                            i(t.error);
                        else {
                            var a = new n(t.texture.baseTexture,e.data,e.url);
                            a.parse((function() {
                                e.spritesheet = a,
                                e.textures = a.textures,
                                i()
                            }
                            ))
                        }
                    }
                    ))
                } else
                    i()
            }
            ,
            e.Transform.prototype.updateSkew = function() {
                this._cx = Math.cos(this._rotation + this.skew.y),
                this._sx = Math.sin(this._rotation),
                this._cy = -Math.sin(this._rotation - this.skew.x),
                this._sy = Math.cos(this._rotation),
                this._localID++
            }
        }
        ).call(this, i("22a2"))
    },
    4116: function(e, t, i) {
        "use strict";
        var a = i("1da1")
          , n = i("b85c")
          , s = i("d4ec")
          , r = i("bee2")
          , o = (i("96cf"),
        i("8fff"))
          , c = (i("99af"),
        i("bc3a"))
          , l = i.n(c)
          , u = i("b4d9").f.API_URL + "/props"
          , h = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(r.a)(e, [{
                key: "delete",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.delete("".concat(u, "/").concat(t.id));
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "getAll",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i, a, n) {
                        var s, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = "".concat(u, "?page=").concat(t, "&count=").concat(i, "&orderBy=").concat(a, "&direction=").concat(n, "}"),
                                    e.next = 3,
                                    l.a.get(s);
                                case 3:
                                    return r = e.sent.data,
                                    e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i, a, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getById",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.get("".concat(u, "/").concat(t));
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "create",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.post("".concat(u), t);
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "save",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.put("".concat(u, "/").concat(t.id), t);
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }()
          , d = i("267c")
          , p = i("12e2");
        i.d(t, "a", (function() {
            return v
        }
        ));
        var v = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(r.a)(e, null, [{
                key: "clear",
                value: function() {
                    this.propsById = {}
                }
            }, {
                key: "addProps",
                value: function(e) {
                    var t, i = Object(n.a)(e);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var a = t.value;
                            this.propsById[a.id] = a
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "getProp",
                value: function() {
                    var t = Object(a.a)(regeneratorRuntime.mark((function t(i) {
                        var a, n;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.propsById[i]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", this.propsById[i]);
                                case 2:
                                    return t.next = 4,
                                    h.getById(i);
                                case 4:
                                    if (a = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 7:
                                    return t.next = 9,
                                    o.a.getById(a.pack_id);
                                case 9:
                                    return n = t.sent,
                                    e.addProps(n.props),
                                    t.abrupt("return", a);
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAssetPath",
                value: function(e) {
                    return "assets/packs/" + e.pack_id + "/props/" + e.asset
                }
            }, {
                key: "getPropSync",
                value: function(e) {
                    return this.propsById[e] ? this.propsById[e] : null
                }
            }, {
                key: "propClass",
                value: function(e) {
                    switch (e) {
                    case 1:
                        return d.a;
                    default:
                        return p.a
                    }
                }
            }]),
            e
        }();
        v.propsById = {}
    },
    "422e": function(e, t, i) {
        "use strict";
        i("2367")
    },
    "43e7": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return r
            }
            ));
            var a = i("d4ec")
              , n = i("bee2")
              , s = (i("d3b7"),
            i("25f0"),
            e.Point)
              , r = function() {
                function e() {
                    Object(a.a)(this, e)
                }
                return Object(n.a)(e, null, [{
                    key: "get",
                    value: function(t) {
                        return e.designs[t.toString()]
                    }
                }]),
                e
            }();
            r.designs = {
                Square: [new s(0,0), new s(1,0), new s(1,1), new s(0,1)]
            }
        }
        ).call(this, i("22a2"))
    },
    "467b": function(e, t, i) {},
    "4cc8": function(e, t, i) {},
    "4d68": function(e, t, i) {
        "use strict";
        var a = i("1da1")
          , n = i("b85c")
          , s = i("d4ec")
          , r = i("bee2")
          , o = (i("96cf"),
        i("8fff"))
          , c = (i("99af"),
        i("bc3a"))
          , l = i.n(c)
          , u = i("b4d9").f.API_URL + "/foods"
          , h = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(r.a)(e, [{
                key: "delete",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.delete("".concat(u, "/").concat(t.id));
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "getAll",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i, a, n) {
                        var s, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = "".concat(u, "?page=").concat(t, "&count=").concat(i, "&orderBy=").concat(a, "&direction=").concat(n, "}"),
                                    e.next = 3,
                                    l.a.get(s);
                                case 3:
                                    return r = e.sent.data,
                                    e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i, a, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getById",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.get("".concat(u, "/").concat(t));
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "create",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.post("".concat(u), t);
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "save",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.put("".concat(u, "/").concat(t.id), t);
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }();
        i.d(t, "a", (function() {
            return d
        }
        ));
        var d = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(r.a)(e, null, [{
                key: "clear",
                value: function() {
                    this.foodsById = {}
                }
            }, {
                key: "addFoods",
                value: function(e) {
                    var t, i = Object(n.a)(e);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var a = t.value;
                            this.foodsById[a.id] = a
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "getFood",
                value: function() {
                    var t = Object(a.a)(regeneratorRuntime.mark((function t(i) {
                        var a, n;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.foodsById[i]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", this.foodsById[i]);
                                case 2:
                                    return t.next = 4,
                                    h.getById(i);
                                case 4:
                                    if (a = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 7:
                                    return t.next = 9,
                                    o.a.getById(a.pack_id);
                                case 9:
                                    return n = t.sent,
                                    e.addFoods(n.foods),
                                    t.abrupt("return", a);
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAssetPath",
                value: function(e) {
                    return "assets/packs/" + e.pack_id + "/food/" + e.asset
                }
            }]),
            e
        }();
        d.foodsById = {}
    },
    "51ff": function(e, t, i) {
        "use strict";
        var a = i("1da1")
          , n = i("d4ec")
          , s = i("bee2")
          , r = i("262e")
          , o = i("2caf")
          , c = (i("96cf"),
        i("9ab4"))
          , l = i("60a3")
          , u = i("9935")
          , h = i("2cbb")
          , d = i("b4d9")
          , p = function(e) {
            Object(r.a)(i, e);
            var t = Object(o.a)(i);
            function i() {
                var e;
                return Object(n.a)(this, i),
                (e = t.apply(this, arguments)).title = "Login",
                e.username = "",
                e.password = "",
                e.authService = new h.a,
                e.displayError = !1,
                e.loading = !1,
                e
            }
            return Object(s.a)(i, [{
                key: "mounted",
                value: function() {
                    d.f.inputManager.disableKeyBindings(),
                    window.setTimeout((function() {
                        document.getElementById("username").focus()
                    }
                    ), 0),
                    this.init()
                }
            }, {
                key: "destroyed",
                value: function() {
                    d.f.inputManager.enableKeyBindings()
                }
            }, {
                key: "init",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "login",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.loading = !0,
                                    this.displayError = !1,
                                    e.next = 4,
                                    this.authService.login(this.username, this.password);
                                case 4:
                                    (t = e.sent) ? (d.f.vueData.setUser(t),
                                    this.$close(!0)) : this.displayError = !0,
                                    this.loading = !1;
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "cancel",
                value: function() {
                    this.$close(!1)
                }
            }]),
            i
        }(u.DialogComponent)
          , v = p = Object(c.a)([l.a], p)
          , f = i("2877")
          , g = Object(f.a)(v, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "login-dialog dialog-mask",
                on: {
                    mousedown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) ? null : "button"in t && 0 !== t.button ? null : t.target !== t.currentTarget ? null : e.cancel(t)
                    }
                }
            }, [i("div", {
                staticClass: "dialog-content"
            }, [i("header", [e._v(e._s(e.title))]), i("div", {
                staticClass: "form-group"
            }, [i("div", {
                staticClass: "form-input"
            }, [i("label", {
                staticClass: "title",
                attrs: {
                    for: "username"
                }
            }, [e._v("Deeeep.io user or email")]), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.username,
                    expression: "username"
                }],
                attrs: {
                    id: "username",
                    type: "text"
                },
                domProps: {
                    value: e.username
                },
                on: {
                    keypress: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.login(t)
                    },
                    input: function(t) {
                        t.target.composing || (e.username = t.target.value)
                    }
                }
            })]), i("div", {
                staticClass: "form-input"
            }, [i("label", {
                staticClass: "title",
                attrs: {
                    for: "password"
                }
            }, [e._v("Password")]), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.password,
                    expression: "password"
                }],
                attrs: {
                    id: "password",
                    type: "password"
                },
                domProps: {
                    value: e.password
                },
                on: {
                    keypress: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.login(t)
                    },
                    input: function(t) {
                        t.target.composing || (e.password = t.target.value)
                    }
                }
            })])]), e.displayError ? i("div", {
                staticClass: "message error"
            }, [e._v(" Couldn't login with the data you provided, please try again ")]) : e._e(), i("footer", {
                staticClass: "children-inline text-center"
            }, [i("button", {
                staticClass: "btn",
                on: {
                    click: e.cancel
                }
            }, [e._v("Cancel")]), i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: e.loading
                },
                on: {
                    click: e.login
                }
            }, [e._v("Login")])])])])
        }
        ), [], !1, null, null, null);
        t.a = g.exports
    },
    "53ce": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return p
            }
            ));
            var a = i("d4ec")
              , n = i("bee2")
              , s = i("45eb")
              , r = i("7e84")
              , o = i("262e")
              , c = i("2caf")
              , l = (i("b0c0"),
            i("9bf5"))
              , u = i("b4d9")
              , h = i("dfb9")
              , d = e.Point
              , p = function(e) {
                Object(o.a)(i, e);
                var t = Object(c.a)(i);
                function i(e, n, s, r, o) {
                    var c;
                    Object(a.a)(this, i);
                    var l = [new d(e.x,e.y), new d(e.x + n.width,e.y), new d(e.x + n.width,e.y + n.height), new d(e.x,e.y + n.height)];
                    return (c = t.call(this, l, s, r, o))._size = {
                        width: n.width,
                        height: n.height
                    },
                    c._polygonPosition = new d(e.x,e.y),
                    c
                }
                return Object(n.a)(i, [{
                    key: "polygonPosition",
                    get: function() {
                        return this._polygonPosition
                    },
                    set: function(e) {
                        this._polygonPosition.copyFrom(e),
                        this.updatePoints()
                    }
                }, {
                    key: "size",
                    get: function() {
                        return this._size
                    },
                    set: function(e) {
                        this._size.width = e.width,
                        this._size.height = e.height,
                        this.updatePoints()
                    }
                }, {
                    key: "updatePoints",
                    value: function() {
                        this.points[0].set(this._polygonPosition.x, this._polygonPosition.y),
                        this.points[1].set(this._polygonPosition.x + this._size.width, this._polygonPosition.y),
                        this.points[2].set(this._polygonPosition.x + this._size.width, this._polygonPosition.y + this._size.height),
                        this.points[3].set(this._polygonPosition.x, this._polygonPosition.y + this._size.height),
                        Object(s.a)(Object(r.a)(i.prototype), "updatePoints", this).call(this)
                    }
                }, {
                    key: "onPointerMove",
                    value: function(e) {
                        if (0 != this.selectedPoints.length && 0 != this.pointerDownTime) {
                            this.isMovingPoints = !0;
                            var t = this.selectedPoints[0]
                              , i = e.data.getLocalPosition(this.viewport)
                              , a = e.data.getLocalPosition(this.viewport, null, this.pointerLastPosition);
                            this.pointerLastPosition.copyFrom(e.data.global);
                            var n = {
                                x: i.x - a.x,
                                y: i.y - a.y
                            };
                            switch (n.x = Math.max(0 - t.x, Math.min(10 * u.f.vueData.worldSize.width - t.x, n.x)),
                            n.y = Math.max(0 - t.y, Math.min(10 * u.f.vueData.worldSize.height - t.y, n.y)),
                            i.x < 0 ? n.x = Math.min(n.x, 0) : i.x > 10 * u.f.vueData.worldSize.width && (n.x = Math.max(n.x, 0)),
                            i.y < 0 ? n.y = Math.min(n.y, 0) : i.y > 10 * u.f.vueData.worldSize.height && (n.y = Math.max(n.y, 0)),
                            parseInt(t.name)) {
                            case 0:
                                var s = Math.min(n.x, this._size.width - 10);
                                this._size.width -= s,
                                this._polygonPosition.x += s;
                                var r = Math.min(n.y, this._size.height - 10);
                                this._size.height -= r,
                                this._polygonPosition.y += r;
                                break;
                            case 1:
                                this._size.width = Math.max(10, this._size.width + n.x);
                                var o = Math.min(n.y, this._size.height - 10);
                                this._size.height -= o,
                                this._polygonPosition.y += o;
                                break;
                            case 2:
                                this._size.width = Math.max(10, this._size.width + n.x),
                                this._size.height = Math.max(10, this._size.height + n.y);
                                break;
                            case 3:
                                var c = Math.min(n.x, this._size.width - 10);
                                this._size.width -= c,
                                this._polygonPosition.x += c,
                                this._size.height = Math.max(10, this._size.height + n.y)
                            }
                            this.updatePoints()
                        }
                    }
                }, {
                    key: "move",
                    value: function(e, t) {
                        this._polygonPosition.x += e,
                        this._polygonPosition.y += t,
                        this.updatePoints()
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(s.a)(Object(r.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.position = {
                            x: h.a.limitDecimals(this.polygonPosition.x, 3),
                            y: h.a.limitDecimals(this.polygonPosition.y, 3)
                        },
                        e.size = {
                            width: h.a.limitDecimals(this.size.width, 3),
                            height: h.a.limitDecimals(this.size.height, 3)
                        },
                        e
                    }
                }]),
                i
            }(l.a)
        }
        ).call(this, i("22a2"))
    },
    5895: function(e, t, i) {},
    "5a4b": function(e, t, i) {},
    "5a70": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return g
        }
        ));
        var a = i("1da1")
          , n = i("d4ec")
          , s = i("bee2")
          , r = i("45eb")
          , o = i("7e84")
          , c = i("262e")
          , l = i("2caf")
          , u = (i("96cf"),
        i("cdd1"))
          , h = i("dfb9")
          , d = i("b4d9")
          , p = i("fded")
          , v = i("1dab")
          , f = i("234e")
          , g = function(e) {
            Object(c.a)(i, e);
            var t = Object(l.a)(i);
            function i(e, a, s, r) {
                var o;
                return Object(n.a)(this, i),
                (o = t.call(this, e, a, null, r)).setSettings(s),
                o.type = d.c.HideSpace,
                o
            }
            return Object(s.a)(i, [{
                key: "settings",
                get: function() {
                    return this._settings
                }
            }, {
                key: "setSettings",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i, a, n, s, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this._settings = t,
                                    e.next = 3,
                                    p.a.getHideSpace(t.id);
                                case 3:
                                    return i = e.sent,
                                    e.next = 6,
                                    v.a.getAssetPack(i.pack_id);
                                case 6:
                                    if (a = e.sent,
                                    n = p.a.getAssetPath(i),
                                    !(a.spritesheets > 0)) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 11,
                                    f.a.getSpriteSheet(a);
                                case 11:
                                    r = e.sent,
                                    s = r[i.asset];
                                case 13:
                                    if (s) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 16,
                                    h.a.getRemoteTexture(n, d.f.mapMakerPath + "/" + n);
                                case 16:
                                    s = e.sent;
                                case 17:
                                    this.setAnchor(t.anchor_x, t.anchor_y),
                                    this.texture = s,
                                    this.setSize(10 * t.width, 10 * t.height);
                                case 20:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "toJsonObject",
                value: function() {
                    var e = Object(r.a)(Object(o.a)(i.prototype), "toJsonObject", this).call(this);
                    return e.hSType = this.settings.id,
                    e
                }
            }], [{
                key: "fromJsonObject",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, a) {
                        var n, s, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = t,
                                    e.next = 3,
                                    p.a.getHideSpace(n.hSType);
                                case 3:
                                    return s = e.sent,
                                    (r = new i(a.parent,a.viewport,s,a.pointsLayer)).position.set(n.x, n.y),
                                    n.rotation && r.setRotation(n.rotation),
                                    e.abrupt("return", r);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            i
        }(u.a)
    },
    "5c0b": function(e, t, i) {
        "use strict";
        i("a799")
    },
    "5ee9": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return d
            }
            ));
            var a = i("b85c")
              , n = i("d4ec")
              , s = i("bee2")
              , r = i("262e")
              , o = i("2caf")
              , c = (i("b0c0"),
            i("18a5"),
            i("a434"),
            i("b4d9"))
              , l = e.Container
              , u = e.Graphics
              , h = e.Sprite
              , d = function(t) {
                Object(r.a)(d, t);
                var i = Object(o.a)(d);
                function d(t, a, s) {
                    var r;
                    if (Object(n.a)(this, d),
                    (r = i.call(this)).pointsContainer = null,
                    r.points = [],
                    r.lines = null,
                    r.selectedPoint = null,
                    r.pointerDownTime = 0,
                    r.container = a,
                    r.viewport = s,
                    r.renderer = t,
                    r.pointsContainer = new l,
                    r.lines = new u,
                    r.addChild(r.lines),
                    r.addChild(r.pointsContainer),
                    r.interactiveChildren = r.pointsContainer.interactiveChildren = !0,
                    !d.hollowBoxTexture) {
                        var o = (new u).beginFill(16777215).drawRect(0, 0, 16, 16).endFill().beginHole().drawRect(1, 1, 14, 14).endHole();
                        d.hollowBoxTexture = r.renderer.generateTexture(o, e.SCALE_MODES.LINEAR, 1)
                    }
                    return a.on("pointermove", (function(e) {
                        if (r.selectedPoint) {
                            var t = e.data.getLocalPosition(r.container);
                            t.set(Math.max(0, Math.min(10 * c.f.vueData.worldSize.width, t.x)), Math.max(0, Math.min(10 * c.f.vueData.worldSize.height, t.y))),
                            r.selectedPoint.position.set(t.x, t.y);
                            var i = parseInt(r.selectedPoint.name);
                            r.points[i].copyFrom(t),
                            r.redrawLines()
                        }
                    }
                    )),
                    a.on("pointerup", (function(e) {
                        0 != r.pointerDownTime && Date.now() - r.pointerDownTime <= 250 && r.selectedPoint && 0 == parseInt(r.selectedPoint.name) && r.points.length > 2 && r._drawingCompleteCb && (r._drawingCompleteCb(r.points),
                        r.clear()),
                        r.pointerDownTime = 0,
                        r.selectedPoint && (r.selectedPoint = null)
                    }
                    )),
                    a.on("pointercancel", (function(e) {
                        r.pointerDownTime = 0,
                        r.selectedPoint && (r.selectedPoint = null)
                    }
                    )),
                    a.on("pointerupoutside", (function(e) {
                        r.pointerDownTime = 0,
                        r.selectedPoint && (r.selectedPoint = null)
                    }
                    )),
                    r
                }
                return Object(s.a)(d, [{
                    key: "redrawLines",
                    value: function() {
                        this.lines.clear(),
                        this.lines.lineStyle(this.viewport.worldScreenWidth / 1850 * 2, 16711680, .7);
                        for (var e = 1; e < this.points.length; e++) {
                            var t = this.points[e - 1]
                              , i = this.points[e];
                            this.lines.moveTo(t.x, t.y).lineTo(i.x, i.y)
                        }
                    }
                }, {
                    key: "addPoint",
                    value: function(t) {
                        var i = this
                          , a = new h(d.hollowBoxTexture);
                        a.width = a.height = 20,
                        a.tint = 16711680,
                        a.anchor.set(.5),
                        a.position.set(t.x, t.y),
                        a.interactive = !0;
                        var n = this.points.length > 0 ? this.points[this.points.length - 1] : null;
                        this.points.push(t.clone()),
                        a.name = this.points.length - 1 + "",
                        this.pointsContainer.addChild(a),
                        a.on("pointerover", (function(t) {
                            var i = a.scale.x;
                            a.texture = e.Texture.WHITE,
                            a.scale.set(i)
                        }
                        )),
                        a.on("pointerout", (function(e) {
                            var t = a.scale.x;
                            a.texture = d.hollowBoxTexture,
                            a.scale.set(t)
                        }
                        )),
                        a.on("pointerdown", (function(e) {
                            e.stopPropagation(),
                            i.selectedPoint = a,
                            i.pointerDownTime = Date.now()
                        }
                        )),
                        n && this.lines.moveTo(n.x, n.y).lineStyle(this.viewport.worldScreenWidth / 1850 * 2, 16711680, .7).lineTo(t.x, t.y),
                        this.updatePointsScale()
                    }
                }, {
                    key: "onViewportResize",
                    value: function() {
                        this.redrawLines(),
                        this.updatePointsScale()
                    }
                }, {
                    key: "updatePointsScale",
                    value: function() {
                        var e, t = Object(a.a)(this.pointsContainer.children);
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                e.value.scale.set(this.viewport.worldScreenWidth / 2e3)
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }, {
                    key: "onDrawingComplete",
                    set: function(e) {
                        this._drawingCompleteCb = e
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.lines.clear(),
                        this.points = [];
                        for (var e = this.pointsContainer.children.length; --e >= 0; )
                            this.pointsContainer.children[e].destroy()
                    }
                }, {
                    key: "deleteLastPoint",
                    value: function() {
                        this.points.length > 1 ? (this.points.splice(-1, 1),
                        this.pointsContainer.children[this.pointsContainer.children.length - 1].destroy(),
                        this.redrawLines()) : (this.clear(),
                        this._drawingCompleteCb && this._drawingCompleteCb(null))
                    }
                }]),
                d
            }(l)
        }
        ).call(this, i("22a2"))
    },
    6796: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return m
            }
            ));
            var a = i("b85c")
              , n = i("2909")
              , s = i("d4ec")
              , r = i("bee2")
              , o = i("45eb")
              , c = i("7e84")
              , l = i("262e")
              , u = i("2caf")
              , h = i("b4d9")
              , d = i("dfb9")
              , p = i("2475")
              , v = i("f8a7")
              , f = i("1dab")
              , g = i("234e")
              , b = e.Graphics
              , y = e.Point
              , m = function(e) {
                Object(l.a)(i, e);
                var t = Object(u.a)(i);
                function i(e, a, n, r, o, c, l) {
                    var u;
                    Object(s.a)(this, i),
                    (u = t.call(this, e, a, null, n, r, o)).type = h.c.AirPocket,
                    u.borderLayer = c,
                    u.setBorderColor(l),
                    u.shape.tint = 11184810;
                    var d = f.a.getAssetPackSync(u.texture.pack_id)
                      , p = g.a.getSpriteSheetSync(d)[a.asset];
                    return u.textureTranslation.set(p.width / 3, p.width / 3),
                    u.topBorder = new b,
                    u.addChild(u.topBorder),
                    u.bottomBorder = new b,
                    u.addChild(u.bottomBorder),
                    u.bottomBorder.parentLayer = c,
                    u
                }
                return Object(r.a)(i, [{
                    key: "getBorderColor",
                    value: function() {
                        return this._borderColor
                    }
                }, {
                    key: "setBorderColor",
                    value: function(e) {
                        "string" == typeof e && (e = d.a.stringColorToHex(e)),
                        this._borderColor = e,
                        this.drawn && this.redraw()
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        Object(o.a)(Object(c.a)(i.prototype), "redraw", this).call(this),
                        this.drawBorders()
                    }
                }, {
                    key: "drawBorders",
                    value: function() {
                        var e = Object(n.a)(this.points);
                        d.a.isClockwise(e) && e.reverse(),
                        this.topBorder.clear(),
                        this.bottomBorder.clear();
                        var t, i, a, s = this.topBorder, r = this.bottomBorder;
                        t = i = p.a.makeBrighter(this._borderColor, 1.75),
                        a = 1;
                        for (var o = 0; o < e.length; o++) {
                            var c = e[o]
                              , l = e[o > 0 ? o - 1 : e.length - 1];
                            c.x > l.x && c.x - l.x > 10 && (s.beginFill(t, a),
                            s.drawPolygon([l.x, l.y - 1.5, c.x, c.y - 1.5, c.x, c.y, l.x, l.y]),
                            s.endFill(),
                            r.beginFill(i, 1),
                            r.drawPolygon([l.x, l.y, c.x, c.y, c.x, c.y + 1.5, l.x, l.y + 1.5]),
                            r.endFill())
                        }
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(o.a)(Object(c.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.borderColor = this._borderColor,
                        e
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var n, s = e, r = [], o = Object(a.a)(s.points);
                        try {
                            for (o.s(); !(n = o.n()).done; ) {
                                var c = n.value;
                                r.push(new y(c.x,c.y))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return new i(r,this.getTextureFromJson(s),t.parent,t.pointsLayer,t.viewport,t.waterBorderLayer,s.borderColor)
                    }
                }]),
                i
            }(v.a)
        }
        ).call(this, i("22a2"))
    },
    "6c16": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return v
            }
            ));
            var a = i("1da1")
              , n = i("d4ec")
              , s = i("bee2")
              , r = i("262e")
              , o = i("2caf")
              , c = (i("d81d"),
            i("96cf"),
            i("136a"))
              , l = i("b4d9")
              , u = i("dfb9")
              , h = i("bb4b")
              , d = e.Graphics
              , p = e.Point
              , v = function(t) {
                Object(r.a)(c, t);
                var i = Object(o.a)(c);
                function c(e) {
                    var t;
                    return Object(n.a)(this, c),
                    (t = i.call(this, e, l.b.Rotate)).startingPoint = new p,
                    t.lastPoint = new p,
                    t
                }
                return Object(s.a)(c, [{
                    key: "plug",
                    value: function() {
                        var e = this.graphics = new d;
                        this.mapEditor.viewport.addChild(e),
                        this.selectedObjectsChanged()
                    }
                }, {
                    key: "unplug",
                    value: function() {
                        this.graphics.destroy(),
                        this.mapEditor.setPointerInfo(null)
                    }
                }, {
                    key: "handlePointerDown",
                    value: function() {
                        var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i) {
                            var a;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        this.pointerDownTime = Date.now(),
                                        this.startingPoint.copyFrom(t),
                                        this.lastPoint.copyFrom(t),
                                        a = 1 == this.mapEditor.selectedObjects.length && this.mapEditor.selectedObjects[0],
                                        i && i instanceof h.a ? i != a && this.interactsWith(i) && (this.mapEditor.deselectAll(),
                                        this.mapEditor.select(i),
                                        a = i) : (a = null,
                                        this.mapEditor.deselectAll()),
                                        this.rotating = i && i == a;
                                    case 6:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function(t, i) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "handlePointerMove",
                    value: function() {
                        var t = Object(a.a)(regeneratorRuntime.mark((function t(i, a, n) {
                            var s, r, o, c, l;
                            return regeneratorRuntime.wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.rotating) {
                                            t.next = 11;
                                            break
                                        }
                                        if (s = 1 == this.mapEditor.selectedObjects.length && this.mapEditor.selectedObjects[0]) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        r = s.position,
                                        o = u.a.angleTo(r.x, r.y, this.lastPoint.x, this.lastPoint.y),
                                        c = u.a.angleTo(r.x, r.y, i.x, i.y),
                                        (l = s).setRotation(l.getRotation() + (c - o) * e.RAD_TO_DEG),
                                        this.mapEditor.setPointerInfo(u.a.limitDecimals(l.getRotation(), 2) + "°"),
                                        this.lastPoint.copyFrom(i);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        return function(e, i, a) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "handlePointerUp",
                    value: function() {
                        var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        this.pointerDownTime = 0,
                                        this.rotating && (this.rotating = !1,
                                        this.mapEditor.history.pushObjects(this.mapEditor.selectedObjects.map((function(e) {
                                            return e.toJsonObject()
                                        }
                                        )))),
                                        this.mapEditor.setPointerInfo(null);
                                    case 3:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "handlePointerCancel",
                    value: function() {
                        var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        this.handlePointerUp();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "selectedObjectsChanged",
                    value: function() {
                        var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                            var t;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        t = 1 == this.mapEditor.selectedObjects.length && this.mapEditor.selectedObjects[0],
                                        (this.mapEditor.selectedObjects.length > 1 || t && !this.interactsWith(t)) && this.mapEditor.deselectAll();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "interactsWith",
                    value: function(e) {
                        return !!e && "getRotation"in e
                    }
                }, {
                    key: "viewportSizeChanged",
                    value: function() {
                        var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }]),
                c
            }(c.a)
        }
        ).call(this, i("22a2"))
    },
    "6cca": function(e, t, i) {
        "use strict";
        var a = i("d4ec")
          , n = i("bee2")
          , s = i("262e")
          , r = i("2caf")
          , o = i("9ab4")
          , c = i("60a3")
          , l = function(e) {
            Object(s.a)(i, e);
            var t = Object(r.a)(i);
            function i() {
                return Object(a.a)(this, i),
                t.apply(this, arguments)
            }
            return Object(n.a)(i, [{
                key: "mounted",
                value: function() {}
            }]),
            i
        }(i("9935").DialogComponent);
        Object(o.a)([Object(c.b)()], l.prototype, "title", void 0),
        Object(o.a)([Object(c.b)()], l.prototype, "content", void 0);
        var u = l = Object(o.a)([c.a], l)
          , h = i("2877")
          , d = Object(h.a)(u, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "message-dialog dialog-mask"
            }, [i("div", {
                staticClass: "dialog-content"
            }, [i("header", [e._v(e._s(e.title))]), i("p", [e._v(e._s(e.content))])])])
        }
        ), [], !1, null, null, null);
        t.a = d.exports
    },
    7523: function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return r
        }
        ));
        var a = i("d4ec")
          , n = i("bee2")
          , s = (i("b0c0"),
        [{
            name: "fish",
            fishLevel: 0,
            level: 0,
            boosts: 1,
            sizeMultiplier: .9,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 1.5,
            damageMultiplier: 1,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "crab",
            fishLevel: 1,
            level: 1,
            boosts: 1,
            sizeMultiplier: 1.1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 1.5,
            damageMultiplier: 2,
            damageBlock: .5,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "jellyfish",
            fishLevel: 2,
            level: 2,
            boosts: 1,
            sizeMultiplier: 1.1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 31,
            speedMultiplier: 1,
            healthMultiplier: 2,
            damageMultiplier: 2,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "squid",
            fishLevel: 3,
            level: 3,
            boosts: 2,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 27,
            speedMultiplier: 1,
            healthMultiplier: 3,
            damageMultiplier: 3,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "seagull",
            fishLevel: 4,
            level: 4,
            boosts: 2,
            sizeMultiplier: 1.3,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 4,
            damageMultiplier: 4,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "ray",
            fishLevel: 5,
            level: 5,
            boosts: 2,
            sizeMultiplier: 1.5,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 31,
            speedMultiplier: 1,
            healthMultiplier: 5,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "beaver",
            fishLevel: 6,
            level: 6,
            boosts: 2,
            sizeMultiplier: 1.7,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 14,
            speedMultiplier: 1,
            healthMultiplier: 6,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "penguin",
            fishLevel: 7,
            level: 6,
            boosts: 2,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 9,
            speedMultiplier: 1.2,
            healthMultiplier: 5,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "tshark",
            fishLevel: 8,
            level: 8,
            boosts: 3,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 7,
            damageMultiplier: 8,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "dolphin",
            fishLevel: 9,
            level: 8,
            boosts: 3,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 7,
            damageMultiplier: 6,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "shark",
            color: "rgb(166, 202, 250)",
            fishLevel: 10,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 9,
            damageMultiplier: 9,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "killerwhale",
            color: "rgb(26, 28, 27)",
            fishLevel: 11,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2.1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 11,
            speedMultiplier: 1,
            healthMultiplier: 9,
            damageMultiplier: 9,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 350,
            hasScalingBoost: !1
        }, {
            name: "whale",
            color: "rgb(155, 151, 150)",
            fishLevel: 12,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 11,
            speedMultiplier: 1,
            healthMultiplier: 15,
            damageMultiplier: 6,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "worm",
            fishLevel: 13,
            level: 0,
            boosts: 0,
            sizeMultiplier: .9,
            sizeScale: {
                x: .8,
                y: 1
            },
            habitat: 31,
            speedMultiplier: 1,
            healthMultiplier: 1,
            damageMultiplier: 1,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "anglerfish",
            fishLevel: 14,
            level: 6,
            boosts: 2,
            sizeMultiplier: 1.7,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 19,
            speedMultiplier: 1,
            healthMultiplier: 6,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "leopardseal",
            fishLevel: 15,
            level: 8,
            boosts: 2,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 9,
            speedMultiplier: 1.2,
            healthMultiplier: 7,
            damageMultiplier: 7,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "blobfish",
            fishLevel: 16,
            level: 0,
            boosts: 1,
            sizeMultiplier: 1.1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 19,
            speedMultiplier: 1,
            healthMultiplier: 2,
            damageMultiplier: 1,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "kingcrab",
            fishLevel: 17,
            level: 1,
            boosts: 1,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 25,
            speedMultiplier: 1,
            healthMultiplier: 1.5,
            damageMultiplier: 2,
            damageBlock: .5,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "pollock",
            clientSideSizeScale: .7,
            fishLevel: 18,
            level: 0,
            boosts: 1,
            sizeMultiplier: 1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 9,
            speedMultiplier: .9,
            healthMultiplier: .5,
            damageMultiplier: 0,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "seaturtle",
            creatorId: 1,
            fishLevel: 19,
            level: 7,
            boosts: 2,
            sizeMultiplier: 1.7,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 6,
            damageMultiplier: 5,
            damageBlock: .5,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "oarfish",
            creatorId: 1,
            fishLevel: 20,
            level: 8,
            boosts: 2,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: .8,
                y: 1
            },
            habitat: 19,
            speedMultiplier: 1,
            healthMultiplier: 8,
            damageMultiplier: 6.5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "octopus",
            creatorId: 1,
            fishLevel: 21,
            level: 7,
            boosts: 2,
            sizeMultiplier: 1.4,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 27,
            speedMultiplier: 1,
            healthMultiplier: 6,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: .4,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "giantsquid",
            color: "rgb(140, 57, 59)",
            creatorId: 12,
            ideatorId: 16,
            fishLevel: 22,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 19,
            speedMultiplier: 1,
            healthMultiplier: 9,
            damageMultiplier: 8,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 350,
            hasScalingBoost: !1
        }, {
            name: "narwhal",
            creatorId: 12,
            fishLevel: 23,
            level: 8,
            boosts: 2,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 9,
            speedMultiplier: 1.1,
            healthMultiplier: 8,
            damageMultiplier: 7,
            damageBlock: 0,
            armorPenetration: 1,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "cachalot",
            color: "rgb(114, 114, 114)",
            creatorId: 1,
            fishLevel: 24,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2.1,
            sizeScale: {
                x: 1,
                y: 1.2
            },
            habitat: 27,
            speedMultiplier: .8,
            healthMultiplier: 12,
            damageMultiplier: 8,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "polarbear",
            color: "rgb(251, 251, 255)",
            creatorId: 12,
            fishLevel: 25,
            level: 9,
            boosts: 3,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 9,
            speedMultiplier: 1,
            healthMultiplier: 9,
            damageMultiplier: 8,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "lamprey",
            creatorId: 12,
            fishLevel: 26,
            level: 1,
            boosts: 2,
            sizeMultiplier: .6,
            sizeScale: {
                x: 1,
                y: 1.4
            },
            habitat: 31,
            speedMultiplier: 1,
            healthMultiplier: 1.5,
            damageMultiplier: 2,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "pelican",
            creatorId: 2,
            fishLevel: 27,
            level: 5,
            boosts: 2,
            sizeMultiplier: 1.4,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 5,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 350,
            hasScalingBoost: !1
        }, {
            name: "whaleshark",
            color: "rgb(209, 206, 190)",
            creatorId: 1,
            fishLevel: 28,
            level: 9,
            boosts: 4,
            sizeMultiplier: 2.1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: .9,
            healthMultiplier: 12,
            damageMultiplier: 6,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "remora",
            creatorId: 1,
            fishLevel: 29,
            level: 0,
            boosts: 0,
            sizeMultiplier: .5,
            sizeScale: {
                x: .5,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1.2,
            healthMultiplier: 1.5,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "marlin",
            color: "rgb(24, 151, 151)",
            creatorId: 1,
            fishLevel: 30,
            level: 9,
            boosts: 2,
            sizeMultiplier: 1.7,
            sizeScale: {
                x: .9,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1.2,
            healthMultiplier: 7,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 1,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "sunfish",
            color: "rgb(179, 195, 198)",
            creatorId: 1,
            fishLevel: 31,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 26,
            speedMultiplier: 1,
            healthMultiplier: 9,
            damageMultiplier: 2,
            damageBlock: .6,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "stonefish",
            color: "rgb(219, 76, 41)",
            creatorId: 1,
            fishLevel: 32,
            level: 9,
            boosts: 3,
            sizeMultiplier: 1.4,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: .9,
            healthMultiplier: 7,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "ghost",
            creatorId: 15,
            fishLevel: 33,
            level: 0,
            boosts: 0,
            sizeMultiplier: 1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 31,
            speedMultiplier: 1,
            healthMultiplier: 1.5,
            damageMultiplier: 0,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "crocodile",
            color: "rgb(170, 173, 66)",
            creatorId: 2,
            fishLevel: 34,
            level: 9,
            boosts: 2,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 12,
            speedMultiplier: 1,
            healthMultiplier: 7,
            damageMultiplier: 7,
            damageBlock: .3,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 350,
            hasScalingBoost: !1
        }, {
            name: "electriceel",
            creatorId: 2,
            fishLevel: 35,
            level: 5,
            boosts: 2,
            sizeMultiplier: 1.6,
            sizeScale: {
                x: .6,
                y: 1
            },
            habitat: 12,
            speedMultiplier: 1,
            healthMultiplier: 4,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "frog",
            creatorId: 12,
            fishLevel: 36,
            level: 2,
            boosts: 2,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 12,
            speedMultiplier: 1,
            healthMultiplier: 3,
            damageMultiplier: 2,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "hippo",
            color: "rgb(112, 80, 90)",
            creatorId: 2,
            fishLevel: 37,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 12,
            speedMultiplier: .8,
            healthMultiplier: 9,
            damageMultiplier: 8,
            damageBlock: .3,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "manatee",
            creatorId: 12,
            fishLevel: 38,
            level: 8,
            boosts: 2,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 12,
            speedMultiplier: .8,
            healthMultiplier: 8,
            damageMultiplier: 4,
            damageBlock: .5,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 750,
            hasScalingBoost: !1
        }, {
            name: "snappingturtle",
            creatorId: 14,
            fishLevel: 39,
            level: 7,
            boosts: 2,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 12,
            speedMultiplier: 1,
            healthMultiplier: 5,
            damageMultiplier: 6,
            damageBlock: .5,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "piranha",
            color: "rgb(111, 115, 85)",
            creatorId: 2,
            fishLevel: 40,
            level: 0,
            boosts: 1,
            sizeMultiplier: .8,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 12,
            speedMultiplier: 1,
            healthMultiplier: 3,
            damageMultiplier: 1.5,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 1e3,
            hasScalingBoost: !1
        }, {
            name: "snake",
            creatorId: 12,
            fishLevel: 41,
            level: 6,
            boosts: 2,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: .6,
                y: 1
            },
            habitat: 12,
            speedMultiplier: 1,
            healthMultiplier: 6.5,
            damageMultiplier: 5.5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "baldeagle",
            color: "rgb(38, 34, 31)",
            creatorId: 1,
            fishLevel: 42,
            level: 9,
            boosts: 2,
            sizeMultiplier: 1.4,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 14,
            speedMultiplier: 1.1,
            healthMultiplier: 6,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "lionfish",
            creatorId: 2,
            fishLevel: 43,
            level: 8,
            boosts: 2,
            sizeMultiplier: 1.3,
            sizeScale: {
                x: 1,
                y: .9
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 6,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 500,
            hasScalingBoost: !1
        }, {
            name: "dragonfly",
            clientSideSizeScale: .8,
            fishLevel: 44,
            level: 0,
            boosts: 0,
            sizeMultiplier: .5,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 12,
            speedMultiplier: .9,
            healthMultiplier: .1,
            damageMultiplier: 0,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "mantaray",
            color: "rgb(221, 219, 196)",
            fishLevel: 45,
            level: 9,
            boosts: 2,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 10,
            damageMultiplier: 6,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 1e3,
            hasScalingBoost: !1
        }, {
            name: "elephantseal",
            color: "rgb(121, 119, 97)",
            creatorId: 2,
            fishLevel: 46,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 25,
            speedMultiplier: .9,
            healthMultiplier: 10,
            damageMultiplier: 6,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "lanternfish",
            clientSideSizeScale: .8,
            creatorId: 1,
            fishLevel: 47,
            level: 0,
            boosts: 1,
            sizeMultiplier: 1,
            sizeScale: {
                x: .7,
                y: 1
            },
            habitat: 23,
            speedMultiplier: .7,
            healthMultiplier: .5,
            damageMultiplier: 0,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "sleepershark",
            color: "rgb(71, 72, 72)",
            creatorId: 1,
            ideatorId: 3,
            fishLevel: 48,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 25,
            speedMultiplier: .8,
            healthMultiplier: 10,
            damageMultiplier: 8,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "gulpereel",
            color: "rgb(221, 219, 196)",
            creatorId: 1,
            fishLevel: 49,
            level: 6,
            boosts: 2,
            sizeMultiplier: 1.7,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 19,
            speedMultiplier: 1,
            healthMultiplier: 5,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 350,
            hasScalingBoost: !1
        }, {
            name: "giantisopod",
            color: "rgb(221, 219, 196)",
            creatorId: 4,
            ideatorId: 5,
            fishLevel: 50,
            level: 2,
            boosts: 2,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 19,
            speedMultiplier: .8,
            healthMultiplier: 3,
            damageMultiplier: 2,
            damageBlock: .5,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "giantisopodclosed",
            color: "rgb(221, 219, 196)",
            fishLevel: 51,
            level: 2,
            boosts: 2,
            sizeMultiplier: .9,
            sizeScale: {
                x: 1,
                y: .7
            },
            habitat: 19,
            speedMultiplier: 0,
            healthMultiplier: 3,
            damageMultiplier: 2,
            damageBlock: 1,
            armorPenetration: 0,
            chooseable: !1,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "babypenguin",
            color: "rgb(221, 219, 196)",
            fishLevel: 52,
            level: 0,
            boosts: 1,
            sizeMultiplier: 1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 9,
            speedMultiplier: .9,
            healthMultiplier: .5,
            damageMultiplier: 0,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "seal",
            color: "rgb(221, 219, 196)",
            creatorId: 2,
            fishLevel: 53,
            level: 4,
            boosts: 2,
            sizeMultiplier: 1.3,
            sizeScale: {
                x: 1,
                y: .9
            },
            habitat: 9,
            speedMultiplier: 1.1,
            healthMultiplier: 3,
            damageMultiplier: 3,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "icefish",
            color: "rgb(221, 219, 196)",
            creatorId: 2,
            fishLevel: 54,
            level: 0,
            boosts: 1,
            sizeMultiplier: 1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 9,
            speedMultiplier: 1,
            healthMultiplier: 2,
            damageMultiplier: 1,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "barreleye",
            color: "rgb(221, 219, 196)",
            creatorId: 6,
            fishLevel: 55,
            level: 4,
            boosts: 2,
            sizeMultiplier: 1.3,
            sizeScale: {
                x: 1,
                y: 1.1
            },
            habitat: 19,
            speedMultiplier: 1,
            healthMultiplier: 4,
            damageMultiplier: 3.5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "dragonfish",
            color: "rgb(221, 219, 196)",
            creatorId: 7,
            ideatorId: 8,
            fishLevel: 56,
            level: 7,
            boosts: 2,
            sizeMultiplier: 1.4,
            sizeScale: {
                x: 1,
                y: 1.3
            },
            habitat: 19,
            speedMultiplier: 1,
            healthMultiplier: 6,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 500,
            hasScalingBoost: !1
        }, {
            name: "humboldtsquid",
            color: "rgb(221, 219, 196)",
            creatorId: 3,
            fishLevel: 57,
            level: 8,
            boosts: 2,
            sizeMultiplier: 1.7,
            sizeScale: {
                x: .8,
                y: 1
            },
            habitat: 19,
            speedMultiplier: 1,
            healthMultiplier: 4,
            damageMultiplier: 3,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "sealion",
            color: "rgb(221, 219, 196)",
            creatorId: 2,
            fishLevel: 58,
            level: 7,
            boosts: 2,
            sizeMultiplier: 1.7,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 11,
            speedMultiplier: 1.1,
            healthMultiplier: 6,
            damageMultiplier: 6,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "flyingfish",
            color: "rgb(221, 219, 196)",
            creatorId: 9,
            fishLevel: 59,
            level: 2,
            boosts: 2,
            sizeMultiplier: 1.1,
            sizeScale: {
                x: .7,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1.1,
            healthMultiplier: 3,
            damageMultiplier: 2,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "duck",
            color: "rgb(221, 219, 196)",
            creatorId: 2,
            fishLevel: 60,
            level: 4,
            boosts: 1,
            sizeMultiplier: 1.4,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 12,
            speedMultiplier: 1,
            healthMultiplier: 4.5,
            damageMultiplier: 4,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "goblinshark",
            color: "rgb(161, 135, 124)",
            creatorId: 3,
            ideatorId: 10,
            fishLevel: 61,
            level: 9,
            boosts: 2,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 19,
            speedMultiplier: 1,
            healthMultiplier: 7,
            damageMultiplier: 8,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "catfish",
            color: "rgb(221, 219, 196)",
            creatorId: 2,
            fishLevel: 62,
            level: 3,
            boosts: 1,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 12,
            speedMultiplier: 1,
            healthMultiplier: 3,
            damageMultiplier: 3,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 2e3,
            hasScalingBoost: !1
        }, {
            name: "littleauk",
            color: "rgb(221, 219, 196)",
            creatorId: 2,
            fishLevel: 63,
            level: 3,
            boosts: 2,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: .9
            },
            habitat: 9,
            speedMultiplier: 1,
            healthMultiplier: 3,
            damageMultiplier: 3,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "pufferfish",
            color: "rgb(221, 219, 196)",
            creatorId: 2,
            fishLevel: 64,
            level: 5,
            boosts: 2,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 4.5,
            damageMultiplier: 4,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "pufferfishfilled",
            color: "rgb(221, 219, 196)",
            creatorId: 2,
            fishLevel: 65,
            level: 5,
            boosts: 2,
            sizeMultiplier: 1.3,
            sizeScale: {
                x: 1.2,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 4.5,
            damageMultiplier: 1,
            damageBlock: .5,
            armorPenetration: 0,
            chooseable: !1,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "tigershark",
            color: "rgb(100, 91, 74)",
            creatorId: 10,
            fishLevel: 66,
            level: 9,
            boosts: 3,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: 1.1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 8,
            damageMultiplier: 8,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "lionmanejellyfish",
            color: "rgb(221, 219, 196)",
            creatorId: 11,
            fishLevel: 67,
            level: 8,
            boosts: 3,
            sizeMultiplier: 5,
            sizeScale: {
                x: 1,
                y: .6
            },
            habitat: 11,
            speedMultiplier: .5,
            healthMultiplier: 20,
            damageMultiplier: 4,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !1,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "anaconda",
            color: "rgb(221, 219, 196)",
            creatorId: 13,
            fishLevel: 68,
            level: 9,
            boosts: 2,
            sizeMultiplier: 2,
            sizeScale: {
                x: .5,
                y: 1
            },
            habitat: 12,
            speedMultiplier: .9,
            healthMultiplier: 8,
            damageMultiplier: 7,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 500,
            hasScalingBoost: !1
        }, {
            name: "bobbitworm",
            color: "rgb(221, 219, 196)",
            creatorId: 4,
            fishLevel: 69,
            level: 5,
            boosts: 2,
            sizeMultiplier: 1.4,
            sizeScale: {
                x: .7,
                y: 1
            },
            habitat: 31,
            speedMultiplier: .8,
            healthMultiplier: 4,
            damageMultiplier: 4.5,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "mahimahi",
            color: "rgb(221, 219, 196)",
            creatorId: 3,
            ideatorId: 10,
            fishLevel: 70,
            level: 7,
            boosts: 2,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: .9,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 6,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 350,
            hasScalingBoost: !1
        }, {
            name: "walrus",
            color: "rgb(128, 97, 80)",
            creatorId: 6,
            fishLevel: 71,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 9,
            speedMultiplier: .9,
            healthMultiplier: 9,
            damageMultiplier: 7,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "frilledshark",
            color: "rgb(221, 219, 196)",
            creatorId: 10,
            fishLevel: 72,
            level: 8,
            boosts: 3,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: .5,
                y: 1
            },
            habitat: 19,
            speedMultiplier: .8,
            healthMultiplier: 6,
            damageMultiplier: 4,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "sawfish",
            color: "rgb(185, 168, 133)",
            creatorId: 3,
            fishLevel: 73,
            level: 9,
            boosts: 2,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 14,
            speedMultiplier: 1,
            healthMultiplier: 9,
            damageMultiplier: 6.5,
            damageBlock: 0,
            armorPenetration: .5,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 1e3,
            hasScalingBoost: !1
        }, {
            name: "mantisshrimp",
            color: "rgb(221, 219, 196)",
            creatorId: 17,
            ideatorId: 18,
            fishLevel: 74,
            level: 7,
            boosts: 2,
            sizeMultiplier: 1.4,
            sizeScale: {
                x: .9,
                y: 1
            },
            habitat: 10,
            speedMultiplier: 1,
            healthMultiplier: 5.5,
            damageMultiplier: 4,
            damageBlock: 0,
            armorPenetration: .7,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 500,
            hasScalingBoost: !1
        }, {
            name: "axolotl",
            creatorId: 3,
            fishLevel: 75,
            level: 3,
            boosts: 2,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 28,
            speedMultiplier: 1,
            healthMultiplier: 3,
            damageMultiplier: 3,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "bat",
            creatorId: 13,
            fishLevel: 76,
            level: 4,
            boosts: 2,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 28,
            speedMultiplier: 1.1,
            healthMultiplier: 3.5,
            damageMultiplier: 4.5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 200,
            hasScalingBoost: !1
        }, {
            name: "firefly",
            creatorId: 13,
            fishLevel: 77,
            level: 0,
            boosts: 2,
            sizeMultiplier: .8,
            sizeScale: {
                x: 1,
                y: .9
            },
            habitat: 28,
            speedMultiplier: .9,
            healthMultiplier: .5,
            damageMultiplier: 0,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "blindcavefish",
            creatorId: 5,
            fishLevel: 78,
            level: 0,
            boosts: 1,
            sizeMultiplier: .9,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 28,
            speedMultiplier: 1,
            healthMultiplier: 1.5,
            damageMultiplier: 1,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "crayfish",
            creatorId: 2,
            fishLevel: 79,
            level: 1,
            boosts: 1,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 28,
            speedMultiplier: 1,
            healthMultiplier: 1.5,
            damageMultiplier: 2,
            damageBlock: .5,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "goliathbullfrog",
            creatorId: 2,
            fishLevel: 80,
            level: 5,
            boosts: 2,
            sizeMultiplier: 1.5,
            sizeScale: {
                x: 1,
                y: .8
            },
            habitat: 28,
            speedMultiplier: 1,
            healthMultiplier: 5,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 350,
            hasScalingBoost: !1
        }, {
            name: "giantsalamander",
            creatorId: 13,
            fishLevel: 81,
            level: 8,
            boosts: 2,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: 1,
                y: .9
            },
            habitat: 28,
            speedMultiplier: 1,
            healthMultiplier: 7,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "alligatorsnappingturtle",
            creatorId: 2,
            fishLevel: 82,
            level: 9,
            boosts: 3,
            sizeMultiplier: 1.8,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 28,
            speedMultiplier: .9,
            healthMultiplier: 7,
            damageMultiplier: 7,
            damageBlock: .3,
            armorPenetration: .3,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 1500,
            hasScalingBoost: !0
        }, {
            name: "giantsoftshellturtle",
            creatorId: 2,
            fishLevel: 83,
            level: 9,
            boosts: 2,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: .8
            },
            habitat: 28,
            speedMultiplier: 1,
            healthMultiplier: 9,
            damageMultiplier: 3,
            damageBlock: .6,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 500,
            hasScalingBoost: !1
        }, {
            name: "giantsoftshellturtleclosed",
            creatorId: 2,
            fishLevel: 84,
            level: 9,
            boosts: 2,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: .8
            },
            habitat: 28,
            speedMultiplier: 0,
            healthMultiplier: 7,
            damageMultiplier: 3,
            damageBlock: .9,
            armorPenetration: 0,
            chooseable: !1,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "olm",
            creatorId: 19,
            ideatorId: 3,
            fishLevel: 85,
            level: 2,
            boosts: 2,
            sizeMultiplier: 1.2,
            sizeScale: {
                x: .8,
                y: 1
            },
            habitat: 28,
            speedMultiplier: 1,
            healthMultiplier: 3,
            damageMultiplier: 2,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }, {
            name: "alligatorgar",
            creatorId: 18,
            fishLevel: 86,
            level: 9,
            boosts: 3,
            sizeMultiplier: 1.9,
            sizeScale: {
                x: 1,
                y: 1.2
            },
            habitat: 12,
            speedMultiplier: 1,
            healthMultiplier: 8,
            damageMultiplier: 7,
            damageBlock: .2,
            armorPenetration: .4,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 1e3,
            hasScalingBoost: !1
        }, {
            name: "humpbackwhale",
            creatorId: 2,
            fishLevel: 87,
            level: 9,
            boosts: 3,
            sizeMultiplier: 2.2,
            sizeScale: {
                x: 1,
                y: 1.1
            },
            habitat: 11,
            speedMultiplier: 1,
            healthMultiplier: 12,
            damageMultiplier: 5,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !0,
            secondaryAbilityLoadTime: 150,
            hasScalingBoost: !1
        }, {
            name: "sardine",
            clientSideSizeScale: .7,
            creatorId: 2,
            fishLevel: 88,
            level: 0,
            boosts: 1,
            sizeMultiplier: 1,
            sizeScale: {
                x: 1,
                y: 1
            },
            habitat: 10,
            speedMultiplier: .9,
            healthMultiplier: .5,
            damageMultiplier: 0,
            damageBlock: 0,
            armorPenetration: 0,
            chooseable: !0,
            hasSecondaryAbility: !1,
            hasScalingBoost: !1
        }])
          , r = function() {
            function e() {
                Object(a.a)(this, e)
            }
            return Object(n.a)(e, null, [{
                key: "get",
                value: function(e) {
                    return s[e]
                }
            }, {
                key: "getPicturePath",
                value: function(e) {
                    return s[e] ? "assets/characters/" + s[e].name + ".png" : "assets/TestEntity.png"
                }
            }, {
                key: "getAll",
                value: function() {
                    return s
                }
            }]),
            e
        }()
    },
    7845: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return de
            }
            ));
            var a = i("5530")
              , n = i("2909")
              , s = i("b85c")
              , r = i("1da1")
              , o = i("d4ec")
              , c = i("bee2")
              , l = (i("96cf"),
            i("b0c0"),
            i("99af"),
            i("d81d"),
            i("159b"),
            i("a434"),
            i("d3b7"),
            i("3ca3"),
            i("ddb0"),
            i("b2c3"))
              , u = i("27fb")
              , h = i("5ee9")
              , d = i("94bc")
              , p = i("f8a7")
              , v = i("b4d9")
              , f = i("dfb9")
              , g = (i("5b3b"),
            i("bb4b"))
              , b = i("d8e2")
              , y = i("8a97")
              , m = i("3728")
              , w = i("d05b")
              , k = i("6796")
              , S = i("8f5a")
              , x = i("43e7")
              , C = i("9bf5")
              , O = i("b912")
              , j = i("53ce")
              , _ = i("332f")
              , M = i("bc3a")
              , P = i.n(M)
              , D = i("a926")
              , L = i("9935")
              , T = i("2cbb")
              , B = i("51ff")
              , z = i("d331")
              , A = i("d5bc")
              , R = i("6cca")
              , I = i("168f")
              , E = i("d547")
              , N = i("8fff")
              , W = i("309f")
              , F = i("5a70")
              , H = i("fded")
              , J = i("6c16")
              , $ = i("d8b9")
              , U = i("7523")
              , G = i("f2cd")
              , q = i("cdd1")
              , V = i("234e")
              , K = i("db22")
              , Y = i("b0f4")
              , Z = i("11ca")
              , X = i("12e2")
              , Q = i("4116")
              , ee = e.Application
              , te = e.Point
              , ie = e.display.Layer
              , ae = e.display.Stage
              , ne = e.Bounds
              , se = e.Rectangle
              , re = i("f53e")
              , oe = Object(L.create)(D.a, "title", "question")
              , ce = Object(L.create)(B.a)
              , le = Object(L.create)(z.a, "map")
              , ue = Object(L.create)(A.a, "title", "content")
              , he = Object(L.create)(R.a, "title", "content")
              , de = function() {
                function t() {
                    var i = this;
                    Object(o.a)(this, t),
                    this.app = null,
                    this.viewport = null,
                    this.layers = [],
                    this.selectedLayer = null,
                    this.isDrawing = !1,
                    this.isMoving = !1,
                    this._selectedObjects = [],
                    this.selectedShape = null,
                    this.screenObjects = {},
                    this.mapService = new _.a,
                    this._inputManager = null,
                    this.drawing = null,
                    this.history = v.f.history = new d.a(v.f.vueData.historyStatus),
                    this.viewportLastSize = 0,
                    this.secondTick = 0,
                    this._startingDelta = new te,
                    this.wantsToCopy = !1,
                    this.helper = f.a,
                    e.utils.isWebGLSupported() || ue("Browser not supported", "Deeeep.io Map Maker requires WebGL support.\n      Please check if it's enabled or use a newer web browser.");
                    var a = document.getElementById("mapeditor");
                    a && a.parentNode && a.parentNode.removeChild(a),
                    window.pixiApp && (window.pixiApp.renderer.destroy(!0),
                    h.a.hollowBoxTexture = null);
                    var n = window.pixiApp = new ee({
                        backgroundColor: 2368807,
                        width: document.documentElement.clientWidth,
                        height: document.documentElement.clientHeight,
                        autoStart: !1,
                        antialias: !0
                    });
                    n.view.setAttribute("id", "mapeditor"),
                    document.getElementById("canvas-container").appendChild(n.view),
                    n.start(),
                    this.app = n,
                    this.app.stage = new ae,
                    window.app = this;
                    this.app.loader.baseUrl = "/",
                    this.app.loader.add(["assets/terrains/terrain.png", "assets/terrains/terrain_back.png", "assets/terrains/glacier.png", "assets/terrains/deepterrain.png", "assets/terrains/coldterrain_back.png", "assets/terrains/coldterrain.png", "assets/terrains/beach_underwater.png", "assets/terrains/beach.png", "assets/terrains/swamp/water.png", "assets/terrains/swamp/island.png", "assets/ui/ceiling.png", "assets/ui/arrow.png", "assets/ui/trigger.png", "assets/ui/tppos.png", "assets/fonts/numerics.fnt"]);
                    var s = he("Loading assets...", "Initializing world");
                    this.app.loader.once("complete", Object(r.a)(regeneratorRuntime.mark((function e() {
                        var t, a, n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s.close(!0),
                                    e.next = 3,
                                    i.init();
                                case 3:
                                    if ("Map" != (t = v.f.router.currentRoute).name) {
                                        e.next = 18;
                                        break
                                    }
                                    return a = t.params.stringId,
                                    s = he("Loading map...", "Please wait"),
                                    e.prev = 7,
                                    e.next = 10,
                                    i.mapService.getByStringId(a);
                                case 10:
                                    n = e.sent,
                                    v.f.vueData.setMap({
                                        map: n,
                                        shouldReset: !0
                                    }),
                                    e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14,
                                    e.t0 = e.catch(7),
                                    console.error(e.t0);
                                case 17:
                                    s.close(!0);
                                case 18:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[7, 14]])
                    }
                    )))),
                    this.app.loader.load()
                }
                return Object(c.a)(t, [{
                    key: "inputManager",
                    get: function() {
                        return this._inputManager
                    }
                }, {
                    key: "init",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                            var t, i, a, n = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return v.f.history.init(this.toJsonObject()),
                                        this.initViewport(),
                                        this._pointerInfo = new $.a("15px 45°",{
                                            x: 0,
                                            y: 1
                                        },5,this.app.renderer,"numerics"),
                                        this.app.stage.addChild(this._pointerInfo),
                                        this.setPointerInfo(null),
                                        this._inputManager = v.f.inputManager = new u.a(this),
                                        this.initServices(),
                                        e.next = 9,
                                        this.refreshAssets();
                                    case 9:
                                        this.drawing = new h.a(this.app.renderer,this.viewport,this.viewport),
                                        this.drawing.onDrawingComplete = this.handleDrawingComplete.bind(this),
                                        this.viewport.addChild(this.drawing),
                                        this.app.ticker.add((function() {
                                            n.update(n.app.ticker.deltaMS)
                                        }
                                        )),
                                        window.addEventListener("blur", (function() {
                                            return n.onWindowBlur()
                                        }
                                        )),
                                        window.addEventListener("beforeunload", (function(e) {
                                            return n.onWindowUnload(e)
                                        }
                                        )),
                                        this.minimap = new S.a(this.viewport,{
                                            width: 10 * v.f.vueData.worldSize.width,
                                            height: 10 * v.f.vueData.worldSize.height
                                        },{
                                            width: 300,
                                            height: 150
                                        }),
                                        this.updateMinimapPosition(),
                                        this.app.stage.addChild(this.minimap),
                                        this.minimap.parentLayer = this.uiLayer,
                                        this.worldContainer = new ie,
                                        this.worldContainer.width = 10 * v.f.vueData.worldSize.width,
                                        this.worldContainer.height = 10 * v.f.vueData.worldSize.height,
                                        this.worldContainer.interactive = this.worldContainer.interactiveChildren = !0,
                                        this.viewport.addChild(this.worldContainer),
                                        this.worldContainer.group.enableSort = !0,
                                        this.initBg(),
                                        this.drawingLayer = new ie,
                                        this.viewport.addChild(this.drawingLayer),
                                        this.drawingLayer.zOrder = 600,
                                        this.drawing.parentLayer = this.drawingLayer,
                                        this.uiLayer = new ie,
                                        this.viewport.addChild(this.uiLayer),
                                        this.uiLayer.zOrder = 2e3,
                                        v.f.vueData.on("newLayer", this.onAddLayer.bind(this)),
                                        t = [v.b.HideSpace, v.b.Animal, v.b.Rotate, v.b.Prop],
                                        v.f.vueData.addLayer("habitats", "Habitats", "Define the areas where different animals can live", "", !0, [].concat(t, [v.b.Creation])),
                                        v.f.vueData.addLayer("triggers", "Triggers", "Things happen when players enter/exit them", "", !0, [].concat(t, [v.b.Creation])),
                                        v.f.vueData.addLayer("npc-spawns", "NPC Spawns", null, "", !0, [].concat(t, [v.b.Creation])),
                                        v.f.vueData.addLayer("food-spawns", "Food Spawns", null, "", !0, [].concat(t, [v.b.Creation])),
                                        v.f.vueData.addLayer("currents", "Currents", "Affects the movement of animals and food inside it", "", !0, t),
                                        v.f.vueData.addLayer("ceilings", "Ceilings", "Visible only to animals who are outside it", "", !1, t),
                                        v.f.vueData.addLayer("terrains", "Terrains", "Normal terrain", "", !1, t),
                                        v.f.vueData.addLayer("islands", "Islands", "Similar to terrains, but appear below the water border, and some animals can't dig through it", "", !1, t),
                                        v.f.vueData.addLayer("animals", "Preview Animals", "Won't be visible in-game", "", !1, [], [v.b.Selection, v.b.Move, v.b.Pan, v.b.Rotate, v.b.Zoom, v.b.Animal]),
                                        v.f.vueData.addLayer("props", "Props", null, "", !1, [], [v.b.Selection, v.b.Move, v.b.Pan, v.b.Rotate, v.b.Zoom, v.b.Prop]),
                                        v.f.vueData.addLayer("platforms", "Platforms", "Uncollidable but standable terrains", "", !1, t),
                                        v.f.vueData.addLayer("hide-spaces", "Hide Spaces", null, "", !1, [], [v.b.Selection, v.b.Move, v.b.Pan, v.b.Rotate, v.b.Zoom, v.b.HideSpace]),
                                        v.f.vueData.addLayer("air-pockets", "Air Pockets", "Air space to be placed inside water", "", !1, t),
                                        v.f.vueData.addLayer("background-terrains", "Background Terrains", null, "", !1, t),
                                        v.f.vueData.addLayer("water", "Water", null, "", !1, t),
                                        v.f.vueData.addLayer("sky", "Sky", null, "", !1, t),
                                        v.f.vueData.on("selectLayer", this.selectLayer.bind(this)),
                                        v.f.vueData.on("worldSizeChanged", this.onWorldResize.bind(this)),
                                        v.f.vueData.on("selectTool", this.onToolChange.bind(this)),
                                        v.f.vueData.on("textureChanged", this.onTextureChange.bind(this)),
                                        v.f.vueData.on("colorsChanged", this.onColorsChanged.bind(this)),
                                        v.f.vueData.on("waterSettingsChanged", this.onWaterSettingsChanged.bind(this)),
                                        v.f.vueData.on("habitatSettingsChanged", this.onHabitatSettingsChanged.bind(this)),
                                        v.f.vueData.on("npcSpawnSettingsChanged", this.onNpcSpawnSettingsChanged.bind(this)),
                                        v.f.vueData.on("foodSpawnSettingsChanged", this.onFoodSpawnSettingsChanged.bind(this)),
                                        v.f.vueData.on("currentSettingsChanged", this.onCurrentSettingsChanged.bind(this)),
                                        v.f.vueData.on("terrainSettingsChanged", this.onTerrainSettingsChanged.bind(this)),
                                        v.f.vueData.on("opacityChanged", this.onOpacityChanged.bind(this)),
                                        v.f.vueData.on("borderColorChanged", this.onBorderColorChanged.bind(this)),
                                        v.f.vueData.on("layerVisibilityChanged", this.onLayerVisibilityChanged.bind(this)),
                                        v.f.vueData.on("requestSave", this.onSaveRequested.bind(this)),
                                        v.f.vueData.on("beforeMapChange", this.onBeforeMapChange.bind(this)),
                                        v.f.vueData.on("mapChanged", this.onMapChanged.bind(this)),
                                        v.f.vueData.on("requestCopy", this.onCopyRequested.bind(this)),
                                        v.f.vueData.on("requestPaste", this.onPasteRequested.bind(this)),
                                        v.f.vueData.on("requestUndo", this.onUndoRequested.bind(this)),
                                        v.f.vueData.on("requestRedo", this.onRedoRequested.bind(this)),
                                        v.f.vueData.on("requestPushToHistory", this.onRequestPushToHistory.bind(this)),
                                        v.f.vueData.on("requestDelete", this.onRequestDelete.bind(this)),
                                        (i = this.aboveAnimalLayer = new ie).layerId = "above-animals",
                                        this.addLayerAbove(i, "islands"),
                                        (a = this.aboveBackgroundLayer = new ie).layerId = "above-background",
                                        this.addLayerAbove(a, "background-terrains"),
                                        this.onResize(),
                                        this.worldDirty = !0,
                                        this.onToolChange(v.f.vueData.pointerMode),
                                        this.calculateAvailableNpcCount(),
                                        this.calculateAvailableFoodCount();
                                    case 85:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getPointerInfo",
                    value: function() {
                        return this._pointerInfo
                    }
                }, {
                    key: "setPointerInfo",
                    value: function(e) {
                        e ? (this._pointerInfo.setText(e),
                        this._pointerInfo.visible = !0) : this._pointerInfo.visible = !1
                    }
                }, {
                    key: "tool",
                    get: function() {
                        return this._tool
                    }
                }, {
                    key: "setTool",
                    value: function(e) {
                        if (e) {
                            if (this.tool) {
                                if (e == this.tool.type)
                                    return;
                                this.tool.unplug(),
                                this._tool = null
                            }
                            var t;
                            switch (e) {
                            case v.b.Rotate:
                                t = new J.a(this)
                            }
                            this._tool = t,
                            t && t.plug()
                        } else
                            this.tool && (this.tool.unplug(),
                            this._tool = null)
                    }
                }, {
                    key: "onWindowBlur",
                    value: function() {
                        this._inputManager.releaseAllKeys(),
                        this._inputManager.onPointerCancel()
                    }
                }, {
                    key: "onWindowUnload",
                    value: function(e) {
                        if (v.f.vueData.mapDirty) {
                            var t = "You have unsaved changes. Are you sure you want to exit?";
                            return this.onBeforeMapChange(),
                            (e || window.event).returnValue = t,
                            t
                        }
                    }
                }, {
                    key: "addLayerAbove",
                    value: function(e, t) {
                        for (var i = 0; i < this.layers.length; i++) {
                            var a = this.layers[i];
                            if (a.layerId == t) {
                                e.zOrder = a.zOrder + 1,
                                this.layers.push(e),
                                this.worldContainer.addChild(e);
                                break
                            }
                        }
                    }
                }, {
                    key: "addLayerBelow",
                    value: function(e, t) {
                        for (var i = 0; i < this.layers.length; i++) {
                            var a = this.layers[i];
                            if (a.layerId == t) {
                                e.zOrder = a.zOrder - 1,
                                this.layers.push(e),
                                this.worldContainer.addChild(e);
                                break
                            }
                        }
                    }
                }, {
                    key: "selectedObjects",
                    get: function() {
                        return this._selectedObjects
                    }
                }, {
                    key: "update",
                    value: function(e) {
                        var t = this.viewport.worldScreenHeight + this.viewport.worldScreenWidth;
                        if (this.viewportLastSize != t) {
                            this.viewportLastSize = t,
                            this.drawing.onViewportResize();
                            var i, a = Object(s.a)(this.layers);
                            try {
                                for (a.s(); !(i = a.n()).done; ) {
                                    var n, r = i.value, o = Object(s.a)(r.children);
                                    try {
                                        for (o.s(); !(n = o.n()).done; ) {
                                            var c = n.value;
                                            c instanceof g.a && c.onViewportResize()
                                        }
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        }
                        this.viewport.dirty && this.minimap.updateViewport(),
                        (this.secondTick += e) >= 1e3 && (this.secondTick -= 1e3,
                        this.eachSecond())
                    }
                }, {
                    key: "eachSecond",
                    value: function() {
                        if (!e.Loader.shared.loading && !this._loading) {
                            var t, i = Object(s.a)(this.layers);
                            try {
                                for (i.s(); !(t = i.n()).done; ) {
                                    var a = t.value;
                                    if (a.dirty) {
                                        a.dirty = !1,
                                        this.worldDirty = !0;
                                        var n = "";
                                        if (a.children.length > 0) {
                                            var r = void 0;
                                            try {
                                                (r = this.app.renderer.generateTexture(a, e.SCALE_MODES.LINEAR, 50 / a.width)).width > 10 && r.height > 10 && (n = this.app.renderer.extract.base64(r))
                                            } catch (e) {
                                                console.error(e, r)
                                            }
                                        }
                                        a.layerData.preview = n
                                    }
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            if (this.worldDirty) {
                                var o;
                                this.worldDirty = !1;
                                try {
                                    o = this.app.renderer.generateTexture(this.worldContainer, e.SCALE_MODES.LINEAR, 2 * this.minimap.getRatio()),
                                    this.minimap.setMapTexture(o)
                                } catch (e) {
                                    console.error(e, o)
                                }
                            }
                        }
                    }
                }, {
                    key: "loading",
                    get: function() {
                        return this._loading
                    },
                    set: function(e) {
                        this._loading = e
                    }
                }, {
                    key: "handleDrawingComplete",
                    value: function(e) {
                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (null != e) {
                            var i;
                            switch (v.f.vueData.selectedLayer.id) {
                            case "water":
                                i = new b.a(e,v.f.vueData.waterSettings,this.selectedLayer,this.drawingLayer,this.viewport,this.aboveAnimalLayer,this.aboveBackgroundLayer);
                                break;
                            case "currents":
                                i = new Y.a(e,v.f.vueData.currentSettings,this.selectedLayer,this.drawingLayer,this.viewport);
                                break;
                            case "triggers":
                                var a = f.a.boundsFromPoints(e);
                                i = new Z.a({
                                    x: a.x,
                                    y: a.y
                                },{
                                    width: a.width,
                                    height: a.height
                                },[],this.selectedLayer,this.drawingLayer,this.viewport);
                                break;
                            case "sky":
                                i = new m.a(e,Object(n.a)(v.f.vueData.skyGradientColors),this.selectedLayer,this.drawingLayer,this.viewport);
                                break;
                            case "background-terrains":
                                (i = new w.a(e,v.f.vueData.currentTexture,this.selectedLayer,this.drawingLayer,this.viewport)).opacity = v.f.vueData.opacity;
                                break;
                            case "air-pockets":
                                i = new k.a(e,v.f.vueData.currentTexture,this.selectedLayer,this.drawingLayer,this.viewport,this.aboveAnimalLayer,v.f.vueData.borderColor);
                                break;
                            case "habitats":
                                var s = f.a.boundsFromPoints(e);
                                i = new O.a({
                                    x: s.x,
                                    y: s.y
                                },{
                                    width: s.width,
                                    height: s.height
                                },v.f.vueData.habitatSettings,this.selectedLayer,this.drawingLayer,this.viewport);
                                break;
                            case "npc-spawns":
                                var r = f.a.boundsFromPoints(e);
                                v.f.vueData.npcSpawnSettings.animalCount = 0,
                                i = new I.a({
                                    x: r.x,
                                    y: r.y
                                },{
                                    width: r.width,
                                    height: r.height
                                },v.f.vueData.npcSpawnSettings,this.selectedLayer,this.drawingLayer,this.viewport);
                                break;
                            case "food-spawns":
                                var o = f.a.boundsFromPoints(e);
                                v.f.vueData.foodSpawnSettings.count = 0,
                                i = new W.a({
                                    x: o.x,
                                    y: o.y
                                },{
                                    width: o.width,
                                    height: o.height
                                },v.f.vueData.foodSpawnSettings,this.selectedLayer,this.drawingLayer,this.viewport);
                                break;
                            case "ceilings":
                                i = new E.a(e,v.f.vueData.currentTexture,this.selectedLayer,this.drawingLayer,this.viewport);
                                break;
                            default:
                                var c = i = new p.a(e,v.f.vueData.currentTexture,v.f.vueData.terrainSettings,this.selectedLayer,this.drawingLayer,this.viewport);
                                c.foodSpawnSettings && (c.foodSpawnSettings = v.f.vueData.foodSpawnSettings)
                            }
                            return i.redraw(),
                            i.parentLayer = this.selectedLayer,
                            this.selectedLayer.addChild(i),
                            this.isDrawing = !1,
                            t && this.history.pushObjects([i.toJsonObject()]),
                            this.screenObjects[i.id] = i,
                            this.select(i),
                            i
                        }
                        this.isDrawing = !1
                    }
                }, {
                    key: "initViewport",
                    value: function() {
                        var e = 10 * v.f.vueData.worldSize.width
                          , t = 10 * v.f.vueData.worldSize.height
                          , i = this.viewport = new l.a({
                            screenWidth: document.documentElement.clientWidth,
                            screenHeight: document.documentElement.clientHeight,
                            worldWidth: e,
                            worldHeight: t,
                            divWheel: document.getElementById("canvas-container"),
                            interaction: this.app.renderer.plugins.interaction
                        });
                        i.fit(!1, 1.3 * e, 1.3 * t),
                        i.moveCenter(e / 2 + .07 * e, t / 2 + .02 * t),
                        i.clampZoom({
                            maxWidth: 10 * e,
                            maxHeight: 10 * t,
                            minWidth: 50,
                            minHeight: 50
                        }),
                        this.app.stage.addChild(i),
                        i.pinch().wheel(),
                        this.viewport.interactiveChildren = !0,
                        window.addEventListener("resize", this.onResize.bind(this))
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        this.app.renderer.resize(document.documentElement.clientWidth, document.documentElement.clientHeight),
                        this.viewport.resize(document.documentElement.clientWidth, document.documentElement.clientHeight, 10 * v.f.vueData.worldSize.width, 10 * v.f.vueData.worldSize.height),
                        this.minimap.position.set(document.documentElement.clientWidth - 250 - 20, document.documentElement.clientHeight - 40 - 22)
                    }
                }, {
                    key: "onToolChange",
                    value: function(e) {
                        this.setTool(e),
                        this.isDrawing && e != v.b.Pan && e != v.b.Zoom && (this.drawing.clear(),
                        this.isDrawing = !1),
                        e != v.b.Pan ? this.viewport.plugins.remove("drag") : this.viewport.drag()
                    }
                }, {
                    key: "onTextureChange",
                    value: function(e) {
                        if (e) {
                            var t, i = Object(s.a)(this._selectedObjects);
                            try {
                                for (i.s(); !(t = i.n()).done; ) {
                                    var a = t.value;
                                    a instanceof p.a && a.setTexture(e)
                                }
                            } catch (e) {
                                i.e(e)
                            } finally {
                                i.f()
                            }
                            this.pushToHistory(this._selectedObjects)
                        }
                    }
                }, {
                    key: "onColorsChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this._selectedObjects);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a instanceof y.a && a.setColors(e)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.pushToHistory(this._selectedObjects)
                    }
                }, {
                    key: "onWaterSettingsChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this._selectedObjects);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a instanceof b.a && (a.setColors(e.colors),
                                a.setHasBorder(e.hasBorder))
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.pushToHistory(this._selectedObjects)
                    }
                }, {
                    key: "onHabitatSettingsChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this._selectedObjects);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a instanceof O.a && a.setSettings(e)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.pushToHistory(this._selectedObjects)
                    }
                }, {
                    key: "onNpcSpawnSettingsChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this._selectedObjects);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a.type == v.c.NPCSpawn && a.setSettings(e)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.calculateAvailableNpcCount(),
                        this.pushToHistory(this._selectedObjects)
                    }
                }, {
                    key: "onFoodSpawnSettingsChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this._selectedObjects);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a.type == v.c.FoodSpawn ? a.setSettings(e) : a instanceof p.a && a.foodSpawnSettings && (a.foodSpawnSettings = e)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.calculateAvailableFoodCount(),
                        this.pushToHistory(this._selectedObjects)
                    }
                }, {
                    key: "onCurrentSettingsChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this._selectedObjects);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a instanceof Y.a && (a.settings = e)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.pushToHistory(this._selectedObjects)
                    }
                }, {
                    key: "onTerrainSettingsChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this._selectedObjects);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a instanceof p.a && (a.settings = e)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.pushToHistory(this._selectedObjects)
                    }
                }, {
                    key: "onOpacityChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this._selectedObjects);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a instanceof w.a && (a.opacity = e)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.pushToHistory(this._selectedObjects)
                    }
                }, {
                    key: "onBorderColorChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this._selectedObjects);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a instanceof k.a && a.setBorderColor(e)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.pushToHistory(this._selectedObjects)
                    }
                }, {
                    key: "onLayerVisibilityChanged",
                    value: function(e) {
                        var t, i = Object(s.a)(this.layers);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a = t.value;
                                a.layerId == e.id && (a.visible = e.visible)
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                    }
                }, {
                    key: "onSaveRequested",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                            var t, i, a, n, s;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (t = v.f.vueData.map,
                                        i = v.f.vueData.user) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 5,
                                        ce();
                                    case 5:
                                        if (e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 8:
                                        if (t && t.id) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 11,
                                        le(t || _.a.getEmptyMap());
                                    case 11:
                                        if (e.sent) {
                                            e.next = 14;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 14:
                                        e.next = 19;
                                        break;
                                    case 16:
                                        if (T.a.hasPermission(i, t)) {
                                            e.next = 19;
                                            break
                                        }
                                        return ue("Error", "You don't have permission to edit this map"),
                                        e.abrupt("return");
                                    case 19:
                                        return t = v.f.vueData.map,
                                        a = this.toJsonObject(),
                                        t.data = JSON.stringify(a),
                                        n = he("Saving...", "Please wait"),
                                        e.prev = 23,
                                        e.next = 26,
                                        this.mapService.save(t);
                                    case 26:
                                        e.sent,
                                        v.f.vueData.mapDirty = !1,
                                        n.close(!0),
                                        e.next = 38;
                                        break;
                                    case 31:
                                        e.prev = 31,
                                        e.t0 = e.catch(23),
                                        n.close(!0),
                                        e.t0 = e.t0,
                                        s = "Error saving the map",
                                        e.t0.response && e.t0.response.data && e.t0.response.data.message && (s = e.t0.response.data.message),
                                        ue("Error", s);
                                    case 38:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[23, 31]])
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "onCopyRequested",
                    value: function() {
                        var e = this._selectedObjects.map((function(e) {
                            return e.toJsonObject()
                        }
                        ));
                        v.f.vueData.clipboard.set(e)
                    }
                }, {
                    key: "onPasteRequested",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                            var t, i, a, n, r, o, c, l, u, h;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!v.f.vueData.clipboard.empty()) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        t = v.f.vueData.clipboard.get(),
                                        i = [],
                                        a = Object(s.a)(t),
                                        e.prev = 5,
                                        a.s();
                                    case 7:
                                        if ((n = a.n()).done) {
                                            e.next = 19;
                                            break
                                        }
                                        if (r = n.value,
                                        o = this.getLayerById(r.layerId)) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("continue", 17);
                                    case 12:
                                        return e.next = 14,
                                        this.objectFromData(r, o);
                                    case 14:
                                        (c = e.sent).move(100, 0),
                                        i.push(c);
                                    case 17:
                                        e.next = 7;
                                        break;
                                    case 19:
                                        e.next = 24;
                                        break;
                                    case 21:
                                        e.prev = 21,
                                        e.t0 = e.catch(5),
                                        a.e(e.t0);
                                    case 24:
                                        return e.prev = 24,
                                        a.f(),
                                        e.finish(24);
                                    case 27:
                                        for (this.calculateAvailableNpcCount(),
                                        this.calculateAvailableFoodCount(),
                                        this.history.pushObjects(i.map((function(e) {
                                            return e.toJsonObject()
                                        }
                                        ))),
                                        this.deselectAll(),
                                        l = 0,
                                        u = i; l < u.length; l++)
                                            h = u[l],
                                            this.select(h);
                                    case 32:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[5, 21, 24, 27]])
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "convertToPoint",
                    value: function(e) {
                        return new te(e.x,e.y)
                    }
                }, {
                    key: "importFromOldJson",
                    value: function(e) {
                        var t = this;
                        JSON.parse(e).rigidBodies.forEach((function(e) {
                            var i = e.name;
                            switch (console.log(i),
                            i) {
                            case "map":
                                t.selectedLayer && "terrains" == t.selectedLayer.layerId || v.f.vueData.selectLayer(t.getLayerById("terrains").layerData);
                                break;
                            case "background":
                                t.selectedLayer && "background-terrains" == t.selectedLayer.layerId || v.f.vueData.selectLayer(t.getLayerById("background-terrains").layerData);
                                break;
                            case "water":
                                t.selectedLayer && "water" == t.selectedLayer.layerId || v.f.vueData.selectLayer(t.getLayerById("water").layerData);
                                break;
                            case "air":
                                t.selectedLayer && "air-pockets" == t.selectedLayer.layerId || v.f.vueData.selectLayer(t.getLayerById("air-pockets").layerData)
                            }
                            e.shapes.forEach((function(e) {
                                var i = e.vertices.map((function(e) {
                                    return t.convertToPoint({
                                        x: 8e3 * e.x,
                                        y: 750 - 8e3 * e.y
                                    })
                                }
                                ));
                                t.handleDrawingComplete(i, !1)
                            }
                            ))
                        }
                        ))
                    }
                }, {
                    key: "onUndoRequested",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                            var t, i, a, n, r, o, c, l, u, h = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isDrawing) {
                                            e.next = 3;
                                            break
                                        }
                                        return this.onPressDelete(),
                                        e.abrupt("return");
                                    case 3:
                                        if (t = this.history.moveBackAndGet()) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 6:
                                        v.f.vueData.setWorldSize(t.settings.worldSize.width, t.settings.worldSize.height),
                                        i = [],
                                        a = Object(s.a)(t.changes),
                                        e.prev = 9,
                                        a.s();
                                    case 11:
                                        if ((n = a.n()).done) {
                                            e.next = 26;
                                            break
                                        }
                                        if (r = n.value,
                                        t.objects[r]) {
                                            e.next = 17;
                                            break
                                        }
                                        this.destroyScreenObject(this.screenObjects[r]),
                                        e.next = 24;
                                        break;
                                    case 17:
                                        return o = this.screenObjects[r],
                                        c = t.objects[r],
                                        l = this.getLayerById(c.layerId),
                                        o && this.destroyScreenObject(o),
                                        e.next = 22,
                                        this.objectFromData(c, l, r);
                                    case 22:
                                        u = e.sent,
                                        i.push(u);
                                    case 24:
                                        e.next = 11;
                                        break;
                                    case 26:
                                        e.next = 31;
                                        break;
                                    case 28:
                                        e.prev = 28,
                                        e.t0 = e.catch(9),
                                        a.e(e.t0);
                                    case 31:
                                        return e.prev = 31,
                                        a.f(),
                                        e.finish(31);
                                    case 34:
                                        this.calculateAvailableNpcCount(),
                                        this.calculateAvailableFoodCount(),
                                        i.length > 0 && (this.deselectAll(),
                                        i.map((function(e) {
                                            return h.select(e)
                                        }
                                        )));
                                    case 37:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[9, 28, 31, 34]])
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "onRedoRequested",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                            var t, i, a, n, r, o, c, l, u, h = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.isDrawing) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if (t = this.history.moveForthAndGet()) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        v.f.vueData.setWorldSize(t.settings.worldSize.width, t.settings.worldSize.height),
                                        i = [],
                                        a = Object(s.a)(t.changes),
                                        e.prev = 8,
                                        a.s();
                                    case 10:
                                        if ((n = a.n()).done) {
                                            e.next = 25;
                                            break
                                        }
                                        if (r = n.value,
                                        t.objects[r]) {
                                            e.next = 16;
                                            break
                                        }
                                        this.destroyScreenObject(this.screenObjects[r]),
                                        e.next = 23;
                                        break;
                                    case 16:
                                        return o = this.screenObjects[r],
                                        c = t.objects[r],
                                        l = this.getLayerById(c.layerId),
                                        o && this.destroyScreenObject(o),
                                        e.next = 21,
                                        this.objectFromData(c, l, r);
                                    case 21:
                                        u = e.sent,
                                        i.push(u);
                                    case 23:
                                        e.next = 10;
                                        break;
                                    case 25:
                                        e.next = 30;
                                        break;
                                    case 27:
                                        e.prev = 27,
                                        e.t0 = e.catch(8),
                                        a.e(e.t0);
                                    case 30:
                                        return e.prev = 30,
                                        a.f(),
                                        e.finish(30);
                                    case 33:
                                        this.calculateAvailableNpcCount(),
                                        this.calculateAvailableFoodCount(),
                                        i.length > 0 && (this.deselectAll(),
                                        i.map((function(e) {
                                            return h.select(e)
                                        }
                                        )));
                                    case 36:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[8, 27, 30, 33]])
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "onRequestPushToHistory",
                    value: function(e) {
                        this.history.pushObjects([e.toJsonObject()])
                    }
                }, {
                    key: "onRequestDelete",
                    value: function() {
                        this.onPressDelete()
                    }
                }, {
                    key: "onMapChanged",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                            var i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.shouldReset) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 3,
                                        this.refreshAssets();
                                    case 3:
                                        return i = t.map.data ? JSON.parse(t.map.data) : null,
                                        e.next = 6,
                                        this.fromJsonObject(i);
                                    case 6:
                                        this.trimNpcCount(),
                                        this.trimFoodCount(),
                                        v.f.history.init(this.toJsonObject()),
                                        t.map && t.map.id || this.resetWorldSettings();
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "onBeforeMapChange",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                            var t, i, a, n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (t = !0,
                                        i = v.f.vueData.map,
                                        !v.f.vueData.mapDirty || !T.a.hasPermission(v.f.vueData.user, i)) {
                                            e.next = 33;
                                            break
                                        }
                                        return e.next = 5,
                                        oe("Unsaved changes", "Do you want to save the current map first?");
                                    case 5:
                                        a = e.sent,
                                        e.t0 = a,
                                        e.next = e.t0 === v.e.Cancel ? 9 : e.t0 === v.e.No ? 11 : e.t0 === v.e.Yes ? 12 : 33;
                                        break;
                                    case 9:
                                        return t = !1,
                                        e.abrupt("break", 33);
                                    case 11:
                                        return e.abrupt("break", 33);
                                    case 12:
                                        if (n = v.f.vueData.user) {
                                            e.next = 21;
                                            break
                                        }
                                        return e.next = 16,
                                        ce();
                                    case 16:
                                        if (e.sent) {
                                            e.next = 20;
                                            break
                                        }
                                        return t = !1,
                                        e.abrupt("break", 33);
                                    case 20:
                                        n = v.f.vueData.user;
                                    case 21:
                                        if (i && i.id) {
                                            e.next = 30;
                                            break
                                        }
                                        return i || ((i = _.a.getEmptyMap()).user_id = n.id),
                                        e.next = 25,
                                        le(i);
                                    case 25:
                                        if (e.sent) {
                                            e.next = 29;
                                            break
                                        }
                                        return t = !1,
                                        e.abrupt("break", 33);
                                    case 29:
                                        i = v.f.vueData.map;
                                    case 30:
                                        return e.next = 32,
                                        this.onSaveRequested();
                                    case 32:
                                        return e.abrupt("break", 33);
                                    case 33:
                                        return e.abrupt("return", t);
                                    case 34:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "onWorldResize",
                    value: function() {
                        this.minimap.setWorldSize({
                            width: 10 * v.f.vueData.worldSize.width,
                            height: 10 * v.f.vueData.worldSize.height
                        }),
                        this.updateMinimapPosition();
                        var e = 10 * v.f.vueData.worldSize.width
                          , t = 10 * v.f.vueData.worldSize.height;
                        this.viewport.resize(document.documentElement.clientWidth, document.documentElement.clientHeight, e, t),
                        this.bg.width = e,
                        this.bg.height = t,
                        this.viewport.fit(!1, 1.3 * e, 1.3 * t),
                        this.viewport.moveCenter(e / 2 + .07 * e, t / 2 + .02 * t),
                        this.viewport.clampZoom({
                            maxWidth: 10 * e,
                            maxHeight: 10 * t,
                            minWidth: 50,
                            minHeight: 50
                        }),
                        v.f.vueData.mapDirty = !0,
                        this.history.pushSettings({
                            worldSize: v.f.vueData.worldSize
                        }),
                        this.trimNpcCount(),
                        this.trimFoodCount()
                    }
                }, {
                    key: "onAddLayer",
                    value: function(e) {
                        var t = new ie;
                        t.zOrder = 500 - 10 * v.f.vueData.layers.length,
                        t.group.enableSort = !0,
                        t.layerId = e.id,
                        t.layerData = e,
                        t.interactiveChildren = !0,
                        this.layers.push(t),
                        this.worldContainer.addChild(t)
                    }
                }, {
                    key: "initBg",
                    value: function() {
                        var e = f.a.createTexturedSprite(14540253, 15, 15);
                        e.width = 10 * v.f.vueData.worldSize.width,
                        e.height = 10 * v.f.vueData.worldSize.height,
                        this.worldContainer.addChild(e),
                        this.bg = e
                    }
                }, {
                    key: "cloneMap",
                    value: function(e) {
                        var t = _.a.getEmptyMap();
                        t.data = e.data,
                        t.cloneof_id = e.id,
                        v.f.vueData.setMap({
                            map: t,
                            shouldReset: !0
                        })
                    }
                }, {
                    key: "selectLayer",
                    value: function(e) {
                        this.deselectAll();
                        for (var t = 0; t < this.layers.length; t++) {
                            var i = this.layers[t]
                              , a = i.layerData;
                            null != e ? i.layerId == e.id ? (i.alpha = 1,
                            this.selectedLayer = i,
                            i.hitArea = null,
                            i.interactive = i.interactiveChildren = !0) : (i.hitArea = se.EMPTY,
                            i.interactive = i.interactiveChildren = !1,
                            i.alpha = .25) : (i.alpha = a && a.onlyInteractiveWhenSelected ? .4 : 1,
                            a && a.onlyInteractiveWhenSelected && (i.hitArea = null),
                            i.interactive = i.interactiveChildren = !a || !a.onlyInteractiveWhenSelected)
                        }
                        if (null == e ? this.selectedLayer = null : (e.onlyTheseTools ? -1 == e.onlyTheseTools.indexOf(v.f.vueData.pointerMode) : e.excludedToolIds.indexOf(v.f.vueData.pointerMode) > -1) && v.f.vueData.selectTool(v.b.Selection),
                        this.worldDirty = !0,
                        e)
                            switch (e.id) {
                            case "platforms":
                                v.f.vueData.terrainSettings.collidable = !1;
                                break;
                            default:
                                v.f.vueData.terrainSettings.collidable = !0
                            }
                    }
                }, {
                    key: "handleCreationClick",
                    value: function(e, t) {
                        var i = !0;
                        if (!this.isDrawing && this._selectedObjects.length > 0) {
                            var a, n = Object(s.a)(this._selectedObjects);
                            try {
                                e: for (n.s(); !(a = n.n()).done; ) {
                                    var r = a.value;
                                    if (r instanceof C.a && !(r instanceof j.a))
                                        for (var o = r.points, c = 0; c < o.length; c++) {
                                            var l = o[c]
                                              , u = o[c < o.length - 1 ? c + 1 : 0]
                                              , h = f.a.angleTo(l.x, l.y, u.x, u.y)
                                              , d = f.a.distance(l, e);
                                            if (d < f.a.distance(l, u)) {
                                                var p = f.a.addMagnitudeInDirection(l, h, d);
                                                if (f.a.distance(this.viewport.toScreen(e.x, e.y), this.viewport.toScreen(p.x, p.y)) <= 2.5) {
                                                    i = !1,
                                                    r.addPointAt(c + 1, p);
                                                    break e
                                                }
                                            }
                                        }
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                        }
                        if (i) {
                            if (!v.f.vueData.selectedLayer)
                                return void alert("Select a layer before drawing");
                            this.deselectAll(),
                            e.x = Math.max(0, Math.min(10 * v.f.vueData.worldSize.width, e.x)),
                            e.y = Math.max(0, Math.min(10 * v.f.vueData.worldSize.height, e.y)),
                            this.drawing.addPoint(e),
                            this.isDrawing = this.drawing.points.length >= 1
                        }
                    }
                }, {
                    key: "handleSelectionClick",
                    value: function(e, t) {
                        if (t instanceof g.a) {
                            if (this.selectedLayer && t.parentLayer != this.selectedLayer)
                                return;
                            t.isSelected() ? this._selectedObjects.length > 1 && !this._inputManager.shiftPressed ? (this.deselectAll(),
                            this.select(t)) : this.deselect(t) : (this._inputManager.shiftPressed || this.deselectAll(),
                            this.select(t))
                        } else
                            this.deselectAll()
                    }
                }, {
                    key: "handlePointerMove",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e(t, i, a) {
                            var n, r, o, c, l, u, h, d, p, g, b, y, m, w, k, S, x, C, O, j, _, M;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.tool) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3,
                                        this.tool.handlePointerMove(t, i, a);
                                    case 3:
                                        if (0 != this._selectedObjects.length) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        if (v.f.vueData.pointerMode != v.b.Move) {
                                            e.next = 71;
                                            break
                                        }
                                        if (this.isMoving || this._startingDelta.set(0, 0),
                                        this.isMoving = !0,
                                        !this.wantsToCopy) {
                                            e.next = 36;
                                            break
                                        }
                                        this.wantsToCopy = !1,
                                        n = [],
                                        r = Object(s.a)(this._selectedObjects),
                                        e.prev = 12,
                                        r.s();
                                    case 14:
                                        if ((o = r.n()).done) {
                                            e.next = 23;
                                            break
                                        }
                                        return c = o.value,
                                        l = c.toJsonObject(),
                                        e.next = 19,
                                        this.objectFromData(l, c.parentLayer);
                                    case 19:
                                        u = e.sent,
                                        n.push(u);
                                    case 21:
                                        e.next = 14;
                                        break;
                                    case 23:
                                        e.next = 28;
                                        break;
                                    case 25:
                                        e.prev = 25,
                                        e.t0 = e.catch(12),
                                        r.e(e.t0);
                                    case 28:
                                        return e.prev = 28,
                                        r.f(),
                                        e.finish(28);
                                    case 31:
                                        for (this.calculateAvailableNpcCount(),
                                        this.calculateAvailableFoodCount(),
                                        this.history.pushObjects(n.map((function(e) {
                                            return e.toJsonObject()
                                        }
                                        ))),
                                        this.deselectAll(),
                                        h = 0,
                                        d = n; h < d.length; h++)
                                            p = d[h],
                                            this.select(p);
                                    case 36:
                                        g = !0,
                                        b = i.x,
                                        y = i.y,
                                        m = Object(s.a)(this._selectedObjects),
                                        e.prev = 39,
                                        m.s();
                                    case 41:
                                        if ((w = m.n()).done) {
                                            e.next = 57;
                                            break
                                        }
                                        if (!((k = w.value)instanceof q.a)) {
                                            e.next = 47;
                                            break
                                        }
                                        return e.abrupt("continue", 55);
                                    case 47:
                                        g = !1;
                                    case 48:
                                        S = k.getObjectBounds().left + i.x,
                                        x = k.getObjectBounds().right + i.x,
                                        C = k.getObjectBounds().top + i.y,
                                        O = k.getObjectBounds().bottom + i.y,
                                        j = i.x,
                                        S < 0 ? j = -k.getObjectBounds().left : x > 10 * v.f.vueData.worldSize.width && (j = 10 * v.f.vueData.worldSize.width - k.getObjectBounds().right),
                                        (b > 0 && j < b || b < 0 && j > b) && (b = j),
                                        j = i.y,
                                        C < 0 ? j = -k.getObjectBounds().top : O > 10 * v.f.vueData.worldSize.height && (j = 10 * v.f.vueData.worldSize.height - k.getObjectBounds().bottom),
                                        (y > 0 && j < y || y < 0 && j > y) && (y = j);
                                    case 55:
                                        e.next = 41;
                                        break;
                                    case 57:
                                        e.next = 62;
                                        break;
                                    case 59:
                                        e.prev = 59,
                                        e.t1 = e.catch(39),
                                        m.e(e.t1);
                                    case 62:
                                        return e.prev = 62,
                                        m.f(),
                                        e.finish(62);
                                    case 65:
                                        g || (t.x < 0 ? b = Math.min(b, 0) : t.x > 10 * v.f.vueData.worldSize.width && (b = Math.max(b, 0)),
                                        t.y < 0 ? y = Math.min(y, 0) : t.y > 10 * v.f.vueData.worldSize.height && (y = Math.max(y, 0))),
                                        this._startingDelta.x += b,
                                        this._startingDelta.y += y,
                                        this.setPointerInfo("x: " + f.a.limitDecimals(this._startingDelta.x / 10, 2) + ", y: " + f.a.limitDecimals(this._startingDelta.y / 10, 2)),
                                        _ = Object(s.a)(this._selectedObjects);
                                        try {
                                            for (_.s(); !(M = _.n()).done; )
                                                M.value.move(b, y)
                                        } catch (e) {
                                            _.e(e)
                                        } finally {
                                            _.f()
                                        }
                                    case 71:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[12, 25, 28, 31], [39, 59, 62, 65]])
                        }
                        )));
                        return function(t, i, a) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "handlePointerDown",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e(t, i) {
                            var a, n, s, r, o, c, l, u;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.tool) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3,
                                        this.tool.handlePointerDown(t, i);
                                    case 3:
                                        e.t0 = v.f.vueData.pointerMode,
                                        e.next = e.t0 === v.b.Move ? 6 : e.t0 === v.b.ShapeSquare ? 8 : e.t0 === v.b.HideSpace ? 17 : e.t0 === v.b.Animal ? 30 : e.t0 === v.b.Prop ? 41 : 52;
                                        break;
                                    case 6:
                                        return i instanceof g.a ? (-1 == this._selectedObjects.indexOf(i) && (this._inputManager.shiftPressed || this.deselectAll(),
                                        this.select(i)),
                                        this._inputManager.altPressed && (this.wantsToCopy = !0)) : this.deselectAll(),
                                        e.abrupt("break", 52);
                                    case 8:
                                        if (v.f.vueData.selectedLayer) {
                                            e.next = 11;
                                            break
                                        }
                                        return alert("Select a layer before drawing"),
                                        e.abrupt("return");
                                    case 11:
                                        return this.deselectAll(),
                                        this._inputManager.drawingShape = !0,
                                        a = this.selectedShape = v.d.Square,
                                        n = x.a.get(a).map((function(e) {
                                            return new te(Math.max(0, Math.min(10 * v.f.vueData.worldSize.width, e.x + t.x)),Math.max(0, Math.min(10 * v.f.vueData.worldSize.height, e.y + t.y)))
                                        }
                                        )),
                                        this.handleDrawingComplete(n, !1),
                                        e.abrupt("break", 52);
                                    case 17:
                                        if (v.f.vueData.selectedLayer) {
                                            e.next = 20;
                                            break
                                        }
                                        return alert("Select a layer before drawing"),
                                        e.abrupt("return");
                                    case 20:
                                        return e.next = 22,
                                        H.a.getHideSpace(v.f.vueData.hideSpaceSettings.type);
                                    case 22:
                                        return s = e.sent,
                                        (r = new F.a(this.selectedLayer,this.viewport,s,this.drawingLayer)).position.set(t.x, t.y),
                                        r.parentLayer = this.selectedLayer,
                                        this.selectedLayer.addChild(r),
                                        this.deselectAll(),
                                        this.select(r),
                                        e.abrupt("break", 52);
                                    case 30:
                                        if (v.f.vueData.selectedLayer) {
                                            e.next = 33;
                                            break
                                        }
                                        return alert("Select a layer before drawing"),
                                        e.abrupt("return");
                                    case 33:
                                        return o = U.a.get(v.f.vueData.animalSettings.fishLevel),
                                        (c = new G.a(this.selectedLayer,this.viewport,o,this.drawingLayer)).position.set(t.x, t.y),
                                        c.parentLayer = this.selectedLayer,
                                        this.selectedLayer.addChild(c),
                                        this.deselectAll(),
                                        this.select(c),
                                        e.abrupt("break", 52);
                                    case 41:
                                        if (v.f.vueData.selectedLayer) {
                                            e.next = 44;
                                            break
                                        }
                                        return alert("Select a layer before drawing"),
                                        e.abrupt("return");
                                    case 44:
                                        return l = Q.a.getPropSync(v.f.vueData.propSettings.type),
                                        (u = new (Q.a.propClass(l.id))(this.selectedLayer,this.viewport,l,this.drawingLayer)).position.set(t.x, t.y),
                                        u.parentLayer = this.selectedLayer,
                                        this.selectedLayer.addChild(u),
                                        this.deselectAll(),
                                        this.select(u),
                                        e.abrupt("break", 52);
                                    case 52:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function(t, i) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "handleSelectBox",
                    value: function(e, t, i, a) {
                        var n = this
                          , r = new ne
                          , o = this.screenToWorld(new te(e,t));
                        r.minX = o.x,
                        r.minY = o.y;
                        var c = this.screenToWorld(new te(e + i,t + a));
                        if (r.maxX = c.x,
                        r.maxY = c.y,
                        v.f.vueData.pointerMode == v.b.Selection) {
                            var l = this.getObjectsWithinBounds(r);
                            this.deselectAll(),
                            l.map((function(e) {
                                n.selectedLayer && e.parentLayer != n.selectedLayer || !e.parentLayer.interactiveChildren || n.select(e)
                            }
                            ))
                        } else {
                            var u, h = Object(s.a)(this._selectedObjects);
                            try {
                                for (h.s(); !(u = h.n()).done; ) {
                                    var d = u.value;
                                    if (d instanceof p.a) {
                                        d.deselectAllPoints();
                                        var f, g = Object(s.a)(d.pointsContainer.children);
                                        try {
                                            for (g.s(); !(f = g.n()).done; ) {
                                                var b = f.value;
                                                re.boxPoint(o.x, o.y, c.x - o.x, c.y - o.y, b.x, b.y) && d.selectPoint(b)
                                            }
                                        } catch (e) {
                                            g.e(e)
                                        } finally {
                                            g.f()
                                        }
                                    }
                                }
                            } catch (e) {
                                h.e(e)
                            } finally {
                                h.f()
                            }
                        }
                    }
                }, {
                    key: "getObjectsWithinBounds",
                    value: function(e) {
                        var t, i = [], a = Object(s.a)(this.layers);
                        try {
                            for (a.s(); !(t = a.n()).done; ) {
                                var n, r = t.value, o = Object(s.a)(r.children);
                                try {
                                    for (o.s(); !(n = o.n()).done; ) {
                                        var c = n.value;
                                        c instanceof g.a && c.hitTest(e) && i.push(c)
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return i
                    }
                }, {
                    key: "screenToWorld",
                    value: function(e) {
                        return this.viewport.toWorld(e.x, e.y)
                    }
                }, {
                    key: "deselect",
                    value: function(e) {
                        e.isSelected() && (1 == this._selectedObjects.length ? this.deselectAll() : (this._selectedObjects.splice(this._selectedObjects.indexOf(e), 1),
                        e.setSelected(!1),
                        this.analyzeSelected(),
                        v.f.emitter.emit("selectedObjectsChanged", this._selectedObjects)))
                    }
                }, {
                    key: "deselectAll",
                    value: function() {
                        if (0 != this.selectedObjects.length) {
                            var e, t = Object(s.a)(this._selectedObjects);
                            try {
                                for (t.s(); !(e = t.n()).done; ) {
                                    e.value.setSelected(!1)
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                            this._selectedObjects.length = 0,
                            v.f.vueData.selectedObjectCount = 0,
                            v.f.vueData.selectedObjectsLayer = null,
                            v.f.vueData.setSelectedObjectType(null);
                            v.f.vueData.foodSpawnSettings = {
                                foodIds: [],
                                count: 0,
                                firstSpawnMs: 0,
                                reSpawnMs: 1e3,
                                area: 0
                            },
                            v.f.emitter.emit("selectedObjectsChanged", this._selectedObjects),
                            this.tool && this.tool.selectedObjectsChanged()
                        }
                    }
                }, {
                    key: "select",
                    value: function(e) {
                        this._selectedObjects.indexOf(e) > -1 || (e.setSelected(!0),
                        this._selectedObjects.push(e),
                        this.analyzeSelected(),
                        v.f.emitter.emit("selectedObjectsChanged", this._selectedObjects),
                        this.tool && this.tool.selectedObjectsChanged())
                    }
                }, {
                    key: "analyzeSelected",
                    value: function() {
                        v.f.vueData.selectedObjectCount = this._selectedObjects.length;
                        var e, t = null, i = null, r = Object(s.a)(this._selectedObjects);
                        try {
                            for (r.s(); !(e = r.n()).done; ) {
                                var o = e.value
                                  , c = o.type;
                                if (null == t)
                                    t = c,
                                    i = o.parent;
                                else {
                                    if (t != c) {
                                        t = null;
                                        break
                                    }
                                    if (i != o.parent) {
                                        t = null;
                                        break
                                    }
                                }
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        switch (t) {
                        case v.c.Terrain:
                            var l, u = null, h = {
                                foodIds: [],
                                count: 0,
                                firstSpawnMs: 0,
                                reSpawnMs: 1e3,
                                area: 0
                            }, d = {
                                collidable: !0
                            }, g = Object(s.a)(this._selectedObjects);
                            try {
                                for (g.s(); !(l = g.n()).done; ) {
                                    var y = l.value;
                                    if (null != u && u != y.texture) {
                                        u = null;
                                        break
                                    }
                                    u = y.texture
                                }
                            } catch (e) {
                                g.e(e)
                            } finally {
                                g.f()
                            }
                            var w, k = Object(s.a)(this._selectedObjects);
                            try {
                                for (k.s(); !(w = k.n()).done; ) {
                                    if (!w.value.settings.collidable) {
                                        d.collidable = !1;
                                        break
                                    }
                                }
                            } catch (e) {
                                k.e(e)
                            } finally {
                                k.f()
                            }
                            if (1 == this._selectedObjects.length) {
                                var S = this._selectedObjects[0];
                                S instanceof p.a && S.foodSpawnSettings && (h = S.foodSpawnSettings)
                            }
                            v.f.vueData.currentTexture = u,
                            v.f.vueData.foodSpawnSettings = h,
                            v.f.vueData.terrainSettings = d;
                            break;
                        case v.c.BackgroundTerrain:
                            var x, C = null, j = Object(s.a)(this._selectedObjects);
                            try {
                                for (j.s(); !(x = j.n()).done; ) {
                                    var _ = x.value;
                                    if (null != C && C != _.texture) {
                                        C = null;
                                        break
                                    }
                                    C = _.texture
                                }
                            } catch (e) {
                                j.e(e)
                            } finally {
                                j.f()
                            }
                            v.f.vueData.currentTexture = C;
                            var M, P = null, D = Object(s.a)(this._selectedObjects);
                            try {
                                for (D.s(); !(M = D.n()).done; ) {
                                    var L = M.value;
                                    if (null != P && P != L.opacity) {
                                        P = null;
                                        break
                                    }
                                    P = L.opacity
                                }
                            } catch (e) {
                                D.e(e)
                            } finally {
                                D.f()
                            }
                            v.f.vueData.opacity = P;
                            break;
                        case v.c.AirPocket:
                            var T, B = null, z = Object(s.a)(this._selectedObjects);
                            try {
                                for (z.s(); !(T = z.n()).done; ) {
                                    var A = T.value;
                                    if (null != B && B != A.texture) {
                                        B = null;
                                        break
                                    }
                                    B = A.texture
                                }
                            } catch (e) {
                                z.e(e)
                            } finally {
                                z.f()
                            }
                            v.f.vueData.currentTexture = B;
                            var R, I = null, E = Object(s.a)(this._selectedObjects);
                            try {
                                for (E.s(); !(R = E.n()).done; ) {
                                    var N = R.value;
                                    if (null != I && I != N.getBorderColor()) {
                                        I = null;
                                        break
                                    }
                                    I = N.getBorderColor()
                                }
                            } catch (e) {
                                E.e(e)
                            } finally {
                                E.f()
                            }
                            v.f.vueData.borderColor = null != I ? f.a.hexColorToString(I) : null;
                            break;
                        case v.c.Water:
                            var W, F, H = null, J = {
                                colors: ["", ""],
                                hasBorder: !0
                            }, $ = Object(s.a)(this._selectedObjects);
                            try {
                                for ($.s(); !(F = $.n()).done; ) {
                                    var U = F.value;
                                    if (U instanceof b.a) {
                                        if (null != H && H != U.texture) {
                                            H = null,
                                            W = null;
                                            break
                                        }
                                        H = U.texture,
                                        W = U.colors,
                                        U.hasBorder || (J.hasBorder = !1)
                                    }
                                }
                            } catch (e) {
                                $.e(e)
                            } finally {
                                $.f()
                            }
                            null != W && (J.colors[0] = f.a.hexColorToString(W[0]),
                            J.colors[1] = f.a.hexColorToString(W[1])),
                            v.f.vueData.waterSettings.colors = J.colors,
                            v.f.vueData.waterSettings.hasBorder = J.hasBorder;
                            break;
                        case v.c.Sky:
                            var G, q, V = null, K = ["", ""], Z = Object(s.a)(this._selectedObjects);
                            try {
                                for (Z.s(); !(q = Z.n()).done; ) {
                                    var X = q.value;
                                    if (X instanceof m.a) {
                                        if (null != V && V != X.texture) {
                                            V = null,
                                            G = null;
                                            break
                                        }
                                        V = X.texture,
                                        G = X.colors
                                    }
                                }
                            } catch (e) {
                                Z.e(e)
                            } finally {
                                Z.f()
                            }
                            null != G && (K[0] = f.a.hexColorToString(G[0]),
                            K[1] = f.a.hexColorToString(G[1])),
                            v.f.vueData.skyGradientColors = K;
                            break;
                        case v.c.Habitat:
                            var Q, ee = {
                                area: null
                            }, te = Object(s.a)(this._selectedObjects);
                            try {
                                for (te.s(); !(Q = te.n()).done; ) {
                                    var ie = Q.value;
                                    if (ie instanceof O.a) {
                                        if (null != ee.area && ee.area != ie.getSettings().area) {
                                            ee.area = 0;
                                            break
                                        }
                                        ee.area = ie.getSettings().area
                                    }
                                }
                            } catch (e) {
                                te.e(e)
                            } finally {
                                te.f()
                            }
                            v.f.vueData.habitatSettings.area = ee.area;
                        case v.c.Current:
                            var ae, ne = {
                                angle: 0,
                                strength: 10
                            }, se = Object(s.a)(this._selectedObjects);
                            try {
                                for (se.s(); !(ae = se.n()).done; ) {
                                    var re = ae.value;
                                    re instanceof Y.a && (ne.angle = re.settings.angle,
                                    ne.strength = re.settings.strength)
                                }
                            } catch (e) {
                                se.e(e)
                            } finally {
                                se.f()
                            }
                            v.f.vueData.currentSettings = Object(a.a)({}, ne);
                            break;
                        case v.c.NPCSpawn:
                            var oe = {
                                fishLevels: [],
                                animalCount: 0,
                                firstSpawnMs: 0,
                                reSpawnMs: 0,
                                npcType: 1
                            };
                            if (1 == this._selectedObjects.length) {
                                var ce = this._selectedObjects[0].getSettings();
                                oe.fishLevels = Object(n.a)(ce.fishLevels),
                                oe.npcType = ce.npcType,
                                oe.firstSpawnMs = ce.firstSpawnMs,
                                oe.reSpawnMs = ce.reSpawnMs,
                                oe.animalCount = ce.animalCount,
                                oe.restrictMovement = ce.restrictMovement
                            }
                            v.f.vueData.npcSpawnSettings = oe;
                            break;
                        case v.c.FoodSpawn:
                            var le = {
                                foodIds: [],
                                count: 0,
                                firstSpawnMs: 0,
                                reSpawnMs: 0,
                                area: 0,
                                onlyOnWater: !1
                            };
                            if (1 == this._selectedObjects.length) {
                                var ue = this._selectedObjects[0].getSettings();
                                le.foodIds = Object(n.a)(ue.foodIds),
                                le.firstSpawnMs = ue.firstSpawnMs,
                                le.reSpawnMs = ue.reSpawnMs,
                                le.count = ue.count,
                                le.area = ue.area,
                                le.onlyOnWater = ue.onlyOnWater
                            }
                            v.f.vueData.foodSpawnSettings = le
                        }
                        v.f.vueData.selectedObjectsLayer = null != i ? i.layerData : null,
                        v.f.vueData.setSelectedObjectType(t)
                    }
                }, {
                    key: "getTotalNpcCount",
                    value: function() {
                        var e, t = this.getLayerById("npc-spawns"), i = 0, a = Object(s.a)(t.children);
                        try {
                            for (a.s(); !(e = a.n()).done; ) {
                                var n = e.value;
                                if (n instanceof g.a && n.type == v.c.NPCSpawn)
                                    i += n.getSettings().animalCount
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return i
                    }
                }, {
                    key: "getTotalFoodCount",
                    value: function() {
                        var e, t = this.getLayerById("food-spawns"), i = 0, a = Object(s.a)(t.children);
                        try {
                            for (a.s(); !(e = a.n()).done; ) {
                                var n = e.value;
                                if (n instanceof g.a && n.type == v.c.FoodSpawn)
                                    i += n.getSettings().count
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return i
                    }
                }, {
                    key: "onPressDelete",
                    value: function() {
                        if (this.isDrawing)
                            this.drawing.deleteLastPoint();
                        else {
                            for (var e = [], t = this._selectedObjects.length; --t >= 0; ) {
                                var i = this._selectedObjects[t]
                                  , a = !0;
                                i instanceof p.a && i.selectedPoints.length > 0 && (a = !1,
                                i.deletePoints(i.selectedPoints)),
                                a && (i.setSelected(!1),
                                e.push(i.id),
                                this.destroyScreenObject(i),
                                this._selectedObjects.splice(t, 1))
                            }
                            this.history.pushObjects(e)
                        }
                    }
                }, {
                    key: "handleDrawShape",
                    value: function(e, t) {
                        if (this._inputManager.drawingShape && 1 == this._selectedObjects.length) {
                            var i = this._selectedObjects[0]
                              , a = t.x - e.x
                              , n = t.y - e.y
                              , s = this._selectedObjects[0];
                            if (s instanceof j.a)
                                s.polygonPosition = new te(Math.max(0, Math.min(10 * v.f.vueData.worldSize.width, Math.min(t.x, e.x))),Math.max(0, Math.min(10 * v.f.vueData.worldSize.height, Math.min(t.y, e.y)))),
                                t.x == s.polygonPosition.x && (a = e.x - t.x),
                                t.y == s.polygonPosition.y && (n = e.y - t.y),
                                s.size = {
                                    width: Math.max(0, Math.min(a, 10 * v.f.vueData.worldSize.width - s.polygonPosition.x)),
                                    height: Math.max(0, Math.min(n, 10 * v.f.vueData.worldSize.height - s.polygonPosition.y))
                                };
                            else if (s instanceof C.a) {
                                for (var r = this.selectedShape = v.d.Square, o = x.a.get(r), c = 0; c < i.points.length; c++) {
                                    i.points[c].set(Math.max(0, Math.min(10 * v.f.vueData.worldSize.width, o[c].x * a + e.x)), Math.max(0, Math.min(10 * v.f.vueData.worldSize.height, o[c].y * n + e.y)))
                                }
                                i.updatePoints()
                            }
                        }
                    }
                }, {
                    key: "handleDrawShapeCancel",
                    value: function() {
                        if (this._inputManager.drawingShape && 1 == this._selectedObjects.length) {
                            var e = this._selectedObjects[0];
                            e instanceof C.a && (this.deselectAll(),
                            this.destroyScreenObject(e))
                        }
                    }
                }, {
                    key: "handleDrawShapeComplete",
                    value: function() {
                        if (this._inputManager.drawingShape && 1 == this._selectedObjects.length) {
                            var e = this._selectedObjects[0];
                            e instanceof C.a && (0 == e.polygonBounds.width || 0 == e.polygonBounds.height ? (this.deselectAll(),
                            this.destroyScreenObject(e)) : this.history.pushObjects([e.toJsonObject()]))
                        }
                    }
                }, {
                    key: "destroyScreenObject",
                    value: function(e) {
                        var t;
                        delete this.screenObjects[e.id],
                        (t = this._selectedObjects.indexOf(e)) > -1 && this._selectedObjects.splice(t, 1),
                        e.parent.dirty = v.f.vueData.mapDirty = !0,
                        this.analyzeSelected(),
                        e.destroy(),
                        e.type == v.c.NPCSpawn ? this.calculateAvailableNpcCount() : e.type == v.c.FoodSpawn && this.calculateAvailableFoodCount()
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = {
                            screenObjects: []
                        };
                        e.settings = v.f.vueData.worldSettings,
                        e.worldSize = v.f.vueData.worldSize;
                        var t, i = Object(s.a)(this.layers);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var a, n = t.value, r = Object(s.a)(n.children);
                                try {
                                    for (r.s(); !(a = r.n()).done; ) {
                                        var o = a.value;
                                        o instanceof g.a && e.screenObjects.push(o.toJsonObject())
                                    }
                                } catch (e) {
                                    r.e(e)
                                } finally {
                                    r.f()
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return e
                    }
                }, {
                    key: "clear",
                    value: function() {
                        var e = v.f.vueData.pointerMode;
                        this.setTool(null);
                        var t, i = Object(s.a)(this.layers);
                        try {
                            for (i.s(); !(t = i.n()).done; )
                                for (var a = t.value, n = a.children.length; --n >= 0; )
                                    a.children[n].destroy()
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.screenObjects = {},
                        this._selectedObjects.length = 0,
                        this.history.clear(),
                        v.f.vueData.selectedObjectCount = 0,
                        this.calculateAvailableNpcCount(),
                        this.calculateAvailableFoodCount(),
                        e && this.setTool(e)
                    }
                }, {
                    key: "getLayerById",
                    value: function(e) {
                        var t, i = null, a = Object(s.a)(this.layers);
                        try {
                            for (a.s(); !(t = a.n()).done; ) {
                                var n = t.value;
                                if (n.layerId == e) {
                                    i = n;
                                    break
                                }
                            }
                        } catch (e) {
                            a.e(e)
                        } finally {
                            a.f()
                        }
                        return i
                    }
                }, {
                    key: "fromJsonObject",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e(t) {
                            var i, a, n, r, o, c, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (this.clear(),
                                        !t) {
                                            e.next = 26;
                                            break
                                        }
                                        v.f.vueData.setWorldSize(t.worldSize.width, t.worldSize.height),
                                        t.settings ? v.f.vueData.setWorldSettings(t.settings) : this.resetWorldSettings(),
                                        i = Object(s.a)(t.screenObjects),
                                        e.prev = 5,
                                        i.s();
                                    case 7:
                                        if ((a = i.n()).done) {
                                            e.next = 17;
                                            break
                                        }
                                        if (n = a.value,
                                        r = this.getLayerById(n.layerId)) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.abrupt("continue", 15);
                                    case 12:
                                        return e.next = 14,
                                        this.objectFromData(n, r);
                                    case 14:
                                        e.sent;
                                    case 15:
                                        e.next = 7;
                                        break;
                                    case 17:
                                        e.next = 22;
                                        break;
                                    case 19:
                                        e.prev = 19,
                                        e.t0 = e.catch(5),
                                        i.e(e.t0);
                                    case 22:
                                        return e.prev = 22,
                                        i.f(),
                                        e.finish(22);
                                    case 25:
                                        this.selectLayer(v.f.vueData.selectedLayer);
                                    case 26:
                                        v.f.vueData.mapDirty = !1,
                                        o = Object(s.a)(this.layers);
                                        try {
                                            for (o.s(); !(c = o.n()).done; )
                                                (l = c.value).layerData && (l.dirty = !0)
                                        } catch (e) {
                                            o.e(e)
                                        } finally {
                                            o.f()
                                        }
                                        this.calculateAvailableNpcCount(),
                                        this.calculateAvailableFoodCount();
                                    case 31:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[5, 19, 22, 25]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "initServices",
                    value: function() {
                        P.a.interceptors.request.use((function(e) {
                            return (e.url.indexOf("api.deeeep.io") > -1 || e.url.indexOf("localhost") > -1) && v.f.vueData.token && (e.headers.Authorization = "Bearer " + v.f.vueData.token),
                            e
                        }
                        ))
                    }
                }, {
                    key: "updateMinimapPosition",
                    value: function() {
                        this.minimap.pivot.set(this.minimap.width, this.minimap.height)
                    }
                }, {
                    key: "handlePointerUp",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.tool) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3,
                                        this.tool.handlePointerUp();
                                    case 3:
                                        this.wantsToCopy = !1,
                                        this.isMoving && (this._selectedObjects.length > 0 && this.history.pushObjects(this._selectedObjects.map((function(e) {
                                            return e.toJsonObject()
                                        }
                                        ))),
                                        this.isMoving = !1,
                                        this.setPointerInfo(null));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "handlePointerCancel",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (this.wantsToCopy = !1,
                                        this.isMoving && (this.isMoving = !1,
                                        this.setPointerInfo(null)),
                                        !this.tool) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5,
                                        this.tool.handlePointerCancel();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "objectFromData",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e(t, i) {
                            var a, n, s, r, o, c = arguments;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        a = c.length > 2 && void 0 !== c[2] ? c[2] : null,
                                        e.t0 = t.type,
                                        e.next = e.t0 === v.c.Terrain ? 4 : e.t0 === v.c.Habitat ? 8 : e.t0 === v.c.NPCSpawn ? 10 : e.t0 === v.c.FoodSpawn ? 14 : e.t0 === v.c.Sky ? 18 : e.t0 === v.c.Water ? 20 : e.t0 === v.c.HideSpace ? 22 : e.t0 === v.c.Prop ? 26 : e.t0 === v.c.Animal ? 30 : e.t0 === v.c.AirPocket ? 34 : e.t0 === v.c.BackgroundTerrain ? 36 : e.t0 === v.c.Ceiling ? 38 : e.t0 === v.c.Current ? 40 : e.t0 === v.c.Trigger ? 42 : 44;
                                        break;
                                    case 4:
                                        return (s = t).settings && !s.settings.collidable && "terrains" == i.layerId && (i = this.getLayerById("platforms")),
                                        n = p.a.fromJsonObject(s, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        }),
                                        e.abrupt("break", 44);
                                    case 8:
                                        return n = O.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        }),
                                        e.abrupt("break", 44);
                                    case 10:
                                        return (r = t).settings.animalCount = Math.min(r.settings.animalCount, v.f.vueData.availableNpcCount),
                                        n = I.a.fromJsonObject(r, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        }),
                                        e.abrupt("break", 44);
                                    case 14:
                                        return (o = t).settings.count = Math.min(o.settings.count, v.f.vueData.availableFoodCount),
                                        n = W.a.fromJsonObject(o, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        }),
                                        e.abrupt("break", 44);
                                    case 18:
                                        return n = m.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        }),
                                        e.abrupt("break", 44);
                                    case 20:
                                        return n = b.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport,
                                            aboveAnimalLayer: this.aboveAnimalLayer,
                                            aboveBackgroundLayer: this.aboveBackgroundLayer
                                        }),
                                        e.abrupt("break", 44);
                                    case 22:
                                        return e.next = 24,
                                        F.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        });
                                    case 24:
                                        return n = e.sent,
                                        e.abrupt("break", 44);
                                    case 26:
                                        return e.next = 28,
                                        X.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        });
                                    case 28:
                                        return n = e.sent,
                                        e.abrupt("break", 44);
                                    case 30:
                                        return e.next = 32,
                                        G.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        });
                                    case 32:
                                        return n = e.sent,
                                        e.abrupt("break", 44);
                                    case 34:
                                        return n = k.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport,
                                            waterBorderLayer: this.aboveAnimalLayer
                                        }),
                                        e.abrupt("break", 44);
                                    case 36:
                                        return n = w.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        }),
                                        e.abrupt("break", 44);
                                    case 38:
                                        return n = E.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        }),
                                        e.abrupt("break", 44);
                                    case 40:
                                        return n = Y.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        }),
                                        e.abrupt("break", 44);
                                    case 42:
                                        return n = Z.a.fromJsonObject(t, {
                                            parent: i,
                                            pointsLayer: this.drawingLayer,
                                            viewport: this.viewport
                                        }),
                                        e.abrupt("break", 44);
                                    case 44:
                                        return n.redraw(),
                                        n.parentLayer = i,
                                        null != a && (n.id = a),
                                        this.screenObjects[n.id] = n,
                                        i.addChild(n),
                                        e.abrupt("return", n);
                                    case 50:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this)
                        }
                        )));
                        return function(t, i) {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "pushToHistory",
                    value: function(e) {
                        e.length > 0 && this.history.pushObjects(e.map((function(e) {
                            return e.toJsonObject()
                        }
                        )))
                    }
                }, {
                    key: "calculateAvailableNpcCount",
                    value: function() {
                        var e = v.f.vueData.worldSize.width * v.f.vueData.worldSize.height
                          , t = Math.min(200, e / 200)
                          , i = this.getTotalNpcCount();
                        return v.f.vueData.availableNpcCount = Math.floor(Math.max(0, t - i)),
                        t - i
                    }
                }, {
                    key: "calculateAvailableFoodCount",
                    value: function() {
                        var e = v.f.vueData.worldSize.width * v.f.vueData.worldSize.height / v.f.foodDensity
                          , t = this.getTotalFoodCount();
                        return v.f.vueData.availableFoodCount = Math.floor(Math.max(0, e - t)),
                        e - t
                    }
                }, {
                    key: "trimNpcCount",
                    value: function() {
                        var e = this.calculateAvailableNpcCount();
                        if (e < 0) {
                            var t, i = this.getTotalNpcCount(), a = this.getLayerById("npc-spawns"), n = Object(s.a)(a.children);
                            try {
                                for (n.s(); !(t = n.n()).done; ) {
                                    var r = t.value;
                                    if (r instanceof g.a && r.type == v.c.NPCSpawn) {
                                        var o = r.getSettings()
                                          , c = o.animalCount / i;
                                        o.animalCount -= Math.ceil(Math.abs(e) * c),
                                        o.animalCount = Math.max(0, o.animalCount),
                                        r.setSettings(o)
                                    }
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                        }
                    }
                }, {
                    key: "trimFoodCount",
                    value: function() {
                        var e = this.calculateAvailableFoodCount();
                        if (e < 0) {
                            var t, i = this.getTotalFoodCount(), a = this.getLayerById("food-spawns"), n = Object(s.a)(a.children);
                            try {
                                for (n.s(); !(t = n.n()).done; ) {
                                    var r = t.value;
                                    if (r instanceof g.a && r.type == v.c.FoodSpawn) {
                                        var o = r.getSettings()
                                          , c = o.count / i;
                                        o.count -= Math.ceil(Math.abs(e) * c),
                                        o.count = Math.max(0, o.count),
                                        r.setSettings(o)
                                    }
                                }
                            } catch (e) {
                                n.e(e)
                            } finally {
                                n.f()
                            }
                        }
                    }
                }, {
                    key: "refreshAssets",
                    value: function() {
                        var e = Object(r.a)(regeneratorRuntime.mark((function e() {
                            var t, i, a, n, r, o, c, l, u, h = this;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return this.loading = !0,
                                        v.f.vueData.map,
                                        e.next = 4,
                                        N.a.getAll();
                                    case 4:
                                        t = e.sent,
                                        v.f.vueData.setPacks(t),
                                        i = he("Loading assets...", "Please wait"),
                                        a = [],
                                        n = Object(s.a)(v.f.vueData.packs),
                                        e.prev = 9,
                                        n.s();
                                    case 11:
                                        if ((r = n.n()).done) {
                                            e.next = 20;
                                            break
                                        }
                                        if (0 != (o = r.value).spritesheets) {
                                            e.next = 15;
                                            break
                                        }
                                        return e.abrupt("continue", 18);
                                    case 15:
                                        a.push(V.a.getSpriteSheet(o, !0)),
                                        c = Object(s.a)(o.textures);
                                        try {
                                            for (c.s(); !(l = c.n()).done; )
                                                u = l.value,
                                                a.push(f.a.getRemoteTexture(K.a.getAssetPath(u), v.f.mapMakerPath + "/" + K.a.getAssetPath(u)))
                                        } catch (e) {
                                            c.e(e)
                                        } finally {
                                            c.f()
                                        }
                                    case 18:
                                        e.next = 11;
                                        break;
                                    case 20:
                                        e.next = 25;
                                        break;
                                    case 22:
                                        e.prev = 22,
                                        e.t0 = e.catch(9),
                                        n.e(e.t0);
                                    case 25:
                                        return e.prev = 25,
                                        n.f(),
                                        e.finish(25);
                                    case 28:
                                        return e.next = 30,
                                        Promise.all(a);
                                    case 30:
                                        i.close(!0),
                                        setTimeout((function() {
                                            h.loading = !1
                                        }
                                        ), 1e3);
                                    case 32:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, this, [[9, 22, 25, 28]])
                        }
                        )));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "resetWorldSettings",
                    value: function() {
                        v.f.vueData.setWorldSettings({
                            gravity: 9.8
                        })
                    }
                }]),
                t
            }()
        }
        ).call(this, i("22a2"))
    },
    "88b9": function(e, t, i) {
        "use strict";
        i("03d0")
    },
    "8a97": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return g
            }
            ));
            var a = i("b85c")
              , n = i("d4ec")
              , s = i("bee2")
              , r = i("45eb")
              , o = i("7e84")
              , c = i("262e")
              , l = i("2caf")
              , u = i("f8a7")
              , h = i("dfb9")
              , d = i("b4d9")
              , p = e.Point
              , v = e.utils.TextureCache
              , f = e.Matrix
              , g = function(e) {
                Object(c.a)(i, e);
                var t = Object(l.a)(i);
                function i(e, a, s, r, o) {
                    var c;
                    Object(n.a)(this, i);
                    var l = [];
                    if ("string" == typeof a[0])
                        for (var u = 0; u < a.length; u++)
                            l[u] = h.a.stringColorToHex(a[u]);
                    else
                        l = a;
                    return (c = t.call(this, e, null, null, s, r, o)).colors = l,
                    c.softBorders = [],
                    c
                }
                return Object(s.a)(i, [{
                    key: "setColors",
                    value: function(e) {
                        var t = [];
                        if ("string" == typeof e[0])
                            for (var i = 0; i < e.length; i++) {
                                if ("" == e[i])
                                    return;
                                t[i] = h.a.stringColorToHex(e[i])
                            }
                        this.colors = t,
                        this.redraw()
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        var e = this.height / i.textureSize
                          , t = Math.round(this.getLocalBounds().top)
                          , a = new f(1,0,0,e,0,t);
                        this.shape.clear();
                        var n = h.a.getGradientITexture(this.colors, i.textureSize, i.textureSize);
                        this.shape.beginTextureFill({
                            texture: v[n.path],
                            color: 16777215,
                            alpha: 1,
                            matrix: a
                        }),
                        this.shape.drawPolygon(this.points),
                        this.shape.endFill(),
                        this.redrawLines(),
                        this.container.dirty = d.f.vueData.mapDirty = !0,
                        this.drawn = !0
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(r.a)(Object(o.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.colors = h.a.deepCopy(this.colors),
                        e
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var n, s = e, r = [], o = Object(a.a)(s.points);
                        try {
                            for (o.s(); !(n = o.n()).done; ) {
                                var c = n.value;
                                r.push(new p(c.x,c.y))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return new i(r,s.colors,t.parent,t.pointsLayer,t.viewport)
                    }
                }]),
                i
            }(u.a);
            g.textureSize = 100
        }
        ).call(this, i("22a2"))
    },
    "8f5a": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return d
            }
            ));
            var a = i("d4ec")
              , n = i("bee2")
              , s = i("262e")
              , r = i("2caf")
              , o = (i("d81d"),
            i("dfb9"))
              , c = e.Container
              , l = e.Sprite
              , u = e.Graphics
              , h = e.Rectangle
              , d = function(e) {
                Object(s.a)(i, e);
                var t = Object(r.a)(i);
                function i(e, n, s) {
                    var r;
                    return Object(a.a)(this, i),
                    (r = t.call(this)).worldSize = {
                        width: 0,
                        height: 0
                    },
                    r.maxMinimapSize = {
                        width: 0,
                        height: 0
                    },
                    r.viewport = e,
                    r.setWorldSize(n),
                    r.setMaxMinimapSize(s),
                    r.bg = o.a.createTexturedSprite(4473924, 15, 15),
                    r.addChild(r.bg),
                    r.map = new l,
                    r.addChild(r.map),
                    r.graphics = new u,
                    r.addChild(r.graphics),
                    r.mapMask = new u,
                    r.addChild(r.mapMask),
                    r.graphics.mask = r.mapMask,
                    r.graphics.hitArea = r.mapMask.hitArea = h.EMPTY,
                    r.alpha = .5,
                    r.setInputHandlers(),
                    r.redraw(),
                    r
                }
                return Object(n.a)(i, [{
                    key: "setInputHandlers",
                    value: function() {
                        var e = this;
                        this.interactive = this.interactiveChildren = !0,
                        this.map.interactive = !0,
                        this.on("pointerover", (function() {
                            e.alpha = 1
                        }
                        )),
                        this.on("pointerout", (function() {
                            e.alpha = .5
                        }
                        ));
                        var t = 0;
                        this.map.on("pointerdown", (function() {
                            t = Date.now()
                        }
                        )),
                        this.map.on("pointermove", (function(i) {
                            if (0 != t) {
                                var a = i.data.getLocalPosition(e)
                                  , n = a.x / e.width * e.worldSize.width
                                  , s = a.y / e.height * e.worldSize.height;
                                e.viewport.moveCenter(Math.max(0, Math.min(e.worldSize.width, n)), Math.max(0, Math.min(e.worldSize.height, s)))
                            }
                        }
                        )),
                        this.map.on("pointerupoutside", (function() {
                            t = 0
                        }
                        )),
                        this.map.on("pointerup", (function() {
                            t = 0
                        }
                        ))
                    }
                }, {
                    key: "setWorldSize",
                    value: function(e) {
                        this.worldSize.width = e.width,
                        this.worldSize.height = e.height,
                        this.initialized && this.redraw()
                    }
                }, {
                    key: "getWorldSize",
                    value: function() {
                        return this.worldSize
                    }
                }, {
                    key: "setMaxMinimapSize",
                    value: function(e) {
                        this.maxMinimapSize.width = e.width,
                        this.maxMinimapSize.height = e.height,
                        this.initialized && this.redraw()
                    }
                }, {
                    key: "getRatio",
                    value: function() {
                        var e = this.maxMinimapSize.width / this.worldSize.width
                          , t = this.maxMinimapSize.height / this.worldSize.height;
                        return Math.min(e, t)
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        var e = this.getRatio()
                          , t = this.worldSize.width * e
                          , i = this.worldSize.height * e;
                        this.map.texture = this.mapTexture,
                        this.map.width = t,
                        this.map.height = i,
                        this.bg.width = t + 4,
                        this.bg.height = i + 4,
                        this.map.x = this.mapMask.x = 2,
                        this.map.y = this.mapMask.y = 2,
                        this.mapMask.clear(),
                        this.mapMask.beginFill(16777215),
                        this.mapMask.drawRect(0, 0, t, i),
                        this.mapMask.endFill(),
                        this.initialized = !0,
                        this.redrawGraphics()
                    }
                }, {
                    key: "setMapTexture",
                    value: function(e) {
                        this.mapTexture = e,
                        this.initialized && (this.map.texture = e)
                    }
                }, {
                    key: "updateViewport",
                    value: function() {
                        this.redrawGraphics()
                    }
                }, {
                    key: "redrawGraphics",
                    value: function() {
                        var e = this.getRatio()
                          , t = new h(this.viewport.left * e,this.viewport.top * e,this.viewport.worldScreenWidth * e,this.viewport.worldScreenHeight * e)
                          , i = this.graphics;
                        i.clear(),
                        i.lineStyle(1, 16711680, .8).moveTo(t.x, t.y).lineTo(t.x + t.width, t.y).lineTo(t.x + t.width, t.y + t.height).lineTo(t.x, t.y + t.height).lineTo(t.x, t.y)
                    }
                }]),
                i
            }(c)
        }
        ).call(this, i("22a2"))
    },
    "8fff": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return l
        }
        ));
        var a = i("1da1")
          , n = i("d4ec")
          , s = i("bee2")
          , r = (i("96cf"),
        i("99af"),
        i("bc3a"))
          , o = i.n(r)
          , c = i("b4d9").f.API_URL + "/packs"
          , l = function() {
            function e() {
                Object(n.a)(this, e)
            }
            return Object(s.a)(e, [{
                key: "delete",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.delete("".concat(c, "/").concat(t.id));
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "getAll",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                        var t, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = "".concat(c),
                                    e.next = 3,
                                    o.a.get(t);
                                case 3:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getById",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.get("".concat(c, "/").concat(t));
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "create",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.post("".concat(c), t);
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "save",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    o.a.put("".concat(c, "/").concat(t.id), t);
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }()
    },
    "94bc": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return c
        }
        ));
        var a = i("53ca")
          , n = i("b85c")
          , s = i("5530")
          , r = i("d4ec")
          , o = i("bee2")
          , c = (i("a434"),
        function() {
            function e(t) {
                Object(r.a)(this, e),
                this._settingsStack = [],
                this._objectsStack = [],
                this._changesStack = [],
                this._currentIndex = -1,
                this._maxItems = 30,
                this._status = t
            }
            return Object(o.a)(e, [{
                key: "init",
                value: function(e) {
                    this.clear(),
                    this._currentIndex++,
                    this._settingsStack.push({
                        worldSize: Object(s.a)({}, e.worldSize)
                    });
                    var t, i = {}, a = Object(n.a)(e.screenObjects);
                    try {
                        for (a.s(); !(t = a.n()).done; ) {
                            var r = t.value;
                            i[r.id] = r
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    this._objectsStack.push(i),
                    this._changesStack.push([]),
                    this.checkStatus()
                }
            }, {
                key: "moveBackAndGet",
                value: function() {
                    if (0 == this._currentIndex)
                        return null;
                    this._currentIndex--;
                    var e = {};
                    return e.objects = this._objectsStack[this._currentIndex],
                    e.changes = this._changesStack[this._currentIndex + 1],
                    e.settings = this._settingsStack[this._currentIndex],
                    this.checkStatus(),
                    e
                }
            }, {
                key: "moveForthAndGet",
                value: function() {
                    if (this._currentIndex >= this._changesStack.length - 1)
                        return null;
                    this._currentIndex++;
                    var e = {};
                    return e.objects = this._objectsStack[this._currentIndex],
                    e.changes = this._changesStack[this._currentIndex],
                    e.settings = this._settingsStack[this._currentIndex],
                    this.checkStatus(),
                    e
                }
            }, {
                key: "clear",
                value: function() {
                    this._settingsStack = [],
                    this._objectsStack = [],
                    this._changesStack = [],
                    this._currentIndex = -1,
                    this.checkStatus()
                }
            }, {
                key: "trimStacks",
                value: function() {
                    this._changesStack.length > this._currentIndex + 1 && (this._changesStack.length = this._objectsStack.length = this._settingsStack.length = this._currentIndex + 1)
                }
            }, {
                key: "checkStacksSize",
                value: function() {
                    if (!(this._changesStack.length <= this._maxItems)) {
                        var e = this._changesStack.length - this._maxItems;
                        this._changesStack.splice(0, e),
                        this._objectsStack.splice(0, e),
                        this._settingsStack.splice(0, e),
                        this._currentIndex -= e
                    }
                }
            }, {
                key: "pushSettings",
                value: function(e) {
                    this.trimStacks(),
                    this._settingsStack.push({
                        worldSize: Object(s.a)({}, e.worldSize)
                    }),
                    this._objectsStack.push(Object(s.a)({}, this._objectsStack[this._currentIndex])),
                    this._changesStack.push([]),
                    this._currentIndex++,
                    this.checkStacksSize(),
                    this.checkStatus()
                }
            }, {
                key: "pushObjects",
                value: function(e) {
                    if (0 != e.length) {
                        this.trimStacks();
                        var t = this.getNewStack(e)
                          , i = t.newStack
                          , a = t.changedIds;
                        this._objectsStack.push(i),
                        this._changesStack.push(a),
                        this._settingsStack.push(Object(s.a)({}, this._settingsStack[this._currentIndex])),
                        this._currentIndex++,
                        this.checkStacksSize(),
                        this.checkStatus()
                    }
                }
            }, {
                key: "pushObjectsAndSettings",
                value: function(e, t) {
                    this.trimStacks();
                    var i = this.getNewStack(e)
                      , a = i.newStack
                      , n = i.changedIds;
                    this._objectsStack.push(a),
                    this._changesStack.push(n),
                    this._settingsStack.push({
                        worldSize: Object(s.a)({}, t.worldSize)
                    }),
                    this._currentIndex++,
                    this.checkStacksSize(),
                    this.checkStatus()
                }
            }, {
                key: "getNewStack",
                value: function(e) {
                    var t, i = Object(s.a)({}, this._objectsStack[this._currentIndex]), r = [], o = Object(n.a)(e);
                    try {
                        for (o.s(); !(t = o.n()).done; ) {
                            var c = t.value;
                            "object" == Object(a.a)(c) ? (i[c.id] = c,
                            r.push(c.id)) : (delete i[c],
                            r.push(c))
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    return {
                        newStack: i,
                        changedIds: r
                    }
                }
            }, {
                key: "checkStatus",
                value: function() {
                    this._status.canUndo = this._currentIndex > 0,
                    this._status.canRedo = this._currentIndex < this._objectsStack.length - 1
                }
            }]),
            e
        }())
    },
    "9bf5": function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return k
            }
            ));
            var a = i("b85c")
              , n = i("2909")
              , s = i("d4ec")
              , r = i("bee2")
              , o = i("45eb")
              , c = i("7e84")
              , l = i("262e")
              , u = i("2caf")
              , h = (i("d81d"),
            i("18a5"),
            i("b0c0"),
            i("5db7"),
            i("73d9"),
            i("a434"),
            i("5ee9"))
              , d = i("bb4b")
              , p = i("b4d9")
              , v = i("dfb9")
              , f = e.Point
              , g = e.Container
              , b = e.Graphics
              , y = e.Sprite
              , m = e.Rectangle
              , w = i("f53e")
              , k = function(t) {
                Object(l.a)(d, t);
                var i = Object(u.a)(d);
                function d(e, t, a, r) {
                    var o, c;
                    return Object(s.a)(this, d),
                    (c = i.call(this, t, r)).points = [],
                    c.pointsContainer = null,
                    c._selectedPoints = [],
                    c.pointerDownTime = 0,
                    c.drawn = !1,
                    c._polygonBounds = new m,
                    c.isMovingPoints = !1,
                    c.viewportDirty = !1,
                    c.pointerStartPosition = new f,
                    c.pointerLastPosition = new f,
                    c._startingDelta = new f,
                    c.type = p.c.Terrain,
                    c.pointsLayer = a,
                    (o = c.points).push.apply(o, Object(n.a)(e.map((function(e) {
                        return e.clone()
                    }
                    )))),
                    c.calculatePolygonBounds(),
                    c.interactive = !0,
                    c.lines = new b,
                    c.lines.parentLayer = a,
                    c.addChild(c.lines),
                    c.lines.visible = !1,
                    c.pointsContainer = new g,
                    c.addChild(c.pointsContainer),
                    c.pointsContainer.parentLayer = a,
                    c.pointsContainer.visible = !1,
                    c.interactiveChildren = c.pointsContainer.interactiveChildren = !0,
                    c.createPoints(),
                    c.setInputHandlers(),
                    c.setSelected(!1),
                    c
                }
                return Object(r.a)(d, [{
                    key: "polygonBounds",
                    get: function() {
                        return this._polygonBounds
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        this.redrawLines(),
                        this.container.dirty = p.f.vueData.mapDirty = !0,
                        this.drawn = !0
                    }
                }, {
                    key: "redrawLines",
                    value: function() {
                        this.lines.clear(),
                        this.lines.lineStyle(this.viewport.worldScreenWidth / 1850 * 2, 16777215, .7);
                        for (var e = 1; e <= this.points.length; e++) {
                            var t = this.points[e - 1]
                              , i = this.points[e < this.points.length ? e : 0];
                            this.lines.moveTo(t.x, t.y).lineTo(i.x, i.y)
                        }
                    }
                }, {
                    key: "newPointSprite",
                    value: function(t, i) {
                        var a = this
                          , n = new y(h.a.hollowBoxTexture);
                        return n.width = n.height = 20,
                        n.tint = 16711680,
                        n.anchor.set(.5),
                        n.position.set(i.x, i.y),
                        n.interactive = !0,
                        n.name = t + "",
                        n.on("pointerover", (function(t) {
                            var i = n.scale.x;
                            n.texture = e.Texture.WHITE,
                            n.scale.set(i)
                        }
                        )),
                        n.on("pointerout", (function(e) {
                            if (-1 == a._selectedPoints.indexOf(n)) {
                                var t = n.scale.x;
                                n.texture = h.a.hollowBoxTexture,
                                n.scale.set(t)
                            }
                        }
                        )),
                        n.on("pointerdown", (function(e) {
                            e.stopPropagation(),
                            -1 != a._selectedPoints.indexOf(n) || p.f.inputManager.shiftPressed || a.deselectAllPoints(),
                            a.selectPoint(n),
                            a.pointerDownTime = Date.now();
                            var t = e.data.global;
                            a.pointerStartPosition.copyFrom(t),
                            a.pointerLastPosition.copyFrom(t)
                        }
                        )),
                        n
                    }
                }, {
                    key: "createPoints",
                    value: function() {
                        for (var e = 0; e < this.points.length; e++) {
                            var t = this.points[e]
                              , i = this.newPointSprite(e, t);
                            this.pointsContainer.addChild(i)
                        }
                        this.updatePointsScale()
                    }
                }, {
                    key: "selectPoint",
                    value: function(t) {
                        if (!(this._selectedPoints.indexOf(t) > -1)) {
                            var i = t.scale.x;
                            t.texture = e.Texture.WHITE,
                            t.scale.set(i),
                            this._selectedPoints.push(t)
                        }
                    }
                }, {
                    key: "deselectAllPoints",
                    value: function() {
                        var e, t = Object(a.a)(this._selectedPoints);
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                var i = e.value;
                                if (i.texture) {
                                    var n = i.scale.x;
                                    i.texture = h.a.hollowBoxTexture,
                                    i.scale.set(n)
                                }
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        this._selectedPoints.length = 0
                    }
                }, {
                    key: "updateUI",
                    value: function() {
                        this.checkViewportDirty(),
                        this.lines.visible = this.isSelected() || this.isHovered && (p.f.vueData.pointerMode == p.b.Move || p.f.vueData.pointerMode == p.b.Selection || p.f.vueData.pointerMode == p.b.PointSelection || p.f.mapEditor.tool && p.f.mapEditor.tool.interactsWith(this))
                    }
                }, {
                    key: "onPointerMove",
                    value: function(e) {
                        if (0 != this._selectedPoints.length && 0 != this.pointerDownTime) {
                            this.isMovingPoints || this._startingDelta.set(0, 0),
                            this.isMovingPoints = !0;
                            var t = e.data.getLocalPosition(this.viewport)
                              , i = e.data.getLocalPosition(this.viewport, null, this.pointerLastPosition)
                              , n = {
                                x: t.x - i.x,
                                y: t.y - i.y
                            };
                            this.pointerLastPosition.copyFrom(e.data.global);
                            var s, r = n.x, o = n.y, c = Object(a.a)(this._selectedPoints);
                            try {
                                for (c.s(); !(s = c.n()).done; ) {
                                    var l = s.value
                                      , u = l.x + n.x
                                      , h = l.y + n.y
                                      , d = n.x;
                                    u < 0 ? d = -l.x : u > 10 * p.f.vueData.worldSize.width && (d = 10 * p.f.vueData.worldSize.width - l.x),
                                    (r > 0 && d < r || r < 0 && d > r) && (r = d),
                                    d = n.y,
                                    h < 0 ? d = -l.y : h > 10 * p.f.vueData.worldSize.height && (d = 10 * p.f.vueData.worldSize.height - l.y),
                                    (o > 0 && d < o || o < 0 && d > o) && (o = d)
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                            t.x < 0 ? r = Math.min(r, 0) : t.x > 10 * p.f.vueData.worldSize.width && (r = Math.max(r, 0)),
                            t.y < 0 ? o = Math.min(o, 0) : t.y > 10 * p.f.vueData.worldSize.height && (o = Math.max(o, 0)),
                            this._startingDelta.x += r,
                            this._startingDelta.y += o,
                            p.f.mapEditor.setPointerInfo("x: " + v.a.limitDecimals(this._startingDelta.x / 10, 2) + ", y: " + v.a.limitDecimals(this._startingDelta.y / 10, 2));
                            var f, g = Object(a.a)(this._selectedPoints);
                            try {
                                for (g.s(); !(f = g.n()).done; ) {
                                    var b = f.value;
                                    b.x += r,
                                    b.y += o;
                                    var y = parseInt(b.name);
                                    this.points[y].copyFrom(b.position)
                                }
                            } catch (e) {
                                g.e(e)
                            } finally {
                                g.f()
                            }
                            this.calculatePolygonBounds(),
                            this.redraw()
                        }
                    }
                }, {
                    key: "onPointerUp",
                    value: function(e) {
                        this.pointerDownTime = 0,
                        this.isMovingPoints && (p.f.vueData.emit("requestPushToHistory", this),
                        this.isMovingPoints = !1,
                        p.f.mapEditor.setPointerInfo(null))
                    }
                }, {
                    key: "setInputHandlers",
                    value: function() {
                        this.viewport.on("pointermove", this.onPointerMove.bind(this)),
                        this.viewport.on("pointerup", this.onPointerUp.bind(this)),
                        this.viewport.on("pointerupoutside", this.onPointerUp.bind(this)),
                        this.viewport.on("pointercancel", this.onPointerUp.bind(this))
                    }
                }, {
                    key: "setSelected",
                    value: function(e) {
                        this.checkViewportDirty(),
                        Object(o.a)(Object(c.a)(d.prototype), "setSelected", this).call(this, e),
                        e ? (this.pointsContainer.visible = !0,
                        this.lines.tint = 16711680) : (this.pointsContainer.visible = !1,
                        this.lines.tint = 4494591,
                        this.deselectAllPoints())
                    }
                }, {
                    key: "isSelected",
                    value: function() {
                        return this._selected
                    }
                }, {
                    key: "checkViewportDirty",
                    value: function() {
                        this.viewportDirty && (this.viewportDirty = !1,
                        this.redrawLines(),
                        this.updatePointsScale())
                    }
                }, {
                    key: "move",
                    value: function(e, t) {
                        for (var i = 0; i < this.points.length; i++) {
                            var a = this.points[i];
                            a.x += e,
                            a.y += t,
                            this.pointsContainer.children[i].position.set(a.x, a.y)
                        }
                        this.calculatePolygonBounds(),
                        this.drawn && this.redraw()
                    }
                }, {
                    key: "onViewportResize",
                    value: function() {
                        this.isSelected() || this.isHovered ? (this.redrawLines(),
                        this.updatePointsScale()) : this.viewportDirty = !0
                    }
                }, {
                    key: "updatePointsScale",
                    value: function() {
                        var e, t = Object(a.a)(this.pointsContainer.children);
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                e.value.scale.set(this.viewport.worldScreenWidth / 2e3)
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                    }
                }, {
                    key: "hitTest",
                    value: function(e) {
                        var t = this.points.flatMap((function(e) {
                            return [e.x, e.y]
                        }
                        ));
                        return w.polygonBox(t, e.minX, e.minY, e.maxX - e.minX, e.maxY - e.minY)
                    }
                }, {
                    key: "height",
                    get: function() {
                        var e = Object(o.a)(Object(c.a)(d.prototype), "height", this);
                        return this.drawn || (e = this.getLocalBounds().height),
                        e
                    }
                }, {
                    key: "width",
                    get: function() {
                        var e = Object(o.a)(Object(c.a)(d.prototype), "width", this);
                        return this.drawn || (e = this.getLocalBounds().width),
                        e
                    }
                }, {
                    key: "getLocalBounds",
                    value: function(e) {
                        return this._polygonBounds
                    }
                }, {
                    key: "selectedPoints",
                    get: function() {
                        return this._selectedPoints
                    }
                }, {
                    key: "deletePoints",
                    value: function(e) {
                        var t, i = Object(a.a)(e);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var n = t.value;
                                if (this.points.length <= 3)
                                    break;
                                for (var s = this.points.length; --s >= 0; ) {
                                    var r = this.points[s];
                                    if (r.x == n.x && r.y == n.y) {
                                        this.points.splice(s, 1),
                                        this.pointsContainer.children[s].destroy();
                                        break
                                    }
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        this.calculatePolygonBounds(),
                        this.updatePointNames(),
                        this.deselectAllPoints(),
                        this.redraw()
                    }
                }, {
                    key: "addPointAt",
                    value: function(e, t) {
                        this.points.splice(e, 0, new f(t.x,t.y));
                        var i = this.newPointSprite(e, t);
                        this.pointsContainer.addChildAt(i, e),
                        this.calculatePolygonBounds(),
                        this.updatePointNames(),
                        this.updatePointsScale()
                    }
                }, {
                    key: "updatePointNames",
                    value: function() {
                        for (var e = 0; e < this.pointsContainer.children.length; e++) {
                            this.pointsContainer.children[e].name = e
                        }
                    }
                }, {
                    key: "updatePoints",
                    value: function() {
                        var e, t = Object(a.a)(this.pointsContainer.children);
                        try {
                            for (t.s(); !(e = t.n()).done; ) {
                                var i = e.value
                                  , n = this.points[parseInt(i.name)];
                                i.position.set(n.x, n.y)
                            }
                        } catch (e) {
                            t.e(e)
                        } finally {
                            t.f()
                        }
                        this.calculatePolygonBounds(),
                        this.drawn && this.redraw()
                    }
                }, {
                    key: "calculatePolygonBounds",
                    value: function() {
                        this._polygonBounds = v.a.boundsFromPoints(this.points)
                    }
                }, {
                    key: "getPointsAsSimplifiedArray",
                    value: function() {
                        var e, t = [], i = Object(a.a)(this.points);
                        try {
                            for (i.s(); !(e = i.n()).done; ) {
                                var n = e.value;
                                t.push({
                                    x: v.a.limitDecimals(n.x, 3),
                                    y: v.a.limitDecimals(n.y, 3)
                                })
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return t
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(o.a)(Object(c.a)(d.prototype), "toJsonObject", this).call(this);
                        return e.points = this.getPointsAsSimplifiedArray(),
                        e
                    }
                }, {
                    key: "getObjectBounds",
                    value: function() {
                        return this.polygonBounds
                    }
                }]),
                d
            }(d.a)
        }
        ).call(this, i("22a2"))
    },
    a799: function(e, t, i) {},
    a926: function(e, t, i) {
        "use strict";
        var a = i("d4ec")
          , n = i("bee2")
          , s = i("262e")
          , r = i("2caf")
          , o = i("9ab4")
          , c = i("60a3")
          , l = i("9935")
          , u = i("b4d9")
          , h = function(e) {
            Object(s.a)(i, e);
            var t = Object(r.a)(i);
            function i() {
                return Object(a.a)(this, i),
                t.apply(this, arguments)
            }
            return Object(n.a)(i, [{
                key: "mounted",
                value: function() {}
            }, {
                key: "yes",
                value: function() {
                    this.$close(u.e.Yes)
                }
            }, {
                key: "no",
                value: function() {
                    this.$close(u.e.No)
                }
            }, {
                key: "cancel",
                value: function() {
                    this.$close(u.e.Cancel)
                }
            }]),
            i
        }(l.DialogComponent);
        Object(o.a)([Object(c.b)()], h.prototype, "title", void 0),
        Object(o.a)([Object(c.b)()], h.prototype, "question", void 0);
        var d = h = Object(o.a)([c.a], h)
          , p = i("2877")
          , v = Object(p.a)(d, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "yes-no-dialog dialog-mask",
                on: {
                    mousedown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) ? null : "button"in t && 0 !== t.button ? null : t.target !== t.currentTarget ? null : e.cancel(t)
                    }
                }
            }, [i("div", {
                staticClass: "dialog-content"
            }, [i("header", [e._v(e._s(e.title))]), i("p", [e._v(e._s(e.question))]), i("footer", {
                staticClass: "children-inline text-center"
            }, [i("button", {
                staticClass: "btn",
                on: {
                    click: e.yes
                }
            }, [e._v("Yes")]), i("button", {
                staticClass: "btn",
                on: {
                    click: e.no
                }
            }, [e._v("No")]), i("button", {
                staticClass: "btn",
                on: {
                    click: e.cancel
                }
            }, [e._v("Cancel")])])])])
        }
        ), [], !1, null, null, null);
        t.a = v.exports
    },
    b0f4: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return b
            }
            ));
            var a = i("b85c")
              , n = i("5530")
              , s = i("d4ec")
              , r = i("bee2")
              , o = i("45eb")
              , c = i("7e84")
              , l = i("262e")
              , u = i("2caf")
              , h = (i("18a5"),
            i("9bf5"))
              , d = i("b4d9")
              , p = i("dfb9")
              , v = e.Point
              , f = e.Sprite
              , g = e.utils.TextureCache
              , b = (i("f53e"),
            function(e) {
                Object(l.a)(i, e);
                var t = Object(u.a)(i);
                function i(e, a, n, r, o) {
                    var c;
                    return Object(s.a)(this, i),
                    (c = t.call(this, e, n, r, o)).type = d.c.Current,
                    c.icon = new f(g["assets/ui/arrow.png"]),
                    c.icon.anchor.set(.5),
                    c.addChild(c.icon),
                    c.settings = a,
                    c
                }
                return Object(r.a)(i, [{
                    key: "settings",
                    get: function() {
                        return this._settings
                    },
                    set: function(e) {
                        this._settings = Object(n.a)({}, e),
                        this.updateIcon(),
                        this.setDirty()
                    }
                }, {
                    key: "updateIcon",
                    value: function() {
                        var e = Math.min(this.polygonBounds.width, this.polygonBounds.height)
                          , t = this.viewport.worldScreenWidth / 5e3
                          , i = p.a.lerp(40, 100, this.settings.strength / 100)
                          , a = this.icon.texture.width;
                        this.icon.width = Math.min(e, i * t),
                        this.icon.height = this.icon.texture.height * (this.icon.width / a),
                        this.icon.position.set(this.polygonBounds.x + this.polygonBounds.width / 2, this.polygonBounds.y + this.polygonBounds.height / 2),
                        this.icon.angle = this.settings.angle + 90
                    }
                }, {
                    key: "onViewportResize",
                    value: function() {
                        Object(o.a)(Object(c.a)(i.prototype), "onViewportResize", this).call(this),
                        this.updateIcon()
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        Object(o.a)(Object(c.a)(i.prototype), "redraw", this).call(this),
                        this.updateIcon()
                    }
                }, {
                    key: "updatePoints",
                    value: function() {
                        Object(o.a)(Object(c.a)(i.prototype), "updatePoints", this).call(this),
                        this.updateIcon()
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(o.a)(Object(c.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.settings = this.settings,
                        e
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var n, s = e, r = [], o = Object(a.a)(s.points);
                        try {
                            for (o.s(); !(n = o.n()).done; ) {
                                var c = n.value;
                                r.push(new v(c.x,c.y))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return new i(r,s.settings,t.parent,t.pointsLayer,t.viewport)
                    }
                }]),
                i
            }(h.a))
        }
        ).call(this, i("22a2"))
    },
    b1e3: function(e, t, i) {
        "use strict";
        t.a = {
            debug: !1,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            NUMPAD_0: 96,
            NUMPAD_1: 97,
            NUMPAD_2: 98,
            NUMPAD_3: 99,
            NUMPAD_4: 100,
            NUMPAD_5: 101,
            NUMPAD_6: 102,
            NUMPAD_7: 103,
            NUMPAD_8: 104,
            NUMPAD_9: 105,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_ADD: 107,
            NUMPAD_ENTER: 108,
            NUMPAD_SUBTRACT: 109,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            F13: 124,
            F14: 125,
            F15: 126,
            COLON: 186,
            EQUALS: 187,
            UNDERSCORE: 189,
            QUESTION_MARK: 191,
            TILDE: 192,
            OPEN_BRACKET: 219,
            BACKWARD_SLASH: 220,
            CLOSED_BRACKET: 221,
            QUOTES: 222,
            LESS_THAN: 188,
            GREATER_THAN: 190,
            BACKSPACE: 8,
            TAB: 9,
            CLEAR: 12,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACEBAR: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            INSERT: 45,
            DELETE: 46,
            HELP: 47,
            NUM_LOCK: 144
        }
    },
    b4d9: function(e, t, i) {
        "use strict";
        var a, n, s, r, o, c, l = i("d4ec"), u = i("bee2"), h = i("f11f"), d = Object(h.a)();
        i.d(t, "b", (function() {
            return a
        }
        )),
        i.d(t, "d", (function() {
            return s
        }
        )),
        i.d(t, "c", (function() {
            return r
        }
        )),
        i.d(t, "e", (function() {
            return o
        }
        )),
        i.d(t, "a", (function() {
            return p
        }
        )),
        i.d(t, "f", (function() {
            return v
        }
        )),
        function(e) {
            e[e.Creation = 1] = "Creation",
            e[e.Selection = 2] = "Selection",
            e[e.Move = 3] = "Move",
            e[e.Pan = 4] = "Pan",
            e[e.PointSelection = 5] = "PointSelection",
            e[e.ShapeSquare = 6] = "ShapeSquare",
            e[e.Zoom = 7] = "Zoom",
            e[e.HideSpace = 8] = "HideSpace",
            e[e.Rotate = 9] = "Rotate",
            e[e.Animal = 10] = "Animal",
            e[e.Prop = 11] = "Prop"
        }(a || (a = {})),
        function(e) {
            e[e.Cold = 1] = "Cold",
            e[e.Warm = 2] = "Warm",
            e[e.Shallow = 4] = "Shallow",
            e[e.Deep = 8] = "Deep",
            e[e.Fresh = 16] = "Fresh",
            e[e.Salt = 32] = "Salt"
        }(n || (n = {})),
        function(e) {
            e.Square = "Square"
        }(s || (s = {})),
        function(e) {
            e.Terrain = "Ter",
            e.Water = "Wat",
            e.Sky = "Sky",
            e.Habitat = "Hab",
            e.AirPocket = "Air",
            e.BackgroundTerrain = "Bg",
            e.NPCSpawn = "NPC",
            e.FoodSpawn = "Food",
            e.Ceiling = "C",
            e.HideSpace = "H",
            e.Animal = "A",
            e.Current = "Cu",
            e.Trigger = "Tr",
            e.Prop = "P"
        }(r || (r = {})),
        function(e) {
            e[e.Yes = 1] = "Yes",
            e[e.No = 2] = "No",
            e[e.Cancel = 3] = "Cancel"
        }(o || (o = {})),
        function(e) {
            e[e.Passive = 1] = "Passive",
            e[e.PassiveAggressive = 2] = "PassiveAggressive",
            e[e.Aggressive = 3] = "Aggressive",
            e[e.PassiveSwarm = 4] = "PassiveSwarm",
            e[e.PassiveWanderer = 5] = "PassiveWanderer"
        }(c || (c = {}));
        var p = {
            1: {
                id: 1,
                name: "Passive",
                description: "Eats food. Escapes when attacked"
            },
            2: {
                id: 2,
                name: "Passive Aggressive",
                description: "Eats food. Attacks back when attacked"
            },
            3: {
                id: 3,
                name: "Aggressive",
                description: "Eats food. Attacks whoever it sees"
            },
            6: {
                id: 6,
                name: "Aggressive Swarm",
                description: "Eats food and attacks whoever it sees. Tends to form groups"
            },
            4: {
                id: 4,
                name: "Passive Swarm",
                description: "Eats food. Tends to form groups"
            },
            5: {
                id: 5,
                name: "Passive Wanderer",
                description: "Just moves, doesn't eat (ie. Lion Mane Jellyfish)"
            },
            7: {
                id: 7,
                name: "Passive Dumb",
                description: "Moves in random directions (ie. Fireflies)"
            }
        }
          , v = function() {
            function e() {
                Object(l.a)(this, e)
            }
            return Object(u.a)(e, null, [{
                key: "setGAPage",
                value: function(e) {
                    window.gtag && window.gtag("config", "UA-146476848-1", {
                        page_path: e
                    })
                }
            }, {
                key: "sendGAEvent",
                value: function(e, t) {
                    window.gtag && window.gtag("event", t, {
                        event_category: e
                    })
                }
            }, {
                key: "sendGAException",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    window.gtag && window.gtag("event", "exception", {
                        description: e,
                        fatal: t
                    })
                }
            }]),
            e
        }();
        v.API_URL = -1 == window.location.host.indexOf("localhost") ? "https://api.deeeep.io" : "http://localhost:8091",
        v.isSsl = "https:" === window.location.protocol,
        v.deeeepPath = "https://deeeep.io/new",
        v.mapMakerPath = "https://deeeep.io/mapmaker",
        v.deeeepFileHost = "https://deeeep.io/files",
        v.version = "v0.1.7",
        v.subreddit = "https://www.reddit.com/r/deeeepiomapmaker",
        v.foodDensity = 12.3,
        v.emitter = d
    },
    b912: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return y
            }
            ));
            var a = i("b85c")
              , n = i("d4ec")
              , s = i("bee2")
              , r = i("45eb")
              , o = i("7e84")
              , c = i("262e")
              , l = i("2caf")
              , u = (i("18a5"),
            i("a15b"),
            i("53ce"))
              , h = i("b4d9")
              , d = i("2af5")
              , p = i("2475")
              , v = i("dfb9")
              , f = e.Graphics
              , g = e.Text
              , b = e.TextStyle
              , y = function(e) {
                Object(c.a)(i, e);
                var t = Object(l.a)(i);
                function i(e, a, s, r, o, c) {
                    var l;
                    Object(n.a)(this, i),
                    (l = t.call(this, e, a, r, o, c)).settings = {
                        area: 0
                    },
                    l.shape = null,
                    l.type = h.c.Habitat;
                    var u = l.shape = new f;
                    return l.interactive = !0,
                    l.addChild(u),
                    l.text = new g("",i.textStyle.clone()),
                    l.text.style.wordWrapWidth = l.width,
                    l.text.anchor.set(.5),
                    l.text.resolution = .5,
                    l.updateTextSize(),
                    l.addChild(l.text),
                    l.setSettings(s),
                    l
                }
                return Object(s.a)(i, [{
                    key: "getSettings",
                    value: function() {
                        return this.settings
                    }
                }, {
                    key: "setSettings",
                    value: function(e) {
                        this.settings.area = e.area;
                        var t, i, n = [], s = [], r = Object(a.a)(d.a.getGrouped());
                        try {
                            for (r.s(); !(t = r.n()).done; ) {
                                var o = t.value;
                                for (var c in o) {
                                    var l = o[c];
                                    (this.settings.area & c) == c && n.push(l.title)
                                }
                                n.length > 0 && (s.push(n.join("/")),
                                n.length = 0)
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        i = s.join(", "),
                        this.text.text = i;
                        var u = 0
                          , h = 1;
                        for (var v in d.a.getAll())
                            if (0 != (v & this.settings.area)) {
                                var f = d.a.get(v);
                                0 == f.color || (f.color < 2 ? h *= f.color : u = 0 != u ? p.a.mix(u, f.color) : f.color)
                            }
                        this.color = p.a.makeBrighter(u, h),
                        this.drawn && this.redraw()
                    }
                }, {
                    key: "updatePoints",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "updatePoints", this).call(this),
                        this.text.style.wordWrapWidth = this.width / (this.viewport.worldScreenWidth / 7e3)
                    }
                }, {
                    key: "updateTextSize",
                    value: function() {
                        this.text.scale.set(this.viewport.worldScreenWidth / 7e3),
                        this.text.style.wordWrapWidth = this.width / (this.viewport.worldScreenWidth / 7e3)
                    }
                }, {
                    key: "onViewportResize",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "onViewportResize", this).call(this),
                        this.updateTextSize()
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        this.shape.clear(),
                        this.shape.beginFill(this.color, .3),
                        this.shape.drawPolygon(this.points),
                        this.shape.endFill(),
                        this.text.position.set(this._polygonBounds.x + this._polygonBounds.width / 2, this._polygonBounds.y + this._polygonBounds.height / 2),
                        Object(r.a)(Object(o.a)(i.prototype), "redraw", this).call(this)
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(r.a)(Object(o.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.settings = v.a.deepCopy(this.settings),
                        e
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var a = e;
                        return new i(a.position,a.size,a.settings,t.parent,t.pointsLayer,t.viewport)
                    }
                }]),
                i
            }(u.a);
            y.textStyle = new b({
                fill: 16777215,
                fontSize: 64,
                wordWrap: !0,
                align: "center"
            })
        }
        ).call(this, i("22a2"))
    },
    bb4b: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return c
            }
            ));
            var a = i("d4ec")
              , n = i("bee2")
              , s = i("262e")
              , r = i("2caf")
              , o = i("b4d9")
              , c = function(e) {
                Object(s.a)(i, e);
                var t = Object(r.a)(i);
                function i(e, n) {
                    var s;
                    return Object(a.a)(this, i),
                    (s = t.call(this))._selected = !1,
                    s.container = e,
                    s.viewport = n,
                    s.id = i.newId(),
                    s.on("pointerover", (function(e) {
                        s.isHovered = !0,
                        s.updateUI()
                    }
                    )),
                    s.on("pointerout", (function(e) {
                        s.isHovered = !1,
                        s.updateUI()
                    }
                    )),
                    s
                }
                return Object(n.a)(i, [{
                    key: "isSelected",
                    value: function() {
                        return this._selected
                    }
                }, {
                    key: "setSelected",
                    value: function(e) {
                        this._selected = e,
                        this.updateUI()
                    }
                }, {
                    key: "setDirty",
                    value: function() {
                        this.container.dirty = o.f.vueData.mapDirty = !0
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        return {
                            id: this.id,
                            type: this.type.valueOf(),
                            layerId: this.parentLayer.layerId
                        }
                    }
                }], [{
                    key: "newId",
                    value: function() {
                        return ++i.lastId
                    }
                }]),
                i
            }(e.Container);
            c.lastId = 0
        }
        ).call(this, i("22a2"))
    },
    c98d: function(e, t, i) {},
    cd49: function(e, t, i) {
        "use strict";
        i.r(t),
        i("e623"),
        i("e379"),
        i("5dc8"),
        i("37e1"),
        i("0fae"),
        i("5a4b");
        var a = i("5c96")
          , n = i.n(a)
          , s = i("5530")
          , r = i("2909")
          , o = i("b85c")
          , c = i("1da1")
          , l = i("d4ec")
          , u = i("bee2")
          , h = (i("96cf"),
        i("d81d"),
        i("b0c0"),
        i("a434"),
        i("b4d9"))
          , d = i("b1e3")
          , p = function() {
            function e() {
                Object(l.a)(this, e),
                this._objects = []
            }
            return Object(u.a)(e, [{
                key: "get",
                value: function() {
                    return this._objects
                }
            }, {
                key: "clear",
                value: function() {
                    this._objects = []
                }
            }, {
                key: "set",
                value: function(e) {
                    this._objects = Object(r.a)(e)
                }
            }, {
                key: "empty",
                value: function() {
                    return 0 == this._objects.length
                }
            }]),
            e
        }()
          , v = i("9935")
          , f = i("262e")
          , g = i("2caf")
          , b = (i("99af"),
        i("9ab4"))
          , y = i("60a3")
          , m = i("2cbb")
          , w = i("332f")
          , k = i("51ff")
          , S = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                return Object(l.a)(this, i),
                t.apply(this, arguments)
            }
            return Object(u.a)(i, [{
                key: "mounted",
                value: function() {}
            }, {
                key: "yes",
                value: function() {
                    this.$close(!0)
                }
            }, {
                key: "no",
                value: function() {
                    this.$close(!1)
                }
            }]),
            i
        }(v.DialogComponent);
        Object(b.a)([Object(y.b)()], S.prototype, "title", void 0),
        Object(b.a)([Object(y.b)()], S.prototype, "question", void 0);
        var x = S = Object(b.a)([y.a], S)
          , C = i("2877")
          , O = Object(C.a)(x, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "yes-no-dialog dialog-mask"
            }, [i("div", {
                staticClass: "dialog-content"
            }, [i("header", [e._v(e._s(e.title))]), i("p", [e._v(e._s(e.question))]), i("footer", {
                staticClass: "children-inline text-center"
            }, [i("button", {
                staticClass: "btn",
                on: {
                    click: e.yes
                }
            }, [e._v("Yes")]), i("button", {
                staticClass: "btn",
                on: {
                    click: e.no
                }
            }, [e._v("No")])])])])
        }
        ), [], !1, null, null, null).exports
          , j = Object(v.create)(k.a)
          , _ = Object(v.create)(O, "title", "question")
          , M = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).user = h.f.vueData.user,
                e.selectedMap = null,
                e.title = "Maps",
                e.authService = new m.a,
                e.mapService = new w.a,
                e.maps = [],
                e.hasPermission = !1,
                e.totalCount = 0,
                e.totalPages = 1,
                e.loading = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "mounted",
                value: function() {
                    h.f.inputManager.disableKeyBindings(),
                    h.f.vueData.on("userChanged", this.userChanged),
                    this.init()
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    h.f.inputManager.enableKeyBindings(),
                    h.f.vueData.removeCb("userChanged", this.userChanged)
                }
            }, {
                key: "setOrderBy",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.filters.order == t ? this.filters.direction = "DESC" == this.filters.direction ? "ASC" : "DESC" : (this.filters.order = t,
                                    this.filters.direction = "DESC"),
                                    this.filters.page = 1,
                                    this.updateMaps();
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "userChanged",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.user = t;
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "init",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.user || (this.filters.scope = "public"),
                                    e.next = 3,
                                    this.updateMaps();
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "selectMap",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.selectedMap = t,
                                    this.hasPermission = !!t && m.a.hasPermission(this.user, t);
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "selectTab",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.filters.page = 1,
                                    "mine" != t || this.user) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.next = 4,
                                    j();
                                case 4:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 7:
                                    return this.selectMap(null),
                                    this.filters.scope = t,
                                    e.next = 11,
                                    this.updateMaps();
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setTag",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.filters.tag = t,
                                    this.filters.page = 1,
                                    e.next = 4,
                                    this.updateMaps();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "updateMaps",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        var t, i, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t = this.maps = [],
                                    e.t0 = this.filters.scope,
                                    e.next = "mine" === e.t0 ? 4 : "public" === e.t0 ? 10 : 16;
                                    break;
                                case 4:
                                    return e.next = 6,
                                    this.mapService.getAllByUserId(this.user.id, this.filters.page, 7, this.filters.order, this.filters.direction, "likes" == this.filters.order ? this.filters.period : 0, this.filters.tag);
                                case 6:
                                    return i = e.sent,
                                    t = i.items,
                                    this.totalCount = i.count,
                                    e.abrupt("break", 16);
                                case 10:
                                    return e.next = 12,
                                    this.mapService.getAll(this.filters.page, 7, this.filters.order, this.filters.direction, !1, "likes" == this.filters.order ? this.filters.period : 0, this.filters.tag);
                                case 12:
                                    return a = e.sent,
                                    t = a.items,
                                    this.totalCount = a.count,
                                    e.abrupt("break", 16);
                                case 16:
                                    this.totalPages = Math.ceil(this.totalCount / 7),
                                    this.maps = t;
                                case 18:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "open",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.loading = !0,
                                    e.next = 3,
                                    h.f.vueData.callBooleanCbs("beforeMapChange");
                                case 3:
                                    if (!e.sent) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 7,
                                    this.mapService.getById(t.id);
                                case 7:
                                    t = e.sent,
                                    h.f.vueData.setMap({
                                        map: t,
                                        shouldReset: !0
                                    }),
                                    this.loading = !1,
                                    this.$close(!0);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "clone",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.loading = !0,
                                    e.next = 3,
                                    h.f.vueData.callBooleanCbs("beforeMapChange");
                                case 3:
                                    if (!e.sent) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 7,
                                    this.mapService.getById(t.id);
                                case 7:
                                    t = e.sent,
                                    h.f.mapEditor.cloneMap(t),
                                    this.loading = !1,
                                    this.$close(!0);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "remove",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    _("Delete " + t.title + "?", "This action cannot be reversed");
                                case 2:
                                    if (!e.sent) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.prev = 4,
                                    e.next = 7,
                                    this.mapService.delete(t);
                                case 7:
                                    e.sent,
                                    this.maps.splice(this.maps.indexOf(t), 1),
                                    e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11,
                                    e.t0 = e.catch(4),
                                    console.error(e.t0);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[4, 11]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setPage",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.filters.page = Math.max(1, Math.min(this.totalPages, t)),
                                    e.next = 3,
                                    this.updateMaps();
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "cancel",
                value: function() {
                    this.$close(!1)
                }
            }, {
                key: "convertTime",
                value: function(e, t, i) {
                    var a = i.prefix || ""
                      , n = i.suffix || "ago"
                      , s = i.yearSuffix || "y"
                      , r = i.monthSuffix || "m"
                      , o = i.daySuffix || "d"
                      , c = i.hourSuffix || "h"
                      , l = i.minuteSuffix || "min"
                      , u = i.diffSpacer || ""
                      , h = (new Date).getTime() - new Date(Date.parse(e)).getTime()
                      , d = Math.floor(h / 1e3 / 60 / 60 / 24 / 30 / 12);
                    if (h -= 1e3 * d * 60 * 60 * 24 * 30 * 12,
                    d > 0)
                        return "".concat(a, " ").concat(d).concat(u).concat(s, " ").concat(n);
                    var p = Math.floor(h / 1e3 / 60 / 60 / 24 / 30);
                    if (h -= 1e3 * p * 60 * 60 * 24 * 30,
                    p > 0)
                        return "".concat(a, " ").concat(p).concat(u).concat(r, " ").concat(n);
                    var v = Math.floor(h / 1e3 / 60 / 60 / 24);
                    if (h -= 1e3 * v * 60 * 60 * 24,
                    v > 0)
                        return "".concat(a, " ").concat(v).concat(u).concat(o, " ").concat(n);
                    var f = Math.floor(h / 1e3 / 60 / 60);
                    if (h -= 1e3 * f * 60 * 60,
                    f > 0)
                        return "".concat(a, " ").concat(f).concat(u).concat(c, " ").concat(n);
                    var g = Math.floor(h / 1e3 / 60);
                    return h -= 1e3 * g * 60,
                    g > 0 ? "".concat(a, " ").concat(g).concat(u).concat(l, " ").concat(n) : "".concat(a, " a ").concat(l, " ").concat(n)
                }
            }]),
            i
        }(v.DialogComponent);
        Object(b.a)([Object(y.b)()], M.prototype, "currentMap", void 0),
        Object(b.a)([Object(y.b)()], M.prototype, "filters", void 0);
        var P = M = Object(b.a)([y.a], M)
          , D = Object(C.a)(P, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "maps-dialog dialog-mask",
                on: {
                    mousedown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) ? null : "button"in t && 0 !== t.button ? null : t.target !== t.currentTarget ? null : e.cancel(t)
                    }
                }
            }, [i("div", {
                staticClass: "dialog-content"
            }, [i("header", [e._v(e._s(e.title))]), i("div", [i("div", {
                staticClass: "tab-header children-inline text-left"
            }, [i("div", {
                staticClass: "tab",
                class: {
                    selected: "mine" == e.filters.scope
                },
                on: {
                    click: function(t) {
                        return e.selectTab("mine")
                    }
                }
            }, [e._v("Mine")]), i("div", {
                staticClass: "tab",
                class: {
                    selected: "public" == e.filters.scope
                },
                on: {
                    click: function(t) {
                        return e.selectTab("public")
                    }
                }
            }, [e._v("Public")]), i("div", {
                staticClass: "filters children-inline"
            }, [i("div", {
                staticClass: "filter"
            }, [i("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.filters.order,
                    expression: "filters.order"
                }],
                on: {
                    change: [function(t) {
                        var i = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            return "_value"in e ? e._value : e.value
                        }
                        ));
                        e.$set(e.filters, "order", t.target.multiple ? i : i[0])
                    }
                    , e.updateMaps]
                }
            }, [i("option", {
                attrs: {
                    value: "likes"
                }
            }, [e._v("Most liked")]), i("option", {
                attrs: {
                    value: "updated_at"
                }
            }, [e._v("Updated")]), i("option", {
                attrs: {
                    value: "created_at"
                }
            }, [e._v("Newest")])])]), i("div", {
                staticClass: "filter"
            }, ["likes" == e.filters.order ? i("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.filters.period,
                    expression: "filters.period"
                }],
                on: {
                    change: [function(t) {
                        var i = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            return "_value"in e ? e._value : e.value
                        }
                        ));
                        e.$set(e.filters, "period", t.target.multiple ? i : i[0])
                    }
                    , e.updateMaps]
                }
            }, [i("option", {
                domProps: {
                    value: 1
                }
            }, [e._v("Last day")]), i("option", {
                domProps: {
                    value: 7
                }
            }, [e._v("Last 7 days")]), i("option", {
                domProps: {
                    value: 30
                }
            }, [e._v("Last 30 days")]), i("option", {
                domProps: {
                    value: 0
                }
            }, [e._v("Always")])]) : e._e()]), e.filters.tag ? i("div", {
                staticClass: "filter"
            }, [i("div", {
                staticClass: "tag"
            }, [i("span", [e._v(e._s(e.filters.tag))]), i("span", {
                staticClass: "remove",
                on: {
                    click: function(t) {
                        return e.setTag(null)
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("close")])])])]) : e._e()])]), e._m(0), i("div", {
                staticClass: "maps"
            }, [i("ul", e._l(e.maps, (function(t) {
                return i("li", {
                    staticClass: "map children-inline-top",
                    class: {
                        selected: !!e.selectedMap && t.string_id == e.selectedMap.string_id
                    },
                    on: {
                        click: function(i) {
                            return e.selectMap(t)
                        }
                    }
                }, [i("div", {
                    staticClass: "map-likes col-1"
                }, [e._v(e._s(t.likes) + " "), i("i", {
                    staticClass: "material-icon"
                }, [e._v("favorite")])]), i("div", {
                    staticClass: "map-meta col-3"
                }, [i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.top",
                        value: {
                            content: t.title,
                            delay: {
                                show: 500,
                                hide: 0
                            },
                            classes: "small-tooltip"
                        },
                        expression: "{content: map.title, delay: { show: 500, hide: 0 }, classes: 'small-tooltip'}",
                        modifiers: {
                            top: !0
                        }
                    }],
                    staticClass: "title"
                }, [e._v(e._s(t.title))]), i("div", {
                    staticClass: "id"
                }, [e._v(e._s(t.string_id))])]), i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.top",
                        value: {
                            content: t.description,
                            delay: {
                                show: 500,
                                hide: 0
                            },
                            classes: "small-tooltip"
                        },
                        expression: "{content: map.description, delay: { show: 500, hide: 0 }, classes: 'small-tooltip'}",
                        modifiers: {
                            top: !0
                        }
                    }],
                    staticClass: "map-description col-5"
                }, [i("div", {
                    staticClass: "description"
                }, [e._v(e._s(t.description))]), i("div", {
                    staticClass: "tags"
                }, [i("ul", e._l(t.tags, (function(t) {
                    return i("li", {
                        staticClass: "tag",
                        on: {
                            click: function(i) {
                                return i.stopPropagation(),
                                e.setTag(t.id)
                            }
                        }
                    }, [e._v(e._s(t.id))])
                }
                )), 0)])]), i("div", {
                    staticClass: "map-creator col-2"
                }, [i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.top",
                        value: {
                            content: t.user.name,
                            delay: {
                                show: 500,
                                hide: 0
                            },
                            classes: "small-tooltip"
                        },
                        expression: "{content: map.user.name, delay: { show: 500, hide: 0 }, classes: 'small-tooltip'}",
                        modifiers: {
                            top: !0
                        }
                    }],
                    staticClass: "name"
                }, [e._v(e._s(t.user.name))]), i("div", {
                    staticClass: "username"
                }, [e._v(e._s(t.user.username))])]), i("div", {
                    staticClass: "map-updated col-2"
                }, [i("span", [i("timeago", {
                    attrs: {
                        datetime: t.updated_at,
                        converter: e.convertTime
                    }
                })], 1)])])
            }
            )), 0)]), i("div", {
                staticClass: "pagination children-inline text-center"
            }, [i("a", {
                class: {
                    disabled: e.filters.page <= 1
                },
                on: {
                    click: function(t) {
                        return e.setPage(1)
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("keyboard_arrow_left")]), i("i", {
                staticClass: "material-icon second-icon"
            }, [e._v("keyboard_arrow_left")])]), i("a", {
                class: {
                    disabled: e.filters.page <= 1
                },
                on: {
                    click: function(t) {
                        return e.setPage(e.filters.page - 1)
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("keyboard_arrow_left")])]), e.totalPages > 1 ? i("span", {
                staticClass: "current-filters.page"
            }, [e._v(e._s(e.filters.page))]) : e._e(), i("a", {
                class: {
                    disabled: e.filters.page >= e.totalPages
                },
                on: {
                    click: function(t) {
                        return e.setPage(e.filters.page + 1)
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("keyboard_arrow_right")])]), i("a", {
                class: {
                    disabled: e.filters.page >= e.totalPages
                },
                on: {
                    click: function(t) {
                        return e.setPage(e.totalPages)
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("keyboard_arrow_right")]), i("i", {
                staticClass: "material-icon second-icon"
            }, [e._v("keyboard_arrow_right")])])])]), i("footer", {
                staticClass: "children-inline text-right"
            }, [e.selectedMap && e.hasPermission ? i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: e.selectedMap == e.currentMap
                },
                on: {
                    click: function(t) {
                        return e.remove(e.selectedMap)
                    }
                }
            }, [e._v("Delete")]) : e._e(), i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.selectedMap || e.loading
                },
                on: {
                    click: function(t) {
                        return e.clone(e.selectedMap)
                    }
                }
            }, [e._v("Clone")]), i("button", {
                staticClass: "btn",
                on: {
                    click: e.cancel
                }
            }, [e._v("Cancel")]), i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.selectedMap || e.loading
                },
                on: {
                    click: function(t) {
                        return e.open(e.selectedMap)
                    }
                }
            }, [e._v("Open")])])])])
        }
        ), [function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "header children-inline text-left"
            }, [i("div", {
                staticClass: "col-1 col"
            }, [e._v(" Likes ")]), i("div", {
                staticClass: "col-3 col"
            }, [e._v("Name")]), i("div", {
                staticClass: "col-5 col"
            }, [e._v("Description")]), i("div", {
                staticClass: "col-2 col"
            }, [e._v("Creator")]), i("div", {
                staticClass: "col-1 col"
            }, [e._v(" Updated ")])])
        }
        ], !1, null, null, null).exports
          , L = i("4d68")
          , T = i("fded")
          , B = i("7523")
          , z = i("1dab")
          , A = i("db22")
          , R = i("4116")
          , I = Object(v.create)(D)
          , E = new (function() {
            function e() {
                Object(l.a)(this, e),
                this.pointerMode = h.b.Pan,
                this.worldSettings = {
                    gravity: 9.8
                },
                this.worldSize = {
                    width: 800,
                    height: 75
                },
                this.layers = [],
                this.selectedLayer = null,
                this.cbs = {},
                this.currentTexture = null,
                this.opacity = .9,
                this.selectedObjectCount = 0,
                this.selectedObjectType = null,
                this.selectedObjectsLayer = null,
                this.skyGradientColors = ["#cfe9fc", "#87c7f8"],
                this.borderColor = "#003a62",
                this.waterSettings = {
                    colors: ["#003a62", "#031d30"],
                    hasBorder: !0
                },
                this.npcSpawnSettings = {
                    fishLevels: [],
                    animalCount: 10,
                    firstSpawnMs: 0,
                    reSpawnMs: 2e3,
                    npcType: 1,
                    restrictMovement: !1
                },
                this.availableNpcCount = 0,
                this.foodSpawnSettings = {
                    foodIds: [],
                    count: 0,
                    firstSpawnMs: 0,
                    reSpawnMs: 1e3,
                    area: 10,
                    onlyOnWater: !1
                },
                this.terrainSettings = {
                    collidable: !0
                },
                this.hideSpaceSettings = {
                    type: 1
                },
                this.currentSettings = {
                    angle: 0,
                    strength: 10
                },
                this.animalSettings = {
                    fishLevel: 0
                },
                this.propSettings = {
                    type: 1
                },
                this.availableFoodCount = 0,
                this.mapsSearchFilters = {
                    scope: "public",
                    order: "updated_at",
                    direction: "DESC",
                    tag: null,
                    page: 1,
                    period: 1
                },
                this.habitatSettings = {
                    area: 0
                },
                this.tools = [{
                    name: "Object selection (o)",
                    keyCode: d.a.O,
                    pointerMode: h.b.Selection,
                    iconId: "build"
                }, {
                    name: "Point selection (p)",
                    keyCode: d.a.P,
                    pointerMode: h.b.PointSelection,
                    iconId: "open_in_new"
                }, {
                    name: "Move (m)",
                    keyCode: d.a.M,
                    pointerMode: h.b.Move,
                    iconId: "open_with"
                }, {
                    name: "Rotate (t)",
                    keyCode: d.a.T,
                    pointerMode: h.b.Rotate,
                    iconId: "crop_rotate"
                }, {
                    name: "Draw points (d)",
                    keyCode: d.a.D,
                    pointerMode: h.b.Creation,
                    iconId: "create"
                }, {
                    name: "Pan (v)",
                    keyCode: d.a.V,
                    pointerMode: h.b.Pan,
                    iconId: "pan_tool"
                }, {
                    name: "Zoom (z)",
                    keyCode: d.a.Z,
                    pointerMode: h.b.Zoom,
                    iconId: "search"
                }, {
                    name: "Rectangle (r)",
                    keyCode: d.a.R,
                    pointerMode: h.b.ShapeSquare,
                    iconId: "crop_square"
                }, {
                    name: "Hide Space (h)",
                    keyCode: d.a.H,
                    pointerMode: h.b.HideSpace,
                    iconId: "home"
                }, {
                    name: "Animals (a)",
                    keyCode: d.a.A,
                    pointerMode: h.b.Animal,
                    iconId: "adb"
                }, {
                    name: "Props (x)",
                    keyCode: d.a.X,
                    pointerMode: h.b.Prop,
                    iconId: "event_seat"
                }],
                this.packs = [],
                this.foods = [],
                this.textures = [],
                this.hideSpaces = [],
                this.props = [],
                this.animals = B.a.getAll(),
                this.clipboard = new p,
                this.historyStatus = {
                    canUndo: !1,
                    canRedo: !1
                },
                this.user = null,
                this.token = null,
                this.map = null,
                this.mapDirty = !1
            }
            return Object(u.a)(e, [{
                key: "selectLayer",
                value: function(e) {
                    this.selectedLayer = e,
                    this.currentTexture || (this.currentTexture = this.textures[0]),
                    this.callCbs("selectLayer", e)
                }
            }, {
                key: "selectTool",
                value: function(e) {
                    this.selectedLayer && (this.selectedLayer.onlyTheseTools ? -1 == this.selectedLayer.onlyTheseTools.indexOf(e) : this.selectedLayer.excludedToolIds.indexOf(e) > -1) || (this.pointerMode = e,
                    this.callCbs("selectTool", e))
                }
            }, {
                key: "addLayer",
                value: function(e, t, i, a, n) {
                    var s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : []
                      , r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null
                      , o = {
                        id: e,
                        title: t,
                        preview: a,
                        description: i,
                        onlyInteractiveWhenSelected: n || !1,
                        visible: !0,
                        excludedToolIds: s,
                        onlyTheseTools: r
                    };
                    this.layers.push(o),
                    this.callCbs("newLayer", o)
                }
            }, {
                key: "on",
                value: function(e, t) {
                    this.cbs[e] || (this.cbs[e] = []),
                    this.cbs[e].push(t)
                }
            }, {
                key: "callCbs",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t, i) {
                        var a, n, s;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.cbs[t]) {
                                        e.next = 18;
                                        break
                                    }
                                    a = Object(o.a)(this.cbs[t]),
                                    e.prev = 2,
                                    a.s();
                                case 4:
                                    if ((n = a.n()).done) {
                                        e.next = 10;
                                        break
                                    }
                                    return s = n.value,
                                    e.next = 8,
                                    s(i);
                                case 8:
                                    e.next = 4;
                                    break;
                                case 10:
                                    e.next = 15;
                                    break;
                                case 12:
                                    e.prev = 12,
                                    e.t0 = e.catch(2),
                                    a.e(e.t0);
                                case 15:
                                    return e.prev = 15,
                                    a.f(),
                                    e.finish(15);
                                case 18:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[2, 12, 15, 18]])
                    }
                    )));
                    return function(t, i) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "callBooleanCbs",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t, i) {
                        var a, n, s, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = !0,
                                    !this.cbs[t]) {
                                        e.next = 21;
                                        break
                                    }
                                    n = Object(o.a)(this.cbs[t]),
                                    e.prev = 3,
                                    n.s();
                                case 5:
                                    if ((s = n.n()).done) {
                                        e.next = 13;
                                        break
                                    }
                                    return r = s.value,
                                    e.next = 9,
                                    r(i);
                                case 9:
                                    e.sent || (a = !1);
                                case 11:
                                    e.next = 5;
                                    break;
                                case 13:
                                    e.next = 18;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(3),
                                    n.e(e.t0);
                                case 18:
                                    return e.prev = 18,
                                    n.f(),
                                    e.finish(18);
                                case 21:
                                    return e.abrupt("return", a);
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[3, 15, 18, 21]])
                    }
                    )));
                    return function(t, i) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setWorldSize",
                value: function(e, t) {
                    e == this.worldSize.width && t == this.worldSize.height || (this.worldSize.width = e,
                    this.worldSize.height = t,
                    this.callCbs("worldSizeChanged", this.worldSize))
                }
            }, {
                key: "setWorldSettings",
                value: function(e) {
                    this.worldSettings.gravity = e.gravity,
                    this.callCbs("worldSettingsChanged", this.worldSize)
                }
            }, {
                key: "setTexture",
                value: function(e) {
                    this.currentTexture = e,
                    this.callCbs("textureChanged", e)
                }
            }, {
                key: "setSelectedObjectType",
                value: function(e) {
                    this.selectedObjectType = e,
                    this.callCbs("selectedObjectTypeChanged", e),
                    null == e && (null == this.opacity && (this.opacity = .9),
                    null == this.borderColor && (this.borderColor = "#003a62"),
                    null == this.currentTexture && null != this.selectedLayer && (this.currentTexture = this.textures[0]))
                }
            }, {
                key: "setWaterColors",
                value: function(e) {}
            }, {
                key: "setWaterSettings",
                value: function(e) {
                    this.waterSettings.colors[0] = e.colors[0],
                    this.waterSettings.colors[1] = e.colors[1],
                    this.waterSettings.hasBorder = e.hasBorder,
                    this.callCbs("waterSettingsChanged", this.waterSettings)
                }
            }, {
                key: "setSkyColors",
                value: function(e) {
                    this.skyGradientColors[0] = e[0],
                    this.skyGradientColors[1] = e[1],
                    this.callCbs("colorsChanged", this.skyGradientColors)
                }
            }, {
                key: "setOpacity",
                value: function(e) {
                    this.opacity = e,
                    this.callCbs("opacityChanged", e)
                }
            }, {
                key: "setBorderColor",
                value: function(e) {
                    this.borderColor = e,
                    this.callCbs("borderColorChanged", e)
                }
            }, {
                key: "setHabitatSettings",
                value: function(e) {
                    this.habitatSettings.area = e.area,
                    this.callCbs("habitatSettingsChanged", this.habitatSettings)
                }
            }, {
                key: "setLayerVisible",
                value: function(e, t) {
                    e.visible = t,
                    this.callCbs("layerVisibilityChanged", e)
                }
            }, {
                key: "setUser",
                value: function(e) {
                    this.user = e,
                    this.token = e ? e.session_token : null,
                    this.callCbs("userChanged", e)
                }
            }, {
                key: "setMap",
                value: function(e) {
                    this.map = e.map,
                    this.callCbs("mapChanged", e),
                    e.map && e.map.id ? "Map" == h.f.router.currentRoute.name && h.f.router.currentRoute.params.stringId == e.map.string_id || (h.f.router.push("/map/" + e.map.string_id),
                    h.f.setGAPage("/map/" + e.map.string_id)) : (h.f.router.push("/"),
                    h.f.setGAPage("/"))
                }
            }, {
                key: "emit",
                value: function(e, t) {
                    this.callCbs(e, t)
                }
            }, {
                key: "removeCb",
                value: function(e, t) {
                    var i;
                    this.cbs[e] && (i = this.cbs[e].indexOf(t)) > -1 && this.cbs[e].splice(i, 1)
                }
            }, {
                key: "openMapDialog",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    I();
                                case 2:
                                    e.sent;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "setNPCSpawnSettings",
                value: function(e) {
                    this.npcSpawnSettings.fishLevels = Object(r.a)(e.fishLevels),
                    this.npcSpawnSettings.firstSpawnMs = e.firstSpawnMs,
                    this.npcSpawnSettings.reSpawnMs = e.reSpawnMs,
                    this.npcSpawnSettings.animalCount = e.animalCount,
                    this.npcSpawnSettings.npcType = e.npcType,
                    this.npcSpawnSettings.restrictMovement = e.restrictMovement,
                    this.callCbs("npcSpawnSettingsChanged", this.npcSpawnSettings)
                }
            }, {
                key: "setFoodSpawnSettings",
                value: function(e) {
                    this.foodSpawnSettings.foodIds = Object(r.a)(e.foodIds),
                    this.foodSpawnSettings.firstSpawnMs = e.firstSpawnMs,
                    this.foodSpawnSettings.reSpawnMs = e.reSpawnMs,
                    this.foodSpawnSettings.count = e.count,
                    this.foodSpawnSettings.onlyOnWater = e.onlyOnWater,
                    this.callCbs("foodSpawnSettingsChanged", this.foodSpawnSettings)
                }
            }, {
                key: "setPacks",
                value: function(e) {
                    this.packs = e,
                    z.a.addAssetPacks(e),
                    this.foods = [];
                    var t, i = Object(o.a)(e);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var a, n = t.value;
                            (a = this.foods).push.apply(a, Object(r.a)(n.foods))
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    L.a.clear(),
                    L.a.addFoods(this.foods),
                    this.textures = [];
                    var s, c = Object(o.a)(e);
                    try {
                        for (c.s(); !(s = c.n()).done; ) {
                            var l, u = s.value;
                            (l = this.textures).push.apply(l, Object(r.a)(u.textures))
                        }
                    } catch (e) {
                        c.e(e)
                    } finally {
                        c.f()
                    }
                    A.a.clear(),
                    A.a.addTextures(this.textures),
                    this.hideSpaces = [];
                    var h, d = Object(o.a)(e);
                    try {
                        for (d.s(); !(h = d.n()).done; ) {
                            var p, v = h.value;
                            (p = this.hideSpaces).push.apply(p, Object(r.a)(v.hideSpaces))
                        }
                    } catch (e) {
                        d.e(e)
                    } finally {
                        d.f()
                    }
                    T.a.clear(),
                    T.a.addHideSpaces(this.hideSpaces),
                    this.hideSpaces.length > 0 && (this.hideSpaceSettings.type = this.hideSpaces[0].id),
                    this.props = [];
                    var f, g = Object(o.a)(e);
                    try {
                        for (g.s(); !(f = g.n()).done; ) {
                            var b, y = f.value;
                            (b = this.props).push.apply(b, Object(r.a)(y.props))
                        }
                    } catch (e) {
                        g.e(e)
                    } finally {
                        g.f()
                    }
                    R.a.clear(),
                    R.a.addProps(this.props),
                    this.props.length > 0 && (this.propSettings.type = this.props[0].id)
                }
            }, {
                key: "setHideSpaceSettings",
                value: function(e) {
                    this.hideSpaceSettings.type = e.type,
                    this.callCbs("hideSpaceSettingsChanged", this.hideSpaceSettings)
                }
            }, {
                key: "setAnimalSettings",
                value: function(e) {
                    this.animalSettings.fishLevel = e.fishLevel,
                    this.callCbs("animalSettingsChanged", this.animalSettings)
                }
            }, {
                key: "setPropSettings",
                value: function(e) {
                    this.propSettings.type = e.type,
                    this.callCbs("propSettingsChanged", this.propSettings)
                }
            }, {
                key: "setCurrentSettings",
                value: function(e) {
                    this.currentSettings = Object(s.a)({}, e),
                    this.callCbs("currentSettingsChanged", e)
                }
            }, {
                key: "setTerrainSettings",
                value: function(e) {
                    this.terrainSettings = Object(s.a)({}, e),
                    this.callCbs("terrainSettingsChanged", e)
                }
            }]),
            e
        }())
          , N = i("2b0e")
          , W = (i("d3b7"),
        function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "noselect",
                attrs: {
                    id: "editor"
                }
            }, [i("div", {
                staticClass: "left-sidebar"
            }, [i("div", {
                staticClass: "tools m-section"
            }, [i("div", {
                staticClass: "list"
            }, e._l(e.vueData.tools, (function(t) {
                return i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.right",
                        value: t.name,
                        expression: "tool.name",
                        modifiers: {
                            right: !0
                        }
                    }],
                    staticClass: "tool",
                    class: {
                        active: e.vueData.pointerMode == t.pointerMode,
                        disabled: e.vueData.selectedLayer && (e.vueData.selectedLayer.onlyTheseTools ? -1 == e.vueData.selectedLayer.onlyTheseTools.indexOf(t.pointerMode) : e.vueData.selectedLayer.excludedToolIds.indexOf(t.pointerMode) > -1)
                    },
                    on: {
                        click: function(i) {
                            return e.selectTool(t.pointerMode)
                        }
                    }
                }, [i("i", {
                    staticClass: "material-icon"
                }, [e._v(e._s(t.iconId))])])
            }
            )), 0)])]), i("div", {
                staticClass: "center-content"
            }, [e.navComponent ? i("div", {
                staticClass: "top-nav"
            }, [i(e.navComponent, {
                tag: "component"
            })], 1) : e._e(), i("div", {
                attrs: {
                    id: "canvas-container"
                }
            })]), i("RightSidebar")], 1)
        }
        )
          , F = i("7845")
          , H = (i("7db0"),
        i("c345"))
          , J = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewSettings = {
                    foodIds: [],
                    count: 0,
                    firstSpawnMs: 0,
                    reSpawnMs: 1e3
                },
                e.viewTerrainSettings = {
                    collidable: !0
                },
                e.viewTexture = null,
                e.viewOpacity = .9,
                e.opacities = [],
                e.viewBorderColor = "",
                e.colorPickers = {
                    0: !1
                },
                e.showingSettings = !1,
                e.unsavedChanges = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "textures",
                get: function() {
                    return E.textures
                }
            }, {
                key: "currentTexture",
                get: function() {
                    return E.currentTexture
                }
            }, {
                key: "settings",
                get: function() {
                    return E.foodSpawnSettings
                }
            }, {
                key: "terrainSettings",
                get: function() {
                    return E.terrainSettings
                }
            }, {
                key: "foods",
                get: function() {
                    return E.foods
                }
            }, {
                key: "opacity",
                get: function() {
                    return E.opacity
                }
            }, {
                key: "borderColor",
                get: function() {
                    return E.borderColor
                }
            }, {
                key: "mounted",
                value: function() {
                    this.viewTexture = this.currentTexture,
                    this.viewOpacity = this.opacity,
                    this.viewBorderColor = this.borderColor;
                    for (var e = 9; e >= 1; e--)
                        this.opacities.push({
                            title: 10 * e + "%",
                            value: e / 10
                        });
                    this.selectedSettingsChanged(this.settings, null),
                    this.selectedTerrainSettingsChanged(this.terrainSettings, null)
                }
            }, {
                key: "selectedSettingsChanged",
                value: function(e, t) {
                    this.viewSettings = {
                        foodIds: Object(r.a)(this.settings.foodIds),
                        count: this.settings.count,
                        firstSpawnMs: this.settings.firstSpawnMs,
                        reSpawnMs: this.settings.reSpawnMs
                    }
                }
            }, {
                key: "selectedTerrainSettingsChanged",
                value: function(e, t) {
                    this.viewTerrainSettings = Object(s.a)({}, e)
                }
            }, {
                key: "toggleColorPicker",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    (t = null == t ? !this.colorPickers[e] : t) != this.colorPickers[e] && (t ? h.f.inputManager.disableKeyBindings() : h.f.inputManager.enableKeyBindings(),
                    this.colorPickers[e] = t)
                }
            }, {
                key: "selectedTextureChanged",
                value: function(e, t) {
                    this.viewTexture = e
                }
            }, {
                key: "opacityChanged",
                value: function(e, t) {
                    this.viewOpacity = e
                }
            }, {
                key: "borderColorChanged",
                value: function(e, t) {
                    this.viewBorderColor = e
                }
            }, {
                key: "changeTexture",
                value: function() {
                    null != this.viewTexture && h.f.vueData.setTexture(this.viewTexture)
                }
            }, {
                key: "changeOpacity",
                value: function() {
                    null != this.viewOpacity && h.f.vueData.setOpacity(this.viewOpacity)
                }
            }, {
                key: "changeBorderColor",
                value: function() {
                    null != this.viewBorderColor && h.f.vueData.setBorderColor(this.viewBorderColor)
                }
            }, {
                key: "isSelected",
                value: function(e) {
                    return this.viewSettings.foodIds.indexOf(e) > -1
                }
            }, {
                key: "toggleSelect",
                value: function(e) {
                    var t = this.viewSettings.foodIds.indexOf(e);
                    -1 == t ? this.viewSettings.foodIds.push(e) : this.viewSettings.foodIds.splice(t, 1),
                    this.unsavedChanges = !0
                }
            }, {
                key: "settingsChanged",
                value: function() {
                    h.f.vueData.setFoodSpawnSettings(this.viewSettings)
                }
            }, {
                key: "terrainSettingsChanged",
                value: function() {
                    h.f.vueData.setTerrainSettings(this.viewTerrainSettings)
                }
            }, {
                key: "toggleSettings",
                value: function() {
                    this.showingSettings = !this.showingSettings
                }
            }, {
                key: "getSpritePath",
                value: function(e) {
                    var t = this.foods.find((function(t) {
                        return t.id == e
                    }
                    ));
                    return h.f.mapMakerPath + "/" + L.a.getAssetPath(t)
                }
            }, {
                key: "saveChanges",
                value: function() {
                    h.f.vueData.setFoodSpawnSettings(this.viewSettings),
                    this.unsavedChanges = !1,
                    this.showingSettings = !1
                }
            }, {
                key: "colorPickerChanged",
                value: function(e, t) {
                    var i = this;
                    clearTimeout(this.timeout),
                    this.timeout = setTimeout((function() {
                        i.viewBorderColor = e.hex,
                        i.changeBorderColor()
                    }
                    ), 250)
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.d)("settings", {
            deep: !0
        })], J.prototype, "selectedSettingsChanged", null),
        Object(b.a)([Object(y.d)("terrainSettings", {
            deep: !0
        })], J.prototype, "selectedTerrainSettingsChanged", null),
        Object(b.a)([Object(y.d)("currentTexture")], J.prototype, "selectedTextureChanged", null),
        Object(b.a)([Object(y.d)("opacity")], J.prototype, "opacityChanged", null),
        Object(b.a)([Object(y.d)("borderColor")], J.prototype, "borderColorChanged", null);
        var $ = J = Object(b.a)([Object(y.a)({
            components: {
                "chrome-picker": H.Chrome
            }
        })], J)
          , U = Object(C.a)($, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "food-spawn-top-nav children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v(" Texture "), i("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewTexture,
                    expression: "viewTexture"
                }],
                staticClass: "texture-list",
                on: {
                    change: [function(t) {
                        var i = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            return "_value"in e ? e._value : e.value
                        }
                        ));
                        e.viewTexture = t.target.multiple ? i : i[0]
                    }
                    , e.changeTexture]
                }
            }, e._l(e.textures, (function(t) {
                return i("option", {
                    domProps: {
                        value: t
                    }
                }, [e._v(" " + e._s(t.name) + " ")])
            }
            )), 0)]), "terrains" == e.layer.id ? [i("div", {
                staticClass: "setting"
            }, [e._v("Surface foods")]), i("div", {
                staticClass: "setting"
            }, [i("span", {
                staticClass: "selected-foods children-inline",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [0 == this.settings.foodIds.length ? [e._v("No foods selected")] : e._l(e.settings.foodIds, (function(t) {
                return i("div", {
                    staticClass: "food"
                }, [i("img", {
                    attrs: {
                        src: e.getSpritePath(t)
                    }
                })])
            }
            ))], 2), i("button", {
                staticClass: "btn icon-button",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("create")])]), e.showingSettings ? i("div", {
                staticClass: "food-spawn-settings"
            }, [i("div", {
                staticClass: "children-inline-top food-list"
            }, e._l(e.foods, (function(t) {
                return i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: t.name,
                        expression: "food.name",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "food",
                    class: {
                        active: e.isSelected(t.id)
                    },
                    on: {
                        click: function(i) {
                            return e.toggleSelect(t.id)
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e.getSpritePath(t.id)
                    }
                })])
            }
            )), 0), i("div", {
                staticClass: "actions"
            }, [i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.unsavedChanges
                },
                on: {
                    click: function(t) {
                        return e.saveChanges()
                    }
                }
            }, [e._v(" Apply ")])])]) : e._e()]), i("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: {
                        content: "How much time it will take for foods to appear the first time, ie: 0 for no delay, 1000 for one second",
                        delay: {
                            show: 500,
                            hide: 0
                        },
                        classes: "small-tooltip"
                    },
                    expression: "{\n        content:\n          'How much time it will take for foods to appear the first time, ie: 0 for no delay, 1000 for one second',\n        delay: { show: 500, hide: 0 },\n        classes: 'small-tooltip',\n      }",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "setting"
            }, [e._v(" First spawn time (in ms) "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.firstSpawnMs,
                    expression: "viewSettings.firstSpawnMs"
                }],
                staticClass: "number",
                attrs: {
                    type: "text",
                    disabled: 0 == e.settings.foodIds.length
                },
                domProps: {
                    value: e.viewSettings.firstSpawnMs
                },
                on: {
                    change: e.settingsChanged,
                    input: function(t) {
                        t.target.composing || e.$set(e.viewSettings, "firstSpawnMs", t.target.value)
                    }
                }
            })]), i("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: {
                        content: "How much time it will take for foods to re-appear after they die, ie: 0 for no delay, 1000 for one second",
                        delay: {
                            show: 500,
                            hide: 0
                        },
                        classes: "small-tooltip"
                    },
                    expression: "{\n        content:\n          'How much time it will take for foods to re-appear after they die, ie: 0 for no delay, 1000 for one second',\n        delay: { show: 500, hide: 0 },\n        classes: 'small-tooltip',\n      }",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "setting"
            }, [e._v(" Re-spawn time (in ms) "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.reSpawnMs,
                    expression: "viewSettings.reSpawnMs"
                }],
                staticClass: "number",
                attrs: {
                    type: "text",
                    disabled: 0 == e.settings.foodIds.length
                },
                domProps: {
                    value: e.viewSettings.reSpawnMs
                },
                on: {
                    change: e.settingsChanged,
                    input: function(t) {
                        t.target.composing || e.$set(e.viewSettings, "reSpawnMs", t.target.value)
                    }
                }
            })])] : "background-terrains" == e.layer.id ? i("div", {
                staticClass: "setting"
            }, [e._v(" Opacity "), i("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewOpacity,
                    expression: "viewOpacity"
                }],
                staticClass: "texture-list",
                on: {
                    change: [function(t) {
                        var i = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            return "_value"in e ? e._value : e.value
                        }
                        ));
                        e.viewOpacity = t.target.multiple ? i : i[0]
                    }
                    , e.changeOpacity]
                }
            }, e._l(e.opacities, (function(t) {
                return i("option", {
                    domProps: {
                        value: t.value
                    }
                }, [e._v(" " + e._s(t.title) + " ")])
            }
            )), 0)]) : "air-pockets" == e.layer.id ? i("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: function() {
                        return e.toggleColorPicker(0, !1)
                    },
                    expression: "() => toggleColorPicker(0, false)"
                }],
                staticClass: "setting",
                on: {
                    click: function(t) {
                        return e.toggleColorPicker(0, !0)
                    }
                }
            }, [e._v(" Water border color "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewBorderColor,
                    expression: "viewBorderColor"
                }],
                staticClass: "color",
                attrs: {
                    type: "text",
                    readonly: ""
                },
                domProps: {
                    value: e.viewBorderColor
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.viewBorderColor = t.target.value)
                    }
                }
            }), e.colorPickers[0] ? i("chrome-picker", {
                staticClass: "color-picker",
                attrs: {
                    "disable-alpha": !0,
                    value: e.viewBorderColor || "#ffffff"
                },
                on: {
                    input: function(t) {
                        return e.colorPickerChanged(t, 0)
                    }
                }
            }) : e._e()], 1) : e._e()], 2)
        }
        ), [], !1, null, null, null).exports
          , G = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewColors = [],
                e.colorPickers = {
                    0: !1,
                    1: !1
                },
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "colors",
                get: function() {
                    return E.skyGradientColors
                }
            }, {
                key: "mounted",
                value: function() {
                    this.viewColors = Object(r.a)(this.colors)
                }
            }, {
                key: "toggleColorPicker",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    (t = null == t ? !this.colorPickers[e] : t) != this.colorPickers[e] && (t ? h.f.inputManager.disableKeyBindings() : h.f.inputManager.enableKeyBindings(),
                    this.colorPickers[e] = t)
                }
            }, {
                key: "selectedTextureChanged",
                value: function(e, t) {
                    this.viewColors = Object(r.a)(e)
                }
            }, {
                key: "colorsChanged",
                value: function() {
                    E.setSkyColors(this.viewColors)
                }
            }, {
                key: "colorPickerChanged",
                value: function(e, t) {
                    var i = this;
                    clearTimeout(this.timeout),
                    this.timeout = setTimeout((function() {
                        var a = Object(r.a)(i.viewColors);
                        a[t] = e.hex,
                        i.viewColors = a,
                        i.colorsChanged()
                    }
                    ), 250)
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.d)("colors")], G.prototype, "selectedTextureChanged", null);
        var q = G = Object(b.a)([Object(y.a)({
            components: {
                "chrome-picker": H.Chrome
            }
        })], G)
          , V = Object(C.a)(q, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v("Color")]), i("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: function() {
                        return e.toggleColorPicker(0, !1)
                    },
                    expression: "() => toggleColorPicker(0, false)"
                }],
                staticClass: "setting",
                on: {
                    click: function(t) {
                        return e.toggleColorPicker(0, !0)
                    }
                }
            }, [e._v(" Top "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewColors[0],
                    expression: "viewColors[0]"
                }],
                staticClass: "color",
                attrs: {
                    type: "text",
                    readonly: ""
                },
                domProps: {
                    value: e.viewColors[0]
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.viewColors, 0, t.target.value)
                    }
                }
            }), e.colorPickers[0] ? i("chrome-picker", {
                staticClass: "color-picker",
                attrs: {
                    "disable-alpha": !0,
                    value: e.viewColors[0] || "#ffffff"
                },
                on: {
                    input: function(t) {
                        return e.colorPickerChanged(t, 0)
                    }
                }
            }) : e._e()], 1), i("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: function() {
                        return e.toggleColorPicker(1, !1)
                    },
                    expression: "() => toggleColorPicker(1, false)"
                }],
                staticClass: "setting",
                on: {
                    click: function(t) {
                        return e.toggleColorPicker(1, !0)
                    }
                }
            }, [e._v(" Bottom "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewColors[1],
                    expression: "viewColors[1]"
                }],
                staticClass: "color",
                attrs: {
                    type: "text",
                    readonly: ""
                },
                domProps: {
                    value: e.viewColors[1]
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.viewColors, 1, t.target.value)
                    }
                }
            }), e.colorPickers[1] ? i("chrome-picker", {
                staticClass: "color-picker",
                attrs: {
                    "disable-alpha": !0,
                    value: e.viewColors[1] || "#ffffff"
                },
                on: {
                    input: function(t) {
                        return e.colorPickerChanged(t, 1)
                    }
                }
            }) : e._e()], 1)])
        }
        ), [], !1, null, null, null).exports
          , K = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewSettings = {
                    colors: [],
                    hasBorder: !0
                },
                e.colorPickers = {
                    0: !1,
                    1: !1
                },
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "settings",
                get: function() {
                    return E.waterSettings
                }
            }, {
                key: "mounted",
                value: function() {
                    this.viewSettings = {
                        colors: Object(r.a)(this.settings.colors),
                        hasBorder: this.settings.hasBorder
                    }
                }
            }, {
                key: "toggleColorPicker",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    (t = null == t ? !this.colorPickers[e] : t) != this.colorPickers[e] && (t ? h.f.inputManager.disableKeyBindings() : h.f.inputManager.enableKeyBindings(),
                    this.colorPickers[e] = t)
                }
            }, {
                key: "selectedTextureChanged",
                value: function(e, t) {
                    this.viewSettings = {
                        colors: Object(r.a)(this.settings.colors),
                        hasBorder: this.settings.hasBorder
                    }
                }
            }, {
                key: "colorPickerChanged",
                value: function(e, t) {
                    var i = this;
                    clearTimeout(this.timeout),
                    this.timeout = setTimeout((function() {
                        var a = Object(r.a)(i.viewSettings.colors);
                        a[t] = e.hex,
                        i.viewSettings.colors = a,
                        i.settingsChanged()
                    }
                    ), 250)
                }
            }, {
                key: "settingsChanged",
                value: function() {
                    h.f.vueData.setWaterSettings(this.viewSettings)
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.d)("settings", {
            deep: !0
        })], K.prototype, "selectedTextureChanged", null);
        var Y = K = Object(b.a)([Object(y.a)({
            components: {
                "chrome-picker": H.Chrome
            }
        })], K)
          , Z = Object(C.a)(Y, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v("Color")]), i("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: function() {
                        return e.toggleColorPicker(0, !1)
                    },
                    expression: "() => toggleColorPicker(0, false)"
                }],
                staticClass: "setting",
                on: {
                    click: function(t) {
                        return e.toggleColorPicker(0, !0)
                    }
                }
            }, [e._v(" Top "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.colors[0],
                    expression: "viewSettings.colors[0]"
                }],
                staticClass: "color",
                attrs: {
                    type: "text",
                    readonly: ""
                },
                domProps: {
                    value: e.viewSettings.colors[0]
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.viewSettings.colors, 0, t.target.value)
                    }
                }
            }), e.colorPickers[0] ? i("chrome-picker", {
                staticClass: "color-picker",
                attrs: {
                    "disable-alpha": !0,
                    value: e.viewSettings.colors[0] || "#ffffff"
                },
                on: {
                    input: function(t) {
                        return e.colorPickerChanged(t, 0)
                    }
                }
            }) : e._e()], 1), i("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: function() {
                        return e.toggleColorPicker(1, !1)
                    },
                    expression: "() => toggleColorPicker(1, false)"
                }],
                staticClass: "setting",
                on: {
                    click: function(t) {
                        return e.toggleColorPicker(1, !0)
                    }
                }
            }, [e._v(" Bottom "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.colors[1],
                    expression: "viewSettings.colors[1]"
                }],
                staticClass: "color",
                attrs: {
                    type: "text",
                    readonly: ""
                },
                domProps: {
                    value: e.viewSettings.colors[1]
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.viewSettings.colors, 1, t.target.value)
                    }
                }
            }), e.colorPickers[1] ? i("chrome-picker", {
                staticClass: "color-picker",
                attrs: {
                    "disable-alpha": !0,
                    value: e.viewSettings.colors[1] || "#ffffff"
                },
                on: {
                    input: function(t) {
                        return e.colorPickerChanged(t, 1)
                    }
                }
            }) : e._e()], 1), i("div", {
                staticClass: "setting children-inline"
            }, [i("label", {
                attrs: {
                    for: "has-border"
                }
            }, [e._v("Top border")]), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.hasBorder,
                    expression: "viewSettings.hasBorder"
                }],
                attrs: {
                    type: "checkbox",
                    id: "has-border"
                },
                domProps: {
                    checked: Array.isArray(e.viewSettings.hasBorder) ? e._i(e.viewSettings.hasBorder, null) > -1 : e.viewSettings.hasBorder
                },
                on: {
                    change: [function(t) {
                        var i = e.viewSettings.hasBorder
                          , a = t.target
                          , n = !!a.checked;
                        if (Array.isArray(i)) {
                            var s = e._i(i, null);
                            a.checked ? s < 0 && e.$set(e.viewSettings, "hasBorder", i.concat([null])) : s > -1 && e.$set(e.viewSettings, "hasBorder", i.slice(0, s).concat(i.slice(s + 1)))
                        } else
                            e.$set(e.viewSettings, "hasBorder", n)
                    }
                    , function(t) {
                        return e.settingsChanged()
                    }
                    ]
                }
            })])])
        }
        ), [], !1, null, null, null).exports
          , X = (i("a15b"),
        function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewSettings = {
                    area: 0
                },
                e.showingSettings = !1,
                e.unsavedChanges = !1,
                e.areas = [{
                    1: {
                        id: "cold",
                        title: "Cold",
                        selected: !1
                    },
                    2: {
                        id: "warm",
                        title: "Warm",
                        selected: !1
                    }
                }, {
                    4: {
                        id: "shallow",
                        title: "Shallow",
                        selected: !1
                    },
                    8: {
                        id: "deep",
                        title: "Deep",
                        selected: !1
                    }
                }, {
                    16: {
                        id: "fresh",
                        title: "Fresh",
                        selected: !1
                    },
                    32: {
                        id: "salt",
                        title: "Salt",
                        selected: !1
                    }
                }],
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "settings",
                get: function() {
                    return E.habitatSettings
                }
            }, {
                key: "mounted",
                value: function() {
                    this.viewSettings = {
                        area: this.settings.area
                    },
                    this.checkAreas()
                }
            }, {
                key: "areasString",
                get: function() {
                    var e, t = [], i = [], a = Object(o.a)(this.areas);
                    try {
                        for (a.s(); !(e = a.n()).done; ) {
                            var n = e.value;
                            for (var s in n) {
                                var r = n[s];
                                (this.settings.area & s) == s && t.push(r.title)
                            }
                            t.length > 0 && (i.push(t.join("/")),
                            t.length = 0)
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                    return i.join(", ")
                }
            }, {
                key: "selectedTextureChanged",
                value: function(e, t) {
                    this.viewSettings = {
                        area: this.settings.area
                    }
                }
            }, {
                key: "settingsChanged",
                value: function() {
                    h.f.vueData.setHabitatSettings(this.viewSettings)
                }
            }, {
                key: "checkAreas",
                value: function() {
                    var e, t = Object(o.a)(this.areas);
                    try {
                        for (t.s(); !(e = t.n()).done; ) {
                            var i = e.value;
                            for (var a in i) {
                                i[a].selected = (this.settings.area & a) == a
                            }
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                }
            }, {
                key: "toggleSettings",
                value: function() {
                    this.showingSettings || this.checkAreas(),
                    this.showingSettings = !this.showingSettings
                }
            }, {
                key: "saveChanges",
                value: function() {
                    var e, t = 0, i = Object(o.a)(this.areas);
                    try {
                        for (i.s(); !(e = i.n()).done; ) {
                            var a = e.value;
                            for (var n in a) {
                                a[n].selected && (t |= parseInt(n))
                            }
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                    this.viewSettings.area = t,
                    h.f.vueData.setHabitatSettings(this.viewSettings),
                    this.unsavedChanges = !1,
                    this.showingSettings = !1
                }
            }]),
            i
        }(y.c));
        Object(b.a)([Object(y.d)("settings", {
            deep: !0
        })], X.prototype, "selectedTextureChanged", null);
        var Q = X = Object(b.a)([y.a], X)
          , ee = Object(C.a)(Q, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "habitat-top-nav children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v("Area")]), i("div", {
                staticClass: "setting"
            }, [i("button", {
                staticClass: "btn icon-button",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("create")])]), i("span", {
                staticClass: "areas-selected",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [0 == this.settings.area ? [e._v("No areas selected")] : [e._v(e._s(e.areasString))]], 2), e.showingSettings ? i("div", {
                staticClass: "habitat-settings"
            }, [i("div", {
                staticClass: "children-inline-top"
            }, e._l(e.areas, (function(t) {
                return i("div", {
                    staticClass: "area-group"
                }, [i("ul", e._l(t, (function(t, a) {
                    return i("li", {
                        staticClass: "area-list children-inline"
                    }, [i("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.selected,
                            expression: "area.selected"
                        }],
                        attrs: {
                            type: "checkbox",
                            id: "area-" + a
                        },
                        domProps: {
                            checked: Array.isArray(t.selected) ? e._i(t.selected, null) > -1 : t.selected
                        },
                        on: {
                            change: [function(i) {
                                var a = t.selected
                                  , n = i.target
                                  , s = !!n.checked;
                                if (Array.isArray(a)) {
                                    var r = e._i(a, null);
                                    n.checked ? r < 0 && e.$set(t, "selected", a.concat([null])) : r > -1 && e.$set(t, "selected", a.slice(0, r).concat(a.slice(r + 1)))
                                } else
                                    e.$set(t, "selected", s)
                            }
                            , function(t) {
                                e.unsavedChanges = !0
                            }
                            ]
                        }
                    }), i("label", {
                        attrs: {
                            for: "area-" + a
                        }
                    }, [e._v(e._s(t.title))])])
                }
                )), 0)])
            }
            )), 0), i("div", {
                staticClass: "actions"
            }, [i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.unsavedChanges
                },
                on: {
                    click: function(t) {
                        return e.saveChanges()
                    }
                }
            }, [e._v(" Apply ")])])]) : e._e()])])
        }
        ), [], !1, null, null, null).exports
          , te = (i("a4d3"),
        i("e01a"),
        function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewSettings = {
                    fishLevels: [],
                    animalCount: 0,
                    firstSpawnMs: 0,
                    reSpawnMs: 1e3,
                    npcType: 1
                },
                e.maxNpcCount = 100,
                e.showingSettings = !1,
                e.unsavedChanges = !1,
                e.animals = B.a.getAll(),
                e.npcTypes = h.a,
                e.npcTooltip = "",
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "settings",
                get: function() {
                    return E.npcSpawnSettings
                }
            }, {
                key: "availableNpcCount",
                get: function() {
                    return E.availableNpcCount
                }
            }, {
                key: "mounted",
                value: function() {
                    var e = [];
                    for (var t in this.npcTypes) {
                        var i = this.npcTypes[t];
                        e.push(i.name + ": " + i.description)
                    }
                    this.npcTooltip = e.join("<br>"),
                    this.selectedTextureChanged(this.settings, null)
                }
            }, {
                key: "selectedTextureChanged",
                value: function(e, t) {
                    this.viewSettings = {
                        fishLevels: Object(r.a)(this.settings.fishLevels),
                        animalCount: this.settings.animalCount,
                        firstSpawnMs: this.settings.firstSpawnMs,
                        reSpawnMs: this.settings.reSpawnMs,
                        npcType: this.settings.npcType,
                        restrictMovement: this.settings.restrictMovement
                    },
                    this.calculateMaxNpc()
                }
            }, {
                key: "availableNpcCountChanged",
                value: function() {
                    this.calculateMaxNpc()
                }
            }, {
                key: "isSelected",
                value: function(e) {
                    return this.viewSettings.fishLevels.indexOf(e) > -1
                }
            }, {
                key: "toggleSelect",
                value: function(e) {
                    var t = this.viewSettings.fishLevels.indexOf(e);
                    -1 == t ? this.viewSettings.fishLevels.push(e) : this.viewSettings.fishLevels.splice(t, 1),
                    this.unsavedChanges = !0
                }
            }, {
                key: "settingsChanged",
                value: function() {
                    h.f.vueData.setNPCSpawnSettings(this.viewSettings)
                }
            }, {
                key: "toggleSettings",
                value: function() {
                    this.showingSettings = !this.showingSettings
                }
            }, {
                key: "getSpritePath",
                value: function(e) {
                    return h.f.deeeepPath + "/" + B.a.getPicturePath(e)
                }
            }, {
                key: "saveChanges",
                value: function() {
                    h.f.vueData.setNPCSpawnSettings(this.viewSettings),
                    this.unsavedChanges = !1,
                    this.showingSettings = !1
                }
            }, {
                key: "calculateMaxNpc",
                value: function() {
                    this.maxNpcCount = Math.min(100, this.settings.animalCount + this.availableNpcCount)
                }
            }]),
            i
        }(y.c));
        Object(b.a)([Object(y.d)("settings", {
            deep: !0
        })], te.prototype, "selectedTextureChanged", null),
        Object(b.a)([Object(y.d)("availableNpcCount")], te.prototype, "availableNpcCountChanged", null);
        var ie = te = Object(b.a)([y.a], te)
          , ae = Object(C.a)(ie, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "npc-spawn-top-nav children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v("Animals")]), i("div", {
                staticClass: "setting"
            }, [i("span", {
                staticClass: "selected-animals children-inline",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [0 == this.settings.fishLevels.length ? [e._v("No animals selected")] : e._l(e.settings.fishLevels, (function(t) {
                return i("div", {
                    staticClass: "animal"
                }, [i("img", {
                    attrs: {
                        src: e.getSpritePath(t)
                    }
                })])
            }
            ))], 2), i("button", {
                staticClass: "btn icon-button",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("create")])]), e.showingSettings ? i("div", {
                staticClass: "npc-spawn-settings"
            }, [i("div", {
                staticClass: "children-inline-top animal-list"
            }, e._l(e.animals, (function(t) {
                return t.chooseable || 67 == t.fishLevel ? i("div", {
                    staticClass: "animal",
                    class: {
                        active: e.isSelected(t.fishLevel)
                    },
                    on: {
                        click: function(i) {
                            return e.toggleSelect(t.fishLevel)
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e.getSpritePath(t.fishLevel)
                    }
                })]) : e._e()
            }
            )), 0), i("div", {
                staticClass: "actions"
            }, [i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.unsavedChanges
                },
                on: {
                    click: function(t) {
                        return e.saveChanges()
                    }
                }
            }, [e._v(" Apply ")])])]) : e._e()]), i("div", {
                staticClass: "setting"
            }, [e._v("Count")]), i("div", {
                staticClass: "setting animal-count"
            }, [i("vue-slider", {
                attrs: {
                    min: 0,
                    max: e.maxNpcCount,
                    interval: 1,
                    lazy: !0,
                    "tooltip-placement": "bottom"
                },
                on: {
                    change: e.settingsChanged
                },
                model: {
                    value: e.viewSettings.animalCount,
                    callback: function(t) {
                        e.$set(e.viewSettings, "animalCount", t)
                    },
                    expression: "viewSettings.animalCount"
                }
            })], 1), i("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: {
                        content: e.npcTooltip,
                        delay: {
                            show: 500,
                            hide: 0
                        },
                        classes: "small-tooltip"
                    },
                    expression: "{\n      content: npcTooltip,\n      delay: { show: 500, hide: 0 },\n      classes: 'small-tooltip',\n    }",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "setting"
            }, [e._v(" Type "), i("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.npcType,
                    expression: "viewSettings.npcType"
                }],
                staticClass: "npc-types",
                on: {
                    change: [function(t) {
                        var i = Array.prototype.filter.call(t.target.options, (function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            return "_value"in e ? e._value : e.value
                        }
                        ));
                        e.$set(e.viewSettings, "npcType", t.target.multiple ? i : i[0])
                    }
                    , e.settingsChanged]
                }
            }, e._l(e.npcTypes, (function(t) {
                return i("option", {
                    domProps: {
                        value: t.id
                    }
                }, [e._v(" " + e._s(t.name) + " ")])
            }
            )), 0)]), i("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: {
                        content: "How much time it will take for animals to appear the first time, ie: 0 for no delay, 1000 for one second",
                        delay: {
                            show: 500,
                            hide: 0
                        },
                        classes: "small-tooltip"
                    },
                    expression: "{\n      content:\n        'How much time it will take for animals to appear the first time, ie: 0 for no delay, 1000 for one second',\n      delay: { show: 500, hide: 0 },\n      classes: 'small-tooltip',\n    }",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "setting"
            }, [e._v(" First spawn time (in ms) "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.firstSpawnMs,
                    expression: "viewSettings.firstSpawnMs"
                }],
                staticClass: "number",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: e.viewSettings.firstSpawnMs
                },
                on: {
                    change: e.settingsChanged,
                    input: function(t) {
                        t.target.composing || e.$set(e.viewSettings, "firstSpawnMs", t.target.value)
                    }
                }
            })]), i("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: {
                        content: "How much time it will take for animals to re-appear after they die, ie: 0 for no delay, 1000 for one second",
                        delay: {
                            show: 500,
                            hide: 0
                        },
                        classes: "small-tooltip"
                    },
                    expression: "{\n      content:\n        'How much time it will take for animals to re-appear after they die, ie: 0 for no delay, 1000 for one second',\n      delay: { show: 500, hide: 0 },\n      classes: 'small-tooltip',\n    }",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "setting"
            }, [e._v(" Re-spawn time (in ms) "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.reSpawnMs,
                    expression: "viewSettings.reSpawnMs"
                }],
                staticClass: "number",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: e.viewSettings.reSpawnMs
                },
                on: {
                    change: e.settingsChanged,
                    input: function(t) {
                        t.target.composing || e.$set(e.viewSettings, "reSpawnMs", t.target.value)
                    }
                }
            })]), i("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: {
                        content: "Restrict movement to spawn borders",
                        delay: {
                            show: 500,
                            hide: 0
                        },
                        classes: "small-tooltip"
                    },
                    expression: "{\n      content: 'Restrict movement to spawn borders',\n      delay: { show: 500, hide: 0 },\n      classes: 'small-tooltip',\n    }",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "setting children-inline"
            }, [i("label", {
                attrs: {
                    for: "has-border"
                }
            }, [e._v("Restrict movement")]), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.restrictMovement,
                    expression: "viewSettings.restrictMovement"
                }],
                attrs: {
                    type: "checkbox",
                    id: "has-border"
                },
                domProps: {
                    checked: Array.isArray(e.viewSettings.restrictMovement) ? e._i(e.viewSettings.restrictMovement, null) > -1 : e.viewSettings.restrictMovement
                },
                on: {
                    change: [function(t) {
                        var i = e.viewSettings.restrictMovement
                          , a = t.target
                          , n = !!a.checked;
                        if (Array.isArray(i)) {
                            var s = e._i(i, null);
                            a.checked ? s < 0 && e.$set(e.viewSettings, "restrictMovement", i.concat([null])) : s > -1 && e.$set(e.viewSettings, "restrictMovement", i.slice(0, s).concat(i.slice(s + 1)))
                        } else
                            e.$set(e.viewSettings, "restrictMovement", n)
                    }
                    , function(t) {
                        return e.settingsChanged()
                    }
                    ]
                }
            })])])
        }
        ), [], !1, null, null, null).exports
          , ne = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewSettings = {
                    foodIds: [],
                    count: 0,
                    firstSpawnMs: 0,
                    reSpawnMs: 1e3,
                    onlyOnWater: !1
                },
                e.maxFoodCount = 100,
                e.showingSettings = !1,
                e.unsavedChanges = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "settings",
                get: function() {
                    return E.foodSpawnSettings
                }
            }, {
                key: "availableFoodCount",
                get: function() {
                    return E.availableFoodCount
                }
            }, {
                key: "foods",
                get: function() {
                    return E.foods
                }
            }, {
                key: "mounted",
                value: function() {
                    this.selectedSettingsChanged(this.settings, null)
                }
            }, {
                key: "selectedSettingsChanged",
                value: function(e, t) {
                    this.viewSettings = {
                        foodIds: Object(r.a)(this.settings.foodIds),
                        count: this.settings.count,
                        firstSpawnMs: this.settings.firstSpawnMs,
                        reSpawnMs: this.settings.reSpawnMs,
                        onlyOnWater: this.settings.onlyOnWater
                    },
                    this.calculateMaxFood()
                }
            }, {
                key: "availableFoodCountChanged",
                value: function() {
                    this.calculateMaxFood()
                }
            }, {
                key: "isSelected",
                value: function(e) {
                    return this.viewSettings.foodIds.indexOf(e) > -1
                }
            }, {
                key: "toggleSelect",
                value: function(e) {
                    var t = this.viewSettings.foodIds.indexOf(e);
                    -1 == t ? this.viewSettings.foodIds.push(e) : this.viewSettings.foodIds.splice(t, 1),
                    this.unsavedChanges = !0
                }
            }, {
                key: "settingsChanged",
                value: function() {
                    h.f.vueData.setFoodSpawnSettings(this.viewSettings)
                }
            }, {
                key: "toggleSettings",
                value: function() {
                    this.showingSettings = !this.showingSettings
                }
            }, {
                key: "getSpritePath",
                value: function(e) {
                    var t = this.foods.find((function(t) {
                        return t.id == e
                    }
                    ));
                    return h.f.mapMakerPath + "/" + L.a.getAssetPath(t)
                }
            }, {
                key: "saveChanges",
                value: function() {
                    h.f.vueData.setFoodSpawnSettings(this.viewSettings),
                    this.unsavedChanges = !1,
                    this.showingSettings = !1
                }
            }, {
                key: "calculateMaxFood",
                value: function() {
                    this.maxFoodCount = Math.floor(Math.min(Math.max(0, this.settings.area / h.f.foodDensity), this.settings.count + this.availableFoodCount))
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.d)("settings", {
            deep: !0
        })], ne.prototype, "selectedSettingsChanged", null),
        Object(b.a)([Object(y.d)("availableFoodCount")], ne.prototype, "availableFoodCountChanged", null);
        var se = ne = Object(b.a)([y.a], ne)
          , re = Object(C.a)(se, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "food-spawn-top-nav children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v("Foods")]), i("div", {
                staticClass: "setting"
            }, [i("span", {
                staticClass: "selected-foods children-inline",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [0 == this.settings.foodIds.length ? [e._v("No foods selected")] : e._l(e.settings.foodIds, (function(t) {
                return i("div", {
                    staticClass: "food"
                }, [i("img", {
                    attrs: {
                        src: e.getSpritePath(t)
                    }
                })])
            }
            ))], 2), i("button", {
                staticClass: "btn icon-button",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("create")])]), e.showingSettings ? i("div", {
                staticClass: "food-spawn-settings"
            }, [i("div", {
                staticClass: "children-inline-top food-list"
            }, e._l(e.foods, (function(t) {
                return i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: t.name,
                        expression: "food.name",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "food",
                    class: {
                        active: e.isSelected(t.id)
                    },
                    on: {
                        click: function(i) {
                            return e.toggleSelect(t.id)
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e.getSpritePath(t.id)
                    }
                })])
            }
            )), 0), i("div", {
                staticClass: "actions"
            }, [i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.unsavedChanges
                },
                on: {
                    click: function(t) {
                        return e.saveChanges()
                    }
                }
            }, [e._v(" Apply ")])])]) : e._e()]), i("div", {
                staticClass: "setting"
            }, [e._v("Count")]), i("div", {
                staticClass: "setting food-count"
            }, [i("vue-slider", {
                attrs: {
                    min: 0,
                    max: e.maxFoodCount,
                    interval: 1,
                    lazy: !0,
                    "tooltip-placement": "bottom"
                },
                on: {
                    change: e.settingsChanged
                },
                model: {
                    value: e.viewSettings.count,
                    callback: function(t) {
                        e.$set(e.viewSettings, "count", t)
                    },
                    expression: "viewSettings.count"
                }
            })], 1), i("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: {
                        content: "How much time it will take for foods to appear the first time, ie: 0 for no delay, 1000 for one second",
                        delay: {
                            show: 500,
                            hide: 0
                        },
                        classes: "small-tooltip"
                    },
                    expression: "{\n      content:\n        'How much time it will take for foods to appear the first time, ie: 0 for no delay, 1000 for one second',\n      delay: { show: 500, hide: 0 },\n      classes: 'small-tooltip',\n    }",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "setting"
            }, [e._v(" First spawn time (in ms) "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.firstSpawnMs,
                    expression: "viewSettings.firstSpawnMs"
                }],
                staticClass: "number",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: e.viewSettings.firstSpawnMs
                },
                on: {
                    change: e.settingsChanged,
                    input: function(t) {
                        t.target.composing || e.$set(e.viewSettings, "firstSpawnMs", t.target.value)
                    }
                }
            })]), i("div", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip.bottom",
                    value: {
                        content: "How much time it will take for foods to re-appear after they die, ie: 0 for no delay, 1000 for one second",
                        delay: {
                            show: 500,
                            hide: 0
                        },
                        classes: "small-tooltip"
                    },
                    expression: "{\n      content:\n        'How much time it will take for foods to re-appear after they die, ie: 0 for no delay, 1000 for one second',\n      delay: { show: 500, hide: 0 },\n      classes: 'small-tooltip',\n    }",
                    modifiers: {
                        bottom: !0
                    }
                }],
                staticClass: "setting"
            }, [e._v(" Re-spawn time (in ms) "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.reSpawnMs,
                    expression: "viewSettings.reSpawnMs"
                }],
                staticClass: "number",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: e.viewSettings.reSpawnMs
                },
                on: {
                    change: e.settingsChanged,
                    input: function(t) {
                        t.target.composing || e.$set(e.viewSettings, "reSpawnMs", t.target.value)
                    }
                }
            })]), i("div", {
                staticClass: "setting children-inline"
            }, [i("label", {
                attrs: {
                    for: "has-border"
                }
            }, [e._v("Only spawn in water")]), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewSettings.onlyOnWater,
                    expression: "viewSettings.onlyOnWater"
                }],
                attrs: {
                    type: "checkbox",
                    id: "has-border"
                },
                domProps: {
                    checked: Array.isArray(e.viewSettings.onlyOnWater) ? e._i(e.viewSettings.onlyOnWater, null) > -1 : e.viewSettings.onlyOnWater
                },
                on: {
                    change: [function(t) {
                        var i = e.viewSettings.onlyOnWater
                          , a = t.target
                          , n = !!a.checked;
                        if (Array.isArray(i)) {
                            var s = e._i(i, null);
                            a.checked ? s < 0 && e.$set(e.viewSettings, "onlyOnWater", i.concat([null])) : s > -1 && e.$set(e.viewSettings, "onlyOnWater", i.slice(0, s).concat(i.slice(s + 1)))
                        } else
                            e.$set(e.viewSettings, "onlyOnWater", n)
                    }
                    , function(t) {
                        return e.settingsChanged()
                    }
                    ]
                }
            })])])
        }
        ), [], !1, null, "01c5f5c0", null).exports
          , oe = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewSettings = {
                    type: 1
                },
                e.showingSettings = !1,
                e.unsavedChanges = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "settings",
                get: function() {
                    return E.hideSpaceSettings
                }
            }, {
                key: "hideSpaces",
                get: function() {
                    return E.hideSpaces
                }
            }, {
                key: "mounted",
                value: function() {
                    this.selectedSettingsChanged(this.settings, null)
                }
            }, {
                key: "selectedSettingsChanged",
                value: function(e, t) {
                    this.viewSettings = {
                        type: this.settings.type
                    }
                }
            }, {
                key: "isSelected",
                value: function(e) {
                    return this.viewSettings.type == e
                }
            }, {
                key: "toggleSelect",
                value: function(e) {
                    this.viewSettings.type != e && (this.viewSettings.type = e,
                    this.unsavedChanges = !0)
                }
            }, {
                key: "settingsChanged",
                value: function() {
                    h.f.vueData.setHideSpaceSettings(this.viewSettings)
                }
            }, {
                key: "toggleSettings",
                value: function() {
                    this.showingSettings = !this.showingSettings
                }
            }, {
                key: "getSpritePath",
                value: function(e) {
                    var t = this.hideSpaces.find((function(t) {
                        return t.id == e
                    }
                    ));
                    return h.f.mapMakerPath + "/" + T.a.getAssetPath(t)
                }
            }, {
                key: "saveChanges",
                value: function() {
                    h.f.vueData.setHideSpaceSettings(this.viewSettings),
                    this.unsavedChanges = !1,
                    this.showingSettings = !1
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.d)("settings", {
            deep: !0
        })], oe.prototype, "selectedSettingsChanged", null);
        var ce = oe = Object(b.a)([y.a], oe)
          , le = Object(C.a)(ce, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "food-spawn-top-nav children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v("Type")]), i("div", {
                staticClass: "setting"
            }, [i("span", {
                staticClass: "selected-foods children-inline",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [0 == e.settings.type ? [e._v("No type selected")] : [i("div", {
                staticClass: "food"
            }, [i("img", {
                attrs: {
                    src: e.getSpritePath(e.settings.type)
                }
            })])]], 2), i("button", {
                staticClass: "btn icon-button",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("create")])]), e.showingSettings ? i("div", {
                staticClass: "food-spawn-settings"
            }, [i("div", {
                staticClass: "children-inline-top food-list"
            }, e._l(e.hideSpaces, (function(t) {
                return i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: t.name,
                        expression: "hideSpace.name",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "food",
                    class: {
                        active: e.isSelected(t.id)
                    },
                    on: {
                        click: function(i) {
                            return e.toggleSelect(t.id)
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e.getSpritePath(t.id)
                    }
                })])
            }
            )), 0), i("div", {
                staticClass: "actions"
            }, [i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.unsavedChanges
                },
                on: {
                    click: function(t) {
                        return e.saveChanges()
                    }
                }
            }, [e._v(" Apply ")])])]) : e._e()])])
        }
        ), [], !1, null, null, null).exports
          , ue = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewSettings = {
                    fishLevel: 1
                },
                e.showingSettings = !1,
                e.unsavedChanges = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "settings",
                get: function() {
                    return E.animalSettings
                }
            }, {
                key: "animals",
                get: function() {
                    return E.animals
                }
            }, {
                key: "mounted",
                value: function() {
                    this.selectedSettingsChanged(this.settings, null)
                }
            }, {
                key: "selectedSettingsChanged",
                value: function(e, t) {
                    this.viewSettings = {
                        fishLevel: this.settings.fishLevel
                    }
                }
            }, {
                key: "isSelected",
                value: function(e) {
                    return this.viewSettings.fishLevel == e
                }
            }, {
                key: "toggleSelect",
                value: function(e) {
                    this.viewSettings.fishLevel != e && (this.viewSettings.fishLevel = e,
                    this.unsavedChanges = !0)
                }
            }, {
                key: "settingsChanged",
                value: function() {
                    h.f.vueData.setAnimalSettings(this.viewSettings)
                }
            }, {
                key: "toggleSettings",
                value: function() {
                    this.showingSettings = !this.showingSettings
                }
            }, {
                key: "getSpritePath",
                value: function(e) {
                    return h.f.deeeepPath + "/" + B.a.getPicturePath(e)
                }
            }, {
                key: "saveChanges",
                value: function() {
                    h.f.vueData.setAnimalSettings(this.viewSettings),
                    this.unsavedChanges = !1,
                    this.showingSettings = !1
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.d)("settings", {
            deep: !0
        })], ue.prototype, "selectedSettingsChanged", null);
        var he = ue = Object(b.a)([y.a], ue)
          , de = Object(C.a)(he, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "food-spawn-top-nav children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v("Type")]), i("div", {
                staticClass: "setting"
            }, [i("span", {
                staticClass: "selected-foods children-inline",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [0 == e.settings.type ? [e._v("No type selected")] : [i("div", {
                staticClass: "food"
            }, [i("img", {
                attrs: {
                    src: e.getSpritePath(e.settings.fishLevel)
                }
            })])]], 2), i("button", {
                staticClass: "btn icon-button",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("create")])]), e.showingSettings ? i("div", {
                staticClass: "food-spawn-settings"
            }, [i("div", {
                staticClass: "children-inline-top food-list"
            }, e._l(e.animals, (function(t) {
                return i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: t.name,
                        expression: "animal.name",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "food",
                    class: {
                        active: e.isSelected(t.fishLevel)
                    },
                    on: {
                        click: function(i) {
                            return e.toggleSelect(t.fishLevel)
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e.getSpritePath(t.fishLevel)
                    }
                })])
            }
            )), 0), i("div", {
                staticClass: "actions"
            }, [i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.unsavedChanges
                },
                on: {
                    click: function(t) {
                        return e.saveChanges()
                    }
                }
            }, [e._v(" Apply ")])])]) : e._e()])])
        }
        ), [], !1, null, null, null).exports
          , pe = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewSettings = {
                    angle: 0,
                    strength: 10
                },
                e.maxCurrent = 100,
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "settings",
                get: function() {
                    return E.currentSettings
                }
            }, {
                key: "mounted",
                value: function() {
                    this.selectedSettingsChanged(this.settings, null)
                }
            }, {
                key: "selectedSettingsChanged",
                value: function(e, t) {
                    this.viewSettings = Object(s.a)({}, this.settings)
                }
            }, {
                key: "settingsChanged",
                value: function() {
                    h.f.vueData.setCurrentSettings(this.viewSettings)
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.d)("settings", {
            deep: !0
        })], pe.prototype, "selectedSettingsChanged", null);
        var ve = pe = Object(b.a)([y.a], pe)
          , fe = Object(C.a)(ve, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "current-spawn-top-nav children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v("Current")]), i("div", {
                staticClass: "setting"
            }, [e._v("Strength (%)")]), i("div", {
                staticClass: "setting current-strength"
            }, [i("vue-slider", {
                attrs: {
                    min: 0,
                    max: e.maxCurrent,
                    interval: 1,
                    lazy: !0,
                    "tooltip-placement": "bottom"
                },
                on: {
                    change: e.settingsChanged
                },
                model: {
                    value: e.viewSettings.strength,
                    callback: function(t) {
                        e.$set(e.viewSettings, "strength", t)
                    },
                    expression: "viewSettings.strength"
                }
            })], 1), i("div", {
                staticClass: "setting"
            }, [e._v("Direction (°)")]), i("div", {
                staticClass: "setting current-direction"
            }, [i("vue-slider", {
                attrs: {
                    min: -180,
                    max: 180,
                    interval: 1,
                    lazy: !0,
                    "tooltip-placement": "bottom"
                },
                on: {
                    change: e.settingsChanged
                },
                model: {
                    value: e.viewSettings.angle,
                    callback: function(t) {
                        e.$set(e.viewSettings, "angle", t)
                    },
                    expression: "viewSettings.angle"
                }
            })], 1)])
        }
        ), [], !1, null, null, null).exports
          , ge = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).vueData = h.f.vueData,
                e
            }
            return Object(u.a)(i, [{
                key: "created",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "selectLayer",
                value: function(e) {
                    h.f.vueData.selectLayer(e)
                }
            }, {
                key: "toggleLayer",
                value: function(e) {
                    h.f.vueData.setLayerVisible(e, !e.visible)
                }
            }]),
            i
        }(y.c)
          , be = ge = Object(b.a)([y.a], ge)
          , ye = (i("88b9"),
        Object(C.a)(be, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "m-section layers flex flex-col"
            }, [e._m(0), i("div", {
                staticClass: "actions children-inline"
            }, [i("div", [i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.vueData.selectedLayer
                },
                on: {
                    click: function(t) {
                        return e.selectLayer(null)
                    }
                }
            }, [e._v(" View all ")])])]), i("div", {
                staticClass: "list content flex-shrink min-h-4"
            }, [i("perfect-scrollbar", e._l(e.vueData.layers, (function(t) {
                return i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.left",
                        value: t.description,
                        expression: "layer.description",
                        modifiers: {
                            left: !0
                        }
                    }],
                    key: t.id,
                    staticClass: "layer children-inline",
                    class: {
                        selected: t == e.vueData.selectedLayer
                    },
                    attrs: {
                        "data-layer-id": t.id
                    },
                    on: {
                        click: function(i) {
                            return e.selectLayer(t)
                        }
                    }
                }, [i("div", {
                    staticClass: "actions"
                }, [i("button", {
                    staticClass: "btn icon-button",
                    class: {
                        on: t.visible
                    },
                    on: {
                        click: function(i) {
                            return i.stopPropagation(),
                            i.preventDefault(),
                            e.toggleLayer(t)
                        }
                    }
                }, [i("i", {
                    staticClass: "material-icon"
                }, [e._v("remove_red_eye")])])]), i("div", {
                    staticClass: "meta"
                }, [i("div", {
                    staticClass: "name"
                }, [e._v(e._s(t.title))])])])
            }
            )), 0)], 1)])
        }
        ), [function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "title-bar children-inline"
            }, [i("div", {
                staticClass: "title"
            }, [e._v("Layers")])])
        }
        ], !1, null, "f9c33b4a", null)).exports
          , me = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).vueData = h.f.vueData,
                e.viewWorldSize = {
                    width: 0,
                    height: 0
                },
                e.viewWorldSettings = {
                    gravity: 0
                },
                e.unsavedChanges = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "created",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "worldSizeChanged",
                value: function() {
                    this.viewWorldSize.width = this.vueData.worldSize.width,
                    this.viewWorldSize.height = this.vueData.worldSize.height
                }
            }, {
                key: "worldSettingsChanged",
                value: function() {
                    this.viewWorldSettings.gravity = this.vueData.worldSettings.gravity
                }
            }, {
                key: "hasMapPermissions",
                get: function() {
                    return m.a.hasPermission(this.vueData.user, this.vueData.map)
                }
            }, {
                key: "saveSettings",
                value: function() {
                    h.f.vueData.setWorldSize(this.viewWorldSize.width, this.viewWorldSize.height),
                    this.viewWorldSettings.gravity = parseFloat(this.viewWorldSettings.gravity + ""),
                    h.f.vueData.setWorldSettings(this.viewWorldSettings),
                    this.unsavedChanges = !1
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.d)("vueData.worldSize", {
            deep: !0,
            immediate: !0
        })], me.prototype, "worldSizeChanged", null),
        Object(b.a)([Object(y.d)("vueData.worldSettings", {
            deep: !0,
            immediate: !0
        })], me.prototype, "worldSettingsChanged", null);
        var we, ke = me = Object(b.a)([y.a], me), Se = (i("0e7d"),
        Object(C.a)(ke, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "world-settings m-section"
            }, [e._m(0), i("div", {
                staticClass: "content"
            }, [i("div", {
                staticClass: "children-inline setting"
            }, [i("div", {
                staticClass: "col-2 key"
            }, [e._v("World")]), i("div", {
                staticClass: "col-5"
            }, [e._v(" Width "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewWorldSize.width,
                    expression: "viewWorldSize.width"
                }],
                staticClass: "inline",
                attrs: {
                    type: "text",
                    readonly: !e.hasMapPermissions
                },
                domProps: {
                    value: e.viewWorldSize.width
                },
                on: {
                    input: [function(t) {
                        t.target.composing || e.$set(e.viewWorldSize, "width", t.target.value)
                    }
                    , function(t) {
                        e.unsavedChanges = !0
                    }
                    ]
                }
            })]), i("div", {
                staticClass: "col-5"
            }, [e._v(" Height "), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewWorldSize.height,
                    expression: "viewWorldSize.height"
                }],
                staticClass: "inline",
                attrs: {
                    type: "text",
                    readonly: !e.hasMapPermissions
                },
                domProps: {
                    value: e.viewWorldSize.height
                },
                on: {
                    input: [function(t) {
                        t.target.composing || e.$set(e.viewWorldSize, "height", t.target.value)
                    }
                    , function(t) {
                        e.unsavedChanges = !0
                    }
                    ]
                }
            })])]), i("div", {
                staticClass: "children-inline setting text-left"
            }, [i("div", {
                staticClass: "col-3 key"
            }, [e._v("Gravity")]), i("div", {
                staticClass: "col-9"
            }, [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewWorldSettings.gravity,
                    expression: "viewWorldSettings.gravity"
                }],
                staticClass: "inline",
                attrs: {
                    type: "text",
                    readonly: !e.hasMapPermissions
                },
                domProps: {
                    value: e.viewWorldSettings.gravity
                },
                on: {
                    input: [function(t) {
                        t.target.composing || e.$set(e.viewWorldSettings, "gravity", t.target.value)
                    }
                    , function(t) {
                        e.unsavedChanges = !0
                    }
                    ]
                }
            }), e._v(" m/s2 ")])]), i("div", {
                staticClass: "actions children-inline"
            }, [i("div", [i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.unsavedChanges
                },
                on: {
                    click: function(t) {
                        return e.saveSettings()
                    }
                }
            }, [e._v(" Apply ")])])])])])
        }
        ), [function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "title-bar children-inline"
            }, [i("div", {
                staticClass: "title"
            }, [e._v("Settings")])])
        }
        ], !1, null, "815b0b66", null)).exports, xe = i("ade3");
        !function(e) {
            e.Habitats = "habitats",
            e.Triggers = "triggers",
            e.NpcSpawns = "npc-spawns",
            e.FoodSpawns = "food-spawns",
            e.Currents = "currents",
            e.Ceilings = "ceilings",
            e.Terrains = "terrains",
            e.Islands = "islands",
            e.Animals = "animals",
            e.Platforms = "platforms",
            e.HideSpaces = "hide-spaces",
            e.AirPockets = "air-pockets",
            e.Backgrounds = "background-terrains",
            e.Water = "water",
            e.Sky = "sky",
            e.Props = "props"
        }(we || (we = {}));
        var Ce = we
          , Oe = (i("159b"),
        i("4de4"),
        i("e113"))
          , je = [{
            value: Oe.a.Teleport,
            title: "Teleport"
        }]
          , _e = Object(xe.a)({}, Oe.a.Teleport, {
            parameters: [{
                key: "pos",
                title: "Position",
                type: "V"
            }]
        })
          , Me = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).triggerActions = je,
                e.choosingPosition = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "created",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "currentActionType",
                get: function() {
                    var e = this;
                    return je.find((function(t) {
                        return t.value === e.action.type
                    }
                    ))
                }
            }, {
                key: "paramsData",
                get: function() {
                    return this.action.type ? _e[this.action.type] : null
                }
            }, {
                key: "choosePosition",
                value: function() {
                    var e = this;
                    this.choosingPosition = !0,
                    h.f.mapEditor.inputManager.nextClickCb = function(t) {
                        e.choosingPosition = !1,
                        e.action.data || (e.action.data = {}),
                        y.c.set(e.action.data, "pos", {
                            x: t.x,
                            y: t.y
                        })
                    }
                }
            }, {
                key: "remove",
                value: function() {
                    this.$emit("remove")
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.b)()], Me.prototype, "action", void 0);
        var Pe = Me = Object(b.a)([y.a], Me)
          , De = (i("36c5"),
        Object(C.a)(Pe, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "trigger-action"
            }, [i("div", {
                staticClass: "flex items-center justify-between"
            }, [e.action.type ? i("span", {
                staticClass: "type"
            }, [e._v(e._s(e.currentActionType.title))]) : i("el-select", {
                attrs: {
                    placeholder: "Select type",
                    size: "mini"
                },
                model: {
                    value: e.action.type,
                    callback: function(t) {
                        e.$set(e.action, "type", t)
                    },
                    expression: "action.type"
                }
            }, e._l(e.triggerActions, (function(e) {
                return i("el-option", {
                    key: e.value,
                    attrs: {
                        value: e.value,
                        label: e.title
                    }
                })
            }
            )), 1), i("i", {
                staticClass: "el-icon-delete text-red-600 cursor-pointer",
                on: {
                    click: e.remove
                }
            })], 1), e.paramsData ? i("div", {
                staticClass: "params"
            }, e._l(e.paramsData.parameters, (function(t) {
                return i("div", {
                    key: t.key,
                    staticClass: "param"
                }, [i("span", {
                    staticClass: "name"
                }, [e._v(e._s(t.title))]), "V" === t.type ? [e.choosingPosition ? i("el-button", {
                    attrs: {
                        size: "mini",
                        type: "danger"
                    }
                }, [e._v("Click on the map")]) : e.action.data && e.action.data[t.key] ? i("el-button", {
                    attrs: {
                        size: "mini",
                        type: "primary"
                    },
                    on: {
                        click: e.choosePosition
                    }
                }, [e._v("Change position")]) : i("el-button", {
                    attrs: {
                        size: "mini",
                        type: "warning"
                    },
                    on: {
                        click: e.choosePosition
                    }
                }, [e._v("Select position")])] : e._e()], 2)
            }
            )), 0) : e._e()])
        }
        ), [], !1, null, "15348208", null)).exports
          , Le = i("11ca")
          , Te = [{
            value: 0,
            title: "immediately"
        }, {
            value: 1,
            title: "after 1s"
        }, {
            value: 5,
            title: "after 5s"
        }]
          , Be = [{
            value: Oe.b.Enter,
            title: "On enter"
        }, {
            value: Oe.b.Stay,
            title: "On stay"
        }, {
            value: Oe.b.Quit,
            title: "On exit"
        }]
          , ze = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).selectedTriggerCount = 0,
                e.triggerDelays = Te,
                e.triggerWhens = Be,
                e.triggers = [],
                e._unbind = null,
                e
            }
            return Object(u.a)(i, [{
                key: "created",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        var t, i, a = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t = null,
                                    i = function() {
                                        console.log("creating watch"),
                                        t = a.$watch("triggers", (function() {
                                            console.log("change"),
                                            h.f.mapEditor.selectedObjects.filter((function(e) {
                                                return e instanceof Le.a
                                            }
                                            )).forEach((function(e) {
                                                return e.triggers = a.triggers
                                            }
                                            ))
                                        }
                                        ), {
                                            deep: !0
                                        })
                                    }
                                    ,
                                    this._unbind = h.f.emitter.on("selectedObjectsChanged", (function(e) {
                                        console.log(e);
                                        var n = e.filter((function(e) {
                                            return e instanceof Le.a
                                        }
                                        ));
                                        if (a.selectedTriggerCount = n.length,
                                        t && t(),
                                        1 === n.length) {
                                            var s = n[0];
                                            a.triggers = JSON.parse(JSON.stringify(s.triggers)),
                                            a.toggleShow(!0),
                                            i()
                                        } else
                                            a.triggers = [],
                                            a.toggleShow(!1)
                                    }
                                    ));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "toggleShow",
                value: function(e) {
                    this.$emit("input", e)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this._unbind && this._unbind()
                }
            }, {
                key: "removeAction",
                value: function(e, t) {
                    var i = e.actions.indexOf(t);
                    -1 !== i && e.actions.splice(i, 1)
                }
            }, {
                key: "addAction",
                value: function(e) {
                    e.actions.push({
                        type: null,
                        data: null
                    })
                }
            }, {
                key: "addTrigger",
                value: function() {
                    var e = {
                        actions: [],
                        delay: 0,
                        when: Oe.b.Enter
                    };
                    this.triggers.push(e)
                }
            }, {
                key: "onTriggersChange",
                value: function() {}
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.b)()], ze.prototype, "show", void 0),
        Object(b.a)([Object(y.d)("triggers", {
            deep: !0
        })], ze.prototype, "onTriggersChange", null);
        var Ae = ze = Object(b.a)([Object(y.a)({
            components: {
                TriggerAction: De
            }
        })], ze)
          , Re = (i("422e"),
        Object(C.a)(Ae, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "trigger-settings"
            }, [1 === e.selectedTriggerCount ? [e._l(e.triggers, (function(t, a) {
                return i("div", {
                    key: a,
                    staticClass: "trigger"
                }, [i("div", {
                    staticClass: "when flex items-center justify-between gap-1 py-1"
                }, [i("el-select", {
                    attrs: {
                        size: "mini"
                    },
                    model: {
                        value: t.when,
                        callback: function(i) {
                            e.$set(t, "when", i)
                        },
                        expression: "trigger.when"
                    }
                }, e._l(e.triggerWhens, (function(e) {
                    return i("el-option", {
                        key: e.value,
                        attrs: {
                            value: e.value,
                            label: e.title
                        }
                    })
                }
                )), 1), i("el-select", {
                    attrs: {
                        size: "mini"
                    },
                    model: {
                        value: t.delay,
                        callback: function(i) {
                            e.$set(t, "delay", i)
                        },
                        expression: "trigger.delay"
                    }
                }, e._l(e.triggerDelays, (function(e) {
                    return i("el-option", {
                        key: e.value,
                        attrs: {
                            value: e.value,
                            label: e.title
                        }
                    })
                }
                )), 1)], 1), e._m(0, !0), e._l(t.actions, (function(a, n) {
                    return i("TriggerAction", {
                        key: n,
                        staticClass: "action",
                        attrs: {
                            action: a
                        },
                        on: {
                            remove: function(i) {
                                return e.removeAction(t, a)
                            }
                        }
                    })
                }
                )), i("el-button", {
                    attrs: {
                        size: "mini",
                        type: "success"
                    },
                    on: {
                        click: function(i) {
                            return e.addAction(t)
                        }
                    }
                }, [e._v("+")])], 2)
            }
            )), i("div", {
                staticClass: "text-center"
            }, [i("el-button", {
                attrs: {
                    size: "mini",
                    type: "success"
                },
                on: {
                    click: e.addTrigger
                }
            }, [e._v("+")])], 1)] : e._e()], 2)
        }
        ), [function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", [i("span", [e._v("Actions")])])
        }
        ], !1, null, "c3f71d58", null)).exports
          , Ie = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).selectedObjectCount = 0,
                e._unbind = null,
                e
            }
            return Object(u.a)(i, [{
                key: "created",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this._unbind = h.f.emitter.on("selectedObjectsChanged", (function(e) {
                                        var i = e.filter((function(e) {
                                            return e instanceof t.objectType
                                        }
                                        ));
                                        t.selectedObjectCount = i.length,
                                        t.selectedObjectsChanged(i)
                                    }
                                    )),
                                    this.selectedObjectsChanged(h.f.mapEditor.selectedObjects.filter((function(e) {
                                        return e instanceof t.objectType
                                    }
                                    )));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "selectedObjectsChanged",
                value: function(e) {}
            }, {
                key: "toggleShow",
                value: function(e) {
                    this.$emit("input", e)
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this._unbind && this._unbind()
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.b)()], Ie.prototype, "show", void 0);
        var Ee, Ne = Ie = Object(b.a)([y.a], Ie), We = Object(C.a)(Ne, void 0, void 0, !1, null, "1be7e9ea", null).exports, Fe = i("12e2"), He = function(e) {
            var t, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
            return function() {
                for (var a = arguments.length, n = new Array(a), s = 0; s < a; s++)
                    n[s] = arguments[s];
                clearTimeout(t),
                t = setTimeout((function() {
                    return e.apply(void 0, n)
                }
                ), i)
            }
        }, Je = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).objectType = Fe.a,
                e.propType = 0,
                e.params = null,
                e.data = null,
                e.saveData = null,
                e._unwatch = null,
                e
            }
            return Object(u.a)(i, [{
                key: "created",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        var t = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    this.saveData = He((function() {
                                        h.f.mapEditor.selectedObjects.forEach((function(e) {
                                            return e instanceof Fe.a && e.setParamsData(t.data)
                                        }
                                        ))
                                    }
                                    ));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "_createWatcher",
                value: function() {
                    var e = this;
                    this._unwatch = this.$watch("data", (function() {
                        e.saveData()
                    }
                    ), {
                        deep: !0
                    })
                }
            }, {
                key: "selectedObjectsChanged",
                value: function(e) {
                    var t;
                    if (this._unwatch && this._unwatch(),
                    this.toggleShow(!1),
                    1 === e.length) {
                        var i = e[0];
                        this.propType = i.basicSettings.id;
                        var a = R.a.getPropSync(this.propType);
                        this.params = a.params,
                        a.params && (this.data = null !== (t = i.paramsData) && void 0 !== t ? t : {},
                        this.toggleShow(!0),
                        this._createWatcher())
                    }
                }
            }, {
                key: "beforeDestroy",
                value: function() {
                    this._unwatch && this._unwatch()
                }
            }]),
            i
        }(We), $e = Je = Object(b.a)([y.a], Je), Ue = (i("39c5"),
        Object(C.a)($e, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "prop-params"
            }, [e.params ? e._l(e.params, (function(t) {
                return i("div", {
                    key: t.key,
                    staticClass: "param"
                }, [i("div", {
                    staticClass: "name"
                }, [e._v(e._s(t.title))]), i("div", [i("el-input", {
                    staticClass: "select-auto",
                    attrs: {
                        placeholder: t.title,
                        type: "textarea",
                        rows: "3"
                    },
                    model: {
                        value: e.data[t.key],
                        callback: function(i) {
                            e.$set(e.data, t.key, i)
                        },
                        expression: "data[param.key]"
                    }
                })], 1)])
            }
            )) : e._e()], 2)
        }
        ), [], !1, null, "78ed486e", null)).exports, Ge = (Ee = {},
        Object(xe.a)(Ee, Ce.Triggers, {
            title: "Trigger settings",
            component: Re
        }),
        Object(xe.a)(Ee, Ce.Props, {
            title: "Prop settings",
            component: Ue
        }),
        Ee), qe = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).show = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "created",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "sectionData",
                get: function() {
                    var e;
                    return Ge[null === (e = this.layer) || void 0 === e ? void 0 : e.id]
                }
            }]),
            i
        }(y.c), Ve = qe = Object(b.a)([y.a], qe), Ke = Object(C.a)(Ve, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.sectionData && e.show,
                    expression: "sectionData && show"
                }],
                staticClass: "m-section entity-settings"
            }, [e.sectionData ? [i("div", {
                staticClass: "title-bar children-inline"
            }, [i("div", {
                staticClass: "title"
            }, [e._v(e._s(e.sectionData.title))])]), i("div", {
                staticClass: "content text-left"
            }, [i(e.sectionData.component, {
                tag: "component",
                model: {
                    value: e.show,
                    callback: function(t) {
                        e.show = t
                    },
                    expression: "show"
                }
            })], 1)] : e._e()], 2)
        }
        ), [], !1, null, "74178d54", null).exports, Ye = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).vueData = h.f.vueData,
                e
            }
            return Object(u.a)(i, [{
                key: "created",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            i
        }(y.c), Ze = Ye = Object(b.a)([Object(y.a)({
            components: {
                SectionEntitySettings: Ke,
                SectionSettings: Se,
                SectionLayers: ye
            }
        })], Ye), Xe = (i("1560"),
        Object(C.a)(Ze, (function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "right-sidebar"
            }, [t("SectionSettings"), t("SectionEntitySettings"), t("SectionLayers")], 1)
        }
        ), [], !1, null, "17e9738e", null)).exports, Qe = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).viewSettings = {
                    type: 1
                },
                e.showingSettings = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "layer",
                get: function() {
                    return E.selectedLayer || E.selectedObjectsLayer
                }
            }, {
                key: "props",
                get: function() {
                    return E.props
                }
            }, {
                key: "mounted",
                value: function() {
                    this.viewSettings.type = E.propSettings.type
                }
            }, {
                key: "isSelected",
                value: function(e) {
                    return this.viewSettings.type == e
                }
            }, {
                key: "toggleSelect",
                value: function(e) {
                    this.viewSettings.type = e,
                    this.saveChanges()
                }
            }, {
                key: "toggleSettings",
                value: function() {
                    this.showingSettings = !this.showingSettings
                }
            }, {
                key: "getSpritePath",
                value: function(e) {
                    var t = this.props.find((function(t) {
                        return t.id == e
                    }
                    ));
                    return h.f.mapMakerPath + "/" + R.a.getAssetPath(t)
                }
            }, {
                key: "saveChanges",
                value: function() {
                    h.f.vueData.setPropSettings(this.viewSettings),
                    this.showingSettings = !1
                }
            }]),
            i
        }(y.c), et = Qe = Object(b.a)([y.a], Qe), tt = Object(C.a)(et, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "food-spawn-top-nav children-inline inner"
            }, [i("div", {
                staticClass: "setting"
            }, [e._v("Type")]), i("div", {
                staticClass: "setting"
            }, [i("span", {
                staticClass: "selected-foods children-inline",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [0 == e.viewSettings.type ? [e._v("No type selected")] : [i("div", {
                staticClass: "food"
            }, [i("img", {
                attrs: {
                    src: e.getSpritePath(e.viewSettings.type)
                }
            })])]], 2), i("button", {
                staticClass: "btn icon-button",
                on: {
                    click: function(t) {
                        return e.toggleSettings()
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("create")])]), e.showingSettings ? i("div", {
                staticClass: "food-spawn-settings"
            }, [i("div", {
                staticClass: "children-inline-top food-list"
            }, e._l(e.props, (function(t) {
                return i("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip.bottom",
                        value: t.name,
                        expression: "prop.name",
                        modifiers: {
                            bottom: !0
                        }
                    }],
                    staticClass: "food",
                    class: {
                        active: e.isSelected(t.id)
                    },
                    on: {
                        click: function(i) {
                            return e.toggleSelect(t.id)
                        }
                    }
                }, [i("img", {
                    attrs: {
                        src: e.getSpritePath(t.id)
                    }
                })])
            }
            )), 0)]) : e._e()])])
        }
        ), [], !1, null, null, null).exports, it = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).vueData = h.f.vueData,
                e.viewWorldSize = {
                    width: 0,
                    height: 0
                },
                e.viewWorldSettings = {
                    gravity: 0
                },
                e.pointerModes = h.b,
                e.objectTypes = h.c,
                e.hasMapPermissions = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "mounted",
                value: function() {
                    h.f.mapEditor || (h.f.mapEditor = new F.a),
                    this.checkPermissions()
                }
            }, {
                key: "worldSizeChanged",
                value: function() {
                    this.viewWorldSize.width = this.vueData.worldSize.width,
                    this.viewWorldSize.height = this.vueData.worldSize.height
                }
            }, {
                key: "worldSettingsChanged",
                value: function() {
                    this.viewWorldSettings.gravity = this.vueData.worldSettings.gravity
                }
            }, {
                key: "userChanged",
                value: function() {
                    this.checkPermissions()
                }
            }, {
                key: "mapChanged",
                value: function() {
                    this.checkPermissions()
                }
            }, {
                key: "selectLayer",
                value: function(e) {
                    h.f.vueData.selectLayer(e)
                }
            }, {
                key: "selectTool",
                value: function(e) {
                    h.f.vueData.selectTool(e)
                }
            }, {
                key: "setSkyColors",
                value: function(e) {
                    h.f.vueData.setSkyColors(e)
                }
            }, {
                key: "toggleLayer",
                value: function(e) {
                    h.f.vueData.setLayerVisible(e, !e.visible)
                }
            }, {
                key: "checkPermissions",
                value: function() {
                    this.hasMapPermissions = m.a.hasPermission(this.vueData.user, this.vueData.map)
                }
            }, {
                key: "navComponent",
                get: function() {
                    var e = this.vueData.selectedLayer || this.vueData.selectedObjectsLayer;
                    if (!e)
                        return null;
                    var t = e.id
                      , i = this.vueData
                      , a = i.pointerMode == h.b.Creation || i.pointerMode == h.b.ShapeSquare;
                    switch (t) {
                    case Ce.Water:
                        return a || i.selectedObjectType == h.c.Water ? Z : null;
                    case Ce.Sky:
                        return a || i.selectedObjectType == h.c.Sky ? V : null;
                    case Ce.Habitats:
                        return a || i.selectedObjectType == h.c.Habitat ? ee : null;
                    case Ce.NpcSpawns:
                        return a || i.selectedObjectType == h.c.NPCSpawn ? ae : null;
                    case Ce.FoodSpawns:
                        return a || i.selectedObjectType == h.c.FoodSpawn ? re : null;
                    case Ce.Currents:
                        return a || i.selectedObjectType == h.c.Current ? fe : null;
                    case Ce.Animals:
                        return i.pointerMode == h.b.Animal && de;
                    case Ce.Props:
                        return i.pointerMode == h.b.Prop && tt;
                    case Ce.HideSpaces:
                        return i.pointerMode == h.b.HideSpace && le;
                    case Ce.Terrains:
                    case Ce.AirPockets:
                    case Ce.Backgrounds:
                    case Ce.Ceilings:
                    case Ce.Islands:
                    case Ce.Platforms:
                        return a || i.selectedObjectType ? U : null
                    }
                }
            }]),
            i
        }(y.c);
        Object(b.a)([Object(y.d)("vueData.worldSize", {
            deep: !0,
            immediate: !0
        })], it.prototype, "worldSizeChanged", null),
        Object(b.a)([Object(y.d)("vueData.worldSettings", {
            deep: !0,
            immediate: !0
        })], it.prototype, "worldSettingsChanged", null),
        Object(b.a)([Object(y.d)("vueData.user")], it.prototype, "userChanged", null),
        Object(b.a)([Object(y.d)("vueData.map")], it.prototype, "mapChanged", null);
        var at = it = Object(b.a)([Object(y.a)({
            components: {
                RightSidebar: Xe,
                TopNavCurrent: fe,
                TopNavAnimal: de,
                TopNavHideSpace: le,
                TopNavFoodSpawn: re,
                TopNavNpcSpawn: ae,
                TopNavHabitat: ee,
                TopNavWater: Z,
                TopNavGradientTerrain: V,
                TopNavTerrain: U
            }
        })], it)
          , nt = Object(C.a)(at, W, [], !1, null, null, null).exports
          , st = (i("3ca3"),
        i("ddb0"),
        i("2b3d"),
        i("d331"))
          , rt = i("d5bc")
          , ot = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).toolVersion = h.f.version,
                e.subreddit = h.f.subreddit,
                e
            }
            return Object(u.a)(i, [{
                key: "mounted",
                value: function() {}
            }, {
                key: "ok",
                value: function() {
                    this.$close(!0)
                }
            }, {
                key: "cancel",
                value: function() {
                    this.$close(!1)
                }
            }]),
            i
        }(v.DialogComponent)
          , ct = ot = Object(b.a)([y.a], ot)
          , lt = Object(C.a)(ct, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "changelog-dialog dialog-mask",
                on: {
                    mousedown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) ? null : "button"in t && 0 !== t.button ? null : t.target !== t.currentTarget ? null : e.cancel(t)
                    }
                }
            }, [i("div", {
                staticClass: "dialog-content"
            }, [i("header", [e._v(e._s(e.toolVersion) + " Changelog")]), i("p", [i("b", [e._v("Welcome to the new Deeeep.io's Map Editor!")]), e._v(" This tool will allow you to design, create and host your own maps, but it's still in early development. Please, if you find any bug or have any suggestion about the tool, post it "), i("a", {
                attrs: {
                    href: e.subreddit,
                    target: "_blank"
                }
            }, [e._v("here")]), e._v(". "), i("b", [e._v("02-27 v0.1.7")]), e._v(" • Maps can be cloned • You may now select and copy objects from map you don't own • Maps that are used in a server will be locked. To modify them, make a clone "), i("b", [e._v("02-14 v0.1.6d")]), e._v(" • Increased food amount "), i("b", [e._v("10-10 v0.1.6b")]), e._v(" • Non-collidable terrains moved to Platforms. Now they appear below islands and normal terrains • Fixed bugs "), i("b", [e._v("10-10 v0.1.6")]), e._v(' • Added Currents • Added "Only spawn in water" option for Food Spawns • Added "Collidable" option for terrains, when disabled, the terrain will not be collidable but will still be standable on '), i("b", [e._v("09-30 v0.1.5")]), e._v(" • Added Hide Spaces / Decorations • Added Preview Animals "), i("b", [e._v("09-13 v0.1.4")]), e._v(' • Added 2 NPC types, and "Restrict movement to spawn borders" option • Added food spawns • Added option to set surface food to Terrains • Added "Gravity" world setting '), i("b", [e._v("09-06 v0.1.3")]), e._v(" • Added ceiling terrain. Invisible for players who are inside • Added NPC Spawns "), i("b", [e._v("08-28 v0.1.2")]), e._v(" • Undo/Redo function added "), i("b", [e._v("08-27 v0.1.1")]), e._v(" • Added ability to copy paste (either keeping alt pressed while moving objects, or with ctrl+c/ctrl+v) • Now you can delete both using backspace/delete and from the menu "), i("b", [e._v("Features coming soon:")]), e._v(" • Player Spawns • Custom assets for terrains, foods and hide spaces / decorations • Triggers (action happens when player / food enters) • Ability to try the maps in-game • Ability to host your own servers "), i("b", [e._v("Notes:")]), e._v(" • 800x75 is the size of the current FFA map, but you can use any size you want ")]), i("footer", {
                staticClass: "children-inline text-center"
            }, [i("button", {
                staticClass: "btn",
                on: {
                    click: e.ok
                }
            }, [e._v("Close")])])])])
        }
        ), [], !1, null, null, null).exports
          , ut = Object(v.create)(k.a)
          , ht = Object(v.create)(st.a, "map")
          , dt = Object(v.create)(D, "filters")
          , pt = Object(v.create)(lt)
          , vt = (Object(v.create)(rt.a, "title", "content"),
        function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).authService = new m.a,
                e.mapService = new w.a,
                e.menuToggled = {
                    file: !1,
                    help: !1,
                    edit: !1
                },
                e.userUpdatedDate = Date.now(),
                e.hasMapPermission = !1,
                e.toolVersion = h.f.version,
                e.subreddit = h.f.subreddit,
                e.loading = !1,
                e
            }
            return Object(u.a)(i, [{
                key: "mounted",
                value: function() {
                    this.hasMapPermission = m.a.hasPermission(this.user, this.map)
                }
            }, {
                key: "userChanged",
                value: function() {
                    this.userUpdatedDate = Date.now(),
                    this.hasMapPermission = m.a.hasPermission(this.user, this.map)
                }
            }, {
                key: "mapChanged",
                value: function() {
                    this.hasMapPermission = m.a.hasPermission(this.user, this.map)
                }
            }, {
                key: "toggleMenu",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this.menuToggled[e] = null == t ? !this.menuToggled[e] : t
                }
            }, {
                key: "save",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    h.f.vueData.emit("requestSave");
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "openMapDialog",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        var t, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.user) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 3,
                                    this.login();
                                case 3:
                                    if (e.sent) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return t = !this.map || !this.map.id,
                                    i = this.map || this.getEmptyMap(),
                                    e.next = 10,
                                    ht(i);
                                case 10:
                                    e.sent && t && h.f.vueData.emit("requestSave");
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "copy",
                value: function() {
                    h.f.vueData.emit("requestCopy")
                }
            }, {
                key: "paste",
                value: function() {
                    h.f.vueData.emit("requestPaste")
                }
            }, {
                key: "deleteObjects",
                value: function() {
                    h.f.vueData.emit("requestDelete")
                }
            }, {
                key: "undo",
                value: function() {
                    h.f.vueData.emit("requestUndo")
                }
            }, {
                key: "redo",
                value: function() {
                    h.f.vueData.emit("requestRedo")
                }
            }, {
                key: "getEmptyMap",
                value: function() {
                    var e = w.a.getEmptyMap();
                    return e.user_id = this.user.id,
                    e
                }
            }, {
                key: "open",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    dt(h.f.vueData.mapsSearchFilters);
                                case 2:
                                    e.sent;
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "clone",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.map && this.map.id) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.loading = !0,
                                    e.next = 5,
                                    h.f.vueData.callBooleanCbs("beforeMapChange");
                                case 5:
                                    e.sent && (h.f.mapEditor.cloneMap(h.f.vueData.map),
                                    this.loading = !1);
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "login",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    ut();
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "logout",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.authService.logout();
                                case 2:
                                    e.sent,
                                    h.f.vueData.setUser(null);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "exportFile",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        var t, i, a;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.hasMapPermission) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    t = JSON.stringify(h.f.mapEditor.toJsonObject()),
                                    i = new Blob([t],{
                                        type: "text/csv"
                                    }),
                                    window.navigator.msSaveOrOpenBlob ? window.navigator.msSaveBlob(i, "map.dpm") : ((a = window.document.createElement("a")).href = window.URL.createObjectURL(i),
                                    a.download = "map.dpm",
                                    document.body.appendChild(a),
                                    a.click(),
                                    document.body.removeChild(a));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "newMap",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    h.f.vueData.callBooleanCbs("beforeMapChange");
                                case 2:
                                    e.sent && h.f.vueData.setMap({
                                        map: w.a.getEmptyMap(),
                                        shouldReset: !0
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "like",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.loading) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.loading = !0,
                                    e.prev = 3,
                                    e.next = 6,
                                    this.mapService.like(t);
                                case 6:
                                    i = e.sent,
                                    h.f.vueData.map.likes = i.likes,
                                    h.f.vueData.map.reaction = i.reaction,
                                    e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11,
                                    e.t0 = e.catch(3),
                                    console.error("Error liking", e.t0);
                                case 14:
                                    return e.prev = 14,
                                    this.loading = !1,
                                    e.finish(14);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[3, 11, 14, 17]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "dislike",
                value: function() {
                    var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!this.loading) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    return this.loading = !0,
                                    e.prev = 3,
                                    e.next = 6,
                                    this.mapService.dislike(t);
                                case 6:
                                    i = e.sent,
                                    h.f.vueData.map.likes = i.likes,
                                    h.f.vueData.map.reaction = i.reaction,
                                    e.next = 14;
                                    break;
                                case 11:
                                    e.prev = 11,
                                    e.t0 = e.catch(3),
                                    console.error("Error disliking", e.t0);
                                case 14:
                                    return e.prev = 14,
                                    this.loading = !1,
                                    e.finish(14);
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[3, 11, 14, 17]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getPicturePath",
                value: function(e) {
                    return e ? h.f.deeeepFileHost + "/" + e + "?" + this.userUpdatedDate : ("file:" != window.location.protocol ? "//" : "http://") + "deeeep.io/new/assets/placeholder.png"
                }
            }, {
                key: "openChangelog",
                value: function() {
                    pt()
                }
            }]),
            i
        }(y.c));
        Object(b.a)([Object(y.b)()], vt.prototype, "user", void 0),
        Object(b.a)([Object(y.b)()], vt.prototype, "map", void 0),
        Object(b.a)([Object(y.b)()], vt.prototype, "selectedObjectCount", void 0),
        Object(b.a)([Object(y.b)()], vt.prototype, "historyStatus", void 0),
        Object(b.a)([Object(y.b)()], vt.prototype, "mapDirty", void 0),
        Object(b.a)([Object(y.b)()], vt.prototype, "clipboard", void 0),
        Object(b.a)([Object(y.d)("user", {
            deep: !0
        })], vt.prototype, "userChanged", null),
        Object(b.a)([Object(y.d)("map")], vt.prototype, "mapChanged", null);
        var ft = vt = Object(b.a)([y.a], vt)
          , gt = Object(C.a)(ft, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "noselect children-inline main-menu"
            }, [i("div", {
                staticClass: "menu children-inline col-3"
            }, [i("a", {
                staticClass: "menu-item",
                on: {
                    click: function(t) {
                        return e.toggleMenu("file")
                    },
                    mouseleave: function(t) {
                        return e.toggleMenu("file", !1)
                    }
                }
            }, [e._v(" File "), e.menuToggled.file ? i("div", {
                staticClass: "menu-dropdown"
            }, [i("ul", [i("li", {
                staticClass: "menu-dropdown-item"
            }, [i("a", {
                on: {
                    click: e.newMap
                }
            }, [e._v("New")])]), i("li", {
                staticClass: "menu-dropdown-item"
            }, [i("a", {
                on: {
                    click: e.open
                }
            }, [e._v("Open "), i("span", {
                staticClass: "key-hit"
            }, [e._v("CTRL+O")])])]), i("li", {
                staticClass: "menu-dropdown-item",
                class: {
                    disabled: !!e.map && !e.mapDirty
                }
            }, [i("a", {
                on: {
                    click: e.save
                }
            }, [e._v("Save "), i("span", {
                staticClass: "key-hit"
            }, [e._v("CTRL+S")])])]), i("li", {
                staticClass: "menu-dropdown-item",
                class: {
                    disabled: !this.map || !this.map.id
                },
                on: {
                    click: e.clone
                }
            }, [i("a", [e._v("Clone")])]), i("li", {
                staticClass: "menu-dropdown-item",
                class: {
                    disabled: !e.hasMapPermission
                },
                on: {
                    click: e.exportFile
                }
            }, [i("a", [e._v("Export as file")])]), i("li", {
                staticClass: "menu-dropdown-item disabled",
                on: {
                    click: function(e) {
                        e.stopPropagation()
                    }
                }
            }, [i("a", [e._v("Try (soon)")])])])]) : e._e()]), i("a", {
                staticClass: "menu-item",
                on: {
                    click: function(t) {
                        return e.toggleMenu("edit")
                    },
                    mouseleave: function(t) {
                        return e.toggleMenu("edit", !1)
                    }
                }
            }, [e._v(" Edit "), e.menuToggled.edit ? i("div", {
                staticClass: "menu-dropdown"
            }, [i("ul", [i("li", {
                staticClass: "menu-dropdown-item",
                class: {
                    disabled: !e.historyStatus.canUndo
                }
            }, [i("a", {
                on: {
                    click: e.undo
                }
            }, [e._v("Undo "), i("span", {
                staticClass: "key-hit"
            }, [e._v("CTRL+Z")])])]), i("li", {
                staticClass: "menu-dropdown-item",
                class: {
                    disabled: !e.historyStatus.canRedo
                }
            }, [i("a", {
                on: {
                    click: e.redo
                }
            }, [e._v("Redo "), i("span", {
                staticClass: "key-hit"
            }, [e._v("CTRL+Y")])])]), i("li", {
                staticClass: "menu-dropdown-item",
                class: {
                    disabled: 0 == e.selectedObjectCount
                }
            }, [i("a", {
                on: {
                    click: e.copy
                }
            }, [e._v("Copy "), i("span", {
                staticClass: "key-hit"
            }, [e._v("CTRL+C")])])]), i("li", {
                staticClass: "menu-dropdown-item",
                class: {
                    disabled: e.clipboard.empty()
                }
            }, [i("a", {
                on: {
                    click: e.paste
                }
            }, [e._v("Paste "), i("span", {
                staticClass: "key-hit"
            }, [e._v("CTRL+V")])])]), i("li", {
                staticClass: "menu-dropdown-item",
                class: {
                    disabled: 0 == e.selectedObjectCount
                }
            }, [i("a", {
                on: {
                    click: e.deleteObjects
                }
            }, [e._v("Delete "), i("span", {
                staticClass: "key-hit"
            }, [e._v("DEL")])])])])]) : e._e()]), i("a", {
                staticClass: "menu-item",
                on: {
                    click: function(t) {
                        return e.toggleMenu("help")
                    },
                    mouseleave: function(t) {
                        return e.toggleMenu("help", !1)
                    }
                }
            }, [e._v(" Help "), e.menuToggled.help ? i("div", {
                staticClass: "menu-dropdown"
            }, [i("ul", [i("li", {
                staticClass: "menu-dropdown-item"
            }, [i("a", {
                attrs: {
                    href: e.subreddit,
                    target: "_blank"
                }
            }, [e._v("Go to Reddit")])]), i("li", {
                staticClass: "menu-dropdown-item"
            }, [i("a", {
                on: {
                    click: e.openChangelog
                }
            }, [e._v(e._s(e.toolVersion) + " Changelog")])])])]) : e._e()])]), i("div", {
                staticClass: "map-info children-inline col-6"
            }, [i("a", {
                staticClass: "map-name btn btn-no-bg",
                on: {
                    click: e.openMapDialog
                }
            }, [e.map ? i("span", {
                staticClass: "children-inline-top"
            }, [i("span", {
                staticClass: "title"
            }, [e._v(e._s(e.map.title))]), i("span", {
                staticClass: "id"
            }, [e._v(e._s(e.map.string_id))])]) : i("span", [e._v("Untitled ")]), e.hasMapPermission ? i("i", {
                staticClass: "material-icon"
            }, [e._v("create")]) : e._e()]), e.map && e.map.user ? i("div", {
                staticClass: "map-creator"
            }, [e._v("by "), i("span", {
                staticClass: "name"
            }, [e._v(e._s(e.map.user.name))])]) : e._e(), e.map && e.map.id ? i("div", {
                staticClass: "reaction-panel children-inline"
            }, [i("a", {
                staticClass: "reaction dislike",
                class: {
                    active: "dislike" == e.map.reaction
                },
                on: {
                    click: function(t) {
                        return e.dislike(e.map)
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("thumb_down")])]), i("span", {
                staticClass: "likes"
            }, [e._v(e._s(e.map.likes))]), i("a", {
                staticClass: "reaction like",
                class: {
                    active: "like" == e.map.reaction
                },
                on: {
                    click: function(t) {
                        return e.like(e.map)
                    }
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("thumb_up")])])]) : e._e()]), i("div", {
                staticClass: "user-info children-inline col-3"
            }, [e.user ? i("div", {
                staticClass: "user children-inline"
            }, [i("img", {
                staticClass: "user-picture",
                attrs: {
                    src: e.getPicturePath(e.user.picture)
                }
            }), i("span", {
                staticClass: "user-name"
            }, [e._v(e._s(e.user.name))]), i("button", {
                staticClass: "btn icon-button btn-no-bg logout",
                on: {
                    click: e.logout
                }
            }, [i("i", {
                staticClass: "material-icon"
            }, [e._v("exit_to_app")])])]) : i("a", {
                staticClass: "login-button btn btn-no-bg",
                on: {
                    click: e.login
                }
            }, [e._v("Click here to log in")])])])
        }
        ), [], !1, null, null, null).exports
          , bt = i("bc3a")
          , yt = i.n(bt)
          , mt = Object(v.create)(k.a)
          , wt = function(e) {
            Object(f.a)(i, e);
            var t = Object(g.a)(i);
            function i() {
                var e;
                return Object(l.a)(this, i),
                (e = t.apply(this, arguments)).vueData = h.f.vueData,
                e.mapService = new w.a,
                e
            }
            return Object(u.a)(i, [{
                key: "mounted",
                value: function() {
                    document.title = "(".concat(h.f.version, ") Deeeep.io Map Maker Alpha"),
                    window.onerror = function(e) {
                        console.error(e);
                        try {
                            h.f.sendGAException(e, !0)
                        } catch (e) {}
                    }
                    ,
                    yt.a.interceptors.response.use(function() {
                        var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", t);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), function() {
                        var e = Object(c.a)(regeneratorRuntime.mark((function e(t) {
                            var i;
                            return regeneratorRuntime.wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (403 != t.response.status || !h.f.vueData.token) {
                                            e.next = 8;
                                            break
                                        }
                                        return i = t.config,
                                        e.next = 5,
                                        mt();
                                    case 5:
                                        if (!e.sent) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", yt.a.request(i));
                                    case 8:
                                        return e.abrupt("return", Promise.reject(t));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }
            }]),
            i
        }(y.c)
          , kt = wt = Object(b.a)([Object(y.a)({
            components: {
                MainMenu: gt,
                EditorCanvas: nt
            }
        })], wt)
          , St = (i("5c0b"),
        Object(C.a)(kt, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "noselect",
                attrs: {
                    id: "app"
                }
            }, [i("main-menu", {
                attrs: {
                    user: e.vueData.user,
                    map: e.vueData.map,
                    clipboard: e.vueData.clipboard,
                    "history-status": e.vueData.historyStatus,
                    "selected-object-count": e.vueData.selectedObjectCount,
                    "map-dirty": e.vueData.mapDirty
                }
            }), i("EditorCanvas"), i("dialogs-wrapper", {
                attrs: {
                    "wrapper-name": "default"
                }
            })], 1)
        }
        ), [], !1, null, null, null)).exports
          , xt = (i("3a92"),
        i("8682"))
          , Ct = i("8c4f")
          , Ot = i("e37d")
          , jt = i("2103")
          , _t = i.n(jt)
          , Mt = i("a4a1")
          , Pt = i.n(Mt)
          , Dt = (i("f6b9"),
        i("74bf"))
          , Lt = i.n(Dt)
          , Tt = i("4971")
          , Bt = i.n(Tt);
        i("24df"),
        N.default.config.productionTip = !1,
        N.default.use(v),
        N.default.use(xt.a, {
            name: "Timeago",
            locale: "en"
        }),
        N.default.use(n.a),
        N.default.use(Ct.a),
        N.default.use(Ot.a),
        N.default.use(_t.a),
        N.default.use(Pt.a),
        N.default.component("input-tag", Lt.a),
        N.default.component("VueSlider", Bt.a),
        window.vueData = h.f.vueData = E;
        var zt = h.f.router = new Ct.a({
            mode: "history",
            routes: [{
                path: "/map/:stringId",
                name: "Map",
                component: St
            }, {
                path: "*",
                name: "Main",
                component: St
            }]
        });
        new N.default({
            router: zt,
            render: function(e) {
                return e(St)
            },
            data: E
        }).$mount("#app")
    },
    cdd1: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return b
            }
            ));
            var a = i("d4ec")
              , n = i("bee2")
              , s = i("45eb")
              , r = i("7e84")
              , o = i("262e")
              , c = i("2caf")
              , l = (i("18a5"),
            i("bb4b"))
              , u = i("b4d9")
              , h = i("dfb9")
              , d = e.Sprite
              , p = e.Container
              , v = e.Rectangle
              , f = e.Graphics
              , g = i("f53e")
              , b = function(e) {
                Object(o.a)(i, e);
                var t = Object(c.a)(i);
                function i(e, n, s, r) {
                    var o;
                    return Object(a.a)(this, i),
                    (o = t.call(this, e, n))._anchor = {
                        x: .5,
                        y: .5
                    },
                    o._size = {
                        width: 0,
                        height: 0
                    },
                    o._objectBounds = new v,
                    o.viewportDirty = !1,
                    o._rotation = 0,
                    o.pointsLayer = r,
                    o._inner = new p,
                    o.addChild(o._inner),
                    s && (o.texture = s,
                    o.setSize(s.width, s.height)),
                    o.interactiveChildren = o.interactive = !0,
                    o.lines = new f,
                    o.lines.parentLayer = r,
                    o._inner.addChild(o.lines),
                    o.lines.visible = !1,
                    o.setSelected(!1),
                    o
                }
                return Object(n.a)(i, [{
                    key: "getAnchor",
                    value: function() {
                        return this._anchor
                    }
                }, {
                    key: "setAnchor",
                    value: function(e, t) {
                        this._anchor.x = e,
                        this._anchor.y = t,
                        this.updatePivot(),
                        this.redrawLines()
                    }
                }, {
                    key: "updatePivot",
                    value: function() {
                        var e = this.size.width / 2
                          , t = this.size.height / 2
                          , i = this.size.width * this._anchor.x
                          , a = this.size.height * this._anchor.y;
                        this._inner.pivot.set(i - e, a - t)
                    }
                }, {
                    key: "texture",
                    get: function() {
                        return this._texture
                    },
                    set: function(e) {
                        if (this._texture != e) {
                            if (this._texture = e,
                            this.sprite)
                                this.sprite.texture = e;
                            else {
                                var t = new d(e);
                                t.anchor.set(.5),
                                this.sprite = t,
                                t.angle = this.rotation,
                                this._inner.addChildAt(t, 0)
                            }
                            this.setDirty()
                        }
                    }
                }, {
                    key: "sprite",
                    get: function() {
                        return this._sprite
                    },
                    set: function(e) {
                        this._sprite = e
                    }
                }, {
                    key: "getRotation",
                    value: function() {
                        return this._rotation
                    }
                }, {
                    key: "setRotation",
                    value: function(e) {
                        this._rotation = e,
                        this._inner.angle = e
                    }
                }, {
                    key: "size",
                    get: function() {
                        return this._size
                    }
                }, {
                    key: "setSize",
                    value: function(e, t) {
                        this.size.width = e,
                        this.size.height = t,
                        this.sprite && (this.sprite.width = e,
                        this.sprite.height = t),
                        this.updatePivot(),
                        this.setDirty(),
                        this.redrawLines()
                    }
                }, {
                    key: "setSelected",
                    value: function(e) {
                        this.checkViewportDirty(),
                        Object(s.a)(Object(r.a)(i.prototype), "setSelected", this).call(this, e),
                        this.lines.tint = e ? 16711680 : 4494591
                    }
                }, {
                    key: "redrawLines",
                    value: function() {
                        var e = this.viewport.worldScreenWidth / 1850;
                        this.lines.clear(),
                        this.lines.lineStyle(2 * e, 16777215, .7);
                        var t = this.size.width
                          , i = this.size.height;
                        this.lines.moveTo(-t / 2, -i / 2).lineTo(t / 2, -i / 2).lineTo(t / 2, i / 2).lineTo(-t / 2, i / 2).lineTo(-t / 2, -i / 2),
                        this.lines.beginFill(16777215, .7).drawCircle(t * this._anchor.x - t / 2, i * this._anchor.y - i / 2, 5 * e).endFill()
                    }
                }, {
                    key: "updateUI",
                    value: function() {
                        this.checkViewportDirty(),
                        this.lines.visible = this.isSelected() || this.isHovered && (u.f.vueData.pointerMode == u.b.Move || u.f.vueData.pointerMode == u.b.Selection || u.f.vueData.pointerMode == u.b.PointSelection || u.f.mapEditor.tool && u.f.mapEditor.tool.interactsWith(this))
                    }
                }, {
                    key: "checkViewportDirty",
                    value: function() {
                        this.viewportDirty && (this.viewportDirty = !1,
                        this.redrawLines())
                    }
                }, {
                    key: "onViewportResize",
                    value: function() {
                        this.isSelected() || this.isHovered ? this.redrawLines() : this.viewportDirty = !0
                    }
                }, {
                    key: "hitTest",
                    value: function(e) {
                        return g.boxBox(this.x, this.y, this.size.width, this.size.height, e.minX, e.minY, e.maxX - e.minX, e.maxY - e.minY)
                    }
                }, {
                    key: "redraw",
                    value: function() {}
                }, {
                    key: "move",
                    value: function(e, t) {
                        this.position.set(this.x + e, this.y + t),
                        this.setDirty()
                    }
                }, {
                    key: "getObjectBounds",
                    value: function() {
                        return this._objectBounds.height = this.size.height,
                        this._objectBounds.width = this.size.width,
                        this._objectBounds.x = this.x - this.size.width / 2,
                        this._objectBounds.y = this.y - this.size.height / 2,
                        this._objectBounds
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(s.a)(Object(r.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.x = h.a.limitDecimals(this.x, 3),
                        e.y = h.a.limitDecimals(this.y, 3),
                        e.rotation = h.a.limitDecimals(this.getRotation(), 2),
                        e
                    }
                }]),
                i
            }(l.a)
        }
        ).call(this, i("22a2"))
    },
    d05b: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return f
            }
            ));
            var a = i("b85c")
              , n = i("d4ec")
              , s = i("bee2")
              , r = i("45eb")
              , o = i("7e84")
              , c = i("262e")
              , l = i("2caf")
              , u = i("b4d9")
              , h = i("f8a7")
              , d = i("1dab")
              , p = i("234e")
              , v = e.Point
              , f = function(e) {
                Object(c.a)(i, e);
                var t = Object(l.a)(i);
                function i(e, a, s, r, o) {
                    var c;
                    Object(n.a)(this, i),
                    (c = t.call(this, e, a, null, s, r, o)).type = u.c.BackgroundTerrain;
                    var l = d.a.getAssetPackSync(c.texture.pack_id)
                      , h = p.a.getSpriteSheetSync(l)[a.asset];
                    return c.textureTranslation.set(h.width / 3, h.width / 3),
                    c
                }
                return Object(s.a)(i, [{
                    key: "opacity",
                    get: function() {
                        return this._opacity
                    },
                    set: function(e) {
                        this._opacity = this.zOrder = e,
                        this.shape.alpha = e
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(r.a)(Object(o.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.opacity = this.opacity,
                        e
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var n, s = e, r = [], o = Object(a.a)(s.points);
                        try {
                            for (o.s(); !(n = o.n()).done; ) {
                                var c = n.value;
                                r.push(new v(c.x,c.y))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        var l = new i(r,this.getTextureFromJson(s),t.parent,t.pointsLayer,t.viewport);
                        return l.opacity = s.opacity,
                        l
                    }
                }]),
                i
            }(h.a)
        }
        ).call(this, i("22a2"))
    },
    d331: function(e, t, i) {
        "use strict";
        var a = i("1da1")
          , n = i("5530")
          , s = i("d4ec")
          , r = i("bee2")
          , o = i("262e")
          , c = i("2caf")
          , l = (i("96cf"),
        i("d81d"),
        i("9ab4"))
          , u = i("60a3")
          , h = i("9935")
          , d = i("2cbb")
          , p = i("b4d9")
          , v = i("332f")
          , f = function(e) {
            Object(o.a)(i, e);
            var t = Object(c.a)(i);
            function i() {
                var e;
                return Object(s.a)(this, i),
                (e = t.apply(this, arguments)).viewMap = {},
                e.title = "Map",
                e.authService = new d.a,
                e.mapService = new v.a,
                e.displayError = !1,
                e.message = "",
                e.hasMapPermission = !1,
                e.loading = !1,
                e
            }
            return Object(r.a)(i, [{
                key: "mounted",
                value: function() {
                    p.f.inputManager.disableKeyBindings(),
                    window.setTimeout((function() {
                        document.getElementById("string_id").focus()
                    }
                    ), 0),
                    this.viewMap = Object(n.a)({}, this.map),
                    this.map.tags && (this.viewMap.tags = this.viewMap.tags.map((function(e) {
                        return e.id
                    }
                    ))),
                    this.map.id || (this.title = "New map"),
                    this.hasMapPermission = d.a.hasPermission(p.f.vueData.user, this.map),
                    this.init()
                }
            }, {
                key: "destroyed",
                value: function() {
                    p.f.inputManager.enableKeyBindings()
                }
            }, {
                key: "mapChanged",
                value: function() {
                    this.viewMap = Object(n.a)({}, this.map),
                    this.viewMap.tags = this.viewMap.tags.map((function(e) {
                        return e.id
                    }
                    ))
                }
            }, {
                key: "init",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.loading = !0,
                                    !this.map.id) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.next = 4,
                                    this.mapService.getById(this.map.id);
                                case 4:
                                    this.viewMap = e.sent,
                                    this.viewMap.tags = this.viewMap.tags.map((function(e) {
                                        return e.id
                                    }
                                    ));
                                case 6:
                                    this.loading = !1;
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "save",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e() {
                        var t, i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.loading = !0,
                                    this.displayError = !1,
                                    e.prev = 2,
                                    this.map.id) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 6,
                                    this.mapService.create(this.viewMap);
                                case 6:
                                    t = e.sent,
                                    p.f.sendGAEvent("maps", "create"),
                                    e.next = 13;
                                    break;
                                case 10:
                                    return e.next = 12,
                                    this.mapService.save(this.viewMap);
                                case 12:
                                    t = e.sent;
                                case 13:
                                    p.f.vueData.setMap({
                                        map: t,
                                        shouldReset: !1
                                    }),
                                    this.$close(!0),
                                    this.loading = !1,
                                    e.next = 26;
                                    break;
                                case 18:
                                    e.prev = 18,
                                    e.t0 = e.catch(2),
                                    this.loading = !1,
                                    e.t0 = e.t0,
                                    i = "Error saving the map",
                                    e.t0.response && e.t0.response.data && e.t0.response.data.message && (i = e.t0.response.data.message),
                                    this.message = i,
                                    this.displayError = !0;
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[2, 18]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "cancel",
                value: function() {
                    this.$close(!1)
                }
            }]),
            i
        }(h.DialogComponent);
        Object(l.a)([Object(u.b)()], f.prototype, "map", void 0),
        Object(l.a)([Object(u.d)("map", {
            deep: !0
        })], f.prototype, "mapChanged", null);
        var g = f = Object(l.a)([u.a], f)
          , b = i("2877")
          , y = Object(b.a)(g, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "map-dialog dialog-mask",
                on: {
                    mousedown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) ? null : "button"in t && 0 !== t.button ? null : t.target !== t.currentTarget ? null : e.cancel(t)
                    }
                }
            }, [i("div", {
                staticClass: "dialog-content"
            }, [i("header", [e._v(e._s(e.title))]), i("div", {
                staticClass: "form-group"
            }, [i("div", {
                staticClass: "form-input"
            }, [i("label", {
                staticClass: "title",
                attrs: {
                    for: "string_id"
                }
            }, [e._v("Id")]), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewMap.string_id,
                    expression: "viewMap.string_id"
                }],
                attrs: {
                    id: "string_id",
                    type: "text",
                    readonly: !e.hasMapPermission || e.loading
                },
                domProps: {
                    value: e.viewMap.string_id
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.viewMap, "string_id", t.target.value)
                    }
                }
            }), i("span", {
                staticClass: "note"
            }, [e._v("Only letters, numbers or underscores (ie my_map_v2)")])]), i("div", {
                staticClass: "form-input"
            }, [i("label", {
                staticClass: "title",
                attrs: {
                    for: "title"
                }
            }, [e._v("Title")]), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewMap.title,
                    expression: "viewMap.title"
                }],
                attrs: {
                    id: "title",
                    type: "text",
                    readonly: !e.hasMapPermission || e.loading
                },
                domProps: {
                    value: e.viewMap.title
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.viewMap, "title", t.target.value)
                    }
                }
            })]), i("div", {
                staticClass: "form-input"
            }, [i("label", {
                staticClass: "title",
                attrs: {
                    for: "description"
                }
            }, [e._v("Description")]), i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewMap.description,
                    expression: "viewMap.description"
                }],
                attrs: {
                    id: "description",
                    type: "text",
                    readonly: !e.hasMapPermission || e.loading
                },
                domProps: {
                    value: e.viewMap.description
                },
                on: {
                    input: function(t) {
                        t.target.composing || e.$set(e.viewMap, "description", t.target.value)
                    }
                }
            })]), i("div", {
                staticClass: "form-input"
            }, [i("label", {
                staticClass: "title",
                attrs: {
                    for: "tags"
                }
            }, [e._v("Tags")]), i("input-tag", {
                attrs: {
                    id: "tags",
                    "read-only": !e.hasMapPermission || e.loading,
                    "add-tag-on-blur": !0
                },
                model: {
                    value: e.viewMap.tags,
                    callback: function(t) {
                        e.$set(e.viewMap, "tags", t)
                    },
                    expression: "viewMap.tags"
                }
            })], 1), i("div", {
                staticClass: "form-input"
            }, [i("label", {
                staticClass: "title",
                attrs: {
                    for: "public"
                }
            }, [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.viewMap.public,
                    expression: "viewMap.public"
                }],
                attrs: {
                    type: "checkbox",
                    id: "public",
                    disabled: !e.hasMapPermission || e.loading
                },
                domProps: {
                    checked: Array.isArray(e.viewMap.public) ? e._i(e.viewMap.public, null) > -1 : e.viewMap.public
                },
                on: {
                    change: function(t) {
                        var i = e.viewMap.public
                          , a = t.target
                          , n = !!a.checked;
                        if (Array.isArray(i)) {
                            var s = e._i(i, null);
                            a.checked ? s < 0 && e.$set(e.viewMap, "public", i.concat([null])) : s > -1 && e.$set(e.viewMap, "public", i.slice(0, s).concat(i.slice(s + 1)))
                        } else
                            e.$set(e.viewMap, "public", n)
                    }
                }
            }), e._v(" Public ")])])]), e.displayError ? i("div", {
                staticClass: "message error"
            }, [e._v(" " + e._s(e.message) + " ")]) : e._e(), i("footer", {
                staticClass: "children-inline text-center"
            }, [i("button", {
                staticClass: "btn",
                on: {
                    click: e.cancel
                }
            }, [e._v("Cancel")]), i("button", {
                staticClass: "btn",
                attrs: {
                    disabled: !e.hasMapPermission || e.loading
                },
                on: {
                    click: e.save
                }
            }, [e._v("Save")])])])])
        }
        ), [], !1, null, null, null);
        t.a = y.exports
    },
    d547: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return f
            }
            ));
            var a = i("b85c")
              , n = i("d4ec")
              , s = i("bee2")
              , r = i("45eb")
              , o = i("7e84")
              , c = i("262e")
              , l = i("2caf")
              , u = (i("18a5"),
            i("b4d9"))
              , h = i("f8a7")
              , d = e.Point
              , p = e.utils.TextureCache
              , v = e.Sprite
              , f = function(e) {
                Object(c.a)(i, e);
                var t = Object(l.a)(i);
                function i(e, a, s, r, o) {
                    var c;
                    return Object(n.a)(this, i),
                    (c = t.call(this, e, a, null, s, r, o)).type = u.c.Ceiling,
                    c.ceilingIcon = new v(p["assets/ui/ceiling.png"]),
                    c.ceilingIcon.anchor.set(.5),
                    c.addChild(c.ceilingIcon),
                    c.updateIconSize(),
                    c
                }
                return Object(s.a)(i, [{
                    key: "updateIconSize",
                    value: function() {
                        var e = Math.min(this.polygonBounds.width, this.polygonBounds.height)
                          , t = this.viewport.worldScreenWidth / 5e3;
                        this.ceilingIcon.width = this.ceilingIcon.height = Math.min(e, 128 * t),
                        this.ceilingIcon.position.set(this.polygonBounds.x + this.polygonBounds.width / 2, this.polygonBounds.y + this.polygonBounds.height / 2)
                    }
                }, {
                    key: "onViewportResize",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "onViewportResize", this).call(this),
                        this.updateIconSize()
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "redraw", this).call(this),
                        this.updateIconSize()
                    }
                }, {
                    key: "updatePoints",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "updatePoints", this).call(this),
                        this.updateIconSize()
                    }
                }, {
                    key: "updateUI",
                    value: function() {
                        Object(r.a)(Object(o.a)(i.prototype), "updateUI", this).call(this),
                        this.shape && (this.shape.alpha = this.isHovered ? .1 : 1)
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var n, s = e, r = [], o = Object(a.a)(s.points);
                        try {
                            for (o.s(); !(n = o.n()).done; ) {
                                var c = n.value;
                                r.push(new d(c.x,c.y))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return new i(r,this.getTextureFromJson(s),t.parent,t.pointsLayer,t.viewport)
                    }
                }]),
                i
            }(h.a)
        }
        ).call(this, i("22a2"))
    },
    d5bc: function(e, t, i) {
        "use strict";
        var a = i("d4ec")
          , n = i("bee2")
          , s = i("262e")
          , r = i("2caf")
          , o = i("9ab4")
          , c = i("60a3")
          , l = function(e) {
            Object(s.a)(i, e);
            var t = Object(r.a)(i);
            function i() {
                return Object(a.a)(this, i),
                t.apply(this, arguments)
            }
            return Object(n.a)(i, [{
                key: "mounted",
                value: function() {}
            }, {
                key: "ok",
                value: function() {
                    this.$close(!0)
                }
            }, {
                key: "cancel",
                value: function() {
                    this.$close(!1)
                }
            }]),
            i
        }(i("9935").DialogComponent);
        Object(o.a)([Object(c.b)()], l.prototype, "title", void 0),
        Object(o.a)([Object(c.b)()], l.prototype, "content", void 0);
        var u = l = Object(o.a)([c.a], l)
          , h = i("2877")
          , d = Object(h.a)(u, (function() {
            var e = this
              , t = e.$createElement
              , i = e._self._c || t;
            return i("div", {
                staticClass: "message-dialog dialog-mask",
                on: {
                    mousedown: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) ? null : "button"in t && 0 !== t.button ? null : t.target !== t.currentTarget ? null : e.cancel(t)
                    }
                }
            }, [i("div", {
                staticClass: "dialog-content"
            }, [i("header", [e._v(e._s(e.title))]), i("p", [e._v(e._s(e.content))]), i("footer", {
                staticClass: "children-inline text-center"
            }, [i("button", {
                staticClass: "btn",
                on: {
                    click: e.ok
                }
            }, [e._v("Ok")])])])])
        }
        ), [], !1, null, null, null);
        t.a = d.exports
    },
    d8b9: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return v
            }
            ));
            var a = i("d4ec")
              , n = i("bee2")
              , s = i("262e")
              , r = i("2caf")
              , o = (i("18a5"),
            i("22a2"))
              , c = i("dfb9")
              , l = e.Text
              , u = e.Graphics
              , h = e.Sprite
              , d = e.BitmapText
              , p = e.Point
              , v = function(t) {
                Object(s.a)(o, t);
                var i = Object(r.a)(o);
                function o(t, n, s, r) {
                    var v, f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    if (Object(a.a)(this, o),
                    (v = i.call(this)).paddingX = 10,
                    v.paddingY = 10,
                    v.paddingX = v.paddingY = s,
                    !o.bgTexture) {
                        var g = new u;
                        g.beginFill(0, .2),
                        g.drawRoundedRect(0, 0, 150, 80, 10),
                        g.endFill(),
                        o.bgTexture = r.generateTexture(g, e.SCALE_MODES.LINEAR, 1)
                    }
                    if (v.bg = new h(o.bgTexture),
                    v.bg.anchor.set(n.x, n.y),
                    v.addChild(v.bg),
                    f) {
                        var b = {
                            font: {
                                name: f,
                                size: 18
                            },
                            align: "center",
                            tint: 16777215
                        };
                        v.text = new d(t,b),
                        v.text.anchor = new p(n.x,n.y)
                    } else
                        v.text = new l(t,o.textBoxStyle),
                        v.text.anchor.set(n.x, n.y);
                    v.text.position.set(c.a.lerp(v.paddingX, -v.paddingX, n.x), c.a.lerp(v.paddingY, -v.paddingY / 2, n.y)),
                    v.addChild(v.text);
                    var y = v.text.width + 2 * v.paddingX
                      , m = v.text.height + 2 * v.paddingY;
                    return v.bg.height = m,
                    v.bg.width = y,
                    v.size = {
                        x: v.width,
                        y: v.height
                    },
                    v
                }
                return Object(n.a)(o, [{
                    key: "setText",
                    value: function(e) {
                        this.text.text = e;
                        var t = this.text.width + 2 * this.paddingX
                          , i = this.text.height + 2 * this.paddingY;
                        this.bg.height = i,
                        this.bg.width = t
                    }
                }]),
                o
            }(o.Container);
            v.textBoxStyle = {
                fontFamily: "'Varela Round', sans-serif, Verdana",
                fontSize: 14,
                fill: 16777215,
                align: "center",
                trim: !0,
                wordWrap: !0,
                wordWrapWidth: 300,
                breakWords: !0
            }
        }
        ).call(this, i("22a2"))
    },
    d8e2: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return b
            }
            ));
            var a = i("b85c")
              , n = i("2909")
              , s = i("d4ec")
              , r = i("bee2")
              , o = i("45eb")
              , c = i("7e84")
              , l = i("262e")
              , u = i("2caf")
              , h = i("8a97")
              , d = i("b4d9")
              , p = i("dfb9")
              , v = i("2475")
              , f = e.Graphics
              , g = e.Point
              , b = function(e) {
                Object(l.a)(i, e);
                var t = Object(u.a)(i);
                function i(e, a, n, r, o, c, l) {
                    var u;
                    return Object(s.a)(this, i),
                    (u = t.call(this, e, a.colors, n, r, o)).type = d.c.Water,
                    u.hasBorder = a.hasBorder,
                    u.topBorder = new f,
                    u.addChild(u.topBorder),
                    u.topBorder.parentLayer = l,
                    u.bottomBorder = new f,
                    u.addChild(u.bottomBorder),
                    u.bottomBorder.parentLayer = c,
                    u
                }
                return Object(r.a)(i, [{
                    key: "redraw",
                    value: function() {
                        Object(o.a)(Object(c.a)(i.prototype), "redraw", this).call(this),
                        this.drawBorders()
                    }
                }, {
                    key: "drawBorders",
                    value: function() {
                        if (this.topBorder.clear(),
                        this.bottomBorder.clear(),
                        this.hasBorder) {
                            var e = Object(n.a)(this.points);
                            p.a.isClockwise(e) || e.reverse();
                            var t, i, a, s = this.topBorder, r = this.bottomBorder;
                            t = i = v.a.makeBrighter(this.colors[0], 1.75),
                            a = 1;
                            for (var o = 0; o < e.length; o++) {
                                var c = e[o]
                                  , l = e[o > 0 ? o - 1 : e.length - 1];
                                c.x > l.x && c.x - l.x > 10 && (s.beginFill(t, a),
                                s.drawPolygon([l.x, l.y - 1.5 + 0, c.x, c.y - 1.5 + 0, c.x, c.y + 0, l.x, l.y + 0]),
                                s.endFill(),
                                r.beginFill(i, 1),
                                r.drawPolygon([l.x, l.y + 0, c.x, c.y + 0, c.x, c.y + 1.5 + 0, l.x, l.y + 1.5 + 0]),
                                r.endFill())
                            }
                        }
                    }
                }, {
                    key: "setHasBorder",
                    value: function(e) {
                        this.hasBorder = e,
                        this.drawn && this.redraw()
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(o.a)(Object(c.a)(i.prototype), "toJsonObject", this).call(this);
                        return e.hasBorder = this.hasBorder,
                        e
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var n, s = e, r = [], o = Object(a.a)(s.points);
                        try {
                            for (o.s(); !(n = o.n()).done; ) {
                                var c = n.value;
                                r.push(new g(c.x,c.y))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return new i(r,{
                            colors: s.colors,
                            hasBorder: s.hasBorder
                        },t.parent,t.pointsLayer,t.viewport,t.aboveAnimalLayer,t.aboveBackgroundLayer)
                    }
                }]),
                i
            }(h.a)
        }
        ).call(this, i("22a2"))
    },
    db22: function(e, t, i) {
        "use strict";
        var a = i("1da1")
          , n = i("b85c")
          , s = i("d4ec")
          , r = i("bee2")
          , o = (i("96cf"),
        i("8fff"))
          , c = (i("99af"),
        i("bc3a"))
          , l = i.n(c)
          , u = i("b4d9").f.API_URL + "/textures"
          , h = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(r.a)(e, [{
                key: "delete",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.delete("".concat(u, "/").concat(t.id));
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "getAll",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i, a, n) {
                        var s, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = "".concat(u, "?page=").concat(t, "&count=").concat(i, "&orderBy=").concat(a, "&direction=").concat(n, "}"),
                                    e.next = 3,
                                    l.a.get(s);
                                case 3:
                                    return r = e.sent.data,
                                    e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i, a, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getById",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.get("".concat(u, "/").concat(t));
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "create",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.post("".concat(u), t);
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "save",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.put("".concat(u, "/").concat(t.id), t);
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }();
        i.d(t, "a", (function() {
            return d
        }
        ));
        var d = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(r.a)(e, null, [{
                key: "clear",
                value: function() {
                    this.texturesById = {}
                }
            }, {
                key: "getAll",
                value: function() {
                    return this.texturesById
                }
            }, {
                key: "addTextures",
                value: function(e) {
                    var t, i = Object(n.a)(e);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var a = t.value;
                            this.texturesById[a.id] = a
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "getTexture",
                value: function() {
                    var t = Object(a.a)(regeneratorRuntime.mark((function t(i) {
                        var a, n;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.texturesById[i]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", this.texturesById[i]);
                                case 2:
                                    return t.next = 4,
                                    h.getById(i);
                                case 4:
                                    if (a = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 7:
                                    return t.next = 9,
                                    o.a.getById(a.pack_id);
                                case 9:
                                    return n = t.sent,
                                    e.addTextures(n.textures),
                                    t.abrupt("return", a);
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAssetPath",
                value: function(e) {
                    return "assets/packs/" + e.pack_id + "/textures/" + e.asset
                }
            }, {
                key: "getTextureSync",
                value: function(e) {
                    return this.texturesById[e] ? this.texturesById[e] : null
                }
            }]),
            e
        }();
        d.texturesById = {}
    },
    dfb9: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return d
            }
            ));
            var a = i("1da1")
              , n = i("53ca")
              , s = i("b85c")
              , r = i("d4ec")
              , o = i("bee2")
              , c = (i("96cf"),
            i("d3b7"),
            i("25f0"),
            i("a15b"),
            i("caad6"),
            i("2532"),
            i("a9e3"),
            i("ac1f"),
            i("1276"),
            e.Graphics)
              , l = e.Sprite
              , u = e.utils.TextureCache
              , h = e.Rectangle
              , d = function() {
                function t() {
                    Object(r.a)(this, t)
                }
                return Object(o.a)(t, null, [{
                    key: "createTexture",
                    value: function(t, i, a, n) {
                        var s = new c;
                        return s.beginFill(t),
                        s.drawRect(0, 0, i, a),
                        s.endFill(),
                        n.generateTexture(s, e.SCALE_MODES.LINEAR, 1)
                    }
                }, {
                    key: "createGradientTexture",
                    value: function(i, a, n) {
                        var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                          , r = document.createElement("canvas");
                        r.width = a,
                        r.height = n;
                        for (var o = r.getContext("2d"), c = o.createLinearGradient(0, 0, 0, n), l = s ? null : 1 / (i.length - 1), u = 0; u < i.length; u++)
                            c.addColorStop(s ? s[u] : u * l, t.hexColorToString(i[u]));
                        o.fillStyle = c,
                        o.fillRect(0, 0, a, n);
                        var h = e.Texture.from(r);
                        return r.remove(),
                        h
                    }
                }, {
                    key: "createTexturedSprite",
                    value: function(t, i, a) {
                        var n = new l(e.Texture.WHITE);
                        return n.tint = t,
                        n.width = i,
                        n.height = a,
                        n
                    }
                }, {
                    key: "hexColorToString",
                    value: function(e) {
                        return "number" == typeof e && (e = "#" + ("00000" + (0 | e).toString(16)).substr(-6)),
                        e
                    }
                }, {
                    key: "stringColorToHex",
                    value: function(e) {
                        return "string" == typeof e && (e = parseInt(e.substr(1), 16)),
                        e
                    }
                }, {
                    key: "getGradientITexture",
                    value: function(i, a, n) {
                        var s, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = i.join("|");
                        (s = u[o]) || (s = t.createGradientTexture(i, a, n, r),
                        e.Texture.addToCache(s, o));
                        var c = {
                            path: o,
                            name: "CUSTOM" + o
                        };
                        return c
                    }
                }, {
                    key: "getGradientTexture",
                    value: function(i, a, n) {
                        var s, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, o = i.join("|");
                        return (s = u[o]) || (s = t.createGradientTexture(i, a, n, r),
                        e.Texture.addToCache(s, o)),
                        s
                    }
                }, {
                    key: "isClockwise",
                    value: function(e) {
                        for (var t = 0, i = 0; i < e.length; i++) {
                            var a = e[i]
                              , n = e[(i + 1) % e.length];
                            t += (n.x - a.x) * (n.y + a.y)
                        }
                        return t < 0
                    }
                }, {
                    key: "angleTo",
                    value: function(e, t, i, a) {
                        return Math.atan2(a - t, i - e)
                    }
                }, {
                    key: "distance",
                    value: function(e, t) {
                        var i = e.x - t.x
                          , a = e.y - t.y;
                        return Math.sqrt(i * i + a * a)
                    }
                }, {
                    key: "addMagnitudeInDirection",
                    value: function(e, t, i) {
                        var a = Math.cos(t) * i
                          , n = Math.sin(t) * i;
                        return {
                            x: e.x + a,
                            y: e.y + n
                        }
                    }
                }, {
                    key: "boundsFromPoints",
                    value: function(e) {
                        var t, i = 9999999, a = -9999999, n = 9999999, r = -9999999, o = Object(s.a)(e);
                        try {
                            for (o.s(); !(t = o.n()).done; ) {
                                var c = t.value;
                                c.y < i && (i = c.y),
                                c.y > a && (a = c.y),
                                c.x < n && (n = c.x),
                                c.x > r && (r = c.x)
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        return new h(n,i,r - n,a - i)
                    }
                }, {
                    key: "limitDecimals",
                    value: function(e, t) {
                        if (("" + e).includes("e")) {
                            var i = ("" + e).split("e")
                              , a = "";
                            +i[1] + t > 0 && (a = "+");
                            var n = Number(+i[0] + "e" + a + (+i[1] + t));
                            return +(Math.round(n) + "e-" + t)
                        }
                        return +(Math.round(Number(e + "e+" + t)) + "e-" + t)
                    }
                }, {
                    key: "deepCopy",
                    value: function(e) {
                        var i;
                        if (null == e || "object" != Object(n.a)(e))
                            return e;
                        if (e instanceof Date)
                            return (i = new Date).setTime(e.getTime()),
                            i;
                        if (e instanceof Array) {
                            i = [];
                            for (var a = 0, s = e.length; a < s; a++)
                                i[a] = t.deepCopy(e[a]);
                            return i
                        }
                        if (e instanceof Object) {
                            for (var r in i = {},
                            e)
                                e.hasOwnProperty(r) && (i[r] = t.deepCopy(e[r]));
                            return i
                        }
                        throw new Error("Unable to copy obj! Its type isn't supported.")
                    }
                }, {
                    key: "delta",
                    value: function(e, t, i) {
                        return Math.max(0, Math.min(1, (i - e) / (t - e)))
                    }
                }, {
                    key: "lerp",
                    value: function(e, t, i) {
                        return e + i * (t - e)
                    }
                }, {
                    key: "getRemoteTexture",
                    value: function() {
                        var i = Object(a.a)(regeneratorRuntime.mark((function i(a, n) {
                            var r, o, c, l, u, h = this, d = arguments;
                            return regeneratorRuntime.wrap((function(i) {
                                for (; ; )
                                    switch (i.prev = i.next) {
                                    case 0:
                                        if (r = !(d.length > 2 && void 0 !== d[2]) || d[2],
                                        !e.utils.TextureCache[a]) {
                                            i.next = 5;
                                            break
                                        }
                                        return i.abrupt("return", e.utils.TextureCache[a]);
                                    case 5:
                                        if (!e.Loader.shared.resources[a]) {
                                            i.next = 10;
                                            break
                                        }
                                        if (!e.Loader.shared.resources[a].isComplete) {
                                            i.next = 8;
                                            break
                                        }
                                        return i.abrupt("return", e.utils.TextureCache[a]);
                                    case 8:
                                        i.next = 15;
                                        break;
                                    case 10:
                                        o = function() {
                                            var e, i = Object(s.a)(t.textureLoadingCallbacks[a]);
                                            try {
                                                for (i.s(); !(e = i.n()).done; ) {
                                                    var n = e.value;
                                                    try {
                                                        n()
                                                    } catch (e) {
                                                        console.error(e)
                                                    }
                                                }
                                            } catch (e) {
                                                i.e(e)
                                            } finally {
                                                i.f()
                                            }
                                        }
                                        ,
                                        c = function() {
                                            if (e.Loader.shared.resources[a] && e.Loader.shared.resources[a].isComplete)
                                                o();
                                            else {
                                                e.Loader.shared.once("complete", function() {
                                                    t.textureLoadingCallbacks[a] && (o(),
                                                    delete t.textureLoadingCallbacks[a])
                                                }
                                                .bind(h));
                                                try {
                                                    e.Loader.shared.add(a, n)
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                                r && (t._loadTimeout && clearTimeout(t._loadTimeout),
                                                t._loadTimeout = setTimeout((function() {
                                                    e.Loader.shared.load()
                                                }
                                                ), 100))
                                            }
                                        }
                                        ,
                                        u = function() {
                                            e.Loader.shared.loading || (clearInterval(l),
                                            c())
                                        }
                                        ,
                                        l = setInterval(u, 250),
                                        u();
                                    case 15:
                                        return t.textureLoadingCallbacks[a] || (t.textureLoadingCallbacks[a] = []),
                                        i.abrupt("return", new Promise(function(i, n) {
                                            t.textureLoadingCallbacks[a].push((function() {
                                                i(e.utils.TextureCache[a])
                                            }
                                            ))
                                        }
                                        .bind(this)));
                                    case 17:
                                    case "end":
                                        return i.stop()
                                    }
                            }
                            ), i, this)
                        }
                        )));
                        return function(e, t) {
                            return i.apply(this, arguments)
                        }
                    }()
                }]),
                t
            }();
            d.textureLoadingCallbacks = {}
        }
        ).call(this, i("22a2"))
    },
    e113: function(e, t, i) {
        "use strict";
        var a, n;
        i.d(t, "b", (function() {
            return a
        }
        )),
        i.d(t, "a", (function() {
            return n
        }
        )),
        function(e) {
            e[e.Enter = 1] = "Enter",
            e[e.Stay = 2] = "Stay",
            e[e.Quit = 3] = "Quit"
        }(a || (a = {})),
        function(e) {
            e[e.Teleport = 1] = "Teleport"
        }(n || (n = {}))
    },
    f2cd: function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return v
        }
        ));
        var a = i("1da1")
          , n = i("d4ec")
          , s = i("bee2")
          , r = i("45eb")
          , o = i("7e84")
          , c = i("262e")
          , l = i("2caf")
          , u = (i("96cf"),
        i("cdd1"))
          , h = i("dfb9")
          , d = i("b4d9")
          , p = i("7523")
          , v = function(e) {
            Object(c.a)(i, e);
            var t = Object(l.a)(i);
            function i(e, a, s, r) {
                var o;
                return Object(n.a)(this, i),
                (o = t.call(this, e, a, null, r)).setSettings(s),
                o.type = d.c.Animal,
                o
            }
            return Object(s.a)(i, [{
                key: "settings",
                get: function() {
                    return this._settings
                }
            }, {
                key: "setSettings",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i, a, n, s, r, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this._settings = t,
                                    p.a.get(t.fishLevel),
                                    i = p.a.getPicturePath(t.fishLevel),
                                    e.next = 5,
                                    h.a.getRemoteTexture(i, d.f.deeeepPath + "/" + i);
                                case 5:
                                    a = e.sent,
                                    this.texture = a,
                                    r = {
                                        x: (s = {
                                            x: 48,
                                            y: 68
                                        }).x / (n = {
                                            x: 180,
                                            y: 255
                                        }).x,
                                        y: s.y / n.y
                                    },
                                    o = p.a.get(t.fishLevel).sizeMultiplier,
                                    "clientSideSizeScale"in p.a.get(t.fishLevel) && (o *= p.a.get(t.fishLevel).clientSideSizeScale),
                                    this.setSize(a.width * r.x * o / 10, a.height * r.y * o / 10);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "toJsonObject",
                value: function() {
                    var e = Object(r.a)(Object(o.a)(i.prototype), "toJsonObject", this).call(this);
                    return e.fLevel = this.settings.fishLevel,
                    e
                }
            }], [{
                key: "fromJsonObject",
                value: function(e, t) {
                    var a = e
                      , n = p.a.get(a.fLevel)
                      , s = new i(t.parent,t.viewport,n,t.pointsLayer);
                    return s.position.set(a.x, a.y),
                    a.rotation && s.setRotation(a.rotation),
                    s
                }
            }]),
            i
        }(u.a)
    },
    f8a7: function(e, t, i) {
        "use strict";
        (function(e) {
            i.d(t, "a", (function() {
                return y
            }
            ));
            var a = i("b85c")
              , n = i("2909")
              , s = i("5530")
              , r = i("d4ec")
              , o = i("bee2")
              , c = i("45eb")
              , l = i("7e84")
              , u = i("262e")
              , h = i("2caf")
              , d = i("9bf5")
              , p = i("db22")
              , v = e.Point
              , f = e.Graphics
              , g = e.Matrix
              , b = e.utils.TextureCache
              , y = (i("f53e"),
            function(e) {
                Object(u.a)(i, e);
                var t = Object(h.a)(i);
                function i(e, a, n, s, o, c) {
                    var l;
                    Object(r.a)(this, i),
                    (l = t.call(this, e, s, o, c)).shape = null,
                    l.textureTranslation = new v,
                    l.texture = a;
                    var u = l.shape = new f;
                    return l.interactive = !0,
                    "terrains" == s.layerId && (l._foodSpawnSettings = {
                        foodIds: [],
                        count: 0,
                        firstSpawnMs: 0,
                        reSpawnMs: 1e3
                    }),
                    l.settings = n || {
                        collidable: !0
                    },
                    l.addChild(u),
                    l
                }
                return Object(o.a)(i, [{
                    key: "settings",
                    get: function() {
                        return this._settings
                    },
                    set: function(e) {
                        this._settings = Object(s.a)({}, e)
                    }
                }, {
                    key: "foodSpawnSettings",
                    get: function() {
                        return this._foodSpawnSettings
                    },
                    set: function(e) {
                        this._foodSpawnSettings = Object(s.a)({}, e),
                        this._foodSpawnSettings.foodIds = Object(n.a)(e.foodIds)
                    }
                }, {
                    key: "redraw",
                    value: function() {
                        this.shape.clear(),
                        this.shape.beginTextureFill({
                            texture: b[p.a.getAssetPath(this.texture)],
                            color: 16777215,
                            alpha: 1,
                            matrix: new g(.1,0,0,.1,this.textureTranslation.x,this.textureTranslation.y)
                        }),
                        this.shape.drawPolygon(this.points),
                        this.shape.endFill(),
                        Object(c.a)(Object(l.a)(i.prototype), "redraw", this).call(this)
                    }
                }, {
                    key: "setTexture",
                    value: function(e) {
                        this.texture = e,
                        this.drawn && this.redraw()
                    }
                }, {
                    key: "toJsonObject",
                    value: function() {
                        var e = Object(c.a)(Object(l.a)(i.prototype), "toJsonObject", this).call(this);
                        return this.texture && (e.texture = this.texture.id),
                        this._foodSpawnSettings && (e.foodSpawnSettings = this._foodSpawnSettings),
                        e.settings = this.settings,
                        e
                    }
                }], [{
                    key: "fromJsonObject",
                    value: function(e, t) {
                        var n, s = e, r = [], o = Object(a.a)(s.points);
                        try {
                            for (o.s(); !(n = o.n()).done; ) {
                                var c = n.value;
                                r.push(new v(c.x,c.y))
                            }
                        } catch (e) {
                            o.e(e)
                        } finally {
                            o.f()
                        }
                        var l = new i(r,this.getTextureFromJson(s),s.settings,t.parent,t.pointsLayer,t.viewport);
                        return s.foodSpawnSettings && (l.foodSpawnSettings = s.foodSpawnSettings),
                        l
                    }
                }, {
                    key: "getTextureFromJson",
                    value: function(e) {
                        return isNaN(e.texture) ? p.a.getTextureSync(i._oldTextureMap[e.texture]) : p.a.getTextureSync(e.texture)
                    }
                }]),
                i
            }(d.a));
            y._oldTextureMap = {
                "assets/terrains/terrain.png": 1,
                "assets/terrains/terrain_back.png": 2,
                "assets/terrains/coldterrain.png": 3,
                "assets/terrains/coldterrain_back.png": 4,
                "assets/terrains/deepterrain.png": 5,
                "assets/terrains/beach.png": 6,
                "assets/terrains/swamp/island.png": 8,
                "assets/terrains/glacier.png": 9
            }
        }
        ).call(this, i("22a2"))
    },
    fded: function(e, t, i) {
        "use strict";
        var a = i("1da1")
          , n = i("b85c")
          , s = i("d4ec")
          , r = i("bee2")
          , o = (i("96cf"),
        i("8fff"))
          , c = (i("99af"),
        i("bc3a"))
          , l = i.n(c)
          , u = i("b4d9").f.API_URL + "/hideSpaces"
          , h = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(r.a)(e, [{
                key: "delete",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.delete("".concat(u, "/").concat(t.id));
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }], [{
                key: "getAll",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t, i, a, n) {
                        var s, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return s = "".concat(u, "?page=").concat(t, "&count=").concat(i, "&orderBy=").concat(a, "&direction=").concat(n, "}"),
                                    e.next = 3,
                                    l.a.get(s);
                                case 3:
                                    return r = e.sent.data,
                                    e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, i, a, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getById",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.get("".concat(u, "/").concat(t));
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "create",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.post("".concat(u), t);
                                case 2:
                                    return i = e.sent.data,
                                    e.abrupt("return", i);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "save",
                value: function() {
                    var e = Object(a.a)(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    l.a.put("".concat(u, "/").concat(t.id), t);
                                case 2:
                                    return t = e.sent.data,
                                    e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }();
        i.d(t, "a", (function() {
            return d
        }
        ));
        var d = function() {
            function e() {
                Object(s.a)(this, e)
            }
            return Object(r.a)(e, null, [{
                key: "clear",
                value: function() {
                    this.hideSpacesById = {}
                }
            }, {
                key: "addHideSpaces",
                value: function(e) {
                    var t, i = Object(n.a)(e);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var a = t.value;
                            this.hideSpacesById[a.id] = a
                        }
                    } catch (e) {
                        i.e(e)
                    } finally {
                        i.f()
                    }
                }
            }, {
                key: "getHideSpace",
                value: function() {
                    var t = Object(a.a)(regeneratorRuntime.mark((function t(i) {
                        var a, n;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.hideSpacesById[i]) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", this.hideSpacesById[i]);
                                case 2:
                                    return t.next = 4,
                                    h.getById(i);
                                case 4:
                                    if (a = t.sent) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return", null);
                                case 7:
                                    return t.next = 9,
                                    o.a.getById(a.pack_id);
                                case 9:
                                    return n = t.sent,
                                    e.addHideSpaces(n.hideSpaces),
                                    t.abrupt("return", a);
                                case 12:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "getAssetPath",
                value: function(e) {
                    return "assets/packs/" + e.pack_id + "/hidespaces/" + e.asset
                }
            }, {
                key: "getHideSpaceSync",
                value: function(e) {
                    return this.hideSpacesById[e] ? this.hideSpacesById[e] : null
                }
            }]),
            e
        }();
        d.hideSpacesById = {}
    }
});
