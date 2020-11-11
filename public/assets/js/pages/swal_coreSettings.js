/*!
 * Codebase - v3.4.0
 * @author pixelcave - https://pixelcave.com
 * Copyright (c) 2020
 */
! function(e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(r, o, function(n) {
                return e[n]
            }.bind(null, o));
        return r
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 38)
}({
    38: function(e, n, t) {
        e.exports = t(39)
    },
    39: function(e, n) {
        function t(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var r = function() {
            function e() {
                ! function(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var n, r, o;
            return n = e, o = [{
                key: "barsRandomize",
                value: function() {
                    jQuery(".js-bar-randomize").on("click", (function(e) {
                        jQuery(e.currentTarget).parents(".block").find(".progress-bar").each((function(e, n) {
                            var t = jQuery(n),
                                r = Math.floor(91 * Math.random() + 10);
                            t.css("width", r + "%"), jQuery(".progress-bar-label", t).html(r + "%")
                        }))
                    }))
                }
            }, {
                key: "sweetAlert2",
                value: function() {
                    var e = Swal.mixin({
                        buttonsStyling: !1,
                        customClass: {
                            confirmButton: "btn btn-alt-success m-5",
                            cancelButton: "btn btn-alt-danger m-5",
                            input: "form-control"
                        }
                    });
                    jQuery(".js-swal-alert").on("click", (function(n) {
                        e.fire("Hi, this is a simple alert!")
                    })), jQuery(".js-swal-success").on("click", (function(n) {
                        e.fire("Success", "Everything updated perfectly!", "success")
                    })), jQuery(".js-swal-info").on("click", (function(n) {
                        e.fire("Info", "Just an informational modal!", "info")
                    })), jQuery(".js-swal-warning").on("click", (function(n) {
                        e.fire("Warning", "Something needs your attention!", "warning")
                    })), jQuery(".js-swal-error").on("click", (function(n) {
                        e.fire("Oops...", "Something went wrong!", "error")
                    })), jQuery(".js-swal-question").on("click", (function(n) {
                        e.fire("Question", "Are you sure?", "question")
                    })), jQuery(".js-swal-confirm").on("click", (function(n) {
                        e.fire({
                            title: "Are you sure?",
                            text: "You will not be able to recover this imaginary file!",
                            icon: "warning",
                            showCancelButton: !0,
                            customClass: {
                                confirmButton: "btn btn-alt-danger m-1",
                                cancelButton: "btn btn-alt-secondary m-1"
                            },
                            confirmButtonText: "Yes, delete it!",
                            html: !1,
                            preConfirm: function(e) {
                                return new Promise((function(e) {
                                    setTimeout((function() {
                                        e()
                                    }), 50)
                                }))
                            }
                        }).then((function(n) {
                            n.value ? e.fire("Deleted!", "Your imaginary file has been deleted.", "success") : "cancel" === n.dismiss && e.fire("Cancelled", "Your imaginary file is safe :)", "error")
                        }))
                    }))
                }
            }, {
                key: "init",
                value: function() {
                    this.barsRandomize(), this.sweetAlert2()
                }
            }], (r = null) && t(n.prototype, r), o && t(n, o), e
        }();
        jQuery((function() {
            r.init()
        }))
    }
});