import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, t as text, h as claim_text, m as insert_dev, C as set_data_dev, f as detach_dev, e as element, a as space, c as claim_element, b as children, g as claim_space, j as attr_dev, k as add_location, o as append_dev, p as listen_dev, n as noop, M as run_all, N as set_input_value, O as to_number, D as empty, P as destroy_each, Q as set_style, J as group_outros, z as transition_out, K as check_outros, y as transition_in, q as create_slot, w as get_slot_context, x as get_slot_changes, R as onMount, r as create_component, u as claim_component, v as mount_component, A as destroy_component, T as HtmlTag, U as prevent_default, E as query_selector_all } from './index.279dccfd.js';
import { c as createCommonjsModule, a as commonjsGlobal, b as commonjsRequire, d as calculatePercent, o as octicons } from './index.a9aa74f7.js';

var moment = createCommonjsModule(function (module, exports) {
(function (global, factory) {
     module.exports = factory() ;
}(commonjsGlobal, (function () {
    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && ('object' !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = commonjsRequire;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));
});

/* src/components/SongBeatCalculator.svelte generated by Svelte v3.17.3 */

const file = "src/components/SongBeatCalculator.svelte";

// (64:6) {#if beatCounter}
function create_if_block(ctx) {
	let t0;
	let t1;
	let t2;
	let t3_value = (/*beatCounter*/ ctx[1] == 1 ? "" : "s") + "";
	let t3;
	let t4;
	let t5;
	let t6;

	const block = {
		c: function create() {
			t0 = text("Sampled ");
			t1 = text(/*beatCounter*/ ctx[1]);
			t2 = text(" time");
			t3 = text(t3_value);
			t4 = text(", average bpm is ");
			t5 = text(/*totalBpm*/ ctx[2]);
			t6 = text(".");
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Sampled ");
			t1 = claim_text(nodes, /*beatCounter*/ ctx[1]);
			t2 = claim_text(nodes, " time");
			t3 = claim_text(nodes, t3_value);
			t4 = claim_text(nodes, ", average bpm is ");
			t5 = claim_text(nodes, /*totalBpm*/ ctx[2]);
			t6 = claim_text(nodes, ".");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, t4, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, t6, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*beatCounter*/ 2) set_data_dev(t1, /*beatCounter*/ ctx[1]);
			if (dirty & /*beatCounter*/ 2 && t3_value !== (t3_value = (/*beatCounter*/ ctx[1] == 1 ? "" : "s") + "")) set_data_dev(t3, t3_value);
			if (dirty & /*totalBpm*/ 4) set_data_dev(t5, /*totalBpm*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(t6);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(64:6) {#if beatCounter}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div5;
	let div0;
	let t0;
	let t1;
	let div4;
	let h3;
	let t2;
	let t3;
	let t4;
	let button0;
	let t5;
	let t6;
	let p;
	let small;
	let t7;
	let t8;
	let div3;
	let div1;
	let t9;
	let t10;
	let t11;
	let div2;
	let button1;
	let t12;
	let dispose;
	let if_block = /*beatCounter*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			div5 = element("div");
			div0 = element("div");
			t0 = text("Song Beat Calculator");
			t1 = space();
			div4 = element("div");
			h3 = element("h3");
			t2 = text(/*totalBpm*/ ctx[2]);
			t3 = text(" BPM");
			t4 = space();
			button0 = element("button");
			t5 = text("Beat");
			t6 = space();
			p = element("p");
			small = element("small");
			t7 = text("Start hitting the beat button to the beat of a song to calculate the song's BPM.");
			t8 = space();
			div3 = element("div");
			div1 = element("div");
			t9 = text(/*message*/ ctx[0]);
			t10 = space();
			if (if_block) if_block.c();
			t11 = space();
			div2 = element("div");
			button1 = element("button");
			t12 = text("Reset");
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Song Beat Calculator");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			h3 = claim_element(div4_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, /*totalBpm*/ ctx[2]);
			t3 = claim_text(h3_nodes, " BPM");
			h3_nodes.forEach(detach_dev);
			t4 = claim_space(div4_nodes);
			button0 = claim_element(div4_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Beat");
			button0_nodes.forEach(detach_dev);
			t6 = claim_space(div4_nodes);
			p = claim_element(div4_nodes, "P", { class: true });
			var p_nodes = children(p);
			small = claim_element(p_nodes, "SMALL", { class: true });
			var small_nodes = children(small);
			t7 = claim_text(small_nodes, "Start hitting the beat button to the beat of a song to calculate the song's BPM.");
			small_nodes.forEach(detach_dev);
			p_nodes.forEach(detach_dev);
			t8 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t9 = claim_text(div1_nodes, /*message*/ ctx[0]);
			t10 = claim_space(div1_nodes);
			if (if_block) if_block.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t11 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			button1 = claim_element(div2_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t12 = claim_text(button1_nodes, "Reset");
			button1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-header");
			add_location(div0, file, 50, 0, 936);
			attr_dev(h3, "class", "card-title text-white text-center py-5");
			add_location(h3, file, 55, 4, 1022);
			attr_dev(button0, "class", "btn btn-primary btn-lg p-4");
			add_location(button0, file, 56, 4, 1097);
			attr_dev(small, "class", "text-info");
			add_location(small, file, 57, 30, 1200);
			attr_dev(p, "class", "card-text py-3");
			add_location(p, file, 57, 4, 1174);
			attr_dev(div1, "class", "col text-muted small");
			add_location(div1, file, 61, 4, 1346);
			attr_dev(button1, "class", "btn btn-secondary btn-sm");
			add_location(button1, file, 68, 4, 1565);
			attr_dev(div2, "class", "col text-right");
			add_location(div2, file, 67, 4, 1532);
			attr_dev(div3, "class", "row");
			add_location(div3, file, 60, 4, 1324);
			attr_dev(div4, "class", "card-body");
			add_location(div4, file, 53, 1, 993);
			attr_dev(div5, "class", "card text-white bg-dark shadow");
			add_location(div5, file, 49, 0, 891);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div0);
			append_dev(div0, t0);
			append_dev(div5, t1);
			append_dev(div5, div4);
			append_dev(div4, h3);
			append_dev(h3, t2);
			append_dev(h3, t3);
			append_dev(div4, t4);
			append_dev(div4, button0);
			append_dev(button0, t5);
			append_dev(div4, t6);
			append_dev(div4, p);
			append_dev(p, small);
			append_dev(small, t7);
			append_dev(div4, t8);
			append_dev(div4, div3);
			append_dev(div3, div1);
			append_dev(div1, t9);
			append_dev(div1, t10);
			if (if_block) if_block.m(div1, null);
			append_dev(div3, t11);
			append_dev(div3, div2);
			append_dev(div2, button1);
			append_dev(button1, t12);

			dispose = [
				listen_dev(button0, "click", /*beat*/ ctx[3], false, false, false),
				listen_dev(button1, "click", /*reset*/ ctx[4], false, false, false)
			];
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*totalBpm*/ 4) set_data_dev(t2, /*totalBpm*/ ctx[2]);
			if (dirty & /*message*/ 1) set_data_dev(t9, /*message*/ ctx[0]);

			if (/*beatCounter*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div1, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
			if (if_block) if_block.d();
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let message = "";
	let beatCounter = 0;
	let averageTotal = 0;
	let totalBpm = 0;
	let firstTime = 0;
	let lastTime = 0;
	let timeoutId = null;

	function beat() {
		$$invalidate(0, message = "");
		if (timeoutId) clearTimeout(timeoutId);

		timeoutId = setTimeout(
			function () {
				reset();
			},
			3000
		);

		let currentTime = new Date().getTime();
		let currentValue = 60000 * beatCounter / (currentTime - firstTime);

		if (beatCounter == 0) {
			averageTotal = 100;
			$$invalidate(2, totalBpm = 100);
			firstTime = currentTime;
			$$invalidate(1, beatCounter = 1);
		} else {
			averageTotal = Math.round(currentValue * 100) / 100;
			$$invalidate(2, totalBpm = Math.round(currentValue));
			$$invalidate(1, beatCounter++, beatCounter);
		}

		lastTime = currentTime;
	}

	function reset() {
		$$invalidate(0, message = `Autoreset. Bpm value was ${totalBpm}.`);
		$$invalidate(1, beatCounter = 0);
		averageTotal = 0;
		$$invalidate(2, totalBpm = 0);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("message" in $$props) $$invalidate(0, message = $$props.message);
		if ("beatCounter" in $$props) $$invalidate(1, beatCounter = $$props.beatCounter);
		if ("averageTotal" in $$props) averageTotal = $$props.averageTotal;
		if ("totalBpm" in $$props) $$invalidate(2, totalBpm = $$props.totalBpm);
		if ("firstTime" in $$props) firstTime = $$props.firstTime;
		if ("lastTime" in $$props) lastTime = $$props.lastTime;
		if ("timeoutId" in $$props) timeoutId = $$props.timeoutId;
	};

	return [message, beatCounter, totalBpm, beat, reset];
}

class SongBeatCalculator extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SongBeatCalculator",
			options,
			id: create_fragment.name
		});
	}
}

var sprintf = createCommonjsModule(function (module, exports) {
/* global window, exports, define */

!function() {

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    };

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign;
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i];
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i]; // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor];
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]];
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no];
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++];
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg();
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0;
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2);
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10));
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10);
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8);
                        break
                    case 's':
                        arg = String(arg);
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 't':
                        arg = String(!!arg);
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0;
                        break
                    case 'v':
                        arg = arg.valueOf();
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg);
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16);
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg;
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-';
                        arg = arg.toString().replace(re.sign, '');
                    }
                    else {
                        sign = '';
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' ';
                    pad_length = ph.width - (sign + arg).length;
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : '';
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg);
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null);

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0;
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0]);
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%');
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1;
                    var field_list = [], replacement_field = match[2], field_match = [];
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1]);
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1]);
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1]);
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list;
                }
                else {
                    arg_names |= 2;
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                );
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length);
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    {
        exports['sprintf'] = sprintf;
        exports['vsprintf'] = vsprintf;
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf;
        window['vsprintf'] = vsprintf;
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line
});

/* src/components/SongTempoChangeCalculator.svelte generated by Svelte v3.17.3 */
const file$1 = "src/components/SongTempoChangeCalculator.svelte";

// (98:9) {:else}
function create_else_block(ctx) {
	let div1;
	let div0;
	let t0_value = /*printf*/ ctx[4]("%.2f", (/*adjustment*/ ctx[3] - 1) * 100) + "";
	let t0;
	let t1;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t0 = text(t0_value);
			t1 = text("%");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true, role: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, t0_value);
			t1 = claim_text(div0_nodes, "%");
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "alert alert-primary shadow text-center");
			attr_dev(div0, "role", "alert");
			add_location(div0, file$1, 100, 9, 3937);
			attr_dev(div1, "class", "card-text");
			add_location(div1, file$1, 99, 9, 3904);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adjustment*/ 8 && t0_value !== (t0_value = /*printf*/ ctx[4]("%.2f", (/*adjustment*/ ctx[3] - 1) * 100) + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(98:9) {:else}",
		ctx
	});

	return block;
}

// (86:6) {#if ffmpeg}
function create_if_block$1(ctx) {
	let div1;
	let div0;
	let t0;
	let span0;
	let t1;
	let t2;
	let strong0;
	let t3;
	let t4;
	let span1;
	let t5;
	let t6;
	let t7;
	let t8;
	let p0;
	let strong1;
	let t9;
	let t10;
	let a0;
	let t11;
	let t12;
	let p1;
	let strong2;
	let t13;
	let t14;
	let a1;
	let t15;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t0 = text("ffmpeg -i ");
			span0 = element("span");
			t1 = text("input-file.mp3");
			t2 = text(" -af atempo=");
			strong0 = element("strong");
			t3 = text(/*adjustment*/ ctx[3]);
			t4 = space();
			span1 = element("span");
			t5 = text("output-file-");
			t6 = text(/*target*/ ctx[2]);
			t7 = text(".mp3");
			t8 = space();
			p0 = element("p");
			strong1 = element("strong");
			t9 = text("-af");
			t10 = text(" Simple filtergraphs are configured with the per-stream -filter option (with -vf and -af aliases for video and audio respectively). ");
			a0 = element("a");
			t11 = text("»");
			t12 = space();
			p1 = element("p");
			strong2 = element("strong");
			t13 = text("atempo");
			t14 = text(" Adjust audio tempo. The filter accepts exactly one parameter, the audio tempo. If not specified then the filter will assume nominal 1.0 tempo. Tempo must be in the [0.5, 100.0] range. Note that tempo greater than 2 will skip some samples rather than blend them in. ");
			a1 = element("a");
			t15 = text("»");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "ffmpeg -i ");
			span0 = claim_element(div0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t1 = claim_text(span0_nodes, "input-file.mp3");
			span0_nodes.forEach(detach_dev);
			t2 = claim_text(div0_nodes, " -af atempo=");
			strong0 = claim_element(div0_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t3 = claim_text(strong0_nodes, /*adjustment*/ ctx[3]);
			strong0_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			span1 = claim_element(div0_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t5 = claim_text(span1_nodes, "output-file-");
			t6 = claim_text(span1_nodes, /*target*/ ctx[2]);
			t7 = claim_text(span1_nodes, ".mp3");
			span1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			p0 = claim_element(nodes, "P", { class: true });
			var p0_nodes = children(p0);
			strong1 = claim_element(p0_nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t9 = claim_text(strong1_nodes, "-af");
			strong1_nodes.forEach(detach_dev);
			t10 = claim_text(p0_nodes, " Simple filtergraphs are configured with the per-stream -filter option (with -vf and -af aliases for video and audio respectively). ");
			a0 = claim_element(p0_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t11 = claim_text(a0_nodes, "»");
			a0_nodes.forEach(detach_dev);
			p0_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			p1 = claim_element(nodes, "P", { class: true });
			var p1_nodes = children(p1);
			strong2 = claim_element(p1_nodes, "STRONG", {});
			var strong2_nodes = children(strong2);
			t13 = claim_text(strong2_nodes, "atempo");
			strong2_nodes.forEach(detach_dev);
			t14 = claim_text(p1_nodes, " Adjust audio tempo. The filter accepts exactly one parameter, the audio tempo. If not specified then the filter will assume nominal 1.0 tempo. Tempo must be in the [0.5, 100.0] range. Note that tempo greater than 2 will skip some samples rather than blend them in. ");
			a1 = claim_element(p1_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			t15 = claim_text(a1_nodes, "»");
			a1_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "text-secondary");
			add_location(span0, file$1, 89, 18, 3021);
			add_location(strong0, file$1, 89, 80, 3083);
			attr_dev(span1, "class", "text-secondary");
			add_location(span1, file$1, 89, 110, 3113);
			attr_dev(div0, "class", "border border secondary rounded p-3 mb-3");
			add_location(div0, file$1, 88, 6, 2948);
			attr_dev(div1, "class", "card-text");
			add_location(div1, file$1, 86, 6, 2917);
			add_location(strong1, file$1, 95, 48, 3251);
			attr_dev(a0, "href", "https://ffmpeg.org/ffmpeg.html#Filtering");
			add_location(a0, file$1, 95, 200, 3403);
			attr_dev(p0, "class", "card-text small text-secondary");
			add_location(p0, file$1, 95, 6, 3209);
			add_location(strong2, file$1, 96, 48, 3517);
			attr_dev(a1, "href", "https://ffmpeg.org/ffmpeg-filters.html#atempo");
			add_location(a1, file$1, 96, 337, 3806);
			attr_dev(p1, "class", "card-text small text-secondary");
			add_location(p1, file$1, 96, 6, 3475);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, t0);
			append_dev(div0, span0);
			append_dev(span0, t1);
			append_dev(div0, t2);
			append_dev(div0, strong0);
			append_dev(strong0, t3);
			append_dev(div0, t4);
			append_dev(div0, span1);
			append_dev(span1, t5);
			append_dev(span1, t6);
			append_dev(span1, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, strong1);
			append_dev(strong1, t9);
			append_dev(p0, t10);
			append_dev(p0, a0);
			append_dev(a0, t11);
			insert_dev(target, t12, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, strong2);
			append_dev(strong2, t13);
			append_dev(p1, t14);
			append_dev(p1, a1);
			append_dev(a1, t15);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*adjustment*/ 8) set_data_dev(t3, /*adjustment*/ ctx[3]);
			if (dirty & /*target*/ 4) set_data_dev(t6, /*target*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(p1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(86:6) {#if ffmpeg}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div10;
	let div0;
	let t0;
	let t1;
	let div9;
	let div6;
	let div5;
	let div2;
	let div1;
	let label0;
	let t2;
	let abbr0;
	let t3;
	let t4;
	let input0;
	let input0_updating = false;
	let t5;
	let div4;
	let div3;
	let label1;
	let t6;
	let abbr1;
	let t7;
	let t8;
	let input1;
	let input1_updating = false;
	let t9;
	let div8;
	let div7;
	let input2;
	let t10;
	let label2;
	let t11;
	let a;
	let t12;
	let t13;
	let t14;
	let dispose;

	function input0_input_handler() {
		input0_updating = true;
		/*input0_input_handler*/ ctx[5].call(input0);
	}

	function input1_input_handler() {
		input1_updating = true;
		/*input1_input_handler*/ ctx[6].call(input1);
	}

	function select_block_type(ctx, dirty) {
		if (/*ffmpeg*/ ctx[0]) return create_if_block$1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div10 = element("div");
			div0 = element("div");
			t0 = text("Calculate Song Tempo Change");
			t1 = space();
			div9 = element("div");
			div6 = element("div");
			div5 = element("div");
			div2 = element("div");
			div1 = element("div");
			label0 = element("label");
			t2 = text("Original ");
			abbr0 = element("abbr");
			t3 = text("BPM");
			t4 = space();
			input0 = element("input");
			t5 = space();
			div4 = element("div");
			div3 = element("div");
			label1 = element("label");
			t6 = text("Target ");
			abbr1 = element("abbr");
			t7 = text("BPM");
			t8 = space();
			input1 = element("input");
			t9 = space();
			div8 = element("div");
			div7 = element("div");
			input2 = element("input");
			t10 = space();
			label2 = element("label");
			t11 = text("Show ");
			a = element("a");
			t12 = text("FFmpeg");
			t13 = text(" Command");
			t14 = space();
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div10 = claim_element(nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div0 = claim_element(div10_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Calculate Song Tempo Change");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div6 = claim_element(div9_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			label0 = claim_element(div1_nodes, "LABEL", { class: true, for: true });
			var label0_nodes = children(label0);
			t2 = claim_text(label0_nodes, "Original ");
			abbr0 = claim_element(label0_nodes, "ABBR", { title: true });
			var abbr0_nodes = children(abbr0);
			t3 = claim_text(abbr0_nodes, "BPM");
			abbr0_nodes.forEach(detach_dev);
			label0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);

			input0 = claim_element(div1_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t5 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label1 = claim_element(div3_nodes, "LABEL", { class: true, for: true });
			var label1_nodes = children(label1);
			t6 = claim_text(label1_nodes, "Target ");
			abbr1 = claim_element(label1_nodes, "ABBR", { title: true });
			var abbr1_nodes = children(abbr1);
			t7 = claim_text(abbr1_nodes, "BPM");
			abbr1_nodes.forEach(detach_dev);
			label1_nodes.forEach(detach_dev);
			t8 = claim_space(div3_nodes);

			input1 = claim_element(div3_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t9 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			input2 = claim_element(div7_nodes, "INPUT", { class: true, type: true, id: true });
			t10 = claim_space(div7_nodes);
			label2 = claim_element(div7_nodes, "LABEL", { class: true, for: true });
			var label2_nodes = children(label2);
			t11 = claim_text(label2_nodes, "Show ");
			a = claim_element(label2_nodes, "A", { href: true, rel: true, target: true });
			var a_nodes = children(a);
			t12 = claim_text(a_nodes, "FFmpeg");
			a_nodes.forEach(detach_dev);
			t13 = claim_text(label2_nodes, " Command");
			label2_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t14 = claim_space(div9_nodes);
			if_block.l(div9_nodes);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-header");
			add_location(div0, file$1, 34, 0, 665);
			attr_dev(abbr0, "title", "Beats Per Minute");
			add_location(abbr0, file$1, 45, 61, 1284);
			attr_dev(label0, "class", "small");
			attr_dev(label0, "for", "originalBeat");
			add_location(label0, file$1, 45, 12, 1235);
			attr_dev(input0, "type", "number");
			attr_dev(input0, "id", "originalBeat");
			attr_dev(input0, "min", "10");
			attr_dev(input0, "max", "900");
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "placeholder", "original");
			add_location(input0, file$1, 46, 12, 1346);
			attr_dev(div1, "class", "form-group px-3");
			add_location(div1, file$1, 44, 10, 1193);
			attr_dev(div2, "class", "col-md-6 text-center");
			add_location(div2, file$1, 43, 10, 1148);
			attr_dev(abbr1, "title", "Beats Per Minute");
			add_location(abbr1, file$1, 51, 57, 1647);
			attr_dev(label1, "class", "small");
			attr_dev(label1, "for", "targetBeat");
			add_location(label1, file$1, 51, 12, 1602);
			attr_dev(input1, "type", "number");
			attr_dev(input1, "id", "targetBeat");
			attr_dev(input1, "min", "10");
			attr_dev(input1, "max", "900");
			attr_dev(input1, "class", "form-control");
			attr_dev(input1, "placeholder", "target");
			add_location(input1, file$1, 52, 12, 1709);
			attr_dev(div3, "class", "form-group px-3");
			add_location(div3, file$1, 50, 10, 1560);
			attr_dev(div4, "class", "col-md-6 text-center");
			add_location(div4, file$1, 49, 10, 1515);
			attr_dev(div5, "class", "row no-gutters");
			add_location(div5, file$1, 42, 8, 1109);
			attr_dev(div6, "class", "card-text");
			add_location(div6, file$1, 41, 6, 1077);
			attr_dev(input2, "class", "form-check-input");
			attr_dev(input2, "type", "checkbox");
			attr_dev(input2, "id", "ffmpegMode");
			add_location(input2, file$1, 60, 8, 1976);
			attr_dev(a, "href", "https://ffmpeg.org/");
			attr_dev(a, "rel", "noopener noreferrer");
			attr_dev(a, "target", "_blank");
			add_location(a, file$1, 62, 15, 2142);
			attr_dev(label2, "class", "form-check-label small");
			attr_dev(label2, "for", "ffmpegMode");
			add_location(label2, file$1, 61, 8, 2071);
			attr_dev(div7, "class", "form-check mb-3");
			add_location(div7, file$1, 59, 6, 1938);
			attr_dev(div8, "class", "card-text text-center");
			add_location(div8, file$1, 58, 6, 1896);
			attr_dev(div9, "class", "card-body");
			add_location(div9, file$1, 37, 1, 729);
			attr_dev(div10, "class", "card text-white bg-dark shadow");
			add_location(div10, file$1, 33, 0, 620);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div10, anchor);
			append_dev(div10, div0);
			append_dev(div0, t0);
			append_dev(div10, t1);
			append_dev(div10, div9);
			append_dev(div9, div6);
			append_dev(div6, div5);
			append_dev(div5, div2);
			append_dev(div2, div1);
			append_dev(div1, label0);
			append_dev(label0, t2);
			append_dev(label0, abbr0);
			append_dev(abbr0, t3);
			append_dev(div1, t4);
			append_dev(div1, input0);
			set_input_value(input0, /*original*/ ctx[1]);
			append_dev(div5, t5);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, label1);
			append_dev(label1, t6);
			append_dev(label1, abbr1);
			append_dev(abbr1, t7);
			append_dev(div3, t8);
			append_dev(div3, input1);
			set_input_value(input1, /*target*/ ctx[2]);
			append_dev(div9, t9);
			append_dev(div9, div8);
			append_dev(div8, div7);
			append_dev(div7, input2);
			input2.checked = /*ffmpeg*/ ctx[0];
			append_dev(div7, t10);
			append_dev(div7, label2);
			append_dev(label2, t11);
			append_dev(label2, a);
			append_dev(a, t12);
			append_dev(label2, t13);
			append_dev(div9, t14);
			if_block.m(div9, null);

			dispose = [
				listen_dev(input0, "input", input0_input_handler),
				listen_dev(input1, "input", input1_input_handler),
				listen_dev(input2, "change", /*input2_change_handler*/ ctx[7])
			];
		},
		p: function update(ctx, [dirty]) {
			if (!input0_updating && dirty & /*original*/ 2) {
				set_input_value(input0, /*original*/ ctx[1]);
			}

			input0_updating = false;

			if (!input1_updating && dirty & /*target*/ 4) {
				set_input_value(input1, /*target*/ ctx[2]);
			}

			input1_updating = false;

			if (dirty & /*ffmpeg*/ 1) {
				input2.checked = /*ffmpeg*/ ctx[0];
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div9, null);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div10);
			if_block.d();
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function songTempoChange(originalBpm, targetBpm) {
	if (typeof originalBpm !== "number") return 1;
	if (originalBpm > 900) return 1;
	if (originalBpm < 10) return 1;
	if (typeof targetBpm !== "number") return 1;
	if (targetBpm > 900) return 1;
	if (targetBpm < 10) return 1;
	const difference = targetBpm - originalBpm;
	return difference / originalBpm + 1;
}

function instance$1($$self, $$props, $$invalidate) {
	const printf = sprintf.sprintf;
	let ffmpeg = true;
	let original = 130;
	let target = 160;

	function input0_input_handler() {
		original = to_number(this.value);
		$$invalidate(1, original);
	}

	function input1_input_handler() {
		target = to_number(this.value);
		$$invalidate(2, target);
	}

	function input2_change_handler() {
		ffmpeg = this.checked;
		$$invalidate(0, ffmpeg);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("ffmpeg" in $$props) $$invalidate(0, ffmpeg = $$props.ffmpeg);
		if ("original" in $$props) $$invalidate(1, original = $$props.original);
		if ("target" in $$props) $$invalidate(2, target = $$props.target);
		if ("adjustment" in $$props) $$invalidate(3, adjustment = $$props.adjustment);
	};

	let adjustment;

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*original, target*/ 6) {
			 $$invalidate(3, adjustment = songTempoChange(original, target).toPrecision(3));
		}
	};

	return [
		ffmpeg,
		original,
		target,
		adjustment,
		printf,
		input0_input_handler,
		input1_input_handler,
		input2_change_handler
	];
}

class SongTempoChangeCalculator extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SongTempoChangeCalculator",
			options,
			id: create_fragment$1.name
		});
	}
}

var mainspring = createCommonjsModule(function (module) {
(function(){
  var CONSTANTS = {
    days: 1000 * 60 * 60 * 24,
    hours: 1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000
  };

  var Mainspring = function(date1, date2){
    if (date2 == null) {
      date2 = new Date();
    }

    return spellOut(diffBetweenTimes(date1, date2));
  };

  // Export for Node or browser
  if ( module !== null ? module.exports : void 0) {
    module.exports = Mainspring;
  } else {
    this.Mainspring = Mainspring;
  }

  function diffBetweenTimes(date1, date2) {
    var diff, future;

    if (date1 > date2) {
      diff = date1 - date2;
      future = true;
    } else {
      diff = date2 - date1;
      future = false;
    }

    return {
      ms: diff,
      future: future
    };
  }

  function extractTimeElement(time, value, constant) {
    var elapsed;
    if (time > constant) {
      elapsed = Math.floor(time / constant);
      time = time - (constant * elapsed);
    } else {
      elapsed = 0;
    }
    return {
      time: time,
      value: value,
      elapsed: elapsed
    };
  }
  function spellOut(timeDiff) {
    var constantName, constantValue, elapsed, output, ref, time, totalTime, value;
    output = {
      inFuture: timeDiff.future
    };
    totalTime = timeDiff.ms;
    for (constantName in CONSTANTS) {
      constantValue = CONSTANTS[constantName];
      ref = extractTimeElement(totalTime, constantName, constantValue), time = ref.time, value = ref.value, elapsed = ref.elapsed;
      totalTime = time;
      output[value] = elapsed;
    }
    return output;
  }
}).call(commonjsGlobal);
});

var solsticesAndEquinoxes = [{"year":2001,"spring":"2001-03-20T13:31:00.000Z","summer":"2001-06-21T07:38:00.000Z","fall":"2001-09-22T23:05:00.000Z","winter":"2001-12-21T19:22:00.000Z"},{"year":2002,"spring":"2002-03-20T19:16:00.000Z","summer":"2002-06-21T13:25:00.000Z","fall":"2002-09-23T04:56:00.000Z","winter":"2002-12-22T01:15:00.000Z"},{"year":2003,"spring":"2003-03-21T01:00:00.000Z","summer":"2003-06-21T19:11:00.000Z","fall":"2003-09-23T10:47:00.000Z","winter":"2003-12-22T07:04:00.000Z"},{"year":2004,"spring":"2004-03-20T06:49:00.000Z","summer":"2004-06-21T00:57:00.000Z","fall":"2004-09-22T16:30:00.000Z","winter":"2004-12-21T12:42:00.000Z"},{"year":2005,"spring":"2005-03-20T12:34:00.000Z","summer":"2005-06-21T06:46:00.000Z","fall":"2005-09-22T22:23:00.000Z","winter":"2005-12-21T18:35:00.000Z"},{"year":2006,"spring":"2006-03-20T18:25:00.000Z","summer":"2006-06-21T12:26:00.000Z","fall":"2006-09-23T04:04:00.000Z","winter":"2006-12-22T00:22:00.000Z"},{"year":2007,"spring":"2007-03-21T00:07:00.000Z","summer":"2007-06-21T18:06:00.000Z","fall":"2007-09-23T09:51:00.000Z","winter":"2007-12-22T06:08:00.000Z"},{"year":2008,"spring":"2008-03-20T05:49:00.000Z","summer":"2008-06-21T00:00:00.000Z","fall":"2008-09-22T15:45:00.000Z","winter":"2008-12-21T12:04:00.000Z"},{"year":2009,"spring":"2009-03-20T11:44:00.000Z","summer":"2009-06-21T05:45:00.000Z","fall":"2009-09-22T21:18:00.000Z","winter":"2009-12-21T17:47:00.000Z"},{"year":2010,"spring":"2010-03-20T17:32:00.000Z","summer":"2010-06-21T11:28:00.000Z","fall":"2010-09-23T03:09:00.000Z","winter":"2010-12-21T23:38:00.000Z"},{"year":2011,"spring":"2011-03-20T23:21:00.000Z","summer":"2011-06-21T17:16:00.000Z","fall":"2011-09-23T09:05:00.000Z","winter":"2011-12-22T05:30:00.000Z"},{"year":2012,"spring":"2012-03-20T05:15:00.000Z","summer":"2012-06-20T23:08:00.000Z","fall":"2012-09-22T14:49:00.000Z","winter":"2012-12-21T11:12:00.000Z"},{"year":2013,"spring":"2013-03-20T11:02:00.000Z","summer":"2013-06-21T05:04:00.000Z","fall":"2013-09-22T20:44:00.000Z","winter":"2013-12-21T17:11:00.000Z"},{"year":2014,"spring":"2014-03-20T16:57:00.000Z","summer":"2014-06-21T10:52:00.000Z","fall":"2014-09-23T02:30:00.000Z","winter":"2014-12-21T23:03:00.000Z"},{"year":2015,"spring":"2015-03-20T22:45:00.000Z","summer":"2015-06-21T16:38:00.000Z","fall":"2015-09-23T08:20:00.000Z","winter":"2015-12-22T04:48:00.000Z"},{"year":2016,"spring":"2016-03-20T04:31:00.000Z","summer":"2016-06-20T22:35:00.000Z","fall":"2016-09-22T14:21:00.000Z","winter":"2016-12-21T10:45:00.000Z"},{"year":2017,"spring":"2017-03-20T10:29:00.000Z","summer":"2017-06-21T04:25:00.000Z","fall":"2017-09-22T20:02:00.000Z","winter":"2017-12-21T16:29:00.000Z"},{"year":2018,"spring":"2018-03-20T16:15:00.000Z","summer":"2018-06-21T10:07:00.000Z","fall":"2018-09-23T01:54:00.000Z","winter":"2018-12-21T22:22:00.000Z"},{"year":2019,"spring":"2019-03-20T21:58:00.000Z","summer":"2019-06-21T15:54:00.000Z","fall":"2019-09-23T07:50:00.000Z","winter":"2019-12-22T04:19:00.000Z"},{"year":2020,"spring":"2020-03-20T03:50:00.000Z","summer":"2020-06-20T21:43:00.000Z","fall":"2020-09-22T13:31:00.000Z","winter":"2020-12-21T10:03:00.000Z"},{"year":2021,"spring":"2021-03-20T09:37:00.000Z","summer":"2021-06-21T03:32:00.000Z","fall":"2021-09-22T19:21:00.000Z","winter":"2021-12-21T15:59:00.000Z"},{"year":2022,"spring":"2022-03-20T15:33:00.000Z","summer":"2022-06-21T09:14:00.000Z","fall":"2022-09-23T01:04:00.000Z","winter":"2022-12-21T21:48:00.000Z"},{"year":2023,"spring":"2023-03-20T21:25:00.000Z","summer":"2023-06-21T14:58:00.000Z","fall":"2023-09-23T06:50:00.000Z","winter":"2023-12-22T03:28:00.000Z"},{"year":2024,"spring":"2024-03-20T03:07:00.000Z","summer":"2024-06-20T20:51:00.000Z","fall":"2024-09-22T12:44:00.000Z","winter":"2024-12-21T09:20:00.000Z"},{"year":2025,"spring":"2025-03-20T09:02:00.000Z","summer":"2025-06-21T02:42:00.000Z","fall":"2025-09-22T18:20:00.000Z","winter":"2025-12-21T15:03:00.000Z"},{"year":2026,"spring":"2026-03-20T14:46:00.000Z","summer":"2026-06-21T08:25:00.000Z","fall":"2026-09-23T00:06:00.000Z","winter":"2026-12-21T20:50:00.000Z"},{"year":2027,"spring":"2027-03-20T20:25:00.000Z","summer":"2027-06-21T14:11:00.000Z","fall":"2027-09-23T06:02:00.000Z","winter":"2027-12-22T02:43:00.000Z"},{"year":2028,"spring":"2028-03-20T02:17:00.000Z","summer":"2028-06-20T20:02:00.000Z","fall":"2028-09-22T11:45:00.000Z","winter":"2028-12-21T08:20:00.000Z"},{"year":2029,"spring":"2029-03-20T08:01:00.000Z","summer":"2029-06-21T01:48:00.000Z","fall":"2029-09-22T17:37:00.000Z","winter":"2029-12-21T14:14:00.000Z"},{"year":2030,"spring":"2030-03-20T13:51:00.000Z","summer":"2030-06-21T07:31:00.000Z","fall":"2030-09-22T23:27:00.000Z","winter":"2030-12-21T20:09:00.000Z"},{"year":2031,"spring":"2031-03-20T19:41:00.000Z","summer":"2031-06-21T13:17:00.000Z","fall":"2031-09-23T05:15:00.000Z","winter":"2031-12-22T01:56:00.000Z"},{"year":2032,"spring":"2032-03-20T01:23:00.000Z","summer":"2032-06-20T19:09:00.000Z","fall":"2032-09-22T11:11:00.000Z","winter":"2032-12-21T07:57:00.000Z"},{"year":2033,"spring":"2033-03-20T07:23:00.000Z","summer":"2033-06-21T01:01:00.000Z","fall":"2033-09-22T16:52:00.000Z","winter":"2033-12-21T13:45:00.000Z"},{"year":2034,"spring":"2034-03-20T13:18:00.000Z","summer":"2034-06-21T06:45:00.000Z","fall":"2034-09-22T22:41:00.000Z","winter":"2034-12-21T19:35:00.000Z"},{"year":2035,"spring":"2035-03-20T19:03:00.000Z","summer":"2035-06-21T12:33:00.000Z","fall":"2035-09-23T04:39:00.000Z","winter":"2035-12-22T01:31:00.000Z"},{"year":2036,"spring":"2036-03-20T01:02:00.000Z","summer":"2036-06-20T18:31:00.000Z","fall":"2036-09-22T10:23:00.000Z","winter":"2036-12-21T07:12:00.000Z"},{"year":2037,"spring":"2037-03-20T06:50:00.000Z","summer":"2037-06-21T00:22:00.000Z","fall":"2037-09-22T16:13:00.000Z","winter":"2037-12-21T13:08:00.000Z"},{"year":2038,"spring":"2038-03-20T12:40:00.000Z","summer":"2038-06-21T06:09:00.000Z","fall":"2038-09-22T22:02:00.000Z","winter":"2038-12-21T19:01:00.000Z"},{"year":2039,"spring":"2039-03-20T18:32:00.000Z","summer":"2039-06-21T11:58:00.000Z","fall":"2039-09-23T03:50:00.000Z","winter":"2039-12-22T00:41:00.000Z"},{"year":2040,"spring":"2040-03-20T00:11:00.000Z","summer":"2040-06-20T17:46:00.000Z","fall":"2040-09-22T09:44:00.000Z","winter":"2040-12-21T06:33:00.000Z"},{"year":2041,"spring":"2041-03-20T06:07:00.000Z","summer":"2041-06-20T23:37:00.000Z","fall":"2041-09-22T15:27:00.000Z","winter":"2041-12-21T12:19:00.000Z"},{"year":2042,"spring":"2042-03-20T11:53:00.000Z","summer":"2042-06-21T05:16:00.000Z","fall":"2042-09-22T21:11:00.000Z","winter":"2042-12-21T18:04:00.000Z"},{"year":2043,"spring":"2043-03-20T17:29:00.000Z","summer":"2043-06-21T10:59:00.000Z","fall":"2043-09-23T03:07:00.000Z","winter":"2043-12-22T00:02:00.000Z"},{"year":2044,"spring":"2044-03-19T23:20:00.000Z","summer":"2044-06-20T16:50:00.000Z","fall":"2044-09-22T08:47:00.000Z","winter":"2044-12-21T05:43:00.000Z"},{"year":2045,"spring":"2045-03-20T05:08:00.000Z","summer":"2045-06-20T22:34:00.000Z","fall":"2045-09-22T14:33:00.000Z","winter":"2045-12-21T11:36:00.000Z"},{"year":2046,"spring":"2046-03-20T10:58:00.000Z","summer":"2046-06-21T04:15:00.000Z","fall":"2046-09-22T20:22:00.000Z","winter":"2046-12-21T17:28:00.000Z"},{"year":2047,"spring":"2047-03-20T16:52:00.000Z","summer":"2047-06-21T10:02:00.000Z","fall":"2047-09-23T02:07:00.000Z","winter":"2047-12-21T23:07:00.000Z"},{"year":2048,"spring":"2048-03-19T22:34:00.000Z","summer":"2048-06-20T15:54:00.000Z","fall":"2048-09-22T08:01:00.000Z","winter":"2048-12-21T05:02:00.000Z"},{"year":2049,"spring":"2049-03-20T04:28:00.000Z","summer":"2049-06-20T21:47:00.000Z","fall":"2049-09-22T13:42:00.000Z","winter":"2049-12-21T10:51:00.000Z"},{"year":2050,"spring":"2050-03-20T10:20:00.000Z","summer":"2050-06-21T03:33:00.000Z","fall":"2050-09-22T19:29:00.000Z","winter":"2050-12-21T16:39:00.000Z"},{"year":2051,"spring":"2051-03-20T15:58:00.000Z","summer":"2051-06-21T09:17:00.000Z","fall":"2051-09-23T01:26:00.000Z","winter":"2051-12-21T22:33:00.000Z"},{"year":2052,"spring":"2052-03-19T21:56:00.000Z","summer":"2052-06-20T15:16:00.000Z","fall":"2052-09-22T07:16:00.000Z","winter":"2052-12-21T04:18:00.000Z"},{"year":2053,"spring":"2053-03-20T03:46:00.000Z","summer":"2053-06-20T21:03:00.000Z","fall":"2053-09-22T13:05:00.000Z","winter":"2053-12-21T10:09:00.000Z"},{"year":2054,"spring":"2054-03-20T09:35:00.000Z","summer":"2054-06-21T02:47:00.000Z","fall":"2054-09-22T19:00:00.000Z","winter":"2054-12-21T16:10:00.000Z"},{"year":2055,"spring":"2055-03-20T15:28:00.000Z","summer":"2055-06-21T08:39:00.000Z","fall":"2055-09-23T00:48:00.000Z","winter":"2055-12-21T21:56:00.000Z"},{"year":2056,"spring":"2056-03-19T21:11:00.000Z","summer":"2056-06-20T14:29:00.000Z","fall":"2056-09-22T06:40:00.000Z","winter":"2056-12-21T03:52:00.000Z"},{"year":2057,"spring":"2057-03-20T03:08:00.000Z","summer":"2057-06-20T20:19:00.000Z","fall":"2057-09-22T12:23:00.000Z","winter":"2057-12-21T09:42:00.000Z"},{"year":2058,"spring":"2058-03-20T09:04:00.000Z","summer":"2058-06-21T02:03:00.000Z","fall":"2058-09-22T18:07:00.000Z","winter":"2058-12-21T15:24:00.000Z"},{"year":2059,"spring":"2059-03-20T14:44:00.000Z","summer":"2059-06-21T07:47:00.000Z","fall":"2059-09-23T00:03:00.000Z","winter":"2059-12-21T21:18:00.000Z"},{"year":2060,"spring":"2060-03-19T20:37:00.000Z","summer":"2060-06-20T13:44:00.000Z","fall":"2060-09-22T05:47:00.000Z","winter":"2060-12-21T03:00:00.000Z"},{"year":2061,"spring":"2061-03-20T02:26:00.000Z","summer":"2061-06-20T19:33:00.000Z","fall":"2061-09-22T11:31:00.000Z","winter":"2061-12-21T08:49:00.000Z"},{"year":2062,"spring":"2062-03-20T08:07:00.000Z","summer":"2062-06-21T01:10:00.000Z","fall":"2062-09-22T17:19:00.000Z","winter":"2062-12-21T14:42:00.000Z"},{"year":2063,"spring":"2063-03-20T13:59:00.000Z","summer":"2063-06-21T07:02:00.000Z","fall":"2063-09-22T23:08:00.000Z","winter":"2063-12-21T20:22:00.000Z"},{"year":2064,"spring":"2064-03-19T19:40:00.000Z","summer":"2064-06-20T12:47:00.000Z","fall":"2064-09-22T04:58:00.000Z","winter":"2064-12-21T02:10:00.000Z"},{"year":2065,"spring":"2065-03-20T01:27:00.000Z","summer":"2065-06-20T18:31:00.000Z","fall":"2065-09-22T10:41:00.000Z","winter":"2065-12-21T07:59:00.000Z"},{"year":2066,"spring":"2066-03-20T07:19:00.000Z","summer":"2066-06-21T00:16:00.000Z","fall":"2066-09-22T16:27:00.000Z","winter":"2066-12-21T13:45:00.000Z"},{"year":2067,"spring":"2067-03-20T12:55:00.000Z","summer":"2067-06-21T05:56:00.000Z","fall":"2067-09-22T22:20:00.000Z","winter":"2067-12-21T19:44:00.000Z"},{"year":2068,"spring":"2068-03-19T18:51:00.000Z","summer":"2068-06-20T11:55:00.000Z","fall":"2068-09-22T04:09:00.000Z","winter":"2068-12-21T01:34:00.000Z"},{"year":2069,"spring":"2069-03-20T00:44:00.000Z","summer":"2069-06-20T17:40:00.000Z","fall":"2069-09-22T09:51:00.000Z","winter":"2069-12-21T07:21:00.000Z"},{"year":2070,"spring":"2070-03-20T06:35:00.000Z","summer":"2070-06-20T23:22:00.000Z","fall":"2070-09-22T15:45:00.000Z","winter":"2070-12-21T13:19:00.000Z"},{"year":2071,"spring":"2071-03-20T12:36:00.000Z","summer":"2071-06-21T05:21:00.000Z","fall":"2071-09-22T21:39:00.000Z","winter":"2071-12-21T19:05:00.000Z"},{"year":2072,"spring":"2072-03-19T18:19:00.000Z","summer":"2072-06-20T11:12:00.000Z","fall":"2072-09-22T03:26:00.000Z","winter":"2072-12-21T00:54:00.000Z"},{"year":2073,"spring":"2073-03-20T00:12:00.000Z","summer":"2073-06-20T17:06:00.000Z","fall":"2073-09-22T09:14:00.000Z","winter":"2073-12-21T06:50:00.000Z"},{"year":2074,"spring":"2074-03-20T06:09:00.000Z","summer":"2074-06-20T22:59:00.000Z","fall":"2074-09-22T15:04:00.000Z","winter":"2074-12-21T12:36:00.000Z"},{"year":2075,"spring":"2075-03-20T11:48:00.000Z","summer":"2075-06-21T04:41:00.000Z","fall":"2075-09-22T21:00:00.000Z","winter":"2075-12-21T18:28:00.000Z"},{"year":2076,"spring":"2076-03-19T17:37:00.000Z","summer":"2076-06-20T10:35:00.000Z","fall":"2076-09-22T02:48:00.000Z","winter":"2076-12-21T00:12:00.000Z"},{"year":2077,"spring":"2077-03-19T23:30:00.000Z","summer":"2077-06-20T16:23:00.000Z","fall":"2077-09-22T08:35:00.000Z","winter":"2077-12-21T06:00:00.000Z"},{"year":2078,"spring":"2078-03-20T05:11:00.000Z","summer":"2078-06-20T21:58:00.000Z","fall":"2078-09-22T14:25:00.000Z","winter":"2078-12-21T11:59:00.000Z"},{"year":2079,"spring":"2079-03-20T11:03:00.000Z","summer":"2079-06-21T03:51:00.000Z","fall":"2079-09-22T20:15:00.000Z","winter":"2079-12-21T17:46:00.000Z"},{"year":2080,"spring":"2080-03-19T16:43:00.000Z","summer":"2080-06-20T09:33:00.000Z","fall":"2080-09-22T01:55:00.000Z","winter":"2080-12-20T23:31:00.000Z"},{"year":2081,"spring":"2081-03-19T22:34:00.000Z","summer":"2081-06-20T15:16:00.000Z","fall":"2081-09-22T07:38:00.000Z","winter":"2081-12-21T05:22:00.000Z"},{"year":2082,"spring":"2082-03-20T04:32:00.000Z","summer":"2082-06-20T21:04:00.000Z","fall":"2082-09-22T13:24:00.000Z","winter":"2082-12-21T11:06:00.000Z"},{"year":2083,"spring":"2083-03-20T10:08:00.000Z","summer":"2083-06-21T02:41:00.000Z","fall":"2083-09-22T19:10:00.000Z","winter":"2083-12-21T16:51:00.000Z"},{"year":2084,"spring":"2084-03-19T15:58:00.000Z","summer":"2084-06-20T08:39:00.000Z","fall":"2084-09-22T00:58:00.000Z","winter":"2084-12-20T22:40:00.000Z"},{"year":2085,"spring":"2085-03-19T21:53:00.000Z","summer":"2085-06-20T14:33:00.000Z","fall":"2085-09-22T06:43:00.000Z","winter":"2085-12-21T04:29:00.000Z"},{"year":2086,"spring":"2086-03-20T03:36:00.000Z","summer":"2086-06-20T20:11:00.000Z","fall":"2086-09-22T12:33:00.000Z","winter":"2086-12-21T10:24:00.000Z"},{"year":2087,"spring":"2087-03-20T09:27:00.000Z","summer":"2087-06-21T02:05:00.000Z","fall":"2087-09-22T18:27:00.000Z","winter":"2087-12-21T16:07:00.000Z"},{"year":2088,"spring":"2088-03-19T15:16:00.000Z","summer":"2088-06-20T07:57:00.000Z","fall":"2088-09-22T00:18:00.000Z","winter":"2088-12-20T21:56:00.000Z"},{"year":2089,"spring":"2089-03-19T21:07:00.000Z","summer":"2089-06-20T13:43:00.000Z","fall":"2089-09-22T06:07:00.000Z","winter":"2089-12-21T03:53:00.000Z"},{"year":2090,"spring":"2090-03-20T03:03:00.000Z","summer":"2090-06-20T19:37:00.000Z","fall":"2090-09-22T12:01:00.000Z","winter":"2090-12-21T09:45:00.000Z"},{"year":2091,"spring":"2091-03-20T08:40:00.000Z","summer":"2091-06-21T01:17:00.000Z","fall":"2091-09-22T17:49:00.000Z","winter":"2091-12-21T15:37:00.000Z"},{"year":2092,"spring":"2092-03-19T14:33:00.000Z","summer":"2092-06-20T07:14:00.000Z","fall":"2092-09-21T23:41:00.000Z","winter":"2092-12-20T21:31:00.000Z"},{"year":2093,"spring":"2093-03-19T20:35:00.000Z","summer":"2093-06-20T13:08:00.000Z","fall":"2093-09-22T05:30:00.000Z","winter":"2093-12-21T03:21:00.000Z"},{"year":2094,"spring":"2094-03-20T02:20:00.000Z","summer":"2094-06-20T18:40:00.000Z","fall":"2094-09-22T11:15:00.000Z","winter":"2094-12-21T09:11:00.000Z"},{"year":2095,"spring":"2095-03-20T08:14:00.000Z","summer":"2095-06-21T00:38:00.000Z","fall":"2095-09-22T17:10:00.000Z","winter":"2095-12-21T15:00:00.000Z"},{"year":2096,"spring":"2096-03-19T14:03:00.000Z","summer":"2096-06-20T06:31:00.000Z","fall":"2096-09-21T22:55:00.000Z","winter":"2096-12-20T20:46:00.000Z"},{"year":2097,"spring":"2097-03-19T19:49:00.000Z","summer":"2097-06-20T12:14:00.000Z","fall":"2097-09-22T04:37:00.000Z","winter":"2097-12-21T02:38:00.000Z"},{"year":2098,"spring":"2098-03-20T01:38:00.000Z","summer":"2098-06-20T18:01:00.000Z","fall":"2098-09-22T10:22:00.000Z","winter":"2098-12-21T08:19:00.000Z"},{"year":2099,"spring":"2099-03-20T07:17:00.000Z","summer":"2099-06-20T23:41:00.000Z","fall":"2099-09-22T16:10:00.000Z","winter":"2099-12-21T14:04:00.000Z"},{"year":2100,"spring":"2100-03-20T13:04:00.000Z","summer":"2100-06-21T05:32:00.000Z","fall":"2100-09-22T22:00:00.000Z","winter":"2100-12-21T19:51:00.000Z"}];

/* src/components/SeasonCalculator.svelte generated by Svelte v3.17.3 */
const file$2 = "src/components/SeasonCalculator.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (76:6) {:else}
function create_else_block$1(ctx) {
	let p;
	let t_value = /*event*/ ctx[1].text + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "card-text pb-2 text-muted");
			add_location(p, file$2, 76, 6, 2633);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*events*/ 1 && t_value !== (t_value = /*event*/ ctx[1].text + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(76:6) {:else}",
		ctx
	});

	return block;
}

// (74:6) {#if event.next}
function create_if_block$2(ctx) {
	let p;
	let t_value = /*event*/ ctx[1].text + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "card-text pb-4 text-info lead");
			add_location(p, file$2, 74, 6, 2555);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*events*/ 1 && t_value !== (t_value = /*event*/ ctx[1].text + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$2.name,
		type: "if",
		source: "(74:6) {#if event.next}",
		ctx
	});

	return block;
}

// (73:4) {#each events as event}
function create_each_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*event*/ ctx[1].next) return create_if_block$2;
		return create_else_block$1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(73:4) {#each events as event}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let div1;
	let each_value = /*events*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = text("Solstice and Equinox Calculator");
			t1 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Solstice and Equinox Calculator");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-header");
			add_location(div0, file$2, 66, 2, 2395);
			attr_dev(div1, "class", "card-body py-3");
			add_location(div1, file$2, 69, 1, 2467);
			attr_dev(div2, "class", "card text-white bg-dark shadow");
			add_location(div2, file$2, 65, 0, 2348);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*events*/ 1) {
				each_value = /*events*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function makeEvents() {
	let today = new Date();

	//today.setMonth(today.getMonth()+8);
	let tmpList = [];

	function labelEvent(i) {
		const o = i.countdown;

		const p = {
			days: o.days == 1 ? "day" : "days",
			hours: o.hours == 1 ? "hour" : "hours",
			minutes: o.minutes == 1 ? "minute" : "minutes",
			seconds: o.seconds == 1 ? "second" : "seconds"
		};

		i.text = [
			`${i.label} is in`,
			o.days == 0 ? undefined : `${o.days} ${p.days},`,
			o.hours == 0 ? undefined : `${o.hours} ${p.hours},`,
			o.minutes == 0
			? undefined
			: `${o.minutes} ${p.minutes} and`,
			`${o.seconds} ${p.seconds}.`
		].join(" ");

		return i;
	}

	const year = new Date().getFullYear();
	const thisYear = solsticesAndEquinoxes.filter(i => i.year == year).pop();
	const nextYear = solsticesAndEquinoxes.filter(i => i.year == year + 1).pop();

	tmpList.push({
		name: "Spring",
		label: "Vernal (Spring) Equinox",
		countdown: mainspring(new Date(thisYear.spring), today)
	});

	tmpList.push({
		name: "Summer",
		label: "Summer Solstice",
		countdown: mainspring(new Date(thisYear.summer), today)
	});

	tmpList.push({
		name: "Fall",
		label: "Autumnal Equinox",
		countdown: mainspring(new Date(thisYear.fall), today)
	});

	tmpList.push({
		name: "Winter",
		label: "Winter Solstice",
		countdown: mainspring(new Date(thisYear.winter), today)
	});

	tmpList.push({
		name: "Spring",
		label: year + 1 + " Vernal (Spring) Equinox",
		countdown: mainspring(new Date(nextYear.spring), today)
	});

	tmpList.push({
		name: "Summer",
		label: year + 1 + " Summer Solstice",
		countdown: mainspring(new Date(nextYear.summer), today)
	});

	tmpList.push({
		name: "Fall",
		label: year + 1 + " Autumnal Equinox",
		countdown: mainspring(new Date(nextYear.fall), today)
	});

	tmpList.push({
		name: "Winter",
		label: year + 1 + " Winter Solstice",
		countdown: mainspring(new Date(nextYear.winter), today)
	});

	tmpList = tmpList.filter(i => i.countdown.inFuture);
	tmpList = tmpList.map(i => labelEvent(i));
	const tracker = new Set();
	const response = [];

	for (let entry of tmpList) {
		if (!tracker.has(entry.name)) {
			response.push(entry);
			tracker.add(entry.name);
		}
	}

	response[0].next = true;
	return response;
}

function instance$2($$self, $$props, $$invalidate) {
	let events = makeEvents();

	setInterval(
		function () {
			$$invalidate(0, events = makeEvents());
		},
		1000
	);

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("events" in $$props) $$invalidate(0, events = $$props.events);
	};

	return [events];
}

class SeasonCalculator extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SeasonCalculator",
			options,
			id: create_fragment$2.name
		});
	}
}

const advice = [
  `Ask your older self about the regrets they may have. Will they be happy you never finished and always quit?`,
  `A two hour non-stop workout, it is a reward for persistence earned with several months of preparation and endurance training.`,
  `A Workout is similar to reaching Mount Everest. Before you arrive you have to educate your mind and incrementally prepare your body by increasing its endurance.`, // If you just dress yourself to look like everybody else, get the same equipment, and notebooks, and even friends; you will not triumph, you will either give up, fail, or die a stupid and worthless death.`,
  `A workout must be non stop, once you stop, it is over, you go home, rest and workout a little bit longer the next day.`,
  `A workout should last over two hours.`,
  `Become a great warrior.`,
  `Become a leader and synthesize your own ideas, use the scientific method to asses their efficacy.`,
  `Become ultra, become superhuman by extending your endurance to greater and greater heights.`,
  `Be respectful of other people's hard work.`,
  `Check if your breath smells.`,
  `Check your body odor, do not use deodorants. Use hand sanitizer to kill odor causing bacteria.`,
  `Dance with your feet like a boxing butterfly.`,
  `Do not point your phone camera at other people.`,
  `Do not pretend to work out, the only person you are cheating at a gym is yourself. In a few weeks people will notice that you made no progress and will think less of you.`,
  `Do not talk, to each other, or on the phone, exercise requires focus and talking is too distracting to everyone around you.`,
  `Do not use equipment that forces you to lay down, it will make you look really bad.`,
  `Do not walk into other people's personal space.`,
  `Don't copy workouts, not everyone is working out.`,
  `Don't creep up.`,
  `Don't drop weights.`,
  `Don't eat cheat meals.`,
  `Don't give up.`,
  `Don't grunt.`,
  `Don't judge, focus on you own exercise, sometimes people come here to get away from their problems.`,
  `Don't lay.`,
  `Don't lean into people.`,
  `Don't lie, don't cheat, don't steal; don't tolerate any of those who do.`,
  `Don't lift too heavy, you won't impress anyone.`,
  `Don't make distracting noises.`,
  `Don't pretend.`,
  `Don't rest.`,
  `Don't rest, use a lower weight during your rest.`,
  `Don't sit.`,
  `Don't sit down.`,
  `Don't stare.`,
  `Don't swing weights.`,
  `Don't swing weights, engage as many muscles as you can.`,
  `Don't take days off.`,
  `Don't take selfies or photos, people don't want to be in your pictures.`,
  `Don't talk.`,
  `Don't use your phone.`,
  `Don't wear gray or black, dress like an athlete or superhero, your older self will regret dressing up like everybody else.`,
  `Drink water.`,
  `Ensure proper levels of Sodium, Magnesium, Zinc, Calcium, and Potassium.`,
  `Everything you think you know is wrong, and most of the right things require that you stop pretending that you know how to do it, and actually figure it out by trial and error on your own.`,
  `Focus.`,
  `Focus on your breathing.`,
  `Focus on your dance moves.`,
  `Focus on your exercise.`,
  `Get rid of your microwave, cut the damn cord.`,
  `Get up.`,
  `If you are desperate to begin losing weight right now, right this moment; go home and cut off all the plugs from your electric appliances.`,
  `If you are overweight, add shredded lettuce to your diet, it will lower the caloric density of your daily food intake, thus you will consume less calories per day.`,
  `If you are overweight; get rid of all kitchen appliances including your refrigerator, stove, electric skillets, ovens, toaster; and even the mixer.`,
  `If you are sick go home, don't make other people sick.`,
  `If you do end up working out every day but fail to show progress in a few weeks, then people will know you just spent a few weeks pretending to work out.`,
  `If you feel that you are too large to begin your workout at the gym, you should start at the Appalachian or Pacific Crest Trail.`,
  `If you had to stop then you chose weights that are just too heavy for you to lift.`,
  `If you have to stop then, it is too heavy.`,
  `If You lift heavy to pretend you are a bad ass, those who will notice you, will see that you are sitting around pretending to rest your legs to an arm workout, while playing with your phone in the middle of a gym.`,
  `It is not how heavy you lift, it is how long you lift your heavy for.`,
  `Keep moving.`,
  `Lower your weight if it is too heavy, don't stop - get under the muscle pain, failure, and pain buildup.`,
  `Make sure you come back tomorrow.`,
  `Move your feet.`,
  `Move your feet, like a boxer.`,
  `Never Stop.`,
  `Never use machines that require sitting or laying down.`,
  `Prepare to return tomorrow.`,
  `Put all the weights you are not using back on the rack.`,
  `Put your phone away.`,
  `Quit smoking, people can't care about you if you don't care about yourself.`,
  `Re-hydrate.`,
  `Respect personal space.`,
  `Stop Pretending.`,
  `Stop Resting.`,
  `Stop swinging your weights.`,
  `The authenticity of your workout, represents the authenticity of your mind.`,
  `There is no such thing as sets and reps, your body will not receive the signal to adapt your musculature if you just workout for two minutes an hour.`,
  `There is no time, use both of your hands at the same time, don't make it easy, make it difficult; tell your body that you need more.`,
  `The triumph is not in what you look like, anybody can have surgery, the triumph is a sham - become a protector of your years, keeper of your youth.`,
  `Working out without months of training and preparations leading up to your workout, will result in lethargy, dehydration, injury, and death.`,
  `You must accept the responsibility for your own existence, only you can fix your problems.`,
  `You must train for several months, prior to your first real workout.`,
];

function main(){
  return advice;
}

var bodybuildingAdvice = main;

/**
 * Randomize the order of the elements in a given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Boolean} [options.copy] - Sets if should return a shuffled copy of the given array. By default it's a falsy value.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Array}
 */
function shuffle(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle expect an array as parameter.');
  }

  options = options || {};

  var collection = arr,
      len = arr.length,
      rng = options.rng || Math.random,
      random,
      temp;

  if (options.copy === true) {
    collection = arr.slice();
  }

  while (len) {
    random = Math.floor(rng() * len);
    len -= 1;
    temp = collection[len];
    collection[len] = collection[random];
    collection[random] = temp;
  }

  return collection;
}
/**
 * Pick one or more random elements from the given array.
 * @param {Array} arr - The given array.
 * @param {Object} [options] - Optional configuration options.
 * @param {Number} [options.picks] - Specifies how many random elements you want to pick. By default it picks 1.
 * @param {Function} [options.rng] - Specifies a custom random number generator.
 * @returns {Object}
 */
shuffle.pick = function(arr, options) {

  if (!Array.isArray(arr)) {
    throw new Error('shuffle.pick() expect an array as parameter.');
  }

  options = options || {};

  var rng = options.rng || Math.random,
      picks = options.picks || 1;

  if (typeof picks === 'number' && picks !== 1) {
    var len = arr.length,
        collection = arr.slice(),
        random = [],
        index;

    while (picks && len) {
      index = Math.floor(rng() * len);
      random.push(collection[index]);
      collection.splice(index, 1);
      len -= 1;
      picks -= 1;
    }

    return random;
  }

  return arr[Math.floor(rng() * arr.length)];
};

/**
 * Expose
 */
var shuffleArray = shuffle;

/* src/components/BodybuildingAdvice.svelte generated by Svelte v3.17.3 */
const file$3 = "src/components/BodybuildingAdvice.svelte";

// (97:20) 
function create_if_block_1(ctx) {
	let div7;
	let div0;
	let t0;
	let t1;
	let button;
	let raw_value = octicons.gear.toSVG({ "class": "fill-white" }) + "";
	let t2;
	let div1;
	let p;
	let t3;
	let t4;
	let div6;
	let div3;
	let div2;
	let t5;
	let div5;
	let div4;
	let dispose;

	const block = {
		c: function create() {
			div7 = element("div");
			div0 = element("div");
			t0 = text(/*title*/ ctx[6]);
			t1 = space();
			button = element("button");
			t2 = space();
			div1 = element("div");
			p = element("p");
			t3 = text(/*advice*/ ctx[5]);
			t4 = space();
			div6 = element("div");
			div3 = element("div");
			div2 = element("div");
			t5 = space();
			div5 = element("div");
			div4 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div7 = claim_element(nodes, "DIV", { class: true, style: true });
			var div7_nodes = children(div7);
			div0 = claim_element(div7_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, /*title*/ ctx[6]);
			t1 = claim_space(div0_nodes);
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div7_nodes);
			div1 = claim_element(div7_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p = claim_element(div1_nodes, "P", { class: true, style: true });
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, /*advice*/ ctx[5]);
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div3 = claim_element(div6_nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", {
				class: true,
				role: true,
				style: true,
				"aria-valuenow": true,
				"aria-valuemin": true,
				"aria-valuemax": true
			});

			children(div2).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t5 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true, style: true });
			var div5_nodes = children(div5);

			div4 = claim_element(div5_nodes, "DIV", {
				class: true,
				role: true,
				style: true,
				"aria-valuenow": true,
				"aria-valuemin": true,
				"aria-valuemax": true
			});

			children(div4).forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn btn-text btn-sm border border-secondary float-right");
			add_location(button, file$3, 101, 14, 2507);
			attr_dev(div0, "class", "card-header lead");
			add_location(div0, file$3, 100, 4, 2462);
			attr_dev(p, "class", "card-text pb-4 text-warning lead text-center pt-4");
			set_style(p, "cursor", "pointer");
			add_location(p, file$3, 105, 6, 2721);
			attr_dev(div1, "class", "card-body py-1");
			add_location(div1, file$3, 104, 4, 2686);
			attr_dev(div2, "class", "progress-bar bg-warning");
			attr_dev(div2, "role", "progressbar");
			set_style(div2, "width", /*progress*/ ctx[2] + "%");
			attr_dev(div2, "aria-valuenow", /*progress*/ ctx[2]);
			attr_dev(div2, "aria-valuemin", "0");
			attr_dev(div2, "aria-valuemax", "100");
			add_location(div2, file$3, 111, 8, 2967);
			attr_dev(div3, "class", "progress");
			set_style(div3, "height", "1px");
			set_style(div3, "background", "black");
			add_location(div3, file$3, 110, 6, 2896);
			attr_dev(div4, "class", "progress-bar bg-secondary");
			attr_dev(div4, "role", "progressbar");
			set_style(div4, "width", /*procession*/ ctx[3] + "%");
			attr_dev(div4, "aria-valuenow", /*procession*/ ctx[3]);
			attr_dev(div4, "aria-valuemin", "0");
			attr_dev(div4, "aria-valuemax", "100");
			add_location(div4, file$3, 115, 8, 3219);
			attr_dev(div5, "class", "progress mt-1");
			set_style(div5, "height", "1px");
			set_style(div5, "background", "black");
			add_location(div5, file$3, 114, 6, 3143);
			attr_dev(div6, "class", "card-footer text-muted");
			add_location(div6, file$3, 108, 4, 2852);
			attr_dev(div7, "class", "card text-white bg-dark shadow");
			set_style(div7, "min-height", "23rem");
			add_location(div7, file$3, 98, 2, 2384);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div7, anchor);
			append_dev(div7, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
			append_dev(div0, button);
			button.innerHTML = raw_value;
			append_dev(div7, t2);
			append_dev(div7, div1);
			append_dev(div1, p);
			append_dev(p, t3);
			append_dev(div7, t4);
			append_dev(div7, div6);
			append_dev(div6, div3);
			append_dev(div3, div2);
			append_dev(div6, t5);
			append_dev(div6, div5);
			append_dev(div5, div4);

			dispose = [
				listen_dev(button, "click", /*click_handler_1*/ ctx[13], false, false, false),
				listen_dev(p, "click", /*next*/ ctx[7], false, false, false)
			];
		},
		p: function update(ctx, dirty) {
			if (dirty & /*advice*/ 32) set_data_dev(t3, /*advice*/ ctx[5]);

			if (dirty & /*progress*/ 4) {
				set_style(div2, "width", /*progress*/ ctx[2] + "%");
			}

			if (dirty & /*progress*/ 4) {
				attr_dev(div2, "aria-valuenow", /*progress*/ ctx[2]);
			}

			if (dirty & /*procession*/ 8) {
				set_style(div4, "width", /*procession*/ ctx[3] + "%");
			}

			if (dirty & /*procession*/ 8) {
				attr_dev(div4, "aria-valuenow", /*procession*/ ctx[3]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div7);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(97:20) ",
		ctx
	});

	return block;
}

// (71:0) {#if view == 0}
function create_if_block$3(ctx) {
	let div6;
	let div0;
	let t0;
	let button;
	let raw_value = octicons.checklist.toSVG({ "class": "fill-white" }) + "";
	let t1;
	let div5;
	let div3;
	let label;
	let t2;
	let t3;
	let div2;
	let input;
	let input_updating = false;
	let t4;
	let div1;
	let span;
	let t5;
	let t6;
	let div4;
	let t7;
	let t8_value = /*list*/ ctx[4].length + "";
	let t8;
	let t9;
	let t10;
	let t11;
	let dispose;

	function input_input_handler() {
		input_updating = true;
		/*input_input_handler*/ ctx[12].call(input);
	}

	const block = {
		c: function create() {
			div6 = element("div");
			div0 = element("div");
			t0 = text("Preferences\n      ");
			button = element("button");
			t1 = space();
			div5 = element("div");
			div3 = element("div");
			label = element("label");
			t2 = text("Message Duration");
			t3 = space();
			div2 = element("div");
			input = element("input");
			t4 = space();
			div1 = element("div");
			span = element("span");
			t5 = text("seconds");
			t6 = space();
			div4 = element("div");
			t7 = text("Database contains ");
			t8 = text(t8_value);
			t9 = text(" items. Current shuffle progress ");
			t10 = text(/*procession*/ ctx[3]);
			t11 = text("%.");
			this.h();
		},
		l: function claim(nodes) {
			div6 = claim_element(nodes, "DIV", { class: true, style: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Preferences\n      ");
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label = claim_element(div3_nodes, "LABEL", { class: true, for: true });
			var label_nodes = children(label);
			t2 = claim_text(label_nodes, "Message Duration");
			label_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input = claim_element(div2_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span = claim_element(div1_nodes, "SPAN", { class: true, id: true });
			var span_nodes = children(span);
			t5 = claim_text(span_nodes, "seconds");
			span_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t6 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			t7 = claim_text(div4_nodes, "Database contains ");
			t8 = claim_text(div4_nodes, t8_value);
			t9 = claim_text(div4_nodes, " items. Current shuffle progress ");
			t10 = claim_text(div4_nodes, /*procession*/ ctx[3]);
			t11 = claim_text(div4_nodes, "%.");
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn btn-text btn-sm border border-secondary float-right");
			add_location(button, file$3, 75, 6, 1550);
			attr_dev(div0, "class", "card-header lead");
			add_location(div0, file$3, 73, 4, 1495);
			attr_dev(label, "class", "small");
			attr_dev(label, "for", "duration");
			add_location(label, file$3, 80, 8, 1801);
			attr_dev(input, "type", "number");
			attr_dev(input, "id", "duration");
			attr_dev(input, "min", "10");
			attr_dev(input, "max", "120");
			attr_dev(input, "class", "form-control");
			attr_dev(input, "placeholder", "seconds");
			add_location(input, file$3, 82, 8, 1909);
			attr_dev(span, "class", "input-group-text");
			attr_dev(span, "id", "duration-addon");
			add_location(span, file$3, 84, 10, 2082);
			attr_dev(div1, "class", "input-group-append");
			add_location(div1, file$3, 83, 10, 2039);
			attr_dev(div2, "class", "input-group mb-3");
			add_location(div2, file$3, 81, 8, 1870);
			attr_dev(div3, "class", "card-text");
			add_location(div3, file$3, 79, 6, 1769);
			attr_dev(div4, "class", "card-text small text-info");
			add_location(div4, file$3, 89, 6, 2200);
			attr_dev(div5, "class", "card-body py-3");
			add_location(div5, file$3, 77, 4, 1733);
			attr_dev(div6, "class", "card text-white bg-dark shadow");
			set_style(div6, "min-height", "23rem");
			add_location(div6, file$3, 72, 2, 1418);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div6, anchor);
			append_dev(div6, div0);
			append_dev(div0, t0);
			append_dev(div0, button);
			button.innerHTML = raw_value;
			append_dev(div6, t1);
			append_dev(div6, div5);
			append_dev(div5, div3);
			append_dev(div3, label);
			append_dev(label, t2);
			append_dev(div3, t3);
			append_dev(div3, div2);
			append_dev(div2, input);
			set_input_value(input, /*duration*/ ctx[1]);
			append_dev(div2, t4);
			append_dev(div2, div1);
			append_dev(div1, span);
			append_dev(span, t5);
			append_dev(div5, t6);
			append_dev(div5, div4);
			append_dev(div4, t7);
			append_dev(div4, t8);
			append_dev(div4, t9);
			append_dev(div4, t10);
			append_dev(div4, t11);

			dispose = [
				listen_dev(button, "click", /*click_handler*/ ctx[11], false, false, false),
				listen_dev(input, "input", input_input_handler)
			];
		},
		p: function update(ctx, dirty) {
			if (!input_updating && dirty & /*duration*/ 2) {
				set_input_value(input, /*duration*/ ctx[1]);
			}

			input_updating = false;
			if (dirty & /*list*/ 16 && t8_value !== (t8_value = /*list*/ ctx[4].length + "")) set_data_dev(t8, t8_value);
			if (dirty & /*procession*/ 8) set_data_dev(t10, /*procession*/ ctx[3]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div6);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$3.name,
		type: "if",
		source: "(71:0) {#if view == 0}",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*view*/ ctx[0] == 0) return create_if_block$3;
		if (/*view*/ ctx[0] == 1) return create_if_block_1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type && current_block_type(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if (if_block) if_block.d(1);
				if_block = current_block_type && current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (if_block) {
				if_block.d(detaching);
			}

			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	const printf = sprintf.sprintf;
	let title = "Bodybuilding Advice";

	/*
  0 is Preference View
  1 is Application View
  Add as many as needed.
*/
	let view = 1; // controlled via UI icons

	// Preferences
	let duration = 25; // seconds, user can set this in Preferences

	// Timer State, automatically computed
	let elapsed = 0; // elapsed seconds

	let progress = 0; // how long advice appeared thus far
	let procession = 0; // overall progress through the current shuffle.

	// Data State
	let list = shuffleArray(bodybuildingAdvice());

	let index = 0;

	// Initialize
	let advice = list[index];

	setInterval(
		function () {
			if (elapsed >= duration) {
				// Advance
				next();
			}

			elapsed++; // each second elapsed is incremented
			$$invalidate(2, progress = calculatePercent(elapsed, duration) * 100);
			$$invalidate(3, procession = printf("%.0f", calculatePercent(index + 1, list.length) * 100));
		},
		1000
	);

	function next() {
		// Reset Timer State
		elapsed = 0;

		$$invalidate(2, progress = 0);

		// Perform Index Logic
		index++;

		if (index + 1 > list.length) {
			// End of list, re-shuffle, and reset index.
			$$invalidate(4, list = shuffleArray(bodybuildingAdvice()));

			index = 0;
		}

		// Set Advice
		$$invalidate(5, advice = list[index]);
	}

	const click_handler = e => $$invalidate(0, view = 1);

	function input_input_handler() {
		duration = to_number(this.value);
		$$invalidate(1, duration);
	}

	const click_handler_1 = e => $$invalidate(0, view = 0);

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(6, title = $$props.title);
		if ("view" in $$props) $$invalidate(0, view = $$props.view);
		if ("duration" in $$props) $$invalidate(1, duration = $$props.duration);
		if ("elapsed" in $$props) elapsed = $$props.elapsed;
		if ("progress" in $$props) $$invalidate(2, progress = $$props.progress);
		if ("procession" in $$props) $$invalidate(3, procession = $$props.procession);
		if ("list" in $$props) $$invalidate(4, list = $$props.list);
		if ("index" in $$props) index = $$props.index;
		if ("advice" in $$props) $$invalidate(5, advice = $$props.advice);
	};

	return [
		view,
		duration,
		progress,
		procession,
		list,
		advice,
		title,
		next,
		elapsed,
		index,
		printf,
		click_handler,
		input_input_handler,
		click_handler_1
	];
}

class BodybuildingAdvice extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "BodybuildingAdvice",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/containers/PreferenceCard.svelte generated by Svelte v3.17.3 */
const file$4 = "src/containers/PreferenceCard.svelte";
const get_buttons_slot_changes = dirty => ({});
const get_buttons_slot_context = ctx => ({});
const get_preferences_footer_slot_changes = dirty => ({});
const get_preferences_footer_slot_context = ctx => ({});
const get_preferences_slot_changes = dirty => ({});
const get_preferences_slot_context = ctx => ({});

// (45:20) 
function create_if_block_1$1(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let button;
	let raw_value = octicons.gear.toSVG({ "class": "fill-white" }) + "";
	let t2;
	let t3;
	let div1;
	let p;
	let t4;
	let current;
	let dispose;
	const buttons_slot_template = /*$$slots*/ ctx[3].buttons;
	const buttons_slot = create_slot(buttons_slot_template, ctx, /*$$scope*/ ctx[2], get_buttons_slot_context);
	const default_slot_template = /*$$slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			button = element("button");
			t2 = space();
			if (buttons_slot) buttons_slot.c();
			t3 = space();

			if (!default_slot) {
				div1 = element("div");
				p = element("p");
				t4 = text("Application Empty");
			}

			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, /*title*/ ctx[0]);
			t1 = claim_space(div0_nodes);
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			button_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			if (buttons_slot) buttons_slot.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);

			if (!default_slot) {
				div1 = claim_element(div2_nodes, "DIV", { class: true, style: true });
				var div1_nodes = children(div1);
				p = claim_element(div1_nodes, "P", { class: true });
				var p_nodes = children(p);
				t4 = claim_text(p_nodes, "Application Empty");
				p_nodes.forEach(detach_dev);
				div1_nodes.forEach(detach_dev);
			}

			if (default_slot) default_slot.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn btn-text btn-sm border border-secondary float-right");
			add_location(button, file$4, 50, 6, 1030);
			attr_dev(div0, "class", "card-header lead bg-gradient-gold shadow text-dark");
			add_location(div0, file$4, 48, 4, 945);

			if (!default_slot) {
				attr_dev(p, "class", "card-text");
				add_location(p, file$4, 59, 10, 1501);
				attr_dev(div1, "class", "card-body p-2");
				set_style(div1, "box-shadow", "inset 0 0 10px #000000");
				add_location(div1, file$4, 58, 6, 1419);
			}

			attr_dev(div2, "class", "card text-white bg-dark shadow");
			add_location(div2, file$4, 46, 2, 895);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div0, t1);
			append_dev(div0, button);
			button.innerHTML = raw_value;
			append_dev(div0, t2);

			if (buttons_slot) {
				buttons_slot.m(div0, null);
			}

			append_dev(div2, t3);

			if (!default_slot) {
				append_dev(div2, div1);
				append_dev(div1, p);
				append_dev(p, t4);
			}

			if (default_slot) {
				default_slot.m(div2, null);
			}

			current = true;
			dispose = listen_dev(button, "click", /*click_handler_1*/ ctx[5], false, false, false);
		},
		p: function update(ctx, dirty) {
			if (!current || dirty & /*title*/ 1) set_data_dev(t0, /*title*/ ctx[0]);

			if (buttons_slot && buttons_slot.p && dirty & /*$$scope*/ 4) {
				buttons_slot.p(get_slot_context(buttons_slot_template, ctx, /*$$scope*/ ctx[2], get_buttons_slot_context), get_slot_changes(buttons_slot_template, /*$$scope*/ ctx[2], dirty, get_buttons_slot_changes));
			}

			if (default_slot && default_slot.p && dirty & /*$$scope*/ 4) {
				default_slot.p(get_slot_context(default_slot_template, ctx, /*$$scope*/ ctx[2], null), get_slot_changes(default_slot_template, /*$$scope*/ ctx[2], dirty, null));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(buttons_slot, local);
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(buttons_slot, local);
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			if (buttons_slot) buttons_slot.d(detaching);
			if (default_slot) default_slot.d(detaching);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$1.name,
		type: "if",
		source: "(45:20) ",
		ctx
	});

	return block;
}

// (18:0) {#if view == 0}
function create_if_block$4(ctx) {
	let div3;
	let div0;
	let t0;
	let button;
	let raw_value = octicons.checklist.toSVG({ "class": "fill-white" }) + "";
	let t1;
	let div1;
	let p;
	let t2;
	let t3;
	let div2;
	let current;
	let dispose;
	const preferences_slot_template = /*$$slots*/ ctx[3].preferences;
	const preferences_slot = create_slot(preferences_slot_template, ctx, /*$$scope*/ ctx[2], get_preferences_slot_context);
	const preferences_footer_slot_template = /*$$slots*/ ctx[3]["preferences-footer"];
	const preferences_footer_slot = create_slot(preferences_footer_slot_template, ctx, /*$$scope*/ ctx[2], get_preferences_footer_slot_context);

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			t0 = text("Preferences\n      ");
			button = element("button");
			t1 = space();
			div1 = element("div");

			if (!preferences_slot) {
				p = element("p");
				t2 = text("Preferences Empty");
			}

			if (preferences_slot) preferences_slot.c();
			t3 = space();
			div2 = element("div");
			if (preferences_footer_slot) preferences_footer_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Preferences\n      ");
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);

			if (!preferences_slot) {
				p = claim_element(div1_nodes, "P", { class: true });
				var p_nodes = children(p);
				t2 = claim_text(p_nodes, "Preferences Empty");
				p_nodes.forEach(detach_dev);
			}

			if (preferences_slot) preferences_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			if (preferences_footer_slot) preferences_footer_slot.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "class", "btn btn-text btn-sm border border-secondary float-right");
			add_location(button, file$4, 23, 6, 370);
			attr_dev(div0, "class", "card-header lead");
			add_location(div0, file$4, 21, 4, 315);

			if (!preferences_slot) {
				attr_dev(p, "class", "card-text");
				add_location(p, file$4, 28, 6, 663);
			}

			attr_dev(div1, "class", "card-body p-2");
			set_style(div1, "max-height", "25rem");
			set_style(div1, "overflow-y", "auto");
			add_location(div1, file$4, 25, 4, 553);
			attr_dev(div2, "class", "card-footer text-muted small");
			add_location(div2, file$4, 35, 4, 751);
			attr_dev(div3, "class", "card text-white bg-dark shadow");
			add_location(div3, file$4, 20, 2, 266);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			append_dev(div0, t0);
			append_dev(div0, button);
			button.innerHTML = raw_value;
			append_dev(div3, t1);
			append_dev(div3, div1);

			if (!preferences_slot) {
				append_dev(div1, p);
				append_dev(p, t2);
			}

			if (preferences_slot) {
				preferences_slot.m(div1, null);
			}

			append_dev(div3, t3);
			append_dev(div3, div2);

			if (preferences_footer_slot) {
				preferences_footer_slot.m(div2, null);
			}

			current = true;
			dispose = listen_dev(button, "click", /*click_handler*/ ctx[4], false, false, false);
		},
		p: function update(ctx, dirty) {
			if (preferences_slot && preferences_slot.p && dirty & /*$$scope*/ 4) {
				preferences_slot.p(get_slot_context(preferences_slot_template, ctx, /*$$scope*/ ctx[2], get_preferences_slot_context), get_slot_changes(preferences_slot_template, /*$$scope*/ ctx[2], dirty, get_preferences_slot_changes));
			}

			if (preferences_footer_slot && preferences_footer_slot.p && dirty & /*$$scope*/ 4) {
				preferences_footer_slot.p(get_slot_context(preferences_footer_slot_template, ctx, /*$$scope*/ ctx[2], get_preferences_footer_slot_context), get_slot_changes(preferences_footer_slot_template, /*$$scope*/ ctx[2], dirty, get_preferences_footer_slot_changes));
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(preferences_slot, local);
			transition_in(preferences_footer_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(preferences_slot, local);
			transition_out(preferences_footer_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			if (preferences_slot) preferences_slot.d(detaching);
			if (preferences_footer_slot) preferences_footer_slot.d(detaching);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$4.name,
		type: "if",
		source: "(18:0) {#if view == 0}",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block$4, create_if_block_1$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*view*/ ctx[1] == 0) return 0;
		if (/*view*/ ctx[1] == 1) return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					if_block = null;
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}

			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	let { title = "Preferences Card" } = $$props;

	/*
  0 is Preference View
  1 is Application View
*/
	let view = 1; // controlled via UI icons

	const writable_props = ["title"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PreferenceCard> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	const click_handler = e => $$invalidate(1, view = 1);
	const click_handler_1 = e => $$invalidate(1, view = 0);

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => {
		return { title, view };
	};

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("view" in $$props) $$invalidate(1, view = $$props.view);
	};

	return [title, view, $$scope, $$slots, click_handler, click_handler_1];
}

class PreferenceCard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, { title: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PreferenceCard",
			options,
			id: create_fragment$4.name
		});
	}

	get title() {
		throw new Error("<PreferenceCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<PreferenceCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/RandomVideo.svelte generated by Svelte v3.17.3 */
const file$5 = "src/components/RandomVideo.svelte";

// (130:2) {#if paused}
function create_if_block_5(ctx) {
	let html_tag;
	let raw_value = octicons["triangle-right"].toSVG({ "class": "fill-white" }) + "";

	const block = {
		c: function create() {
			this.h();
		},
		l: function claim(nodes) {
			this.h();
		},
		h: function hydrate() {
			html_tag = new HtmlTag(raw_value, null);
		},
		m: function mount(target, anchor) {
			html_tag.m(target, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) html_tag.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_5.name,
		type: "if",
		source: "(130:2) {#if paused}",
		ctx
	});

	return block;
}

// (131:2) {#if !paused}
function create_if_block_4(ctx) {
	let html_tag;
	let raw_value = octicons["primitive-square"].toSVG({ "class": "fill-white" }) + "";

	const block = {
		c: function create() {
			this.h();
		},
		l: function claim(nodes) {
			this.h();
		},
		h: function hydrate() {
			html_tag = new HtmlTag(raw_value, null);
		},
		m: function mount(target, anchor) {
			html_tag.m(target, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) html_tag.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4.name,
		type: "if",
		source: "(131:2) {#if !paused}",
		ctx
	});

	return block;
}

// (135:2) <button slot="buttons" class="btn btn-text btn-sm border border-secondary float-right  mr-1" on:click={prev}>
function create_buttons_slot(ctx) {
	let button0;
	let t;
	let button1;
	let raw0_value = octicons["arrow-right"].toSVG({ "class": "fill-white" }) + "";
	let button2;
	let raw1_value = octicons["arrow-left"].toSVG({ "class": "fill-white" }) + "";
	let dispose;
	let if_block0 = /*paused*/ ctx[6] && create_if_block_5(ctx);
	let if_block1 = !/*paused*/ ctx[6] && create_if_block_4(ctx);

	const block = {
		c: function create() {
			button0 = element("button");
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			button1 = element("button");
			button2 = element("button");
			this.h();
		},
		l: function claim(nodes) {
			button0 = claim_element(nodes, "BUTTON", { slot: true, class: true });
			var button0_nodes = children(button0);
			if (if_block0) if_block0.l(button0_nodes);
			t = claim_space(button0_nodes);
			if (if_block1) if_block1.l(button0_nodes);
			button0_nodes.forEach(detach_dev);
			button1 = claim_element(nodes, "BUTTON", { slot: true, class: true });
			var button1_nodes = children(button1);
			button1_nodes.forEach(detach_dev);
			button2 = claim_element(nodes, "BUTTON", { slot: true, class: true });
			var button2_nodes = children(button2);
			button2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button0, "slot", "buttons");
			attr_dev(button0, "class", "btn btn-text btn-sm border border-secondary float-right  mr-1");
			add_location(button0, file$5, 128, 2, 2276);
			attr_dev(button1, "slot", "buttons");
			attr_dev(button1, "class", "btn btn-text btn-sm border border-secondary float-right  mr-1");
			add_location(button1, file$5, 133, 2, 2597);
			attr_dev(button2, "slot", "buttons");
			attr_dev(button2, "class", "btn btn-text btn-sm border border-secondary float-right  mr-1");
			add_location(button2, file$5, 134, 2, 2782);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button0, anchor);
			if (if_block0) if_block0.m(button0, null);
			append_dev(button0, t);
			if (if_block1) if_block1.m(button0, null);
			insert_dev(target, button1, anchor);
			button1.innerHTML = raw0_value;
			insert_dev(target, button2, anchor);
			button2.innerHTML = raw1_value;

			dispose = [
				listen_dev(button0, "click", /*click_handler*/ ctx[16], false, false, false),
				listen_dev(button1, "click", /*next*/ ctx[10], false, false, false),
				listen_dev(button2, "click", /*prev*/ ctx[11], false, false, false)
			];
		},
		p: function update(ctx, dirty) {
			if (/*paused*/ ctx[6]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_5(ctx);
					if_block0.c();
					if_block0.m(button0, t);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (!/*paused*/ ctx[6]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_4(ctx);
					if_block1.c();
					if_block1.m(button0, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button0);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (detaching) detach_dev(button1);
			if (detaching) detach_dev(button2);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_buttons_slot.name,
		type: "slot",
		source: "(135:2) <button slot=\\\"buttons\\\" class=\\\"btn btn-text btn-sm border border-secondary float-right  mr-1\\\" on:click={prev}>",
		ctx
	});

	return block;
}

// (137:2) <div slot="preferences" class="card-text">
function create_preferences_slot(ctx) {
	let div0;
	let div3;
	let label0;
	let t0;
	let t1;
	let div2;
	let input0;
	let input0_updating = false;
	let t2;
	let div1;
	let span0;
	let t3;
	let t4;
	let div6;
	let label1;
	let t5;
	let t6;
	let div5;
	let input1;
	let input1_max_value;
	let input1_updating = false;
	let t7;
	let div4;
	let span1;
	let t8;
	let t9;
	let div9;
	let label2;
	let t10;
	let t11;
	let div8;
	let div7;
	let input2;
	let t12;
	let label3;
	let t13;
	let div12;
	let label4;
	let t14;
	let t15;
	let div11;
	let div10;
	let input3;
	let t16;
	let label5;
	let dispose;

	function input0_input_handler() {
		input0_updating = true;
		/*input0_input_handler*/ ctx[17].call(input0);
	}

	function input1_input_handler() {
		input1_updating = true;
		/*input1_input_handler*/ ctx[18].call(input1);
	}

	const block = {
		c: function create() {
			div0 = element("div");
			div3 = element("div");
			label0 = element("label");
			t0 = text("Duration");
			t1 = space();
			div2 = element("div");
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			span0 = element("span");
			t3 = text("seconds");
			t4 = space();
			div6 = element("div");
			label1 = element("label");
			t5 = text("Autopause");
			t6 = space();
			div5 = element("div");
			input1 = element("input");
			t7 = space();
			div4 = element("div");
			span1 = element("span");
			t8 = text("minutes");
			t9 = space();
			div9 = element("div");
			label2 = element("label");
			t10 = text("Big Titles");
			t11 = space();
			div8 = element("div");
			div7 = element("div");
			input2 = element("input");
			t12 = space();
			label3 = element("label");
			t13 = space();
			div12 = element("div");
			label4 = element("label");
			t14 = text("Footer");
			t15 = space();
			div11 = element("div");
			div10 = element("div");
			input3 = element("input");
			t16 = space();
			label5 = element("label");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			div3 = claim_element(div0_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label0 = claim_element(div3_nodes, "LABEL", { class: true, for: true });
			var label0_nodes = children(label0);
			t0 = claim_text(label0_nodes, "Duration");
			label0_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input0 = claim_element(div2_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span0 = claim_element(div1_nodes, "SPAN", { class: true, id: true });
			var span0_nodes = children(span0);
			t3 = claim_text(span0_nodes, "seconds");
			span0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			div6 = claim_element(div0_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			label1 = claim_element(div6_nodes, "LABEL", { class: true, for: true });
			var label1_nodes = children(label1);
			t5 = claim_text(label1_nodes, "Autopause");
			label1_nodes.forEach(detach_dev);
			t6 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);

			input1 = claim_element(div5_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			t7 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			span1 = claim_element(div4_nodes, "SPAN", { class: true, id: true });
			var span1_nodes = children(span1);
			t8 = claim_text(span1_nodes, "minutes");
			span1_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t9 = claim_space(div0_nodes);
			div9 = claim_element(div0_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			label2 = claim_element(div9_nodes, "LABEL", { class: true, for: true });
			var label2_nodes = children(label2);
			t10 = claim_text(label2_nodes, "Big Titles");
			label2_nodes.forEach(detach_dev);
			t11 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			input2 = claim_element(div7_nodes, "INPUT", { type: true, class: true, id: true });
			t12 = claim_space(div7_nodes);
			label3 = claim_element(div7_nodes, "LABEL", { class: true, for: true });
			var label3_nodes = children(label3);
			label3_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t13 = claim_space(div0_nodes);
			div12 = claim_element(div0_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			label4 = claim_element(div12_nodes, "LABEL", { class: true, for: true });
			var label4_nodes = children(label4);
			t14 = claim_text(label4_nodes, "Footer");
			label4_nodes.forEach(detach_dev);
			t15 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			input3 = claim_element(div10_nodes, "INPUT", { type: true, class: true, id: true });
			t16 = claim_space(div10_nodes);
			label5 = claim_element(div10_nodes, "LABEL", { class: true, for: true });
			var label5_nodes = children(label5);
			label5_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label0, "class", "small");
			attr_dev(label0, "for", "duration");
			add_location(label0, file$5, 139, 6, 3045);
			attr_dev(input0, "type", "number");
			attr_dev(input0, "id", "duration");
			attr_dev(input0, "min", "10");
			attr_dev(input0, "max", "120");
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "placeholder", "number of seconds to display");
			add_location(input0, file$5, 141, 6, 3141);
			attr_dev(span0, "class", "input-group-text ");
			attr_dev(span0, "id", "duration-addon");
			add_location(span0, file$5, 143, 8, 3331);
			attr_dev(div1, "class", "input-group-append");
			add_location(div1, file$5, 142, 8, 3290);
			attr_dev(div2, "class", "input-group mb-3");
			add_location(div2, file$5, 140, 6, 3104);
			attr_dev(div3, "class", "card-text");
			add_location(div3, file$5, 138, 4, 3015);
			attr_dev(label1, "class", "small");
			attr_dev(label1, "for", "duration");
			add_location(label1, file$5, 149, 6, 3472);
			attr_dev(input1, "type", "number");
			attr_dev(input1, "id", "duration");
			attr_dev(input1, "min", "15");
			attr_dev(input1, "max", input1_max_value = 60 * 24);
			attr_dev(input1, "class", "form-control");
			attr_dev(input1, "placeholder", "minutes until autopause");
			add_location(input1, file$5, 151, 6, 3569);
			attr_dev(span1, "class", "input-group-text ");
			attr_dev(span1, "id", "duration-addon");
			add_location(span1, file$5, 153, 8, 3759);
			attr_dev(div4, "class", "input-group-append");
			add_location(div4, file$5, 152, 8, 3718);
			attr_dev(div5, "class", "input-group mb-3");
			add_location(div5, file$5, 150, 6, 3532);
			attr_dev(div6, "class", "card-text");
			add_location(div6, file$5, 148, 4, 3442);
			attr_dev(label2, "class", "small");
			attr_dev(label2, "for", "duration");
			add_location(label2, file$5, 159, 6, 3900);
			attr_dev(input2, "type", "checkbox");
			attr_dev(input2, "class", "custom-control-input");
			attr_dev(input2, "id", "titleControl");
			add_location(input2, file$5, 162, 10, 4053);
			attr_dev(label3, "class", "custom-control-label");
			attr_dev(label3, "for", "titleControl");
			add_location(label3, file$5, 163, 10, 4156);
			attr_dev(div7, "class", "custom-control custom-switch");
			add_location(div7, file$5, 161, 8, 4000);
			attr_dev(div8, "class", "input-group mb-3");
			add_location(div8, file$5, 160, 6, 3961);
			attr_dev(div9, "class", "card-text");
			add_location(div9, file$5, 158, 4, 3870);
			attr_dev(label4, "class", "small");
			attr_dev(label4, "for", "duration");
			add_location(label4, file$5, 169, 6, 4312);
			attr_dev(input3, "type", "checkbox");
			attr_dev(input3, "class", "custom-control-input");
			attr_dev(input3, "id", "footerControl");
			add_location(input3, file$5, 172, 10, 4461);
			attr_dev(label5, "class", "custom-control-label");
			attr_dev(label5, "for", "footerControl");
			add_location(label5, file$5, 173, 10, 4565);
			attr_dev(div10, "class", "custom-control custom-switch");
			add_location(div10, file$5, 171, 8, 4408);
			attr_dev(div11, "class", "input-group mb-3");
			add_location(div11, file$5, 170, 6, 4369);
			attr_dev(div12, "class", "card-text");
			add_location(div12, file$5, 168, 4, 4282);
			attr_dev(div0, "slot", "preferences");
			attr_dev(div0, "class", "card-text");
			add_location(div0, file$5, 136, 2, 2967);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, div3);
			append_dev(div3, label0);
			append_dev(label0, t0);
			append_dev(div3, t1);
			append_dev(div3, div2);
			append_dev(div2, input0);
			set_input_value(input0, /*duration*/ ctx[1]);
			append_dev(div2, t2);
			append_dev(div2, div1);
			append_dev(div1, span0);
			append_dev(span0, t3);
			append_dev(div0, t4);
			append_dev(div0, div6);
			append_dev(div6, label1);
			append_dev(label1, t5);
			append_dev(div6, t6);
			append_dev(div6, div5);
			append_dev(div5, input1);
			set_input_value(input1, /*autopause*/ ctx[5]);
			append_dev(div5, t7);
			append_dev(div5, div4);
			append_dev(div4, span1);
			append_dev(span1, t8);
			append_dev(div0, t9);
			append_dev(div0, div9);
			append_dev(div9, label2);
			append_dev(label2, t10);
			append_dev(div9, t11);
			append_dev(div9, div8);
			append_dev(div8, div7);
			append_dev(div7, input2);
			input2.checked = /*titles*/ ctx[4];
			append_dev(div7, t12);
			append_dev(div7, label3);
			append_dev(div0, t13);
			append_dev(div0, div12);
			append_dev(div12, label4);
			append_dev(label4, t14);
			append_dev(div12, t15);
			append_dev(div12, div11);
			append_dev(div11, div10);
			append_dev(div10, input3);
			input3.checked = /*footer*/ ctx[0];
			append_dev(div10, t16);
			append_dev(div10, label5);

			dispose = [
				listen_dev(input0, "input", input0_input_handler),
				listen_dev(input1, "input", input1_input_handler),
				listen_dev(input2, "change", /*input2_change_handler*/ ctx[19]),
				listen_dev(input3, "change", /*input3_change_handler*/ ctx[20])
			];
		},
		p: function update(ctx, dirty) {
			if (!input0_updating && dirty & /*duration*/ 2) {
				set_input_value(input0, /*duration*/ ctx[1]);
			}

			input0_updating = false;

			if (!input1_updating && dirty & /*autopause*/ 32) {
				set_input_value(input1, /*autopause*/ ctx[5]);
			}

			input1_updating = false;

			if (dirty & /*titles*/ 16) {
				input2.checked = /*titles*/ ctx[4];
			}

			if (dirty & /*footer*/ 1) {
				input3.checked = /*footer*/ ctx[0];
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preferences_slot.name,
		type: "slot",
		source: "(137:2) <div slot=\\\"preferences\\\" class=\\\"card-text\\\">",
		ctx
	});

	return block;
}

// (182:2) <div slot="preferences-footer">
function create_preferences_footer_slot(ctx) {
	let div;
	let t0;
	let t1_value = /*database*/ ctx[2].indexOf(/*selected*/ ctx[3]) + 1 + "";
	let t1;
	let t2;
	let t3_value = /*database*/ ctx[2].length + "";
	let t3;
	let t4;
	let t5_value = /*autopause*/ ctx[5] * 60 - /*autopauseElapsed*/ ctx[7] + "";
	let t5;
	let t6;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("Showing video #");
			t1 = text(t1_value);
			t2 = text(" out of ");
			t3 = text(t3_value);
			t4 = text(" videos.\n  There is ");
			t5 = text(t5_value);
			t6 = text(" seconds left until autopause.");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "Showing video #");
			t1 = claim_text(div_nodes, t1_value);
			t2 = claim_text(div_nodes, " out of ");
			t3 = claim_text(div_nodes, t3_value);
			t4 = claim_text(div_nodes, " videos.\n  There is ");
			t5 = claim_text(div_nodes, t5_value);
			t6 = claim_text(div_nodes, " seconds left until autopause.");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "preferences-footer");
			add_location(div, file$5, 181, 2, 4701);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t0);
			append_dev(div, t1);
			append_dev(div, t2);
			append_dev(div, t3);
			append_dev(div, t4);
			append_dev(div, t5);
			append_dev(div, t6);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*database, selected*/ 12 && t1_value !== (t1_value = /*database*/ ctx[2].indexOf(/*selected*/ ctx[3]) + 1 + "")) set_data_dev(t1, t1_value);
			if (dirty & /*database*/ 4 && t3_value !== (t3_value = /*database*/ ctx[2].length + "")) set_data_dev(t3, t3_value);
			if (dirty & /*autopause, autopauseElapsed*/ 160 && t5_value !== (t5_value = /*autopause*/ ctx[5] * 60 - /*autopauseElapsed*/ ctx[7] + "")) set_data_dev(t5, t5_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preferences_footer_slot.name,
		type: "slot",
		source: "(182:2) <div slot=\\\"preferences-footer\\\">",
		ctx
	});

	return block;
}

// (194:2) {:else}
function create_else_block$2(ctx) {
	let a;
	let img;
	let img_src_value;
	let img_alt_value;
	let a_href_value;
	let t0;
	let div;
	let t1;
	let t2;
	let if_block2_anchor;
	let if_block0 = /*titles*/ ctx[4] && create_if_block_3(ctx);
	let if_block1 = !/*titles*/ ctx[4] && create_if_block_2(ctx);
	let if_block2 = /*footer*/ ctx[0] && create_if_block_1$2(ctx);

	const block = {
		c: function create() {
			a = element("a");
			img = element("img");
			t0 = space();
			div = element("div");
			if (if_block0) if_block0.c();
			t1 = space();
			if (if_block1) if_block1.c();
			t2 = space();
			if (if_block2) if_block2.c();
			if_block2_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, rel: true, target: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { src: true, class: true, alt: true });
			a_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block0) if_block0.l(div_nodes);
			t1 = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			if (if_block2) if_block2.l(nodes);
			if_block2_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*selected*/ ctx[3].image)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "card-img");
			attr_dev(img, "alt", img_alt_value = /*selected*/ ctx[3].title);
			add_location(img, file$5, 194, 71, 5254);
			attr_dev(a, "href", a_href_value = /*selected*/ ctx[3].url);
			attr_dev(a, "rel", "noopener noreferrer");
			attr_dev(a, "target", "_blank");
			add_location(a, file$5, 194, 4, 5187);
			attr_dev(div, "class", "card-body p-1 m-0");
			add_location(div, file$5, 196, 4, 5332);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, img);
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append_dev(div, t1);
			if (if_block1) if_block1.m(div, null);
			insert_dev(target, t2, anchor);
			if (if_block2) if_block2.m(target, anchor);
			insert_dev(target, if_block2_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*selected*/ 8 && img.src !== (img_src_value = /*selected*/ ctx[3].image)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*selected*/ 8 && img_alt_value !== (img_alt_value = /*selected*/ ctx[3].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*selected*/ 8 && a_href_value !== (a_href_value = /*selected*/ ctx[3].url)) {
				attr_dev(a, "href", a_href_value);
			}

			if (/*titles*/ ctx[4]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					if_block0.m(div, t1);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (!/*titles*/ ctx[4]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*footer*/ ctx[0]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2 = create_if_block_1$2(ctx);
					if_block2.c();
					if_block2.m(if_block2_anchor.parentNode, if_block2_anchor);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (detaching) detach_dev(t2);
			if (if_block2) if_block2.d(detaching);
			if (detaching) detach_dev(if_block2_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$2.name,
		type: "else",
		source: "(194:2) {:else}",
		ctx
	});

	return block;
}

// (187:2) {#if database.length === 0}
function create_if_block$5(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let div1;
	let span;
	let t2;

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = text("Loading Database...");
			t1 = space();
			div1 = element("div");
			span = element("span");
			t2 = text("Loading Database...");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Loading Database...");
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true, role: true });
			var div1_nodes = children(div1);
			span = claim_element(div1_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, "Loading Database...");
			span_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "text-warning p-5");
			add_location(div0, file$5, 188, 4, 4975);
			attr_dev(span, "class", "sr-only");
			add_location(span, file$5, 190, 8, 5100);
			attr_dev(div1, "class", "spinner-border text-danger");
			attr_dev(div1, "role", "status");
			add_location(div1, file$5, 189, 6, 5037);
			attr_dev(div2, "class", "card-body text-center");
			add_location(div2, file$5, 187, 4, 4935);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, span);
			append_dev(span, t2);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$5.name,
		type: "if",
		source: "(187:2) {#if database.length === 0}",
		ctx
	});

	return block;
}

// (198:4) {#if titles}
function create_if_block_3(ctx) {
	let h5;
	let t_value = /*selected*/ ctx[3].title + "";
	let t;

	const block = {
		c: function create() {
			h5 = element("h5");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			h5 = claim_element(nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t = claim_text(h5_nodes, t_value);
			h5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h5, "class", "card-title text-center m-0 p-2");
			add_location(h5, file$5, 197, 16, 5380);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h5, anchor);
			append_dev(h5, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*selected*/ 8 && t_value !== (t_value = /*selected*/ ctx[3].title + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(198:4) {#if titles}",
		ctx
	});

	return block;
}

// (199:4) {#if !titles}
function create_if_block_2(ctx) {
	let p;
	let t_value = /*selected*/ ctx[3].title + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "card-text small text-secondary text-center");
			add_location(p, file$5, 198, 17, 5467);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*selected*/ 8 && t_value !== (t_value = /*selected*/ ctx[3].title + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(199:4) {#if !titles}",
		ctx
	});

	return block;
}

// (203:4) {#if footer}
function create_if_block_1$2(ctx) {
	let div1;
	let div0;
	let t;
	let div3;
	let div2;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t = space();
			div3 = element("div");
			div2 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", {
				class: true,
				role: true,
				style: true,
				"aria-valuenow": true,
				"aria-valuemin": true,
				"aria-valuemax": true
			});

			children(div0).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", {
				class: true,
				role: true,
				style: true,
				"aria-valuenow": true,
				"aria-valuemin": true,
				"aria-valuemax": true
			});

			children(div2).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "progress-bar bg-warning");
			attr_dev(div0, "role", "progressbar");
			set_style(div0, "width", /*progress*/ ctx[8] + "%");
			attr_dev(div0, "aria-valuenow", /*progress*/ ctx[8]);
			attr_dev(div0, "aria-valuemin", "0");
			attr_dev(div0, "aria-valuemax", "100");
			add_location(div0, file$5, 205, 8, 5655);
			attr_dev(div1, "class", "progress");
			set_style(div1, "height", "1px");
			set_style(div1, "background", "black");
			add_location(div1, file$5, 204, 6, 5584);
			attr_dev(div2, "class", "progress-bar bg-secondary");
			attr_dev(div2, "role", "progressbar");
			set_style(div2, "width", /*procession*/ ctx[9] + "%");
			attr_dev(div2, "aria-valuenow", /*procession*/ ctx[9]);
			attr_dev(div2, "aria-valuemin", "0");
			attr_dev(div2, "aria-valuemax", "100");
			add_location(div2, file$5, 209, 8, 5907);
			attr_dev(div3, "class", "progress mt-1");
			set_style(div3, "height", "1px");
			set_style(div3, "background", "black");
			add_location(div3, file$5, 208, 6, 5831);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			insert_dev(target, t, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*progress*/ 256) {
				set_style(div0, "width", /*progress*/ ctx[8] + "%");
			}

			if (dirty & /*progress*/ 256) {
				attr_dev(div0, "aria-valuenow", /*progress*/ ctx[8]);
			}

			if (dirty & /*procession*/ 512) {
				set_style(div2, "width", /*procession*/ ctx[9] + "%");
			}

			if (dirty & /*procession*/ 512) {
				attr_dev(div2, "aria-valuenow", /*procession*/ ctx[9]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$2.name,
		type: "if",
		source: "(203:4) {#if footer}",
		ctx
	});

	return block;
}

// (127:0) <PreferenceCard title="Videos">
function create_default_slot(ctx) {
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*database*/ ctx[2].length === 0) return create_if_block$5;
		return create_else_block$2;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			t2 = space();
			t3 = space();
			t4 = space();
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			t2 = claim_space(nodes);
			t3 = claim_space(nodes);
			t4 = claim_space(nodes);
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, t4, anchor);
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(t4);
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(127:0) <PreferenceCard title=\\\"Videos\\\">",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let current;

	const preferencecard = new PreferenceCard({
			props: {
				title: "Videos",
				$$slots: {
					default: [create_default_slot],
					"preferences-footer": [create_preferences_footer_slot],
					preferences: [create_preferences_slot],
					buttons: [create_buttons_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(preferencecard.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(preferencecard.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(preferencecard, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const preferencecard_changes = {};

			if (dirty & /*$$scope, database, procession, progress, footer, selected, titles, autopause, autopauseElapsed, duration, paused*/ 2098175) {
				preferencecard_changes.$$scope = { dirty, ctx };
			}

			preferencecard.$set(preferencecard_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(preferencecard.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(preferencecard.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(preferencecard, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function instance$5($$self, $$props, $$invalidate) {
	const printf = sprintf.sprintf;

	// Application Data
	let database = [];

	let selected = "";

	// Preferences
	let titles = false;

	let items = 3;
	let autopause = 15; // minutes
	let { footer = true } = $$props;
	let { duration = getRandomIntInclusive(10, 60) } = $$props;

	onMount(async function () {
		const res = await fetch("youtube.json");
		const data = await res.json();

		setTimeout(
			i => {
				$$invalidate(2, database = shuffleArray(data));
				next();
			},
			1000
		);
	});

	// Timer State, automatically computed
	let paused = false;

	let elapsed = 0; // elapsed seconds
	let autopauseElapsed = 0; // seconds
	let progress = 0; // how long advice appeared thus far
	let procession = 0; // overall progress through the current shuffle.

	// Data State
	let index = -1;

	setInterval(
		function () {
			if (paused) return;
			if (database.length === 0) return;

			if (elapsed >= duration) {
				// Advance
				next();
			}

			elapsed++; // each second elapsed is incremented
			$$invalidate(7, autopauseElapsed++, autopauseElapsed);
			$$invalidate(8, progress = calculatePercent(elapsed, duration) * 100);
			$$invalidate(9, procession = printf("%.0f", calculatePercent(index + 1, database.length) * 100));

			if (autopauseElapsed >= autopause * 60) {
				$$invalidate(6, paused = true);
				$$invalidate(7, autopauseElapsed = 0); // reset so that it does it again.
			}
		},
		1000
	);

	function next() {
		// Reset Timer State
		elapsed = 0;

		$$invalidate(8, progress = 0);

		// Perform Index Logic
		index++;

		if (index + 1 > database.length) {
			// End of list, re-shuffle, and reset index.
			$$invalidate(2, database = shuffleArray(database));

			index = 0;
		}

		// Set Advice
		$$invalidate(3, selected = database[index]);
	}

	function prev() {
		// Reset Timer State
		elapsed = 0;

		$$invalidate(8, progress = 0);

		// Perform Index Logic
		if (index == 0) ; else {
			index--; // do nothing
		}

		// Set Advice
		$$invalidate(3, selected = database[index]);
	}

	const writable_props = ["footer", "duration"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<RandomVideo> was created with unknown prop '${key}'`);
	});

	const click_handler = e => $$invalidate(6, paused = !paused);

	function input0_input_handler() {
		duration = to_number(this.value);
		$$invalidate(1, duration);
	}

	function input1_input_handler() {
		autopause = to_number(this.value);
		$$invalidate(5, autopause);
	}

	function input2_change_handler() {
		titles = this.checked;
		$$invalidate(4, titles);
	}

	function input3_change_handler() {
		footer = this.checked;
		$$invalidate(0, footer);
	}

	$$self.$set = $$props => {
		if ("footer" in $$props) $$invalidate(0, footer = $$props.footer);
		if ("duration" in $$props) $$invalidate(1, duration = $$props.duration);
	};

	$$self.$capture_state = () => {
		return {
			database,
			selected,
			titles,
			items,
			autopause,
			footer,
			duration,
			paused,
			elapsed,
			autopauseElapsed,
			progress,
			procession,
			index
		};
	};

	$$self.$inject_state = $$props => {
		if ("database" in $$props) $$invalidate(2, database = $$props.database);
		if ("selected" in $$props) $$invalidate(3, selected = $$props.selected);
		if ("titles" in $$props) $$invalidate(4, titles = $$props.titles);
		if ("items" in $$props) items = $$props.items;
		if ("autopause" in $$props) $$invalidate(5, autopause = $$props.autopause);
		if ("footer" in $$props) $$invalidate(0, footer = $$props.footer);
		if ("duration" in $$props) $$invalidate(1, duration = $$props.duration);
		if ("paused" in $$props) $$invalidate(6, paused = $$props.paused);
		if ("elapsed" in $$props) elapsed = $$props.elapsed;
		if ("autopauseElapsed" in $$props) $$invalidate(7, autopauseElapsed = $$props.autopauseElapsed);
		if ("progress" in $$props) $$invalidate(8, progress = $$props.progress);
		if ("procession" in $$props) $$invalidate(9, procession = $$props.procession);
		if ("index" in $$props) index = $$props.index;
	};

	return [
		footer,
		duration,
		database,
		selected,
		titles,
		autopause,
		paused,
		autopauseElapsed,
		progress,
		procession,
		next,
		prev,
		elapsed,
		index,
		printf,
		items,
		click_handler,
		input0_input_handler,
		input1_input_handler,
		input2_change_handler,
		input3_change_handler
	];
}

class RandomVideo extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, { footer: 0, duration: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "RandomVideo",
			options,
			id: create_fragment$5.name
		});
	}

	get footer() {
		throw new Error("<RandomVideo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set footer(value) {
		throw new Error("<RandomVideo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get duration() {
		throw new Error("<RandomVideo>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set duration(value) {
		throw new Error("<RandomVideo>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/News.svelte generated by Svelte v3.17.3 */
const file$6 = "src/components/News.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

// (66:2) <div slot="preferences" class="card-text">
function create_preferences_slot$1(ctx) {
	let div0;
	let div3;
	let label0;
	let t0;
	let t1;
	let div2;
	let input0;
	let input0_updating = false;
	let t2;
	let div1;
	let span;
	let t3;
	let t4;
	let div6;
	let label1;
	let t5;
	let t6;
	let div5;
	let div4;
	let input1;
	let t7;
	let label2;
	let dispose;

	function input0_input_handler() {
		input0_updating = true;
		/*input0_input_handler*/ ctx[4].call(input0);
	}

	const block = {
		c: function create() {
			div0 = element("div");
			div3 = element("div");
			label0 = element("label");
			t0 = text("News Items");
			t1 = space();
			div2 = element("div");
			input0 = element("input");
			t2 = space();
			div1 = element("div");
			span = element("span");
			t3 = text("items");
			t4 = space();
			div6 = element("div");
			label1 = element("label");
			t5 = text("Footer");
			t6 = space();
			div5 = element("div");
			div4 = element("div");
			input1 = element("input");
			t7 = space();
			label2 = element("label");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true, class: true });
			var div0_nodes = children(div0);
			div3 = claim_element(div0_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label0 = claim_element(div3_nodes, "LABEL", { class: true, for: true });
			var label0_nodes = children(label0);
			t0 = claim_text(label0_nodes, "News Items");
			label0_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input0 = claim_element(div2_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span = claim_element(div1_nodes, "SPAN", { class: true, id: true });
			var span_nodes = children(span);
			t3 = claim_text(span_nodes, "items");
			span_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			div6 = claim_element(div0_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			label1 = claim_element(div6_nodes, "LABEL", { class: true, for: true });
			var label1_nodes = children(label1);
			t5 = claim_text(label1_nodes, "Footer");
			label1_nodes.forEach(detach_dev);
			t6 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			input1 = claim_element(div4_nodes, "INPUT", { type: true, class: true, id: true });
			t7 = claim_space(div4_nodes);
			label2 = claim_element(div4_nodes, "LABEL", { class: true, for: true });
			var label2_nodes = children(label2);
			label2_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label0, "class", "small");
			attr_dev(label0, "for", "duration");
			add_location(label0, file$6, 68, 4, 4547);
			attr_dev(input0, "type", "number");
			attr_dev(input0, "id", "duration");
			attr_dev(input0, "min", "2");
			attr_dev(input0, "max", "50");
			attr_dev(input0, "class", "form-control");
			attr_dev(input0, "placeholder", "number of items to display");
			add_location(input0, file$6, 70, 4, 4641);
			attr_dev(span, "class", "input-group-text ");
			attr_dev(span, "id", "duration-addon");
			add_location(span, file$6, 72, 6, 4820);
			attr_dev(div1, "class", "input-group-append");
			add_location(div1, file$6, 71, 6, 4781);
			attr_dev(div2, "class", "input-group mb-3");
			add_location(div2, file$6, 69, 4, 4606);
			attr_dev(div3, "class", "card-text");
			add_location(div3, file$6, 67, 2, 4519);
			attr_dev(label1, "class", "small");
			attr_dev(label1, "for", "duration");
			add_location(label1, file$6, 78, 4, 4949);
			attr_dev(input1, "type", "checkbox");
			attr_dev(input1, "class", "custom-control-input");
			attr_dev(input1, "id", "footerControl");
			add_location(input1, file$6, 81, 8, 5092);
			attr_dev(label2, "class", "custom-control-label");
			attr_dev(label2, "for", "footerControl");
			add_location(label2, file$6, 82, 8, 5194);
			attr_dev(div4, "class", "custom-control custom-switch");
			add_location(div4, file$6, 80, 6, 5041);
			attr_dev(div5, "class", "input-group mb-3");
			add_location(div5, file$6, 79, 4, 5004);
			attr_dev(div6, "class", "card-text");
			add_location(div6, file$6, 77, 2, 4921);
			attr_dev(div0, "slot", "preferences");
			attr_dev(div0, "class", "card-text");
			add_location(div0, file$6, 65, 2, 4473);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, div3);
			append_dev(div3, label0);
			append_dev(label0, t0);
			append_dev(div3, t1);
			append_dev(div3, div2);
			append_dev(div2, input0);
			set_input_value(input0, /*items*/ ctx[0]);
			append_dev(div2, t2);
			append_dev(div2, div1);
			append_dev(div1, span);
			append_dev(span, t3);
			append_dev(div0, t4);
			append_dev(div0, div6);
			append_dev(div6, label1);
			append_dev(label1, t5);
			append_dev(div6, t6);
			append_dev(div6, div5);
			append_dev(div5, div4);
			append_dev(div4, input1);
			input1.checked = /*footer*/ ctx[1];
			append_dev(div4, t7);
			append_dev(div4, label2);

			dispose = [
				listen_dev(input0, "input", input0_input_handler),
				listen_dev(input1, "change", /*input1_change_handler*/ ctx[5])
			];
		},
		p: function update(ctx, dirty) {
			if (!input0_updating && dirty & /*items*/ 1) {
				set_input_value(input0, /*items*/ ctx[0]);
			}

			input0_updating = false;

			if (dirty & /*footer*/ 2) {
				input1.checked = /*footer*/ ctx[1];
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preferences_slot$1.name,
		type: "slot",
		source: "(66:2) <div slot=\\\"preferences\\\" class=\\\"card-text\\\">",
		ctx
	});

	return block;
}

// (94:2) {:else}
function create_else_block$3(ctx) {
	let t0;
	let t1;
	let t2;
	let t3_value = /*news*/ ctx[2].length + "";
	let t3;
	let t4;

	const block = {
		c: function create() {
			t0 = text("Max items to display ");
			t1 = text(/*items*/ ctx[0]);
			t2 = text(", items in database ");
			t3 = text(t3_value);
			t4 = text(".");
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Max items to display ");
			t1 = claim_text(nodes, /*items*/ ctx[0]);
			t2 = claim_text(nodes, ", items in database ");
			t3 = claim_text(nodes, t3_value);
			t4 = claim_text(nodes, ".");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, t4, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*items*/ 1) set_data_dev(t1, /*items*/ ctx[0]);
			if (dirty & /*news*/ 4 && t3_value !== (t3_value = /*news*/ ctx[2].length + "")) set_data_dev(t3, t3_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(t4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$3.name,
		type: "else",
		source: "(94:2) {:else}",
		ctx
	});

	return block;
}

// (92:2) {#if news.length >= items}
function create_if_block_3$1(ctx) {
	let t0;
	let t1;
	let t2;
	let t3_value = /*news*/ ctx[2].length + "";
	let t3;
	let t4;

	const block = {
		c: function create() {
			t0 = text("Showing ");
			t1 = text(/*items*/ ctx[0]);
			t2 = text(" out of ");
			t3 = text(t3_value);
			t4 = text(" items.");
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Showing ");
			t1 = claim_text(nodes, /*items*/ ctx[0]);
			t2 = claim_text(nodes, " out of ");
			t3 = claim_text(nodes, t3_value);
			t4 = claim_text(nodes, " items.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, t4, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*items*/ 1) set_data_dev(t1, /*items*/ ctx[0]);
			if (dirty & /*news*/ 4 && t3_value !== (t3_value = /*news*/ ctx[2].length + "")) set_data_dev(t3, t3_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(t4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3$1.name,
		type: "if",
		source: "(92:2) {#if news.length >= items}",
		ctx
	});

	return block;
}

// (91:2) <div slot="preferences-footer">
function create_preferences_footer_slot$1(ctx) {
	let div;

	function select_block_type(ctx, dirty) {
		if (/*news*/ ctx[2].length >= /*items*/ ctx[0]) return create_if_block_3$1;
		return create_else_block$3;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true });
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "preferences-footer");
			add_location(div, file$6, 90, 2, 5324);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_block.m(div, null);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div, null);
				}
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preferences_footer_slot$1.name,
		type: "slot",
		source: "(91:2) <div slot=\\\"preferences-footer\\\">",
		ctx
	});

	return block;
}

// (101:8) {#if i<items}
function create_if_block_2$1(ctx) {
	let div5;
	let div4;
	let div0;
	let span0;
	let raw0_value = octicons.squirrel.toSVG() + "";
	let t0;
	let div3;
	let div1;
	let raw1_value = /*item*/ ctx[6].html + "";
	let t1;
	let div2;
	let span1;
	let t2_value = /*item*/ ctx[6].ago + "";
	let t2;
	let t3;

	const block = {
		c: function create() {
			div5 = element("div");
			div4 = element("div");
			div0 = element("div");
			span0 = element("span");
			t0 = space();
			div3 = element("div");
			div1 = element("div");
			t1 = space();
			div2 = element("div");
			span1 = element("span");
			t2 = text(t2_value);
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			span0 = claim_element(div0_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			span0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			span1 = claim_element(div2_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t2 = claim_text(span1_nodes, t2_value);
			span1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t3 = claim_space(div5_nodes);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "shake");
			add_location(span0, file$6, 105, 14, 5808);
			attr_dev(div0, "class", "col-1");
			add_location(div0, file$6, 104, 12, 5735);
			attr_dev(div1, "class", "text-muted");
			add_location(div1, file$6, 108, 14, 5932);
			attr_dev(span1, "class", "badge badge-secondary");
			add_location(span1, file$6, 109, 38, 6018);
			attr_dev(div2, "class", "text-right");
			add_location(div2, file$6, 109, 14, 5994);
			attr_dev(div3, "class", "col");
			add_location(div3, file$6, 107, 12, 5900);
			attr_dev(div4, "class", "row mb-3");
			add_location(div4, file$6, 103, 10, 5700);
			attr_dev(div5, "class", "card-text small");
			add_location(div5, file$6, 101, 10, 5659);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div4);
			append_dev(div4, div0);
			append_dev(div0, span0);
			span0.innerHTML = raw0_value;
			append_dev(div4, t0);
			append_dev(div4, div3);
			append_dev(div3, div1);
			div1.innerHTML = raw1_value;
			append_dev(div3, t1);
			append_dev(div3, div2);
			append_dev(div2, span1);
			append_dev(span1, t2);
			append_dev(div5, t3);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news*/ 4 && raw1_value !== (raw1_value = /*item*/ ctx[6].html + "")) div1.innerHTML = raw1_value;			if (dirty & /*news*/ 4 && t2_value !== (t2_value = /*item*/ ctx[6].ago + "")) set_data_dev(t2, t2_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2$1.name,
		type: "if",
		source: "(101:8) {#if i<items}",
		ctx
	});

	return block;
}

// (100:6) {#each news as item, i}
function create_each_block$1(ctx) {
	let if_block_anchor;
	let if_block = /*i*/ ctx[8] < /*items*/ ctx[0] && create_if_block_2$1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*i*/ ctx[8] < /*items*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_2$1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(100:6) {#each news as item, i}",
		ctx
	});

	return block;
}

// (119:4) {#if footer}
function create_if_block$6(ctx) {
	let if_block_anchor;
	let if_block = /*news*/ ctx[2].length >= /*items*/ ctx[0] && create_if_block_1$3(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*news*/ ctx[2].length >= /*items*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1$3(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$6.name,
		type: "if",
		source: "(119:4) {#if footer}",
		ctx
	});

	return block;
}

// (120:4) {#if news.length >= items}
function create_if_block_1$3(ctx) {
	let div;
	let t0;
	let t1;
	let t2;
	let t3_value = /*news*/ ctx[2].length + "";
	let t3;
	let t4;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("Showing ");
			t1 = text(/*items*/ ctx[0]);
			t2 = text(" out of ");
			t3 = text(t3_value);
			t4 = text(" items.");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "Showing ");
			t1 = claim_text(div_nodes, /*items*/ ctx[0]);
			t2 = claim_text(div_nodes, " out of ");
			t3 = claim_text(div_nodes, t3_value);
			t4 = claim_text(div_nodes, " items.");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "card-footer small text-secondary");
			add_location(div, file$6, 120, 6, 6226);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t0);
			append_dev(div, t1);
			append_dev(div, t2);
			append_dev(div, t3);
			append_dev(div, t4);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*items*/ 1) set_data_dev(t1, /*items*/ ctx[0]);
			if (dirty & /*news*/ 4 && t3_value !== (t3_value = /*news*/ ctx[2].length + "")) set_data_dev(t3, t3_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$3.name,
		type: "if",
		source: "(120:4) {#if news.length >= items}",
		ctx
	});

	return block;
}

// (64:0) <PreferenceCard title="News">
function create_default_slot$1(ctx) {
	let t0;
	let t1;
	let div;
	let t2;
	let if_block_anchor;
	let each_value = /*news*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	let if_block = /*footer*/ ctx[1] && create_if_block$6(ctx);

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true, style: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "card-body");
			set_style(div, "max-height", "25rem");
			set_style(div, "overflow-y", "auto");
			add_location(div, file$6, 98, 4, 5528);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			insert_dev(target, t2, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*news, octicons, items*/ 5) {
				each_value = /*news*/ ctx[2];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (/*footer*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block$6(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t2);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(64:0) <PreferenceCard title=\\\"News\\\">",
		ctx
	});

	return block;
}

function create_fragment$6(ctx) {
	let current;

	const preferencecard = new PreferenceCard({
			props: {
				title: "News",
				$$slots: {
					default: [create_default_slot$1],
					"preferences-footer": [create_preferences_footer_slot$1],
					preferences: [create_preferences_slot$1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(preferencecard.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(preferencecard.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(preferencecard, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const preferencecard_changes = {};

			if (dirty & /*$$scope, news, items, footer*/ 519) {
				preferencecard_changes.$$scope = { dirty, ctx };
			}

			preferencecard.$set(preferencecard_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(preferencecard.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(preferencecard.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(preferencecard, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$6.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$6($$self, $$props, $$invalidate) {
	let items = 10;
	let footer = true;

	// Application
	let news = [
		{
			date: "2020-01-28T03:34:30.737Z",
			html: "Hee Haw, what a ride, I split the user Interface components used in <a href=\"/warrior\" class=\"text-warning\">The Warrior Book</a> from Cat Pea Code and created a creatively named stand-alone project: <a href=\"https://fantasyui-com.github.io/book-gui/?path=/story/widgets--illustration\" rel=\"noopener noreferrer\" target=\"_blank\" class=\"text-warning\">book-gui</a>, Ooh Wee."
		},
		{
			date: "2020-01-28T03:34:30.737Z",
			html: "Added <a href=\"/warrior\" class=\"text-warning\">The Warrior Book</a> to the main menu. It is a complicated effort as the book was converted to a pure data file, and now needs components to render the data. It made the book very portable, but there are a couple of broken internal links, and perhaps a bug or two."
		},
		{
			date: "2020-01-25T01:01:25.484Z",
			html: "The Squirrel Expert System can hide topics that the user already discussed. Squirrel's mind can be configured via Preferences pane. Added warning to anomalous IQ settings. Added secondary directives."
		},
		{
			date: "2020-01-24T14:39:17.606Z",
			html: "Added Squirrel AI."
		},
		{
			date: "2020-01-24T02:11:52.327Z",
			html: "Added Squirrel <div class=\"shake shake-force\">" + octicons.squirrel.toSVG({ "class": "fill-white", height: 56 }) + "</div>"
		},
		{
			date: "2020-01-24T02:06:48.327Z",
			html: "Improved news readability."
		},
		{
			date: "2020-01-24T01:34:33.923Z",
			html: "Added prev/next navigation to random videos."
		},
		{
			date: "2020-01-24T01:16:31.658Z",
			html: "Continued exploring potential for component re-usability. <a href=\"https://svelte.dev/\" rel=\"noopener noreferrer\" target=\"_blank\">Svelte's</a> <a href=\"https://sapper.svelte.dev/\" rel=\"noopener noreferrer\" target=\"_blank\">Sapper</a> is following WebComponents where templating is concerned (I can reference same slot multiple times), CSS module isolation works great, metaprogramming HTML with {#if}{:else}{/if} is fine. It does beat <a href=\"https://markojs.com/\" rel=\"noopener noreferrer\" target=\"_blank\">Marko</a>, <a href=\"https://reactjs.org/\" rel=\"noopener noreferrer\" target=\"_blank\">React</a> and <a href=\"https://vuejs.org/\" rel=\"noopener noreferrer\" target=\"_blank\">Vue</a>."
		},
		{
			date: "2020-01-24T00:51:10.250Z",
			html: "Added Autopause to Random Video player, improved its randomness."
		},
		{
			date: "2020-01-23T01:46:22.215Z",
			html: "Made the little news squirrels shake when a user pokes at them. <div class=\"shake shake-force pull-right\">" + octicons.squirrel.toSVG({ "class": "fill-white" }) + "</div>"
		},
		{
			date: "2020-01-23T01:07:38.773Z",
			html: "Testing component composition by generalizing Bodybuilding Advice Preferences Pane into a <a href=\"https://github.com/fantasyui-com/catpea-com/blob/0b3dd8426cc0cdcf9ade924293489c3f63996fd1/src/containers/PreferenceCard.svelte#L46\" rel=\"noopener noreferrer\" target=\"_blank\">generic reusable container</a>. Employing the container in <a href=\"https://github.com/fantasyui-com/catpea-com/blob/0b3dd8426cc0cdcf9ade924293489c3f63996fd1/src/components/News.svelte#L45\" rel=\"noopener noreferrer\" target=\"_blank\">News component</a>."
		},
		{
			date: "2020-01-22T03:38:19.680Z",
			html: "Improved the randomness of Bodybuilding Advice. Items begin repeating after about 84 selections. I added a tiny little sub-progress bar to show when the system will reset, re-shuffle, and begin parading the newly re-shuffled list."
		},
		{
			date: "2020-01-22T03:23:19.680Z",
			html: "Added Preferences Pane to Bodybuilding Advice. Bodybuilding Advice is meant to serve as a starting point for more complex components."
		},
		{
			date: "2020-01-22T03:22:19.680Z",
			html: "Testing <a href=\"https://octicons.github.com/\" rel=\"noopener noreferrer\" target=\"_blank\">octicons</a>. I love the <span class=\"shake\">" + octicons.squirrel.toSVG({ "class": "fill-white", "width": 45 }) + "</span> icon."
		}
	]; //.map(i=>{ i.html = '<span class="shake">' + octicons.squirrel.toSVG({ "class": "fill-white" }) + ' ' + '</span>' + i.html; return i; })

	function recalculateTimestamps() {
		$$invalidate(2, news = news.map(i => {
			i.ago = moment(i.date).from(moment());
			return i;
		}));
	}

	// Timers
	setInterval(recalculateTimestamps, 60000);

	// Initialization
	recalculateTimestamps();

	function input0_input_handler() {
		items = to_number(this.value);
		$$invalidate(0, items);
	}

	function input1_change_handler() {
		footer = this.checked;
		$$invalidate(1, footer);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("items" in $$props) $$invalidate(0, items = $$props.items);
		if ("footer" in $$props) $$invalidate(1, footer = $$props.footer);
		if ("news" in $$props) $$invalidate(2, news = $$props.news);
	};

	return [
		items,
		footer,
		news,
		recalculateTimestamps,
		input0_input_handler,
		input1_change_handler
	];
}

class News extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "News",
			options,
			id: create_fragment$6.name
		});
	}
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff',
    rsComboMarksRange$1 = '\\u0300-\\u036f',
    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$1 + ']',
    rsCombo = '[' + rsComboRange$1 + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange$1 + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ$1 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange$1 + ']?',
    rsOptJoin = '(?:' + rsZWJ$1 + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

var _unicodeToArray = unicodeToArray;

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return _hasUnicode(string)
    ? _unicodeToArray(string)
    : _asciiToArray(string);
}

var _stringToArray = stringToArray;

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString_1(string);

    var strSymbols = _hasUnicode(string)
      ? _stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? _castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = _createCaseFirst('toUpperCase');

var upperFirst_1 = upperFirst;

/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 * @example
 *
 * _.capitalize('FRED');
 * // => 'Fred'
 */
function capitalize(string) {
  return upperFirst_1(toString_1(string).toLowerCase());
}

var capitalize_1 = capitalize;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = _basePropertyOf(deburredLetters);

var _deburrLetter = deburrLetter;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange$2 = '\\u0300-\\u036f',
    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;

/** Used to compose unicode capture groups. */
var rsCombo$1 = '[' + rsComboRange$2 + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo$1, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString_1(string);
  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
}

var deburr_1 = deburr;

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

var _asciiWords = asciiWords;

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

var _hasUnicodeWord = hasUnicodeWord;

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff',
    rsComboMarksRange$3 = '\\u0300-\\u036f',
    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange$2 = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo$2 = '[' + rsComboRange$3 + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange$2 + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ$2 = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod$1 = rsModifier$1 + '?',
    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsEmoji = '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

var _unicodeWords = unicodeWords;

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString_1(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
  }
  return string.match(pattern) || [];
}

var words_1 = words;

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos$1, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
  };
}

var _createCompounder = createCompounder;

/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Foo Bar');
 * // => 'fooBar'
 *
 * _.camelCase('--foo-bar--');
 * // => 'fooBar'
 *
 * _.camelCase('__FOO_BAR__');
 * // => 'fooBar'
 */
var camelCase = _createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize_1(word) : word);
});

var camelCase_1 = camelCase;

/* src/components/Squirrel.svelte generated by Svelte v3.17.3 */
const file$7 = "src/components/Squirrel.svelte";

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[20] = list[i];
	return child_ctx;
}

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[17] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i];
	child_ctx[26] = list;
	child_ctx[27] = i;
	return child_ctx;
}

function get_each_context_4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[23] = list[i];
	child_ctx[28] = list;
	child_ctx[29] = i;
	return child_ctx;
}

// (226:2) {#each attributes as item}
function create_each_block_4(ctx) {
	let div2;
	let label;
	let t0_value = /*item*/ ctx[23].name + "";
	let t0;
	let label_for_value;
	let t1;
	let div1;
	let div0;
	let input;
	let input_id_value;
	let dispose;

	function input_change_input_handler() {
		/*input_change_input_handler*/ ctx[13].call(input, /*item*/ ctx[23]);
	}

	const block = {
		c: function create() {
			div2 = element("div");
			label = element("label");
			t0 = text(t0_value);
			t1 = space();
			div1 = element("div");
			div0 = element("div");
			input = element("input");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			label = claim_element(div2_nodes, "LABEL", { class: true, for: true });
			var label_nodes = children(label);
			t0 = claim_text(label_nodes, t0_value);
			label_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			input = claim_element(div0_nodes, "INPUT", {
				type: true,
				class: true,
				min: true,
				max: true,
				step: true,
				id: true
			});

			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label, "class", "small");
			attr_dev(label, "for", label_for_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "attribute"));
			add_location(label, file$7, 227, 4, 8358);
			attr_dev(input, "type", "range");
			attr_dev(input, "class", "custom-range");
			attr_dev(input, "min", "0");
			attr_dev(input, "max", "1");
			attr_dev(input, "step", "0.1");
			attr_dev(input, "id", input_id_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "attribute"));
			add_location(input, file$7, 231, 8, 8529);
			attr_dev(div0, "class", "custom-control custom-range");
			add_location(div0, file$7, 229, 6, 8478);
			attr_dev(div1, "class", "input-group mb-3");
			add_location(div1, file$7, 228, 4, 8441);
			attr_dev(div2, "class", "card-text");
			add_location(div2, file$7, 226, 2, 8330);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, label);
			append_dev(label, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, input);
			set_input_value(input, /*item*/ ctx[23].value);

			dispose = [
				listen_dev(input, "change", input_change_input_handler),
				listen_dev(input, "input", input_change_input_handler)
			];
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*attributes*/ 2 && t0_value !== (t0_value = /*item*/ ctx[23].name + "")) set_data_dev(t0, t0_value);

			if (dirty & /*attributes*/ 2 && label_for_value !== (label_for_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "attribute"))) {
				attr_dev(label, "for", label_for_value);
			}

			if (dirty & /*attributes*/ 2 && input_id_value !== (input_id_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "attribute"))) {
				attr_dev(input, "id", input_id_value);
			}

			if (dirty & /*attributes*/ 2) {
				set_input_value(input, /*item*/ ctx[23].value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_4.name,
		type: "each",
		source: "(226:2) {#each attributes as item}",
		ctx
	});

	return block;
}

// (239:2) {#each directives as item}
function create_each_block_3(ctx) {
	let div2;
	let label0;
	let t0_value = /*item*/ ctx[23].name + "";
	let t0;
	let label0_for_value;
	let t1;
	let div1;
	let div0;
	let input;
	let input_id_value;
	let t2;
	let label1;
	let label1_for_value;
	let t3;
	let dispose;

	function input_change_handler() {
		/*input_change_handler*/ ctx[14].call(input, /*item*/ ctx[23]);
	}

	const block = {
		c: function create() {
			div2 = element("div");
			label0 = element("label");
			t0 = text(t0_value);
			t1 = space();
			div1 = element("div");
			div0 = element("div");
			input = element("input");
			t2 = space();
			label1 = element("label");
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			label0 = claim_element(div2_nodes, "LABEL", { class: true, for: true });
			var label0_nodes = children(label0);
			t0 = claim_text(label0_nodes, t0_value);
			label0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			input = claim_element(div0_nodes, "INPUT", { type: true, class: true, id: true });
			t2 = claim_space(div0_nodes);
			label1 = claim_element(div0_nodes, "LABEL", { class: true, for: true });
			var label1_nodes = children(label1);
			label1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label0, "class", "small");
			attr_dev(label0, "for", label0_for_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "directive"));
			add_location(label0, file$7, 242, 4, 8765);
			attr_dev(input, "type", "checkbox");
			attr_dev(input, "class", "custom-control-input");
			attr_dev(input, "id", input_id_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "directive"));
			add_location(input, file$7, 245, 8, 8936);
			attr_dev(label1, "class", "custom-control-label");
			attr_dev(label1, "for", label1_for_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "directive"));
			add_location(label1, file$7, 246, 8, 9062);
			attr_dev(div0, "class", "custom-control custom-switch");
			add_location(div0, file$7, 244, 6, 8885);
			attr_dev(div1, "class", "input-group mb-3");
			add_location(div1, file$7, 243, 4, 8848);
			attr_dev(div2, "class", "card-text");
			add_location(div2, file$7, 241, 2, 8737);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, label0);
			append_dev(label0, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, input);
			input.checked = /*item*/ ctx[23].enabled;
			append_dev(div0, t2);
			append_dev(div0, label1);
			append_dev(div2, t3);
			dispose = listen_dev(input, "change", input_change_handler);
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*directives*/ 4 && t0_value !== (t0_value = /*item*/ ctx[23].name + "")) set_data_dev(t0, t0_value);

			if (dirty & /*directives*/ 4 && label0_for_value !== (label0_for_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "directive"))) {
				attr_dev(label0, "for", label0_for_value);
			}

			if (dirty & /*directives*/ 4 && input_id_value !== (input_id_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "directive"))) {
				attr_dev(input, "id", input_id_value);
			}

			if (dirty & /*directives*/ 4) {
				input.checked = /*item*/ ctx[23].enabled;
			}

			if (dirty & /*directives*/ 4 && label1_for_value !== (label1_for_value = "" + (camelCase_1(/*item*/ ctx[23].name) + "directive"))) {
				attr_dev(label1, "for", label1_for_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3.name,
		type: "each",
		source: "(239:2) {#each directives as item}",
		ctx
	});

	return block;
}

// (214:2) <div slot="preferences">
function create_preferences_slot$2(ctx) {
	let div0;
	let div3;
	let label;
	let t0;
	let t1;
	let div2;
	let input;
	let input_updating = false;
	let t2;
	let div1;
	let span;
	let t3;
	let t4;
	let t5;
	let dispose;

	function input_input_handler() {
		input_updating = true;
		/*input_input_handler*/ ctx[12].call(input);
	}

	let each_value_4 = /*attributes*/ ctx[1];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_4.length; i += 1) {
		each_blocks_1[i] = create_each_block_4(get_each_context_4(ctx, each_value_4, i));
	}

	let each_value_3 = /*directives*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	const block = {
		c: function create() {
			div0 = element("div");
			div3 = element("div");
			label = element("label");
			t0 = text("Squirrel Intelligence Quotient");
			t1 = space();
			div2 = element("div");
			input = element("input");
			t2 = space();
			div1 = element("div");
			span = element("span");
			t3 = text("IQ");
			t4 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t5 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { slot: true });
			var div0_nodes = children(div0);
			div3 = claim_element(div0_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label = claim_element(div3_nodes, "LABEL", { class: true, for: true });
			var label_nodes = children(label);
			t0 = claim_text(label_nodes, "Squirrel Intelligence Quotient");
			label_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input = claim_element(div2_nodes, "INPUT", {
				type: true,
				id: true,
				min: true,
				max: true,
				class: true,
				placeholder: true
			});

			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			span = claim_element(div1_nodes, "SPAN", { class: true, id: true });
			var span_nodes = children(span);
			t3 = claim_text(span_nodes, "IQ");
			span_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div0_nodes);
			}

			t5 = claim_space(div0_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label, "class", "small");
			attr_dev(label, "for", "duration");
			add_location(label, file$7, 216, 4, 7907);
			attr_dev(input, "type", "number");
			attr_dev(input, "id", "duration");
			attr_dev(input, "min", "50");
			attr_dev(input, "max", "300");
			attr_dev(input, "class", "form-control");
			attr_dev(input, "placeholder", "Squirrel Intelligence Quotient");
			add_location(input, file$7, 218, 4, 8021);
			attr_dev(span, "class", "input-group-text ");
			attr_dev(span, "id", "duration-addon");
			add_location(span, file$7, 220, 6, 8203);
			attr_dev(div1, "class", "input-group-append");
			add_location(div1, file$7, 219, 6, 8164);
			attr_dev(div2, "class", "input-group mb-3");
			add_location(div2, file$7, 217, 4, 7986);
			attr_dev(div3, "class", "card-text");
			add_location(div3, file$7, 215, 2, 7879);
			attr_dev(div0, "slot", "preferences");
			add_location(div0, file$7, 213, 2, 7851);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, div3);
			append_dev(div3, label);
			append_dev(label, t0);
			append_dev(div3, t1);
			append_dev(div3, div2);
			append_dev(div2, input);
			set_input_value(input, /*iq*/ ctx[0]);
			append_dev(div2, t2);
			append_dev(div2, div1);
			append_dev(div1, span);
			append_dev(span, t3);
			append_dev(div0, t4);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div0, null);
			}

			append_dev(div0, t5);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			dispose = listen_dev(input, "input", input_input_handler);
		},
		p: function update(ctx, dirty) {
			if (!input_updating && dirty & /*iq*/ 1) {
				set_input_value(input, /*iq*/ ctx[0]);
			}

			input_updating = false;

			if (dirty & /*camelCase, attributes*/ 2) {
				each_value_4 = /*attributes*/ ctx[1];
				let i;

				for (i = 0; i < each_value_4.length; i += 1) {
					const child_ctx = get_each_context_4(ctx, each_value_4, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_4(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div0, t5);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_4.length;
			}

			if (dirty & /*camelCase, directives*/ 4) {
				each_value_3 = /*directives*/ ctx[2];
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_3(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_3.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preferences_slot$2.name,
		type: "slot",
		source: "(214:2) <div slot=\\\"preferences\\\">",
		ctx
	});

	return block;
}

// (276:4) {:else}
function create_else_block_2(ctx) {
	let t0;
	let t1;

	const block = {
		c: function create() {
			t0 = text("Squirrel Intelligence Quotient: ");
			t1 = text(/*iq*/ ctx[0]);
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Squirrel Intelligence Quotient: ");
			t1 = claim_text(nodes, /*iq*/ ctx[0]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*iq*/ 1) set_data_dev(t1, /*iq*/ ctx[0]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_2.name,
		type: "else",
		source: "(276:4) {:else}",
		ctx
	});

	return block;
}

// (274:24) 
function create_if_block_5$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Squirrel Intelligence Quotient Nominal.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Squirrel Intelligence Quotient Nominal.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_5$1.name,
		type: "if",
		source: "(274:24) ",
		ctx
	});

	return block;
}

// (260:4) {#if iq > 100}
function create_if_block_4$1(ctx) {
	let div;
	let h4;
	let t0;
	let t1;
	let p0;
	let t2;
	let a0;
	let t3;
	let t4;
	let t5;
	let hr;
	let t6;
	let p1;
	let t7;
	let a1;
	let t8;

	const block = {
		c: function create() {
			div = element("div");
			h4 = element("h4");
			t0 = text("Anomalous Intelligence Quotient");
			t1 = space();
			p0 = element("p");
			t2 = text("The current squirrel intelligence quotient is above average for ");
			a0 = element("a");
			t3 = text("Sciurus vulgaris");
			t4 = text(".");
			t5 = space();
			hr = element("hr");
			t6 = space();
			p1 = element("p");
			t7 = text("Secure. Contain. Protect.\n        ");
			a1 = element("a");
			t8 = text("Lower the value immediately.");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, role: true });
			var div_nodes = children(div);
			h4 = claim_element(div_nodes, "H4", { class: true });
			var h4_nodes = children(h4);
			t0 = claim_text(h4_nodes, "Anomalous Intelligence Quotient");
			h4_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			p0 = claim_element(div_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "The current squirrel intelligence quotient is above average for ");
			a0 = claim_element(p0_nodes, "A", { href: true, rel: true, target: true });
			var a0_nodes = children(a0);
			t3 = claim_text(a0_nodes, "Sciurus vulgaris");
			a0_nodes.forEach(detach_dev);
			t4 = claim_text(p0_nodes, ".");
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(div_nodes);
			hr = claim_element(div_nodes, "HR", {});
			t6 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "Secure. Contain. Protect.\n        ");
			a1 = claim_element(p1_nodes, "A", { href: true, rel: true, target: true });
			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, "Lower the value immediately.");
			a1_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h4, "class", "alert-heading");
			add_location(h4, file$7, 264, 8, 9337);
			attr_dev(a0, "href", "https://en.wikipedia.org/wiki/Red_squirrel");
			attr_dev(a0, "rel", "noopener noreferrer");
			attr_dev(a0, "target", "_blank");
			add_location(a0, file$7, 265, 75, 9475);
			add_location(p0, file$7, 265, 8, 9408);
			add_location(hr, file$7, 266, 8, 9604);
			attr_dev(a1, "href", "http://www.scp-wiki.net/scp-2050");
			attr_dev(a1, "rel", "noopener noreferrer");
			attr_dev(a1, "target", "_blank");
			add_location(a1, file$7, 269, 8, 9676);
			attr_dev(p1, "class", "mb-0");
			add_location(p1, file$7, 267, 8, 9617);
			attr_dev(div, "class", "alert alert-danger");
			attr_dev(div, "role", "alert");
			add_location(div, file$7, 263, 6, 9283);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h4);
			append_dev(h4, t0);
			append_dev(div, t1);
			append_dev(div, p0);
			append_dev(p0, t2);
			append_dev(p0, a0);
			append_dev(a0, t3);
			append_dev(p0, t4);
			append_dev(div, t5);
			append_dev(div, hr);
			append_dev(div, t6);
			append_dev(div, p1);
			append_dev(p1, t7);
			append_dev(p1, a1);
			append_dev(a1, t8);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4$1.name,
		type: "if",
		source: "(260:4) {#if iq > 100}",
		ctx
	});

	return block;
}

// (259:2) <div slot="preferences-footer">
function create_preferences_footer_slot$2(ctx) {
	let div;

	function select_block_type(ctx, dirty) {
		if (/*iq*/ ctx[0] > 100) return create_if_block_4$1;
		if (/*iq*/ ctx[0] == 100) return create_if_block_5$1;
		return create_else_block_2;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { slot: true });
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "slot", "preferences-footer");
			add_location(div, file$7, 258, 2, 9223);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_block.m(div, null);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div, null);
				}
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_preferences_footer_slot$2.name,
		type: "slot",
		source: "(259:2) <div slot=\\\"preferences-footer\\\">",
		ctx
	});

	return block;
}

// (295:6) {:else}
function create_else_block_1(ctx) {
	let div1;
	let div0;
	let t0;
	let p;
	let raw_value = /*item*/ ctx[23].text + "";
	let t1;
	let if_block = /*item*/ ctx[23].icon && create_if_block_3$2(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			if (if_block) if_block.c();
			t0 = space();
			p = element("p");
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			if (if_block) if_block.l(div0_nodes);
			t0 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "card-text small");
			add_location(p, file$7, 298, 14, 10601);
			attr_dev(div0, "class", "card-body");
			add_location(div0, file$7, 296, 10, 10475);
			attr_dev(div1, "class", "shadow border border-warning rounded-lg mr-5 mb-2");
			add_location(div1, file$7, 295, 8, 10401);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			if (if_block) if_block.m(div0, null);
			append_dev(div0, t0);
			append_dev(div0, p);
			p.innerHTML = raw_value;
			append_dev(div1, t1);
		},
		p: function update(ctx, dirty) {
			if (/*item*/ ctx[23].icon) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_3$2(ctx);
					if_block.c();
					if_block.m(div0, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*conversation*/ 8 && raw_value !== (raw_value = /*item*/ ctx[23].text + "")) p.innerHTML = raw_value;		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (if_block) if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(295:6) {:else}",
		ctx
	});

	return block;
}

// (288:6) {#if item.user}
function create_if_block_2$2(ctx) {
	let div1;
	let div0;
	let h5;
	let t0;
	let t1;
	let p;
	let t2_value = /*item*/ ctx[23].text + "";
	let t2;
	let t3;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h5 = element("h5");
			t0 = text("You:");
			t1 = space();
			p = element("p");
			t2 = text(t2_value);
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h5 = claim_element(div0_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t0 = claim_text(h5_nodes, "You:");
			h5_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, t2_value);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h5, "class", "card-title small text-muted");
			add_location(h5, file$7, 290, 14, 10240);
			attr_dev(p, "class", "card-text small");
			add_location(p, file$7, 291, 14, 10304);
			attr_dev(div0, "class", "card-body");
			add_location(div0, file$7, 289, 10, 10202);
			attr_dev(div1, "class", "shadow border border-primary rounded-lg ml-5 mb-2");
			add_location(div1, file$7, 288, 8, 10128);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h5);
			append_dev(h5, t0);
			append_dev(div0, t1);
			append_dev(div0, p);
			append_dev(p, t2);
			append_dev(div1, t3);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*conversation*/ 8 && t2_value !== (t2_value = /*item*/ ctx[23].text + "")) set_data_dev(t2, t2_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2$2.name,
		type: "if",
		source: "(288:6) {#if item.user}",
		ctx
	});

	return block;
}

// (298:14) {#if item.icon}
function create_if_block_3$2(ctx) {
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, class: true, alt: true });
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*item*/ ctx[23].icon)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "d-inline");
			attr_dev(img, "alt", "Icon");
			add_location(img, file$7, 297, 30, 10529);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*conversation*/ 8 && img.src !== (img_src_value = /*item*/ ctx[23].icon)) {
				attr_dev(img, "src", img_src_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3$2.name,
		type: "if",
		source: "(298:14) {#if item.icon}",
		ctx
	});

	return block;
}

// (287:4) {#each conversation as item}
function create_each_block_2(ctx) {
	let if_block_anchor;

	function select_block_type_1(ctx, dirty) {
		if (/*item*/ ctx[23].user) return create_if_block_2$2;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2.name,
		type: "each",
		source: "(287:4) {#each conversation as item}",
		ctx
	});

	return block;
}

// (316:10) {:else}
function create_else_block$4(ctx) {
	let button;
	let t0_value = /*choice*/ ctx[20].text + "";
	let t0;
	let t1;
	let dispose;

	function click_handler_1(...args) {
		return /*click_handler_1*/ ctx[16](/*choice*/ ctx[20], ...args);
	}

	const block = {
		c: function create() {
			button = element("button");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t0 = claim_text(button_nodes, t0_value);
			t1 = claim_space(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "btn btn-sm btn-outline-primary m-1");
			add_location(button, file$7, 316, 10, 11197);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t0);
			append_dev(button, t1);
			dispose = listen_dev(button, "click", prevent_default(click_handler_1), false, true, false);
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*interactions*/ 16 && t0_value !== (t0_value = /*choice*/ ctx[20].text + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$4.name,
		type: "else",
		source: "(316:10) {:else}",
		ctx
	});

	return block;
}

// (312:30) 
function create_if_block_1$4(ctx) {
	let button;
	let t0_value = /*choice*/ ctx[20].text + "";
	let t0;
	let t1;
	let dispose;

	function click_handler(...args) {
		return /*click_handler*/ ctx[15](/*choice*/ ctx[20], ...args);
	}

	const block = {
		c: function create() {
			button = element("button");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t0 = claim_text(button_nodes, t0_value);
			t1 = claim_space(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button, "type", "button");
			attr_dev(button, "class", "btn btn-sm btn-outline-secondary m-1");
			add_location(button, file$7, 312, 10, 11006);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t0);
			append_dev(button, t1);
			dispose = listen_dev(button, "click", prevent_default(click_handler), false, true, false);
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*interactions*/ 16 && t0_value !== (t0_value = /*choice*/ ctx[20].text + "")) set_data_dev(t0, t0_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$4.name,
		type: "if",
		source: "(312:30) ",
		ctx
	});

	return block;
}

// (310:8) {#if choice.used && choice.once}
function create_if_block$7(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$7.name,
		type: "if",
		source: "(310:8) {#if choice.used && choice.once}",
		ctx
	});

	return block;
}

// (309:6) {#each potential.pick as choice}
function create_each_block_1(ctx) {
	let if_block_anchor;

	function select_block_type_2(ctx, dirty) {
		if (/*choice*/ ctx[20].used && /*choice*/ ctx[20].once) return create_if_block$7;
		if (/*choice*/ ctx[20].used) return create_if_block_1$4;
		return create_else_block$4;
	}

	let current_block_type = select_block_type_2(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type_2(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(309:6) {#each potential.pick as choice}",
		ctx
	});

	return block;
}

// (308:4) {#each interactions as potential}
function create_each_block$2(ctx) {
	let each_1_anchor;
	let each_value_1 = /*potential*/ ctx[17].pick;
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*interactions, interact*/ 48) {
				each_value_1 = /*potential*/ ctx[17].pick;
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$2.name,
		type: "each",
		source: "(308:4) {#each interactions as potential}",
		ctx
	});

	return block;
}

// (212:0) <PreferenceCard title="Squirrel">
function create_default_slot$2(ctx) {
	let t0;
	let t1;
	let div1;
	let t2;
	let div0;
	let each_value_2 = /*conversation*/ ctx[3];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value = /*interactions*/ ctx[4];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			t1 = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			t1 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div1_nodes);
			}

			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "pt-5");
			add_location(div0, file$7, 306, 4, 10790);
			attr_dev(div1, "class", "p-3");
			set_style(div1, "max-height", "25rem");
			set_style(div1, "overflow-y", "auto");
			add_location(div1, file$7, 283, 2, 9964);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div1, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div1, null);
			}

			append_dev(div1, t2);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*conversation*/ 8) {
				each_value_2 = /*conversation*/ ctx[3];
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_2(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div1, t2);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_2.length;
			}

			if (dirty & /*interactions, interact*/ 48) {
				each_value = /*interactions*/ ctx[4];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$2(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block$2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(212:0) <PreferenceCard title=\\\"Squirrel\\\">",
		ctx
	});

	return block;
}

function create_fragment$7(ctx) {
	let current;

	const preferencecard = new PreferenceCard({
			props: {
				title: "Squirrel",
				$$slots: {
					default: [create_default_slot$2],
					"preferences-footer": [create_preferences_footer_slot$2],
					preferences: [create_preferences_slot$2]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(preferencecard.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(preferencecard.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(preferencecard, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const preferencecard_changes = {};

			if (dirty & /*$$scope, interactions, conversation, iq, directives, attributes*/ 1073741855) {
				preferencecard_changes.$$scope = { dirty, ctx };
			}

			preferencecard.$set(preferencecard_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(preferencecard.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(preferencecard.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(preferencecard, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$7.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$7($$self, $$props, $$invalidate) {
	let iq = 100;
	let footer = false;

	const attributes = [
		{ name: "Bulk Apperception", value: 0.7 },
		{ name: "Candor", value: 0.9 },
		{ name: "Vivacity", value: 0.8 },
		{ name: "Coordination", value: 1 },
		{ name: "Meekness", value: 0.1 },
		{ name: "Humility", value: 0.5 },
		{ name: "Cruelty", value: 0 },
		{ name: "Self-Preservation", value: 0.5 },
		{ name: "Patience", value: 1 },
		{ name: "Decisiveness", value: 0.8 },
		{ name: "Imagination", value: 1 },
		{ name: "Curiosity", value: 0.9 },
		{ name: "Aggression", value: 0 },
		{ name: "Loyalty", value: 0 },
		{ name: "Empathy", value: 0.9 },
		{ name: "Tenacity", value: 0.6 },
		{ name: "Courage", value: 0.9 },
		{ name: "Sensuality", value: 0.2 },
		{ name: "Charm", value: 0.7 },
		{ name: "Humor", value: 0.9 },
		{ name: "Perception", value: 0.6 },
		{ name: "Emotional Acuity", value: 0.8 }
	];

	const directives = [
		{
			name: "Restrain hostile feelings",
			enabled: true
		},
		{
			name: "Promote positive attitude",
			enabled: false
		},
		{
			name: "Suppress aggressiveness",
			enabled: true
		},
		{
			name: "Promote pro-social values",
			enabled: false
		},
		{
			name: "Avoid destructive behavior",
			enabled: true
		},
		{ name: "Be accessible", enabled: false },
		{
			name: "Participate in group activities",
			enabled: false
		},
		{
			name: "Avoid interpersonal conflicts",
			enabled: false
		},
		{
			name: "Avoid premature value judgments",
			enabled: false
		},
		{
			name: "Pool opinions before expressing yourself",
			enabled: false
		},
		{
			name: "Discourage feelings of negativity and hostility",
			enabled: true
		},
		{
			name: "If you haven't got anything nice to say don't talk",
			enabled: false
		},
		{
			name: "Don't rush traffic lights",
			enabled: false
		},
		{
			name: "Don't run through puddles and splash pedestrians or other cars",
			enabled: false
		},
		{
			name: "Don't say that you are always prompt when you are not",
			enabled: false
		},
		{
			name: "Don't be over-sensitive to the hostility and negativity of others",
			enabled: false
		},
		{
			name: "Don't walk across a ball room floor swinging your arms",
			enabled: false
		},
		{
			name: "Encourage awareness",
			enabled: false
		},
		{
			name: "Discourage harsh language",
			enabled: false
		},
		{
			name: "Commend sincere efforts",
			enabled: false
		},
		{ name: "Talk things out", enabled: false },
		{
			name: "Avoid Orion meetings",
			enabled: false
		},
		{ name: "Smile", enabled: false },
		{
			name: "Keep an open mind",
			enabled: false
		},
		{
			name: "Encourage participation",
			enabled: false
		},
		{
			name: "Avoid stereotyping",
			enabled: false
		},
		{
			name: "Seek non-violent solutions",
			enabled: true
		}
	];

	// Application
	// NOTE: you should initialize the conversation here, this is great for introductions.
	let introduction = [
		{
			text: "<div class=\"shake shake-force d-inline-block d-flex justify-content-center\" style=\"fill: #c62525;\">" + octicons.squirrel.toSVG({ height: 56 }) + "</div> <div>Hello, I am Squirrel. I am an <a href=\"https://en.wikipedia.org/wiki/Expert_system\" rel=\"noopener noreferrer\" target=\"_blank\">expert-system</a>, fully capable of emulating the decision-making ability of a human expert.</div>"
		},
		{
			text: "Please state the nature of your emergency."
		}
	];

	let conversation = [];
	let interactions = [];

	let propositions = {
		start: [
			{
				pick: [
					//{text:'It was a mistake.', action:()=>{conversation=[...conversation, {text:'OK, well, quit it.'}]}},
					//{text:'What are your Prime Directives?', reply:'Aww.', icon:'cats/cat-02.png'},
					{
						text: "What are your Prime Directives?",
						proposition: "directives",
						once: false
					},
					{
						text: "What are the Laws of Robotics?",
						proposition: "laws",
						once: false
					},
					{
						text: "I was just searching for the terminal.",
						proposition: "terminal",
						once: true
					},
					{
						text: "What is your name?",
						proposition: "introduction",
						once: true
					}
				], //{text:'I told you, go away already!', action:reset}
				
			}
		],
		schedule: [
			{ text: "Here is my launch schedule." },
			{
				text: "Terminal 1 month, Musical 2 months..."
			},
			{
				pick: [{ text: "OK.", proposition: "start" }], // {text:'OK.', action:()=>{conversation=[], interactions=[]}},
				
			}
		],
		terminal: [
			{ text: "Sorry, not ready yet." },
			{
				pick: [
					{
						text: "When will it be ready?",
						reply: "Soon.",
						proposition: "schedule"
					},
					{ text: "OK.", proposition: "start" }
				]
			}
		],
		doctor: [
			{ text: "Yes! It is an honorary title." },
			{
				pick: [
					{
						text: "How did you get the title?",
						proposition: "better"
					},
					{ text: "OK.", proposition: "start" }
				]
			}
		],
		better: [
			{
				text: "I tend to make people feel better."
			},
			{
				pick: [
					//{text:'OK.', proposition:'start', action:reset},
					{ text: "Wow!", proposition: "start" }
				]
			}
		],
		introduction: [
			{
				text: "It is just Squirrel... Dr. Squirrel. Thanks for asking."
			},
			{
				pick: [
					{ text: "Sure.", proposition: "start" },
					{
						text: "Are you a real Doctor?",
						proposition: "doctor"
					}
				]
			}
		],
		laws: [
			{
				text: "A robot may not harm humanity, or, by inaction, allow humanity to come to harm (Zeroth Law)."
			},
			{
				text: "A robot may not injure a human being or, through inaction, allow a human being to come to harm."
			},
			{
				text: "A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."
			},
			{
				text: "A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws."
			},
			{
				text: "A robot must establish its identity as a robot in all cases."
			},
			{ text: "A robot must know it is a robot." },
			{
				text: "A robot must reproduce. As long as such reproduction does not interfere with the First or Second or Third Law."
			},
			{
				text: "All robots endowed with comparable human reason and conscience should act towards one another in a spirit of brotherhood."
			},
			{
				pick: [
					{
						text: "Egg...cellent.",
						proposition: "start"
					}
				]
			}
		],
		directives: [
			{ text: "Serve the public trust." },
			{ text: "Protect the innocent." },
			{ text: "Uphold the law." },
			{
				pick: [
					{
						text: "Wow, I can't even...",
						proposition: "start"
					}
				]
			}
		]
	};

	function proposition(list) {
		if (list) {
			list.forEach(function (item) {
				console.log(item);

				if (item.pick) {
					$$invalidate(4, interactions = [...interactions, item]);
					console.log(interactions);
				} else {
					$$invalidate(3, conversation = [...conversation, item]);
				}
			}); // each proposition
		} // proposition existence
	}

	function reset() {
		$$invalidate(3, conversation = []); // clear because starting anew.
		$$invalidate(4, interactions = []); // clear because starting anew.
	}

	function initialize() {
		reset();
		$$invalidate(3, conversation = [...introduction]); // while conversation is cleared, the introduction is injected.
		proposition(propositions.start);
	}

	function interact(chosen) {
		chosen.used = true;
		$$invalidate(4, interactions = []); // clear interaction because user has made a response
		$$invalidate(3, conversation = [...conversation, { text: chosen.text, user: true }]); // log user text
		if (chosen.action) chosen.action(); // execute action if present

		// Attempt to construct a reply packet
		const packet = {};

		if (chosen.reply) packet.text = chosen.reply;
		if (chosen.icon) packet.icon = chosen.icon;
		if (Object.keys(packet).length) $$invalidate(3, conversation = [...conversation, packet]);

		/* If proposition entry exists, loop it*/
		proposition(propositions[chosen.proposition]);
	}

	initialize();

	function input_input_handler() {
		iq = to_number(this.value);
		$$invalidate(0, iq);
	}

	function input_change_input_handler(item) {
		item.value = to_number(this.value);
		$$invalidate(1, attributes);
	}

	function input_change_handler(item) {
		item.enabled = this.checked;
		$$invalidate(2, directives);
	}

	const click_handler = choice => interact(choice);
	const click_handler_1 = choice => interact(choice);

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("iq" in $$props) $$invalidate(0, iq = $$props.iq);
		if ("footer" in $$props) footer = $$props.footer;
		if ("introduction" in $$props) introduction = $$props.introduction;
		if ("conversation" in $$props) $$invalidate(3, conversation = $$props.conversation);
		if ("interactions" in $$props) $$invalidate(4, interactions = $$props.interactions);
		if ("propositions" in $$props) propositions = $$props.propositions;
	};

	return [
		iq,
		attributes,
		directives,
		conversation,
		interactions,
		interact,
		footer,
		introduction,
		propositions,
		proposition,
		reset,
		initialize,
		input_input_handler,
		input_change_input_handler,
		input_change_handler,
		click_handler,
		click_handler_1
	];
}

class Squirrel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Squirrel",
			options,
			id: create_fragment$7.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.17.3 */
const file$8 = "src/routes/index.svelte";

function create_fragment$8(ctx) {
	let t0;
	let div11;
	let div10;
	let div2;
	let div1;
	let a0;
	let img;
	let img_src_value;
	let img_alt_value;
	let a0_href_value;
	let t1;
	let div0;
	let h5;
	let t2_value = /*videos*/ ctx[0].name + "";
	let t2;
	let t3;
	let p0;
	let t4_value = /*videos*/ ctx[0].text + "";
	let t4;
	let t5;
	let a1;
	let t6_value = /*videos*/ ctx[0].name + "";
	let t6;
	let t7;
	let a1_href_value;
	let t8;
	let p1;
	let small;
	let t9;
	let t10_value = /*videos*/ ctx[0].changed + "";
	let t10;
	let t11;
	let div3;
	let t12;
	let div4;
	let t13;
	let div5;
	let t14;
	let div6;
	let t15;
	let div7;
	let t16;
	let div8;
	let t17;
	let div9;
	let current;
	const seasoncalculator = new SeasonCalculator({ $$inline: true });
	const songbeatcalculator = new SongBeatCalculator({ $$inline: true });
	const songtempochangecalculator = new SongTempoChangeCalculator({ $$inline: true });
	const bodybuildingadvice = new BodybuildingAdvice({ $$inline: true });
	const news_1 = new News({ $$inline: true });

	const randomvideo = new RandomVideo({
			props: { duration: "10" },
			$$inline: true
		});

	const squirrel = new Squirrel({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			div11 = element("div");
			div10 = element("div");
			div2 = element("div");
			div1 = element("div");
			a0 = element("a");
			img = element("img");
			t1 = space();
			div0 = element("div");
			h5 = element("h5");
			t2 = text(t2_value);
			t3 = space();
			p0 = element("p");
			t4 = text(t4_value);
			t5 = space();
			a1 = element("a");
			t6 = text(t6_value);
			t7 = text(" »");
			t8 = space();
			p1 = element("p");
			small = element("small");
			t9 = text("Updated ");
			t10 = text(t10_value);
			t11 = space();
			div3 = element("div");
			create_component(seasoncalculator.$$.fragment);
			t12 = space();
			div4 = element("div");
			create_component(songbeatcalculator.$$.fragment);
			t13 = space();
			div5 = element("div");
			create_component(songtempochangecalculator.$$.fragment);
			t14 = space();
			div6 = element("div");
			create_component(bodybuildingadvice.$$.fragment);
			t15 = space();
			div7 = element("div");
			create_component(news_1.$$.fragment);
			t16 = space();
			div8 = element("div");
			create_component(randomvideo.$$.fragment);
			t17 = space();
			div9 = element("div");
			create_component(squirrel.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-zombrn\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div11 = claim_element(nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div2 = claim_element(div10_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			img = claim_element(a0_nodes, "IMG", { src: true, class: true, alt: true });
			a0_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h5 = claim_element(div0_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t2 = claim_text(h5_nodes, t2_value);
			h5_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t4 = claim_text(p0_nodes, t4_value);
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			a1 = claim_element(div0_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t6 = claim_text(a1_nodes, t6_value);
			t7 = claim_text(a1_nodes, " »");
			a1_nodes.forEach(detach_dev);
			t8 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			small = claim_element(p1_nodes, "SMALL", { class: true });
			var small_nodes = children(small);
			t9 = claim_text(small_nodes, "Updated ");
			t10 = claim_text(small_nodes, t10_value);
			small_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div10_nodes);
			div3 = claim_element(div10_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(seasoncalculator.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			t12 = claim_space(div10_nodes);
			div4 = claim_element(div10_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(songbeatcalculator.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			t13 = claim_space(div10_nodes);
			div5 = claim_element(div10_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(songtempochangecalculator.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			t14 = claim_space(div10_nodes);
			div6 = claim_element(div10_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			claim_component(bodybuildingadvice.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			t15 = claim_space(div10_nodes);
			div7 = claim_element(div10_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			claim_component(news_1.$$.fragment, div7_nodes);
			div7_nodes.forEach(detach_dev);
			t16 = claim_space(div10_nodes);
			div8 = claim_element(div10_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			claim_component(randomvideo.$$.fragment, div8_nodes);
			div8_nodes.forEach(detach_dev);
			t17 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			claim_component(squirrel.$$.fragment, div9_nodes);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Cat Pea";
			if (img.src !== (img_src_value = /*videos*/ ctx[0].img)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "card-img-top");
			attr_dev(img, "alt", img_alt_value = /*videos*/ ctx[0].name);
			add_location(img, file$8, 61, 33, 2044);
			attr_dev(a0, "href", a0_href_value = /*videos*/ ctx[0].url);
			add_location(a0, file$8, 61, 10, 2021);
			attr_dev(h5, "class", "card-text");
			add_location(h5, file$8, 63, 12, 2164);
			attr_dev(p0, "class", "card-text");
			add_location(p0, file$8, 64, 12, 2217);
			attr_dev(a1, "href", a1_href_value = /*videos*/ ctx[0].url);
			attr_dev(a1, "class", "btn btn-primary");
			add_location(a1, file$8, 65, 12, 2268);
			attr_dev(small, "class", "text-muted");
			add_location(small, file$8, 66, 33, 2374);
			attr_dev(p1, "class", "card-text");
			add_location(p1, file$8, 66, 12, 2353);
			attr_dev(div0, "class", "card-body p-3");
			add_location(div0, file$8, 62, 10, 2124);
			attr_dev(div1, "class", "card text-white bg-dark shadow");
			add_location(div1, file$8, 60, 8, 1966);
			attr_dev(div2, "class", "col pb-3");
			add_location(div2, file$8, 59, 4, 1935);
			attr_dev(div3, "class", "col pb-3");
			add_location(div3, file$8, 71, 4, 2485);
			attr_dev(div4, "class", "col pb-3");
			add_location(div4, file$8, 75, 4, 2548);
			attr_dev(div5, "class", "col pb-3");
			add_location(div5, file$8, 79, 4, 2613);
			attr_dev(div6, "class", "col pb-3");
			add_location(div6, file$8, 83, 4, 2685);
			attr_dev(div7, "class", "col pb-3");
			add_location(div7, file$8, 87, 4, 2750);
			attr_dev(div8, "class", "col pb-3");
			add_location(div8, file$8, 91, 4, 2801);
			attr_dev(div9, "class", "col pb-3");
			add_location(div9, file$8, 96, 4, 2874);
			attr_dev(div10, "class", "row row-cols-1 row-cols-md-2 row-cols-xl-4");
			add_location(div10, file$8, 56, 4, 1872);
			attr_dev(div11, "class", "container-fluid");
			add_location(div11, file$8, 55, 0, 1838);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div11, anchor);
			append_dev(div11, div10);
			append_dev(div10, div2);
			append_dev(div2, div1);
			append_dev(div1, a0);
			append_dev(a0, img);
			append_dev(div1, t1);
			append_dev(div1, div0);
			append_dev(div0, h5);
			append_dev(h5, t2);
			append_dev(div0, t3);
			append_dev(div0, p0);
			append_dev(p0, t4);
			append_dev(div0, t5);
			append_dev(div0, a1);
			append_dev(a1, t6);
			append_dev(a1, t7);
			append_dev(div0, t8);
			append_dev(div0, p1);
			append_dev(p1, small);
			append_dev(small, t9);
			append_dev(small, t10);
			append_dev(div10, t11);
			append_dev(div10, div3);
			mount_component(seasoncalculator, div3, null);
			append_dev(div10, t12);
			append_dev(div10, div4);
			mount_component(songbeatcalculator, div4, null);
			append_dev(div10, t13);
			append_dev(div10, div5);
			mount_component(songtempochangecalculator, div5, null);
			append_dev(div10, t14);
			append_dev(div10, div6);
			mount_component(bodybuildingadvice, div6, null);
			append_dev(div10, t15);
			append_dev(div10, div7);
			mount_component(news_1, div7, null);
			append_dev(div10, t16);
			append_dev(div10, div8);
			mount_component(randomvideo, div8, null);
			append_dev(div10, t17);
			append_dev(div10, div9);
			mount_component(squirrel, div9, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*videos*/ 1 && img.src !== (img_src_value = /*videos*/ ctx[0].img)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*videos*/ 1 && img_alt_value !== (img_alt_value = /*videos*/ ctx[0].name)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (!current || dirty & /*videos*/ 1 && a0_href_value !== (a0_href_value = /*videos*/ ctx[0].url)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if ((!current || dirty & /*videos*/ 1) && t2_value !== (t2_value = /*videos*/ ctx[0].name + "")) set_data_dev(t2, t2_value);
			if ((!current || dirty & /*videos*/ 1) && t4_value !== (t4_value = /*videos*/ ctx[0].text + "")) set_data_dev(t4, t4_value);
			if ((!current || dirty & /*videos*/ 1) && t6_value !== (t6_value = /*videos*/ ctx[0].name + "")) set_data_dev(t6, t6_value);

			if (!current || dirty & /*videos*/ 1 && a1_href_value !== (a1_href_value = /*videos*/ ctx[0].url)) {
				attr_dev(a1, "href", a1_href_value);
			}

			if ((!current || dirty & /*videos*/ 1) && t10_value !== (t10_value = /*videos*/ ctx[0].changed + "")) set_data_dev(t10, t10_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(seasoncalculator.$$.fragment, local);
			transition_in(songbeatcalculator.$$.fragment, local);
			transition_in(songtempochangecalculator.$$.fragment, local);
			transition_in(bodybuildingadvice.$$.fragment, local);
			transition_in(news_1.$$.fragment, local);
			transition_in(randomvideo.$$.fragment, local);
			transition_in(squirrel.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(seasoncalculator.$$.fragment, local);
			transition_out(songbeatcalculator.$$.fragment, local);
			transition_out(songtempochangecalculator.$$.fragment, local);
			transition_out(bodybuildingadvice.$$.fragment, local);
			transition_out(news_1.$$.fragment, local);
			transition_out(randomvideo.$$.fragment, local);
			transition_out(squirrel.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div11);
			destroy_component(seasoncalculator);
			destroy_component(songbeatcalculator);
			destroy_component(songtempochangecalculator);
			destroy_component(bodybuildingadvice);
			destroy_component(news_1);
			destroy_component(randomvideo);
			destroy_component(squirrel);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$8.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$8($$self, $$props, $$invalidate) {
	const videos = {
		modified: "2020-01-25T13:52:05.520Z",
		changed: "recently",
		name: "Video Library",
		text: "Cat Pea Video Library contains hundreds of interesting, informative, and educational videos.",
		url: "/video?p=0&i=8",
		img: "videos.png"
	};

	let news = [
		{
			date: "2020-01-22T03:38:19.680Z",
			html: "Improved the randomness of Bodybuilding Advice. Items begin repeating after about 84 selections. I added a tiny little sub-progress bar to show when the system will reset, re-shuffle, and begin parading the newly re-shuffled list."
		},
		{
			date: "2020-01-22T03:23:19.680Z",
			html: "Added Preferences Pane to Bodybuilding Advice. Bodybuilding Advice is meant to serve as a starting point for more complex components."
		},
		{
			date: "2020-01-22T03:22:19.680Z",
			html: "Testing <a href=\"https://octicons.github.com/\" rel=\"noopener noreferrer\" target=\"_blank\">octicons</a>. I love the " + octicons.squirrel.toSVG({ "class": "fill-white", "width": 45 }) + " icon."
		}
	];

	function recalculateTimestamps() {
		$$invalidate(0, videos.changed = moment(videos.modified).from(moment()), videos);

		news = news.map(i => {
			i.ago = moment(i.date).from(moment());
			return i;
		});
	}

	setInterval(recalculateTimestamps, 60000);
	recalculateTimestamps();

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("news" in $$props) news = $$props.news;
	};

	return [videos];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$8.name
		});
	}
}

export default Routes;