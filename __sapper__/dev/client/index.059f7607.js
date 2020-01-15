import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, I as onMount, e as element, u as space, o as text, a as claim_element, b as children, f as detach_dev, w as claim_space, p as claim_text, x as attr_dev, g as add_location, h as insert_dev, q as append_dev, r as set_data_dev, J as listen_dev, n as noop, K as destroy_each } from './index.7adaf4b5.js';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var rngBrowser = createCommonjsModule(function (module) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}
});

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

var bytesToUuid_1 = bytesToUuid;

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rngBrowser)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid_1(rnds);
}

var v4_1 = v4;

/* src/routes/index.svelte generated by Svelte v3.16.7 */
const file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	return child_ctx;
}

// (111:4) {#each posts as post}
function create_each_block(ctx) {
	let div2;
	let div1;
	let a;
	let img;
	let img_src_value;
	let img_alt_value;
	let a_href_value;
	let t0;
	let div0;
	let h5;
	let t1_value = /*post*/ ctx[11].title + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			a = element("a");
			img = element("img");
			t0 = space();
			div0 = element("div");
			h5 = element("h5");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a = claim_element(div1_nodes, "A", { href: true });
			var a_nodes = children(a);
			img = claim_element(a_nodes, "IMG", { src: true, class: true, alt: true });
			a_nodes.forEach(detach_dev);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h5 = claim_element(div0_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t1 = claim_text(h5_nodes, t1_value);
			h5_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*post*/ ctx[11].image)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "card-img-top");
			attr_dev(img, "alt", img_alt_value = /*post*/ ctx[11].title);
			add_location(img, file, 114, 31, 1929);
			attr_dev(a, "href", a_href_value = /*post*/ ctx[11].url);
			add_location(a, file, 114, 10, 1908);
			attr_dev(h5, "class", "card-title small");
			add_location(h5, file, 116, 12, 2044);
			attr_dev(div0, "class", "card-body");
			add_location(div0, file, 115, 10, 2008);
			attr_dev(div1, "class", "card bg-secondary text-white fade-in");
			add_location(div1, file, 113, 8, 1847);
			attr_dev(div2, "class", "col mb-4");
			add_location(div2, file, 112, 6, 1816);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, a);
			append_dev(a, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, h5);
			append_dev(h5, t1);
			append_dev(div2, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*posts*/ 1 && img.src !== (img_src_value = /*post*/ ctx[11].image)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*posts*/ 1 && img_alt_value !== (img_alt_value = /*post*/ ctx[11].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if (dirty & /*posts*/ 1 && a_href_value !== (a_href_value = /*post*/ ctx[11].url)) {
				attr_dev(a, "href", a_href_value);
			}

			if (dirty & /*posts*/ 1 && t1_value !== (t1_value = /*post*/ ctx[11].title + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(111:4) {#each posts as post}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div2;
	let div0;
	let t1;
	let div1;
	let button;
	let t2;
	let dispose;
	let each_value = /*posts*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div2 = element("div");
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t1 = space();
			div1 = element("div");
			button = element("button");
			t2 = text("More »");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			button = claim_element(div1_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t2 = claim_text(button_nodes, "More »");
			button_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Cat Pea";
			attr_dev(div0, "class", "row row-cols-1 row-cols-md-2 row-cols-xl-4");
			add_location(div0, file, 108, 4, 1725);
			attr_dev(button, "class", "btn btn-info btn-lg btn-block");
			add_location(button, file, 127, 6, 2195);
			attr_dev(div1, "class", "row p-5");
			add_location(div1, file, 126, 4, 2167);
			attr_dev(div2, "class", "container-fluid");
			add_location(div2, file, 105, 0, 1689);
			dispose = listen_dev(button, "click", /*nextPage*/ ctx[1], false, false, false);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, button);
			append_dev(button, t2);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*posts*/ 1) {
				each_value = /*posts*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
			destroy_each(each_blocks, detaching);
			dispose();
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

function rnd(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}

	return a;
}

function instance($$self, $$props, $$invalidate) {
	const date = new Date();
	const year = date.getFullYear();

	const names = [
		["Catpea"],
		["Advanced"],
		["Technological"],
		["Product"],
		["Emergence"],
		["Architecture"]
	];

	let name = "";

	const makeName = function () {
		name = "";

		for (let potential of names) {
			console.log(names, potential);
			let randomIndex = rnd(0, potential.length - 1);
			let chosen = potential[randomIndex];
			name = name + " " + chosen;
		}
	};

	makeName();
	setInterval(makeName, 1000 * 60);
	let showPerPage = 8;
	let startAt = 0;
	let database = [];
	let posts = [];
	let pageId = v4_1();

	onMount(async function () {
		const res = await fetch("youtube.json");
		const json = await res.json();
		database = json;
		shuffle(database);
		nextPage();
	});

	function nextPage() {
		let exhausted = false;
		if (startAt > database.length - 1) exhausted = true;

		if (exhausted) {
			shuffle(database);
			$$invalidate(0, posts = database.slice(0, showPerPage));
		} else {
			$$invalidate(0, posts = database.slice(startAt, showPerPage));
			startAt = startAt + showPerPage;
		}

		setTimeout(
			function () {
				window.scrollTo({ top: 0, left: 0 });
			},
			2
		);
	}

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("name" in $$props) name = $$props.name;
		if ("showPerPage" in $$props) showPerPage = $$props.showPerPage;
		if ("startAt" in $$props) startAt = $$props.startAt;
		if ("database" in $$props) database = $$props.database;
		if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
		if ("pageId" in $$props) pageId = $$props.pageId;
	};

	return [posts, nextPage];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDU5Zjc2MDcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL2xpYi9ieXRlc1RvVXVpZC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dWlkL3Y0LmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cblxuLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvXG4vLyBpbXBsZW1lbnRhdGlvbi4gQWxzbywgZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIG9uIElFMTEuXG52YXIgZ2V0UmFuZG9tVmFsdWVzID0gKHR5cGVvZihjcnlwdG8pICE9ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0bykpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZihtc0NyeXB0bykgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0bykpO1xuXG5pZiAoZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWF0aFJORygpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cbiIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xudmFyIGJ5dGVUb0hleCA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXhbaV0gPSAoaSArIDB4MTAwKS50b1N0cmluZygxNikuc3Vic3RyKDEpO1xufVxuXG5mdW5jdGlvbiBieXRlc1RvVXVpZChidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IG9mZnNldCB8fCAwO1xuICB2YXIgYnRoID0gYnl0ZVRvSGV4O1xuICAvLyBqb2luIHVzZWQgdG8gZml4IG1lbW9yeSBpc3N1ZSBjYXVzZWQgYnkgY29uY2F0ZW5hdGlvbjogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzE3NSNjNFxuICByZXR1cm4gKFtidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCBcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLCAnLScsXG5cdGJ0aFtidWZbaSsrXV0sIGJ0aFtidWZbaSsrXV0sICctJyxcblx0YnRoW2J1ZltpKytdXSwgYnRoW2J1ZltpKytdXSwgJy0nLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dLFxuXHRidGhbYnVmW2krK11dLCBidGhbYnVmW2krK11dXSkuam9pbignJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnl0ZXNUb1V1aWQ7XG4iLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PT0gJ2JpbmFyeScgPyBuZXcgQXJyYXkoMTYpIDogbnVsbDtcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7XG5cbiAgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuICBybmRzWzZdID0gKHJuZHNbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcbiAgaWYgKGJ1Zikge1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgKytpaSkge1xuICAgICAgYnVmW2kgKyBpaV0gPSBybmRzW2lpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmIHx8IGJ5dGVzVG9VdWlkKHJuZHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHY0O1xuIiwiPHNjcmlwdD5cblxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCB1dWlkdjQgZnJvbSBcInV1aWQvdjRcIjtcblxuXG5cbmNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuZnVuY3Rpb24gcm5kKG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluOyAvL1RoZSBtYXhpbXVtIGlzIGluY2x1c2l2ZSBhbmQgdGhlIG1pbmltdW0gaXMgaW5jbHVzaXZlXG59XG5cbmNvbnN0IG5hbWVzID0gW1xuICBbJ0NhdHBlYSddLFxuICBbJ0FkdmFuY2VkJ10sXG4gIFsnVGVjaG5vbG9naWNhbCddLFxuICBbJ1Byb2R1Y3QnXSxcbiAgWydFbWVyZ2VuY2UnXSxcbiAgWydBcmNoaXRlY3R1cmUnXVxuXTtcbmxldCBuYW1lID0gXCJcIjtcblxuY29uc3QgbWFrZU5hbWUgPSBmdW5jdGlvbigpe1xubmFtZSA9IFwiXCI7XG5mb3IgKGxldCBwb3RlbnRpYWwgb2YgbmFtZXMpe1xuICBjb25zb2xlLmxvZyhuYW1lcywgcG90ZW50aWFsKTtcbiAgbGV0IHJhbmRvbUluZGV4ID0gcm5kKDAscG90ZW50aWFsLmxlbmd0aC0xKVxuICBsZXQgY2hvc2VuID0gcG90ZW50aWFsW3JhbmRvbUluZGV4XTtcbiAgbmFtZSA9IG5hbWUgKyAnICcgKyBjaG9zZW47XG5cbn1cbn07XG5cbm1ha2VOYW1lKCk7IHNldEludGVydmFsKG1ha2VOYW1lLCAxMDAwKjYwKTtcblxuXG5mdW5jdGlvbiBzaHVmZmxlKGEpIHtcbiAgICBmb3IgKGxldCBpID0gYS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgW2FbaV0sIGFbal1dID0gW2Fbal0sIGFbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbn1cblxuXG5sZXQgc2hvd1BlclBhZ2UgPSA4O1xubGV0IHN0YXJ0QXQgPSAwO1xubGV0IGRhdGFiYXNlID0gW107XG5sZXQgcG9zdHMgPSBbXTtcblxubGV0IHBhZ2VJZCA9IHV1aWR2NCgpO1xuXG5vbk1vdW50KGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwieW91dHViZS5qc29uXCIpO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGRhdGFiYXNlID0ganNvbjtcbiAgICBzaHVmZmxlKGRhdGFiYXNlKTtcbiAgICBuZXh0UGFnZSgpXG59KTtcblxuZnVuY3Rpb24gbmV4dFBhZ2UoKXtcblxuICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XG4gIGlmKHN0YXJ0QXQ+KGRhdGFiYXNlLmxlbmd0aC0xKSkgZXhoYXVzdGVkPSB0cnVlO1xuXG4gIGlmKGV4aGF1c3RlZCl7XG4gICAgc2h1ZmZsZShkYXRhYmFzZSk7XG4gICAgcG9zdHMgPSBkYXRhYmFzZS5zbGljZSgwLHNob3dQZXJQYWdlKTtcbiAgfWVsc2V7XG4gICAgcG9zdHMgPSBkYXRhYmFzZS5zbGljZShzdGFydEF0LCBzaG93UGVyUGFnZSk7XG4gICAgc3RhcnRBdCA9IHN0YXJ0QXQgKyBzaG93UGVyUGFnZTtcbiAgfVxuXG5cblxuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgLy9iZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbiAgfSwyKTtcbn1cblxuXG48L3NjcmlwdD5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+Q2F0IFBlYTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG5cblxuXG5cblxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1tZC0yIHJvdy1jb2xzLXhsLTRcIj5cblxuICAgIHsjZWFjaCBwb3N0cyBhcyBwb3N0fVxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIG1iLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYmctc2Vjb25kYXJ5IHRleHQtd2hpdGUgZmFkZS1pblwiPlxuICAgICAgICAgIDxhIGhyZWY9XCJ7cG9zdC51cmx9XCI+PGltZyBzcmM9XCJ7cG9zdC5pbWFnZX1cIiBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIntwb3N0LnRpdGxlfVwiPjwvYT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlIHNtYWxsXCI+e3Bvc3QudGl0bGV9PC9oNT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIHsvZWFjaH1cblxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwicm93IHAtNVwiPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tbGcgYnRuLWJsb2NrXCIgb246Y2xpY2s9e25leHRQYWdlfT5Nb3JlICZyYXF1bzs8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuXG5cbjwvZGl2PlxuIl0sIm5hbWVzIjpbInJuZyIsImJ5dGVzVG9VdWlkIiwidXVpZHY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGVBQWUsR0FBRyxDQUFDLE9BQU8sTUFBTSxDQUFDLElBQUksV0FBVyxJQUFJLE1BQU0sQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3JILHVCQUF1QixPQUFPLFFBQVEsQ0FBQyxJQUFJLFdBQVcsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxJQUFJLFVBQVUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQzNKO0FBQ0EsSUFBSSxlQUFlLEVBQUU7QUFDckI7QUFDQSxFQUFFLElBQUksS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDO0FBQ0EsRUFBRSxjQUFjLEdBQUcsU0FBUyxTQUFTLEdBQUc7QUFDeEMsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsSUFBSSxPQUFPLEtBQUssQ0FBQztBQUNqQixHQUFHLENBQUM7QUFDSixDQUFDLE1BQU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0I7QUFDQSxFQUFFLGNBQWMsR0FBRyxTQUFTLE9BQU8sR0FBRztBQUN0QyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcs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
