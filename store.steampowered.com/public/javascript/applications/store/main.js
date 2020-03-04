/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
/* Third-party software licenses can be found at licenses.txt */
!(function(c) {
  function e(e) {
    for (
      var t, n, r = e[0], o = e[1], i = e[2], a = 0, s = [];
      a < r.length;
      a++
    )
      (n = r[a]), p[n] && s.push(p[n][0]), (p[n] = 0);
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (c[t] = o[t]);
    for (h && h(e); s.length; ) s.shift()();
    return u.push.apply(u, i || []), l();
  }
  function l() {
    for (var e, t = 0; t < u.length; t++) {
      for (var n = u[t], r = !0, o = 1; o < n.length; o++) {
        var i = n[o];
        0 !== p[i] && (r = !1);
      }
      r && (u.splice(t--, 1), (e = m((m.s = n[0]))));
    }
    return e;
  }
  var n = {},
    s = { 6: 0 },
    p = { 6: 0 },
    u = [];
  function m(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return c[e].call(t.exports, t, t.exports, m), (t.l = !0), t.exports;
  }
  (m.e = function(u) {
    var e = [];
    s[u]
      ? e.push(s[u])
      : 0 !== s[u] &&
        { 3: 1, 4: 1, 5: 1, 63: 1 }[u] &&
        e.push(
          (s[u] = new Promise(function(e, r) {
            for (
              var t =
                  "..\\..\\..\\css\\applications\\store\\" +
                  ({
                    1: "main_english-json",
                    2: "shared_english-json",
                    3: "store_common",
                    4: "eventcomponents",
                    5: "interactiverecommender",
                    7: "main_brazilian-json",
                    8: "main_bulgarian-json",
                    9: "main_czech-json",
                    10: "main_danish-json",
                    11: "main_dutch-json",
                    12: "main_finnish-json",
                    13: "main_french-json",
                    14: "main_german-json",
                    15: "main_greek-json",
                    16: "main_hungarian-json",
                    17: "main_italian-json",
                    18: "main_japanese-json",
                    19: "main_koreana-json",
                    20: "main_latam-json",
                    21: "main_norwegian-json",
                    22: "main_polish-json",
                    23: "main_portuguese-json",
                    24: "main_romanian-json",
                    25: "main_russian-json",
                    26: "main_schinese-json",
                    27: "main_spanish-json",
                    28: "main_swedish-json",
                    29: "main_tchinese-json",
                    30: "main_thai-json",
                    31: "main_turkish-json",
                    32: "main_ukrainian-json",
                    33: "main_vietnamese-json",
                    34: "shared_arabic-json",
                    35: "shared_brazilian-json",
                    36: "shared_bulgarian-json",
                    37: "shared_czech-json",
                    38: "shared_danish-json",
                    39: "shared_dutch-json",
                    40: "shared_finnish-json",
                    41: "shared_french-json",
                    42: "shared_german-json",
                    43: "shared_greek-json",
                    44: "shared_hungarian-json",
                    45: "shared_italian-json",
                    46: "shared_japanese-json",
                    47: "shared_koreana-json",
                    48: "shared_latam-json",
                    49: "shared_norwegian-json",
                    50: "shared_polish-json",
                    51: "shared_portuguese-json",
                    52: "shared_romanian-json",
                    53: "shared_russian-json",
                    54: "shared_schinese-json",
                    55: "shared_spanish-json",
                    56: "shared_swedish-json",
                    57: "shared_tchinese-json",
                    58: "shared_thai-json",
                    59: "shared_turkish-json",
                    60: "shared_ukrainian-json",
                    61: "shared_vietnamese-json",
                    62: "topsellers",
                    63: "vendors~eventcomponents"
                  }[u] || u) +
                  ".css?chunkhash=" +
                  {
                    1: "d732c82adaf4ded20c36",
                    2: "4c6510be544195547888",
                    3: "04e88aa3564c495de990",
                    4: "3ce976284f3d9aa0457a",
                    5: "c7a82234ce9963fbcb23",
                    7: "4c144c52a7ce686ea3a0",
                    8: "e66b949aa854b2c4b2ab",
                    9: "d6bd2764882fc3ec13e4",
                    10: "f592d59c2b2474e0f447",
                    11: "459aa166364b7433a65d",
                    12: "c6f62b8417fe67579270",
                    13: "0c2b6ee3df51085df892",
                    14: "53eec1de47f14a799231",
                    15: "49a7f769e7cfd100da08",
                    16: "f49b7c31e47533bf7810",
                    17: "c9c2c25c9fe13ad8a913",
                    18: "3e70fcf707e1a3429288",
                    19: "926a42db409082d5f6b1",
                    20: "55a18df091690f7ae451",
                    21: "30d3086e0a1b6d904ecd",
                    22: "dd8bf41f5c77a4e93d07",
                    23: "f355c38172cc4cc511a4",
                    24: "9ee0e77ac10ad2919dee",
                    25: "be5d932bff986392f11c",
                    26: "d1a58fb5b6153b550241",
                    27: "29a04beb6779cf88b017",
                    28: "ead3fb45d48f81d804cf",
                    29: "e3f9a7c31432de3a821e",
                    30: "2367c2c8462feaa2fd8d",
                    31: "048c65a6e8b13529adc6",
                    32: "4817156e1ffe437d3446",
                    33: "84301d33ac9b3555e428",
                    34: "f205e5bee77220ba603e",
                    35: "a1410d137123525fd584",
                    36: "f5da053bdd90c5dab311",
                    37: "61e503bb70e8c579ee81",
                    38: "80a7abecf651ab269ddd",
                    39: "aa35f836a530be0f08cc",
                    40: "b426cd7cebd22872b46b",
                    41: "eb1d32e6bdf39086cab7",
                    42: "a6f84594b75e2b02902f",
                    43: "7b239654b06ce3420357",
                    44: "75aba95e03c986d27491",
                    45: "6a4316b20c179fa88faa",
                    46: "708010cfb06f91de7855",
                    47: "07ea62f34e561d65c0f9",
                    48: "ce3625a6e5f8444ed892",
                    49: "19565e96bc710044bc78",
                    50: "981134d983fd02eae8d5",
                    51: "111606964e164a5404b9",
                    52: "07cce8760ff4c66c964b",
                    53: "7b77c58051cc1d6de128",
                    54: "439ea49959a518c1e87d",
                    55: "641bbfa2637fb228a33d",
                    56: "60896037483b7b9b7f6d",
                    57: "c3e10a1c1b1cfa26648e",
                    58: "bda8d4c2fe4eafc7cd23",
                    59: "fd8e7faffc8479f38942",
                    60: "04e6a652d095fc30a33e",
                    61: "a8ef140f3b33ee47e383",
                    62: "78e148b93411a5d550cb",
                    63: "5cd6767309be4ddba16e"
                  }[u],
                o = m.p + t,
                n = document.getElementsByTagName("link"),
                i = 0;
              i < n.length;
              i++
            ) {
              var a =
                (c = n[i]).getAttribute("data-href") || c.getAttribute("href");
              if ("stylesheet" === c.rel && (a === t || a === o)) return e();
            }
            var s = document.getElementsByTagName("style");
            for (i = 0; i < s.length; i++) {
              var c;
              if ((a = (c = s[i]).getAttribute("data-href")) === t || a === o)
                return e();
            }
            var l = document.createElement("link");
            (l.rel = "stylesheet"),
              (l.type = "text/css"),
              (l.onload = e),
              (l.onerror = function(e) {
                var t = (e && e.target && e.target.src) || o,
                  n = new Error(
                    "Loading CSS chunk " + u + " failed.\n(" + t + ")"
                  );
                (n.request = t), r(n);
              }),
              (l.href = o),
              document.getElementsByTagName("head")[0].appendChild(l);
          }).then(function() {
            s[u] = 0;
          }))
        );
    var n = p[u];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var t = new Promise(function(e, t) {
          n = p[u] = [e, t];
        });
        e.push((n[2] = t));
        var r,
          o = document.getElementsByTagName("head")[0],
          i = document.createElement("script");
        (i.charset = "utf-8"),
          (i.timeout = 120),
          m.nc && i.setAttribute("nonce", m.nc),
          (i.src = (function(e) {
            return (
              m.p +
              "" +
              ({
                1: "main_english-json",
                2: "shared_english-json",
                3: "store_common",
                4: "eventcomponents",
                5: "interactiverecommender",
                7: "main_brazilian-json",
                8: "main_bulgarian-json",
                9: "main_czech-json",
                10: "main_danish-json",
                11: "main_dutch-json",
                12: "main_finnish-json",
                13: "main_french-json",
                14: "main_german-json",
                15: "main_greek-json",
                16: "main_hungarian-json",
                17: "main_italian-json",
                18: "main_japanese-json",
                19: "main_koreana-json",
                20: "main_latam-json",
                21: "main_norwegian-json",
                22: "main_polish-json",
                23: "main_portuguese-json",
                24: "main_romanian-json",
                25: "main_russian-json",
                26: "main_schinese-json",
                27: "main_spanish-json",
                28: "main_swedish-json",
                29: "main_tchinese-json",
                30: "main_thai-json",
                31: "main_turkish-json",
                32: "main_ukrainian-json",
                33: "main_vietnamese-json",
                34: "shared_arabic-json",
                35: "shared_brazilian-json",
                36: "shared_bulgarian-json",
                37: "shared_czech-json",
                38: "shared_danish-json",
                39: "shared_dutch-json",
                40: "shared_finnish-json",
                41: "shared_french-json",
                42: "shared_german-json",
                43: "shared_greek-json",
                44: "shared_hungarian-json",
                45: "shared_italian-json",
                46: "shared_japanese-json",
                47: "shared_koreana-json",
                48: "shared_latam-json",
                49: "shared_norwegian-json",
                50: "shared_polish-json",
                51: "shared_portuguese-json",
                52: "shared_romanian-json",
                53: "shared_russian-json",
                54: "shared_schinese-json",
                55: "shared_spanish-json",
                56: "shared_swedish-json",
                57: "shared_tchinese-json",
                58: "shared_thai-json",
                59: "shared_turkish-json",
                60: "shared_ukrainian-json",
                61: "shared_vietnamese-json",
                62: "topsellers",
                63: "vendors~eventcomponents"
              }[e] || e) +
              ".js?chunkhash=" +
              {
                1: "d732c82adaf4ded20c36",
                2: "4c6510be544195547888",
                3: "04e88aa3564c495de990",
                4: "3ce976284f3d9aa0457a",
                5: "c7a82234ce9963fbcb23",
                7: "4c144c52a7ce686ea3a0",
                8: "e66b949aa854b2c4b2ab",
                9: "d6bd2764882fc3ec13e4",
                10: "f592d59c2b2474e0f447",
                11: "459aa166364b7433a65d",
                12: "c6f62b8417fe67579270",
                13: "0c2b6ee3df51085df892",
                14: "53eec1de47f14a799231",
                15: "49a7f769e7cfd100da08",
                16: "f49b7c31e47533bf7810",
                17: "c9c2c25c9fe13ad8a913",
                18: "3e70fcf707e1a3429288",
                19: "926a42db409082d5f6b1",
                20: "55a18df091690f7ae451",
                21: "30d3086e0a1b6d904ecd",
                22: "dd8bf41f5c77a4e93d07",
                23: "f355c38172cc4cc511a4",
                24: "9ee0e77ac10ad2919dee",
                25: "be5d932bff986392f11c",
                26: "d1a58fb5b6153b550241",
                27: "29a04beb6779cf88b017",
                28: "ead3fb45d48f81d804cf",
                29: "e3f9a7c31432de3a821e",
                30: "2367c2c8462feaa2fd8d",
                31: "048c65a6e8b13529adc6",
                32: "4817156e1ffe437d3446",
                33: "84301d33ac9b3555e428",
                34: "f205e5bee77220ba603e",
                35: "a1410d137123525fd584",
                36: "f5da053bdd90c5dab311",
                37: "61e503bb70e8c579ee81",
                38: "80a7abecf651ab269ddd",
                39: "aa35f836a530be0f08cc",
                40: "b426cd7cebd22872b46b",
                41: "eb1d32e6bdf39086cab7",
                42: "a6f84594b75e2b02902f",
                43: "7b239654b06ce3420357",
                44: "75aba95e03c986d27491",
                45: "6a4316b20c179fa88faa",
                46: "708010cfb06f91de7855",
                47: "07ea62f34e561d65c0f9",
                48: "ce3625a6e5f8444ed892",
                49: "19565e96bc710044bc78",
                50: "981134d983fd02eae8d5",
                51: "111606964e164a5404b9",
                52: "07cce8760ff4c66c964b",
                53: "7b77c58051cc1d6de128",
                54: "439ea49959a518c1e87d",
                55: "641bbfa2637fb228a33d",
                56: "60896037483b7b9b7f6d",
                57: "c3e10a1c1b1cfa26648e",
                58: "bda8d4c2fe4eafc7cd23",
                59: "fd8e7faffc8479f38942",
                60: "04e6a652d095fc30a33e",
                61: "a8ef140f3b33ee47e383",
                62: "78e148b93411a5d550cb",
                63: "5cd6767309be4ddba16e"
              }[e]
            );
          })(u)),
          (r = function(e) {
            (i.onerror = i.onload = null), clearTimeout(a);
            var t = p[u];
            if (0 !== t) {
              if (t) {
                var n = e && ("load" === e.type ? "missing" : e.type),
                  r = e && e.target && e.target.src,
                  o = new Error(
                    "Loading chunk " + u + " failed.\n(" + n + ": " + r + ")"
                  );
                (o.type = n), (o.request = r), t[1](o);
              }
              p[u] = void 0;
            }
          });
        var a = setTimeout(function() {
          r({ type: "timeout", target: i });
        }, 12e4);
        (i.onerror = i.onload = r), o.appendChild(i);
      }
    return Promise.all(e);
  }),
    (m.m = c),
    (m.c = n),
    (m.d = function(e, t, n) {
      m.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (m.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (m.t = function(t, e) {
      if ((1 & e && (t = m(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (m.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          m.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (m.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return m.d(t, "a", t), t;
    }),
    (m.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (m.p = ""),
    (m.oe = function(e) {
      throw (console.error(e), e);
    });
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    r = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var o = 0; o < t.length; o++) e(t[o]);
  var h = r;
  u.push(["gfbn", 0]), l();
})({
  "+jbA": function(e, t, n) {
    e.exports = {
      ContextMenuMouseOverlay: "contextmenu_ContextMenuMouseOverlay_3Knd7",
      ContextMenuFocusContainer: "contextmenu_ContextMenuFocusContainer_1S6CC",
      contextMenu: "contextmenu_contextMenu_PP7LM",
      ContextMenuPopup: "contextmenu_ContextMenuPopup_14wqd",
      contextMenuContents: "contextmenu_contextMenuContents_2EstN",
      contextMenuItem: "contextmenu_contextMenuItem_1n7Wl",
      active: "contextmenu_active_18z-3",
      MenuSectionHeader: "contextmenu_MenuSectionHeader_2Bb4J",
      StrongerSeparation: "contextmenu_StrongerSeparation_1BNck",
      UpperCase: "contextmenu_UpperCase_uz1Xm",
      SubMenu: "contextmenu_SubMenu_2RlEO",
      Label: "contextmenu_Label_2qdHl",
      Arrow: "contextmenu_Arrow_114nF",
      PopoutSubMenu: "contextmenu_PopoutSubMenu_Baq37",
      PopoutSubMenuItems: "contextmenu_PopoutSubMenuItems_2fZ_e"
    };
  },
  "1fPh": function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return i;
      });
    var r = n("lkRc"),
      o = {
        Home: function() {
          return "/";
        },
        AppStorePage: function() {
          return "/app/:appid(\\d+)/:gamename?";
        },
        PackageStorePage: function() {
          return "/sub/:subid(\\d+)/:packagename?";
        },
        BundleStorePage: function() {
          return "/bundle/:bundleid(\\d+)/:bundlename?";
        },
        SaleLandingPage: function() {
          return "/sale/:salePageName";
        },
        RemotePlay: function() {
          return "/remoteplay_hub/";
        },
        RemotePlayTogether: function() {
          return "/together/";
        },
        CuratorPage: function() {
          return "/curator/:curatorPageName/(list)?/:listid?";
        },
        CreatorPage: function() {
          return "/(publisher|pub|dev|developer|franchise)/:creatorPageName/(list)?/:listid?";
        },
        CreatorSaleLandingPage: function() {
          return "/(curator|publisher|pub|dev|developer|franchise)/:creatorPageName/sale/:salePageName?";
        },
        EventCalendar: function() {
          return "/events";
        },
        NewsHub: function() {
          return "/newshub";
        },
        EventView: function(e, t, n) {
          return "/events/app/" + e + "/view/" + t + "/" + n;
        },
        EventModeration: function() {
          return "/events_admin/(moderate)?/:appid(\\d+)?/";
        },
        EventBackfill: function() {
          return "/events_admin/backfill/";
        },
        InteractiveRecommender: function() {
          return "/recommender/:steamid(\\d+)?/";
        },
        TopSellers: function() {
          return "/topsellers/:date?";
        },
        DiagData: function() {
          return "/:anything*/diagdata";
        }
      };
    function i() {
      var e = document.createElement("a");
      e.href = r.c.STORE_BASE_URL;
      var t = e.pathname;
      return t.endsWith("/") || (t += "/"), t;
    }
  },
  "2i24": function(e, t, n) {
    e.exports = {
      LoadingWrapper: "throbber_LoadingWrapper_2wAKy",
      Static: "throbber_Static_1Qfwp",
      none: "throbber_none_1F0lz",
      bottomCircle: "throbber_bottomCircle_2qjZm",
      noString: "throbber_noString_1Sy0p",
      Throbber: "throbber_Throbber_lYUEj",
      throbber_small: "throbber_throbber_small_2zbyh",
      throbber_medium: "throbber_throbber_medium_2CphU",
      throbber_large: "throbber_throbber_large_1x18v",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_3IYPz",
      ThrobberText: "throbber_ThrobberText_21nVi",
      blur: "throbber_blur_1ctjA",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_1O-cW",
      roundOuterOutline: "throbber_roundOuterOutline_1Vv--",
      roundOuter: "throbber_roundOuter_2K0Lz",
      roundFill: "throbber_roundFill_3sQFk",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_ofdi9",
      topCircle: "throbber_topCircle_1LZff",
      circlePulse: "throbber_circlePulse_1XN6Z",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_1jALk",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1KvOg",
      roundThrobber15: "throbber_roundThrobber15_2LGHp",
      roundThrobber14: "throbber_roundThrobber14_2FGCn",
      roundThrobber13: "throbber_roundThrobber13_1X-5j",
      roundThrobber12: "throbber_roundThrobber12_1pj1Q",
      roundThrobber11: "throbber_roundThrobber11_xFmZa",
      roundThrobber10: "throbber_roundThrobber10_3MGYo",
      roundThrobber09: "throbber_roundThrobber09_ktVJ4",
      roundThrobber08: "throbber_roundThrobber08_3s_7m",
      roundThrobber07: "throbber_roundThrobber07_11MVp",
      roundThrobber06: "throbber_roundThrobber06_2cl-m",
      roundThrobber05: "throbber_roundThrobber05_3-JE0",
      roundThrobber04: "throbber_roundThrobber04_1xNIK",
      roundThrobber03: "throbber_roundThrobber03_1S17y",
      roundThrobber02: "throbber_roundThrobber02_1-oUJ",
      roundThrobber01: "throbber_roundThrobber01_2tXge",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1fs4R",
      throbber_xlarge: "throbber_throbber_xlarge_1gYeZ",
      throbber_xxlarge: "throbber_throbber_xxlarge_3j-p4"
    };
  },
  "6TF7": function(e, t, n) {
    e.exports = { App: "app_App_2uHYt" };
  },
  "6Y59": function(e, t, n) {
    "use strict";
    n.d(t, "x", function() {
      return s;
    }),
      n.d(t, "h", function() {
        return c;
      }),
      n.d(t, "i", function() {
        return l;
      }),
      n.d(t, "A", function() {
        return u;
      }),
      n.d(t, "G", function() {
        return p;
      }),
      n.d(t, "E", function() {
        return m;
      }),
      n.d(t, "q", function() {
        return h;
      }),
      n.d(t, "F", function() {
        return d;
      }),
      n.d(t, "t", function() {
        return f;
      }),
      n.d(t, "s", function() {
        return _;
      }),
      n.d(t, "c", function() {
        return b;
      }),
      n.d(t, "f", function() {
        return v;
      }),
      n.d(t, "m", function() {
        return g;
      }),
      n.d(t, "B", function() {
        return E;
      }),
      n.d(t, "g", function() {
        return y;
      }),
      n.d(t, "n", function() {
        return w;
      }),
      n.d(t, "p", function() {
        return S;
      }),
      n.d(t, "u", function() {
        return k;
      }),
      n.d(t, "k", function() {
        return D;
      }),
      n.d(t, "o", function() {
        return C;
      }),
      n.d(t, "z", function() {
        return O;
      }),
      n.d(t, "D", function() {
        return L;
      }),
      n.d(t, "y", function() {
        return x;
      }),
      n.d(t, "v", function() {
        return M;
      }),
      n.d(t, "w", function() {
        return I;
      }),
      n.d(t, "l", function() {
        return T;
      }),
      n.d(t, "j", function() {
        return R;
      }),
      n.d(t, "b", function() {
        return j;
      }),
      n.d(t, "d", function() {
        return N;
      }),
      n.d(t, "r", function() {
        return P;
      }),
      n.d(t, "a", function() {
        return A;
      }),
      n.d(t, "e", function() {
        return B;
      }),
      n.d(t, "C", function() {
        return F;
      });
    n("mrSG");
    var r = n("q1tI"),
      o = n("2i24"),
      i = n.n(o),
      a = n("exH9");
    n("YyVH"), n("Z7Ow");
    function s() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Settings",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "-305.5 396.5 256 256",
          enableBackground: "new -305.5 396.5 256 256"
        },
        r.createElement("path", {
          d:
            "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z"
        })
      );
    }
    function c() {
      return r.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
          "data-name": "Layer 1",
          viewBox: "0 0 128 128",
          x: "0px",
          y: "0px"
        },
        r.createElement("polygon", {
          points:
            "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49"
        })
      );
    }
    function l() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Emoticon",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "107.5"
        }),
        r.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "94.5",
          y1: "97.5",
          x2: "94.5",
          y2: "109.5"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "160.5",
          y1: "97.5",
          x2: "160.5",
          y2: "109.5"
        })
      );
    }
    function u() {
      return r.createElement(
        "svg",
        {
          fill: "#FFFFFF",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Submit",
          version: "1.1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 100 100"
        },
        r.createElement(
          "g",
          { transform: "translate(0,-952.36218)" },
          r.createElement("path", {
            d:
              "m 92.115057,974.14842 a 2.0001999,2.0001999 0 0 0 -1.96764,2.02965 l 0.0376,31.19553 -77.475501,0 16.161909,-15.73013 a 2.0002746,2.0002746 0 1 0 -2.790355,-2.8667 L 6.3913393,1007.9405 a 2.0001999,2.0001999 0 0 0 -0.0011,2.8646 l 19.6896957,19.2036 a 2.0002671,2.0002671 0 1 0 2.792551,-2.8646 l -16.170767,-15.771 79.153048,0 a 2.0001999,2.0001999 0 0 0 1.72959,-0.5437 2.0001999,2.0001999 0 0 0 0.0598,-0.058 2.0001999,2.0001999 0 0 0 0.54259,-1.7218 l -0.0388,-32.87638 a 2.0001999,2.0001999 0 0 0 -2.03297,-2.02522 z",
            fill: "#FFFFFF",
            fillOpacity: "1",
            fillRule: "evenodd",
            stroke: "none",
            visibility: "visible",
            display: "inline",
            overflow: "visible"
          })
        )
      );
    }
    function p() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_X_Line",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "212",
          y1: "212",
          x2: "44",
          y2: "44"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "44",
          y1: "212",
          x2: "212",
          y2: "44"
        })
      );
    }
    function m(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_VoiceRoom",
          x: "0px",
          y: "0px",
          width: "64px",
          height: "64px",
          viewBox: "0 0 64 64",
          enableBackground: "new 0 0 64 64"
        },
        !e.exitOnly &&
          r.createElement(
            "g",
            null,
            r.createElement("path", {
              className: "Bubble",
              fill: "none",
              strokeMiterlimit: "1",
              strokeWidth: "2.5px",
              d:
                "M60.1,32.3c0,15.1-12.3,27.3-27.4,27.3 c-5,0-9.7-1.4-13.8-3.7c-1.8-1.1-15,5.4-13.8,3.4c1.7-2.9,5.9-10.3,4.7-12C7,43,5.3,37.8,5.3,32.3C5.3,17.2,17.6,5,32.7,5 C47.8,5,60.1,17.2,60.1,32.3z"
            })
          ),
        !e.exitOnly &&
          r.createElement(
            "g",
            null,
            r.createElement("path", {
              className: "AudioLines",
              opacity: "0",
              strokeWidth: "1px",
              d:
                "M37.2,51.1c-0.5,0-1-0.1-1.3-0.4c-0.7-0.5-0.7-1.3,0-1.8c6.3-4.4,9.8-10.2,9.8-16.4c0-6.2-3.5-12-9.8-16.4 c-0.7-0.5-0.7-1.3,0-1.8s1.9-0.5,2.6,0c7.1,4.9,10.9,11.4,10.9,18.3c0,6.9-3.9,13.4-10.9,18.3C38.2,51,37.7,51.1,37.2,51.1 M21.4,40.2c0.5,0,0.9-0.1,1.3-0.4c2.8-2,4.3-4.6,4.3-7.3s-1.5-5.4-4.3-7.3c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c2.1,1.5,3.3,3.4,3.3,5.5c0,2.1-1.2,4-3.3,5.5c-0.7,0.5-0.7,1.3,0,1.8C20.4,40.1,20.9,40.2,21.4,40.2 M29.3,45.7 c0.5,0,1-0.1,1.3-0.4c4.9-3.4,7.7-7.9,7.7-12.7c0-4.8-2.7-9.3-7.7-12.7c-0.7-0.5-1.9-0.5-2.6,0c-0.7,0.5-0.7,1.3,0,1.8 c4.2,2.9,6.6,6.8,6.6,10.9c0,4.1-2.3,8-6.6,10.9c-0.7,0.5-0.7,1.3,0,1.8C28.4,45.5,28.8,45.7,29.3,45.7"
            })
          ),
        r.createElement(
          "g",
          { className: "Arrow", opacity: e.exitOnly ? 1 : 0 },
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,19.4 "
          }),
          r.createElement("polyline", {
            fill: "none",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            points: "41,30.7 14.5,30.7 23.5,42 "
          })
        ),
        r.createElement(
          "g",
          null,
          r.createElement("polyline", {
            className: "ExitDoor",
            opacity: e.exitOnly ? 1 : 0,
            strokeLinecap: "round",
            strokeMiterlimit: "1",
            strokeWidth: "2px",
            fill: "none",
            points:
              "32.5,22.1 32.5,17.7 47.7,17.7 47.7,43.8 32.5,43.8 32.5,39.5"
          })
        ),
        !e.exitOnly &&
          r.createElement(
            "g",
            { className: "Microphone" },
            r.createElement("path", {
              d:
                "M40.971,28.593v6.278c0,4.007-4.023,7.284-8.971,7.284c-2.693,0-5.126-0.974-6.765-2.516 c-1.379-1.28-2.207-2.952-2.207-4.769v-6.278l0,0H21.05v6.278c0,0.536,0.064,1.055,0.162,1.573 c0.357,1.752,1.281,3.325,2.627,4.592c1.801,1.702,4.332,2.839,7.17,3.049v4.072H25.3c-0.341,0-0.616,0.438-0.616,0.989 c0,0.552,0.275,0.99,0.616,0.99h5.759h1.882H38.7c0.341,0,0.616-0.438,0.616-0.99c0-0.551-0.275-0.989-0.616-0.989h-5.71v-4.072 c5.58-0.422,9.96-4.396,9.96-9.214v-6.278H40.971z"
            }),
            r.createElement(
              "g",
              null,
              r.createElement("path", {
                d:
                  "M32,39.841c-3.493,0-6.343-2.344-6.343-5.213v-17.85c0-2.871,2.85-5.213,6.343-5.213s6.343,2.342,6.343,5.213v17.85,C38.343,37.497,35.493,39.841,32,39.841z"
              })
            )
          )
      );
    }
    function h() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Paperclip",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839"
        })
      );
    }
    function d(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Volume",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "255.999px",
          viewBox: "0 0 256 255.999"
        },
        r.createElement(
          "g",
          { className: "Speaker" },
          r.createElement("path", {
            d:
              "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z"
          })
        ),
        !e.muted &&
          r.createElement(
            "g",
            { className: "SoundWaves" },
            r.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521"
            }),
            r.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z"
            }),
            r.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z"
            }),
            r.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z"
            })
          ),
        r.createElement(
          "g",
          { className: "SoundX" },
          r.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "170.667",
            x2: "223.167",
            y2: "84.5"
          }),
          r.createElement("line", {
            fill: "none",
            strokeWidth: e.muted ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "84.5",
            x2: "223.167",
            y2: "170.667"
          })
        )
      );
    }
    function f() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Play",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "playTriangle",
          d:
            "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z"
        })
      );
    }
    function _() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Pause",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          d:
            "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z"
        }),
        r.createElement("path", {
          d:
            "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z"
        })
      );
    }
    function b() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Check",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polyline", {
          fill: "none",
          stroke: "#fff",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "49.5,147.75 95,210.75 206.5,45.25 "
        })
      );
    }
    function v(e) {
      var t = e.highlightColor || "#00ccff",
        n = e.color || "#2d73ff";
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DialogCheck",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "defs",
          null,
          r.createElement(
            "linearGradient",
            { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            r.createElement("stop", {
              id: "stop0",
              offset: "0%",
              stopColor: t
            }),
            r.createElement("stop", {
              id: "stop1",
              offset: "100%",
              stopColor: n
            })
          ),
          r.createElement(
            "filter",
            { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
            r.createElement("feOffset", {
              result: "offOut",
              in: "SourceAlpha",
              dx: "20",
              dy: "20"
            }),
            r.createElement("feGaussianBlur", {
              result: "blurOut",
              in: "offOut",
              stdDeviation: "10"
            }),
            r.createElement("feBlend", {
              in: "SourceGraphic",
              in2: "blurOut",
              mode: "normal"
            })
          )
        ),
        r.createElement("path", {
          fill: "none",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00"
        }),
        r.createElement("path", {
          fill: "none",
          opacity: ".2",
          filter: "url(#f1)",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00"
        })
      );
    }
    function g() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Lock",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "topLock",
          d:
            "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z"
        }),
        r.createElement("path", {
          className: "baseLock",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "22",
          strokeMiterlimit: "10",
          d:
            "M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,43.188l0,0v23.885"
        })
      );
    }
    function E(e) {
      var t = "SVGIcon_Button SVGIcon_Throbber ";
      return (
        e.className && (t += e.className),
        r.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256"
          },
          r.createElement(
            "g",
            { className: i.a.partCircle },
            r.createElement("path", {
              className: i.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895"
            }),
            r.createElement("path", {
              className: i.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166"
            }),
            r.createElement("path", {
              className: i.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754"
            })
          ),
          r.createElement(
            "g",
            { className: i.a.mainOutline },
            r.createElement("path", {
              className: i.a.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            }),
            r.createElement("path", {
              className: i.a.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z"
            })
          ),
          r.createElement(
            "g",
            { className: i.a.bottomCircle },
            r.createElement("path", {
              fill: "#ffffff",
              d:
                "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579"
            })
          ),
          r.createElement(
            "g",
            { className: i.a.topCircle },
            r.createElement("circle", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              cx: "161.731",
              cy: "101.274",
              r: "23.019"
            })
          )
        )
      );
    }
    function y(e) {
      return r.createElement(
        "svg",
        {
          style: { transform: "rotate(" + e.angle + "deg)" },
          version: "1.1",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoubleArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polyline", {
          className: "Arrow1",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "23",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points: "135.65,21.667 30.081,127.235 137.18,234.333 "
        }),
        !e.singlearrow &&
          r.createElement("polyline", {
            className: "Arrow2",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "224.389,21.667 118.821,127.235 225.92,234.333 "
          })
      );
    }
    function w() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Maximize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("rect", {
          x: "24",
          y: "42.167",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "208",
          height: "171.667"
        }),
        r.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "42",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "54.01",
          x2: "232",
          y2: "54.01"
        })
      );
    }
    function S() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Minimize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "209.01",
          x2: "232",
          y2: "209.01"
        })
      );
    }
    function k() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Restore",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polyline", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 "
        }),
        r.createElement("rect", {
          x: "24",
          y: "90.861",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "149",
          height: "122.973"
        })
      );
    }
    function D(e) {
      return r.createElement(
        "svg",
        {
          style: { transform: "rotate(" + e.angle + "deg)" },
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_FlatArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polygon", {
          points: "13.913,141 128,59 242.087,141 ",
          fill: "#ffffff"
        })
      );
    }
    function C(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          style: { transform: "scaleX(" + (e.bFlipHorizontal ? -1 : 1) + ")" },
          className: "SVGIcon_Button SVGIcon_MediaControls",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "Arrow",
          d:
            "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003"
        }),
        r.createElement("polyline", {
          className: "preArrowBox",
          opacity: e.bHidePreArrow ? "0" : "1",
          points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t"
        }),
        r.createElement("polyline", {
          className: "jumpAheadBox",
          opacity: e.bShowJumpAheadBox ? "1" : "0",
          points: "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t"
        }),
        r.createElement("polyline", {
          className: "postArrowBox",
          opacity: e.bHidePostArrow ? "0" : "1",
          points:
            "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t"
        })
      );
    }
    function O(e) {
      var t = Object(a.a)(
        "SVGIcon_Button",
        "SVGIcon_SteamLogo",
        e && e.className
      );
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          fill: "#ffffff",
          d:
            "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355"
        }),
        r.createElement("path", {
          fill: "#ffffff",
          d:
            "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387"
        }),
        r.createElement("path", {
          fill: "#ffffff",
          d:
            "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306"
        })
      );
    }
    function L() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Viewers",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "frontGuy",
          fill: "#666666",
          d:
            "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z"
        }),
        r.createElement("path", {
          className: "backGuy",
          fill: "rgb(144, 153, 161)",
          d:
            "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z"
        })
      );
    }
    function x() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 64 64"
        },
        r.createElement(
          "g",
          null,
          r.createElement("path", {
            d:
              "M40.6,32.7l15.1-15.1c2.6-2.6,2.6-6.7,0-9.3c-2.6-2.6-6.7-2.6-9.3,0L31.3,23.4L16.2,8.3c-2.6-2.6-6.7-2.6-9.3,0c-2.6,2.6-2.6,6.7,0,9.3L22,32.7L6.9,47.8c-2.6,2.6-2.6,6.7,0,9.3c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9L31.3,42l15.1,15.1c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9c2.6-2.6,2.6-6.7,0-9.3L40.6,32.7z"
          })
        )
      );
    }
    function M() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineGrabber",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { className: "leftarrow", opacity: "0" },
          r.createElement("polygon", {
            points: "127.817,4.403 4,128 127.817,251.598"
          })
        ),
        r.createElement(
          "g",
          { className: "rightarrow", opacity: "0" },
          r.createElement("polygon", {
            points: "127.816,4.403 251.633,128 127.816,251.598"
          })
        ),
        r.createElement(
          "g",
          { className: "grabber" },
          r.createElement("polygon", {
            points:
              "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403"
          })
        )
      );
    }
    function I() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineMarker",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polygon", {
          className: "pointer",
          points:
            "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t"
        }),
        r.createElement("rect", {
          className: "line",
          x: "116.271",
          y: "3.168",
          width: "23.459",
          height: "137.332"
        })
      );
    }
    function T() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_LargeMobilePhone",
          x: "0px",
          y: "0px",
          width: "128px",
          height: "255px",
          viewBox: "0 0 128 255"
        },
        r.createElement("rect", {
          className: "screen",
          x: "7.756",
          y: "5.518",
          fill: "#292D33",
          width: "112.144",
          height: "234.357"
        }),
        r.createElement("path", {
          className: "frame",
          fill: "#3C414B",
          d:
            "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001"
        }),
        r.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349"
        }),
        r.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56"
        }),
        r.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304"
        }),
        r.createElement("path", {
          fill: "#3C414B",
          d:
            "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056"
        })
      );
    }
    function R() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Envelope",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,48.809 127.22,128 252.833,48.809 "
        }),
        r.createElement("polygon", {
          fill: "#3C414B",
          points: "252.833,203.68 252.833,55.439 185.151,99.131 "
        }),
        r.createElement("polygon", {
          fill: "#3C414B",
          points:
            "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 "
        }),
        r.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,203.682 3.167,55.441 70.851,99.132 "
        })
      );
    }
    function j() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_CSGO",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z"
        })
      );
    }
    function N() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ClosedCaption",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          className: "CCBox",
          fill: "none",
          stroke: "#000000",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          d:
            "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z"
        }),
        r.createElement("path", {
          className: "C1",
          d:
            "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z"
        }),
        r.createElement("path", {
          className: "C1",
          d:
            "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z"
        })
      );
    }
    function P() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Patch",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256"
        },
        r.createElement("path", {
          d:
            "M171.176,136.219c-5.516-5.516-14.166-5.948-20.223-1.406L92.125,75.984l-8.002-29.738c-0.324-1.406-1.73-3.027-3.028-3.785 L46.49,24.186c-1.298-0.648-3.136-0.433-4.218,0.648L25.295,41.813c-0.974,0.973-1.298,2.92-0.649,4.217l18.276,34.605 c0.648,1.297,2.379,2.596,3.785,3.027l29.739,8.003l58.828,58.828c-4.542,6.056-4.109,14.707,1.405,20.222l56.882,56.882 c6.056,6.056,15.896,6.056,21.845,0l12.544-12.544c6.056-6.056,6.056-15.788,0-21.845L171.176,136.219z"
        }),
        r.createElement("path", {
          d:
            "M153.116,122.16c2.271-0.648,4.65-0.973,7.138-0.973c0.865,0,1.622,0,2.486,0.107l26.928-26.927 c12.328,2.92,25.846-0.324,35.361-9.948c9.517-9.625,12.869-23.034,9.949-35.254l-20.33,20.33l-21.845-5.84l-5.84-21.952 l20.331-20.33c-12.221-2.92-25.738,0.324-35.254,9.948c-9.625,9.625-12.869,23.143-9.949,35.362L129.866,98.91L153.116,122.16z"
        }),
        r.createElement("path", {
          d:
            "M99.371,129.406l-32.226,32.226c-12.328-2.92-25.845,0.324-35.362,9.948c-9.517,9.625-12.869,23.034-9.949,35.254 l20.331-20.33l21.953,5.84l5.839,21.952l-20.331,20.33c12.22,2.92,25.737-0.324,35.254-9.949 c9.625-9.624,12.869-23.142,9.949-35.361l27.035-27.035c-0.325-3.136,0-6.38,0.865-9.517L99.371,129.406z"
        })
      );
    }
    function A() {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3_copy",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256"
        },
        r.createElement(
          "g",
          { id: "Layer_3_copy" },
          r.createElement(
            "g",
            { id: "g4768_1_", transform: "translate(-6.9308024,-10)" },
            r.createElement("g", { id: "g4763_1_" })
          ),
          r.createElement("path", {
            d:
              "M206.3,36.6c-19.4,0-35.8,14.1-40.3,33H24.8c-6,0-10.8,4.8-10.8,10.8s4.8,10.8,10.8,10.8h141.3\r\n\t\t\t\tc4.7,18.6,20.9,32.4,40.2,32.4c22.9,0,41.5-19.5,41.5-43.5C247.9,56.2,229.2,36.6,206.3,36.6z M206.3,109.7\r\n\t\t\t\tc-15.2,0-27.5-13.2-27.5-29.5c0-16.3,12.4-29.5,27.5-29.5s27.5,13.2,27.5,29.5C233.9,96.4,221.5,109.7,206.3,109.7z"
          }),
          r.createElement("path", {
            d:
              "M230.4,157.3H107.9c-4.6-14.6-18.3-25.2-34.3-25.2s-29.7,10.6-34.3,25.2H24.8c-6,0-10.8,4.8-10.8,10.8\r\n\t\t\t\tS18.9,179,24.8,179h14.3c4.6,14.6,18.3,25.2,34.3,25.2s29.7-10.6,34.3-25.2h122.5c6,0,10.8-4.8,10.8-10.8S236.4,157.3,230.4,157.3z\r\n\t\t\t\tM73.5,189.8c-8,0-14.9-4.3-18.7-10.8l0,0c-0.7-1.2-1.3-2.4-1.7-3.7c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1,0-0.1,0-0.2\r\n\t\t\t\tc-0.2-0.8-0.4-1.7-0.5-2.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.2,0-0.4c0-0.4,0-0.9,0-1.3s0-0.9,0-1.3\r\n\t\t\t\tc0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-1.8,0.5-2.6c0-0.1,0-0.1,0-0.2c0.1-0.4,0.2-0.8,0.4-1.2\r\n\t\t\t\tc0,0,0-0.1,0-0.1c0.5-1.3,1-2.6,1.7-3.7c3.7-6.4,10.7-10.8,18.7-10.8c8,0,14.9,4.3,18.7,10.8c0.7,1.2,1.3,2.4,1.7,3.7\r\n\t\t\t\tc0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0.2,0.8,0.4,1.7,0.5,2.6c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.7,0.1,1\r\n\t\t\t\tc0,0.1,0,0.2,0,0.4c0,0.4,0,0.9,0,1.3s0,0.9,0,1.3c0,0.1,0,0.2,0,0.4c0,0.3-0.1,0.7-0.1,1c0,0.1,0,0.2,0,0.3\r\n\t\t\t\tc-0.1,0.9-0.3,1.8-0.5,2.6c0,0.1,0,0.1,0,0.2c-0.1,0.4-0.2,0.8-0.4,1.2c0,0,0,0.1,0,0.1c-0.5,1.3-1,2.6-1.7,3.7l0,0\r\n\t\t\t\tC88.5,185.4,81.5,189.8,73.5,189.8z"
          })
        )
      );
    }
    function B(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 409.6 409.6"
        },
        r.createElement("path", {
          d:
            "M109.9,96.2H302c16.3,0,29.6,13,29.6,29v101.4c0,16-13.2,29-29.6,29h-90.1l-57.6,57.9L138,255.6h-28.1\r\n        \t\tc-16.3,0-29.6-13-29.6-29V125.2C80.4,109.2,93.6,96.2,109.9,96.2z"
        })
      );
    }
    function F(e) {
      return r.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 409.6 409.6"
        },
        r.createElement("path", {
          d:
            "M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1\r\n                c-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2\r\n                l0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27\r\n                c0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3\r\n                l-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8\r\n                c-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14\r\n                c-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3\r\n                c-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z"
        })
      );
    }
  },
  AvbV: function(e, t, r) {
    var o = {
      "./main_brazilian.json": ["TFAN", 7],
      "./main_bulgarian.json": ["c2SO", 8],
      "./main_czech.json": ["peP3", 9],
      "./main_danish.json": ["0bnV", 10],
      "./main_dutch.json": ["wcLc", 11],
      "./main_english.json": ["/rNK", 1],
      "./main_finnish.json": ["iywU", 12],
      "./main_french.json": ["Xnpc", 13],
      "./main_german.json": ["pmKi", 14],
      "./main_greek.json": ["mTRv", 15],
      "./main_hungarian.json": ["WkHb", 16],
      "./main_italian.json": ["Jz5U", 17],
      "./main_japanese.json": ["3Dk9", 18],
      "./main_koreana.json": ["neQD", 19],
      "./main_latam.json": ["6oHD", 20],
      "./main_norwegian.json": ["2OvS", 21],
      "./main_polish.json": ["3pwE", 22],
      "./main_portuguese.json": ["hY40", 23],
      "./main_romanian.json": ["Q95+", 24],
      "./main_russian.json": ["bsPT", 25],
      "./main_schinese.json": ["B/Zz", 26],
      "./main_spanish.json": ["U6iL", 27],
      "./main_swedish.json": ["4uPU", 28],
      "./main_tchinese.json": ["rgC9", 29],
      "./main_thai.json": ["87dp", 30],
      "./main_turkish.json": ["yMpO", 31],
      "./main_ukrainian.json": ["zTWm", 32],
      "./main_vietnamese.json": ["wqiy", 33]
    };
    function n(t) {
      var n = o[t];
      return n
        ? r.e(n[1]).then(function() {
            var e = n[0];
            return r.t(e, 3);
          })
        : Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
    }
    (n.keys = function() {
      return Object.keys(o);
    }),
      (n.id = "AvbV"),
      (e.exports = n);
  },
  CdLH: function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "b", function() {
        return i;
      }),
      n.d(t, "c", function() {
        return a;
      }),
      n.d(t, "e", function() {
        return s;
      });
    var r = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    function o(e, t) {
      return (
        e.getFullYear() == t.getFullYear() &&
        e.getMonth() == t.getMonth() &&
        e.getDate() == t.getDate()
      );
    }
    function i(e, t) {
      return e.getFullYear() == t.getFullYear();
    }
    function a(e) {
      return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
    }
    function s(t) {
      return new Promise(function(e) {
        return setTimeout(e, t);
      });
    }
  },
  D4wO: function(e, t, n) {
    "use strict";
    function r(a) {
      return function(e, o, t) {
        var i = t.value;
        t.value = function() {
          for (var e = this, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var r = this[o + "_DebounceProperties"];
          void 0 === r &&
            (r = this[o + "_DebounceProperties"] = {
              hTimer: void 0,
              nPending: 0
            }),
            void 0 === r.hTimer
              ? (i.apply(this, t),
                (r.hTimer = window.setInterval(function() {
                  0 < r.nPending
                    ? (i.apply(e, t), (r.nPending = 0))
                    : (window.clearInterval(r.hTimer), (r.hTimer = void 0));
                }, a)))
              : (r.nPending += 1);
        };
      };
    }
    n.d(t, "a", function() {
      return r;
    });
  },
  "IjL/": function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    var r = n("mrSG"),
      o = n("q1tI"),
      i = n("bxiW"),
      a = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { error: null }), t;
        }
        return (
          Object(r.d)(e, n),
          (e.prototype.componentDidCatch = function(e, t) {
            var n = { error: e, info: t };
            this.setState({ error: n });
          }),
          (e.prototype.clearError = function() {
            this.setState({ error: null });
          }),
          (e.prototype.render = function() {
            var e = this.state.error;
            return e
              ? this.props.renderError
                ? this.props.renderError(e)
                : this.defaultErrorRender(e)
              : this.props.children;
          }),
          (e.prototype.defaultErrorRender = function(e) {
            var t = e.error ? e.error.stack : "Stack missing",
              n = e.info ? e.info.componentStack : "",
              r = (e.error && e.error.message) || "unknown error";
            return o.createElement(
              "div",
              { style: { overflow: "auto" } },
              o.createElement(
                "h1",
                {
                  style: {
                    marginTop: "15px",
                    marginLeft: "15px",
                    color: "white",
                    fontSize: "20px",
                    display: "inline-block"
                  }
                },
                'Error: "',
                r,
                '"'
              ),
              "   ",
              o.createElement(
                "span",
                {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  onClick: this.clearError
                },
                "(x) Dismiss"
              ),
              o.createElement("br", null),
              o.createElement(
                "pre",
                {
                  style: {
                    marginTop: "15px",
                    marginLeft: "15px",
                    color: "white",
                    fontSize: "16px"
                  }
                },
                t
              ),
              o.createElement(
                "pre",
                {
                  style: {
                    marginTop: "15px",
                    marginLeft: "15px",
                    color: "white",
                    fontSize: "16px"
                  }
                },
                "The error occurred while rendering:",
                n
              )
            );
          }),
          Object(r.c)([i.a], e.prototype, "clearError", null),
          e
        );
      })(o.Component);
  },
  "JJA/": function(e, t, n) {
    e.exports = {
      BodyNoScroll: "modals_BodyNoScroll_32ZiC",
      BodyNoScrollDialog: "modals_BodyNoScrollDialog_105OB",
      OverlayModal: "modals_OverlayModal_1yDps"
    };
  },
  JMS6: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return c;
    }),
      n.d(t, "a", function() {
        return f;
      }),
      n.d(t, "c", function() {
        return b;
      });
    var c,
      r,
      o = n("mrSG"),
      i = n("2vnA"),
      a = n("i8i4"),
      s = n("Kw0F"),
      l = n("D4wO"),
      u = n("bxiW"),
      p = n("kyHq"),
      m = n("TLQK"),
      h = n("lkRc");
    ((r = c || (c = {}))[(r.Minimized = 1)] = "Minimized"),
      (r[(r.Hidden = 2)] = "Hidden"),
      (r[(r.Tooltip = 4)] = "Tooltip"),
      (r[(r.ContextMenu = 8)] = "ContextMenu"),
      (r[(r.Resizable = 16)] = "Resizable");
    var d = (function() {
        function e(e, t) {
          (this.m_rgLoadingLinks = []), (this.m_rgLoadingLinks = []);
          for (
            var n = e.document.getElementsByTagName("link"), r = 0;
            r < n.length;
            r++
          ) {
            var o = n[r];
            o.addEventListener("load", this.OnLinkLoad),
              this.m_rgLoadingLinks.push(o);
          }
        }
        return (
          (e.prototype.SetTarget = function(e) {
            (this.m_fnRender = e),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          (e.prototype.OnLinkLoad = function(e) {
            e.currentTarget.removeEventListener("load", this.OnLinkLoad),
              s.b(this.m_rgLoadingLinks, e.currentTarget),
              0 == this.m_rgLoadingLinks.length &&
                (this.m_fnRender(), (this.m_fnRender = void 0));
          }),
          Object(o.c)([u.a], e.prototype, "OnLinkLoad", null),
          e
        );
      })(),
      f = (function() {
        function e(e, t) {
          (this.m_bFocused = !1),
            (this.m_strName = e),
            (this.m_rgParams = t),
            this.m_rgParams.target_browser &&
              (this.m_strName +=
                "_pid" + this.m_rgParams.target_browser.m_unPID),
            (this.m_strTitle = t.title),
            delete this.m_rgParams.title;
        }
        return (
          (e.prototype.UpdateParamsBeforeShow = function(e) {
            return e;
          }),
          (e.prototype.OnDrop = function(e) {
            console.log("Ignoring drop onto toplevel window", e),
              e.preventDefault(),
              e.stopPropagation();
          }),
          (e.prototype.OnDragOver = function(e) {
            e.preventDefault(),
              (e.dataTransfer.dropEffect = "none"),
              e.stopPropagation();
          }),
          (e.prototype.OnMessage = function(e) {
            "window_moved" == e.data && this.OnResize();
          }),
          (e.prototype.Show = function(e, t) {
            var n,
              r = this;
            void 0 === e && (e = !0),
              void 0 === t && (t = !1),
              window.SteamClient &&
                (this.m_rgParams.eCreationFlags |= c.Hidden),
              this.m_rgParams.eCreationFlags & c.Tooltip && (e = !1),
              this.BIsValid() &&
                (this.BIsClosed()
                  ? ((this.m_popup = void 0), (this.m_element = void 0))
                  : e && this.Focus(t));
            var o,
              i,
              a,
              s = b.GetExistingPopup(this.m_strName);
            (s && !this.m_rgParams.replace_existing_popup) ||
              ((this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams)),
              s
                ? ((i = s.m_element),
                  (o = s.m_popup),
                  s.ReleasePopup(),
                  (a = s.m_renderWhenReady),
                  b.RemoveTrackedPopup(s),
                  o.removeEventListener("beforeunload", s.OnBeforeUnloadEvent),
                  o.removeEventListener("unload", s.OnUnload),
                  o.removeEventListener("resize", s.OnResizeEvent),
                  o.removeEventListener("focus", this.OnFocusInternal),
                  o.removeEventListener("blur", this.OnBlurInternal),
                  o.removeEventListener("drop", s.OnDrop),
                  o.removeEventListener("dragover", s.OnDragOver),
                  o.removeEventListener("message", this.OnMessage))
                : ((o = (n = _.CreatePopup(this.m_strName, this.m_rgParams))
                    .popup),
                  (i = n.element),
                  (a = new d(o, i))),
              o &&
                i &&
                ((o.document.title = this.m_strTitle),
                o.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
                o.addEventListener("unload", this.OnUnload),
                o.addEventListener("resize", this.OnResizeEvent),
                o.addEventListener("focus", this.OnFocusInternal),
                o.addEventListener("blur", this.OnBlurInternal),
                o.addEventListener("drop", this.OnDrop),
                o.addEventListener("dragover", this.OnDragOver),
                o.addEventListener("message", this.OnMessage),
                h.c.LANGUAGE &&
                  o.document.documentElement.setAttribute(
                    "lang",
                    m.a[h.c.LANGUAGE]
                  ),
                (this.m_popup = o),
                (this.m_element = i),
                (this.m_renderWhenReady = a),
                this.m_renderWhenReady.SetTarget(function() {
                  return r.RenderInternal(r.m_popup, r.m_element, e);
                })),
              b.AddTrackedPopup(this),
              s && e && this.Focus());
          }),
          (e.prototype.RemoveEventListeners = function() {
            this.window.removeEventListener(
              "beforeunload",
              this.OnBeforeUnloadEvent
            ),
              this.window.removeEventListener("unload", this.OnUnload),
              this.window.removeEventListener("resize", this.OnResizeEvent),
              this.window.removeEventListener("focus", this.OnFocusInternal),
              this.window.removeEventListener("blur", this.OnBlurInternal),
              this.window.removeEventListener("drop", this.OnDrop),
              this.window.removeEventListener("dragover", this.OnDragOver),
              this.window.removeEventListener("message", this.OnMessage);
          }),
          (e.prototype.RenderInternal = function(e, t, n) {
            this.browser_info &&
              (function(e) {
                return (
                  e.m_eBrowserType == p.b.EBrowserType_OpenVROverlay ||
                  e.m_eBrowserType == p.b.EBrowserType_OpenVROverlay_Dashboard
                );
              })(this.browser_info) &&
              (t.ownerDocument.body.className += " VR"),
              this.Render(e, t),
              this.OnLoad(),
              e.SteamClient &&
                (n
                  ? e.SteamClient.Window.BringToFront()
                  : e.SteamClient.Window.ShowWindow());
          }),
          (e.prototype.OnResizeEvent = function() {
            this.OnResize();
          }),
          (e.prototype.OnBeforeUnloadEvent = function() {
            this.OnBeforeUnload();
          }),
          (e.prototype.OnUnload = function() {
            this.RemoveEventListeners(),
              b.RemoveTrackedPopup(this),
              this.OnClose(),
              a.unmountComponentAtNode(this.m_element);
          }),
          Object.defineProperty(e.prototype, "browser_info", {
            get: function() {
              return this.m_rgParams.target_browser;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "window", {
            get: function() {
              return this.m_popup;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "root_element", {
            get: function() {
              return this.m_element;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "title", {
            get: function() {
              return this.m_strTitle;
            },
            set: function(e) {
              (this.m_strTitle = e),
                this.m_popup && (this.m_popup.document.title = this.m_strTitle);
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.Focus = function(e) {
            void 0 === e && (e = !1),
              this.m_popup &&
              void 0 !== this.m_popup.SteamClient &&
              void 0 !== this.m_popup.SteamClient.Window
                ? e
                  ? this.m_popup.SteamClient.Window.SetForegroundWindow()
                  : this.m_popup.SteamClient.Window.BringToFront()
                : this.m_popup && this.m_popup.focus();
          }),
          (e.prototype.Close = function() {
            this.m_popup && this.m_popup.close();
          }),
          (e.prototype.GetName = function() {
            return this.m_strName;
          }),
          (e.prototype.BIsValid = function() {
            return !!this.m_popup;
          }),
          (e.prototype.BIsClosed = function() {
            return !this.m_popup || this.m_popup.closed;
          }),
          (e.prototype.BIsVisible = function() {
            return (
              this.m_popup &&
              !this.m_popup.closed &&
              "visible" == this.m_popup.document.visibilityState
            );
          }),
          (e.prototype.BIsFocused = function() {
            return this.BIsVisible() && this.m_popup.document.hasFocus();
          }),
          (e.prototype.OnFocusInternal = function() {
            (this.m_bFocused = !0), this.OnFocus();
          }),
          (e.prototype.OnBlurInternal = function() {
            (this.m_bFocused = !1), this.OnBlur();
          }),
          Object.defineProperty(e.prototype, "focused", {
            get: function() {
              return this.m_bFocused;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.GetWindowRestoreDetails = function() {
            var n = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient
              ? new Promise(function(t, e) {
                  n.m_popup.SteamClient.Window.GetWindowRestoreDetails(function(
                    e
                  ) {
                    t(e);
                  });
                })
              : Promise.resolve("");
          }),
          (e.prototype.IsMinimized = function() {
            var n = this;
            return this.m_popup &&
              !this.m_popup.closed &&
              this.m_popup.SteamClient &&
              this.m_popup.SteamClient.Window &&
              this.m_popup.SteamClient.Window.IsWindowMinimized
              ? new Promise(function(t, e) {
                  n.m_popup.SteamClient.Window.IsWindowMinimized(function(e) {
                    t(e);
                  });
                })
              : Promise.resolve(!1);
          }),
          (e.prototype.ReleasePopup = function() {
            this.OnClose(), (this.m_popup = null);
          }),
          (e.prototype.OnBeforeUnload = function() {}),
          (e.prototype.OnFocus = function() {}),
          (e.prototype.OnBlur = function() {}),
          Object(o.c)([i.observable], e.prototype, "m_bFocused", void 0),
          Object(o.c)([u.a], e.prototype, "OnMessage", null),
          Object(o.c)([u.a], e.prototype, "OnResizeEvent", null),
          Object(o.c)([u.a], e.prototype, "OnBeforeUnloadEvent", null),
          Object(o.c)([u.a], e.prototype, "OnUnload", null),
          Object(o.c)([u.a], e.prototype, "OnFocusInternal", null),
          Object(o.c)([u.a], e.prototype, "OnBlurInternal", null),
          e
        );
      })(),
      _ = (function() {
        function e() {
          var a = this;
          (this.m_bShuttingDown = !1),
            (this.m_mapPopups = new Map()),
            (this.m_rgShutdownCallbacks = []),
            (this.m_rgPopupCreatedCallbacks = []),
            (this.m_unCurrentAccountID = 0),
            (this.m_mapRestoreDetails = new Map()),
            (this.m_bSaveRequired = !1),
            Object({ NODE_ENV: "production", STEAM_BUILD: "buildbot" })
              .MOBILE_BUILD ||
              window.addEventListener("beforeunload", function(e) {
                a.m_bShuttingDown = !0;
                for (
                  var t = 0, n = a.m_rgShutdownCallbacks;
                  t < n.length;
                  t++
                ) {
                  (0, n[t])();
                }
                var r = [];
                a.m_mapPopups.forEach(function(e) {
                  e.BIsValid() && !e.BIsClosed() && r.push(e);
                });
                for (var o = 0, i = r; o < i.length; o++) {
                  i[o].Close();
                }
                a.m_bSaveRequired && a.SaveSavedDimensionStore(),
                  a.m_mapPopups.clear();
              });
        }
        return (
          (e.prototype.SetCurrentLoggedInAccountID = function(e) {
            (this.m_unCurrentAccountID = e)
              ? this.LoadSavedDimensionStore()
              : this.ClearSavedDimensionStore();
          }),
          (e.prototype.AddShutdownCallback = function(e) {
            this.m_rgShutdownCallbacks.push(e);
          }),
          (e.prototype.AddPopupCreatedCallback = function(e) {
            this.m_rgPopupCreatedCallbacks.push(e);
          }),
          (e.prototype.AddTrackedPopup = function(e) {
            this.m_mapPopups.set(e.GetName(), e);
            for (
              var t = 0, n = this.m_rgPopupCreatedCallbacks;
              t < n.length;
              t++
            ) {
              (0, n[t])(e);
            }
          }),
          (e.prototype.RemoveTrackedPopup = function(e) {
            this.m_mapPopups.delete(e.GetName());
          }),
          (e.prototype.GetExistingPopup = function(e) {
            return this.m_mapPopups.get(e);
          }),
          (e.prototype.GetPopups = function() {
            return this.m_mapPopups.values();
          }),
          (e.prototype.ClosePopupsOwnedByBrowser = function(t) {
            this.m_mapPopups.forEach(function(e) {
              e.browser_info &&
                e.browser_info.m_nBrowserID == t.m_nBrowserID &&
                e.browser_info.m_unPID == t.m_unPID &&
                e.Close();
            });
          }),
          (e.CreatePopup = function(e, t) {
            var n = t.dimensions || {},
              r = n.width || 300,
              o = n.height || 300,
              i = t.title,
              a = "width=" + r + ",height=" + o;
            void 0 !== n.left && (a += ",left=" + n.left),
              void 0 !== n.top && (a += ",top=" + n.top),
              (a += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
            var s = "about:blank",
              c = [];
            c.push("createflags=" + t.eCreationFlags),
              t.minWidth && c.push("minwidth=" + t.minWidth),
              t.minHeight && c.push("minheight=" + t.minHeight),
              t.target_browser &&
                (c.push("pid=" + t.target_browser.m_unPID),
                c.push("browser=" + t.target_browser.m_nBrowserID),
                c.push("browserType=" + t.target_browser.m_eBrowserType),
                t.availscreenwidth &&
                  t.availscreenheight &&
                  (c.push("screenavailwidth=" + t.availscreenwidth),
                  c.push("screenavailheight=" + t.availscreenheight))),
              t.strVROverlayKey && c.push("vrOverlayKey=" + t.strVROverlayKey),
              t.strRestoreDetails &&
                c.push("restoredetails=" + t.strRestoreDetails),
              c && (s += "?" + c.join("&"));
            var l = (t.owner_window || window).open(s, e, a, !0);
            if (!l)
              return (
                console.log(
                  "Failed to create popup.. browser popup blocker enabled?"
                ),
                {}
              );
            var u = "";
            t.html_class && (u = 'class="' + t.html_class + '"');
            var p = "";
            t.body_class && (p = 'class="' + t.body_class + '"');
            var m =
              "<!DOCTYPE html><html " +
              u +
              "><head><title></title></head><body " +
              p +
              '><div id="popup_target"></div></body></html>';
            l.document.write(m), (l.document.title = i);
            for (
              var h = l.document.getElementsByTagName("head")[0],
                d = document.getElementsByTagName("link"),
                f = 0;
              f < d.length;
              f++
            ) {
              var _ = d[f];
              if ("stylesheet" == _.rel) {
                for (
                  var b = l.document.createElement("link"), v = 0;
                  v < _.attributes.length;
                  v++
                ) {
                  var g = _.attributes.item(v);
                  b.setAttribute(g.name, g.value);
                }
                h.appendChild(b);
              }
            }
            return {
              popup: l,
              element: l.document.getElementById("popup_target")
            };
          }),
          (e.prototype.BShuttingDown = function() {
            return this.m_bShuttingDown;
          }),
          (e.prototype.GetLocalStorageKey = function() {
            return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
          }),
          (e.prototype.LoadSavedDimensionStore = function() {
            if (this.m_unCurrentAccountID) {
              var e = this.GetLocalStorageKey();
              this.m_mapRestoreDetails = void 0;
              var t = window.localStorage.getItem(e);
              if (t)
                try {
                  var n = JSON.parse(t);
                  this.m_mapRestoreDetails = new Map(n);
                } catch (e) {}
              this.m_mapRestoreDetails ||
                (this.m_mapRestoreDetails = new Map());
            }
          }),
          (e.prototype.SaveSavedDimensionStore = function() {
            if (this.m_unCurrentAccountID && this.m_bSaveRequired) {
              var e = this.GetLocalStorageKey(),
                t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
              window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
            }
          }),
          (e.prototype.DebouncedSaveSavedDimensionStore = function() {
            this.SaveSavedDimensionStore();
          }),
          (e.prototype.ClearSavedDimensionStore = function() {
            this.m_mapRestoreDetails.clear(), (this.m_bSaveRequired = !1);
          }),
          (e.prototype.GetRestoreDetails = function(e) {
            if (!this.m_mapRestoreDetails.has(e)) return "";
            var t = this.m_mapRestoreDetails.get(e);
            return (
              (t.last_used = Date.now()),
              (this.m_bSaveRequired = !0),
              t.strRestoreDetails
            );
          }),
          (e.prototype.SetRestoreDetails = function(e, t, n) {
            if (e) {
              if (t) {
                if (50 < this.m_mapRestoreDetails.size) {
                  for (
                    var r = null,
                      o = Date.now(),
                      i = 0,
                      a = Array.from(this.m_mapRestoreDetails.keys());
                    i < a.length;
                    i++
                  ) {
                    var s = a[i],
                      c = this.m_mapRestoreDetails.get(s);
                    c.last_used < o &&
                      c.bExpires &&
                      ((o = c.last_used), (r = s));
                  }
                  r && this.m_mapRestoreDetails.delete(r);
                }
                var l = {
                  strRestoreDetails: t,
                  last_used: Date.now(),
                  bExpires: n
                };
                this.m_mapRestoreDetails.set(e, l);
              } else this.m_mapRestoreDetails.delete(e);
              (this.m_bSaveRequired = !0),
                this.m_bShuttingDown
                  ? this.SaveSavedDimensionStore()
                  : this.DebouncedSaveSavedDimensionStore();
            }
          }),
          Object(o.c)(
            [u.a, Object(l.a)(100)],
            e.prototype,
            "DebouncedSaveSavedDimensionStore",
            null
          ),
          e
        );
      })(),
      b = new _();
  },
  Jnrd: function(e, t, n) {
    "use strict";
    function r(e) {
      if (!a() || !window.document.cookie) return null;
      var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function o(e, t, n, r) {
      if (a()) {
        r || (r = "/");
        var o = "";
        if (void 0 !== n && n) {
          var i = new Date();
          i.setTime(i.getTime() + 864e5 * n),
            (o = "; expires=" + i.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          o +
          ";path=" +
          r;
      }
    }
    function a() {
      return !!window.document;
    }
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "c", function() {
        return o;
      }),
      n.d(t, "a", function() {
        return a;
      });
  },
  "Jqb/": function(e, t, n) {
    "use strict";
    n.d(t, "f", function() {
      return _;
    }),
      n.d(t, "g", function() {
        return b;
      }),
      n.d(t, "b", function() {
        return v;
      }),
      n.d(t, "c", function() {
        return g;
      }),
      n.d(t, "d", function() {
        return E;
      }),
      n.d(t, "a", function() {
        return y;
      }),
      n.d(t, "e", function() {
        return S;
      });
    var l = n("mrSG"),
      u = n("q1tI"),
      o = n("X3Ds"),
      p = n("TLQK"),
      m = n("Mgs7"),
      i = n("IjL/"),
      r = n("bxiW"),
      a = n("6Y59"),
      s = n("okNM"),
      c = n("2vnA"),
      h = n("exH9"),
      d = n("JJA/"),
      f = n.n(d);
    function _(t) {
      var e,
        n = {};
      t.onEscKeypress &&
        ((n.tabIndex = 0),
        (n.onKeyDown = function(e) {
          27 == e.keyCode && t.onEscKeypress();
        }),
        (n.onMouseDown = function(e) {
          e.currentTarget !== e.target ||
            t.bDisableBackgroundDismiss ||
            t.onEscKeypress();
        }),
        (e = function(e) {
          e && (o.c(e, e.ownerDocument.activeElement) || e.focus());
        }));
      var r = ["ModalPosition"];
      return (
        t.className && r.push(t.className),
        t.bDestructiveWarning && r.push("Destructive"),
        u.createElement(
          "div",
          Object(l.a)({ className: r.join(" ") }, n, { ref: e }),
          u.createElement(
            "div",
            { className: "ModalPosition_Content" },
            !t.hideTopBar &&
              u.createElement("div", { className: "ModalPosition_TopBar" }),
            t.onEscKeypress &&
              !t.bHideCloseIcon &&
              u.createElement(
                "div",
                { className: "ModalPosition_Dismiss" },
                u.createElement(
                  "div",
                  { className: "closeButton", onClick: t.onEscKeypress },
                  u.createElement(a.G, null)
                )
              ),
            u.createElement(i.a, null, t.children)
          )
        )
      );
    }
    var b = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.state = { bShowModal: !1 }), (e.m_refParent = u.createRef()), e
          );
        }
        return (
          Object(l.d)(e, t),
          (e.prototype.componentDidMount = function() {
            var e = this.GetBodyElement();
            e && e.classList.add(f.a.BodyNoScroll);
          }),
          (e.prototype.componentWillUnmount = function() {
            var e = this.GetBodyElement();
            e && e.classList.remove(f.a.BodyNoScroll);
          }),
          (e.prototype.GetBodyElement = function() {
            return this.m_refParent.current
              ? this.m_refParent.current.closest("body")
              : null;
          }),
          (e.prototype.render = function() {
            return u.createElement(
              "div",
              {
                ref: this.m_refParent,
                className: f.a.OverlayModal + " " + this.props.className
              },
              this.props.children
            );
          }),
          e
        );
      })(u.Component),
      v = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(l.d)(t, e),
          (t.prototype.Cancel = function() {
            this.props.onCancel && this.props.onCancel(),
              this.props.closeModal && this.props.closeModal();
          }),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.strTitle,
              n = e.strDescription,
              r = e.strOKButtonText,
              o = e.strCancelButtonText,
              i = e.bAlertDialog,
              a = e.children,
              s = Object(l.f)(e, [
                "strTitle",
                "strDescription",
                "strOKButtonText",
                "strCancelButtonText",
                "bAlertDialog",
                "children"
              ]),
              c = r || Object(p.c)("#Button_Close");
            return u.createElement(
              g,
              Object(l.a)({}, s),
              u.createElement(m.h, null, " ", t, " "),
              u.createElement(
                m.a,
                null,
                u.createElement(m.b, null, n, a),
                u.createElement(
                  m.g,
                  null,
                  i
                    ? u.createElement(m.m, null, c)
                    : u.createElement(m.k, {
                        bOKDisabled: this.props.bOKDisabled,
                        strOKText: r,
                        onCancel: this.Cancel,
                        strCancelText: o
                      })
                )
              )
            );
          }),
          Object(l.c)([r.a], t.prototype, "Cancel", null),
          (t = Object(l.c)([s.observer], t))
        );
      })(u.Component),
      g = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(l.d)(t, e),
          (t.prototype.Cancel = function() {
            this.props.onCancel && this.props.onCancel(),
              this.props.closeModal && this.props.closeModal();
          }),
          (t.prototype.OK = function() {
            this.props.bOKDisabled ||
              (this.props.onOK && this.props.onOK(),
              this.props.closeModal && this.props.closeModal());
          }),
          (t.prototype.render = function() {
            return u.createElement(
              _,
              {
                onEscKeypress: this.Cancel,
                bDestructiveWarning: this.props.bDestructiveWarning,
                bDisableBackgroundDismiss: this.props.bDisableBackgroundDismiss
              },
              u.createElement(
                m.e,
                {
                  classNameContent: Object(h.a)(
                    "GenericConfirmDialog",
                    this.props.bAllowFullSize && "DialogContentFullSize",
                    this.props.className
                  ),
                  onSubmit: this.OK,
                  bCenterVertically: !0
                },
                this.props.children
              )
            );
          }),
          Object(l.c)([r.a], t.prototype, "Cancel", null),
          Object(l.c)([r.a], t.prototype, "OK", null),
          (t = Object(l.c)([s.observer], t))
        );
      })(u.Component),
      E = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(l.d)(t, e),
          (t.prototype.render = function() {
            var e = Object(l.a)(
              {
                strTitle: Object(p.c)("#Error_FailureNotice"),
                strDescription: Object(p.c)("#Error_GenericFailureDescription"),
                bAlertDialog: !0,
                bDestructiveWarning: !0,
                onOK: function() {},
                onCancel: function() {}
              },
              this.props
            );
            return u.createElement(v, Object(l.a)({}, e));
          }),
          (t = Object(l.c)([s.observer], t))
        );
      })(u.Component),
      y = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(l.d)(t, e),
          (t.prototype.componentDidUpdate = function() {
            var e = this.props.ModalManager.modals;
            e && e.length
              ? document.body.classList.add(f.a.BodyNoScrollDialog)
              : document.body.classList.remove(f.a.BodyNoScrollDialog);
          }),
          (t.prototype.render = function() {
            var e = this.props.ModalManager.modals;
            if (!e || !e.length) return null;
            var r = this.props.ModalManager.active_modal,
              t = e.map(function(e, t) {
                var n = e == r ? "active" : "inactive";
                return u.createElement(
                  "div",
                  {
                    className: Object(h.a)("ModalOverlayContent", n),
                    key: n + "-" + t
                  },
                  e.element
                );
              });
            return u.createElement(
              "div",
              { className: "FullModalOverlay" },
              u.createElement("div", {
                className: "ModalOverlayContent ModalOverlayBackground"
              }),
              t
            );
          }),
          (t = Object(l.c)([s.observer], t))
        );
      })(u.Component),
      w = (function() {
        function e() {
          (this.m_bUsePopups = !0),
            (this.m_rgModals = c.observable.array(null, { deep: !1 }));
        }
        return (
          Object.defineProperty(e.prototype, "modals", {
            get: function() {
              return this.m_rgModals;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "active_modal", {
            get: function() {
              return this.m_rgModals.length
                ? this.m_rgModals[this.m_rgModals.length - 1]
                : void 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ShowModal = function(e) {
            var t = this,
              n = { element: e };
            return (
              this.m_rgModals.push(n),
              {
                Close: function() {
                  var e = t.m_rgModals.indexOf(n);
                  -1 != e && t.m_rgModals.splice(e, 1);
                }
              }
            );
          }),
          (e.prototype.SetUsePopups = function(e) {
            this.m_bUsePopups = e;
          }),
          (e.prototype.BUsePopups = function() {
            return this.m_bUsePopups;
          }),
          e
        );
      })();
    function S(e) {
      var t = k.get(e);
      return t || ((t = new w()), k.set(e, t)), t;
    }
    var k = new WeakMap();
  },
  Kw0F: function(e, t, n) {
    "use strict";
    n.d(t, "f", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return i;
      }),
      n.d(t, "a", function() {
        return a;
      }),
      n.d(t, "g", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return c;
      }),
      n.d(t, "d", function() {
        return l;
      });
    n("r64O");
    function r(e) {
      for (var t = e.length; 0 !== t; ) {
        var n = Math.floor(Math.random() * t),
          r = e[(t -= 1)];
        (e[t] = e[n]), (e[n] = r);
      }
    }
    function o(e, t) {
      return i(e, function(e) {
        return t == e;
      });
    }
    function i(e, t) {
      var n = e.findIndex(t);
      return 0 <= n && (e.splice(n, 1), !0);
    }
    function a(e, t) {
      return e.filter(function(e) {
        return t !== e;
      });
    }
    function s(e, t, n) {
      for (var r = 0, o = e.length - 1; r <= o; ) {
        var i = Math.floor((r + o) / 2),
          a = n(e[i], t);
        if (a < 0) r = i + 1;
        else if (0 < a) o = i - 1;
        else {
          if (o == i) return i;
          if (i == r) return i < o && n(t, e[i + 1]) < 0 ? i : i + 1;
          r = i;
        }
      }
      return o;
    }
    function c(e, t, n) {
      return (
        e ||
          console.error(
            "array should be defined for us to fill in the missing indexes"
          ),
        e.concat(Array(t - e.length).fill(n))
      );
    }
    function l(e, t) {
      if (t)
        for (var n = e.length - 1; 0 <= n; --n) {
          var r = e[n];
          if (t(r, n, e)) return r;
        }
    }
  },
  M1X1: function(e, t, n) {},
  Mgs7: function(e, t, n) {
    "use strict";
    var h = n("mrSG"),
      d = n("q1tI"),
      f = n("6Y59"),
      _ = n("TLQK"),
      r = n("bxiW"),
      c = n("exH9"),
      o = (n("umRa"), C("DialogHeader")),
      i = (C("DialogSubHeader"), C("DialogFooter")),
      a = C("DialogLabel _DialogLayout"),
      s = C("DialogBodyText"),
      l = C("DialogBody"),
      u = (C("DialogInnerBody"), C("DialogBodyNotificationBar")),
      p = C("DialogTwoColLayout _DialogColLayout"),
      m = C("DialogThreeColLayout _DialogColLayout");
    C("DialogTwoThirdColLayout _DialogColLayout"),
      C("DialogColumn _DialogLayout");
    function b(e) {
      var t = e.children,
        n = e.bCenterVertically,
        r = Object(h.f)(e, ["children", "bCenterVertically"]),
        o =
          "DialogContent _DialogLayout" +
          (e.className ? " " + e.className : "");
      return (
        n && (o += " _DialogCenterVertically"),
        d.createElement(
          "div",
          Object(h.a)({}, r, { className: o }),
          d.createElement("div", { className: "DialogContent_InnerWidth" }, t)
        )
      );
    }
    var v = (function(e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this;
      }
      return (
        Object(h.d)(t, e),
        (t.prototype.OnSubmit = function(e) {
          e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
        }),
        (t.prototype.render = function() {
          return d.createElement(
            "form",
            Object(h.a)({}, this.props, { onSubmit: this.OnSubmit })
          );
        }),
        Object(h.c)([r.a], t.prototype, "OnSubmit", null),
        t
      );
    })(d.Component);
    function g(e) {
      var t = e.classNameContent,
        n = e.bCenterVertically,
        r = Object(h.f)(e, ["classNameContent", "bCenterVertically"]);
      return d.createElement(
        b,
        { className: t, bCenterVertically: n },
        d.createElement(v, Object(h.a)({}, r))
      );
    }
    function E(e) {
      e.svgicon;
      var t,
        n = Object(h.f)(e, ["svgicon"]),
        r =
          "DialogButton _DialogLayout Primary" +
          (e.className ? " " + e.className : ""),
        o = void 0 !== e.svgicon;
      return (
        o && ((r += " hasSVGIcon"), (t = e.svgicon)),
        d.createElement(
          "button",
          Object(h.a)({ type: e.onClick ? "button" : "submit" }, n, {
            className: r
          }),
          o && d.createElement(t, null),
          e.children
        )
      );
    }
    function y(e) {
      e.svgicon;
      var t,
        n = Object(h.f)(e, ["svgicon"]),
        r =
          "DialogButton _DialogLayout Secondary" +
          (e.className ? " " + e.className : ""),
        o = void 0 !== e.svgicon;
      return (
        o && ((r += " hasSVGIcon"), (t = e.svgicon)),
        d.createElement(
          "button",
          Object(h.a)({ type: "button" }, n, { className: r }),
          o && d.createElement(t, null),
          e.children
        )
      );
    }
    function w(e) {
      return d.createElement(
        p,
        null,
        d.createElement(
          E,
          { onClick: e.onOK, disabled: e.bOKDisabled },
          e.strOKText || Object(_.c)("#Button_Confirm"),
          " "
        ),
        d.createElement(
          y,
          { onClick: e.onCancel },
          e.strCancelText || Object(_.c)("#Button_Cancel")
        )
      );
    }
    function S(e) {
      return d.createElement(
        m,
        null,
        d.createElement(
          E,
          { onClick: e.onOK, disabled: e.bOKDisabled },
          e.strOKText || Object(_.c)("#Button_Confirm"),
          " "
        ),
        d.createElement(
          E,
          { onClick: e.onUpdate, disabled: e.bUpdateDisabled },
          e.strUpdateText || Object(_.c)("#Button_Update"),
          " "
        ),
        d.createElement(
          y,
          { onClick: e.onCancel },
          e.strCancelText || Object(_.c)("#Button_Cancel")
        )
      );
    }
    var k = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { checked: e.checked, disabled: e.disabled }), t;
        }
        return (
          Object(h.d)(e, n),
          (e.prototype.componentDidUpdate = function(e) {
            e.checked != this.props.checked &&
              this.props.checked != this.state.checked &&
              this.setState({ checked: this.props.checked }),
              e.disabled != this.props.disabled &&
                this.props.disabled != this.state.disabled &&
                this.setState({ disabled: this.props.disabled });
          }),
          (e.prototype.shouldComponentUpdate = function(e, t) {
            return (
              e.label != this.props.label ||
              e.description != this.props.description ||
              e.onChange != this.props.onChange ||
              e.disabled != this.props.disabled ||
              e.checked != this.state.checked ||
              t.checked != this.state.checked
            );
          }),
          Object.defineProperty(e.prototype, "checked", {
            get: function() {
              return this.state.checked;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.Toggle = function() {
            if (!this.props.disabled) {
              var e = !this.state.checked;
              this.setState({ checked: e }),
                this.props.onChange && this.props.onChange(e);
            }
          }),
          (e.prototype.KeyDown = function(e) {
            32 == e.keyCode &&
              (this.Toggle(), e.preventDefault(), e.stopPropagation());
          }),
          Object(h.c)([r.a], e.prototype, "Toggle", null),
          Object(h.c)([r.a], e.prototype, "KeyDown", null),
          e
        );
      })(d.Component),
      D = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(h.d)(t, e),
          (t.prototype.render = function() {
            var e = "DialogCheckbox" + (this.state.checked ? " Active" : "");
            return (
              1 == this.state.disabled && (e += " Disabled"),
              this.props.label
                ? d.createElement(
                    "div",
                    {
                      className:
                        "DialogCheckbox_Container _DialogLayout " +
                        (this.props.classname ? this.props.classname : ""),
                      tabIndex: this.props.tabIndex || 0,
                      onClick: this.Toggle
                    },
                    d.createElement(
                      "div",
                      { className: e },
                      d.createElement(f.f, {
                        color: this.props.color,
                        highlightColor: this.props.highlightColor
                      })
                    ),
                    d.createElement(
                      "div",
                      { className: "DialogToggle_Label" },
                      d.createElement("span", null, this.props.label),
                      this.props.tooltip &&
                        d.createElement(
                          "span",
                          { "data-tooltip-text": this.props.tooltip },
                          " (?)"
                        )
                    ),
                    d.createElement("div", { style: { clear: "left" } }),
                    this.props.description &&
                      d.createElement(
                        "div",
                        { className: "DialogToggle_Description" },
                        this.props.description
                      )
                  )
                : d.createElement(
                    "div",
                    {
                      className: e,
                      onClick: this.Toggle,
                      tabIndex: this.props.tabIndex || 0
                    },
                    d.createElement(f.f, null)
                  )
            );
          }),
          t
        );
      })(k);
    function C(n) {
      return function(e) {
        var t = n + (e.className ? " " + e.className : "");
        return d.createElement("div", Object(h.a)({}, e, { className: t }));
      };
    }
    var O = n("hJxo"),
      L = n("r64O"),
      x = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            t.CheckProps(e),
            (t.state = {
              m_CopiedYPos: 0,
              m_bPlayingCopiedAnimation: !1,
              m_bCompletedCopiedAnimation: !1,
              m_bNumberBelowMinRange: !1,
              m_bNumberAboveMaxRange: !1,
              m_bIsNotNumeric: !1,
              m_bIsInvalidURL: !1,
              m_bIsInvalidEmail: !1
            }),
            t
          );
        }
        return (
          Object(h.d)(e, n),
          (e.prototype.componentDidUpdate = function(e) {
            this.CheckProps(this.props);
          }),
          (e.prototype.OnInputRef = function(e) {
            (this.m_elInput = e),
              this.m_elInput &&
                this.props.focusOnMount &&
                this.m_elInput.focus();
          }),
          Object.defineProperty(e.prototype, "element", {
            get: function() {
              return this.m_elInput;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "value", {
            get: function() {
              return this.m_elInput && this.m_elInput.value;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.validateUrl = function(e) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
              e
            );
          }),
          (e.prototype.validateEmail = function(e) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              e.toLowerCase()
            );
          }),
          (e.prototype.Validate = function() {
            this.setState({
              m_bNumberBelowMinRange:
                null !== this.props.rangeMin &&
                void 0 !== this.props.rangeMin &&
                Number(this.m_elInput.value) < this.props.rangeMin,
              m_bNumberAboveMaxRange:
                null !== this.props.rangeMax &&
                void 0 !== this.props.rangeMax &&
                Number(this.m_elInput.value) > this.props.rangeMax,
              m_bIsNotNumeric:
                1 == this.props.mustBeNumeric &&
                isNaN(Number(this.m_elInput.value)),
              m_bIsInvalidURL:
                1 == this.props.mustBeURL &&
                !this.validateUrl(this.m_elInput.value),
              m_bIsInvalidEmail:
                1 == this.props.mustBeEmail &&
                !this.validateEmail(this.m_elInput.value)
            });
          }),
          (e.prototype.OnChanged = function(e) {
            this.props.onChange && this.props.onChange(e), this.Validate();
          }),
          (e.prototype.OnCopyClick = function(e) {
            var t = this;
            if (this.m_elInput) {
              this.m_elInput.select();
              var n = this.m_elInput.ownerDocument;
              if (n.queryCommandEnabled("copy")) {
                n.execCommand("copy"),
                  e.currentTarget.focus(),
                  this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel();
                this.setState({ m_bCompletedCopiedAnimation: !1 }),
                  this.setState({ m_CopiedYPos: -4 }, function() {
                    (t.m_CopiedAnimation = new O.b(
                      t,
                      { m_CopiedYPos: -24 },
                      {
                        msDuration: 300,
                        timing: "sine",
                        setStateOnComplete: { m_bCompletedCopiedAnimation: !0 }
                      }
                    )),
                      t.m_CopiedAnimation.Start();
                  });
              }
            }
          }),
          (e.prototype.OnClearClick = function(e) {
            this.m_elInput &&
              this.m_elInput.value &&
              (Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "value"
              ).set.call(this.m_elInput, ""),
              this.m_elInput.dispatchEvent(
                new Event("input", { bubbles: !0 })
              ));
          }),
          (e.prototype.CheckProps = function(e) {
            Object(L.a)(
              !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
              "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input."
            );
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = e.label,
              n = e.explainer,
              r = e.bShowCopyAction,
              o = e.bShowClearAction,
              i = e.bAlwaysShowClearAction,
              a = (e.tooltip,
              Object(h.f)(e, [
                "label",
                "explainer",
                "bShowCopyAction",
                "bShowClearAction",
                "bAlwaysShowClearAction",
                "tooltip"
              ])),
              s =
                "DialogInput DialogInputPlaceholder DialogTextInputBase" +
                (a.className ? " " + a.className : ""),
              c = "copiedAnimation",
              l = this.state.m_bCompletedCopiedAnimation;
            this.m_CopiedAnimation && (c = "copiedAnimation animationPlaying"),
              l && (c = "copiedAnimation animationComplete");
            var u = {};
            void 0 !== this.state.m_CopiedYPos &&
              (u.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
            var p = void 0;
            n &&
              (p = d.createElement(
                "div",
                { className: "DialogLabelExplainer" },
                n
              ));
            var m = d.createElement(
              d.Fragment,
              null,
              d.createElement(
                "div",
                { className: "DialogInput_Wrapper _DialogLayout" },
                d.createElement(
                  "input",
                  Object(h.a)(
                    { type: a.bIsPassword ? "password" : "text" },
                    a,
                    {
                      className: s,
                      ref: this.OnInputRef,
                      onChange: this.OnChanged
                    }
                  )
                ),
                r &&
                  d.createElement(
                    "div",
                    { className: "displayRow" },
                    d.createElement(
                      y,
                      {
                        className: "DialogInput_CopyAction Primary",
                        onClick: this.OnCopyClick
                      },
                      Object(_.c)("#Button_CopyLink")
                    ),
                    d.createElement(
                      "div",
                      { style: u, className: c },
                      "Link Copied"
                    )
                  ),
                (i || (o && a.value)) &&
                  d.createElement(
                    "div",
                    {
                      className: "DialogInput_ClearAction",
                      onClick: this.OnClearClick
                    },
                    d.createElement(f.G, null)
                  )
              ),
              p
            );
            return t
              ? d.createElement(
                  "div",
                  { className: "DialogInputLabelGroup _DialogLayout " },
                  d.createElement(
                    "label",
                    null,
                    d.createElement(
                      "div",
                      { className: "DialogLabel" },
                      t,
                      " ",
                      this.props.tooltip &&
                        d.createElement(
                          "span",
                          { "data-tooltip-text": this.props.tooltip },
                          " (?)"
                        ),
                      d.createElement(
                        "span",
                        { className: "DialogInputRequirementLabel" },
                        this.props.requiredLabel
                      ),
                      " "
                    ),
                    m,
                    this.state.m_bNumberBelowMinRange
                      ? d.createElement(
                          "div",
                          null,
                          " ",
                          Object(_.c)("#Input_Error_NumberTooSmall"),
                          " "
                        )
                      : null,
                    this.state.m_bNumberAboveMaxRange
                      ? d.createElement(
                          "div",
                          null,
                          " ",
                          Object(_.c)("#Input_Error_NumberTooLarge"),
                          " "
                        )
                      : null,
                    this.state.m_bIsInvalidURL
                      ? d.createElement(
                          "div",
                          null,
                          " ",
                          Object(_.c)("#Input_Error_MustBeURL"),
                          " "
                        )
                      : null,
                    this.state.m_bIsInvalidEmail
                      ? d.createElement(
                          "div",
                          null,
                          " ",
                          Object(_.c)("#Input_Error_MustBeEmail"),
                          " "
                        )
                      : null,
                    this.state.m_bIsNotNumeric
                      ? d.createElement(
                          "div",
                          null,
                          " ",
                          Object(_.c)("#Input_Error_MustBeNumber"),
                          " "
                        )
                      : null
                  )
                )
              : m;
          }),
          Object(h.c)([r.a], e.prototype, "OnInputRef", null),
          Object(h.c)([r.a], e.prototype, "OnChanged", null),
          Object(h.c)([r.a], e.prototype, "OnCopyClick", null),
          Object(h.c)([r.a], e.prototype, "OnClearClick", null),
          e
        );
      })(d.PureComponent),
      M = (d.Component, n("TtDX")),
      I = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.state = {
              iSelectedOption: t.FindActiveOptionIndex(e.selectedOption),
              bOpened: !1
            }),
            t
          );
        }
        return (
          Object(h.d)(e, n),
          (e.prototype.FindAndSetActiveOption = function(e) {
            var t = this.FindActiveOptionIndex(e);
            t !== this.state.iSelectedOption &&
              this.setState({ iSelectedOption: t });
          }),
          (e.prototype.FindActiveOptionIndex = function(e) {
            for (var t = 0; t < this.props.rgOptions.length; t++)
              if (this.props.rgOptions[t].data === e) return t;
          }),
          Object.defineProperty(e.prototype, "value", {
            get: function() {
              return void 0 !== this.state.iSelectedOption
                ? this.props.rgOptions[this.state.iSelectedOption]
                : void 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.SetSelectedOption = function(e) {
            null != e
              ? this.FindAndSetActiveOption(e)
              : this.setState({ iSelectedOption: void 0 });
          }),
          (e.prototype.shouldComponentUpdate = function(e, t, n) {
            if (e.selectedOption != this.props.selectedOption) {
              this.FindActiveOptionIndex(e.selectedOption);
              if (this.state.iSelectedOption !== t.iSelectedOption) return !0;
            }
            if (e.disabled != this.props.disabled) return !0;
            if (e.postDropdownElement != this.props.postDropdownElement)
              return !0;
            if (e.postOptionElement != this.props.postOptionElement) return !0;
            if (
              t.bOpened !== this.state.bOpened ||
              t.iSelectedOption !== this.state.iSelectedOption
            )
              return !0;
            for (
              var r = 0,
                o = [
                  "label",
                  "tooltip",
                  "selectedOption",
                  "tabIndex",
                  "onChange",
                  "strDefaultLabel"
                ];
              r < o.length;
              r++
            ) {
              var i = o[r];
              if (e[i] !== this.props[i]) return !0;
            }
            return !(!this.state.bOpened || !this.DoOptionsDiffer(e.rgOptions));
          }),
          (e.prototype.DoOptionsDiffer = function(e) {
            if (e.length != this.props.rgOptions.length) return !0;
            for (var t = 0; t < e.length; t++)
              if (e[t].label !== this.props.rgOptions[t].label) return !0;
            return !1;
          }),
          (e.prototype.componentDidUpdate = function(e) {
            e.selectedOption !== this.props.selectedOption &&
              this.FindAndSetActiveOption(this.props.selectedOption),
              this.DoOptionsDiffer(e.rgOptions) &&
                (this.HideMenu(), (this.m_iMenuInstance = void 0));
          }),
          (e.prototype.OnInputRef = function(e) {
            this.m_elInput = e;
          }),
          (e.prototype.ToggleMenu = function() {
            this.state.bOpened ? this.HideMenu() : this.ShowMenu();
          }),
          (e.prototype.OnItemSelected = function(e, t) {
            this.HideMenu(),
              this.setState({ iSelectedOption: e }),
              this.props.onChange &&
                this.props.onChange(
                  void 0 !== e ? this.props.rgOptions[e] : void 0,
                  this
                );
          }),
          (e.prototype.ShowMenu = function() {
            if (this.m_iMenuInstance) this.m_iMenuInstance.Show();
            else {
              var e = "DialogMenuPosition";
              this.props.strDropDownClassName &&
                (e += " " + this.props.strDropDownClassName);
              var t = Object(h.a)(
                {
                  bOverlapHorizontal: !0,
                  bMatchWidth: !0,
                  bFitToWindow: !0,
                  strClassName: e,
                  bDisableMouseOverlay: this.props.bDisableMouseOverlay
                },
                this.props.contextMenuPositionOptions
              );
              (this.m_iMenuInstance = Object(M.a)(
                d.createElement(T, {
                  rgOptions: this.props.rgOptions,
                  fnOnItemSelected: this.OnItemSelected,
                  strDropDownItemClassName: this.props.strDropDownItemClassName,
                  renderMenuContainer: this.props.renderMenuContainer,
                  renderMenuItem: this.props.renderMenuItem
                }),
                this.m_elInput,
                t
              )),
                this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
            }
            this.setState({ bOpened: !0 });
          }),
          (e.prototype.HideMenu = function() {
            this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
              this.setState({ bOpened: !1 });
          }),
          (e.prototype.render = function() {
            var e =
                void 0 !== this.state.iSelectedOption &&
                this.props.rgOptions[this.state.iSelectedOption],
              t = e ? e.label : this.props.strDefaultLabel,
              n = "DialogDropDown _DialogInputContainer",
              r = "DialogInputLabelGroup _DialogLayout";
            this.state.bOpened && (n += " Active"),
              this.props.disabled && (n += " Disabled"),
              this.props.strClassName && (r += " " + this.props.strClassName);
            var o = d.createElement(
              d.Fragment,
              null,
              this.props.postDropdownElement,
              !this.props.disabled &&
                d.createElement(
                  "div",
                  { className: "DialogDropDown_Arrow" },
                  d.createElement(f.h, null)
                ),
              this.props.postOptionElement,
              d.createElement(
                "div",
                { className: "DialogDropDown_CurrentDisplay" },
                t
              )
            );
            return d.createElement(
              "div",
              { className: r },
              this.props.label &&
                d.createElement(
                  "div",
                  { className: "DialogLabel" },
                  this.props.label,
                  Boolean(this.props.tooltip) &&
                    d.createElement(
                      "span",
                      { "data-tooltip-text": this.props.tooltip },
                      " (?)"
                    )
                ),
              this.props.fnRenderControl
                ? this.props.fnRenderControl({
                    className: n,
                    tabIndex: this.props.tabIndex || 0,
                    onClick: this.props.disabled ? void 0 : this.ToggleMenu,
                    htmlElementRef: this.OnInputRef,
                    children: o
                  })
                : d.createElement(
                    "div",
                    {
                      className: n,
                      tabIndex: this.props.tabIndex || 0,
                      onClick: this.props.disabled ? void 0 : this.ToggleMenu,
                      ref: this.OnInputRef
                    },
                    o
                  )
            );
          }),
          Object(h.c)([r.a], e.prototype, "OnInputRef", null),
          Object(h.c)([r.a], e.prototype, "ToggleMenu", null),
          Object(h.c)([r.a], e.prototype, "OnItemSelected", null),
          Object(h.c)([r.a], e.prototype, "ShowMenu", null),
          Object(h.c)([r.a], e.prototype, "HideMenu", null),
          e
        );
      })(d.Component),
      T = (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (t.state = { iFocus: 0 }), t;
        }
        return (
          Object(h.d)(e, n),
          (e.prototype.OnItemClicked = function(e) {
            var t = parseInt(
              e.currentTarget.getAttribute("data-dropdown-index")
            );
            (t || 0 === t) &&
              0 <= t &&
              t < this.props.rgOptions.length &&
              this.props.fnOnItemSelected(t, this.props.rgOptions[t]);
          }),
          (e.prototype.render = function() {
            var n = this,
              r = "DialogDropDownMenu_Item";
            this.props.strDropDownItemClassName &&
              (r += " " + this.props.strDropDownItemClassName);
            var o = this.props.renderMenuItem || "div",
              e = this.props.rgOptions.map(function(e, t) {
                return d.createElement(
                  o,
                  {
                    className: r + " " + e.strOptionClass,
                    key: t,
                    "data-dropdown-index": t,
                    onClick: n.OnItemClicked
                  },
                  e.label
                );
              }),
              t = this.props.renderMenuContainer || "div";
            return d.createElement(
              t,
              { className: "DialogDropDownMenu _DialogInputContainer" },
              e
            );
          }),
          Object(h.c)([r.a], e.prototype, "OnItemClicked", null),
          e
        );
      })(d.Component),
      R = n("2vnA"),
      j = n("sUmc"),
      N = n("Kw0F"),
      P = n("YyVH"),
      A = n("UPxs");
    d.Component;
    function B(e, t, n, r) {
      return r
        ? n && e > n.left && e < n.right && t > n.top && t < n.bottom
        : n && e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
    }
    var F = (function() {
        function e() {
          (this.m_embeddedElement = new j.a("DragGhosts")),
            (this.m_rgDropRegions = []),
            (this.m_rgActiveDropRegions = []);
        }
        return (
          (e.prototype.RegisterDropRegion = function(e) {
            this.m_rgDropRegions.push(e),
              this.m_activeDraggable &&
                e.BAcceptDraggable(this.m_activeDraggable) &&
                (e.OnDragStarted(this.m_activeDraggable),
                this.m_rgActiveDropRegions.push(e));
          }),
          (e.prototype.UnregisterDropRegion = function(e) {
            N.b(this.m_rgDropRegions, e),
              N.b(this.m_rgActiveDropRegions, e),
              this.m_activeDropRegion == e &&
                ((this.m_activeDropRegion = void 0),
                this.m_activeDraggable && this.ShowDragGhost());
          }),
          (e.prototype.OnDragGhostRef = function(e) {
            this.m_dragGhost = e;
          }),
          (e.prototype.ShowDragGhost = function() {
            var e = this.m_activeDraggable.renderDragGhost(),
              t = Object(c.a)(
                e.props.className,
                !!this.m_activeDropRegion && "DraggedOverActiveDrop"
              ),
              n = d.cloneElement(e, { ref: this.OnDragGhostRef, className: t });
            this.m_embeddedElement.ShowElement(
              this.m_activeDraggable.GetDragDocument(),
              n,
              this.m_activeDraggable
            );
          }),
          (e.prototype.HideDragGhost = function() {
            this.m_embeddedElement.HideElement(
              this.m_activeDraggable.GetDragDocument(),
              this.m_activeDraggable
            );
          }),
          (e.prototype.OnDragStart = function(e) {
            (this.m_activeDraggable = e), (this.m_rgActiveDropRegions = []);
            for (var t = 0, n = this.m_rgDropRegions; t < n.length; t++) {
              var r = n[t];
              r.BAcceptDraggable(e) &&
                (r.OnDragStarted(e), this.m_rgActiveDropRegions.push(r));
            }
            this.ShowDragGhost();
          }),
          (e.prototype.EndDrag = function() {
            if (this.m_activeDraggable) {
              this.HideDragGhost(),
                this.m_activeDropRegion &&
                  this.m_activeDropRegion.OnDrop(this.m_activeDraggable);
              for (
                var e = 0, t = this.m_rgActiveDropRegions;
                e < t.length;
                e++
              ) {
                t[e].OnDragEnded(this.m_activeDraggable);
              }
              (this.m_activeDraggable = void 0),
                (this.m_dropGhost = void 0),
                (this.m_rgActiveDropRegions = []);
            }
          }),
          (e.prototype.FindBestActiveDropRegionForPoint = function(e, t) {
            var n,
              r = this.m_activeDraggable.GetDragDocument();
            if ("elementsFromPoint" in r) n = r.elementsFromPoint(e, t);
            else if ("msElementsFromPoint" in r) {
              var o = r.msElementsFromPoint;
              n = Array.from(o(e, t));
            }
            if (n) {
              var i = new Map();
              this.m_rgActiveDropRegions.forEach(function(e) {
                return i.set(e.GetElement(), e);
              });
              for (var a = 0, s = n; a < s.length; a++) {
                var c = s[a],
                  l = i.get(c);
                if (l) return l;
              }
            } else {
              if (
                this.m_activeDropRegion &&
                this.m_activeDropRegion.BDraggableInRegion(
                  e,
                  t,
                  this.m_activeDraggable
                )
              )
                return this.m_activeDropRegion;
              for (var u = this.m_rgActiveDropRegions.length - 1; 0 <= u; u--) {
                var p = this.m_rgActiveDropRegions[u];
                if (p.BDraggableInRegion(e, t, this.m_activeDraggable))
                  return p;
              }
            }
            return null;
          }),
          (e.prototype.OnDrag = function(e, t, n) {
            var r = this,
              o = void 0 === t ? 0 : t - this.m_dragGhost.state.clientX,
              i = void 0 === n ? 0 : n - this.m_dragGhost.state.clientY;
            if (
              (e.props.bEnableHTMLDrag &&
                this.m_dragOffWindowTimer &&
                window.clearTimeout(this.m_dragOffWindowTimer),
              this.m_dragGhost &&
                (this.m_dragGhost.setState({
                  clientX: t,
                  clientY: n,
                  clientXDelta: o,
                  clientYDelta: i,
                  bVisible: !0
                }),
                e.props.bEnableHTMLDrag && (o || i)))
            ) {
              var a = t + o,
                s = n + i,
                c = e.GetDragDocument().body.getBoundingClientRect();
              if (B(t, n, c) && !B(a, s, c, !0)) {
                var l = P.c(a, c.left, c.right, c.left - 200, c.right + 200),
                  u = P.c(s, c.top, c.bottom, c.top - 100, c.bottom + 100);
                this.m_dragOffWindowTimer = window.setTimeout(function() {
                  e == r.m_activeDraggable && r.OnDrag(e, l, u);
                }, 50);
              }
            }
            var p = this.FindBestActiveDropRegionForPoint(t, n);
            !!this.m_activeDropRegion != !!p &&
              (this.ShowDragGhost(),
              this.m_dropGhost ||
                (this.m_dropGhost = this.m_activeDraggable.renderDropGhost())),
              this.m_activeDropRegion &&
                this.m_activeDropRegion != p &&
                this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
              p &&
                this.m_activeDropRegion != p &&
                p.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
              (this.m_activeDropRegion = p),
              this.m_activeDropRegion &&
                this.m_activeDropRegion.OnDragMove(
                  t,
                  n,
                  this.m_activeDraggable
                );
          }),
          Object(h.c)([r.a], e.prototype, "OnDragGhostRef", null),
          e
        );
      })(),
      G = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.m_DragInfo = {
              bStarted: !1,
              startClientX: void 0,
              startClientY: void 0,
              startOffsetX: void 0,
              startOffsetY: void 0,
              startWidth: void 0,
              startHeight: void 0,
              ownerWin: void 0
            }),
            (e.m_divRef = d.createRef()),
            e
          );
        }
        return (
          Object(h.d)(e, t),
          (e.prototype.GetDragDocument = function() {
            return (
              this.m_DragInfo.ownerWin && this.m_DragInfo.ownerWin.document
            );
          }),
          (e.prototype.RecordDragStart = function(e, t, n) {
            (this.m_DragInfo.startClientX = t),
              (this.m_DragInfo.startClientY = n);
            var r = e.getBoundingClientRect();
            (this.m_DragInfo.startOffsetX = t - r.left),
              (this.m_DragInfo.startOffsetY = n - r.top),
              (this.m_DragInfo.startWidth = r.width),
              (this.m_DragInfo.startHeight = r.height),
              (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView);
          }),
          (e.prototype.ProcessDragMove = function(e) {
            var t = (function(e) {
                if ("touches" in e) {
                  var t = e;
                  return [t.touches[0].clientX, t.touches[0].clientY];
                }
                return [e.clientX, e.clientY];
              })(e),
              n = t[0],
              r = t[1];
            if (this.m_DragInfo.bStarted) {
              if (this.props.bEnableHTMLDrag && 0 == n && 0 == r) return;
              this.props.coordinator.OnDrag(this, n, r);
            } else
              25 <=
                Math.pow(n - this.m_DragInfo.startClientX, 2) +
                  Math.pow(r - this.m_DragInfo.startClientY, 2) &&
                ((this.m_DragInfo.bStarted = !0),
                this.forceUpdate(),
                this.props.fnOnDragStart && this.props.fnOnDragStart(),
                this.props.coordinator.OnDragStart(this),
                this.props.coordinator.OnDrag(this, n, r));
          }),
          (e.prototype.OnMouseDown = function(e) {
            this.m_DragInfo.bStarted ||
              0 != e.button ||
              (this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
              this.m_DragInfo.ownerWin.addEventListener(
                "mousemove",
                this.ProcessDragMove
              ),
              this.m_DragInfo.ownerWin.addEventListener(
                "mouseup",
                this.OnMouseUp
              ));
          }),
          (e.prototype.OnMouseUp = function(e) {
            this.m_DragInfo.ownerWin.removeEventListener(
              "mousemove",
              this.ProcessDragMove
            ),
              this.m_DragInfo.ownerWin.removeEventListener(
                "mouseup",
                this.OnMouseUp
              ),
              this.ResetDragState();
          }),
          (e.prototype.OnTouchStart = function(e) {
            this.m_DragInfo.bStarted ||
              (this.RecordDragStart(
                e.currentTarget,
                e.touches[0].clientX,
                e.touches[0].clientY
              ),
              this.m_DragInfo.ownerWin.addEventListener(
                "touchmove",
                this.ProcessDragMove
              ),
              this.m_DragInfo.ownerWin.addEventListener(
                "touchend",
                this.OnTouchEnd
              ));
          }),
          (e.prototype.OnTouchEnd = function(e) {
            this.m_DragInfo.ownerWin.removeEventListener(
              "touchmove",
              this.ProcessDragMove
            ),
              this.m_DragInfo.ownerWin.removeEventListener(
                "touchend",
                this.OnTouchEnd
              ),
              this.ResetDragState();
          }),
          (e.prototype.ResetDragState = function() {
            this.m_DragInfo.bStarted &&
              (this.props.coordinator.EndDrag(),
              this.props.fnOnDragEnd && this.props.fnOnDragEnd()),
              (this.m_DragInfo.bStarted = !1),
              (this.m_DragInfo.startClientX = void 0),
              (this.m_DragInfo.startClientY = void 0),
              (this.m_DragInfo.startOffsetX = void 0),
              (this.m_DragInfo.startOffsetY = void 0),
              (this.m_DragInfo.ownerWin = void 0),
              this.forceUpdate();
          }),
          (e.prototype.OnHTMLDragStart = function(n) {
            (n.dataTransfer.effectAllowed = "copyMove"),
              this.props.strHTMLDragData &&
                this.props.strHTMLDragData.forEach(function(e, t) {
                  return n.dataTransfer.setData(t, e);
                }),
              n.dataTransfer.getData("text/plain") ||
                n.dataTransfer.setData(
                  "text/plain",
                  this.props.data.toString()
                );
            var e = new Image();
            n.dataTransfer.setDragImage(e, 0, 0),
              this.RecordDragStart(n.currentTarget, n.clientX, n.clientY);
          }),
          (e.prototype.OnHTMLDragEnd = function() {
            this.ResetDragState();
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = (e.coordinator, e.data, e.bEnableHTMLDrag),
              n = (e.strHTMLDragData,
              e.fnOnDragStart,
              e.fnOnDragEnd,
              e.fnRenderDragGhost,
              e.fnRenderDropGhost,
              e.className),
              r = e.strActiveClassName,
              o = e.children,
              i = Object(h.f)(e, [
                "coordinator",
                "data",
                "bEnableHTMLDrag",
                "strHTMLDragData",
                "fnOnDragStart",
                "fnOnDragEnd",
                "fnRenderDragGhost",
                "fnRenderDropGhost",
                "className",
                "strActiveClassName",
                "children"
              ]),
              a = {},
              s = n || "DialogDraggable";
            return (
              this.m_DragInfo.bStarted
                ? ((s = Object(c.a)(s, r || "DraggedOut")),
                  t &&
                    (a = {
                      onDrag: this.ProcessDragMove,
                      onDragEnd: this.OnHTMLDragEnd
                    }))
                : (a = t
                    ? {
                        onDragStart: this.OnHTMLDragStart,
                        onDrag: this.ProcessDragMove,
                        onDragEnd: this.OnHTMLDragEnd
                      }
                    : {
                        onMouseDown: this.OnMouseDown,
                        onTouchStart: this.OnTouchStart
                      }),
              d.createElement(
                "div",
                Object(h.a)({ ref: this.m_divRef, className: s }, a, i, {
                  draggable: t
                }),
                o
              )
            );
          }),
          (e.prototype.renderDropGhost = function() {
            return this.props.fnRenderDropGhost
              ? this.props.fnRenderDropGhost()
              : d.createElement(H, { elContent: this.GetClone() });
          }),
          (e.prototype.renderDragGhost = function() {
            return this.props.fnRenderDragGhost
              ? this.props.fnRenderDragGhost()
              : d.createElement(U, {
                  elContent: this.GetClone(),
                  offsetX: this.m_DragInfo.startOffsetX,
                  offsetY: this.m_DragInfo.startOffsetY,
                  width: this.m_DragInfo.startWidth,
                  height: this.m_DragInfo.startHeight
                });
          }),
          (e.prototype.GetClone = function() {
            var e,
              t = this.m_divRef.current;
            if (t && t.childElementCount)
              if (1 == t.childElementCount)
                e = t.firstElementChild.cloneNode(!0);
              else {
                e = document.createElement("div");
                for (var n = t.firstChild; n; n = n.nextSibling)
                  e.appendChild(n.cloneNode(!0));
              }
            return e;
          }),
          Object(h.c)([r.a], e.prototype, "ProcessDragMove", null),
          Object(h.c)([r.a], e.prototype, "OnMouseDown", null),
          Object(h.c)([r.a], e.prototype, "OnMouseUp", null),
          Object(h.c)([r.a], e.prototype, "OnTouchStart", null),
          Object(h.c)([r.a], e.prototype, "OnTouchEnd", null),
          Object(h.c)([R.action], e.prototype, "ResetDragState", null),
          Object(h.c)([r.a], e.prototype, "OnHTMLDragStart", null),
          Object(h.c)([r.a], e.prototype, "OnHTMLDragEnd", null),
          e
        );
      })(d.Component),
      H = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(h.d)(t, e),
          (t.prototype.OnRef = function(e) {
            e && e.appendChild(this.props.elContent);
          }),
          (t.prototype.render = function() {
            return d.createElement("div", {
              className: "DialogDraggable_DropGhost",
              ref: this.OnRef
            });
          }),
          Object(h.c)([r.a], t.prototype, "OnRef", null),
          t
        );
      })(d.Component),
      U = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.state = {
              clientX: void 0,
              clientY: void 0,
              bVisible: !0,
              clientXDelta: void 0,
              clientYDelta: void 0
            }),
            e
          );
        }
        return (
          Object(h.d)(e, t),
          (e.prototype.OnRef = function(e) {
            e && e.appendChild(this.props.elContent);
          }),
          (e.prototype.CalculateRotationDegrees = function(e) {
            return !e || Math.abs(e) < 4
              ? 0
              : (0 < e ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
          }),
          (e.prototype.render = function() {
            if (
              !this.state.bVisible ||
              void 0 === this.state.clientX ||
              void 0 === this.state.clientY
            )
              return d.createElement("div", null);
            var e = {
                left: this.state.clientX - (this.props.offsetX || 0),
                top: this.state.clientY - (this.props.offsetY || 0),
                width: this.props.width || "auto",
                height: this.props.height || "auto",
                perspective: "600px"
              },
              t = P.c(
                this.CalculateRotationDegrees(this.state.clientYDelta),
                -90,
                90,
                2,
                0
              ),
              n = {
                transform:
                  "rotateX(" +
                  this.CalculateRotationDegrees(-1 * this.state.clientYDelta) +
                  "deg) rotateY( " +
                  this.CalculateRotationDegrees(this.state.clientXDelta) +
                  "deg)",
                transition: "transform .16s ease-out, filter .16s ease-out",
                filter: "brightness(" + t + ")"
              },
              r = this.props.className || "DialogDraggable_DragGhost";
            return d.createElement(
              "div",
              { className: r, style: e },
              d.createElement("div", { ref: this.OnRef, style: n })
            );
          }),
          Object(h.c)([r.a], e.prototype, "OnRef", null),
          e
        );
      })(d.Component),
      W = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(h.d)(t, e),
          (t.prototype.BDraggableInRegion = function(e, t, n) {
            var r = this.GetClientRect();
            return (
              !!r &&
              (e >= r.left &&
                e <= r.right &&
                t >= r.top - 20 &&
                t <= r.bottom + 20)
            );
          }),
          t
        );
      })(
        (function(n) {
          function e(e) {
            var t = n.call(this, e) || this;
            return (t.m_divRef = d.createRef()), (t.state = {}), t;
          }
          return (
            Object(h.d)(e, n),
            (e.prototype.componentDidMount = function() {
              this.props.coordinator.RegisterDropRegion(this);
            }),
            (e.prototype.componentWillUnmount = function() {
              this.props.coordinator.UnregisterDropRegion(this);
            }),
            (e.prototype.OnDragStarted = function(e) {
              this.setState({ bDraggableActive: !0 });
            }),
            (e.prototype.OnDragEnded = function(e) {
              this.setState({ bDraggableActive: !1 });
            }),
            (e.prototype.OnDragEnter = function(e, t) {
              this.setState({ dropGhost: t }),
                this.props.fnOnDragEnter && this.props.fnOnDragEnter(e);
            }),
            (e.prototype.OnDragLeave = function(e) {
              this.setState({ dropGhost: void 0 }),
                this.props.fnOnDragLeave && this.props.fnOnDragLeave(e);
            }),
            (e.prototype.OnDragMove = function(e, t, n) {}),
            (e.prototype.OnDrop = function(e) {
              this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e);
            }),
            (e.prototype.BAcceptDraggable = function(e) {
              return (
                !this.props.fnBAcceptDraggable ||
                this.props.fnBAcceptDraggable(e)
              );
            }),
            (e.prototype.BDraggableInRegion = function(e, t, n) {
              return B(e, t, this.GetClientRect());
            }),
            (e.prototype.GetElement = function() {
              return this.m_divRef.current;
            }),
            (e.prototype.GetClientRect = function() {
              return (
                this.m_divRef.current &&
                this.m_divRef.current.getBoundingClientRect()
              );
            }),
            (e.prototype.render = function() {
              var e = this.props,
                t = (e.coordinator,
                e.fnBAcceptDraggable,
                e.fnOnDrop,
                e.fnOnDragEnter,
                e.fnOnDragLeave,
                e.className),
                n = e.strActiveClassName,
                r = e.children,
                o = Object(h.f)(e, [
                  "coordinator",
                  "fnBAcceptDraggable",
                  "fnOnDrop",
                  "fnOnDragEnter",
                  "fnOnDragLeave",
                  "className",
                  "strActiveClassName",
                  "children"
                ]),
                i = Object(c.a)(
                  t || "DialogDropRegion",
                  this.state.bDraggableActive && (n || "Active")
                );
              return d.createElement(
                A.a,
                Object(h.a)(
                  {
                    navStop: !!o.onClick,
                    htmlElementRef: this.m_divRef,
                    className: i
                  },
                  o
                ),
                this.state.dropGhost,
                r
              );
            }),
            e
          );
        })(d.Component)
      ),
      V = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return Object(h.d)(t, e), t;
      })(d.Component);
    d.Component, d.Component;
    n.d(t, "h", function() {
      return o;
    }),
      n.d(t, "g", function() {
        return i;
      }),
      n.d(t, "j", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "a", function() {
        return l;
      }),
      n.d(t, "e", function() {
        return g;
      }),
      n.d(t, "m", function() {
        return E;
      }),
      n.d(t, "c", function() {
        return y;
      }),
      n.d(t, "k", function() {
        return w;
      }),
      n.d(t, "l", function() {
        return S;
      }),
      n.d(t, "d", function() {
        return D;
      }),
      n.d(t, "i", function() {
        return x;
      }),
      n.d(t, "f", function() {
        return I;
      });
  },
  TLQK: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return p;
    }),
      n.d(t, "g", function() {
        return s;
      }),
      n.d(t, "j", function() {
        return m;
      }),
      n.d(t, "f", function() {
        return h;
      }),
      n.d(t, "h", function() {
        return d;
      }),
      n.d(t, "i", function() {
        return b;
      }),
      n.d(t, "d", function() {
        return v;
      }),
      n.d(t, "e", function() {
        return S;
      }),
      n.d(t, "a", function() {
        return D;
      }),
      n.d(t, "b", function() {
        return C;
      });
    var l = n("mrSG"),
      u = n("q1tI"),
      c = n("Gp1o"),
      a = (n("r64O"), n("CdLH")),
      r = n("mgoM"),
      o = n("lkRc"),
      i = (function() {
        function e() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        return (
          (e.prototype.InitFromObjects = function(n, r, o, i, e) {
            var a = this;
            e || this.m_mapTokens.clear(),
              o &&
                Object.keys(o).forEach(function(e, t) {
                  a.m_mapTokens.set(e, o[e]);
                }),
              Object.keys(n).forEach(function(e, t) {
                a.m_mapTokens.set(e, n[e]);
              }),
              r &&
                Object.keys(r).forEach(function(e, t) {
                  a.m_mapTokens.has(e) || a.m_mapTokens.set(e, r[e]),
                    a.m_mapFallbackTokens.set(e, r[e]);
                }),
              i &&
                Object.keys(i).forEach(function(e, t) {
                  a.m_mapTokens.has(e) || a.m_mapTokens.set(e, i[e]),
                    a.m_mapFallbackTokens.has(e) ||
                      a.m_mapFallbackTokens.set(e, i[e]);
                });
          }),
          (e.prototype.InitDirect = function(n, r) {
            var o = this;
            this.m_mapTokens.clear(),
              this.m_mapFallbackTokens.clear(),
              Object.keys(n).forEach(function(e, t) {
                o.m_mapTokens.set(e, n[e]);
              }),
              r &&
                Object.keys(r).forEach(function(e, t) {
                  o.m_mapTokens.has(e) || o.m_mapTokens.set(e, r[e]),
                    o.m_mapFallbackTokens.set(e, r[e]);
                });
          }),
          (e.prototype.GetPreferredLocales = function() {
            return this.m_rgLocalesToUse
              ? this.m_rgLocalesToUse
              : navigator && navigator.languages
              ? navigator.languages
              : ["en-US"];
          }),
          (e.prototype.GetELanguageFallbackOrder = function() {
            var t = new Array();
            return (
              t.push(Object(r.e)(o.c.LANGUAGE)),
              (o.c.SUPPORTED_LANGUAGES || []).forEach(function(e) {
                e.value != o.c.LANGUAGE && t.push(Object(r.e)(e.value));
              }),
              t
            );
          }),
          (e.prototype.SetPreferredLocales = function(e) {
            this.m_rgLocalesToUse = e;
          }),
          (e.prototype.LocalizeString = function(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            var t = this.m_mapTokens.get(e.substring(1));
            return void 0 === t ? "" : t;
          }),
          (e.prototype.LocalizeStringFromFallback = function(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            var t = this.m_mapFallbackTokens.get(e.substring(1));
            return void 0 === t ? "" : t;
          }),
          e
        );
      })();
    function p(e) {
      for (var r = [], t = 1; t < arguments.length; t++)
        r[t - 1] = arguments[t];
      var n = C.LocalizeString(e);
      return n
        ? (0 < r.length &&
            (n = n.replace(/%(\d+)\$s/g, function(e, t) {
              if (t <= r.length && 1 <= t) {
                var n = r[t - 1];
                return String(null == n ? "" : n);
              }
              return e;
            })),
          n)
        : e;
    }
    function s(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = C.LocalizeString(e);
      if (!r) return e;
      for (var o, i = [], a = /(.*?)%(\d+)\$s/g, s = 0; (o = a.exec(r)); ) {
        (s += o[0].length), i.push(o[1]);
        var c = parseInt(o[2]);
        1 <= c && c <= t.length && i.push(t[c - 1]);
      }
      return (
        i.push(r.substr(s)),
        u.createElement.apply(u, Object(l.g)([u.Fragment, null], i))
      );
    }
    function m(e, t) {
      void 0 === t && (t = !1);
      var n = t ? "#TimeInterval_" : "#TimeSince_";
      return e >= 2 * a.d.PerYear
        ? p(n + "XYears", Math.floor(e / a.d.PerYear))
        : e >= a.d.PerYear
        ? (e -= a.d.PerYear) >= 2 * a.d.PerMonth
          ? p(n + "1YearXMonths", Math.floor(e / a.d.PerMonth))
          : p(n + "1Year")
        : e >= 2 * a.d.PerMonth
        ? p(n + "XMonths", Math.floor(e / a.d.PerMonth))
        : e >= 2 * a.d.PerWeek
        ? p(n + "XWeeks", Math.floor(e / a.d.PerWeek))
        : e >= a.d.PerWeek
        ? p(n + "1Week", Math.floor(e / a.d.PerWeek))
        : e >= 2 * a.d.PerDay
        ? p(n + "XDays", Math.floor(e / a.d.PerDay))
        : e >= a.d.PerDay
        ? (e -= a.d.PerDay) >= 2 * a.d.PerHour
          ? p(n + "1DayXHours", Math.floor(e / a.d.PerHour))
          : p(n + "1Day")
        : e >= 2 * a.d.PerHour
        ? p(n + "XHours", Math.floor(e / a.d.PerHour))
        : e >= a.d.PerHour
        ? (e -= a.d.PerHour) >= 2 * a.d.PerMinute
          ? p(n + "1HourXMinutes", Math.floor(e / a.d.PerMinute))
          : p(n + "1Hour")
        : e >= 2 * a.d.PerMinute
        ? p(n + "XMinutes", Math.floor(e / a.d.PerMinute))
        : e >= a.d.PerMinute
        ? p(n + "1Minute")
        : p(n + "LessThanAMinute");
    }
    function h(e, t) {
      var n = {
        weekday: "short",
        month: "long",
        day: "numeric",
        year: t ? void 0 : "numeric"
      };
      return new Date(1e3 * e).toLocaleDateString(C.GetPreferredLocales(), n);
    }
    function d(e) {
      var t = new Date(1e3 * e),
        n = t.setHours(0, 0, 0, 0),
        r = f.get(n);
      if (r) return r;
      return (
        (r = t.toLocaleDateString(C.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric"
        })),
        f.set(n, r),
        r
      );
    }
    var f = new Map(),
      _ = new Map();
    function b(e, t) {
      var n = new Date(),
        r = new Date(1e3 * e);
      if (r.getFullYear() != n.getFullYear()) return d(e);
      c.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
      var o = new Date();
      if ((o.setHours(0, 0, 0, 0), o <= r)) {
        if ((o.setDate(o.getDate() + 1), r < o)) return p("#Time_Today");
        if ((o.setDate(o.getDate() + 1), r < o)) return p("#Time_Tomorrow");
      } else if ((o.setDate(o.getDate() - 1), o <= r))
        return p("#Time_Yesterday");
      var i = { month: t ? "long" : "short", day: "numeric" },
        a = r.setHours(0, 0, 0, 0) + i.month,
        s = _.get(a);
      return (
        s ||
        ((s = r.toLocaleDateString(C.GetPreferredLocales(), i)), _.set(a, s), s)
      );
    }
    function v(e) {
      var t = new Date(1e3 * e),
        n = new Date();
      if (n < t) return c.b(t.getTime() - n.getTime()), k(t);
      c.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
      var r = new Date();
      if ((r.setHours(0, 0, 0, 0), r <= t)) return p("#Time_Today");
      if ((r.setDate(r.getDate() - 1), r <= t)) return p("#Time_Yesterday");
      if ((r.setDate(r.getDate() - 5), r <= t)) return p("#TimeSince_ThisWeek");
      var o = new Date(r);
      if (
        (r.setDate(r.getDate() - 21),
        r <= t ||
          (t.getMonth() == n.getMonth() && t.getFullYear() == n.getFullYear()))
      ) {
        var i =
          Math.floor((o.valueOf() - t.valueOf()) / (1e3 * a.d.PerWeek)) + 1;
        return 1 == i ? p("#TimeSince_1Week") : p("#TimeSince_XWeeks", i);
      }
      return t.getFullYear() == n.getFullYear() ? w(t) : k(t);
    }
    new Map();
    var g = new Map(),
      E = new Map(),
      y = new Map();
    function w(e) {
      var t = g.get(e.getMonth());
      return (
        t ||
        ((t = e.toLocaleDateString(C.GetPreferredLocales(), { month: "long" })),
        g.set(e.getMonth(), t),
        t)
      );
    }
    function S(e) {
      var t = E.get(e.getFullYear());
      return (
        t ||
        ((t = e.toLocaleDateString(C.GetPreferredLocales(), {
          year: "numeric"
        })),
        E.set(e.getFullYear(), t),
        t)
      );
    }
    function k(e) {
      var t = e.getMonth() + 12 * e.getFullYear(),
        n = y.get(t);
      return (
        n ||
        ((n = e.toLocaleDateString(C.GetPreferredLocales(), {
          month: "long",
          year: "numeric"
        })),
        y.set(t, n),
        n)
      );
    }
    var D = {
        english: "en",
        german: "de",
        french: "fr",
        italian: "it",
        korean: "ko",
        latam: "es-419",
        spanish: "es",
        schinese: "zh-cn",
        tchinese: "zh-tw",
        russian: "ru",
        thai: "th",
        japanese: "ja",
        brazilian: "pt-br",
        portuguese: "pt",
        polish: "pl",
        danish: "da",
        dutch: "nl",
        finnish: "fi",
        norwegian: "no",
        swedish: "sv",
        hungarian: "hu",
        czech: "cs",
        romanian: "ro",
        turkish: "tr",
        arabic: "ar",
        bulgarian: "bg",
        greek: "el",
        ukrainian: "uk",
        vietnamese: "vn"
      },
      C = new i();
    window.LocalizationManager = C;
  },
  TtDX: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return u;
    });
    var r = n("mrSG"),
      o = n("q1tI"),
      i = n("X3Ds"),
      a = n("y+6m"),
      l = n("sUmc"),
      s = n("2vnA"),
      c = (function() {
        function e() {}
        return (
          (e.GetBrowserInfoForPopup = function(e) {
            return null;
          }),
          (e.prototype.SetTakeFocus = function(e) {
            this.m_fnTakeFocus = e;
          }),
          e
        );
      })();
    function u(e, t, n) {
      var r,
        o = void 0,
        i = void 0,
        a = t;
      if (a.preventDefault && a.stopPropagation) {
        if (a.shiftKey) return null;
        a.preventDefault(),
          a.stopPropagation(),
          (r = a.currentTarget),
          (o = a.clientX),
          (i = a.clientY);
      } else r = t;
      var s = new m(e, r, o, i, n);
      return s.Show(), s;
    }
    var p = (function(n) {
        function e(e) {
          var t = n.call(this) || this;
          return (
            (t.m_bVisible = !1),
            (t.m_elSubmenuItem = null),
            (t.m_timerHideSubMenu = 0),
            (t.m_ownerWindow = e),
            t
          );
        }
        return (
          Object(r.d)(e, n),
          (e.prototype.Init = function(e, t) {
            (e.options.bForcePopup || this.m_ownerWindow.innerWidth) < 400 &&
            this.m_ownerWindow.SteamClient &&
            this.m_ownerWindow.SteamClient.Window
              ? (this.m_popupContextMenu = new a.a(
                  e,
                  t,
                  c.GetBrowserInfoForPopup(this.m_ownerWindow)
                ))
              : ((this.m_embeddedElementInstance = Object(l.b)(
                  this.m_ownerWindow.document
                )),
                (this.m_rctElement = o.createElement(a.f, e, t)));
          }),
          (e.prototype.SetOnHideCallback = function(e) {
            this.m_fnOnHideCallback = e;
          }),
          (e.prototype.Show = function() {
            this.m_rctElement
              ? this.m_embeddedElementInstance.Show(this.m_rctElement)
              : this.m_popupContextMenu.Show(),
              (this.m_bVisible = !0);
          }),
          (e.prototype.Hide = function() {
            this.InternalHide();
          }),
          (e.prototype.HideIfNotInFocus = function() {
            this.BHasFocus() || this.BIsFocusInChildHierarchy() || this.Hide();
          }),
          (e.prototype.InternalHide = function() {
            this.m_bVisible &&
              ((this.m_bVisible = !1),
              this.InternalHideSubMenu(),
              this.m_fnOnHideCallback && this.m_fnOnHideCallback(),
              this.m_embeddedElementInstance
                ? this.m_embeddedElementInstance.Hide(300)
                : this.m_popupContextMenu.Close());
          }),
          Object.defineProperty(e.prototype, "visible", {
            get: function() {
              return this.m_bVisible;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "options", {
            get: function() {
              return this.m_options;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "owner_window", {
            get: function() {
              return this.m_ownerWindow;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.ShowSubMenu = function(e, t) {
            return this.m_elSubmenuItem == e
              ? (this.CancelHideSubMenuTimer(),
                this.m_submenu.TakeFocus(),
                null)
              : (this.InternalHideSubMenu(),
                (this.m_elSubmenuItem = e),
                (this.m_submenu = new h(this, t(), e)),
                this.m_submenu.Show(),
                this.m_submenu);
          }),
          (e.prototype.CancelHideSubMenuTimer = function() {
            0 < this.m_timerHideSubMenu &&
              (clearTimeout(this.m_timerHideSubMenu),
              (this.m_timerHideSubMenu = 0));
          }),
          (e.prototype.HideSubMenu = function() {
            var e = this;
            if (this.m_submenu) {
              if (!(0 < this.m_timerHideSubMenu)) {
                this.m_timerHideSubMenu = window.setTimeout(function() {
                  e.InternalHideSubMenu(), (e.m_timerHideSubMenu = 0);
                }, 150);
              }
            } else this.CancelHideSubMenuTimer();
          }),
          (e.prototype.InternalHideSubMenu = function() {
            this.CancelHideSubMenuTimer(),
              this.m_submenu &&
                (this.BIsFocusInChildHierarchy() && this.TakeFocus(),
                (this.m_elSubmenuItem = null),
                this.m_submenu.InternalHide(),
                (this.m_submenu = null));
          }),
          (e.prototype.TakeFocus = function() {
            this.m_popupContextMenu && this.m_popupContextMenu.Focus(),
              this.m_fnTakeFocus && this.m_fnTakeFocus();
          }),
          (e.prototype.BInternalElementInParentHierarchy = function(e) {
            return (
              this.m_parentInstance &&
              (this.m_parentInstance.BIsChildElement(e) ||
                this.m_parentInstance.BInternalElementInParentHierarchy(e))
            );
          }),
          (e.prototype.BInternalElementInChildHierarchy = function(e) {
            return (
              this.m_submenu &&
              (this.m_submenu.BIsChildElement(e) ||
                this.m_submenu.BInternalElementInChildHierarchy(e))
            );
          }),
          (e.prototype.BIsChildElement = function(e) {
            return this.m_embeddedElementInstance
              ? this.m_embeddedElementInstance.BIsChildElement(e)
              : i.c(this.m_popupContextMenu.root_element, e);
          }),
          (e.prototype.BHasFocus = function() {
            return this.m_embeddedElementInstance
              ? this.m_embeddedElementInstance.BIsChildElement(
                  this.m_ownerWindow.document.activeElement
                )
              : this.m_popupContextMenu.focused;
          }),
          (e.prototype.BIsFocusInChildHierarchy = function() {
            return (
              this.m_submenu &&
              (this.m_submenu.BHasFocus() ||
                this.m_submenu.BIsFocusInChildHierarchy())
            );
          }),
          (e.prototype.BIsElementInMenuHierarchy = function(e) {
            return (
              this.BInternalElementInParentHierarchy(e) ||
              this.BInternalElementInChildHierarchy(e)
            );
          }),
          (e.prototype.BIsSubMenuVisible = function() {
            return !!this.m_submenu;
          }),
          Object(r.c)([s.observable], e.prototype, "m_bVisible", void 0),
          e
        );
      })(c),
      m = (function(s) {
        function c(e, t, n, r, o) {
          var i = s.call(this, t.ownerDocument.defaultView) || this;
          c.sm_iActiveContextMenuInstance &&
            c.sm_iActiveContextMenuInstance.Hide(),
            ((c.sm_iActiveContextMenuInstance = i).m_options = o || {});
          var a = {
            element: t,
            clientX: n,
            clientY: r,
            instance: i,
            options: i.m_options,
            fnOnMenuItemSelected: function() {
              i.Hide();
            }
          };
          return i.Init(a, e), i;
        }
        return (
          Object(r.d)(c, s),
          (c.prototype.Show = function() {
            this.m_options.bDisableMouseOverlay ||
              c.sm_mapEmbeddedMouseOverlays.ShowElement(
                this.m_ownerWindow.document,
                o.createElement(a.e),
                this
              ),
              s.prototype.Show.call(this);
          }),
          (c.prototype.Hide = function() {
            this.m_options.bDisableMouseOverlay ||
              c.sm_mapEmbeddedMouseOverlays.HideElement(
                this.m_ownerWindow.document,
                this
              ),
              s.prototype.Hide.call(this);
          }),
          (c.sm_mapEmbeddedMouseOverlays = new l.a("ContextMenuMouseOverlay")),
          c
        );
      })(p),
      h = (function(i) {
        function e(e, t, n) {
          var r = i.call(this, n.ownerDocument.defaultView) || this;
          (r.m_parentInstance = e),
            (r.m_options = {
              bOverlapVertical: !0,
              bUseWebStyles: e.options.bUseWebStyles,
              strClassName: e.options.strClassName,
              bFitToWindow: e.options.bFitToWindow,
              bShiftToFitWindow: e.options.bShiftToFitWindow
            });
          var o = {
            element: n,
            clientX: null,
            clientY: null,
            instance: r,
            options: r.m_options,
            fnOnMenuItemSelected: function() {
              r.Hide();
            },
            bSubmenu: !0
          };
          return r.Init(o, t), r;
        }
        return (
          Object(r.d)(e, i),
          (e.prototype.Hide = function() {
            var e = this;
            this.m_popupContextMenu
              ? window.setTimeout(function() {
                  e.m_parentInstance.HideIfNotInFocus();
                }, 10)
              : this.m_parentInstance.Hide();
          }),
          e
        );
      })(p);
  },
  UPxs: function(e, t, n) {
    "use strict";
    var c = n("mrSG"),
      l = n("q1tI"),
      r = n("okNM"),
      u = n("exH9"),
      o = n("bxiW"),
      P = { x: "y", y: "x" };
    function I(e, t) {
      return e.x * t.x + e.y * t.y;
    }
    function A(e, t) {
      return { x: t.x - e.x, y: t.y - e.y };
    }
    function B(e, t) {
      return { x: e.x + t.x, y: e.y + t.y };
    }
    function F(e, t) {
      return { x: e.x * t, y: e.y * t };
    }
    function i(e) {
      return (e.min + e.max) / 2;
    }
    function G(e, t) {
      return !(e.max < t.min || t.max < e.min);
    }
    var T = n("Kw0F"),
      H = n("X3Ds");
    n.d(t, "a", function() {
      return k;
    });
    var h,
      a,
      d,
      s,
      U,
      p,
      m = "Focusable",
      f = "FocusGroup",
      _ = "NavArea";
    function W(e) {
      return null != e && void 0 !== e.focus;
    }
    function V(e) {
      return (function(e) {
        return {
          x: { min: e.left, max: e.right },
          y: { min: e.top, max: e.bottom }
        };
      })(e.getBoundingClientRect());
    }
    function z(e) {
      return (function(e) {
        return { x: i(e.x), y: i(e.y) };
      })(V(e));
    }
    function b(e, t) {
      e && ("function" == typeof e ? e(t) : (e.current = t));
    }
    function v(e, t, n) {
      var r = e,
        o = null != r.getAttribute("data-nav"),
        i = o ? r.getAttribute("data-nav-scroll-axes") : void 0;
      if (o && i !== d.XY && i !== t) return h.None;
      var a =
          "x" === t
            ? [r.scrollLeft, r.scrollWidth, r.clientWidth]
            : [r.scrollTop, r.scrollHeight, r.clientHeight],
        s = a[0],
        c = a[1],
        l = a[2],
        u = -1 === n ? Math.abs(s) < 1 : Math.abs(s + l - c) <= 1;
      if (o) return u ? h.AtEnd : h.Scrollable;
      if (!u && c <= l) return h.None;
      var p = getComputedStyle(r),
        m = "x" === t ? p.overflowX : p.overflowY;
      return "auto" === m || "scroll" === m
        ? u
          ? h.AtEnd
          : h.Scrollable
        : h.None;
    }
    ((a = h || (h = {}))[(a.None = 2)] = "None"),
      (a[(a.Scrollable = 1)] = "Scrollable"),
      (a[(a.AtEnd = 3)] = "AtEnd"),
      ((s = d || (d = {})).X = "x"),
      (s.Y = "y"),
      (s.XY = "xy"),
      ((p = U || (U = {})).Area = "area"),
      (p.Group = "group"),
      (p.Stop = "stop");
    var g = (function() {
        function t() {}
        return (
          Object.defineProperty(t, "IsNavEnabled", {
            get: function() {
              return t.s_bIsNavEnabled;
            },
            set: function(e) {
              t.s_bIsNavEnabled = e;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t, "IsPointerVisible", {
            get: function() {
              return !1;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.s_bIsNavEnabled = !1),
          t
        );
      })(),
      E = l.createContext(null),
      y = (function() {
        function e() {}
        return (
          (e.prototype.Initialize = function(e) {
            this.m_document = e;
          }),
          (e.prototype.GetFocus = function() {
            return void 0 !== this.m_document &&
              W(this.m_document.activeElement)
              ? this.m_document.activeElement
              : null;
          }),
          (e.prototype.Focus = function(e, t) {
            null != e
              ? e.focus(t)
              : W(document.activeElement) && document.activeElement.blur();
          }),
          (e.prototype.Click = function(e) {
            e.click();
          }),
          (e.prototype.FocusableElementAttributes = function(e) {
            var t = {};
            return (
              g.IsNavEnabled && e.navStop && (t.tabIndex = -2),
              "number" == typeof e.tabStop && (t.tabIndex = e.tabStop),
              !0 === e.tabStop && (t.tabIndex = 0),
              t
            );
          }),
          e
        );
      })(),
      w = (function() {
        function e() {}
        return (
          (e.Attributes = function(e, t) {
            var n = {};
            if (
              (g.IsNavEnabled &&
                (e.navStop && (n["data-nav"] = U.Stop),
                e.preferredNavStop && (n["data-nav-preferred"] = "true"),
                e.scrollToX && (n["data-nav-scroll-x"] = e.scrollToX),
                e.scrollToY && (n["data-nav-scroll-y"] = e.scrollToY)),
              !t)
            )
              return n;
            var r = t.FocusableElementAttributes(e);
            return r ? Object(c.a)(Object(c.a)({}, n), r) : n;
          }),
          Object.defineProperty(e, "navStopClass", {
            get: function() {
              return g.IsNavEnabled ? m : void 0;
            },
            enumerable: !0,
            configurable: !0
          }),
          e
        );
      })(),
      S = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(c.d)(t, e),
          (t.prototype.SetRef = function(e) {
            (this.m_htmlElement = e), b(this.props.htmlElementRef, e);
          }),
          (t.prototype.assembleAttributes = function() {
            var e = this.props,
              t = (e.navStop,
              e.preferredNavStop,
              e.tabStop,
              e.scrollToX,
              e.scrollToY,
              e.startFocused),
              n = e.htmlElementRef,
              r = e.className,
              o = (e.children,
              Object(c.f)(e, [
                "navStop",
                "preferredNavStop",
                "tabStop",
                "scrollToX",
                "scrollToY",
                "startFocused",
                "htmlElementRef",
                "className",
                "children"
              ]));
            return null != this.context && g.IsNavEnabled
              ? Object(c.a)(
                  Object(c.a)(
                    Object(c.a)({}, w.Attributes(this.props, this.context)),
                    {
                      className: Object(u.a)(w.navStopClass, r),
                      ref: t ? this.SetRef : n
                    }
                  ),
                  o
                )
              : Object(c.a)({ className: r, ref: n }, o);
          }),
          (t.prototype.componentDidMount = function() {
            this.props.startFocused &&
              this.m_htmlElement &&
              this.context &&
              this.context.Focus(this.m_htmlElement);
          }),
          (t.prototype.render = function() {
            return l.createElement(
              this.m_elementType,
              this.assembleAttributes(),
              this.props.children
            );
          }),
          (t.contextType = E),
          (t.defaultProps = { navStop: !1, tabStop: !1 }),
          Object(c.c)([o.a], t.prototype, "SetRef", null),
          t
        );
      })(l.Component),
      k = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.m_elementType = "div"), e;
        }
        return Object(c.d)(e, t), (e = Object(c.c)([r.observer], e));
      })(S),
      D = (l.Component,
      (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.m_navAreaDivRef = l.createRef()),
            (t.m_lastFocusedHtmlElement = null),
            (t.m_focusPos = null),
            (t.m_focusPosOffsetFromAnchorElement = null),
            (t.m_focusPosPointerRef = l.createRef()),
            void 0 !== e && (t.m_htmlDomFocusController = new y()),
            t
          );
        }
        var M;
        return (
          Object(c.d)(e, n),
          ((M = e).FocusWithin = function(e) {
            if (g.IsNavEnabled) {
              var t = M.sm_navAreaStack;
              if (0 !== t.length) {
                var n = t[t.length - 1],
                  r = n.m_navAreaDivRef.current;
                if (r && r.contains(e)) {
                  var o = n.FindBestNavStopFocus(e);
                  o && n.SetFocus(o.htmlElement, o.pos);
                }
              }
            }
          }),
          (e.prototype.GetFocusController = function() {
            return this.props.focusController || this.m_htmlDomFocusController;
          }),
          (e.prototype.SetFocus = function(e, t) {
            this.UpdateFocus(e, t);
            var n = e.getAttribute("data-nav-scroll-x"),
              r = e.getAttribute("data-nav-scroll-y");
            if (n || r) {
              this.GetFocusController().Focus(e, { preventScroll: !0 });
              var o = { behavior: "auto" };
              n && (o.inline = n), r && (o.block = r), e.scrollIntoView(o);
            } else this.GetFocusController().Focus(e);
          }),
          (e.prototype.UpdateFocus = function(e, t) {
            var n = M.FindAnchorElement(e);
            if (n) {
              var r = z(n);
              this.m_focusPosOffsetFromAnchorElement = A(r, t);
            } else this.m_focusPosOffsetFromAnchorElement = null;
            (this.m_focusPos = t),
              (this.m_lastFocusedHtmlElement = e),
              this.UpdatePointer();
          }),
          (e.prototype.UpdatePointer = function() {
            var e = this.m_focusPos,
              t = this.m_focusPosPointerRef.current,
              n = this.m_navAreaDivRef.current;
            e &&
              t &&
              n &&
              ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
          }),
          (e.prototype.GetFocusPos = function() {
            var e = this.m_navAreaDivRef.current,
              t = this.m_lastFocusedHtmlElement,
              n = this.m_focusPosOffsetFromAnchorElement;
            if (e && t && e.contains(t) && n) {
              var r = M.FindAnchorElement(t);
              if (r) return B(z(r), n);
            }
            return this.m_focusPos;
          }),
          (e.FindAnchorElement = function(e) {
            return e;
          }),
          (e.prototype.FindBestNavStopFocus = function(e, t, n) {
            if (!e) return null;
            var r = e.ownerDocument;
            if (!r) return null;
            var o = this.m_lastFocusedHtmlElement,
              i = this.GetFocusPos();
            if (
              o &&
              r.contains(o) &&
              e.contains(o) &&
              o.getAttribute("data-nav") === U.Stop
            )
              return { htmlElement: o, pos: i || z(o) };
            var a = Object(H.k)(e, "data-nav").filter(function(e) {
              return W(e) && "true" === e.getAttribute("data-nav-preferred");
            });
            if (0 < a.length) {
              var s = a[0],
                c = s.getAttribute("data-nav");
              if (c === U.Group) {
                var l = this.FindBestNavStopFocus(s, t, n);
                if (l) return l;
              } else if (c === U.Stop) {
                return { htmlElement: s, pos: z(s) };
              }
            }
            var u = Array.from(
              e.querySelectorAll("[data-nav='" + U.Stop + "']")
            ).filter(function(e) {
              return W(e);
            });
            if (!u || 0 === u.length) return null;
            var p = M.sm_navAreaStack;
            if (p.length < 1) return null;
            var m = p[p.length - 1];
            if (
              m.m_navAreaDivRef.current &&
              m.props.initFromBoundary &&
              void 0 !== t &&
              void 0 !== n
            ) {
              for (
                var h = -1 === n ? "max" : "min",
                  d = null,
                  f = 1 / 0,
                  _ = 0,
                  b = u;
                _ < b.length;
                _++
              ) {
                var v = n * V((C = b[_]))[t][h];
                v < f && ((f = v), (d = C));
              }
              if (null !== d) return { htmlElement: d, pos: z(d) };
            }
            var g,
              E = Object(T.d)(p, function(e) {
                return null !== e.m_focusPos;
              });
            if (E) {
              for (
                var y = E.m_focusPos,
                  w = Number.POSITIVE_INFINITY,
                  S = null,
                  k = 0,
                  D = u;
                k < D.length;
                k++
              ) {
                var C,
                  O = z((C = D[k])),
                  L = (void 0, (g = A(y, O)), Math.sqrt(I(g, g)));
                L < w && ((w = L), (S = C));
              }
              if (S) return { htmlElement: S, pos: z(S) };
            }
            var x = u[0];
            return x ? { htmlElement: x, pos: z(x) } : null;
          }),
          (e.prototype.GetScrollOffset = function(e, t, n) {
            var r = e,
              o = r.getAttribute("data-nav-enter-as-scrolled-axes");
            if (o === d.XY || o === t) return null;
            var i = null != r.getAttribute("data-nav"),
              a = i ? r.getAttribute("data-nav-scroll-axes") : void 0;
            return i && a !== d.XY && a !== t
              ? null
              : "x" === t
              ? { x: r.scrollLeft, y: 0 }
              : { x: 0, y: r.scrollTop };
          }),
          (e.prototype.FindNextNavStopInContainer = function(
            c,
            e,
            l,
            u,
            p,
            t,
            n
          ) {
            for (
              var m = this,
                h = n ? this.GetScrollOffset(c, u, p) : null,
                r = h ? F(h, -1) : null,
                d = r ? B(l, r) : l,
                o = P[u],
                i = -1 === ({ x: 0, y: 0 }[u] = p) ? "max" : "min",
                a = { min: d[o], max: d[o] },
                s =
                  t && W(e)
                    ? (function(e, t) {
                        return {
                          min: e.min < t.min ? e.min : t.min,
                          max: e.max > t.max ? e.max : t.max
                        };
                      })(a, V(e)[o])
                    : a,
                f = null,
                _ = null,
                b = 1 / 0,
                v = [],
                g = 0,
                E = Object(H.k)(c, "data-nav");
              g < E.length;
              g++
            ) {
              if ((j = E[g]) !== e && j.getAttribute("data-nav") !== U.Area) {
                n &&
                  null === f &&
                  "true" === j.getAttribute("data-nav-preferred") &&
                  (f = j);
                var y = V(j),
                  w = d[u],
                  S = p * (y[u][i] - w);
                if (!(S < 0)) {
                  var k = d[o],
                    D = y[o].min,
                    C = y[o].max,
                    O = k < D ? k - D : C < k ? k - C : 0;
                  if (t) if (!G(s, { min: D, max: C })) continue;
                  var L = { x: 0, y: 0 };
                  (L[u] = y[u][i]), (L[o] = k + O);
                  var x = A(d, L),
                    M = (S * S + O * O) / Math.abs(x[u]);
                  M < b && ((b = M), (_ = j)), v.push({ score: M, element: j });
                }
              }
            }
            var I = function(e, t) {
              void 0 === t && (t = !1);
              var n = e.getAttribute("data-nav");
              if (n === U.Stop) {
                if (W(e)) {
                  var r = e,
                    o = z(r),
                    i = !l || t ? o : { x: l.x, y: l.y };
                  i[u] = o[u];
                  var a = { htmlElement: r, pos: i };
                  return h && (a.onscreenTestElement = c), a;
                }
                return null;
              }
              if (n === U.Group) {
                var s = m.FindNextNavStopInContainer(e, null, d, u, p, !1, !0);
                if (s) return s;
              }
              return null;
            };
            if (f && (T = I(f, !0))) return T;
            if (_) {
              var T;
              if ((T = I(_))) return T;
              v.sort(function(e, t) {
                return e.score - t.score;
              });
              for (var R = 0; R < v.length; ++R) {
                var j;
                if ((j = v[R].element) !== _) {
                  var N = I(j);
                  if (N) return N;
                }
              }
            }
            return null;
          }),
          (e.prototype.FindNextNavStopWithinAndAcrossContainers = function(
            e,
            t,
            n,
            r,
            o
          ) {
            for (var i = t; ; ) {
              var a = Object(H.j)(e, i, "data-nav"),
                s = this.FindNextNavStopInContainer(a, i, n, r, o, !0, !1);
              if (null !== s) return s;
              if (a === e) return null;
              for (var c = i.parentElement; c && c !== a; ) {
                if (v(c, r, o) === h.Scrollable) return null;
                c = c.parentElement;
              }
              if (!c) return null;
              if (c === a && v(c, r, o) === h.Scrollable) return null;
              i = a;
            }
          }),
          (e.prototype.FindNextNavStop = function(e, t) {
            var n = this.m_navAreaDivRef.current;
            if (!n) return null;
            var r = n.ownerDocument;
            if (!r || r !== this.m_document) return null;
            var o = null,
              i = this.GetFocusController().GetFocus();
            if (W(i) && i !== n && n.contains(i)) {
              var a =
                  (null !== this.m_focusPos &&
                    this.m_lastFocusedHtmlElement === i &&
                    this.GetFocusPos()) ||
                  z(i),
                s = this.FindNextNavStopWithinAndAcrossContainers(
                  n,
                  i,
                  a,
                  e,
                  t
                );
              if (!s) {
                var c = z(i);
                s = this.FindNextNavStopWithinAndAcrossContainers(
                  n,
                  i,
                  c,
                  e,
                  t
                );
              }
              s && (o = s);
            } else
              o = this.FindBestNavStopFocus(this.m_navAreaDivRef.current, e, t);
            if (null !== o) {
              var l = r.defaultView;
              if (!l) return null;
              if (
                (function(e, t) {
                  return G(e.x, t.x) && G(e.y, t.y);
                })(
                  {
                    x: { min: -40, max: l.innerWidth + 40 },
                    y: { min: -40, max: l.innerHeight + 40 }
                  },
                  V(o.onscreenTestElement || o.htmlElement)
                )
              )
                return o;
            }
            return null;
          }),
          (e.prototype.HandleKeyDown = function(e) {
            if (g.IsNavEnabled) {
              var t = this.m_navAreaDivRef.current;
              if (t) {
                var n = M.k_KeyNavigationDirections[e.key];
                if (n) {
                  var r = n[0],
                    o = n[1],
                    i = this.FindNextNavStop(r, o);
                  i &&
                    (this.SetFocus(i.htmlElement, i.pos),
                    e.stopPropagation(),
                    e.preventDefault());
                } else if ("Enter" === e.key) {
                  var a = t.ownerDocument;
                  if (!a || a !== this.m_document) return;
                  var s = this.GetFocusController().GetFocus();
                  s &&
                    s.getAttribute("data-nav") === U.Stop &&
                    W(s) &&
                    (this.GetFocusController().Click(s),
                    e.preventDefault(),
                    e.stopPropagation());
                }
              }
            }
          }),
          (e.HandleDocumentKeyDown = function(e) {
            if (g.IsNavEnabled) {
              var t = M.sm_navAreaStack;
              if (0 !== t.length) {
                var n = t[t.length - 1],
                  r = n.m_navAreaDivRef.current;
                if (r) {
                  var o = M.k_KeyNavigationDirections[e.key];
                  if (o) {
                    var i = r.ownerDocument;
                    if (i && i === n.m_document) {
                      var a = n.GetFocusController().GetFocus();
                      if (a) {
                        var s = n.m_navAreaDivRef.current;
                        if (!s || s.contains(a)) return;
                      }
                      var c = o[0],
                        l = o[1],
                        u = n.FindNextNavStop(c, l);
                      u &&
                        (n.SetFocus(u.htmlElement, u.pos),
                        e.stopPropagation(),
                        e.preventDefault());
                    }
                  } else
                    "Escape" === e.key
                      ? n.props.onGoBack &&
                        (n.props.onGoBack(),
                        e.stopPropagation(),
                        e.preventDefault())
                      : "`" === e.key &&
                        n.props.onHome &&
                        (n.props.onHome(),
                        e.stopPropagation(),
                        e.preventDefault());
                }
              }
            }
          }),
          (e.prototype.HandleFocusCapture = function(e) {
            var t = e.target;
            if (t && t !== this.m_lastFocusedHtmlElement) {
              var n = z(t);
              this.UpdateFocus(t, n);
            }
            e.stopPropagation(), e.preventDefault();
          }),
          (e.prototype.HandleScrollCapture = function() {
            var e = this.m_focusPos,
              t = this.GetFocusPos();
            e !== t && ((this.m_focusPos = t), this.UpdatePointer());
          }),
          (e.prototype.HandleMouseDownCapture = function(e) {
            this.props.focusController &&
              this.props.focusController.HandleNavStopClick &&
              (W(e.target) && e.preventDefault());
          }),
          (e.prototype.HandleClickCapture = function(e) {
            var t =
              this.props.focusController &&
              this.props.focusController.HandleNavStopClick;
            if (t) {
              var n = e.target;
              if (W(n)) {
                var r = n;
                r.getAttribute("data-nav") === U.Stop && t(e, r);
              }
            }
          }),
          (e.prototype.ClickFocusedElement = function() {
            this.m_lastFocusedHtmlElement &&
              this.GetFocusController().Click(this.m_lastFocusedHtmlElement);
          }),
          (e.prototype.Blur = function() {
            (this.m_lastFocusedHtmlElement = null),
              (this.m_focusPos = null),
              (this.m_focusPosOffsetFromAnchorElement = null);
            var e = this.m_navAreaDivRef.current;
            if (e) {
              var t = e.ownerDocument;
              t &&
                t === this.m_document &&
                this.GetFocusController().Focus(null);
            }
          }),
          (e.prototype.componentDidMount = function() {
            if (g.IsNavEnabled) {
              if (!this.m_navAreaDivRef.current) return;
              var e = this.m_navAreaDivRef.current.ownerDocument;
              if (!e) return;
              (this.m_document && this.m_document === e) ||
                ((this.m_document = e),
                this.m_htmlDomFocusController &&
                  this.m_htmlDomFocusController.Initialize(e)),
                0 === M.sm_navAreaStack.length &&
                  (e.addEventListener("scroll", this.HandleScrollCapture, !0),
                  this.props.focusController ||
                    e.addEventListener("keydown", M.HandleDocumentKeyDown, !1));
            }
            this.props.focusController || M.sm_navAreaStack.push(this);
          }),
          (e.prototype.componentWillUnmount = function() {
            if (
              ((M.sm_navAreaStack = Object(T.a)(M.sm_navAreaStack, this)),
              0 === M.sm_navAreaStack.length)
            ) {
              if (!this.m_navAreaDivRef.current) return;
              var e = this.m_document;
              if (!e) return;
              e.removeEventListener("scroll", this.HandleScrollCapture, !0),
                e.removeEventListener("keydown", M.HandleDocumentKeyDown, !1);
            }
          }),
          (e.prototype.render = function() {
            var e = this.props,
              t = e.className,
              n = e.children,
              r = (e.initFromBoundary, e.onGoBack, e.onHome, e.focusController),
              o = Object(c.f)(e, [
                "className",
                "children",
                "initFromBoundary",
                "onGoBack",
                "onHome",
                "focusController"
              ]),
              i = g.IsNavEnabled,
              a = g.IsPointerVisible,
              s = i
                ? {
                    onKeyDown: this.HandleKeyDown,
                    onFocusCapture: this.HandleFocusCapture
                  }
                : {};
            return (
              r &&
                r.HandleNavStopClick &&
                ((s.onMouseDownCapture = this.HandleMouseDownCapture),
                (s.onClickCapture = this.HandleClickCapture)),
              i
                ? l.createElement(
                    E.Provider,
                    { value: r || this.m_htmlDomFocusController || null },
                    l.createElement(
                      "div",
                      Object(c.a)(
                        {
                          "data-nav": U.Area,
                          ref: this.m_navAreaDivRef,
                          className: Object(u.a)(_, t)
                        },
                        o,
                        s
                      ),
                      i &&
                        a &&
                        l.createElement("div", {
                          ref: this.m_focusPosPointerRef,
                          style: {
                            position: "fixed",
                            background:
                              "linear-gradient( -45deg, rgba( 0, 0, 0, 0 ) 0%, rgba( 0, 0, 0, 0 ) 50%, rgba( 255, 64, 0, 0.75 ) 100% )",
                            width: "20px",
                            height: "20px",
                            zIndex: 1e3
                          }
                        }),
                      n
                    )
                  )
                : l.createElement(
                    "div",
                    Object(c.a)({ ref: this.m_navAreaDivRef, className: t }, o),
                    n
                  )
            );
          }),
          (e.sm_navAreaStack = []),
          (e.k_KeyNavigationDirections = {
            ArrowLeft: ["x", -1],
            ArrowRight: ["x", 1],
            ArrowUp: ["y", -1],
            ArrowDown: ["y", 1]
          }),
          Object(c.c)([o.a], e.prototype, "HandleKeyDown", null),
          Object(c.c)([o.a], e.prototype, "HandleFocusCapture", null),
          Object(c.c)([o.a], e.prototype, "HandleScrollCapture", null),
          Object(c.c)([o.a], e.prototype, "HandleMouseDownCapture", null),
          Object(c.c)([o.a], e.prototype, "HandleClickCapture", null),
          Object(c.c)([o.a], e, "HandleDocumentKeyDown", null),
          (e = M = Object(c.c)([r.observer], e))
        );
      })(l.Component));
  },
  X3Ds: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return i;
      }),
      n.d(t, "g", function() {
        return a;
      }),
      n.d(t, "m", function() {
        return s;
      }),
      n.d(t, "l", function() {
        return c;
      }),
      n.d(t, "h", function() {
        return l;
      }),
      n.d(t, "i", function() {
        return u;
      }),
      n.d(t, "a", function() {
        return p;
      }),
      n.d(t, "n", function() {
        return m;
      }),
      n.d(t, "f", function() {
        return h;
      }),
      n.d(t, "o", function() {
        return d;
      }),
      n.d(t, "e", function() {
        return f;
      }),
      n.d(t, "d", function() {
        return _;
      }),
      n.d(t, "j", function() {
        return b;
      }),
      n.d(t, "k", function() {
        return v;
      });
    var r = n("Kw0F");
    n("r64O");
    function o(e, t) {
      for (; t; ) {
        if (
          (t.parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE &&
            (t = t.parentNode.host),
          t == e)
        )
          return !0;
        t = t.parentElement;
      }
      return !1;
    }
    function i(e, t) {
      for (; t; ) if ((t = t.parentElement) == e) return !0;
      return !1;
    }
    function a(e, t) {
      return {
        width: t.width,
        height: t.height,
        top: e.screenTop + t.top,
        bottom: e.screenTop + t.bottom,
        left: e.screenLeft + t.left,
        right: e.screenLeft + t.right
      };
    }
    function s(e) {
      var t = void 0;
      return (
        e && e.currentTarget && (t = e.currentTarget.ownerDocument.defaultView),
        t
      );
    }
    function c(e) {
      var t = void 0;
      return e && (t = e.ownerDocument.defaultView), t;
    }
    function l(e) {
      var t = document.createElement("textarea");
      (t.textContent = e),
        (t.style.position = "fixed"),
        document.body.appendChild(t),
        t.select();
      try {
        document.execCommand("copy");
      } catch (e) {
        console.warn("Copy to clipboard failed.", e);
      } finally {
        document.body.removeChild(t);
      }
    }
    function u(e) {
      var t = "steam://openurl/";
      e.startsWith(t) && (e = e.slice(t.length)), l(e);
    }
    function p(e) {
      var t = e.ownerDocument;
      return (
        t.fullscreen ||
        t.webkitIsFullScreen ||
        t.mozFullScreen ||
        t.msFullscreenElement
      );
    }
    function m(e, t) {
      var n = e;
      n.requestFullscreen
        ? n.requestFullscreen()
        : n.webkitRequestFullscreen
        ? n.webkitRequestFullscreen()
        : t && t.webkitSetPresentationMode
        ? t.webkitSetPresentationMode("fullscreen")
        : n.mozRequestFullScreen
        ? n.mozRequestFullScreen()
        : n.msRequestFullscreen && n.msRequestFullscreen();
    }
    function h(e) {
      var t = e.ownerDocument;
      t.cancelFullscreen
        ? t.cancelFullscreen()
        : t.webkitCancelFullScreen
        ? t.webkitCancelFullScreen()
        : t.mozCancelFullScreen
        ? t.mozCancelFullScreen()
        : t.msExitFullscreen && t.msExitFullscreen();
    }
    function d(e) {
      "loading" == document.readyState
        ? document.addEventListener("DOMContentLoaded", e)
        : e();
    }
    var f = (function() {
      function e(e) {
        var i = this;
        (this.m_bNeedSort = !1),
          (this.m_bOffsetsInvalidated = !1),
          (this.m_rgChildren = []),
          (this.RecomputeVisibility = function() {
            var e = i.m_elParent.scrollTop - i.m_nBufferPx,
              t =
                i.m_elParent.scrollTop +
                i.m_elParent.clientHeight +
                i.m_nBufferPx;
            i.EnsureSort();
            for (var n = 0, r = i.m_rgChildren; n < r.length; n++) {
              var o = r[n];
              if (!(o.yOffset < e)) {
                if (o.yOffset > t) break;
                o.fnCallback(!0);
              }
            }
            (i.m_nLastYMin = e), (i.m_nLastYMax = t);
          }),
          (this.m_nBufferPx = e);
      }
      return (
        (e.prototype.SetParent = function(e) {
          this.m_elParent &&
            this.m_elParent.ownerDocument.defaultView.removeEventListener(
              "resize",
              this.RecomputeVisibility
            ),
            (this.m_elParent = e),
            this.m_elParent &&
              this.m_elParent.ownerDocument.defaultView.addEventListener(
                "resize",
                this.RecomputeVisibility
              );
        }),
        (e.prototype.InvalidateOffsetsAndRecompute = function() {
          (this.m_bOffsetsInvalidated = !0), this.RecomputeVisibility();
        }),
        (e.prototype.EnsureSort = function() {
          if (this.m_bOffsetsInvalidated) {
            for (var e = 0; e < this.m_rgChildren.length; e++)
              this.m_rgChildren[e].yOffset = this.m_rgChildren[
                e
              ].element.offsetTop;
            this.m_bOffsetsInvalidated = !1;
          }
          this.m_bNeedSort &&
            (this.m_rgChildren.sort(function(e, t) {
              return e.yOffset - t.yOffset;
            }),
            (this.m_bNeedSort = !1));
        }),
        (e.prototype.RegisterChild = function(e, t) {
          this.m_rgChildren.push({
            element: e,
            yOffset: e.offsetTop,
            fnCallback: t
          }),
            (this.m_bNeedSort = !0),
            void 0 !== this.m_nLastYMin &&
              void 0 !== this.m_nLastYMax &&
              e.offsetTop >= this.m_nLastYMin &&
              e.offsetTop <= this.m_nLastYMax &&
              t(!0);
        }),
        (e.prototype.UnregisterChild = function(t) {
          r.c(this.m_rgChildren, function(e) {
            return e.element == t;
          });
        }),
        e
      );
    })();
    function _(e, t) {
      var n = e;
      return (
        (n.lastModifiedDate = new Date()),
        (n.name = t || Date.now().toString()),
        e
      );
    }
    function b(e, t, n) {
      for (var r = t.parentElement; r && r !== e && !r.hasAttribute(n); )
        r = r.parentElement;
      return r || e;
    }
    function v(e, t) {
      for (var n = [], r = [e]; 0 < r.length; )
        for (var o = r.pop().children, i = 0; i < o.length; ++i) {
          var a = o[i];
          a.hasAttribute(t) ? n.push(a) : r.push(a);
        }
      return n;
    }
  },
  YyVH: function(e, t, n) {
    "use strict";
    function r(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function o(e, t, n) {
      return Math.max(t, Math.min(n, e));
    }
    function i(e, t, n, r, o) {
      return r + ((o - r) * (e - t)) / (n - t);
    }
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return i;
      });
  },
  Z7Ow: function(e, t, n) {
    e.exports = {
      EmoticonBow: "shared_svg_library_EmoticonBow_2Llzt",
      EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_Fw2WG",
      EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_luj0t"
    };
  },
  bxiW: function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      return {
        get: function() {
          var e = n.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        }
      };
    }
    function o(e, t, n) {
      return [e, t, n];
    }
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return o;
      });
  },
  exH9: function(e, t, n) {
    "use strict";
    function r(n) {
      return Object.keys(n).reduce(function(e, t) {
        return n[t] ? (e ? e + " " + t : t) : e;
      }, "");
    }
    t.a = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return e.reduce(function(e, t) {
        return t
          ? "string" == typeof t
            ? e
              ? e + " " + t
              : t
            : "object" == typeof t
            ? e
              ? e + " " + r(t)
              : r(t)
            : e
          : e;
      }, "");
    };
  },
  gfbn: function(e, t, u) {
    "use strict";
    u.r(t);
    var p = u("mrSG"),
      n = u("i8i4"),
      r = u.n(n),
      i = u("q1tI"),
      a = u.n(i),
      m = u("lkRc"),
      o = u("vDqi"),
      s = u.n(o);
    u("JMS6");
    var h = u("TLQK"),
      c = u("oFFJ"),
      l = u("jKe7"),
      d = u("2INN"),
      f = (u("AAD4"), u("6TF7")),
      _ = u.n(f),
      b = u("1fPh"),
      v = u("kyHq"),
      g = u("Jqb/"),
      E = u("r64O"),
      y = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(p.d)(t, e),
          (t.prototype.render = function() {
            var t = document.getElementById(this.props.strConfigID);
            if (!t) return null;
            var n = new Array();
            return (
              t.getAttributeNames().forEach(function(e) {
                e.toLocaleLowerCase().startsWith("data-") &&
                  (n.push(i.createElement("h1", { key: "header-" + e }, e)),
                  n.push(
                    i.createElement(w, {
                      key: "body-" + e,
                      data: JSON.parse(t.getAttribute(e))
                    })
                  ));
              }),
              i.createElement("div", null, n)
            );
          }),
          t
        );
      })(i.Component),
      w = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(p.d)(t, e),
          (t.prototype.render = function() {
            return i.createElement(
              "div",
              null,
              i.createElement(
                "pre",
                null,
                JSON.stringify(this.props.data, null, 2)
              )
            );
          }),
          t
        );
      })(i.Component);
    function S(o) {
      return function(t) {
        var e = Object(i.useState)(null),
          n = e[0],
          r = e[1];
        return (
          n ||
          (Promise.all([u.e(0), u.e(3), u.e(63), u.e(4)])
            .then(u.bind(null, "Wym2"))
            .then(function(e) {
              r(a.a.createElement(e[o], t));
            }),
          null)
        );
      };
    }
    var k = S("EventModerationLanding"),
      D = S("EventBackfillLanding"),
      C = S("EventSaleDisplay"),
      O = S("EventCalendar"),
      L = S("EventDetailView"),
      x = S("BroadcastEmbeddable"),
      M = S("Events"),
      I = (a.a.lazy(function() {
        return u.e(62).then(u.bind(null, "jHcm"));
      }),
      a.a.lazy(function() {
        return Promise.all([u.e(0), u.e(3), u.e(5)]).then(u.bind(null, "3WEt"));
      })),
      T = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(p.d)(t, e),
          (t.prototype.render = function() {
            var t = this;
            return (
              Object(E.a)(
                null == window.Prototype,
                "Should not include prototypejs."
              ),
              a.a.createElement(
                c.a,
                { basename: Object(b.a)() },
                a.a.createElement(
                  "div",
                  { className: _.a.App },
                  !1,
                  a.a.createElement(
                    a.a.Suspense,
                    { fallback: a.a.createElement("div", null) },
                    a.a.createElement(
                      l.a,
                      null,
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.AppStorePage(),
                        render: function(e) {
                          return t.props.bEventsMode
                            ? a.a.createElement(M, {
                                appid: e.match.params.appid
                              })
                            : a.a.createElement(
                                x,
                                Object(p.a)({}, e, {
                                  appid: e.match.params.appid
                                })
                              );
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.SaleLandingPage(),
                        render: function(e) {
                          return t.props.bSaleMode
                            ? a.a.createElement(C, {
                                promotionname:
                                  "sale_" + e.match.params.salePageName,
                                language: Object(v.e)(m.c.LANGUAGE)
                              })
                            : a.a.createElement(
                                x,
                                Object(p.a)({}, e, {
                                  promotionname:
                                    "sale_" + e.match.params.salePageName
                                })
                              );
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.CreatorSaleLandingPage(),
                        render: function(e) {
                          return a.a.createElement(C, {
                            promotionname:
                              "sale_" + e.match.params.salePageName,
                            language: Object(v.e)(m.c.LANGUAGE)
                          });
                        }
                      }),
                      a.a.createElement(d.a, {
                        path: b.b.RemotePlay(),
                        render: function(e) {
                          return a.a.createElement(C, {
                            promotionname: "remoteplaylanding",
                            language: Object(v.e)(m.c.LANGUAGE)
                          });
                        }
                      }),
                      a.a.createElement(d.a, {
                        path: b.b.RemotePlayTogether(),
                        render: function(e) {
                          return a.a.createElement(C, {
                            promotionname: "sale_together",
                            language: Object(v.e)(m.c.LANGUAGE)
                          });
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.CuratorPage(),
                        render: function(e) {
                          return a.a.createElement(
                            x,
                            Object(p.a)({}, e, {
                              clanid: m.a.clanid,
                              listid: m.a.listid
                            })
                          );
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.CreatorPage(),
                        render: function(e) {
                          return a.a.createElement(
                            x,
                            Object(p.a)({}, e, {
                              clanid: m.a.clanid,
                              listid: m.a.listid
                            })
                          );
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.PackageStorePage(),
                        render: function(e) {
                          return a.a.createElement(x, {
                            subid: e.match.params.subid
                          });
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.BundleStorePage(),
                        render: function(e) {
                          return a.a.createElement(x, {
                            bundleid: e.match.params.bundleid
                          });
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.EventCalendar(),
                        render: function(e) {
                          return a.a.createElement(O, null);
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.NewsHub(),
                        render: function(e) {
                          return a.a.createElement(O, null);
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.EventView(
                          ":appid(\\d+)",
                          ":event_gid(\\d+)",
                          ":vanity?"
                        ),
                        render: function(e) {
                          return a.a.createElement(L, {
                            key: e.match.params.gid,
                            appid: e.match.params.appid,
                            gid: e.match.params.event_gid
                          });
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.EventBackfill(),
                        render: function(e) {
                          return a.a.createElement(D, Object(p.a)({}, e));
                        }
                      }),
                      a.a.createElement(d.a, {
                        path: b.b.EventModeration(),
                        render: function(e) {
                          return a.a.createElement(
                            k,
                            Object(p.a)({}, e, { appid: e.match.params.appid })
                          );
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.InteractiveRecommender(),
                        render: function(e) {
                          return a.a.createElement(I, null);
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.TopSellers(),
                        render: function(e) {
                          return !1;
                        }
                      }),
                      a.a.createElement(d.a, {
                        exact: !0,
                        path: b.b.DiagData(),
                        render: function(e) {
                          return a.a.createElement(
                            y,
                            Object(p.a)({}, e, {
                              key: e.match.params.gid,
                              strConfigID: "application_config"
                            })
                          );
                        }
                      }),
                      a.a.createElement(d.a, null, !1)
                    )
                  ),
                  a.a.createElement(g.a, { ModalManager: Object(g.e)(window) })
                )
              )
            );
          }),
          t
        );
      })(a.a.Component),
      R = u("X3Ds");
    u("xnZ7"), u("idvb"), u("M1X1");
    R.o(function() {
      return Object(p.b)(this, void 0, void 0, function() {
        return Object(p.e)(this, function(e) {
          switch (e.label) {
            case 0:
              return Object(m.g)("application_config").userConfig
                ? [3, 2]
                : [
                    4,
                    Object(m.h)(s.a, m.c.STORE_BASE_URL + "actions/", {
                      userConfig: !0
                    })
                  ];
            case 1:
              e.sent(), (e.label = 2);
            case 2:
              return [
                4,
                (function(l) {
                  return Object(p.b)(this, void 0, void 0, function() {
                    var t, n, r, o, i, a, s, c;
                    return Object(p.e)(this, function(e) {
                      switch (e.label) {
                        case 0:
                          return (
                            (u.p =
                              m.c.STORE_CDN_URL +
                              "public/javascript/applications/store/"),
                            [
                              4,
                              Promise.all([
                                u("rCDf")("./shared_" + l + ".json"),
                                u("AvbV")("./main_" + l + ".json")
                              ])
                            ]
                          );
                        case 1:
                          return (
                            (t = e.sent()),
                            (n = t[0]),
                            (r = t[1]),
                            (o = Object(p.a)({}, r.default)),
                            "english" === l
                              ? [3, 3]
                              : [
                                  4,
                                  Promise.all([
                                    u.e(2).then(u.t.bind(null, "TYjx", 3)),
                                    u.e(1).then(u.t.bind(null, "/rNK", 3))
                                  ])
                                ]
                          );
                        case 2:
                          return (
                            (i = e.sent()),
                            (a = i[0]),
                            (s = i[1]),
                            (c = Object(p.a)({}, s.default)),
                            h.b.InitFromObjects(o, c, n.default, a.default),
                            [3, 4]
                          );
                        case 3:
                          h.b.InitFromObjects(o, null, n.default, null),
                            (e.label = 4);
                        case 4:
                          return [2];
                      }
                    });
                  });
                })(m.c.LANGUAGE)
              ];
            case 3:
              return (
                e.sent(),
                document.getElementById("application_root") &&
                  r.a.render(
                    a.a.createElement(T, {}),
                    document.getElementById("application_root")
                  ),
                document.getElementById("events_root") &&
                  r.a.render(
                    a.a.createElement(T, { bEventsMode: !0 }),
                    document.getElementById("events_root")
                  ),
                document.getElementById("sale_root") &&
                  r.a.render(
                    a.a.createElement(T, { bSaleMode: !0 }),
                    document.getElementById("sale_root")
                  ),
                [2]
              );
          }
        });
      });
    });
  },
  hJxo: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return s;
    }),
      n.d(t, "b", function() {
        return c;
      });
    var r = n("mrSG"),
      i = n("i8i4"),
      a = n("X3Ds"),
      o = (function() {
        function e(e, t) {
          (this.m_bActive = !1),
            (this.m_fnBoundAnimationFunc = void 0),
            (this.m_window = e),
            (this.m_options = Object.assign({ timing: "sine" }, t));
        }
        return (
          (e.prototype.Start = function() {
            var e;
            switch (
              ((this.m_msStart = performance.now()),
              (this.m_msEnd = this.m_msStart + this.m_options.msDuration),
              this.m_options.timing)
            ) {
              case "linear":
                e = function(e) {
                  return e;
                };
                break;
              case "cubic-in-out":
                e = function(e) {
                  return e < 0.5
                    ? 4 * e * e * e
                    : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
                };
                break;
              case "sine":
              default:
                e = function(e) {
                  return 0.5 - Math.cos(e * Math.PI) / 2;
                };
            }
            (this.m_bActive = !0),
              (this.m_fnBoundAnimationFunc = this.OnInterval.bind(this, e)),
              this.m_window.requestAnimationFrame(this.m_fnBoundAnimationFunc);
          }),
          (e.prototype.BIsActive = function() {
            return this.m_bActive;
          }),
          (e.prototype.End = function() {
            this.m_bActive &&
              (this.Update(1), this.ClearInterval(), this.FireOnComplete());
          }),
          (e.prototype.FireOnComplete = function() {
            this.m_options.onComplete && this.m_options.onComplete();
          }),
          (e.prototype.Cancel = function() {
            this.m_bActive = !1;
          }),
          (e.prototype.OnInterval = function(e) {
            if (this.m_bActive) {
              var t = performance.now() - this.m_msStart;
              if (t >= this.m_options.msDuration) this.End();
              else {
                var n = t / this.m_options.msDuration;
                this.Update(e(n)),
                  this.m_window.requestAnimationFrame(
                    this.m_fnBoundAnimationFunc
                  );
              }
            }
          }),
          (e.prototype.ClearInterval = function() {
            this.m_bActive = !1;
          }),
          e
        );
      })(),
      s = (function(o) {
        function e(e, t, n) {
          var r = o.call(this, a.l(e), n) || this;
          return (r.m_props = {}), (r.m_object = e), (r.m_propTargets = t), r;
        }
        return (
          Object(r.d)(e, o),
          (e.prototype.Start = function() {
            for (var e in ((this.m_props = {}), this.m_propTargets)) {
              var t = parseFloat(this.m_object[e]) || 0,
                n = this.m_propTargets[e];
              t != n && (this.m_props[e] = { start: t, end: n });
            }
            o.prototype.Start.call(this);
          }),
          (e.prototype.Update = function(e) {
            for (var t in this.m_props) {
              var n = this.m_props[t],
                r = n.start + (n.end - n.start) * e;
              this.m_object[t] = r;
            }
          }),
          e
        );
      })(o),
      c = (function(o) {
        function e(e, t, n) {
          var r = o.call(this, a.l(i.findDOMNode(e)), n) || this;
          return (
            (r.m_props = {}),
            (r.m_component = e),
            (r.m_propTargets = t),
            (r.m_setStateOnComplete = n.setStateOnComplete),
            r
          );
        }
        return (
          Object(r.d)(e, o),
          (e.prototype.Start = function() {
            for (var e in ((this.m_props = {}), this.m_propTargets)) {
              var t = parseFloat(this.m_component.state[e]) || 0,
                n = this.m_propTargets[e];
              t != n && (this.m_props[e] = { start: t, end: n });
            }
            o.prototype.Start.call(this);
          }),
          (e.prototype.Update = function(e) {
            var t = {};
            for (var n in this.m_props) {
              var r = this.m_props[n],
                o = r.start + (r.end - r.start) * e;
              t[n] = o;
            }
            this.m_component.setState(t);
          }),
          (e.prototype.FireOnComplete = function() {
            o.prototype.FireOnComplete.call(this),
              this.m_setStateOnComplete &&
                this.m_component.setState(this.m_setStateOnComplete);
          }),
          e
        );
      })(o);
  },
  idvb: function(e, t, n) {},
  kyHq: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return m;
      });
    n("mrSG");
    var r = n("mgoM");
    n.d(t, "c", function() {
      return r.a;
    }),
      n.d(t, "d", function() {
        return r.b;
      }),
      n.d(t, "e", function() {
        return r.e;
      });
    n("2vnA");
    var o, i;
    ((i = o || (o = {}))[(i.EBrowserType_OffScreen = 0)] =
      "EBrowserType_OffScreen"),
      (i[(i.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
      (i[(i.EBrowserType_OpenVROverlay_Dashboard = 2)] =
        "EBrowserType_OpenVROverlay_Dashboard"),
      (i[(i.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
      (i[(i.EBrowserType_DirectHWND_Borderless = 4)] =
        "EBrowserType_DirectHWND_Borderless"),
      (i[(i.EBrowserType_DirectHWND_Hidden = 5)] =
        "EBrowserType_DirectHWND_Hidden"),
      (i[(i.EBrowserType_ChildHWNDNative = 6)] =
        "EBrowserType_ChildHWNDNative"),
      (i[(i.EBrowserType_Transparent_Toplevel = 7)] =
        "EBrowserType_Transparent_Toplevel"),
      (i[(i.EBrowserType_OffScreen_SharedTexture = 8)] =
        "EBrowserType_OffScreen_SharedTexture"),
      (i[(i.EBrowserType_OffScreen_GameOverlay = 9)] =
        "EBrowserType_OffScreen_GameOverlay"),
      (i[(i.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
        "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
      (i[(i.EBrowserType_Offscreen_FriendsUI = 11)] =
        "EBrowserType_Offscreen_FriendsUI"),
      (i[(i.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
    var a, s, c, l;
    ((s = a || (a = {}))[(s.k_EClientUINotificationGroupChatMessage = 1)] =
      "k_EClientUINotificationGroupChatMessage"),
      (s[(s.k_EClientUINotificationFriendChatMessage = 2)] =
        "k_EClientUINotificationFriendChatMessage"),
      (s[(s.k_EClientUINotificationFriendPersonaState = 3)] =
        "k_EClientUINotificationFriendPersonaState"),
      ((l = c || (c = {}))[(l.k_EComputerActiveStateInvalid = 0)] =
        "k_EComputerActiveStateInvalid"),
      (l[(l.k_EComputerActiveStateActive = 1)] =
        "k_EComputerActiveStateActive"),
      (l[(l.k_EComputerActiveStateIdle = 2)] = "k_EComputerActiveStateIdle");
    var u, p;
    ((p = u || (u = {}))[(p.k_EPending = 0)] = "k_EPending"),
      (p[(p.k_EAccepted = 1)] = "k_EAccepted"),
      (p[(p.k_ERejected = 2)] = "k_ERejected");
    function m(e) {
      return "game" === e || "dlc" === e || "software" === e || "music" == e;
    }
    var h, d, f, _;
    ((d = h || (h = {}))[(d.k_EClientUsedInputTypeKeyboard = 0)] =
      "k_EClientUsedInputTypeKeyboard"),
      (d[(d.k_EClientUsedInputTypeMouse = 1)] = "k_EClientUsedInputTypeMouse"),
      (d[(d.k_EClientUsedInputTypeController = 2)] =
        "k_EClientUsedInputTypeController"),
      (d[(d.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax"),
      ((_ = f || (f = {}))[(_.k_ERemoteClientLaunchOK = 1)] =
        "k_ERemoteClientLaunchOK"),
      (_[(_.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
      (_[(_.k_ERemoteClientLaunchRequiresUI = 3)] =
        "k_ERemoteClientLaunchRequiresUI"),
      (_[(_.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
        "k_ERemoteClientLaunchRequiresLaunchOption"),
      (_[(_.k_ERemoteClientLaunchRequiresEULA = 5)] =
        "k_ERemoteClientLaunchRequiresEULA"),
      (_[(_.k_ERemoteClientLaunchTimeout = 6)] =
        "k_ERemoteClientLaunchTimeout"),
      (_[(_.k_ERemoteClientLaunchStreamTimeout = 7)] =
        "k_ERemoteClientLaunchStreamTimeout"),
      (_[(_.k_ERemoteClientLaunchStreamClientFail = 8)] =
        "k_ERemoteClientLaunchStreamClientFail"),
      (_[(_.k_ERemoteClientLaunchOtherGameRunning = 9)] =
        "k_ERemoteClientLaunchOtherGameRunning"),
      (_[(_.k_ERemoteClientLaunchDownloadStarted = 10)] =
        "k_ERemoteClientLaunchDownloadStarted"),
      (_[(_.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
        "k_ERemoteClientLaunchDownloadNoSpace"),
      (_[(_.k_ERemoteClientLaunchDownloadFiltered = 12)] =
        "k_ERemoteClientLaunchDownloadFiltered"),
      (_[(_.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
        "k_ERemoteClientLaunchDownloadRequiresUI"),
      (_[(_.k_ERemoteClientLaunchAccessDenied = 14)] =
        "k_ERemoteClientLaunchAccessDenied"),
      (_[(_.k_ERemoteClientLaunchNetworkError = 15)] =
        "k_ERemoteClientLaunchNetworkError"),
      (_[(_.k_ERemoteClientLaunchProgress = 16)] =
        "k_ERemoteClientLaunchProgress"),
      (_[(_.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
        "k_ERemoteClientLaunchParentalUnlockFailed"),
      (_[(_.k_ERemoteClientLaunchScreenLocked = 18)] =
        "k_ERemoteClientLaunchScreenLocked"),
      (_[(_.k_ERemoteClientLaunchUnsupported = 19)] =
        "k_ERemoteClientLaunchUnsupported"),
      (_[(_.k_ERemoteClientLaunchDisabledLocal = 20)] =
        "k_ERemoteClientLaunchDisabledLocal"),
      (_[(_.k_ERemoteClientLaunchDisabledRemote = 21)] =
        "k_ERemoteClientLaunchDisabledRemote"),
      (_[(_.k_ERemoteClientLaunchBroadcasting = 22)] =
        "k_ERemoteClientLaunchBroadcasting"),
      (_[(_.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
      (_[(_.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
        "k_ERemoteClientLaunchDriversNotInstalled"),
      (_[(_.k_ERemoteClientLaunchTransportUnavailable = 25)] =
        "k_ERemoteClientLaunchTransportUnavailable"),
      (_[(_.k_ERemoteClientLaunchCanceled = 26)] =
        "k_ERemoteClientLaunchCanceled"),
      (_[(_.k_ERemoteClientLaunchInvisible = 27)] =
        "k_ERemoteClientLaunchInvisible"),
      (_[(_.k_ERemoteClientLaunchRestrictedCountry = 28)] =
        "k_ERemoteClientLaunchRestrictedCountry");
    var b, v;
    ((v = b || (b = {}))[(v.k_ENetworkDeviceStateNotPresent = 0)] =
      "k_ENetworkDeviceStateNotPresent"),
      (v[(v.k_ENetworkDeviceStateFailed = 1)] = "k_ENetworkDeviceStateFailed"),
      (v[(v.k_ENetworkDeviceStateDisconnected = 2)] =
        "k_ENetworkDeviceStateDisconnected"),
      (v[(v.k_ENetworkDeviceStateDisconnecting = 3)] =
        "k_ENetworkDeviceStateDisconnecting"),
      (v[(v.k_ENetworkDeviceStateConnecting = 4)] =
        "k_ENetworkDeviceStateConnecting"),
      (v[(v.k_ENetworkDeviceStateConnected = 5)] =
        "k_ENetworkDeviceStateConnected"),
      (v[(v.k_ENetworkDeviceStateRetrying = 6)] =
        "k_ENetworkDeviceStateRetrying");
  },
  lkRc: function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return h;
    }),
      n.d(t, "i", function() {
        return d;
      }),
      n.d(t, "a", function() {
        return f;
      }),
      n.d(t, "b", function() {
        return _;
      }),
      n.d(t, "g", function() {
        return c;
      }),
      n.d(t, "h", function() {
        return l;
      }),
      n.d(t, "f", function() {
        return u;
      }),
      n.d(t, "d", function() {
        return p;
      }),
      n.d(t, "e", function() {
        return b;
      });
    var r,
      m = n("mrSG"),
      o = n("YyVH"),
      i = n("Jnrd"),
      h = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        CDN_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!Object(i.a)()) return r || (r = s()), r;
            var e = Object(i.b)("sessionid");
            e || (e = s());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
      },
      d = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0,
        webapi_token: "",
        authwgtoken: "",
        is_support: !1,
        is_limited: !1,
        short_url: ""
      },
      f = { steamid: "", clanid: 0, listid: 0 },
      _ = {
        CLANSTEAMID: "",
        CLANACCOUNTID: 0,
        ANNOUNCEMENT_GID: "",
        IMG_URL: "",
        APPID: 0,
        VANITY_ID: "",
        IS_CREATOR_HOME: !1,
        HEADER_IMAGE: "",
        APP_NAME: "",
        HAS_ADULT_CONTENT: !1,
        HAS_ADULT_CONTENT_SEX: !1,
        HAS_ADULT_CONTENT_VIOLENCE: !1
      },
      a = "webui_config";
    function s() {
      var e = (function() {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(o.b)(0, 35).toString(36);
        return e;
      })();
      return Object(i.c)("sessionid", e, 0), e;
    }
    function c(e) {
      void 0 === e && (e = a);
      var t = {},
        n = u("config", e);
      n && (delete n.SESSIONID, Object.assign(h, n), (t.config = !0));
      var r = u("userinfo", e);
      r && (Object.assign(d, r), (t.userConfig = !0));
      var o = u("broadcast", e);
      o && (Object.assign(f, o), (t.broadcastConfig = !0));
      var i = u("community", e);
      return i && (Object.assign(_, i), (t.communityConfig = !0)), t;
    }
    function l(l, u, p) {
      return Object(m.b)(this, void 0, void 0, function() {
        var t, n, r, o, i, a, s, c;
        return Object(m.e)(this, function(e) {
          switch (e.label) {
            case 0:
              return p.config ? [4, l.get(u + "ajaxgetconfig")] : [3, 2];
            case 1:
              (t = e.sent()),
                (n = t.data) && (delete n.SESSIONID, Object.assign(h, n)),
                (e.label = 2);
            case 2:
              return p.userConfig
                ? [4, l.get(u + "ajaxgetuserconfig", { withCredentials: !0 })]
                : [3, 4];
            case 3:
              (r = e.sent()),
                (o = r.data) && Object.assign(d, o),
                (e.label = 4);
            case 4:
              return p.broadcastConfig
                ? [4, l.get(u + "ajaxgetbroadcastconfig")]
                : [3, 6];
            case 5:
              (i = e.sent()),
                (a = i.data) && Object.assign(f, a),
                (e.label = 6);
            case 6:
              return p.communityConfig
                ? [4, l.get(u + "ajaxgetcommunityconfig")]
                : [3, 8];
            case 7:
              (s = e.sent()),
                (c = s.data) && Object.assign(_, c),
                (e.label = 8);
            case 8:
              return [2];
          }
        });
      });
    }
    function u(e, t) {
      var n;
      if (
        (void 0 === t && (t = a),
        (n = "string" == typeof t ? document.getElementById(t) : t))
      )
        try {
          return n.hasAttribute("data-" + e)
            ? JSON.parse(n.getAttribute("data-" + e))
            : null;
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else console.error("Missing config element #", t);
    }
    function p() {
      var e = window.location.href;
      return e.startsWith(h.STORE_BASE_URL)
        ? h.STORE_BASE_URL
        : e.startsWith(h.COMMUNITY_BASE_URL)
        ? h.COMMUNITY_BASE_URL
        : e.startsWith(h.PARTNER_BASE_URL)
        ? h.PARTNER_BASE_URL
        : e.startsWith(h.HELP_BASE_URL)
        ? h.HELP_BASE_URL
        : e.startsWith(h.STEAMTV_BASE_URL)
        ? h.STEAMTV_BASE_URL
        : "";
    }
    function b() {
      var e = window.location.href;
      return e.startsWith(h.STORE_BASE_URL)
        ? "store"
        : e.startsWith(h.COMMUNITY_BASE_URL)
        ? "community"
        : e.startsWith(h.PARTNER_BASE_URL)
        ? "partnerweb"
        : e.startsWith(h.HELP_BASE_URL)
        ? "help"
        : e.startsWith(h.STEAMTV_BASE_URL)
        ? "steamtv"
        : "";
    }
  },
  mgoM: function(e, t, n) {
    "use strict";
    n.d(t, "g", function() {
      return i;
    }),
      n.d(t, "h", function() {
        return a;
      }),
      n.d(t, "f", function() {
        return s;
      }),
      n.d(t, "d", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return l;
      }),
      n.d(t, "e", function() {
        return u;
      }),
      n.d(t, "a", function() {
        return r;
      }),
      n.d(t, "b", function() {
        return h;
      });
    var r,
      o,
      i = 1,
      a = 4,
      s = "18446744073709551615";
    function c(e, t) {
      switch ((void 0 === t && (t = "en"), e)) {
        case 0:
          return "en";
        case 1:
          return "de";
        case 2:
          return "fr";
        case 3:
          return "it";
        case 4:
          return "ko";
        case 5:
          return "es";
        case 6:
          return "zn-cn";
        case 7:
          return "zn-tw";
        case 8:
          return "ru";
        case 9:
          return "th";
        case 10:
          return "ja";
        case 11:
          return "pt";
        case 12:
          return "pl";
        case 13:
          return "da";
        case 14:
          return "nl";
        case 15:
          return "fi";
        case 16:
          return "no";
        case 17:
          return "sv";
        case 18:
          return "hu";
        case 19:
          return "cs";
        case 20:
          return "ro";
        case 21:
          return "tr";
        case 25:
          return "ar";
        case 22:
          return "pt-br";
        case 23:
          return "bg";
        case 24:
          return "el";
        case 26:
          return "uk";
        case 27:
          return "es-419";
        case 28:
          return "vn";
        default:
          return t;
      }
    }
    function l(e, t) {
      switch ((void 0 === t && (t = ""), e)) {
        case 0:
          return "english";
        case 1:
          return "german";
        case 2:
          return "french";
        case 3:
          return "italian";
        case 4:
          return "korean";
        case 5:
          return "spanish";
        case 6:
          return "schinese";
        case 7:
          return "tchinese";
        case 8:
          return "russian";
        case 9:
          return "thai";
        case 10:
          return "japanese";
        case 11:
          return "portuguese";
        case 12:
          return "polish";
        case 13:
          return "danish";
        case 14:
          return "dutch";
        case 15:
          return "finnish";
        case 16:
          return "norwegian";
        case 17:
          return "swedish";
        case 18:
          return "hungarian";
        case 19:
          return "czech";
        case 20:
          return "romanian";
        case 21:
          return "turkish";
        case 25:
          return "arabic";
        case 22:
          return "brazilian";
        case 23:
          return "bulgarian";
        case 24:
          return "greek";
        case 26:
          return "ukrainian";
        case 27:
          return "latam";
        case 28:
          return "vietnamese";
        default:
          return t;
      }
    }
    function u(e, t) {
      switch ((void 0 === t && (t = 0), e)) {
        case "english":
          return 0;
        case "german":
          return 1;
        case "french":
          return 2;
        case "italian":
          return 3;
        case "korean":
        case "koreana":
          return 4;
        case "spanish":
          return 5;
        case "schinese":
          return 6;
        case "tchinese":
          return 7;
        case "russian":
          return 8;
        case "thai":
          return 9;
        case "japanese":
          return 10;
        case "portuguese":
          return 11;
        case "polish":
          return 12;
        case "danish":
          return 13;
        case "dutch":
          return 14;
        case "finnish":
          return 15;
        case "norwegian":
          return 16;
        case "swedish":
          return 17;
        case "hungarian":
          return 18;
        case "czech":
          return 19;
        case "romanian":
          return 20;
        case "turkish":
          return 21;
        case "arabic":
          return 25;
        case "brazilian":
          return 22;
        case "bulgarian":
          return 23;
        case "greek":
          return 24;
        case "ukrainian":
          return 26;
        case "latam":
          return 27;
        case "vietnamese":
          return 28;
        default:
          return t;
      }
    }
    ((o = r || (r = {}))[(o.k_EOtherEvent = 1)] = "k_EOtherEvent"),
      (o[(o.k_EGameEvent = 2)] = "k_EGameEvent"),
      (o[(o.k_EPartyEvent = 3)] = "k_EPartyEvent"),
      (o[(o.k_EMeetingEvent = 4)] = "k_EMeetingEvent"),
      (o[(o.k_ESpecialCauseEvent = 5)] = "k_ESpecialCauseEvent"),
      (o[(o.k_EMusicAndArtsEvent = 6)] = "k_EMusicAndArtsEvent"),
      (o[(o.k_ESportsEvent = 7)] = "k_ESportsEvent"),
      (o[(o.k_ETripEvent = 8)] = "k_ETripEvent"),
      (o[(o.k_EChatEvent = 9)] = "k_EChatEvent"),
      (o[(o.k_EGameReleaseEvent = 10)] = "k_EGameReleaseEvent"),
      (o[(o.k_EBroadcastEvent = 11)] = "k_EBroadcastEvent"),
      (o[(o.k_ESmallUpdateEvent = 12)] = "k_ESmallUpdateEvent"),
      (o[(o.k_ERegularUpdateEvent = 13)] = "k_ERegularUpdateEvent"),
      (o[(o.k_EMajorUpdateEvent = 14)] = "k_EMajorUpdateEvent"),
      (o[(o.k_EDLCReleaseEvent = 15)] = "k_EDLCReleaseEvent"),
      (o[(o.k_EFutureReleaseEvent = 16)] = "k_EFutureReleaseEvent"),
      (o[(o.k_EESportTournamentStreamEvent = 17)] =
        "k_EESportTournamentStreamEvent"),
      (o[(o.k_EDevStreamEvent = 18)] = "k_EDevStreamEvent"),
      (o[(o.k_EFamousStreamEvent = 19)] = "k_EFamousStreamEvent"),
      (o[(o.k_EGameSalesEvent = 20)] = "k_EGameSalesEvent"),
      (o[(o.k_EGameItemSalesEvent = 21)] = "k_EGameItemSalesEvent"),
      (o[(o.k_EInGameBonusXPEvent = 22)] = "k_EInGameBonusXPEvent"),
      (o[(o.k_EInGameLootEvent = 23)] = "k_EInGameLootEvent"),
      (o[(o.k_EInGamePerksEvent = 24)] = "k_EInGamePerksEvent"),
      (o[(o.k_EInGameChallengeEvent = 25)] = "k_EInGameChallengeEvent"),
      (o[(o.k_EInGameContestEvent = 26)] = "k_EInGameContestEvent"),
      (o[(o.k_EIRLEvent = 27)] = "k_EIRLEvent"),
      (o[(o.k_ENewsEvent = 28)] = "k_ENewsEvent"),
      (o[(o.k_EBetaReleaseEvent = 29)] = "k_EBetaReleaseEvent"),
      (o[(o.k_EFreeTrial = 31)] = "k_EFreeTrial"),
      (o[(o.k_ESeasonRelease = 32)] = "k_ESeasonRelease"),
      (o[(o.k_ECrosspostEvent = 34)] = "k_ECrosspostEvent"),
      (o[(o.k_EInGameEventGeneral = 35)] = "k_EInGameEventGeneral");
    var p,
      m,
      h = [
        r.k_EOtherEvent,
        r.k_EGameEvent,
        r.k_EPartyEvent,
        r.k_EMeetingEvent,
        r.k_ESpecialCauseEvent,
        r.k_EMusicAndArtsEvent,
        r.k_ESportsEvent,
        r.k_ETripEvent,
        r.k_EChatEvent,
        r.k_EGameReleaseEvent,
        r.k_EBroadcastEvent,
        r.k_ESmallUpdateEvent,
        r.k_ERegularUpdateEvent,
        r.k_EMajorUpdateEvent,
        r.k_EDLCReleaseEvent,
        r.k_EFutureReleaseEvent,
        r.k_EESportTournamentStreamEvent,
        r.k_EDevStreamEvent,
        r.k_EFamousStreamEvent,
        r.k_EGameSalesEvent,
        r.k_EGameItemSalesEvent,
        r.k_EInGameBonusXPEvent,
        r.k_EInGameLootEvent,
        r.k_EInGamePerksEvent,
        r.k_EInGameChallengeEvent,
        r.k_EInGameContestEvent,
        r.k_EIRLEvent,
        r.k_ENewsEvent,
        r.k_EBetaReleaseEvent,
        r.k_EFreeTrial,
        r.k_ESeasonRelease,
        r.k_ECrosspostEvent,
        r.k_EInGameEventGeneral
      ];
    ((m = p || (p = {}))[(m.k_ELaunchSource_None = 0)] =
      "k_ELaunchSource_None"),
      (m[(m.k_ELaunchSource_2ftLibraryDetails = 100)] =
        "k_ELaunchSource_2ftLibraryDetails"),
      (m[(m.k_ELaunchSource_2ftLibraryListView = 101)] =
        "k_ELaunchSource_2ftLibraryListView"),
      (m[(m.k_ELaunchSource_2ftLibraryGrid = 103)] =
        "k_ELaunchSource_2ftLibraryGrid"),
      (m[(m.k_ELaunchSource_InstallSubComplete = 104)] =
        "k_ELaunchSource_InstallSubComplete"),
      (m[(m.k_ELaunchSource_DownloadsPage = 105)] =
        "k_ELaunchSource_DownloadsPage"),
      (m[(m.k_ELaunchSource_RemoteClientStartStreaming = 106)] =
        "k_ELaunchSource_RemoteClientStartStreaming"),
      (m[(m.k_ELaunchSource_2ftMiniModeList = 107)] =
        "k_ELaunchSource_2ftMiniModeList"),
      (m[(m.k_ELaunchSource_10ft = 200)] = "k_ELaunchSource_10ft"),
      (m[(m.k_ELaunchSource_DashAppLaunchCmdLine = 300)] =
        "k_ELaunchSource_DashAppLaunchCmdLine"),
      (m[(m.k_ELaunchSource_DashGameIdLaunchCmdLine = 301)] =
        "k_ELaunchSource_DashGameIdLaunchCmdLine"),
      (m[(m.k_ELaunchSource_RunByGameDir = 302)] =
        "k_ELaunchSource_RunByGameDir"),
      (m[(m.k_ELaunchSource_SubCmdRunDashGame = 303)] =
        "k_ELaunchSource_SubCmdRunDashGame"),
      (m[(m.k_ELaunchSource_SteamURL_Launch = 400)] =
        "k_ELaunchSource_SteamURL_Launch"),
      (m[(m.k_ELaunchSource_SteamURL_Run = 401)] =
        "k_ELaunchSource_SteamURL_Run"),
      (m[(m.k_ELaunchSource_SteamURL_JoinLobby = 402)] =
        "k_ELaunchSource_SteamURL_JoinLobby"),
      (m[(m.k_ELaunchSource_SteamURL_RunGame = 403)] =
        "k_ELaunchSource_SteamURL_RunGame"),
      (m[(m.k_ELaunchSource_SteamURL_RunGameIdOrJumplist = 404)] =
        "k_ELaunchSource_SteamURL_RunGameIdOrJumplist"),
      (m[(m.k_ELaunchSource_SteamURL_RunSafe = 405)] =
        "k_ELaunchSource_SteamURL_RunSafe"),
      (m[(m.k_ELaunchSource_TrayIcon = 500)] = "k_ELaunchSource_TrayIcon"),
      (m[(m.k_ELaunchSource_LibraryLeftColumnContextMenu = 600)] =
        "k_ELaunchSource_LibraryLeftColumnContextMenu"),
      (m[(m.k_ELaunchSource_LibraryLeftColumnDoubleClick = 601)] =
        "k_ELaunchSource_LibraryLeftColumnDoubleClick"),
      (m[(m.k_ELaunchSource_Dota2Launcher = 700)] =
        "k_ELaunchSource_Dota2Launcher"),
      (m[(m.k_ELaunchSource_IRunGameEngine = 800)] =
        "k_ELaunchSource_IRunGameEngine"),
      (m[(m.k_ELaunchSource_DRMFailureResponse = 801)] =
        "k_ELaunchSource_DRMFailureResponse"),
      (m[(m.k_ELaunchSource_DRMDataRequest = 802)] =
        "k_ELaunchSource_DRMDataRequest"),
      (m[(m.k_ELaunchSource_CloudFilePanel = 803)] =
        "k_ELaunchSource_CloudFilePanel"),
      (m[(m.k_ELaunchSource_DiscoveredAlreadyRunning = 804)] =
        "k_ELaunchSource_DiscoveredAlreadyRunning"),
      (m[(m.k_ELaunchSource_GameActionJoinParty = 900)] =
        "k_ELaunchSource_GameActionJoinParty"),
      (m[(m.k_ELaunchSource_AppPortraitContextMenu = 1e3)] =
        "k_ELaunchSource_AppPortraitContextMenu");
  },
  r64O: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    });
    var o = n("mrSG");
    function r(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++)
        n[r - 2] = arguments[r];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, Object(o.g)([!!e, t], n))
        : e || console.warn.apply(console, Object(o.g)([t], n));
    }
  },
  rCDf: function(e, t, r) {
    var o = {
      "./shared_arabic.json": ["d1TB", 34],
      "./shared_brazilian.json": ["Pg9r", 35],
      "./shared_bulgarian.json": ["ENge", 36],
      "./shared_czech.json": ["Ts6V", 37],
      "./shared_danish.json": ["9oiU", 38],
      "./shared_dutch.json": ["nxN4", 39],
      "./shared_english.json": ["TYjx", 2],
      "./shared_finnish.json": ["NuB8", 40],
      "./shared_french.json": ["bOPj", 41],
      "./shared_german.json": ["svuF", 42],
      "./shared_greek.json": ["eJKB", 43],
      "./shared_hungarian.json": ["T7i2", 44],
      "./shared_italian.json": ["w96W", 45],
      "./shared_japanese.json": ["XQ4S", 46],
      "./shared_koreana.json": ["4hyI", 47],
      "./shared_latam.json": ["3qrw", 48],
      "./shared_norwegian.json": ["XA4Q", 49],
      "./shared_polish.json": ["TpXn", 50],
      "./shared_portuguese.json": ["Q8UV", 51],
      "./shared_romanian.json": ["Eme1", 52],
      "./shared_russian.json": ["BUiO", 53],
      "./shared_schinese.json": ["3UpY", 54],
      "./shared_spanish.json": ["4Fxc", 55],
      "./shared_swedish.json": ["0JhB", 56],
      "./shared_tchinese.json": ["OYRc", 57],
      "./shared_thai.json": ["lhAZ", 58],
      "./shared_turkish.json": ["RSoU", 59],
      "./shared_ukrainian.json": ["lNXI", 60],
      "./shared_vietnamese.json": ["RSmC", 61]
    };
    function n(t) {
      var n = o[t];
      return n
        ? r.e(n[1]).then(function() {
            var e = n[0];
            return r.t(e, 3);
          })
        : Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
    }
    (n.keys = function() {
      return Object.keys(o);
    }),
      (n.id = "rCDf"),
      (e.exports = n);
  },
  sUmc: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return a;
    }),
      n.d(t, "a", function() {
        return c;
      });
    var r = n("i8i4"),
      o = n("X3Ds"),
      i = (function() {
        return function(e) {
          this.instance = new s(e, !1);
        };
      })();
    function a(e) {
      return new s(e.body, !0);
    }
    var s = (function() {
        function e(e, t) {
          void 0 === t && (t = !0),
            (this.m_parent = e),
            (this.m_window = e.ownerDocument.defaultView),
            (this.m_bRemoveOnHide = t);
        }
        return (
          (e.prototype.Show = function(n, r) {
            var o = this;
            return (
              this.CancelShowInterval(),
              r
                ? new Promise(function(t, e) {
                    o.iIntervalShow = o.m_window.setTimeout(function() {
                      var e = o.m_parent.ownerDocument;
                      e.defaultView &&
                        !e.defaultView.closed &&
                        (o.InternalShow(n), t());
                    }, r);
                  })
                : (this.InternalShow(n), Promise.resolve())
            );
          }),
          (e.prototype.InternalShow = function(e) {
            this.m_container ||
              ((this.m_container = this.m_parent.ownerDocument.createElement(
                "div"
              )),
              this.m_parent.appendChild(this.m_container)),
              r.render(e, this.m_container);
          }),
          (e.prototype.Hide = function(e) {
            var t = this;
            this.CancelShowInterval(),
              e
                ? (this.iIntervalShow = this.m_window.setTimeout(function() {
                    t.InternalHide();
                  }, e))
                : this.InternalHide();
          }),
          (e.prototype.InternalHide = function() {
            this.m_container &&
              (r.unmountComponentAtNode(this.m_container),
              this.m_bRemoveOnHide &&
                (this.m_parent.removeChild(this.m_container),
                (this.m_container = null)));
          }),
          (e.prototype.CancelShowInterval = function() {
            void 0 !== this.iIntervalShow &&
              (this.m_window.clearInterval(this.iIntervalShow),
              (this.iIntervalShow = void 0));
          }),
          (e.prototype.BIsChildElement = function(e) {
            return this.m_container && o.c(this.m_container, e);
          }),
          e
        );
      })(),
      c = (function() {
        function e(e) {
          (this.m_mapEmbeddedHovers = new WeakMap()), (this.m_strUniqueID = e);
        }
        return (
          (e.prototype.ShowElementDelayed = function(e, t, n, r) {
            var o = this.GetEmbeddedElement(e);
            return (o.activeObject = r), o.instance.Show(n, t);
          }),
          (e.prototype.ShowElement = function(e, t, n) {
            var r = this.GetEmbeddedElement(e);
            (r.activeObject = n), r.instance.Show(t);
          }),
          (e.prototype.HideElement = function(e, t, n) {
            var r = this.GetEmbeddedElement(e);
            r.activeObject == t &&
              ((r.activeObject = void 0), r.instance.Hide(n));
          }),
          (e.prototype.GetEmbeddedElement = function(e) {
            var t = this.m_mapEmbeddedHovers.get(e);
            return (
              t || ((t = new i(e.body)), this.m_mapEmbeddedHovers.set(e, t)), t
            );
          }),
          e
        );
      })();
  },
  umRa: function(e, t, n) {
    e.exports = {
      Toggle: "toggle_Toggle_3POJz",
      Disabled: "toggle_Disabled_1jIKG",
      ToggleRail: "toggle_ToggleRail_3DiLY",
      Highlight: "toggle_Highlight_2FNJu",
      On: "toggle_On_3N31m",
      Off: "toggle_Off_1Qa-r",
      ToggleSwitch: "toggle_ToggleSwitch_21X4K",
      ToggleRow: "toggle_ToggleRow_NnxzA",
      Label: "toggle_Label_xK7Vv"
    };
  },
  xnZ7: function(e, t, n) {
    e.exports = {
      SubText: "shared_common_SubText_vg0EO",
      AvatarImageContainer: "shared_common_AvatarImageContainer_33hdF",
      GameImageContainer: "shared_common_GameImageContainer_2OYAD",
      AvatarImage: "shared_common_AvatarImage_2CQYc",
      STV_HomeGridPreviewDetails:
        "shared_common_STV_HomeGridPreviewDetails_Yncr-",
      ChatAvatarImage: "shared_common_ChatAvatarImage_1cUR_",
      EditButton: "shared_common_EditButton_VsZ-b",
      Small: "shared_common_Small_3M4j8",
      FlexCenter: "shared_common_FlexCenter_1R3yc",
      ThrobberCtn: "shared_common_ThrobberCtn_3m7p6",
      MarkdownLink: "shared_common_MarkdownLink_1Wqum",
      SummaryTextArea: "shared_common_SummaryTextArea_cNMZ-",
      RemoveIcon: "shared_common_RemoveIcon_3NeLW"
    };
  },
  "y+6m": function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return b;
    }),
      n.d(t, "d", function() {
        return v;
      }),
      n.d(t, "b", function() {
        return g;
      }),
      n.d(t, "f", function() {
        return E;
      }),
      n.d(t, "a", function() {
        return y;
      }),
      n.d(t, "e", function() {
        return w;
      }),
      n.d(t, "g", function() {
        return S;
      });
    var a = n("mrSG"),
      r = n("okNM"),
      s = n("q1tI"),
      c = n("i8i4"),
      l = n("TtDX"),
      u = n("JMS6"),
      T = n("X3Ds"),
      o = n("bxiW"),
      i = n("6Y59"),
      p = n("D4wO"),
      m = n("TLQK"),
      h = n("lkRc"),
      d = n("+jbA"),
      f = n.n(d),
      _ = n("exH9"),
      b = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(a.d)(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.children,
              n = e.className,
              r = Object(a.f)(e, ["children", "className"]),
              o =
                this.context.contextMenuInstance &&
                this.context.contextMenuInstance.options.bUseWebStyles
                  ? "popup_menu popup_body"
                  : f.a.contextMenuContents;
            return (
              n && (o += " " + n),
              s.createElement("div", Object(a.a)({}, r, { className: o }), t)
            );
          }),
          (t.contextTypes = {
            contextMenuInstance: function() {
              return null;
            }
          }),
          t
        );
      })(s.PureComponent),
      v = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(a.d)(t, e),
          (t.prototype.OnClick = function(e) {
            this.props.disabled ||
              (this.props.onClick && this.props.onClick(e),
              this.props.bInteractableItem ||
                (this.props.onSelected && this.props.onSelected(e),
                this.context.contextMenuInstance &&
                  this.context.contextMenuInstance.Hide()));
          }),
          (t.prototype.OnMouseEnter = function(e) {
            this.context.contextMenuInstance &&
              this.context.contextMenuInstance.HideSubMenu();
          }),
          (t.prototype.render = function() {
            var e = this.props,
              t = (e.onSelected,
              e.bInteractableItem,
              Object(a.f)(e, ["onSelected", "bInteractableItem"])),
              n = [];
            return (
              this.context.contextMenuInstance &&
              this.context.contextMenuInstance.options.bUseWebStyles
                ? n.push("popup_menu_item")
                : n.push(f.a.contextMenuItem, "contextMenuItem"),
              this.props.className && n.push(this.props.className),
              this.props.disabled && n.push("disabled"),
              s.createElement(
                "div",
                Object(a.a)({ onMouseEnter: this.OnMouseEnter }, t, {
                  onClick: this.OnClick,
                  unselectable: this.props.unselectable,
                  className: _.a.apply(void 0, n)
                }),
                this.props.children
              )
            );
          }),
          (t.contextTypes = {
            contextMenuInstance: function() {
              return null;
            }
          }),
          Object(a.c)([o.a], t.prototype, "OnClick", null),
          Object(a.c)([o.a], t.prototype, "OnMouseEnter", null),
          t
        );
      })(s.PureComponent),
      g = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(a.d)(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.bChecked,
              n = e.children,
              r = e.className,
              o = Object(a.f)(e, ["bChecked", "children", "className"]);
            return s.createElement(
              v,
              Object(a.a)({}, o, {
                className: Object(_.a)(r, t && "menuChecked")
              }),
              s.createElement("div", { className: "contextMenuCheckMark" }),
              n
            );
          }),
          t
        );
      })(s.PureComponent),
      E = (s.PureComponent,
      (function(n) {
        function e(e) {
          var t = n.call(this, e) || this;
          return (
            (t.m_elMenu = void 0),
            (t.m_cReenteranceGuard = 1),
            (t.state = {
              ready: !1,
              menuLeft: void 0,
              menuTop: void 0,
              menuRight: void 0,
              menuBottom: void 0,
              menuWidth: void 0,
              menuHeight: void 0
            }),
            (t.m_mutationObserver = new MutationObserver(t.OnMenuMutation)),
            t
          );
        }
        return (
          Object(a.d)(e, n),
          (e.prototype.BindMenuElement = function(e) {
            var t = this;
            this.m_elMenu &&
              (this.m_mutationObserver.disconnect(),
              this.props.popup ||
                this.m_elMenu.ownerDocument.defaultView.removeEventListener(
                  "resize",
                  this.OnWindowResize
                )),
              e &&
                (this.m_mutationObserver.observe(e, {
                  childList: !0,
                  subtree: !0
                }),
                this.props.popup ||
                  e.ownerDocument.defaultView.addEventListener(
                    "resize",
                    this.OnWindowResize
                  )),
              (this.m_elMenu = e || void 0),
              this.PositionMenu(),
              this.state.ready ||
                (this.props.instance.SetTakeFocus(this.TakeFocus.bind(this)),
                this.setState({ ready: !0 }, function() {
                  t.TakeFocus();
                }));
          }),
          (e.prototype.OnMenuMutation = function(e, t) {
            this.PositionMenu();
          }),
          (e.prototype.OnWindowResize = function() {
            this.PositionMenu();
          }),
          (e.prototype.OnBlur = function(e) {
            (e.relatedTarget && T.c(e.currentTarget, e.relatedTarget)) ||
              (e.relatedTarget &&
                this.props.instance.BIsElementInMenuHierarchy(
                  e.relatedTarget
                )) ||
              this.props.instance.BIsSubMenuVisible() ||
              (this.state.ready &&
                this.props.instance.visible &&
                this.props.instance.Hide());
          }),
          (e.prototype.OnKeyDown = function(e) {
            27 == e.keyCode &&
              this.state.ready &&
              (this.props.instance.Hide(),
              e.preventDefault(),
              e.stopPropagation());
          }),
          (e.prototype.getChildContext = function() {
            return { contextMenuInstance: this.props.instance };
          }),
          (e.prototype.componentDidUpdate = function() {
            0 < this.m_cReenteranceGuard--
              ? this.PositionMenu()
              : (this.m_cReenteranceGuard = 2);
          }),
          (e.prototype.TakeFocus = function() {
            if (
              this.m_elMenu &&
              this.state.ready &&
              this.props.instance.visible &&
              (this.props.popup ||
                !T.c(this.m_elMenu, this.m_elMenu.ownerDocument.activeElement))
            ) {
              var e = this.m_elMenu.querySelector(".ContextMenuAutoFocus");
              e && e.focus ? e.focus() : this.m_elMenu.focus();
            }
          }),
          (e.prototype.PositionMenu = function() {
            var e = this.m_elMenu,
              t = this.props.element;
            if (e && t) {
              var n = t.ownerDocument.defaultView;
              e.ownerDocument.defaultView.CtxUpdate = this.PositionMenu.bind(
                this
              );
              var r = t.getBoundingClientRect(),
                o = e.getBoundingClientRect(),
                i = null != this.props.popup,
                a = this.props.options,
                s = {
                  menuLeft: void 0,
                  menuRight: void 0,
                  menuTop: void 0,
                  menuBottom: void 0,
                  menuWidth: void 0,
                  menuHeight: void 0
                },
                c = this.props.clientX,
                l = this.props.clientY,
                u = n.innerWidth,
                p = n.innerHeight;
              if (i) {
                this.props.options.bScreenCoordinates ||
                  ((c += n.screenLeft), (l += n.screenTop)),
                  (r = T.g(n, r));
                var m = n.screen,
                  h = 0,
                  d = 0;
                m.availLeft && (h = m.availLeft),
                  m.availTop && (d = m.availTop),
                  (u = h + m.availWidth),
                  (p = d + m.availHeight);
              }
              (a.bOverlapHorizontal || a.bOverlapVertical) && (c = l = void 0);
              var f = c || r.left,
                _ = c || r.right,
                b = o.width;
              a.bMatchWidth && ((b = _ - f), (s.menuWidth = b));
              var v = (a.bOverlapHorizontal ? _ : f) - b,
                g = 0 < v,
                E = u - (a.bOverlapHorizontal ? f : _) - b,
                y = 0 < E,
                w = (a.bPreferPopLeft || !y) && g;
              g ||
                y ||
                ((w = y < g),
                a.bFitToWindow && ((b += (w ? v : E) - 8), (s.menuWidth = b))),
                (!a.bPreferPopLeft && y) || !g
                  ? (s.menuLeft = a.bOverlapHorizontal ? f : _)
                  : (s.menuRight = u - (a.bOverlapHorizontal ? _ : f));
              var S = l || r.top,
                k = l || r.bottom,
                D = o.height;
              a.bMatchHeight && ((D = k - S), (s.menuHeight = D));
              var C = (a.bOverlapVertical ? k : S) - D,
                O = 0 < C,
                L = p - (a.bOverlapVertical ? S : k) - D,
                x = 0 < L,
                M = (a.bPreferPopTop || !x) && O && !a.bDisablePopTop;
              if (!O && !x) {
                var I =
                  void 0 !== a.bShiftToFitWindow
                    ? a.bShiftToFitWindow
                    : a.bFitToWindow && !a.bOverlapHorizontal;
                (M = L < C),
                  I && (M ? (s.menuTop = 4) : (s.menuBottom = 4)),
                  a.bFitToWindow &&
                    (I ? (D = Math.min(D, p - 8)) : (D += M ? C : L),
                    (s.menuHeight = D - 8));
              }
              void 0 === s.menuBottom &&
                void 0 === s.menuTop &&
                (M
                  ? (s.menuBottom = p - (a.bOverlapVertical ? k : S))
                  : (s.menuTop = a.bOverlapVertical ? S : k)),
                i
                  ? (s.menuHeight || (s.menuHeight = o.height),
                    s.menuWidth || (s.menuWidth = o.width),
                    s.menuBottom &&
                      !s.menuTop &&
                      ((s.menuTop = p - s.menuBottom - s.menuHeight),
                      (s.menuBottom = void 0)),
                    s.menuRight &&
                      !s.menuLeft &&
                      ((s.menuLeft = u - s.menuRight - s.menuWidth),
                      (s.menuRight = void 0)))
                  : (s.menuLeft && (s.menuLeft += n.scrollX),
                    s.menuTop && (s.menuTop += n.scrollY),
                    s.menuBottom &&
                      (s.menuBottom +=
                        n.document.body.scrollHeight -
                        n.scrollY -
                        n.innerHeight),
                    s.menuRight &&
                      (s.menuRight +=
                        n.document.body.scrollWidth -
                        n.scrollX -
                        n.innerWidth)),
                (s.menuLeft === this.state.menuLeft &&
                  s.menuRight === this.state.menuRight &&
                  s.menuTop === this.state.menuTop &&
                  s.menuBottom === this.state.menuBottom &&
                  s.menuWidth === this.state.menuWidth &&
                  s.menuHeight === this.state.menuHeight) ||
                  this.setState(s);
            }
          }),
          (e.prototype.render = function() {
            var o = this,
              e = { visibility: this.state.ready ? "visible" : "hidden" };
            if (this.props.popup) {
              var i = this.props.element.ownerDocument.defaultView;
              void 0 !== this.state.menuLeft &&
                void 0 !== this.state.menuTop &&
                void 0 !== this.state.menuWidth &&
                void 0 !== this.state.menuHeight &&
                i.SteamClient.Window.GetWindowRestoreDetails(function(e) {
                  var t = o.props.popup.window,
                    n = o.state.menuLeft - i.screenX,
                    r = o.state.menuTop - i.screenY;
                  try {
                    t.SteamClient.Window.PositionWindowRelative(
                      e,
                      n,
                      r,
                      o.state.menuWidth,
                      o.state.menuHeight
                    );
                  } catch (e) {
                    console.error(e);
                  }
                });
            } else
              void 0 !== this.state.menuTop
                ? (e.top = this.state.menuTop)
                : void 0 !== this.state.menuBottom &&
                  (e.bottom = this.state.menuBottom),
                void 0 !== this.state.menuLeft
                  ? (e.left = this.state.menuLeft)
                  : void 0 !== this.state.menuRight &&
                    (e.right = this.state.menuRight),
                void 0 !== this.state.menuHeight &&
                  (e.height = this.state.menuHeight),
                void 0 !== this.state.menuWidth &&
                  (e.width = this.state.menuWidth);
            var t =
              this.props.options.strClassName ||
              (this.props.options.bUseWebStyles
                ? "popup_block_new popup_block_hidden_until_visible"
                : f.a.contextMenu);
            return (
              this.props.instance.visible &&
                this.state.ready &&
                (t += " visible"),
              (t += " " + f.a.ContextMenuFocusContainer),
              s.createElement(
                "div",
                {
                  className: t,
                  ref: this.BindMenuElement,
                  style: e,
                  onBlur: this.OnBlur,
                  onKeyDown: this.OnKeyDown,
                  tabIndex: 0
                },
                this.props.children
              )
            );
          }),
          (e.childContextTypes = {
            contextMenuInstance: function() {
              return null;
            },
            context: function() {
              return null;
            }
          }),
          Object(a.c)([o.a], e.prototype, "BindMenuElement", null),
          Object(a.c)(
            [o.a, Object(p.a)(100)],
            e.prototype,
            "OnMenuMutation",
            null
          ),
          Object(a.c)([o.a], e.prototype, "OnWindowResize", null),
          Object(a.c)([o.a], e.prototype, "OnBlur", null),
          Object(a.c)([o.a], e.prototype, "OnKeyDown", null),
          (e = Object(a.c)([r.observer], e))
        );
      })(s.Component)),
      y = (function(o) {
        function i(e, t, n) {
          var r =
            o.call(this, "contextmenu_" + i.sm_iContextMenuInstance++, {
              title: "Menu",
              html_class: f.a.ContextMenuPopup + " client_chat_frame",
              body_class: "ContextMenuPopupBody",
              replace_existing_popup: !1,
              target_browser: n,
              eCreationFlags: u.b.ContextMenu
            }) || this;
          return (r.m_menuProps = e), (r.m_children = t), r;
        }
        return (
          Object(a.d)(i, o),
          (i.prototype.UpdateParamsBeforeShow = function(e) {
            if (this.m_menuProps.options.bScreenCoordinates)
              e.dimensions = {
                left: this.m_menuProps.clientX,
                top: this.m_menuProps.clientY,
                width: 350,
                height: 1
              };
            else {
              var t = T.g(
                this.m_menuProps.element.ownerDocument.defaultView,
                this.m_menuProps.element.getBoundingClientRect()
              );
              e.dimensions = {
                left: t.right,
                top: t.top,
                width: 350,
                height: 1
              };
            }
            return (
              (e.availscreenwidth = this.m_menuProps.element.ownerDocument.defaultView.screen.availWidth),
              (e.availscreenheight = this.m_menuProps.element.ownerDocument.defaultView.screen.availHeight),
              e
            );
          }),
          (i.prototype.Render = function(e, t) {
            c.render(
              s.createElement(
                E,
                Object(a.a)({}, this.m_menuProps, { popup: this }),
                this.m_children
              ),
              t
            );
          }),
          (i.prototype.OnBlur = function() {}),
          (i.prototype.OnFocus = function() {}),
          (i.prototype.OnLoad = function() {}),
          (i.prototype.OnResize = function() {}),
          (i.prototype.OnClose = function() {}),
          (i.sm_iContextMenuInstance = 0),
          i
        );
      })(u.a);
    function w(e) {
      return s.createElement("div", { className: f.a.ContextMenuMouseOverlay });
    }
    function S(e) {
      var t = [],
        n = T.m(e),
        r = n.getSelection(),
        o = r && 0 < r.rangeCount && 0 < r.toString().length,
        i = e.target,
        a = !1;
      if (
        (i &&
          "tagName" in i &&
          (("INPUT" != i.tagName && "TEXTAREA" != i.tagName) || (a = !0)),
        (n.document.queryCommandEnabled("cut") || (o && a)) &&
          t.push(
            s.createElement(
              v,
              {
                key: "cut",
                onSelected: function() {
                  n.document.execCommand("cut");
                }
              },
              Object(m.c)("#ContextMenu_Cut")
            )
          ),
        (document.queryCommandEnabled("copy") || o) &&
          t.push(
            s.createElement(
              v,
              {
                key: "copy",
                onSelected: function() {
                  n.document.execCommand("copy");
                }
              },
              Object(m.c)("#ContextMenu_Copy")
            )
          ),
        h.c.IN_CLIENT &&
          a &&
          t.push(
            s.createElement(
              v,
              {
                key: "paste",
                onSelected: function() {
                  i.focus(), n.SteamClient._internal.Paste();
                }
              },
              Object(m.c)("#ContextMenu_Paste")
            )
          ),
        t.length)
      )
        Object(l.a)(s.createElement(b, null, t), e);
      else {
        if (e.shiftKey) return;
        e.preventDefault(), e.stopPropagation();
      }
    }
  }
});
