(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "16wW": function(e, t, r) {
      "use strict";
      var o = {};
      (0, r("vn/o").assign)(o, r("QSbz"), r("cX6o"), r("LOvY")),
        (e.exports = o);
    },
    "7tol": function(e, t, r) {
      "use strict";
      var a = (function() {
        for (var e, t = [], r = 0; r < 256; r++) {
          e = r;
          for (var o = 0; o < 8; o++)
            e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1;
          t[r] = e;
        }
        return t;
      })();
      e.exports = function(e, t, r, o) {
        var n = a,
          s = o + r;
        e ^= -1;
        for (var i = o; i < s; i++) e = (e >>> 8) ^ n[255 & (e ^ t[i])];
        return -1 ^ e;
      };
    },
    "B/RK": function(e, t, r) {
      "use strict";
      var a = r("vn/o");
      function o(e) {
        for (var t = e.length; 0 <= --t; ) e[t] = 0;
      }
      var g = 256,
        i = 286,
        u = 30,
        _ = 15,
        n = 16,
        l = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          1,
          2,
          2,
          2,
          2,
          3,
          3,
          3,
          3,
          4,
          4,
          4,
          4,
          5,
          5,
          5,
          5,
          0
        ],
        p = [
          0,
          0,
          0,
          0,
          1,
          1,
          2,
          2,
          3,
          3,
          4,
          4,
          5,
          5,
          6,
          6,
          7,
          7,
          8,
          8,
          9,
          9,
          10,
          10,
          11,
          11,
          12,
          12,
          13,
          13
        ],
        c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
        h = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        d = new Array(576);
      o(d);
      var f = new Array(60);
      o(f);
      var b = new Array(512);
      o(b);
      var y = new Array(256);
      o(y);
      var m = new Array(29);
      o(m);
      var j,
        A,
        E,
        S = new Array(u);
      function v(e, t, r, o, n) {
        (this.static_tree = e),
          (this.extra_bits = t),
          (this.extra_base = r),
          (this.elems = o),
          (this.max_length = n),
          (this.has_stree = e && e.length);
      }
      function s(e, t) {
        (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
      }
      function w(e) {
        return e < 256 ? b[e] : b[256 + (e >>> 7)];
      }
      function I(e, t) {
        (e.pending_buf[e.pending++] = 255 & t),
          (e.pending_buf[e.pending++] = (t >>> 8) & 255);
      }
      function T(e, t, r) {
        e.bi_valid > n - r
          ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
            I(e, e.bi_buf),
            (e.bi_buf = t >> (n - e.bi_valid)),
            (e.bi_valid += r - n))
          : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += r));
      }
      function B(e, t, r) {
        T(e, r[2 * t], r[2 * t + 1]);
      }
      function O(e, t) {
        for (var r = 0; (r |= 1 & e), (e >>>= 1), (r <<= 1), 0 < --t; );
        return r >>> 1;
      }
      function M(e, t, r) {
        var o,
          n,
          s = new Array(_ + 1),
          i = 0;
        for (o = 1; o <= _; o++) s[o] = i = (i + r[o - 1]) << 1;
        for (n = 0; n <= t; n++) {
          var a = e[2 * n + 1];
          0 !== a && (e[2 * n] = O(s[a]++, a));
        }
      }
      function C(e) {
        var t;
        for (t = 0; t < i; t++) e.dyn_ltree[2 * t] = 0;
        for (t = 0; t < u; t++) e.dyn_dtree[2 * t] = 0;
        for (t = 0; t < 19; t++) e.bl_tree[2 * t] = 0;
        (e.dyn_ltree[512] = 1),
          (e.opt_len = e.static_len = 0),
          (e.last_lit = e.matches = 0);
      }
      function x(e) {
        8 < e.bi_valid
          ? I(e, e.bi_buf)
          : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf),
          (e.bi_buf = 0),
          (e.bi_valid = 0);
      }
      function N(e, t, r, o) {
        var n = 2 * t,
          s = 2 * r;
        return e[n] < e[s] || (e[n] === e[s] && o[t] <= o[r]);
      }
      function D(e, t, r) {
        for (
          var o = e.heap[r], n = r << 1;
          n <= e.heap_len &&
          (n < e.heap_len && N(t, e.heap[n + 1], e.heap[n], e.depth) && n++,
          !N(t, o, e.heap[n], e.depth));

        )
          (e.heap[r] = e.heap[n]), (r = n), (n <<= 1);
        e.heap[r] = o;
      }
      function R(e, t, r) {
        var o,
          n,
          s,
          i,
          a = 0;
        if (0 !== e.last_lit)
          for (
            ;
            (o =
              (e.pending_buf[e.d_buf + 2 * a] << 8) |
              e.pending_buf[e.d_buf + 2 * a + 1]),
              (n = e.pending_buf[e.l_buf + a]),
              a++,
              0 === o
                ? B(e, n, t)
                : (B(e, (s = y[n]) + g + 1, t),
                  0 !== (i = l[s]) && T(e, (n -= m[s]), i),
                  B(e, (s = w(--o)), r),
                  0 !== (i = p[s]) && T(e, (o -= S[s]), i)),
              a < e.last_lit;

          );
        B(e, 256, t);
      }
      function U(e, t) {
        var r,
          o,
          n,
          s = t.dyn_tree,
          i = t.stat_desc.static_tree,
          a = t.stat_desc.has_stree,
          g = t.stat_desc.elems,
          u = -1;
        for (e.heap_len = 0, e.heap_max = 573, r = 0; r < g; r++)
          0 !== s[2 * r]
            ? ((e.heap[++e.heap_len] = u = r), (e.depth[r] = 0))
            : (s[2 * r + 1] = 0);
        for (; e.heap_len < 2; )
          (s[2 * (n = e.heap[++e.heap_len] = u < 2 ? ++u : 0)] = 1),
            (e.depth[n] = 0),
            e.opt_len--,
            a && (e.static_len -= i[2 * n + 1]);
        for (t.max_code = u, r = e.heap_len >> 1; 1 <= r; r--) D(e, s, r);
        for (
          n = g;
          (r = e.heap[1]),
            (e.heap[1] = e.heap[e.heap_len--]),
            D(e, s, 1),
            (o = e.heap[1]),
            (e.heap[--e.heap_max] = r),
            (e.heap[--e.heap_max] = o),
            (s[2 * n] = s[2 * r] + s[2 * o]),
            (e.depth[n] =
              (e.depth[r] >= e.depth[o] ? e.depth[r] : e.depth[o]) + 1),
            (s[2 * r + 1] = s[2 * o + 1] = n),
            (e.heap[1] = n++),
            D(e, s, 1),
            2 <= e.heap_len;

        );
        (e.heap[--e.heap_max] = e.heap[1]),
          (function(e, t) {
            var r,
              o,
              n,
              s,
              i,
              a,
              g = t.dyn_tree,
              u = t.max_code,
              l = t.stat_desc.static_tree,
              p = t.stat_desc.has_stree,
              c = t.stat_desc.extra_bits,
              h = t.stat_desc.extra_base,
              d = t.stat_desc.max_length,
              f = 0;
            for (s = 0; s <= _; s++) e.bl_count[s] = 0;
            for (
              g[2 * e.heap[e.heap_max] + 1] = 0, r = e.heap_max + 1;
              r < 573;
              r++
            )
              d < (s = g[2 * g[2 * (o = e.heap[r]) + 1] + 1] + 1) &&
                ((s = d), f++),
                (g[2 * o + 1] = s),
                u < o ||
                  (e.bl_count[s]++,
                  (i = 0),
                  h <= o && (i = c[o - h]),
                  (a = g[2 * o]),
                  (e.opt_len += a * (s + i)),
                  p && (e.static_len += a * (l[2 * o + 1] + i)));
            if (0 !== f) {
              do {
                for (s = d - 1; 0 === e.bl_count[s]; ) s--;
                e.bl_count[s]--,
                  (e.bl_count[s + 1] += 2),
                  e.bl_count[d]--,
                  (f -= 2);
              } while (0 < f);
              for (s = d; 0 !== s; s--)
                for (o = e.bl_count[s]; 0 !== o; )
                  u < (n = e.heap[--r]) ||
                    (g[2 * n + 1] !== s &&
                      ((e.opt_len += (s - g[2 * n + 1]) * g[2 * n]),
                      (g[2 * n + 1] = s)),
                    o--);
            }
          })(e, t),
          M(s, u, e.bl_count);
      }
      function F(e, t, r) {
        var o,
          n,
          s = -1,
          i = t[1],
          a = 0,
          g = 7,
          u = 4;
        for (
          0 === i && ((g = 138), (u = 3)), t[2 * (r + 1) + 1] = 65535, o = 0;
          o <= r;
          o++
        )
          (n = i),
            (i = t[2 * (o + 1) + 1]),
            (++a < g && n === i) ||
              (a < u
                ? (e.bl_tree[2 * n] += a)
                : 0 !== n
                ? (n !== s && e.bl_tree[2 * n]++, e.bl_tree[32]++)
                : a <= 10
                ? e.bl_tree[34]++
                : e.bl_tree[36]++,
              (s = n),
              (u =
                (a = 0) === i
                  ? ((g = 138), 3)
                  : n === i
                  ? ((g = 6), 3)
                  : ((g = 7), 4)));
      }
      function k(e, t, r) {
        var o,
          n,
          s = -1,
          i = t[1],
          a = 0,
          g = 7,
          u = 4;
        for (0 === i && ((g = 138), (u = 3)), o = 0; o <= r; o++)
          if (((n = i), (i = t[2 * (o + 1) + 1]), !(++a < g && n === i))) {
            if (a < u) for (; B(e, n, e.bl_tree), 0 != --a; );
            else
              0 !== n
                ? (n !== s && (B(e, n, e.bl_tree), a--),
                  B(e, 16, e.bl_tree),
                  T(e, a - 3, 2))
                : a <= 10
                ? (B(e, 17, e.bl_tree), T(e, a - 3, 3))
                : (B(e, 18, e.bl_tree), T(e, a - 11, 7));
            (s = n),
              (u =
                (a = 0) === i
                  ? ((g = 138), 3)
                  : n === i
                  ? ((g = 6), 3)
                  : ((g = 7), 4));
          }
      }
      o(S);
      var W = !1;
      function L(e, t, r, o) {
        var n, s, i;
        T(e, 0 + (o ? 1 : 0), 3),
          (s = t),
          (i = r),
          x((n = e)),
          I(n, i),
          I(n, ~i),
          a.arraySet(n.pending_buf, n.window, s, i, n.pending),
          (n.pending += i);
      }
      (t._tr_init = function(e) {
        W ||
          ((function() {
            var e,
              t,
              r,
              o,
              n,
              s = new Array(_ + 1);
            for (o = r = 0; o < 28; o++)
              for (m[o] = r, e = 0; e < 1 << l[o]; e++) y[r++] = o;
            for (y[r - 1] = o, o = n = 0; o < 16; o++)
              for (S[o] = n, e = 0; e < 1 << p[o]; e++) b[n++] = o;
            for (n >>= 7; o < u; o++)
              for (S[o] = n << 7, e = 0; e < 1 << (p[o] - 7); e++)
                b[256 + n++] = o;
            for (t = 0; t <= _; t++) s[t] = 0;
            for (e = 0; e <= 143; ) (d[2 * e + 1] = 8), e++, s[8]++;
            for (; e <= 255; ) (d[2 * e + 1] = 9), e++, s[9]++;
            for (; e <= 279; ) (d[2 * e + 1] = 7), e++, s[7]++;
            for (; e <= 287; ) (d[2 * e + 1] = 8), e++, s[8]++;
            for (M(d, 287, s), e = 0; e < u; e++)
              (f[2 * e + 1] = 5), (f[2 * e] = O(e, 5));
            (j = new v(d, l, 257, i, _)),
              (A = new v(f, p, 0, u, _)),
              (E = new v(new Array(0), c, 0, 19, 7));
          })(),
          (W = !0)),
          (e.l_desc = new s(e.dyn_ltree, j)),
          (e.d_desc = new s(e.dyn_dtree, A)),
          (e.bl_desc = new s(e.bl_tree, E)),
          (e.bi_buf = 0),
          (e.bi_valid = 0),
          C(e);
      }),
        (t._tr_stored_block = L),
        (t._tr_flush_block = function(e, t, r, o) {
          var n,
            s,
            i = 0;
          0 < e.level
            ? (2 === e.strm.data_type &&
                (e.strm.data_type = (function(e) {
                  var t,
                    r = 4093624447;
                  for (t = 0; t <= 31; t++, r >>>= 1)
                    if (1 & r && 0 !== e.dyn_ltree[2 * t]) return 0;
                  if (
                    0 !== e.dyn_ltree[18] ||
                    0 !== e.dyn_ltree[20] ||
                    0 !== e.dyn_ltree[26]
                  )
                    return 1;
                  for (t = 32; t < g; t++)
                    if (0 !== e.dyn_ltree[2 * t]) return 1;
                  return 0;
                })(e)),
              U(e, e.l_desc),
              U(e, e.d_desc),
              (i = (function(e) {
                var t;
                for (
                  F(e, e.dyn_ltree, e.l_desc.max_code),
                    F(e, e.dyn_dtree, e.d_desc.max_code),
                    U(e, e.bl_desc),
                    t = 18;
                  3 <= t && 0 === e.bl_tree[2 * h[t] + 1];
                  t--
                );
                return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
              })(e)),
              (n = (e.opt_len + 3 + 7) >>> 3),
              (s = (e.static_len + 3 + 7) >>> 3) <= n && (n = s))
            : (n = s = r + 5),
            r + 4 <= n && -1 !== t
              ? L(e, t, r, o)
              : 4 === e.strategy || s === n
              ? (T(e, 2 + (o ? 1 : 0), 3), R(e, d, f))
              : (T(e, 4 + (o ? 1 : 0), 3),
                (function(e, t, r, o) {
                  var n;
                  for (
                    T(e, t - 257, 5), T(e, r - 1, 5), T(e, o - 4, 4), n = 0;
                    n < o;
                    n++
                  )
                    T(e, e.bl_tree[2 * h[n] + 1], 3);
                  k(e, e.dyn_ltree, t - 1), k(e, e.dyn_dtree, r - 1);
                })(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, i + 1),
                R(e, e.dyn_ltree, e.dyn_dtree)),
            C(e),
            o && x(e);
        }),
        (t._tr_tally = function(e, t, r) {
          return (
            (e.pending_buf[e.d_buf + 2 * e.last_lit] = (t >>> 8) & 255),
            (e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t),
            (e.pending_buf[e.l_buf + e.last_lit] = 255 & r),
            e.last_lit++,
            0 === t
              ? e.dyn_ltree[2 * r]++
              : (e.matches++,
                t--,
                e.dyn_ltree[2 * (y[r] + g + 1)]++,
                e.dyn_dtree[2 * w(t)]++),
            e.last_lit === e.lit_bufsize - 1
          );
        }),
        (t._tr_align = function(e) {
          var t;
          T(e, 2, 3),
            B(e, 256, d),
            16 === (t = e).bi_valid
              ? (I(t, t.bi_buf), (t.bi_buf = 0), (t.bi_valid = 0))
              : 8 <= t.bi_valid &&
                ((t.pending_buf[t.pending++] = 255 & t.bi_buf),
                (t.bi_buf >>= 8),
                (t.bi_valid -= 8));
        });
    },
    LOvY: function(e, t, r) {
      "use strict";
      e.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      };
    },
    QSbz: function(e, t, r) {
      "use strict";
      var i = r("oXfm"),
        a = r("vn/o"),
        g = r("eydS"),
        n = r("Tcbo"),
        s = r("iTZm"),
        u = Object.prototype.toString,
        l = 0,
        p = -1,
        c = 0,
        h = 8;
      function d(e) {
        if (!(this instanceof d)) return new d(e);
        this.options = a.assign(
          {
            level: p,
            method: h,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: c,
            to: ""
          },
          e || {}
        );
        var t = this.options;
        t.raw && 0 < t.windowBits
          ? (t.windowBits = -t.windowBits)
          : t.gzip &&
            0 < t.windowBits &&
            t.windowBits < 16 &&
            (t.windowBits += 16),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new s()),
          (this.strm.avail_out = 0);
        var r = i.deflateInit2(
          this.strm,
          t.level,
          t.method,
          t.windowBits,
          t.memLevel,
          t.strategy
        );
        if (r !== l) throw new Error(n[r]);
        if (
          (t.header && i.deflateSetHeader(this.strm, t.header), t.dictionary)
        ) {
          var o;
          if (
            ((o =
              "string" == typeof t.dictionary
                ? g.string2buf(t.dictionary)
                : "[object ArrayBuffer]" === u.call(t.dictionary)
                ? new Uint8Array(t.dictionary)
                : t.dictionary),
            (r = i.deflateSetDictionary(this.strm, o)) !== l)
          )
            throw new Error(n[r]);
          this._dict_set = !0;
        }
      }
      function o(e, t) {
        var r = new d(t);
        if ((r.push(e, !0), r.err)) throw r.msg || n[r.err];
        return r.result;
      }
      (d.prototype.push = function(e, t) {
        var r,
          o,
          n = this.strm,
          s = this.options.chunkSize;
        if (this.ended) return !1;
        (o = t === ~~t ? t : !0 === t ? 4 : 0),
          "string" == typeof e
            ? (n.input = g.string2buf(e))
            : "[object ArrayBuffer]" === u.call(e)
            ? (n.input = new Uint8Array(e))
            : (n.input = e),
          (n.next_in = 0),
          (n.avail_in = n.input.length);
        do {
          if (
            (0 === n.avail_out &&
              ((n.output = new a.Buf8(s)), (n.next_out = 0), (n.avail_out = s)),
            1 !== (r = i.deflate(n, o)) && r !== l)
          )
            return this.onEnd(r), !(this.ended = !0);
          (0 !== n.avail_out && (0 !== n.avail_in || (4 !== o && 2 !== o))) ||
            ("string" === this.options.to
              ? this.onData(g.buf2binstring(a.shrinkBuf(n.output, n.next_out)))
              : this.onData(a.shrinkBuf(n.output, n.next_out)));
        } while ((0 < n.avail_in || 0 === n.avail_out) && 1 !== r);
        return 4 === o
          ? ((r = i.deflateEnd(this.strm)),
            this.onEnd(r),
            (this.ended = !0),
            r === l)
          : 2 !== o || (this.onEnd(l), !(n.avail_out = 0));
      }),
        (d.prototype.onData = function(e) {
          this.chunks.push(e);
        }),
        (d.prototype.onEnd = function(e) {
          e === l &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = a.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
        }),
        (t.Deflate = d),
        (t.deflate = o),
        (t.deflateRaw = function(e, t) {
          return ((t = t || {}).raw = !0), o(e, t);
        }),
        (t.gzip = function(e, t) {
          return ((t = t || {}).gzip = !0), o(e, t);
        });
    },
    Tcbo: function(e, t, r) {
      "use strict";
      e.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
      };
    },
    aFNf: function(e, t, r) {
      "use strict";
      var D = r("vn/o"),
        R = [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          13,
          15,
          17,
          19,
          23,
          27,
          31,
          35,
          43,
          51,
          59,
          67,
          83,
          99,
          115,
          131,
          163,
          195,
          227,
          258,
          0,
          0
        ],
        U = [
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          16,
          17,
          17,
          17,
          17,
          18,
          18,
          18,
          18,
          19,
          19,
          19,
          19,
          20,
          20,
          20,
          20,
          21,
          21,
          21,
          21,
          16,
          72,
          78
        ],
        F = [
          1,
          2,
          3,
          4,
          5,
          7,
          9,
          13,
          17,
          25,
          33,
          49,
          65,
          97,
          129,
          193,
          257,
          385,
          513,
          769,
          1025,
          1537,
          2049,
          3073,
          4097,
          6145,
          8193,
          12289,
          16385,
          24577,
          0,
          0
        ],
        k = [
          16,
          16,
          16,
          16,
          17,
          17,
          18,
          18,
          19,
          19,
          20,
          20,
          21,
          21,
          22,
          22,
          23,
          23,
          24,
          24,
          25,
          25,
          26,
          26,
          27,
          27,
          28,
          28,
          29,
          29,
          64,
          64
        ];
      e.exports = function(e, t, r, o, n, s, i, a) {
        var g,
          u,
          l,
          p,
          c,
          h,
          d,
          f,
          _,
          b = a.bits,
          y = 0,
          m = 0,
          j = 0,
          A = 0,
          E = 0,
          S = 0,
          v = 0,
          w = 0,
          I = 0,
          T = 0,
          B = null,
          O = 0,
          M = new D.Buf16(16),
          C = new D.Buf16(16),
          x = null,
          N = 0;
        for (y = 0; y <= 15; y++) M[y] = 0;
        for (m = 0; m < o; m++) M[t[r + m]]++;
        for (E = b, A = 15; 1 <= A && 0 === M[A]; A--);
        if ((A < E && (E = A), 0 === A))
          return (n[s++] = 20971520), (n[s++] = 20971520), (a.bits = 1), 0;
        for (j = 1; j < A && 0 === M[j]; j++);
        for (E < j && (E = j), y = w = 1; y <= 15; y++)
          if (((w <<= 1), (w -= M[y]) < 0)) return -1;
        if (0 < w && (0 === e || 1 !== A)) return -1;
        for (C[1] = 0, y = 1; y < 15; y++) C[y + 1] = C[y] + M[y];
        for (m = 0; m < o; m++) 0 !== t[r + m] && (i[C[t[r + m]]++] = m);
        if (
          ((h =
            0 === e
              ? ((B = x = i), 19)
              : 1 === e
              ? ((B = R), (O -= 257), (x = U), (N -= 257), 256)
              : ((B = F), (x = k), -1)),
          (y = j),
          (c = s),
          (v = m = T = 0),
          (l = -1),
          (p = (I = 1 << (S = E)) - 1),
          (1 === e && 852 < I) || (2 === e && 592 < I))
        )
          return 1;
        for (;;) {
          for (
            d = y - v,
              _ =
                i[m] < h
                  ? ((f = 0), i[m])
                  : i[m] > h
                  ? ((f = x[N + i[m]]), B[O + i[m]])
                  : ((f = 96), 0),
              g = 1 << (y - v),
              j = u = 1 << S;
            (n[c + (T >> v) + (u -= g)] = (d << 24) | (f << 16) | _ | 0),
              0 !== u;

          );
          for (g = 1 << (y - 1); T & g; ) g >>= 1;
          if (
            (0 !== g ? ((T &= g - 1), (T += g)) : (T = 0), m++, 0 == --M[y])
          ) {
            if (y === A) break;
            y = t[r + i[m]];
          }
          if (E < y && (T & p) !== l) {
            for (
              0 === v && (v = E), c += j, w = 1 << (S = y - v);
              S + v < A && !((w -= M[S + v]) <= 0);

            )
              S++, (w <<= 1);
            if (((I += 1 << S), (1 === e && 852 < I) || (2 === e && 592 < I)))
              return 1;
            n[(l = T & p)] = (E << 24) | (S << 16) | (c - s) | 0;
          }
        }
        return (
          0 !== T && (n[c + T] = ((y - v) << 24) | (64 << 16) | 0),
          (a.bits = E),
          0
        );
      };
    },
    cX6o: function(e, t, r) {
      "use strict";
      var c = r("nm4c"),
        h = r("vn/o"),
        d = r("eydS"),
        f = r("LOvY"),
        o = r("Tcbo"),
        n = r("iTZm"),
        s = r("gBP8"),
        _ = Object.prototype.toString;
      function i(e) {
        if (!(this instanceof i)) return new i(e);
        this.options = h.assign(
          { chunkSize: 16384, windowBits: 0, to: "" },
          e || {}
        );
        var t = this.options;
        t.raw &&
          0 <= t.windowBits &&
          t.windowBits < 16 &&
          ((t.windowBits = -t.windowBits),
          0 === t.windowBits && (t.windowBits = -15)),
          !(0 <= t.windowBits && t.windowBits < 16) ||
            (e && e.windowBits) ||
            (t.windowBits += 32),
          15 < t.windowBits &&
            t.windowBits < 48 &&
            0 == (15 & t.windowBits) &&
            (t.windowBits |= 15),
          (this.err = 0),
          (this.msg = ""),
          (this.ended = !1),
          (this.chunks = []),
          (this.strm = new n()),
          (this.strm.avail_out = 0);
        var r = c.inflateInit2(this.strm, t.windowBits);
        if (r !== f.Z_OK) throw new Error(o[r]);
        (this.header = new s()), c.inflateGetHeader(this.strm, this.header);
      }
      function a(e, t) {
        var r = new i(t);
        if ((r.push(e, !0), r.err)) throw r.msg || o[r.err];
        return r.result;
      }
      (i.prototype.push = function(e, t) {
        var r,
          o,
          n,
          s,
          i,
          a,
          g = this.strm,
          u = this.options.chunkSize,
          l = this.options.dictionary,
          p = !1;
        if (this.ended) return !1;
        (o = t === ~~t ? t : !0 === t ? f.Z_FINISH : f.Z_NO_FLUSH),
          "string" == typeof e
            ? (g.input = d.binstring2buf(e))
            : "[object ArrayBuffer]" === _.call(e)
            ? (g.input = new Uint8Array(e))
            : (g.input = e),
          (g.next_in = 0),
          (g.avail_in = g.input.length);
        do {
          if (
            (0 === g.avail_out &&
              ((g.output = new h.Buf8(u)), (g.next_out = 0), (g.avail_out = u)),
            (r = c.inflate(g, f.Z_NO_FLUSH)) === f.Z_NEED_DICT &&
              l &&
              ((a =
                "string" == typeof l
                  ? d.string2buf(l)
                  : "[object ArrayBuffer]" === _.call(l)
                  ? new Uint8Array(l)
                  : l),
              (r = c.inflateSetDictionary(this.strm, a))),
            r === f.Z_BUF_ERROR && !0 === p && ((r = f.Z_OK), (p = !1)),
            r !== f.Z_STREAM_END && r !== f.Z_OK)
          )
            return this.onEnd(r), !(this.ended = !0);
          g.next_out &&
            ((0 !== g.avail_out &&
              r !== f.Z_STREAM_END &&
              (0 !== g.avail_in ||
                (o !== f.Z_FINISH && o !== f.Z_SYNC_FLUSH))) ||
              ("string" === this.options.to
                ? ((n = d.utf8border(g.output, g.next_out)),
                  (s = g.next_out - n),
                  (i = d.buf2string(g.output, n)),
                  (g.next_out = s),
                  (g.avail_out = u - s),
                  s && h.arraySet(g.output, g.output, n, s, 0),
                  this.onData(i))
                : this.onData(h.shrinkBuf(g.output, g.next_out)))),
            0 === g.avail_in && 0 === g.avail_out && (p = !0);
        } while ((0 < g.avail_in || 0 === g.avail_out) && r !== f.Z_STREAM_END);
        return (
          r === f.Z_STREAM_END && (o = f.Z_FINISH),
          o === f.Z_FINISH
            ? ((r = c.inflateEnd(this.strm)),
              this.onEnd(r),
              (this.ended = !0),
              r === f.Z_OK)
            : o !== f.Z_SYNC_FLUSH || (this.onEnd(f.Z_OK), !(g.avail_out = 0))
        );
      }),
        (i.prototype.onData = function(e) {
          this.chunks.push(e);
        }),
        (i.prototype.onEnd = function(e) {
          e === f.Z_OK &&
            ("string" === this.options.to
              ? (this.result = this.chunks.join(""))
              : (this.result = h.flattenChunks(this.chunks))),
            (this.chunks = []),
            (this.err = e),
            (this.msg = this.strm.msg);
        }),
        (t.Inflate = i),
        (t.inflate = a),
        (t.inflateRaw = function(e, t) {
          return ((t = t || {}).raw = !0), a(e, t);
        }),
        (t.ungzip = a);
    },
    eydS: function(e, t, r) {
      "use strict";
      var g = r("vn/o"),
        n = !0,
        s = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (e) {
        n = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (e) {
        s = !1;
      }
      for (var u = new g.Buf8(256), o = 0; o < 256; o++)
        u[o] =
          252 <= o
            ? 6
            : 248 <= o
            ? 5
            : 240 <= o
            ? 4
            : 224 <= o
            ? 3
            : 192 <= o
            ? 2
            : 1;
      function l(e, t) {
        if (t < 65537 && ((e.subarray && s) || (!e.subarray && n)))
          return String.fromCharCode.apply(null, g.shrinkBuf(e, t));
        for (var r = "", o = 0; o < t; o++) r += String.fromCharCode(e[o]);
        return r;
      }
      (u[254] = u[254] = 1),
        (t.string2buf = function(e) {
          var t,
            r,
            o,
            n,
            s,
            i = e.length,
            a = 0;
          for (n = 0; n < i; n++)
            55296 == (64512 & (r = e.charCodeAt(n))) &&
              n + 1 < i &&
              56320 == (64512 & (o = e.charCodeAt(n + 1))) &&
              ((r = 65536 + ((r - 55296) << 10) + (o - 56320)), n++),
              (a += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
          for (t = new g.Buf8(a), n = s = 0; s < a; n++)
            55296 == (64512 & (r = e.charCodeAt(n))) &&
              n + 1 < i &&
              56320 == (64512 & (o = e.charCodeAt(n + 1))) &&
              ((r = 65536 + ((r - 55296) << 10) + (o - 56320)), n++),
              (t[s++] =
                r < 128
                  ? r
                  : ((t[s++] =
                      r < 2048
                        ? 192 | (r >>> 6)
                        : ((t[s++] =
                            r < 65536
                              ? 224 | (r >>> 12)
                              : ((t[s++] = 240 | (r >>> 18)),
                                128 | ((r >>> 12) & 63))),
                          128 | ((r >>> 6) & 63))),
                    128 | (63 & r)));
          return t;
        }),
        (t.buf2binstring = function(e) {
          return l(e, e.length);
        }),
        (t.binstring2buf = function(e) {
          for (var t = new g.Buf8(e.length), r = 0, o = t.length; r < o; r++)
            t[r] = e.charCodeAt(r);
          return t;
        }),
        (t.buf2string = function(e, t) {
          var r,
            o,
            n,
            s,
            i = t || e.length,
            a = new Array(2 * i);
          for (r = o = 0; r < i; )
            if ((n = e[r++]) < 128) a[o++] = n;
            else if (4 < (s = u[n])) (a[o++] = 65533), (r += s - 1);
            else {
              for (n &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < i; )
                (n = (n << 6) | (63 & e[r++])), s--;
              a[o++] =
                1 < s
                  ? 65533
                  : n < 65536
                  ? n
                  : ((n -= 65536),
                    (a[o++] = 55296 | ((n >> 10) & 1023)),
                    56320 | (1023 & n));
            }
          return l(a, o);
        }),
        (t.utf8border = function(e, t) {
          var r;
          for (
            (t = t || e.length) > e.length && (t = e.length), r = t - 1;
            0 <= r && 128 == (192 & e[r]);

          )
            r--;
          return r < 0 ? t : 0 === r ? t : r + u[e[r]] > t ? r : t;
        });
    },
    frGm: function(e, t, r) {
      "use strict";
      e.exports = function(e, t) {
        var r,
          o,
          n,
          s,
          i,
          a,
          g,
          u,
          l,
          p,
          c,
          h,
          d,
          f,
          _,
          b,
          y,
          m,
          j,
          A,
          E,
          S,
          v,
          w,
          I;
        (r = e.state),
          (o = e.next_in),
          (w = e.input),
          (n = o + (e.avail_in - 5)),
          (s = e.next_out),
          (I = e.output),
          (i = s - (t - e.avail_out)),
          (a = s + (e.avail_out - 257)),
          (g = r.dmax),
          (u = r.wsize),
          (l = r.whave),
          (p = r.wnext),
          (c = r.window),
          (h = r.hold),
          (d = r.bits),
          (f = r.lencode),
          (_ = r.distcode),
          (b = (1 << r.lenbits) - 1),
          (y = (1 << r.distbits) - 1);
        e: do {
          d < 15 &&
            ((h += w[o++] << d), (d += 8), (h += w[o++] << d), (d += 8)),
            (m = f[h & b]);
          t: for (;;) {
            if (((h >>>= j = m >>> 24), (d -= j), 0 == (j = (m >>> 16) & 255)))
              I[s++] = 65535 & m;
            else {
              if (!(16 & j)) {
                if (0 == (64 & j)) {
                  m = f[(65535 & m) + (h & ((1 << j) - 1))];
                  continue t;
                }
                if (32 & j) {
                  r.mode = 12;
                  break e;
                }
                (e.msg = "invalid literal/length code"), (r.mode = 30);
                break e;
              }
              (A = 65535 & m),
                (j &= 15) &&
                  (d < j && ((h += w[o++] << d), (d += 8)),
                  (A += h & ((1 << j) - 1)),
                  (h >>>= j),
                  (d -= j)),
                d < 15 &&
                  ((h += w[o++] << d), (d += 8), (h += w[o++] << d), (d += 8)),
                (m = _[h & y]);
              r: for (;;) {
                if (
                  ((h >>>= j = m >>> 24),
                  (d -= j),
                  !(16 & (j = (m >>> 16) & 255)))
                ) {
                  if (0 == (64 & j)) {
                    m = _[(65535 & m) + (h & ((1 << j) - 1))];
                    continue r;
                  }
                  (e.msg = "invalid distance code"), (r.mode = 30);
                  break e;
                }
                if (
                  ((E = 65535 & m),
                  d < (j &= 15) &&
                    ((h += w[o++] << d),
                    (d += 8) < j && ((h += w[o++] << d), (d += 8))),
                  g < (E += h & ((1 << j) - 1)))
                ) {
                  (e.msg = "invalid distance too far back"), (r.mode = 30);
                  break e;
                }
                if (((h >>>= j), (d -= j), (j = s - i) < E)) {
                  if (l < (j = E - j) && r.sane) {
                    (e.msg = "invalid distance too far back"), (r.mode = 30);
                    break e;
                  }
                  if (((v = c), (S = 0) === p)) {
                    if (((S += u - j), j < A)) {
                      for (A -= j; (I[s++] = c[S++]), --j; );
                      (S = s - E), (v = I);
                    }
                  } else if (p < j) {
                    if (((S += u + p - j), (j -= p) < A)) {
                      for (A -= j; (I[s++] = c[S++]), --j; );
                      if (((S = 0), p < A)) {
                        for (A -= j = p; (I[s++] = c[S++]), --j; );
                        (S = s - E), (v = I);
                      }
                    }
                  } else if (((S += p - j), j < A)) {
                    for (A -= j; (I[s++] = c[S++]), --j; );
                    (S = s - E), (v = I);
                  }
                  for (; 2 < A; )
                    (I[s++] = v[S++]),
                      (I[s++] = v[S++]),
                      (I[s++] = v[S++]),
                      (A -= 3);
                  A && ((I[s++] = v[S++]), 1 < A && (I[s++] = v[S++]));
                } else {
                  for (
                    S = s - E;
                    (I[s++] = I[S++]),
                      (I[s++] = I[S++]),
                      (I[s++] = I[S++]),
                      2 < (A -= 3);

                  );
                  A && ((I[s++] = I[S++]), 1 < A && (I[s++] = I[S++]));
                }
                break;
              }
            }
            break;
          }
        } while (o < n && s < a);
        (o -= A = d >> 3),
          (h &= (1 << (d -= A << 3)) - 1),
          (e.next_in = o),
          (e.next_out = s),
          (e.avail_in = o < n ? n - o + 5 : 5 - (o - n)),
          (e.avail_out = s < a ? a - s + 257 : 257 - (s - a)),
          (r.hold = h),
          (r.bits = d);
      };
    },
    gBP8: function(e, t, r) {
      "use strict";
      e.exports = function() {
        (this.text = 0),
          (this.time = 0),
          (this.xflags = 0),
          (this.os = 0),
          (this.extra = null),
          (this.extra_len = 0),
          (this.name = ""),
          (this.comment = ""),
          (this.hcrc = 0),
          (this.done = !1);
      };
    },
    hRO2: function(module, exports) {
      var $jscomp = {
        scope: {},
        getGlobal: function(e) {
          return "undefined" != typeof window && window === e
            ? e
            : "undefined" != typeof global
            ? global
            : e;
        }
      };
      ($jscomp.global = $jscomp.getGlobal(this)),
        ($jscomp.initSymbol = function() {
          $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol),
            ($jscomp.initSymbol = function() {});
        }),
        ($jscomp.symbolCounter_ = 0),
        ($jscomp.Symbol = function(e) {
          return "jscomp_symbol_" + e + $jscomp.symbolCounter_++;
        }),
        ($jscomp.initSymbolIterator = function() {
          $jscomp.initSymbol(),
            $jscomp.global.Symbol.iterator ||
              ($jscomp.global.Symbol.iterator = $jscomp.global.Symbol(
                "iterator"
              )),
            ($jscomp.initSymbolIterator = function() {});
        }),
        ($jscomp.makeIterator = function(e) {
          $jscomp.initSymbolIterator(),
            $jscomp.initSymbol(),
            $jscomp.initSymbolIterator();
          var t = e[Symbol.iterator];
          if (t) return t.call(e);
          var r = 0;
          return {
            next: function() {
              return r < e.length ? { done: !1, value: e[r++] } : { done: !0 };
            }
          };
        }),
        ($jscomp.arrayFromIterator = function(e) {
          for (var t, r = []; !(t = e.next()).done; ) r.push(t.value);
          return r;
        }),
        ($jscomp.arrayFromIterable = function(e) {
          return e instanceof Array
            ? e
            : $jscomp.arrayFromIterator($jscomp.makeIterator(e));
        }),
        ($jscomp.inherits = function(e, t) {
          function r() {}
          for (var o in ((r.prototype = t.prototype),
          (e.prototype = new r()),
          (e.prototype.constructor = e),
          t))
            if (Object.defineProperties) {
              var n = Object.getOwnPropertyDescriptor(t, o);
              n && Object.defineProperty(e, o, n);
            } else e[o] = t[o];
        }),
        ($jscomp.array = $jscomp.array || {}),
        ($jscomp.iteratorFromArray = function(t, r) {
          $jscomp.initSymbolIterator(), t instanceof String && (t += "");
          var o = 0,
            n = {
              next: function() {
                if (o < t.length) {
                  var e = o++;
                  return { value: r(e, t[e]), done: !1 };
                }
                return (
                  (n.next = function() {
                    return { done: !0, value: void 0 };
                  }),
                  n.next()
                );
              }
            };
          return (
            $jscomp.initSymbol(),
            $jscomp.initSymbolIterator(),
            (n[Symbol.iterator] = function() {
              return n;
            }),
            n
          );
        }),
        ($jscomp.findInternal = function(e, t, r) {
          e instanceof String && (e = String(e));
          for (var o = e.length, n = 0; n < o; n++) {
            var s = e[n];
            if (t.call(r, s, n, e)) return { i: n, v: s };
          }
          return { i: -1, v: void 0 };
        }),
        ($jscomp.array.from = function(e, t, r) {
          $jscomp.initSymbolIterator(),
            (t =
              null != t
                ? t
                : function(e) {
                    return e;
                  });
          var o = [];
          if (
            ($jscomp.initSymbol(),
            $jscomp.initSymbolIterator(),
            "function" == typeof (n = e[Symbol.iterator]) && (e = n.call(e)),
            "function" == typeof e.next)
          )
            for (; !(n = e.next()).done; ) o.push(t.call(r, n.value));
          else
            for (var n = e.length, s = 0; s < n; s++) o.push(t.call(r, e[s]));
          return o;
        }),
        ($jscomp.array.of = function(e) {
          return $jscomp.array.from(arguments);
        }),
        ($jscomp.array.entries = function() {
          return $jscomp.iteratorFromArray(this, function(e, t) {
            return [e, t];
          });
        }),
        ($jscomp.array.installHelper_ = function(e, t) {
          !Array.prototype[e] &&
            Object.defineProperties &&
            Object.defineProperty &&
            Object.defineProperty(Array.prototype, e, {
              configurable: !0,
              enumerable: !1,
              writable: !0,
              value: t
            });
        }),
        ($jscomp.array.entries$install = function() {
          $jscomp.array.installHelper_("entries", $jscomp.array.entries);
        }),
        ($jscomp.array.keys = function() {
          return $jscomp.iteratorFromArray(this, function(e) {
            return e;
          });
        }),
        ($jscomp.array.keys$install = function() {
          $jscomp.array.installHelper_("keys", $jscomp.array.keys);
        }),
        ($jscomp.array.values = function() {
          return $jscomp.iteratorFromArray(this, function(e, t) {
            return t;
          });
        }),
        ($jscomp.array.values$install = function() {
          $jscomp.array.installHelper_("values", $jscomp.array.values);
        }),
        ($jscomp.array.copyWithin = function(e, t, r) {
          var o = this.length;
          if (
            ((e = Number(e)),
            (t = Number(t)),
            (r = Number(null != r ? r : o)),
            e < t)
          )
            for (r = Math.min(r, o); t < r; )
              t in this ? (this[e++] = this[t++]) : (delete this[e++], t++);
          else
            for (e += (r = Math.min(r, o + t - e)) - t; t < r; )
              --r in this ? (this[--e] = this[r]) : delete this[e];
          return this;
        }),
        ($jscomp.array.copyWithin$install = function() {
          $jscomp.array.installHelper_("copyWithin", $jscomp.array.copyWithin);
        }),
        ($jscomp.array.fill = function(e, t, r) {
          var o = this.length || 0;
          for (
            t < 0 && (t = Math.max(0, o + t)),
              (null == r || o < r) && (r = o),
              (r = Number(r)) < 0 && (r = Math.max(0, o + r)),
              t = Number(t || 0);
            t < r;
            t++
          )
            this[t] = e;
          return this;
        }),
        ($jscomp.array.fill$install = function() {
          $jscomp.array.installHelper_("fill", $jscomp.array.fill);
        }),
        ($jscomp.array.find = function(e, t) {
          return $jscomp.findInternal(this, e, t).v;
        }),
        ($jscomp.array.find$install = function() {
          $jscomp.array.installHelper_("find", $jscomp.array.find);
        }),
        ($jscomp.array.findIndex = function(e, t) {
          return $jscomp.findInternal(this, e, t).i;
        }),
        ($jscomp.array.findIndex$install = function() {
          $jscomp.array.installHelper_("findIndex", $jscomp.array.findIndex);
        }),
        ($jscomp.ASSUME_NO_NATIVE_MAP = !1),
        ($jscomp.Map$isConformant = function() {
          if ($jscomp.ASSUME_NO_NATIVE_MAP) return !1;
          var e = $jscomp.global.Map;
          if (!e || !e.prototype.entries || "function" != typeof Object.seal)
            return !1;
          try {
            var t = Object.seal({ x: 4 }),
              r = new e($jscomp.makeIterator([[t, "s"]]));
            if (
              "s" != r.get(t) ||
              1 != r.size ||
              r.get({ x: 4 }) ||
              r.set({ x: 4 }, "t") != r ||
              2 != r.size
            )
              return !1;
            var o = r.entries(),
              n = o.next();
            return (
              !n.done &&
              n.value[0] == t &&
              "s" == n.value[1] &&
              !(
                (n = o.next()).done ||
                4 != n.value[0].x ||
                "t" != n.value[1] ||
                !o.next().done
              )
            );
          } catch (e) {
            return !1;
          }
        }),
        ($jscomp.Map = function(e) {
          if (
            ((this.data_ = {}),
            (this.head_ = $jscomp.Map.createHead()),
            (this.size = 0),
            e)
          ) {
            e = $jscomp.makeIterator(e);
            for (var t; !(t = e.next()).done; )
              (t = t.value), this.set(t[0], t[1]);
          }
        }),
        ($jscomp.Map.prototype.set = function(e, t) {
          var r = $jscomp.Map.maybeGetEntry(this, e);
          return (
            r.list || (r.list = this.data_[r.id] = []),
            r.entry
              ? (r.entry.value = t)
              : ((r.entry = {
                  next: this.head_,
                  previous: this.head_.previous,
                  head: this.head_,
                  key: e,
                  value: t
                }),
                r.list.push(r.entry),
                (this.head_.previous.next = r.entry),
                (this.head_.previous = r.entry),
                this.size++),
            this
          );
        }),
        ($jscomp.Map.prototype.delete = function(e) {
          return !(
            !(e = $jscomp.Map.maybeGetEntry(this, e)).entry ||
            !e.list ||
            (e.list.splice(e.index, 1),
            e.list.length || delete this.data_[e.id],
            (e.entry.previous.next = e.entry.next),
            (e.entry.next.previous = e.entry.previous),
            (e.entry.head = null),
            this.size--,
            0)
          );
        }),
        ($jscomp.Map.prototype.clear = function() {
          (this.data_ = {}),
            (this.head_ = this.head_.previous = $jscomp.Map.createHead()),
            (this.size = 0);
        }),
        ($jscomp.Map.prototype.has = function(e) {
          return !!$jscomp.Map.maybeGetEntry(this, e).entry;
        }),
        ($jscomp.Map.prototype.get = function(e) {
          return (e = $jscomp.Map.maybeGetEntry(this, e).entry) && e.value;
        }),
        ($jscomp.Map.prototype.entries = function() {
          return $jscomp.Map.makeIterator_(this, function(e) {
            return [e.key, e.value];
          });
        }),
        ($jscomp.Map.prototype.keys = function() {
          return $jscomp.Map.makeIterator_(this, function(e) {
            return e.key;
          });
        }),
        ($jscomp.Map.prototype.values = function() {
          return $jscomp.Map.makeIterator_(this, function(e) {
            return e.value;
          });
        }),
        ($jscomp.Map.prototype.forEach = function(e, t) {
          for (var r, o = this.entries(); !(r = o.next()).done; )
            (r = r.value), e.call(t, r[1], r[0], this);
        }),
        ($jscomp.Map.maybeGetEntry = function(e, t) {
          var r = $jscomp.Map.getId(t),
            o = e.data_[r];
          if (o && Object.prototype.hasOwnProperty.call(e.data_, r))
            for (var n = 0; n < o.length; n++) {
              var s = o[n];
              if ((t != t && s.key != s.key) || t === s.key)
                return { id: r, list: o, index: n, entry: s };
            }
          return { id: r, list: o, index: -1, entry: void 0 };
        }),
        ($jscomp.Map.makeIterator_ = function(e, t) {
          var r = e.head_,
            o = {
              next: function() {
                if (r) {
                  for (; r.head != e.head_; ) r = r.previous;
                  for (; r.next != r.head; )
                    return (r = r.next), { done: !1, value: t(r) };
                  r = null;
                }
                return { done: !0, value: void 0 };
              }
            };
          return (
            $jscomp.initSymbol(),
            $jscomp.initSymbolIterator(),
            (o[Symbol.iterator] = function() {
              return o;
            }),
            o
          );
        }),
        ($jscomp.Map.mapIndex_ = 0),
        ($jscomp.Map.createHead = function() {
          var e = {};
          return (e.previous = e.next = e.head = e);
        }),
        ($jscomp.Map.getId = function(e) {
          if (!(e instanceof Object)) return "p_" + e;
          if (!($jscomp.Map.idKey in e))
            try {
              $jscomp.Map.defineProperty(e, $jscomp.Map.idKey, {
                value: ++$jscomp.Map.mapIndex_
              });
            } catch (e) {}
          return $jscomp.Map.idKey in e ? e[$jscomp.Map.idKey] : "o_ " + e;
        }),
        ($jscomp.Map.defineProperty = Object.defineProperty
          ? function(e, t, r) {
              Object.defineProperty(e, t, { value: String(r) });
            }
          : function(e, t, r) {
              e[t] = String(r);
            }),
        ($jscomp.Map.Entry = function() {}),
        ($jscomp.Map$install = function() {
          $jscomp.initSymbol(),
            $jscomp.initSymbolIterator(),
            $jscomp.Map$isConformant()
              ? ($jscomp.Map = $jscomp.global.Map)
              : ($jscomp.initSymbol(),
                $jscomp.initSymbolIterator(),
                ($jscomp.Map.prototype[Symbol.iterator] =
                  $jscomp.Map.prototype.entries),
                $jscomp.initSymbol(),
                ($jscomp.Map.idKey = Symbol("map-id-key")),
                ($jscomp.Map$install = function() {}));
        }),
        ($jscomp.math = $jscomp.math || {}),
        ($jscomp.math.clz32 = function(e) {
          if (0 == (e = Number(e) >>> 0)) return 32;
          var t = 0;
          return (
            0 == (4294901760 & e) && ((e <<= 16), (t += 16)),
            0 == (4278190080 & e) && ((e <<= 8), (t += 8)),
            0 == (4026531840 & e) && ((e <<= 4), (t += 4)),
            0 == (3221225472 & e) && ((e <<= 2), (t += 2)),
            0 == (2147483648 & e) && t++,
            t
          );
        }),
        ($jscomp.math.imul = function(e, t) {
          var r = 65535 & (e = Number(e)),
            o = 65535 & (t = Number(t));
          return (
            (r * o +
              (((((e >>> 16) & 65535) * o + r * ((t >>> 16) & 65535)) << 16) >>>
                0)) |
            0
          );
        }),
        ($jscomp.math.sign = function(e) {
          return 0 === (e = Number(e)) || isNaN(e) ? e : 0 < e ? 1 : -1;
        }),
        ($jscomp.math.log10 = function(e) {
          return Math.log(e) / Math.LN10;
        }),
        ($jscomp.math.log2 = function(e) {
          return Math.log(e) / Math.LN2;
        }),
        ($jscomp.math.log1p = function(e) {
          if ((e = Number(e)) < 0.25 && -0.25 < e) {
            for (var t = e, r = 1, o = e, n = 0, s = 1; n != o; )
              o = (n = o) + ((s *= -1) * (t *= e)) / ++r;
            return o;
          }
          return Math.log(1 + e);
        }),
        ($jscomp.math.expm1 = function(e) {
          if ((e = Number(e)) < 0.25 && -0.25 < e) {
            for (var t = e, r = 1, o = e, n = 0; n != o; )
              o = (n = o) + (t *= e / ++r);
            return o;
          }
          return Math.exp(e) - 1;
        }),
        ($jscomp.math.cosh = function(e) {
          return (e = Number(e)), (Math.exp(e) + Math.exp(-e)) / 2;
        }),
        ($jscomp.math.sinh = function(e) {
          return 0 === (e = Number(e)) ? e : (Math.exp(e) - Math.exp(-e)) / 2;
        }),
        ($jscomp.math.tanh = function(e) {
          if (0 === (e = Number(e))) return e;
          var t = (1 - (t = Math.exp(-2 * Math.abs(e)))) / (1 + t);
          return e < 0 ? -t : t;
        }),
        ($jscomp.math.acosh = function(e) {
          return (e = Number(e)), Math.log(e + Math.sqrt(e * e - 1));
        }),
        ($jscomp.math.asinh = function(e) {
          if (0 === (e = Number(e))) return e;
          var t = Math.log(Math.abs(e) + Math.sqrt(e * e + 1));
          return e < 0 ? -t : t;
        }),
        ($jscomp.math.atanh = function(e) {
          return (
            (e = Number(e)),
            ($jscomp.math.log1p(e) - $jscomp.math.log1p(-e)) / 2
          );
        }),
        ($jscomp.math.hypot = function(e, t, r) {
          (e = Number(e)), (t = Number(t));
          var o,
            n,
            s,
            i = Math.max(Math.abs(e), Math.abs(t));
          for (o = 2; o < arguments.length; o++)
            i = Math.max(i, Math.abs(arguments[o]));
          if (1e100 < i || i < 1e-100) {
            for (
              s = (e /= i) * e + (t /= i) * t, o = 2;
              o < arguments.length;
              o++
            )
              s += (n = Number(arguments[o]) / i) * n;
            return Math.sqrt(s) * i;
          }
          for (s = e * e + t * t, o = 2; o < arguments.length; o++)
            s += (n = Number(arguments[o])) * n;
          return Math.sqrt(s);
        }),
        ($jscomp.math.trunc = function(e) {
          if (
            ((e = Number(e)),
            isNaN(e) || 1 / 0 === e || -1 / 0 === e || 0 === e)
          )
            return e;
          var t = Math.floor(Math.abs(e));
          return e < 0 ? -t : t;
        }),
        ($jscomp.math.cbrt = function(e) {
          if (0 === e) return e;
          e = Number(e);
          var t = Math.pow(Math.abs(e), 1 / 3);
          return e < 0 ? -t : t;
        }),
        ($jscomp.number = $jscomp.number || {}),
        ($jscomp.number.isFinite = function(e) {
          return (
            "number" == typeof e && !isNaN(e) && 1 / 0 !== e && -1 / 0 !== e
          );
        }),
        ($jscomp.number.isInteger = function(e) {
          return !!$jscomp.number.isFinite(e) && e === Math.floor(e);
        }),
        ($jscomp.number.isNaN = function(e) {
          return "number" == typeof e && isNaN(e);
        }),
        ($jscomp.number.isSafeInteger = function(e) {
          return (
            $jscomp.number.isInteger(e) &&
            Math.abs(e) <= $jscomp.number.MAX_SAFE_INTEGER
          );
        }),
        ($jscomp.number.EPSILON = Math.pow(2, -52)),
        ($jscomp.number.MAX_SAFE_INTEGER = 9007199254740991),
        ($jscomp.number.MIN_SAFE_INTEGER = -9007199254740991),
        ($jscomp.object = $jscomp.object || {}),
        ($jscomp.object.assign = function(e, t) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (o)
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
          }
          return e;
        }),
        ($jscomp.object.is = function(e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        }),
        ($jscomp.ASSUME_NO_NATIVE_SET = !1),
        ($jscomp.Set$isConformant = function() {
          if ($jscomp.ASSUME_NO_NATIVE_SET) return !1;
          var e = $jscomp.global.Set;
          if (!e || !e.prototype.entries || "function" != typeof Object.seal)
            return !1;
          try {
            var t = Object.seal({ x: 4 }),
              r = new e($jscomp.makeIterator([t]));
            if (
              !r.has(t) ||
              1 != r.size ||
              r.add(t) != r ||
              1 != r.size ||
              r.add({ x: 4 }) != r ||
              2 != r.size
            )
              return !1;
            var o = r.entries(),
              n = o.next();
            return (
              !n.done &&
              n.value[0] == t &&
              n.value[1] == t &&
              !(n = o.next()).done &&
              n.value[0] != t &&
              4 == n.value[0].x &&
              n.value[1] == n.value[0] &&
              o.next().done
            );
          } catch (e) {
            return !1;
          }
        }),
        ($jscomp.Set = function(e) {
          if (((this.map_ = new $jscomp.Map()), e)) {
            e = $jscomp.makeIterator(e);
            for (var t; !(t = e.next()).done; ) this.add(t.value);
          }
          this.size = this.map_.size;
        }),
        ($jscomp.Set.prototype.add = function(e) {
          return this.map_.set(e, e), (this.size = this.map_.size), this;
        }),
        ($jscomp.Set.prototype.delete = function(e) {
          return (e = this.map_.delete(e)), (this.size = this.map_.size), e;
        }),
        ($jscomp.Set.prototype.clear = function() {
          this.map_.clear(), (this.size = 0);
        }),
        ($jscomp.Set.prototype.has = function(e) {
          return this.map_.has(e);
        }),
        ($jscomp.Set.prototype.entries = function() {
          return this.map_.entries();
        }),
        ($jscomp.Set.prototype.values = function() {
          return this.map_.values();
        }),
        ($jscomp.Set.prototype.forEach = function(t, r) {
          var o = this;
          this.map_.forEach(function(e) {
            return t.call(r, e, e, o);
          });
        }),
        ($jscomp.Set$install = function() {
          $jscomp.Map$install(),
            $jscomp.Set$isConformant()
              ? ($jscomp.Set = $jscomp.global.Set)
              : ($jscomp.initSymbol(),
                $jscomp.initSymbolIterator(),
                ($jscomp.Set.prototype[Symbol.iterator] =
                  $jscomp.Set.prototype.values),
                ($jscomp.Set$install = function() {}));
        }),
        ($jscomp.string = $jscomp.string || {}),
        ($jscomp.checkStringArgs = function(e, t, r) {
          if (null == e)
            throw new TypeError(
              "The 'this' value for String.prototype." +
                r +
                " must not be null or undefined"
            );
          if (t instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype." +
                r +
                " must not be a regular expression"
            );
          return e + "";
        }),
        ($jscomp.string.fromCodePoint = function(e) {
          for (var t = "", r = 0; r < arguments.length; r++) {
            var o = Number(arguments[r]);
            if (o < 0 || 1114111 < o || o !== Math.floor(o))
              throw new RangeError("invalid_code_point " + o);
            o <= 65535
              ? (t += String.fromCharCode(o))
              : ((o -= 65536),
                (t += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                (t += String.fromCharCode((1023 & o) | 56320)));
          }
          return t;
        }),
        ($jscomp.string.repeat = function(e) {
          var t = $jscomp.checkStringArgs(this, null, "repeat");
          if (e < 0 || 1342177279 < e)
            throw new RangeError("Invalid count value");
          e |= 0;
          for (var r = ""; e; ) 1 & e && (r += t), (e >>>= 1) && (t += t);
          return r;
        }),
        ($jscomp.string.repeat$install = function() {
          String.prototype.repeat ||
            (String.prototype.repeat = $jscomp.string.repeat);
        }),
        ($jscomp.string.codePointAt = function(e) {
          var t = $jscomp.checkStringArgs(this, null, "codePointAt"),
            r = t.length;
          if (0 <= (e = Number(e) || 0) && e < r) {
            e |= 0;
            var o = t.charCodeAt(e);
            return o < 55296 || 56319 < o || e + 1 === r
              ? o
              : (e = t.charCodeAt(e + 1)) < 56320 || 57343 < e
              ? o
              : 1024 * (o - 55296) + e + 9216;
          }
        }),
        ($jscomp.string.codePointAt$install = function() {
          String.prototype.codePointAt ||
            (String.prototype.codePointAt = $jscomp.string.codePointAt);
        }),
        ($jscomp.string.includes = function(e, t) {
          return (
            -1 !==
            $jscomp.checkStringArgs(this, e, "includes").indexOf(e, t || 0)
          );
        }),
        ($jscomp.string.includes$install = function() {
          String.prototype.includes ||
            (String.prototype.includes = $jscomp.string.includes);
        }),
        ($jscomp.string.startsWith = function(e, t) {
          var r = $jscomp.checkStringArgs(this, e, "startsWith");
          e += "";
          for (
            var o = r.length,
              n = e.length,
              s = Math.max(0, Math.min(0 | t, r.length)),
              i = 0;
            i < n && s < o;

          )
            if (r[s++] != e[i++]) return !1;
          return n <= i;
        }),
        ($jscomp.string.startsWith$install = function() {
          String.prototype.startsWith ||
            (String.prototype.startsWith = $jscomp.string.startsWith);
        }),
        ($jscomp.string.endsWith = function(e, t) {
          var r = $jscomp.checkStringArgs(this, e, "endsWith");
          (e += ""), void 0 === t && (t = r.length);
          for (
            var o = Math.max(0, Math.min(0 | t, r.length)), n = e.length;
            0 < n && 0 < o;

          )
            if (r[--o] != e[--n]) return !1;
          return n <= 0;
        }),
        ($jscomp.string.endsWith$install = function() {
          String.prototype.endsWith ||
            (String.prototype.endsWith = $jscomp.string.endsWith);
        });
      var COMPILED = !0,
        goog = goog || {};
      (goog.global = this),
        (goog.isDef = function(e) {
          return void 0 !== e;
        }),
        (goog.exportPath_ = function(e, t, r) {
          (e = e.split(".")),
            (r = r || goog.global),
            e[0] in r || !r.execScript || r.execScript("var " + e[0]);
          for (var o; e.length && (o = e.shift()); )
            !e.length && goog.isDef(t)
              ? (r[o] = t)
              : (r = r[o] ? r[o] : (r[o] = {}));
        }),
        (goog.define = function(e, t) {
          var r = t;
          COMPILED ||
            (goog.global.CLOSURE_UNCOMPILED_DEFINES &&
            Object.prototype.hasOwnProperty.call(
              goog.global.CLOSURE_UNCOMPILED_DEFINES,
              e
            )
              ? (r = goog.global.CLOSURE_UNCOMPILED_DEFINES[e])
              : goog.global.CLOSURE_DEFINES &&
                Object.prototype.hasOwnProperty.call(
                  goog.global.CLOSURE_DEFINES,
                  e
                ) &&
                (r = goog.global.CLOSURE_DEFINES[e])),
            goog.exportPath_(e, r);
        }),
        (goog.DEBUG = !0),
        (goog.LOCALE = "en"),
        (goog.TRUSTED_SITE = !0),
        (goog.STRICT_MODE_COMPATIBLE = !1),
        (goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG),
        (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1),
        (goog.provide = function(e) {
          if (!COMPILED && goog.isProvided_(e))
            throw Error('Namespace "' + e + '" already declared.');
          goog.constructNamespace_(e);
        }),
        (goog.constructNamespace_ = function(e, t) {
          if (!COMPILED) {
            delete goog.implicitNamespaces_[e];
            for (
              var r = e;
              (r = r.substring(0, r.lastIndexOf("."))) &&
              !goog.getObjectByName(r);

            )
              goog.implicitNamespaces_[r] = !0;
          }
          goog.exportPath_(e, t);
        }),
        (goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/),
        (goog.module = function(e) {
          if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_))
            throw Error("Invalid module identifier");
          if (!goog.isInModuleLoader_())
            throw Error("Module " + e + " has been loaded incorrectly.");
          if (goog.moduleLoaderState_.moduleName)
            throw Error("goog.module may only be called once per module.");
          if (((goog.moduleLoaderState_.moduleName = e), !COMPILED)) {
            if (goog.isProvided_(e))
              throw Error('Namespace "' + e + '" already declared.');
            delete goog.implicitNamespaces_[e];
          }
        }),
        (goog.module.get = function(e) {
          return goog.module.getInternal_(e);
        }),
        (goog.module.getInternal_ = function(e) {
          if (!COMPILED)
            return goog.isProvided_(e)
              ? e in goog.loadedModules_
                ? goog.loadedModules_[e]
                : goog.getObjectByName(e)
              : null;
        }),
        (goog.moduleLoaderState_ = null),
        (goog.isInModuleLoader_ = function() {
          return null != goog.moduleLoaderState_;
        }),
        (goog.module.declareLegacyNamespace = function() {
          if (!COMPILED && !goog.isInModuleLoader_())
            throw Error(
              "goog.module.declareLegacyNamespace must be called from within a goog.module"
            );
          if (!COMPILED && !goog.moduleLoaderState_.moduleName)
            throw Error(
              "goog.module must be called prior to goog.module.declareLegacyNamespace."
            );
          goog.moduleLoaderState_.declareLegacyNamespace = !0;
        }),
        (goog.setTestOnly = function(e) {
          if (goog.DISALLOW_TEST_ONLY_CODE)
            throw ((e = e || ""),
            Error(
              "Importing test-only code into non-debug environment" +
                (e ? ": " + e : ".")
            ));
        }),
        (goog.forwardDeclare = function(e) {}),
        COMPILED ||
          ((goog.isProvided_ = function(e) {
            return (
              e in goog.loadedModules_ ||
              (!goog.implicitNamespaces_[e] &&
                goog.isDefAndNotNull(goog.getObjectByName(e)))
            );
          }),
          (goog.implicitNamespaces_ = { "goog.module": !0 })),
        (goog.getObjectByName = function(e, t) {
          for (
            var r, o = e.split("."), n = t || goog.global;
            (r = o.shift());

          ) {
            if (!goog.isDefAndNotNull(n[r])) return null;
            n = n[r];
          }
          return n;
        }),
        (goog.globalize = function(e, t) {
          var r,
            o = t || goog.global;
          for (r in e) o[r] = e[r];
        }),
        (goog.addDependency = function(e, t, r, o) {
          if (goog.DEPENDENCIES_ENABLED) {
            var n;
            e = e.replace(/\\/g, "/");
            for (var s = goog.dependencies_, i = 0; (n = t[i]); i++)
              (s.nameToPath[n] = e), (s.pathIsModule[e] = !!o);
            for (o = 0; (t = r[o]); o++)
              e in s.requires || (s.requires[e] = {}), (s.requires[e][t] = !0);
          }
        }),
        (goog.ENABLE_DEBUG_LOADER = !0),
        (goog.logToConsole_ = function(e) {
          goog.global.console && goog.global.console.error(e);
        }),
        (goog.require = function(e) {
          if (!COMPILED) {
            if (
              (goog.ENABLE_DEBUG_LOADER &&
                goog.IS_OLD_IE_ &&
                goog.maybeProcessDeferredDep_(e),
              goog.isProvided_(e))
            )
              return goog.isInModuleLoader_()
                ? goog.module.getInternal_(e)
                : null;
            if (goog.ENABLE_DEBUG_LOADER) {
              var t = goog.getPathFromDeps_(e);
              if (t) return goog.writeScripts_(t), null;
            }
            throw ((e = "goog.require could not find: " + e),
            goog.logToConsole_(e),
            Error(e));
          }
        }),
        (goog.basePath = ""),
        (goog.nullFunction = function() {}),
        (goog.abstractMethod = function() {
          throw Error("unimplemented abstract method");
        }),
        (goog.addSingletonGetter = function(e) {
          e.getInstance = function() {
            return e.instance_
              ? e.instance_
              : (goog.DEBUG &&
                  (goog.instantiatedSingletons_[
                    goog.instantiatedSingletons_.length
                  ] = e),
                (e.instance_ = new e()));
          };
        }),
        (goog.instantiatedSingletons_ = []),
        (goog.LOAD_MODULE_USING_EVAL = !0),
        (goog.SEAL_MODULE_EXPORTS = goog.DEBUG),
        (goog.loadedModules_ = {}),
        (goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER),
        goog.DEPENDENCIES_ENABLED &&
          ((goog.dependencies_ = {
            pathIsModule: {},
            nameToPath: {},
            requires: {},
            visited: {},
            written: {},
            deferred: {}
          }),
          (goog.inHtmlDocument_ = function() {
            var e = goog.global.document;
            return null != e && "write" in e;
          }),
          (goog.findBasePath_ = function() {
            if (goog.isDef(goog.global.CLOSURE_BASE_PATH))
              goog.basePath = goog.global.CLOSURE_BASE_PATH;
            else if (goog.inHtmlDocument_())
              for (
                var e = goog.global.document.getElementsByTagName("SCRIPT"),
                  t = e.length - 1;
                0 <= t;
                --t
              ) {
                var r = e[t].src,
                  o = -1 == (o = r.lastIndexOf("?")) ? r.length : o;
                if ("base.js" == r.substr(o - 7, 7)) {
                  goog.basePath = r.substr(0, o - 7);
                  break;
                }
              }
          }),
          (goog.importScript_ = function(e, t) {
            (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(e, t) &&
              (goog.dependencies_.written[e] = !0);
          }),
          (goog.IS_OLD_IE_ = !(
            goog.global.atob ||
            !goog.global.document ||
            !goog.global.document.all
          )),
          (goog.importModule_ = function(e) {
            goog.importScript_(
              "",
              'goog.retrieveAndExecModule_("' + e + '");'
            ) && (goog.dependencies_.written[e] = !0);
          }),
          (goog.queuedModules_ = []),
          (goog.wrapModule_ = function(e, t) {
            return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON)
              ? "goog.loadModule(" +
                  goog.global.JSON.stringify(
                    t + "\n//# sourceURL=" + e + "\n"
                  ) +
                  ");"
              : 'goog.loadModule(function(exports) {"use strict";' +
                  t +
                  "\n;return exports});\n//# sourceURL=" +
                  e +
                  "\n";
          }),
          (goog.loadQueuedModules_ = function() {
            var e = goog.queuedModules_.length;
            if (0 < e) {
              var t = goog.queuedModules_;
              goog.queuedModules_ = [];
              for (var r = 0; r < e; r++) goog.maybeProcessDeferredPath_(t[r]);
            }
          }),
          (goog.maybeProcessDeferredDep_ = function(e) {
            goog.isDeferredModule_(e) &&
              goog.allDepsAreAvailable_(e) &&
              ((e = goog.getPathFromDeps_(e)),
              goog.maybeProcessDeferredPath_(goog.basePath + e));
          }),
          (goog.isDeferredModule_ = function(e) {
            return (
              !(
                !(e = goog.getPathFromDeps_(e)) ||
                !goog.dependencies_.pathIsModule[e]
              ) && goog.basePath + e in goog.dependencies_.deferred
            );
          }),
          (goog.allDepsAreAvailable_ = function(e) {
            if (
              (e = goog.getPathFromDeps_(e)) &&
              e in goog.dependencies_.requires
            )
              for (var t in goog.dependencies_.requires[e])
                if (!goog.isProvided_(t) && !goog.isDeferredModule_(t))
                  return !1;
            return !0;
          }),
          (goog.maybeProcessDeferredPath_ = function(e) {
            if (e in goog.dependencies_.deferred) {
              var t = goog.dependencies_.deferred[e];
              delete goog.dependencies_.deferred[e], goog.globalEval(t);
            }
          }),
          (goog.loadModuleFromUrl = function(e) {
            goog.retrieveAndExecModule_(e);
          }),
          (goog.loadModule = function(e) {
            var t = goog.moduleLoaderState_;
            try {
              var r;
              if (
                ((goog.moduleLoaderState_ = {
                  moduleName: void 0,
                  declareLegacyNamespace: !1
                }),
                goog.isFunction(e))
              )
                r = e.call(goog.global, {});
              else {
                if (!goog.isString(e)) throw Error("Invalid module definition");
                r = goog.loadModuleFromSource_.call(goog.global, e);
              }
              var o = goog.moduleLoaderState_.moduleName;
              if (!goog.isString(o) || !o)
                throw Error('Invalid module name "' + o + '"');
              goog.moduleLoaderState_.declareLegacyNamespace
                ? goog.constructNamespace_(o, r)
                : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(r),
                (goog.loadedModules_[o] = r);
            } finally {
              goog.moduleLoaderState_ = t;
            }
          }),
          (goog.loadModuleFromSource_ = function(a) {
            return eval(a), {};
          }),
          (goog.writeScriptSrcNode_ = function(e) {
            goog.global.document.write(
              '<script type="text/javascript" src="' + e + '"></script>'
            );
          }),
          (goog.appendScriptSrcNode_ = function(e) {
            var t = goog.global.document,
              r = t.createElement("script");
            (r.type = "text/javascript"),
              (r.src = e),
              (r.defer = !1),
              (r.async = !1),
              t.head.appendChild(r);
          }),
          (goog.writeScriptTag_ = function(e, t) {
            if (goog.inHtmlDocument_()) {
              var r = goog.global.document;
              if (
                !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING &&
                "complete" == r.readyState
              ) {
                if (/\bdeps.js$/.test(e)) return !1;
                throw Error('Cannot write "' + e + '" after document load');
              }
              var o = goog.IS_OLD_IE_;
              return (
                void 0 === t
                  ? o
                    ? ((o =
                        " onreadystatechange='goog.onScriptLoad_(this, " +
                        ++goog.lastNonModuleScriptIndex_ +
                        ")' "),
                      r.write(
                        '<script type="text/javascript" src="' +
                          e +
                          '"' +
                          o +
                          "></script>"
                      ))
                    : goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING
                    ? goog.appendScriptSrcNode_(e)
                    : goog.writeScriptSrcNode_(e)
                  : r.write(
                      '<script type="text/javascript">' + t + "</script>"
                    ),
                !0
              );
            }
            return !1;
          }),
          (goog.lastNonModuleScriptIndex_ = 0),
          (goog.onScriptLoad_ = function(e, t) {
            return (
              "complete" == e.readyState &&
                goog.lastNonModuleScriptIndex_ == t &&
                goog.loadQueuedModules_(),
              !0
            );
          }),
          (goog.writeScripts_ = function(e) {
            var o = [],
              n = {},
              s = goog.dependencies_;
            for (
              (function e(t) {
                if (!((t in s.written) || (t in s.visited))) {
                  if (((s.visited[t] = !0), (t in s.requires)))
                    for (var r in s.requires[t])
                      if (!goog.isProvided_(r)) {
                        if (!(r in s.nameToPath))
                          throw Error("Undefined nameToPath for " + r);
                        e(s.nameToPath[r]);
                      }
                  (t in n) || ((n[t] = !0), o.push(t));
                }
              })(e),
                e = 0;
              e < o.length;
              e++
            ) {
              var t = o[e];
              goog.dependencies_.written[t] = !0;
            }
            var r = goog.moduleLoaderState_;
            for (goog.moduleLoaderState_ = null, e = 0; e < o.length; e++) {
              if (!(t = o[e]))
                throw ((goog.moduleLoaderState_ = r),
                Error("Undefined script input"));
              s.pathIsModule[t]
                ? goog.importModule_(goog.basePath + t)
                : goog.importScript_(goog.basePath + t);
            }
            goog.moduleLoaderState_ = r;
          }),
          (goog.getPathFromDeps_ = function(e) {
            return e in goog.dependencies_.nameToPath
              ? goog.dependencies_.nameToPath[e]
              : null;
          }),
          goog.findBasePath_(),
          goog.global.CLOSURE_NO_DEPS ||
            goog.importScript_(goog.basePath + "deps.js")),
        (goog.normalizePath_ = function(e) {
          e = e.split("/");
          for (var t = 0; t < e.length; )
            "." == e[t]
              ? e.splice(t, 1)
              : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1]
              ? e.splice(--t, 2)
              : t++;
          return e.join("/");
        }),
        (goog.loadFileSync_ = function(e) {
          if (goog.global.CLOSURE_LOAD_FILE_SYNC)
            return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
          var t = new goog.global.XMLHttpRequest();
          return t.open("get", e, !1), t.send(), t.responseText;
        }),
        (goog.retrieveAndExecModule_ = function(e) {
          if (!COMPILED) {
            var t = e;
            e = goog.normalizePath_(e);
            var r = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_,
              o = goog.loadFileSync_(e);
            if (null == o) throw Error("load of " + e + "failed");
            (o = goog.wrapModule_(e, o)),
              goog.IS_OLD_IE_
                ? ((goog.dependencies_.deferred[t] = o),
                  goog.queuedModules_.push(t))
                : r(e, o);
          }
        }),
        (goog.typeOf = function(e) {
          var t = typeof e;
          if ("object" == t) {
            if (!e) return "null";
            if (e instanceof Array) return "array";
            if (e instanceof Object) return t;
            var r = Object.prototype.toString.call(e);
            if ("[object Window]" == r) return "object";
            if (
              "[object Array]" == r ||
              ("number" == typeof e.length &&
                void 0 !== e.splice &&
                void 0 !== e.propertyIsEnumerable &&
                !e.propertyIsEnumerable("splice"))
            )
              return "array";
            if (
              "[object Function]" == r ||
              (void 0 !== e.call &&
                void 0 !== e.propertyIsEnumerable &&
                !e.propertyIsEnumerable("call"))
            )
              return "function";
          } else if ("function" == t && void 0 === e.call) return "object";
          return t;
        }),
        (goog.isNull = function(e) {
          return null === e;
        }),
        (goog.isDefAndNotNull = function(e) {
          return null != e;
        }),
        (goog.isArray = function(e) {
          return "array" == goog.typeOf(e);
        }),
        (goog.isArrayLike = function(e) {
          var t = goog.typeOf(e);
          return "array" == t || ("object" == t && "number" == typeof e.length);
        }),
        (goog.isDateLike = function(e) {
          return goog.isObject(e) && "function" == typeof e.getFullYear;
        }),
        (goog.isString = function(e) {
          return "string" == typeof e;
        }),
        (goog.isBoolean = function(e) {
          return "boolean" == typeof e;
        }),
        (goog.isNumber = function(e) {
          return "number" == typeof e;
        }),
        (goog.isFunction = function(e) {
          return "function" == goog.typeOf(e);
        }),
        (goog.isObject = function(e) {
          var t = typeof e;
          return ("object" == t && null != e) || "function" == t;
        }),
        (goog.getUid = function(e) {
          return (
            e[goog.UID_PROPERTY_] ||
            (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
          );
        }),
        (goog.hasUid = function(e) {
          return !!e[goog.UID_PROPERTY_];
        }),
        (goog.removeUid = function(e) {
          null !== e &&
            "removeAttribute" in e &&
            e.removeAttribute(goog.UID_PROPERTY_);
          try {
            delete e[goog.UID_PROPERTY_];
          } catch (e) {}
        }),
        (goog.UID_PROPERTY_ = "closure_uid_" + ((1e9 * Math.random()) >>> 0)),
        (goog.uidCounter_ = 0),
        (goog.getHashCode = goog.getUid),
        (goog.removeHashCode = goog.removeUid),
        (goog.cloneObject = function(e) {
          if ("object" != (r = goog.typeOf(e)) && "array" != r) return e;
          if (e.clone) return e.clone();
          var t,
            r = "array" == r ? [] : {};
          for (t in e) r[t] = goog.cloneObject(e[t]);
          return r;
        }),
        (goog.bindNative_ = function(e, t, r) {
          return e.call.apply(e.bind, arguments);
        }),
        (goog.bindJs_ = function(t, r, e) {
          if (!t) throw Error();
          if (2 < arguments.length) {
            var o = Array.prototype.slice.call(arguments, 2);
            return function() {
              var e = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(e, o), t.apply(r, e);
            };
          }
          return function() {
            return t.apply(r, arguments);
          };
        }),
        (goog.bind = function(e, t, r) {
          return (
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? (goog.bind = goog.bindNative_)
              : (goog.bind = goog.bindJs_),
            goog.bind.apply(null, arguments)
          );
        }),
        (goog.partial = function(t, e) {
          var r = Array.prototype.slice.call(arguments, 1);
          return function() {
            var e = r.slice();
            return e.push.apply(e, arguments), t.apply(this, e);
          };
        }),
        (goog.mixin = function(e, t) {
          for (var r in t) e[r] = t[r];
        }),
        (goog.now =
          (goog.TRUSTED_SITE && Date.now) ||
          function() {
            return +new Date();
          }),
        (goog.globalEval = function(e) {
          if (goog.global.execScript) goog.global.execScript(e, "JavaScript");
          else {
            if (!goog.global.eval) throw Error("goog.globalEval not available");
            if (null == goog.evalWorksForGlobals_)
              if (
                (goog.global.eval("var _evalTest_ = 1;"),
                void 0 !== goog.global._evalTest_)
              ) {
                try {
                  delete goog.global._evalTest_;
                } catch (e) {}
                goog.evalWorksForGlobals_ = !0;
              } else goog.evalWorksForGlobals_ = !1;
            if (goog.evalWorksForGlobals_) goog.global.eval(e);
            else {
              var t = goog.global.document,
                r = t.createElement("SCRIPT");
              (r.type = "text/javascript"),
                (r.defer = !1),
                r.appendChild(t.createTextNode(e)),
                t.body.appendChild(r),
                t.body.removeChild(r);
            }
          }
        }),
        (goog.evalWorksForGlobals_ = null),
        (goog.getCssName = function(e, t) {
          var o = function(e) {
              return goog.cssNameMapping_[e] || e;
            },
            r = function(e) {
              e = e.split("-");
              for (var t = [], r = 0; r < e.length; r++) t.push(o(e[r]));
              return t.join("-");
            };
          return (
            (r = goog.cssNameMapping_
              ? "BY_WHOLE" == goog.cssNameMappingStyle_
                ? o
                : r
              : function(e) {
                  return e;
                }),
            t ? e + "-" + r(t) : r(e)
          );
        }),
        (goog.setCssNameMapping = function(e, t) {
          (goog.cssNameMapping_ = e), (goog.cssNameMappingStyle_ = t);
        }),
        !COMPILED &&
          goog.global.CLOSURE_CSS_NAME_MAPPING &&
          (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING),
        (goog.getMsg = function(e, r) {
          return (
            r &&
              (e = e.replace(/\{\$([^}]+)}/g, function(e, t) {
                return null != r && t in r ? r[t] : e;
              })),
            e
          );
        }),
        (goog.getMsgWithFallback = function(e, t) {
          return e;
        }),
        (goog.exportSymbol = function(e, t, r) {
          goog.exportPath_(e, t, r);
        }),
        (goog.exportProperty = function(e, t, r) {
          e[t] = r;
        }),
        (goog.inherits = function(e, s) {
          function t() {}
          (t.prototype = s.prototype),
            (e.superClass_ = s.prototype),
            (e.prototype = new t()),
            ((e.prototype.constructor = e).base = function(e, t, r) {
              for (
                var o = Array(arguments.length - 2), n = 2;
                n < arguments.length;
                n++
              )
                o[n - 2] = arguments[n];
              return s.prototype[t].apply(e, o);
            });
        }),
        (goog.base = function(e, t, r) {
          var o = arguments.callee.caller;
          if (goog.STRICT_MODE_COMPATIBLE || (goog.DEBUG && !o))
            throw Error(
              "arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C"
            );
          if (o.superClass_) {
            for (
              var n = Array(arguments.length - 1), s = 1;
              s < arguments.length;
              s++
            )
              n[s - 1] = arguments[s];
            return o.superClass_.constructor.apply(e, n);
          }
          for (
            n = Array(arguments.length - 2), s = 2;
            s < arguments.length;
            s++
          )
            n[s - 2] = arguments[s];
          s = !1;
          for (
            var i = e.constructor;
            i;
            i = i.superClass_ && i.superClass_.constructor
          )
            if (i.prototype[t] === o) s = !0;
            else if (s) return i.prototype[t].apply(e, n);
          if (e[t] === o) return e.constructor.prototype[t].apply(e, n);
          throw Error(
            "goog.base called from a method of one name to a method of a different name"
          );
        }),
        (goog.scope = function(e) {
          e.call(goog.global);
        }),
        COMPILED || (goog.global.COMPILED = COMPILED),
        (goog.defineClass = function(e, t) {
          var r = t.constructor,
            o = t.statics;
          return (
            (r && r != Object.prototype.constructor) ||
              (r = function() {
                throw Error(
                  "cannot instantiate an interface (no constructor defined)."
                );
              }),
            (r = goog.defineClass.createSealingConstructor_(r, e)),
            e && goog.inherits(r, e),
            delete t.constructor,
            delete t.statics,
            goog.defineClass.applyProperties_(r.prototype, t),
            null != o &&
              (o instanceof Function
                ? o(r)
                : goog.defineClass.applyProperties_(r, o)),
            r
          );
        }),
        (goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG),
        (goog.defineClass.createSealingConstructor_ = function(t, e) {
          if (
            goog.defineClass.SEAL_CLASS_INSTANCES &&
            Object.seal instanceof Function
          ) {
            if (
              e &&
              e.prototype &&
              e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]
            )
              return t;
            var r = function() {
              var e = t.apply(this, arguments) || this;
              return (
                (e[goog.UID_PROPERTY_] = e[goog.UID_PROPERTY_]),
                this.constructor === r && Object.seal(e),
                e
              );
            };
            return r;
          }
          return t;
        }),
        (goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " "
        )),
        (goog.defineClass.applyProperties_ = function(e, t) {
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          for (
            var o = 0;
            o < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;
            o++
          )
            (r = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[o]),
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        }),
        (goog.tagUnsealableClass = function(e) {
          !COMPILED &&
            goog.defineClass.SEAL_CLASS_INSTANCES &&
            (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
        }),
        (goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ =
          "goog_defineClass_legacy_unsealable"),
        (goog.dom = {}),
        (goog.dom.NodeType = {
          ELEMENT: 1,
          ATTRIBUTE: 2,
          TEXT: 3,
          CDATA_SECTION: 4,
          ENTITY_REFERENCE: 5,
          ENTITY: 6,
          PROCESSING_INSTRUCTION: 7,
          COMMENT: 8,
          DOCUMENT: 9,
          DOCUMENT_TYPE: 10,
          DOCUMENT_FRAGMENT: 11,
          NOTATION: 12
        }),
        (goog.debug = {}),
        (goog.debug.Error = function(e) {
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, goog.debug.Error);
          else {
            var t = Error().stack;
            t && (this.stack = t);
          }
          e && (this.message = String(e)), (this.reportErrorToServer = !0);
        }),
        goog.inherits(goog.debug.Error, Error),
        (goog.debug.Error.prototype.name = "CustomError"),
        (goog.string = {}),
        (goog.string.DETECT_DOUBLE_ESCAPING = !1),
        (goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1),
        (goog.string.Unicode = { NBSP: " " }),
        (goog.string.startsWith = function(e, t) {
          return 0 == e.lastIndexOf(t, 0);
        }),
        (goog.string.endsWith = function(e, t) {
          var r = e.length - t.length;
          return 0 <= r && e.indexOf(t, r) == r;
        }),
        (goog.string.caseInsensitiveStartsWith = function(e, t) {
          return (
            0 == goog.string.caseInsensitiveCompare(t, e.substr(0, t.length))
          );
        }),
        (goog.string.caseInsensitiveEndsWith = function(e, t) {
          return (
            0 ==
            goog.string.caseInsensitiveCompare(
              t,
              e.substr(e.length - t.length, t.length)
            )
          );
        }),
        (goog.string.caseInsensitiveEquals = function(e, t) {
          return e.toLowerCase() == t.toLowerCase();
        }),
        (goog.string.subs = function(e, t) {
          for (
            var r = e.split("%s"),
              o = "",
              n = Array.prototype.slice.call(arguments, 1);
            n.length && 1 < r.length;

          )
            o += r.shift() + n.shift();
          return o + r.join("%s");
        }),
        (goog.string.collapseWhitespace = function(e) {
          return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
        }),
        (goog.string.isEmptyOrWhitespace = function(e) {
          return /^[\s\xa0]*$/.test(e);
        }),
        (goog.string.isEmptyString = function(e) {
          return 0 == e.length;
        }),
        (goog.string.isEmpty = goog.string.isEmptyOrWhitespace),
        (goog.string.isEmptyOrWhitespaceSafe = function(e) {
          return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e));
        }),
        (goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe),
        (goog.string.isBreakingWhitespace = function(e) {
          return !/[^\t\n\r ]/.test(e);
        }),
        (goog.string.isAlpha = function(e) {
          return !/[^a-zA-Z]/.test(e);
        }),
        (goog.string.isNumeric = function(e) {
          return !/[^0-9]/.test(e);
        }),
        (goog.string.isAlphaNumeric = function(e) {
          return !/[^a-zA-Z0-9]/.test(e);
        }),
        (goog.string.isSpace = function(e) {
          return " " == e;
        }),
        (goog.string.isUnicodeChar = function(e) {
          return (
            (1 == e.length && " " <= e && e <= "~") || ("" <= e && e <= "�")
          );
        }),
        (goog.string.stripNewlines = function(e) {
          return e.replace(/(\r\n|\r|\n)+/g, " ");
        }),
        (goog.string.canonicalizeNewlines = function(e) {
          return e.replace(/(\r\n|\r|\n)/g, "\n");
        }),
        (goog.string.normalizeWhitespace = function(e) {
          return e.replace(/\xa0|\s/g, " ");
        }),
        (goog.string.normalizeSpaces = function(e) {
          return e.replace(/\xa0|[ \t]+/g, " ");
        }),
        (goog.string.collapseBreakingSpaces = function(e) {
          return e
            .replace(/[\t\r\n ]+/g, " ")
            .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
        }),
        (goog.string.trim =
          goog.TRUSTED_SITE && String.prototype.trim
            ? function(e) {
                return e.trim();
              }
            : function(e) {
                return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
              }),
        (goog.string.trimLeft = function(e) {
          return e.replace(/^[\s\xa0]+/, "");
        }),
        (goog.string.trimRight = function(e) {
          return e.replace(/[\s\xa0]+$/, "");
        }),
        (goog.string.caseInsensitiveCompare = function(e, t) {
          var r = String(e).toLowerCase(),
            o = String(t).toLowerCase();
          return r < o ? -1 : r == o ? 0 : 1;
        }),
        (goog.string.numberAwareCompare_ = function(e, t, r) {
          if (e == t) return 0;
          if (!e) return -1;
          if (!t) return 1;
          for (
            var o = e.toLowerCase().match(r),
              n = t.toLowerCase().match(r),
              s = Math.min(o.length, n.length),
              i = 0;
            i < s;
            i++
          ) {
            r = o[i];
            var a = n[i];
            if (r != a)
              return (
                (e = parseInt(r, 10)),
                !isNaN(e) && ((t = parseInt(a, 10)), !isNaN(t) && e - t)
                  ? e - t
                  : r < a
                  ? -1
                  : 1
              );
          }
          return o.length != n.length ? o.length - n.length : e < t ? -1 : 1;
        }),
        (goog.string.intAwareCompare = function(e, t) {
          return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g);
        }),
        (goog.string.floatAwareCompare = function(e, t) {
          return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g);
        }),
        (goog.string.numerateCompare = goog.string.floatAwareCompare),
        (goog.string.urlEncode = function(e) {
          return encodeURIComponent(String(e));
        }),
        (goog.string.urlDecode = function(e) {
          return decodeURIComponent(e.replace(/\+/g, " "));
        }),
        (goog.string.newLineToBr = function(e, t) {
          return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>");
        }),
        (goog.string.htmlEscape = function(e, t) {
          if (t)
            (e = e
              .replace(goog.string.AMP_RE_, "&amp;")
              .replace(goog.string.LT_RE_, "&lt;")
              .replace(goog.string.GT_RE_, "&gt;")
              .replace(goog.string.QUOT_RE_, "&quot;")
              .replace(goog.string.SINGLE_QUOTE_RE_, "&#39;")
              .replace(goog.string.NULL_RE_, "&#0;")),
              goog.string.DETECT_DOUBLE_ESCAPING &&
                (e = e.replace(goog.string.E_RE_, "&#101;"));
          else {
            if (!goog.string.ALL_RE_.test(e)) return e;
            -1 != e.indexOf("&") &&
              (e = e.replace(goog.string.AMP_RE_, "&amp;")),
              -1 != e.indexOf("<") &&
                (e = e.replace(goog.string.LT_RE_, "&lt;")),
              -1 != e.indexOf(">") &&
                (e = e.replace(goog.string.GT_RE_, "&gt;")),
              -1 != e.indexOf('"') &&
                (e = e.replace(goog.string.QUOT_RE_, "&quot;")),
              -1 != e.indexOf("'") &&
                (e = e.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;")),
              -1 != e.indexOf("\0") &&
                (e = e.replace(goog.string.NULL_RE_, "&#0;")),
              goog.string.DETECT_DOUBLE_ESCAPING &&
                -1 != e.indexOf("e") &&
                (e = e.replace(goog.string.E_RE_, "&#101;"));
          }
          return e;
        }),
        (goog.string.AMP_RE_ = /&/g),
        (goog.string.LT_RE_ = /</g),
        (goog.string.GT_RE_ = />/g),
        (goog.string.QUOT_RE_ = /"/g),
        (goog.string.SINGLE_QUOTE_RE_ = /'/g),
        (goog.string.NULL_RE_ = /\x00/g),
        (goog.string.E_RE_ = /e/g),
        (goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING
          ? /[\x00&<>"'e]/
          : /[\x00&<>"']/),
        (goog.string.unescapeEntities = function(e) {
          return goog.string.contains(e, "&")
            ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING &&
              "document" in goog.global
              ? goog.string.unescapeEntitiesUsingDom_(e)
              : goog.string.unescapePureXmlEntities_(e)
            : e;
        }),
        (goog.string.unescapeEntitiesWithDocument = function(e, t) {
          return goog.string.contains(e, "&")
            ? goog.string.unescapeEntitiesUsingDom_(e, t)
            : e;
        }),
        (goog.string.unescapeEntitiesUsingDom_ = function(e, t) {
          var n,
            s = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
          return (
            (n = t
              ? t.createElement("div")
              : goog.global.document.createElement("div")),
            e.replace(goog.string.HTML_ENTITY_PATTERN_, function(e, t) {
              var r = s[e];
              if (r) return r;
              if ("#" == t.charAt(0)) {
                var o = Number("0" + t.substr(1));
                isNaN(o) || (r = String.fromCharCode(o));
              }
              return (
                r ||
                  ((n.innerHTML = e + " "),
                  (r = n.firstChild.nodeValue.slice(0, -1))),
                (s[e] = r)
              );
            })
          );
        }),
        (goog.string.unescapePureXmlEntities_ = function(e) {
          return e.replace(/&([^;]+);/g, function(e, t) {
            switch (t) {
              case "amp":
                return "&";
              case "lt":
                return "<";
              case "gt":
                return ">";
              case "quot":
                return '"';
              default:
                if ("#" == t.charAt(0)) {
                  var r = Number("0" + t.substr(1));
                  if (!isNaN(r)) return String.fromCharCode(r);
                }
                return e;
            }
          });
        }),
        (goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g),
        (goog.string.whitespaceEscape = function(e, t) {
          return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t);
        }),
        (goog.string.preserveSpaces = function(e) {
          return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
        }),
        (goog.string.stripQuotes = function(e, t) {
          for (var r = t.length, o = 0; o < r; o++) {
            var n = 1 == r ? t : t.charAt(o);
            if (e.charAt(0) == n && e.charAt(e.length - 1) == n)
              return e.substring(1, e.length - 1);
          }
          return e;
        }),
        (goog.string.truncate = function(e, t, r) {
          return (
            r && (e = goog.string.unescapeEntities(e)),
            e.length > t && (e = e.substring(0, t - 3) + "..."),
            r && (e = goog.string.htmlEscape(e)),
            e
          );
        }),
        (goog.string.truncateMiddle = function(e, t, r, o) {
          if ((r && (e = goog.string.unescapeEntities(e)), o && e.length > t)) {
            t < o && (o = t);
            var n = e.length - o;
            e = e.substring(0, t - o) + "..." + e.substring(n);
          } else
            e.length > t &&
              ((o = Math.floor(t / 2)),
              (n = e.length - o),
              (e = e.substring(0, o + (t % 2)) + "..." + e.substring(n)));
          return r && (e = goog.string.htmlEscape(e)), e;
        }),
        (goog.string.specialEscapeChars_ = {
          "\0": "\\0",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\v": "\\x0B",
          '"': '\\"',
          "\\": "\\\\",
          "<": "<"
        }),
        (goog.string.jsEscapeCache_ = { "'": "\\'" }),
        (goog.string.quote = function(e) {
          e = String(e);
          for (var t = ['"'], r = 0; r < e.length; r++) {
            var o = e.charAt(r),
              n = o.charCodeAt(0);
            t[r + 1] =
              goog.string.specialEscapeChars_[o] ||
              (31 < n && n < 127 ? o : goog.string.escapeChar(o));
          }
          return t.push('"'), t.join("");
        }),
        (goog.string.escapeString = function(e) {
          for (var t = [], r = 0; r < e.length; r++)
            t[r] = goog.string.escapeChar(e.charAt(r));
          return t.join("");
        }),
        (goog.string.escapeChar = function(e) {
          if (e in goog.string.jsEscapeCache_)
            return goog.string.jsEscapeCache_[e];
          if (e in goog.string.specialEscapeChars_)
            return (goog.string.jsEscapeCache_[e] =
              goog.string.specialEscapeChars_[e]);
          var t,
            r = e.charCodeAt(0);
          return (
            31 < r && r < 127
              ? (t = e)
              : (r < 256
                  ? ((t = "\\x"), (r < 16 || 256 < r) && (t += "0"))
                  : ((t = "\\u"), r < 4096 && (t += "0")),
                (t += r.toString(16).toUpperCase())),
            (goog.string.jsEscapeCache_[e] = t)
          );
        }),
        (goog.string.contains = function(e, t) {
          return -1 != e.indexOf(t);
        }),
        (goog.string.caseInsensitiveContains = function(e, t) {
          return goog.string.contains(e.toLowerCase(), t.toLowerCase());
        }),
        (goog.string.countOf = function(e, t) {
          return e && t ? e.split(t).length - 1 : 0;
        }),
        (goog.string.removeAt = function(e, t, r) {
          var o = e;
          return (
            0 <= t &&
              t < e.length &&
              0 < r &&
              (o = e.substr(0, t) + e.substr(t + r, e.length - t - r)),
            o
          );
        }),
        (goog.string.remove = function(e, t) {
          var r = new RegExp(goog.string.regExpEscape(t), "");
          return e.replace(r, "");
        }),
        (goog.string.removeAll = function(e, t) {
          var r = new RegExp(goog.string.regExpEscape(t), "g");
          return e.replace(r, "");
        }),
        (goog.string.regExpEscape = function(e) {
          return String(e)
            .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
            .replace(/\x08/g, "\\x08");
        }),
        (goog.string.repeat = String.prototype.repeat
          ? function(e, t) {
              return e.repeat(t);
            }
          : function(e, t) {
              return Array(t + 1).join(e);
            }),
        (goog.string.padNumber = function(e, t, r) {
          return (
            -1 ==
              (r = (e = goog.isDef(r) ? e.toFixed(r) : String(e)).indexOf(
                "."
              )) && (r = e.length),
            goog.string.repeat("0", Math.max(0, t - r)) + e
          );
        }),
        (goog.string.makeSafe = function(e) {
          return null == e ? "" : String(e);
        }),
        (goog.string.buildString = function(e) {
          return Array.prototype.join.call(arguments, "");
        }),
        (goog.string.getRandomString = function() {
          return (
            Math.floor(2147483648 * Math.random()).toString(36) +
            Math.abs(
              Math.floor(2147483648 * Math.random()) ^ goog.now()
            ).toString(36)
          );
        }),
        (goog.string.compareVersions = function(e, t) {
          for (
            var r = 0,
              o = goog.string.trim(String(e)).split("."),
              n = goog.string.trim(String(t)).split("."),
              s = Math.max(o.length, n.length),
              i = 0;
            0 == r && i < s;
            i++
          ) {
            var a = o[i] || "",
              g = n[i] || "",
              u = RegExp("(\\d*)(\\D*)", "g"),
              l = RegExp("(\\d*)(\\D*)", "g");
            do {
              var p = u.exec(a) || ["", "", ""],
                c = l.exec(g) || ["", "", ""];
              if (0 == p[0].length && 0 == c[0].length) break;
              r = 0 == p[1].length ? 0 : parseInt(p[1], 10);
              var h = 0 == c[1].length ? 0 : parseInt(c[1], 10);
              r =
                goog.string.compareElements_(r, h) ||
                goog.string.compareElements_(
                  0 == p[2].length,
                  0 == c[2].length
                ) ||
                goog.string.compareElements_(p[2], c[2]);
            } while (0 == r);
          }
          return r;
        }),
        (goog.string.compareElements_ = function(e, t) {
          return e < t ? -1 : t < e ? 1 : 0;
        }),
        (goog.string.hashCode = function(e) {
          for (var t = 0, r = 0; r < e.length; ++r)
            t = (31 * t + e.charCodeAt(r)) >>> 0;
          return t;
        }),
        (goog.string.uniqueStringCounter_ = (2147483648 * Math.random()) | 0),
        (goog.string.createUniqueString = function() {
          return "goog_" + goog.string.uniqueStringCounter_++;
        }),
        (goog.string.toNumber = function(e) {
          var t = Number(e);
          return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t;
        }),
        (goog.string.isLowerCamelCase = function(e) {
          return /^[a-z]+([A-Z][a-z]*)*$/.test(e);
        }),
        (goog.string.isUpperCamelCase = function(e) {
          return /^([A-Z][a-z]*)+$/.test(e);
        }),
        (goog.string.toCamelCase = function(e) {
          return String(e).replace(/\-([a-z])/g, function(e, t) {
            return t.toUpperCase();
          });
        }),
        (goog.string.toSelectorCase = function(e) {
          return String(e)
            .replace(/([A-Z])/g, "-$1")
            .toLowerCase();
        }),
        (goog.string.toTitleCase = function(e, t) {
          var r = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s";
          return e.replace(
            new RegExp("(^" + (r ? "|[" + r + "]+" : "") + ")([a-z])", "g"),
            function(e, t, r) {
              return t + r.toUpperCase();
            }
          );
        }),
        (goog.string.capitalize = function(e) {
          return (
            String(e.charAt(0)).toUpperCase() +
            String(e.substr(1)).toLowerCase()
          );
        }),
        (goog.string.parseInt = function(e) {
          return (
            isFinite(e) && (e = String(e)),
            goog.isString(e)
              ? /^\s*-?0x/i.test(e)
                ? parseInt(e, 16)
                : parseInt(e, 10)
              : NaN
          );
        }),
        (goog.string.splitLimit = function(e, t, r) {
          e = e.split(t);
          for (var o = []; 0 < r && e.length; ) o.push(e.shift()), r--;
          return e.length && o.push(e.join(t)), o;
        }),
        (goog.string.editDistance = function(e, t) {
          var r = [],
            o = [];
          if (e == t) return 0;
          if (!e.length || !t.length) return Math.max(e.length, t.length);
          for (var n = 0; n < t.length + 1; n++) r[n] = n;
          for (n = 0; n < e.length; n++) {
            o[0] = n + 1;
            for (var s = 0; s < t.length; s++)
              o[s + 1] = Math.min(
                o[s] + 1,
                r[s + 1] + 1,
                r[s] + Number(e[n] != t[s])
              );
            for (s = 0; s < r.length; s++) r[s] = o[s];
          }
          return o[t.length];
        }),
        (goog.asserts = {}),
        (goog.asserts.ENABLE_ASSERTS = goog.DEBUG),
        (goog.asserts.AssertionError = function(e, t) {
          t.unshift(e),
            goog.debug.Error.call(this, goog.string.subs.apply(null, t)),
            t.shift(),
            (this.messagePattern = e);
        }),
        goog.inherits(goog.asserts.AssertionError, goog.debug.Error),
        (goog.asserts.AssertionError.prototype.name = "AssertionError"),
        (goog.asserts.DEFAULT_ERROR_HANDLER = function(e) {
          throw e;
        }),
        (goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER),
        (goog.asserts.doAssertFailure_ = function(e, t, r, o) {
          var n = "Assertion failed";
          if (r) {
            n = n + ": " + r;
            var s = o;
          } else e && ((n += ": " + e), (s = t));
          (e = new goog.asserts.AssertionError("" + n, s || [])),
            goog.asserts.errorHandler_(e);
        }),
        (goog.asserts.setErrorHandler = function(e) {
          goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e);
        }),
        (goog.asserts.assert = function(e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !e &&
              goog.asserts.doAssertFailure_(
                "",
                null,
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.fail = function(e, t) {
          goog.asserts.ENABLE_ASSERTS &&
            goog.asserts.errorHandler_(
              new goog.asserts.AssertionError(
                "Failure" + (e ? ": " + e : ""),
                Array.prototype.slice.call(arguments, 1)
              )
            );
        }),
        (goog.asserts.assertNumber = function(e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isNumber(e) &&
              goog.asserts.doAssertFailure_(
                "Expected number but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertString = function(e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isString(e) &&
              goog.asserts.doAssertFailure_(
                "Expected string but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertFunction = function(e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isFunction(e) &&
              goog.asserts.doAssertFailure_(
                "Expected function but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertObject = function(e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isObject(e) &&
              goog.asserts.doAssertFailure_(
                "Expected object but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertArray = function(e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isArray(e) &&
              goog.asserts.doAssertFailure_(
                "Expected array but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertBoolean = function(e, t, r) {
          return (
            goog.asserts.ENABLE_ASSERTS &&
              !goog.isBoolean(e) &&
              goog.asserts.doAssertFailure_(
                "Expected boolean but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertElement = function(e, t, r) {
          return (
            !goog.asserts.ENABLE_ASSERTS ||
              (goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT) ||
              goog.asserts.doAssertFailure_(
                "Expected Element but got %s: %s.",
                [goog.typeOf(e), e],
                t,
                Array.prototype.slice.call(arguments, 2)
              ),
            e
          );
        }),
        (goog.asserts.assertInstanceof = function(e, t, r, o) {
          return (
            !goog.asserts.ENABLE_ASSERTS ||
              e instanceof t ||
              goog.asserts.doAssertFailure_(
                "Expected instanceof %s but got %s.",
                [goog.asserts.getType_(t), goog.asserts.getType_(e)],
                r,
                Array.prototype.slice.call(arguments, 3)
              ),
            e
          );
        }),
        (goog.asserts.assertObjectPrototypeIsIntact = function() {
          for (var e in Object.prototype)
            goog.asserts.fail(
              e + " should not be enumerable in Object.prototype."
            );
        }),
        (goog.asserts.getType_ = function(e) {
          return e instanceof Function
            ? e.displayName || e.name || "unknown type name"
            : e instanceof Object
            ? e.constructor.displayName ||
              e.constructor.name ||
              Object.prototype.toString.call(e)
            : null === e
            ? "null"
            : typeof e;
        });
      var jspb = {
          Map: function(e, t) {
            (this.arr_ = e),
              (this.valueCtor_ = t),
              (this.map_ = {}),
              (this.arrClean = !0),
              0 < this.arr_.length && this.loadFromArray_();
          }
        },
        aC,
        bC;
      (jspb.Map.prototype.loadFromArray_ = function() {
        for (var e = 0; e < this.arr_.length; e++) {
          var t = this.arr_[e],
            r = t[0];
          this.map_[r.toString()] = new jspb.Map.Entry_(r, t[1]);
        }
        this.arrClean = !0;
      }),
        (jspb.Map.prototype.toArray = function() {
          if (this.arrClean) {
            if (this.valueCtor_) {
              var e,
                t = this.map_;
              for (e in t)
                if (Object.prototype.hasOwnProperty.call(t, e)) {
                  var r = t[e].valueWrapper;
                  r && r.toArray();
                }
            }
          } else {
            for (
              this.arr_.length = 0, (t = this.stringKeys_()).sort(), e = 0;
              e < t.length;
              e++
            ) {
              var o = this.map_[t[e]];
              (r = o.valueWrapper) && r.toArray(),
                this.arr_.push([o.key, o.value]);
            }
            this.arrClean = !0;
          }
          return this.arr_;
        }),
        (jspb.Map.prototype.toObject = function(e, t) {
          for (var r = this.toArray(), o = [], n = 0; n < r.length; n++) {
            var s = this.map_[r[n][0].toString()];
            this.wrapEntry_(s);
            var i = s.valueWrapper;
            i
              ? (goog.asserts.assert(t), o.push([s.key, t(e, i)]))
              : o.push([s.key, s.value]);
          }
          return o;
        }),
        (jspb.Map.fromObject = function(e, t, r) {
          t = new jspb.Map([], t);
          for (var o = 0; o < e.length; o++) {
            var n = e[o][0],
              s = r(e[o][1]);
            t.set(n, s);
          }
          return t;
        }),
        (jspb.Map.ArrayIteratorIterable_ = function(e) {
          (this.idx_ = 0), (this.arr_ = e);
        }),
        (jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
          return this.idx_ < this.arr_.length
            ? { done: !1, value: this.arr_[this.idx_++] }
            : { done: !0, value: void 0 };
        }),
        $jscomp.initSymbol(),
        "undefined" != typeof Symbol &&
          ($jscomp.initSymbol(),
          $jscomp.initSymbolIterator(),
          (jspb.Map.ArrayIteratorIterable_.prototype[
            Symbol.iterator
          ] = function() {
            return this;
          })),
        (jspb.Map.prototype.getLength = function() {
          return this.stringKeys_().length;
        }),
        (jspb.Map.prototype.clear = function() {
          (this.map_ = {}), (this.arrClean = !1);
        }),
        (jspb.Map.prototype.del = function(e) {
          e = e.toString();
          var t = this.map_.hasOwnProperty(e);
          return delete this.map_[e], (this.arrClean = !1), t;
        }),
        (jspb.Map.prototype.getEntryList = function() {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++) {
            var o = this.map_[t[r]];
            e.push([o.key, o.value]);
          }
          return e;
        }),
        (jspb.Map.prototype.entries = function() {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++) {
            var o = this.map_[t[r]];
            e.push([o.key, this.wrapEntry_(o)]);
          }
          return new jspb.Map.ArrayIteratorIterable_(e);
        }),
        (jspb.Map.prototype.keys = function() {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++) e.push(this.map_[t[r]].key);
          return new jspb.Map.ArrayIteratorIterable_(e);
        }),
        (jspb.Map.prototype.values = function() {
          var e = [],
            t = this.stringKeys_();
          t.sort();
          for (var r = 0; r < t.length; r++)
            e.push(this.wrapEntry_(this.map_[t[r]]));
          return new jspb.Map.ArrayIteratorIterable_(e);
        }),
        (jspb.Map.prototype.forEach = function(e, t) {
          var r = this.stringKeys_();
          r.sort();
          for (var o = 0; o < r.length; o++) {
            var n = this.map_[r[o]];
            e.call(t, this.wrapEntry_(n), n.key, this);
          }
        }),
        (jspb.Map.prototype.set = function(e, t) {
          var r = new jspb.Map.Entry_(e);
          return (
            this.valueCtor_
              ? ((r.valueWrapper = t), (r.value = t.toArray()))
              : (r.value = t),
            (this.map_[e.toString()] = r),
            (this.arrClean = !1),
            this
          );
        }),
        (jspb.Map.prototype.wrapEntry_ = function(e) {
          return this.valueCtor_
            ? (e.valueWrapper ||
                (e.valueWrapper = new this.valueCtor_(e.value)),
              e.valueWrapper)
            : e.value;
        }),
        (jspb.Map.prototype.get = function(e) {
          if ((e = this.map_[e.toString()])) return this.wrapEntry_(e);
        }),
        (jspb.Map.prototype.has = function(e) {
          return e.toString() in this.map_;
        }),
        (jspb.Map.prototype.serializeBinary = function(e, t, r, o, n) {
          var s = this.stringKeys_();
          s.sort();
          for (var i = 0; i < s.length; i++) {
            var a = this.map_[s[i]];
            t.beginSubMessage(e),
              r.call(t, 1, a.key),
              this.valueCtor_
                ? o.call(t, 2, this.wrapEntry_(a), n)
                : o.call(t, 2, a.value),
              t.endSubMessage();
          }
        }),
        (jspb.Map.deserializeBinary = function(e, t, r, o, n, s) {
          for (var i = void 0; t.nextField() && !t.isEndGroup(); ) {
            var a = t.getFieldNumber();
            1 == a
              ? (s = r.call(t))
              : 2 == a &&
                (e.valueCtor_
                  ? (goog.asserts.assert(n),
                    (i = new e.valueCtor_()),
                    o.call(t, i, n))
                  : (i = o.call(t)));
          }
          goog.asserts.assert(null != s),
            goog.asserts.assert(null != i),
            e.set(s, i);
        }),
        (jspb.Map.prototype.stringKeys_ = function() {
          var e,
            t = this.map_,
            r = [];
          for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
          return r;
        }),
        (jspb.Map.Entry_ = function(e, t) {
          (this.key = e), (this.value = t), (this.valueWrapper = void 0);
        }),
        (goog.array = {}),
        (goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE),
        (goog.array.ASSUME_NATIVE_FUNCTIONS = !1),
        (goog.array.peek = function(e) {
          return e[e.length - 1];
        }),
        (goog.array.last = goog.array.peek),
        (goog.array.indexOf =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf)
            ? function(e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.indexOf.call(e, t, r)
                );
              }
            : function(e, t, r) {
                if (
                  ((r = null == r ? 0 : r < 0 ? Math.max(0, e.length + r) : r),
                  goog.isString(e))
                )
                  return goog.isString(t) && 1 == t.length
                    ? e.indexOf(t, r)
                    : -1;
                for (; r < e.length; r++) if (r in e && e[r] === t) return r;
                return -1;
              }),
        (goog.array.lastIndexOf =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf)
            ? function(e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.lastIndexOf.call(
                    e,
                    t,
                    null == r ? e.length - 1 : r
                  )
                );
              }
            : function(e, t, r) {
                if (
                  ((r = null == r ? e.length - 1 : r) < 0 &&
                    (r = Math.max(0, e.length + r)),
                  goog.isString(e))
                )
                  return goog.isString(t) && 1 == t.length
                    ? e.lastIndexOf(t, r)
                    : -1;
                for (; 0 <= r; r--) if (r in e && e[r] === t) return r;
                return -1;
              }),
        (goog.array.forEach =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach)
            ? function(e, t, r) {
                goog.asserts.assert(null != e.length),
                  Array.prototype.forEach.call(e, t, r);
              }
            : function(e, t, r) {
                for (
                  var o = e.length,
                    n = goog.isString(e) ? e.split("") : e,
                    s = 0;
                  s < o;
                  s++
                )
                  s in n && t.call(r, n[s], s, e);
              }),
        (goog.array.forEachRight = function(e, t, r) {
          var o = e.length,
            n = goog.isString(e) ? e.split("") : e;
          for (o -= 1; 0 <= o; --o) o in n && t.call(r, n[o], o, e);
        }),
        (goog.array.filter =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter)
            ? function(e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.filter.call(e, t, r)
                );
              }
            : function(e, t, r) {
                for (
                  var o = e.length,
                    n = [],
                    s = 0,
                    i = goog.isString(e) ? e.split("") : e,
                    a = 0;
                  a < o;
                  a++
                )
                  if (a in i) {
                    var g = i[a];
                    t.call(r, g, a, e) && (n[s++] = g);
                  }
                return n;
              }),
        (goog.array.map =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map)
            ? function(e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.map.call(e, t, r)
                );
              }
            : function(e, t, r) {
                for (
                  var o = e.length,
                    n = Array(o),
                    s = goog.isString(e) ? e.split("") : e,
                    i = 0;
                  i < o;
                  i++
                )
                  i in s && (n[i] = t.call(r, s[i], i, e));
                return n;
              }),
        (goog.array.reduce =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce)
            ? function(e, t, r, o) {
                return (
                  goog.asserts.assert(null != e.length),
                  o && (t = goog.bind(t, o)),
                  Array.prototype.reduce.call(e, t, r)
                );
              }
            : function(r, o, e, n) {
                var s = e;
                return (
                  goog.array.forEach(r, function(e, t) {
                    s = o.call(n, s, e, t, r);
                  }),
                  s
                );
              }),
        (goog.array.reduceRight =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight)
            ? function(e, t, r, o) {
                return (
                  goog.asserts.assert(null != e.length),
                  goog.asserts.assert(null != t),
                  o && (t = goog.bind(t, o)),
                  Array.prototype.reduceRight.call(e, t, r)
                );
              }
            : function(r, o, e, n) {
                var s = e;
                return (
                  goog.array.forEachRight(r, function(e, t) {
                    s = o.call(n, s, e, t, r);
                  }),
                  s
                );
              }),
        (goog.array.some =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some)
            ? function(e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.some.call(e, t, r)
                );
              }
            : function(e, t, r) {
                for (
                  var o = e.length,
                    n = goog.isString(e) ? e.split("") : e,
                    s = 0;
                  s < o;
                  s++
                )
                  if (s in n && t.call(r, n[s], s, e)) return !0;
                return !1;
              }),
        (goog.array.every =
          goog.NATIVE_ARRAY_PROTOTYPES &&
          (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every)
            ? function(e, t, r) {
                return (
                  goog.asserts.assert(null != e.length),
                  Array.prototype.every.call(e, t, r)
                );
              }
            : function(e, t, r) {
                for (
                  var o = e.length,
                    n = goog.isString(e) ? e.split("") : e,
                    s = 0;
                  s < o;
                  s++
                )
                  if (s in n && !t.call(r, n[s], s, e)) return !1;
                return !0;
              }),
        (goog.array.count = function(e, o, n) {
          var s = 0;
          return (
            goog.array.forEach(
              e,
              function(e, t, r) {
                o.call(n, e, t, r) && ++s;
              },
              n
            ),
            s
          );
        }),
        (goog.array.find = function(e, t, r) {
          return (t = goog.array.findIndex(e, t, r)) < 0
            ? null
            : goog.isString(e)
            ? e.charAt(t)
            : e[t];
        }),
        (goog.array.findIndex = function(e, t, r) {
          for (
            var o = e.length, n = goog.isString(e) ? e.split("") : e, s = 0;
            s < o;
            s++
          )
            if (s in n && t.call(r, n[s], s, e)) return s;
          return -1;
        }),
        (goog.array.findRight = function(e, t, r) {
          return (t = goog.array.findIndexRight(e, t, r)) < 0
            ? null
            : goog.isString(e)
            ? e.charAt(t)
            : e[t];
        }),
        (goog.array.findIndexRight = function(e, t, r) {
          var o = e.length,
            n = goog.isString(e) ? e.split("") : e;
          for (o -= 1; 0 <= o; o--)
            if (o in n && t.call(r, n[o], o, e)) return o;
          return -1;
        }),
        (goog.array.contains = function(e, t) {
          return 0 <= goog.array.indexOf(e, t);
        }),
        (goog.array.isEmpty = function(e) {
          return 0 == e.length;
        }),
        (goog.array.clear = function(e) {
          if (!goog.isArray(e))
            for (var t = e.length - 1; 0 <= t; t--) delete e[t];
          e.length = 0;
        }),
        (goog.array.insert = function(e, t) {
          goog.array.contains(e, t) || e.push(t);
        }),
        (goog.array.insertAt = function(e, t, r) {
          goog.array.splice(e, r, 0, t);
        }),
        (goog.array.insertArrayAt = function(e, t, r) {
          goog.partial(goog.array.splice, e, r, 0).apply(null, t);
        }),
        (goog.array.insertBefore = function(e, t, r) {
          var o;
          2 == arguments.length || (o = goog.array.indexOf(e, r)) < 0
            ? e.push(t)
            : goog.array.insertAt(e, t, o);
        }),
        (goog.array.remove = function(e, t) {
          var r,
            o = goog.array.indexOf(e, t);
          return (r = 0 <= o) && goog.array.removeAt(e, o), r;
        }),
        (goog.array.removeAt = function(e, t) {
          return (
            goog.asserts.assert(null != e.length),
            1 == Array.prototype.splice.call(e, t, 1).length
          );
        }),
        (goog.array.removeIf = function(e, t, r) {
          return (
            0 <= (t = goog.array.findIndex(e, t, r)) &&
            (goog.array.removeAt(e, t), !0)
          );
        }),
        (goog.array.removeAllIf = function(r, o, n) {
          var s = 0;
          return (
            goog.array.forEachRight(r, function(e, t) {
              o.call(n, e, t, r) && goog.array.removeAt(r, t) && s++;
            }),
            s
          );
        }),
        (goog.array.concat = function(e) {
          return Array.prototype.concat.apply(Array.prototype, arguments);
        }),
        (goog.array.join = function(e) {
          return Array.prototype.concat.apply(Array.prototype, arguments);
        }),
        (goog.array.toArray = function(e) {
          var t = e.length;
          if (0 < t) {
            for (var r = Array(t), o = 0; o < t; o++) r[o] = e[o];
            return r;
          }
          return [];
        }),
        (goog.array.clone = goog.array.toArray),
        (goog.array.extend = function(e, t) {
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (goog.isArrayLike(o)) {
              var n = e.length || 0,
                s = o.length || 0;
              e.length = n + s;
              for (var i = 0; i < s; i++) e[n + i] = o[i];
            } else e.push(o);
          }
        }),
        (goog.array.splice = function(e, t, r, o) {
          return (
            goog.asserts.assert(null != e.length),
            Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
          );
        }),
        (goog.array.slice = function(e, t, r) {
          return (
            goog.asserts.assert(null != e.length),
            arguments.length <= 2
              ? Array.prototype.slice.call(e, t)
              : Array.prototype.slice.call(e, t, r)
          );
        }),
        (goog.array.removeDuplicates = function(e, t, r) {
          t = t || e;
          var o = function(e) {
            return goog.isObject(e)
              ? "o" + goog.getUid(e)
              : (typeof e).charAt(0) + e;
          };
          (r = r || o), (o = {});
          for (var n = 0, s = 0; s < e.length; ) {
            var i = e[s++],
              a = r(i);
            Object.prototype.hasOwnProperty.call(o, a) ||
              ((o[a] = !0), (t[n++] = i));
          }
          t.length = n;
        }),
        (goog.array.binarySearch = function(e, t, r) {
          return goog.array.binarySearch_(
            e,
            r || goog.array.defaultCompare,
            !1,
            t
          );
        }),
        (goog.array.binarySelect = function(e, t, r) {
          return goog.array.binarySearch_(e, t, !0, void 0, r);
        }),
        (goog.array.binarySearch_ = function(e, t, r, o, n) {
          for (var s, i = 0, a = e.length; i < a; ) {
            var g,
              u = (i + a) >> 1;
            0 < (g = r ? t.call(n, e[u], u, e) : t(o, e[u]))
              ? (i = u + 1)
              : ((a = u), (s = !g));
          }
          return s ? i : ~i;
        }),
        (goog.array.sort = function(e, t) {
          e.sort(t || goog.array.defaultCompare);
        }),
        (goog.array.stableSort = function(e, t) {
          for (var r = 0; r < e.length; r++) e[r] = { index: r, value: e[r] };
          var o = t || goog.array.defaultCompare;
          for (
            goog.array.sort(e, function(e, t) {
              return o(e.value, t.value) || e.index - t.index;
            }),
              r = 0;
            r < e.length;
            r++
          )
            e[r] = e[r].value;
        }),
        (goog.array.sortByKey = function(e, r, t) {
          var o = t || goog.array.defaultCompare;
          goog.array.sort(e, function(e, t) {
            return o(r(e), r(t));
          });
        }),
        (goog.array.sortObjectsByKey = function(e, t, r) {
          goog.array.sortByKey(
            e,
            function(e) {
              return e[t];
            },
            r
          );
        }),
        (goog.array.isSorted = function(e, t, r) {
          t = t || goog.array.defaultCompare;
          for (var o = 1; o < e.length; o++) {
            var n = t(e[o - 1], e[o]);
            if (0 < n || (0 == n && r)) return !1;
          }
          return !0;
        }),
        (goog.array.equals = function(e, t, r) {
          if (
            !goog.isArrayLike(e) ||
            !goog.isArrayLike(t) ||
            e.length != t.length
          )
            return !1;
          var o = e.length;
          r = r || goog.array.defaultCompareEquality;
          for (var n = 0; n < o; n++) if (!r(e[n], t[n])) return !1;
          return !0;
        }),
        (goog.array.compare3 = function(e, t, r) {
          r = r || goog.array.defaultCompare;
          for (var o = Math.min(e.length, t.length), n = 0; n < o; n++) {
            var s = r(e[n], t[n]);
            if (0 != s) return s;
          }
          return goog.array.defaultCompare(e.length, t.length);
        }),
        (goog.array.defaultCompare = function(e, t) {
          return t < e ? 1 : e < t ? -1 : 0;
        }),
        (goog.array.inverseDefaultCompare = function(e, t) {
          return -goog.array.defaultCompare(e, t);
        }),
        (goog.array.defaultCompareEquality = function(e, t) {
          return e === t;
        }),
        (goog.array.binaryInsert = function(e, t, r) {
          return (
            (r = goog.array.binarySearch(e, t, r)) < 0 &&
            (goog.array.insertAt(e, t, -(r + 1)), !0)
          );
        }),
        (goog.array.binaryRemove = function(e, t, r) {
          return (
            0 <= (t = goog.array.binarySearch(e, t, r)) &&
            goog.array.removeAt(e, t)
          );
        }),
        (goog.array.bucket = function(e, t, r) {
          for (var o = {}, n = 0; n < e.length; n++) {
            var s = e[n],
              i = t.call(r, s, n, e);
            goog.isDef(i) && (o[i] || (o[i] = [])).push(s);
          }
          return o;
        }),
        (goog.array.toObject = function(r, o, n) {
          var s = {};
          return (
            goog.array.forEach(r, function(e, t) {
              s[o.call(n, e, t, r)] = e;
            }),
            s
          );
        }),
        (goog.array.range = function(e, t, r) {
          var o = [],
            n = 0,
            s = e;
          if ((void 0 !== t && ((n = e), (s = t)), (r = r || 1) * (s - n) < 0))
            return [];
          if (0 < r) for (e = n; e < s; e += r) o.push(e);
          else for (e = n; s < e; e += r) o.push(e);
          return o;
        }),
        (goog.array.repeat = function(e, t) {
          for (var r = [], o = 0; o < t; o++) r[o] = e;
          return r;
        }),
        (goog.array.flatten = function(e) {
          for (var t = [], r = 0; r < arguments.length; r++) {
            var o = arguments[r];
            if (goog.isArray(o))
              for (var n = 0; n < o.length; n += 8192)
                for (
                  var s = goog.array.slice(o, n, n + 8192),
                    i = ((s = goog.array.flatten.apply(null, s)), 0);
                  i < s.length;
                  i++
                )
                  t.push(s[i]);
            else t.push(o);
          }
          return t;
        }),
        (goog.array.rotate = function(e, t) {
          return (
            goog.asserts.assert(null != e.length),
            e.length &&
              (0 < (t %= e.length)
                ? Array.prototype.unshift.apply(e, e.splice(-t, t))
                : t < 0 && Array.prototype.push.apply(e, e.splice(0, -t))),
            e
          );
        }),
        (goog.array.moveItem = function(e, t, r) {
          goog.asserts.assert(0 <= t && t < e.length),
            goog.asserts.assert(0 <= r && r < e.length),
            (t = Array.prototype.splice.call(e, t, 1)),
            Array.prototype.splice.call(e, r, 0, t[0]);
        }),
        (goog.array.zip = function(e) {
          if (!arguments.length) return [];
          for (var t = [], r = e.length, o = 1; o < arguments.length; o++)
            arguments[o].length < r && (r = arguments[o].length);
          for (o = 0; o < r; o++) {
            for (var n = [], s = 0; s < arguments.length; s++)
              n.push(arguments[s][o]);
            t.push(n);
          }
          return t;
        }),
        (goog.array.shuffle = function(e, t) {
          for (var r = t || Math.random, o = e.length - 1; 0 < o; o--) {
            var n = Math.floor(r() * (o + 1)),
              s = e[o];
            (e[o] = e[n]), (e[n] = s);
          }
        }),
        (goog.array.copyByIndex = function(t, e) {
          var r = [];
          return (
            goog.array.forEach(e, function(e) {
              r.push(t[e]);
            }),
            r
          );
        }),
        (goog.crypt = {}),
        (goog.crypt.stringToByteArray = function(e) {
          for (var t = [], r = 0, o = 0; o < e.length; o++) {
            for (var n = e.charCodeAt(o); 255 < n; )
              (t[r++] = 255 & n), (n >>= 8);
            t[r++] = n;
          }
          return t;
        }),
        (goog.crypt.byteArrayToString = function(e) {
          if (e.length <= 8192) return String.fromCharCode.apply(null, e);
          for (var t = "", r = 0; r < e.length; r += 8192) {
            var o = goog.array.slice(e, r, r + 8192);
            t += String.fromCharCode.apply(null, o);
          }
          return t;
        }),
        (goog.crypt.byteArrayToHex = function(e) {
          return goog.array
            .map(e, function(e) {
              return 1 < (e = e.toString(16)).length ? e : "0" + e;
            })
            .join("");
        }),
        (goog.crypt.hexToByteArray = function(e) {
          goog.asserts.assert(
            0 == e.length % 2,
            "Key string length must be multiple of 2"
          );
          for (var t = [], r = 0; r < e.length; r += 2)
            t.push(parseInt(e.substring(r, r + 2), 16));
          return t;
        }),
        (goog.crypt.stringToUtf8ByteArray = function(e) {
          for (var t = [], r = 0, o = 0; o < e.length; o++) {
            var n = e.charCodeAt(o);
            t[r++] =
              n < 128
                ? n
                : ((t[r++] =
                    n < 2048
                      ? (n >> 6) | 192
                      : (55296 == (64512 & n) &&
                        o + 1 < e.length &&
                        56320 == (64512 & e.charCodeAt(o + 1))
                          ? ((n =
                              65536 +
                              ((1023 & n) << 10) +
                              (1023 & e.charCodeAt(++o))),
                            (t[r++] = (n >> 18) | 240),
                            (t[r++] = ((n >> 12) & 63) | 128))
                          : (t[r++] = (n >> 12) | 224),
                        ((n >> 6) & 63) | 128)),
                  (63 & n) | 128);
          }
          return t;
        }),
        (goog.crypt.utf8ByteArrayToString = function(e) {
          for (var t = [], r = 0, o = 0; r < e.length; )
            if ((i = e[r++]) < 128) t[o++] = String.fromCharCode(i);
            else if (191 < i && i < 224) {
              var n = e[r++];
              t[o++] = String.fromCharCode(((31 & i) << 6) | (63 & n));
            } else if (239 < i && i < 365) {
              n = e[r++];
              var s = e[r++],
                i =
                  (((7 & i) << 18) |
                    ((63 & n) << 12) |
                    ((63 & s) << 6) |
                    (63 & e[r++])) -
                  65536;
              (t[o++] = String.fromCharCode(55296 + (i >> 10))),
                (t[o++] = String.fromCharCode(56320 + (1023 & i)));
            } else
              (n = e[r++]),
                (s = e[r++]),
                (t[o++] = String.fromCharCode(
                  ((15 & i) << 12) | ((63 & n) << 6) | (63 & s)
                ));
          return t.join("");
        }),
        (goog.crypt.xorByteArray = function(e, t) {
          goog.asserts.assert(
            e.length == t.length,
            "XOR array lengths must match"
          );
          for (var r = [], o = 0; o < e.length; o++) r.push(e[o] ^ t[o]);
          return r;
        }),
        (goog.labs = {}),
        (goog.labs.userAgent = {}),
        (goog.labs.userAgent.util = {}),
        (goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
          var e = goog.labs.userAgent.util.getNavigator_();
          return e && (e = e.userAgent) ? e : "";
        }),
        (goog.labs.userAgent.util.getNavigator_ = function() {
          return goog.global.navigator;
        }),
        (goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_()),
        (goog.labs.userAgent.util.setUserAgent = function(e) {
          goog.labs.userAgent.util.userAgent_ =
            e || goog.labs.userAgent.util.getNativeUserAgentString_();
        }),
        (goog.labs.userAgent.util.getUserAgent = function() {
          return goog.labs.userAgent.util.userAgent_;
        }),
        (goog.labs.userAgent.util.matchUserAgent = function(e) {
          var t = goog.labs.userAgent.util.getUserAgent();
          return goog.string.contains(t, e);
        }),
        (goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(e) {
          var t = goog.labs.userAgent.util.getUserAgent();
          return goog.string.caseInsensitiveContains(t, e);
        }),
        (goog.labs.userAgent.util.extractVersionTuples = function(e) {
          for (
            var t,
              r = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"),
              o = [];
            (t = r.exec(e));

          )
            o.push([t[1], t[2], t[3] || void 0]);
          return o;
        }),
        (goog.labs.userAgent.platform = {}),
        (goog.labs.userAgent.platform.isAndroid = function() {
          return goog.labs.userAgent.util.matchUserAgent("Android");
        }),
        (goog.labs.userAgent.platform.isIpod = function() {
          return goog.labs.userAgent.util.matchUserAgent("iPod");
        }),
        (goog.labs.userAgent.platform.isIphone = function() {
          return (
            goog.labs.userAgent.util.matchUserAgent("iPhone") &&
            !goog.labs.userAgent.util.matchUserAgent("iPod") &&
            !goog.labs.userAgent.util.matchUserAgent("iPad")
          );
        }),
        (goog.labs.userAgent.platform.isIpad = function() {
          return goog.labs.userAgent.util.matchUserAgent("iPad");
        }),
        (goog.labs.userAgent.platform.isIos = function() {
          return (
            goog.labs.userAgent.platform.isIphone() ||
            goog.labs.userAgent.platform.isIpad() ||
            goog.labs.userAgent.platform.isIpod()
          );
        }),
        (goog.labs.userAgent.platform.isMacintosh = function() {
          return goog.labs.userAgent.util.matchUserAgent("Macintosh");
        }),
        (goog.labs.userAgent.platform.isLinux = function() {
          return goog.labs.userAgent.util.matchUserAgent("Linux");
        }),
        (goog.labs.userAgent.platform.isWindows = function() {
          return goog.labs.userAgent.util.matchUserAgent("Windows");
        }),
        (goog.labs.userAgent.platform.isChromeOS = function() {
          return goog.labs.userAgent.util.matchUserAgent("CrOS");
        }),
        (goog.labs.userAgent.platform.getVersion = function() {
          var e = goog.labs.userAgent.util.getUserAgent(),
            t = "";
          return (
            goog.labs.userAgent.platform.isWindows()
              ? (t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e))
                  ? e[1]
                  : "0.0")
              : goog.labs.userAgent.platform.isIos()
              ? (t =
                  (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) &&
                  e[1].replace(/_/g, "."))
              : goog.labs.userAgent.platform.isMacintosh()
              ? (t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e))
                  ? e[1].replace(/_/g, ".")
                  : "10")
              : goog.labs.userAgent.platform.isAndroid()
              ? (t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1])
              : goog.labs.userAgent.platform.isChromeOS() &&
                (t =
                  (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(
                    e
                  )) && e[1]),
            t || ""
          );
        }),
        (goog.labs.userAgent.platform.isVersionOrHigher = function(e) {
          return (
            0 <=
            goog.string.compareVersions(
              goog.labs.userAgent.platform.getVersion(),
              e
            )
          );
        }),
        (goog.object = {}),
        (goog.object.forEach = function(e, t, r) {
          for (var o in e) t.call(r, e[o], o, e);
        }),
        (goog.object.filter = function(e, t, r) {
          var o,
            n = {};
          for (o in e) t.call(r, e[o], o, e) && (n[o] = e[o]);
          return n;
        }),
        (goog.object.map = function(e, t, r) {
          var o,
            n = {};
          for (o in e) n[o] = t.call(r, e[o], o, e);
          return n;
        }),
        (goog.object.some = function(e, t, r) {
          for (var o in e) if (t.call(r, e[o], o, e)) return !0;
          return !1;
        }),
        (goog.object.every = function(e, t, r) {
          for (var o in e) if (!t.call(r, e[o], o, e)) return !1;
          return !0;
        }),
        (goog.object.getCount = function(e) {
          var t,
            r = 0;
          for (t in e) r++;
          return r;
        }),
        (goog.object.getAnyKey = function(e) {
          for (var t in e) return t;
        }),
        (goog.object.getAnyValue = function(e) {
          for (var t in e) return e[t];
        }),
        (goog.object.contains = function(e, t) {
          return goog.object.containsValue(e, t);
        }),
        (goog.object.getValues = function(e) {
          var t,
            r = [],
            o = 0;
          for (t in e) r[o++] = e[t];
          return r;
        }),
        (goog.object.getKeys = function(e) {
          var t,
            r = [],
            o = 0;
          for (t in e) r[o++] = t;
          return r;
        }),
        (goog.object.getValueByKeys = function(e, t) {
          for (
            var r = (o = goog.isArrayLike(t)) ? t : arguments, o = o ? 0 : 1;
            o < r.length && ((e = e[r[o]]), goog.isDef(e));
            o++
          );
          return e;
        }),
        (goog.object.containsKey = function(e, t) {
          return null !== e && t in e;
        }),
        (goog.object.containsValue = function(e, t) {
          for (var r in e) if (e[r] == t) return !0;
          return !1;
        }),
        (goog.object.findKey = function(e, t, r) {
          for (var o in e) if (t.call(r, e[o], o, e)) return o;
        }),
        (goog.object.findValue = function(e, t, r) {
          return (t = goog.object.findKey(e, t, r)) && e[t];
        }),
        (goog.object.isEmpty = function(e) {
          for (var t in e) return !1;
          return !0;
        }),
        (goog.object.clear = function(e) {
          for (var t in e) delete e[t];
        }),
        (goog.object.remove = function(e, t) {
          var r;
          return (r = t in e) && delete e[t], r;
        }),
        (goog.object.add = function(e, t, r) {
          if (null !== e && t in e)
            throw Error('The object already contains the key "' + t + '"');
          goog.object.set(e, t, r);
        }),
        (goog.object.get = function(e, t, r) {
          return null !== e && t in e ? e[t] : r;
        }),
        (goog.object.set = function(e, t, r) {
          e[t] = r;
        }),
        (goog.object.setIfUndefined = function(e, t, r) {
          return t in e ? e[t] : (e[t] = r);
        }),
        (goog.object.setWithReturnValueIfNotSet = function(e, t, r) {
          return t in e ? e[t] : ((r = r()), (e[t] = r));
        }),
        (goog.object.equals = function(e, t) {
          for (var r in e) if (!(r in t) || e[r] !== t[r]) return !1;
          for (r in t) if (!(r in e)) return !1;
          return !0;
        }),
        (goog.object.clone = function(e) {
          var t,
            r = {};
          for (t in e) r[t] = e[t];
          return r;
        }),
        (goog.object.unsafeClone = function(e) {
          if ("object" != (r = goog.typeOf(e)) && "array" != r) return e;
          if (goog.isFunction(e.clone)) return e.clone();
          var t,
            r = "array" == r ? [] : {};
          for (t in e) r[t] = goog.object.unsafeClone(e[t]);
          return r;
        }),
        (goog.object.transpose = function(e) {
          var t,
            r = {};
          for (t in e) r[e[t]] = t;
          return r;
        }),
        (goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " "
        )),
        (goog.object.extend = function(e, t) {
          for (var r, o, n = 1; n < arguments.length; n++) {
            for (r in (o = arguments[n])) e[r] = o[r];
            for (var s = 0; s < goog.object.PROTOTYPE_FIELDS_.length; s++)
              (r = goog.object.PROTOTYPE_FIELDS_[s]),
                Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
          }
        }),
        (goog.object.create = function(e) {
          var t = arguments.length;
          if (1 == t && goog.isArray(e))
            return goog.object.create.apply(null, e);
          if (t % 2) throw Error("Uneven number of arguments");
          for (var r = {}, o = 0; o < t; o += 2)
            r[arguments[o]] = arguments[o + 1];
          return r;
        }),
        (goog.object.createSet = function(e) {
          var t = arguments.length;
          if (1 == t && goog.isArray(e))
            return goog.object.createSet.apply(null, e);
          for (var r = {}, o = 0; o < t; o++) r[arguments[o]] = !0;
          return r;
        }),
        (goog.object.createImmutableView = function(e) {
          var t = e;
          return (
            Object.isFrozen &&
              !Object.isFrozen(e) &&
              ((t = Object.create(e)), Object.freeze(t)),
            t
          );
        }),
        (goog.object.isImmutableView = function(e) {
          return !!Object.isFrozen && Object.isFrozen(e);
        }),
        (goog.labs.userAgent.browser = {}),
        (goog.labs.userAgent.browser.matchOpera_ = function() {
          return (
            goog.labs.userAgent.util.matchUserAgent("Opera") ||
            goog.labs.userAgent.util.matchUserAgent("OPR")
          );
        }),
        (goog.labs.userAgent.browser.matchIE_ = function() {
          return (
            goog.labs.userAgent.util.matchUserAgent("Trident") ||
            goog.labs.userAgent.util.matchUserAgent("MSIE")
          );
        }),
        (goog.labs.userAgent.browser.matchEdge_ = function() {
          return goog.labs.userAgent.util.matchUserAgent("Edge");
        }),
        (goog.labs.userAgent.browser.matchFirefox_ = function() {
          return goog.labs.userAgent.util.matchUserAgent("Firefox");
        }),
        (goog.labs.userAgent.browser.matchSafari_ = function() {
          return (
            goog.labs.userAgent.util.matchUserAgent("Safari") &&
            !(
              goog.labs.userAgent.browser.matchChrome_() ||
              goog.labs.userAgent.browser.matchCoast_() ||
              goog.labs.userAgent.browser.matchOpera_() ||
              goog.labs.userAgent.browser.matchEdge_() ||
              goog.labs.userAgent.browser.isSilk() ||
              goog.labs.userAgent.util.matchUserAgent("Android")
            )
          );
        }),
        (goog.labs.userAgent.browser.matchCoast_ = function() {
          return goog.labs.userAgent.util.matchUserAgent("Coast");
        }),
        (goog.labs.userAgent.browser.matchIosWebview_ = function() {
          return (
            (goog.labs.userAgent.util.matchUserAgent("iPad") ||
              goog.labs.userAgent.util.matchUserAgent("iPhone")) &&
            !goog.labs.userAgent.browser.matchSafari_() &&
            !goog.labs.userAgent.browser.matchChrome_() &&
            !goog.labs.userAgent.browser.matchCoast_() &&
            goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
          );
        }),
        (goog.labs.userAgent.browser.matchChrome_ = function() {
          return (
            (goog.labs.userAgent.util.matchUserAgent("Chrome") ||
              goog.labs.userAgent.util.matchUserAgent("CriOS")) &&
            !goog.labs.userAgent.browser.matchOpera_() &&
            !goog.labs.userAgent.browser.matchEdge_()
          );
        }),
        (goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
          return (
            goog.labs.userAgent.util.matchUserAgent("Android") &&
            !(
              goog.labs.userAgent.browser.isChrome() ||
              goog.labs.userAgent.browser.isFirefox() ||
              goog.labs.userAgent.browser.isOpera() ||
              goog.labs.userAgent.browser.isSilk()
            )
          );
        }),
        (goog.labs.userAgent.browser.isOpera =
          goog.labs.userAgent.browser.matchOpera_),
        (goog.labs.userAgent.browser.isIE =
          goog.labs.userAgent.browser.matchIE_),
        (goog.labs.userAgent.browser.isEdge =
          goog.labs.userAgent.browser.matchEdge_),
        (goog.labs.userAgent.browser.isFirefox =
          goog.labs.userAgent.browser.matchFirefox_),
        (goog.labs.userAgent.browser.isSafari =
          goog.labs.userAgent.browser.matchSafari_),
        (goog.labs.userAgent.browser.isCoast =
          goog.labs.userAgent.browser.matchCoast_),
        (goog.labs.userAgent.browser.isIosWebview =
          goog.labs.userAgent.browser.matchIosWebview_),
        (goog.labs.userAgent.browser.isChrome =
          goog.labs.userAgent.browser.matchChrome_),
        (goog.labs.userAgent.browser.isAndroidBrowser =
          goog.labs.userAgent.browser.matchAndroidBrowser_),
        (goog.labs.userAgent.browser.isSilk = function() {
          return goog.labs.userAgent.util.matchUserAgent("Silk");
        }),
        (goog.labs.userAgent.browser.getVersion = function() {
          function e(e) {
            return (e = goog.array.find(e, o)), r[e] || "";
          }
          var t = goog.labs.userAgent.util.getUserAgent();
          if (goog.labs.userAgent.browser.isIE())
            return goog.labs.userAgent.browser.getIEVersion_(t);
          t = goog.labs.userAgent.util.extractVersionTuples(t);
          var r = {};
          goog.array.forEach(t, function(e) {
            r[e[0]] = e[1];
          });
          var o = goog.partial(goog.object.containsKey, r);
          return goog.labs.userAgent.browser.isOpera()
            ? e(["Version", "Opera", "OPR"])
            : goog.labs.userAgent.browser.isEdge()
            ? e(["Edge"])
            : goog.labs.userAgent.browser.isChrome()
            ? e(["Chrome", "CriOS"])
            : ((t = t[2]) && t[1]) || "";
        }),
        (goog.labs.userAgent.browser.isVersionOrHigher = function(e) {
          return (
            0 <=
            goog.string.compareVersions(
              goog.labs.userAgent.browser.getVersion(),
              e
            )
          );
        }),
        (goog.labs.userAgent.browser.getIEVersion_ = function(e) {
          if ((t = /rv: *([\d\.]*)/.exec(e)) && t[1]) return t[1];
          var t = "",
            r = /MSIE +([\d\.]+)/.exec(e);
          if (r && r[1])
            if (((e = /Trident\/(\d.\d)/.exec(e)), "7.0" == r[1]))
              if (e && e[1])
                switch (e[1]) {
                  case "4.0":
                    t = "8.0";
                    break;
                  case "5.0":
                    t = "9.0";
                    break;
                  case "6.0":
                    t = "10.0";
                    break;
                  case "7.0":
                    t = "11.0";
                }
              else t = "7.0";
            else t = r[1];
          return t;
        }),
        (goog.labs.userAgent.engine = {}),
        (goog.labs.userAgent.engine.isPresto = function() {
          return goog.labs.userAgent.util.matchUserAgent("Presto");
        }),
        (goog.labs.userAgent.engine.isTrident = function() {
          return (
            goog.labs.userAgent.util.matchUserAgent("Trident") ||
            goog.labs.userAgent.util.matchUserAgent("MSIE")
          );
        }),
        (goog.labs.userAgent.engine.isEdge = function() {
          return goog.labs.userAgent.util.matchUserAgent("Edge");
        }),
        (goog.labs.userAgent.engine.isWebKit = function() {
          return (
            goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") &&
            !goog.labs.userAgent.engine.isEdge()
          );
        }),
        (goog.labs.userAgent.engine.isGecko = function() {
          return (
            goog.labs.userAgent.util.matchUserAgent("Gecko") &&
            !goog.labs.userAgent.engine.isWebKit() &&
            !goog.labs.userAgent.engine.isTrident() &&
            !goog.labs.userAgent.engine.isEdge()
          );
        }),
        (goog.labs.userAgent.engine.getVersion = function() {
          if ((t = goog.labs.userAgent.util.getUserAgent())) {
            var e,
              t = goog.labs.userAgent.util.extractVersionTuples(t),
              r = goog.labs.userAgent.engine.getEngineTuple_(t);
            if (r)
              return "Gecko" == r[0]
                ? goog.labs.userAgent.engine.getVersionForKey_(t, "Firefox")
                : r[1];
            if ((t = t[0]) && (e = t[2]) && (e = /Trident\/([^\s;]+)/.exec(e)))
              return e[1];
          }
          return "";
        }),
        (goog.labs.userAgent.engine.getEngineTuple_ = function(e) {
          if (!goog.labs.userAgent.engine.isEdge()) return e[1];
          for (var t = 0; t < e.length; t++) {
            var r = e[t];
            if ("Edge" == r[0]) return r;
          }
        }),
        (goog.labs.userAgent.engine.isVersionOrHigher = function(e) {
          return (
            0 <=
            goog.string.compareVersions(
              goog.labs.userAgent.engine.getVersion(),
              e
            )
          );
        }),
        (goog.labs.userAgent.engine.getVersionForKey_ = function(e, t) {
          var r = goog.array.find(e, function(e) {
            return t == e[0];
          });
          return (r && r[1]) || "";
        }),
        (goog.userAgent = {}),
        (goog.userAgent.ASSUME_IE = !1),
        (goog.userAgent.ASSUME_EDGE = !1),
        (goog.userAgent.ASSUME_GECKO = !1),
        (goog.userAgent.ASSUME_WEBKIT = !1),
        (goog.userAgent.ASSUME_MOBILE_WEBKIT = !1),
        (goog.userAgent.ASSUME_OPERA = !1),
        (goog.userAgent.ASSUME_ANY_VERSION = !1),
        (goog.userAgent.BROWSER_KNOWN_ =
          goog.userAgent.ASSUME_IE ||
          goog.userAgent.ASSUME_EDGE ||
          goog.userAgent.ASSUME_GECKO ||
          goog.userAgent.ASSUME_MOBILE_WEBKIT ||
          goog.userAgent.ASSUME_WEBKIT ||
          goog.userAgent.ASSUME_OPERA),
        (goog.userAgent.getUserAgentString = function() {
          return goog.labs.userAgent.util.getUserAgent();
        }),
        (goog.userAgent.getNavigator = function() {
          return goog.global.navigator || null;
        }),
        (goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_OPERA
          : goog.labs.userAgent.browser.isOpera()),
        (goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_IE
          : goog.labs.userAgent.browser.isIE()),
        (goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_EDGE
          : goog.labs.userAgent.engine.isEdge()),
        (goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE),
        (goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_GECKO
          : goog.labs.userAgent.engine.isGecko()),
        (goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_
          ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT
          : goog.labs.userAgent.engine.isWebKit()),
        (goog.userAgent.isMobile_ = function() {
          return (
            goog.userAgent.WEBKIT &&
            goog.labs.userAgent.util.matchUserAgent("Mobile")
          );
        }),
        (goog.userAgent.MOBILE =
          goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_()),
        (goog.userAgent.SAFARI = goog.userAgent.WEBKIT),
        (goog.userAgent.determinePlatform_ = function() {
          var e = goog.userAgent.getNavigator();
          return (e && e.platform) || "";
        }),
        (goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_()),
        (goog.userAgent.ASSUME_MAC = !1),
        (goog.userAgent.ASSUME_WINDOWS = !1),
        (goog.userAgent.ASSUME_LINUX = !1),
        (goog.userAgent.ASSUME_X11 = !1),
        (goog.userAgent.ASSUME_ANDROID = !1),
        (goog.userAgent.ASSUME_IPHONE = !1),
        (goog.userAgent.ASSUME_IPAD = !1),
        (goog.userAgent.PLATFORM_KNOWN_ =
          goog.userAgent.ASSUME_MAC ||
          goog.userAgent.ASSUME_WINDOWS ||
          goog.userAgent.ASSUME_LINUX ||
          goog.userAgent.ASSUME_X11 ||
          goog.userAgent.ASSUME_ANDROID ||
          goog.userAgent.ASSUME_IPHONE ||
          goog.userAgent.ASSUME_IPAD),
        (goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_MAC
          : goog.labs.userAgent.platform.isMacintosh()),
        (goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_WINDOWS
          : goog.labs.userAgent.platform.isWindows()),
        (goog.userAgent.isLegacyLinux_ = function() {
          return (
            goog.labs.userAgent.platform.isLinux() ||
            goog.labs.userAgent.platform.isChromeOS()
          );
        }),
        (goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_LINUX
          : goog.userAgent.isLegacyLinux_()),
        (goog.userAgent.isX11_ = function() {
          var e = goog.userAgent.getNavigator();
          return !!e && goog.string.contains(e.appVersion || "", "X11");
        }),
        (goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_X11
          : goog.userAgent.isX11_()),
        (goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_ANDROID
          : goog.labs.userAgent.platform.isAndroid()),
        (goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_IPHONE
          : goog.labs.userAgent.platform.isIphone()),
        (goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_
          ? goog.userAgent.ASSUME_IPAD
          : goog.labs.userAgent.platform.isIpad()),
        (goog.userAgent.operaVersion_ = function() {
          var t = goog.global.opera.version;
          try {
            return t();
          } catch (e) {
            return t;
          }
        }),
        (goog.userAgent.determineVersion_ = function() {
          if (goog.userAgent.OPERA && goog.global.opera)
            return goog.userAgent.operaVersion_();
          var e = "",
            t = goog.userAgent.getVersionRegexResult_();
          return (
            t && (e = t ? t[1] : ""),
            goog.userAgent.IE &&
            (t = goog.userAgent.getDocumentMode_()) > parseFloat(e)
              ? String(t)
              : e
          );
        }),
        (goog.userAgent.getVersionRegexResult_ = function() {
          var e = goog.userAgent.getUserAgentString();
          return goog.userAgent.GECKO
            ? /rv\:([^\);]+)(\)|;)/.exec(e)
            : goog.userAgent.EDGE
            ? /Edge\/([\d\.]+)/.exec(e)
            : goog.userAgent.IE
            ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e)
            : goog.userAgent.WEBKIT
            ? /WebKit\/(\S+)/.exec(e)
            : void 0;
        }),
        (goog.userAgent.getDocumentMode_ = function() {
          var e = goog.global.document;
          return e ? e.documentMode : void 0;
        }),
        (goog.userAgent.VERSION = goog.userAgent.determineVersion_()),
        (goog.userAgent.compare = function(e, t) {
          return goog.string.compareVersions(e, t);
        }),
        (goog.userAgent.isVersionOrHigherCache_ = {}),
        (goog.userAgent.isVersionOrHigher = function(e) {
          return (
            goog.userAgent.ASSUME_ANY_VERSION ||
            goog.userAgent.isVersionOrHigherCache_[e] ||
            (goog.userAgent.isVersionOrHigherCache_[e] =
              0 <= goog.string.compareVersions(goog.userAgent.VERSION, e))
          );
        }),
        (goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher),
        (goog.userAgent.isDocumentModeOrHigher = function(e) {
          return Number(goog.userAgent.DOCUMENT_MODE) >= e;
        }),
        (goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher),
        (goog.userAgent.DOCUMENT_MODE = ((aC = goog.global.document),
        (bC = goog.userAgent.getDocumentMode_()),
        aC && goog.userAgent.IE
          ? bC ||
            ("CSS1Compat" == aC.compatMode
              ? parseInt(goog.userAgent.VERSION, 10)
              : 5)
          : void 0)),
        (goog.userAgent.product = {}),
        (goog.userAgent.product.ASSUME_FIREFOX = !1),
        (goog.userAgent.product.ASSUME_IPHONE = !1),
        (goog.userAgent.product.ASSUME_IPAD = !1),
        (goog.userAgent.product.ASSUME_ANDROID = !1),
        (goog.userAgent.product.ASSUME_CHROME = !1),
        (goog.userAgent.product.ASSUME_SAFARI = !1),
        (goog.userAgent.product.PRODUCT_KNOWN_ =
          goog.userAgent.ASSUME_IE ||
          goog.userAgent.ASSUME_EDGE ||
          goog.userAgent.ASSUME_OPERA ||
          goog.userAgent.product.ASSUME_FIREFOX ||
          goog.userAgent.product.ASSUME_IPHONE ||
          goog.userAgent.product.ASSUME_IPAD ||
          goog.userAgent.product.ASSUME_ANDROID ||
          goog.userAgent.product.ASSUME_CHROME ||
          goog.userAgent.product.ASSUME_SAFARI),
        (goog.userAgent.product.OPERA = goog.userAgent.OPERA),
        (goog.userAgent.product.IE = goog.userAgent.IE),
        (goog.userAgent.product.EDGE = goog.userAgent.EDGE),
        (goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_FIREFOX
          : goog.labs.userAgent.browser.isFirefox()),
        (goog.userAgent.product.isIphoneOrIpod_ = function() {
          return (
            goog.labs.userAgent.platform.isIphone() ||
            goog.labs.userAgent.platform.isIpod()
          );
        }),
        (goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_IPHONE
          : goog.userAgent.product.isIphoneOrIpod_()),
        (goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_IPAD
          : goog.labs.userAgent.platform.isIpad()),
        (goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_ANDROID
          : goog.labs.userAgent.browser.isAndroidBrowser()),
        (goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_CHROME
          : goog.labs.userAgent.browser.isChrome()),
        (goog.userAgent.product.isSafariDesktop_ = function() {
          return (
            goog.labs.userAgent.browser.isSafari() &&
            !goog.labs.userAgent.platform.isIos()
          );
        }),
        (goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_
          ? goog.userAgent.product.ASSUME_SAFARI
          : goog.userAgent.product.isSafariDesktop_()),
        (goog.crypt.base64 = {}),
        (goog.crypt.base64.byteToCharMap_ = null),
        (goog.crypt.base64.charToByteMap_ = null),
        (goog.crypt.base64.byteToCharMapWebSafe_ = null),
        (goog.crypt.base64.ENCODED_VALS_BASE =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"),
        (goog.crypt.base64.ENCODED_VALS =
          goog.crypt.base64.ENCODED_VALS_BASE + "+/="),
        (goog.crypt.base64.ENCODED_VALS_WEBSAFE =
          goog.crypt.base64.ENCODED_VALS_BASE + "-_."),
        (goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ =
          goog.userAgent.GECKO ||
          (goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI) ||
          goog.userAgent.OPERA),
        (goog.crypt.base64.HAS_NATIVE_ENCODE_ =
          goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
          "function" == typeof goog.global.btoa),
        (goog.crypt.base64.HAS_NATIVE_DECODE_ =
          goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ ||
          (!goog.userAgent.product.SAFARI &&
            !goog.userAgent.IE &&
            "function" == typeof goog.global.atob)),
        (goog.crypt.base64.encodeByteArray = function(e, t) {
          goog.asserts.assert(
            goog.isArrayLike(e),
            "encodeByteArray takes an array as a parameter"
          ),
            goog.crypt.base64.init_();
          for (
            var r = t
                ? goog.crypt.base64.byteToCharMapWebSafe_
                : goog.crypt.base64.byteToCharMap_,
              o = [],
              n = 0;
            n < e.length;
            n += 3
          ) {
            var s = e[n],
              i = n + 1 < e.length,
              a = i ? e[n + 1] : 0,
              g = n + 2 < e.length,
              u = s >> 2,
              l = ((s = ((3 & s) << 4) | (a >> 4)),
              (a = ((15 & a) << 2) | ((l = g ? e[n + 2] : 0) >> 6)),
              63 & l);
            g || ((l = 64), i || (a = 64)), o.push(r[u], r[s], r[a], r[l]);
          }
          return o.join("");
        }),
        (goog.crypt.base64.encodeString = function(e, t) {
          return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t
            ? goog.global.btoa(e)
            : goog.crypt.base64.encodeByteArray(
                goog.crypt.stringToByteArray(e),
                t
              );
        }),
        (goog.crypt.base64.decodeString = function(e, t) {
          if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t)
            return goog.global.atob(e);
          var r = "";
          return (
            goog.crypt.base64.decodeStringInternal_(e, function(e) {
              r += String.fromCharCode(e);
            }),
            r
          );
        }),
        (goog.crypt.base64.decodeStringToByteArray = function(e, t) {
          var r = [];
          return (
            goog.crypt.base64.decodeStringInternal_(e, function(e) {
              r.push(e);
            }),
            r
          );
        }),
        (goog.crypt.base64.decodeStringToUint8Array = function(e) {
          goog.asserts.assert(
            !goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"),
            "Browser does not support typed arrays"
          );
          var t = new Uint8Array(Math.ceil((3 * e.length) / 4)),
            r = 0;
          return (
            goog.crypt.base64.decodeStringInternal_(e, function(e) {
              t[r++] = e;
            }),
            t.subarray(0, r)
          );
        }),
        (goog.crypt.base64.decodeStringInternal_ = function(o, e) {
          function t(e) {
            for (; n < o.length; ) {
              var t = o.charAt(n++),
                r = goog.crypt.base64.charToByteMap_[t];
              if (null != r) return r;
              if (!goog.string.isEmptyOrWhitespace(t))
                throw Error("Unknown base64 encoding at char: " + t);
            }
            return e;
          }
          goog.crypt.base64.init_();
          for (var n = 0; ; ) {
            var r = t(-1),
              s = t(0),
              i = t(64),
              a = t(64);
            if (64 === a && -1 === r) break;
            e((r << 2) | (s >> 4)),
              64 != i &&
                (e(((s << 4) & 240) | (i >> 2)),
                64 != a && e(((i << 6) & 192) | a));
          }
        }),
        (goog.crypt.base64.init_ = function() {
          if (!goog.crypt.base64.byteToCharMap_) {
            (goog.crypt.base64.byteToCharMap_ = {}),
              (goog.crypt.base64.charToByteMap_ = {}),
              (goog.crypt.base64.byteToCharMapWebSafe_ = {});
            for (var e = 0; e < goog.crypt.base64.ENCODED_VALS.length; e++)
              (goog.crypt.base64.byteToCharMap_[
                e
              ] = goog.crypt.base64.ENCODED_VALS.charAt(e)),
                (goog.crypt.base64.charToByteMap_[
                  goog.crypt.base64.byteToCharMap_[e]
                ] = e),
                (goog.crypt.base64.byteToCharMapWebSafe_[
                  e
                ] = goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e)),
                e >= goog.crypt.base64.ENCODED_VALS_BASE.length &&
                  (goog.crypt.base64.charToByteMap_[
                    goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e)
                  ] = e);
          }
        }),
        (jspb.ExtensionFieldInfo = function(e, t, r, o, n) {
          (this.fieldIndex = e),
            (this.fieldName = t),
            (this.ctor = r),
            (this.toObjectFn = o),
            (this.isRepeated = n);
        }),
        (jspb.ExtensionFieldBinaryInfo = function(e, t, r, o, n, s) {
          (this.fieldInfo = e),
            (this.binaryReaderFn = t),
            (this.binaryWriterFn = r),
            (this.binaryMessageSerializeFn = o),
            (this.binaryMessageDeserializeFn = n),
            (this.isPacked = s);
        }),
        (jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
          return !!this.ctor;
        }),
        (jspb.Message = function() {}),
        (jspb.Message.GENERATE_TO_OBJECT = !0),
        (jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE),
        (jspb.Message.GENERATE_TO_STRING = !0),
        (jspb.Message.ASSUME_LOCAL_ARRAYS = !1),
        (jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0),
        (jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array),
        (jspb.Message.prototype.getJsPbMessageId = function() {
          return this.messageId_;
        }),
        (jspb.Message.getIndex_ = function(e, t) {
          return t + e.arrayIndexOffset_;
        }),
        (jspb.Message.getFieldNumber_ = function(e, t) {
          return t - e.arrayIndexOffset_;
        }),
        (jspb.Message.initialize = function(e, t, r, o, n, s) {
          if (
            ((e.wrappers_ = null),
            t || (t = r ? [r] : []),
            (e.messageId_ = r ? String(r) : void 0),
            (e.arrayIndexOffset_ = 0 === r ? -1 : 0),
            (e.array = t),
            jspb.Message.initPivotAndExtensionObject_(e, o),
            (e.convertedFloatingPointFields_ = {}),
            jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS ||
              (e.repeatedFields = n),
            n)
          )
            for (t = 0; t < n.length; t++)
              (r = n[t]) < e.pivot_
                ? ((r = jspb.Message.getIndex_(e, r)),
                  (e.array[r] =
                    e.array[r] || jspb.Message.EMPTY_LIST_SENTINEL_))
                : (jspb.Message.maybeInitEmptyExtensionObject_(e),
                  (e.extensionObject_[r] =
                    e.extensionObject_[r] ||
                    jspb.Message.EMPTY_LIST_SENTINEL_));
          if (s && s.length)
            for (t = 0; t < s.length; t++)
              jspb.Message.computeOneofCase(e, s[t]);
        }),
        (jspb.Message.EMPTY_LIST_SENTINEL_ =
          goog.DEBUG && Object.freeze ? Object.freeze([]) : []),
        (jspb.Message.isArray_ = function(e) {
          return jspb.Message.ASSUME_LOCAL_ARRAYS
            ? e instanceof Array
            : goog.isArray(e);
        }),
        (jspb.Message.initPivotAndExtensionObject_ = function(e, t) {
          if (e.array.length) {
            var r = e.array.length - 1,
              o = e.array[r];
            if (
              o &&
              "object" == typeof o &&
              !jspb.Message.isArray_(o) &&
              !(jspb.Message.SUPPORTS_UINT8ARRAY_ && o instanceof Uint8Array)
            )
              return (
                (e.pivot_ = jspb.Message.getFieldNumber_(e, r)),
                void (e.extensionObject_ = o)
              );
          }
          -1 < t
            ? ((e.pivot_ = t), (e.extensionObject_ = null))
            : (e.pivot_ = Number.MAX_VALUE);
        }),
        (jspb.Message.maybeInitEmptyExtensionObject_ = function(e) {
          var t = jspb.Message.getIndex_(e, e.pivot_);
          e.array[t] || (e.extensionObject_ = e.array[t] = {});
        }),
        (jspb.Message.toObjectList = function(e, t, r) {
          for (var o = [], n = 0; n < e.length; n++)
            o[n] = t.call(e[n], r, e[n]);
          return o;
        }),
        (jspb.Message.toObjectExtension = function(e, t, r, o, n) {
          for (var s in r) {
            var i = r[s],
              a = o.call(e, i);
            if (null != a) {
              for (var g in i.fieldName)
                if (i.fieldName.hasOwnProperty(g)) break;
              t[g] = i.toObjectFn
                ? i.isRepeated
                  ? jspb.Message.toObjectList(a, i.toObjectFn, n)
                  : i.toObjectFn(n, a)
                : a;
            }
          }
        }),
        (jspb.Message.serializeBinaryExtensions = function(e, t, r, o) {
          for (var n in r) {
            var s = r[n],
              i = s.fieldInfo;
            if (!s.binaryWriterFn)
              throw Error(
                "Message extension present that was generated without binary serialization support"
              );
            var a = o.call(e, i);
            if (null != a)
              if (i.isMessageType()) {
                if (!s.binaryMessageSerializeFn)
                  throw Error(
                    "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format"
                  );
                s.binaryWriterFn.call(
                  t,
                  i.fieldIndex,
                  a,
                  s.binaryMessageSerializeFn
                );
              } else s.binaryWriterFn.call(t, i.fieldIndex, a);
          }
        }),
        (jspb.Message.readBinaryExtension = function(e, t, r, o, n) {
          var s = r[t.getFieldNumber()];
          if (s) {
            if (((r = s.fieldInfo), !s.binaryReaderFn))
              throw Error(
                "Deserializing extension whose generated code does not support binary format"
              );
            var i;
            r.isMessageType()
              ? ((i = new r.ctor()),
                s.binaryReaderFn.call(t, i, s.binaryMessageDeserializeFn))
              : (i = s.binaryReaderFn.call(t)),
              r.isRepeated && !s.isPacked
                ? (t = o.call(e, r))
                  ? t.push(i)
                  : n.call(e, r, [i])
                : n.call(e, r, i);
          } else t.skipField();
        }),
        (jspb.Message.getField = function(e, t) {
          if (t < e.pivot_) {
            var r = jspb.Message.getIndex_(e, t),
              o = e.array[r];
            return o === jspb.Message.EMPTY_LIST_SENTINEL_
              ? (e.array[r] = [])
              : o;
          }
          if (e.extensionObject_)
            return (o = e.extensionObject_[t]) ===
              jspb.Message.EMPTY_LIST_SENTINEL_
              ? (e.extensionObject_[t] = [])
              : o;
        }),
        (jspb.Message.getRepeatedField = function(e, t) {
          if (t < e.pivot_) {
            var r = jspb.Message.getIndex_(e, t),
              o = e.array[r];
            return o === jspb.Message.EMPTY_LIST_SENTINEL_
              ? (e.array[r] = [])
              : o;
          }
          return (o = e.extensionObject_[t]) ===
            jspb.Message.EMPTY_LIST_SENTINEL_
            ? (e.extensionObject_[t] = [])
            : o;
        }),
        (jspb.Message.getOptionalFloatingPointField = function(e, t) {
          var r = jspb.Message.getField(e, t);
          return null == r ? r : +r;
        }),
        (jspb.Message.getRepeatedFloatingPointField = function(e, t) {
          var r = jspb.Message.getRepeatedField(e, t);
          if (
            (e.convertedFloatingPointFields_ ||
              (e.convertedFloatingPointFields_ = {}),
            !e.convertedFloatingPointFields_[t])
          ) {
            for (var o = 0; o < r.length; o++) r[o] = +r[o];
            e.convertedFloatingPointFields_[t] = !0;
          }
          return r;
        }),
        (jspb.Message.bytesAsB64 = function(e) {
          return null == e || goog.isString(e)
            ? e
            : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array
            ? goog.crypt.base64.encodeByteArray(e)
            : (goog.asserts.fail(
                "Cannot coerce to b64 string: " + goog.typeOf(e)
              ),
              null);
        }),
        (jspb.Message.bytesAsU8 = function(e) {
          return null == e || e instanceof Uint8Array
            ? e
            : goog.isString(e)
            ? goog.crypt.base64.decodeStringToUint8Array(e)
            : (goog.asserts.fail(
                "Cannot coerce to Uint8Array: " + goog.typeOf(e)
              ),
              null);
        }),
        (jspb.Message.bytesListAsB64 = function(e) {
          return (
            jspb.Message.assertConsistentTypes_(e),
            !e.length || goog.isString(e[0])
              ? e
              : goog.array.map(e, jspb.Message.bytesAsB64)
          );
        }),
        (jspb.Message.bytesListAsU8 = function(e) {
          return (
            jspb.Message.assertConsistentTypes_(e),
            !e.length || e[0] instanceof Uint8Array
              ? e
              : goog.array.map(e, jspb.Message.bytesAsU8)
          );
        }),
        (jspb.Message.assertConsistentTypes_ = function(e) {
          if (goog.DEBUG && e && 1 < e.length) {
            var t = goog.typeOf(e[0]);
            goog.array.forEach(e, function(e) {
              goog.typeOf(e) != t &&
                goog.asserts.fail(
                  "Inconsistent type in JSPB repeated field array. Got " +
                    goog.typeOf(e) +
                    " expected " +
                    t
                );
            });
          }
        }),
        (jspb.Message.getFieldWithDefault = function(e, t, r) {
          return null == (e = jspb.Message.getField(e, t)) ? r : e;
        }),
        (jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault),
        (jspb.Message.getMapField = function(e, t, r, o) {
          return (
            e.wrappers_ || (e.wrappers_ = {}),
            t in e.wrappers_
              ? e.wrappers_[t]
              : r
              ? void 0
              : ((r = jspb.Message.getField(e, t)) ||
                  ((r = []), jspb.Message.setField(e, t, r)),
                (e.wrappers_[t] = new jspb.Map(r, o)))
          );
        }),
        (jspb.Message.setField = function(e, t, r) {
          t < e.pivot_
            ? (e.array[jspb.Message.getIndex_(e, t)] = r)
            : (jspb.Message.maybeInitEmptyExtensionObject_(e),
              (e.extensionObject_[t] = r));
        }),
        (jspb.Message.setProto3IntField = function(e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
        }),
        (jspb.Message.setProto3StringIntField = function(e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, "0");
        }),
        (jspb.Message.setProto3FloatField = function(e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
        }),
        (jspb.Message.setProto3BooleanField = function(e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, !1);
        }),
        (jspb.Message.setProto3StringField = function(e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, "");
        }),
        (jspb.Message.setProto3BytesField = function(e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, "");
        }),
        (jspb.Message.setProto3EnumField = function(e, t, r) {
          jspb.Message.setFieldIgnoringDefault_(e, t, r, 0);
        }),
        (jspb.Message.setFieldIgnoringDefault_ = function(e, t, r, o) {
          r != o
            ? jspb.Message.setField(e, t, r)
            : (e.array[jspb.Message.getIndex_(e, t)] = null);
        }),
        (jspb.Message.addToRepeatedField = function(e, t, r, o) {
          (e = jspb.Message.getRepeatedField(e, t)),
            null != o ? e.splice(o, 0, r) : e.push(r);
        }),
        (jspb.Message.setOneofField = function(e, t, r, o) {
          (r = jspb.Message.computeOneofCase(e, r)) &&
            r !== t &&
            void 0 !== o &&
            (e.wrappers_ && r in e.wrappers_ && (e.wrappers_[r] = void 0),
            jspb.Message.setField(e, r, void 0)),
            jspb.Message.setField(e, t, o);
        }),
        (jspb.Message.computeOneofCase = function(e, t) {
          for (var r, o, n = 0; n < t.length; n++) {
            var s = t[n],
              i = jspb.Message.getField(e, s);
            null != i &&
              ((r = s), (o = i), jspb.Message.setField(e, s, void 0));
          }
          return r ? (jspb.Message.setField(e, r, o), r) : 0;
        }),
        (jspb.Message.getWrapperField = function(e, t, r, o) {
          if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[r])) {
            var n = jspb.Message.getField(e, r);
            (o || n) && (e.wrappers_[r] = new t(n));
          }
          return e.wrappers_[r];
        }),
        (jspb.Message.getRepeatedWrapperField = function(e, t, r) {
          return (
            jspb.Message.wrapRepeatedField_(e, t, r),
            (t = e.wrappers_[r]) == jspb.Message.EMPTY_LIST_SENTINEL_ &&
              (t = e.wrappers_[r] = []),
            t
          );
        }),
        (jspb.Message.wrapRepeatedField_ = function(e, t, r) {
          if ((e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[r])) {
            for (
              var o = jspb.Message.getRepeatedField(e, r), n = [], s = 0;
              s < o.length;
              s++
            )
              n[s] = new t(o[s]);
            e.wrappers_[r] = n;
          }
        }),
        (jspb.Message.setWrapperField = function(e, t, r) {
          e.wrappers_ || (e.wrappers_ = {});
          var o = r ? r.toArray() : r;
          (e.wrappers_[t] = r), jspb.Message.setField(e, t, o);
        }),
        (jspb.Message.setOneofWrapperField = function(e, t, r, o) {
          e.wrappers_ || (e.wrappers_ = {});
          var n = o ? o.toArray() : o;
          (e.wrappers_[t] = o), jspb.Message.setOneofField(e, t, r, n);
        }),
        (jspb.Message.setRepeatedWrapperField = function(e, t, r) {
          e.wrappers_ || (e.wrappers_ = {}), (r = r || []);
          for (var o = [], n = 0; n < r.length; n++) o[n] = r[n].toArray();
          (e.wrappers_[t] = r), jspb.Message.setField(e, t, o);
        }),
        (jspb.Message.addToRepeatedWrapperField = function(e, t, r, o, n) {
          jspb.Message.wrapRepeatedField_(e, o, t);
          var s = e.wrappers_[t];
          return (
            s || (s = e.wrappers_[t] = []),
            (r = r || new o()),
            (e = jspb.Message.getRepeatedField(e, t)),
            null != n
              ? (s.splice(n, 0, r), e.splice(n, 0, r.toArray()))
              : (s.push(r), e.push(r.toArray())),
            r
          );
        }),
        (jspb.Message.toMap = function(e, t, r, o) {
          for (var n = {}, s = 0; s < e.length; s++)
            n[t.call(e[s])] = r ? r.call(e[s], o, e[s]) : e[s];
          return n;
        }),
        (jspb.Message.prototype.syncMapFields_ = function() {
          if (this.wrappers_)
            for (var e in this.wrappers_) {
              var t = this.wrappers_[e];
              if (goog.isArray(t))
                for (var r = 0; r < t.length; r++) t[r] && t[r].toArray();
              else t && t.toArray();
            }
        }),
        (jspb.Message.prototype.toArray = function() {
          return this.syncMapFields_(), this.array;
        }),
        jspb.Message.GENERATE_TO_STRING &&
          (jspb.Message.prototype.toString = function() {
            return this.syncMapFields_(), this.array.toString();
          }),
        (jspb.Message.prototype.getExtension = function(t) {
          if (this.extensionObject_) {
            this.wrappers_ || (this.wrappers_ = {});
            var e = t.fieldIndex;
            if (t.isRepeated) {
              if (t.isMessageType())
                return (
                  this.wrappers_[e] ||
                    (this.wrappers_[e] = goog.array.map(
                      this.extensionObject_[e] || [],
                      function(e) {
                        return new t.ctor(e);
                      }
                    )),
                  this.wrappers_[e]
                );
            } else if (t.isMessageType())
              return (
                !this.wrappers_[e] &&
                  this.extensionObject_[e] &&
                  (this.wrappers_[e] = new t.ctor(this.extensionObject_[e])),
                this.wrappers_[e]
              );
            return this.extensionObject_[e];
          }
        }),
        (jspb.Message.prototype.setExtension = function(e, t) {
          this.wrappers_ || (this.wrappers_ = {}),
            jspb.Message.maybeInitEmptyExtensionObject_(this);
          var r = e.fieldIndex;
          return (
            e.isRepeated
              ? ((t = t || []),
                e.isMessageType()
                  ? ((this.wrappers_[r] = t),
                    (this.extensionObject_[r] = goog.array.map(t, function(e) {
                      return e.toArray();
                    })))
                  : (this.extensionObject_[r] = t))
              : e.isMessageType()
              ? ((this.wrappers_[r] = t),
                (this.extensionObject_[r] = t ? t.toArray() : t))
              : (this.extensionObject_[r] = t),
            this
          );
        }),
        (jspb.Message.difference = function(e, t) {
          if (!(e instanceof t.constructor))
            throw Error("Messages have different types.");
          var r = e.toArray(),
            o = t.toArray(),
            n = [],
            s = 0,
            i = r.length > o.length ? r.length : o.length;
          for (
            e.getJsPbMessageId() && ((n[0] = e.getJsPbMessageId()), (s = 1));
            s < i;
            s++
          )
            jspb.Message.compareFields(r[s], o[s]) || (n[s] = o[s]);
          return new e.constructor(n);
        }),
        (jspb.Message.equals = function(e, t) {
          return (
            e == t ||
            (!(!e || !t) &&
              e instanceof t.constructor &&
              jspb.Message.compareFields(e.toArray(), t.toArray()))
          );
        }),
        (jspb.Message.compareExtensions = function(e, t) {
          (e = e || {}), (t = t || {});
          var r,
            o = {};
          for (r in e) o[r] = 0;
          for (r in t) o[r] = 0;
          for (r in o) if (!jspb.Message.compareFields(e[r], t[r])) return !1;
          return !0;
        }),
        (jspb.Message.compareFields = function(e, t) {
          if (e == t) return !0;
          if (!goog.isObject(e) || !goog.isObject(t))
            return (
              !!(
                (goog.isNumber(e) && isNaN(e)) ||
                (goog.isNumber(t) && isNaN(t))
              ) && String(e) == String(t)
            );
          if (e.constructor != t.constructor) return !1;
          if (
            jspb.Message.SUPPORTS_UINT8ARRAY_ &&
            e.constructor === Uint8Array
          ) {
            if (e.length != t.length) return !1;
            for (var r = 0; r < e.length; r++) if (e[r] != t[r]) return !1;
            return !0;
          }
          if (e.constructor === Array) {
            var o = void 0,
              n = void 0,
              s = Math.max(e.length, t.length);
            for (r = 0; r < s; r++) {
              var i = e[r],
                a = t[r];
              if (
                (i &&
                  i.constructor == Object &&
                  (goog.asserts.assert(void 0 === o),
                  goog.asserts.assert(r === e.length - 1),
                  (o = i),
                  (i = void 0)),
                a &&
                  a.constructor == Object &&
                  (goog.asserts.assert(void 0 === n),
                  goog.asserts.assert(r === t.length - 1),
                  (n = a),
                  (a = void 0)),
                !jspb.Message.compareFields(i, a))
              )
                return !1;
            }
            return (
              (!o && !n) ||
              ((o = o || {}),
              (n = n || {}),
              jspb.Message.compareExtensions(o, n))
            );
          }
          if (e.constructor === Object)
            return jspb.Message.compareExtensions(e, t);
          throw Error("Invalid type in JSPB array");
        }),
        (jspb.Message.prototype.cloneMessage = function() {
          return jspb.Message.cloneMessage(this);
        }),
        (jspb.Message.prototype.clone = function() {
          return jspb.Message.cloneMessage(this);
        }),
        (jspb.Message.clone = function(e) {
          return jspb.Message.cloneMessage(e);
        }),
        (jspb.Message.cloneMessage = function(e) {
          return new e.constructor(jspb.Message.clone_(e.toArray()));
        }),
        (jspb.Message.copyInto = function(e, t) {
          goog.asserts.assertInstanceof(e, jspb.Message),
            goog.asserts.assertInstanceof(t, jspb.Message),
            goog.asserts.assert(
              e.constructor == t.constructor,
              "Copy source and target message should have the same type."
            );
          for (
            var r = jspb.Message.clone(e),
              o = t.toArray(),
              n = r.toArray(),
              s = (o.length = 0);
            s < n.length;
            s++
          )
            o[s] = n[s];
          (t.wrappers_ = r.wrappers_),
            (t.extensionObject_ = r.extensionObject_);
        }),
        (jspb.Message.clone_ = function(e) {
          var t;
          if (goog.isArray(e)) {
            for (var r = Array(e.length), o = 0; o < e.length; o++)
              null != (t = e[o]) &&
                (r[o] =
                  "object" == typeof t
                    ? jspb.Message.clone_(goog.asserts.assert(t))
                    : t);
            return r;
          }
          if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array)
            return new Uint8Array(e);
          for (o in ((r = {}), e))
            null != (t = e[o]) &&
              (r[o] =
                "object" == typeof t
                  ? jspb.Message.clone_(goog.asserts.assert(t))
                  : t);
          return r;
        }),
        (jspb.Message.registerMessageType = function(e, t) {
          (jspb.Message.registry_[e] = t).messageId = e;
        }),
        (jspb.Message.registry_ = {}),
        (jspb.Message.messageSetExtensions = {}),
        (jspb.Message.messageSetExtensionsBinary = {}),
        (jspb.arith = {}),
        (jspb.arith.UInt64 = function(e, t) {
          (this.lo = e), (this.hi = t);
        }),
        (jspb.arith.UInt64.prototype.cmp = function(e) {
          return this.hi < e.hi || (this.hi == e.hi && this.lo < e.lo)
            ? -1
            : this.hi == e.hi && this.lo == e.lo
            ? 0
            : 1;
        }),
        (jspb.arith.UInt64.prototype.rightShift = function() {
          return new jspb.arith.UInt64(
            ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
            (this.hi >>> 1) >>> 0
          );
        }),
        (jspb.arith.UInt64.prototype.leftShift = function() {
          return new jspb.arith.UInt64(
            (this.lo << 1) >>> 0,
            ((this.hi << 1) | (this.lo >>> 31)) >>> 0
          );
        }),
        (jspb.arith.UInt64.prototype.msb = function() {
          return !!(2147483648 & this.hi);
        }),
        (jspb.arith.UInt64.prototype.lsb = function() {
          return !!(1 & this.lo);
        }),
        (jspb.arith.UInt64.prototype.zero = function() {
          return 0 == this.lo && 0 == this.hi;
        }),
        (jspb.arith.UInt64.prototype.add = function(e) {
          return new jspb.arith.UInt64(
            (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + e.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
              0
          );
        }),
        (jspb.arith.UInt64.prototype.sub = function(e) {
          return new jspb.arith.UInt64(
            (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - e.hi) & 4294967295) >>> 0) -
              (this.lo - e.lo < 0 ? 1 : 0)) >>>
              0
          );
        }),
        (jspb.arith.UInt64.mul32x32 = function(e, t) {
          for (
            var r = e >>> 16,
              o = 65535 & t,
              n = t >>> 16,
              s =
                (i = 65535 & e) * o +
                65536 * ((i * n) & 65535) +
                65536 * ((r * o) & 65535),
              i = r * n + ((i * n) >>> 16) + ((r * o) >>> 16);
            4294967296 <= s;

          )
            (s -= 4294967296), (i += 1);
          return new jspb.arith.UInt64(s >>> 0, i >>> 0);
        }),
        (jspb.arith.UInt64.prototype.mul = function(e) {
          var t = jspb.arith.UInt64.mul32x32(this.lo, e);
          return (
            ((e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo),
            (e.lo = 0),
            t.add(e)
          );
        }),
        (jspb.arith.UInt64.prototype.div = function(e) {
          if (0 == e) return [];
          var t = new jspb.arith.UInt64(0, 0),
            r = new jspb.arith.UInt64(this.lo, this.hi);
          e = new jspb.arith.UInt64(e, 0);
          for (var o = new jspb.arith.UInt64(1, 0); !e.msb(); )
            (e = e.leftShift()), (o = o.leftShift());
          for (; !o.zero(); )
            e.cmp(r) <= 0 && ((t = t.add(o)), (r = r.sub(e))),
              (e = e.rightShift()),
              (o = o.rightShift());
          return [t, r];
        }),
        (jspb.arith.UInt64.prototype.toString = function() {
          for (var e = "", t = this; !t.zero(); ) {
            var r = (t = t.div(10))[0];
            (e = t[1].lo + e), (t = r);
          }
          return "" == e && (e = "0"), e;
        }),
        (jspb.arith.UInt64.fromString = function(e) {
          for (
            var t = new jspb.arith.UInt64(0, 0),
              r = new jspb.arith.UInt64(0, 0),
              o = 0;
            o < e.length;
            o++
          ) {
            if (e[o] < "0" || "9" < e[o]) return null;
            var n = parseInt(e[o], 10);
            (r.lo = n), (t = t.mul(10).add(r));
          }
          return t;
        }),
        (jspb.arith.UInt64.prototype.clone = function() {
          return new jspb.arith.UInt64(this.lo, this.hi);
        }),
        (jspb.arith.Int64 = function(e, t) {
          (this.lo = e), (this.hi = t);
        }),
        (jspb.arith.Int64.prototype.add = function(e) {
          return new jspb.arith.Int64(
            (((this.lo + e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + e.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + e.lo ? 1 : 0)) >>>
              0
          );
        }),
        (jspb.arith.Int64.prototype.sub = function(e) {
          return new jspb.arith.Int64(
            (((this.lo - e.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - e.hi) & 4294967295) >>> 0) -
              (this.lo - e.lo < 0 ? 1 : 0)) >>>
              0
          );
        }),
        (jspb.arith.Int64.prototype.clone = function() {
          return new jspb.arith.Int64(this.lo, this.hi);
        }),
        (jspb.arith.Int64.prototype.toString = function() {
          var e = 0 != (2147483648 & this.hi),
            t = new jspb.arith.UInt64(this.lo, this.hi);
          return (
            e && (t = new jspb.arith.UInt64(0, 0).sub(t)),
            (e ? "-" : "") + t.toString()
          );
        }),
        (jspb.arith.Int64.fromString = function(e) {
          var t = 0 < e.length && "-" == e[0];
          return (
            t && (e = e.substring(1)),
            null === (e = jspb.arith.UInt64.fromString(e))
              ? null
              : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)),
                new jspb.arith.Int64(e.lo, e.hi))
          );
        }),
        (jspb.BinaryConstants = {}),
        (jspb.ConstBinaryMessage = function() {}),
        (jspb.BinaryMessage = function() {}),
        (jspb.BinaryConstants.FieldType = {
          INVALID: -1,
          DOUBLE: 1,
          FLOAT: 2,
          INT64: 3,
          UINT64: 4,
          INT32: 5,
          FIXED64: 6,
          FIXED32: 7,
          BOOL: 8,
          STRING: 9,
          GROUP: 10,
          MESSAGE: 11,
          BYTES: 12,
          UINT32: 13,
          ENUM: 14,
          SFIXED32: 15,
          SFIXED64: 16,
          SINT32: 17,
          SINT64: 18,
          FHASH64: 30,
          VHASH64: 31
        }),
        (jspb.BinaryConstants.WireType = {
          INVALID: -1,
          VARINT: 0,
          FIXED64: 1,
          DELIMITED: 2,
          START_GROUP: 3,
          END_GROUP: 4,
          FIXED32: 5
        }),
        (jspb.BinaryConstants.FieldTypeToWireType = function(e) {
          var t = jspb.BinaryConstants.FieldType,
            r = jspb.BinaryConstants.WireType;
          switch (e) {
            case t.INT32:
            case t.INT64:
            case t.UINT32:
            case t.UINT64:
            case t.SINT32:
            case t.SINT64:
            case t.BOOL:
            case t.ENUM:
            case t.VHASH64:
              return r.VARINT;
            case t.DOUBLE:
            case t.FIXED64:
            case t.SFIXED64:
            case t.FHASH64:
              return r.FIXED64;
            case t.STRING:
            case t.MESSAGE:
            case t.BYTES:
              return r.DELIMITED;
            case t.FLOAT:
            case t.FIXED32:
            case t.SFIXED32:
              return r.FIXED32;
            default:
              return r.INVALID;
          }
        }),
        (jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1),
        (jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60),
        (jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54),
        (jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22),
        (jspb.BinaryConstants.FLOAT64_EPS = 5e-324),
        (jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324),
        (jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292),
        (jspb.BinaryConstants.TWO_TO_20 = 1048576),
        (jspb.BinaryConstants.TWO_TO_23 = 8388608),
        (jspb.BinaryConstants.TWO_TO_31 = 2147483648),
        (jspb.BinaryConstants.TWO_TO_32 = 4294967296),
        (jspb.BinaryConstants.TWO_TO_52 = 4503599627370496),
        (jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000),
        (jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000),
        (jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0"),
        (jspb.utils = {}),
        (jspb.utils.split64Low = 0),
        (jspb.utils.split64High = 0),
        (jspb.utils.splitUint64 = function(e) {
          var t = e >>> 0;
          (e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0),
            (jspb.utils.split64Low = t),
            (jspb.utils.split64High = e);
        }),
        (jspb.utils.splitInt64 = function(e) {
          var t = e < 0,
            r = (e = Math.abs(e)) >>> 0;
          (e = Math.floor((e - r) / jspb.BinaryConstants.TWO_TO_32)),
            (e >>>= 0),
            t &&
              ((e = ~e >>> 0),
              4294967295 < (r = 1 + (~r >>> 0)) &&
                ((r = 0), 4294967295 < ++e && (e = 0))),
            (jspb.utils.split64Low = r),
            (jspb.utils.split64High = e);
        }),
        (jspb.utils.splitZigzag64 = function(e) {
          var t = e < 0;
          (e = 2 * Math.abs(e)),
            jspb.utils.splitUint64(e),
            (e = jspb.utils.split64Low);
          var r = jspb.utils.split64High;
          t &&
            (0 == e
              ? 0 == r
                ? (r = e = 4294967295)
                : (r--, (e = 4294967295))
              : e--),
            (jspb.utils.split64Low = e),
            (jspb.utils.split64High = r);
        }),
        (jspb.utils.splitFloat32 = function(e) {
          var t,
            r = e < 0 ? 1 : 0;
          0 === (e = r ? -e : e)
            ? (jspb.utils.split64Low =
                0 < 1 / e
                  ? (jspb.utils.split64High = 0)
                  : ((jspb.utils.split64High = 0), 2147483648))
            : isNaN(e)
            ? ((jspb.utils.split64High = 0),
              (jspb.utils.split64Low = 2147483647))
            : e > jspb.BinaryConstants.FLOAT32_MAX
            ? ((jspb.utils.split64High = 0),
              (jspb.utils.split64Low = ((r << 31) | 2139095040) >>> 0))
            : e < jspb.BinaryConstants.FLOAT32_MIN
            ? ((e = Math.round(e / Math.pow(2, -149))),
              (jspb.utils.split64High = 0),
              (jspb.utils.split64Low = ((r << 31) | e) >>> 0))
            : ((t = Math.floor(Math.log(e) / Math.LN2)),
              (e *= Math.pow(2, -t)),
              (e = 8388607 & Math.round(e * jspb.BinaryConstants.TWO_TO_23)),
              (jspb.utils.split64High = 0),
              (jspb.utils.split64Low =
                ((r << 31) | ((t + 127) << 23) | e) >>> 0));
        }),
        (jspb.utils.splitFloat64 = function(e) {
          var t = e < 0 ? 1 : 0;
          if (0 === (e = t ? -e : e))
            (jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648),
              (jspb.utils.split64Low = 0);
          else if (isNaN(e))
            (jspb.utils.split64High = 2147483647),
              (jspb.utils.split64Low = 4294967295);
          else if (e > jspb.BinaryConstants.FLOAT64_MAX)
            (jspb.utils.split64High = ((t << 31) | 2146435072) >>> 0),
              (jspb.utils.split64Low = 0);
          else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
            var r = e / Math.pow(2, -1074);
            (e = r / jspb.BinaryConstants.TWO_TO_32),
              (jspb.utils.split64High = ((t << 31) | e) >>> 0),
              (jspb.utils.split64Low = r >>> 0);
          } else {
            var o = Math.floor(Math.log(e) / Math.LN2);
            1024 == o && (o = 1023),
              (e =
                ((r = e * Math.pow(2, -o)) * jspb.BinaryConstants.TWO_TO_20) &
                1048575),
              (r = (r * jspb.BinaryConstants.TWO_TO_52) >>> 0),
              (jspb.utils.split64High =
                ((t << 31) | ((o + 1023) << 20) | e) >>> 0),
              (jspb.utils.split64Low = r);
          }
        }),
        (jspb.utils.splitHash64 = function(e) {
          var t = e.charCodeAt(0),
            r = e.charCodeAt(1),
            o = e.charCodeAt(2),
            n = e.charCodeAt(3),
            s = e.charCodeAt(4),
            i = e.charCodeAt(5),
            a = e.charCodeAt(6);
          (e = e.charCodeAt(7)),
            (jspb.utils.split64Low =
              (t + (r << 8) + (o << 16) + (n << 24)) >>> 0),
            (jspb.utils.split64High =
              (s + (i << 8) + (a << 16) + (e << 24)) >>> 0);
        }),
        (jspb.utils.joinUint64 = function(e, t) {
          return t * jspb.BinaryConstants.TWO_TO_32 + e;
        }),
        (jspb.utils.joinInt64 = function(e, t) {
          var r = 2147483648 & t;
          r &&
            ((t = ~t >>> 0), 0 == (e = (1 + ~e) >>> 0) && (t = (t + 1) >>> 0));
          var o = jspb.utils.joinUint64(e, t);
          return r ? -o : o;
        }),
        (jspb.utils.joinZigzag64 = function(e, t) {
          var r = 1 & e;
          (e = ((e >>> 1) | (t << 31)) >>> 0),
            (t >>>= 1),
            r && 0 == (e = (e + 1) >>> 0) && (t = (t + 1) >>> 0);
          var o = jspb.utils.joinUint64(e, t);
          return r ? -o : o;
        }),
        (jspb.utils.joinFloat32 = function(e, t) {
          var r = 2 * (e >> 31) + 1,
            o = (e >>> 23) & 255,
            n = 8388607 & e;
          return 255 == o
            ? n
              ? NaN
              : (1 / 0) * r
            : 0 == o
            ? r * Math.pow(2, -149) * n
            : r * Math.pow(2, o - 150) * (n + Math.pow(2, 23));
        }),
        (jspb.utils.joinFloat64 = function(e, t) {
          var r = 2 * (t >> 31) + 1,
            o = (t >>> 20) & 2047,
            n = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e;
          return 2047 == o
            ? n
              ? NaN
              : (1 / 0) * r
            : 0 == o
            ? r * Math.pow(2, -1074) * n
            : r * Math.pow(2, o - 1075) * (n + jspb.BinaryConstants.TWO_TO_52);
        }),
        (jspb.utils.joinHash64 = function(e, t) {
          return String.fromCharCode(
            (e >>> 0) & 255,
            (e >>> 8) & 255,
            (e >>> 16) & 255,
            (e >>> 24) & 255,
            (t >>> 0) & 255,
            (t >>> 8) & 255,
            (t >>> 16) & 255,
            (t >>> 24) & 255
          );
        }),
        (jspb.utils.DIGITS = "0123456789abcdef".split("")),
        (jspb.utils.joinUnsignedDecimalString = function(e, t) {
          function r(e) {
            for (var t = 1e7, r = 0; r < 7; r++) {
              var o = (e / (t /= 10)) % 10 >>> 0;
              (0 != o || a) && ((a = !0), (g += i[o]));
            }
          }
          if (t <= 2097151)
            return "" + (jspb.BinaryConstants.TWO_TO_32 * t + e);
          var o =
              (16777215 & e) +
              6777216 * (n = (((e >>> 24) | (t << 8)) >>> 0) & 16777215) +
              6710656 * (s = (t >> 16) & 65535),
            n = n + 8147497 * s,
            s = 2 * s;
          1e7 <= o && ((n += Math.floor(o / 1e7)), (o %= 1e7)),
            1e7 <= n && ((s += Math.floor(n / 1e7)), (n %= 1e7));
          var i = jspb.utils.DIGITS,
            a = !1,
            g = "";
          return (s || a) && r(s), (n || a) && r(n), (o || a) && r(o), g;
        }),
        (jspb.utils.joinSignedDecimalString = function(e, t) {
          var r = 2147483648 & t;
          r && (t = (~t + (0 == (e = (1 + ~e) >>> 0) ? 1 : 0)) >>> 0);
          var o = jspb.utils.joinUnsignedDecimalString(e, t);
          return r ? "-" + o : o;
        }),
        (jspb.utils.hash64ToDecimalString = function(e, t) {
          jspb.utils.splitHash64(e);
          var r = jspb.utils.split64Low,
            o = jspb.utils.split64High;
          return t
            ? jspb.utils.joinSignedDecimalString(r, o)
            : jspb.utils.joinUnsignedDecimalString(r, o);
        }),
        (jspb.utils.hash64ArrayToDecimalStrings = function(e, t) {
          for (var r = Array(e.length), o = 0; o < e.length; o++)
            r[o] = jspb.utils.hash64ToDecimalString(e[o], t);
          return r;
        }),
        (jspb.utils.decimalStringToHash64 = function(e) {
          function t(e, t) {
            for (var r = 0; r < 8 && (1 !== e || 0 < t); r++) {
              var o = e * n[r] + t;
              (n[r] = 255 & o), (t = o >>> 8);
            }
          }
          goog.asserts.assert(0 < e.length);
          var r = !1;
          "-" === e[0] && ((r = !0), (e = e.slice(1)));
          for (var n = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < e.length; o++)
            t(10, jspb.utils.DIGITS.indexOf(e[o]));
          return (
            r &&
              ((function() {
                for (var e = 0; e < 8; e++) n[e] = 255 & ~n[e];
              })(),
              t(1, 1)),
            goog.crypt.byteArrayToString(n)
          );
        }),
        (jspb.utils.splitDecimalString = function(e) {
          jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e));
        }),
        (jspb.utils.hash64ToHexString = function(e) {
          var t = Array(18);
          (t[0] = "0"), (t[1] = "x");
          for (var r = 0; r < 8; r++) {
            var o = e.charCodeAt(7 - r);
            (t[2 * r + 2] = jspb.utils.DIGITS[o >> 4]),
              (t[2 * r + 3] = jspb.utils.DIGITS[15 & o]);
          }
          return t.join("");
        }),
        (jspb.utils.hexStringToHash64 = function(e) {
          (e = e.toLowerCase()),
            goog.asserts.assert(18 == e.length),
            goog.asserts.assert("0" == e[0]),
            goog.asserts.assert("x" == e[1]);
          for (var t = "", r = 0; r < 8; r++) {
            var o = jspb.utils.DIGITS.indexOf(e[2 * r + 2]),
              n = jspb.utils.DIGITS.indexOf(e[2 * r + 3]);
            t = String.fromCharCode(16 * o + n) + t;
          }
          return t;
        }),
        (jspb.utils.hash64ToNumber = function(e, t) {
          jspb.utils.splitHash64(e);
          var r = jspb.utils.split64Low,
            o = jspb.utils.split64High;
          return t ? jspb.utils.joinInt64(r, o) : jspb.utils.joinUint64(r, o);
        }),
        (jspb.utils.numberToHash64 = function(e) {
          return (
            jspb.utils.splitInt64(e),
            jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
          );
        }),
        (jspb.utils.countVarints = function(e, t, r) {
          for (var o = 0, n = t; n < r; n++) o += e[n] >> 7;
          return r - t - o;
        }),
        (jspb.utils.countVarintFields = function(e, t, r, o) {
          var n = 0;
          if ((o = 8 * o + jspb.BinaryConstants.WireType.VARINT) < 128)
            for (; t < r && e[t++] == o; )
              for (n++; ; ) {
                var s = e[t++];
                if (0 == (128 & s)) break;
              }
          else
            for (; t < r; ) {
              for (s = o; 128 < s; ) {
                if (e[t] != ((127 & s) | 128)) return n;
                t++, (s >>= 7);
              }
              if (e[t++] != s) break;
              for (n++; 0 != (128 & (s = e[t++])); );
            }
          return n;
        }),
        (jspb.utils.countFixedFields_ = function(e, t, r, o, n) {
          var s = 0;
          if (o < 128) for (; t < r && e[t++] == o; ) s++, (t += n);
          else
            for (; t < r; ) {
              for (var i = o; 128 < i; ) {
                if (e[t++] != ((127 & i) | 128)) return s;
                i >>= 7;
              }
              if (e[t++] != i) break;
              s++, (t += n);
            }
          return s;
        }),
        (jspb.utils.countFixed32Fields = function(e, t, r, o) {
          return jspb.utils.countFixedFields_(
            e,
            t,
            r,
            8 * o + jspb.BinaryConstants.WireType.FIXED32,
            4
          );
        }),
        (jspb.utils.countFixed64Fields = function(e, t, r, o) {
          return jspb.utils.countFixedFields_(
            e,
            t,
            r,
            8 * o + jspb.BinaryConstants.WireType.FIXED64,
            8
          );
        }),
        (jspb.utils.countDelimitedFields = function(e, t, r, o) {
          var n = 0;
          for (o = 8 * o + jspb.BinaryConstants.WireType.DELIMITED; t < r; ) {
            for (var s = o; 128 < s; ) {
              if (e[t++] != ((127 & s) | 128)) return n;
              s >>= 7;
            }
            if (e[t++] != s) break;
            n++;
            for (
              var i = 0, a = 1;
              (i += (127 & (s = e[t++])) * a), (a *= 128), 0 != (128 & s);

            );
            t += i;
          }
          return n;
        }),
        (jspb.utils.debugBytesToTextFormat = function(e) {
          var t = '"';
          if (e) {
            e = jspb.utils.byteSourceToUint8Array(e);
            for (var r = 0; r < e.length; r++)
              (t += "\\x"), e[r] < 16 && (t += "0"), (t += e[r].toString(16));
          }
          return t + '"';
        }),
        (jspb.utils.debugScalarToTextFormat = function(e) {
          return goog.isString(e) ? goog.string.quote(e) : e.toString();
        }),
        (jspb.utils.stringToByteArray = function(e) {
          for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) {
            var o = e.charCodeAt(r);
            if (255 < o)
              throw Error(
                "Conversion error: string contains codepoint outside of byte range"
              );
            t[r] = o;
          }
          return t;
        }),
        (jspb.utils.byteSourceToUint8Array = function(e) {
          return e.constructor === Uint8Array
            ? e
            : e.constructor === ArrayBuffer ||
              e.constructor === Buffer ||
              e.constructor === Array
            ? new Uint8Array(e)
            : e.constructor === String
            ? goog.crypt.base64.decodeStringToUint8Array(e)
            : (goog.asserts.fail("Type not convertible to Uint8Array."),
              new Uint8Array(0));
        }),
        (jspb.BinaryEncoder = function() {
          this.buffer_ = [];
        }),
        (jspb.BinaryEncoder.prototype.length = function() {
          return this.buffer_.length;
        }),
        (jspb.BinaryEncoder.prototype.end = function() {
          var e = this.buffer_;
          return (this.buffer_ = []), e;
        }),
        (jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(e, t) {
          for (
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(t == Math.floor(t)),
              goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
              goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32);
            0 < t || 127 < e;

          )
            this.buffer_.push((127 & e) | 128),
              (e = ((e >>> 7) | (t << 25)) >>> 0),
              (t >>>= 7);
          this.buffer_.push(e);
        }),
        (jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(e, t) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(t == Math.floor(t)),
            goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
            goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeUint32(e),
            this.writeUint32(t);
        }),
        (jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(e) {
          for (
            goog.asserts.assert(e == Math.floor(e)),
              goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32);
            127 < e;

          )
            this.buffer_.push((127 & e) | 128), (e >>>= 7);
          this.buffer_.push(e);
        }),
        (jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(e) {
          if (
            (goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31
            ),
            0 <= e)
          )
            this.writeUnsignedVarint32(e);
          else {
            for (var t = 0; t < 9; t++)
              this.buffer_.push((127 & e) | 128), (e >>= 7);
            this.buffer_.push(1);
          }
        }),
        (jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
            jspb.utils.splitInt64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_63 &&
                e < jspb.BinaryConstants.TWO_TO_63
            ),
            jspb.utils.splitInt64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeUnsignedVarint32(((e << 1) ^ (e >> 31)) >>> 0);
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_63 &&
                e < jspb.BinaryConstants.TWO_TO_63
            ),
            jspb.utils.splitZigzag64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(e) {
          this.writeZigzagVarint64(parseInt(e, 10));
        }),
        (jspb.BinaryEncoder.prototype.writeUint8 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < 256),
            this.buffer_.push((e >>> 0) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeUint16 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < 65536),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeUint32 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255),
            this.buffer_.push((e >>> 16) & 255),
            this.buffer_.push((e >>> 24) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeUint64 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64),
            jspb.utils.splitUint64(e),
            this.writeUint32(jspb.utils.split64Low),
            this.writeUint32(jspb.utils.split64High);
        }),
        (jspb.BinaryEncoder.prototype.writeInt8 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(-128 <= e && e < 128),
            this.buffer_.push((e >>> 0) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeInt16 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(-32768 <= e && e < 32768),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeInt32 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31
            ),
            this.buffer_.push((e >>> 0) & 255),
            this.buffer_.push((e >>> 8) & 255),
            this.buffer_.push((e >>> 16) & 255),
            this.buffer_.push((e >>> 24) & 255);
        }),
        (jspb.BinaryEncoder.prototype.writeInt64 = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_63 &&
                e < jspb.BinaryConstants.TWO_TO_63
            ),
            jspb.utils.splitInt64(e),
            this.writeSplitFixed64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeInt64String = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              +e >= -jspb.BinaryConstants.TWO_TO_63 &&
                +e < jspb.BinaryConstants.TWO_TO_63
            ),
            jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)),
            this.writeSplitFixed64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeFloat = function(e) {
          goog.asserts.assert(
            e >= -jspb.BinaryConstants.FLOAT32_MAX &&
              e <= jspb.BinaryConstants.FLOAT32_MAX
          ),
            jspb.utils.splitFloat32(e),
            this.writeUint32(jspb.utils.split64Low);
        }),
        (jspb.BinaryEncoder.prototype.writeDouble = function(e) {
          goog.asserts.assert(
            e >= -jspb.BinaryConstants.FLOAT64_MAX &&
              e <= jspb.BinaryConstants.FLOAT64_MAX
          ),
            jspb.utils.splitFloat64(e),
            this.writeUint32(jspb.utils.split64Low),
            this.writeUint32(jspb.utils.split64High);
        }),
        (jspb.BinaryEncoder.prototype.writeBool = function(e) {
          goog.asserts.assert(goog.isBoolean(e) || goog.isNumber(e)),
            this.buffer_.push(e ? 1 : 0);
        }),
        (jspb.BinaryEncoder.prototype.writeEnum = function(e) {
          goog.asserts.assert(e == Math.floor(e)),
            goog.asserts.assert(
              e >= -jspb.BinaryConstants.TWO_TO_31 &&
                e < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeSignedVarint32(e);
        }),
        (jspb.BinaryEncoder.prototype.writeBytes = function(e) {
          this.buffer_.push.apply(this.buffer_, e);
        }),
        (jspb.BinaryEncoder.prototype.writeVarintHash64 = function(e) {
          jspb.utils.splitHash64(e),
            this.writeSplitVarint64(
              jspb.utils.split64Low,
              jspb.utils.split64High
            );
        }),
        (jspb.BinaryEncoder.prototype.writeFixedHash64 = function(e) {
          jspb.utils.splitHash64(e),
            this.writeUint32(jspb.utils.split64Low),
            this.writeUint32(jspb.utils.split64High);
        }),
        (jspb.BinaryEncoder.prototype.writeString = function(e) {
          for (var t = this.buffer_.length, r = 0; r < e.length; r++) {
            var o = e.charCodeAt(r);
            if (o < 128) this.buffer_.push(o);
            else if (o < 2048)
              this.buffer_.push((o >> 6) | 192),
                this.buffer_.push((63 & o) | 128);
            else if (o < 65536)
              if (55296 <= o && o <= 56319 && r + 1 < e.length) {
                var n = e.charCodeAt(r + 1);
                56320 <= n &&
                  n <= 57343 &&
                  ((o = 1024 * (o - 55296) + n - 56320 + 65536),
                  this.buffer_.push((o >> 18) | 240),
                  this.buffer_.push(((o >> 12) & 63) | 128),
                  this.buffer_.push(((o >> 6) & 63) | 128),
                  this.buffer_.push((63 & o) | 128),
                  r++);
              } else
                this.buffer_.push((o >> 12) | 224),
                  this.buffer_.push(((o >> 6) & 63) | 128),
                  this.buffer_.push((63 & o) | 128);
          }
          return this.buffer_.length - t;
        }),
        (jspb.BinaryWriter = function() {
          (this.blocks_ = []),
            (this.totalLength_ = 0),
            (this.encoder_ = new jspb.BinaryEncoder()),
            (this.bookmarks_ = []);
        }),
        (jspb.BinaryWriter.prototype.appendUint8Array_ = function(e) {
          var t = this.encoder_.end();
          this.blocks_.push(t),
            this.blocks_.push(e),
            (this.totalLength_ += t.length + e.length);
        }),
        (jspb.BinaryWriter.prototype.beginDelimited_ = function(e) {
          return (
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
            (e = this.encoder_.end()),
            this.blocks_.push(e),
            (this.totalLength_ += e.length),
            e.push(this.totalLength_),
            e
          );
        }),
        (jspb.BinaryWriter.prototype.endDelimited_ = function(e) {
          var t = e.pop();
          for (
            t = this.totalLength_ + this.encoder_.length() - t,
              goog.asserts.assert(0 <= t);
            127 < t;

          )
            e.push((127 & t) | 128), (t >>>= 7), this.totalLength_++;
          e.push(t), this.totalLength_++;
        }),
        (jspb.BinaryWriter.prototype.writeSerializedMessage = function(
          e,
          t,
          r
        ) {
          this.appendUint8Array_(e.subarray(t, r));
        }),
        (jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(
          e,
          t,
          r
        ) {
          null != e &&
            null != t &&
            null != r &&
            this.writeSerializedMessage(e, t, r);
        }),
        (jspb.BinaryWriter.prototype.reset = function() {
          (this.blocks_ = []),
            this.encoder_.end(),
            (this.totalLength_ = 0),
            (this.bookmarks_ = []);
        }),
        (jspb.BinaryWriter.prototype.getResultBuffer = function() {
          goog.asserts.assert(0 == this.bookmarks_.length);
          for (
            var e = new Uint8Array(this.totalLength_ + this.encoder_.length()),
              t = this.blocks_,
              r = t.length,
              o = 0,
              n = 0;
            n < r;
            n++
          ) {
            var s = t[n];
            e.set(s, o), (o += s.length);
          }
          return (
            (t = this.encoder_.end()),
            e.set(t, o),
            (o += t.length),
            goog.asserts.assert(o == e.length),
            (this.blocks_ = [e]),
            e
          );
        }),
        (jspb.BinaryWriter.prototype.getResultBase64String = function(e) {
          return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e);
        }),
        (jspb.BinaryWriter.prototype.beginSubMessage = function(e) {
          this.bookmarks_.push(this.beginDelimited_(e));
        }),
        (jspb.BinaryWriter.prototype.endSubMessage = function() {
          goog.asserts.assert(0 <= this.bookmarks_.length),
            this.endDelimited_(this.bookmarks_.pop());
        }),
        (jspb.BinaryWriter.prototype.writeFieldHeader_ = function(e, t) {
          goog.asserts.assert(1 <= e && e == Math.floor(e)),
            this.encoder_.writeUnsignedVarint32(8 * e + t);
        }),
        (jspb.BinaryWriter.prototype.writeAny = function(e, t, r) {
          var o = jspb.BinaryConstants.FieldType;
          switch (e) {
            case o.DOUBLE:
              this.writeDouble(t, r);
              break;
            case o.FLOAT:
              this.writeFloat(t, r);
              break;
            case o.INT64:
              this.writeInt64(t, r);
              break;
            case o.UINT64:
              this.writeUint64(t, r);
              break;
            case o.INT32:
              this.writeInt32(t, r);
              break;
            case o.FIXED64:
              this.writeFixed64(t, r);
              break;
            case o.FIXED32:
              this.writeFixed32(t, r);
              break;
            case o.BOOL:
              this.writeBool(t, r);
              break;
            case o.STRING:
              this.writeString(t, r);
              break;
            case o.GROUP:
              goog.asserts.fail("Group field type not supported in writeAny()");
              break;
            case o.MESSAGE:
              goog.asserts.fail(
                "Message field type not supported in writeAny()"
              );
              break;
            case o.BYTES:
              this.writeBytes(t, r);
              break;
            case o.UINT32:
              this.writeUint32(t, r);
              break;
            case o.ENUM:
              this.writeEnum(t, r);
              break;
            case o.SFIXED32:
              this.writeSfixed32(t, r);
              break;
            case o.SFIXED64:
              this.writeSfixed64(t, r);
              break;
            case o.SINT32:
              this.writeSint32(t, r);
              break;
            case o.SINT64:
              this.writeSint64(t, r);
              break;
            case o.FHASH64:
              this.writeFixedHash64(t, r);
              break;
            case o.VHASH64:
              this.writeVarintHash64(t, r);
              break;
            default:
              goog.asserts.fail("Invalid field type in writeAny()");
          }
        }),
        (jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeUnsignedVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeUnsignedVarint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(
          e,
          t
        ) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeZigzagVarint64String(t));
        }),
        (jspb.BinaryWriter.prototype.writeInt32 = function(e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeSignedVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeInt32String = function(e, t) {
          if (null != t) {
            var r = parseInt(t, 10);
            goog.asserts.assert(
              r >= -jspb.BinaryConstants.TWO_TO_31 &&
                r < jspb.BinaryConstants.TWO_TO_31
            ),
              this.writeSignedVarint32_(e, r);
          }
        }),
        (jspb.BinaryWriter.prototype.writeInt64 = function(e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_63 &&
                t < jspb.BinaryConstants.TWO_TO_63
            ),
            this.writeSignedVarint64_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeInt64String = function(e, t) {
          if (null != t) {
            var r = jspb.arith.Int64.fromString(t);
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeSplitVarint64(r.lo, r.hi);
          }
        }),
        (jspb.BinaryWriter.prototype.writeUint32 = function(e, t) {
          null != t &&
            (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeUnsignedVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeUint32String = function(e, t) {
          if (null != t) {
            var r = parseInt(t, 10);
            goog.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32),
              this.writeUnsignedVarint32_(e, r);
          }
        }),
        (jspb.BinaryWriter.prototype.writeUint64 = function(e, t) {
          null != t &&
            (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
            this.writeUnsignedVarint64_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeUint64String = function(e, t) {
          if (null != t) {
            var r = jspb.arith.UInt64.fromString(t);
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
              this.encoder_.writeSplitVarint64(r.lo, r.hi);
          }
        }),
        (jspb.BinaryWriter.prototype.writeSint32 = function(e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeZigzagVarint32_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeSint64 = function(e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_63 &&
                t < jspb.BinaryConstants.TWO_TO_63
            ),
            this.writeZigzagVarint64_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeSint64String = function(e, t) {
          null != t &&
            (goog.asserts.assert(
              +t >= -jspb.BinaryConstants.TWO_TO_63 &&
                +t < jspb.BinaryConstants.TWO_TO_63
            ),
            this.writeZigzagVarint64String_(e, t));
        }),
        (jspb.BinaryWriter.prototype.writeFixed32 = function(e, t) {
          null != t &&
            (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
            this.encoder_.writeUint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeFixed64 = function(e, t) {
          null != t &&
            (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeUint64(t));
        }),
        (jspb.BinaryWriter.prototype.writeFixed64String = function(e, t) {
          if (null != t) {
            var r = jspb.arith.UInt64.fromString(t);
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
              this.encoder_.writeSplitFixed64(r.lo, r.hi);
          }
        }),
        (jspb.BinaryWriter.prototype.writeSfixed32 = function(e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
            this.encoder_.writeInt32(t));
        }),
        (jspb.BinaryWriter.prototype.writeSfixed64 = function(e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_63 &&
                t < jspb.BinaryConstants.TWO_TO_63
            ),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeInt64(t));
        }),
        (jspb.BinaryWriter.prototype.writeSfixed64String = function(e, t) {
          if (null != t) {
            var r = jspb.arith.Int64.fromString(t);
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
              this.encoder_.writeSplitFixed64(r.lo, r.hi);
          }
        }),
        (jspb.BinaryWriter.prototype.writeFloat = function(e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32),
            this.encoder_.writeFloat(t));
        }),
        (jspb.BinaryWriter.prototype.writeDouble = function(e, t) {
          null != t &&
            (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeDouble(t));
        }),
        (jspb.BinaryWriter.prototype.writeBool = function(e, t) {
          null != t &&
            (goog.asserts.assert(goog.isBoolean(t) || goog.isNumber(t)),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeBool(t));
        }),
        (jspb.BinaryWriter.prototype.writeEnum = function(e, t) {
          null != t &&
            (goog.asserts.assert(
              t >= -jspb.BinaryConstants.TWO_TO_31 &&
                t < jspb.BinaryConstants.TWO_TO_31
            ),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeSignedVarint32(t));
        }),
        (jspb.BinaryWriter.prototype.writeString = function(e, t) {
          if (null != t) {
            var r = this.beginDelimited_(e);
            this.encoder_.writeString(t), this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writeBytes = function(e, t) {
          if (null != t) {
            var r = jspb.utils.byteSourceToUint8Array(t);
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(r.length),
              this.appendUint8Array_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writeMessage = function(e, t, r) {
          null != t &&
            ((e = this.beginDelimited_(e)), r(t, this), this.endDelimited_(e));
        }),
        (jspb.BinaryWriter.prototype.writeGroup = function(e, t, r) {
          null != t &&
            (this.writeFieldHeader_(
              e,
              jspb.BinaryConstants.WireType.START_GROUP
            ),
            r(t, this),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP));
        }),
        (jspb.BinaryWriter.prototype.writeFixedHash64 = function(e, t) {
          null != t &&
            (goog.asserts.assert(8 == t.length),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64),
            this.encoder_.writeFixedHash64(t));
        }),
        (jspb.BinaryWriter.prototype.writeVarintHash64 = function(e, t) {
          null != t &&
            (goog.asserts.assert(8 == t.length),
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT),
            this.encoder_.writeVarintHash64(t));
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeSignedVarint32_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeInt32String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeSignedVarint64_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeInt64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeUnsignedVarint32_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeUint32String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeUnsignedVarint64_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeUint64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarint32_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarint64_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeZigzagVarint64String_(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixed32(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixed64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixed64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeSfixed32(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeSfixed64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++)
              this.writeSfixed64String(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFloat = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFloat(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedDouble = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeDouble(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedBool = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeBool(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedEnum = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeEnum(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedString = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeString(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedBytes = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeBytes(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedMessage = function(e, t, r) {
          if (null != t)
            for (var o = 0; o < t.length; o++) {
              var n = this.beginDelimited_(e);
              r(t[o], this), this.endDelimited_(n);
            }
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedGroup = function(e, t, r) {
          if (null != t)
            for (var o = 0; o < t.length; o++)
              this.writeFieldHeader_(
                e,
                jspb.BinaryConstants.WireType.START_GROUP
              ),
                r(t[o], this),
                this.writeFieldHeader_(
                  e,
                  jspb.BinaryConstants.WireType.END_GROUP
                );
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(e, t) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeFixedHash64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(
          e,
          t
        ) {
          if (null != t)
            for (var r = 0; r < t.length; r++) this.writeVarintHash64(e, t[r]);
        }),
        (jspb.BinaryWriter.prototype.writePackedInt32 = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeSignedVarint32(t[o]);
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedInt32String = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeSignedVarint32(parseInt(t[o], 10));
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedInt64 = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeSignedVarint64(t[o]);
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedInt64String = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) {
              var n = jspb.arith.Int64.fromString(t[o]);
              this.encoder_.writeSplitVarint64(n.lo, n.hi);
            }
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint32 = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeUnsignedVarint32(t[o]);
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint32String = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeUnsignedVarint32(parseInt(t[o], 10));
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint64 = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeUnsignedVarint64(t[o]);
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedUint64String = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) {
              var n = jspb.arith.UInt64.fromString(t[o]);
              this.encoder_.writeSplitVarint64(n.lo, n.hi);
            }
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSint32 = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeZigzagVarint32(t[o]);
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSint64 = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeZigzagVarint64(t[o]);
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSint64String = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeZigzagVarint64(parseInt(t[o], 10));
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFixed32 = function(e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeUint32(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFixed64 = function(e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeUint64(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFixed64String = function(e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++) {
              var o = jspb.arith.UInt64.fromString(t[r]);
              this.encoder_.writeSplitFixed64(o.lo, o.hi);
            }
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSfixed32 = function(e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeInt32(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSfixed64 = function(e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeInt64(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedSfixed64String = function(
          e,
          t
        ) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeInt64String(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFloat = function(e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(4 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeFloat(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedDouble = function(e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeDouble(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedBool = function(e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(t.length);
            for (var r = 0; r < t.length; r++) this.encoder_.writeBool(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedEnum = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeEnum(t[o]);
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(e, t) {
          if (null != t && t.length) {
            this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED),
              this.encoder_.writeUnsignedVarint32(8 * t.length);
            for (var r = 0; r < t.length; r++)
              this.encoder_.writeFixedHash64(t[r]);
          }
        }),
        (jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(e, t) {
          if (null != t && t.length) {
            for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++)
              this.encoder_.writeVarintHash64(t[o]);
            this.endDelimited_(r);
          }
        }),
        (jspb.BinaryIterator = function(e, t, r) {
          (this.elements_ = this.nextMethod_ = this.decoder_ = null),
            (this.cursor_ = 0),
            (this.nextValue_ = null),
            (this.atEnd_ = !0),
            this.init_(e, t, r);
        }),
        (jspb.BinaryIterator.prototype.init_ = function(e, t, r) {
          e && t && ((this.decoder_ = e), (this.nextMethod_ = t)),
            (this.elements_ = r || null),
            (this.cursor_ = 0),
            (this.nextValue_ = null),
            (this.atEnd_ = !this.decoder_ && !this.elements_),
            this.next();
        }),
        (jspb.BinaryIterator.instanceCache_ = []),
        (jspb.BinaryIterator.alloc = function(e, t, r) {
          if (jspb.BinaryIterator.instanceCache_.length) {
            var o = jspb.BinaryIterator.instanceCache_.pop();
            return o.init_(e, t, r), o;
          }
          return new jspb.BinaryIterator(e, t, r);
        }),
        (jspb.BinaryIterator.prototype.free = function() {
          this.clear(),
            jspb.BinaryIterator.instanceCache_.length < 100 &&
              jspb.BinaryIterator.instanceCache_.push(this);
        }),
        (jspb.BinaryIterator.prototype.clear = function() {
          this.decoder_ && this.decoder_.free(),
            (this.elements_ = this.nextMethod_ = this.decoder_ = null),
            (this.cursor_ = 0),
            (this.nextValue_ = null),
            (this.atEnd_ = !0);
        }),
        (jspb.BinaryIterator.prototype.get = function() {
          return this.nextValue_;
        }),
        (jspb.BinaryIterator.prototype.atEnd = function() {
          return this.atEnd_;
        }),
        (jspb.BinaryIterator.prototype.next = function() {
          var e = this.nextValue_;
          return (
            this.decoder_
              ? this.decoder_.atEnd()
                ? ((this.nextValue_ = null), (this.atEnd_ = !0))
                : (this.nextValue_ = this.nextMethod_.call(this.decoder_))
              : this.elements_ &&
                (this.cursor_ == this.elements_.length
                  ? ((this.nextValue_ = null), (this.atEnd_ = !0))
                  : (this.nextValue_ = this.elements_[this.cursor_++])),
            e
          );
        }),
        (jspb.BinaryDecoder = function(e, t, r) {
          (this.bytes_ = null),
            (this.tempHigh_ = this.tempLow_ = this.cursor_ = this.end_ = this.start_ = 0),
            (this.error_ = !1),
            e && this.setBlock(e, t, r);
        }),
        (jspb.BinaryDecoder.instanceCache_ = []),
        (jspb.BinaryDecoder.alloc = function(e, t, r) {
          if (jspb.BinaryDecoder.instanceCache_.length) {
            var o = jspb.BinaryDecoder.instanceCache_.pop();
            return e && o.setBlock(e, t, r), o;
          }
          return new jspb.BinaryDecoder(e, t, r);
        }),
        (jspb.BinaryDecoder.prototype.free = function() {
          this.clear(),
            jspb.BinaryDecoder.instanceCache_.length < 100 &&
              jspb.BinaryDecoder.instanceCache_.push(this);
        }),
        (jspb.BinaryDecoder.prototype.clone = function() {
          return jspb.BinaryDecoder.alloc(
            this.bytes_,
            this.start_,
            this.end_ - this.start_
          );
        }),
        (jspb.BinaryDecoder.prototype.clear = function() {
          (this.bytes_ = null),
            (this.cursor_ = this.end_ = this.start_ = 0),
            (this.error_ = !1);
        }),
        (jspb.BinaryDecoder.prototype.getBuffer = function() {
          return this.bytes_;
        }),
        (jspb.BinaryDecoder.prototype.setBlock = function(e, t, r) {
          (this.bytes_ = jspb.utils.byteSourceToUint8Array(e)),
            (this.start_ = goog.isDef(t) ? t : 0),
            (this.end_ = goog.isDef(r) ? this.start_ + r : this.bytes_.length),
            (this.cursor_ = this.start_);
        }),
        (jspb.BinaryDecoder.prototype.getEnd = function() {
          return this.end_;
        }),
        (jspb.BinaryDecoder.prototype.setEnd = function(e) {
          this.end_ = e;
        }),
        (jspb.BinaryDecoder.prototype.reset = function() {
          this.cursor_ = this.start_;
        }),
        (jspb.BinaryDecoder.prototype.getCursor = function() {
          return this.cursor_;
        }),
        (jspb.BinaryDecoder.prototype.setCursor = function(e) {
          this.cursor_ = e;
        }),
        (jspb.BinaryDecoder.prototype.advance = function(e) {
          (this.cursor_ += e), goog.asserts.assert(this.cursor_ <= this.end_);
        }),
        (jspb.BinaryDecoder.prototype.atEnd = function() {
          return this.cursor_ == this.end_;
        }),
        (jspb.BinaryDecoder.prototype.pastEnd = function() {
          return this.cursor_ > this.end_;
        }),
        (jspb.BinaryDecoder.prototype.getError = function() {
          return this.error_ || this.cursor_ < 0 || this.cursor_ > this.end_;
        }),
        (jspb.BinaryDecoder.prototype.readSplitVarint64_ = function() {
          for (var e, t, r = 0, o = 0; o < 4; o++)
            if (
              ((r |= (127 & (e = this.bytes_[this.cursor_++])) << (7 * o)),
              e < 128)
            )
              return (this.tempLow_ = r >>> 0), void (this.tempHigh_ = 0);
          if (
            ((r |= (127 & (e = this.bytes_[this.cursor_++])) << 28),
            (t = 0 | ((127 & e) >> 4)),
            e < 128)
          )
            (this.tempLow_ = r >>> 0), (this.tempHigh_ = t >>> 0);
          else {
            for (o = 0; o < 5; o++)
              if (
                ((t |=
                  (127 & (e = this.bytes_[this.cursor_++])) << (7 * o + 3)),
                e < 128)
              )
                return (
                  (this.tempLow_ = r >>> 0), void (this.tempHigh_ = t >>> 0)
                );
            goog.asserts.fail("Failed to read varint, encoding is invalid."),
              (this.error_ = !0);
          }
        }),
        (jspb.BinaryDecoder.prototype.skipVarint = function() {
          for (; 128 & this.bytes_[this.cursor_]; ) this.cursor_++;
          this.cursor_++;
        }),
        (jspb.BinaryDecoder.prototype.unskipVarint = function(e) {
          for (; 128 < e; ) this.cursor_--, (e >>>= 7);
          this.cursor_--;
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
          var e,
            t = this.bytes_,
            r = 127 & (e = t[this.cursor_ + 0]);
          return e < 128
            ? ((this.cursor_ += 1),
              goog.asserts.assert(this.cursor_ <= this.end_),
              r)
            : ((r |= (127 & (e = t[this.cursor_ + 1])) << 7),
              e < 128
                ? ((this.cursor_ += 2),
                  goog.asserts.assert(this.cursor_ <= this.end_),
                  r)
                : ((r |= (127 & (e = t[this.cursor_ + 2])) << 14),
                  e < 128
                    ? ((this.cursor_ += 3),
                      goog.asserts.assert(this.cursor_ <= this.end_),
                      r)
                    : ((r |= (127 & (e = t[this.cursor_ + 3])) << 21),
                      e < 128
                        ? ((this.cursor_ += 4),
                          goog.asserts.assert(this.cursor_ <= this.end_),
                          r)
                        : ((r |= (15 & (e = t[this.cursor_ + 4])) << 28),
                          e < 128
                            ? ((this.cursor_ += 5),
                              goog.asserts.assert(this.cursor_ <= this.end_),
                              r >>> 0)
                            : ((this.cursor_ += 5),
                              128 <= t[this.cursor_++] &&
                                128 <= t[this.cursor_++] &&
                                128 <= t[this.cursor_++] &&
                                128 <= t[this.cursor_++] &&
                                128 <= t[this.cursor_++] &&
                                goog.asserts.assert(!1),
                              goog.asserts.assert(this.cursor_ <= this.end_),
                              r)))));
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint32 =
          jspb.BinaryDecoder.prototype.readUnsignedVarint32),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
          return this.readUnsignedVarint32().toString();
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
          return this.readSignedVarint32().toString();
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
          var e = this.readUnsignedVarint32();
          return (e >>> 1) ^ -(1 & e);
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinUint64(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinUnsignedDecimalString(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinInt64(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinSignedDecimalString(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinZigzag64(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
          return this.readZigzagVarint64().toString();
        }),
        (jspb.BinaryDecoder.prototype.readUint8 = function() {
          var e = this.bytes_[this.cursor_ + 0];
          return (
            (this.cursor_ += 1),
            goog.asserts.assert(this.cursor_ <= this.end_),
            e
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint16 = function() {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1];
          return (
            (this.cursor_ += 2),
            goog.asserts.assert(this.cursor_ <= this.end_),
            (e << 0) | (t << 8)
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint32 = function() {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1],
            r = this.bytes_[this.cursor_ + 2],
            o = this.bytes_[this.cursor_ + 3];
          return (
            (this.cursor_ += 4),
            goog.asserts.assert(this.cursor_ <= this.end_),
            ((e << 0) | (t << 8) | (r << 16) | (o << 24)) >>> 0
          );
        }),
        (jspb.BinaryDecoder.prototype.readUint64 = function() {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinUint64(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readUint64String = function() {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinUnsignedDecimalString(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readInt8 = function() {
          var e = this.bytes_[this.cursor_ + 0];
          return (
            (this.cursor_ += 1),
            goog.asserts.assert(this.cursor_ <= this.end_),
            (e << 24) >> 24
          );
        }),
        (jspb.BinaryDecoder.prototype.readInt16 = function() {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1];
          return (
            (this.cursor_ += 2),
            goog.asserts.assert(this.cursor_ <= this.end_),
            (((e << 0) | (t << 8)) << 16) >> 16
          );
        }),
        (jspb.BinaryDecoder.prototype.readInt32 = function() {
          var e = this.bytes_[this.cursor_ + 0],
            t = this.bytes_[this.cursor_ + 1],
            r = this.bytes_[this.cursor_ + 2],
            o = this.bytes_[this.cursor_ + 3];
          return (
            (this.cursor_ += 4),
            goog.asserts.assert(this.cursor_ <= this.end_),
            (e << 0) | (t << 8) | (r << 16) | (o << 24)
          );
        }),
        (jspb.BinaryDecoder.prototype.readInt64 = function() {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinInt64(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readInt64String = function() {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinSignedDecimalString(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readFloat = function() {
          var e = this.readUint32();
          return jspb.utils.joinFloat32(e, 0);
        }),
        (jspb.BinaryDecoder.prototype.readDouble = function() {
          var e = this.readUint32(),
            t = this.readUint32();
          return jspb.utils.joinFloat64(e, t);
        }),
        (jspb.BinaryDecoder.prototype.readBool = function() {
          return !!this.bytes_[this.cursor_++];
        }),
        (jspb.BinaryDecoder.prototype.readEnum = function() {
          return this.readSignedVarint32();
        }),
        (jspb.BinaryDecoder.prototype.readString = function(e) {
          var t = this.bytes_,
            r = this.cursor_;
          e = r + e;
          for (var o = [], n = ""; r < e; ) {
            if ((a = t[r++]) < 128) o.push(a);
            else {
              if (a < 192) continue;
              if (a < 224) {
                var s = t[r++];
                o.push(((31 & a) << 6) | (63 & s));
              } else if (a < 240) {
                s = t[r++];
                var i = t[r++];
                o.push(((15 & a) << 12) | ((63 & s) << 6) | (63 & i));
              } else if (a < 248) {
                var a =
                  (a =
                    ((7 & a) << 18) |
                    ((63 & (s = t[r++])) << 12) |
                    ((63 & (i = t[r++])) << 6) |
                    (63 & t[r++])) - 65536;
                o.push(55296 + ((a >> 10) & 1023), 56320 + (1023 & a));
              }
            }
            8192 <= o.length &&
              ((n += String.fromCharCode.apply(null, o)), (o.length = 0));
          }
          return (n += goog.crypt.byteArrayToString(o)), (this.cursor_ = r), n;
        }),
        (jspb.BinaryDecoder.prototype.readStringWithLength = function() {
          var e = this.readUnsignedVarint32();
          return this.readString(e);
        }),
        (jspb.BinaryDecoder.prototype.readBytes = function(e) {
          if (e < 0 || this.cursor_ + e > this.bytes_.length)
            return (
              (this.error_ = !0),
              goog.asserts.fail("Invalid byte length!"),
              new Uint8Array(0)
            );
          var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
          return (
            (this.cursor_ += e),
            goog.asserts.assert(this.cursor_ <= this.end_),
            t
          );
        }),
        (jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
          return (
            this.readSplitVarint64_(),
            jspb.utils.joinHash64(this.tempLow_, this.tempHigh_)
          );
        }),
        (jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
          var e = this.bytes_,
            t = this.cursor_,
            r = e[t + 0],
            o = e[t + 1],
            n = e[t + 2],
            s = e[t + 3],
            i = e[t + 4],
            a = e[t + 5],
            g = e[t + 6];
          return (
            (e = e[t + 7]),
            (this.cursor_ += 8),
            String.fromCharCode(r, o, n, s, i, a, g, e)
          );
        }),
        (jspb.BinaryReader = function(e, t, r) {
          (this.decoder_ = jspb.BinaryDecoder.alloc(e, t, r)),
            (this.fieldCursor_ = this.decoder_.getCursor()),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
            (this.error_ = !1),
            (this.readCallbacks_ = null);
        }),
        (jspb.BinaryReader.instanceCache_ = []),
        (jspb.BinaryReader.alloc = function(e, t, r) {
          if (jspb.BinaryReader.instanceCache_.length) {
            var o = jspb.BinaryReader.instanceCache_.pop();
            return e && o.decoder_.setBlock(e, t, r), o;
          }
          return new jspb.BinaryReader(e, t, r);
        }),
        (jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc),
        (jspb.BinaryReader.prototype.free = function() {
          this.decoder_.clear(),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID),
            (this.error_ = !1),
            (this.readCallbacks_ = null),
            jspb.BinaryReader.instanceCache_.length < 100 &&
              jspb.BinaryReader.instanceCache_.push(this);
        }),
        (jspb.BinaryReader.prototype.getFieldCursor = function() {
          return this.fieldCursor_;
        }),
        (jspb.BinaryReader.prototype.getCursor = function() {
          return this.decoder_.getCursor();
        }),
        (jspb.BinaryReader.prototype.getBuffer = function() {
          return this.decoder_.getBuffer();
        }),
        (jspb.BinaryReader.prototype.getFieldNumber = function() {
          return this.nextField_;
        }),
        (jspb.BinaryReader.prototype.getWireType = function() {
          return this.nextWireType_;
        }),
        (jspb.BinaryReader.prototype.isEndGroup = function() {
          return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
        }),
        (jspb.BinaryReader.prototype.getError = function() {
          return this.error_ || this.decoder_.getError();
        }),
        (jspb.BinaryReader.prototype.setBlock = function(e, t, r) {
          this.decoder_.setBlock(e, t, r),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
        }),
        (jspb.BinaryReader.prototype.reset = function() {
          this.decoder_.reset(),
            (this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER),
            (this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID);
        }),
        (jspb.BinaryReader.prototype.advance = function(e) {
          this.decoder_.advance(e);
        }),
        (jspb.BinaryReader.prototype.nextField = function() {
          if (this.decoder_.atEnd()) return !1;
          if (this.getError())
            return goog.asserts.fail("Decoder hit an error"), !1;
          this.fieldCursor_ = this.decoder_.getCursor();
          var e,
            t = (e = this.decoder_.readUnsignedVarint32()) >>> 3;
          return (e &= 7) != jspb.BinaryConstants.WireType.VARINT &&
            e != jspb.BinaryConstants.WireType.FIXED32 &&
            e != jspb.BinaryConstants.WireType.FIXED64 &&
            e != jspb.BinaryConstants.WireType.DELIMITED &&
            e != jspb.BinaryConstants.WireType.START_GROUP &&
            e != jspb.BinaryConstants.WireType.END_GROUP
            ? (goog.asserts.fail("Invalid wire type"), !(this.error_ = !0))
            : ((this.nextField_ = t), (this.nextWireType_ = e), !0);
        }),
        (jspb.BinaryReader.prototype.unskipHeader = function() {
          this.decoder_.unskipVarint(
            (this.nextField_ << 3) | this.nextWireType_
          );
        }),
        (jspb.BinaryReader.prototype.skipMatchingFields = function() {
          var e = this.nextField_;
          for (
            this.unskipHeader();
            this.nextField() && this.getFieldNumber() == e;

          )
            this.skipField();
          this.decoder_.atEnd() || this.unskipHeader();
        }),
        (jspb.BinaryReader.prototype.skipVarintField = function() {
          this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT
            ? (goog.asserts.fail("Invalid wire type for skipVarintField"),
              this.skipField())
            : this.decoder_.skipVarint();
        }),
        (jspb.BinaryReader.prototype.skipDelimitedField = function() {
          if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED)
            goog.asserts.fail("Invalid wire type for skipDelimitedField"),
              this.skipField();
          else {
            var e = this.decoder_.readUnsignedVarint32();
            this.decoder_.advance(e);
          }
        }),
        (jspb.BinaryReader.prototype.skipFixed32Field = function() {
          this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32
            ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"),
              this.skipField())
            : this.decoder_.advance(4);
        }),
        (jspb.BinaryReader.prototype.skipFixed64Field = function() {
          this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64
            ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"),
              this.skipField())
            : this.decoder_.advance(8);
        }),
        (jspb.BinaryReader.prototype.skipGroup = function() {
          var e = [this.nextField_];
          do {
            if (!this.nextField()) {
              goog.asserts.fail("Unmatched start-group tag: stream EOF"),
                (this.error_ = !0);
              break;
            }
            if (this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP)
              e.push(this.nextField_);
            else if (
              this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP &&
              this.nextField_ != e.pop()
            ) {
              goog.asserts.fail("Unmatched end-group tag"), (this.error_ = !0);
              break;
            }
          } while (0 < e.length);
        }),
        (jspb.BinaryReader.prototype.skipField = function() {
          switch (this.nextWireType_) {
            case jspb.BinaryConstants.WireType.VARINT:
              this.skipVarintField();
              break;
            case jspb.BinaryConstants.WireType.FIXED64:
              this.skipFixed64Field();
              break;
            case jspb.BinaryConstants.WireType.DELIMITED:
              this.skipDelimitedField();
              break;
            case jspb.BinaryConstants.WireType.FIXED32:
              this.skipFixed32Field();
              break;
            case jspb.BinaryConstants.WireType.START_GROUP:
              this.skipGroup();
              break;
            default:
              goog.asserts.fail("Invalid wire encoding for field.");
          }
        }),
        (jspb.BinaryReader.prototype.registerReadCallback = function(e, t) {
          goog.isNull(this.readCallbacks_) && (this.readCallbacks_ = {}),
            goog.asserts.assert(!this.readCallbacks_[e]),
            (this.readCallbacks_[e] = t);
        }),
        (jspb.BinaryReader.prototype.runReadCallback = function(e) {
          return (
            goog.asserts.assert(!goog.isNull(this.readCallbacks_)),
            (e = this.readCallbacks_[e]),
            goog.asserts.assert(e),
            e(this)
          );
        }),
        (jspb.BinaryReader.prototype.readAny = function(e) {
          this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
          var t = jspb.BinaryConstants.FieldType;
          switch (e) {
            case t.DOUBLE:
              return this.readDouble();
            case t.FLOAT:
              return this.readFloat();
            case t.INT64:
              return this.readInt64();
            case t.UINT64:
              return this.readUint64();
            case t.INT32:
              return this.readInt32();
            case t.FIXED64:
              return this.readFixed64();
            case t.FIXED32:
              return this.readFixed32();
            case t.BOOL:
              return this.readBool();
            case t.STRING:
              return this.readString();
            case t.GROUP:
              goog.asserts.fail("Group field type not supported in readAny()");
            case t.MESSAGE:
              goog.asserts.fail(
                "Message field type not supported in readAny()"
              );
            case t.BYTES:
              return this.readBytes();
            case t.UINT32:
              return this.readUint32();
            case t.ENUM:
              return this.readEnum();
            case t.SFIXED32:
              return this.readSfixed32();
            case t.SFIXED64:
              return this.readSfixed64();
            case t.SINT32:
              return this.readSint32();
            case t.SINT64:
              return this.readSint64();
            case t.FHASH64:
              return this.readFixedHash64();
            case t.VHASH64:
              return this.readVarintHash64();
            default:
              goog.asserts.fail("Invalid field type in readAny()");
          }
          return 0;
        }),
        (jspb.BinaryReader.prototype.readMessage = function(e, t) {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          var r = this.decoder_.getEnd(),
            o = this.decoder_.readUnsignedVarint32();
          (o = this.decoder_.getCursor() + o),
            this.decoder_.setEnd(o),
            t(e, this),
            this.decoder_.setCursor(o),
            this.decoder_.setEnd(r);
        }),
        (jspb.BinaryReader.prototype.readGroup = function(e, t, r) {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP
          ),
            goog.asserts.assert(this.nextField_ == e),
            r(t, this),
            this.error_ ||
              this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP ||
              (goog.asserts.fail(
                "Group submessage did not end with an END_GROUP tag"
              ),
              (this.error_ = !0));
        }),
        (jspb.BinaryReader.prototype.getFieldDecoder = function() {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          var e = this.decoder_.readUnsignedVarint32(),
            t = this.decoder_.getCursor(),
            r = t + e;
          return (
            (e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e)),
            this.decoder_.setCursor(r),
            e
          );
        }),
        (jspb.BinaryReader.prototype.readInt32 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint32()
          );
        }),
        (jspb.BinaryReader.prototype.readInt32String = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint32String()
          );
        }),
        (jspb.BinaryReader.prototype.readInt64 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint64()
          );
        }),
        (jspb.BinaryReader.prototype.readInt64String = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readUint32 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readUnsignedVarint32()
          );
        }),
        (jspb.BinaryReader.prototype.readUint32String = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readUnsignedVarint32String()
          );
        }),
        (jspb.BinaryReader.prototype.readUint64 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readUnsignedVarint64()
          );
        }),
        (jspb.BinaryReader.prototype.readUint64String = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readUnsignedVarint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readSint32 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readZigzagVarint32()
          );
        }),
        (jspb.BinaryReader.prototype.readSint64 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readZigzagVarint64()
          );
        }),
        (jspb.BinaryReader.prototype.readSint64String = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readZigzagVarint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readFixed32 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
            ),
            this.decoder_.readUint32()
          );
        }),
        (jspb.BinaryReader.prototype.readFixed64 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readUint64()
          );
        }),
        (jspb.BinaryReader.prototype.readFixed64String = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readUint64String()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed32 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
            ),
            this.decoder_.readInt32()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed32String = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
            ),
            this.decoder_.readInt32().toString()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed64 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readInt64()
          );
        }),
        (jspb.BinaryReader.prototype.readSfixed64String = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readInt64String()
          );
        }),
        (jspb.BinaryReader.prototype.readFloat = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32
            ),
            this.decoder_.readFloat()
          );
        }),
        (jspb.BinaryReader.prototype.readDouble = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readDouble()
          );
        }),
        (jspb.BinaryReader.prototype.readBool = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            !!this.decoder_.readUnsignedVarint32()
          );
        }),
        (jspb.BinaryReader.prototype.readEnum = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readSignedVarint64()
          );
        }),
        (jspb.BinaryReader.prototype.readString = function() {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          var e = this.decoder_.readUnsignedVarint32();
          return this.decoder_.readString(e);
        }),
        (jspb.BinaryReader.prototype.readBytes = function() {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          var e = this.decoder_.readUnsignedVarint32();
          return this.decoder_.readBytes(e);
        }),
        (jspb.BinaryReader.prototype.readVarintHash64 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT
            ),
            this.decoder_.readVarintHash64()
          );
        }),
        (jspb.BinaryReader.prototype.readFixedHash64 = function() {
          return (
            goog.asserts.assert(
              this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64
            ),
            this.decoder_.readFixedHash64()
          );
        }),
        (jspb.BinaryReader.prototype.readPackedField_ = function(e) {
          goog.asserts.assert(
            this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED
          );
          for (
            var t = this.decoder_.readUnsignedVarint32(),
              r = ((t = this.decoder_.getCursor() + t), []);
            this.decoder_.getCursor() < t;

          )
            r.push(e.call(this.decoder_));
          return r;
        }),
        (jspb.BinaryReader.prototype.readPackedInt32 = function() {
          return this.readPackedField_(this.decoder_.readSignedVarint32);
        }),
        (jspb.BinaryReader.prototype.readPackedInt32String = function() {
          return this.readPackedField_(this.decoder_.readSignedVarint32String);
        }),
        (jspb.BinaryReader.prototype.readPackedInt64 = function() {
          return this.readPackedField_(this.decoder_.readSignedVarint64);
        }),
        (jspb.BinaryReader.prototype.readPackedInt64String = function() {
          return this.readPackedField_(this.decoder_.readSignedVarint64String);
        }),
        (jspb.BinaryReader.prototype.readPackedUint32 = function() {
          return this.readPackedField_(this.decoder_.readUnsignedVarint32);
        }),
        (jspb.BinaryReader.prototype.readPackedUint32String = function() {
          return this.readPackedField_(
            this.decoder_.readUnsignedVarint32String
          );
        }),
        (jspb.BinaryReader.prototype.readPackedUint64 = function() {
          return this.readPackedField_(this.decoder_.readUnsignedVarint64);
        }),
        (jspb.BinaryReader.prototype.readPackedUint64String = function() {
          return this.readPackedField_(
            this.decoder_.readUnsignedVarint64String
          );
        }),
        (jspb.BinaryReader.prototype.readPackedSint32 = function() {
          return this.readPackedField_(this.decoder_.readZigzagVarint32);
        }),
        (jspb.BinaryReader.prototype.readPackedSint64 = function() {
          return this.readPackedField_(this.decoder_.readZigzagVarint64);
        }),
        (jspb.BinaryReader.prototype.readPackedSint64String = function() {
          return this.readPackedField_(this.decoder_.readZigzagVarint64String);
        }),
        (jspb.BinaryReader.prototype.readPackedFixed32 = function() {
          return this.readPackedField_(this.decoder_.readUint32);
        }),
        (jspb.BinaryReader.prototype.readPackedFixed64 = function() {
          return this.readPackedField_(this.decoder_.readUint64);
        }),
        (jspb.BinaryReader.prototype.readPackedFixed64String = function() {
          return this.readPackedField_(this.decoder_.readUint64String);
        }),
        (jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
          return this.readPackedField_(this.decoder_.readInt32);
        }),
        (jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
          return this.readPackedField_(this.decoder_.readInt64);
        }),
        (jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
          return this.readPackedField_(this.decoder_.readInt64String);
        }),
        (jspb.BinaryReader.prototype.readPackedFloat = function() {
          return this.readPackedField_(this.decoder_.readFloat);
        }),
        (jspb.BinaryReader.prototype.readPackedDouble = function() {
          return this.readPackedField_(this.decoder_.readDouble);
        }),
        (jspb.BinaryReader.prototype.readPackedBool = function() {
          return this.readPackedField_(this.decoder_.readBool);
        }),
        (jspb.BinaryReader.prototype.readPackedEnum = function() {
          return this.readPackedField_(this.decoder_.readEnum);
        }),
        (jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
          return this.readPackedField_(this.decoder_.readVarintHash64);
        }),
        (jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
          return this.readPackedField_(this.decoder_.readFixedHash64);
        }),
        (jspb.Export = {}),
        (exports.Map = jspb.Map),
        (exports.Message = jspb.Message),
        (exports.BinaryReader = jspb.BinaryReader),
        (exports.BinaryWriter = jspb.BinaryWriter),
        (exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo),
        (exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo),
        (exports.exportSymbol = goog.exportSymbol),
        (exports.inherits = goog.inherits),
        (exports.object = { extend: goog.object.extend }),
        (exports.typeOf = goog.typeOf);
    },
    iTZm: function(e, t, r) {
      "use strict";
      e.exports = function() {
        (this.input = null),
          (this.next_in = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.output = null),
          (this.next_out = 0),
          (this.avail_out = 0),
          (this.total_out = 0),
          (this.msg = ""),
          (this.state = null),
          (this.data_type = 2),
          (this.adler = 0);
      };
    },
    nm4c: function(e, t, r) {
      "use strict";
      var O = r("vn/o"),
        M = r("yDR0"),
        C = r("7tol"),
        x = r("frGm"),
        N = r("aFNf"),
        D = 1,
        R = 2,
        U = 0,
        F = -2,
        k = 1,
        o = 852,
        n = 592;
      function W(e) {
        return (
          ((e >>> 24) & 255) +
          ((e >>> 8) & 65280) +
          ((65280 & e) << 8) +
          ((255 & e) << 24)
        );
      }
      function s() {
        (this.mode = 0),
          (this.last = !1),
          (this.wrap = 0),
          (this.havedict = !1),
          (this.flags = 0),
          (this.dmax = 0),
          (this.check = 0),
          (this.total = 0),
          (this.head = null),
          (this.wbits = 0),
          (this.wsize = 0),
          (this.whave = 0),
          (this.wnext = 0),
          (this.window = null),
          (this.hold = 0),
          (this.bits = 0),
          (this.length = 0),
          (this.offset = 0),
          (this.extra = 0),
          (this.lencode = null),
          (this.distcode = null),
          (this.lenbits = 0),
          (this.distbits = 0),
          (this.ncode = 0),
          (this.nlen = 0),
          (this.ndist = 0),
          (this.have = 0),
          (this.next = null),
          (this.lens = new O.Buf16(320)),
          (this.work = new O.Buf16(288)),
          (this.lendyn = null),
          (this.distdyn = null),
          (this.sane = 0),
          (this.back = 0),
          (this.was = 0);
      }
      function i(e) {
        var t;
        return e && e.state
          ? ((t = e.state),
            (e.total_in = e.total_out = t.total = 0),
            (e.msg = ""),
            t.wrap && (e.adler = 1 & t.wrap),
            (t.mode = k),
            (t.last = 0),
            (t.havedict = 0),
            (t.dmax = 32768),
            (t.head = null),
            (t.hold = 0),
            (t.bits = 0),
            (t.lencode = t.lendyn = new O.Buf32(o)),
            (t.distcode = t.distdyn = new O.Buf32(n)),
            (t.sane = 1),
            (t.back = -1),
            U)
          : F;
      }
      function a(e) {
        var t;
        return e && e.state
          ? (((t = e.state).wsize = 0), (t.whave = 0), (t.wnext = 0), i(e))
          : F;
      }
      function g(e, t) {
        var r, o;
        return e && e.state
          ? ((o = e.state),
            t < 0
              ? ((r = 0), (t = -t))
              : ((r = 1 + (t >> 4)), t < 48 && (t &= 15)),
            t && (t < 8 || 15 < t)
              ? F
              : (null !== o.window && o.wbits !== t && (o.window = null),
                (o.wrap = r),
                (o.wbits = t),
                a(e)))
          : F;
      }
      function u(e, t) {
        var r, o;
        return e
          ? ((o = new s()),
            ((e.state = o).window = null),
            (r = g(e, t)) !== U && (e.state = null),
            r)
          : F;
      }
      var l,
        p,
        c = !0;
      function L(e) {
        if (c) {
          var t;
          for (l = new O.Buf32(512), p = new O.Buf32(32), t = 0; t < 144; )
            e.lens[t++] = 8;
          for (; t < 256; ) e.lens[t++] = 9;
          for (; t < 280; ) e.lens[t++] = 7;
          for (; t < 288; ) e.lens[t++] = 8;
          for (N(D, e.lens, 0, 288, l, 0, e.work, { bits: 9 }), t = 0; t < 32; )
            e.lens[t++] = 5;
          N(R, e.lens, 0, 32, p, 0, e.work, { bits: 5 }), (c = !1);
        }
        (e.lencode = l), (e.lenbits = 9), (e.distcode = p), (e.distbits = 5);
      }
      function P(e, t, r, o) {
        var n,
          s = e.state;
        return (
          null === s.window &&
            ((s.wsize = 1 << s.wbits),
            (s.wnext = 0),
            (s.whave = 0),
            (s.window = new O.Buf8(s.wsize))),
          o >= s.wsize
            ? (O.arraySet(s.window, t, r - s.wsize, s.wsize, 0),
              (s.wnext = 0),
              (s.whave = s.wsize))
            : (o < (n = s.wsize - s.wnext) && (n = o),
              O.arraySet(s.window, t, r - o, n, s.wnext),
              (o -= n)
                ? (O.arraySet(s.window, t, r - o, o, 0),
                  (s.wnext = o),
                  (s.whave = s.wsize))
                : ((s.wnext += n),
                  s.wnext === s.wsize && (s.wnext = 0),
                  s.whave < s.wsize && (s.whave += n))),
          0
        );
      }
      (t.inflateReset = a),
        (t.inflateReset2 = g),
        (t.inflateResetKeep = i),
        (t.inflateInit = function(e) {
          return u(e, 15);
        }),
        (t.inflateInit2 = u),
        (t.inflate = function(e, t) {
          var r,
            o,
            n,
            s,
            i,
            a,
            g,
            u,
            l,
            p,
            c,
            h,
            d,
            f,
            _,
            b,
            y,
            m,
            j,
            A,
            E,
            S,
            v,
            w,
            I = 0,
            T = new O.Buf8(4),
            B = [
              16,
              17,
              18,
              0,
              8,
              7,
              9,
              6,
              10,
              5,
              11,
              4,
              12,
              3,
              13,
              2,
              14,
              1,
              15
            ];
          if (!e || !e.state || !e.output || (!e.input && 0 !== e.avail_in))
            return F;
          12 === (r = e.state).mode && (r.mode = 13),
            (i = e.next_out),
            (n = e.output),
            (g = e.avail_out),
            (s = e.next_in),
            (o = e.input),
            (a = e.avail_in),
            (u = r.hold),
            (l = r.bits),
            (p = a),
            (c = g),
            (S = U);
          e: for (;;)
            switch (r.mode) {
              case k:
                if (0 === r.wrap) {
                  r.mode = 13;
                  break;
                }
                for (; l < 16; ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                if (2 & r.wrap && 35615 === u) {
                  (T[(r.check = 0)] = 255 & u),
                    (T[1] = (u >>> 8) & 255),
                    (r.check = C(r.check, T, 2, 0)),
                    (l = u = 0),
                    (r.mode = 2);
                  break;
                }
                if (
                  ((r.flags = 0),
                  r.head && (r.head.done = !1),
                  !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31)
                ) {
                  (e.msg = "incorrect header check"), (r.mode = 30);
                  break;
                }
                if (8 != (15 & u)) {
                  (e.msg = "unknown compression method"), (r.mode = 30);
                  break;
                }
                if (((l -= 4), (E = 8 + (15 & (u >>>= 4))), 0 === r.wbits))
                  r.wbits = E;
                else if (E > r.wbits) {
                  (e.msg = "invalid window size"), (r.mode = 30);
                  break;
                }
                (r.dmax = 1 << E),
                  (e.adler = r.check = 1),
                  (r.mode = 512 & u ? 10 : 12),
                  (l = u = 0);
                break;
              case 2:
                for (; l < 16; ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                if (((r.flags = u), 8 != (255 & r.flags))) {
                  (e.msg = "unknown compression method"), (r.mode = 30);
                  break;
                }
                if (57344 & r.flags) {
                  (e.msg = "unknown header flags set"), (r.mode = 30);
                  break;
                }
                r.head && (r.head.text = (u >> 8) & 1),
                  512 & r.flags &&
                    ((T[0] = 255 & u),
                    (T[1] = (u >>> 8) & 255),
                    (r.check = C(r.check, T, 2, 0))),
                  (l = u = 0),
                  (r.mode = 3);
              case 3:
                for (; l < 32; ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                r.head && (r.head.time = u),
                  512 & r.flags &&
                    ((T[0] = 255 & u),
                    (T[1] = (u >>> 8) & 255),
                    (T[2] = (u >>> 16) & 255),
                    (T[3] = (u >>> 24) & 255),
                    (r.check = C(r.check, T, 4, 0))),
                  (l = u = 0),
                  (r.mode = 4);
              case 4:
                for (; l < 16; ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                r.head && ((r.head.xflags = 255 & u), (r.head.os = u >> 8)),
                  512 & r.flags &&
                    ((T[0] = 255 & u),
                    (T[1] = (u >>> 8) & 255),
                    (r.check = C(r.check, T, 2, 0))),
                  (l = u = 0),
                  (r.mode = 5);
              case 5:
                if (1024 & r.flags) {
                  for (; l < 16; ) {
                    if (0 === a) break e;
                    a--, (u += o[s++] << l), (l += 8);
                  }
                  (r.length = u),
                    r.head && (r.head.extra_len = u),
                    512 & r.flags &&
                      ((T[0] = 255 & u),
                      (T[1] = (u >>> 8) & 255),
                      (r.check = C(r.check, T, 2, 0))),
                    (l = u = 0);
                } else r.head && (r.head.extra = null);
                r.mode = 6;
              case 6:
                if (
                  1024 & r.flags &&
                  (a < (h = r.length) && (h = a),
                  h &&
                    (r.head &&
                      ((E = r.head.extra_len - r.length),
                      r.head.extra ||
                        (r.head.extra = new Array(r.head.extra_len)),
                      O.arraySet(r.head.extra, o, s, h, E)),
                    512 & r.flags && (r.check = C(r.check, o, h, s)),
                    (a -= h),
                    (s += h),
                    (r.length -= h)),
                  r.length)
                )
                  break e;
                (r.length = 0), (r.mode = 7);
              case 7:
                if (2048 & r.flags) {
                  if (0 === a) break e;
                  for (
                    h = 0;
                    (E = o[s + h++]),
                      r.head &&
                        E &&
                        r.length < 65536 &&
                        (r.head.name += String.fromCharCode(E)),
                      E && h < a;

                  );
                  if (
                    (512 & r.flags && (r.check = C(r.check, o, h, s)),
                    (a -= h),
                    (s += h),
                    E)
                  )
                    break e;
                } else r.head && (r.head.name = null);
                (r.length = 0), (r.mode = 8);
              case 8:
                if (4096 & r.flags) {
                  if (0 === a) break e;
                  for (
                    h = 0;
                    (E = o[s + h++]),
                      r.head &&
                        E &&
                        r.length < 65536 &&
                        (r.head.comment += String.fromCharCode(E)),
                      E && h < a;

                  );
                  if (
                    (512 & r.flags && (r.check = C(r.check, o, h, s)),
                    (a -= h),
                    (s += h),
                    E)
                  )
                    break e;
                } else r.head && (r.head.comment = null);
                r.mode = 9;
              case 9:
                if (512 & r.flags) {
                  for (; l < 16; ) {
                    if (0 === a) break e;
                    a--, (u += o[s++] << l), (l += 8);
                  }
                  if (u !== (65535 & r.check)) {
                    (e.msg = "header crc mismatch"), (r.mode = 30);
                    break;
                  }
                  l = u = 0;
                }
                r.head &&
                  ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
                  (e.adler = r.check = 0),
                  (r.mode = 12);
                break;
              case 10:
                for (; l < 32; ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                (e.adler = r.check = W(u)), (l = u = 0), (r.mode = 11);
              case 11:
                if (0 === r.havedict)
                  return (
                    (e.next_out = i),
                    (e.avail_out = g),
                    (e.next_in = s),
                    (e.avail_in = a),
                    (r.hold = u),
                    (r.bits = l),
                    2
                  );
                (e.adler = r.check = 1), (r.mode = 12);
              case 12:
                if (5 === t || 6 === t) break e;
              case 13:
                if (r.last) {
                  (u >>>= 7 & l), (l -= 7 & l), (r.mode = 27);
                  break;
                }
                for (; l < 3; ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                switch (((r.last = 1 & u), (l -= 1), 3 & (u >>>= 1))) {
                  case 0:
                    r.mode = 14;
                    break;
                  case 1:
                    if ((L(r), (r.mode = 20), 6 !== t)) break;
                    (u >>>= 2), (l -= 2);
                    break e;
                  case 2:
                    r.mode = 17;
                    break;
                  case 3:
                    (e.msg = "invalid block type"), (r.mode = 30);
                }
                (u >>>= 2), (l -= 2);
                break;
              case 14:
                for (u >>>= 7 & l, l -= 7 & l; l < 32; ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                if ((65535 & u) != ((u >>> 16) ^ 65535)) {
                  (e.msg = "invalid stored block lengths"), (r.mode = 30);
                  break;
                }
                if (
                  ((r.length = 65535 & u), (l = u = 0), (r.mode = 15), 6 === t)
                )
                  break e;
              case 15:
                r.mode = 16;
              case 16:
                if ((h = r.length)) {
                  if ((a < h && (h = a), g < h && (h = g), 0 === h)) break e;
                  O.arraySet(n, o, s, h, i),
                    (a -= h),
                    (s += h),
                    (g -= h),
                    (i += h),
                    (r.length -= h);
                  break;
                }
                r.mode = 12;
                break;
              case 17:
                for (; l < 14; ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                if (
                  ((r.nlen = 257 + (31 & u)),
                  (u >>>= 5),
                  (l -= 5),
                  (r.ndist = 1 + (31 & u)),
                  (u >>>= 5),
                  (l -= 5),
                  (r.ncode = 4 + (15 & u)),
                  (u >>>= 4),
                  (l -= 4),
                  286 < r.nlen || 30 < r.ndist)
                ) {
                  (e.msg = "too many length or distance symbols"),
                    (r.mode = 30);
                  break;
                }
                (r.have = 0), (r.mode = 18);
              case 18:
                for (; r.have < r.ncode; ) {
                  for (; l < 3; ) {
                    if (0 === a) break e;
                    a--, (u += o[s++] << l), (l += 8);
                  }
                  (r.lens[B[r.have++]] = 7 & u), (u >>>= 3), (l -= 3);
                }
                for (; r.have < 19; ) r.lens[B[r.have++]] = 0;
                if (
                  ((r.lencode = r.lendyn),
                  (r.lenbits = 7),
                  (v = { bits: r.lenbits }),
                  (S = N(0, r.lens, 0, 19, r.lencode, 0, r.work, v)),
                  (r.lenbits = v.bits),
                  S)
                ) {
                  (e.msg = "invalid code lengths set"), (r.mode = 30);
                  break;
                }
                (r.have = 0), (r.mode = 19);
              case 19:
                for (; r.have < r.nlen + r.ndist; ) {
                  for (
                    ;
                    (b =
                      ((I = r.lencode[u & ((1 << r.lenbits) - 1)]) >>> 16) &
                      255),
                      (y = 65535 & I),
                      !((_ = I >>> 24) <= l);

                  ) {
                    if (0 === a) break e;
                    a--, (u += o[s++] << l), (l += 8);
                  }
                  if (y < 16) (u >>>= _), (l -= _), (r.lens[r.have++] = y);
                  else {
                    if (16 === y) {
                      for (w = _ + 2; l < w; ) {
                        if (0 === a) break e;
                        a--, (u += o[s++] << l), (l += 8);
                      }
                      if (((u >>>= _), (l -= _), 0 === r.have)) {
                        (e.msg = "invalid bit length repeat"), (r.mode = 30);
                        break;
                      }
                      (E = r.lens[r.have - 1]),
                        (h = 3 + (3 & u)),
                        (u >>>= 2),
                        (l -= 2);
                    } else if (17 === y) {
                      for (w = _ + 3; l < w; ) {
                        if (0 === a) break e;
                        a--, (u += o[s++] << l), (l += 8);
                      }
                      (l -= _),
                        (E = 0),
                        (h = 3 + (7 & (u >>>= _))),
                        (u >>>= 3),
                        (l -= 3);
                    } else {
                      for (w = _ + 7; l < w; ) {
                        if (0 === a) break e;
                        a--, (u += o[s++] << l), (l += 8);
                      }
                      (l -= _),
                        (E = 0),
                        (h = 11 + (127 & (u >>>= _))),
                        (u >>>= 7),
                        (l -= 7);
                    }
                    if (r.have + h > r.nlen + r.ndist) {
                      (e.msg = "invalid bit length repeat"), (r.mode = 30);
                      break;
                    }
                    for (; h--; ) r.lens[r.have++] = E;
                  }
                }
                if (30 === r.mode) break;
                if (0 === r.lens[256]) {
                  (e.msg = "invalid code -- missing end-of-block"),
                    (r.mode = 30);
                  break;
                }
                if (
                  ((r.lenbits = 9),
                  (v = { bits: r.lenbits }),
                  (S = N(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, v)),
                  (r.lenbits = v.bits),
                  S)
                ) {
                  (e.msg = "invalid literal/lengths set"), (r.mode = 30);
                  break;
                }
                if (
                  ((r.distbits = 6),
                  (r.distcode = r.distdyn),
                  (v = { bits: r.distbits }),
                  (S = N(R, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, v)),
                  (r.distbits = v.bits),
                  S)
                ) {
                  (e.msg = "invalid distances set"), (r.mode = 30);
                  break;
                }
                if (((r.mode = 20), 6 === t)) break e;
              case 20:
                r.mode = 21;
              case 21:
                if (6 <= a && 258 <= g) {
                  (e.next_out = i),
                    (e.avail_out = g),
                    (e.next_in = s),
                    (e.avail_in = a),
                    (r.hold = u),
                    (r.bits = l),
                    x(e, c),
                    (i = e.next_out),
                    (n = e.output),
                    (g = e.avail_out),
                    (s = e.next_in),
                    (o = e.input),
                    (a = e.avail_in),
                    (u = r.hold),
                    (l = r.bits),
                    12 === r.mode && (r.back = -1);
                  break;
                }
                for (
                  r.back = 0;
                  (b =
                    ((I = r.lencode[u & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                    (y = 65535 & I),
                    !((_ = I >>> 24) <= l);

                ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                if (b && 0 == (240 & b)) {
                  for (
                    m = _, j = b, A = y;
                    (b =
                      ((I =
                        r.lencode[A + ((u & ((1 << (m + j)) - 1)) >> m)]) >>>
                        16) &
                      255),
                      (y = 65535 & I),
                      !(m + (_ = I >>> 24) <= l);

                  ) {
                    if (0 === a) break e;
                    a--, (u += o[s++] << l), (l += 8);
                  }
                  (u >>>= m), (l -= m), (r.back += m);
                }
                if (
                  ((u >>>= _), (l -= _), (r.back += _), (r.length = y), 0 === b)
                ) {
                  r.mode = 26;
                  break;
                }
                if (32 & b) {
                  (r.back = -1), (r.mode = 12);
                  break;
                }
                if (64 & b) {
                  (e.msg = "invalid literal/length code"), (r.mode = 30);
                  break;
                }
                (r.extra = 15 & b), (r.mode = 22);
              case 22:
                if (r.extra) {
                  for (w = r.extra; l < w; ) {
                    if (0 === a) break e;
                    a--, (u += o[s++] << l), (l += 8);
                  }
                  (r.length += u & ((1 << r.extra) - 1)),
                    (u >>>= r.extra),
                    (l -= r.extra),
                    (r.back += r.extra);
                }
                (r.was = r.length), (r.mode = 23);
              case 23:
                for (
                  ;
                  (b =
                    ((I = r.distcode[u & ((1 << r.distbits) - 1)]) >>> 16) &
                    255),
                    (y = 65535 & I),
                    !((_ = I >>> 24) <= l);

                ) {
                  if (0 === a) break e;
                  a--, (u += o[s++] << l), (l += 8);
                }
                if (0 == (240 & b)) {
                  for (
                    m = _, j = b, A = y;
                    (b =
                      ((I =
                        r.distcode[A + ((u & ((1 << (m + j)) - 1)) >> m)]) >>>
                        16) &
                      255),
                      (y = 65535 & I),
                      !(m + (_ = I >>> 24) <= l);

                  ) {
                    if (0 === a) break e;
                    a--, (u += o[s++] << l), (l += 8);
                  }
                  (u >>>= m), (l -= m), (r.back += m);
                }
                if (((u >>>= _), (l -= _), (r.back += _), 64 & b)) {
                  (e.msg = "invalid distance code"), (r.mode = 30);
                  break;
                }
                (r.offset = y), (r.extra = 15 & b), (r.mode = 24);
              case 24:
                if (r.extra) {
                  for (w = r.extra; l < w; ) {
                    if (0 === a) break e;
                    a--, (u += o[s++] << l), (l += 8);
                  }
                  (r.offset += u & ((1 << r.extra) - 1)),
                    (u >>>= r.extra),
                    (l -= r.extra),
                    (r.back += r.extra);
                }
                if (r.offset > r.dmax) {
                  (e.msg = "invalid distance too far back"), (r.mode = 30);
                  break;
                }
                r.mode = 25;
              case 25:
                if (0 === g) break e;
                if (((h = c - g), r.offset > h)) {
                  if ((h = r.offset - h) > r.whave && r.sane) {
                    (e.msg = "invalid distance too far back"), (r.mode = 30);
                    break;
                  }
                  (d =
                    h > r.wnext ? ((h -= r.wnext), r.wsize - h) : r.wnext - h),
                    h > r.length && (h = r.length),
                    (f = r.window);
                } else (f = n), (d = i - r.offset), (h = r.length);
                for (
                  g < h && (h = g), g -= h, r.length -= h;
                  (n[i++] = f[d++]), --h;

                );
                0 === r.length && (r.mode = 21);
                break;
              case 26:
                if (0 === g) break e;
                (n[i++] = r.length), g--, (r.mode = 21);
                break;
              case 27:
                if (r.wrap) {
                  for (; l < 32; ) {
                    if (0 === a) break e;
                    a--, (u |= o[s++] << l), (l += 8);
                  }
                  if (
                    ((c -= g),
                    (e.total_out += c),
                    (r.total += c),
                    c &&
                      (e.adler = r.check = r.flags
                        ? C(r.check, n, c, i - c)
                        : M(r.check, n, c, i - c)),
                    (c = g),
                    (r.flags ? u : W(u)) !== r.check)
                  ) {
                    (e.msg = "incorrect data check"), (r.mode = 30);
                    break;
                  }
                  l = u = 0;
                }
                r.mode = 28;
              case 28:
                if (r.wrap && r.flags) {
                  for (; l < 32; ) {
                    if (0 === a) break e;
                    a--, (u += o[s++] << l), (l += 8);
                  }
                  if (u !== (4294967295 & r.total)) {
                    (e.msg = "incorrect length check"), (r.mode = 30);
                    break;
                  }
                  l = u = 0;
                }
                r.mode = 29;
              case 29:
                S = 1;
                break e;
              case 30:
                S = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return F;
            }
          return (
            (e.next_out = i),
            (e.avail_out = g),
            (e.next_in = s),
            (e.avail_in = a),
            (r.hold = u),
            (r.bits = l),
            (r.wsize ||
              (c !== e.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== t))) &&
            P(e, e.output, e.next_out, c - e.avail_out)
              ? ((r.mode = 31), -4)
              : ((p -= e.avail_in),
                (c -= e.avail_out),
                (e.total_in += p),
                (e.total_out += c),
                (r.total += c),
                r.wrap &&
                  c &&
                  (e.adler = r.check = r.flags
                    ? C(r.check, n, c, e.next_out - c)
                    : M(r.check, n, c, e.next_out - c)),
                (e.data_type =
                  r.bits +
                  (r.last ? 64 : 0) +
                  (12 === r.mode ? 128 : 0) +
                  (20 === r.mode || 15 === r.mode ? 256 : 0)),
                ((0 === p && 0 === c) || 4 === t) && S === U && (S = -5),
                S)
          );
        }),
        (t.inflateEnd = function(e) {
          if (!e || !e.state) return F;
          var t = e.state;
          return t.window && (t.window = null), (e.state = null), U;
        }),
        (t.inflateGetHeader = function(e, t) {
          var r;
          return e && e.state
            ? 0 == (2 & (r = e.state).wrap)
              ? F
              : (((r.head = t).done = !1), U)
            : F;
        }),
        (t.inflateSetDictionary = function(e, t) {
          var r,
            o = t.length;
          return e && e.state
            ? 0 !== (r = e.state).wrap && 11 !== r.mode
              ? F
              : 11 === r.mode && M(1, t, o, 0) !== r.check
              ? -3
              : P(e, t, o, o)
              ? ((r.mode = 31), -4)
              : ((r.havedict = 1), U)
            : F;
        }),
        (t.inflateInfo = "pako inflate (from Nodeca project)");
    },
    oXfm: function(e, t, r) {
      "use strict";
      var g,
        c = r("vn/o"),
        u = r("B/RK"),
        h = r("yDR0"),
        d = r("7tol"),
        o = r("Tcbo"),
        l = 0,
        p = 0,
        f = -2,
        n = 2,
        _ = 8,
        s = 286,
        i = 30,
        a = 19,
        b = 2 * s + 1,
        y = 15,
        m = 3,
        j = 258,
        A = j + m + 1,
        E = 42,
        S = 113;
      function v(e, t) {
        return (e.msg = o[t]), t;
      }
      function w(e) {
        return (e << 1) - (4 < e ? 9 : 0);
      }
      function I(e) {
        for (var t = e.length; 0 <= --t; ) e[t] = 0;
      }
      function T(e) {
        var t = e.state,
          r = t.pending;
        r > e.avail_out && (r = e.avail_out),
          0 !== r &&
            (c.arraySet(e.output, t.pending_buf, t.pending_out, r, e.next_out),
            (e.next_out += r),
            (t.pending_out += r),
            (e.total_out += r),
            (e.avail_out -= r),
            (t.pending -= r),
            0 === t.pending && (t.pending_out = 0));
      }
      function B(e, t) {
        u._tr_flush_block(
          e,
          0 <= e.block_start ? e.block_start : -1,
          e.strstart - e.block_start,
          t
        ),
          (e.block_start = e.strstart),
          T(e.strm);
      }
      function O(e, t) {
        e.pending_buf[e.pending++] = t;
      }
      function M(e, t) {
        (e.pending_buf[e.pending++] = (t >>> 8) & 255),
          (e.pending_buf[e.pending++] = 255 & t);
      }
      function C(e, t) {
        var r,
          o,
          n = e.max_chain_length,
          s = e.strstart,
          i = e.prev_length,
          a = e.nice_match,
          g = e.strstart > e.w_size - A ? e.strstart - (e.w_size - A) : 0,
          u = e.window,
          l = e.w_mask,
          p = e.prev,
          c = e.strstart + j,
          h = u[s + i - 1],
          d = u[s + i];
        e.prev_length >= e.good_match && (n >>= 2),
          a > e.lookahead && (a = e.lookahead);
        do {
          if (
            u[(r = t) + i] === d &&
            u[r + i - 1] === h &&
            u[r] === u[s] &&
            u[++r] === u[s + 1]
          ) {
            (s += 2), r++;
            do {} while (
              u[++s] === u[++r] &&
              u[++s] === u[++r] &&
              u[++s] === u[++r] &&
              u[++s] === u[++r] &&
              u[++s] === u[++r] &&
              u[++s] === u[++r] &&
              u[++s] === u[++r] &&
              u[++s] === u[++r] &&
              s < c
            );
            if (((o = j - (c - s)), (s = c - j), i < o)) {
              if (((e.match_start = t), a <= (i = o))) break;
              (h = u[s + i - 1]), (d = u[s + i]);
            }
          }
        } while ((t = p[t & l]) > g && 0 != --n);
        return i <= e.lookahead ? i : e.lookahead;
      }
      function x(e) {
        var t,
          r,
          o,
          n,
          s,
          i,
          a,
          g,
          u,
          l,
          p = e.w_size;
        do {
          if (
            ((n = e.window_size - e.lookahead - e.strstart),
            e.strstart >= p + (p - A))
          ) {
            for (
              c.arraySet(e.window, e.window, p, p, 0),
                e.match_start -= p,
                e.strstart -= p,
                e.block_start -= p,
                t = r = e.hash_size;
              (o = e.head[--t]), (e.head[t] = p <= o ? o - p : 0), --r;

            );
            for (
              t = r = p;
              (o = e.prev[--t]), (e.prev[t] = p <= o ? o - p : 0), --r;

            );
            n += p;
          }
          if (0 === e.strm.avail_in) break;
          if (
            ((i = e.strm),
            (a = e.window),
            (g = e.strstart + e.lookahead),
            (l = void 0),
            (u = n) < (l = i.avail_in) && (l = u),
            (r =
              0 === l
                ? 0
                : ((i.avail_in -= l),
                  c.arraySet(a, i.input, i.next_in, l, g),
                  1 === i.state.wrap
                    ? (i.adler = h(i.adler, a, l, g))
                    : 2 === i.state.wrap && (i.adler = d(i.adler, a, l, g)),
                  (i.next_in += l),
                  (i.total_in += l),
                  l)),
            (e.lookahead += r),
            e.lookahead + e.insert >= m)
          )
            for (
              s = e.strstart - e.insert,
                e.ins_h = e.window[s],
                e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[s + 1]) & e.hash_mask;
              e.insert &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[s + m - 1]) &
                e.hash_mask),
              (e.prev[s & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = s),
              s++,
              e.insert--,
              !(e.lookahead + e.insert < m));

            );
        } while (e.lookahead < A && 0 !== e.strm.avail_in);
      }
      function N(e, t) {
        for (var r, o; ; ) {
          if (e.lookahead < A) {
            if ((x(e), e.lookahead < A && t === l)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((r = 0),
            e.lookahead >= m &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + m - 1]) &
                e.hash_mask),
              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            0 !== r &&
              e.strstart - r <= e.w_size - A &&
              (e.match_length = C(e, r)),
            e.match_length >= m)
          )
            if (
              ((o = u._tr_tally(
                e,
                e.strstart - e.match_start,
                e.match_length - m
              )),
              (e.lookahead -= e.match_length),
              e.match_length <= e.max_lazy_match && e.lookahead >= m)
            ) {
              for (
                e.match_length--;
                e.strstart++,
                  (e.ins_h =
                    ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + m - 1]) &
                    e.hash_mask),
                  (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                  (e.head[e.ins_h] = e.strstart),
                  0 != --e.match_length;

              );
              e.strstart++;
            } else
              (e.strstart += e.match_length),
                (e.match_length = 0),
                (e.ins_h = e.window[e.strstart]),
                (e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) &
                  e.hash_mask);
          else
            (o = u._tr_tally(e, 0, e.window[e.strstart])),
              e.lookahead--,
              e.strstart++;
          if (o && (B(e, !1), 0 === e.strm.avail_out)) return 1;
        }
        return (
          (e.insert = e.strstart < m - 1 ? e.strstart : m - 1),
          4 === t
            ? (B(e, !0), 0 === e.strm.avail_out ? 3 : 4)
            : e.last_lit && (B(e, !1), 0 === e.strm.avail_out)
            ? 1
            : 2
        );
      }
      function D(e, t) {
        for (var r, o, n; ; ) {
          if (e.lookahead < A) {
            if ((x(e), e.lookahead < A && t === l)) return 1;
            if (0 === e.lookahead) break;
          }
          if (
            ((r = 0),
            e.lookahead >= m &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + m - 1]) &
                e.hash_mask),
              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart)),
            (e.prev_length = e.match_length),
            (e.prev_match = e.match_start),
            (e.match_length = m - 1),
            0 !== r &&
              e.prev_length < e.max_lazy_match &&
              e.strstart - r <= e.w_size - A &&
              ((e.match_length = C(e, r)),
              e.match_length <= 5 &&
                (1 === e.strategy ||
                  (e.match_length === m &&
                    4096 < e.strstart - e.match_start)) &&
                (e.match_length = m - 1)),
            e.prev_length >= m && e.match_length <= e.prev_length)
          ) {
            for (
              n = e.strstart + e.lookahead - m,
                o = u._tr_tally(
                  e,
                  e.strstart - 1 - e.prev_match,
                  e.prev_length - m
                ),
                e.lookahead -= e.prev_length - 1,
                e.prev_length -= 2;
              ++e.strstart <= n &&
                ((e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + m - 1]) &
                  e.hash_mask),
                (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart)),
                0 != --e.prev_length;

            );
            if (
              ((e.match_available = 0),
              (e.match_length = m - 1),
              e.strstart++,
              o && (B(e, !1), 0 === e.strm.avail_out))
            )
              return 1;
          } else if (e.match_available) {
            if (
              ((o = u._tr_tally(e, 0, e.window[e.strstart - 1])) && B(e, !1),
              e.strstart++,
              e.lookahead--,
              0 === e.strm.avail_out)
            )
              return 1;
          } else (e.match_available = 1), e.strstart++, e.lookahead--;
        }
        return (
          e.match_available &&
            ((o = u._tr_tally(e, 0, e.window[e.strstart - 1])),
            (e.match_available = 0)),
          (e.insert = e.strstart < m - 1 ? e.strstart : m - 1),
          4 === t
            ? (B(e, !0), 0 === e.strm.avail_out ? 3 : 4)
            : e.last_lit && (B(e, !1), 0 === e.strm.avail_out)
            ? 1
            : 2
        );
      }
      function R(e, t, r, o, n) {
        (this.good_length = e),
          (this.max_lazy = t),
          (this.nice_length = r),
          (this.max_chain = o),
          (this.func = n);
      }
      function U() {
        (this.strm = null),
          (this.status = 0),
          (this.pending_buf = null),
          (this.pending_buf_size = 0),
          (this.pending_out = 0),
          (this.pending = 0),
          (this.wrap = 0),
          (this.gzhead = null),
          (this.gzindex = 0),
          (this.method = _),
          (this.last_flush = -1),
          (this.w_size = 0),
          (this.w_bits = 0),
          (this.w_mask = 0),
          (this.window = null),
          (this.window_size = 0),
          (this.prev = null),
          (this.head = null),
          (this.ins_h = 0),
          (this.hash_size = 0),
          (this.hash_bits = 0),
          (this.hash_mask = 0),
          (this.hash_shift = 0),
          (this.block_start = 0),
          (this.match_length = 0),
          (this.prev_match = 0),
          (this.match_available = 0),
          (this.strstart = 0),
          (this.match_start = 0),
          (this.lookahead = 0),
          (this.prev_length = 0),
          (this.max_chain_length = 0),
          (this.max_lazy_match = 0),
          (this.level = 0),
          (this.strategy = 0),
          (this.good_match = 0),
          (this.nice_match = 0),
          (this.dyn_ltree = new c.Buf16(2 * b)),
          (this.dyn_dtree = new c.Buf16(2 * (2 * i + 1))),
          (this.bl_tree = new c.Buf16(2 * (2 * a + 1))),
          I(this.dyn_ltree),
          I(this.dyn_dtree),
          I(this.bl_tree),
          (this.l_desc = null),
          (this.d_desc = null),
          (this.bl_desc = null),
          (this.bl_count = new c.Buf16(y + 1)),
          (this.heap = new c.Buf16(2 * s + 1)),
          I(this.heap),
          (this.heap_len = 0),
          (this.heap_max = 0),
          (this.depth = new c.Buf16(2 * s + 1)),
          I(this.depth),
          (this.l_buf = 0),
          (this.lit_bufsize = 0),
          (this.last_lit = 0),
          (this.d_buf = 0),
          (this.opt_len = 0),
          (this.static_len = 0),
          (this.matches = 0),
          (this.insert = 0),
          (this.bi_buf = 0),
          (this.bi_valid = 0);
      }
      function F(e) {
        var t;
        return e && e.state
          ? ((e.total_in = e.total_out = 0),
            (e.data_type = n),
            ((t = e.state).pending = 0),
            (t.pending_out = 0),
            t.wrap < 0 && (t.wrap = -t.wrap),
            (t.status = t.wrap ? E : S),
            (e.adler = 2 === t.wrap ? 0 : 1),
            (t.last_flush = l),
            u._tr_init(t),
            p)
          : v(e, f);
      }
      function k(e) {
        var t,
          r = F(e);
        return (
          r === p &&
            (((t = e.state).window_size = 2 * t.w_size),
            I(t.head),
            (t.max_lazy_match = g[t.level].max_lazy),
            (t.good_match = g[t.level].good_length),
            (t.nice_match = g[t.level].nice_length),
            (t.max_chain_length = g[t.level].max_chain),
            (t.strstart = 0),
            (t.block_start = 0),
            (t.lookahead = 0),
            (t.insert = 0),
            (t.match_length = t.prev_length = m - 1),
            (t.match_available = 0),
            (t.ins_h = 0)),
          r
        );
      }
      function W(e, t, r, o, n, s) {
        if (!e) return f;
        var i = 1;
        if (
          (-1 === t && (t = 6),
          o < 0 ? ((i = 0), (o = -o)) : 15 < o && ((i = 2), (o -= 16)),
          n < 1 ||
            9 < n ||
            r !== _ ||
            o < 8 ||
            15 < o ||
            t < 0 ||
            9 < t ||
            s < 0 ||
            4 < s)
        )
          return v(e, f);
        8 === o && (o = 9);
        var a = new U();
        return (
          ((e.state = a).strm = e),
          (a.wrap = i),
          (a.gzhead = null),
          (a.w_bits = o),
          (a.w_size = 1 << a.w_bits),
          (a.w_mask = a.w_size - 1),
          (a.hash_bits = n + 7),
          (a.hash_size = 1 << a.hash_bits),
          (a.hash_mask = a.hash_size - 1),
          (a.hash_shift = ~~((a.hash_bits + m - 1) / m)),
          (a.window = new c.Buf8(2 * a.w_size)),
          (a.head = new c.Buf16(a.hash_size)),
          (a.prev = new c.Buf16(a.w_size)),
          (a.lit_bufsize = 1 << (n + 6)),
          (a.pending_buf_size = 4 * a.lit_bufsize),
          (a.pending_buf = new c.Buf8(a.pending_buf_size)),
          (a.d_buf = 1 * a.lit_bufsize),
          (a.l_buf = 3 * a.lit_bufsize),
          (a.level = t),
          (a.strategy = s),
          (a.method = r),
          k(e)
        );
      }
      (g = [
        new R(0, 0, 0, 0, function(e, t) {
          var r = 65535;
          for (r > e.pending_buf_size - 5 && (r = e.pending_buf_size - 5); ; ) {
            if (e.lookahead <= 1) {
              if ((x(e), 0 === e.lookahead && t === l)) return 1;
              if (0 === e.lookahead) break;
            }
            (e.strstart += e.lookahead), (e.lookahead = 0);
            var o = e.block_start + r;
            if (
              (0 === e.strstart || e.strstart >= o) &&
              ((e.lookahead = e.strstart - o),
              (e.strstart = o),
              B(e, !1),
              0 === e.strm.avail_out)
            )
              return 1;
            if (
              e.strstart - e.block_start >= e.w_size - A &&
              (B(e, !1), 0 === e.strm.avail_out)
            )
              return 1;
          }
          return (
            (e.insert = 0),
            4 === t
              ? (B(e, !0), 0 === e.strm.avail_out ? 3 : 4)
              : (e.strstart > e.block_start && (B(e, !1), e.strm.avail_out), 1)
          );
        }),
        new R(4, 4, 8, 4, N),
        new R(4, 5, 16, 8, N),
        new R(4, 6, 32, 32, N),
        new R(4, 4, 16, 16, D),
        new R(8, 16, 32, 32, D),
        new R(8, 16, 128, 128, D),
        new R(8, 32, 128, 256, D),
        new R(32, 128, 258, 1024, D),
        new R(32, 258, 258, 4096, D)
      ]),
        (t.deflateInit = function(e, t) {
          return W(e, t, _, 15, 8, 0);
        }),
        (t.deflateInit2 = W),
        (t.deflateReset = k),
        (t.deflateResetKeep = F),
        (t.deflateSetHeader = function(e, t) {
          return e && e.state
            ? 2 !== e.state.wrap
              ? f
              : ((e.state.gzhead = t), p)
            : f;
        }),
        (t.deflate = function(e, t) {
          var r, o, n, s;
          if (!e || !e.state || 5 < t || t < 0) return e ? v(e, f) : f;
          if (
            ((o = e.state),
            !e.output ||
              (!e.input && 0 !== e.avail_in) ||
              (666 === o.status && 4 !== t))
          )
            return v(e, 0 === e.avail_out ? -5 : f);
          if (
            ((o.strm = e),
            (r = o.last_flush),
            (o.last_flush = t),
            o.status === E)
          )
            if (2 === o.wrap)
              (e.adler = 0),
                O(o, 31),
                O(o, 139),
                O(o, 8),
                o.gzhead
                  ? (O(
                      o,
                      (o.gzhead.text ? 1 : 0) +
                        (o.gzhead.hcrc ? 2 : 0) +
                        (o.gzhead.extra ? 4 : 0) +
                        (o.gzhead.name ? 8 : 0) +
                        (o.gzhead.comment ? 16 : 0)
                    ),
                    O(o, 255 & o.gzhead.time),
                    O(o, (o.gzhead.time >> 8) & 255),
                    O(o, (o.gzhead.time >> 16) & 255),
                    O(o, (o.gzhead.time >> 24) & 255),
                    O(
                      o,
                      9 === o.level ? 2 : 2 <= o.strategy || o.level < 2 ? 4 : 0
                    ),
                    O(o, 255 & o.gzhead.os),
                    o.gzhead.extra &&
                      o.gzhead.extra.length &&
                      (O(o, 255 & o.gzhead.extra.length),
                      O(o, (o.gzhead.extra.length >> 8) & 255)),
                    o.gzhead.hcrc &&
                      (e.adler = d(e.adler, o.pending_buf, o.pending, 0)),
                    (o.gzindex = 0),
                    (o.status = 69))
                  : (O(o, 0),
                    O(o, 0),
                    O(o, 0),
                    O(o, 0),
                    O(o, 0),
                    O(
                      o,
                      9 === o.level ? 2 : 2 <= o.strategy || o.level < 2 ? 4 : 0
                    ),
                    O(o, 3),
                    (o.status = S));
            else {
              var i = (_ + ((o.w_bits - 8) << 4)) << 8;
              (i |=
                (2 <= o.strategy || o.level < 2
                  ? 0
                  : o.level < 6
                  ? 1
                  : 6 === o.level
                  ? 2
                  : 3) << 6),
                0 !== o.strstart && (i |= 32),
                (i += 31 - (i % 31)),
                (o.status = S),
                M(o, i),
                0 !== o.strstart &&
                  (M(o, e.adler >>> 16), M(o, 65535 & e.adler)),
                (e.adler = 1);
            }
          if (69 === o.status)
            if (o.gzhead.extra) {
              for (
                n = o.pending;
                o.gzindex < (65535 & o.gzhead.extra.length) &&
                (o.pending !== o.pending_buf_size ||
                  (o.gzhead.hcrc &&
                    o.pending > n &&
                    (e.adler = d(e.adler, o.pending_buf, o.pending - n, n)),
                  T(e),
                  (n = o.pending),
                  o.pending !== o.pending_buf_size));

              )
                O(o, 255 & o.gzhead.extra[o.gzindex]), o.gzindex++;
              o.gzhead.hcrc &&
                o.pending > n &&
                (e.adler = d(e.adler, o.pending_buf, o.pending - n, n)),
                o.gzindex === o.gzhead.extra.length &&
                  ((o.gzindex = 0), (o.status = 73));
            } else o.status = 73;
          if (73 === o.status)
            if (o.gzhead.name) {
              n = o.pending;
              do {
                if (
                  o.pending === o.pending_buf_size &&
                  (o.gzhead.hcrc &&
                    o.pending > n &&
                    (e.adler = d(e.adler, o.pending_buf, o.pending - n, n)),
                  T(e),
                  (n = o.pending),
                  o.pending === o.pending_buf_size)
                ) {
                  s = 1;
                  break;
                }
                O(
                  o,
                  (s =
                    o.gzindex < o.gzhead.name.length
                      ? 255 & o.gzhead.name.charCodeAt(o.gzindex++)
                      : 0)
                );
              } while (0 !== s);
              o.gzhead.hcrc &&
                o.pending > n &&
                (e.adler = d(e.adler, o.pending_buf, o.pending - n, n)),
                0 === s && ((o.gzindex = 0), (o.status = 91));
            } else o.status = 91;
          if (91 === o.status)
            if (o.gzhead.comment) {
              n = o.pending;
              do {
                if (
                  o.pending === o.pending_buf_size &&
                  (o.gzhead.hcrc &&
                    o.pending > n &&
                    (e.adler = d(e.adler, o.pending_buf, o.pending - n, n)),
                  T(e),
                  (n = o.pending),
                  o.pending === o.pending_buf_size)
                ) {
                  s = 1;
                  break;
                }
                O(
                  o,
                  (s =
                    o.gzindex < o.gzhead.comment.length
                      ? 255 & o.gzhead.comment.charCodeAt(o.gzindex++)
                      : 0)
                );
              } while (0 !== s);
              o.gzhead.hcrc &&
                o.pending > n &&
                (e.adler = d(e.adler, o.pending_buf, o.pending - n, n)),
                0 === s && (o.status = 103);
            } else o.status = 103;
          if (
            (103 === o.status &&
              (o.gzhead.hcrc
                ? (o.pending + 2 > o.pending_buf_size && T(e),
                  o.pending + 2 <= o.pending_buf_size &&
                    (O(o, 255 & e.adler),
                    O(o, (e.adler >> 8) & 255),
                    (e.adler = 0),
                    (o.status = S)))
                : (o.status = S)),
            0 !== o.pending)
          ) {
            if ((T(e), 0 === e.avail_out)) return (o.last_flush = -1), p;
          } else if (0 === e.avail_in && w(t) <= w(r) && 4 !== t)
            return v(e, -5);
          if (666 === o.status && 0 !== e.avail_in) return v(e, -5);
          if (
            0 !== e.avail_in ||
            0 !== o.lookahead ||
            (t !== l && 666 !== o.status)
          ) {
            var a =
              2 === o.strategy
                ? (function(e, t) {
                    for (var r; ; ) {
                      if (0 === e.lookahead && (x(e), 0 === e.lookahead)) {
                        if (t === l) return 1;
                        break;
                      }
                      if (
                        ((e.match_length = 0),
                        (r = u._tr_tally(e, 0, e.window[e.strstart])),
                        e.lookahead--,
                        e.strstart++,
                        r && (B(e, !1), 0 === e.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (e.insert = 0),
                      4 === t
                        ? (B(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                        : e.last_lit && (B(e, !1), 0 === e.strm.avail_out)
                        ? 1
                        : 2
                    );
                  })(o, t)
                : 3 === o.strategy
                ? (function(e, t) {
                    for (var r, o, n, s, i = e.window; ; ) {
                      if (e.lookahead <= j) {
                        if ((x(e), e.lookahead <= j && t === l)) return 1;
                        if (0 === e.lookahead) break;
                      }
                      if (
                        ((e.match_length = 0),
                        e.lookahead >= m &&
                          0 < e.strstart &&
                          (o = i[(n = e.strstart - 1)]) === i[++n] &&
                          o === i[++n] &&
                          o === i[++n])
                      ) {
                        s = e.strstart + j;
                        do {} while (
                          o === i[++n] &&
                          o === i[++n] &&
                          o === i[++n] &&
                          o === i[++n] &&
                          o === i[++n] &&
                          o === i[++n] &&
                          o === i[++n] &&
                          o === i[++n] &&
                          n < s
                        );
                        (e.match_length = j - (s - n)),
                          e.match_length > e.lookahead &&
                            (e.match_length = e.lookahead);
                      }
                      if (
                        (e.match_length >= m
                          ? ((r = u._tr_tally(e, 1, e.match_length - m)),
                            (e.lookahead -= e.match_length),
                            (e.strstart += e.match_length),
                            (e.match_length = 0))
                          : ((r = u._tr_tally(e, 0, e.window[e.strstart])),
                            e.lookahead--,
                            e.strstart++),
                        r && (B(e, !1), 0 === e.strm.avail_out))
                      )
                        return 1;
                    }
                    return (
                      (e.insert = 0),
                      4 === t
                        ? (B(e, !0), 0 === e.strm.avail_out ? 3 : 4)
                        : e.last_lit && (B(e, !1), 0 === e.strm.avail_out)
                        ? 1
                        : 2
                    );
                  })(o, t)
                : g[o.level].func(o, t);
            if (((3 !== a && 4 !== a) || (o.status = 666), 1 === a || 3 === a))
              return 0 === e.avail_out && (o.last_flush = -1), p;
            if (
              2 === a &&
              (1 === t
                ? u._tr_align(o)
                : 5 !== t &&
                  (u._tr_stored_block(o, 0, 0, !1),
                  3 === t &&
                    (I(o.head),
                    0 === o.lookahead &&
                      ((o.strstart = 0), (o.block_start = 0), (o.insert = 0)))),
              T(e),
              0 === e.avail_out)
            )
              return (o.last_flush = -1), p;
          }
          return 4 !== t
            ? p
            : o.wrap <= 0
            ? 1
            : (2 === o.wrap
                ? (O(o, 255 & e.adler),
                  O(o, (e.adler >> 8) & 255),
                  O(o, (e.adler >> 16) & 255),
                  O(o, (e.adler >> 24) & 255),
                  O(o, 255 & e.total_in),
                  O(o, (e.total_in >> 8) & 255),
                  O(o, (e.total_in >> 16) & 255),
                  O(o, (e.total_in >> 24) & 255))
                : (M(o, e.adler >>> 16), M(o, 65535 & e.adler)),
              T(e),
              0 < o.wrap && (o.wrap = -o.wrap),
              0 !== o.pending ? p : 1);
        }),
        (t.deflateEnd = function(e) {
          var t;
          return e && e.state
            ? (t = e.state.status) !== E &&
              69 !== t &&
              73 !== t &&
              91 !== t &&
              103 !== t &&
              t !== S &&
              666 !== t
              ? v(e, f)
              : ((e.state = null), t === S ? v(e, -3) : p)
            : f;
        }),
        (t.deflateSetDictionary = function(e, t) {
          var r,
            o,
            n,
            s,
            i,
            a,
            g,
            u,
            l = t.length;
          if (!e || !e.state) return f;
          if (
            2 === (s = (r = e.state).wrap) ||
            (1 === s && r.status !== E) ||
            r.lookahead
          )
            return f;
          for (
            1 === s && (e.adler = h(e.adler, t, l, 0)),
              r.wrap = 0,
              l >= r.w_size &&
                (0 === s &&
                  (I(r.head),
                  (r.strstart = 0),
                  (r.block_start = 0),
                  (r.insert = 0)),
                (u = new c.Buf8(r.w_size)),
                c.arraySet(u, t, l - r.w_size, r.w_size, 0),
                (t = u),
                (l = r.w_size)),
              i = e.avail_in,
              a = e.next_in,
              g = e.input,
              e.avail_in = l,
              e.next_in = 0,
              e.input = t,
              x(r);
            r.lookahead >= m;

          ) {
            for (
              o = r.strstart, n = r.lookahead - (m - 1);
              (r.ins_h =
                ((r.ins_h << r.hash_shift) ^ r.window[o + m - 1]) &
                r.hash_mask),
                (r.prev[o & r.w_mask] = r.head[r.ins_h]),
                (r.head[r.ins_h] = o),
                o++,
                --n;

            );
            (r.strstart = o), (r.lookahead = m - 1), x(r);
          }
          return (
            (r.strstart += r.lookahead),
            (r.block_start = r.strstart),
            (r.insert = r.lookahead),
            (r.lookahead = 0),
            (r.match_length = r.prev_length = m - 1),
            (r.match_available = 0),
            (e.next_in = a),
            (e.input = g),
            (e.avail_in = i),
            (r.wrap = s),
            p
          );
        }),
        (t.deflateInfo = "pako deflate (from Nodeca project)");
    },
    "vn/o": function(e, t, r) {
      "use strict";
      var o =
        "undefined" != typeof Uint8Array &&
        "undefined" != typeof Uint16Array &&
        "undefined" != typeof Int32Array;
      (t.assign = function(e) {
        for (
          var t, r, o = Array.prototype.slice.call(arguments, 1);
          o.length;

        ) {
          var n = o.shift();
          if (n) {
            if ("object" != typeof n)
              throw new TypeError(n + "must be non-object");
            for (var s in n)
              (t = n),
                (r = s),
                Object.prototype.hasOwnProperty.call(t, r) && (e[s] = n[s]);
          }
        }
        return e;
      }),
        (t.shrinkBuf = function(e, t) {
          return e.length === t
            ? e
            : e.subarray
            ? e.subarray(0, t)
            : ((e.length = t), e);
        });
      var n = {
          arraySet: function(e, t, r, o, n) {
            if (t.subarray && e.subarray) e.set(t.subarray(r, r + o), n);
            else for (var s = 0; s < o; s++) e[n + s] = t[r + s];
          },
          flattenChunks: function(e) {
            var t, r, o, n, s, i;
            for (t = o = 0, r = e.length; t < r; t++) o += e[t].length;
            for (i = new Uint8Array(o), t = n = 0, r = e.length; t < r; t++)
              (s = e[t]), i.set(s, n), (n += s.length);
            return i;
          }
        },
        s = {
          arraySet: function(e, t, r, o, n) {
            for (var s = 0; s < o; s++) e[n + s] = t[r + s];
          },
          flattenChunks: function(e) {
            return [].concat.apply([], e);
          }
        };
      (t.setTyped = function(e) {
        e
          ? ((t.Buf8 = Uint8Array),
            (t.Buf16 = Uint16Array),
            (t.Buf32 = Int32Array),
            t.assign(t, n))
          : ((t.Buf8 = Array),
            (t.Buf16 = Array),
            (t.Buf32 = Array),
            t.assign(t, s));
      }),
        t.setTyped(o);
    },
    yDR0: function(e, t, r) {
      "use strict";
      e.exports = function(e, t, r, o) {
        for (
          var n = (65535 & e) | 0, s = ((e >>> 16) & 65535) | 0, i = 0;
          0 !== r;

        ) {
          for (
            r -= i = 2e3 < r ? 2e3 : r;
            (s = (s + (n = (n + t[o++]) | 0)) | 0), --i;

          );
          (n %= 65521), (s %= 65521);
        }
        return n | (s << 16) | 0;
      };
    }
  }
]);
